import { Dispatch } from "react";
import { ACTIONTYPES } from "./ScrollSpyClient";
import { experiences } from "../data";

interface DispatchProps {
  dispatch: Dispatch<{
    type: string;
    payload: {
      skills: string[];
    };
  }>;
}

interface ExperienceProps {
  exp: {
    role: string;
    company: string;
    period: string;
    highlights: string;
    link?: string;
    skills: string[];
  };
}

const ExperienceSection = ({ dispatch }: DispatchProps) => {
  const ExperienceCard = ({ exp }: ExperienceProps) => {
    return (
      <div className="p-3 space-y-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h4 className="text-md font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
            {exp.role}
          </h4>
          <span className="text-sm text-gray-500">{exp.period}</span>
        </div>
        <p className="text-sm font-medium text-gray-600">{exp.company}</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {exp.highlights}
        </p>
      </div>
    );
  };
  const mouseEnterEvent = (skills: string[]) => {
    dispatch({
      type: ACTIONTYPES.SET_SKILLS,
      payload: { skills },
    });
  };
  const mouseLeaveEvent = () => {
    dispatch({
      type: ACTIONTYPES.SET_SKILLS,
      payload: { skills: [] },
    });
  };

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
          {experiences.map((exp) => {
            const wrapperProps = {
              className: `relative group cursor-pointer rounded-s hover:bg-gray-100  hover:scale-104 hover:shadow-m transition-transform 
 transition-colors duration-300`,
              onMouseEnter: () => mouseEnterEvent(exp.skills || []),
              onMouseLeave: () => mouseLeaveEvent(),
            };
            return (
              <div key={exp.role}>
                {exp.link ? (
                  <a
                    key={exp.company}
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...wrapperProps}
                  >
                    {<ExperienceCard exp={exp} />}
                  </a>
                ) : (
                  <div {...wrapperProps}>
                    <ExperienceCard key={exp.company} exp={exp} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
