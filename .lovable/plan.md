

## Plan: GSAP Cursor Animation & Global Background Animation

### Current State
- Static SVG cursor defined in CSS (`src/index.css`)
- Canvas-based particle animation exists but only renders in Hero section
- GSAP is already installed and configured for scroll animations

### Changes

#### 1. GSAP Custom Cursor Component
Create `src/components/CustomCursor.tsx`:
- Two circular div elements: outer ring (larger, follows slower) and inner dot (smaller, follows faster)
- GSAP `quickTo` for smooth, physics-based cursor following with easing
- Magnetic effect on hover over interactive elements (buttons, links)
- Scale animation on click
- Hide on mobile/touch devices

#### 2. Remove CSS Cursor Styles
Update `src/index.css`:
- Remove the inline SVG cursor declarations from `html`, `body`, and interactive elements
- Set `cursor: none` globally to hide default cursor

#### 3. Global Background Animation
Update `src/pages/Index.tsx`:
- Move `ParticleField` outside sections so it covers the entire page
- Position it as a fixed background layer

#### 4. Add Cursor to App
Update `src/pages/Index.tsx`:
- Import and render `CustomCursor` component at root level

### Technical Details

**Cursor Implementation:**
```tsx
// Uses GSAP quickTo for performant, smooth following
const xTo = gsap.quickTo(cursorRef, "x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(cursorRef, "y", { duration: 0.4, ease: "power3" });

// Magnetic effect pulls cursor toward hoverable elements
// Click scales down the cursor briefly
```

**Background:**
- Fixed position canvas covering viewport
- Lower z-index (-20) to sit behind all content
- Subtle opacity to not distract from content

