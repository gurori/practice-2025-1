import Layout from "@/components/Layout/Layout";
import { blocks } from "@/consts/aboutPageBlocks";
import { PAGES } from "@/consts/pages";

export default function AboutPage() {
  return (
    <Layout currentPage={PAGES.ABOUT}>
      <div className="space-y-10 container">
        <section className="glass-card overflow-hidden">
          <img
            src="/images/hero_about.png"
            alt="Лингвистическая работа и анализ текста"
            className="h-72 w-full rounded-[28px] object-cover md:h-96"
          />
          <div className="p-6 md:p-8">
            <span className="chip">о проекте</span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Описание проекта «Живой стилистический словарь»
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
              «Живой стилистический словарь русского языка» — это электронный
              справочник нового поколения, который формирует многомерную
              стилистическую характеристику слова на основе его реального
              функционирования в текстах. В отличие от печатных словарей, он
              опирается не на статичное и индивидуальное видение составителя, а
              на корпусные данные и современные методы анализа.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {block.title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {block.text}
                </p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Как работает словарь
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Словарь анализирует, в каких контекстах слово встречается чаще
              всего, в каких жанрах оно естественно звучит и в каких средах,
              напротив, почти не употребляется. Благодаря этому можно выявлять
              разговорные, книжные, научные, поэтические, официальные и другие
              стилистические характеристики.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Важную роль играет и приложение «Стилевой подсказчик», которое
              помогает определить стилевую доминанту текста, его тональность и
              коммуникативную направленность.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Где он нужен
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              <li>• при обучении русскому языку и стилистике;</li>
              <li>• при преподавании в школе и вузе;</li>
              <li>• в переводе, редактировании и рерайтинге;</li>
              <li>• при создании и проверке текстов;</li>
              <li>
                • в системах машинного перевода и автоматической аннотации;
              </li>
              <li>• для проверки стилистической уместности высказываний.</li>
            </ul>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Итог
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            «Живой стилистический словарь» создан как помощник для тех, кто
            хочет понимать тенденции употребления слов, проверять стилистическую
            уместность языковых средств и точнее использовать русский язык в
            учебной, профессиональной и повседневной коммуникации.
          </p>
        </section>
      </div>
    </Layout>
  );
}