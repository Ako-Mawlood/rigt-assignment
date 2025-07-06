import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import type { ThemeDefinition } from 'vuetify/lib/types.mjs'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#E5940D',
    onPrimary: '#FFFFFF',
    primaryContainer: '#FFFBEB',
    onPrimaryContainer: '#D67609',
    primaryVariant: '#D67609',
    variantSurface: '#F7FAFC',
    surface: '#FFFFFF',
    onSurface: '#121212',
    onSurfaceHigh: '#222222',
    onSurfaceMedium: '#666666',
    onSurfaceDisabled: '#9E9E9E',
    onSurfaceOutline: '#CACACA',
    onSurfaceVariant: '#F6F6F6',
    background: '#F6F6F6',
    onBackground: '#121212',
    outline: '#CACACA',
    error: '#C33028',
    onError: '#FFFFFF',
    errorContainer: '#FFEBEE',
    onErrorContainer: '#B4261B',
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

const darkTheme = {
  dark: true,
  colors: {
    primary: '#F5AD1B',
    onPrimary: '#333333',
    primaryContainer: '#51504C',
    onPrimaryContainer: '#E39600',
    primaryVariant: '#E39600',
    surface: '#222222',
    background: '#333333',
    onSurface: '#FAFAFA',
    onSurfaceHigh: '#FAFAFA',
    onSurfaceMedium: '#DADADA',
    onSurfaceDisabled: '#8B8B8B',
    onSurfaceOutline: '#5C5C5C',
    onSurfaceVariant: '#1E1E1E',
    onBackground: '#FFFFFF',
    outline: '#5C5C5C',
    error: '#C33028',
    onError: '#FFFFFF',
    errorContainer: '#FFC5B0',
    onErrorContainer: '#B4261B',
    info: '#2094F3',
    onInfo: '#FFFFFF',
    infoContainer: '#BDDFFE',
    onInfoContainer: '#1975D2',
    success: '#4CAF50',
    onSuccess: '#FFFFFF',
    successContainer: '#E2FBBD',
    onSuccessContainer: '#2F7D31',
    warning: '#E8BA04',
    onWarning: '#222222',
    warningContainer: '#FEFBCE',
    onWarningContainer: '#B39E06',
  },
}

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
})
