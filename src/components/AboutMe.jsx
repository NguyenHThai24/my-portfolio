import {
  FaBlenderPhone,
  FaFacebookF,
  FaInstagram,
  FaMailBulk,
  FaMapSigns,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import SkillCircle from "./SkillCircle";

const AboutMe = () => {
  return (
    <section className="mx-auto max-w-7xl bg-black px-4 py-10 sm:px-7 md:py-14">
      <div className="mx-auto max-w-6xl text-white">
        {/* TITLE */}
        <h2 className="mb-2 text-3xl font-semibold">
          About <span className="text-yellow-400">Me</span>
        </h2>

        <div className="mb-8 h-1 w-20 bg-yellow-400"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* EDUCATION */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-4 text-xl font-bold text-yellow-400">
              Education
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="text-gray-400">Course</span>
                <span>10/2020 – 03/2025</span>
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="text-gray-400">Major</span>
                <span>Software Engineering</span>
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="text-gray-400">University</span>
                <span>Can Tho University</span>
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="text-gray-400">GPA</span>
                <span className="font-semibold text-yellow-400">
                  3.18 / 4.00
                </span>
              </li>
            </ul>
          </div>

          {/* DESIGN TOOLS */}
          {/* <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Design Tools
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <SkillCircle
                label="Ps"
                percent={60}
                color="#31A8FF"
                bg="#001E36"
              />
              <SkillCircle
                label="Ai"
                percent={70}
                color="#FF9A00"
                bg="#330000"
              />
              <SkillCircle
                label="Canva"
                percent={80}
                color="#06B6D4"
                bg="#082f49"
              />
            </div>
          </div> */}

          {/* DESIGN SKILLS */}
          {/* <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Design Skills
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="border-b border-yellow-400/30 pb-1">Typography</li>
              <li className="border-b border-yellow-400/30 pb-1">
                Layout Design
              </li>
              <li className="border-b border-yellow-400/30 pb-1">
                Color Theory
              </li>
              <li className="border-b border-yellow-400/30 pb-1">
                Brand Identity
              </li>
            </ul>
          </div> */}

          {/* FRONTEND */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Frontend Developer
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">HTML</span>
                {/* <span>80%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">CSS</span>
                {/* <span>75%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">JavaScript</span>
                {/* <span>65%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">React / Tailwind</span>
                {/* <span className="text-yellow-400">60%</span> */}
              </li>
            </ul>
          </div>
          {/* BACKEND */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Backend Developer
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">NodeJS</span>
                {/* <span>80%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">ASP.NET Web API</span>
                {/* <span>75%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">SQL Server</span>
                {/* <span className="text-yellow-400">60%</span> */}
              </li>
            </ul>
          </div>
          {/* AI */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">AI</h3>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">ChatGPT</span>
                {/* <span>80%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">Deepseek</span>
                {/* <span>75%</span> */}
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">Claude</span>
                {/* <span className="text-yellow-400">60%</span> */}
              </li>
            </ul>
          </div>

          {/* OFFICE SKILLS */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Office Skills
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="border-b border-yellow-400/30 pb-1">
                Microsoft Word
              </li>
              <li className="border-b border-yellow-400/30 pb-1">
                Microsoft Excel
              </li>
              <li className="border-b border-yellow-400/30 pb-1">
                Microsoft PowerPoint
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <div className="mb-3 flex justify-between">
              <h3 className="text-xl font-bold text-yellow-400">Contact</h3>

              <div className="flex items-center gap-2 text-black">
                <a className="rounded-full bg-white p-1.5 shadow shadow-blue-600 hover:scale-110">
                  <FaFacebookF />
                </a>

                <a className="rounded-full bg-white p-1.5 shadow shadow-fuchsia-600 hover:scale-110">
                  <FaInstagram />
                </a>

                <a className="rounded-full bg-white p-1.5 shadow shadow-blue-500 hover:scale-110">
                  <SiZalo />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <p className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaMapSigns className="text-yellow-400" />
                Can Tho City, Vietnam
              </p>

              <p className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaMailBulk className="text-yellow-400" />
                nghthai242k2@gmail.com
              </p>

              <p className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaBlenderPhone className="text-yellow-400" />
                0333929901
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
