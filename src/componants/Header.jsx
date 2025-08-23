import React from "react";
import profile_img from "../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div id="Home" className="mt-[80px] flex flex-col items-center gap-[25px]">
      <img
        src={profile_img}
        className="m-[30px] mb-[5px] w-[350px] h-[350px] object-cover rounded-full max-md:mt-[100px] max-md:w-[260px] max-md:h-[260px]"
        style={{
          animation: "fade-in 0.7s ease-out 0.2s backwards",
        }}
      />
      <h1
        className="w-[70%] text-center text-[90px] font-[600] max-md:mt-[50px] max-md:w-[90%] max-md:text-[50px]"
        style={{
          animation: "fade-in 0.7s ease-out 0.4s backwards",
        }}
      >
        <p className="text-glow bg-[linear-gradient(90deg,_hsl(var(--primary))_40%,_#FFF)] bg-clip-text text-transparent">
          Hi, I'm <span className="text-white">Momo</span>
        </p>
        <p>
          Software{" "}
          <span className="text-glow bg-[linear-gradient(270deg,_hsl(var(--primary))_40%,_#FFF)] bg-clip-text text-transparent">
            Developer
          </span>
        </p>
      </h1>

      <p
        className="w-[50%] text-center text-[24px] leading-[40px] max-md:text-[18px] max-md:leading-[32px] max-md:m-[10px_0px]"
        style={{
          animation: "fade-in 0.7s ease-out 0.6s backwards",
        }}
      >
        Welcome To My Personal Portfolio
      </p>
      <div
        className="mb-[0px] flex items-center gap-[25px] text-[24px] font-[500] max-md:gap-[16px] max-md:text-[18px] max-md:font-[500] max-md:mb-[50px]"
        style={{
          animation: "fade-in 0.7s ease-out 0.8s backwards",
        }}
      >
        <AnchorLink href="#Projects" offset={50}>
          <div className="hover:border-[2px] hover:border-white active:scale-95 px-[40px] py-[20px] rounded-[50px] bg-[linear-gradient(270deg,_hsl(var(--primary))_50%,_#000)] cursor-pointer max-md:px-[30px] max-md:py-[15px]">
            My Projects
          </div>
        </AnchorLink>
        <a
          href="/Resume_Chavanvit_Nongpong.pdf"
          download="Resume_Chavanvit_Nongpong.pdf"
          className="hover:border-primary hover:text-white active:scale-95 px-[40px] py-[20px] rounded-[50px] border-[2px] border-white text-[#b08ffc] cursor-pointer max-md:px-[30px] max-md:py-[15px]"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
