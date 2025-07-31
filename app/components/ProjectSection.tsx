import { Dispatch } from "react";
import { ACTIONTYPES } from "./ScrollSpyClient";
import { projects } from "../data";
interface ProjectDispatch {
  dispatch: Dispatch<{
    type: string;
    payload: {
      skills: string[];
    };
  }>;
}
const ProjectSection = ({ dispatch }: ProjectDispatch) => {
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
  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
    return (
      <div
        className="p-3 space-y-1"
        onMouseEnter={() => mouseEnterEvent(project.skills ?? [])}
        onMouseLeave={mouseLeaveEvent}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h4 className="text-md font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
            {project.name}
          </h4>
          <span className="text-sm text-gray-500">{project.period}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    );
  };
  return (
    <div id="projects" className="py-3 bg-white px-3">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="md:hidden  sticky top-0 z-10 bg-white py-4 px-6 pb-0 backdrop-blur opacity-95">
          <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left ">
            Projects
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>
        <div className="space-y-5"></div>
        {projects.map((project, ind) => {
          const wrapperProps = {
            className: `relative group cursor-pointer rounded-s hover:bg-gray-100  hover:scale-104 hover:shadow-m transition-transform 
transition-colors duration-300`,
            onMouseEnter: () => mouseEnterEvent(project.skills || []),
            onMouseLeave: () => mouseLeaveEvent(),
          };
          return project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={ind}
              {...wrapperProps}
            >
              <ProjectCard project={project} />
            </a>
          ) : (
            <div key={ind} {...wrapperProps}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
