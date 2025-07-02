import React from "react";

import Icons from "../../common/icons";
import { Logo } from "../../components/Logo";
import styles from './Footer.module.scss';
import i18n from '../../utils/trans.js'
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation()
    
    const openVk = () => {
        window.open("https://vk.com/fareastchoirolympic", "_blank");
    };

    const openTg = () => {
        window.open("https://web.telegram.org/k/#@fefuchoir", "_blank");
    };

    const openYoutube = () => {
        window.open("https://www.youtube.com/channel/UCEPYTlA03JIdsYQmwMdAhbQ/featured", "_blank");
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <div className={styles.title}>
                        {t('footer.title')}
                    </div>
                    <div className={styles.links}>
                        <div className={styles.doubleRow}>
                            <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    {t('footer.intitle.part1')}
                                </div>
                                <div className={styles.info}>
                                    {t('footer.text.part1')}<br></br>{t('footer.text.part3')}
                                </div>
                            </div>
                            {i18n.language == 'en' && (
                                <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    Coordinator for Foreign Participants 
                                </div>
                                <div className={styles.info}>
                                    Anna Belonogova<br></br>Tel.: +7 950 292 93 86
                                </div>
                                <div className={styles.contactTitle}>
                                    Consultations in Chinese are available<br></br>
                                    WeChat ID: bailing_AV
                                </div>
                            </div>
                            )}
                            <div className={styles.contact}>
                                <div className={styles.contactTitle}>
                                    {t('footer.intitle.part2')}
                                </div>
                                <div className={styles.info}>
                                    {t('footer.text.part2')}
                                </div>
                            </div>
                        </div>
                        {i18n.language !== 'en' && <div className={styles.contact}>
                            <div className={styles.contactTitle}>
                                {t('footer.intitle.part3')}
                            </div>
                            <div className={styles.info}>
                                <Icons type='telegram' className={styles.tg} width={24} height={24} onClick={() => openTg()}/>
                                <Icons type='vk' className={styles.vk} width={24} height={24} onClick={() => openVk()}/>
                                <Icons type='youtube' className={styles.youtube} width={24} height={24} onClick={() => openYoutube()}/>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className={styles.icons}>
                    <Logo className={styles.choir} />
                    <Icons type='rf' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor2' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor3' className={styles.rf} width={180} height={60}/>
                    <Icons type='sponsor4' className={styles.rf} width={204} height={71}/>
                    <Icons type='sponsor1' className={styles.rf} width={204} height={71}/>
                </div>
                <div className={styles.copyright}>
                © Дальневосточная хоровая олимпиада, 2025
                </div>
            </div>
        </footer>
    )
};