import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutMeSection from "./components/AboutMe";

export default function MinimalistPortfolio() {
  return (
    <main className="min-h-screen md:h-screen flex flex-col bg-white pb-16 sm:pb-0">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
        {/* Left Column - Profile */}
        <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 md:sticky md:max-h-screen md:top-0">
          <ProfileSection />
        </div>

        {/* Right Column - Skills and Experience */}
        <div className="md:col-span-3 flex flex-col md:justify-center">
          {/* Aboutme Section */}
          <div className="">
            <AboutMeSection />
          </div>
          {/* Skills Section */}
          <div className="md:sticky backdrop-blur background-white top-0 z-2 ">
            <SkillsSection />
          </div>

          {/* Experience Section */}
          <div>
            <ExperienceSection />
          </div>
          <div>
            <ExperienceSection />
          </div>
          <footer className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="border-t border-slate-200/20 py-10">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                    <p className="text-sm leading-6 text-slate-400">
                      Coded with ❤️ by
                      <a
                        href="[Your GitHub/LinkedIn URL]"
                        className="font-semibold text-slate-200 hover:text-teal-300"
                      >
                        Dharmik Harkhani
                      </a>
                      .
                    </p>
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-gray-500">
                      Design inspiration from
                      <a
                        href="https://brittanychiang.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-600 hover:text-purple-600"
                      >
                        &nbsp;Brittany Chiang
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
