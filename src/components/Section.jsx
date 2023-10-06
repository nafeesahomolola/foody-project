import React from 'react'
import Abouts from '../Ui/Abouts';
import star from "../assets/star.svg"



function Section() {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto py-7  px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-zinc-950 text-5xl font-medium font-Commissioner">
            What's Special About this Website?
          </h1>
          <p className="text-zinc-600 text-lg font-normal font-DM leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-zinc-600 text-lg font-normal font-DM leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <p className="text-zinc-950 text-lg font-normal font-DM px-6 py-2 rounded-[50px] shadow border-2 w-fit border-zinc-950 leading-normal">
            Read More
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 relative">
          <Abouts
            img="./easy.png"
            desc="Easy to order"
            txt="Lorem Ipsum is simply dummy text of the printing"
          />
          <Abouts
            img="./home.png"
            desc="Home delivery"
            txt="Lorem Ipsum is simply dummy text of the printing"
          />
          <Abouts
            img="./fasted.png"
            desc="Fasted delivery"
            txt="Lorem Ipsum is simply dummy text of the printing"
          />
          <Abouts
            img="./24.png"
            desc="24/8 Service"
            txt="Lorem Ipsum is simply dummy text of the printing"
          />
          <Abouts
            img="./best.png"
            desc="Best quality"
            txt="Lorem Ipsum is simply dummy text of the printing"
          />
          <Abouts
            img="./super.png"
            desc="Supper offer"
            txt="Lorem Ipsum is simply dummy text of the printing"
          />

          <img src={star} className='absolute right-0 -bottom-20' alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section