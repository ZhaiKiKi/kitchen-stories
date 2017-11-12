import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import './assets/css/cssreset.css'
import './assets/css/iconfont.css'
import $ from 'jquery'

//修改mint.ui的样式
import './assets/css/weui.css';

import VideoPlayer from 'vue-video-player'

import store from './store/store.js'

Vue.use(VueRouter)
//定义Vue可以使用VueResource
Vue.use(VueResource)
Vue.use(Mint)
Vue.use(VideoPlayer)

import router from './js/router.js'

new Vue({
  el: '#app',
	render: h => h(App),
	router,
	store
})
