<template>
	<main>
		<div class="wrapper clearfix">
			<div class="header">
				<i class="iconfont icon-detail-left" @click='back'></i>
				<input id='search' type="text" placeholder="食谱 / 原料 / 博主" autofocus="autofocus" v-model='msg'/>
				<img src="../../assets/image/icon/del.png" @click='del'/>
			</div>
			<ul>
				<li v-for='v in list'>{{v}}</li>
			</ul>
		</div>
		
		<div class="header">
			<i class="iconfont icon-nav" @click='getMenu'></i>
			<input type="text" placeholder="食谱 / 原料 / 博主" @focus='pull' />
			<i class="iconfont icon-seach" @click='pull'></i>
		</div>
		
		<ul>
			<li v-for='v in sort'>
				<router-link :to="'/sort-link/'+v.id"><img :src="v.src"/>{{v.title}}</router-link>
			</li>
		</ul>
	</main>
</template>

<style scoped>
	/*搜索框*/
	.clearfix:before,
	.clearfix:after{
		content: '';
		display: table;
		clear: both;
	}
	.clearfix{
		*zoom: 1;
	}
	
	main{
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
	}
	.header{
		width: 94%;
		border: 1px solid #cacaca;
		margin:3% ;
		height: 7%;
		border-radius: 4px;
		line-height: 45px;
		box-shadow: 0px 0px 1px #cacaca;
	}
	.header i:nth-of-type(1){
		font-size: 26px;
		padding: 0 7% 0 5%;
		color: #515151;
	}
	.header i:nth-of-type(2){
		font-size: 24px;
		color: #515151;
	}
	.header input{
		border: none;
		outline: none;
		width: 67%;
		height: 90%;
		caret-color: #F4EA2A;
	}
	.header input::-webkit-input-placeholder {
         font-size: 18px;
    }
	
	
	/*wrapper*/
	.wrapper{
		width: 100%;
		height: 100vh;
		display: none;
		background: rgba(0,0,0,0.3);
		position: absolute;
		left: 0;
		top: 0;
	}
	.wrapper .header{
		background: white;
	}
	.wrapper img{
		width: 17px;
	}
	
	ul{
		margin-left: 3.3%;
		margin-top: 6%;
	}
	ul li{
		margin-bottom: 2%;
	}
	ul li a{
		display: block;
		text-decoration: none;
		color: #464646;
		font-size: 19px;
		
	}
	ul li img{
		width: 25%;
		border-radius: 6px;
		vertical-align: middle;
		margin-right: 3%;
	}
</style>

<script type="text/javascript">
	export default {
		data(){
			return{
				list:[],
				msg:'',
				sort:[]
			}
		},
		methods: {
			getMenu() {
				document.getElementById('menu').style.left=0;
				$('a').eq(0).removeClass('active')
				$('#menu a').eq(2).addClass('active')
			},
			pull(){
				$('.wrapper')[0].style.display="block"
			},
			back(){
				$('.wrapper')[0].style.display="none"
			},
			del(){
				$('#search').val('')
			}
		},
		mounted() {
			this.$http.get('sort.json').then(function(res) {
				console.log(res.body.data.sort)
				this.sort=res.body.data.sort
			})
		}
	}
</script>