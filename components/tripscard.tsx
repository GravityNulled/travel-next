/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { BiLeaf } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";

const TripsCard: FC<tripProps> = ({ amount, creater, date, image, title }) => {
  return (
    <div className="w-[400px] h-[500px] flex flex-col shadow-lg rounded-xl">
      <img
        className="rounded-xl object-cover h-[300px]"
        src="/images/baloon.jpg"
        alt="baloon"
      />
      <p className="mx-3 mt-3 text-2xl font-bold">Trip to Maasai Mara</p>
      <p className="text-[#84829A] mt-2 mx-3">14-29 June | by Omar</p>
      <div className="flex gap-4 mx-3 mt-3">
        <BiLeaf size={30} />
        <HiOutlineBookmark size={30} />
        <FaRegPaperPlane size={30} />
      </div>
      <p className="mt-3 text-[#84829A] mx-3">24 people going</p>
      <p className="mx-3 mt-3 font-semibold">
        <span className="text-[#8A79DF]">40%</span> completed
      </p>
    </div>
  );
};

export default TripsCard;
