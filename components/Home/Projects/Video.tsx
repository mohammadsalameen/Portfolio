import React from "react";

interface IProps {
    src: string;
    type: string;
    title: string;
    features?: string;
}
const Video = ({src, type, title, features} : IProps) => {
  return (
    <div>
      <video controls width={800} height={650} className="rounded-lg">
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
        {title}
      </h1>
      <h1 className="pt-2 font-medium text-white/80">{features}</h1>
    </div>
  );
};

export default Video;
