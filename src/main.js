import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {auth} from './tools/firebase'
let app
auth.onAuthStateChanged(user => {
    console.log(user)
    if(!app){
        app=createApp(App).use(router).mount('#app')
    }
})

