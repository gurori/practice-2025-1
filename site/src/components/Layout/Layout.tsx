import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { type Page, PAGES } from "@/consts/pages";

type Props = {
  children: ReactNode;
  currentPage: Page;
};

export default function Layout({ children, currentPage }: Props) {
  return (
    <>
      <Header currentPage={currentPage} />
      {children}
      <Footer />
    </>
  );
}
