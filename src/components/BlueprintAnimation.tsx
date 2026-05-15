"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  {
    id: 1,
    label: "Phone Rings",
    stat: "97% of homeowners say response speed influences who they hire",
    source: "CallRail 2026",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    id: 2,
    label: "AI Answers Instantly",
    stat: "78% of buyers choose the first business to respond",
    source: "Scorpion/CallRail",
    icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  },
  {
    id: 3,
    label: "Qualifies the Lead",
    stat: "62% of customers call before making a purchase",
    source: "Invoca",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
  {
    id: 4,
    label: "Books the Job",
    stat: "Each missed call costs $300–$1,200",
    source: "Invoca",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    id: 5,
    label: "Texts You Details",
    stat: "Less than 3% of voicemail callers leave a message",
    source: "Invoca",
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
  },
  {
    id: 6,
    label: "Confirmation Calls",
    stat: "Without confirmation reminders, up to 30% of appointments end in no-shows",
    source: "AAFP/industry data",
    icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
  },
  {
    id: 7,
    label: "Asks for Review",
    stat: "85% of callers who can’t reach you never call back",
    source: "Phone2/industry research",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  },
];

export default function BlueprintAnimation() {
  const [activeNode, setActiveNode] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Cycle through nodes
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [isVisible]);

  // Ellipse layout for desktop
  const getNodePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const rx = 280;
    const ry = 140;
    return {
      x: 350 + rx * Math.cos(angle),
      y: 180 + ry * Math.sin(angle),
    };
  };

  return (
    <div ref={ref} className="w-full">
      {/* Desktop: ellipse layout */}
      <div className="hidden md:block relative">
        <svg viewBox="0 0 700 360" className="w-full" xmlns="http://www.w3.org/2000/svg">
          {/* Dot grid background */}
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.04)" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="700" height="360" fill="url(#dotgrid)" />

          {/* Connection lines */}
          {nodes.map((_, i) => {
            const from = getNodePosition(i, nodes.length);
            const to = getNodePosition((i + 1) % nodes.length, nodes.length);
            const isActive = i === activeNode;
            return (
              <line
                key={`line-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "#00d4ff" : "rgba(255,255,255,0.08)"}
                strokeWidth={isActive ? 2 : 1}
                className="transition-all duration-500"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const pos = getNodePosition(i, nodes.length);
            const isActive = i === activeNode;
            return (
              <g key={node.id}>
                {/* Glow ring */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 32 : 28}
                  fill={isActive ? "rgba(0,212,255,0.08)" : "rgba(255,255,255,0.03)"}
                  stroke={isActive ? "#00d4ff" : "rgba(255,255,255,0.1)"}
                  strokeWidth={isActive ? 1.5 : 0.5}
                  filter={isActive ? "url(#glow)" : undefined}
                  className="transition-all duration-500"
                />
                {/* Icon */}
                <svg
                  x={pos.x - 10}
                  y={pos.y - 10}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isActive ? "#00d4ff" : "rgba(255,255,255,0.5)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500"
                >
                  <path d={node.icon} />
                </svg>
                {/* Label */}
                <text
                  x={pos.x}
                  y={pos.y + 44}
                  textAnchor="middle"
                  fill={isActive ? "#00d4ff" : "rgba(255,255,255,0.4)"}
                  fontSize="10"
                  fontWeight="500"
                  className="transition-all duration-500"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Pulse dot traveling along active line */}
          {(() => {
            const from = getNodePosition(activeNode, nodes.length);
            const to = getNodePosition(
              (activeNode + 1) % nodes.length,
              nodes.length
            );
            return (
              <circle r="4" fill="#00d4ff" filter="url(#glow)">
                <animateMotion
                  dur="1.2s"
                  repeatCount="1"
                  path={`M${from.x},${from.y} L${to.x},${to.y}`}
                />
              </circle>
            );
          })()}
        </svg>

        {/* Floating stat tooltip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-surface border border-border rounded-lg px-4 py-2.5 max-w-md"
          >
            <p className="text-sm text-cyan font-medium">
              {nodes[activeNode].stat}
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              Source: {nodes[activeNode].source}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden space-y-0">
        {nodes.map((node, i) => {
          const isActive = i === activeNode;
          return (
            <div key={node.id} className="flex items-start gap-4">
              {/* Vertical connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${
                    isActive
                      ? "border-cyan bg-cyan/10 shadow-[0_0_12px_rgba(0,212,255,0.3)]"
                      : "border-border bg-surface"
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isActive ? "#00d4ff" : "rgba(255,255,255,0.4)"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={node.icon} />
                  </svg>
                </div>
                {i < nodes.length - 1 && (
                  <div
                    className={`w-px h-8 transition-all duration-500 ${
                      isActive ? "bg-cyan" : "bg-border"
                    }`}
                  />
                )}
              </div>
              {/* Content */}
              <div className="pb-6">
                <p
                  className={`text-sm font-medium transition-colors duration-500 ${
                    isActive ? "text-cyan" : "text-text-muted"
                  }`}
                >
                  {node.label}
                </p>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-text-muted mt-1 leading-relaxed"
                    >
                      {node.stat}{" "}
                      <span className="text-text-muted/60">
                        — {node.source}
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
