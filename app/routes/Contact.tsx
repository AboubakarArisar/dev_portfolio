import { json } from "@remix-run/node";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const loader = async () => {
  return json({ ok: true });
};
const Contact = () => {
  return (
    <>
      <div className='w-full min-h-screen  flex flex-col bg-gradient-to-r from-gray-950 via-indigo-950 to-slate-950 text-white/80'>
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
              src='https://wallpapers.com/images/hd/professional-web-developer-working-on-a-code-setup-j8ljvi05wloqs3ii.jpg'
              alt='contact image'
              className='w-[500px] h-[500px] object-cover rounded-lg'
            />
          </div>
          <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-[94%] h-full bg-slate-800 rounded-lg p-[10%] flex flex-col  justify-center items-start gap-4'>
              <h1 className=' font-bold text-6xl'>Hello! Let's talk</h1>
              <h4>
                Fill in the form to contact me or send an email to{" "}
                <a
                  className='underline text-blue-400'
                  href='mailto:aboubakar.dev@gmail.com'
                >
                  aboubakar.dev@gmail.com
                </a>
              </h4>
              <form action='' className='w-full'>
                <div className='flex flex-col gap-4 w-full'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='name' className='text-lg font-medium'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='p-4 outline-none bg-transparent border-b'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className='text-lg font-medium'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='p-4 outline-none bg-transparent border-b'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='message' className='text-lg font-medium'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='p-4 outline-none bg-transparent border-b resize-none'
                      rows={5}
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='bg-black hover:bg-slate-700 duration-300 cursor-pointer p-4 rounded-lg  w-1/4'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
