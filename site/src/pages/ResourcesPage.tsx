import Layout from "@/components/Layout/Layout";
import { PAGES } from "@/consts/pages";
import { resources } from "@/consts/resources";
import { ArrowUpRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <Layout currentPage={PAGES.RESOURCES}>
      <div className="space-y-10 container">
        <section className="glass-card p-6 md:p-8">
          <span className="chip">ресурсы</span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Полезные материалы по проекту
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            В этом разделе собраны ссылки на основной сайт проекта, сам словарь,
            стилевого подсказчика и материалы, которые помогают лучше понять
            идею, структуру и результаты «Живого стилистического словаря
            русского языка».
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card group block p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-2xl bg-slate-100 p-3 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight
                    className="text-slate-400 transition group-hover:text-slate-900"
                    size={18}
                  />
                </div>

                <div className="mt-5">
                  <span className="chip">{resource.tag}</span>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
                    {resource.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {resource.description}
                  </p>
                </div>
              </a>
            );
          })}
        </section>

        <section className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Как использовать раздел
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            Сначала удобно ознакомиться с основным сайтом и документом с
            результатами проекта, затем перейти к словарю и модулю стилевого
            анализа. Такой порядок помогает понять, как устроена система и какие
            задачи решает каждый её раздел.
          </p>
        </section>
      </div>
    </Layout>
  );
}