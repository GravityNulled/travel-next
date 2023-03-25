import React, { FC } from "react";

const Steps: FC<stepsProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-2xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Steps;
