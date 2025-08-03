export const Profile = {
  name: "Dharmik Harkhani",
  title: "Software Engineer",
  description:
    "Building robust and performant applications for the modern web.",
  image: "/profile1.png",
  contact: [
    {
      type: "Location",
      value: "New Jersey, USA",
      svg: (
        <svg
          className="w-4 h-4 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ],
  socialLinks: [
    {
      link: "https://github.com/harkhanid",
      svg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      link: "https://www.linkedin.com/in/dharmik-harkhani/",
      svg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
};

export const aboutMe = [
  "I’m a builder at heart. As a full-stack developer, I get a huge kick out of taking an idea and turning it into a real, working product. My focus is on writing clean, scalable code because I believe in building things right the first time, so they can grow without breaking.",
  "My career has given me a great perspective on building software. Currently, I'm deep in the trenches with a small team at [Leroy Pharmacy](https://www.leroyrx2.com/), where I have a hand in everything from new features to our database infrastructure. Before this, I saw the big picture while developing financial tools at [Fidelity Investments](https://www.fidelity.com/) and contributing to a multinational [low-code platform](https://appian.com/products/platform/low-code).",
  "To really put my skills to the test, I recently built a [Q/A Backend application](https://github.com/harkhanid/AskQuestions) and its entire [cloud infrastructure](https://github.com/harkhanid-fall2020/infrastructure) on AWS from scratch. It was a massive challenge, but an incredible experience in understanding what it truly takes to build something for the real world. That same curiosity is now leading me to dive headfirst into the world of AI by building my own personal API for a large language model.",
  "Outside of tech, you’ll find me exploring my other interests: trying to make sense of geopolitics, relaxing with some anime, or exploring the neighborhood while playing Pokémon Go.",
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "PHP", "Python"],
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9DA2AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Represents code with angle brackets */}
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring", "Kafka", "Node.js"],
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9DA2AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Represents server stacks or databases */}
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    category: "Frontend",
    items: ["React", "Redux", "Angular", "Next.js"],
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9DA2AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Represents a browser window or UI layout */}
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
  },
  {
    category: "Cloud & Databases",
    items: ["AWS", "Terraform", "NoSQL", "MySQL"],
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9DA2AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* A classic cloud shape */}
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Leroy Pharamcy",
    period: "Mar 2024 - Present",
    highlights:
      "Engineered full-stack solutions to modernize core pharmacy operations, from patient-facing React components to the backend Spring Boot APIs that drive them. Developed key communication tools that directly increased the productivity of the pharmacy staff by reducing patient call volume",
    skills: ["React", "Spring Boot", "Java", "AWS", "MySQL"],
    link: "https://www.leroyrx2.com/",
  },
  {
    role: "Software Developer",
    company: "Appian",
    period: "Jul 2022 - Jan 2023",
    highlights:
      "Contributed to a large-scale, low-code platform by building features for its core interface designer. Re-architected an inefficient data-mapping process to deliver a significant performance improvement, enhancing the experience for enterprise users building their own applications.",
    skills: ["React", "Spring", "Java", "Kafka", "MySQL"],
    link: "https://appian.com/products/platform/low-code",
  },
  {
    role: "Software Engineer, Co-op",
    company: "Fidelity Investments",
    period: "Jul 2021 - Dec 2021",
    highlights:
      "Developed and optimized backend systems for a high-stakes portfolio analysis tool within a large-scale enterprise finance environment. Focused on enhancing system performance and reliability by engineering high-throughput data solutions involving caching layers and data pipelines.",
    skills: ["Angular", "Spring Boot", "Java", "PosgreSQL"],
    link: "https://www.fidelity.com/",
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

export const projects = [
  {
    name: "Q/A Backend Application",
    period: "2024 - Present",
    description:
      "Built a backend application for a Q&A platform where users can post, answer, and search questions by category. The infrastructure was custom-built on AWS, featuring a secure network (VPC, Subnets, Gateway) and a scalable architecture using EC2, Auto Scaling, a Load Balancer, RDS, and SQS.",
    skills: [
      "JavaScript",
      "Express.js",
      "MySQL",
      "NoSQL",
      "AWS",
      "Terraform",
      "Node.js",
    ],
    link: "https://github.com/harkhanid/AskQuestions",
  },
  {
    name: "SafeDistance",
    period: "2020 - 2020",
    description:
      "A social distancing application that displays a real-time heatmap of local crowd density and sends anonymous notifications to users who may have been exposed to a self-reported COVID−19 case within the last 14 days.",
    skills: ["React", "Node.js", "MySQL", "Adobe XD"],
    link: "https://github.com/harkhanid/safeDistance",
  },
];
