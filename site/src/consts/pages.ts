export const PAGES = {
  HOME: "/",
  ABOUT: "/about",
  JOURNAL: "/juornal",
  PARTICIPANTS: "/participants",
  RESOURCES: "/resources",
  PROJECT: "/project",
} as const;

export type Page = (typeof PAGES)[keyof typeof PAGES];
