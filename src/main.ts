import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import HelloWorld from './components/HelloWorld.vue'
import test1 from './components/test1.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/xxx', component: test1}

    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
