import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
export const meta: MetaFunction = () => {
  return [
    { title: "Aboubakar Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
    </>
  );
}
