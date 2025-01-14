import type { MetaFunction } from "@remix-run/node";
// import Bubble from "@typebot.io/react";

import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Footer } from "~/components/Footer";
export const meta: MetaFunction = () => {
  return [
    { title: "Aboubakar Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div
        className='w-full min-h-screen relative bg-gradient-to-r from-gray-950 via-indigo-950 to-slate-950
'
      >
        {/* <div className='absolute bottom-2 right-2'>
          <Bubble
            typebot='customer-support-58fui86'
            theme={{ button: { backgroundColor: "#0042DA" } }}
          />
        </div> */}

        <Header />

        <Hero />
        <Footer />
      </div>
    </>
  );
}
