import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './stores'
import { bootApi } from './boot/api'

const app = createApp(App)

const store = createStore({ app })
const router = createRouter({ app, store })

app.use(router)
app.use(store)
bootApi({ app, store, router })

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
app.mount('#app')
