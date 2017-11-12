import Vue from 'vue'
import Vuex from 'vuex'

//vuex管理数据，组件与组件之间的数据传递
Vue.use(Vuex)

var store=new Vuex.Store({
	//state相当于之前的data，定义了数据
	state:{
//		foo:12,
//		vsrc:[],
//		vtitle:[],
		vlist:[{vsrc:'',vtitle:''}]
	}
	
	//如果没有mutations,直接this.$store.state.foo='xxx'修改数据
	//mutations相当于method，只能修改state里面的数据
//	mutations:{
//		//a相当于state b相当于用户传入的参数
//		setFoo(a){
//			a.foo++;
//		},
//		set1Foo(a,b){
//			a.foo=b
//		}
//		
//		//通过  this.$store.commit('mutations里面的方法名','相当于传入参数') 使用
//	}
})

//导出数据
export default store