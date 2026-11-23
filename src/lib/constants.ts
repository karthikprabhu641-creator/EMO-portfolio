import { NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "Emotion Agency",
  title: "A1 Portfolio | Emotion Agency",
  description:
    "A light, editorial portfolio pairing refined serif headlines with technical mono text and vivid violet accents.",
  author: "Karthik",
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "contact@example.com",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "INDEX", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];
