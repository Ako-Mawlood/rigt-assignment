import { createPinia } from 'pinia'
import { vuetify } from '@/plugins/vuetify'
import router from '@/router/routes'
import { i18n } from '@/plugins/i18n'
import { VueQueryPlugin } from '@tanstack/vue-query'
import type { App } from 'vue'
import { createVPhoneInput } from 'v-phone-input'
import { ToastPlugin } from '@/plugins/toast'
import 'flag-icons/css/flag-icons.min.css'
import 'v-phone-input/dist/v-phone-input.css'
import 'vue-toastification/dist/index.css'

const vPhoneInput = createVPhoneInput({ countryIconMode: 'svg' })

export function registerPlugins(app: App) {
  return app
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(ToastPlugin.plugin, ToastPlugin.options)
    .use(VueQueryPlugin)
    .use(vuetify)
    .use(vPhoneInput)
}
