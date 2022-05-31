import { createApp } from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import router from './components/routes.js'
import App from './App.vue'
library.add(fas,fab)

createApp(App)
.component('fa',FontAwesomeIcon)
.use(router).mount('#app');
