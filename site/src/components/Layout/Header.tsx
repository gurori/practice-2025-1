import { Page, PAGES } from "@/consts/pages";
import { Link } from "react-router-dom";

type Props = {
  currentPage: Page;
};

const links = [
  { label: "О проекте", to: PAGES.ABOUT },
  { label: "Участники", to: PAGES.PARTICIPANTS },
  { label: "Журнал", to: PAGES.JOURNAL },
  { label: "Ресурсы", to: PAGES.RESOURCES },
];

export default function Header({currentPage} : Props) {
    return (
      <header className="fixed w-full bg-white z-50">
        <div className="container flex place-content-between py-4">
          <Link to={PAGES.HOME}>
            <b>Проектная Практика 2026</b>
          </Link>
          <div className="flex gap-5">
            {links.map((l) => (
              <Link to={l.to}>
                {l.to === currentPage ? <b>{l.label}</b> : <p>{l.label}</p>}
              </Link>
            ))}
          </div>
        </div>
        <hr />
      </header>
    );
}