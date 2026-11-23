export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  featured?: boolean;
  link?: string;
  github?: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
