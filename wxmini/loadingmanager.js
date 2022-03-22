require("weapp-adapter.js");
require("./libs.js");
export default class Loading extends Laya.View{
  initialize(){
    super.initialize();
    this.image = new Laya.Image("assets/loading.jpg");
    this.image.anchorX = this.image.anchorY = .5;
    this.image.x = Laya.stage.width * .5;
    this.image.y = Laya.stage.height * .5;
    this.addChild(this.image);
    this.on(Laya.Event.DISPLAY,this,this.onDisplay);
    this.on(Laya.Event.UNDISPLAY,this,this.onUndisplay);
    if(Laya.stage.height > 1500){
      let scale = Laya.stage.height / 1500;
      this.image.scale(scale,scale);
    }
   
    // this.logo = new Laya.Image("https://cdn.jhml.tarenwang.net/weixin_moli/assets/base/res/static/logo1.png");
    // this.logo.anchorX = this.logo.anchorY = .5;
    // this.addChild(this.logo);
    // this.logo.x = Laya.stage.width * .5;
    // this.logo.y = Laya.stage.height * .3;
    // this.logo.alpha = 0;

    this.progress = new Laya.ProgressBar();
    this.progBg = new Laya.Image();
    this.progBg.anchorX = this.progBg.anchorY = .5;
    this.progBg.x = Laya.stage.width * .5;
    this.progBg.y = Laya.stage.height - 250;
    this.progBg.width = 706;
    this.addChild(this.progBg);
    this.progress.x = Laya.stage.width * .5;
    this.progress.y = Laya.stage.height - 258;
    this.progress.width = 680;
    this.progress.value = 0;
    this.label = this.addChild(new Laya.Label("正在通往葫芦世界..."));
    this.label.fontSize = 28;
    this.label.anchorX = .5;
    this.label.autoSize = true;
    this.label.bold = true;
    this.label.color = "#406376";
    this.label.x = Laya.stage.width * .5;
    this.label.y = this.progress.y + 32;
    Laya.loader.load("assets/Loading.atlas",new Laya.Handler(this,()=>{
      this.progBg.skin = "Loading/bg_loading01.png";
      this.progBg.sizeGrid = "20,20,20,20";
      this.progress.skin = "Loading/progress.png";
      this.progress.sizeGrid = "12,12,12,12,1";
      this.progress.anchorX = .5;
      this.addChild(this.progress);
    }))
  }

  onDisplay(){
    Laya.timer.loop(300,this,this.onLoop);
  }

  onLoop(){
    if(this.progress.value < 1){
      this.progress.value += .05;
    }
  }

  onUndisplay(){
    Laya.timer.clear(this, this.onLoop);
  }
}