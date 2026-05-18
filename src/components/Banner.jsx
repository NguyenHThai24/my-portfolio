import imgThai from "../assets/imgThai.png";
import CV from "../../src/assets/NGUYEN-HOANG-THAI.pdf";
const Banner = () => {
  return (
    <section className="relative mx-auto grid min-h-130 w-full max-w-7xl grid-cols-1 overflow-hidden md:grid-cols-2">
      {/* LEFT */}
      <div className="bg-[#2f2f2f] px-4 py-3 text-white sm:pl-5 md:pl-7 lg:pl-14">
        <p className="text-sm text-white">
          <span className="text-2xl font-bold uppercase md:text-3xl">
            PORTFOLIO
          </span>{" "}
          | HOANG THAI NGUYEN
        </p>
        <div className="flex h-full flex-col items-start justify-center text-center md:items-start md:text-left">
          <p className="mb-2 text-gray-200">Hello</p>

          <h1 className="text-5xl font-bold text-yellow-400">I'm Thai</h1>
          <div className="my-7 max-w-sm text-justify text-base leading-relaxed text-gray-300">
            <p>
              I’m a Software Engineering graduate with a passion for building
              clean and modern web interfaces. I enjoy combining design and
              development to create engaging user experiences.
            </p>
          </div>

          <a
            href={CV}
            download="NGUYEN-HOANG-THAI-CV.pdf"
            className="relative z-10 w-fit min-w-30 overflow-hidden border border-yellow-400 px-6 py-2 font-medium text-yellow-400 transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-yellow-400 before:transition-transform before:duration-500 hover:text-black hover:before:scale-x-100"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* RIGHT */}
      <div
        className="relative flex h-full flex-col items-end justify-center bg-yellow-400 text-2xl leading-none text-black sm:text-4xl md:items-center md:text-4xl md:text-[5rem] lg:text-5xl lg:text-[6rem]"
        style={{ fontFamily: '"Creepster", cursive' }}
      >
        {/* GRAPHIC */}
        <div className="absolute top-1/2 left-16 -translate-y-1/2 md:static md:translate-y-0 lg:-mt-15">
          <span className="inline-block -translate-y-4 -rotate-6">W</span>
          <span className="inline-block translate-y-2 rotate-3">E</span>
          <span className="inline-block -translate-y-1 -rotate-2">B</span>
          <span className="inline-block translate-y-3 rotate-6">S</span>
          <span className="inline-block translate-y-1 -rotate-3">I</span>
          <span className="inline-block -translate-y-3 rotate-2">T</span>
          <span className="inline-block translate-y-2 -rotate-6">E</span>
        </div>

        {/* DESIGNER */}
        <div className="absolute top-1/2 right-16 -translate-y-1/2 md:static md:translate-y-0">
          <span className="inline-block -translate-y-2 rotate-4">D</span>
          <span className="inline-block translate-y-3 -rotate-1">E</span>
          <span className="inline-block -translate-y-2 rotate-6">V</span>
          <span className="inline-block translate-y-2 -rotate-4">E</span>
          <span className="inline-block -translate-y-1 rotate-3">L</span>
          <span className="inline-block translate-y-3 -rotate-6">O</span>
          <span className="inline-block -translate-y-2 rotate-2">P</span>
          <span className="inline-block translate-y-2 -rotate-4">E</span>
          <span className="inline-block -translate-y-2 rotate-6">R</span>
        </div>
      </div>
      {/* CIRCLE DECORATION */}
      <div className="absolute -bottom-30 left-1/2 hidden h-85 w-85 -translate-x-1/2 min-[1000px]:block lg:h-100 lg:w-100">
        {/* yellow arc */}
        <div className="absolute inset-0 rounded-full border-8 border-yellow-400 border-r-transparent border-b-transparent"></div>

        {/* black arc */}
        <div className="absolute inset-0 rotate-40 rounded-full border-8 border-black border-b-transparent border-l-transparent lg:rotate-34"></div>
      </div>
      {/* IMAGE */}
      <img
        src={imgThai}
        alt="profile"
        className="absolute bottom-0 left-1/2 z-20 hidden h-64 -translate-x-1/2 object-contain sm:h-80 lg:block lg:h-107.5"
      />
    </section>
  );
};

export default Banner;
