import { useEffect, useRef } from "react";
import gsap from "gsap";

function supportsFinePointer() {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const touch = (navigator.maxTouchPoints ?? 0) > 0;
  return fine && !reduced && !touch;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!supportsFinePointer()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Positioning: we animate x/y on the elements themselves.
    gsap.set([dot, ring], {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      opacity: 0,
      force3D: true,
    });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });

    const ringX = gsap.quickTo(ring, "x", { duration: 0.22, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.22, ease: "power3.out" });

    const show = () => gsap.to([dot, ring], { opacity: 1, duration: 0.15, overwrite: true });
    const hide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.15, overwrite: true });

    const onMove = (e: PointerEvent) => {
      show();
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.12, overwrite: true });
      gsap.to(dot, { scale: 1.35, duration: 0.12, overwrite: true });
    };

    const onUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.18, overwrite: true });
      gsap.to(dot, { scale: 1, duration: 0.18, overwrite: true });
    };

    const onLeave = () => hide();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("blur", onLeave);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Render always; CSS hides on non-fine pointers.
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 bg-transparent backdrop-blur-[2px]"
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.35)]"
      />
    </div>
  );
}
