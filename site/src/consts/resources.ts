import {
  BookOpenText,
  FileText,
  Globe2,
  LayoutGrid,
  Search,
} from "lucide-react";

export const resources = [
  {
    title: "Основной сайт проекта",
    description:
      "Сайт с ссылками на все наши проекты, а также авторизацией для дальнейшего доступа к ресурсам",
    href: "https://dev.syllabica.com/",
    icon: Globe2,
    tag: "Информация",
  },
  {
    title: "Живой стилистический словарь русского языка",
    description:
      'Основной проект "Живой стилистический словарь русского языка". Здесь размещены словарные данные и сервисы анализа.',
    href: "https://livedict.syllabica.com/",
    icon: BookOpenText,
    tag: "Проект",
  },
  {
    title: "Содержание и основные результаты проекта",
    description:
      "PDF-материал с описанием целей, структуры, результатов и логики работы проекта.",
    href: "https://syllabica.com/static/files/manual_site.pdf",
    icon: FileText,
    tag: "Документ",
  },
  {
    title: "Стилевой подсказчик",
    description:
      "Инструмент для анализа стилистической доминанты текста и его коммуникативной направленности.",
    href: "https://livedict.syllabica.com/text",
    icon: Search,
    tag: "Сервис",
  },
  {
    title: "Сам словарь",
    description:
      "Раздел с поиском слов и просмотром стилистической информации по отдельным единицам.",
    href: "https://livedict.syllabica.com/word",
    icon: LayoutGrid,
    tag: "Словарь",
  },
];
