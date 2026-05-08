export const PAGES = {
  HOME: "/",
  ABOUT: "/about",
  JOURNAL: "/juornal",
  PARTICIPANTS: "/participants",
  RESOURCES: "/resources",
} as const;

export type Page = (typeof PAGES)[keyof typeof PAGES];
