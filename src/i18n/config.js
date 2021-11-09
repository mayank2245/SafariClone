import i18next from 'i18next';

i18next.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('../locales/en/translations.json')
    },
    cn: {
      translations: require('../locales/cn/translations.json')
    },
    jp: {
      translations: require('../locales/jp/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ['zh-Hant', 'en'];

export default i18next;