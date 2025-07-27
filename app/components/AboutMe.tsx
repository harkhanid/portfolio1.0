import { aboutMe } from "../data";
import LinkParser from "./Utils/LinkParser";

const AboutMeSection = () => {
  return (
    <div id="about" className="py-6 bg-white px-6 md:pt-16">
      <div className="space-y-4 max-w-2xl mx-auto px-3">
        <div className="md:hidden sticky top-0 z-10 bg-white py-4 px-6 pb-0">
          <h3 className="text-lg bold text-gray-900 text-center md:text-left">
            About
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>
        <div className="space-y-4">
          {aboutMe.map((aboutMeText, ind) => (
            <p
              key={ind}
              className="text-sm md:text-base text-gray-600  mx-auto leading-relaxed"
            >
              <LinkParser text={aboutMeText} />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
