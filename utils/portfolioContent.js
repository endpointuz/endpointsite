import orientPic from '../client/assets/img/orient-header.png';
import orientContentFirst from '../client/assets/img/orient-screen-0.jpg';
import orientContentSecond from '../client/assets/img/orient-screen-1.png';
import orientContentThird from '../client/assets/img/orient-screen-2.png';
import advnextPic from '../client/assets/img/advnext-header.png';
import advnextContentFirst from '../client/assets/img/adv-screen-1.jpg';
import advnextContentSecond from '../client/assets/img/adv-screen-2.jpg';
import vcloudsHeader from '../client/assets/img/vclouds-header.png';
import vcloudsFirst from '../client/assets/img/vclouds-image-0.jpg';
import vcloudsSecond from '../client/assets/img/vclouds-image-1.jpg';
import vcloudsThird from '../client/assets/img/vclouds-image-2.png';
import vcloudsFour from '../client/assets/img/vclouds-image-3.png';
import vcloudsFifth from '../client/assets/img/vclouds-image-4.jpg';
import loftHeader from '../client/assets/img/loft-header.png';
import loftFirst from '../client/assets/img/loft-image-0.jpg';
import loftSecond from '../client/assets/img/loft-image-1.png';

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
  {
    id: 'vclouds',
    header: {
      title: 'Редизайн сайта vClouds.uz',
      description: 'Редизайн сайта крупнейшего на рынке Узбекистана провайдера облачных услуг. Полностью переработали структуру сайта, разработали шаблон информационных станиц, страниц услуг с тарифами.',
      date: '01/2019',
      link: {
        to: 'https://vclouds.uz',
        text: 'vclouds.uz',
      },
      tags: ['UI/UX', 'Website'],
      picture: vcloudsHeader,
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
        content: 'vClouds – провайдер облачных услуг, который с 2016 года предоставляет на рынке Узбекистана инновационные решения по оптимизации IT-инфраструктуры, с дальнейшим развитием и сокращением ИТ издержек у клиента.',
      },
      {
        id: 3,
        type: 'image',
        fluid: true,
        content: vcloudsFirst,
      },
      {
        id: 4,
        type: 'text',
        content: 'Мы сделали сайт с максимально простым и удобным интерфейсом. Аккуратно и красиво, с минимальным количеством кликов можно заказать любую интересующуюся услуги и выбрать нужный тариф',
      },
      {
        id: 5,
        type: 'image',
        fluid: false,
        content: vcloudsSecond,
      },
      {
        id: 6,
        type: 'image',
        fluid: false,
        content: vcloudsThird,
      },
      {
        id: 7,
        type: 'image',
        fluid: false,
        content: vcloudsFour,
      },
      {
        id: 8,
        type: 'image',
        fluid: false,
        content: vcloudsFifth,
      },
    ],
  },
  {
    id: 'loftroomstudio',
    header: {
      title: 'Loft Room Studio',
      description: 'Дизайн сайта одной из лучших интерьерных фотостудии Ташкента «Loft Room Studio»',
      date: '06/2019',
      link: {
        to: 'https://loftroom.uz',
        text: 'loftroom.uz',
      },
      tags: ['UI/UX', 'Website'],
      picture: loftHeader,
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
        content: 'Loft Room Studio — новая интерьерная фотостудия импульсного и естественного света в Ташкенте. В студии два очень красивых зала – «Циклорама» и «Loft» темный.',
      },
      {
        id: 3,
        type: 'image',
        fluid: false,
        content: loftFirst,
      },
      {
        id: 4,
        type: 'image',
        fluid: false,
        content: loftSecond,
      },
    ],
  },
];
