import React from "react";
import Icon from "./alertTriangle.svg";

export const Button = ({ text, disabled, onClick }) => {
  return (
    <button
      disabled={disabled || undefined}
      onClick={!disabled ? onClick : undefined}
    >
      <Icon />
      <span>{text}</span>
    </button>
  );
};
