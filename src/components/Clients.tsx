import React from 'react';
import { InfiniteMovingCards } from './ui/infinteMovingCards';
import { companies, testimonials } from '@/data/index';

const clients = () => {
  return (
    <div className="py-20 " id="projects">
      <h1 className="heading">
        Kinds words from
        <span className="text-purple"> satisfied clients </span>
      </h1>

      <div className="flex flex-col items-center justify-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="py-20" id="skills">
          <div className="w-full  flex flex-col items-center justify-center">
            <h1 className="heading text-2xl md:text-3xl ">
              Skills I'm <span className="text-purple">working On</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16">
              {companies.map(({ id, img, name }) => (
                <div
                  key={id}
                  className="flex  gap-2 items-center justify-center"
                >
                  <img src={img} alt={name} className="md:w-10 w-5" />
                  <span className="text-sm font-mono text-center font-bold px-3">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clients;
