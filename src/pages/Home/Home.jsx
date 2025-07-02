import { useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { withLayout } from "../../layout/Layout";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Slider from "react-slick";
import nextIcon from "../../assets/icons/left.svg";
import pdfLogo from "../../assets/icons/pdf.svg";
import prevIcon from "../../assets/icons/right.svg";
import { useWindowSize } from "../../common/useWindowSize";
import { VenueCard } from "../../components/VenueCard/VenueCard";
import styles from "./Home.module.scss";

import J1 from "../../assets/images/jury/Занорин.jpg";
import J2 from "../../assets/images/jury/Петров_.jpg";
import J3 from "../../assets/images/jury/Плешак.jpg";
import J4 from "../../assets/images/jury/Бодяко.jpg";
import J5 from "../../assets/images/jury/Ван Чао_.jpg";
import { ControlledRefModalJury, } from "../../components/Modal/JuryModal";
import { ControlledRefModalPart, } from "../../components/Modal/PartModal";


import V5 from "../../assets/images/Евангелическо-Лютеранская церковь.jpg";
import V4 from "../../assets/images/Приморская краевая филармония.jpg";
import V1 from "../../assets/images/Синий зал ДВФУ.jpg";
import V6 from "../../assets/images/Собор.jpg";
import V2 from "../../assets/images/Средний зал.jpg";
import V7 from "../../assets/images/ЦМШ.png";

import A5 from "../../assets/images/BA2A0695-min.jpg";
import A2 from "../../assets/images/BA2A8620-min.jpg";
import A1 from "../../assets/images/IMG_1354.jpg";
import A3 from "../../assets/images/IMG_2010.jpg";
import A6 from "../../assets/images/IMG_2087-min.jpg";
import A8 from "../../assets/images/IMG_3448-min.jpg";
import A7 from "../../assets/images/IMG_5197-min.jpg";
import A4 from "../../assets/images/IMG_5258-min.jpg";

import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";
import S1 from "../../assets/images/IntroSlides/1.PNG"
import S2 from "../../assets/images/IntroSlides/2.PNG"
import S3 from "../../assets/images/IntroSlides/3.PNG"
import S4 from "../../assets/images/IntroSlides/4.PNG"
import S5 from "../../assets/images/IntroSlides/5.PNG"

import P103 from '../../assets/images/part/1.jpg';
import P94 from '../../assets/images/part/10.jpg';
import P5 from '../../assets/images/part/100.jpg';
import P4 from '../../assets/images/part/101.jpg';
import P3 from '../../assets/images/part/102.jpg';
import P2 from '../../assets/images/part/103.jpg';
import P1 from '../../assets/images/part/104.jpg';
import P105 from '../../assets/images/part/105.jpg';
import P93 from '../../assets/images/part/11.jpg';
import P92 from '../../assets/images/part/12.jpg';
import P91 from '../../assets/images/part/13.jpg';
import P90 from '../../assets/images/part/14.jpg';
import P89 from '../../assets/images/part/15.jpg';
import P88 from '../../assets/images/part/16.jpg';
import P87 from '../../assets/images/part/17.jpg';
import P86 from '../../assets/images/part/18.jpg';
import P85 from '../../assets/images/part/19.jpg';
import P102 from '../../assets/images/part/2.jpg';
import P84 from '../../assets/images/part/20.jpg';
import P83 from '../../assets/images/part/21.jpg';
import P82 from '../../assets/images/part/22.jpg';
import P81 from '../../assets/images/part/23.jpg';
import P80 from '../../assets/images/part/24.jpg';
import P79 from '../../assets/images/part/25.jpg';
import P78 from '../../assets/images/part/26.jpg';
import P77 from '../../assets/images/part/27.jpg';
import P76 from '../../assets/images/part/28.jpg';
import P75 from '../../assets/images/part/29.jpg';
import P101 from '../../assets/images/part/3.jpg';
import P74 from '../../assets/images/part/30.jpg';
import P73 from '../../assets/images/part/31.jpg';
import P72 from '../../assets/images/part/32.jpg';
import P71 from '../../assets/images/part/33.jpg';
import P70 from '../../assets/images/part/34.jpg';
import P69 from '../../assets/images/part/35.jpg';
import P68 from '../../assets/images/part/36.jpg';
import P67 from '../../assets/images/part/37.jpg';
import P66 from '../../assets/images/part/38.jpg';
import P65 from '../../assets/images/part/39.jpg';
import P100 from '../../assets/images/part/4.jpg';
import P64 from '../../assets/images/part/40.jpg';
import P63 from '../../assets/images/part/41.jpg';
import P62 from '../../assets/images/part/42.jpg';
import P61 from '../../assets/images/part/43.jpg';
import P60 from '../../assets/images/part/44.jpg';
import P59 from '../../assets/images/part/45.jpg';
import P58 from '../../assets/images/part/46.jpg';
import P57 from '../../assets/images/part/47.jpg';
import P56 from '../../assets/images/part/48.jpg';
import P55 from '../../assets/images/part/49.jpg';
import P99 from '../../assets/images/part/5.jpg';
import P54 from '../../assets/images/part/50.jpg';
import P53 from '../../assets/images/part/51.jpg';
import P52 from '../../assets/images/part/52.jpg';
import P51 from '../../assets/images/part/53.jpg';
import P50 from '../../assets/images/part/54.jpg';
import P49 from '../../assets/images/part/55.jpg';
import P48 from '../../assets/images/part/56.jpg';
import P47 from '../../assets/images/part/57.jpg';
import P46 from '../../assets/images/part/58.jpg';
import P45 from '../../assets/images/part/59.jpg';
import P98 from '../../assets/images/part/6.jpg';
import P44 from '../../assets/images/part/60.jpg';
import P43 from '../../assets/images/part/61.jpg';
import P42 from '../../assets/images/part/62.jpg';
import P41 from '../../assets/images/part/63.jpg';
import P40 from '../../assets/images/part/64.jpg';
import P39 from '../../assets/images/part/65.jpg';
import P38 from '../../assets/images/part/66.jpg';
import P37 from '../../assets/images/part/67.jpg';
import P36 from '../../assets/images/part/68.jpg';
import P35 from '../../assets/images/part/69.jpg';
import P97 from '../../assets/images/part/7.jpg';
import P34 from '../../assets/images/part/70.jpg';
import P33 from '../../assets/images/part/71.jpg';
import P32 from '../../assets/images/part/72.jpg';
import P31 from '../../assets/images/part/73.jpg';
import P30 from '../../assets/images/part/74.jpg';
import P28 from '../../assets/images/part/76.jpg';
import P25 from '../../assets/images/part/79.jpg';
import P96 from '../../assets/images/part/8.jpg';
import P24 from '../../assets/images/part/80.jpg';
import P23 from '../../assets/images/part/81.jpg';
import P22 from '../../assets/images/part/82.jpg';
import P21 from '../../assets/images/part/83.jpg';
import P20 from '../../assets/images/part/84.jpg';
import P19 from '../../assets/images/part/85.jpg';
import P18 from '../../assets/images/part/86.jpg';
import P17 from '../../assets/images/part/87.jpg';
import P16 from '../../assets/images/part/88.jpg';
import P15 from '../../assets/images/part/89.jpg';
import P95 from '../../assets/images/part/9.jpg';
import P14 from '../../assets/images/part/90.jpg';
import P13 from '../../assets/images/part/91.jpg';
import P12 from '../../assets/images/part/92.jpg';
import P11 from '../../assets/images/part/93.jpg';
import P10 from '../../assets/images/part/94.jpg';
import P1000 from '../../assets/images/part/95.jpg';
import P9 from '../../assets/images/part/96.jpg';
import P8 from '../../assets/images/part/97.jpg';
import P7 from '../../assets/images/part/98.jpg';
import P6 from '../../assets/images/part/99.jpg';
import i18n from '../../utils/trans.js'
import { useTranslation } from "react-i18next";


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    observerRefValue = domRef.current;
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Home = () => {
  const {t} = useTranslation()
  const width = useWindowSize().width;
  const [settingsNews, setSettingsNews] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipe: true,
    draggable: true,
    slidesToScroll: 1,
  });

  const [settingsVideos, setSettingsVideos] = useState({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
  });

  const [settingsIntro, setSettingsIntro] = useState({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });


  const contentRef = useRef(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    if (contentRef.current) {
      const currentScrollY = contentRef.current.scrollTop
      setScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      controls.start({ opacity: scrollY / contentRef.current.scrollHeight });
    }
  }, [scrollY, controls]);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (width < 1300 && width > 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 2,
      });
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 2,
      });
      return;
    }

    if (width < 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 1,
      });
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 1,
      });
      return;
    }

    setSettingsNews({
      ...settingsNews,
      slidesToShow: 3,
    });
    setSettingsVideos({
      ...settingsVideos,
      slidesToShow: 3,
    });
  }, [width]);

  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(path);
  };


  const nextSlide = () => {
    const container = document.querySelector(`.${styles.photosAlbums}`);
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      container.scrollLeft += 20;
      scrollAmount += 10;
      if (scrollAmount >= 320) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  const prevSlide = () => {
    const container = document.querySelector(`.${styles.photosAlbums}`);
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      container.scrollLeft -= 20;
      scrollAmount += 10;
      if (scrollAmount >= 320) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  }

  const [fullPart, setFullPart] = useState(false);
  const participants = [
    {
      image: P1,
      short: "Детский хор «Соловушки» (Бикин)",
      type: 'A2',
    },
    {
      image: P2,
      short: "Детско-юношеская хоровая капелла «Школьные годы» (Симферополь)",
      type: 'A2, C1',
    },
    {
      image: P3,
      short: "Камерный хор «Мадригал» (Симферополь)",
      type: 'B3, C1',
    },
    {
      image: P4,
      short: "Детский образцовый фолклорный ансамбль «Хорохоня» (Николаевск-На-Амуре)",
      type: 'C3',
    },
    {
      image: P5,
      short: "Детский хор «Кантилена» им. И.Л. Сарнацкой (Зеленоград)",
      type: 'A2, C1, C2',
    },
    {
      image: P6,
      short: "Вокальный ансамбль «Весёлые нотки» (Ясногорск)",
      type: 'A4',
    },
    {
      image: P7,
      short: "Хор «Brevis» ГБОУ ДО ЦТРиМЭО «Радость» (Москва)",
      type: 'A2, C1, C2',
    },
    {
      image: P8,
      short: "Старший хор ГБОУ ДО ЦТРиМЭО «Радость» (Москва)",
      type: 'A2',
    },

    {
      image: P9,
      short: "«Соловушка» МКУ ДО «ДШИ» (с. Рощино, Приморский край)",
      type: 'A4, C1, C2',
    },
    {
      image: P1000,
      short: "«Кантилена» МБУДО «ЦДМШ» (Южно-Сахалинск)",
      type: 'B1, C1',
    },
    {
      image: P10,
      short: "Специальный хор «Гармония» МБУ ДО «Детская музыкальная школа №1  г. Южно-Сахалинска» (Южно-Сахалинск)",
      type: 'C2',
    },
    {
      image: P11,
      short: "Вокальный ансамбль «Камертон» МБУ ДО «Детская музыкальная школа №1 г. Южно-Сахалинска» (Южно-Сахалинск)",
      type: 'A4',
    },
    {
      image: P12,
      short: "Младший специальный хор «Весёлые нотки» МБУ ДО «Детская музыкальная школа №1 г. Южно-Сахалинска» (Южно-Сахалинск)",
      type: 'A1',
    },
    {
      image: P13,
      short: "Академический народный хор «РОССИЯНЕ» Учебно-методического центра культуры и народного творчества (Чита)",
      type: 'A2',
    },
  
    {
      image: P14,
      short: "Вокальный ансамбль «Элегия» учебно-методического центра культуры и народного творчества (Чита)",
      type: 'B4',
    },

    {
      image: P15,
      short: "Образцовый коллектив хор девушек «Лира»(Санкт-Петербург)",
      type: 'B1, C1',
    },
    {
      image: P16,
      short: "Образцовый академический хор МБУ ДО «Детская музыкальная школа Амурского муниципального района» (Амурск)",
      type: 'A2',
    },
    {
      image: P17,
      short: "Вокальный ансамбль Образцового академического хора МБУ ДО «Детская музыкальная школа Амурского муниципального района» (Амурск)",
      type: 'A4',
    },
    {
      image: P18,
      short: "Амурский камерный хор «Возрождение» (Благовещенск)",
      type: 'B3, C1',
    },
    {
      image: P19,
      short: "Вокальный ансамбль «Fides» КГБПОУ Камчатский колледж искусств (Петропавловск-Камчатский)",
      type: 'B4, C2',
    },
    {
      image: P20,
      short: "Народный коллектив Академический хор «Кредо» (Жуковский)",
      type: 'B2',
    },
    {
      image: P21,
      short: "Вокальный ансамбль «Созвучие» МБУ ДО «ЭДШИ АМР» (пгт. Эльбан, Хабаровский край)",
      type: 'A4',
    },
    {
      image: P22,
      short: "Женский академический хор КГБПОУ «Хабаровский краевой колледж искусств» (Хабаровск)",
      type: 'A4, C1',
    },
    {
      image: P23,
      short: "Студенческий хор «Вместе» ФГБОУ ВО «Забайкальский государственный университет» (Чита)",
      type: 'B2',
    },
    {
      image: P24,
      short: "Хор «Мелодия» МБУДО «Жуковская детская школа искусств №1» (Жуковский)",
      type: 'A2, C2',
    },
    {
      image: P25,
      short: "Образцовый вокальный ансамбль «Светлячок» МКОУ ДО ДШИ (Николаевск-на Амуре)",
      type: 'A4',
    },
    {
      image: P28,
      short: "Образцовый художественный коллектив Министерства образования и науки академический хор «Детство» (Благовещенск)",
      type: 'C3',
    },
    {
      image: P30,
      short: "Фольклорный ансамбль «За реченькой диво» МБУ ДО «Детская школа искусств №3» (Чита)",
      type: 'B4, C1',
    },
    {
      image: P31,
      short: "Архиерейский мужской хор «Знамение» (Иркутск)",
      type: 'B4, C1',
    },
    {
      image: P32,
      short: "Капелла мальчиков и юношей Свердловской государственной детской филармонии (Екатеринбург)",
      type: 'A3, B1, C1, C2',
    },
    {
      image: P33,
      short: "Специальный хор «Капель» МБ ОУ ДО «Детская школа искусств» МО «Холмский городской округ» (Холмск)",
      type: 'A2',
    },
    {
      image: P34,
      short: "Детский народный хор «Златица» МБУДО «Детская школа искусств «Этнос» (Южно=Сахалинск)",
      type: 'C3',
    },
    {
      image: P35,
      short: "Детский народный хор «Цветень» МБУДО «Детская школа искусств «Этнос» (Южно=Сахалинск)",
      type: 'C3',
    },
    {
      image: P36,
      short: "Народный хор «С песней по жизни» (с. Амурзет, Еврейская автономная область)",
      type: 'C4',
    },
    {
      image: P37,
      short: "Народный ансамбль казачьей песни «Гуляй, братки» (с. Амурзет, Еврейская автономная область)",
      type: 'C4',
    },
    {
      image: P38,
      short: "Образцовый вокальный ансамбль «Весёлые нотки» (Хабаровск)",
      type: 'A4',
    },
    {
      image: P39,
      short: "Вокальный ансамбль «Консонанс» МБУ ДО «Детская школа искусств №8» города Иркутска (Иркутск)",
      type: 'A4',
    },
    {
      image: P40,
      short: "Детский академический хор «ЛИРА» МБУ ДО «Детская школа искусств» Вяземского района (Вяземский)",
      type: 'A2',
    },
    {
      image: P41,
      short: "Концертный хор «Крылья» Музыкальная школа имени композитора Евгения Крылатова (Пермь)",
      type: 'A2, C1',
    },
    {
      image: P42,
      short: "«Юные хористы» МБУ ДО «Детская школа искусств р.п.Хор муниципального района имени Лазо» (р.п. Хор, Хабаровский край)",
      type: 'A2',
    },
    {
      image: P43,
      short: "Академический женский хор «Прелюдия» (Хабаровск)",
      type: 'B1',
    },
    {
      image: P44,
      short: "«Живая традиция» МБУ ДО ДШИ Ольгинский МО пгт Ольга (пгт Ольга, Приморский край)",
      type: 'C3',
    },
    {
      image: P45,
      short: "Хор «Montem» Санкт-Петербургский Горный университет императрицы Екатерины II (Санкт-Петербург)",
      type: 'B3, C1, C2',
    },
    {
      image: P46,
      short: "Студенческий хор русской песни «Кросно» КГБПОУ «Хабаровский колледж искусств» (Хабаровск)",
      type: 'C4',
    },
    {
      image: P47,
      short: "Заслуженный творческий коллектив Приморского края Народный студенческий хор «Покров» ДВФУ (Владивосток)",
      type: 'C4',
    },
    {
      image: P48,
      short: "Народный хор «Черемушки» Районный дом культуры пгт Смоляниново (Приморкий край)",
      type: 'B4',
    },
    {
      image: P49,
      short: "Вокальный ансамбль «Музыкальная волна» МКУДО ДШИ №2 (Артём)",
      type: 'A4',
    },
    {
      image: P50,
      short: "Младший хор «Искорки» МБУДО «Детская школа искусств №6 г. Владивостока (Владивосток)",
      type: 'A1',
    },
    {
      image: P51,
      short: "Образцовый хор «Мальчиши» МБУДО «Детская школа искусств №6 г. Владивостока (Владивосток)",
      type: 'A3',
    },
    {
      image: P52,
      short: "Образцовый хор «Радуга» МБУДО «Детская школа искусств №6 г. Владивостока (Владивосток)",
      type: 'A2',
    },
    {
      image: P53,
      short: "Ансамбль русской песни «Белые россы» ГАПОУ «Приморский краевой колледж культуры» (Уссурийск)",
      type: 'C4',
    },
    {
      image: P54,
      short: "Тюнгюлюнский народный хоровой коллектив Республики Саха (Якутия) (с. Тюнгюлю)",
      type: 'B2, B4, C1, C4',
    },
    {
      image: P55,
      short: "Ансамбль народной песни «КАЛИНКА» МКУ ДО «Тернейская ДШИ» (п. Пластун, Приморский край)",
      type: 'C3',
    },
    {
      image: P56,
      short: "Заслуженный коллектив самодеятельного художественного творчества Приморского края Народный хор русской песни (Большой Камень)",
      type: 'C4',
    },
    {
      image: P57,
      short: "Фольклорный ансамбль «Белые росы» (Южно-Сахалинск)",
      type: 'C4',
    },
    {
      image: P58,
      short: "Народный ансамбль русской песни «Берегиня» (Хабаровск)",
      type: 'C4',
    },
    {
      image: P59,
      short: "Хор «Маячок» Детской школы искусств ДВГИИ (Владивосток)",
      type: 'A2',
    },
    {
      image: P60,
      short: "Заслуженный коллектив Приморского края народный хор русской песни «Приморские узоры» (п. Кавалерово)",
      type: 'C4',
    },
    {
      image: P61,
      short: "Народная вокальная группа «Мужской разговор» (п. Кавалерово)",
      type: 'C4',
    },
    {
      image: P62,
      short: "Вокальный ансамбль «Фантазёры «МКУДО «Детская школа искусств № 1» Артемовского городского округа (Артём)",
      type: 'A4',
    },
    {
      image: P63,
      short: "Народный хор «Улыбка» МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'C4',
    },
    {
      image: P64,
      short: "Украинский народный хор им. А. Криля «Горлица» МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'C4',
    },
    {
      image: P65,
      short: "Заслуженный коллектив Приморского края народный хор «Дети войны» МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'C4',
    },
    {
      image: P66,
      short: "Вокальная группа «Русская песня« МБУК «Дом культуры «Традиции и современность» (Владивосток)",
      type: 'B4',
    },
    {
      image: P67,
      short: "Народный коллектив любительского художественного творчества «Ансамбль эстрадной песни «Ритмы Ретро»",
      type: 'B4',
    },
    {
      image: P68,
      short: "«Прелестные глазки старший состав» МАУ ДО «Детская музыкальная школа № 6» (Петропавловск-Камчатский)",
      type: 'A4, C1',
    },
    {
      image: P69,
      short: "«Прелестные глазки младший состав» МАУ ДО «Детская музыкальная школа № 6» (Петропавловск-Камчатский)",
      type: 'A4',
    },
    {
      image: P70,
      short: "Образцовый коллектив хор народной песни «Оберег» (Арсеньев)",
      type: 'C3',
    },
    {
      image: P71,
      short: "«Школьный вальс» Детская школа искусств Приморского краевого колледжа искусств (Владивосток)",
      type: 'A2',
    },
    {
      image: P72,
      short: "Ансамбль народной песни «СВЕТОЧ» МКУ ДО «ДШИ» (с. Рощино, Приморский край) ",
      type: 'C3',
    },
    {
      image: P73,
      short: "Любительский самодеятельный коллектив народного творчества ансамбль русской песни «Веренея» (с. Матвеевка, Хабаровский район)",
      type: 'C4',
    },
    {
      image: P74,
      short: "Вокальный ансамбль «Диез» МБУДО «ДШИ ХМР» (с. Чёрная речка, Хабаровский край)",
      type: 'A4',
    },
    {
      image: P75,
      short: "Студия народной песни  «Вьюнок» МАУ ДО г. Хабаровска «Центр эстетического воспитания детей «Отрада» (Хабаровск)",
      type: 'C3',
    },
    {
      image: P76,
      short: "Заслуженный коллектив Приморского края Образцовый ансамбль народной песни «Звонница» (младшая группа) (Владивосток)",
      type: 'C3',
    },
    {
      image: P77,
      short: "Заслуженный коллектив Приморского края Образцовый ансамбль народной песни «Звонница» (старшая группа) (Владивосток)",
      type: 'C3',
    },
    {
      image: P78,
      short: "Ансамбль народной песни «Ярица» ГАПОУ «Приморский краевой колледж искусств» (Владивосток)",
      type: 'C4',
    },
    {
      image: P79,
      short: "Заслуженный коллектив народного творчества образцовый хор народной песни «Млада» (Хабаровск)",
      type: 'C3, C4',
    },
    {
      image: P80,
      short: "Младший хор Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток)",
      type: 'A1',
    },
    {
      image: P81,
      short: "Старший хор Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток)",
      type: 'C2',
    },
    {
      image: P82,
      short: "Хор мальчиков и юношей Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток)",
      type: 'A3',
    },
    {
      image: P83,
      short: "Сводный хор Студии народного творчества «Елань» МАУДО ДЮЦ «Сказка», КДШИ при ХККИ (Хабаровск)",
      type: 'C3',
    },
    {
      image: P84,
      short: "Народный коллектив вокальный ансамбль «Пой, Friend!» (Иркутск)",
      type: 'B3, B4, C1',
    },
    {
      image: P85,
      short: "Серебряные нотки МБУДО «Детская школа искусств №4 г. Владивостока» (Владивосток)",
      type: 'A2',
    },
    {
      image: P86,
      short: "Академический хор Дальневосточного федерального университета (Владивосток)",
      type: 'B2',
    },
    {
      image: P87,
      short: "Ансамбль народной песни «Купаленка» МАУ ДО ЦЭВД «Отрада» (Хабаровск)",
      type: 'С3',
    },
    {
      image: P88,
      short: "Младший хор «Фантазия» МБУДО «ДШИ № 8 им. А. В. Воробьёва г. Владивостока»",
      type: 'A1',
    },
    {
      image: P89,
      short: "Младший хор мальчиков «Like music» Центральная детская музыкальная школа им. Б.Г. Павликовской (Чита)",
      type: 'C4',
    },
    {
      image: P90,
      short: "Хор младших классов «Акварель» МБУ ДО «Городская детская хоровая школа» НГО (Находка)",
      type: 'A1',
    },
    {
      image: P91,
      short: "Хор мальчиков и юношей «Рондо» МБУ ДО «Городская детская хоровая школа» НГО",
      type: 'A3',
    },
    {
      image: P92,
      short: "Ансамбль русской песни «Елань» (Хабаровск)",
      type: 'C4',
    },
    {
      image: P93,
      short: "Наяхинский народный хор имени Семена Гаврильевича Васильева (Усть-Алданаский улус (район), село Балыктах, Республика Саха (Якутия))",
      type: 'B2',
    },
    {
      image: P94,
      short: "Майинский народный хор им. Н.Н. Васильевой (Мегино-Кангаласский улус, с. Майя, Республика Саха (Якутия))",
      type: 'B2',
    },
    {
      image: P95,
      short: "Хор младших классов «Светлячок» МБУДО «Детская школа искусств №1 им. С. Прокофьева г. Владивостока» (Владивосток)",
      type: 'A1',
    },
    {
      image: P96,
      short: "Хор старших классов «Алые паруса» МБУДО «Детская школа искусств №1 им. С. Прокофьева г. Владивостока» (Владивосток)",
      type: 'A2',
    },
    {
      image: P97,
      short: "Народный ансамбль русской песни «Прялица» МБУ Городской Центр Культуры (Большой Камень)",
      type: 'C4',
    },
    {
      image: P98,
      short: "Камерный хор Дальневосточного государственного института искусств (Владивосток)",
      type: 'B3',
    },
    {
      image: P99,
      short: "Младший хор «Веснушки» МБУДО «ДМШ №2 г. Владивостока» (Владивосток)",
      type: 'A1',
    },
    {
      image: P100,
      short: "Старший хор «Весенние голоса» МБУДО «ДМШ №2 г. Владивостока» (Владивосток)",
      type: 'A2',
    },
    {
      image: P101,
      short: "Хор старших классов «Ассоль» МБУДО «ДШИ №3 г. Владивостока»",
      type: 'A2',
    },
    {
      image: P102,
      short: "Хор «Аллегри» МБУ ДО «ДШИ №5» (Владивосток)",
      type: 'A1',
    },
    {
      image: P103,
      short: "Хор «Музыкальный калейдоскоп» МБУДО Детская Школа Искусств №7 (Владивосток)",
      type: 'C2',
    },
    {
      image: P105,
      short: "Сводный хор «Радость» МОГБУ ДО «Ольская детская школа искусств» и ДШИ при ГАПОУ МКИ (п. Ола и г. Магадан)",
      type: 'A2',
    },
  ]

  return (
    <div
      style={{ position: 'relative' }}
      ref={contentRef}
      onScroll={handleScroll}
      id={"intro"}
    >
      <div className={styles.introSection}>
        <div className={styles.intro}>
          <Slider {...settingsIntro}>
            <div className={styles.slideImage}>
              <img
                src={S1}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S2}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S3}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S4}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S5}

              />
            </div>
          </Slider>
          <div className={styles.introText}>
            <span className={styles.olympTitle}>
              {t('intro.part1')}<br />{t('intro.part2')}
            </span>
            <span className={styles.olympDate}>
              {t('intro.part3')}<br />{t('intro.part4')} 
            </span>
          </div>
        </div>
      </div>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <div className={styles.title}>
              <span className={styles.aboutTitle}>
                {t('about.title.part1')}
              </span>
              <span className={styles.aboutTitleBottom}>
                {t('about.title.part2')}
              </span>
            </div>

            <div className={styles.aboutDescription}>
              {t('about.part1')}<br></br>{t('about.part2')}
            </div>

            <div className={styles.playerWrapper}>
              <ReactPlayer
                className={styles.player}
                url='https://www.youtube.com/watch?v=Bjo2Mwu63f0'
                width='100%'
                height='100%'
              />
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.rules} id={"rules"}>
            <span className={styles.Title} id={"programm"}>{t('programm.title')}</span>
            <div className={styles.rulesContent}>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{t('programm.intitle.part1')}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <table border="black">
                    <thead className="tableHead">
                      <tr>
                        <th>{t("categoriesTable.headers.designation")}</th>
                        <th>{t('categoriesTable.headers.categoryName')}</th>
                        <th>{t('categoriesTable.headers.age')}</th>
                        <th>{t('categoriesTable.headers.participants_number')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A1</td>
                        <td>{t('categoriesTable.categories.A1')}</td>
                        <td><i>7-11</i></td>
                        <td rowSpan={3} width="60px"><i>{t('categoriesTable.participantCounts.from_16')}</i></td>
                      </tr>
                      <tr>
                        <td>A2</td>
                        <td>{t('categoriesTable.categories.A2')}</td>
                        <td><i>11-17</i></td>
                      </tr>
                      <tr>
                        <td>A3</td>
                        <td>{t('categoriesTable.categories.A3')}</td>
                        <td><i>7-11</i></td>
                      </tr>
                      <tr>
                        <td>A4</td>
                        <td>{t('categoriesTable.categories.A4')}</td>
                        <td><i>7-11</i></td>
                        <td><i>6-12</i></td>
                      </tr>
                      <tr>
                        <td>A5</td>
                        <td>{t('categoriesTable.categories.A5')}</td>
                        <td><i>11-17</i></td>
                        <td><i>6-12</i></td>
                      </tr>
                      <tr>
                        <td>B1</td>
                        <td>{t('categoriesTable.categories.B1')}</td>
                        <td rowSpan={4}><i>{t('categoriesTable.ageRanges.noRestriction')}</i></td>
                        <td rowSpan={2}><i>{t('categoriesTable.participantCounts.from_16')}</i></td>
                      </tr>
                      <tr>
                        <td>B2</td>
                        <td>{t('categoriesTable.categories.B2')}</td>
                      </tr>
                      <tr>
                        <td>B3</td>
                        <td>{t('categoriesTable.categories.B3')}</td>
                        <td><i>16-28</i></td>
                      </tr>
                      <tr>
                        <td>B4</td>
                        <td>{t('categoriesTable.categories.B4')}</td>
                        <td><i>6-12</i></td>
                      </tr>
                      <tr>
                        <td>C1</td>
                        <td>{t('categoriesTable.categories.C1')}</td>
                        <td rowSpan={3}><i>{t('categoriesTable.ageRanges.noRestriction')}</i></td>
                        <td rowSpan={3}><i>{t('categoriesTable.participantCounts.from_6')}</i></td>
                      </tr>
                      <tr>
                        <td>C2</td>
                        <td>{t('categoriesTable.categories.C2')}</td>
                      </tr>
                      <tr>
                        <td>C3</td>
                        <td>{t('categoriesTable.categories.C3')}</td>
                      </tr>
                    </tbody>
                  </table> 
                    {t('categoriesTable.addendum')}
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{t('programm.intitle.part2')}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    {t('programm.text.part1')}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{t('programm.intitle.part3')}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    {t('programm.text.part2')}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.rules} id={"documents"}>
            <span className={styles.Title}>{t('documents.title')}</span>
            <div className={styles.documentsContent}>
              <div className={styles.documentsButtons}>
                <div className={styles.documentsButton}>
                  <a href={t('documents.links.part1')} download={t('documents.intitle.part1')}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    {t('documents.intitle.part1')}
                  </a>
                </div>
                <div className={styles.documentsButton}>
                  <a href={t('documents.links.part2')} download={t('documents.intitle.part2')}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    {t('documents.intitle.part2')}
                  </a>
                </div>
                <div className={styles.documentsButton}>
                  <a href={t('documents.links.part3')} download={t('documents.intitle.part3')}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    {t('documents.intitle.part3')}
                  </a>
              </div>
              </div>
            </div>
          </div>
        </div>

      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.registration} id="registration">
            <div className={styles.Title}>{t('registration.title')}</div>
            <a className={styles.FormButton} href="https://choirolympicapplications.tilda.ws/dvo">{t('registration.form')}</a>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper} style={{ marginBottom: i18n.language !== 'ru' ? '150px' : 'auto' }}>
        <div className={styles.Title}>{t('participants.title')}</div>
        {i18n.language == 'en' && (<div className={styles.aboutDescription} style={{ textAlign: 'center' }}>This section will be updated</div>)}
        {i18n.language !== 'en' && (
          <div className={styles.participants} id="participants">
          <div
            className={styles.participantsTable}
            style={{ maxHeight: fullPart ? "100%" : "0px" }}
          >
            {participants.map((item) => (
              <ControlledRefModalPart item={item} />
            ))}
          </div>

          <div
            className={styles.moreButton}
            onClick={() => {
              if (fullPart) {
                const elementToScroll = document.getElementById(
                  "#participants"?.replace("#", "")
                );
                window.scrollTo({
                  top: elementToScroll.offsetTop - 100,
                  behavior: "smooth",
                });
              }
              setFullPart(!fullPart);
            }}
          >
            <button>{fullPart ? "СКРЫТЬ" : "ПОКАЗАТЬ УЧАСТНИКОВ"}</button>
          </div>
        </div>
      )}
        </div>

      </FadeInSection>
      {i18n.language !== 'en' && <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.about}>
          <div className={styles.Title} id="jury">{t('jury.title')}</div>
            <div className={styles.juryList}>

              

              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
  <img src={J1} alt="jury" />
  <span className={styles.juryName}>
    Александр Занорин<br></br>(Саратов)
  </span>
