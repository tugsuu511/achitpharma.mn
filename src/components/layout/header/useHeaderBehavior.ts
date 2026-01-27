"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  scrolledY?: number; // хэдээс scrolled гэж үзэх вэ
  collapseDelta?: number; // expanded үед scroll хөдөлмөгц collapse хийх jitter threshold
};

export function useHeaderBehavior(options: Options = {}) {
  const { scrolledY = 40, collapseDelta = 6 } = options;

  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(0);

  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const lastYRef = useRef(0);
  const scrolledRef = useRef(false);
  const expandedRef = useRef(false);

  useEffect(() => void (scrolledRef.current = scrolled), [scrolled]);
  useEffect(() => void (expandedRef.current = expanded), [expanded]);

  const isCollapsed = scrolled && !expanded;

  const calcCollapsedWidth = useCallback(() => {
    const el = logoRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const innerPx = 16 * 2; // row px-4
    const safe = 2;
    setCollapsedWidth(Math.ceil(rect.width + innerPx + safe));
  }, []);

  const closeAll = useCallback(() => {
    setExpanded(false);
    setSheetOpen(false);
  }, []);

  // scroll listener (ганц)
  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const nextScrolled = y > scrolledY;

      // top руу буцахад expanded автоматаар хаагдана
      if (!nextScrolled && expandedRef.current) setExpanded(false);

      // expanded үед жаахан scroll хөдөлмөгц collapse
      const delta = Math.abs(y - lastYRef.current);
      if (nextScrolled && expandedRef.current && delta > collapseDelta) {
        setExpanded(false);
      }

      // scrolled state зөвхөн өөрчлөгдөх үед update
      if (nextScrolled !== scrolledRef.current) setScrolled(nextScrolled);

      lastYRef.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledY, collapseDelta]);

  // collapsed горимд ороход + resize дээр width хэмжих
  useEffect(() => {
    if (!isCollapsed) return;

    const raf = requestAnimationFrame(calcCollapsedWidth);
    const onResize = () => requestAnimationFrame(calcCollapsedWidth);

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [isCollapsed, calcCollapsedWidth]);

  // ESC → expanded хаах
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return {
    // state
    sheetOpen,
    setSheetOpen,
    scrolled,
    expanded,
    setExpanded,
    collapsedWidth,

    // derived
    isCollapsed,

    // refs
    logoRef,

    // actions
    closeAll,
    calcCollapsedWidth,
  };
}
