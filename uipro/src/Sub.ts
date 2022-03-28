namespace sub {
    let wx: IWeiXin = window["wx"];
    interface IWeiXin {
        onMessage(func);
        getFriendCloudStorage(obj);
    }

    interface IWeiXinFriendVO{
        avatarUrl:string;
        nickname:string;
    }
    /**
     * 子域
     */
    class Sub {
        // private callBack: Function;
        // private isInit:boolean;
        private rankView:HlwRankView;
        private isInit:boolean = false;
        constructor() {
            let _that = this;
            wx.onMessage((message: Object)=>{
                let type = message['type'];
                console.log("type:"+type);
                switch (type) {
                    case 1:
                        //排行版
    
                        if(!_that.rankView){
                            _that.rankView = new HlwRankView();
                        }
                        Laya.stage.addChild(_that.rankView);
    
                        break;
                    case 0:
                        //清空
                        if(!_that.rankView){
                            _that.rankView = new HlwRankView();
                        }
                        _that.rankView.removeSelf();
                        break;
    
                    case -1:
                        if(!_that.isInit){
                            Laya.MiniAdpter.init(true, true);
                            Laya.init(message['data'].width, message['data'].height);//子域不支持WebGl模式
                            Laya.stage.bgColor = null;
                            _that.isInit = true;
                        }
                        let tempMatrix: Laya.Matrix = message['data'].matrix;
                        let matrix: Laya.Matrix = new Laya.Matrix();
                        matrix.a = tempMatrix.a;
                        matrix.b = tempMatrix.b;
                        matrix.c = tempMatrix.c;
                        matrix.d = tempMatrix.d;
                        Laya.stage._canvasTransform = matrix;//重新设置矩阵
                        console.log("初始开放域舞台!!!!");
                        break;
                }
            });
        }
    }
    /**
     * 排行榜
     */
    class HlwRankView extends ui.PaiHangVIewUI{
        protected initialize(){
            this.showlist.itemRender = ui.PaiHangItemViewUI;
            this.showlist.renderHandler = new Laya.Handler(this,this.onRenderHandler);
            this.on(Laya.Event.DISPLAY,this,this.onDisplay);
            this.on(Laya.Event.UNDISPLAY,this,this.onUnDisplay);
            this.graphics.drawRect(0,0,this.width,this.height,null,"#ff0000",1);
        }

        private onDisplay():void{
            this.x = (Laya.stage.width - this.width)/2;
            this.y = (Laya.stage.height - this.height)/2;
            console.log("HlwRankView!!!");
            let _that = this;
            //获取好友列表数据
            wx.getFriendCloudStorage({
                keyList: ['score'],
                success: function (res) {
                    console.log(res);//拉取到数据
                    let __list = [];
                    if(res.data && res.data.length > 0){
                        // window["setAvater"](res.data[0].avatarUrl);
                        // rankView.draw(res.data[0].avatarUrl);
                        // rankView.clear();
                        // for(let i = 0;i < res.data.length;i++){
                        // 	rankView.draw(i,res.data[i].avatarUrl);
                        // }
                        __list = res.data;
                    }
                    // rankView.drawAll(__list);
                    _that.showlist.array = __list;
                }
            });
        }

        

        private onUnDisplay():void{

        }

        private onRenderHandler(item:ui.PaiHangItemViewUI,index:number):void{
            // console.log(item.dataSource);
            item.hitArea = new Laya.Rectangle(0,0,item.width,item.height);
            let _vo:IWeiXinFriendVO = item.dataSource;
            item.img.skin = _vo.avatarUrl;
            item.playerName.text = _vo.nickname;
        }
    }

    //初始化子域
    new Sub();
}

