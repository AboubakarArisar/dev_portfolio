import { json } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
export const loader = async () => {
  return json({ ok: true });
};
const Projects = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full h-screen bg-gradient-to-r from-gray-950 via-indigo-950 to-slate-950'>
        <Header />
        <div className='h-screen flex justify-center items-center'>
          <h1 className='text-3xl font-bold w-full '>Coming Soon...</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
