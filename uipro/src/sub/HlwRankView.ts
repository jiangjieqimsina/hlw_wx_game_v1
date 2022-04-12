namespace sub {
    let drawRect:boolean = false;//用于绘制测试边框

/*
    export class MyTestView extends Laya.Image {
        constructor() {
            super();
            this.skin = "assets/public.png";
            // let str:string = "data:image/png;base64,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";
            // this.skin= str;

            wx['getPotentialFriendList']({
                success: (data) => {
                    let list = data.list || [];
                    console.log('getPotentialFriendList', data);
                }
            });
        }
    }
*/

    /**
     * 获取Key Value
     */
    function getValueByKey(_vo: IWeiXinFriendVO,key:string): string {
        if (_vo && _vo.KVDataList) {
            for (let i = 0; i < _vo.KVDataList.length; i++) {
                let obj = _vo.KVDataList[i];
                if (obj["key"] == key) {
                    return obj["value"];
                }
            }
        }
        return "";
    }
    /**
     * 战斗力
     */
    function getScore(_vo: IWeiXinFriendVO){
        return getValueByKey(_vo,"score");
    }
    /**
     * 微信玩家的游戏名
     */
    function getPlayerName(_vo:IWeiXinFriendVO):string{
        return getValueByKey(_vo,"playerName");
    }

    function sortHandler(a:IWeiXinFriendVO,b:IWeiXinFriendVO):number{
        let a1 = getScore(a);
        let b1 = getScore(b);
        if(a1 > b1){
            return -1;
        }
        else if(a1 < b1){
            return 1;
        }
        return 0;
    }


    class RankItem extends ui.PaiHangItemViewUI{
        private _vo:IWeiXinFriendVO;
        protected initialize(){
            super.initialize();
        }

        public setData(vo:IWeiXinFriendVO,index:number):void{
            this._vo = vo;
            this.yaoqing.visible = false;
            this.hitArea = new Laya.Rectangle(0, 0, this.width, this.height);
            let _vo: IWeiXinFriendVO = vo;
            this.img.skin = _vo.avatarUrl;
            if (index <= 2) {
                this.rankLabel.text = "";
                this.paimingImg.skin = `assets/bg_paiming_${index + 1}.png`;
            } else {
                this.rankLabel.text = (index+1).toString();
                this.paimingImg.skin = "";
            }
            // item.playerName.color = "#000000";
            this.playerName.text = getPlayerName(this._vo); //_vo.nickname;
            this.plus.text = getScore(this._vo).toString();
        }
    }

    /**
     * 邀请列表
     */
    class PaiHangYaoQingitem extends ui.YaoQingItemViewUI{
        private curData:IWeiXinFriendVO;
        protected initialize(){
            super.initialize();
            this.hitArea = new Laya.Rectangle(0, 0, this.width, this.height);
            // this.yaoqing.label = "邀请";
            this.yaoqing.hitArea = new Laya.Rectangle(0, 0, this.yaoqing.width, this.yaoqing.height);
            this.yaoqing.on(Laya.Event.CLICK,this,this.onYaoQing);
            // this.yaoqing.skin="assets/btn.png";
        }

        private onYaoQing():void{
            wx.shareMessageToFriend({
                openId  : this.curData.openid, // 这里填写好友的openid
                title   : '葫芦娃',
                // imageUrl: 'https://mmocgame.qpic.cn/wechatgame/TKicR7oWel4znvwMdwOpuwoy1ntVB44kT9ZSse2u0xNcO5SaxIS2UwU0GdUfA2Al0/0'
            })
            //console.log(this.curData);
        }

        public setData(data):void{
            let _vo: IWeiXinFriendVO = data;
            this.curData = data;
            // this.yaoqing.skin = "";
            // let _vo: IWeiXinFriendVO = item.dataSource;
            this.img.skin = _vo.avatarUrl;
            // this.playerName.color = "#ffffff";
            this.playerName.text = _vo.nickname;
        }
    }

    export class PaiHangYaoQing extends ui.PaiHangYaoQingViewUI
    {
        protected initialize(){
            super.initialize();
            this.plist.itemRender = PaiHangYaoQingitem;
            this.plist.renderHandler = new Laya.Handler(this, this.onRenderHandler);
            this.on(Laya.Event.DISPLAY, this, this.onDisplay);
            this.graphics.drawRect(0,0,this.width,this.height,"#ffffff");
        }
        private onRenderHandler(item:PaiHangYaoQingitem):void{
            item.setData(item.dataSource);
        }

        private onDisplay():void{
            this.x = (Laya.stage.width - this.width)/2;
            this.y = (Laya.stage.height - this.height)/2;
            let _that = this;
            _that.plist.array = [];
            _that.plist.scrollTo(0);
            wx.getPotentialFriendList({
                success: (res) => {
                    let __list = res.list || [];
                    //console.log('getPotentialFriendList', res);
                    _that.plist.array = __list;
                }
            });
            
        }
    }

    /**
     * 排行榜
     */
    export class HlwRankView extends ui.PaiHangVIewUI {
        // private yaoqinView:PaiHangYaoQing;
        private maskV:Laya.Sprite = new Laya.Sprite;;

        protected initialize() {
            this.showlist.itemRender = RankItem;
            this.showlist.renderHandler = new Laya.Handler(this, this.onRenderHandler);
            this.showlist.array = [];
            this.on(Laya.Event.DISPLAY, this, this.onDisplay);
            this.on(Laya.Event.UNDISPLAY, this, this.onUnDisplay);

            if(drawRect){
                this.graphics.drawRect(0, 0, this.width, this.height, null, "#ff0000", 1);
                this.yaoqing.graphics.drawRect(0,0,this.yaoqing.width,this.yaoqing.height,"#ff0000");
            }
            this.yaoqing.hitArea = new Laya.Rectangle(0,0,this.yaoqing.width,this.yaoqing.height);
            this.yaoqing.on(Laya.Event.CLICK,this,this.onYaoQingHandler);
        }

        private onMaskClick():void{
            // if(this.yaoqinView){
                // this.yaoqinView.removeSelf();
            // }
            this.maskV.removeSelf();
        }
        private onYaoQingHandler():void{
            // this.maskV.hitArea = new Laya.Rectangle(0,0,Laya.stage.width,Laya.stage.height);
            // this.maskV.on(Laya.Event.CLICK,this,this.onMaskClick);
            // Laya.stage.addChild(this.maskV);
            // // console.log("yaoqing!!!");
            // if(!this.yaoqinView){
            //     this.yaoqinView = new PaiHangYaoQing();
            // }
            // Laya.stage.addChild(this.yaoqinView)
        }

        private refreshFriend(): void {
            //获取好友列表数据
            let _that = this;
            wx.getFriendCloudStorage({
                keyList: ['score','playerName'],
                success: function (res) {
                    console.log(res);//拉取到数据
                    let __list = [];
                    if (res.data && res.data.length > 0) {
                        __list = res.data;
                        __list=__list.sort(sortHandler);
                    }
                    _that.showlist.array = __list;
                }
            });
        }

        private onDisplay(): void {

            this.callLater(this.onMyCallter);
        }

        private onMyCallter(): void {
            // this.x = (Laya.stage.width - this.width)/2;
            // this.y = (Laya.stage.height - this.height)/2;
            let _that = this;
            // console.log('this is dataSource:[' + this.dataSource + "]");

            this.refreshFriend();
            
        }

        private onUnDisplay(): void {
            // console.log("rank is onUnDisplay!");
            // if(this.yaoqinView){
            //     this.yaoqinView.removeSelf();
            // }
        }
        // private onYaoQing(o):void{
        //     console.log(o);
        // }
        private onRenderHandler(item: RankItem, index: number): void {
            // console.log(item.dataSource);
            //item.yaoqing.skin = "assets/btn.png";
            // item.yaoqing.skin = "";
            item.setData(item.dataSource,index);
        }
    }
}