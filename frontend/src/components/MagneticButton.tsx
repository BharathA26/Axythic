import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  as: Component = "button",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | any>(null);
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

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={controls}
      className={`${className}`}
      onClick={onClick}
      {...(href ? { href } : {})}
    >
      {children}
    </MotionComponent>
  );
}
