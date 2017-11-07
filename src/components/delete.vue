<template>
	<div :class="['prompt-content', maskShow ? 'visible' : '']" v-show="maskShow">
    <div class="mask" @click="maskHide"></div>
		<!-- 删除弹层 v-show="maskShow" -->
	  <!-- <div class="delete-mask">
	    <div class="mask" @click="maskHide"></div>
	    <div class="delete-list">
	      <span class="delete-text" @click="promptShow = !promptShow">删除</span>
	      <span class="cancel" @click="deleteShow(0)">取消</span>
	    </div>
	  </div> -->
	  <!-- 提示弹窗  v-show="promptShow" -->
	  <div class="prompt">
      <h4>{{headerText}}</h4>
	  	<p>{{propText}}</p>
	  	<div class="footer">
	  		<span class="cancel-text" @click="deleteShow(0)" v-show="cancelShow">取消</span>
	  		<span class="yes" @click="deleteShow(1)">确认</span>
	  	</div>
	  </div>
	</div>	
</template>

<script>
	export default {
		props:['maskShow','propText','cancelShow','headerText'],
		data (){
			return{
  			// 删除提示弹层
        promptShow: false
			}
		},
    created () {
    },
		methods: {
	    deleteBtn(){
      // 遮罩层
        this.maskShow = true
      },
      // 取消删除
      cancelShowFun(){
          this.maskShow = false
      },
      // 提示是否删除
      deleteShow(n){
        this.$emit('deleteShow',n)
        this.promptShow = false
      },
      // 点击弹层关闭
      maskHide(){
        if(!this.promptShow){
          this.$emit('deleteShow')
        }
      },
  	}
	}
</script>

<style scoped lang="less">
  .mask{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      background: rgba(0,0,0,0.6);
    }
  .delete-mask{
    .delete-list{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 1000;
      transform: translate3d(0,100%,0);
      backface-visibility: hidden;
      width: 100%;
      span{
        display: block;
        position: relative;
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        &:last-child{
          border-top: 5px solid #f5f5f5;
        }
      }
    }
  }
  .prompt{
  	position: fixed;
    z-index: 1000;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fafafc;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    h4{
      padding-top: 15px;
      font-size: 18px;
      color: #2E3033;
      line-height: 28px;
      font-weight: 500;
    }
    p{
    	line-height: 24px;
	    padding: 17px 20px 23px;
	    text-align: center;
      font-size: 18px;
      color: #2E3033;
    }
    .footer{
    	position: relative;
    	display: flex;
    	line-height: 50px;
    	font-size: 18px;
  		&:before{
  			content: "";
		    position: absolute;
		    left: 0;
		    top: 0;
		    width: 100%;
		    height: 1px;
		    border-top: 1px solid #d5d5d6;
		    color: #d5d5d6;
		    transform-origin: 0 0;
		    transform: scaleY(.5);
  		}
    	span{
    		display: block;
		    flex: 1;
        position: relative;
        color: #8A9199;
        font-size: 18px;
    	}
    	.yes{
    		color: #1571E5;
    		&:before{
    			content: "";
			    position: absolute;
			    left: 0;
			    top: 0;
			    width: 1px;
			    height: 100%;
			    border-left: 1px solid #d5d5d6;
			    color: #d5d5d6;
			    -webkit-transform-origin: 0 0;
			    transform-origin: 0 0;
			    -webkit-transform: scaleX(.5);
			    transform: scaleX(.5);
			  }
    	}
    }
  }
  .prompt-content{
    position: relative;
    z-index: 1000;
    &.visible{
      .delete-list{
        transform: translate3d(0,0,0);
      }
    }
  }
</style>