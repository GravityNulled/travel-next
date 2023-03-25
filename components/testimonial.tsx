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
        className="rounded-full w-[50px] h-[50px]"
      />
      <p>{testimonial}</p>
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Testimonial;
