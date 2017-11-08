<template>
   <div class="content-view">
     <p>{{contentData.content}}</p>
     <figure v-for="(item,index) in contentData.pic" v-bind:key="index">
       <img :src="item.imgurl" class="img" >
     </figure>
     <!-- 采纳 -->
     <div v-if="contentData.isvalid" class="valid">
       <div class="valid-img"></div>
       <div class="valid-content">
         <span>感谢<em>{{contentData.nikename}}</em>：</span>
         <p>太给力了，你的答案完美解决我的问题！</p>
       </div>
       <p v-if="reward > 0">获得：<i class="code"></i>x{{reward}}卡路里</p>
     </div>
     <!-- 评论 -->
     <div class="comments" v-if="contentData.commentcount > 0">
       <div class="comment-list" 
        v-for="(item,index) in contentData.comment" 
        v-bind:key="item.id" 
        v-if="index <= commentSome"
        >
         <p v-if="item.tonickname">
          <span @click="inserthelp(item.hid,item.fid,item.id)">{{item.nickname}}</span>
          <em>回复
            <span @click="inserthelp(item.hid,item.fid,item.id)">{{item.tonickname}}</span>
          </em>：{{item.content}}
          <span class="image-look" v-if="item.img.indexOf('http') >= 0" @click="onimages(item.img)">查看图片</span>
        </p>
        <p v-else>
          <span @click="inserthelp(item.hid,item.fid,item.id)">{{item.nickname}}</span>：{{item.content}}
          <span class="image-look" v-if="item.img.indexOf('http') >= 0" @click="onimages(item.img)">查看图片</span>
        </p>
       </div>
       <div class="more" v-if="contentData.commentcount > 3 && listShow" @click="showlist">查看剩余{{contentData.commentcount}}条回复&gt;</div>
     </div>
  </div>
</template>

<script>
export default {
  props:['contentData','reward','lengthNum'],
  data () {
    return {
      commentList: this.contentData.comment,
      commentSome: 2,
      listShow: true
    }
  },
  created () {
    // 只展示三条数据
    // for(var i = 0;i<3;i++){
    //   if(this.commentList[i]){
    //     this.commentSome[i] = this.commentList[i]
    //   }
    // }
  },
  methods:{
    // 评论
    inserthelp (fid,hid,pid) {
      this.$emit('commentHelp',{
        fid: fid,
        hid: hid,
        parentid: pid,
        lengthNum: this.lengthNum
      })
    },
    onimages (img) {
      this.$emit('onimages',{
        img: img
      })
    },
    showlist(){
      this.commentSome = this.contentData.commentcount
      this.listShow = false
    }
  }
}
</script>

<style scoped lang="less">
  .content-view > p{
    font-size: 16px;
    color: #17181A;
    line-height: 22px;
    margin-top: 8px;
  }
  .content-view .img{
    margin-top: 8px;
  }
  .comments{
    position: relative;
    background: #f5f5f5;
    border-radius: 2px;
    padding: 8px 16px;
    margin-top: 8px;
    &:before{
      content: "";
      position: absolute;
      left: 10px;
      top: -2px;
      width: 4px;
      height: 4px;
      background-color: #f3f4f5;
      border-bottom: 1px solid #f3f4f5;
      border-right: 1px solid #f3f4f5;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }
  .comments p{
    font-size: 14px;
    color: #5C6066;
    line-height: 20px;
    word-wrap: break-word;
    margin-bottom: 4px;
  }
  .comments p span{
    color: #5981B3;
  }
  .comments p em,.comments p em span{
    padding-left: 1px;
  }
  .more{
    color: #1571E5;
    font-size: 14px;
    line-height: 16px;
    padding: 11px 0 7px;
  }
  .valid{
    position: relative;
    margin-top: 8px;
    padding: 12px 12px 12px 64px;
    background-image: linear-gradient(-180deg, rgba(246,135,36,0.20) 0%, rgba(246,138,34,0.06) 48%, rgba(253,237,223,0.12) 100%);
  }
  .valid:after{
    content: "";
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
  }
  .valid-img{
    position: absolute;
    left: 13px;
    top: 9px;
    width: 35px;
    height: 40px;
    background: url("https://s.kcimg.cn/app/images/ask/need.png") no-repeat 50%;
    background-size: 100%;
  }
  .valid-content{
    color: #17181A;
    line-height: 17px;
    font-size: 12px;
  }
  .valid-content em{
    color: #5981B3;
    margin-left: 2px;
  }
  .valid-content p{
    max-height: 100%;
    font-size: 12px;
  }
  .valid > p{
    font-size: 12px;
    color: #17181A;
    line-height: 17px;
    margin-top: 8px;
    float: right;
    display: flex;
  }
  .code{
    justify-content: flex-end;
    width: 16px;
    height: 16px;
    background: url("https://s.kcimg.cn/app/images/ask/code.png") no-repeat 50%;
    background-size: 100%;
    margin-right: 1px;
  }
  .image-look{
    color: #1571E5;
    font-size: 14px;
    &:before{
      content: "\67e5";
      font-family: "iconfont";
      color: #1571E5;
      vertical-align: top;
    }
  }
</style>
