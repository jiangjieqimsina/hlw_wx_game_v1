namespace sub {
    export let wx: IWeiXin = window["wx"];
    export interface IWeiXin {
        onMessage(func);
        getFriendCloudStorage(obj);
    }

    export interface IWeiXinFriendVO{
        avatarUrl:string;
        nickname:string;
    }
    /**
     * 子域
     */
    class Sub {

        private winKey:any = {};

        private isInit:boolean = false;

        private show(message):void{
            let _cls: string = message["cls"].split(".")[1];
            let t;
            if(this.winKey[_cls]){
                t = this.winKey[_cls];
            }else{
                t  = new (<any>sub)[_cls]();
                this.winKey[_cls] = t;
            }
            Laya.stage.addChild(t);
        }

        constructor() {
            let _that = this;
            wx.onMessage((message: Object)=>{
                let type = message['type'];
                // console.log("type:"+type);
                switch (type) {
                    case 1:
                        _that.show(message);
                        break;
                    case 0:
                        //清空,从舞台上移除
                        for(let key in _that.winKey){
                            let _cc = _that.winKey[key];
                            _cc.removeSelf();
                          }
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
                        // console.log("初始开放域舞台!!!!");
                        break;
                }
            });
        }
    }
    
    //初始化子域
    new Sub();
}

