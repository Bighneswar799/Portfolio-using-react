import React from "react";

import html from "../asstes/html.png";
import css from "../asstes/css.png";
import javascript from "../asstes/javascript.png";
import reactImage from "../asstes/react.png";
// import graphql from "../asstes/graphql.png";
import github from "../asstes/github.png";
// import tailwind from "../asstes/tailwind.png";
import bootstrap from "../asstes/bootstrap.png"
import sql from "../asstes/sql.png"
import node from "../asstes/node.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b pt-40 from-gray-800 to-black w-full h-half"
    >
      <div className="max-w-screen-lg mx-auto p-4 py-10 flex flex-col justify-center w-full h-half text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've knowledge with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;