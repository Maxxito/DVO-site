import { useTranslation, initReactI18next } from "react-i18next";
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

  const resources = {
    en: {
      translation: {
        intro: {
          part1: 'III Far Eastern',
          part2: 'Choral Olympiad',
          part3: 'October 27 – November 1, 2025',
          part4: 'Vladivostok'
        },
        about: {
          title: {
            part1:'Far Eastern',
            part2:'Choral Olympiad',
          },
          part1: `From October 27 to November 1, 2025, the III Far Eastern Choral Olympiad will be held in Vladivostok. 
          The Third Choir Olympiad is an international competition that includes 
          competitive auditions in 12 nominations, festival concerts, master classes 
          from world-class jury members, opening and closing ceremonies, as well as an 
          unforgettable charge of inspiration.`,
          part2: `The Second Far Eastern Choral Olympiad became the largest choral 
          competition in Russia. It gathered 110 choirs with a total number of 
          participants of over 2,500. Together, we can make the Olympiad a good 
          tradition and make a small 
          but significant contribution to the support and development of choral art!`,
        },
        programm: {
          title:'PROGRAM',
          intitle: {
            part1:'Contest',
            part2:'Festival',
            part3:'Masterclasses',
          },
          text: {
            part1:'The Far Eastern Choral Olympiad will include opening and closing ceremonies, and festival concerts at the best venues in Vladivostok.',
            part2:`All the participants will have the opportunity to take part in 
            master classes from jury members, choral conductors, and 
            world-class composers.`,
          },
        },
        documents: {
          title: 'Documents',
          intitle: {
            part1: 'REGULATIONS',
            part2: 'PARTICIPANT CONDITIONS',
            part3: 'SCHEDULE',
          },
          links: {
            part1: "/CONDITIONS III FECO 2025.pdf",
            part2: "/REGULATIONS III FECO 2025.pdf",
            part3: "/SCHEDULE III FECO 2025.pdf",
          }
        },
        registration: {
          title: 'Registration',
          form: 'Apply',
        },
        jury: {
          title: 'Jury',
          text: 'The list of the Jury will be updated',
        },
        venues: {
          title:{
            part1: 'Venues',
            part2: '',
            part3: '',
          },
          intitle: {
            part1: 'Blue Concert Hall of the FEFU',
            part2: 'Sredny Conference Hall of the FEFU',
            part3: 'Primorsky Regional Philharmonic',
            part4: 'Evangelical Lutheran Church of St. Paul',
            part5: 'Catholic Church of the Most Holy Theotokos',
            part6: 'Central Musical School',
          }
        },
        footer: {
          title: 'contacts',
          intitle: {
            part1: 'Artistic Director',
            part2: 'E-mail',
            part3: 'Social media',
          },
          text: {
            part1: 'Elena Petukhova',
            part2: 'fareastchoir@gmail.com',
            part3: 'Tel: +7 924 236 67 03',
          }
        },
        header: {
          button1: 'Apply ',
          button1url: 'https://choirolympicapplications.tilda.ws/eng',
          buttunflag: 'engflag',
        },
        menu: {
          program: "Program",
          documents: "Documents",
          registration: "Registration",
          results: "Results"
        },
        participants: {
          title: 'Participants 2025',
        }
      }
    },
    ru: {
      translation: {
        intro: {
          part1: 'III Дальневосточная',
          part2: 'хоровая олимпиада',
          part3: '27 октября – 1 ноября 2025',
          part4: 'Владивосток'
        },
        about: {
          title: {
            part1:'хоровая олимпиада',
            part2:'на Дальнем Востоке',
          },
          part1: `С 27 октября по 1 ноября 2025 года во Владивостоке пройдет III Дальневосточная хоровая олимпиада. Третья хоровая олимпиада -
                это международный конкурс, который включает в себя конкурсные прослушивания в 12 номинациях, фестивальные концерты,
                мастер-классы от членов жюри мирового уровня,
                торжественные церемонии открытия и закрытия, а также незабываемый заряд вдохновения.`,
          part2: `Вторая Дальневосточная хоровая Олимпиада стала самым крупным хоровым конкурсом в России,
                включившим в себя 110 хоров с общим количеством конкурсантов более 2500 человек.
                Вместе с вами мы можем сделать Олимпиаду доброй традицией и внести небольшой,
                но значимый вклад в поддержку и развитие хорового искусства!`,
        },
        programm: {
          title:'Программа',
          intitle: {
            part1:'КОНКУРС',
            part2:'ФЕСТИВАЛЬ',
            part3:'МАСТЕР-КЛАССЫ',
          },
          text: {
            part1:'В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.',
            part2:`Все участники хоровой олимпиады получат возможность принять участие  
                    в мастер-классах от членов жюри, хоровых дирижеров и композиторов  
                    мирового уровня.`,
          },
        },
        documents: {
          title: 'Документы',
          intitle: {
            part1: 'ПОЛОЖЕНИЕ ОБ ОЛИМПИАДЕ',
            part2: 'РЕГЛАМЕНТ УЧАСТИЯ И ПРЕБЫВАНИЯ',
            part3: 'ОБЩЕЕ РАСПИСАНИЕ',
          },
          links: {
            part1: "/ПОЛОЖЕНИЕ III, 2025.pdf",
            part2: "/РЕГЛАМЕНТ III, 2025.pdf",
            part3: "/ОБЩЕЕ РАСПИСАНИЕ 2025.pdf",
          }
        },
        registration: {
          title: 'Регистрация',
          form: 'Подать заявку',
        },
        jury: {
          title: 'Жюри',
          text: 'Cписок жюри будет обновлен позже',
        },
        venues: {
          title:{
            part1: 'места',
            part2: ' проведения',
            part3: ' олимпиады',
          },
          intitle: {
            part1: 'Концертный зал "Синий" ДВФУ',
            part2: 'Конференц-зал «Средний» ДВФУ',
            part3: 'Приморская краевая филармония',
            part4: 'Евангелическо-Лютеранская церковь св. Павла',
            part5: 'Католический собор Пресвятой Богородицы',
            part6: 'Центральная Музыкальная Школа',
          }
        },
        footer: {
          title: 'контакты',
          intitle: {
            part1: 'Художественный руководитель',
            part2: 'Электронная почта',
            part3: 'Социальные сети',
          },
          text: {
            part1: 'Елена Петухова',
            part2: 'fareastchoir@gmail.com',
            part3: 'Тел: +7 924 236 67 03'
          }
        },
        header: {
          button1: 'Заявка',
          button1url: 'https://choirolympicapplications.tilda.ws/dvo',
          buttunflag: 'ruflag',
        },
        menu: {
          program: "Программа",
          documents: "Документы",
          registration: "Регистрация",
          results: "Результаты"
        },
        participants: {
          title: 'Участники 2023',
        }
      }
    }
  };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'ru',
    resources,


    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;