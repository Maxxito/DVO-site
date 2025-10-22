import React, { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../../common/useDimensions";
import { MenuItem } from "../MenuItem";
import classNames from "classnames";
import { useWindowSize } from "../../common/useWindowSize";
import { Logo } from "../../components/Logo";
import vkLogo from "../../assets/icons/vk-logo.svg";
import youtubeLogo from "../../assets/icons/youtube.svg";
import Icons from "../../common/icons";
import { Button, DropdownButton } from "react-bootstrap";
import i18n from '../../utils/trans.js'
import { useTranslation } from "react-i18next";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 95% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 95% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

const menu = [
  { nameKey: "menu.program", link: "#programm" },
  { nameKey: "menu.documents", link: "#documents" },
  // { nameKey: "menu.registration", link: "#registration" },
  { nameKey: "menu.jury", link: "#jury" },
  { nameKey: "menu.results", link: "#results" }
];

const Navigation = ({ toggleOpen, open }) => {
  const { t } = useTranslation();

  return (
    <motion.ul 
      variants={variants} 
      className={classNames(styles.mobileUl, {
        [styles.under]: !open
      })}
    >
      {menu.map(i => (
        <div 
          onClick={() => toggleOpen()} 
          key={i.link}
        >
          <MenuItem 
            i={{
              ...i,
              name: t(i.nameKey)
            }} 
            key={i.link} 
          />
        </div>
      ))}
    </motion.ul>
  );
};

export const Header = () => {
  const {i18n} = useTranslation();
  const [activeHash, setActiveHash] = useState('');
  const sectionRefs = useRef({});
  const scrollTimeout = useRef(null);

  const ChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const width = useWindowSize().width;

  // Register section elements
  useEffect(() => {
    const sections = [
      'intro', 'programm', 'documents', 
      'registration', 'jury', 'results'
    ];
    
    sections.forEach(id => {
      sectionRefs.current[id] = document.getElementById(id);
    });
  }, []);

  const handleAnchorClick = (hash, e) => {
    e.preventDefault();
    const targetId = hash.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      window.history.pushState(null, null, hash);
      
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveHash(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const sections = Object.values(sectionRefs.current).filter(Boolean);
        let currentActive = activeHash;
        
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          const isInView = rect.top <= 150 && rect.bottom >= 150;
          
          if (isInView) {
            currentActive = section.id;
            break;
          }
        }

        if (currentActive !== activeHash) {
          setActiveHash(currentActive);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeHash]);

  const hashMap = {
    'programm': "Программа",
    'documents': "Документы",
    'registration': 'Регистрация',
    'jury': 'Жюри',
    'results': 'Результаты',
  }

  const openVk = () => {
    window.open("https://vk.com/fareastchoirolympic", "_blank");
  };

  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCEPYTlA03JIdsYQmwMdAhbQ/featured",
      "_blank"
    );
  };

  const {t} = useTranslation();

  return (
    <div className={styles.full}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.logo} style={{ display: width < 1300 && activeHash !== 'intro' ? 'none' : 'flex' }}>
            <Logo className={styles.logotype} />
          </div>

          <div className={styles.activeHash} style={{ display: width < 1300 && activeHash !== 'intro' ? 'block' : 'none' }}>
            {hashMap[activeHash] || ''}
          </div>
          
          <menu className={styles.menuWrapper}>
            {/* <a 
              className={styles.FormButton} 
              href={t('header.button1url')}
            >
              {t('header.button1')}
            </a> */}
            
            <ul className={styles.menu}>
              {menu.map((menuItem) => {
                const targetId = menuItem.link.replace("#", "");
                return (
                  <li key={menuItem.link} className={styles.menuItem}>
                    <Link 
                      to={menuItem.link}
                      onClick={(e) => handleAnchorClick(menuItem.link, e)}
                      className={classNames({
                        [styles.activeLink]: activeHash === targetId
                      })}
                    >
                      {t(menuItem.nameKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </menu>
          
          <div className={styles.LangButton} onClick={ChangeLanguage}>
            <Icons type={t('header.buttunflag')} />
          </div>
          
          <div className={styles.networks}>
            <Icons type='vk' className={styles.vk} width={24} height={24} onClick={openVk} />
            <Icons type='youtube' className={styles.youtube} width={24} height={24} onClick={openYoutube} />
          </div>
        </header>
        
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div 
            className={classNames("background", {[styles.over]: isOpen})} 
            variants={sidebar} 
          />
          <Navigation toggleOpen={toggleOpen} open={isOpen} />
          <MenuToggle toggle={toggleOpen} />
        </motion.nav>
      </div>
    </div>
  );
};