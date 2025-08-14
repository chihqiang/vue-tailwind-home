import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";
import en from "./i18n/en";
import zh from "./i18n/zh";
import './style.css'
const app = createApp(App)

app.use(createI18n({
  legacy: false,
  locale: "en", // 默认英文
  messages: { en, zh },
}))


app.mount('#app')
