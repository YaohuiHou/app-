<template>
   <div class="help-header">
    <figure class="figure">
      <img :src="header.headpic" class="img">
    </figure>
    <!-- 信息 -->
    <div class="content">
      <div class="info">
        <span class="name">{{ header.nikename }}</span>
        <span :class="`big-grade big-grade${header.grade}`"></span>
      </div>
      <div class="type">
        <span class="carbrand" v-if="header.carbrand">{{header.carbrand}}</span>
        <span class="time">{{header.time}}</span>
      </div>
    </div>
    <!-- 采纳 -->
    <div class="some">
      <span class="validity" v-if="thisuserid == userid && !issolve" @click="validity(header.hid,fid)">采纳</span>
      <span class="floors">{{header.floors}}楼</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:['header','fid','userid','thisuserid','lengthNum','issolve'],
    data () {
      return {
        headerText:'',
        propText:'',
        cancelShow: true
      }
    },
    created () {
      
    },
    methods: {
      // 采纳传值
      validity (h,f) {
        // 展示文案
        if(this.issolve){
          this.headerText = '卡车之家温馨提示';
          this.propText = '采纳'+ this.header.nikename +'的答案为最有效的答案';
          this.cancelShow = true;
        }
        this.$emit('validity',{
          fid: f,
          hid: h,
          lengthNum: this.lengthNum,
          headerText:this.headerText,
          propText:this.propText,
          cancelShow:this.cancelShow
        })
      }
    }
  }
</script>

<style scoped>
  .help-header{
    padding-top: 16px;
    border-top: 1px solid #EEE;
    display: flex;
    flex-wrap: nowrap;
  }
  .figure{
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
  }
  .figure .img{
    widows: 100%;
  }
  .content{
    width: calc(100% - 122px);
    box-sizing: border-box;
    padding-left: 8px;
  }
  .info,.type{
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    padding-bottom: 4px;
  }
  .type{
    padding-bottom: 0;
  }
  .name{
    color: #5981B3;
    font-size: 12px;
    line-height: 14px;
  }
  .carbrand{
    color: #5C6066;
    margin-right: 8px;
  }
  .time{
    font-size: 12px;
    color: #A1A9B3;
  }
  .some{
    width: 90px;
    padding: 4px 0;
    display: flex;
    justify-content: flex-end;
  }
  .validity{
    border: 1px solid #1571E5;
    height: 22px;
    line-height: 22px;
    padding: 0 8px;
    border-radius: 11px;
    color: #1571E5;
    font-size: 12px;
    margin-right: 8px;
  }
  .floors{
    color:#A1A9B3;
    font-size: 12px;
    line-height: 24px;
    height: 24px;
  }
</style>
