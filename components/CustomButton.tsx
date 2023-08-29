"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handelClick, btnType }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handelClick}
      type={btnType || "button"}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
