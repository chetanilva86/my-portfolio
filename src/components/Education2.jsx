import React from "react";

const EDUCATION_DATA = [
  {
    degree: "Master of Science in Information Technology (MSc IT)",
    institution: "B.G.P.S. College, University of Mumbai",
    duration: "2026 - Present",
    location: "Mumbai, India",
    highlights: [
      "Computer Science graduate currently pursuing a Master of Science in Information Technology (MSc IT). Passionate about software development, full-stack technologies, and problem-solving. Building practical experience through projects using JavaScript, React.js, Node.js, Express.js, and MongoDB.",
      
    ],
  },
];

const Education2 = () => {
  return (
    <section id="education" >
      <div className="container mx-auto max-w-5xl">
       

        <div className="space-y-8">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="glass-effect p-5 sm:p-6 md:p-10 transition-all hover:border-(--accent-orange) hover:shadow-lg hover:shadow-(--accent-orange)/10"
            >
              {/* Degree + Duration */}
              <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-(--foreground) md:text-3xl">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-lg font-semibold gradient-text">
                    {item.institution}
                  </p>
                </div>

                <div className="self-start rounded border border-(--border-color) bg-(--background-secondary) px-2.5 py-1 text-xs font-medium text-(--foreground-secondary) md:self-center md:text-sm">
                  {item.duration}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6 flex items-center gap-1.5 text-sm">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="var(--accent-blue)"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>{item.location}</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-4">
                {item.highlights.map((highlight, hidx) => (
                  <li
                    key={hidx}
                    className="flex items-start text-sm text-(--foreground-secondary) md:text-base leading-relaxed"
                  >
                    <span className="mt-1.5 mr-3 shrink-0 select-none gradient-text">
                      ▹
                    </span>

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education2;