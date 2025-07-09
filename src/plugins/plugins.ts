import { createPinia } from 'pinia'
import { vuetify } from '@/plugins/vuetify'
import axios from '@/plugins/axios'
import router from '@/router/routes'
import { i18n } from '@/plugins/i18n'
import type { App } from 'vue'

export function registerPlugins(app: App) {
  return app.use(createPinia).use(router).use(vuetify).use(i18n).use(axios)
}
