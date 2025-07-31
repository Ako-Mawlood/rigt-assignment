import { createApp } from 'vue'
import '@/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { registerPlugins } from '@/plugins/plugins.ts'
import App from '@/App.vue'

const app = createApp(App)

registerPlugins(app).mount('#app')
