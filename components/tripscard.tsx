/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { BiLeaf } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";

const TripsCard: FC<tripProps> = ({ amount, creater, date, image, title }) => {
  return (
    <div className="w-[400px] h-[500px] flex flex-col">
      <img
        className="rounded-xl object-cover h-[100px] w-full"
        src="/images/baloon.jpg"
        alt="baloon"
      />
      <p className="font-bold text-2xl mt-3">Trip to Maasai Mara</p>
      <p className="text-[#84829A] mt-3">14-29 June | by Omar</p>
      <div className="flex gap-4">
        <BiLeaf />
        <HiOutlineBookmark />
        <FaRegPaperPlane />
      </div>
      <p className="mt-3 text-[#84829A] ">24 people going</p>
      <p className="font-semibold">
        <span className="text-[#8A79DF]">40%</span> completed
      </p>
    </div>
  );
};

export default TripsCard;
