<template>
   <div class="footer">
    <span class="information" @click="helpFun">{{commentcount > 0 ? commentcount : commentcountNum}}</span>
    <div class="praises">
      <span class="no-praise" @click="praiseFun(1)">{{nopraise > 0 ? nopraise : nopraiseNum}}</span>
      <span :class="[praise > 0 ? 'reliable praise' : 'reliable']" @click="praiseFun(0)">{{praise > 0 ? '+'+praise : praiseNum}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['commentcount','praise','nopraise','fid','hid','lengthNum'],
    data () {
      return {
        commentcountNum: ' ',
        praiseNum: '靠谱',
        nopraiseNum: '不赞同'
      }
    },
    created () {
    },
    methods: {
      // 点赞
      praiseFun (id) {
        var me = this
        this.$emit('insertpraise',{
          fid: me.fid,
          hid: me.hid,
          lengthNum: me.lengthNum,
          type: id
        })
      },
      // 评论
      helpFun (){
        var me = this
        this.$emit('inserthelp',{
          fid: me.fid,
          hid: me.hid,
          lengthNum: me.lengthNum,
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .footer{
    position: relative;
    height: 38px;
    padding-top: 4px;
    justify-content: space-between;
    align-items: center;
  }
  .praises{
    position: absolute;
    right: 0;
    top: 2px;
    min-width: 135px;
    display: flex;
    justify-content: flex-end;
  }
  .information{
    color: #a1a9b3;
    font-size: 14px;
    line-height: 38px;
    &:before{
      content: "\590d";
      font-family: 'iconfont';
      color: #A1A9B3;
      display: inline-block;
      width: 13px;
      height: 13px;
      margin-right: 4px;
      font-size: 12px;
    }
  }
  .no-praise{
    font-size: 14px;
    color: #A1A9B3;
    line-height: 38px;
    position: relative;
    padding-right: 9px;
    &:before{
      content: "\8d5e";
      font-family: 'iconfont';
      color: #a1a9b3;
      display: inline-block;
      width: 13px;
      height: 13px;
      margin-right: 4px;
      font-size: 12px;
    }
    &:after{
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -6px;
      height: 12px;
      width: 1px;
      background: #E4E5E6;
    }
  }
  .reliable{
    padding-left: 32px;
    color: #666;
    font-size: 14px;
    line-height: 38px;
    position: relative;
    &.praise{
      color: #E64340;
    }
    &:before{
      content: "";
      position: absolute;
      left: 8px;
      top: 5px;
      width: 20px;
      height: 21px;
      background: url('data:image/png;base64,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') no-repeat 50%;
      background-size: 100%;
    }
  }
  .reliable.visible{
    color: #E64340;
  }
</style>
