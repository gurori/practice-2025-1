import Layout from "@/components/Layout/Layout";
import { PAGES } from "@/consts/pages";
import { participants } from "@/consts/participants";

export default function ParticipantsPage() {
  return (
    <Layout currentPage={PAGES.PARTICIPANTS}>
      <div className="space-y-10 container">
        <section className="glass-card p-6 md:p-8">
          <span className="chip">участники</span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Личный вклад участников проекта
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            В данном разделе представлен вклад участников группы в
            реализацию проекта «Проектная деятельность». Описания отражают
            выполненные задачи, используемые инструменты и итоговый результат
            работы.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {participants.map((participant) => {
            const Icon = participant.icon;

            return (
              <article key={participant.name} className="glass-card p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="chip">{participant.role}</span>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                      {participant.name}
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Icon size={20} />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                  {participant.contribution}
                </p>
              </article>
            );
          })}
        </section>
      </div>
    </Layout>
  );
}
