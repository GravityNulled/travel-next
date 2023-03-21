import Head from "next/head";
import Nav from "@/components/nav";
export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Next</title>
        <meta name="description" content="Travel Destination Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
      </main>
    </>
  );
}
