import Layout from "@/components/Layout/Layout";
import { PAGES } from "@/consts/pages";
import { ArrowRight, BookOpenText, BrainCircuit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BookOpenText,
    title: "Корпусная база",
    text: "Словарь опирается на реальные тексты, а не только на традиционные словарные пометы.",
  },
  {
    icon: BrainCircuit,
    title: "Живой анализ",
    text: "Показывает, как слово реально функционирует в речи, жанрах и коммуникативных ситуациях.",
  },
  {
    icon: Sparkles,
    title: "Стилевой подсказчик",
    text: "Помогает определить стилевую доминанту текста и оценить уместность языковых средств.",
  },
];

export default function HomePage() {
  return (
    <Layout currentPage={PAGES.HOME}>
      <div className="space-y-10 container">
        <section className="grid items-stretch gap-6 lg:grid-cols-2">
          <div className="glass-card flex flex-col justify-between">
            <div>
              <span className="chip">аннотация проекта</span>

              <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Живой стилистический словарь русского языка
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Это электронный лингвистический сервис нового поколения,
                созданный для того, чтобы быстро и точно определять
                стилистическую окраску слова и понимать, в каких контекстах оно
                уместно. Словарь помогает видеть не только значение языковой
                единицы, но и её реальное употребление в речи, текстах и жанрах.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Проект ориентирован на тех, кто изучает русский язык, преподаёт
                его, занимается переводом, редактированием, копирайтингом или
                просто хочет увереннее чувствовать себя в выборе языковых
                средств.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={PAGES.ABOUT} className="btn-primary">
                О проекте
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link to={PAGES.RESOURCES} className="btn-secondary">
                Полезные материалы
              </Link>
            </div>
          </div>

          <div className="grid gap-6 border rounded-[28px] border-slate-200">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
              <img
                src="/images/home_page.png"
                alt="Работа с языковыми данными"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="glass-card p-6">
              <p className="text-sm font-medium text-slate-900">Суть проекта</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Словарь создаётся как инструмент, который показывает не
                «усреднённое» значение слова, а его реальную стилистическую
                жизнь: где слово звучит естественно, где становится неуместным и
                какие оттенки смысла оно несёт в разных контекстах.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </section>

        <section className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Почему этот проект важен
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            В условиях постоянного роста информационного потока особенно важно
            быстро получать актуальные сведения о слове: его значении,
            стилистических свойствах, контекстах употребления и ограничениях.
            «Живой стилистический словарь» отвечает именно на эту задачу, делая
            стилистическую информацию доступной, наглядной и современной.
          </p>
        </section>
      </div>
    </Layout>
  );
}
