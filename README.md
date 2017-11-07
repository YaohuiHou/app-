# APPHelp detail

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

- [最新有道文档地址：http://note.youdao.com/share/?id=a90b52ec3b077da79470569139a9f194&type=note#/](http://note.youdao.com/share/?id=a90b52ec3b077da79470569139a9f194&type=note#/)
- [通信文档地址：http://note.youdao.com/share/?id=f3e7dce278141e83c17a77c57c6a04d6&type=note#/](http://note.youdao.com/share/?id=f3e7dce278141e83c17a77c57c6a04d6&type=note#/)


```
  // 新增通信方法：
  
  调用
    评论：onCommentHelp
    帮助：onInsertHelp
  回调：
    评论：onCommentHelpCallback
    帮助：onInsertHelpCallback

```


### 域名
    测试域名  http://didi.360che.com/qiuzhuapp/
    正式域名：
    
### 图片上传说明
    上传七牛
    桶名：truckhome 路径：help360che
    域名：https://img2.kcimg.cn
    图片命名规则：GUID
    
### 首页头部banner（Basic.ashx?action=banner）
    接口地址：Basic.ashx?action=banner
    请求方式：POST/GET
    
参数名|参数类型|是否必填|参数描述
    ---|---|---|---
    userid	 | string | 否 | 	当前用户userid
    
     返回格式：json
     {

    "userpic": "",//昨日第一名头像
    "solve": "截止2017年7月17日已为卡友解决267567个问题",//卡友解决问题个数信息
    "focus": "eebf8578-afc1-4dd5-8db2-34094fb399eb.jpg",//焦点图
    "notice": [
        {
            "title": "",//图标主标题
            "subtitle": "",//副标题
            "pic": "",//图标
            "url": "https://nearby.360che.com/"//跳转地址
        },
        {
            "title": "",
            "subtitle": "",
            "pic": "",
            "url": "http://bbs.360che.com/weixin/viewthread.php?tid=1333783"
        }
    ],
    "rankurl":"http://mhelp.360che.com/rank.html",
    "status": 0//成功 失败1

     }
    
### 求助列表（ForHelpList.ashx?action=getList）
    接口地址：ForHelpList.ashx?action=getList
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 否 | 	当前用户userid
		time | string | 是 | 	翻页时传上一页最后一条数据的时间 首页默认空
		type | int | 否 | 标签分类id
		content | string|否|模糊搜索
		cityid|int |否|城市id（获取同城）
		coordinate|string|否|坐标 longitude,latitude
		
	返回格式：json
	
	{

    "data": [
       
        {
            "id": 10820,//id
            "reward": 5,//悬赏数
            "status": 0,//是否解决
            "headpic": "http://face.360che.com/data/avatar/new/71/52c3f86295dab6be27f769add66277e9_big.jpg",//头像
            "nikename": "飞奔的货车",//匿名
            "total": 0,//帮助数
            "date": "05-19",//发帖时间
            "tag": "打听行情",//标签
            "content": "北京天气怎么样",//求助内容
            "userid": "504771",//用户id
            "path": "北京市朝阳区兴隆东街",//地址
            "grade": 0,//获取等级
            "carbrand":"卡车"
            "gallery": [
                {
                    "imgurl": "83fbd2bcc816474a9a6b08472a344f3f.jpg_600x400.jpg",//图片
                    "imgurlmax":"83fbd2bcc816474a9a6b08472a344f3f.jpg",//原图
                    "w": 600,
                    "h": 400
                }
            ],
            "datetime": "2017/5/19 9:31:22"//发布时间
        }
    ],
    "totalpage": 952,//总页数
    "status": 0//成功 失败1

}

### 求助置顶数据（ForHelpList.ashx?action=gettop）
    接口地址：ForHelpList.ashx?action=gettop
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 否 | 	当前用户userid
		
	返回格式：json
	
	{

    "data": [
       
        {
            "id": 10820,//id
            "reward": 5,//悬赏数
            "status": 0,//是否解决
            "headpic": "http://face.360che.com/data/avatar/new/71/52c3f86295dab6be27f769add66277e9_big.jpg",//头像
            "nikename": "飞奔的货车",//匿名
            "total": 0,//帮助数
            "date": "05-19",//发帖时间
            "tag": "打听行情",//标签
            "content": "北京天气怎么样",//求助内容
            "userid": "504771",//用户id
            "path": "北京市朝阳区兴隆东街",//地址
            "grade": 0,//获取等级
            "carbrand":"卡车",
            "gallery": [
                {
                    "imgurl": "83fbd2bcc816474a9a6b08472a344f3f.jpg_600x400.jpg",//图片
                    "w": 600,
                    "h": 400
                }
            ],
            "datetime": "2017/5/19 9:31:22"//发布时间
        }
    ],
    "status": 0//成功 失败1

}

### 用户隐藏求助置顶（ForHelpList.ashx?action=deletetop）
    接口地址：ForHelpList.ashx?action=deletetop
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 | 	当前用户userid
		
	返回格式：json
	{
	  "status"：0   0成功 1失败
	}
	
### 标签（ForHelpList.ashx?action=gettag）
    接口地址：ForHelpList.ashx?action=gettag
    请求方式：POST/GET
    请求参数
    
    返回格式json
    
    {
      "status": 0,
      "data": [
          {
            "id": 1,
            "name": "问个路"
          },
          {
            "id": 2,
            "name": "车坏了"
          }
      ]
    }

### 发布求助（ForHelpSubmit.ashx?action=submit）
    接口地址：ForHelpSubmit.ashx?action=submit
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		content	 | string | 是 |求助内容
		detailed|string |否|详情
		tag | string | 是 |分类标签
		viewTerminal | string |是|终端 android ios
		coordinate|string|否|坐标 longitude,latitude
		userid|string|是|用户id
		img|json格式|是|图片和视频
		
		img json格式
		[{
		   "img":"242343456928424.jpg",//图片地址（视频图）
		   "video":"242343456928424.mp4",//视频地址
		   "type":0,  //0图片 1视频
		   "w":300,//宽
		   "h":300,//高
		}]
		
	返回格式json
	
	{
	  "status":"0", //0成功 1失败
	  "id":8128,//求助ID
	  "message":"发布成功"
	}
	
### 获取悬赏卡路里列表（ForHelpSubmit.ashx?action=getreward）
    接口地址：ForHelpSubmit.ashx?action=getreward
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 |当前用户
	
    返回格式json
	
	{

       "status": 0,
       "userreward": 0,
       "data": [
           {
               "reward": 2
           },
           {
               "reward": 5
           },
           {
               "reward": 10
           }
      ]

    }
    
### 设置悬赏卡路里数（ForHelpSubmit.ashx?action=setreward）
    接口地址：ForHelpSubmit.ashx?action=setreward
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
        id|int|是|求助id
        reward|int|是|悬赏卡路里
		userid	 | string | 是 |当前用户
	
    返回格式json
	
	{

       "status": 0,//0成功 1失败
       "message": "悬赏成功",
    }
	
### 求助详情（ForHelpDetail.ashx?action=details）
    接口地址：ForHelpDetail.ashx?action=details
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		id	 | int | 是 |求助id
		userid|string|否|用户id
		
	返回格式json
	
     {
         "id": 691,//求助id
         "nickname": "西伯利亚小狼",//昵称
         "headpic": "https://i.kcimg.cn/data/avatar/new/34/d56f37fe367f4d8ab221b3963ef70314_big.jpg-120x120.jpg",//头像
         "userid":"509334",//用户id
         "grade": 3,//等级
         "content": "卡友们帮我看看这防冻液假不，怕买假货，修水箱卖给我的",//求助内容
         "detailed"："求助详情",//求助详情
         "reward": 0,//悬赏数
         "tag": "卡车百科",//标签
         "region": "",//地址
         "issolve": 1,//是否解决
         "time": "2016-09-11",//发布时间
         "carbrand":"卡车",//车辆认证
         "isfocuson":1,//1关注 0未关注
         "focusoncount":1,//关注数
         "forwarding"：100,//转发数
         "pic": [
             {
                 "img": "ac2c820fa2a34e0ea38d49fe2ee2c804.jpg_600xx.jpg",//图片
                 "video": "",//视频
                 "w": 469,//宽
                 "h": 537,//高
                 "type": 0//0图片 1视频
             }
          ],
         "status": 0 // 0成功 1失败

     }
     
### 帮助列表（ForHelpDetail.ashx?action=helplist）
    接口地址：ForHelpDetail.ashx?action=helplist
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		id	 | int | 是 |求助id
		page | int |是 |当前页
		
	返回格式json
	{
	   "status": 0, // 0成功 1失败
	   "data": [//帮助
             {
                  "hid": 708,//帮助id
                  "content": "尝尝正常的防冻液是甜的",//帮助内容
                  "isvalid": 1,//是否采纳
                  "time": "2016-09-12",//时间
                  "floors": 1,//楼层
                  "praise": 1,//点赞数
                  "nopraise":1,//不赞
                  "nikename": "卡家帮助团队",//匿名
                  "headpic": "https://i.kcimg.cn/data/avatar/new/70/6fa6b884daa9a11af06f237346b33f95_big.jpg-80x80.jpg",
                  "grade": 1,//等级
                  "carbrand": "",//认证卡车
                  "pic": [ 
                       {
                        "imgurl":"ac2c820fa2a34e0ea38d49fe2ee2c804.jpg_600xx.jpg",//图片
                        "w":600,
                        "h":400
                      }
                  ],//图片
                  "commentcount": 0,//评论数
                  "comment": [ 
                       {
                  
                         "id":1,//评论id
                         "content":"asdasdasd",//评论内容
                         "time":"2017-8-23",//评论时间
                         "fid":691,//求助id
                         "hid":708,//帮助ID
                         "nickname":"卡家帮助团队",//评论用户名
                         "tonickname":"西伯利亚小狼"//回复用户
                         "img":"https://i.kcimg.cn/data/avatar/new/70/6fa6b884daa9a11af06f237346b33f95_big.jpg-80x80.jpg"
                       }
                  ]//评论
             }
            ]
	}
	
### 提交帮助（ForHelpDetail.ashx?action=inserthelp）
    接口地址：ForHelpDetail.ashx?action=inserthelp
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		id	 | int | 是 |求助id
		userid | string |是 |用户id
		content|string|是|帮助内容
		viewTerminal|string|是|终端 android ios
		img|json|是|图片
		
	img json格式
		[{
		   "img":"242343456928424.jpg",//图片地址（视频图）
		   "w":300,//宽
		   "h":300,//高
		}]
		
	返回格式json
	{
	   "hid":1,//帮助id
	   "content":"尝尝正常的防冻液是甜的",//帮助内容
	   "isvalid":0,//是否解决
	   "time":"2小时前",//时间
	   "floors":1,//楼层
	   "nikename":"西伯利亚小狼",//昵称
	   "headpic":"https://i.kcimg.cn/data/avatar/new/70/6fa6b884daa9a11af06f237346b33f95_big.jpg-80x80.jpg",
	   "grade":3,//等级
	   "carbrand":"卡车",//认证卡车
	   "pic":[
	      {
	         "imgurl":"https://i.kcimg.cn/6fa6b884daa9a11af06f237346b33f95_big.jpg-600xx.jpg"
	         "w":600,
	         "h":400
	      }
	   ]
	   "status":0
	}
	
### 提交评论（ForHelpDetail.ashx?action=insertcomment）
    接口地址：ForHelpDetail.ashx?action=insertcomment
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		fid	 | int | 是 |求助id
		hid  | int | 是 |帮助id
		parentid|int|是|父评论id 主评论默认0
		userid | string |是 |用户id
		content|string|是|评论内容
		img|string|是|图片
		
	返回格式json
	{
	   "commentId":1,
	   "commentNickName":"西伯利亚小狼",
	   "commentTitle":"评论内容",
	   "commentPUserName":"父评论昵称",
	   "status":0
	}
	
### 点赞和点不赞（ForHelpDetail.ashx?action=insertpraise）
    接口地址：ForHelpDetail.ashx?action=insertpraise
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		fid	 | int | 是 |求助id
		hid  | int | 是 |帮助id
		userid | string |是 |用户id
		type|int|是|0 点赞 1点不赞
		
	返回格式json
	{
	   "status":0,
	   "message":"操作成功"
	}
	
### 关注和取消关注（ForHelpDetail.ashx?action=focuson）
    接口地址：ForHelpDetail.ashx?action=focuson
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		fid	 | int | 是 |求助id
		userid | string |是 |用户id
		
	返回格式json
	{
	   "status":0,
	   "message":"操作成功"
	}
	
### 采纳（ForHelpDetail.ashx?action=validity）
    接口地址：ForHelpDetail.ashx?action=validity
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		fid	 | int | 是 |求助id
		hid | int |是 |帮助id
		
	返回格式json
	{
	   "status":0,
	   "massage":"采纳成功"
	}
	
### 我的求助（MyForHelpList.ashx?action=getmyforhelplist）
    接口地址：MyForHelpList.ashx?action=getmyforhelplist
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 |用户id
		time | string |是 |最后一条时间 第一页默认空
		
	返回格式json
	{

    "status": 0,//0成功 1失败
    "data": [
        {
            "id": 10826,//求助id
            "issolve": 0,//是否解决
            "headpic": "https://i.kcimg.cn/data/avatar/new/34/d56f37fe367f4d8ab221b3963ef70314_big.jpg-120x120.jpg",//头像
            "date": "06-20",//发布时间
            "tag": "其他",//标签
            "unread": "0",//未读数
            "total": 0,//帮助数
            "content": "啦啦啦啦啦啦",//求助内容
            "datetime": "2017/6/20 15:56:33"//发布时间
            "tid":"151398866"//云信群组tid,
            "subtitle": "最后一条回复"//最后一天回复帮助
        }
    ],
    "totalpage": 945//总页数

    }
    
### 我的帮助（MyForHelpList.ashx?action=getmyhelplist）
    接口地址：MyForHelpList.ashx?action=getmyhelplist
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 |用户id
		time | string |是 |最后一条时间 第一页默认空
		
	返回格式json
{

    "status": 0,
    "data": [
        {
            "id": 10779,//求助id
            "issolve": 0,//是否解决
            "headpic": "https://i.kcimg.cn/data/avatar/new/58/c4ba667cef96f72197205d1d2b70c43e_big.jpg-80x80.jpg",//头像
            "date": "05-04",//发布时间
            "tag": "其他",//标签
            "unread": "1",//未读数
            "total": 2,//帮助数
            "content": "精明的给你一些,心",//内容
            "datetime": "2017/5/4 16:29:04",
            "tid":"151398866"//云信群组tid,
            "subtitle": "最后一条回复"//最后一天回复帮助
        }
    ],
    "totalpage": 4

    }
    
### 我的关注（MyForHelpList.ashx?action=getmyfocusonlist）
    接口地址：MyForHelpList.ashx?action=getmyfocusonlist
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 |用户id
		time | string |是 |最后一条时间 第一页默认空
		
	返回格式json
{

    "status": 0,
    "data": [
        {
            "id": 10779,//求助id
            "issolve": 0,//是否解决
            "headpic": "https://i.kcimg.cn/data/avatar/new/58/c4ba667cef96f72197205d1d2b70c43e_big.jpg-80x80.jpg",//头像
            "date": "05-04",//发布时间
            "tag": "其他",//标签
            "unread": "1",//未读数
            "total": 2,//帮助数
            "content": "精明的给你一些,心",//内容
            "datetime": "2017/5/4 16:29:04",
            "tid":"151398866"//云信群组tid,
            "subtitle": "最后一条回复"//最后一天回复帮助
        }
    ],
    "totalpage": 4

    }
    
### 我的消息未读数（MyForHelpList.ashx?action=getnoread）
    接口地址：MyForHelpList.ashx?action=getnoread
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 |用户id
		
	返回格式json
     {

       "forhelpnoread": 41,//我的求助未读数
       "helpnoread": 5,//我的帮助未读数
       "focusonnoread": 1,//我的关注未读数
       "status": 0//0成功 1失败

     }
     
### 我的消息全部已读（MyForHelpList.ashx?action=setallread）
    接口地址：MyForHelpList.ashx?action=setallread
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid	 | string | 是 |用户id
		
	返回格式json
     {

       "message":"设置全部已读成功"
       "status": 0//0成功 1失败

     }
     
### 获取城市列表（City.ashx?action=list）
    接口地址：City.ashx?action=list
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---

		
	返回格式json
    {

    "status": 0,
    "data": [
        {
            "zimu": "A",//字母
            "citydata": [
                {
                    "id": 268,//id
                    "city": "阿拉善盟"//城市
                },
                
            ]
        },
        ]
    }
    
### 热门城市列表（City.ashx?action=gethotcity）
    接口地址：City.ashx?action=gethotcity
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---

		
	返回格式json
    {

    "status": 0,
    "data": [
        {
            "id": 233,
            "city": "北京市"
        },
        {
            "id": 305,
            "city": "上海市"
        }
    ]

    }
    
### 最新求助未读数（ForHelpList.ashx?action=getunreadcount）
    接口地址：ForHelpList.ashx?action=getunreadcount
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
  ---|---|---|---
  userid	 | string | 是 |用户id

		
	返回格式json
    {

      "status": 0  //0成功 1失败
      "ucount": 20 //未读数
    
    }
    
### 清除最新求助未读数（ForHelpList.ashx?action=clearunreadcount）
    接口地址：ForHelpList.ashx?action=clearunreadcount
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
  ---|---|---|---
  userid	 | string | 是 |用户id

		
	返回格式json
    {

      "status": 0  //0成功 1失败
      "message": "清除未读数成功"
    
    }
    
### 发送云信消息（ForHelpDetail.ashx?action=sendgroupmessage）
    接口地址：ForHelpDetail.ashx?action=sendgroupmessage
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		id	 | int | 是 |求助id
		userid | string |是 |用户id
		content |string|是|求助内容
		viewTerminal | string|是| android ios
		img|string|是|图片地址 逗号分开
		type|string|是|0文本信息 1图片信息

		
     img 参数 json格式
		[{
		   "img":"242343456928424.jpg",//图片地址（视频图）
		   "w":300,//宽
		   "h":300,//高
		}]
		
		
返回格式json

	{
	   "hid":1,//帮助id
	   "content":"尝尝正常的防冻液是甜的",//帮助内容
	   "isvalid":0,//是否解决
	   "time":"2小时前",//时间
	   "floors":1,//楼层
	   "nikename":"西伯利亚小狼",//昵称
	   "headpic":"https://i.kcimg.cn/data/avatar/new/70/6fa6b884daa9a11af06f237346b33f95_big.jpg-80x80.jpg",
	   "grade":3,//等级
	   "carbrand":"卡车",//认证卡车
	   "pic":[
	      {
	         "imgurl":"https://i.kcimg.cn/6fa6b884daa9a11af06f237346b33f95_big.jpg-600xx.jpg"
	         "w":600,
	         "h":400
	      }
	   ]
	   "status":0
	}
	
### 获取用户信息接口（UserInfo.ashx?action=userinfo）
    接口地址：UserInfo.ashx?action=userinfo
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		userid | string |是 |用户id

返回格式json
    
    {
       "status": 0,//0成功
       "userid": "34534",//用户id
       "nikename": "",//用户昵称
       "isfriend": 0//卡路里数
    }
    
### 分享接口（ForHelpDetail.ashx?action=share）
    接口地址：ForHelpDetail.ashx?action=share
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		id | string |是 |求助id

返回格式json
    
     {
        "title": "赤峰到克什克腾旗大概有多远？路况怎么样？山大不大？兄弟先谢了",
        "detailed": "赤峰到克什克腾旗大概有多远？路况怎么样？山大不大？兄弟先谢了",
        "link": "http://mhelp.360che.com/detail654.html",
        "imgUrl": "",
        "isAddCalorie": true,
        "forwarding"：100,//转发数
        "status": 0
     }
     
### 记录转发数接口（ForHelpDetail.ashx?action=forwarding）
    接口地址：ForHelpDetail.ashx?action=forwarding
    请求方式：POST/GET
    请求参数
   

参数名|参数类型|是否必填|参数描述
---|---|---|---
		id | string |是 |求助id

返回格式json
    
     {
        "status": 0, //0成功 1失败
        "forwarding": 100 //转发数
       
     }
