import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from "element-plus/es/locale/lang/zh-cn"; // element-plus 语言
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App);

app.use(ElementPlus, {
  // 全局注册 element-plus
  locale: zhCn, // 使用中文
});

app.mount("#app");