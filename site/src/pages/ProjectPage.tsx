import Layout from "@/components/Layout/Layout";
import { PAGES } from "@/consts/pages";

export default function ProjectPage() {
  return (
    <Layout currentPage={PAGES.PROJECT}>
      <section className="container">
        <h2>Документация проекта</h2>
        <p>
          Техническое руководство по созданию API для заметок на ASP.NET Core.
        </p>
        <a href="https://github.com/gurori/practice-2025-1/blob/master/docs/README.md" className="underline">
          Открыть отчёт
        </a>
      </section>
    </Layout>
  );
}
