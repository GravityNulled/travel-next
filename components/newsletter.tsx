import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#DFD7F9] h-[400px] w-full rounded-tl-[150px]">
      <div className="flex flex-col items-center gap-36">
        <p className="text-3xl font-bold text-center font-poppins w-[700px] mx-auto mt-10 text-[#5E6282]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Your email"
            className="w-[400px] h-[67px] border rounded-lg outline-none"
          />
          <button className="h-[67px] rounded-lg px-10 py-3 bg-[#FF946D] w-[180] text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
