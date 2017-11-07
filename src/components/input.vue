<template>
  <div class="help">
  		<label for="">帮</label>
  		<input type="text" placeholder="助人不止快乐，还赚卡路里币" @focus="input">
  	<span class="forward" @click="share">转发</span>
  </div>
</template>

<script>
	export default {	
	  data () {
	    return {

	    }
	  },
	  created () {
	    
		},
		methods:{
			share(){
				this.$emit('onshare')
			},
			input(){
				this.$emit('oninsert')
			}
		}
	}
</script>

<style scoped lang="less">
	.help{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		height: 50px;
		background: #FFFFFF;
		box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.06);
		padding: 0 28px 0 16px;
		z-index: 200;
		label{
			position: absolute;
			top: 12px;
			left: 32px;
			font-family: 'iconfont';
			color: #9C9E9E;
		}
		input{
			flex: 1;
			height: 22px;
			padding: 6px 0 6px 38px;
			background: #f6f7f8;
			font-size: 16px;
			border: 1px solid #E8E8E8;
			border-radius: 4px;
			margin: 7px 20px 7px 0;
			&::-webkit-input-placeholder {
				color: #9c9e9e;
			}
		}
		.forward{
			font-size: 12px;
			color: #A1A9B3;
			padding-top: 7px;
			text-align: center;
			&:before{
				display: block;
				font-family: 'iconfont';
				content: "\8f6c";
			}
		}
	}
</style>
