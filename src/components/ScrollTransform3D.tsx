"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollTransform3D({
  children,
  className = "",
  rotateXStart = -18,
  rotateYStart = 0,
  scaleStart = 0.88,
  zStart = -80,
}: {
  children: ReactNode;
  className?: string;
  rotateXStart?: number;
  rotateYStart?: number;
  scaleStart?: number;
  zStart?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          rotateX: rotateXStart,
          rotateY: rotateYStart,
          scale: scaleStart,
          z: zStart,
          transformPerspective: 1200,
          transformOrigin: "center top",
          opacity: 0.3,
        },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          z: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [rotateXStart, rotateYStart, scaleStart, zStart]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export function Scroll3DTiltLandmark({
  children,
  className = "",
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "center";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rotY = direction === "left" ? 14 : direction === "right" ? -14 : 0;
    const rotX = 10;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          rotateY: rotY,
          rotateX: rotX,
          scale: 0.9,
          transformPerspective: 1000,
          opacity: 0,
        },
        {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
