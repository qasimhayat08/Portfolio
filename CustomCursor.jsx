import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const moveHandler = (e) => {
      // Check if cursor is within viewport with margin
      const margin = 50;
      const isInViewport = 
        e.clientX >= -margin && 
        e.clientX <= window.innerWidth + margin && 
        e.clientY >= -margin && 
        e.clientY <= window.innerHeight + margin;
      
      setIsVisible(isInViewport);
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Smooth opacity transition
      if (isInViewport) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
      setOpacity(0);
    };

    const mouseEnterHandler = () => {
      setIsVisible(true);
      setOpacity(1);
    };

    window.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x - 50}px, ${position.y - 50}px, 0)`,
        opacity: opacity,
        transition: 'opacity 0.4s ease-in-out'
      }}
    >
      <div 
        className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        style={{
          filter: 'blur(30px)',
          opacity: 0.7,
          boxShadow: `
            0 0 120px rgba(236, 72, 153, 0.6),
            0 0 180px rgba(168, 85, 247, 0.4),
            0 0 240px rgba(99, 102, 241, 0.3)
          `,
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
}