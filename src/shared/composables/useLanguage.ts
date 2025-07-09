import { useI18n } from 'vue-i18n'
import { ref, onMounted, computed } from 'vue'
import { vuetify } from '@/plugins/vuetify'

type LangType = 'en' | 'ku'

export function useLanguage() {
  const initialLocale = localStorage.getItem('language') as LangType | null
  const selectedLocale = ref(initialLocale || 'en')

  const { locale } = useI18n()

  const isRtl = computed(() => locale.value === 'ku')

  function changeLanguage(lang: LangType) {
    locale.value = lang
    localStorage.setItem('language', lang)
    document.documentElement.setAttribute('dir', isRtl.value ? 'rtl' : 'ltr')
    vuetify.locale.current.value = lang
  }

  onMounted(() => {
    if (initialLocale) {
      locale.value = initialLocale
      vuetify.locale.current.value = initialLocale
    }
  })

  return { locale, selectedLocale, changeLanguage }
}
