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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var HelpItemVIewUI = /** @class */ (function (_super) {
        __extends(HelpItemVIewUI, _super);
        function HelpItemVIewUI() {
            return _super.call(this) || this;
        }
        HelpItemVIewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HelpItemVIewUI.uiView);
        };
        HelpItemVIewUI.uiView = { "type": "View", "props": { "width": 100, "height": 100 }, "child": [{ "type": "Image", "props": { "width": 100, "var": "img", "height": 100 } }] };
        return HelpItemVIewUI;
    }(View));
    ui.HelpItemVIewUI = HelpItemVIewUI;
})(ui || (ui = {}));
(function (ui) {
    var HelpVIewUI = /** @class */ (function (_super) {
        __extends(HelpVIewUI, _super);
        function HelpVIewUI() {
            return _super.call(this) || this;
        }
        HelpVIewUI.prototype.createChildren = function () {
            View.regComponent("ui.HelpItemVIewUI", ui.HelpItemVIewUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.HelpVIewUI.uiView);
        };
        HelpVIewUI.uiView = { "type": "View", "props": { "width": 536, "height": 104 }, "child": [{ "type": "List", "props": { "width": 536, "var": "showlist", "spaceX": 5, "repeatX": 5, "height": 104, "hScrollBarSkin": " " }, "child": [{ "type": "HelpItemVIew", "props": { "renderType": "render", "runtime": "ui.HelpItemVIewUI" } }] }] };
        return HelpVIewUI;
    }(View));
    ui.HelpVIewUI = HelpVIewUI;
})(ui || (ui = {}));
(function (ui) {
    var PaiHangItemViewUI = /** @class */ (function (_super) {
        __extends(PaiHangItemViewUI, _super);
        function PaiHangItemViewUI() {
            return _super.call(this) || this;
        }
        PaiHangItemViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PaiHangItemViewUI.uiView);
        };
        PaiHangItemViewUI.uiView = { "type": "View", "props": { "width": 598, "height": 120 }, "child": [{ "type": "Image", "props": { "width": 598, "var": "bg", "skin": "assets/bg_jiugong_04new.png", "sizeGrid": "29,24,30,27", "height": 120 } }, { "type": "Image", "props": { "y": 15, "x": 116, "width": 90, "var": "img", "height": 90 } }, { "type": "Label", "props": { "y": 28, "x": 235, "width": 200, "var": "playerName", "text": "label", "height": 22, "fontSize": 22, "color": "#567474", "align": "left" } }, { "type": "Image", "props": { "y": 38, "x": 481, "width": 100, "var": "yaoqing", "height": 50 } }, { "type": "Label", "props": { "y": 68, "x": 235, "width": 200, "var": "plus", "text": "label", "height": 22, "fontSize": 22, "color": "#567474", "align": "left" } }, { "type": "Image", "props": { "y": 33, "x": 40, "width": 47, "var": "paimingImg", "height": 53 } }, { "type": "Label", "props": { "y": 46, "x": 16, "width": 100, "var": "rankLabel", "text": "label", "height": 22, "fontSize": 28, "color": "#567474", "align": "center" } }] };
        return PaiHangItemViewUI;
    }(View));
    ui.PaiHangItemViewUI = PaiHangItemViewUI;
})(ui || (ui = {}));
(function (ui) {
    var PaiHangVIewUI = /** @class */ (function (_super) {
        __extends(PaiHangVIewUI, _super);
        function PaiHangVIewUI() {
            return _super.call(this) || this;
        }
        PaiHangVIewUI.prototype.createChildren = function () {
            View.regComponent("ui.PaiHangItemViewUI", ui.PaiHangItemViewUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.PaiHangVIewUI.uiView);
        };
        PaiHangVIewUI.uiView = { "type": "View", "props": { "width": 648, "height": 1042 }, "child": [{ "type": "List", "props": { "y": 25, "x": 25, "width": 598, "var": "showlist", "vScrollBarSkin": " ", "height": 900 }, "child": [{ "type": "PaiHangItemView", "props": { "renderType": "render", "runtime": "ui.PaiHangItemViewUI" } }] }, { "type": "Sprite", "props": { "y": 945, "x": 104, "width": 164, "var": "yaoqing", "height": 57 } }] };
        return PaiHangVIewUI;
    }(View));
    ui.PaiHangVIewUI = PaiHangVIewUI;
})(ui || (ui = {}));
(function (ui) {
    var PaiHangYaoQingViewUI = /** @class */ (function (_super) {
        __extends(PaiHangYaoQingViewUI, _super);
        function PaiHangYaoQingViewUI() {
            return _super.call(this) || this;
        }
        PaiHangYaoQingViewUI.prototype.createChildren = function () {
            View.regComponent("ui.PaiHangItemViewUI", ui.PaiHangItemViewUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.PaiHangYaoQingViewUI.uiView);
        };
        PaiHangYaoQingViewUI.uiView = { "type": "View", "props": { "width": 598, "height": 600 }, "child": [{ "type": "List", "props": { "width": 598, "var": "plist", "vScrollBarSkin": " ", "height": 600 }, "child": [{ "type": "PaiHangItemView", "props": { "renderType": "render", "runtime": "ui.PaiHangItemViewUI" } }] }] };
        return PaiHangYaoQingViewUI;
    }(View));
    ui.PaiHangYaoQingViewUI = PaiHangYaoQingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var YaoQingItemViewUI = /** @class */ (function (_super) {
        __extends(YaoQingItemViewUI, _super);
        function YaoQingItemViewUI() {
            return _super.call(this) || this;
        }
        YaoQingItemViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.YaoQingItemViewUI.uiView);
        };
        YaoQingItemViewUI.uiView = { "type": "View", "props": { "width": 598, "height": 120 }, "child": [{ "type": "Image", "props": { "width": 598, "var": "bg", "skin": "assets/bg_jiugong_04new.png", "sizeGrid": "29,24,30,27", "height": 120 } }, { "type": "Image", "props": { "y": 15, "x": 24, "width": 90, "var": "img", "height": 90 } }, { "type": "Label", "props": { "y": 49, "x": 143, "width": 248, "var": "playerName", "text": "label", "height": 22, "fontSize": 22, "color": "#567474", "align": "left" } }, { "type": "Image", "props": { "y": 35, "x": 401, "width": 164, "var": "yaoqing", "skin": "assets/btn.png", "height": 57 } }, { "type": "Label", "props": { "y": 52, "x": 401, "width": 164, "var": "plus", "text": "邀请", "height": 22, "fontSize": 26, "color": "#d3762e", "align": "center" } }] };
        return YaoQingItemViewUI;
    }(View));
    ui.YaoQingItemViewUI = YaoQingItemViewUI;
})(ui || (ui = {}));
