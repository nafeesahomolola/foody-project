import React from 'react'
import quote from "../assets/quote.png"
import albert from "../assets/albert.png";

function Feedback() {
  return (
    <div className="w-full py-7">
      <div className="container mx-auto px-8 py-7 flex items-center justify-between">
        <div className="flex flex-col w-[40%] items-start gap-3">
          <h1 className="text-5xl font-medium font-Commissioner">
            What Coustomer Say Us
          </h1>
          <p className="text-zinc-600 text-lg font-normal font-DM leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <p className="text-zinc-950 text-lg font-normal font-DM leading-normal px-10 py-4 bg-amber-300 rounded-full justify-center items-center gap-2.5 inline-flex">
            Give your Valuable Feedback
          </p>
          <h2 className="text-zinc-950 text-lg font-medium font-DM leading-normal">
            See All Feedback
          </h2>
        </div>

        <div className="flex items-start flex-col gap-3 w-[550px] h-90 bg-white rounded-tl-lg rounded-tr-lg rounded-br-lg shadow border">
          <div className='px-12 mr-7 py-4 relative'>
            <img src={quote} className='w-[3rem] absolute left-0 top-1' alt="" />
            <p className="text-zinc-600 text-xl font-normal font-DM leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>

            <aside className="flex items-center gap-2">
              <img src={albert} alt="" />
              <span className="flex flex-col gap-1">
                <h2 className="text-zinc-950 text-3xl font-normal font-Commissioner leading-9">
                  Albert Flores
                </h2>
                <p className="text-zinc-600 text-sm font-normal font-DM leading-none">
                  albert.cruz@example.com
                </p>
              </span>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback