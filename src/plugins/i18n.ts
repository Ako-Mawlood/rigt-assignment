import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ku from '@/locales/ku.json'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ku,
  },
})
