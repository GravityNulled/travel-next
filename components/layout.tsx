import React, { ReactNode } from "react";
import Nav from "./nav";

interface pageProps {
  children: ReactNode;
}

export default function Layout({ children }: pageProps) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
