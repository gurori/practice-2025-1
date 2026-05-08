export type Page = "home" | "about" | "team" | "journal" | "resources";

export type JournalPost = {
  date: string;
  title: string;
  text: string;
  tags: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  contribution: string;
};

export type ResourceLink = {
  title: string;
  href: string;
  desc: string;
};