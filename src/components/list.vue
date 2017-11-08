<template>
   <div class="help-list">
    <div v-for="(item, index) in helpData" v-bind:key="index">
      <!-- header -->
      <headerView 
        :issolve="issolve"
        :header="item" 
        :fid="fid" 
        :lengthNum="index"
        :userid="userid"
        :thisuserid="thisuserid"
        @validity="validity" 
      ></headerView>
      <contentView 
        :lengthNum="index"
        :contentData="item" 
        :grade="item.grade" 
        @commentHelp="commentHelp" 
        @inserthelp="inserthelp"
        @onimages="onimages"
      ></contentView>
      <footerView 
        :lengthNum="index"
        :commentcount="item.commentcount" 
        :praise="item.praise" 
        :nopraise="item.nopraise"
        :fid="fid"
        :hid="item.hid"
        @insertpraise="insertpraise"
        @inserthelp="inserthelp"
      >
      </footerView>
    </div>
  </div>
</template>

<script>
import headerView from './header.vue'
import contentView from './content.vue'
import footerView from './footer.vue'
export default {
  props:['helpData','reward','fid','userid','thisuserid','issolve'],
  components:{
    headerView,
    contentView,
    footerView
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    validity (e) {
      this.$emit('validity',e)
    },
    insertpraise (o) {
      this.$emit('insertpraiseing',o)
    },
    commentHelp (o){
      this.$emit('commentHelp',o)      
    },
    inserthelp (o){
      this.$emit('inserthelp',o)      
    },
    onimages(o){
      this.$emit('onimages',o)   
    }
  }
}
</script>

<style scoped lang="less">
  .help-list{
    padding: 0 16px;
    border-top: 8px solid #F7F9FA;
    background: #fff;
    :nth-of-type(1){
      .help-header{
        border: none;
      }
    }
  }
  
</style>
