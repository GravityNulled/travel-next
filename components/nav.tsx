/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
type links = {
  title: string;
  path: string;
};

const navLinks: Array<links> = [
  {
    title: "Destination",
    path: "/destination",
  },
  {
    title: "Hotel",
    path: "/hotel",
  },
  {
    title: "Flights",
    path: "/flights",
  },
  {
    title: "Bookings",
    path: "/bookings",
  },
  {
    title: "Login",
    path: "/Login",
  },
];

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between mx-auto md:w-5/6 py-10  container">
      <img src="/images/Logo.png" alt="" />
      <div className="flex items-center gap-10">
        {navLinks.map((nav, i) => {
          return (
            <li
              onClick={() => router.push(nav.path)}
              key={i}
              className="text-xl list-none cursor-pointer"
            >
              {nav.title}
            </li>
          );
        })}
        <button
          onClick={() => router.push("/singup")}
          className="border-[2px] px-8 font-semibold py-2 bg-yellow-400 rounded-lg "
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
