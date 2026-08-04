import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)"
  },
  in: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  },
  out: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)"
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 0.8
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
