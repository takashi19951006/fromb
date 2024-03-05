import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: scrollY > 100 ? 1 : 0,
      y: scrollY > 100 ? 0 : 50,
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

  return (
    <div style={{ height: "200vh" }} className="z-50">
      <motion.div
        style={{ width: "100%", background: "blue", color: "white" }}
        animate={controls}
      >
        <h1>This is a scrolling animation!</h1>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
