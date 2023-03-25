/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";

const Testimonial: FC<testimonialProps> = ({
  details,
  name,
  testimonial,
  image,
}) => {
  return (
    <div className="px-2 flex flex-col rounded-sm shadow-md w-[400px]">
      <img
        src={image || "/images/profile1.jpg"}
        alt=""
        className="rounded-full w-[100px] h-[100px] object-cover"
      />
      <p className="my-4">{testimonial}</p>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">{name}</p>
        <p className="mt-2 text-sm">{details}</p>
      </div>
    </div>
  );
};

export default Testimonial;
