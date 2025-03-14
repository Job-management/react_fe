import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocalStorage, STORAGE } from '@utils/helpers';
import en from './translate/en';
import vi from './translate/vi';

const resources = {
  vi,
  en,
};

const INIT_LANGUAGE = getLocalStorage(STORAGE.LANGUAGE) || 'en';

i18next.use(initReactI18next).init({
  resources,
  ns: ['common', 'menu', 'error_message'],
  defaultNS: 'common',
  backend: {
    loadPath: './{{lng}}.json',
  },
  react: {
    useSuspense: true,
  },
  lng: INIT_LANGUAGE,
  fallbackLng: INIT_LANGUAGE,
  preload: [INIT_LANGUAGE],
  // keySeparator: false,
  interpolation: { escapeValue: false },
});

i18next.off('languageChanged');
i18next.on('languageChanged', (language) => {
  window.localStorage.setItem('LANGUAGE', language);
});

export default i18next;
