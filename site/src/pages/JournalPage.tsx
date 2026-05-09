import Layout from "@/components/Layout/Layout";
import { PAGES } from "@/consts/pages";
import { posts } from "@/consts/posts";

export default function JournalPage() {
  return (
    <Layout currentPage={PAGES.JOURNAL}>
      <div className="space-y-10 container">
        <section className="glass-card p-6 md:p-8">
          <span className="chip">журнал проекта</span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Новости развития «Живого стилистического словаря»
          </h1>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Раздел отражает текущие этапы развития электронного словаря,
            обновления интерфейса, расширение словарной базы и совершенствование
            инструментов стилистического анализа.
          </p>
        </section>

        <section className="space-y-6">
          {posts.map((post) => {
            const Icon = post.icon;

            return (
              <article key={post.title} className="glass-card p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="chip">{post.date}</span>

                  <div className="flex items-center gap-2 text-slate-500">
                    <Icon size={18} />
                    <span className="text-sm">{post.tag}</span>
                  </div>
                </div>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  {post.text}
                </p>
              </article>
            );
          })}
        </section>

        <section className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Дальнейшие направления развития
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            В ближайших обновлениях планируется дальнейшее расширение корпуса
            текстов, уточнение стилистических помет и совершенствование
            инструментов автоматического анализа употребления слов в разных
            коммуникативных средах.
          </p>
        </section>
      </div>
    </Layout>
  );
}