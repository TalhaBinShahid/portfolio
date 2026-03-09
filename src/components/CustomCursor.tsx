import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useIsMobile } from '@/hooks/use-mobile';

export function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const outer = cursorOuterRef.current;
    const inner = cursorInnerRef.current;
    if (!outer || !inner) return;

    // GSAP quickTo for smooth physics-based following
    const outerX = gsap.quickTo(outer, 'x', { duration: 0.5, ease: 'power3' });
    const outerY = gsap.quickTo(outer, 'y', { duration: 0.5, ease: 'power3' });
    const innerX = gsap.quickTo(inner, 'x', { duration: 0.15, ease: 'power2' });
    const innerY = gsap.quickTo(inner, 'y', { duration: 0.15, ease: 'power2' });

    const onMouseMove = (e: MouseEvent) => {
      outerX(e.clientX);
      outerY(e.clientY);
      innerX(e.clientX);
      innerY(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(outer, { scale: 0.7, duration: 0.15, ease: 'power2.out' });
      gsap.to(inner, { scale: 0.5, duration: 0.15, ease: 'power2.out' });
    };

    const onMouseUp = () => {
      gsap.to(outer, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.4)' });
      gsap.to(inner, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.4)' });
    };

    // Magnetic effect on interactive elements
    const interactiveSelector = 'a, button, [role="button"], input, select, textarea, .cursor-pointer';
    
    const onEnterInteractive = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      gsap.to(outer, {
        width: rect.width + 20,
        height: rect.height + 20,
        borderRadius: '12px',
        borderColor: 'hsl(187 100% 50% / 0.6)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(inner, { scale: 0, duration: 0.2 });

      // Slight magnetic pull
      const magnetMove = (ev: MouseEvent) => {
        const dx = ev.clientX - centerX;
        const dy = ev.clientY - centerY;
        gsap.to(target, { x: dx * 0.15, y: dy * 0.15, duration: 0.3 });
      };
      target.addEventListener('mousemove', magnetMove as EventListener);
      target.dataset.magnetHandler = 'true';
      (target as any)._magnetMove = magnetMove;
    };

    const onLeaveInteractive = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      gsap.to(outer, {
        width: 40,
        height: 40,
        borderRadius: '50%',
        borderColor: 'hsl(187 100% 50% / 0.4)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(inner, { scale: 1, duration: 0.2 });
      gsap.to(target, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });

      if ((target as any)._magnetMove) {
        target.removeEventListener('mousemove', (target as any)._magnetMove);
        delete (target as any)._magnetMove;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const addInteractiveListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };

    addInteractiveListeners();

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      addInteractiveListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid hsl(187 100% 50% / 0.4)',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'hsl(187 100% 50%)',
          boxShadow: '0 0 15px hsl(187 100% 50% / 0.6)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
