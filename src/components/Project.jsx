import urlShortner2 from "../assets/snippy2.png";
import library from "../assets/library-project.png";
import Blogify from "../assets/BLOGIFY.png";
import sourcecode2 from "../assets/sourcecode2.png";
import www from "../assets/world-wide-web.png";

const projects = [
  {
    title: "Snippy",
    description:
      "Developed a URL shortening platform using Node.js, Express.js, EJS, and MongoDB. Features secure authentication with Google Auth and JWT, password hashing, Generated Qr code and protected user-specific URL management.",
    techStack: [
      "JavaScript",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: urlShortner2,
    githubUrl: "https://github.com/chetanilva86/snippy.git",
    liveUrl: "https://snippy-ip1d.onrender.com/",
  },
  {
    title: "Library Management System",
    description:
      "A digital library management platform designed to simplify book inventory management, borrowing, and return processes. Users can easily search for books, track availability, and manage records through an organized interface.",
    techStack: ["CSS", "JavaScript", "Express", "React.js", "Node.js", "MongoDB"],
    image: library,
    githubUrl: "https://github.com/chetanilva86/Library-Management-system-.git",
  },
  {
    title: "Blogify",
    description:
      "A dynamic blogging platform that allows users to write, publish, edit, and manage blog posts. Features secure Google Auth authentication, JWT, personalized content management, and an intuitive interface for content creation.",
    techStack: ["JavaScript","CSS", "Node.js", "Express", "MongoDB"],
    image: Blogify,
    githubUrl: "https://github.com/chetanilva86/Blogify.git",
  },

];

function Project() {
  return (
    <section id="projects" className="mt-20 sm:mt-28 md:mt-40 lg:mt-50 py-12 px-4 scroll-mt-24">
      <h2 className="gradient-text text-center mb-7 text-2xl sm:text-3xl md:text-4xl font-bold">Projects</h2>

      <div className="container max-w-full mx-auto rounded-2xl p-6 md:p-10 min-h-[90vh]">
        <div className="glass-effect p-5 sm:p-6 md:p-10 max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-slate-700 rounded-2xl p-5
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
              transition-all duration-400"
              >
                <h3 className="text-center font-semibold">{project.title}</h3>

                <p className="mt-5 text-(--foreground-secondary)">{project.description}</p>

                <h4 className="mt-5">Tech Stack</h4>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm border rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 overflow-hidden rounded-xl border">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-50 object-cover"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-33 items-center rounded-2xl border px-2 transition hover:border-blue-500 hover:text-blue-500"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <img
                      src={sourcecode2}
                      alt="Source code preview"
                      className="w-6 h-6 rounded"
                    />
                    <p className="ml-2 text-sm">SourceCode</p>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-20 items-center rounded-2xl border px-2 transition hover:border-blue-500 hover:text-blue-500"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <img
                      src={www}
                      alt="Source code preview"
                      className="w-5 h-5 rounded"
                    />
                      <p className="ml-2 text-sm">Live</p>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
