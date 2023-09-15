import { ProjectsType } from "@/types";
import Image from "next/image";
import React from "react";

type ProjectProps = {
  project: ProjectsType;
};

const Project = ({ project }: ProjectProps) => {
  const { title, desc, tools, link, img } = project;
  return (
    <div
      className="flex flex-row text-xl justify-center items-center px-32 m-10"
      data-aos="fade-up"
    >
      <div className="w-1/2">
        <Image src={img} alt={title} className="filterr" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h2 className="text-3xl font-bold text-darkGreen">{title}</h2>
        <p>{desc}</p>
        <h3>Development tools:</h3>
        <ul className="flex flex-row flex-wrap">
          {tools.map((tool) => (
            <li className="p-3 rounded text-mainYellow">{tool}</li>
          ))}
        </ul>
        <div>
          <button className="text-2xl py-5 px-10 bg-gray-500 text-black">
            Check Github
          </button>
          <button className="text-2xl py-5 px-10 bg-gray-500 text-black">
            Check Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
