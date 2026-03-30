// CursorFollower.jsx
// Two-layer cursor: outer ring (spring lag) + inner dot (instant)
// Uses framer-motion's useSpring for inertia

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const SPRING = { damping: 28, stiffness: 180, mass: 0.6 };
const DOT_SPRING = { damping: 40, stiffness: 400 };

const CursorFollower = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, SPRING);
  const ringY = useSpring(mouseY, SPRING);
  const dotX  = useSpring(mouseX, DOT_SPRING);
  const dotY  = useSpring(mouseY, DOT_SPRING);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    // Detect hovering over interactive elements
    const onOver = (e) => {
      const el = e.target.closest("a,button,input,textarea,[data-cursor]");
      setHovered(!!el);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [visible, mouseX, mouseY]);

  if (typeof window === "undefined") return null; // SSR guard

  return (
    <div className="hidden lg:block pointer-events-none select-none">
      {/* Outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 z-[9998]"
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.6 : 1,
        }}
        transition={{ opacity: { duration: .15 }, scale: { duration: .2 } }}
      >
        <div
          className="w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/70 transition-all duration-200"
          style={{
            backdropFilter: hovered ? "none" : undefined,
            background: hovered ? "rgba(52,211,153,.08)" : "transparent",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 z-[9999]"
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: .1 }}
      >
        <div className="w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
      </motion.div>
    </div>
  );
};

export default CursorFollower;