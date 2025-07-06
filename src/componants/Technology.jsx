import React from "react";
import JS from "../assets/JavaScript.svg";
import TS from "../assets/TypeScript.svg";
import GO from "../assets/Go.svg";
import Docker from "../assets/Docker.svg";
import k8s from "../assets/Kubernetes.svg";
import Tailwind from "../assets/Tailwind CSS.svg";
import react from "../assets/React.svg";
import Nextjs from "../assets/Nextjs.svg";
import Nodejs from "../assets/Nodejs.svg";
import Gcloud from "../assets/GCloud.svg";
import Grpc from "../assets/Grpc.svg";
import Postgres from "../assets/PostgresSQL.svg";
import Mongo from "../assets/MongoDB.svg";

const Technology = () => {
  return (
    <div
      id="Technologies"
      className="m-[80px_170px] pt-[20px] flex flex-col justify-center items-center gap-[80px] max-md:m-[50px_70px] max-md:pt-[20px] max-md:items-start"
    >
      <h1 className="p-[0px_30px] text-[80px] font-[600] bg-[linear-gradient(90deg,_hsl(var(--primary))_0%,_#FFF)] bg-clip-text text-transparent max-md:text-[50px] max-md:p-[0px]">
        Techno<span className="text-white">logies</span>
      </h1>
      <div className="mb-[80px] flex flex-wrap gap-[60px] max-md:gap-[20px]">
        {[
          JS,
          TS,
          GO,
          Tailwind,
          react,
          Nextjs,
          Nodejs,
          Grpc,
          Docker,
          k8s,
          Gcloud,
          Postgres,
          Mongo,
        ].map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt=""
            className={`bg-white w-[100px] h-[100px] rounded-full hover:scale-110 transition max-md:w-[80px] max-md:h-[80px]`}
          />
        ))}
        {/* <img
          src={JS}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={TS}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={GO}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Tailwind}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={react}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Nextjs}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Nodejs}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Grpc}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Docker}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={k8s}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Gcloud}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Postgres}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        />
        <img
          src={Mongo}
          alt=""
          className="w-[100px] h-[100px] rounded-full hover:scale-110 transition"
        /> */}
      </div>
    </div>
  );
};

export default Technology;
