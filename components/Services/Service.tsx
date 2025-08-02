import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <p className="text-center text-gray-300 max-w-xl mx-auto lg:text-2xl font-bold mb-10">
        I offer a range of development services to help bring your ideas to life
        — from responsive web design to full-stack web applications built with
        modern technologies.
      </p>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div>
          <ServiceCard
            icon="/images/s2.png"
            name="Web Development"
            description="Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js."
          />
        </div>
        <div>
            <ServiceCard 
            icon = '/images/s2.png'
            name = 'IOT Development'
            description = 'Creating innovative IoT solutions that connect devices and enhance user experiences through smart technology.'
              />
        </div>
      </div>
    </div>
  );
};

export default Services;
