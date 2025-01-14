import { json } from "@remix-run/node";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const loader = async () => {
  return json({ ok: true });
};
const Contact = () => {
  return (
    <>
      <div className='w-full min-h-screen  flex flex-col'>
        <Header />
        <div className='w-full min-h-screen flex flex-col p-8 gap-8'>
          <div className='w-full flex justify-between items-center h-screen p-8'>
            <div className='w-1/2 flex flex-col gap-8'>
              <h1 className='font-bold text-5xl'>
                Let's create something special
              </h1>
              <h3 className='text-2xl font-bold'>
                Contact me for queries and Collaboration
              </h3>
            </div>
            <img
              src='https://d3kqdc25i4tl0t.cloudfront.net/articles/content/542_221504_tech.hero.jpg'
              alt='contact image'
              className='w-[500px] h-[500px] object-cover rounded-lg'
            />
          </div>
          <div>jfl;dkfj;sdjf</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
