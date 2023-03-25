/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

const CityCard: FC<cityProps> = ({ image, location, cost, days, icon }) => {
  return (
    <div className="flex-col gap-4 rounded-md shadow-xl max-w-[300px]">
      <img
        className="w-[300px] h-[400px] object-cover rounded-t-xl"
        src={image}
        alt={location}
      />
      <div className="flex items-center justify-between px-3 mt-5">
        <p>{location}</p>
        <p>{cost}</p>
      </div>
      <div className="flex items-center px-3">
        {icon}
        <p className="px-3 my-4">{days}</p>
      </div>
    </div>
  );
};

export default CityCard;
