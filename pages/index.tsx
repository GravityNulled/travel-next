/* eslint-disable @next/next/no-img-element */
import Services from "@/components/services";
import Head from "next/head";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";

interface detailsProps {
  image?: string;
  title: string;
  desc: string;
}

const items: Array<detailsProps> = [
  {
    image: "/images/satellite-dish.png",
    title: "Calculated Weather ",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: "/images/plane.png",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: "/images/mic.png",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    image: "/images/gear.png",
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Travel Next</title>
        <meta name="description" content="Travel Destination Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container p-4 mx-auto md:w-5/6 font-poppins">
        <div className="grid items-center grid-cols-2">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-[#DF6951]">
              Best Destinations around the world
            </h1>
            <p className="font-bold text-7xl text-[#181E4B] xl:w-[600px] font-volkov">
              Travel, enjoy and live a new and full life
            </p>
            <p className="text-[#5E6282] text-xl">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-4 mt-4 ">
              <button className="px-3 py-4 text-xl text-white bg-[#F1A501] border rounded-xl">
                Find out more
              </button>
              <div className="flex items-center gap-3 cursor-pointer">
                <BsPlayCircle size={40} fill="#DF6951" />
                <p>Play Demo</p>
              </div>
            </div>
          </div>
          {/* <Image src={"/images/person.png"} alt="person"  className="object-cover"/> */}
          <img src="/images/person.png" alt="person" />
        </div>

        {/* OFFERS AND SERVICES */}
        <div className="flex flex-col py-10 items-center">
          <h2 className="text-gray-600 text-xl pb-4">CATEGORY</h2>
          <p className="font-bold font-volkov text-4xl">
            We Offer Best Services
          </p>
        </div>
        <div className="grid grid-cols-4 items-center ">
          {items.map((item, i) => {
            return (
              <Services
                image={item.image}
                title={item.title}
                desc={item.desc}
                key={i}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
