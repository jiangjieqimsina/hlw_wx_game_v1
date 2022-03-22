var appConfig = {
	pf:"wxmini",
  use_zip:true,//是否使用das压缩包
  use_xbin:true,
	native_debug:false,//false时为debug模式，不选择服务器
	host:"s1hulu.tarenwang.net",
	port:"20101",
  basePath:"https://test1.webgame.zhaouc.com/djs_hulu/assets/",
  login_check:"https://hlw-api.tarenwang.net/index/index_djs/login/",
  gs_url:"https://hlw-api.tarenwang.net/index/index_djs/server/",
  notice_url:"https://hlw-api.tarenwang.net/index/index_djs/placard_list",
  pay_call_back:"https://hlw-api.tarenwang.net/index/index_djs/recharge",
  report_url:"https://hlw-report.tarenwang.net/index/index_djs/",
  // verfied_url:"https://hlw-api.tarenwang.net/index/index_djs/check_18",
  create_order:"https://hlw-api.tarenwang.net/index/index_djs/create_order",//生成订单请求
  // hlw_mobile:"https://api.xianyuyouxi.com/service/hlw/hlw_mobile/",//手机绑定url
  wcfg_url:"https://hlw-api.tarenwang.net/index/index_djs/map",
  gm_cz:0,	//不加或者0表示不开启gm快捷充值
  rzurl:"bg_Loading_fangchenmi02",//软著显示
  // hide_sid:"1",    //显示服务器id,  
  // ios_cz:1,//1表示限制ios充值
  yxmzurl:"bg_huluwa",//游戏logo
  ver:0,
  ver_url:"https://hlw-api.tarenwang.net/index/index_djs/version",//切换提审服
  jubaourl:"report_complaint",  //举报

	junhai_logo_url:"logo1.png",
  agent:"wxmini",
  review:60000,//提审服id，必配

  jh_init_info: {
    shareinfo: {
      title: "史克威尔·艾尼克斯正版授权巨作，10年魔力再造经典。经典萌宠，百万魔石，登陆即送，更有新版水龙套装等你来拿！",
      message: "史克威尔·艾尼克斯正版授权巨作，10年魔力再造经典。经典萌宠，百万魔石，登陆即送，更有新版水龙套装等你来拿！",
      img_url:"https://cdn.jhml.tarenwang.net/weixin_moli/fenxiang.jpg",
      qzone_img_url: "https://cdn.jhml.tarenwang.net/weixin_moli/fenxiang.jpg"
    },
    agent_domain: "agent1.ijunhai.com"
  }
}
window.appConfig=appConfig;
