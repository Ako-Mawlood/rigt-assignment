import { ref, watchEffect } from 'vue'
import { useDisplay } from 'vuetify'

export const rail = ref(false)
export const drawer = ref(false)
export const isTemporary = ref(true)
export const isPermanent = ref(false)

export function useSidebarController() {
  const { mobile } = useDisplay()

  function toggleSidebar() {
    if (!mobile.value) {
      rail.value = !rail.value
      drawer.value = true
    }
    if (mobile.value) {
      rail.value = false
      drawer.value = true
    }
  }

  watchEffect(() => {
    if (!mobile.value) {
      drawer.value = true
      isPermanent.value = true
      isTemporary.value = false
    }
    if (mobile.value) {
      isPermanent.value = false
      isTemporary.value = true
    }
  })

  return { rail, drawer, isTemporary, isPermanent, toggleSidebar }
}
