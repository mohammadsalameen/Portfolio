"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { CertificationsList } from "@/constant/constant";

const Certifications = () => {
  return (
    <div id="certifications" className="text-white pt-16 pb-16">
      <h1 className="text-center text-white text-2xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-cyan-300">Certifications</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {CertificationsList.map((cert, i) => {
          return (
            <Tilt key={cert.id} scale={1.1} transitionSpeed={400}>
              <div
                className="bg-[#14134145] text-center w-56 h-48 rounded-3xl flex flex-col items-center
                  justify-center shadow-lg transition hover:scale-105 p-4"
                data-aos="flip-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={i * 100}
              >
                <div className="text-5xl mb-3 text-gray-300">
                  <cert.icon />
                </div>
                <p className="text-purple-400 font-semibold text-sm">{cert.name}</p>
                <p className="text-gray-400 mt-1 text-xs">{cert.date}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
