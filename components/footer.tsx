import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="grid grid-cols-5 py-10 mt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Jadoo.</h1>
        <p className="text-[#5E6282] w-[300px]">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">Company</h1>
        <div className="flex flex-col">
          <p className="text-[#5E6282]">About</p>
          <p className="text-[#5E6282]">Career</p>
          <p className="text-[#5E6282]">Mobile</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">Contact</h1>
        <div className="flex flex-col">
          <p className="text-[#5E6282]">Help/FAQ</p>
          <p className="text-[#5E6282]">Press</p>
          <p className="text-[#5E6282]">Affilates</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-bold">More</h1>
        <div className="flex flex-col">
          <p className="text-[#5E6282]">Airlinefees</p>
          <p className="text-[#5E6282]">AirLine</p>
          <p className="text-[#5E6282]">Low fare trips</p>
        </div>
      </div>
      <Image src="/images/Outbound.png" alt="mobile" width={150} height={150} />
    </footer>
  );
};

export default Footer;
