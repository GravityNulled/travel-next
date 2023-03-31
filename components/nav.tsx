/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession, signOut } from "next-auth/react";

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
];

const Nav = () => {
  const router = useRouter();

  const { data: session } = useSession();

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
        {session ? (
          ""
        ) : (
          <button className="text-xl" onClick={() => router.push("/login")}>
            Login
          </button>
        )}
        {session ? (
          <button
            onClick={() => signOut()}
            className="border-[2px] px-8 font-semibold font-sans py-2 bg-[#F1A501] text-white rounded-lg "
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => router.push("/register")}
            className="border-[2px] px-8 font-semibold font-sans py-2 bg-[#F1A501] text-white rounded-lg "
          >
            Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
