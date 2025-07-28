import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import type { ThemeDefinition } from 'vuetify/lib/types.mjs'
import '@mdi/font/css/materialdesignicons.css'
import { VFileUpload } from 'vuetify/labs/VFileUpload'
import { i18n } from './i18n'

const lightTheme: ThemeDefinition = {
  colors: {
    primary: '#724190ff',
    onPrimary: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceOpacity: 'rgba(255,255,255,0.3)',
    onSurface: '#121212',
    onSurfaceHigh: '#222222',
    onSurfaceMedium: '#888888',
    background: '#ffffff',
    onBackground: '#121212',
    outline: '#E5E7EB',
    error: '#db473fff',
    onError: '#FFFFFF',
    errorContainer: '#FFEBEE',
    onErrorContainer: '#bc3c33ff',
    info: '#2094F3',
    onInfo: '#FFFFFF',
    infoContainer: '#E3F2FD',
    onInfoContainer: '#1975D2',
    success: '#4CAF50',
    onSuccess: '#FFFFFF',
    successContainer: '#E7F5E9',
    onSuccessContainer: '#2F7D31',
    warning: '#E8BA04',
    onWarning: '#222222',
    warningContainer: '#FEFBCE',
    onWarningContainer: '#B39E06',
  },
}

export const vuetify = createVuetify({
  components: {
    ...components,
    VFileUpload,
  },

  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
    },
  },
  locale: {
    locale: i18n.global.locale.value,
    messages: {
      en: i18n.global.getLocaleMessage('en'),
      ku: i18n.global.getLocaleMessage('ku'),
    },
  },
})
