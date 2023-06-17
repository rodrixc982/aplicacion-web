import { createApp } from 'vue'
import './style.css'
//importar la libreria de element-plus
import ElemenPlus from 'element-plus'
import'element-plus/dist/index.css'
//fin de la importacion de la libreria
import router from '@/router'
import App from './App.vue'

//importamos iconos del elementos plus
import * as ElemenPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)

//configuramos los iconos
for (const [key,component]of Object.entries(ElemenPlusIconsVue)) {
    app.component(key,component)
}

app.use (ElemenPlus)
app.use (router)
app.mount('#app')
