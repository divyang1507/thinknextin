import React from "react";

export const ServiceCard = ({ Icon, title, description }) => {
  return (
    <>
      <div className="bg-black text-white p-5 rounded-xl">
        <div className='text-4xl' >
          <Icon />
        </div>
        <h4 className="text-xl mt-6">{title}</h4>
        <p className="mt-4">{description}</p>
      </div>
    </>
  );
};
