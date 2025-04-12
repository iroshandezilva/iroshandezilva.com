export type SiteConfig = {
  name: string;
  description: string;
  links: {
    twitter?: string;
    github?: string;
    email?: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};
