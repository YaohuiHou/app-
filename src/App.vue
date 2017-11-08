<template>
  <div class="wrapper">
    <transition name="fade">
      <set-layload v-if="layeload" class="layeload"></set-layload>
    </transition>
    <transition name="fade">
      <div v-if="!layeload">
        <!-- 求助详情 -->
        <help-detail 
          :detailData="detailData" 
          :userid="userid" 
          :thisuserid="thisuserid" 
          @deleteBtn="deleteBtn" 
          @problem="focusonFun"
          @onshare="shareFun"
        ></help-detail>
        <!-- 帮助列表 -->
        <help-list 
          :issolve="detailData.issolve"
          :helpData="helpData" 
          :grade="detailData.reward" 
          :fid="detailData.id" 
          :userid="userid"
          :thisuserid="thisuserid"
          @validity="confirm" 
          @insertpraiseing="insertpraiseFun" 
          @commentHelp="commenthelp"
          @inserthelp="commenthelp"
          @onimages="onimages"
          >
          </help-list>
          <!-- 吸低footer -->
        <inputView @onshare="shareFun" @oninsert="inserthelp" v-if="inputFooterShow"></inputView>
        <loadView :completedShow="completedShow" :loading="loading" :nothing="nothing"></loadView>
      </div>
    </transition>
    <deleteView 
      :maskShow="maskShow" 
      :headerText="headerText"
      :propText="propText"
      :cancelShow="cancelShow"
      @deleteShow="deleteShow"
    ></deleteView>
  </div>
</template>

