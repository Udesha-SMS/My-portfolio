import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]"
      ></motion.div>
    </button>
  );
};

export default TabButton;
