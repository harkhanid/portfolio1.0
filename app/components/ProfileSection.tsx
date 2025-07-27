import Image from "next/image";
import { Profile } from "../data";
interface NavbarProps {
  activeSection: string | null;
}
const ProfileSection: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];
  return (
    <div className="w-full py-8 bg-white px-6 pt-16 flex flex-col justify-between h-full gap-6 md:gap-0">
      <div className="space-y-14 center text-center md:text-left">
        <div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200">
            <Image
              src={Profile.image}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl max-w-xs mx-auto font-bold text-purple-600">
            {Profile.name}
          </h1>
          <h2 className="text-lg md:text-xl max-w-xs mx-auto text-gray-600">
            {Profile.title}
          </h2>
          <div className="h-px w-16 bg-gray-200 mx-auto my-4" />
          <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed">
            {Profile.description}
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="md:text-base max-w-xs mx-auto space-y-3 text-gray-600">
            {navItems.map((section) => (
              <li key={section.href} className="relative">
                <a
                  className={`inline-block transition-transform duration-300 ${
                    activeSection === section.href.substring(1)
                      ? "text-purple-600 font-bold translate-x-2"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                  href={section.href}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-2 md:space-y-4 text-center md:text-left">
        {/* Contact Info */}
        {Profile.contact.map((contact, index) => (
          <div
            key={index}
            className="flex items-center justify-center md:justify-start md:max-w-xs md:mx-auto space-x-2"
          >
            {contact.svg}
            {contact.type === "Email" ? (
              <a
                href={`mailto:${contact.value}`}
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                {contact.value}
              </a>
            ) : (
              <span className="text-sm text-gray-600">{contact.value}</span>
            )}
          </div>
        ))}
        {/* Social Links */}
        <div className="flex items-center justify-center  max-w-xs mx-auto  space-x-4 pt-2">
          {Profile.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              {link.svg}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
