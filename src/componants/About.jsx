import React from "react";
import profile_img from "../assets/profile_img.jpg";

const About = () => {
  return (
    <div
      id="About Me"
      className="m-[80px_170px] pt-[20px] flex flex-col justify-center items-center gap-[80px] max-md:m-[30px_50px] max-md:items-start"
    >
      <h1 className="p-[0px_30px] text-[80px] font-[600] max-md:text-[50px] max-md:p-[0px]">
        About{" "}
        <span className="bg-[linear-gradient(270deg,_hsl(var(--primary))_40%,_#FFF)] bg-clip-text text-transparent">
          Me
        </span>
      </h1>
      <div className="mb-[80px] flex gap-[80px] max-md:flex-col">
        <img
          src={profile_img}
          alt=""
          className="w-[350px] h-[500px] object-cover rounded-[20px] max-md:hidden"
        />

        <div className="text-[24px] font-[500] flex flex-col gap-[20px] max-md:text-[18px]">
          <p>
            Hi, My name is Chavanvit Nongpong. I'm graduated from the Faculty of
            Engineering at Kasetsart University.
          </p>
          <p>
            During my final year of study, I'm interested in computer
            programming. Since then, I've been developing my skills in building
            websites and software applications.
          </p>
          <p>
            I'm enjoy writing clean and functional code that makes people's
            lives easier. I'm always eager to learn new technologies and grow as
            a developer.
          </p>
          <p>
            I'm committed to improving myself and ready to take on new
            challenges that will make me grow professionally.
          </p>
        </div>
      </div>
      {/* <div className="mb-[80px] flex flex-row">
        <div className="hover:border-[2px] hover:border-white px-[40px] py-[20px] rounded-[50px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)] cursor-pointer">
          hi
        </div>
        <div className="hover:border-[2px] hover:border-white px-[40px] py-[20px] rounded-[50px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)] cursor-pointer">
          hi
        </div>
      </div> */}
    </div>
  );
};

export default About;
