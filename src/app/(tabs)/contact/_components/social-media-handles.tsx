import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaThreads,
  FaWhatsapp,
} from "react-icons/fa6";

const socials = [
  {
    name: "WhatsApp",
    url: "https://wa.me/252616000000",
    icon: <FaWhatsapp size={24} />,
    color: "#25D366",
  },
  {
    name: "X",
    url: "https://x.com/ahmedabdullahi_",
    icon: <FaXTwitter size={24} />,
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ahmedabdullahi_/",
    icon: <FaInstagram size={24} />,
    color: "#E4405F",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmedabdullahi/",
    icon: <FaLinkedin size={24} />,
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: "https://github.com/ahmedabdullahi",
    icon: <FaGithub size={24} />,
    color: "#ddd",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ahmedabdullahi",
    icon: <FaYoutube size={24} />,
    color: "#FF0000",
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@ahmedabdullahi_",
    icon: <FaThreads size={24} />,
    color: "#fff",
  },
];

const SocialMedia = () => {
  return (
    <div className="mx-auto flex flex-wrap gap-6">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          className={`w-fit rounded-xl border border-neutral-300 border-transparent bg-neutral-800 p-4 transition-all duration-300 ease-in hover:scale-105 dark:hover:border-neutral-700`}
          style={{ color: social.color }}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
