import Toast, { POSITION, type PluginOptions } from 'vue-toastification'

const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  showCloseButtonOnHover: true,
  timeout: 2000,
  hideProgressBar: true,
  icon: true,
}

export const ToastPlugin = {
  plugin: Toast,
  options: toastOptions,
}
