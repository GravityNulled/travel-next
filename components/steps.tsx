import React, { FC } from "react";

const Steps: FC<stepsProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      {icon}
      <div className="flex gap-2">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Steps;
