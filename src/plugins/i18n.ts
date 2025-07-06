import { createI18n } from 'vue-i18n'
import en from '@/locles/en.json'
import ku from '@/locles/ku.json'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    'en-US': en,
    'ku-IQ': ku,
  },
})
