// Define the props interface for the parser component
interface LinkParserProps {
  text: string;
}

const LinkParser: React.FC<LinkParserProps> = ({ text }) => {
  // An array to hold our final elements (text and links)
  const elements: React.ReactNode[] = [];

  // Regex to find Markdown-style links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  let lastIndex = 0;
  let match;

  // Loop through all link matches in the text
  while ((match = linkRegex.exec(text)) !== null) {
    // 1. Add the plain text before the matched link
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    // 2. Extract link text/URL and create the <a> element
    const linkText = match[1];
    const linkUrl = match[2];
    elements.push(
      <a
        className="font-bold hover:text-purple-600 cursor-pointer"
        key={match.index}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
    );

    // 3. Update the last index to the end of the current match
    lastIndex = linkRegex.lastIndex;
  }

  // 4. Add any remaining text after the last link
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <>{elements}</>;
};

const AboutMeSection = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python"],
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9DA2AF"
          strokeWidth="2"
        >
          <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3" />
        </svg>
      ),
    },
    {
      category: "Frontend",
      items: ["React", "Redux", "Angular"],
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9DA2AF"
          strokeWidth="2"
        >
          <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
    },
    {
      category: "Cloud",
      items: ["AWS", "Packer", "Terraform"],
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9DA2AF"
          strokeWidth="2"
        >
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ];

  const aboutMe = [
    "I’m a builder at heart. As a full-stack developer, I get a huge kick out of taking an idea and turning it into a real, working product. My focus is on writing clean, scalable code because I believe in building things right the first time, so they can grow without breaking.",
    "My career has given me a great perspective on building software. Currently, I'm deep in the trenches with a small team at [Leroy Pharmacy](https://www.leroyrx2.com/), where I have a hand in everything from new features to our database infrastructure. Before this, I saw the big picture while developing financial tools at [Fidelity Investments](https://www.fidelity.com/) and contributing to a multinational [low-code platform](https://appian.com/products/platform/low-code).",
    "To really put my skills to the test, I recently built a [Q/A Backend application](https://github.com/harkhanid/AskQuestions) and its entire [cloud infrastructure](https://github.com/harkhanid-fall2020/infrastructure) on AWS from scratch. It was a massive challenge, but an incredible experience in understanding what it truly takes to build something for the real world. That same curiosity is now leading me to dive headfirst into the world of AI by building my own personal API for a large language model.",
    "Outside of tech, you’ll find me exploring my other interests: trying to make sense of geopolitics, relaxing with some anime, or exploring the neighborhood while playing Pokémon Go.",
  ];

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
