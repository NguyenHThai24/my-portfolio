import {
  FaBlenderPhone,
  FaFacebookF,
  FaInstagram,
  FaMailBulk,
  FaMapSigns,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaUsers,
  FaLightbulb,
  FaBolt,
  FaClock,
  FaJava,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
} from "react-icons/fa";
import {
  SiZalo,
  SiPostman,
  SiSwagger,
  SiC,
  SiCplusplus,
  SiPython,
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiOpenai,
  SiClaude,
} from "react-icons/si";
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
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiHtml5 className="text-orange-500" />
                <span>HTML</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiCss className="text-blue-400" />
                <span>CSS</span>
              </li>

            <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
             
                <SiTailwindcss className="text-teal-400" />
                <span>TailwindCSS</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiReact className="text-cyan-400" />
              
                <span>ReactJs</span>
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
                <span className="">NodeJS / ExpressJs</span>
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">ASP.NET Web API</span>
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">RESTful API / JWT Auth</span>
              </li>

              <li className="flex justify-between border-b border-yellow-400/30 pb-1">
                <span className="">SQL Server / MongoDB</span>
              </li>
            </ul>
          </div>

          {/* TOOLS & WORKFLOW */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Tools &amp; Workflow
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaGitAlt className="text-orange-500" />
                <span>Git</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaGithub className="text-white" />
                <span>GitHub</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiPostman className="text-orange-400" />
                <span>Postman</span>
              </li>

              
            </ul>
          </div>

          {/* LANGUAGES */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Languages
            </h3>

            <ul className="space-y-2 text-sm">

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiJavascript className="text-red-400" />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiTypescript className="text-red-400" />
                <span>TypeScript</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiDotnet className="text-purple-400" />
                <span>C#</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiPython className="text-yellow-300" />
                <span>Python</span>
              </li>
            </ul>
          </div>

          {/* SOFT SKILLS */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Soft Skills
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaUsers className="text-yellow-400" />
                <span>Teamwork</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaLightbulb className="text-yellow-400" />
                <span>Problem Solving</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaBolt className="text-yellow-400" />
                <span>Fast Learner</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaClock className="text-yellow-400" />
                <span>Time Management</span>
              </li>
            </ul>
          </div>
          {/* AI */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">AI</h3>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiOpenai className="text-white" />
                <span>ChatGPT</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <span className="text-[#4D6BFE] font-bold text-base leading-none">D</span>
                <span>Deepseek</span>
              </li>

              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <SiClaude className="text-[#DA7756]" />
                <span>Claude</span>
              </li>
            </ul>
          </div>

          {/* OFFICE SKILLS */}
          <div className="border-2 border-yellow-400 bg-[#111] p-4 shadow-[4px_4px_0px_#facc15]">
            <h3 className="mb-3 text-xl font-bold text-yellow-400">
              Office Skills
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaFileWord className="text-blue-500" />
                <span>Microsoft Word</span>
              </li>
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaFileExcel className="text-green-500" />
                <span>Microsoft Excel</span>
              </li>
              <li className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaFilePowerpoint className="text-orange-500" />
                <span>Microsoft PowerPoint</span>
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
                An Giang, Vietnam
              </p>

              <p className="flex items-center gap-2 border-b border-yellow-400/30 pb-1">
                <FaMailBulk className="text-yellow-400" />
                nhthaik02@gmail.com
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
