'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

type CursorState = 'default' | 'pointer' | 'view';

function lerp(a: number, b: number, factor: number): number {
  return a + (b - a) * factor;
}

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return true;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  );
}

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isTouch, setIsTouch] = useState(true);

  const detectCursorTarget = useCallback((target: EventTarget | null) => {
    if (!target || !(target instanceof HTMLElement)) {
      setCursorState('default');
      return;
    }

    const el = target.closest(
      'a, button, [data-cursor="pointer"], [data-cursor="view"]'
    ) as HTMLElement | null;

    if (!el) {
      setCursorState('default');
      return;
    }

    if (el.getAttribute('data-cursor') === 'view') {
      setCursorState('view');
    } else {
      setCursorState('pointer');
    }
  }, []);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Inner dot follows instantly
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      detectCursorTarget(e.target);
    };

    const onMouseOver = (e: MouseEvent) => {
      detectCursorTarget(e.target);
    };

    const animate = () => {
      outerPos.current.x = lerp(outerPos.current.x, mouse.current.x, 0.12);
      outerPos.current.y = lerp(outerPos.current.y, mouse.current.y, 0.12);

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x}px, ${outerPos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, [isTouch, detectCursorTarget]);

  if (isTouch) return null;

  // Outer ring styles based on state
  const outerStyles: React.CSSProperties = {
    width:
      cursorState === 'view' ? 80 : cursorState === 'pointer' ? 60 : 40,
    height:
      cursorState === 'view' ? 80 : cursorState === 'pointer' ? 60 : 40,
    borderRadius: '50%',
    border:
      cursorState === 'view'
        ? 'none'
        : cursorState === 'pointer'
          ? '1px solid rgba(201, 169, 110, 0.5)'
          : '1px solid rgba(245, 240, 235, 0.3)',
    backgroundColor:
      cursorState === 'view'
        ? 'rgba(10, 10, 10, 0.8)'
        : cursorState === 'pointer'
          ? 'rgba(201, 169, 110, 0.05)'
          : 'transparent',
    transition: 'width 300ms, height 300ms, border 300ms, background-color 300ms',
  };

  // Inner dot styles based on state
  const innerStyles: React.CSSProperties = {
    width: cursorState === 'pointer' ? 4 : 8,
    height: cursorState === 'pointer' ? 4 : 8,
    borderRadius: '50%',
    backgroundColor:
      cursorState === 'pointer'
        ? '#C9A96E'
        : '#F5F0EB',
    opacity: cursorState === 'view' ? 0 : 1,
    transition: 'width 300ms, height 300ms, background-color 300ms, opacity 300ms',
  };

  return (
    <>
      {/* Outer ring - lerped trail */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center"
        style={outerStyles}
        aria-hidden="true"
      >
        {cursorState === 'view' && (
          <span className="font-mono text-[10px] text-crema tracking-widest uppercase">
            VIEW
          </span>
        )}
      </div>

      {/* Inner dot - instant follow */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={innerStyles}
        aria-hidden="true"
      />
    </>
  );
}
