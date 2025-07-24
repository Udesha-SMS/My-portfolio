import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] border-[#8B5CF6]"
    : "text-[#ADB7BE] border-slate-600 hover:border-[#06B6D4]";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
