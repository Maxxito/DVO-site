import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {}
    },
    ru: {
        translation: {
            header: {
                logoText: 'при поддержке \n президентского фонда \n культурных инициатив'
            }
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;