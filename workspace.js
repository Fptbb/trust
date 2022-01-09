'use strict';
parcelRequire = function(e$jscomp$7, r$jscomp$1, t$jscomp$0, n$jscomp$3) {
  function f$jscomp$1(t$jscomp$1, n$jscomp$4) {
    function p$jscomp$0(e$jscomp$8) {
      return f$jscomp$1(p$jscomp$0.resolve(e$jscomp$8));
    }
    if (!r$jscomp$1[t$jscomp$1]) {
      if (!e$jscomp$7[t$jscomp$1]) {
        var i$jscomp$4 = "function" == typeof parcelRequire && parcelRequire;
        if (!n$jscomp$4 && i$jscomp$4) {
          return i$jscomp$4(t$jscomp$1, true);
        }
        if (o$jscomp$0) {
          return o$jscomp$0(t$jscomp$1, true);
        }
        if (u$jscomp$0 && "string" == typeof t$jscomp$1) {
          return u$jscomp$0(t$jscomp$1);
        }
        var c$jscomp$1 = new Error("Cannot find module '" + t$jscomp$1 + "'");
        throw c$jscomp$1.code = "MODULE_NOT_FOUND", c$jscomp$1;
      }
      p$jscomp$0.resolve = function(r$jscomp$2) {
        return e$jscomp$7[t$jscomp$1][1][r$jscomp$2] || r$jscomp$2;
      };
      p$jscomp$0.cache = {};
      var l$jscomp$1 = r$jscomp$1[t$jscomp$1] = new f$jscomp$1.Module(t$jscomp$1);
      e$jscomp$7[t$jscomp$1][0].call(l$jscomp$1.exports, p$jscomp$0, l$jscomp$1, l$jscomp$1.exports, this);
    }
    return r$jscomp$1[t$jscomp$1].exports;
  }
  var i$jscomp$3;
  var o$jscomp$0 = "function" == typeof parcelRequire && parcelRequire;
  var u$jscomp$0 = "function" == typeof require && require;
  f$jscomp$1.isParcelRequire = true;
  f$jscomp$1.Module = function(e$jscomp$9) {
    this.id = e$jscomp$9;
    this.bundle = f$jscomp$1;
    this.exports = {};
  };
  f$jscomp$1.modules = e$jscomp$7;
  f$jscomp$1.cache = r$jscomp$1;
  f$jscomp$1.parent = o$jscomp$0;
  f$jscomp$1.register = function(r$jscomp$3, t$jscomp$2) {
    e$jscomp$7[r$jscomp$3] = [function(e$jscomp$10, r$jscomp$4) {
      r$jscomp$4.exports = t$jscomp$2;
    }, {}];
  };
  var c$jscomp$0 = 0;
  for (; c$jscomp$0 < t$jscomp$0.length; c$jscomp$0++) {
    try {
      f$jscomp$1(t$jscomp$0[c$jscomp$0]);
    } catch (e$jscomp$11) {
      if (!i$jscomp$3) {
        i$jscomp$3 = e$jscomp$11;
      }
    }
  }
  if (t$jscomp$0.length) {
    var l$jscomp$0 = f$jscomp$1(t$jscomp$0[t$jscomp$0.length - 1]);
    if ("object" == typeof exports && "undefined" != typeof module) {
      module.exports = l$jscomp$0;
    } else {
      if ("function" == typeof define && define.amd) {
        define(function() {
          return l$jscomp$0;
        });
      } else {
        if (n$jscomp$3) {
          this[n$jscomp$3] = l$jscomp$0;
        }
      }
    }
  }
  if (parcelRequire = f$jscomp$1, i$jscomp$3) {
    throw i$jscomp$3;
  }
  return f$jscomp$1;
}({
  "TCu9" : [function(require$jscomp$0, module$jscomp$0, exports$jscomp$0) {
    function e$jscomp$12(e$jscomp$13, t$jscomp$4) {
      if (!(e$jscomp$13 instanceof t$jscomp$4)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function t$jscomp$3(e$jscomp$14, t$jscomp$5) {
      var r$jscomp$6 = 0;
      for (; r$jscomp$6 < t$jscomp$5.length; r$jscomp$6++) {
        var a$jscomp$1 = t$jscomp$5[r$jscomp$6];
        a$jscomp$1.enumerable = a$jscomp$1.enumerable || false;
        a$jscomp$1.configurable = true;
        if ("value" in a$jscomp$1) {
          a$jscomp$1.writable = true;
        }
        Object.defineProperty(e$jscomp$14, a$jscomp$1.key, a$jscomp$1);
      }
    }
    function r$jscomp$5(e$jscomp$15, r$jscomp$7, a$jscomp$2) {
      return r$jscomp$7 && t$jscomp$3(e$jscomp$15.prototype, r$jscomp$7), a$jscomp$2 && t$jscomp$3(e$jscomp$15, a$jscomp$2), e$jscomp$15;
    }
    Object.defineProperty(exports$jscomp$0, "__esModule", {
      value : true
    });
    exports$jscomp$0.default = void 0;
    var a$jscomp$0 = function() {
      function t$jscomp$6(r$jscomp$8, a$jscomp$3) {
        e$jscomp$12(this, t$jscomp$6);
        var n$jscomp$6 = r$jscomp$8.width;
        var i$jscomp$5 = r$jscomp$8.height;
        var o$jscomp$1 = document.createElement("canvas");
        o$jscomp$1.width = n$jscomp$6;
        o$jscomp$1.height = i$jscomp$5;
        var u$jscomp$1 = o$jscomp$1.getContext("2d");
        u$jscomp$1.drawImage(r$jscomp$8, 0, 0);
        this.canvas = o$jscomp$1;
        this.context = u$jscomp$1;
        this.frames = a$jscomp$3;
      }
      return r$jscomp$5(t$jscomp$6, [{
        key : "drawFrame",
        value : function(e$jscomp$16, t$jscomp$7, r$jscomp$9, a$jscomp$4, n$jscomp$7, i$jscomp$6) {
          var o$jscomp$2 = this.frames[t$jscomp$7];
          var u$jscomp$2 = o$jscomp$2.x;
          var s$jscomp$2 = o$jscomp$2.y;
          var c$jscomp$2 = o$jscomp$2.width;
          var h$jscomp$6 = o$jscomp$2.height;
          r$jscomp$9 = r$jscomp$9 | 0;
          a$jscomp$4 = a$jscomp$4 | 0;
          n$jscomp$7 = n$jscomp$7 | c$jscomp$2;
          i$jscomp$6 = i$jscomp$6 | h$jscomp$6;
          e$jscomp$16.drawImage(this.canvas, u$jscomp$2, s$jscomp$2, c$jscomp$2, h$jscomp$6, r$jscomp$9, a$jscomp$4, n$jscomp$7, i$jscomp$6);
        }
      }]), t$jscomp$6;
    }();
    a$jscomp$0.GeometryHorizontalLinear = function(e$jscomp$17, t$jscomp$8, r$jscomp$10) {
      var a$jscomp$5 = [];
      var n$jscomp$8 = 0;
      for (; n$jscomp$8 < r$jscomp$10; n$jscomp$8 = n$jscomp$8 + 1) {
        var i$jscomp$7 = {
          x : e$jscomp$17 * n$jscomp$8,
          y : 0,
          width : e$jscomp$17,
          height : t$jscomp$8
        };
        a$jscomp$5.push(i$jscomp$7);
      }
      return a$jscomp$5;
    };
    var n$jscomp$5 = a$jscomp$0;
    exports$jscomp$0.default = n$jscomp$5;
  }, {}],
  "Js4U" : [function(require$jscomp$1, module$jscomp$1, exports$jscomp$1) {
    function e$jscomp$18(e$jscomp$19, t$jscomp$10) {
      if (!(e$jscomp$19 instanceof t$jscomp$10)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function t$jscomp$9(e$jscomp$20, t$jscomp$11) {
      var i$jscomp$9 = 0;
      for (; i$jscomp$9 < t$jscomp$11.length; i$jscomp$9++) {
        var n$jscomp$10 = t$jscomp$11[i$jscomp$9];
        n$jscomp$10.enumerable = n$jscomp$10.enumerable || false;
        n$jscomp$10.configurable = true;
        if ("value" in n$jscomp$10) {
          n$jscomp$10.writable = true;
        }
        Object.defineProperty(e$jscomp$20, n$jscomp$10.key, n$jscomp$10);
      }
    }
    function i$jscomp$8(e$jscomp$21, i$jscomp$10, n$jscomp$11) {
      return i$jscomp$10 && t$jscomp$9(e$jscomp$21.prototype, i$jscomp$10), n$jscomp$11 && t$jscomp$9(e$jscomp$21, n$jscomp$11), e$jscomp$21;
    }
    Object.defineProperty(exports$jscomp$1, "__esModule", {
      value : true
    });
    exports$jscomp$1.default = void 0;
    var n$jscomp$9 = function() {
      function t$jscomp$12() {
        e$jscomp$18(this, t$jscomp$12);
        this.lastTime = 0;
        this.elapsedTime = 0;
        this.element = document.createElement("canvas");
        this.context = this.element.getContext("2d");
        this.size = {
          width : 1,
          height : 1
        };
      }
      return i$jscomp$8(t$jscomp$12, [{
        key : "main",
        value : function() {
          var e$jscomp$22 = Date.now();
          var t$jscomp$13 = (e$jscomp$22 - this.lastTime) / 1e3;
          this.update(t$jscomp$13);
          this.render();
          this.lastTime = e$jscomp$22;
          requestAnimationFrame(this.main.bind(this));
        }
      }, {
        key : "update",
        value : function(e$jscomp$23) {
        }
      }, {
        key : "render",
        value : function() {
        }
      }, {
        key : "sizeDidChange",
        value : function(e$jscomp$24) {
        }
      }, {
        key : "size",
        get : function() {
          return {
            width : this._size.width,
            height : this._size.height
          };
        },
        set : function(e$jscomp$25) {
          var t$jscomp$14 = this.element;
          t$jscomp$14.width = .5 * e$jscomp$25.width;
          t$jscomp$14.height = .5 * e$jscomp$25.height;
          t$jscomp$14.style.width = e$jscomp$25.width + "px";
          t$jscomp$14.style.height = e$jscomp$25.height + "px";
          this.context.scale(.5, .5);
          this._size = {
            width : e$jscomp$25.width,
            height : e$jscomp$25.height
          };
          this.sizeDidChange(this._size);
        }
      }]), t$jscomp$12;
    }();
    var h$jscomp$7 = n$jscomp$9;
    exports$jscomp$1.default = h$jscomp$7;
  }, {}],
  "LeK6" : [function(require$jscomp$2, module$jscomp$2, exports$jscomp$2) {
    function t$jscomp$15(t$jscomp$16, r$jscomp$12) {
      return Math.random() * (r$jscomp$12 - t$jscomp$16) + t$jscomp$16;
    }
    function r$jscomp$11(t$jscomp$17, r$jscomp$13) {
      return Math.floor(Math.random() * (r$jscomp$13 - t$jscomp$17 + 1)) + t$jscomp$17;
    }
    function o$jscomp$3() {
      return "#" + Math.floor(16777215 * Math.random()).toString(16);
    }
    Object.defineProperty(exports$jscomp$2, "__esModule", {
      value : true
    });
    exports$jscomp$2.floatValue = t$jscomp$15;
    exports$jscomp$2.integerValue = r$jscomp$11;
    exports$jscomp$2.color = o$jscomp$3;
  }, {}],
  "HiAH" : [function(require$jscomp$3, module$jscomp$3, exports$jscomp$3) {
    CanvasRenderingContext2D.prototype.roundedRect = function(t$jscomp$18, o$jscomp$4, i$jscomp$11, e$jscomp$26, h$jscomp$8) {
      return i$jscomp$11 < 2 * h$jscomp$8 && (h$jscomp$8 = i$jscomp$11 / 2), e$jscomp$26 < 2 * h$jscomp$8 && (h$jscomp$8 = e$jscomp$26 / 2), this.beginPath(), this.moveTo(t$jscomp$18 + h$jscomp$8, o$jscomp$4), this.arcTo(t$jscomp$18 + i$jscomp$11, o$jscomp$4, t$jscomp$18 + i$jscomp$11, o$jscomp$4 + e$jscomp$26, h$jscomp$8), this.arcTo(t$jscomp$18 + i$jscomp$11, o$jscomp$4 + e$jscomp$26, t$jscomp$18, o$jscomp$4 + e$jscomp$26, h$jscomp$8), this.arcTo(t$jscomp$18, o$jscomp$4 + e$jscomp$26, t$jscomp$18, 
      o$jscomp$4, h$jscomp$8), this.arcTo(t$jscomp$18, o$jscomp$4, t$jscomp$18 + i$jscomp$11, o$jscomp$4, h$jscomp$8), this.closePath(), this;
    };
  }, {}],
  "oCom" : [function(require$jscomp$4, module$jscomp$4, exports$jscomp$4) {
    function r$jscomp$14() {
      if ("function" != typeof WeakMap) {
        return null;
      }
      var t$jscomp$20 = new WeakMap;
      return r$jscomp$14 = function() {
        return t$jscomp$20;
      }, t$jscomp$20;
    }
    function n$jscomp$12(t$jscomp$21) {
      if (t$jscomp$21 && t$jscomp$21.__esModule) {
        return t$jscomp$21;
      }
      if (null === t$jscomp$21 || "object" != typeof t$jscomp$21 && "function" != typeof t$jscomp$21) {
        return {
          default : t$jscomp$21
        };
      }
      var e$jscomp$28 = r$jscomp$14();
      if (e$jscomp$28 && e$jscomp$28.has(t$jscomp$21)) {
        return e$jscomp$28.get(t$jscomp$21);
      }
      var i$jscomp$13 = {};
      var n$jscomp$13 = Object.defineProperty && Object.getOwnPropertyDescriptor;
      var o$jscomp$6;
      for (o$jscomp$6 in t$jscomp$21) {
        if (Object.prototype.hasOwnProperty.call(t$jscomp$21, o$jscomp$6)) {
          var a$jscomp$7 = n$jscomp$13 ? Object.getOwnPropertyDescriptor(t$jscomp$21, o$jscomp$6) : null;
          if (a$jscomp$7 && (a$jscomp$7.get || a$jscomp$7.set)) {
            Object.defineProperty(i$jscomp$13, o$jscomp$6, a$jscomp$7);
          } else {
            i$jscomp$13[o$jscomp$6] = t$jscomp$21[o$jscomp$6];
          }
        }
      }
      return i$jscomp$13.default = t$jscomp$21, e$jscomp$28 && e$jscomp$28.set(t$jscomp$21, i$jscomp$13), i$jscomp$13;
    }
    function o$jscomp$5(t$jscomp$22) {
      return t$jscomp$22 && t$jscomp$22.__esModule ? t$jscomp$22 : {
        default : t$jscomp$22
      };
    }
    function a$jscomp$6(t$jscomp$23) {
      return (a$jscomp$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t$jscomp$24) {
        return typeof t$jscomp$24;
      } : function(t$jscomp$25) {
        return t$jscomp$25 && "function" == typeof Symbol && t$jscomp$25.constructor === Symbol && t$jscomp$25 !== Symbol.prototype ? "symbol" : typeof t$jscomp$25;
      })(t$jscomp$23);
    }
    function u$jscomp$3(t$jscomp$26, e$jscomp$29) {
      if (!(t$jscomp$26 instanceof e$jscomp$29)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function l$jscomp$2(t$jscomp$27, e$jscomp$30) {
      var i$jscomp$14 = 0;
      for (; i$jscomp$14 < e$jscomp$30.length; i$jscomp$14++) {
        var r$jscomp$15 = e$jscomp$30[i$jscomp$14];
        r$jscomp$15.enumerable = r$jscomp$15.enumerable || false;
        r$jscomp$15.configurable = true;
        if ("value" in r$jscomp$15) {
          r$jscomp$15.writable = true;
        }
        Object.defineProperty(t$jscomp$27, r$jscomp$15.key, r$jscomp$15);
      }
    }
    function h$jscomp$9(t$jscomp$28, e$jscomp$31, i$jscomp$15) {
      return e$jscomp$31 && l$jscomp$2(t$jscomp$28.prototype, e$jscomp$31), i$jscomp$15 && l$jscomp$2(t$jscomp$28, i$jscomp$15), t$jscomp$28;
    }
    function s$jscomp$3(t$jscomp$29, e$jscomp$32) {
      return !e$jscomp$32 || "object" !== a$jscomp$6(e$jscomp$32) && "function" != typeof e$jscomp$32 ? c$jscomp$3(t$jscomp$29) : e$jscomp$32;
    }
    function c$jscomp$3(t$jscomp$30) {
      if (void 0 === t$jscomp$30) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return t$jscomp$30;
    }
    function f$jscomp$2(t$jscomp$31) {
      return (f$jscomp$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t$jscomp$32) {
        return t$jscomp$32.__proto__ || Object.getPrototypeOf(t$jscomp$32);
      })(t$jscomp$31);
    }
    function p$jscomp$1(t$jscomp$33, e$jscomp$33) {
      if ("function" != typeof e$jscomp$33 && null !== e$jscomp$33) {
        throw new TypeError("Super expression must either be null or a function");
      }
      t$jscomp$33.prototype = Object.create(e$jscomp$33 && e$jscomp$33.prototype, {
        constructor : {
          value : t$jscomp$33,
          writable : true,
          configurable : true
        }
      });
      if (e$jscomp$33) {
        y$jscomp$59(t$jscomp$33, e$jscomp$33);
      }
    }
    function y$jscomp$59(t$jscomp$34, e$jscomp$34) {
      return (y$jscomp$59 = Object.setPrototypeOf || function(t$jscomp$35, e$jscomp$35) {
        return t$jscomp$35.__proto__ = e$jscomp$35, t$jscomp$35;
      })(t$jscomp$34, e$jscomp$34);
    }
    Object.defineProperty(exports$jscomp$4, "__esModule", {
      value : true
    });
    exports$jscomp$4.default = void 0;
    var t$jscomp$19 = o$jscomp$5(require$jscomp$4("./Sprite.js"));
    var e$jscomp$27 = o$jscomp$5(require$jscomp$4("./Scene.js"));
    var i$jscomp$12 = n$jscomp$12(require$jscomp$4("./Random.js"));
    require$jscomp$4("./RoundedRect.js");
    var d$jscomp$0 = function(r$jscomp$16) {
      function n$jscomp$14() {
        var e$jscomp$36;
        u$jscomp$3(this, n$jscomp$14);
        (e$jscomp$36 = s$jscomp$3(this, f$jscomp$2(n$jscomp$14).call(this))).backgroundColor = "#000";
        e$jscomp$36.containerColor = "#000";
        e$jscomp$36.entities = [];
        var i$jscomp$16 = new Image;
        return i$jscomp$16.onload = function() {
          var r$jscomp$17 = 33;
          var n$jscomp$15 = 29;
          var o$jscomp$7 = new t$jscomp$19.default(i$jscomp$16, t$jscomp$19.default.GeometryHorizontalLinear(r$jscomp$17, n$jscomp$15, 4));
          e$jscomp$36.sprites = {
            ditto : o$jscomp$7
          };
          e$jscomp$36.main();
        }, i$jscomp$16.src = "data:image/png;base64,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", 
        e$jscomp$36;
      }
      return p$jscomp$1(n$jscomp$14, e$jscomp$27.default), h$jscomp$9(n$jscomp$14, [{
        key : "sizeDidChange",
        value : function(t$jscomp$36) {
          this.context.imageSmoothingEnabled = false;
        }
      }, {
        key : "createEntity",
        value : function() {
          var t$jscomp$37 = this.sprites.ditto;
          var e$jscomp$37 = t$jscomp$37.frames[0];
          var r$jscomp$18 = i$jscomp$12.integerValue(0, 1);
          var n$jscomp$16 = i$jscomp$12.integerValue(4, 16);
          var o$jscomp$8 = i$jscomp$12.floatValue(.1, 1);
          var a$jscomp$8 = i$jscomp$12.integerValue(400, 1E3) * (r$jscomp$18 ? 1 : -1);
          var u$jscomp$4 = this.size.width;
          var l$jscomp$3 = this.size.height;
          var h$jscomp$10 = {
            width : e$jscomp$37.width,
            height : e$jscomp$37.height
          };
          var s$jscomp$4 = {
            width : h$jscomp$10.width * n$jscomp$16,
            height : h$jscomp$10.height * n$jscomp$16
          };
          return {
            sprite : t$jscomp$37,
            animationFrameDuration : .1,
            animationFrame : 0,
            time : 0,
            speed : {
              x : a$jscomp$8,
              y : 0
            },
            size : s$jscomp$4,
            origin : {
              x : r$jscomp$18 ? -s$jscomp$4.width : u$jscomp$4,
              y : i$jscomp$12.integerValue(0, l$jscomp$3 - s$jscomp$4.height)
            },
            opacity : o$jscomp$8,
            intrinsicSize : h$jscomp$10
          };
        }
      }, {
        key : "render",
        value : function() {
          var t$jscomp$38 = this.context;
          var e$jscomp$38 = this.size;
          var i$jscomp$17 = e$jscomp$38.width;
          var r$jscomp$19 = e$jscomp$38.height;
          t$jscomp$38.globalAlpha = 1;
          t$jscomp$38.fillStyle = this.backgroundColor;
          t$jscomp$38.fillRect(0, 0, i$jscomp$17, r$jscomp$19);
          if (i$jscomp$17 > 24 && r$jscomp$19 > 24) {
            t$jscomp$38.roundedRect(32, 32, i$jscomp$17 - 64, r$jscomp$19 - 64, 12);
            t$jscomp$38.fillStyle = this.containerColor;
            t$jscomp$38.fill();
          }
          var n$jscomp$17 = true;
          var o$jscomp$9 = false;
          var a$jscomp$9 = void 0;
          try {
            var u$jscomp$5;
            var l$jscomp$4 = this.entities[Symbol.iterator]();
            for (; !(n$jscomp$17 = (u$jscomp$5 = l$jscomp$4.next()).done); n$jscomp$17 = true) {
              var h$jscomp$11 = u$jscomp$5.value;
              var s$jscomp$5 = h$jscomp$11.sprite;
              var c$jscomp$4 = h$jscomp$11.animationFrame;
              var f$jscomp$3 = h$jscomp$11.origin;
              var p$jscomp$2 = h$jscomp$11.size;
              var y$jscomp$60 = h$jscomp$11.opacity;
              t$jscomp$38.globalAlpha = y$jscomp$60;
              s$jscomp$5.drawFrame(t$jscomp$38, c$jscomp$4, f$jscomp$3.x, f$jscomp$3.y, p$jscomp$2.width, p$jscomp$2.height);
            }
          } catch (d$jscomp$1) {
            o$jscomp$9 = true;
            a$jscomp$9 = d$jscomp$1;
          } finally {
            try {
              if (!(n$jscomp$17 || null == l$jscomp$4.return)) {
                l$jscomp$4.return();
              }
            } finally {
              if (o$jscomp$9) {
                throw a$jscomp$9;
              }
            }
          }
        }
      }, {
        key : "update",
        value : function(t$jscomp$39) {
          if (this.elapsedTime += t$jscomp$39, this.elapsedTime >= .4) {
            this.elapsedTime = 0;
            this.backgroundColor = i$jscomp$12.color();
            this.containerColor = i$jscomp$12.color();
            var e$jscomp$39 = 1;
            for (; e$jscomp$39--;) {
              this.entities.push(this.createEntity());
            }
          }
          var r$jscomp$20 = this.size.width;
          var n$jscomp$18 = this.size.height;
          var o$jscomp$10 = this.protagonist;
          if (o$jscomp$10 || ((o$jscomp$10 = this.createEntity()).speed.x = 0, o$jscomp$10.opacity = 1, this.entities.push(o$jscomp$10), this.protagonist = o$jscomp$10), o$jscomp$10) {
            var a$jscomp$10 = {
              width : Math.min(.8 * r$jscomp$20, 600),
              height : Math.min(.8 * n$jscomp$18, 600)
            };
            var u$jscomp$6 = o$jscomp$10.intrinsicSize;
            var l$jscomp$5 = a$jscomp$10.width / u$jscomp$6.width;
            var h$jscomp$12 = a$jscomp$10.height / u$jscomp$6.height;
            var s$jscomp$6 = Math.min(l$jscomp$5, h$jscomp$12);
            var c$jscomp$5 = {
              width : u$jscomp$6.width * s$jscomp$6,
              height : u$jscomp$6.height * s$jscomp$6
            };
            o$jscomp$10.size = c$jscomp$5;
            o$jscomp$10.origin.x = Math.round(.5 * (r$jscomp$20 - c$jscomp$5.width));
            o$jscomp$10.origin.y = Math.round(.5 * (n$jscomp$18 - c$jscomp$5.height));
          }
          var f$jscomp$4 = [];
          var p$jscomp$3 = 0;
          var y$jscomp$61 = true;
          var d$jscomp$2 = false;
          var g$jscomp$1 = void 0;
          try {
            var m$jscomp$0;
            var v$jscomp$0 = this.entities[Symbol.iterator]();
            for (; !(y$jscomp$61 = (m$jscomp$0 = v$jscomp$0.next()).done); y$jscomp$61 = true) {
              var b$jscomp$0 = m$jscomp$0.value;
              if (b$jscomp$0.time += t$jscomp$39, b$jscomp$0.time >= b$jscomp$0.animationFrameDuration) {
                var w$jscomp$7 = b$jscomp$0.animationFrame + 1;
                b$jscomp$0.time = 0;
                b$jscomp$0.animationFrame = w$jscomp$7 < b$jscomp$0.sprite.frames.length ? w$jscomp$7 : 0;
              }
              if (0 != b$jscomp$0.speed.x) {
                b$jscomp$0.origin.x += b$jscomp$0.speed.x * t$jscomp$39 | 0;
              }
              if (b$jscomp$0.origin.x > r$jscomp$20 || b$jscomp$0.origin.x <= -b$jscomp$0.size.width) {
                f$jscomp$4.push(p$jscomp$3);
              }
              p$jscomp$3 = p$jscomp$3 + 1;
            }
          } catch (S$jscomp$0) {
            d$jscomp$2 = true;
            g$jscomp$1 = S$jscomp$0;
          } finally {
            try {
              if (!(y$jscomp$61 || null == v$jscomp$0.return)) {
                v$jscomp$0.return();
              }
            } finally {
              if (d$jscomp$2) {
                throw g$jscomp$1;
              }
            }
          }
          var A$jscomp$0 = 0;
          var x$jscomp$74 = f$jscomp$4;
          for (; A$jscomp$0 < x$jscomp$74.length; A$jscomp$0++) {
            var O$jscomp$0 = x$jscomp$74[A$jscomp$0];
            this.entities.splice(O$jscomp$0, 1);
          }
        }
      }]), n$jscomp$14;
    }();
    var g$jscomp$0 = d$jscomp$0;
    exports$jscomp$4.default = g$jscomp$0;
  }, {
    "./Sprite.js" : "TCu9",
    "./Scene.js" : "Js4U",
    "./Random.js" : "LeK6",
    "./RoundedRect.js" : "HiAH"
  }],
  "Focm" : [function(require$jscomp$5, module$jscomp$5, exports$jscomp$5) {
    function n$jscomp$19(e$jscomp$41) {
      return e$jscomp$41 && e$jscomp$41.__esModule ? e$jscomp$41 : {
        default : e$jscomp$41
      };
    }
    function t$jscomp$40(e$jscomp$42, n$jscomp$20) {
      if (!(e$jscomp$42 instanceof n$jscomp$20)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function i$jscomp$18(e$jscomp$43, n$jscomp$21) {
      var t$jscomp$41 = 0;
      for (; t$jscomp$41 < n$jscomp$21.length; t$jscomp$41++) {
        var i$jscomp$19 = n$jscomp$21[t$jscomp$41];
        i$jscomp$19.enumerable = i$jscomp$19.enumerable || false;
        i$jscomp$19.configurable = true;
        if ("value" in i$jscomp$19) {
          i$jscomp$19.writable = true;
        }
        Object.defineProperty(e$jscomp$43, i$jscomp$19.key, i$jscomp$19);
      }
    }
    function a$jscomp$11(e$jscomp$44, n$jscomp$22, t$jscomp$42) {
      return n$jscomp$22 && i$jscomp$18(e$jscomp$44.prototype, n$jscomp$22), t$jscomp$42 && i$jscomp$18(e$jscomp$44, t$jscomp$42), e$jscomp$44;
    }
    function r$jscomp$21() {
      window.controller = new o$jscomp$11(document.body);
    }
    var e$jscomp$40 = n$jscomp$19(require$jscomp$5("./js/KongaScene.js"));
    var o$jscomp$11 = function() {
      function n$jscomp$23(i$jscomp$20) {
        t$jscomp$40(this, n$jscomp$23);
        this.container = i$jscomp$20;
        var a$jscomp$12 = new e$jscomp$40.default;
        a$jscomp$12.element.style.display = "none";
        i$jscomp$20.appendChild(a$jscomp$12.element);
        window.addEventListener("resize", this.handleResize.bind(this));
        this.scene = a$jscomp$12;
        this.handleResize();
        var o$jscomp$12 = document.createElement("span");
        o$jscomp$12.textContent = "Preparing\u2026";
        var r$jscomp$22 = document.getElementsByTagName("audio")[0];
        r$jscomp$22.addEventListener("play", function() {
          o$jscomp$12.parentNode.removeChild(o$jscomp$12);
          a$jscomp$12.element.classList.add("cue-in");
          a$jscomp$12.element.style.display = "block";
          document.title = "Get RickRolled!";
        });
        var d$jscomp$3 = document.createElement("button");
		var language = window.navigator.userLanguage || window.navigator.language;
		if(language === 'pt-BR'){
			d$jscomp$3.textContent = "Confie em Mim";
		}else{
			d$jscomp$3.textContent = "Trust me";
		}
        d$jscomp$3.addEventListener("click", function(e$jscomp$45) {
          d$jscomp$3.parentNode.removeChild(d$jscomp$3);
          i$jscomp$20.appendChild(o$jscomp$12);
          r$jscomp$22.play();
        });
        i$jscomp$20.appendChild(d$jscomp$3);
      }
      return a$jscomp$11(n$jscomp$23, [{
        key : "handleResize",
        value : function() {
          this.scene.size = {
            width : Math.floor(window.innerWidth),
            height : Math.floor(window.innerHeight)
          };
        }
      }]), n$jscomp$23;
    }();
    document.addEventListener("DOMContentLoaded", r$jscomp$21);
  }, {
    "./js/KongaScene.js" : "oCom"
  }]
}, {}, ["Focm"], null);
