import React from "react";
import ResumeCard from "./ResumeCard";
import { EducationCard, WorkCard } from "@/constant/constant";

const Resume = () => {
  return (
    <div className="pt-20 pb-15">
      <div className="w[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part  */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            {WorkCard.map((card) => {
              return (
                <ResumeCard
                  key={card.id}
                  Icon={card.icon}
                  role={card.role}
                  description={card.description}
                />
              );
            })}
          </div>
        </div>
        {/* Education Part  */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            {EducationCard.map((card) => {
              return (
                <ResumeCard
                  key={card.id}
                  Icon={card.icon}
                  role={card.role}
                  date={card.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
