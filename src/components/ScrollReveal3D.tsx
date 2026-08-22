"use client";

import { useEffect, useRef, ReactNode, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Parallax3D ──────────────────────────────────────────────────────────────
   Creates a depth-layered parallax effect. Child moves at a different speed 
   than scroll, creating an illusion of depth.
────────────────────────────────────────────────────────────────────────────── */
export function Parallax3D({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 60 * speed, scale: 0.97 },
        {
          y: -60 * speed,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ─── Card3D ──────────────────────────────────────────────────────────────────
   A card that tilts/rotates in 3D as it enters the viewport on scroll
   and features smooth interactive 3D magnetic cursor tilt on hover.
────────────────────────────────────────────────────────────────────────────── */
export function Card3D({
  children,
  className = "",
  rotateFrom = -8,
  rotateTo = 0,
  scaleFrom = 0.92,
  delay = 0,
  enableTilt = true,
}: {
  children: ReactNode;
  className?: string;
  rotateFrom?: number;
  rotateTo?: number;
  scaleFrom?: number;
  delay?: number;
  enableTilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          rotateX: rotateFrom,
          scale: scaleFrom,
          transformPerspective: 1200,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          rotateX: rotateTo,
          scale: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [rotateFrom, rotateTo, scaleFrom, delay]);

  // 3D Magnetic Interactive Cursor Mouse Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt calculations (-12 to 12 degrees max)
    const rotX = (-y / (rect.height / 2)) * 12;
    const rotY = (x / (rect.width / 2)) * 12;

    gsap.to(innerRef.current, {
      rotateX: rotX,
      rotateY: rotY,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!enableTilt || !innerRef.current) return;
    gsap.to(innerRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity", perspective: "1200px" }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}

/* ─── FadeUnfold ──────────────────────────────────────────────────────────────
   Element "unfolds" into view — fades in while rotating from behind.
────────────────────────────────────────────────────────────────────────────── */
export function FadeUnfold({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "up" ? "rotateX" : "rotateY";
    const angle = direction === "right" ? -12 : 12;
    const yShift = direction === "up" ? 50 : 0;
    const xShift = direction === "left" ? 50 : direction === "right" ? -50 : 0;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yShift,
          x: xShift,
          [axis]: angle,
          transformPerspective: 1000,
          transformOrigin:
            direction === "up"
              ? "center bottom"
              : direction === "left"
              ? "left center"
              : "right center",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          [axis]: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}

/* ─── StaggerReveal ───────────────────────────────────────────────────────────
   Container that staggers its direct children with 3D entrance effects.
────────────────────────────────────────────────────────────────────────────── */
export function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const kids = el.children;
    if (!kids.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        kids,
        {
          opacity: 0,
          y: 40,
          rotateX: -6,
          transformPerspective: 1000,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger,
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
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── HeroText3D ──────────────────────────────────────────────────────────────
   Hero text with depth parallax — foreground and background layers move 
   at different speeds for a 3D depth illusion.
────────────────────────────────────────────────────────────────────────────── */
export function HeroText3D({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Initial entrance
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 80,
          rotateX: -10,
          transformPerspective: 1200,
          transformOrigin: "center bottom",
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      // Scroll parallax
      gsap.to(el, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}

/* ─── FloatingOrb ─────────────────────────────────────────────────────────────
   Decorative gradient orb that floats on a parallax layer.
────────────────────────────────────────────────────────────────────────────── */
export function FloatingOrb({
  className = "",
  color = "#0066FF",
  size = 300,
  speed = 0.5,
}: {
  className?: string;
  color?: string;
  size?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -100 * speed,
        x: 20 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
        filter: "blur(60px)",
        willChange: "transform",
      }}
    />
  );
}

/* ─── InteractiveCounter ──────────────────────────────────────────────────────
   Smoothly counts up to a target number with GSAP on scroll reveal.
────────────────────────────────────────────────────────────────────────────── */
export function InteractiveCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          setVal(Math.floor(obj.value));
        },
      });
    });

    return () => ctx.revert();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
