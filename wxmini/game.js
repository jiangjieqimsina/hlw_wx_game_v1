require("weapp-adapter.js");

const systemInfo = wx.getSystemInfoSync();
console.log("systemInfo.statusBarHeight:" + systemInfo.statusBarHeight);
if (!systemInfo || !systemInfo.safeArea){
  if (systemInfo){
    window.OFFSET_Y = systemInfo.screenHeight / systemInfo.screenWidth > 2?80:0;
  }else{
    window.OFFSET_Y = 0;
  }

  window.STATUS_POS_X = 500;
}else{
  let menuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect();
  window.OFFSET_Y = Math.max(0, systemInfo.safeArea.top / systemInfo.windowWidth * 750);
  if (menuButtonBoundingClientRect){
    window.STATUS_POS_X = menuButtonBoundingClientRect.left / systemInfo.windowWidth * 750;
  }else{
    window.STATUS_POS_X = 500;
  }
}
wx.setPreferredFramesPerSecond(30);
console.log("OFFSET_Y:" + window.OFFSET_Y);
console.log("window.STATUS_POS_X: " + window.STATUS_POS_X);
// import Preloading from './preloading';
// let preloading = new Preloading();
// preloading.start();
require("libs.js");
require("libs/laya.wxmini.js");
require("libs/laya.particle.min.js");
Laya.MiniAdpter.init();

if (systemInfo){
  Laya.init(750, systemInfo.screenHeight / systemInfo.screenWidth * 750, Laya.WebGL);
}else{
  Laya.init(750, 1500, Laya.WebGL);
}
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
import Loading from "loadingmanager";
let loading = window.loading= new Loading();
Laya.stage.addChild(loading);
// window.TL = require("sdk_wechat.js");
require("appConfig_djs.js");
require("gankeSDK.js");
window.Parser=require("libs/dom_parser.js");

require("codeA.js");
console.log("window.OFFSET_Y:" + window.OFFSET_Y);

var subComplete = 0;
function checkComplete(){
    if(subComplete < 2){
      return;
    }
    window.onload();
    wx.onShow(res => {
      let app = window.app;
      if (app.Protocol.host && app.Protocol.port && !app.Protocol.isConnected()) {
        app.Protocol.recountTimes = 0;
        app.Protocol.reconnect();
      }
    });
    Laya.timer.once(10000, this, () => {
      Laya.stage.removeChild(loading);
    })
  };

const loadTask = wx.loadSubpackage({
  name: 'codeB', // name 可以填 name 或者 root
  success(res) {
    subComplete ++;
    checkComplete();
    // 分包加载成功后通过 success 回调
  },
  fail(res) {
    // 分包加载失败通过 fail 回调
  }
})

loadTask.onProgressUpdate(res => {
  // loading.progress.value = res.progress /100 * .5;
  console.log('下载进度', res.progress)
  console.log('已经下载的数据长度', res.totalBytesWritten)
  console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
  // loading.setProgress(res.progress);
})

const loadTask1 = wx.loadSubpackage({
  name: 'codeC', // name 可以填 name 或者 root
  success(res) {
    subComplete ++;
    checkComplete();
    require("main.js");//加载开放域主域模块
    // 分包加载成功后通过 success 回调
  },
  fail(res) {
    // 分包加载失败通过 fail 回调
  }
})

loadTask1.onProgressUpdate(res => {
  loading.progress.value = res.progress / 100 * .5;
  console.log('下载进度', res.progress)
  console.log('已经下载的数据长度', res.totalBytesWritten)
  console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
  // loading.setProgress(res.progress);
})

// function getLoginInfo(xyid, token){
//   console.log("getLoginInfo")
// }

wx.onShow(res => {
  // qq.request(`https://backup.ml.tarenwang.net/index/platlog/qq_log?type=onShow&data=${JSON.stringify(res)}`);
  //console.log("wx.onShow:", JSON.stringify(res));
  //wx.request({
  //  url: `https://backup.ml.tarenwang.net/index/platlog/wechat_log?type=onShow&data=${JSON.stringify(res)}`
  //});
  wx.setKeepScreenOn({
    keepScreenOn: true,
    success: function (res) {
      console.log("屏幕常亮", res)
    },
    fail: function (res) {
      console.log(res)
    }
  })
})

//let launchOptions = JSON.stringify(wx.getLaunchOptionsSync());
//wx.request({
 // url: `https://backup.ml.tarenwang.net/index/platlog/wechat_log?type=getLaunchOptionsSync&data=${launchOptions}`
//});
//console.log("wx.getLaunchOptionsSync:", launchOptions);
