import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    
    const hoverCheck = (e) => {
      const target = e.target;
      setIsPointer(
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.tagName.toLowerCase() === 'input' || 
        target.tagName.toLowerCase() === 'textarea'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', hoverCheck);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', hoverCheck);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference bg-white rounded-full transition-all duration-75 ease-out"
        style={{ 
          width: '8px',
          height: '8px',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          opacity: isPointer ? 0 : 1 
        }}
      />
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference border-2 border-white rounded-full transition-all duration-300 ease-out flex items-center justify-center"
        style={{ 
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          transform: `translate3d(${position.x - (isPointer ? 30 : 20)}px, ${position.y - (isPointer ? 30 : 20)}px, 0)`,
          opacity: isPointer ? 1 : 0.6,
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
