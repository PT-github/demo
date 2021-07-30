import Spin from './src/spin'
import directive from './src/directive'
// Slider.install = function (Vue) {
//   Vue.component(Slider.name, Slider)
// }

export default {
  install (Vue) {
    Vue.use(directive)
    Vue.prototype.$spin = Spin
  },
  directive,
  service: Spin
} 
