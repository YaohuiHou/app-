<template>
  <div class="comment-list">
    <div class="header">
      <figure><img :src="detailData.headpic" alt=""></figure>
      <div class="title">
        <span class="name">{{detailData.nickname}}</span>
        <span :class="['garde','all-grade' + detailData.grade]">{{detailData.grade}}</span>
      </div> 
      <div class="model">
        <span class="model-name" v-if="detailData.carbrand != ''">{{detailData.carbrand}}</span>
        <span class="time">{{detailData.time}}</span>
      </div>
      <!-- 已解决 || 未解决 -->
      <div :class="[detailData.issolve == 1 ? 'solve' : 'no-solve']"></div>
    </div>
    <div class="content">
      <p>
        <span :class="['calorie' + detailData.reward]" v-if="detailData.reward != 0">{{detailData.reward}}</span>
        <span class="tag">{{detailData.tag}}</span>
        {{detailData.content}}
      </p>
    </div>
    <div class="pic-list" v-for="(item,index) in detailData.pic" v-bind:key="index">
      <figure><img :src="item.img" alt=""></figure>
    </div>
    <div class="footer">
      <span class="coordinate" v-if="detailData.region != ''">{{detailData.region}}</span>
      <!-- 别人的帖子 -->
      <div class="follow" v-if="thisuserid != userid">
        <span class="number">{{detailData.focusoncount}} 人已关注</span>
        <span :class="['problem', detailData.isfocuson == 1 ? 'already' : '']" @click="problem">关注问题</span>
      </div>
      <!-- 我的求助 -->
      <div class="my-help" v-else>
        <span class="invitation" @click="share">邀请好友回答</span>
        <!-- <span class="delete" @click="deleteBtn">删</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['thisuserid','userid','detailData'],
  data () {
    return {

    }
  },
  created () {
    
  },
  methods: {
    // 关注问题传值
    problem(f){
      this.$emit('problem',{
        fid:this.detailData.id,
      })
      // if(this.detailData.isfocuson == 1){
      //   this.detailData.isfocuson == 0
      // }else{
      //   this.detailData.isfocuson = 1

      // }
    },
    deleteBtn(){
      this.$emit('deleteBtn')
    },
    share(){
      this.$emit('onshare')
    }
  }
}
</script>

<style scoped lang="less">
  .comment-list{
    padding: 0 16px;
    background: #FFF;
    .header{
      position: relative;
      padding: 16px 0 16px 40px;
      figure{
        position: absolute;
        top: 16px;
        left: 0;
        width: 32px;
        height: 32px;
        img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      .title{
        display: flex;
        flex-direction: row;
        align-item: center;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        color: #5981B3;
        .name{
          max-width: 140px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .garde{
          display: inline-block;
          width: 49px;
          height: 14px;
          vertical-align: middle;
          margin-left: 4px;
          background: url(https://s.kcimg.cn/bbs/images/app/new-grade.png) no-repeat;
          background-size: 367px 225px;
          text-indent: -100px;
          font-size: 0;
          overflow: hidden;
        }
        .all-grade1{
          width: 49px;
          background-position: -177px -23px;
        }
        .all-grade2{
          background-position: -177px -47px;
          width: 49px;
        }
        .all-grade3{
          background-position: -177px -71px;
          width: 49px;
        }
        .all-grade4{
          background-position: -177px -95px;
          width: 49px;
        }
        .all-grade5{
          background-position: -177px -119px;
          width: 49px;
        }
        .all-grade6{
          background-position: -177px -143px;
          width: 49px;
        }
        .all-grade7{
          background-position: -177px -167px;
          width: 49px;
        }
        .all-grade8{
          background-position: -177px -191px;
          width: 49px;
        }
        .all-grade9{
          background-position: -235px -23px;
          width: 49px;
        }
        .all-grade10{
          background-position: -235px -47px;
          width: 49px;
        }
        .all-grade11{
          background-position: -235px -71px;
          width: 49px;
        }
        .all-grade12{
          background-position: -235px -95px;
          width: 49px;
        }
        .all-grade13{
          background-position: -235px -119px;
          width: 49px;
        }
        .all-grade14{
          background-position: -235px -143px;
          width: 49px;
        }
        .all-grade15{
          background-position: -291px -23px;
          width: 49px;
        }
        .all-grade16{
          background-position: -291px -47px;
          width: 49px;
        }
        .all-grade17{
          background-position: -291px -71px;
          width: 49px;
        }
        .all-grade18{
          background-position: -291px -95px;
          width: 31px;
        }
      }
      .model{
        display: flex;
        flex-direction: row;
        align-item: center;
        margin-top: 6px;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        color: #5c6066;
        .model-name{
          margin-right: 8px;
          font-size: 12px;
          color: #5C6066;
        }
        .time{
          color: #A1A9B3;
        }
      }
      .solve,.no-solve{
        position: absolute;
        top: 8px;
        right: -16px;
        width: 80px;
        height: 80px;
      }
      .solve{
        background: url(https://s.kcimg.cn/app/images/ask/sovel.png) no-repeat;
        background-size: 100%;
      }
      .no-solve{
        background: url(https://s.kcimg.cn/app/images/ask/sovel-no.png) no-repeat;
        background-size: 100%;
      }
    }
    .content{
      position: relative;
      z-index: 20;
      p{
        line-height: 22px;
        font-size: 16px;
        color: #17181a;
        font-weight: bold;
        .calorie2{
          background: url(https://s.kcimg.cn/app/images/ask/calorie2.png) no-repeat;
        }
        .calorie5{
          background: url(https://s.kcimg.cn/app/images/ask/calorie5.png) no-repeat;
        }
        .calorie10{
          background: url(https://s.kcimg.cn/app/images/ask/calorie10.png) no-repeat;
        }
        .calorie10,.calorie5,.calorie2{
          display: inline-block;
          width: 22px;
          height: 24px;
          background-size: 100%;
        }
        .tag{
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0 3px;
          text-align: center;
          font-size: 12px;
          color: #FF9300;
          background: rgba(255,147,0,0.20);
          border-radius: 2.5px;
          font-size: normal;
          position: relative;
          vertical-align: top;
          &:before{
            font-size: 12px;
            font-family: 'iconfont';
            content: "\6807";
          }
        }
      }
    }
    .pic-list{
      margin: 8px 0;
      img{
        width: 100%;
      }
    }
    .footer{
      height: 24px;
      line-height: 24px;
      padding: 4px 0 12px 0;
      .coordinate{
        font-size: 12px;
        color: #a1a9b3;
        &:before{
          font-family: 'iconfont';
          content: "\5750";
          margin-right: 4px;
          font-size: 12px;
        }
      }
      .follow,.my-help{
        float: right;
        .number{
          display: inline-block;
          line-height: 12px;
          font-size: 12px;
          color: #A1A9B3;
          margin-right: 8px;
        }
        .invitation{
          display: inline-block;
          width: 88px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          background: #FF9300;
          border-radius: 3px;
          margin-right: 8px;
        }
        .delete{
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          color: #99918A;;
          font-family: 'iconfont';
        }
        .problem,.already{
          display: inline-block;
          width: 64px;
          height: 24px;
          line-height: 24px;
          background: #1571E5;
          border: 0 solid #1571E5;
          border-radius: 2.5px;
          font-size: 12px;
          color: #fff;
          text-align: center;
        }
        .already{
          background: #f5f5f5;
          color: #999;
        }
      }
      .my-help{
        display: flex;
      }
    }
  }
</style>