import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen pt-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-half">
        <div className="pl-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ex nisi quam facere nihil culpa commodi ducimus repudiandae
          rem alias reprehenderit. Numquam illo ea excepturi obcaecati 
          quidem quam velit libero pariatur explicabo debitis laudantium
          repellat id nam quas reiciendis necessitatibus, voluptates 
          optio incidunt unde? Voluptatem quisquam rem amet, hic quidem 
          non maxime quas impedit dolores placeat, tempore dolor totam
          velit atque ducimus voluptas! Dolor fugit rerum, 
          sunt autem consequatur quia! Earum?
        </p>

        <br />

        <p className="text-xl mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};

export default About;