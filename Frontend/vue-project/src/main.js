import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRightFromBracket, faCartShopping, faPlus, faMinus, faTrash, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faRightFromBracket, faCartShopping, faPlus, faMinus, faTrash, faFilterCircleXmark)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')