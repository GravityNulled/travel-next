/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

interface cityProps {
  image: string;
  location: string;
  cost: string;
  days: string;
}

const CityCard: FC<cityProps> = ({ image, location, cost, days }) => {
  return (
    <div className="flex-col gap-4 rounded-md shadow-xl max-w-[300px]">
      <img className="w-[300px] h-[400px] object-cover rounded-t-xl" src={image} alt={location} />
      <div className="flex items-center justify-between px-2">
        <p>{location}</p>
        <p>{cost}</p>
      </div>
      <p>{days}</p>
    </div>
  );
};

export default CityCard;

