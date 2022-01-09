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
          document.title = "Conga!";
        });
        var d$jscomp$3 = document.createElement("button");
        d$jscomp$3.textContent = "Trust me";
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
