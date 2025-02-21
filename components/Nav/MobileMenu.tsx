import { motion } from "motion/react";
import { MobileNavLink } from "./MobileNavLink";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Who we are", path: "/" },
  { label: "Scholarships", path: "/scholarships" },
  { label: "Legal Services", path: "/legal-services" },
];

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export function MobileNavMenu() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
      }}
      exit={{
        scaleY: 0,
        transition: { delay: 0.5, duration: 0.5, ease: [0.12, 0, 0.39, 1] },
      }}
      className="fixed top-0 left-0 w-full h-screen origin-top z-[98] bg-green"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col items-center justify-center h-full uppercase text-4xl space-y-8 text-white"
      >
        {navItems.map((item, index) => (
          <div className="overflow-hidden" key={index}>
            <MobileNavLink href={item.path} title={item.label} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
