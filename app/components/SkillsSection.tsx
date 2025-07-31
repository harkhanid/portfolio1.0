import { skills } from "../data";
interface SkillsSectionProps {
  selectedSkills: string[];
}

const SkillsSection = ({ selectedSkills }: SkillsSectionProps) => {
  return (
    <div className="bg-white px-3 py-3">
      <div className="space-y-3 max-w-2xl mx-auto px-4">
        <div className="sticky top-0 z-10 bg-white  pb-0">
          <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
            Core Skills
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <div className="flex items-center space-x-2 mb-2">
                {skillGroup.icon}
                <h4 className="text-sm font-medium text-gray-600">
                  {skillGroup.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-sm rounded-full ring-1 ring-gray-200 bg-gray-50 text-gray-700 transition-colors duration-300 ${
                      selectedSkills.includes(skill)
                        ? "md:bg-purple-200 md:text-purple-800 md:ring-purple-300"
                        : "hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
