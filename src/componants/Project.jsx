import React from "react";
import merrymatch from "../assets/MerryMatch.png";
import minor from "../assets/MinorCineplex.png";
import emoshop from "../assets/EmoShop.png";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectData = [
  {
    name: "Minor Cineplex",
    img: minor,
    Website: "https://minor-cineplex-nxsm.vercel.app/",
    github: "https://github.com/pipooreo/minor-cineplex.git",
    tags: ["React", "Nodejs", "Postgres"],
  },
  {
    name: "Merry Match",
    img: merrymatch,
    Website: "https://merry-match-ten.vercel.app/",
    github: "https://github.com/MomyPoko/Merry-Match.git",
    tags: ["Nextjs", "Nodejs", "MongoDB"],
  },
  {
    name: "Emo Shop",
    img: emoshop,
    Website: "https://emoshop.vercel.app/",
    github: "https://github.com/MomyPoko/Emo-Shop.git",
    tags: [
      "React",
      "Golang",
      "gRPC",
      "Postgres",
      "MongoDB",
      "Redis",
      "K8s",
      "Docker",
    ],
  },
];

const Project = () => {
  return (
    <div
      id="Projects"
      className="m-[80px_170px] pt-[40px] flex flex-col justify-center items-center gap-[80px] max-md:m-[50px_50px] max-md:pt-[20px] max-md:items-start"
    >
      <h1 className="p-[0px_30px] text-[80px] font-[600] max-md:text-[50px] max-md:p-[0px]">
        My{" "}
        <span className="bg-[linear-gradient(270deg,_hsl(var(--primary))_40%,_#FFF)] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-20">
        {ProjectData.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 h-[calc(100%-16rem)] flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-1 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground lg:px-2 lg:py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1"> {project.name}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.Website}
                      target="_blank"
                      className="pointer-events-none text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="bg-white mb-[80px] grid grid-cols-[1fr_1fr_1fr] gap-[40px] max-md:grid-cols-[1fr_1fr] max-md:mb-[0px] max-md:gap-[20px]">
        {ProjectData.map((data, index) => (
          <div
            key={index}
            className="relative w-[420px] h-[250px] rounded-[10px] overflow-hidden group shadow-lg max-md:w-[100%] max-md:h-[200px]"
          >
            <img
              src={data.img}
              alt=""
              className="w-full h-full object-cover object-top transition duration-300 group-hover:brightness-50 "
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center gap-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-[20px]">{data.name}</div>
              <div className="flex items-center justify-center gap-4 max-md:flex-col">
                <a
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-[10px] hover:bg-gray-200"
                >
                  GitHub
                </a>
                <button className="bg-[#1e2b33] text-white px-4 py-2 rounded-[10px] hover:bg-[#34424d]">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div></div>
    </div>
  );
};

export default Project;
