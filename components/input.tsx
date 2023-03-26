import React, { FC } from "react";

const Input: FC<inputProps> = ({
  color,
  placeholder,
  value,
  handleChange,
  height,
  width,
}) => {
  return (
    <input
      type="text"
      color={color}
      className={`w-[${width}] h-[${height}] border px-2 rounded-xl outline-none`}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
