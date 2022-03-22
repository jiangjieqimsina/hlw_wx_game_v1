/**
 *  敢客微信小游戏
 *  login, pay, report
 */
 import PaySDK from './paysdk'
//  require("GankVIPSDK.js");

var GameWXmini = (function () {
  var GameWXmini = {}

  GameWXmini.h5_config = {
    share: {
      imgurl: '',
      title: '',//分享标题
      titlepath:"",//分享图片路径
      backicon:"",//盒子回弹icon图片路径  大小为100*100，为空则不显示该icon图片，为空则不显示该ICON
      backiconpath:"",//此参数即将废弃，改为直接弹出独角兽盒子，参数见下>2.2
      qqgroup:"",//渠道qq群，如独角兽QQ群1:813723534 独角兽QQ群2:813723534为空则不显示任何信息
      kf:"",//0 隐藏在线客服按钮 1 显示在线客服按钮
      fchid:"",//原始渠道ID， 分享的chid
      fsubchid:"",
      isrole:"",//0 为不自动创角，1为自动创角
      pldiosActflag:"",//打开IOS活动
      titleid:"",//字符串varchar类型，分享的ID,判断是那个分享图进来的，请客户端保存，用于上报点击，和分享创角
      isbinding:"",//绑定开关，如果返回 1，则开启绑定接口，默认为0
      ispay:"",//ios 或 android //请只有在android机型的时候判断此参数，如返回ios，请调用ios支付接口拉起支付（详情请见ios支付），如返回android，继续走android支付，通过这个字段来判断支付走向
      message: '',
    },
    jh_config: {
      domian: 'https://wxlogin.djsh5.com',
      code: "",
      gameid: "570",
      appid: "wxdcd6f52cdcdb8ff2",
      offer_id: "",
      encryptedData: "",
      iv: "",
      chid: "",
      subchid: "",
      formappid: "",
      uid: "",//平台账号，用户上报登陆使用,用户id
      token: "",//平台登录状态，用于验证用户是否登录
      openid: "",//玩家的微信 OPENID
      nickname: "",//昵称
      headimgurl: "",//头像
      sex: "",//性别
      city: "",//城市
      province: "",//省市
      session_key: "",//用户sessionkey
      access_token: ""//游戏的access_token
    },
    jh_api: {

    },
  }

// 获取设备信息
GameWXmini.getSystemInfo = function() {
  if (this.systemInfo) return this.systemInfo
  this.systemInfo = wx.getSystemInfoSync();
  // this.systemInfo.crossSDKV = consts.Version;
  return this.systemInfo
}

  // 设备信息判断
  GameWXmini.isSystem = function(system) {
    system = system.toLowerCase();
    let is = this.is || {};
    if (typeof is[system] != 'undefined') return is[system]
    let sys = GameWXmini.getSystemInfo().system.toLowerCase();
    is[system] = sys.indexOf(system) > -1;
    this.is = is;
    return is[system]
  }

  // 是否是IOS
  GameWXmini.isIOsIS = function() {
    return this.isSystem('ios')
  }

  // 是否是安卓
  GameWXmini.isAndroid = function() {
    return this.isSystem('android')
  }

  GameWXmini.getSystem = function() {
    if(GameWXmini.isAndroid()){
      return "android";
    }else if(GameWXmini.isIOS()){
      return "ios";
    }
    return "pc";
  }

  GameWXmini.c_reload = function(){}

  GameWXmini.c_sendinfo = function(s){}

  GameWXmini.c_openurl = function(url){}

  GameWXmini.c_init_openid = function(openid){
    GameWXmini.h5_config.jh_config.openid = openid;
    console.log("GameWXmini.h5_config.jh_config.openid",GameWXmini.h5_config.jh_config.openid);
  }

  GameWXmini.c_init_share = function(uid){
    GameWXmini.h5_config.jh_config.uid = uid;
    console.log("GameWXmini.h5_config.jh_config.uid",GameWXmini.h5_config.jh_config.uid);
    GameWXmini.h5_share_init();
    // GameWXmini.h5_openCustomerServiceConversation();
    GameWXmini.set_wx_setting_subscribeMessage();
    // GameWXmini.c_friendsCircle();
    // GameWXmini.c_rank_upload();
  }

  //分享初始化
  GameWXmini.h5_share_init = function () {
    var url = `https://api.djsh5.com/weapp/gankshare/?gameid=${GameWXmini.h5_config.jh_config.gameid}&uid=${GameWXmini.h5_config.jh_config.uid}&chid=${GameWXmini.h5_config.jh_config.chid}&subchid=${GameWXmini.h5_config.jh_config.subchid}`;
    console.log("https://api.djsh5.com/weapp/gankshare/............",url)

    var the_header = {
      'content-type': 'application/x-www-form-urlencoded'
    };
    wx.request({
      url: url,
      method: 'GET',
      header: the_header,
      success: function (data) {
        console.info("分享初始化成功", JSON.stringify(data))
        var the_data = data.data
        GameWXmini.h5_config.share.title = the_data.title;
        GameWXmini.h5_config.share.titlepath = the_data.titlepath;
        GameWXmini.h5_config.share.backicon = the_data.backicon;
        GameWXmini.h5_config.share.backiconpath = the_data.backiconpath;
        GameWXmini.h5_config.share.qqgroup = the_data.qqgroup;
        GameWXmini.h5_config.share.kf = the_data.kf;
        GameWXmini.h5_config.share.fchid = the_data.fchid;
        GameWXmini.h5_config.jh_config.chid = the_data.chid;
        GameWXmini.h5_config.jh_config.subchid = the_data.subchid;
        GameWXmini.h5_config.share.fsubchid = the_data.subchid;
        GameWXmini.h5_config.share.isrole = the_data.isrole;
        GameWXmini.h5_config.share.pldiosActflag = the_data.pldiosActflag;
        GameWXmini.h5_config.share.titleid = the_data.titleid;
        GameWXmini.h5_config.share.isbinding = the_data.isbinding;
        GameWXmini.h5_config.share.ispay = the_data.ispay;

        console.log("GameWXmini.h5_config.jh_config.chid",GameWXmini.h5_config.jh_config.chid)
        console.log("GameWXmini.h5_config.jh_config.subchid",GameWXmini.h5_config.jh_config.subchid)
        wx.showShareMenu({
          withShareTicket: true,
          menus: ['shareAppMessage', 'shareTimeline']
        })

        wx.onShareAppMessage(() => {//转发
          return {
            title: GameWXmini.h5_config.share.title,
            imageUrl: GameWXmini.h5_config.share.titlepath,
            query: `chid=${GameWXmini.h5_config.share.fchid}&subchid=${GameWXmini.h5_config.share.fsubchid}&fuid=${GameWXmini.h5_config.jh_config.uid}
                &titleid=${GameWXmini.h5_config.share.titleid}`
          }
        })

        wx.onShareTimeline(() => {//朋友圈分享
          GameWXmini.h5_share_icon();
          return {
            title: GameWXmini.h5_config.share.title,
            imageUrl: GameWXmini.h5_config.share.titlepath,
            query: `chid=${GameWXmini.h5_config.share.fchid}&subchid=${GameWXmini.h5_config.share.fsubchid}&fuid=${GameWXmini.h5_config.jh_config.uid}
                &titleid=${GameWXmini.h5_config.share.titleid}`
          }
        })
        GameWXmini.h5_share_event();
      },
      fail: function (data) {
        console.info("分享初始化失败", JSON.stringify(data))
      }
    })
  }

    //分享上报接口
    GameWXmini.h5_share_event = function () {
      console.log("分享上报接口.......init");
      var query = wx.getLaunchOptionsSync().query;
  
      var chid = 0;
      var subchid = '';
      var fuid = '';//用户来源分享的uid
      var titleid = 1; //分享设置图片id，用户区分图片来源,分享接口返回,默认传1
  
      if (query.chid) {   //链接进入
        chid = query.chid;
        subchid = query.subchid ? query.subchid : '';
        fuid = query.fuid ? query.fuid : '';
        titleid = query.titleid ? query.titleid : '';
      } else if (query.scene) { //小程序码扫描进入，通过透传的场景值中解析chid和subchid
        var sceneObj = {};
        var sceneList = decodeURIComponent(query.scene).split(",");
        for (var i = 0; i < sceneList.length; i++) {
          var sceneItem = sceneList[i];
          sceneObj[sceneItem.split(":")[0]] = sceneItem.split(":")[1];
        }
        if (sceneObj.chid) {
          chid = sceneObj.chid;
          subchid = sceneObj.subchid ? sceneObj.subchid : '';
          fuid = sceneObj.fuid ? sceneObj.fuid : '';
          titleid = sceneObj.titleid ? sceneObj.titleid : '';
        }
      }
  
      if(fuid == ""){
          return;
      }
      var url = `https://api.djsh5.com/weapp/gankshare/fuid/?fuid=${fuid}&gameid=${GameWXmini.h5_config.jh_config.gameid}&uid=${GameWXmini.h5_config.jh_config.uid}&chid=${GameWXmini.h5_config.jh_config.chid}&subchid=${GameWXmini.h5_config.jh_config.subchid}&titleid=${titleid}`;
      console.log("https://api.djsh5.com/weapp/gankshare/fuid/............",url)
      var the_header = {
        'content-type': 'application/x-www-form-urlencoded'
      };
      wx.request({
        url: url,
        method: 'GET',
        header: the_header,
        success: function (data) {
          console.info("分享上报成功", JSON.stringify(data))
          var the_data = data.data;
          console.info("the_data.error", the_data.error)
          if (the_data.error == 0) {
          }
        },
        fail: function (data) {
          console.info("分享上报失败", JSON.stringify(data))
        }
      })
    }

  //分享icon点击事件上报接口
  GameWXmini.h5_share_icon = function () {
    var url = `https://api.djsh5.com/weapp/gankshare/shareclick/?uid=${GameWXmini.h5_config.jh_config.uid}&gameid=${GameWXmini.h5_config.jh_config.gameid}&chid=${GameWXmini.h5_config.jh_config.chid}&subchid=${GameWXmini.h5_config.jh_config.subchid}&ftype=${1}&titleid=${GameWXmini.h5_config.share.titleid}`;
    console.log("https://api.djsh5.com/weapp/gankshare/fuid/............",url)
    var the_header = {
      'content-type': 'application/x-www-form-urlencoded'
    };
    wx.request({
      url: url,
      method: 'GET',
      header: the_header, // 设置请求的 header
      success: function (data) {
        console.info("分享icon点击事件上报成功", JSON.stringify(data))
        var the_data = data.data
        console.info("the_data.error", the_data.error)
        if(the_data.error == 0){
        }
      },
      fail: function (data) {
        console.info("分享icon点击事件上报失败", JSON.stringify(data))
      }
    })
  }

 //登录
  GameWXmini.c_login = function (callback) {
    wx.login({
    success: function (res) {
      console.log("res...............", res)
      var query = wx.getLaunchOptionsSync().query;
      var referrerInfo = wx.getLaunchOptionsSync().referrerInfo; //新增 获取小程序通过extra-data参数 
      var chid = 0;
      var subchid = '';
      var fuid = ''; //用户分享的uid
      var code = res.code;

      if (query.chid) {   //链接进入
        console.log("query.chid..........", query.chid)
        chid = query.chid;
        subchid = query.subchid ? query.subchid : '';
        fuid = query.fuid ? query.fuid : '';
      } else if (query.scene) { //小程序码扫描进入，通过透传的场景值中解析chid和subchid
        console.log("query.scene..........", query.chid)
        var sceneObj = {};
        var sceneList = decodeURIComponent(query.scene).split(",");
        for (var i = 0; i < sceneList.length; i++) {
          var sceneItem = sceneList[i];
          sceneObj[sceneItem.split(":")[0]] = sceneItem.split(":")[1];
        }
        if (sceneObj.chid) {
          chid = sceneObj.chid;
          subchid = sceneObj.subchid ? sceneObj.subchid : '';
        }
      } else if (referrerInfo.extraData) {  // 新增  通过小程序 extra-data传值进入
        console.log("referrerInfo.extraData..........", query.chid)
        if (typeof (referrerInfo.extraData) === "string") {
          referrerInfo.extraData = JSON.parse(referrerInfo.extraData);
        }
        chid = referrerInfo.extraData.chid;
        subchid = referrerInfo.extraData.subchid;
      }

      if (chid == 0) {
        //判断如果chid为0时，则subchid为登陆的冷启动场景值
        subchid = wx.getLaunchOptionsSync().scene;  //（场景值）
        console.log("chid..........", chid)
        console.log("subchid..........", subchid)
      }

      GameWXmini.h5_config.jh_config.chid = chid;
      GameWXmini.h5_config.jh_config.subchid = subchid;
      
      var the_data = {
        code: code,
        chid: chid,
        subchid: subchid,
        gameid: GameWXmini.h5_config.jh_config.gameid
      };
      var return_message = {
        ret: 1,
        msg: 'success',
        content: the_data
      };
      callback(return_message);
      }
     })
  }

  //充值
  GameWXmini.c_pay = function (order, extra, signature,callback) {
    console.log("h5_pay..............", order,extra);
    var sys = GameWXmini.getSystem();
    if(sys == "android"){
      PaySDK.pay({
        env: 0,//米大师支付环境 0正式 1，沙盒
        gameid: GameWXmini.h5_config.jh_config.gameid,
        offerId: GameWXmini.h5_config.jh_config.offer_id,
        productId: order.product_id,
        token: extra.token,
        userdata:order.orderid
      }, (error, errmsg) => {     
        console.log('PaySDK', error, errmsg);
        if (error) {
          wx.showModal({
            title: '支付结果',
            content: `支付失败：${errmsg}`,
            showCancel: false,
          });
        } else {
          wx.showModal({
            title: '支付结果',
            content: `支付成功`,
            showCancel: false,
          });
        }
      });
    }else if(sys == "ios"){
      GameWXmini.h5_ios_pay(order,extra,callback);
    }
  }

   //ios充值
  GameWXmini.h5_ios_pay = function (data,extra,callback) {
  console.log("iosPaydata..............", data);
  var gameid = GameWXmini.h5_config.jh_config.gameid;
  var uid = extra.user_id;
  var money = Number(data.pay_money) / 100;
  var product_id = data.product_id;
  var userdata = data.orderid;
  var level = data.level;
  var chid = GameWXmini.h5_config.jh_config.chid;
  var subchid = GameWXmini.h5_config.jh_config.subchid;
  var url = `https://api.djsh5.com/weapp/api/order2/?gameid=${gameid}&uid=${uid}&money=${money}&product_id=${product_id}&userdata=${userdata}&level=${level}&platform=1&chid=${chid}&subchid=${subchid}`;
  console.log("iosPay..............", url);
  var the_header = {
    'content-type': 'application/x-www-form-urlencoded'
  };
  wx.request({
     url: url,
     method: 'GET',
     // dataType: 'json',
     header: the_header, // 设置请求的 header
     success: function (data) {
       var the_data = data.data
       console.log("the_data.error...",the_data.error);
       if (the_data.error == 0) {
         var payoid = the_data.payoid;
         var wxappid = the_data.wxappid;
         if(the_data.payurl == ""){//拉起盒子
          wx.navigateToMiniProgram({
            appId: GameWXmini.h5_config.jh_config.appid,
            path:   `pages/index/index?chid=${GameWXmini.h5_config.jh_config.chid}&payoid=${payoid}&channel=${GameWXmini.h5_config.jh_config.gameid}`,
            envVersion: 'release',
            success(res) {
              // 打开成功
            }
          })
         }else if(the_data.payurl == "1000"){//在线客服
          var service = {
            uid:uid,  
            vip:data.vip,
            sid:data.server_id,
            userid:data.uid_in_game,
            nickname:data.user_name_in_game,
            level:level,
            userdata:userdata,
            ispay:1,
            payoid:payoid,
            wxappid:wxappid
          }
          GameWXmini.h5_openCustomerServiceConversation(service,callback );
         }else{//二维码
          wx.previewImage({
            current: the_data.payurl, // 当前显示图片的http链接
            urls: [the_data.payurl] // 需要预览的图片http链接列表
          })
         }
         var return_message = {
           ret: 1,
           msg: 'success',
           content: the_data
         };
        callback(return_message);
       }
     },
     fail: function (data) {
       console.info("ios充值失败", JSON.stringify(data))
     }
   })
  }

  //调用在线客服接口(充值)
  GameWXmini.h5_openCustomerServiceConversation = function (data,callback ) {
    var fromData = {
      "chid": GameWXmini.h5_config.jh_config.chid,   // 渠道id
      "uid": GameWXmini.h5_config.jh_config.uid,   // 用户uid
      "vip": data.vip,    // vip
      "sid": data.sid,   // 大区
      "userid": data.userid,   // 角色id
      "nickname": data.nickname,   // 角色昵称
      "level": data.level,   //等级
      "userdata": data.userdata,
      "ispay": data.ispay,
      // "payoid": data.payoid,
      // "wxappid": data.wxappid,
    }
    wx.openCustomerServiceConversation({
      sessionFrom:JSON.stringify(fromData),
      showMessageCard:true,
      sendMessageTitle:"点我充值",
      sendMessagePath:"",
      sendMessageImg:"preload/service.png",
      success(){
        console.log("在线客服请求成功")
      },
      fail(){
        console.log("在线客服请求失败")
      }
    })
  }

    //检查用户输入文本是否包含屏蔽字
    GameWXmini.h5_msgSecCheck = function (s) {
      var url = `https://api.djsh5.com/weapp/msgseccheck/v2/securitymsgseccheck/?gameid=${GameWXmini.h5_config.jh_config.gameid}&openid=${GameWXmini.h5_config.jh_config.openid}&appid=${GameWXmini.h5_config.jh_config.appid}&content=${s}&scene=${2}`;//todo 场景值不知道
      console.log("https://api.djsh5.com/weapp/msgseccheck/v2/securitymsgseccheck/............",url)
      var the_header = {
        'content-type': 'application/x-www-form-urlencoded'
      };
      wx.request({
        url: url,
        method: 'GET',
        header: the_header, // 设置请求的 header
        success: function (data) {
          console.info("屏蔽字检测成功", JSON.stringify(data))
          // var the_data = data.data
          // console.info("the_data.error", the_data.error)
          // if(the_data.error == 0){
          // }
        },
        fail: function (data) {
          console.info("屏蔽字检测失败", JSON.stringify(data))
        }
      })
    }
  
    //有效用户上报
    GameWXmini.h5_upload_user = function () {
      var url = `https://api.djsh5.com/weapp/gs/v1/validlevel/?uid=${GameWXmini.h5_config.jh_config.uid}&gameid=${GameWXmini.h5_config.jh_config.gameid}&chid=${GameWXmini.h5_config.jh_config.chid}&subchid=${GameWXmini.h5_config.jh_config.subchid}`;
      console.log("https://api.djsh5.com/weapp/gs/v1/validlevel/............",url)
      var the_header = {
        'content-type': 'application/x-www-form-urlencoded'
      };
      wx.request({
        url: url,
        method: 'GET',
        header: the_header, // 设置请求的 header
        success: function (data) {
          console.info("有效用户上报成功", JSON.stringify(data))
          var the_data = data.data
          console.info("the_data.error", the_data.error)
          // if(the_data.error == 0){
          // }
        },
        fail: function (data) {
          console.info("有效用户上报失败", JSON.stringify(data))
        }
      })
    }

    GameWXmini.openListFun = function (){
      wx.requestSubscribeMessage({   // 调起消息订阅界面
        tmplIds: [messageid],
        success (res) { 
          console.log('订阅消息 成功 ');
          console.log(res);
        },
        fail (er){
          console.log("订阅消息 失败 ");
          console.log(er);
        }
      })
      GameWXmini.request_SubscribeWhatsNew();  
    }

  //获取下发权限 一次性订阅
  GameWXmini.set_wx_setting_subscribeMessage = function (){
    var messageid = "jd3r6CJfRNjiyPzbQXMqJq2rhbCPG2mN_if4ZjYTRpE";
    var tbol = true;
    wx.getSetting({
      withSubscriptions: true,   //  这里设置为true,下面才会返回mainSwitch
      success: function(res){   
      
        // 调起授权界面弹窗
        if (res.subscriptionsSetting.mainSwitch) {  // 用户打开了订阅消息总开关
          if (res.subscriptionsSetting.itemSettings != null) {   // 用户同意总是保持是否推送消息的选择, 这里表示以后不会再拉起推送消息的授权
            let moIdState = res.subscriptionsSetting.itemSettings[messageid];  // 用户同意的消息模板id
            console.log("========================",res.subscriptionsSetting.itemSettings[messageid]);
            if(moIdState === 'accept'){   
              console.log('接受了消息推送');
            }else if(moIdState === 'reject'){
              console.log("拒绝消息推送");
            }else if(moIdState === 'ban'){
              console.log("已被后台封禁");
            }
          }else {
            // 当用户没有点击 ’总是保持以上选择，不再询问‘  按钮。那每次执到这都会拉起授权弹窗
            wx.onTouchEnd(() => {
              if(tbol){
                wx.requestSubscribeMessage({   // 调起消息订阅界面
                  tmplIds: [messageid],
                  success (res) { 
                    console.log('订阅消息 成功 ');
                    console.log(res);
                  },
                  fail (er){
                    console.log("订阅消息 失败 ");
                    console.log(er);
                  }
                })
                GameWXmini.request_SubscribeWhatsNew();  
                tbol = false;
              }
            })  
            // wx.showModal({
            //   title: '提示',
            //   content:'请授权开通服务通知',
            //   showCancel: true,
            //   success: function (ress) {
            //     if (ress.confirm) {  
            //       wx.onTouchEnd(() => {
            //         wx.requestSubscribeMessage({   // 调起消息订阅界面
            //           tmplIds: [messageid],
            //           success (res) { 
            //             console.log('订阅消息 成功 ');
            //             console.log(res);
            //           },
            //           fail (er){
            //             console.log("订阅消息 失败 ");
            //             console.log(er);
            //           }
            //         })
            //         GameWXmini.request_SubscribeWhatsNew();  
            //       })   
            //     }
            //   }
            // })
          }
    
        }else {
          console.log('订阅消息未开启')
        }      
      },
      fail: function(error){
        console.log(error);
      },
    })
  }

  //游戏更新提醒
  GameWXmini.request_SubscribeWhatsNew = function(){
    wx.requestSubscribeWhatsNew({
      msgType: 1,    // 消息类型，1=游戏更新提醒，目前只有这种类型
      success(res) {
        console.log(res)
         // res.confirm === true 或 false
      },
      fail(err) {
        console.error(err)
      }
    })
    wx.getWhatsNewSubscriptionsSetting({
      msgType: 1,    // 消息类型，1=游戏更新提醒，目前只有这种类型
      success(res) {
        console.log(res)
         // res.status === 1 
      },
      fail(err) {
        console.error(err)
      }
    })
  }
  //朋友圈
  GameWXmini.c_friendsCircle = function(){
    wx.createGameClubButton({
      icon: 'green',
      style: {
        left: 10,
        top: 76,
        width: 40,
        height: 40
      }
    })
  }

  //排行榜上报数据接口 todo
  GameWXmini.c_rank_upload = function(s){
    wx.setUserCloudStorage({
      KVDataList: [{ key: 'score', value: s }],
      success: res => {
          console.log(res);
          // 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;
          let openDataContext = wx.getOpenDataContext();
          openDataContext.postMessage({
              type: 'updateMaxScore',
          });
      },
      fail: res => {
          console.log(res);
      }
  });
  }

  return GameWXmini
})()

window.GameWXmini = GameWXmini