namespace sub {
    let wx: IWeiXin = window["wx"];
    interface IWeiXin {
        onMessage(func);
    }
    /**
     * 子域
     */
    export class Sub {
        private callBack: Function;
        // private isInit:boolean;
        private rankView:HlwRankView;
        

        constructor(callBack:Function) {
            this.callBack = callBack;
            wx.onMessage(this.onMsg);
        }
        private onMsg(message: Object) {
            let type = message['type'];
            switch (type) {
                case 1:
                    //排行版

                    if(!this.rankView){
                        this.rankView = new HlwRankView();
                    }
                    Laya.stage.addChild(this.rankView);

                    break;
                case 0:
                    //清空
                    break;

                case -1:
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
                    break;
            }
            this.callBack(type);
        }

    }

}