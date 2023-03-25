/* eslint-disable @next/next/no-img-element */
import Services from "@/components/services";
import Head from "next/head";
import { BsPlayCircle } from "react-icons/bs";
import CityCard from "@/components/citycard";
import { TbLocationFilled } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import Steps from "@/components/steps";

const steps: Array<stepsProps> = [
  {
    icon: <TbLocationFilled />,
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Urna, tortor tempus.",
    title: "Choose Destination",
  },
  {
    icon: <MdPayments />,
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Urna, tortor tempus.",
    title: "Make Payment",
  },
  {
    icon: <AiFillCar />,
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Urna, tortor tempus.",
    title: "Reach Airport on Selected Date",
  },
];

const cities: cityProps[] = [
  {
    image: "/images/nairobi.jpg",
    location: "Nairobi, Kenya",
    cost: "$5,42k",
    days: "10 Days Trip",
    icon: <TbLocationFilled />,
  },
  {
    image: "/images/tokyo.jpg",
    location: "Tokyo, Japan",
    cost: "$4.2k",
    days: "12 Days Trip",
    icon: <TbLocationFilled />,
  },
  {
    image: "/images/london.jpg",
    location: "Nairobi, Kenya",
    cost: "$15k",
    days: "28 Days Trip",
    icon: <TbLocationFilled />,
  },
];

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

const Home = () => {
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
          <img src="/images/person.png" alt="person" />
        </div>

        {/* OFFERS AND SERVICES */}
        <div className="flex flex-col items-center py-10">
          <h2 className="pb-4 text-xl text-gray-600">CATEGORY</h2>
          <p className="text-4xl font-bold font-volkov">
            We Offer Best Services
          </p>
        </div>
        <div className="grid items-center grid-cols-4 ">
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
        <div className="flex flex-col items-center py-10 mt-10">
          <h2 className="pb-4 text-xl text-gray-600">Top Selling</h2>
          <p className="text-4xl font-bold font-volkov">Top Destinations</p>
        </div>
        <div className="grid grid-cols-3">
          {cities.map((c, i) => {
            return (
              <CityCard
                icon={c.icon}
                key={i}
                cost={c.cost}
                days={c.days}
                image={c.image}
                location={c.location}
              />
            );
          })}
        </div>
        <h3 className="pt-10 pb-4 mt-12">Easy and Fast</h3>
        <div className="flex flex-col">
          <p>Book your next trip in 3 easy steps</p>
          {steps.map((step, i) => {
            return (
              <Steps
                key={i}
                description={step.description}
                icon={step.icon}
                title={step.title}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
export default Home;
