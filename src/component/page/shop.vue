<template>
	<main>
		<div class="header">
			<i class="iconfont icon-nav" @click='getMenu'></i>
			<h1>购物单</h1>
		</div>
		
		<ul id="list">
			<li v-for='v in lists'><img :src="v.vsrc"/>{{v.vtitle}}</li>
			<!--<li><img src="../../assets/image/img/13.jpg"/>泰式花生椰奶汤粉</li>-->
			<!--<li>{{n}}</li>-->
		</ul>
	</main>
</template>

<style scoped="scoped">
	main{
		width: 100%;
		/*height: 100vh;*/
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
	}
	.header{
		width: 100%;
		height: 8%;
		background: #ffcd02;
		line-height: 47px;
		color: white;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		box-sizing: border-box;
	}
	.header i{
		font-size: 26px;
		
	}
	.header i:nth-of-type(1){
		padding: 1% 7% 0 5%;;
	}
	.header h1{
		display: inline;
		font-size: 20px;
	}
	
	ul{
		margin-left: 3.3%;
		margin-top: 18%;
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
		methods: {
			getMenu() {
				document.getElementById('menu').style.left=0
				$('#menu a').eq(0).removeClass('active')
				$('#menu a').eq(4).addClass('active')
			}
		},
		computed:{
//			name(){
//          	return this.$store.state.vtitle
//          },
//          urls(){
//          	return this.$store.state.vsrc
//          }
			lists(){
				return this.$store.state.vlist
			}
		}
	}
</script>
	


 

