import React from 'react';

const Currently = () => {
  return (
    <div className="w-full px-3 pt-16 md:px-10 flex flex-col">
      <h2 className="w-fit mx-4 sm:mx-0 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        What I'm Currently Doing
      </h2>
      <ul className="my-6 text-lg ml-6 list-disc">
        <li>Looking for a full-time job in full-stack development</li>
        <li>Building Kineticx</li>
        <li>Learning Go for backend development</li>
      </ul>
    </div>
  );
};

export default Currently;
