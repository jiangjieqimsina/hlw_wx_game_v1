var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(handler) {
        var _this = _super.call(this) || this;
        _this.width = 100;
        _this.height = 50;
        _this.graphics.drawRect(0, 0, _this.width, _this.height, "#ff0000");
        _this.hitArea = new Laya.Rectangle(0, 0, _this.width, _this.height);
        _this.on(Laya.Event.CLICK, _this, function () {
            handler.run();
        });
        Laya.stage.addChild(_this);
        return _this;
    }
    return Button;
}(Laya.Sprite));
var DrawSprite = /** @class */ (function (_super) {
    __extends(DrawSprite, _super);
    function DrawSprite() {
        var _this = _super.call(this) || this;
        var sharedCanvas = Laya.Browser.window.sharedCanvas;
        // let b:Laya.Bitmap = new Laya.Bitmap();
        // b._addReference
        var hc = sharedCanvas;
        if (!hc._addReference) {
            //laya.core.js 14372 _addReference接口未定义
            hc._addReference = function () {
            };
        }
        _this.pos(0, 0);
        var texture = new Laya.Texture(hc);
        texture.bitmap.alwaysChange = true; //小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
        _this.graphics.drawTexture(texture, 0, 0, texture.width, texture.height);
        return _this;
    }
    DrawSprite.prototype.destroy = function () {
        _super.prototype.destroy.call(this, true);
    };
    return DrawSprite;
}(Laya.Sprite));
//////////////////////////////////////////////////////////////////////////////
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.MiniAdpter.init(true, false);
        Laya.init(window.innerWidth, window.innerHeight, Laya.WebGL);
        Laya.stage.bgColor = null;
        Laya.Stat.show(0, 100);
        var img = new Laya.Image();
        img.skin = "https://test1.webgame.zhaouc.com/tr0_hulu/circle.png";
        Laya.stage.addChild(img);
        Laya.stage.on(Laya.Event.CLICK, this, function (e) {
            // if(sprite.parent){
            //     e.stopPropagation();
            // }
            console.log(e);
        });
        console.log("主域初始化!!!" + Date.now());
        // let t1 = new Laya.Label(Math.random().toString()+window.innerWidth+","+window.innerHeight);
        // t1.color = "#ff0000";
        // Laya.stage.addChild(t1);
        if (Laya.Browser.onMiniGame) {
            var _status_1 = false;
            var sprite = new DrawSprite();
            Laya.stage.addChild(sprite);
            var btn = new Button(new Laya.Handler(this, function () {
                var sharedCanvas = Laya.Browser.window.sharedCanvas;
                var msg;
                if (!_status_1) {
                    msg = "init";
                    window['wx'].postMessage({ type: msg });
                    //设置共享画布大小
                    sharedCanvas.width = Laya.stage.width;
                    sharedCanvas.height = Laya.stage.height;
                    //主域往子域透传消息
                    window['wx'].postMessage({ type: "resizeShared", url: "", data: { width: Laya.stage.width, height: Laya.stage.height, matrix: Laya.stage._canvasTransform }, isLoad: false });
                    // Laya.stage.addChild(sprite);
                }
                else {
                    msg = "clear";
                    window['wx'].postMessage({ type: msg });
                    //重置宽高,使离屏Canvas清屏
                    sharedCanvas.width = 1;
                    sharedCanvas.height = 1;
                    // sprite.removeSelf();
                }
                _status_1 = !_status_1;
            }));
        }
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map