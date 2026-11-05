import html5 from "../assets/html-5.png";
import css3 from "../assets/css-3.png";
import javascript from "../assets/javascript2.webp";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs2.png";
import nodejs from "../assets/nodejs.svg";
import expressjs from "../assets/express-js.png";
import postgres from "../assets/postgres2.webp";
import mongodb from "../assets/mongodb2.png";
import tailwindcss from "../assets/tailwindcss2.png";
import cppLogo from "../assets/C++.png";
import github from "../assets/github.webp";
import gitimg from "../assets/gitimg.png";

function Skills() {
  const skills = [
    { name: "HTML", image: html5 },
    { name: "CSS", image: css3 },
    { name: "JavaScript", image: javascript },
    { name: "TypeScript", image: typescript },
    { name: "React JS", image: reactjs },
    { name: "Node JS", image: nodejs },
    { name: "Express JS", image: expressjs },
    { name: "PostgreSQL", image: postgres },
    { name: "MongoDB", image: mongodb },
    { name: "Tailwind CSS", image: tailwindcss },
    { name: "Git", image: gitimg },
    { name: "GitHub", image: github },
  ];

  return (
    <section id='skills' className="py-12 px-4 scroll-mt-24 relative">

      <h2 className="gradient-text text-center text-3xl md:text-4xl mb-10">
        Skills
      </h2>

      <div className="max-w-full mx-auto rounded-2xl p-6 md:p-10">
        <div className="glass-effect p-5 sm:p-6 md:p-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-15 place-items-center font-semibold mb-10">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Box */}
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Skill Name */}
                <p className="mt-3 text-sm md:text-base">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}




export default Skills;