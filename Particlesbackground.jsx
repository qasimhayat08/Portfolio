import React, { useRef, useEffect } from 'react';

export default function Particlesbackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let particles = [];
    let particlesCount = 80;
    let animationId;

    // Neon colors
    const neonColors = [
      '#FF006E', // Neon Pink
      '#FF6B00', // Neon Orange
      '#FFD600', // Neon Yellow
      '#00FF87', // Neon Green
      '#00D4FF', // Neon Cyan
      '#7B2FFF', // Neon Purple
      '#FF00E5', // Neon Magenta
      '#00FFC8', // Neon Mint
    ];

    // Adjust particle count based on screen size
    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 480) return 40; // Mobile
      if (width < 768) return 60; // Tablet
      return 80; // Desktop
    };

    // Adjust particle size based on screen size
    const getParticleSize = () => {
      const width = window.innerWidth;
      if (width < 480) return { min: 1.5, max: 2.5 };
      if (width < 768) return { min: 2, max: 3 };
      return { min: 2, max: 3.5 };
    };

    class Particles {
      constructor() {
        const size = getParticleSize();
        this.radius = Math.random() * (size.max - size.min) + size.min;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.speedX = (Math.random() - 0.5) * 0.4; // Reduced speed for mobile
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.alpha = 0.6 + Math.random() * 0.4;
        // Initialize with proper bounds
        this.resetPosition();
      }

      resetPosition() {
        // Keep particles strictly within canvas bounds with padding
        const padding = this.radius * 2;
        this.x = Math.random() * (canvas.width - padding * 2) + padding;
        this.y = Math.random() * (canvas.height - padding * 2) + padding;
      }

      draw() {
        // Neon glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Inner bright core
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      update() {
        // Update position with boundary checking
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls instead of teleporting
        const padding = this.radius;
        if (this.x < padding) {
          this.x = padding;
          this.speedX = Math.abs(this.speedX); // Bounce right
        } else if (this.x > canvas.width - padding) {
          this.x = canvas.width - padding;
          this.speedX = -Math.abs(this.speedX); // Bounce left
        }

        if (this.y < padding) {
          this.y = padding;
          this.speedY = Math.abs(this.speedY); // Bounce down
        } else if (this.y > canvas.height - padding) {
          this.y = canvas.height - padding;
          this.speedY = -Math.abs(this.speedY); // Bounce up
        }

        this.draw();
      }
    }

    function createParticles() {
      particles = [];
      particlesCount = getParticleCount();
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particles());
      }
    }

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Set canvas size with device pixel ratio for sharper rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
      
      // Recreate particles for new size
      particlesCount = getParticleCount();
      createParticles();
    }

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 300); // Delay for orientation change
    });

    function animate() {
      // Clear with proper dimensions
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        width: '100vw', 
        height: '100vh',
        display: 'block'
      }}
    />
  );
}