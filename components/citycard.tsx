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
    <div className="flex-col gap-4 rounded-md shadow-md">
      <img src={image} alt={location} />
      <div className="flex items-center justify-between">
        <p>{location}</p>
        <p>{cost}</p>
      </div>
      <p>{days}</p>
    </div>
  );
};

export default CityCard;
