"use client";

import AboutMeSection from "./AboutMe";
import ExperienceSection from "./ExperienceSection";
import ProfileSection from "./ProfileSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import { useState, useRef, useEffect, useReducer } from "react";

type ObserverOptions = IntersectionObserverInit;

const useScrollSpy = (
  sectionIds: string[],
  options?: ObserverOptions
): string | null => {
  const [activeSection, setActiveSection] = useState<String | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    // Create the observer instance
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    const sections = sectionIds.map((id) => document.getElementById(id));
    sections.forEach((section) => {
      if (section) {
        observer.current?.observe(section);
      }
    });

    // Cleanup function to unobserve
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.current?.unobserve(section);
        }
      });
    };
  }, [sectionIds, options]); // Rerun effect if sections or options change

  return activeSection;
};

export const ACTIONTYPES = {
  SET_SKILLS: "setSkills",
};

const reducer = (
  state: { skills: string[] },
  action: { type: string; payload: { skills: string[] } }
) => {
  switch (action.type) {
    case ACTIONTYPES.SET_SKILLS:
      return { ...state, skills: action.payload.skills || [] };
    default:
      return state;
  }
};

const ScrollSpyClient = (children: any) => {
  const [state, dispatch] = useReducer(reducer, { skills: [] as string[] });
  const { skills } = state;
  const sectionIds = ["about", "experience", "projects"];
  const activeSection = useScrollSpy(sectionIds, {
    rootMargin: "-50% 0px -75% 0px",
  });
  return (
    <main className="min-h-screen md:h-screen flex flex-col bg-white pb-16 sm:pb-0">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
        {/* Left Column - Profile */}
        <div className="md:col-span-2 md:border-b-0 md:border-r border-gray-200 md:sticky md:max-h-screen md:top-0">
          <ProfileSection activeSection={activeSection} />
        </div>

        {/* Right Column - Skills and Experience */}
        <div className="md:col-span-3 flex flex-col md:justify-center">
          {/* Aboutme Section */}
          <div className="">
            <AboutMeSection />
          </div>
          {/* Skills Section */}
          <div className="md:sticky backdrop-blur background-white top-0 z-20 mt-2">
            <SkillsSection selectedSkills={skills} />
          </div>

          {/* Experience Section */}
          <div className="mt-6 md:mt-20">
            <ExperienceSection dispatch={dispatch} />
          </div>
          <div className="mt-6 md:mt-20">
            <ProjectSection dispatch={dispatch} />
          </div>
          {/* <footer className="mt-16 sm:mt-24">
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
          </footer> */}
        </div>
      </div>
    </main>
  );
};

export default ScrollSpyClient;
