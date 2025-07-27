import { Dispatch } from "react";
import { ACTIONTYPES } from "./ScrollSpyClient";
interface ExperienceProps {
  dispatch: Dispatch<{
    type: string;
    payload: {
      skills?: string[];
    };
  }>;
}
const ExperienceSection = ({ dispatch }: ExperienceProps) => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Leroy Pharamcy",
      period: "Mar 2024 - Present",
      highlights:
        "Engineered full-stack solutions to modernize core pharmacy operations, from patient-facing React components to the backend Spring Boot APIs that drive them. Developed key communication tools that directly increased the productivity of the pharmacy staff by reducing patient call volume",
      skills: ["React", "Spring Boot", "Java", "MySQL"],
    },
    {
      role: "Software Developer",
      company: "Appian",
      period: "Jul 2022 - Jan 2023",
      highlights:
        "Contributed to a large-scale, low-code platform by building features for its core interface designer. Re-architected an inefficient data-mapping process to deliver a significant performance improvement, enhancing the experience for enterprise users building their own applications.",
      skills: ["React", "Spring MVC", "Java", "Kafka"],
    },
    {
      role: "Software Engineer, Co-op",
      company: "Fidelity Investments",
      period: "Jul 2021 - Dec 2021",
      highlights:
        "Developed and optimized backend systems for a high-stakes portfolio analysis tool within a large-scale enterprise finance environment. Focused on enhancing system performance and reliability by engineering high-throughput data solutions involving caching layers and data pipelines.",
      skills: ["Angular", "Spring Boot", "Java", "PosgreSQL"],
    },
    {
      role: "Web Developer",
      company: "BeeOnline Communications",
      period: "Sep 2018 - Dec 2019",
      highlights:
        "Designed and developed data-heavy web applications for clients in the financial services industry using Angular and PHP. Specialized in building dynamic and customizable data visualization components, including over 25 different chart types to make complex financial data intuitive.",
      skills: ["Angular", "CodeIgniter", "PHP", "MySQL"],
    },
  ];

  return (
    <div id="experience" className="py-3 bg-white px-3">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="md:hidden  sticky top-0 z-10 bg-white py-4 px-6 pb-0 backdrop-blur opacity-95">
          <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left ">
            Experience
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative group cursor-pointer rounded-s hover:bg-gray-100  hover:scale-104 hover:shadow-m transition-transform 
 transition-colors duration-300"
            >
              <div
                onMouseEnter={() =>
                  dispatch({
                    type: ACTIONTYPES.SET_SKILLS,
                    payload: {
                      skills: exp.skills,
                    },
                  })
                }
                onMouseLeave={() =>
                  dispatch({
                    type: ACTIONTYPES.SET_SKILLS,
                    payload: { skills: [] },
                  })
                }
                className="relative p-3"
              >
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.highlights}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
