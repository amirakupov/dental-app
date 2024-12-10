import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';
import sr from './locales/sr.json';
import de from './locales/de.json'; 

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    sr: { translation: sr },
    de: { translation: de },
  },
  lng: 'de', // Set German as the default language
  fallbackLng: 'de', // Fallback language if a key is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
