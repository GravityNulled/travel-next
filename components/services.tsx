/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

const Services: FC<detailsProps> = (details: detailsProps) => {
  return (
    <div className="flex flex-col hover:shadow-md px-2 hover:rounded-br-3xl hover:scale-110 duration-300 transition-all items-center text-center w-[200px]">
      <img
        src={details.image}
        alt="dish"
        className="object-contain w-[70px] h-[70px]"
      />
      <h3 className="py-3 font-semibold">{details.title}</h3>
      <p className="py-3">{details.desc}</p>
    </div>
  );
};

export default Services;
