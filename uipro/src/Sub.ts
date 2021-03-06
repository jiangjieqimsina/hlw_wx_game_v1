namespace sub {
    export let wx: IWeiXin = window["wx"];
    export interface IGameData{
        randomShare;
    }
    export let gameData:IGameData = {} as IGameData;
    export interface IWeiXin {
        onMessage(func);
        getFriendCloudStorage(obj);
        getGameServerManager();
        /**
         * 获取未玩过该游戏的好友列表
         */
        getPotentialFriendList(obj);

        /**
         * 分享给好友
         */
        shareMessageToFriend(obj);
    }

    export interface IWeiXinFriendVO{
        avatarUrl:string;
        nickname:string;
        openid:string;
        KVDataList:any[];
    }

    enum EMessaageType{
        /**
         * 子域静态配置
         */
        GetData= -2,
    
        /**
         * 舞台初始化
         */
        Init = -1,

        /**
         * 清理画布
         */
        Clear = 0,

        /**
         * 添加到舞台
         */
        Show = 1,

        /**
         * 指定某个界面显隐
         */
        UI_VIS = 4,
    }

    interface ISubOpenStruct{
        /**
         * ui组件名 类似"sub.HlwRankView
         */
        ui:string;
        /**
         * x坐标
         */
        x:number;
        /**
         * y坐标
         */
        y:number;
        /**
         * 组件缩放值
         */
        uiScale:number;
        /**
         * 主域给子域的数据
         */
        data:string;
    }
    /**
     * 子域
     */
    class Sub {

        private winKey:any = {};

        // private isInit:boolean = false;

        private show(msg):void{
            // console.log(msg);

            let obj:ISubOpenStruct = msg.expandData;
            
            let _cls: string = obj.ui.split(".")[1];
            let t;
            if(this.winKey[_cls]){
                t = this.winKey[_cls];
            }else{
                t  = new (<any>sub)[_cls]();
                this.winKey[_cls] = t;
            }
            t.x = obj.x;
            t.y = obj.y;
            t.scaleX = t.scaleY = obj.uiScale || 1.0;
            t.dataSource = obj.data;
            Laya.stage.addChild(t);
        }

        constructor() {
            let _that = this;
            wx.onMessage((message: Object)=>{
                let type = message['type'];
                console.log(new Date().getTime()/1000+ "message:" + JSON.stringify(message));
                
                switch (type) {
                    case EMessaageType.GetData:
                        for (const key in message) {
                            if(key!="type"){
                                gameData[key] = message[key];
                                // console.log("#####################");
                                // console.log(key);
                                // console.log(message[key]);
                            }
                          }
                        break;

                    case EMessaageType.Init:
                        //初始化开放域上的Laya.stage
                        // if(!_that.isInit){
                            Laya.MiniAdpter.init(true, true);
                            Laya.init(message['data'].width, message['data'].height);//子域不支持WebGl模式
                            Laya.stage.bgColor = null;

                            let tempMatrix: Laya.Matrix = message['data'].matrix;
                            let matrix: Laya.Matrix = new Laya.Matrix();
                            matrix.a = tempMatrix.a;
                            matrix.b = tempMatrix.b;
                            matrix.c = tempMatrix.c;
                            matrix.d = tempMatrix.d;
                            Laya.stage._canvasTransform = matrix;//重新设置矩阵
                            console.log("初始开放域舞台!!!!");
                            // _that.isInit = true;
                        // }
                        break;
                    case EMessaageType.Clear:
                        //清空,从舞台上移除
                        for (let key in _that.winKey) {
                            let _cc = _that.winKey[key];
                            _cc.removeSelf();
                        }
                        break;
                    case EMessaageType.Show:
                        //在开放域舞台触发一个动作，绘制界面或者业务其他
                        _that.show(message);
                        break;
                    case 2:
                        //测试预用跳转
                        let texture = message['texture'];
                        console.log(texture);
                        let img:Laya.Image = new Laya.Image();
                        // img.skin = str;
                        Laya.stage.addChild(img);
                        break;
                    case 3:
                        //获取好友列表
                        let list;
                        const m = wx.getGameServerManager()
                        m.getFriendsStateData({
                            success: res => {
                                list = res.list
                                console.log((new Date().getTime()/1000)+' ##获取好友列表', list);
                            },
                            fail: res => {
                                console.error('获取好友列表失败');
                            }
                        });
                        break;

                    case EMessaageType.UI_VIS:
                        let ui = message["ui"];
                        ui = ui.split(".")[1];
                        if(this.winKey[ui]){
                            let spr:Laya.Sprite = (this.winKey[ui] as Laya.Sprite)
                            if(message["vis"] == true){
                               Laya.stage.addChild(spr);
                            }else{
                                spr.removeSelf();
                            }
                        }
                        break;
                }
            });
        }
    }
    
    //初始化子域
    new Sub();
}