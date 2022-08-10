import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl" src={item.img} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">Web Development</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">{item.feature}</p>
    </div>
  );
};

export default Project;
