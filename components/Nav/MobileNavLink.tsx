import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

type MobileNavLinkProps = {
  href: string;
  title: string;
};

const mobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

export function MobileNavLink({ href, title }: MobileNavLinkProps) {
  return (
    <motion.div
      variants={mobileLinkVariants}
      className="text-white text-4xl uppercase"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}

export default MobileNavLink;
