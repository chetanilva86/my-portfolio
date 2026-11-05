import { TypeAnimation } from 'react-type-animation';



function Hero() {
  return (
    <section id='hero' className="mt-28 sm:mt-40 md:mt-56 lg:mt-70 scroll-mt-90 min-h-screen">
      <div className="flex flex-col items-center justify-center h-full text-center px-6">


        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Hi, I'm Chetan ilva
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "JavaScript Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="text-lg sm:text-xl md:text-2xl font-semibold gradient-text"
        />

        <p className="font-heading mt-6 mx-2 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-2xl sm:mx-4 md:mx-7 text-center text-(--foreground-secondary)">
          {/* I am a passionate developer currently learning modern web technologies. I enjoy building responsive websites and full-stack applications using JavaScript, React, Node.js, Express, and PostgreSQL. My goal is to create real-world projects and continuously improve my software engineering skills. */}
          I’m a passionate full-stack developer with a strong focus on building modern, responsive, and user-friendly web interfaces. I enjoy working with JavaScript, React, and Tailwind CSS on the frontend, while also building reliable backend applications using Node.js, Express, MongoDB, and PostgreSQL. I love turning ideas into real-world applications and continuously improving my development skills. </p>
      </div>

    </section>
  );
}


export default Hero;