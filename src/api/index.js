import fetch from './ajax'

export const DEBUG = true // 是否开发模式
const URLS = 'http://didi.360che.com/qiuzhuapp/'
  // const URLS = '/bx'
class XHR {
  // 求助详情
  getHelpDetail(json) {
      return fetch({
        url: `${URLS}ForHelpDetail.ashx?action=details`,
        body: json,
        type: 'GET'
      })
    }
    //   帮助列表
  getHelpList(json) {
      return fetch({
        url: `${URLS}ForHelpDetail.ashx?action=helplist`,
        body: json,
        type: 'GET'
      })
    }
    //   提交帮助
  inserthelp(json) {
      return fetch({
        url: `${URLS}ForHelpDetail.ashx?action=inserthelp`,
        body: json,
        type: 'GET'
      })
    }
    //   提交评论
  commenthelp(json) {
      return fetch({
        url: `${URLS}ForHelpDetail.ashx?action=inserthelp`,
        body: json,
        type: 'GET'
      })
    }
    //   点赞 & 点不赞
  insertpraise(json) {
      return fetch({
        url: `${URLS}ForHelpDetail.ashx?action=insertpraise`,
        body: json,
        type: 'GET'
      })
    }
    //   关注 & 取消关注
  focuson(json) {
      return fetch({
        url: `${URLS}ForHelpDetail.ashx?action=focuson`,
        body: json,
        type: 'GET'
      })
    }
    //   采纳
  validity(json) {
    return fetch({
      url: `${URLS}ForHelpDetail.ashx?action=validity`,
      body: json,
      type: 'GET'
    })
  }
}
export default new XHR()