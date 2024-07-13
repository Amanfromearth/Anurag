  import React from 'react';

  const Currently = () => {
    return (
      <div className="w-full pt-16 flex flex-col">
        <h2 className="w-fit scroll-m-20 border-b  text-xl md:text-2xl font-semibold tracking-tight">
          What I'm Currently Doing
        </h2>
        <ul className="my-6 md:text-lg ml-6 list-disc">
          <li>Looking for a full-time job</li>
          <li>Building Kineticx</li>
          <li>Learning Go for backend development</li>
        </ul>
      </div>
    );
  };

  export default Currently;