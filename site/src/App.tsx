import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PAGES } from "./consts/pages";
import AboutPage from "./pages/AboutPage";
import JournalPage from "./pages/JournalPage";
import ParticipantsPage from "./pages/ParticipantsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={PAGES.ABOUT} element={<AboutPage />} />
      <Route path={PAGES.JOURNAL} element={<JournalPage />} />
      <Route path={PAGES.PARTICIPANTS} element={<ParticipantsPage />} />
      <Route path={PAGES.RESOURCES} element={<ResourcesPage />} />
      <Route path={PAGES.PROJECT} element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
