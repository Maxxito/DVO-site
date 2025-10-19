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

import images from '../../utils/imageImporter.js';

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
	image: images["001.jpg"],
	short: "Хор «Созвучие» Эльбанской детской школы искусств (п. Эльбан, Хабаровский край)",
	type: "А2",
},
{
	image: images["002.jpg"],
	short: "Детский хор «Соловушки» (Бикин, Хабаровский край)",
	type: "А2, С2",
},
{
	image: images["003.jpg"],
	short: "Камерный хор «Мартаккорд» (Москва)",
	type: "B3. C1, C3",
},
{
	image: images["004.jpg"],
	short: "Концертный хор Лицея Искусств «Санкт-Петербург» (Санкт-Петербург)",
	type: "A2, C1, C2",
},
{
	image: images["005.jpg"],
	short: "Народный академический хор дворца культуры авиастроителей (Комсомольск-на-Амуре, Хабаровский край)",
	type: "B2",
},
{
	image: images["006.jpg"],
	short: "Вокальный ансамбль «Консонанс» ДШИ №8 (Иркутск, Иркутская область)",
	type: "A5",
},
{
	image: images["007.jpg"],
	short: "Детский академический образцовый хор «Соловушка» (с. Рощино, Приморский край)",
	type: "A2, C1, C2",
},
{
	image: images["008.jpg"],
	short: "Старший хор «Гармония» ДШИ №6 (Чита, Забайкальский край)",
	type: "A2 ",
},
{
	image: images["009.jpg"],
	short: "Хор мальчиков и юношей Заслуженного коллектива ПК образцовой хоровой студии «Камертон» (Владивосток, Приморский край)",
	type: "A3 ",
},
{
	image: images["010.jpg"],
	short: "Старший хор «Соловушки» (Комсомольск-на-Амуре, Хабаровский край)",
	type: "A2 ",
},
{
	image: images["011.jpg"],
	short: "Вокальная группа «Живая вода» (Владивосток, Приморский край)",
	type: "B4",
},
{
	image: images["012.jpg"],
	short: "Женский академический хор Хабаровского краевого колледжа искусств (Хабаровск, Хабаровский край)",
	type: "B1, C2",
},
{
	image: images["013.jpg"],
	short: "Младший хоровой коллектив «Солнечные голоса» (Комсомольск-на-Амуре, Хабаровский край)",
	type: "A1",
},
{
	image: images["014.jpg"],
	short: "Хор старших классов «Весенние голоса» ДМШ №2 (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["015.jpg"],
	short: "Хор младших классов «Веснушки» ДМШ №2 (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["016.jpg"],
	short: "Хор мальчиков и юношей «Рондо» Находкинской детской хоровой школы (Находка, Приморский край)",
	type: "A3",
},
{
	image: images["017.jpg"],
	short: "Хор студентов «Камертон» Забайкальского краевого училища искусств (Чита, Забайкальский край)",
	type: "B1, C1",
},
{
	image: images["018.jpg"],
	short: "Концертный хор «Глория» ДМШ №7 им. С.В. Рахманинова г. (Екатеринбург, Свердловская область)",
	type: "C3",
},
{
	image: images["019.jpg"],
	short: "Хор «Соловушка» Школы-интерната музвоспитанников (Иркутск, Иркутская область)",
	type: "A2",
},
{
	image: images["020.jpg"],
	short: "Хор «Улыбка» ЦТР и МЭО «Радость» (Москва)",
	type: "A2",
},
{
	image: images["021.jpg"],
	short: "Народный коллектив любительского художественного творчества Ансамбль эстрадной песни «Ритмы Ретро» (Комсомольск-на-Амуре, Хабаровский край)",
	type: "B4",
},
{
	image: images["022.jpg"],
	short: "Академический хор Петрозаводского государственного университета (Петрозаводск, Республика Карелия)",
	type: "B2, C1",
},
{
	image: images["023.jpg"],
	short: "Хор «Фантазеры» ДШИ №1 Артёмовского городского округа (Артем, Приморский край)",
	type: "A5",
},
{
	image: images["024.jpg"],
	short: "Детский хор «Аврора» ДШИ имени В.В. Крайнева (Москва)",
	type: "A2, C1, C2 ",
},
{
	image: images["025.jpg"],
	short: "Хоровая студия мальчиков и юношей «Байкал-хор» (Иркутск, Иркутская область)",
	type: "A3",
},
{
	image: images["026.jpg"],
	short: "Образцовый академический хор ДМШ Амурского муниципального района (Амурск, Хабаровский край)",
	type: "A2",
},
{
	image: images["027.jpg"],
	short: "Детский академический хор «Восьмушки» ДШИ Вяземского района (Вяземский, Хабаровский край)",
	type: "A1",
},
{
	image: images["028.jpg"],
	short: "Народный академический хор «Россияне» (Чита, Забайкальский край)",
	type: "B2, B4",
},
{
	image: images["029.jpg"],
	short: "Хор «Радость» Ольской ДШИ (п. Ола, Магаданская область)",
	type: "A2, C1",
},
{
	image: images["030.jpg"],
	short: "Хор «Brevis» ГБОУ ДО ЦТР и МЭО «Радость» (Москва)",
	type: "C1",
},
{
	image: images["031.jpg"],
	short: "Вокальный ансамбль «Надежда» Многофункционального культурно-досугового комплекса Центрального района (Новокузнецк, Кемеровская область - Кузбасс)",
	type: "B4, C3",
},
{
	image: images["032.jpg"],
	short: "Академический хор «Вдохновение» Культурно-досугового центра «Спутник» (Чита, Забайкальский край)",
	type: "B3",
},
{
	image: images["033.jpg"],
	short: "Старший хор «Кредо» (Петропавловск-Камчатский, Камчатский край)",
	type: "A2, C3",
},
{
	image: images["034.jpg"],
	short: "Хор старших классов «Алые паруса» ДШИ №1 им. С. Прокофьева (Владивосток, Приморский край)",
	type: "C2",
},
{
	image: images["036.jpg"],
	short: "Студенческий мужской хор «Дуораан» (Якутск, Республика Саха (Якутия))",
	type: "B1",
},
{
	image: images["037.jpg"],
	short: "Хор «Кантилена» ЦДМШ (Южно-Сахалинск, Сахалинская область)",
	type: "B1, C1",
},
{
	image: images["039.jpg"],
	short: "Специальный хор «Гармония» (Южно-Сахалинск, Сахалинская область)",
	type: "C2        ",
},
{
	image: images["039-2.jpg"],
	short: "Младший специальный хор «Веселые ноки» (Южно-Сахалинск, Сахалинская область)",
	type: "A1",
},
{
	image: images["040.jpg"],
	short: "Образцовый хор «Радуга» ДШИ №6 (Владивосток, Приморрский край)",
	type: "A2",
},
{
	image: images["041.jpg"],
	short: "Образцовый специальный хор «Надежда» ДШИ №13 (Красноярск, Красноярский край)",
	type: "A2, C3",
},
{
	image: images["042.jpg"],
	short: "Детский хор «Новые имена» ГАУК «Оренбургская областная филармония» (Оренбург, Оренбургская область)",
	type: "A2, C1",
},
{
	image: images["043.jpg"],
	short: "Хор «Серебряные нотки» ДШИ № 4 (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["044.jpg"],
	short: "Хор «Колокольчик» ДШИ №4 (Владивосток, Приморский край)",
	type: "A1",
},
{
	image: images["045.jpg"],
	short: "Хор старших классов  «Ассоль» ДШИ №3 (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["047.jpg"],
	short: "Хор  младших классов «Фантазёры» ДШИ №8 им. А.В. Воробьёва (Владивосток, Приморский край)",
	type: "A1",
},
{
	image: images["048.jpg"],
	short: "Хор  старших классов «Фантазия» ДШИ №8 им. А.В. Воробьёва (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["049.jpg"],
	short: "Хор «Созвездие» Средней школы №155 (Красноярск, Красноярский край)",
	type: "A1",
},
{
	image: images["050.jpg"],
	short: "Хор старших классов ЦДМШ им. Б.Г. Павликовской (Чита, Забайкальский край)",
	type: "A2, C2",
},
{
	image: images["051.jpg"],
	short: "Хор мальчиков и юношей ЦДМШ им. Б. Г. Павликовской (Чита, Забайкальский край)",
	type: "A3, С2",
},
{
	image: images["052.jpg"],
	short: "Вокальный ансамбль мальчиков «Like music» (Чита, Забайкальский край)",
	type: "A4",
},
{
	image: images["054.jpg"],
	short: "Хор «Надежда Туймаады» ДШИ №1 (Якутск, Республика Саха (Якутия)",
	type: "A1",
},
{
	image: images["055.jpg"],
	short: "Женский хор Приморского краевого колледжа искусств (Владивосток, Приморский край)",
	type: "B1 ",
},
{
	image: images["056.jpg"],
	short: "Любительский женский хор «Вдохновение» (Якутск, Республика Саха (Якутия)",
	type: "B1",
},
{
	image: images["057.jpg"],
	short: "Хор фортепианного отделения ДШИ №1 им. С. Прокофьева «Созвездие» (Владивосток, Приморский край)",
	type: "C2 ",
},
{
	image: images["058.jpg"],
	short: "Детский хор «Школьный вальс» (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["059.jpg"],
	short: "Ансамбль выпускников хора «Росинка» Гимназии №7, ДМШ №4 (Хабаровск, Хабаровский край)",
	type: "B4",
},
{
	image: images["060.jpg"],
	short: "Хор «Надежда» инструментального отделения ДШИ им. П. И. Чайковского (с. Вольно-Надеждинское, Приморский край)",
	type: "A1",
},
{
	image: images["061.jpg"],
	short: "Вокальный ансамбль старших классов «Фантазия» городской детской хоровой школы (Находка, Приморский край)",
	type: "A5",
},
{
	image: images["062.jpg"],
	short: "Образцовый хор «Мальчиши» ДШИ №6 (Владивосток, Приморский край)",
	type: "A3",
},
{
	image: images["063.jpg"],
	short: "Сводный самодеятельный хор Районного Центра культурного развития и народного творчества (Вилюйск, Республика Саха (Якутия)",
	type: "B2",
},
{
	image: images["064.jpg"],
	short: "Хор «Капель» ДШИ Холмского муниципального округа (Холмск, Сахалинская область)",
	type: "C1, C2",
},
{
	image: images["065.jpg"],
	short: "Образцовый коллектив Хор «Мелодия» (Городской округ Жуковский, Московская область)",
	type: "A2",
},
{
	image: images["066.jpg"],
	short: "Концертный хор КГБ ПОУ «Хабаровский краевой колледж искусств» (Хабаровск, Хабаровский край)",
	type: "B2",
},
{
	image: images["067.jpg"],
	short: "Хор младших классов «Акварель» МБУ ДО «Городская детская хоровая школа» НГО (Находка, Приморский край)",
	type: "A1",
},
{
	image: images["068-2.jpg"],
	short: "Вокальный ансамбль «Ля мажор» (Чита, Забайкальский край)",
	type: "A5",
},
{
	image: images["069.jpg"],
	short: "Вокальный ансамбль ДВГИИ (Владивосток, Приморский край)",
	type: "B4",
},
{
	image: images["070.jpg"],
	short: "Академический хор ДВФУ (Владивосток, Приморский край)",
	type: "B2",
},
{
	image: images["072.jpg"],
	short: "Вокальный ансамбль медицинских работников «Айыына» (Мегино-Кангаласский улус, село Майя, Республика Саха (Якутия)",
	type: "B4, C3",
},
{
	image: images["073.jpg"],
	short: "Камерный хор МБУК «Центра народной культуры и досуга» (п. Березовка, Хабаровский край)",
	type: "B3",
},
{
	image: images["074.jpg"],
	short: "Хор «Маячок» ДШИ Дальневосточного государственного института искусств (Владивосток, Приморский край)",
	type: "A2",
},
{
	image: images["F01.jpg"],
	short: "Пекинский хор «Хайфэн»",
	type: "B2",
},
{
	image: images["F03.jpg"],
	short: "Хор Шанхайского педагогического университета БоЮэ",
	type: "C2",
},
{
	image: images["F04.jpg"],
	short: "Камерный хор «Голос весны»",
	type: "B1",
},
{
	image: images["F05.jpg"],
	short: "Камерный хор Шанхайского педагогического университета БоЮэ",
	type: "B3",
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
                      {t('jury.name5')}
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