<script>
import XHR from './api'
import SetLayload from './components/lazload/set-layload.vue'
import helpDetail from './components/detail.vue'
import helpList from './components/list.vue'
import inputView from './components/input.vue'
import loadView from './components/load.vue'
import deleteView from './components/delete.vue'
export default {
  components: {
    SetLayload,
    helpDetail,
    helpList,
    inputView,
    loadView,
    deleteView
  },
  data () {
    return {
      // 详情页数据
      detailData:{},
      // 帮助列表
      helpData: [],
      // load动画
      layeload: true,
      // 黑色遮罩层
      maskShow: false,
      // 展示文案
      headerText:'',
      propText:'',
      // 取消按键
      cancelShow:true,
      // load
      loading: false,
      nothing: false,
      completedShow: false,
      userid: 525895,
      // 加密字符串
      auth:'',
      thisuserid: 0,
      pageB: false,
      page: '1',
      // 求助id
      helpId: '',
      // 下标
      commentText: {},
      // inputview 展示
      inputFooterShow: true
    }
  },
  created () {
    // 获取id
    let result = location.href.match(/id=([^/&|$]+)/)
    if(result && result[1]){
      this.helpId = result[1]
    }
    // 展示数据
    this.getHelpDetail();
    this.getHelpList();
    
    // 获取用户id
    this.getUserid()
    // 滚动加载
    window.addEventListener('scroll', this.onScroll);
  },
  mounted () {
    var me = this
    this.connectWebViewJavascriptBridge((bridge) => {
      bridge.init(function (message, responseCallback) {
      })
      // 登录回调
      bridge.registerHandler('onLoginCallback', (data, responseCallback)=> {
        let res = data
        if (typeof data =='string') {
          res = JSON.parse(data)
        }
        if(res.status){
          me.userid = res.data.userid
        }
      })
      // 分享回调
      bridge.registerHandler("onShareCallback", function(data, responseCallback) {
          var data = JSON.parse(data);
          
      })
      // 评论回调
      bridge.registerHandler("onCommentHelpCallback", function(data, responseCallback) {
          var data = JSON.parse(data);
          if(!data.status){
            let obj = {
              "id": data.commentId,//评论id
              "content": data.commentTitle,//评论内容
              "time":"刚刚",//评论时间
              "fid":me.commentText.fid,//求助id
              "hid":me.commentText.hid,//帮助ID
              "nickname": data.commentNickName,//评论用户名
              "tonickname": data.commentPUserName,//回复用户
              "img": data.imgurl ? data.imgurl : ''
            }
            me.helpData[me.commentText.lengthNum].comment.push(obj)
            me.helpData[me.commentText.lengthNum].commentcount +=1
          }
      })
      // 帮助回调
      bridge.registerHandler("onInsertHelpCallback", function(data, responseCallback) {
          var data = JSON.parse(data);
          if(!data.status){
            me.helpData.push( data )
            me.nothing = false
          }
      })
    })
  },
  methods: {
    deleteBtn(o){
      // 遮罩层
      this.maskShow = true
    },
    // 弹窗
    deleteShow(n){
      this.maskShow = false;
      // 页面滑动
      document.querySelector('.wrapper').style.overflow='auto';//出现滚动条

      if(!this.detailData.issolve && n){
        // 采纳
        this.validityFun();
      }
    },
    // 获取用户信息接口
    getUserid () {
      const COOKIE = document.cookie;
      
      if(/360CHE/i.test(navigator.userAgent)){      // 判断是否在app
        // 吸低input 关闭
        this.inputFooterShow = false
        //  获取ua
          var UAuid = navigator.userAgent.match(/USERID\/([^ $]+)/i);
          var Auth = document.cookie.match(/AbcfN_authapp=([^;$]+)/)
          // 获取cookie
          var Cookieuid = document.cookie.match(/ForHelp_ajaxuid=([^;$]+)/);
          var iOSCookieuid = document.cookie.match(/AbcfN_ajaxuid=([^;$]+)/);
          var UID = 0,AuthStr = '';
          if(UAuid && parseInt(UAuid[1]) != 0){
              UID = parseInt(UAuid[1]);
          }else if(Cookieuid && Cookieuid[1]){
              UID = Cookieuid[1]
          }else if(iOSCookieuid && iOSCookieuid[1]){
              UID = iOSCookieuid[1]
          }

          this.userid = UID;

          // 获取加密字符串
          if(Auth && Auth[1]){
            AuthStr = Auth[1]
            this.auth = AuthStr
          }
      }else{
        let uid = COOKIE.match(/AbcfN_ajaxuid=([^;$]+)/);
        if(uid && uid[1]){
          this.userid = uid[1]
        }
      }
    },
    // 判断登录 调取登录界面
    verifySignIn (){ 
      if(!this.userid){
        if(/360CHE/i.test(navigator.userAgent)){      // 判断是否在app
          this.callNativeMethod('onLogin')
        }else{
          location.href = "https://sso.360che.com/?referer="+location.href
        }
      }
    },
    /*
      获取求助详情
      {
        id  求助id（必填）
      }
    */ 
    getHelpDetail () {
      var json = {
        id : this.helpId
      }
      XHR.getHelpDetail(json).then((res) => {
        if(res.data && !res.data.status){
          this.layeload = false
          this.detailData = res.data
          // 求助用户id
          this.thisuserid = res.data.userid
        }else{
          // 返回上一页
          location.href(history.go(-1))
        }
      })
    },
    /*
      获取求助列表
      {
        id    求助id
        page  页数
      }
    */
    getHelpList () {
      var json = {
        id : this.helpId,
        page: this.page
      }
      XHR.getHelpList(json).then((res) => {
        if(res.data && !res.data.status){
          this.pageB = false
          // 合并
          this.helpData = this.helpData.concat(res.data.data);
          if(res.data.data.length < 9){
            this.completedShow = true
            this.loading = false
            this.pageB = true
          }
          if(this.helpData.length <= 0){
            // 底线
            this.completedShow = false
            // 空
            this.nothing = true
            this.pageB = true
          }
        }
      })
    },
    /*
     点赞 & 点不赞
     {
       fid: 求助id
       hid: 帮助id
       userid: 用户id
       type: 0赞 1不赞
     }
    */
    insertpraiseFun (o) {
      
      // 登录
      this.verifySignIn();
      if(!this.userid) return;

      if(this.userid){
        var json = {
          fid: o.fid,
          hid: o.hid,
          userid: this.userid,
          type: o.type,
          auth: this.auth
        }
        let nopraise = this.helpData[o.lengthNum].nopraise
        let praise = this.helpData[o.lengthNum].praise
        if(this.helpData[o.lengthNum].ispraise) return;
        XHR.insertpraise(json).then((res) => {
          if(res.data && !res.data.status){
            // 是否已点
            if(this.helpData[o.lengthNum].ispraise){

              if( !o.type ){
                nopraise = parseInt(nopraise) - 1
              }else{
                praise = parseInt(praise) - 1
              }

            }else{

              if( o.type ){
                nopraise = parseInt(nopraise) + 1
              }else{
                praise = parseInt(praise) + 1
              }
              
            }

            
            
            this.helpData[o.lengthNum].ispraise = 1
            this.helpData[o.lengthNum].nopraise = nopraise
            this.helpData[o.lengthNum].praise = praise
          }else{
            alert(res.data.message)
          }
        })
      }
    },
    onScroll () {
      var me = this;
      var containerFilter = document.querySelector('.wrapper');
      if(containerFilter.getBoundingClientRect().bottom <= (window.innerHeight + 100) && !me.completedShow && !me.nothing && !me.pageB){
          me.loading = true;
          me.pageB = true;
          me.page = parseInt(me.page) + 1;
          me.getHelpList();
      }
    },
    /*
      关注 & 取消关注
      {
        fid: 求助id
        userid: 用户id
      }
    */
    focusonFun (o) {
      // 登录
      this.verifySignIn();
      if(!this.userid) return;
      var json = {
        fid: o.fid,
        userid: this.userid,
        auth: this.auth
      }
      var me = this
      XHR.focuson(json).then((res) => {
        if(res.data && !res.data.status){
          this.detailData.isfocuson = !this.detailData.isfocuson
          if(this.detailData.isfocuson){
            this.detailData.focusoncount += 1
          }else{
            this.detailData.focusoncount -= 1
          }
        }else{
            alert(res.data.message)
          }
      })
    },
    // 采纳弹窗
    confirm (o){
      this.validity = {
        fid: o.fid,
        hid: o.hid,
        lengthNum: o.lengthNum
      }
      // 禁止滑动
      document.querySelector('.wrapper').style.overflow='hidden';

      this.maskShow = true;
      this.headerText = o.headerText
      // 展示文案
      this.propText = o.propText;
      // 取消按键
      this.cancelShow = o.cancelShow
    },
    /*
      采纳
      {
        fid: 求助id
        hid: 帮助id
      }
    */ 
    validityFun () {
      var o = this.validity
      var json = {
        fid: o.fid,
        hid: o.hid,
        userid: this.userid,
        auth: this.auth
      }
      var me = this
      me.helpData.forEach((e,i)=>{
        me.helpData[i].isvalid && ( o.lengthNum = i )
      })
      if(!this.helpData[o.lengthNum].isvalid){
        XHR.validity(json).then((res) => {
          if(res.data && !res.data.status){
            this.helpData[o.lengthNum].isvalid = 1
          }else{
            this.confirm({
              fid: o.fid,
              hid: o.hid,
              lengthNum: o.lengthNum,
              headerText:o.headerText,
              propText: res.data.message,
              cancelShow: false
            })
          }
        })
      }
      
    },
    // 关闭求助
    cancelInput (){
      this.maskShow = true
      this.headerText = '关闭求助'
      // 展示文案
      this.propText = "亲，已经关闭的求助。不能进行任何操作了哟~";
      // 取消按键
      this.cancelShow = false;
    },
    // 评论
    commenthelp (o) {
      this.commentText = o;
      if(!this.detailData.issolve){
         // 登录
        this.verifySignIn();
        if(!this.userid) return;
        
        // 调APP方法
        this.callNativeMethod('onCommentHelp',{
          fid: o.fid,
          hid: o.hid,
          parentid: o.parentid ? o.parentid : 0
        })
      }else{
        // 采纳后提示
        this.cancelInput()
      }
    },
    // 帮助
    inserthelp (o) {
      if(!this.detailData.issolve ){
         // 登录
        this.verifySignIn();
        if(!this.userid) return;
        
        // 调APP方法
        this.callNativeMethod('onInsertHelp',{
          fid: o.fid
        })
      }else{
        // 采纳后提示
        this.cancelInput()
      }
    },
    shareFun (){
      var shareImgUrl = this.detailData.pic[0] ? this.detailData.pic[0].img : 'https://s.kcimg.cn/public/share/images/app-share.jpg';
      this.callNativeMethod('onShare', {
          title: this.detailData.content, // 分享标题
          desc: this.detailData.tag, // 分享描述
          link: location.href, // 分享链接
          imgUrl: shareImgUrl, // 分享图标
          isAddCalorie: false //分享成功后是否加卡路里，true加，false不加
      });
    },
    onimages (o){
      this.callNativeMethod('onShowImages', {
        "current": 0,  //int类型，表示当前图片在集合中的位置，从0开始计数
        "urls":[o.img]  
      });
    }
  }
}
</script>

<style scoped>
@import "./public/reset.css";
@import "./public/common.css";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
</style>