</div>
                }
                image={J1}
                bio="<h1>ПРЕДСЕДАТЕЛЬ ЖЮРИ</h1>Александр Германович Занорин – дирижер, профессор, ректор Саратовской государственной консерватории им. Л.В. Собинова, 
                организатор музыкальных фестивалей и образовательных проектов в сфере культуры. С 2003 по 2025 – художественный руководитель и регент Архиерейского мужского хора Саратовской Митрополии.
                Исполнительскую деятельность начал в 1995 году в Саратовском губернском театре хоровой музыки в качестве артиста, 
                с 1997  –  хормейстера. В составе коллектива неоднократно становился лауреатом всероссийских и международных конкурсов. В 2000 году окончил Саратовскую консерваторию, в 2002 –  ассистентуру-стажировку Саратовской консерватории. С 2000 года ведет  
                педагогическую деятельность в Саратовской консерватории на кафедре дирижирования (с 2022 – в должности профессора). В 2009–2016 – начальник концертного управления, с 2016 – ректор Саратовской государственной консерватории имени Л.В. Собинова.
                Является организатором региональных, всероссийских и международных музыкальных конкурсов и фестивалей. Под руководством А. 
                Занорина проведен ряд общественно значимых мероприятий в рамках национального проекта «Культура», включая творческие мастерские и лаборатории, педагогические форумы, научные конференции и другие образовательные проекты. Регулярно принимает 
                участие в работе жюри всероссийских и международных хоровых конкурсов. Художественный руководитель епархиального фестиваля-конкурса хоров «Пойте Богу нашему, пойте!» (Саратов, 2022), председатель оргкомитета Международного конкурса молодых композиторов им. А.Г. Шнитке (Саратов, 2023).
                Награжден Почетным знаком Губернатора Саратовской области «Надежда Губернии» (2003), Благодарностью министерства образования 
                Саратовской области (2004),  Благодарностью  министра культуры Саратовской области (2012), Патриаршим знаком «За труды по духовно-нравственному просвещению» (2019), медалью Саратовской епархии «Спас нерукотворный» 1 степени (2021), медалью  
                Министерства обороны РФ «За укрепление боевого содружества» (2023)."
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J2} alt="jury" />
                    <span className={styles.juryName}>
                       Алексей Петров<br></br>(Москва)
                    </span>
                  </div>
                }
                image={J2}
                bio="Алексей Кириллович Петров – доцент кафедры хорового дирижирования Академии хорового искусства имени В.С. Попова (Москва), кандидат искусствоведения, художественный руководитель Камерного хора АХИ имени В.С. Попова. 
                Лауреат всероссийских и международных конкурсов. Член Президиума Всероссийского хорового общества.
                Преподавательскую деятельность в Академии хорового искусства ведет с 2004 года. С 2008 года – доцент кафедры хорового дирижирования, в 2009-2016 – заведующий кафедрой, в 2016-2020 – ректор. В настоящее время продолжает преподавательскую 
                работу в должности доцента кафедры хорового дирижирования, осуществляет художественное руководство учебно-концертнми хоровыми коллективами Академии.
                В разные годы с хорами Академии выступал в России, Польше, Франции, Германии, Бельгии, Швейцарии, Испании, Греции, Китае, Японии, США, Мексике, Канаде; неоднократно выступал с ведущими симфоническими оркестрами России.
                Управлял Сводным детским хором во время исполнения Гимна РФ на Церемонии закрытия XI Паралимпийских Зимних Игр в Сочи (2014). Участвовал в качестве дирижера Сводного хора мальчиков в концертах на Новой сцене Мариинского театра (2014) и в 
                Государственном Кремлевском Дворце (2015, 2016).  С сезона 2021-2022 – главный приглашенный хормейстер Екатеринбургского государственного академического театра оперы и балета.
                Алексей Петров является признанным мастером в области хорового исполнительства и вокального воспитания. Имеет две благодарности Министра культуры РФ (2011 и 2014). За большой вклад в развитие отечественной культуры и искусства, многолетнюю 
                плодотворную деятельность награжден медалью ордена «За заслуги перед Отечеством» II степени (2018)."
              />

              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J3} alt="jury" />
                    <span className={styles.juryName}>
                      Сергей Плешак<br></br>(Санкт-Петербург)
                    </span>
                  </div>
                }
                image={J3}
                bio="Сергей Викторович Плешак – композитор, дирижёр, профессор Санкт-Петербургской государственной консерватории им. Н.А. Римского-Корсакова. Лауреат многочисленных конкурсов композиторов. 
                Член Союза композиторов России. Лауреат Премии Правительства Санкт-Петербурга в области культуры и искусства за композиторское мастерство (2018).
                C отличием окончил Хоровое училище им. М.И. Глинки, дирижерско-хоровой факультет  и  ассистентуру-стажировку Санкт-Петербургской консерватории им. Н.А. Римского-Корсакова (класс профессора Е.П. Кудрявцевой). 
                В настоящее время Сергей Плешак – один из самых востребованных петербургских композиторов, пишущих детскую, хоровую и театральную музыку.
                В творческом портфеле автора насчитывается более 20 произведений для музыкального театра (оперы, мюзиклы, балет), несколько десятков произведений для хора (детского, женского, смешанного), а также камерная и оркестровая музыка.
                В театрах Санкт-Петербурга с успехом идут мюзиклы Сергея Плешака. Сюита для симфонического оркестра «Прогулки по Эрмитажу» в разные годы исполнялась оркестрами России, Франции и Казахстана. Многие сочинения 
                композитора с успехом исполняются в городах Америки, Англии, Венгрии, Германии, Голландии, Дании, Италии, Казахстана, Латвии, Литвы, Норвегии, Польши, Финляндии, Франции, Черногории, Чехии, Швейцарии, Швеции, Эстонии, ЮАР, Южной Кореи. Авторские концерты Сергея Плешака проходят во многих городах России. 
                Визитной карточкой композитора является песня «Улетели журавли», входящая в репертуар нескольких сотен хоровых коллективов России и стран ближнего зарубежья.
                Активно выступает с мастер-классами и лекциями в различных учебных заведениях России, принимает участие в работе жюри хоровых конкурсов. Произведения Сергея Плешака были изданы издательствами «Композитор», 
                «Нота», «Союз художников», «Планета музыки», а также издательством Санкт-Петербургской консерватории. "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J4} alt="jury" />
                    <span className={styles.juryName}>
                       Инесса Бодяко<br></br>(Минск, Беларусь)
                    </span>
                  </div>
                }
                image={J4}
                bio="Инесса Михайловна Бодяко – профессор кафедры хорового дирижирования Белорусской государственной академии музыки, доцент, художественный руководитель 
                Студенческого хора Белорусской государственной Академии музыки. Лауреат многочисленных международных конкурсов.
                С 1997 по 2007 – хормейстер Академического хора Национальной государственной телерадиокомпании Республики Беларусь. Основатель и руководитель камерного хора «Сantemus» 
                (2000–2006). В 1998–2010 – регент православного храма в честь Рождества Христова (Большое Стиклево, Минская область). С 2007 года – художественный руководитель и дирижер студенческого хора Академии музыки. В 2011-2021 – заведующий кафедрой хорового дирижирования.
                Хоровые коллективы под руководством Инессы Бодяко завоевывали высшие награды и Гран-при множества межденародных соревнований (Беларусь, Китай, Россия, Италия, Казахстан). 
                Студенческий хор Академии музыки под ее руководством подготовил большое количество премьерных исполнений современных хоровых композиторов в Беларуси. 
                Сегодня Инесса Михайловна является Председателем Правления Белорусской ассоциации хоровых дирижеров, членом Всемирного Хорового Совета (Общество Interkultur), музыкальным 
                консультантом Европейской хоровой ассоциации, почетным профессором Аньянского педагогического университета (Китай), художественным директором Международного хорового конкурса имени Виктора Ровдо. Постоянно принимает участие в работе жюри республиканских и международных хоровых конкурсов, проводит мастер-классы. 
                Является обладателем Гранта Президента РБ в области культуры (2018) и диплома «Человек года в сфере культуры» (2018), награждена нагрудными знаками Министерства культуры 
                Республики Беларусь (2019), медалью Франциска Скорины (2020), Белорусского союза музыкальных деятелей (2022)."
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J5} alt="jury" />
                    <span className={styles.juryName}>
                      Ван Чао<br></br>(Шанхай, Китай)
                    </span>
                  </div>
                }
                image={J5}
                bio="Ван Чао – дирижёр, композитор, филантроп, общественный деятель в сфере музыки. Лауреат и обладатель чемпионских титулов множества международных конкурсов (более 30 национальных и 40 международных наград). 
                Занимает высокие должности во множестве музыкальных организаций Катая: является постоянным заместителем генерального секретаря Комитета хорового искусства при вузах Китая, исполнительным директором Китайской ассамблеи хоровых дирижёров, членом художественного 
                комитета Китайского хорового конгресса. Кроме того, Ван Чао – художественный руководитель ряда китайских и международных фестивалей, таких как Китайский международный фестиваль детских и юношеских хоров, Гонконгский международный хоровой фестиваль, Международная хоровая 
                неделя в Цзяннани. Является членом художественного комитета и комитета по аранжировке и сочинению Китайского международного хорового фестиваля.
                Регулярно работает в качестве члена жюри международных хоровых конкурсов в России и Китае. В 2023 году был членом жюри II Дальневосточной хоровой олимпиады. Является членом экспертного комитета Венского международного молодежного музыкального фестиваля.
                Дирижерские и композиторские работы Ван Чао получили десятки наград  международных и китайских конкурсов. Среди наиболее значимых работ можно выделить произведения для солистов, хора, а также симфонию «Гэн Цзишан», симфоническую поэму «Свет», фортепианную сюиту 
                «Сцена детства» и многие другие. Автор нескольких музыкальных альбомов, выпущенных издательством China Record Corporation. Подготовленный им сборник «Избранные хоровые произведения для колледжей и университетов» стал ведущим учебным пособием в Китае."
              />
            </div>
          </div>
        </div>
      </FadeInSection>}
      <div className={styles.bgWrapper}>
        <FadeInSection>
          <div className={styles.bgWrapper}>
            <div className={styles.venues} id="venues">
              <div className={styles.venuesTitle}>
                <div className={styles.title}>
                {t('venues.title.part1')}<span className={styles.blue}>{t('venues.title.part2')}</span><br />{t('venues.title.part3')}
                </div>
                <div className={styles.places}>
                  <VenueCard img={V1} place={t('venues.intitle.part1')} />
                  <VenueCard img={V2} place={t('venues.intitle.part2')} />
                </div>
              </div>

              <div className={styles.venuesList}>

                <div className={styles.places}>
                <VenueCard img={V1} place={t('venues.intitle.part1')} />
                <VenueCard img={V2} place={t('venues.intitle.part2')} />
                </div>
                <VenueCard img={V4} place={t('venues.intitle.part3')} />
                <VenueCard
                  img={V5}
                  place={t('venues.intitle.part4')}
                />
                <VenueCard
                  img={V6}
                  place={t('venues.intitle.part5')}
                />
                <VenueCard
                  img={V7}
                  place={t('venues.intitle.part6')}
                />
              </div>
            </div>
          </div>
        </FadeInSection>
        {i18n.language !== 'en' && 
        <FadeInSection>
          <div id="results" className={styles.resultsWrapper} >
            <div className={styles.resultsTitle}><span className={styles.blue}>СКАЧАТЬ</span> РЕЗУЛЬТАТЫ</div>

            <div className={styles.results}>
                <a href="/Результаты2.pdf" download={"Результаты-2023.pdf"}>
                  2023
                </a>
                <a href="/Результаты1.pdf" download={"Результаты-2022.pdf"}>
                  2022
                </a>
            </div>
          </div>
        </FadeInSection>}
      </div>
    </div>
  );
};

export default withLayout(Home);
