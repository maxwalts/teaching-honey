import { useState } from 'react';


export default function TrackingCircle({ delay }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const D = [delay, delay * 2, delay * 3, delay * 4, delay * 5, delay * 6];
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY + window.scrollY - 50,
        });
      }}
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
      }}>
      {D.map((d, i) => <Circle position={position} delay={d} color={COLORS[i % COLORS.length - 1]} />)}

    </div>
  );
}

function Circle({ position, delay, color }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: `${color}`,
      borderRadius: '50%',
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: `transform ${delay}ms ease-in-out`,
      left: -10,
      top: -10,
      width: 20,
      height: 20,
    }} />
  )
}