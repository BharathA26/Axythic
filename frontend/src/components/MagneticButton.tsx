import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href: string;
}

export default function MagneticButton({
  children,
  className = "",
  style,
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    controls.start({
      x: position.x,
      y: position.y,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
    });
  }, [position, controls]);

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={controls}
      className={`${className}`}
      style={style}
      onClick={onClick}
      href={href}
    >
      {children}
    </motion.a>
  );
}
