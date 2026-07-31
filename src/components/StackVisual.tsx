"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, Server, Cloud, ShieldCheck } from "lucide-react";

const layers = [
  { label: "Security", sub: "Auth · RBAC · Compliance", icon: ShieldCheck, depth: 0 },
  { label: "Cloud", sub: "AWS · Azure · GCP", icon: Cloud, depth: 1 },
  { label: "Backend", sub: "APIs · Databases · Logic", icon: Server, depth: 2 },
  { label: "Frontend", sub: "React · Next.js · UI", icon: Globe, depth: 3 },
];

export default function StackVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 80,
    damping: 20,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 80,
    damping: 20,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative h-[420px] w-full [perspective:1400px] select-none"
    >
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 w-[320px] rounded-2xl glass-card px-5 py-4"
            style={{
              transform: `translate3d(-50%, calc(-50% + ${(1.5 - layer.depth) * 62}px), ${layer.depth * 40}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(99,102,241,0.18))",
                }}
              >
                <layer.icon className="w-4 h-4 text-cyan-soft" />
              </div>
              <div>
                <div className="font-display text-sm font-medium text-text-primary">
                  {layer.label}
                </div>
                <div className="text-[0.72rem] text-text-muted font-mono">{layer.sub}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
