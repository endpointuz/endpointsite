import orientPic from '../client/assets/img/orient-header.png';
import orientContentFirst from '../client/assets/img/orient-screen-0.jpg';
import orientContentSecond from '../client/assets/img/orient-screen-1.png';
import orientContentThird from '../client/assets/img/orient-screen-2.png';
import advnextPic from '../client/assets/img/advnext-header.png';
import advnextContentFirst from '../client/assets/img/adv-screen-1.jpg';
import advnextContentSecond from '../client/assets/img/adv-screen-2.jpg';

export default [
  {
    id: 'orientmotors',
    header: {
      title: 'Showroom Orient motors',
      description: 'Корпоративный сайт одного из лидеров по продаже импортных автомобилей в Узбекистане',
      date: '02/2019',
      link: {
        to: 'https://orientmotors.uz',
        text: 'orientmotors.uz',
      },
      tags: ['UI/UX', 'Website'],
      picture: orientPic,
    },
    body: [
      {
        id: 1,
        type: 'title',
        content: 'Клиент',
      },
      {
        id: 2,
        type: 'text',
        content: 'Компания «Orient Motors» — является импортёром новых автомобилей иностранного производства и предоставляет спектр услуг: Импорт и продажа новых автомобилей иностранного производства; легковые автомобили, внедорожники, микроавтобусы и минивэны; Лизинговая программа; Сервисное обслуживание;',
      },
      {
        id: 3,
        type: 'image',
        fluid: true,
        content: orientContentFirst,
      },
      {
        id: 4,
        type: 'text',
        content: 'Одной из важнейших целей сайта было предоставить удобный и понятный интерфейс для поиска и выбора автомобилей, посмотра всех интересующих характеристик. Современный дизайн. Лёгкий, продуманный интерфейс. Сайт удобно просматривать на всех типах устройств',
      },
      {
        id: 5,
        type: 'image',
        fluid: false,
        content: orientContentSecond,
      },
      {
        id: 6,
        type: 'image',
        fluid: false,
        content: orientContentThird,
      },
    ],
  },
  {
    id: 'advnext',
    header: {
      title: 'ADVNext опросник',
      description: 'Универсальная система опросов для маркетинговых и социальных исследований на платформе Android. Уникальный конструктор опросов, тестов, c возможность использования медиаконтента',
      date: '04/2019',
      tags: ['UI/UX', 'Website', 'Mobile APP', 'Front-end', 'Back-end'],
      picture: advnextPic,
    },
    body: [
      {
        id: 1,
        type: 'title',
        content: 'Клиент',
      },
      {
        id: 2,
        type: 'text',
        content: 'ADVNext - маркетинговое коммуникационное агенство в Ташкенте, специализирующаяся на исследовании рынка и разработку решений, позволяющих увеличить продажи',
      },
      {
        id: 3,
        type: 'subtitle',
        content: 'Задача',
      },
      {
        id: 4,
        type: 'text',
        content: 'Разработать универсальную программу для маркетингового исследования рынка. Основная задача программы для проведения маркетинговых исследований - подготовка исследовательского инструментария, проведение опросов, анализ результатов опросов',
      },
      {
        id: 5,
        type: 'subtitle',
        content: 'Решение',
      },
      {
        id: 6,
        type: 'text',
        content: 'Разработана информационная система с удобной административной панелью для добавления опросов, мониторинга респондетов, анализа результатов опроса. Также было разработанно андроид приложение для планшета',
      },
      {
        id: 7,
        type: 'image',
        fluid: true,
        content: advnextContentFirst,
      },
      {
        id: 8,
        type: 'image',
        fluid: true,
        content: advnextContentSecond,
      },
    ],
  },
];
