/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface links {
  title: string;
  path: string;
}

const navLinks: Array<links> = [
  {
    title: "Destination",
    path: "/destination",
  },
  {
    title: "Hotel",
    path: "/hotels",
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
    path: "/login",
  },
];

const Nav = () => {
  const router = useRouter();
  return (
    <nav
      className={`container flex items-center justify-between py-10 mx-auto md:w-5/6 font-poppins`}
    >
      <img
        src="/images/Logo.png"
        alt=""
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
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
          onClick={() => router.push("/signup")}
          className="border-[2px] px-8 font-semibold font-sans py-2 bg-[#F1A501] text-white rounded-lg "
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
