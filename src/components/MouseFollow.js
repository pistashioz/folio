"use client";

import { useState, useEffect, useRef } from "react";

const Mousefollow = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [targetPoint, setTargetPoint] = useState({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const ref = useRef();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) { 
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!ref.current || !isActive) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;
      const x = clientX - element.offsetLeft - element.offsetWidth / 2 + window.scrollX;
      const y = clientY - element.offsetTop - element.offsetHeight / 2 + window.scrollY;
      setTargetPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const ease = 0.05; 

    const animate = () => {
      setPoint(prev => {
        const dx = targetPoint.x - prev.x;
        const dy = targetPoint.y - prev.y;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [targetPoint, isActive]);

  if (!isActive) {
    return null;
  }

  const { x, y } = point;

  return (
    <div
      ref={ref}
      className="mousefollow"
      style={{
        position: 'absolute', 
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 0.5s ease-out' 
      }}
    ></div>
  );
};

export default Mousefollow;
