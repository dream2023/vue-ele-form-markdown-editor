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
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    responseFn (response, file) {
      // 因为是 mock 地址, 所以, 总是返回同一张图片的URL, 正常使用的时候不会
      return response.url
    }
  }
})

Vue.component('markdown-editor', EleFormMarkdownEditor)

new Vue({
  render: h => h(App)
}).$mount('#app')
