import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import EleForm from 'vue-ele-form'
import EleFormMarkdownEditor from '../lib/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(EleForm, {
  'markdown-editor': {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    responseFn (response, file) {
      return URL.createObjectURL(file.raw)
    }
  }
})

Vue.component('markdown-editor', EleFormMarkdownEditor)

new Vue({
  render: h => h(App)
}).$mount('#app')
