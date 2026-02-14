import React from 'react';

const clients = () => {
  return (
    <div className="py-20 " id="projects">
      <h1 className="heading">
        {' '}
        A small selection of{' '}
        <span className="text-purple">Recent Projects </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white"></div>
    </div>
  );
};

export default clients;
