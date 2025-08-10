import React from "react";
import Video from "./Video";

const Projects = () => {
  return (
    <div id="works" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16" data-aos="zoom-in" data-aos-anchor-placement="top-center">
        <Video
          src="/videos/v2v.mp4"
          type="video/mp4"
          title="V2V and V2I Communications"
          features="Arduino C, ESP32, Sensors and FireBase"
        />
        <Video
          src="/videos/TS.mp4"
          type="video/mp4"
          title="Tending System"
          features="Next.js, Tailwind CSS, MongoDB, Formik and JWT Authentication"
        />
        <Video
          src="/videos/CAS.mp4"
          type="video/mp4"
          title="Clinic Appointment System"
          features="React.js and Tailwind CSS"
        />
        <Video
          src="/videos/Saraha.mp4"
          type="video/mp4"
          title="Saraha App using Backend only"
          features="Node.js, Express.js, MongoDB, JWT Authentication and     Nodemailer"
        />
      </div>
    </div>
  );
};

export default Projects;
