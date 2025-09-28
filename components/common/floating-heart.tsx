import { HeartIcon } from "lucide-react";
import React, { useMemo } from "react";

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      size: Math.random() * 24 + 12, // Random size between 12-36
      left: Math.random() * 90 + 5, // Random position between 5%-95%
      top: Math.random() * 90 + 5, // Random position between 5%-95%
      animationDelay: Math.random() * 3, // Random delay 0-3s
      animationDuration: Math.random() * 3 + 2, // Random duration 2-5s
      opacity: Math.random() * 0.2 + 0.1, // Random opacity 0.1-0.4
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <HeartIcon
          key={heart.id}
          className="absolute text-rose-500 animate-bounce"
          size={heart.size}
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDelay: `${heart.animationDelay}s`,
            animationDuration: `${heart.animationDuration}s`,
            opacity: heart.opacity,
          }}
        />
      ))}
    </div>
  );
}
