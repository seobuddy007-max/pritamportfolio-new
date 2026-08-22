"use client";

import { useEffect, useRef } from "react";

export default function BackgroundInteractive3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with target lerp
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
    };

    // Scroll offset
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Create 3D particles mesh
    const particleCount = Math.min(Math.floor(width / 20), 65);
    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 500 + 100, // 3D depth layer
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    // Render loop
    const render = () => {
      // Smooth lerp mouse positioning
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw interactive ambient gradient light spot following cursor
      const ambientGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 2.5
      );
      ambientGlow.addColorStop(0, "rgba(0, 102, 255, 0.12)");
      ambientGlow.addColorStop(0.5, "rgba(56, 189, 248, 0.05)");
      ambientGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw secondary interactive gold ambient glow spot offset by scroll
      const goldGlow = ctx.createRadialGradient(
        width - mouse.x * 0.5,
        mouse.y * 0.8 + (scrollY * 0.1) % height,
        0,
        width - mouse.x * 0.5,
        mouse.y * 0.8 + (scrollY * 0.1) % height,
        300
      );
      goldGlow.addColorStop(0, "rgba(245, 158, 11, 0.08)");
      goldGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = goldGlow;
      ctx.fillRect(0, 0, width, height);

      // Render 3D particles & connecting web
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Update position with subtle 3D scroll drift
        p.x += p.vx;
        p.y += p.vy + Math.sin(scrollY * 0.002 + i) * 0.15;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse distance effect
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let scale3d = 1;
        let alpha = p.baseAlpha;

        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius;
          scale3d = 1 + factor * 1.5;
          alpha = Math.min(1, p.baseAlpha + factor * 0.5);

          // Push particles slightly on mouse proximity for 3D interactive physics
          p.x -= (dx / dist) * factor * 0.8;
          p.y -= (dy / dist) * factor * 0.8;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * scale3d, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${alpha})`;
        ctx.fill();

        // Connect nearby particles with glowing lines
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 110) {
            const lineAlpha = (1 - pdist / 110) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-90"
      style={{ willChange: "transform" }}
    />
  );
}
