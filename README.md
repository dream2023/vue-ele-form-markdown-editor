# vue-ele-form-markdown-editor | vue-ele-form 的 markdown 编辑器

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-ele-form-markdown-editor.svg)](https://www.npmjs.com/package/vue-ele-form-markdown-editor)
[![download](https://img.shields.io/npm/dw/vue-ele-form-markdown-editor.svg)](https://npmcharts.com/compare/vue-ele-form-markdown-editor?minimal=true)

## 介绍

vue-ele-form-markdown-editor 做为 [vue-ele-form](https://github.com/dream2023/vue-ele-form) 的第三方扩展, 用于 markdown 文档的书写

![image](https://raw.githubusercontent.com/dream2023/images/master/3.e5glyk6dvzn.png)

## 安装

```bash
npm install vue-ele-form-markdown-editor --save
```

## 使用

```js
import EleForm from 'vue-ele-form'
import EleFormMarkdownEditor from 'vue-ele-form-markdown-editor'
// 注册 vue-ele-form
Vue.use(EleForm, {
  // 可以为编辑器配置全局属性, 每个实例都共享这个属性
  'markdown-editor': {
    // 比如设置上传 action 后, 所有的 markdown-editor 编辑器上传图片都会采用这个属性
    action: 'https://xxx.com/upload/images'
  }
})

// 注册 markdown 组件
Vue.component('markdown-editor', EleFormMarkdownEditor)
```

```js
formDesc: {
  xxx: {
    label: 'xxx',
    type: 'markdown-editor', // 只需要在这里指定为 markdown-editor 即可
    // 属性由两部分组成
    // 1.上传图片相关属性
    // 2.编辑器相关属性, https://github.com/hinesboy/mavonEditor#api-%E6%96%87%E6%A1%A3
    attrs: {
      // 上传相关
      action: 'https://xxx.com/upload/images', // 上传地址
      data: {token: 'xxx'},
      name: 'img', // 文件名
      // 对响应结果进一步处理
      responseFn (response, file) {
        return 'https://xxx.com/upload/images' + response // 这里返回上传后的url即可
      },
      // 编辑器相关
      fontSize: '16px',
    }
  }
}
```

## 上传图片属性说明

```js
props: {
  // 上传地址
  action: String,
  // 图片大小限制
  fileSize: {
    type: Number
  },
  // 文件名
  name: {
    type: String,
    default: 'file'
  },
  // 上传图片的头部
  headers: Object,
  // 是否需要带cookie
  withCredentials: Boolean,
  // 自定义上传数据, 例如 {token: xxx}
  data: Object,
  // 上传成功的进一步处理
  responseFn: Function
}
```

## 相关链接

- [mavonEditor](https://github.com/hinesboy/mavonEditor)
- [vue-ele-form](https://github.com/dream2023/vue-ele-form)
- [element-ui](http://element-cn.eleme.io)
