import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from '../store';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

(async()=>{
    let app = createApp(App)

    app.use(router)
    app.use(store)
    app.use(vuetify)

    await store.dispatch('SET_DIRECTORIES');
    //await store.dispatch('SET_NUMBERS');
    //await store.dispatch('SET_HOTEL');
    //await store.dispatch('SET_LOGS');
    app.mount('#app')
})()
