import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

function initLang() {
  i18n.use(initReactI18next).init({
    resources: {
      ru: {
        translation: {
          editor: 'Редактор',
          settings: 'Настройки',
          font: 'Шрифт',
          themeLight: 'Светлая',
          themeDark: 'Темная',
          theme: 'Тема',
          language: 'Язык',
          open: 'Открыть',
          save: 'Сохранить',
        },
      },
      en: {
        translation: {
          editor: 'Editor',
          settings: 'Setting',
          font: 'Font',
          themeLight: 'Light',
          themeDark: 'Dark',
          theme: 'Theme: ',
          language: 'Language',
          open: 'Open',
          save: 'Save',
        },
      },
      de: {
        translation: {
          editor: 'Redakteur',
          settings: 'Einstellungen',
          font: 'Schrift',
          themeLight: 'hell',
          themeDark: 'dunkel',
          theme: 'Thema ',
          language: 'Sprache',
          open: 'öffnen',
          save: 'speichern',
        },
      },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });
}
export default initLang;
