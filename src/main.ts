import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import axios from '@/plugins/axios'
import { vuetify } from '@/plugins/vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from '@/App.vue'
import router from '@/router'

const i18n = createI18n({})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(axios)
app.mount('#app')
