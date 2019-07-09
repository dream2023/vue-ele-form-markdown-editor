import EleFormMarkdownEditor from './EleFormMarkdownEditor'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(EleFormMarkdownEditor.name, EleFormMarkdownEditor)
}

export default EleFormMarkdownEditor
