! function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = new(e("../v-es/v-concat").V)({
            console: !!(null !== document.body.getAttribute("data-v-console") & "false" !== document.body.getAttribute("data-v-console")),
            page: document.body.getAttribute("data-v-page"),
            tablet: parseInt(document.body.getAttribute("data-v-tablet")),
            mobile: parseInt(document.body.getAttribute("data-v-mobile"))
        });
        r = r.init(), window.v = r
    }, {
        "../v-es/v-concat": 2
    }],
    2: [function(e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var d = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var i = [],
                        r = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var n, a = e[Symbol.iterator](); !(r = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); r = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            a = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            },
            o = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var p = i.V = function e(t) {
            for (var i in u(this, e), this.time = +new Date, this.prop = {
                    console: !0,
                    page: "index",
                    tblet: 1199,
                    mobile: 760
                }, t) this.prop[i] = t[i];
            this.prefix = "v-", this.name = "V", this.eventListenerAttribute = "v_eventListeners"
        };
        p.prototype.loaded = !1, p.prototype.page = [], p.prototype.doc = document, p.prototype.document = document.documentElement, p.prototype.body = document.body, p.prototype.vw = [], p.prototype.vh = [], p.prototype.resize = [], p.prototype.timeMin = 25, p.prototype.ajaxTimeMax = 5e3, p.prototype.console = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            if (!0 !== (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : this.prop.console)) return !1;
            if (0 < e.length) {
                var r = "font: 2.5em/1 Arial; color: #298DA4;",
                    s = "font: 1.25em/1 Arial; color: dodgerblue;",
                    o = "font: 1.25em/1 Arial; color: crimson;",
                    n = "font: 1.25em/1 Arial; color: orange;",
                    a = "font: 1.25em/1 Arial; color: darkgray;";
                switch (i) {
                    case "title":
                        console.log("%c" + e, r);
                        break;
                    case "info":
                        console.info("%c" + e, s);
                        break;
                    case "error":
                        console.error("%c" + e, o);
                        break;
                    case "warn":
                        console.warn("%c" + e, n);
                        break;
                    default:
                        console.log("%c" + e, a)
                }
            }
            return null !== t && console.dir(t), !0
        }, p.prototype.checkType = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "function",
                t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            if ("function" === e) {
                return t && "[object Function]" === {}.toString.call(t)
            }
            if ("dom" === e) return null !== this.doc.querySelector(t);
            if ("htmlElement" === e) return t instanceof HTMLElement;
            if ("object" === e) return "object" === (void 0 === t ? "undefined" : c(t));
            if ("string" === e) return "string" == typeof t;
            if ("number" === e) return "number" == typeof t;
            if ("integer" === e) return !!Number.isInteger(t);
            if ("boolean" === e) return "boolean" == typeof t;
            if ("array" === e) return !!Array.isArray(t);
            if ("bezier" === e) {
                var r = !0;
                if (!t) return !1;
                if (void 0 !== t.on ? "boolean" != typeof t.on && (r = !1) : r = !1, "string" != typeof t.name)
                    if (t.values)
                        if (Array.isArray(t.values))
                            if (t.values.length < 4) r = !1;
                            else
                                for (var s = 0; s < t.values.length; s++) "number" != typeof t.values[s] && (r = !1);
                else r = !1;
                else r = !1;
                return r
            }
            if ("numberArray" === e) {
                if (!Array.isArray(t)) return !1;
                if (t.length < i.count) return !1;
                for (var o = 0; o < t.length; o++)
                    if ("number" != typeof t[o]) return !1;
                return !0
            }
            if ("functionArray" === e) {
                if (!Array.isArray(t)) return !1;
                if (t.length < i.count) return !1;
                for (var n = 0; n < t.length; n++)
                    if ("function" != typeof t[n]) return !1;
                return !0
            }
            if ("stringArray" === e) {
                if (!Array.isArray(t)) return !1;
                if (t.length < i.count) return !1;
                for (var a = 0; a < t.length; a++)
                    if ("string" != typeof t[a]) return !1;
                return !0
            }
            if ("callback" === e) return void 0 !== t.target && ("number" == typeof t.target && (void 0 !== t.do && !!this.checkType("function", t.do)));
            if ("callbacks" === e) {
                if (!Array.isArray(t)) return !1;
                for (var l = 0; l < t.length; l++)
                    if (!this.checkType("callback", t[l])) return !1;
                return !0
            }
            if ("styleCallback" === e) return void 0 !== t.scope && (!!this.checkType("numberArray", t.scope, {
                count: 2
            }) && (void 0 !== t.property && ("string" == typeof t.property && (void 0 !== t.value && !!this.checkType("function", t.value)))));
            if ("styleCallbacks" === e) {
                if (!Array.isArray(t)) return !1;
                for (var h = 0; h < t.length; h++)
                    if (!this.checkType("styleCallback", t[h])) return !1;
                return !0
            }
            return !1
        }, p.prototype.checkTypes = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    obj: {},
                    name: "Name",
                    console: !0,
                    vars: []
                },
                t = e.obj,
                i = void 0 === t ? {} : t,
                r = e.name,
                s = void 0 === r ? "Name" : r,
                o = e.console,
                n = void 0 === o || o,
                a = e.vars,
                l = void 0 === a ? [] : a;
            if (!this.checkType("object", i)) return !1;
            if (!this.checkType("string", s)) return !1;
            if (!this.checkType("boolean", n)) return !1;
            if (!this.checkType("array", l)) return !1;
            for (var h = [], d = 0; d < l.length; d++) void 0 === i[l[d][0]] ? h.push(s + ". " + l[d][0] + " doesn't exist in") : this.checkType(l[d][1], i[l[d][0]], l[d][2]) || h.push(s + ". " + l[d][0] + " must be a " + l[d][1]);
            if (0 === h.length) return !0;
            for (var c = 0; c < h.length; c++) this.console(h[c], i, "error", n);
            return !1
        }, p.prototype.childOf = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (null === e || null === t) return !1;
            return function e() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                if (null === t || null === i) return !1;
                var r = !1;
                return t === i && (r = !0), !0 === r || null !== t && e(t.parentNode, i)
            }(e, t)
        }, p.prototype.removeChildren = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if (!this.checkType("htmlElement", e)) return !1;
            for (; e.firstChild;) e.removeChild(e.firstChild);
            return !0
        }, p.prototype.bindEventListener = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = {
                    el: null,
                    target: "",
                    do: function() {}
                };
            for (var i in e) t[i] = e[i];
            if (!this.checkType("htmlElement", t.el) & t.el != window) return !1;
            if (!this.checkType("string", t.target)) return !1;
            if (!this.checkType("function", t.do)) return !1;
            this.checkType("object", t.el[this.eventListenerAttribute]) || (t.el[this.eventListenerAttribute] = {});
            var r = t.target + "__" + Math.random();
            return t.el.addEventListener(t.target, t.do, !1), t.el[this.eventListenerAttribute][r] = t.do, {
                el: t.el,
                id: r
            }
        }, p.prototype.getEventListener = function(e) {
            var t = {
                el: null,
                id: ""
            };
            for (var i in e) t[i] = e[i];
            if (!this.checkType("htmlElement", t.el) & t.el != window) return !1;
            if (!this.checkType("string", t.id)) return !1;
            if (!this.checkType("object", t.el[this.eventListenerAttribute])) return !1;
            for (var r in t.el[this.eventListenerAttribute])
                if (r === t.id) return {
                    el: t.el,
                    id: t.id,
                    do: t.el[this.eventListenerAttribute][r]
                };
            return !1
        }, p.prototype.unbindEventListener = function(e) {
            var t = this.getEventListener(e);
            if (!t) return !1;
            var i = t.id;
            return i = i.split("__"), t.el.removeEventListener(i[0], t.do, !1), delete t.el[this.eventListenerAttribute][t.id], !0
        }, p.prototype.loadEvent = function() {
            return this.load = [], window.addEventListener("load", function() {
                this.loaded = !0;
                for (var e = 0; e < this.load.length; e++) {
                    var t = this.load[e][1];
                    this.checkType("function", t) && t()
                }
                this.body.classList.remove("v-loading"), this.time = +new Date - this.time, this.console("The page has been loaded for " + this.time / 1e3 + "s")
            }.bind(this)), !0
        }, p.prototype.addLoad = function(e) {
            var t = "load-" + +new Date / Math.random() * Math.random();
            return this.load.push([t, e]), t
        }, p.prototype.deleteLoad = function() {
            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = !1, i = 0; i < this.load.length; i++) {
                this.load[i][0] === e && (this.load[i][1] = [], t = !0)
            }
            return t
        }, p.prototype.setPage = function() {
            for (var e = this.prop.page.split(" "), t = 0; t < e.length; t++) this.page.push(e[t]), this.document.classList.add(this.prefix + "page_" + e[t]);
            return this.console("Page:", this.page), this.page
        }, p.prototype.checkPage = function() {
            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "index", t = 0; t < this.page.length; t++)
                if (e === this.page[t]) return !0;
            return !1
        }, p.prototype.setOS = function() {
            var e = 0;
            switch (-1 != navigator.userAgent.indexOf("Windows") && (e = 1), -1 != navigator.userAgent.indexOf("Linux") && (e = 2), -1 != navigator.userAgent.indexOf("Mac") && (e = 3), -1 != navigator.userAgent.indexOf("FreeBSD") && (e = 4), e) {
                case 1:
                    return "windows";
                case 2:
                    return "linux";
                case 3:
                    return "macos";
                case 4:
                    return "freebsd";
                default:
                    return "unknown"
            }
        }, p.prototype.setBrowser = function() {
            var e = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"),
                t = "undefined" != typeof InstallTrigger,
                i = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(),
                r = !!document.documentMode,
                s = !r && !!window.StyleMedia,
                o = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            return e ? "opera" : t ? "firefox" : i ? "safari" : r ? "ie" : s ? "edge" : o ? "chrome" : "unknown"
        }, p.prototype.Event = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                for (var i in t.prop = {
                        console: t.prop.console
                    }, e) t.prop[i] = e[i];
                return t.name = "Event", t.events = [], t.targets = [], t.setEvent(), t
            }
            return h(r, p), o(r, [{
                key: "init",
                value: function() {
                    var e = this;
                    return {
                        add: this.add.bind(this),
                        delete: this.delete.bind(this),
                        turn: this.turn.bind(this),
                        get: this.getEvent.bind(this),
                        events: function() {
                            return e.events
                        }
                    }
                }
            }, {
                key: "target",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = !1, i = 0; i < this.targets.length; i++) e === this.targets[i] && (t = !0);
                    return 0 === this.targets.length && (t = !0), t
                }
            }, {
                key: "do",
                value: function(e) {
                    return !!this.checkType("function", e)
                }
            }, {
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return !!this.do(e.do)
                }
            }, {
                key: "add",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console;
                    if (this.checkEvent(e)) {
                        var r = this.name + "-" + +new Date + "-" + Math.random(),
                            s = {
                                id: r,
                                on: t,
                                data: e
                            };
                        return this.events.push(s), this.console(this.name + '. Event "' + r + '" added', s, "info", i), this.addCallback(r), r
                    }
                    return !1
                }
            }, {
                key: "delete",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.prop.console, i = !1, r = [], s = 0; s < this.events.length; s++) {
                        if (null !== this.events[s]) this.events[s].id === e ? (this.deleteCallback(e), i = !(this.events[s] = null), this.console(this.name + '. Event "' + e + '" deleted', null, "info", t)) : r.push(this.events[s])
                    }
                    return this.events = r, i
                }
            }, {
                key: "deleteAll",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.prop.console, t = 0; t < this.events.length; t++)
                        if (null !== this.events[t]) {
                            var i = this.events[t].id;
                            this.deleteCallback(i), this.events[t] = null, this.console(this.name + '. Event "' + i + '" deleted', null, "info", e)
                        }
                    return this.events = [], !0
                }
            }, {
                key: "turn",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console, r = !1, s = 0; s < this.events.length; s++) {
                        if (null !== this.events[s]) this.events[s].id === e && (this.events[s].on = t, r = !0, this.console(this.name + '. Event "' + e + '" turned to ' + t, null, "info", i))
                    }
                    return this.turnCallback(e), r
                }
            }, {
                key: "setEvent",
                value: function() {
                    return !0
                }
            }, {
                key: "addCallback",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !0
                }
            }, {
                key: "turnCallback",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !0
                }
            }, {
                key: "deleteCallback",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !0
                }
            }, {
                key: "getEvent",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = 0; t < this.events.length; t++)
                        if (null !== this.events[t] && this.events[t].id === e) return this.events[t];
                    return !1
                }
            }, {
                key: "launchEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {},
                        i = 0;
                    return e.data.timeout && (i = e.data.timeout), 0 === i ? t() : setTimeout(t.bind(this), i), !0
                }
            }, {
                key: "launchEvents",
                value: function() {
                    for (var e = 0; e < this.events.length; e++) null !== this.events[e] && this.events[e].on && this.launchEvent(this.events[e], this.events[e].data.do.bind(this));
                    return !0
                }
            }, {
                key: "launchEventsByTarget",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = 0; i < this.events.length; i++) null !== this.events[i] && void 0 !== c(this.events[i].data.target) && this.events[i].data.target === e & this.events[i].on && this.launchEvent(this.events[i], this.events[i].data.do.bind(this, t));
                    return !0
                }
            }]), r
        }(), p.prototype.Viewport = function(e) {
            function i() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, i);
                var t = l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
                return t.name = "Viewport", t.targets = ["w", "h", "wh", "hw"], t
            }
            return h(i, p.prototype.Event), o(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    return {
                        add: this.add.bind(this),
                        delete: this.delete.bind(this),
                        turn: this.turn.bind(this),
                        get: this.getEvent.bind(this),
                        events: function() {
                            return e.events
                        },
                        vw: function() {
                            return e.vw
                        },
                        vh: function() {
                            return e.vh
                        },
                        dpr: function() {
                            return e.dpr
                        },
                        desktop: function() {
                            return e.desktop
                        },
                        tablet: function() {
                            return e.tablet
                        },
                        mobile: function() {
                            return e.mobile
                        }
                    }
                }
            }, {
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return !!a(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "checkEvent", this).call(this, e) && (!!this.target(e.target) && !(e.timeout && !Number.isInteger(e.timeout)))
                }
            }, {
                key: "setEvent",
                value: function() {
                    return window.addEventListener("resize", this.implement.bind(this)), this.setViewport()
                }
            }, {
                key: "implement",
                value: function() {
                    this.vw[1] = this.document.clientWidth, this.vh[1] = this.document.clientHeight;
                    for (var e = 0; e < this.events.length; e++) null !== this.events[e] && void 0 !== c(this.events[e].data.target) & this.events[e].on && ("w" === this.events[e].data.target & this.vw[0] !== this.vw[1] && this.launchEvent(this.events[e], this.events[e].data.do.bind(this)), "h" === this.events[e].data.target & this.vh[0] !== this.vh[1] && this.launchEvent(this.events[e], this.events[e].data.do.bind(this)), "wh" !== this.events[e].data.target && "hw" !== this.events[e].data.target || this.launchEvent(this.events[e], this.events[e].data.do.bind(this)));
                    return this.setViewport(), !0
                }
            }, {
                key: "setViewport",
                value: function() {
                    return this.vw = [this.document.clientWidth, this.document.clientWidth], this.vh = [this.document.clientHeight, this.document.clientHeight], this.dpr = this.getDPR(), this.console("Viewport width: " + this.vw[1] + ". Viewport height: " + this.vh[1]), this.setViewportClass(), this.setViewportBreakpoints(), {
                        vw: this.vw,
                        vh: this.vh,
                        dpr: this.dpr
                    }
                }
            }, {
                key: "getDPR",
                value: function() {
                    var e = 1;
                    return void 0 !== window.devicePixelRatio && (e = window.devicePixelRatio), e
                }
            }, {
                key: "setViewportClass",
                value: function() {
                    this.vw[1] <= this.prop.tablet ? this.document.classList.add(this.prefix + "tablet") : this.document.classList.remove(this.prefix + "tablet"), this.vw[1] <= this.prop.mobile ? this.document.classList.add(this.prefix + "mobile") : this.document.classList.remove(this.prefix + "mobile")
                }
            }, {
                key: "setViewportBreakpoints",
                value: function() {
                    this.vw[1] > this.prop.tablet ? (this.desktop = !0, this.tablet = !1, this.mobile = !1) : this.vw[1] > this.prop.mobile ? (this.desktop = !1, this.tablet = !0, this.mobile = !1) : (this.desktop = !1, this.tablet = !1, this.mobile = !0)
                }
            }]), i
        }(), p.prototype.addResize = function(e) {
            var t = {};
            if (v.checkType("array", e)) {
                if (e.length < 2) return !1;
                if (!this.checkType("function", e[1])) return !1;
                var i = this.timeMin;
                e[2] ? Number.isInteger(e[2]) && (i = e[2]) : i = this.timeMin, t = {
                    target: e[0],
                    do: e[1],
                    timeout: i,
                    name: "none"
                }
            } else t = e;
            return this.viewport.add(t)
        }, p.prototype.deleteResize = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            return this.viewport.delete(e)
        }, p.prototype.turnResize = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return this.viewport.turn(e, t)
        }, p.prototype.getParam = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    name: "name",
                    url: window.location.href
                },
                t = e.name,
                i = void 0 === t ? "name" : t,
                r = e.url,
                s = void 0 === r ? window.location.href : r;
            i = i.replace(/[\[\]]/g, "\\$&");
            var o = new RegExp("[?&]" + i + "(=([^&#]*)|&|#|$)").exec(s);
            return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
        }, p.prototype.setParam = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    name: "name",
                    value: "value",
                    push: !1,
                    url: ""
                },
                t = e.name,
                i = void 0 === t ? "name" : t,
                r = e.value,
                s = void 0 === r ? "value" : r,
                o = e.push,
                n = void 0 === o || o,
                a = e.url,
                l = void 0 === a ? "" : a;
            i = encodeURI(i), s = encodeURI(s);
            for (var h = null, d = "" === (h = 0 < l.length ? new URL(l) : window.location).search.substr(1) ? [] : h.search.substr(1).split("&"), c = d.length, u = void 0; c--;)
                if ((u = d[c].split("="))[0] == i) {
                    u[1] = s, d[c] = u.join("=");
                    break
                }
            c < 0 && (d[d.length] = [i, s].join("="));
            var p = h.pathname + "?" + d.join("&");
            return 0 === s.length && (p = (p = (p = (p = p.replace("?" + i + "=&", "?")).replace("?" + i + "=", "")).replace("&" + i + "=", "")).replace(i + "=", "")), !0 === n && window.history.pushState(null, "", p), p
        }, p.prototype.popState = function() {
            return !0
        }, p.prototype.ajax = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.checkType("object", e)) return !1;
            var i = {
                method: "post",
                url: window.location.href,
                data: {},
                abortOnError: !0,
                callback: function() {},
                fail: function() {},
                error: function() {}
            };
            for (var t in e) i[t] = e[t];
            if (!this.checkTypes({
                    obj: i,
                    console: !1,
                    vars: [
                        ["method", "string"],
                        ["url", "string"],
                        ["data", "object"],
                        ["abortOnError", "boolean"],
                        ["callback", "function"],
                        ["fail", "function"],
                        ["error", "function"]
                    ]
                })) return !1;
            if (i.method = i.method.toLocaleLowerCase(), "post" !== i.method & "get" !== i.method) return !1;
            var r = $[i.method](i.url, i.data, i.callback.bind(this)).fail(function(e, t) {
                "error" == t & i.abortOnError ? i.error() : ("error" == t && i.error(), i.fail())
            }.bind(this));
            return setTimeout(function(e) {
                e.abort()
            }.bind(this, r), this.ajaxTimeMax), !0
        }, p.prototype.bezier = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    values: [1, 1, 1, 1],
                    x: 0,
                    t: 1,
                    b: 0,
                    c: 0,
                    d: 1e3,
                    name: null
                },
                t = e.values,
                i = void 0 === t ? [1, 1, 1, 1] : t,
                r = e.x,
                s = void 0 === r ? 0 : r,
                o = e.t,
                n = void 0 === o ? 1 : o,
                a = e.b,
                l = void 0 === a ? 0 : a,
                h = e.c,
                d = void 0 === h ? 0 : h,
                c = e.d,
                u = void 0 === c ? 1e3 : c,
                p = e.name,
                v = void 0 === p ? null : p,
                f = n;
            if (null === v) f = this.bezierCurve(i, n);
            else switch (v) {
                case "easeInQuad":
                    return d * (n /= u) * n + l;
                case "easeOutQuad":
                    return -d * (n /= u) * (n - 2) + l;
                case "easeInOutQuad":
                    return (n /= u / 2) < 1 ? d / 2 * n * n + l : -d / 2 * (--n * (n - 2) - 1) + l;
                case "easeInCubic":
                    return d * (n /= u) * n * n + l;
                case "easeOutCubic":
                    return d * ((n = n / u - 1) * n * n + 1) + l;
                case "easeInOutCubic":
                    return (n /= u / 2) < 1 ? d / 2 * n * n * n + l : d / 2 * ((n -= 2) * n * n + 2) + l;
                case "easeInQuart":
                    return d * (n /= u) * n * n * n + l;
                case "easeOutQuart":
                    return -d * ((n = n / u - 1) * n * n * n - 1) + l;
                case "easeInOutQuart":
                    return (n /= u / 2) < 1 ? d / 2 * n * n * n * n + l : -d / 2 * ((n -= 2) * n * n * n - 2) + l;
                case "easeInQuint":
                    return d * (n /= u) * n * n * n * n + l;
                case "easeOutQuint":
                    return d * ((n = n / u - 1) * n * n * n * n + 1) + l;
                case "easeInOutQuint":
                    return (n /= u / 2) < 1 ? d / 2 * n * n * n * n * n + l : d / 2 * ((n -= 2) * n * n * n * n + 2) + l;
                case "easeInSine":
                    return -d * Math.cos(n / u * (Math.PI / 2)) + d + l;
                case "easeOutSine":
                    return d * Math.sin(n / u * (Math.PI / 2)) + l;
                case "easeInOutSine":
                    return -d / 2 * (Math.cos(Math.PI * n / u) - 1) + l;
                case "easeInExpo":
                    return 0 == n ? l : d * Math.pow(2, 10 * (n / u - 1)) + l;
                case "easeOutExpo":
                    return n == u ? l + d : d * (1 - Math.pow(2, -10 * n / u)) + l;
                case "easeInOutExpo":
                    return 0 == n ? l : n == u ? l + d : (n /= u / 2) < 1 ? d / 2 * Math.pow(2, 10 * (n - 1)) + l : d / 2 * (2 - Math.pow(2, -10 * --n)) + l;
                case "easeInCirc":
                    return -d * (Math.sqrt(1 - (n /= u) * n) - 1) + l;
                case "easeOutCirc":
                    return d * Math.sqrt(1 - (n = n / u - 1) * n) + l;
                case "easeInOutCirc":
                    return (n /= u / 2) < 1 ? -d / 2 * (Math.sqrt(1 - n * n) - 1) + l : d / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + l;
                case "easeInElastic":
                    var g = 1.70158;
                    if (0 == n) return l;
                    if (1 == (n /= u)) return l + d;
                    if ((m = 0) || (m = .3 * u), (y = d) < Math.abs(d)) {
                        y = d;
                        g = m / 4
                    } else g = m / (2 * Math.PI) * Math.asin(d / y);
                    return -y * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * u - g) * (2 * Math.PI) / m) + l;
                case "easeOutElastic":
                    g = 1.70158;
                    if (0 == n) return l;
                    if (1 == (n /= u)) return l + d;
                    if ((m = 0) || (m = .3 * u), (y = d) < Math.abs(d)) {
                        y = d;
                        g = m / 4
                    } else g = m / (2 * Math.PI) * Math.asin(d / y);
                    return y * Math.pow(2, -10 * n) * Math.sin((n * u - g) * (2 * Math.PI) / m) + d + l;
                case "easeInOutElastic":
                    var m, y;
                    g = 1.70158;
                    if (0 == n) return l;
                    if (2 == (n /= u / 2)) return l + d;
                    if ((m = 0) || (m = u * (.3 * 1.5)), (y = d) < Math.abs(d)) {
                        y = d;
                        g = m / 4
                    } else g = m / (2 * Math.PI) * Math.asin(d / y);
                    return n < 1 ? y * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * u - g) * (2 * Math.PI) / m) * -.5 + l : y * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * u - g) * (2 * Math.PI) / m) * .5 + d + l;
                case "easeInBack":
                    return null == g && (g = 1.70158), d * (n /= u) * n * ((g + 1) * n - g) + l;
                case "easeOutBack":
                    return null == g && (g = 1.70158), d * ((n = n / u - 1) * n * ((g + 1) * n + g) + 1) + l;
                case "easeInOutBack":
                    return null == g && (g = 1.70158), (n /= u / 2) < 1 ? d / 2 * (n * n * ((1 + (g *= 1.525)) * n - g)) + l : d / 2 * ((n -= 2) * n * ((1 + (g *= 1.525)) * n + g) + 2) + l;
                case "easeInBounce":
                    return d - this.bezier({
                        name: "easeOutBounce",
                        x: s,
                        t: u - n,
                        b: 0,
                        c: d,
                        d: u
                    }) + l;
                case "easeOutBounce":
                    return (n /= u) < 1 / 2.75 ? d * (7.5625 * n * n) + l : n < 2 / 2.75 ? d * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + l : n < 2.5 / 2.75 ? d * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + l : d * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + l;
                case "easeInOutBounce":
                    return n < u / 2 ? .5 * this.bezier({
                        name: "easeOutBounce",
                        x: s,
                        t: 2 * n,
                        b: 0,
                        c: d,
                        d: u
                    }) + l : .5 * this.bezier({
                        name: "easeOutBounce",
                        x: s,
                        t: 2 * n - u,
                        b: 0,
                        c: d,
                        d: u
                    }) + .5 * d + l;
                default:
                    f = n
            }
            return f
        }, p.prototype.bezierCurve = function(e, t) {
            var i = d(e, 4),
                r = i[0],
                s = i[1],
                o = i[2],
                n = i[3];
            if (r === s && o === n) return t;
            for (var a = [], l = 0; l < 11; ++l) a[l] = this.bezierCalc(.1 * l, r, o);
            return 0 === t ? 0 : 1 === t ? 1 : this.bezierCalc(this.bezierCurveGetX([r, s, o, n], t, a), s, n)
        }, p.prototype.bezierCurveGetX = function(e, t, i) {
            for (var r = d(e, 4), s = r[0], o = (r[1], r[2]), n = (r[3], 0), a = 1; 10 !== a && i[a] <= t; ++a) n += .1;
            var l = n + .1 * ((t - i[--a]) / (i[a + 1] - i[a])),
                h = this.bezierCurveGetSlope(l, s, o);
            return .001 <= h ? this.bezierCurveNewtonRaphsonIterate(t, l, s, o) : 0 === h ? l : this.bezierCurveBinarySubdivide(t, n, n + .1, s, o)
        }, p.prototype.bezierCurveGetSlope = function(e, t, i) {
            return 3 * this.bezierCalcA(t, i) * e * e + 2 * this.bezierCalcB(t, i) * e + this.bezierCalcC(t)
        }, p.prototype.bezierCurveNewtonRaphsonIterate = function(e, t, i, r) {
            for (var s = 0; s < 4; ++s) {
                var o = this.bezierCurveGetSlope(t, i, r);
                if (0 === o) return t;
                t -= (this.bezierCalc(t, i, r) - e) / o
            }
            return t
        }, p.prototype.bezierCurveBinarySubdivide = function(e, t, i, r, s) {
            for (var o, n, a = 0; n = t + (i - t) / 2, 0 < (o = this.bezierCalc(n, r, s) - e) ? i = n : t = n, 1e-7 < Math.abs(o) && ++a < 10;);
            return n
        }, p.prototype.bezierCalc = function(e, t, i) {
            return ((this.bezierCalcA(t, i) * e + this.bezierCalcB(t, i)) * e + this.bezierCalcC(t)) * e
        }, p.prototype.bezierCalcA = function(e, t) {
            return 1 - 3 * t + 3 * e
        }, p.prototype.bezierCalcB = function(e, t) {
            return 3 * t - 6 * e
        }, p.prototype.bezierCalcC = function(e) {
            return 3 * e
        }, p.prototype.depthPercent = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    scope: [0, 1],
                    t: .5
                },
                t = e.scope,
                i = void 0 === t ? [0, 1] : t,
                r = e.t,
                s = void 0 === r ? .5 : r;
            return !!this.checkType("numberArray", i, {
                count: 2
            }) && ("number" == typeof s && (s - i[0]) / (i[1] - i[0]))
        }, p.prototype.randInt = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100;
            if (!Number.isInteger(e)) return !1;
            if (!Number.isInteger(t)) return !1;
            if (e = Math.ceil(e), t = Math.ceil(t), e < 0 || 1e10 < t) return 0;
            var i = e + Math.random() * (t - e);
            return i = Math.round(i)
        }, p.prototype.imageSize = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    img: null,
                    size: "cover",
                    width: 100,
                    height: 100,
                    maxWidth: n,
                    maxHeight: l
                },
                t = e.img,
                i = void 0 === t ? null : t,
                r = e.size,
                s = void 0 === r ? "cover" : r,
                o = e.width,
                n = void 0 === o ? 100 : o,
                a = e.height,
                l = void 0 === a ? 100 : a,
                h = e.maxWidth,
                d = void 0 === h ? n : h,
                c = e.maxHeight,
                u = void 0 === c ? l : c;
            if (null === i) return !1;
            if ("cover" !== s & "contain" !== s) return !1;
            if ("number" != typeof n) return !1;
            if ("number" != typeof l) return !1;
            if ("number" != typeof d) return !1;
            if ("number" != typeof u) return !1;
            var p = 0,
                v = 0,
                f = 0,
                g = 0,
                m = 0,
                y = 0;
            return "VIDEO" == i.tagName ? (m = i.videoWidth, y = i.videoHeight) : (m = i.width, y = i.height), "cover" === s ? (f = 0, g = (l - (v = y * (p = n) / m)) / 2, v < l && (f = (n - (p = m * (v = l) / y)) / 2, g = 0), d === n && u === l || (f = (d - p) / 2, g = (u - v) / 2)) : "contain" === s && (y < m ? (f = 0, g = (l - (v = y * (p = n) / m)) / 2) : m <= y && (f = (n - (p = m * (v = l) / y)) / 2, g = 0)), {
                img: i,
                imageWidth: p,
                imageHeight: v,
                x: f,
                y: g,
                size: s
            }
        }, p.prototype.Keydown = function(e) {
            function i() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, i);
                var t = l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
                return t.name = "Keydown", t.syncInterval = 250, t.targets = ["stack", "once", "sync"], t
            }
            return h(i, p.prototype.Event), o(i, [{
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!a(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "checkEvent", this).call(this, e)) return !1;
                    if (!this.target(e.target)) return !1;
                    if (!e.key) return !1;
                    for (var t = 0; t < e.key.length; t++)
                        if (!Number.isInteger(e.key[t])) return !1;
                    return !(e.timeout && !Number.isInteger(e.timeout))
                }
            }, {
                key: "implement",
                value: function(e) {
                    for (var t = 0; t < this.events.length; t++)
                        if (null !== this.events[t] && !0 === this.events[t].on) {
                            if ("once" === this.events[t].data.target && e.keyCode === this.events[t].data.key[0] && this.launchEvent(this.events[t], this.events[t].data.do.bind(e, this.events[t])), "stack" === this.events[t].data.target) {
                                if (void 0 === this.events[t].string && (this.events[t].string = ""), this.events[t].string += "-" + e.keyCode, void 0 === this.events[t].compareString) {
                                    this.events[t].compareString = "";
                                    for (var i = 0; i < this.events[t].data.key.length; i++) this.events[t].compareString += "-" + this.events[t].data.key[i]
                                }
                                this.events[t].string.includes(this.events[t].compareString) && (this.launchEvent(this.events[t], this.events[t].data.do.bind(e, this.events[t])), this.events[t].string = "")
                            }
                            if ("sync" === this.events[t].data.target) {
                                void 0 === this.events[t].array && (this.events[t].array = []), this.events[t].array.push(e.keyCode), setTimeout(function(e) {
                                    e.array = []
                                }.bind(this, this.events[t]), this.syncInterval);
                                for (var r = 0, s = 0; s < this.events[t].data.key.length; s++)
                                    for (var o = 0; o < this.events[t].array.length; o++) this.events[t].data.key[s] === this.events[t].array[o] && r++;
                                this.events[t].data.key.length === r && (this.launchEvent(this.events[t], this.events[t].data.do.bind(e, this.events[t])), this.events[t].array = [])
                            }
                        }
                    return !0
                }
            }, {
                key: "setEvent",
                value: function() {
                    return this.document.addEventListener("keydown", function(e) {
                        this.implement(e)
                    }.bind(this)), !0
                }
            }]), i
        }(), p.prototype.Swipe = function(e) {
            function i() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, i);
                var t = l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
                return t.name = "Swipe", t.targets = ["up", "down", "left", "right"], t.x = null, t.y = null, t
            }
            return h(i, p.prototype.Event), o(i, [{
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return !!a(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "checkEvent", this).call(this, e) && (!!this.target(e.target) && (!!e.k && (!!Number.isInteger(e.k) && !(e.timeout && !Number.isInteger(e.timeout)))))
                }
            }, {
                key: "implement",
                value: function(e) {
                    for (var t = e.changedTouches[0].pageX, i = e.changedTouches[0].pageY, r = 0; r < this.events.length; r++) null !== this.events[r] && !0 === this.events[r].on && (void 0 === this.events[r].data.outer && (this.events[r].data.outer = this.body), !0 === this.childOf(e.target, this.events[r].data.outer) && ("up" === this.events[r].data.target && i < this.y && Math.abs(this.y - i) > Math.abs(this.events[r].data.k) && this.launchEvent(this.events[r], this.events[r].data.do.bind(e, this.events[r])), "down" === this.events[r].data.target && i > this.y && Math.abs(this.y - i) > Math.abs(this.events[r].data.k) && this.launchEvent(this.events[r], this.events[r].data.do.bind(e, this.events[r])), "left" === this.events[r].data.target && t < this.x && Math.abs(this.x - t) > Math.abs(this.events[r].data.k) && this.launchEvent(this.events[r], this.events[r].data.do.bind(e, this.events[r])), "right" === this.events[r].data.target && t > this.x && Math.abs(this.x - t) > Math.abs(this.events[r].data.k) && this.launchEvent(this.events[r], this.events[r].data.do.bind(e, this.events[r]))));
                    return !0
                }
            }, {
                key: "setEvent",
                value: function() {
                    return this.document.addEventListener("touchstart", function(e) {
                        this.x = e.targetTouches[0].pageX, this.y = e.targetTouches[0].pageY
                    }.bind(this)), this.document.addEventListener("touchend", function(e) {
                        this.implement(e)
                    }.bind(this)), !0
                }
            }]), i
        }(), p.prototype.Wheel = function(e) {
            function s() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, s);
                var t = l(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
                return t.name = "Wheel", t.targets = ["up", "down", "left", "right"], t.timeInterval = 200, t
            }
            return h(s, p.prototype.Event), o(s, [{
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return !!a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "checkEvent", this).call(this, e) && (!!this.target(e.target) && (!!e.k && (!!this.checkType("number", e.k) && (!(e.timeout && !Number.isInteger(e.timeout)) && !!this.checkType("htmlElement", e.outer)))))
                }
            }, {
                key: "add",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.prop.console;
                    e.time = (new Date).getTime();
                    var r = a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "add", this).call(this, e, t, i);
                    return !1 !== r ? this.setEventListener(r) : r
                }
            }, {
                key: "implement",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments[1],
                        i = this.getEvent(e);
                    if (i && null !== i && !0 === i.on) {
                        var r = (new Date).getTime();
                        if (!(r - i.data.time < this.timeInterval)) {
                            i.data.time = r;
                            var s = this.normalizeWheel(t),
                                o = s.spinY,
                                n = s.spinX;
                            return "up" === i.data.target && o < 0 & o < -1 * i.data.k && this.launchEvent(i, i.data.do.bind(t, i)), "down" === i.data.target && 0 < o & o > i.data.k && this.launchEvent(i, i.data.do.bind(t, i)), "left" === i.data.target && n < 0 & n < -1 * i.data.k && this.launchEvent(i, i.data.do.bind(t, i)), "right" === i.data.target && 0 < n & n > i.data.k && this.launchEvent(i, i.data.do.bind(t, i)), !0
                        }
                    }
                }
            }, {
                key: "setEventListener",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.getEvent(e);
                    return !!t && (t.data.outer.addEventListener("wheel", this.implement.bind(this, e)), t.id)
                }
            }]), s
        }(), p.prototype.Interval = function(e) {
            function i() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, i);
                var t = l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
                return t.name = "Interval", t
            }
            return h(i, p.prototype.Event), o(i, [{
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return !!a(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "checkEvent", this).call(this, e) && (!!this.target(e.target) && (!!e.time && !!Number.isInteger(e.time)))
                }
            }, {
                key: "addCallback",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.getEvent(e);
                    return !!t && (t.onUniversal = t.on, t.intervalFunc = !1, t.on && this.on(e), window.addEventListener("focus", this.on.bind(this, e, "window")), window.addEventListener("blur", this.off.bind(this, e, "window")), !0)
                }
            }, {
                key: "turnCallback",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.getEvent(e);
                    return !!t && (t.on ? this.on(e) : this.off(e), !0)
                }
            }, {
                key: "deleteCallback",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.getEvent(e);
                    return !!t && (!1 !== t.intervalFunc && clearInterval(t.intervalFunc), t.intervalFunc = !1, t.on = !1, !(t.onUniversal = !1))
                }
            }, {
                key: "on",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.getEvent(e);
                    if (!i) return !1;
                    this.off(e, t);
                    var r = !1;
                    return "window" === t ? i.onUniversal && (r = !0) : r = !0, r && (i.intervalFunc = setInterval(i.data.do.bind(this, i), i.data.time), i.on = !0, i.onUniversal = !0), !0
                }
            }, {
                key: "off",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.getEvent(e);
                    return !!i && (!1 !== i.intervalFunc && clearInterval(i.intervalFunc), i.intervalFunc = !1, i.on = !1, "window" !== t && (i.onUniversal = !1), !0)
                }
            }]), i
        }(), p.prototype.normalizeWheel_PIXEL_STEP = 10, p.prototype.normalizeWheel_LINE_HEIGHT = 40, p.prototype.normalizeWheel_PAGE_HEIGHT = 800, p.prototype.normalizeWheel = function(e) {
            var t = 0,
                i = 0,
                r = 0,
                s = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), r = t * this.normalizeWheel_PIXEL_STEP, s = i * this.normalizeWheel_PIXEL_STEP, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || s) && e.deltaMode && (1 == e.deltaMode ? (r *= this.normalizeWheel_LINE_HEIGHT, s *= this.normalizeWheel_LINE_HEIGHT) : (r *= this.normalizeWheel_PAGE_HEIGHT, s *= this.normalizeWheel_PAGE_HEIGHT)), r && !t && (t = r < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: r,
                pixelY: s
            }
        }, p.prototype.Class = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                for (var i in t.name = t.constructor.name, t.prop = Object.assign(t.prop, {
                        v: window.v,
                        console: void 0 === window.v || window.v.prop().console,
                        eventsStorage: !1
                    }), e) t.prop[i] = e[i];
                return (t.eventsStorage = t).eventsStorageCustom = !1, t.checkType("object", t.prop.eventsStorage) && t.prop.eventsStorage.hasOwnProperty("addEventListener") & t.prop.eventsStorage.hasOwnProperty("removeEventListeners") & t.prop.eventsStorage.hasOwnProperty("getEventListeners") && (t.eventsStorage = t.prop.eventsStorage, t.eventsStorageCustom = !0), t
            }
            return h(r, p.prototype.Event), o(r, [{
                key: "check",
                value: function() {
                    return !0
                }
            }, {
                key: "checkEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return !(e.timeout && !Number.isInteger(e.timeout)) && !!this.do(e.do)
                }
            }, {
                key: "changeProp",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    for (var t in e) this.prop[t] = e[t];
                    return this.check()
                }
            }, {
                key: "removeEventListeners",
                value: function() {
                    if (this.eventsStorageCustom) return this.eventsStorage.removeEventListeners();
                    this.checkType("array", this.eventListeners) || (this.eventListeners = []);
                    for (var e = 0; e < this.eventListeners.length; e++) this.unbindEventListener(this.eventListeners[e]);
                    return this.eventListeners = [], !0
                }
            }, {
                key: "addEventListener",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.eventsStorageCustom) return this.eventsStorage.addEventListener(e);
                    var t = this.bindEventListener(e);
                    return !!t && (this.eventListeners.push(t), !0)
                }
            }, {
                key: "getEventListeners",
                value: function() {
                    return this.eventsStorageCustom ? this.eventsStorage.getEventListeners() : this.eventListeners
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return this.eventListeners = [], !!this.check() && (this.console(this.name + ". Using " + this.name + " for", this.prop, "info", this.prop.console), {
                        removeEventListeners: this.eventsStorage.removeEventListeners.bind(this),
                        addEventListener: this.eventsStorage.addEventListener.bind(this),
                        getEventListeners: this.eventsStorage.getEventListeners.bind(this),
                        add: this.add.bind(this),
                        delete: this.delete.bind(this),
                        turn: this.turn.bind(this),
                        events: function() {
                            return e.events
                        },
                        prop: function() {
                            return e.prop
                        },
                        changeProp: this.changeProp.bind(this),
                        targets: function() {
                            return e.targets
                        },
                        launchEventsByTarget: this.launchEventsByTarget.bind(this)
                    })
                }
            }]), r
        }(), p.prototype.Scrollbar = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "scrollbar", t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        init: !0
                    }), e) t.prop[i] = e[i];
                return t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["init", "boolean"]
                        ]
                    }) && (this.outer = this.prop.v.document().querySelector(this.prop.selector), !0)
                }
            }, {
                key: "destroy",
                value: function() {
                    return jQuery(this.outer).scrollbar("destroy"), this.outer.classList.remove("scrollbar-macosx"), !0
                }
            }, {
                key: "create",
                value: function() {
                    return this.outer.classList.add("scrollbar-macosx"), jQuery(this.outer).scrollbar(), !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this) && (this.outer.classList.add("" + this.prefix), this.prop.init && this.create(), {
                        create: this.create.bind(this),
                        destroy: this.destroy.bind(this),
                        prop: function() {
                            return e.prop
                        },
                        changeProp: this.changeProp.bind(this)
                    })
                }
            }]), r
        }(), p.prototype.Animate = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prop = Object.assign(t.prop, {
                        duration: 250,
                        scope: [0, 1],
                        durationAuto: !1,
                        delay: 0,
                        bezier: {
                            on: !1,
                            values: [1, 1, 1, 1]
                        },
                        do: function(e, t) {}
                    }), e) t.prop[i] = e[i];
                return t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    var e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["duration", "number"],
                            ["scope", "numberArray", {
                                count: 2
                            }],
                            ["durationAuto", "boolean"],
                            ["delay", "number"],
                            ["bezier", "bezier"],
                            ["do", "function"]
                        ]
                    });
                    return !!e && (this.prop.duration = parseInt(this.prop.duration), this.prop.delay = parseInt(this.prop.delay), !!(e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["duration", "integer"],
                            ["delay", "integer"]
                        ]
                    })))
                }
            }, {
                key: "animate",
                value: function() {
                    this.animating = !0;
                    var e = [this.prop.scope[0], this.prop.scope[1]];
                    this.continued && (e[0] = this.stopValue, this.reversed && (e[1] = this.stopValue, e[0] = this.prop.scope[0]));
                    var t = this.prop.duration;
                    this.prop.durationAuto && (t = (e[1] - e[0]) * this.prop.duration);
                    var i = e[1] - e[0],
                        r = (Date.now() - this.time) / t,
                        s = r * i + e[0];
                    1 <= r && (s = e[r = 1], this.animating = !1);
                    var o = s;
                    if (1 !== r && this.stopped && (this.stopValue = s, this.animating = !1), this.reversed && (s = (e[1] - e[0]) * (1 - r) + e[0], 1 <= r && (s = this.prop.scope[0], this.reversed = !1)), o = s, this.prop.bezier.on) {
                        var n = {};
                        for (var a in this.prop.bezier) n[a] = this.prop.bezier[a];
                        n.t = s, n.b = e[0], n.c = e[1], n.d = e[1], o = this.bezier(n)
                    }
                    1 !== r && this.stopped && (this.stopValue = s, this.animating = !1), this.prop.do(s, o), this.stopped || r < 1 && window.requestAnimationFrame(this.animate.bind(this))
                }
            }, {
                key: "imitate",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e;
                    this.prop.do(e, t)
                }
            }, {
                key: "run",
                value: function() {
                    return !this.animating && (this.stopped ? (this.continued = !0, this.stopped = !1, this.time = Date.now(), window.requestAnimationFrame(this.animate.bind(this))) : (this.continued = !1, 0 === this.prop.delay ? (this.time = Date.now(), window.requestAnimationFrame(this.animate.bind(this))) : setTimeout(function() {
                        this.time = Date.now(), window.requestAnimationFrame(this.animate.bind(this))
                    }.bind(this), this.prop.delay)), !0)
                }
            }, {
                key: "reverse",
                value: function() {
                    return !this.animating && (this.reversed = !0, this.run())
                }
            }, {
                key: "stop",
                value: function() {
                    return !!this.animating && (this.stopped = !0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this) && (this.continued = !1, this.stopValue = 0, this.stopped = !1, this.animating = !1, this.reversed = !1, this.time = Date.now(), {
                        run: this.run.bind(this),
                        reverse: this.reverse.bind(this),
                        stop: this.stop.bind(this),
                        imitate: this.imitate.bind(this),
                        prop: function() {
                            return e.prop
                        },
                        changeProp: this.changeProp.bind(this)
                    })
                }
            }]), r
        }(), p.prototype.AnimationFrame = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "animationFrame", t.prop = Object.assign(t.prop, {
                        fps: 60,
                        run: !0
                    }), e) t.prop[i] = e[i];
                return t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["fps", "integer"],
                            ["run", "boolean"]
                        ]
                    })
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    var t = this.prop.run;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.prop.run !== t && this.run(), !0)
                }
            }, {
                key: "run",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.prop.run && (window.requestAnimationFrame(this.run.bind(this)), this.animate(e))
                }
            }, {
                key: "animate",
                value: function(e) {
                    null == this.time && (this.time = e);
                    var t = Math.floor((e - this.time) / (1e3 / this.prop.fps));
                    t > this.frame && (this.frame = t, this.launchEvents())
                }
            }, {
                key: "init",
                value: function() {
                    var e = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!e && (this.time = null, this.frame = -1, this.run(), e)
                }
            }]), r
        }(), p.prototype.TextAnimate = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "text", t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        resize: !0
                    }), e) t.prop[i] = e[i];
                return t.types = ["letter", "word", "string", "stringletter", "stringword"], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["resize", "boolean"]
                        ]
                    }) && (this.outer = this.prop.v.document().querySelector(this.prop.selector), !0)
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.setEvents(), !0)
                }
            }, {
                key: "split",
                value: function() {
                    return this.splitted || (this.text = this.outer.innerText, this.splitLetters(), this.splitLettersSpan(), this.splitWords(), this.splitWordsSpan(), this.splitted = !0), this.splitStrings(), !0
                }
            }, {
                key: "splitLetters",
                value: function() {
                    for (var e = 0; e < this.text.length; e++) this.letters.push(this.text[e]);
                    return !0
                }
            }, {
                key: "splitLettersSpan",
                value: function() {
                    for (var e = 0; e < this.letters.length; e++) {
                        var t = {
                                element: null,
                                spaces: !1,
                                clear: !1,
                                content: ""
                            },
                            i = document.createElement("span");
                        i.classList.add(this.prefix + "__letter"), i.classList.add(this.prefix + "__letter_" + e), 32 === this.letters[e].charCodeAt(0) || 160 === this.letters[e].charCodeAt(0) ? (i.innerHTML = "&nbsp;", t.spaces = !0) : 10 === this.letters[e].charCodeAt(0) ? ((i = document.createElement("div")).classList.add("clear"), i.classList.add(this.prefix + "__space"), i.classList.add(this.prefix + "__space_" + e), i.innerHTML = "", t.clear = !0) : (i.innerHTML = this.letters[e], i.classList.add(this.prefix + "__letter_code-" + this.letters[e].charCodeAt().toString(16))), t.element = i, t.content = i.innerHTML, this.elements.letters.push(t)
                    }
                    this.outer.innerHTML = "";
                    for (var r = 0; r < this.elements.letters.length; r++) this.outer.appendChild(this.elements.letters[r].element);
                    return !0
                }
            }, {
                key: "splitWords",
                value: function() {
                    for (var e = -1, t = void 0, i = 0, r = 0; i < this.elements.letters.length; i++) this.elements.letters[i].clear && (r += 1), e !== r && (t = {
                        element: null,
                        spaces: !1,
                        clear: this.elements.letters[i].clear,
                        letters: [],
                        content: ""
                    }, this.elements.words.push(t)), t.letters.push(this.elements.letters[i]), e = r, (this.elements.letters[i].spaces || this.elements.letters[i].clear) && r++;
                    for (var s = 0; s < this.elements.words.length; s++) {
                        for (var o = 0, n = 0; n < this.elements.words[s].letters.length; n++) this.elements.words[s].letters[n].spaces && o++, this.elements.words[s].content += this.elements.words[s].letters[n].content;
                        o === this.elements.words[s].letters.length && (this.elements.words[s].spaces = !0)
                    }
                    return !0
                }
            }, {
                key: "splitWordsSpan",
                value: function() {
                    for (var e = 0; e < this.elements.words.length; e++) {
                        var t = document.createElement("span");
                        t.classList.add(this.prefix + "__word"), t.classList.add(this.prefix + "__word_" + e), this.elements.words[e].clear && ((t = document.createElement("div")).classList.add("clear"), t.classList.add(this.prefix + "__clear"), t.classList.add(this.prefix + "__clear_" + e)), this.outer.appendChild(t), this.elements.words[e].element = t
                    }
                    for (var i = 0; i < this.elements.words.length; i++)
                        for (var r = 0; r < this.elements.words[i].letters.length; r++) this.elements.words[i].element.appendChild(this.elements.words[i].letters[r].element);
                    for (var s = [], o = 0; o < this.elements.words.length; o++) this.elements.words[o].clear || s.push(this.elements.words[o]);
                    return this.elements.words = s, !0
                }
            }, {
                key: "splitStrings",
                value: function() {
                    var e = null,
                        t = -1,
                        i = void 0;
                    this.elements.strings = [];
                    for (var r = 0, s = -1; r < this.elements.words.length; r++) {
                        this.elements.words[r].element.getBoundingClientRect().top !== e && s++, t !== s && (i = {
                            spaces: !1,
                            clear: !1,
                            words: [],
                            content: ""
                        }, this.elements.strings.push(i)), i.words.push(this.elements.words[r]), t = s, e = this.elements.words[r].element.getBoundingClientRect().top
                    }
                    for (var o = 0; o < this.elements.strings.length; o++) {
                        for (var n = 0, a = 0; a < this.elements.strings[o].words.length; a++) this.elements.strings[o].words[a].spaces && n++, this.elements.strings[o].content += this.elements.strings[o].words[a].content;
                        n === this.elements.strings[o].words.length && (this.elements.strings[o].spaces = !0)
                    }
                    return !0
                }
            }, {
                key: "setEvents",
                value: function() {
                    return this.prop.resize ? null == this.resizeId && (this.resizeId = this.prop.v.viewport.add({
                        target: "wh",
                        name: this.name + " Resize",
                        do: this.eventResize.bind(this),
                        timeout: this.prop.v.timeMin()
                    })) : null !== this.resizeId && (this.prop.v.viewport.delete(this.resizeId), this.resizeId = null), !0
                }
            }, {
                key: "eventResize",
                value: function() {
                    return !!this.splitted && (this.splitStrings(), !0)
                }
            }, {
                key: "checkVars",
                value: function(e) {
                    var t = {
                        types: ["letter"],
                        delay: 0,
                        duration: 250,
                        bezier: {
                            on: !1,
                            name: "linear"
                        },
                        letter: [],
                        word: [],
                        string: [],
                        strings: [],
                        shift: .2,
                        shiftString: .2,
                        ignoreSpaces: !0,
                        reverse: !1,
                        callbacks: []
                    };
                    for (var i in e) t[i] = e[i];
                    return !!this.checkTypes({
                        obj: t,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["types", "stringArray", {
                                count: 1
                            }],
                            ["delay", "integer"],
                            ["duration", "integer"],
                            ["bezier", "bezier"],
                            ["shift", "number"],
                            ["shiftString", "number"],
                            ["ignoreSpaces", "boolean"],
                            ["reverse", "boolean"],
                            ["strings", "array"],
                            ["callbacks", "callbacks"],
                            ["letter", "styleCallbacks"],
                            ["word", "styleCallbacks"],
                            ["string", "styleCallbacks"]
                        ]
                    }) && t
                }
            }, {
                key: "animate",
                value: function(e) {
                    if (this.animating) return !1;
                    if (!this.checkVars(e)) return !1;
                    e = this.checkVars(e);
                    for (var t = 0; t < e.types.length; t++) {
                        var i = e.types[t],
                            r = i;
                        "letter" !== i && "word" !== i || (r = "elementary"), "stringletter" !== i && "stringword" !== i || (r = "string_elementary"), "string" === i && (r = "string"), void 0 !== this["animate_" + r] && (this.animating = !0, setTimeout(this["animate_" + r].bind(this, e, i), e.delay))
                    }
                    return !0
                }
            }, {
                key: "calcTime",
                value: function(e) {
                    for (var t = [], i = 0, r = 0, s = 0, o = 0; s < e.elements.length; s++) !0 === e.ignoreSpaces ? !0 !== e.elements[s].spaces && (r = o * e.duration * e.shift, o++) : (r = o * e.duration * shift, o++), t.push({
                        time: r,
                        percent: 0
                    }), i = r;
                    var n = i + e.duration;
                    n = parseInt(n);
                    for (var a = 0; a < t.length; a++) t[a].percent = t[a].time / n, t[a].percentEnd = (t[a].time + e.duration) / n;
                    return {
                        intervals: t,
                        duration: e.duration,
                        durationFull: n,
                        elements: e.elements,
                        shift: e.shift
                    }
                }
            }, {
                key: "splitAnimate",
                value: function(e) {
                    for (var t = [], i = 0; i < e.callbacks.length; i++) t.push({
                        target: e.callbacks[i].target,
                        do: e.callbacks[i].do,
                        proceeded: !1
                    });
                    var r = new this.Animate({
                        console: this.prop.console,
                        duration: e.animationInfo.durationFull,
                        do: function(e, t, i, r, s) {
                            for (var o = 0; o < e.intervals.length; o++) {
                                var n = void 0;
                                n = r < e.intervals[o].percent ? 0 : r >= e.intervals[o].percent & r <= e.intervals[o].percentEnd ? this.depthPercent({
                                    scope: [e.intervals[o].percent, e.intervals[o].percentEnd],
                                    t: r
                                }) : 1, t(e.elements[o], n)
                            }
                            1 === r && (this.animating = !1);
                            for (var a = 0; a < i.length; a++) r >= i[a].target && (i[a].proceeded || (i[a].do(r), i[a].proceeded = !0))
                        }.bind(this, e.animationInfo, e.do, t)
                    });
                    return (r = r.init()).run(), !0
                }
            }, {
                key: "setStylesSimple",
                value: function(e) {
                    for (var t = 0; t < e.properties.length; t++) {
                        var i = e.properties[t].scope,
                            r = 0,
                            s = 0;
                        if (e.progress >= i[0] & e.progress < i[1] ? r = this.depthPercent({
                                scope: i,
                                t: e.progress
                            }) : e.progress >= i[1] && (r = 1), e.bezier.on) {
                            var o = {};
                            for (var n in e.bezier) o[n] = e.bezier[n];
                            o.t = r, o.b = 0, o.c = 1, o.d = 1, s = this.bezier(o)
                        } else s = r;
                        var a = e.properties[t].property,
                            l = e.properties[t].value(s);
                        e.element.element.style[a] = l
                    }
                }
            }, {
                key: "setStyles",
                value: function(e) {
                    var t = new this.Animate({
                        console: this.prop.console,
                        duration: e.animationData.duration,
                        bezier: e.bezier,
                        do: function(e, t, i, r) {
                            for (var s = 0; s < t.length; s++) {
                                var o = t[s].scope,
                                    n = 0;
                                r >= o[0] & r < o[1] ? n = this.depthPercent({
                                    scope: o,
                                    t: r
                                }) : r >= o[1] && (n = 1);
                                var a = t[s].property,
                                    l = t[s].value(n);
                                e.element.style[a] = l
                            }
                        }.bind(this, e.element, e.properties)
                    });
                    return (t = t.init()).run(), !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this) && (this.outer.classList.add("" + this.prefix), this.defaultHTML = this.outer.innerHTML, this.splitted = !1, this.animating = !1, this.text = "", this.letters = [], this.elements = {
                        letters: [],
                        words: [],
                        strings: []
                    }, this.resizeId = null, this.split(), this.setEvents(), {
                        elements: function() {
                            return e.elements
                        },
                        split: this.splitStrings.bind(this),
                        animate: this.animate.bind(this),
                        animating: function() {
                            return e.animating
                        },
                        changeProp: this.changeProp.bind(this)
                    })
                }
            }]), r
        }(), p.prototype.TextAnimate.prototype.animate_elementary = function(i, e) {
            var t = [];
            t = "word" === e ? this.elements.words : this.elements.letters;
            var r = [];
            r = "word" === e ? i.word : i.letter, i.reverse && (t = t.slice()).reverse();
            var s = this.calcTime({
                elements: t,
                duration: i.duration,
                shift: i.shift,
                ignoreSpaces: i.ignoreSpaces
            });
            return this.splitAnimate({
                animationInfo: s,
                do: function(e, t) {
                    this.setStylesSimple({
                        bezier: i.bezier,
                        element: e,
                        progress: t,
                        properties: r
                    })
                }.bind(this),
                callbacks: i.callbacks
            }), !0
        }, p.prototype.TextAnimate.prototype.animate_string = function(r, e) {
            var t = this.elements.strings,
                s = r.string;
            r.reverse && (t = t.slice()).reverse();
            var i = this.calcTime({
                elements: t,
                duration: r.duration,
                shift: r.shift,
                ignoreSpaces: r.ignoreSpaces
            });
            return this.splitAnimate({
                animationInfo: i,
                do: function(e, t) {
                    for (var i = 0; i < e.words.length; i++) this.setStylesSimple({
                        bezier: r.bezier,
                        element: e.words[i],
                        progress: t,
                        properties: s
                    })
                }.bind(this),
                callbacks: r.callbacks
            }), !0
        }, p.prototype.TextAnimate.prototype.animate_string_elementary = function(e, t) {
            return this.animate_string_elementaryAnimate(e, t), !0
        }, p.prototype.TextAnimate.prototype.animate_string_elementaryAnimate = function(i, e) {
            i.definedProperties = "stringword" === e ? i.word : i.letter;
            for (var t = this.animate_string_elementaryGetElements(i, e), r = t.length, s = [], o = 0; o < r; o++) {
                var n = this.calcTime({
                    elements: t[o],
                    duration: i.duration,
                    shift: i.shift,
                    ignoreSpaces: i.ignoreSpaces
                });
                s.push(n)
            }
            for (var a = [], l = [], h = [], d = [], c = 0; c < r; c++) {
                var u = 0,
                    p = 0;
                0 !== c && (u = s[c - 1].durationFull * i.shiftString), l.push(u), a.push(s[c].durationFull);
                for (var v = 0; v < l.length; v++) p += l[v];
                h.push(p), d.push(p + s[c].durationFull)
            }
            for (var f = {
                    duration: i.duration,
                    durationFull: Math.max.apply(Math, d),
                    elements: s,
                    intervals: []
                }, g = 0; g < r; g++) {
                var m = {
                    time: h[g],
                    percent: h[g] / f.durationFull,
                    percentEnd: d[g] / f.durationFull
                };
                f.intervals.push(m)
            }
            return this.splitAnimate({
                animationInfo: f,
                do: function(e, t) {
                    this.animate_string_elementaryAnimation(i, e, t)
                }.bind(this),
                callbacks: i.callbacks
            }), !0
        }, p.prototype.TextAnimate.prototype.animate_string_elementaryGetElements = function(e, t) {
            var i = [],
                r = this.elements.strings;
            e.reverse && (r = r.slice()).reverse();
            for (var s = 0; s < r.length; s++) {
                var o = [],
                    n = r[s].words;
                if (e.reverse && (n = n.slice()).reverse(), "stringword" === t) o = n;
                else
                    for (var a = 0; a < n.length; a++) {
                        var l = r[s].words[a].letters;
                        e.reverse && (l = l.slice()).reverse();
                        for (var h = 0; h < l.length; h++) o.push(l[h])
                    }
                i.push(o)
            }
            return i
        }, p.prototype.TextAnimate.prototype.animate_string_elementaryAnimation = function(e, t, i) {
            for (var r = 0; r < t.intervals.length; r++) {
                var s = void 0;
                s = i < t.intervals[r].percent ? 0 : i >= t.intervals[r].percent & i <= t.intervals[r].percentEnd ? this.depthPercent({
                    scope: [t.intervals[r].percent, t.intervals[r].percentEnd],
                    t: i
                }) : 1, this.setStylesSimple({
                    bezier: e.bezier,
                    element: t.elements[r],
                    progress: s,
                    properties: e.definedProperties
                })
            }
        }, p.prototype.Slider = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "slider", t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        selectorEvents: "#" + t.prefix,
                        bezier: {
                            on: !1,
                            name: "linear"
                        },
                        duration: 750,
                        delay: 0,
                        direction: "h",
                        disable: !1,
                        loop: !0,
                        start: !0,
                        keydown: !1,
                        swipe: !1,
                        wheel: !1,
                        interval: !1,
                        time: 5e3,
                        control: !0,
                        dot: !0,
                        prev: !0,
                        next: !0,
                        resize: !0,
                        resizeTimeout: 0
                    }), e) t.prop[i] = e[i];
                return t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["bezier", "bezier"],
                            ["duration", "integer"],
                            ["delay", "integer"],
                            ["direction", "string"],
                            ["disable", "boolean"],
                            ["loop", "boolean"],
                            ["start", "boolean"],
                            ["keydown", "boolean"],
                            ["swipe", "boolean"],
                            ["wheel", "boolean"],
                            ["interval", "boolean"],
                            ["time", "integer"],
                            ["control", "boolean"],
                            ["dot", "boolean"],
                            ["prev", "boolean"],
                            ["next", "boolean"],
                            ["resize", "boolean"]
                        ]
                    }) && (this.checkType("dom", this.prop.selectorEvents) || (this.prop.selectorEvents = this.prop.selector), this.outer = this.prop.v.document().querySelector(this.prop.selector), this.outerEvents = this.prop.v.document().querySelector(this.prop.selectorEvents), !("v" !== this.prop.direction & "h" !== this.prop.direction))
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.setKeydown(), this.setSwipe(), this.setWheel(), this.setInterval(), this.setControl(), this.setDot(), this.setEventsResize(), !0)
                }
            }, {
                key: "checkItems",
                value: function() {
                    var e = this.outer.querySelector("." + this.prefix + "__items");
                    return null !== e && (this.itemsSource = e.querySelectorAll("." + this.prefix + "__item"), 0 !== this.itemsSource.length)
                }
            }, {
                key: "createControl",
                value: function() {
                    return this.prev = document.createElement("div"), this.prev.classList.add(this.prefix + "__control"), this.prev.classList.add(this.prefix + "__control_prev"), this.outer.appendChild(this.prev), this.next = document.createElement("div"), this.next.classList.add(this.prefix + "__control"), this.next.classList.add(this.prefix + "__control_next"), this.outer.appendChild(this.next), !0
                }
            }, {
                key: "setControl",
                value: function() {
                    return this.prop.control ? this.outer.classList.remove(this.prefix + "_control-hidden") : this.outer.classList.add(this.prefix + "_control-hidden"), !0
                }
            }, {
                key: "setControlAbolished",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                    return 0 === e & !1 === this.prop.loop ? this.prev.classList.add(this.prefix + "__control_abolished") : this.prev.classList.remove(this.prefix + "__control_abolished"), e === this.count - 1 & !1 === this.prop.loop ? this.next.classList.add(this.prefix + "__control_abolished") : this.next.classList.remove(this.prefix + "__control_abolished"), !0
                }
            }, {
                key: "createDot",
                value: function() {
                    this.dots = document.createElement("div"), this.dots.classList.add(this.prefix + "__dots");
                    for (var e = 0; e < this.itemsSource.length; e++) {
                        var t = document.createElement("div");
                        t.classList.add(this.prefix + "__dot"), this.dots.appendChild(t), this.dot.push(t)
                    }
                    return this.outer.appendChild(this.dots), !0
                }
            }, {
                key: "setDot",
                value: function() {
                    return this.prop.dot ? this.outer.classList.remove(this.prefix + "_dot-hidden") : this.outer.classList.add(this.prefix + "_dot-hidden"), !0
                }
            }, {
                key: "setDotActive",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active, t = 0; t < this.dot.length; t++) t === e ? this.dot[t].classList.add(this.prefix + "__dot_active") : this.dot[t].classList.remove(this.prefix + "__dot_active");
                    return !0
                }
            }, {
                key: "setPrevBool",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return "boolean" == typeof e && (this.prevBool = e, !0 === this.prevBool ? this.prev.classList.remove(this.prefix + "__control_disabled") : this.prev.classList.add(this.prefix + "__control_disabled"), !0)
                }
            }, {
                key: "setNextBool",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return "boolean" == typeof e && (this.nextBool = e, !0 === this.nextBool ? this.next.classList.remove(this.prefix + "__control_disabled") : this.next.classList.add(this.prefix + "__control_disabled"), !0)
                }
            }, {
                key: "setEvents",
                value: function() {
                    this.keydownEventIDs.push(this.prop.v.keydown.add({
                        target: "once",
                        key: [37],
                        do: this.keydownEvent.bind(this)
                    }, this.prop.keydown, this.prop.console)), this.keydownEventIDs.push(this.prop.v.keydown.add({
                        target: "once",
                        key: [38],
                        do: this.keydownEvent.bind(this)
                    }, this.prop.keydown, this.prop.console)), this.keydownEventIDs.push(this.prop.v.keydown.add({
                        target: "once",
                        key: [39],
                        do: this.keydownEvent.bind(this)
                    }, this.prop.keydown, this.prop.console)), this.keydownEventIDs.push(this.prop.v.keydown.add({
                        target: "once",
                        key: [40],
                        do: this.keydownEvent.bind(this)
                    }, this.prop.keydown, this.prop.console)), this.swipeEventIDs.push(this.prop.v.swipe.add({
                        target: "right",
                        outer: this.outerEvents,
                        k: 100,
                        do: this.swipeEvent.bind(this)
                    }, this.prop.swipe, this.prop.console)), this.swipeEventIDs.push(this.prop.v.swipe.add({
                        target: "left",
                        outer: this.outerEvents,
                        k: 100,
                        do: this.swipeEvent.bind(this)
                    }, this.prop.swipe, this.prop.console)), this.swipeEventIDs.push(this.prop.v.swipe.add({
                        target: "down",
                        outer: this.outerEvents,
                        k: 100,
                        do: this.swipeEvent.bind(this)
                    }, this.prop.swipe, this.prop.console)), this.swipeEventIDs.push(this.prop.v.swipe.add({
                        target: "up",
                        outer: this.outerEvents,
                        k: 100,
                        do: this.swipeEvent.bind(this)
                    }, this.prop.swipe, this.prop.console)), this.wheelEventIDs.push(this.prop.v.wheel.add({
                        target: "right",
                        outer: this.outerEvents,
                        k: .5,
                        do: this.wheelEvent.bind(this)
                    }, this.prop.wheel, this.prop.console)), this.wheelEventIDs.push(this.prop.v.wheel.add({
                        target: "left",
                        outer: this.outerEvents,
                        k: .5,
                        do: this.wheelEvent.bind(this)
                    }, this.prop.wheel, this.prop.console)), this.wheelEventIDs.push(this.prop.v.wheel.add({
                        target: "down",
                        outer: this.outerEvents,
                        k: .1,
                        do: this.wheelEvent.bind(this)
                    }, this.prop.wheel, this.prop.console)), this.wheelEventIDs.push(this.prop.v.wheel.add({
                        target: "up",
                        outer: this.outerEvents,
                        k: .1,
                        do: this.wheelEvent.bind(this)
                    }, this.prop.wheel, this.prop.console)), this.intervalEventIDs.push(this.prop.v.interval.add({
                        time: this.prop.time,
                        do: this.setNext.bind(this)
                    }, this.prop.interval, this.prop.console)), this.addEventListener({
                        el: this.prev,
                        target: "click",
                        do: this.setPrev.bind(this, "controlPrev")
                    }), this.addEventListener({
                        el: this.next,
                        target: "click",
                        do: this.setNext.bind(this, "controlNext")
                    });
                    for (var e = 0; e < this.dot.length; e++) this.addEventListener({
                        el: this.dot[e],
                        target: "click",
                        do: this.set.bind(this, e, !0, "dot", "none")
                    });
                    return !0
                }
            }, {
                key: "setEventsResize",
                value: function() {
                    null != this.resizeID && (this.prop.v.viewport.delete(this.resizeID), this.resizeID = null);
                    var e = this.prop.resizeTimeout;
                    e < this.prop.v.timeMin() && (e = this.prop.v.timeMin()), this.prop.resize && (this.resizeID = this.prop.v.viewport.add({
                        target: "wh",
                        name: this.name + " Resize",
                        do: function() {
                            this.setSize(), this.startSlide(this.active)
                        }.bind(this),
                        timeout: e
                    }))
                }
            }, {
                key: "keydownEvent",
                value: function(e) {
                    if ("h" === this.prop.direction)
                        if (37 === e.data.key[0]) this.setPrev("keydown");
                        else {
                            if (39 !== e.data.key[0]) return !1;
                            this.setNext("keydown")
                        }
                    if ("v" === this.prop.direction)
                        if (38 === e.data.key[0]) this.setPrev("keydown");
                        else {
                            if (40 !== e.data.key[0]) return !1;
                            this.setNext("keydown")
                        }
                    return !0
                }
            }, {
                key: "swipeEvent",
                value: function(e) {
                    if ("h" === this.prop.direction)
                        if ("right" === e.data.target) this.setPrev("swipe");
                        else {
                            if ("left" !== e.data.target) return !1;
                            this.setNext("swipe")
                        }
                    if ("v" === this.prop.direction)
                        if ("down" === e.data.target) this.setPrev("swipe");
                        else {
                            if ("up" !== e.data.target) return !1;
                            this.setNext("swipe")
                        }
                    return !0
                }
            }, {
                key: "wheelEvent",
                value: function(e) {
                    if ("h" === this.prop.direction)
                        if ("left" === e.data.target) this.setPrev("wheel");
                        else {
                            if ("right" !== e.data.target) return !1;
                            this.setNext("wheel")
                        }
                    if ("v" === this.prop.direction)
                        if ("up" === e.data.target) this.setPrev("swipe");
                        else {
                            if ("down" !== e.data.target) return !1;
                            this.setNext("swipe")
                        }
                    return !0
                }
            }, {
                key: "setKeydown",
                value: function() {
                    for (var e = 0; e < this.keydownEventIDs.length; e++) this.prop.v.keydown.turn(this.keydownEventIDs[e], this.prop.keydown, this.prop.console);
                    return !0
                }
            }, {
                key: "setSwipe",
                value: function() {
                    for (var e = 0; e < this.swipeEventIDs.length; e++) this.prop.v.swipe.turn(this.swipeEventIDs[e], this.prop.swipe, this.prop.console);
                    return !0
                }
            }, {
                key: "setWheel",
                value: function() {
                    for (var e = 0; e < this.wheelEventIDs.length; e++) this.prop.v.wheel.turn(this.wheelEventIDs[e], this.prop.wheel, this.prop.console);
                    return !0
                }
            }, {
                key: "setInterval",
                value: function() {
                    for (var e = 0; e < this.intervalEventIDs.length; e++) this.prop.v.interval.turn(this.intervalEventIDs[e], this.prop.interval, this.prop.console);
                    return !0
                }
            }, {
                key: "setIntervalOff",
                value: function() {
                    for (var e = 0; e < this.intervalEventIDs.length; e++) this.prop.v.interval.turn(this.intervalEventIDs[e], !1, this.prop.console);
                    return !0
                }
            }, {
                key: "setSize",
                value: function() {
                    return this.width = this.outer.clientWidth, this.height = this.outer.clientHeight, !0
                }
            }, {
                key: "getPrev",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                    if ((e -= 1) < 0) {
                        if (!this.prop.loop) return !1;
                        e = this.count - 1
                    }
                    return e
                }
            }, {
                key: "getNext",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                    if ((e += 1) > this.count - 1) {
                        if (!this.prop.loop) return !1;
                        e = 0
                    }
                    return e
                }
            }, {
                key: "setPrev",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "none";
                    if (!0 === this.animating || !0 !== this.prevBool) return !1;
                    var t = this.getPrev();
                    return !1 !== t && (this.set(t, !0, "prev", e), !0)
                }
            }, {
                key: "setNext",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "none";
                    if (!0 === this.animating || !0 !== this.nextBool) return !1;
                    var t = this.getNext();
                    return !1 !== t && (this.set(t, !0, "next", e), !0)
                }
            }, {
                key: "getActive",
                value: function() {
                    return this.active
                }
            }, {
                key: "set",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active,
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    2 < arguments.length && void 0 !== arguments[2] && arguments[2], 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                    if (this.prop.disable) return !1;
                    if (this.animating) return !1;
                    if ((e = parseInt(e)) < 0 || e > this.count - 1 || e === this.active & this.activeShown) return !1;
                    this.setIntervalOff(), setTimeout(this.setInterval.bind(this), this.prop.delay + this.prop.duration), this.setControlAbolished(e), t && (this.active = e);
                    for (var i = 0; i < this.itemsSource.length; i++) e === i ? this.itemsSource[i].classList.add(this.prefix + "__item_active") : this.itemsSource[i].classList.remove(this.prefix + "__item_active");
                    return this.setDotActive(e), !0
                }
            }, {
                key: "startSlide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active,
                        t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    return !(!0 === this.animating & !t) && (!(this.firstStart & !this.prop.start) && (!!this.activeShown && (this.active = e, this.firstStart = !1, this.activeShown = !0, this.outer.classList.add(this.prefix + "_showActive"), this.itemsSource[e].classList.add(this.prefix + "__item_active"), this.setDotActive(e), !0)))
                }
            }, {
                key: "showActive",
                value: function() {
                    return !this.activeShown && !this.animating && (this.activeShown = !0, this.outer.classList.add(this.prefix + "_showActive"), this.itemsSource[this.active].classList.add(this.prefix + "__item_active"), this.setDotActive(this.active), !0)
                }
            }, {
                key: "hideActive",
                value: function() {
                    return !(!this.activeShown || this.animating) && (this.activeShown = !1, this.outer.classList.remove(this.prefix + "_showActive"), this.itemsSource[this.active].classList.remove(this.prefix + "__item_active"), this.setDotActive(this.active), !0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!t && (this.itemsSource = [], !!this.checkItems() && (this.outer.classList.add("" + this.prefix), this.active = 0, this.animating = !1, this.firstStart = !0, this.activeShown = !1, this.prev = !1, this.next = !1, this.prevBool = !1, this.nextBool = !1, this.dots = !1, this.dot = [], this.keydownEventIDs = [], this.swipeEventIDs = [], this.wheelEventIDs = [], this.intervalEventIDs = [], this.resizeID = null, this.loopTypes = ["keydown", "wheel", "swipe", "controlPrev", "controlNext"], this.createControl(), this.setControl(), this.setControlAbolished(), this.createDot(), this.setDot(), this.setDotActive(this.active), this.setPrevBool(this.prop.prev), this.setNextBool(this.prop.next), this.setEvents(), this.setEventsResize(), this.setSize(), Object.assign(t, {
                        count: function() {
                            return e.count
                        },
                        animating: function() {
                            return e.animating
                        },
                        itemsSource: function() {
                            return e.itemsSource
                        },
                        getActive: this.getActive.bind(this),
                        setPrev: this.setPrevBool.bind(this),
                        setNext: this.setNextBool.bind(this),
                        set: this.set.bind(this),
                        prev: this.setPrev.bind(this),
                        next: this.setNext.bind(this),
                        getPrev: this.getPrev.bind(this),
                        getNext: this.getNext.bind(this),
                        showActive: this.showActive.bind(this),
                        hideActive: this.hideActive.bind(this),
                        setSize: this.setSize.bind(this),
                        startSlide: this.startSlide.bind(this)
                    })))
                }
            }]), r
        }(), p.prototype.SliderCanvas = function(e) {
            function n() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, n);
                var t = l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                for (var i in t.prefix = "" + t.prefix, t.prop = Object.assign(t.prop, {
                        animations: {
                            prev: [0, .5],
                            next: [.5, 1]
                        },
                        resetAnimatingTimeout: 0,
                        parallaxX: 0,
                        parallaxY: 0,
                        parallaxPrev: !1,
                        hidePrev: !0,
                        fill: "transparent",
                        reverse: !1,
                        zoom: !1,
                        zoomHTML: !1,
                        zoomK: 2,
                        zoomAnimation: 350,
                        tapVideo: !1,
                        tapVideoText: "Tap and hold",
                        tapVideoDuration: 250,
                        asyncLoad: !1
                    }), e) t.prop[i] = e[i];
                return t.targets = ["prev", "next", "before", "after", "show", "hide", "start", "firstStart", "zoomGain", "zoomDiscard"], t
            }
            return h(n, p.prototype.Slider), o(n, [{
                key: "check",
                value: function() {
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "check", this).call(this)) return !1;
                    var e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["animations", "object"],
                            ["resetAnimatingTimeout", "integer"],
                            ["parallaxX", "number"],
                            ["parallaxY", "number"],
                            ["parallaxPrev", "boolean"],
                            ["hidePrev", "boolean"],
                            ["fill", "string"],
                            ["reverse", "boolean"],
                            ["zoom", "boolean"],
                            ["zoomHTML", "boolean"],
                            ["zoomK", "number"],
                            ["zoomAnimation", "integer"],
                            ["tapVideo", "boolean"],
                            ["tapVideoText", "string"],
                            ["tapVideoDuration", "integer"],
                            ["asyncLoad", "boolean"]
                        ]
                    });
                    return !!e && !!(e = this.checkTypes({
                        obj: this.prop.animations,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["prev", "numberArray", {
                                count: 2
                            }],
                            ["next", "numberArray", {
                                count: 2
                            }]
                        ]
                    }))
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "changeProp", this).call(this, e) && (this.setMaxParallax(), this.zoomSetProp(), this.tapSet(), !0)
                }
            }, {
                key: "zoomInit",
                value: function() {
                    this.zoomHTML = document.createElement("div"), this.zoomHTML.classList.add(this.prefix + "__zoom"), this.outer.appendChild(this.zoomHTML), this.zoomBg = document.createElement("div"), this.zoomBg.classList.add("bg-image"), this.zoomHTML.appendChild(this.zoomBg), this.zoomButton = document.createElement("div"), this.zoomButton.classList.add(this.prefix + "__zoom-button"), this.outer.appendChild(this.zoomButton), this.zoomSetProp()
                }
            }, {
                key: "zoomEvents",
                value: function() {
                    for (var e = 0; e < this.canvas.length; e++) this.addEventListener({
                        target: "click",
                        el: this.canvas[e],
                        do: function() {
                            this.prop.zoomHTML || this.zoomCanvasClick()
                        }.bind(this)
                    }), this.addEventListener({
                        target: "mousemove",
                        el: this.canvas[e],
                        do: function(e) {
                            this.prop.zoomHTML || (this.zoomX = e.offsetX, this.zoomY = e.offsetY)
                        }.bind(this)
                    });
                    this.addEventListener({
                        target: "click",
                        el: this.zoomButton,
                        do: this.zoomCanvasClick.bind(this)
                    }), this.addEventListener({
                        target: "scroll",
                        el: this.zoomHTML,
                        do: this.zoomScrollEvent.bind(this)
                    })
                }
            }, {
                key: "zoomScrollEvent",
                value: function() {
                    var e = this.zoomHTML.scrollLeft / (this.zoomHTML.scrollWidth - this.zoomHTML.clientWidth),
                        t = this.zoomHTML.scrollTop / (this.zoomHTML.scrollHeight - this.zoomHTML.clientHeight);
                    this.zoomX = e * this.outer.clientWidth, this.zoomY = t * this.outer.clientHeight
                }
            }, {
                key: "zoomSetProp",
                value: function() {
                    this.prop.zoom ? this.outer.classList.add(this.prefix + "_zoom") : this.outer.classList.remove(this.prefix + "_zoom"), this.prop.zoomHTML ? this.outer.classList.add(this.prefix + "_zoom_html") : this.outer.classList.remove(this.prefix + "_zoom_html"), this.zoomResize()
                }
            }, {
                key: "zoomResize",
                value: function() {
                    if (this.zoomBg) {
                        var e = this.outer.clientWidth * this.prop.zoomK,
                            t = this.outer.clientHeight * this.prop.zoomK;
                        this.zoomBg.style.width = e + "px", this.zoomBg.style.height = t + "px"
                    }
                }
            }, {
                key: "zoomScroll",
                value: function() {
                    $(this.zoomHTML).animate({
                        scrollTop: (this.zoomBg.clientHeight - this.zoomHTML.clientHeight) / this.prop.zoomK,
                        scrollLeft: (this.zoomBg.clientWidth - this.zoomHTML.clientWidth) / this.prop.zoomK
                    }, 0)
                }
            }, {
                key: "zoomCanvasClick",
                value: function(e) {
                    if (!this.prop.zoom || this.firstStartSlide || this.zoomAnimating) return !1;
                    if (this.zoomed) {
                        this.zoomedHover = !1, this.zoomAnimating = !0, this.zoomButton.classList.remove(this.prefix + "__zoom-button_active");
                        var t = new this.Animate({
                            console: this.prop.console,
                            duration: this.prop.zoomAnimation,
                            bezier: this.prop.bezier,
                            do: this.animateCanvas.bind(this, {
                                ctx: 0,
                                num: this.active,
                                action: "zoomDiscard",
                                do: function() {
                                    this.zoomed = !1, this.animating = !1, this.zoomAnimating = !1, this.zoomHTML.classList.remove(this.prefix + "__zoom_shown"), this.startSlide()
                                }.bind(this)
                            })
                        });
                        (t = t.init()).run(), this.launchEventsByTarget("zoomDiscard")
                    } else {
                        this.prop.zoomHTML & !this.zoomHTML.classList.contains(this.prefix + "__zoom_shown") && (this.zoomX = this.outer.clientWidth / 2, this.zoomY = this.outer.clientHeight / 2), this.zoomAnimating = !0, this.zoomButton.classList.add(this.prefix + "__zoom-button_active");
                        var i = new this.Animate({
                            console: this.prop.console,
                            duration: this.prop.zoomAnimation,
                            bezier: this.prop.bezier,
                            do: this.animateCanvas.bind(this, {
                                ctx: 0,
                                num: this.active,
                                action: "zoomGain",
                                do: function() {
                                    this.zoomed = !0, this.zoomedHover = !0, this.zoomAnimating = !1, this.zoomLoop(), this.zoomHTML.classList.add(this.prefix + "__zoom_shown"), this.zoomScroll(0)
                                }.bind(this)
                            })
                        });
                        (i = i.init()).run(), this.launchEventsByTarget("zoomGain")
                    }
                }
            }, {
                key: "zoomLoop",
                value: function() {
                    this.animateCanvas({
                        ctx: 0,
                        num: this.active,
                        action: "zoomGain",
                        do: function() {}
                    }, 1, 1), this.zoomedHover && window.requestAnimationFrame(this.zoomLoop.bind(this))
                }
            }, {
                key: "tapInit",
                value: function() {
                    return this.isTap = !1, this.timeTap = 0, this.tap = document.createElement("div"), this.tap.classList.add(this.prefix + "__tap"), this.outer.appendChild(this.tap), this.videoOuter = document.createElement("div"), this.videoOuter.classList.add(this.prefix + "__video"), this.outer.appendChild(this.videoOuter), !0
                }
            }, {
                key: "tapSet",
                value: function() {
                    return this.prop.tapVideo ? this.outer.classList.remove(this.prefix + "_tap-hidden") : this.outer.classList.add(this.prefix + "_tap-hidden"), this.tap.innerHTML = "<div></div><span>" + this.prop.tapVideoText + "</span>", !0
                }
            }, {
                key: "tapShowHide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                    null == this.videos[e] ? this.outer.classList.add(this.prefix + "_tap-hide") : this.outer.classList.remove(this.prefix + "_tap-hide")
                }
            }, {
                key: "tapEvents",
                value: function() {
                    return this.tap.addEventListener("touchstart", this.tapEventOn.bind(this)), this.tap.addEventListener("touchend", this.tapEventOff.bind(this)), this.tap.addEventListener("mousedown", this.tapEventOn.bind(this)), this.tap.addEventListener("mouseup", this.tapEventOff.bind(this)), !0
                }
            }, {
                key: "tapEventOn",
                value: function() {
                    var e = this;
                    this.animating || this.isTap || (this.isTap = !0, this.tap.classList.add(this.prefix + "__tap_active"), setTimeout(function() {
                        e.isTap && e.tapRender()
                    }, this.prop.tapVideoDuration))
                }
            }, {
                key: "tapEventOff",
                value: function() {
                    this.isTap = !1, this.tap.classList.remove(this.prefix + "__tap_active"), this.tapRender()
                }
            }, {
                key: "tapRender",
                value: function() {
                    var i = this.videos[this.active];
                    if (null != i)
                        if (this.isTap) {
                            i.load();
                            var e = i.play();
                            void 0 !== e && e.then(function() {}).catch(function(e) {}.bind(this)), i.classList.add("active")
                        } else {
                            var t = i.pause();
                            void 0 !== t && t.then(function() {}).catch(function(e) {
                                var t = this;
                                setTimeout(function() {
                                    t.isTap || (i.currentTime = 0)
                                }, 350)
                            }.bind(this)), i.classList.remove("active")
                        }
                }
            }, {
                key: "createCanvas",
                value: function() {
                    for (var e = 0; e < this.canvasAmount; e++) {
                        var t = document.createElement("canvas");
                        this.outer.appendChild(t), this.canvas.push(t)
                    }
                    for (var i = 0; i < this.canvas.length; i++) {
                        this.ctx.push(this.canvas[i].getContext("2d"));
                        var r = this.ctx[this.ctx.length - 1];
                        r.mozImageSmoothingEnabled = !1, r.webkitImageSmoothingEnabled = !1, r.msImageSmoothingEnabled = !1, r.imageSmoothingEnabled = !1
                    }
                    for (var s = 0; s < this.canvasAmount; s++) {
                        var o = document.createElement("canvas");
                        this.canvasAdditional.push(o)
                    }
                    for (var n = 0; n < this.canvasAdditional.length; n++) {
                        this.ctxAdditional.push(this.canvasAdditional[n].getContext("2d"));
                        var a = this.ctxAdditional[this.ctxAdditional.length - 1];
                        a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1, a.imageSmoothingEnabled = !1
                    }
                    return !0
                }
            }, {
                key: "createImages",
                value: function() {
                    for (var e = 0; e < this.itemsSource.length; e++) {
                        var t = this.itemsSource[e].querySelector("img");
                        if (null !== t) {
                            var i = t.getAttribute("src");
                            if (null === i || 0 === i.length) continue;
                            var r = new Image;
                            r[this.data.loaded] = !1, r.addEventListener("load", function(e) {
                                e[this.data.loaded] = !0, this.loaded++, this.startSlide(this.active)
                            }.bind(this, r), !1), r.src = i, this.images.push(r), this.imagesTotal.push(r);
                            var s = t.getAttribute(this.data.imageTablet);
                            if (null === s || 0 === s.length) this.imagesTablet.push(r);
                            else {
                                var o = new Image;
                                o[this.data.loaded] = !1, o.addEventListener("load", function(e) {
                                    e[this.data.loaded] = !0, this.loaded++, this.startSlide(this.active)
                                }.bind(this, o), !1), o.src = s, this.imagesTablet.push(o), this.imagesTotal.push(o)
                            }
                            var n = t.getAttribute(this.data.imageMobile);
                            if (null === n || 0 === n.length) this.imagesMobile.push(r);
                            else {
                                var a = new Image;
                                a[this.data.loaded] = !1, a.addEventListener("load", function(e) {
                                    e[this.data.loaded] = !0, this.loaded++, this.startSlide(this.active)
                                }.bind(this, a), !1), a.src = n, this.imagesMobile.push(a), this.imagesTotal.push(a)
                            }
                            var l = this.itemsSource[e].querySelector("video");
                            null !== l & !(("firefox" == this.prop.v.browser() || "opera" == this.prop.v.browser()) & !this.prop.v.desktop()) ? (l.setAttribute("playsinline", "playsinline"), l.setAttribute("preload", "metadata"), l.setAttribute("loop", "loop"), l.setAttribute("muted", ""), l.setAttribute("autoplay", ""), l.muted = !0, l[this.data.loaded] = !1, this.videos.push(l), l.addEventListener("loadedmetadata", function(e) {
                                e[this.data.loaded] = !0, this.loadedVideos++, this.startSlide(this.active)
                            }.bind(this, l), !1), l.load(), this.videoOuter.appendChild(l)) : this.videos.push(null)
                        }
                    }
                    return !0
                }
            }, {
                key: "setEvents",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setEvents", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setSize", this).call(this)) return !1;
                    if (this.videos)
                        for (var e = 0; e < this.videos.length; e++)
                            if (null != this.videos[e]) {
                                var t = this.imageSize({
                                    img: this.videos[e],
                                    width: this.width * this.maxParallax,
                                    height: this.height * this.maxParallax,
                                    maxWidth: this.width,
                                    maxHeight: this.height
                                });
                                this.videos[e].style.top = t.y + "px", this.videos[e].style.left = t.x + "px", this.videos[e].style.height = t.imageHeight + "px", this.videos[e].style.width = t.imageWidth + "px"
                            }
                    this.dpr = this.prop.v.dpr();
                    var i = Math.floor(this.width * this.dpr),
                        r = Math.floor(this.height * this.dpr);
                    this.width === i && this.height === r || (this.width = i, this.height = r);
                    for (var s = 0; s < this.canvas.length; s++) this.canvas[s].width = this.width, this.canvas[s].height = this.height;
                    return this.imagesCurrent = this.images, this.prop.v.tablet() && (this.imagesCurrent = this.imagesTablet), this.prop.v.mobile() && (this.imagesCurrent = this.imagesMobile), !0
                }
            }, {
                key: "setMaxParallax",
                value: function() {
                    return this.maxParallax = 1 + 2 * Math.max(Math.abs(this.prop.parallaxX), Math.abs(this.prop.parallaxY)), !0
                }
            }, {
                key: "startSlide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active,
                        t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (this.prop.asyncLoad) {
                        if (!this.imagesCurrent[e][this.data.loaded]) return !1;
                        var i = this.videos[e];
                        if (null != i && !i[this.data.loaded]) return !1
                    } else if (this.loaded < this.countImages || this.loadedVideos < this.countVideos) return !1;
                    if (this.setSize(), !a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "startSlide", this).call(this, e, t)) return !1;
                    this.ctx[0].save(), this.ctx[0].beginPath(), this.ctx[0].clearRect(0, 0, this.width, this.height), this.ctx[0].rect(0, 0, this.width, this.height), this.ctx[0].fillStyle = this.prop.fill, this.ctx[0].fillRect(0, 0, this.width, this.height);
                    var r, s, o = this.imagesCurrent[this.active];
                    return s = o, r = this.imageSize({
                        img: s,
                        width: this.width * this.maxParallax,
                        height: this.height * this.maxParallax,
                        maxWidth: this.width,
                        maxHeight: this.height
                    }), this.imageInfo = {
                        outer: {
                            width: this.width * this.maxParallax,
                            height: this.height * this.maxParallax,
                            maxWidth: this.width,
                            maxHeight: this.height
                        },
                        size: r
                    }, this.ctx[0].drawImage(o, 0, 0, o.width, o.height, r.x, r.y, r.imageWidth, r.imageHeight), this.ctx[0].closePath(), this.ctx[0].restore(), this.ctx[1].save(), this.ctx[1].beginPath(), this.ctx[1].clearRect(0, 0, this.width, this.height), this.ctx[1].closePath(), this.ctx[1].restore(), this.ctx[2].save(), this.ctx[2].beginPath(), this.ctx[2].clearRect(0, 0, this.width, this.height), this.ctx[2].closePath(), this.ctx[2].restore(), this.tapShowHide(e), this.launchEventsByTarget("start"), this.firstStartSlide && this.launchEventsByTarget("firstStart"), this.firstStartSlide = !1, !(this.animating = !1)
                }
            }, {
                key: "set",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active,
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "next",
                        r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "none",
                        s = this.active;
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "set", this).call(this, e, !1, i, r)) return !1;
                    if (this.isTap) return !1;
                    this.tapShowHide(e);
                    var o = {
                        prev: {
                            duration: (this.prop.animations.prev[1] - this.prop.animations.prev[0]) * this.prop.duration,
                            delay: this.prop.animations.prev[0] * this.prop.duration,
                            reversed: !1
                        },
                        next: {
                            duration: (this.prop.animations.next[1] - this.prop.animations.next[0]) * this.prop.duration,
                            delay: this.activeShown ? this.prop.animations.next[0] * this.prop.duration : 0,
                            reversed: !1
                        }
                    };
                    return this.loopTypes.includes(r) ? "prev" === i ? (o.prev.reversed = !0, o.next.reversed = !0) : "next" === i && e < s && (o.prev.reversed = !1, o.next.reversed = !1) : e < s && (o.prev.reversed = !0, o.next.reversed = !0), this.launchEventsByTarget("before", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }), s < e ? this.launchEventsByTarget("next", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }) : this.launchEventsByTarget("prev", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }), this.animating = !0, setTimeout(function() {
                        if (!this.activeShown) return t && (this.active = e), this.animating = !1, this.showActive();
                        this.animate({
                            duration: o.prev.duration,
                            delay: o.prev.delay,
                            ctx: 1,
                            num: s,
                            action: "hide",
                            reversed: o.prev.reversed
                        }), this.animate({
                            duration: o.next.duration,
                            delay: o.next.delay,
                            ctx: 2,
                            num: e,
                            action: "show",
                            reversed: o.next.reversed,
                            do: function(e) {
                                var t = this;
                                this.launchEventsByTarget("after", {
                                    prev: this.active,
                                    next: e,
                                    dir: i,
                                    type: r
                                }), this.active = e, setTimeout(function() {
                                    t.animating = !1, t.startSlide(e)
                                }, this.prop.v.timeMin() + this.prop.resetAnimatingTimeout)
                            }.bind(this, e)
                        })
                    }.bind(this), this.prop.delay), !0
                }
            }, {
                key: "showActive",
                value: function() {
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "showActive", this).call(this)) return !1;
                    var e = (this.prop.animations.next[1] - this.prop.animations.next[0]) * this.prop.duration;
                    return this.animate({
                        duration: e,
                        ctx: 1,
                        num: this.active,
                        action: "showActive",
                        do: function() {
                            this.firstStart && (this.firstStart = !1), this.animating = !1, this.startSlide(), this.launchEventsByTarget("show")
                        }.bind(this)
                    }), !0
                }
            }, {
                key: "hideActive",
                value: function() {
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "hideActive", this).call(this)) return !1;
                    var e = (this.prop.animations.next[1] - this.prop.animations.next[0]) * this.prop.duration;
                    return this.animate({
                        duration: e,
                        ctx: 1,
                        num: this.active,
                        action: "hideActive",
                        reversed: !1,
                        do: function() {
                            this.animating = !1, this.launchEventsByTarget("hide")
                        }.bind(this)
                    }), !0
                }
            }, {
                key: "animate",
                value: function(e) {
                    var t = {
                        duration: this.prop.duration,
                        delay: 0,
                        ctx: 0,
                        num: this.active,
                        action: "show",
                        reversed: !1,
                        do: function() {}
                    };
                    for (var i in e) t[i] = e[i];
                    this.ctx[0].save(), this.ctx[0].beginPath(), this.ctx[0].clearRect(0, 0, this.width, this.height), this.ctx[0].closePath(), this.ctx[0].restore(), this.animateCanvas({
                        ctx: t.ctx,
                        num: t.num,
                        action: t.action,
                        reversed: t.reversed,
                        do: t.do
                    }, 0, 0);
                    var r = new this.Animate({
                        console: this.prop.console,
                        duration: parseInt(t.duration),
                        delay: parseInt(t.delay),
                        bezier: this.prop.bezier,
                        do: this.animateCanvas.bind(this, {
                            ctx: t.ctx,
                            num: t.num,
                            action: t.action,
                            reversed: t.reversed,
                            do: t.do
                        })
                    });
                    return r = r.init(), r.run(), !0
                }
            }, {
                key: "animateCanvas",
                value: function(e, t, i) {
                    var r = {};
                    for (var s in e) r[s] = e[s];
                    this.animating = !0;
                    var o = 1;
                    "zoomGain" == r.action ? (o = (this.prop.zoomK - 1) * i, o += 1) : "zoomDiscard" == r.action && (o = (this.prop.zoomK - 1) * (1 - i), o += 1);
                    var n, a, l = this.imagesCurrent[r.num];
                    a = l, n = this.imageSize({
                        img: a,
                        width: this.width * this.maxParallax * o,
                        height: this.height * this.maxParallax * o,
                        maxWidth: this.width,
                        maxHeight: this.height
                    }), this.prop.reverse && (r.reversed ? r.reversed = !1 : r.reversed = !0);
                    var h = void 0;
                    h = "show" === r.action || "showActive" === r.action ? 1 - i : this.prop.parallaxPrev || "hideActive" === r.action ? i : 0, "zoomDiscard" !== r.action && "zoomGain" !== r.action || (h = 0);
                    var d = this.prop.parallaxX,
                        c = this.prop.parallaxY;
                    "hide" !== r.action && "hideActive" !== r.action || (d *= -1, c *= -1), r.reversed && (d *= -1, c *= -1);
                    var u = d * this.width * h,
                        p = c * this.height * h,
                        v = n.x - u,
                        f = n.y - p,
                        g = void 0,
                        m = void 0,
                        y = 0,
                        b = 0,
                        w = 0,
                        _ = 0;
                    if ("zoomGain" !== r.action & "zoomDiscard" !== r.action) "h" === this.prop.direction ? (g = this.width * i, m = this.height, r.reversed && (y = this.width - g), "hide" !== r.action && "hideActive" !== r.action || (g = this.width * (1 - i), y = this.width - g, "hide" === r.action && (this.prop.hidePrev || (g = this.width, y = 0)), r.reversed && (y = 0))) : (g = this.width, m = this.height * i, r.reversed && (b = this.height - m), m = this.height * i, g = this.width, r.reversed && (b = this.height - m), "hide" !== r.action && "hideActive" !== r.action || (m = this.height * (1 - i), b = this.height - m, "hide" === r.action && (this.prop.hidePrev || (m = this.height, b = 0)), r.reversed && (b = 0)));
                    else {
                        var x = this.zoomX / this.outer.clientWidth,
                            k = this.zoomY / this.outer.clientHeight,
                            L = i;
                        "zoomDiscard" == r.action && (L = 1 - L), .5 != x && (w = 1 - x / .5, w *= this.width * (this.prop.zoomK - 1) / 2, v += w *= L), .5 != k && (_ = 1 - k / .5, _ *= this.width * (this.prop.zoomK - 1) / 2, f += _ *= L), g = this.width, m = this.height
                    }
                    return this.ctx[r.ctx].save(), this.ctx[r.ctx].beginPath(), this.ctx[r.ctx].clearRect(0, 0, this.width, this.height), this.ctx[r.ctx].rect(y, b, g, m), this.ctx[r.ctx].closePath(), this.ctx[r.ctx].clip(), this.ctx[r.ctx].fillStyle = this.prop.fill, this.ctx[r.ctx].fillRect(0, 0, this.width, this.height), this.ctx[r.ctx].drawImage(l, 0, 0, l.width, l.height, v, f, n.imageWidth, n.imageHeight), this.ctx[r.ctx].restore(), 1 === t && r.do.call(this), !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.maxParallax = 0, this.canvas = [], this.canvasAdditional = [];
                    var t = a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "init", this).call(this);
                    if (!t) return !1;
                    this.data = {
                        imageTablet: "data-" + this.prefix + "-imageTablet",
                        imageMobile: "data-" + this.prefix + "-imageMobile",
                        loaded: "data-" + this.prefix + "-loaded"
                    }, this.canvasAmount = 3, this.ctx = [], this.ctxAdditional = [], this.videos = [], this.loadedVideos = 0, this.images = [], this.imagesCurrent = [], this.imagesTotal = [], this.imagesTablet = [], this.imagesMobile = [], this.videos = [], this.loaded = 0, this.count = 0, this.width = 0, this.height = 0, this.dpr = 1, this.imageInfo = null, this.firstStartSlide = !0, this.prop.start && (this.activeShown = !0), this.zoomBg = !1, this.zoomed = !1, this.zoomedHover = !1, this.zoomX = 0, this.zoomY = 0, this.zoomAnimating = !1, this.tapInit(), this.tapSet(), this.tapShowHide(), this.tapEvents(), this.createCanvas(), this.createImages(), this.count = this.images.length, this.countImages = this.imagesTotal.length;
                    for (var i = this.countVideos = 0; i < this.videos.length; i++) null != this.videos[i] && this.countVideos++;
                    return this.zoomInit(), this.zoomEvents(), this.setMaxParallax(), this.setSize(), this.startSlide(), Object.assign(t, {
                        images: function() {
                            return e.images
                        },
                        imageInfo: function() {
                            return e.imageInfo
                        },
                        firstStart: function() {
                            return e.firstStartSlide
                        },
                        zoom: this.zoomCanvasClick.bind(this)
                    })
                }
            }]), n
        }(), p.prototype.SliderContent = function(e) {
            function n() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, n);
                var t = l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                for (var i in t.prefixAdditional = t.prefix + "Content", e) t.prop[i] = e[i];
                return t.targets = ["prev", "next", "before", "after", "show", "hide"], t
            }
            return h(n, p.prototype.Slider), o(n, [{
                key: "check",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "check", this).call(this)
                }
            }, {
                key: "checkItems",
                value: function() {
                    var e = this.outer.querySelector("." + this.prefixAdditional + "__items");
                    return null !== e && (this.itemsSource = e.querySelectorAll("." + this.prefixAdditional + "__item"), 0 !== this.itemsSource.length)
                }
            }, {
                key: "createControl",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "createControl", this).call(this) && (this.prev.classList.add(this.prefixAdditional + "__control"), this.prev.classList.add(this.prefixAdditional + "__control_prev"), this.next.classList.add(this.prefixAdditional + "__control"), this.next.classList.add(this.prefixAdditional + "__control_next"), !0)
                }
            }, {
                key: "setControl",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setControl", this).call(this) && (this.prop.control ? this.outer.classList.remove(this.prefixAdditional + "_control-hidden") : this.outer.classList.add(this.prefixAdditional + "_control-hidden"), !0)
                }
            }, {
                key: "createDot",
                value: function() {
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "createDot", this).call(this)) return !1;
                    this.dots.classList.add(this.prefixAdditional + "__dots");
                    for (var e = 0; e < this.dot.length; e++) this.dot[e].classList.add(this.prefixAdditional + "__dot");
                    return !0
                }
            }, {
                key: "setDot",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setDot", this).call(this) && (this.prop.dot ? this.outer.classList.remove(this.prefixAdditional + "_dot-hidden") : this.outer.classList.add(this.prefixAdditional + "_dot-hidden"), !0)
                }
            }, {
                key: "setDotActive",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setDotActive", this).call(this, e)) return !1;
                    for (var t = 0; t < this.dot.length; t++) t === e ? this.dot[t].classList.add(this.prefixAdditional + "__dot_active") : this.dot[t].classList.remove(this.prefixAdditional + "__dot_active");
                    return !0
                }
            }, {
                key: "setPrevBool",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setPrevBool", this).call(this, e) && (!0 === this.prevBool ? this.prev.classList.remove(this.prefixAdditional + "__control_disabled") : this.prev.classList.add(this.prefixAdditional + "__control_disabled"), !0)
                }
            }, {
                key: "setNextBool",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setNextBool", this).call(this, e) && (!0 === this.nextBool ? this.next.classList.remove(this.prefixAdditional + "__control_disabled") : this.next.classList.add(this.prefixAdditional + "__control_disabled"), !0)
                }
            }, {
                key: "set",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active,
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "next",
                        r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "none",
                        s = this.active;
                    if (!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "set", this).call(this, e, !1, i, r)) return !1;
                    0 === (e = parseInt(e)) & !1 === this.prop.loop ? this.prev.classList.add(this.prefixAdditional + "__control_abolished") : this.prev.classList.remove(this.prefixAdditional + "__control_abolished"), e === this.count - 1 & !1 === this.prop.loop ? this.next.classList.add(this.prefixAdditional + "__control_abolished") : this.next.classList.remove(this.prefixAdditional + "__control_abolished");
                    for (var o = 0; o < this.itemsSource.length; o++) e === o ? this.itemsSource[o].classList.add(this.prefixAdditional + "__item_active") : this.itemsSource[o].classList.remove(this.prefixAdditional + "__item_active");
                    return this.launchEventsByTarget("before", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }), this.loopTypes.includes(r) ? "prev" === i ? this.launchEventsByTarget("prev", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }) : this.launchEventsByTarget("next", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }) : s < e ? this.launchEventsByTarget("next", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }) : this.launchEventsByTarget("prev", {
                        prev: s,
                        next: e,
                        dir: i,
                        type: r
                    }), this.animating = !0, this.activeShown ? (setTimeout(function() {
                        this.launchEventsByTarget("after", {
                            prev: this.active,
                            next: e,
                            dir: i,
                            type: r
                        }), t && (this.active = e), this.animating = !1, this.startSlide(e)
                    }.bind(this), this.prop.delay + this.prop.duration), !0) : (t && (this.active = e), this.animating = !1, this.showActive())
                }
            }, {
                key: "startSlide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.active;
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "startSlide", this).call(this, e) && (this.outer.classList.add(this.prefixAdditional + "_showActive"), this.itemsSource[e].classList.add(this.prefixAdditional + "__item_active"), !0)
                }
            }, {
                key: "showActive",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "showActive", this).call(this) && (this.outer.classList.add(this.prefixAdditional + "_showActive"), this.itemsSource[this.active].classList.add(this.prefixAdditional + "__item_active"), this.animating = !0, setTimeout(function() {
                        this.firstStart && (this.firstStart = !1), this.startSlide(), this.animating = !1, this.launchEventsByTarget("show")
                    }.bind(this), this.prop.duration), !0)
                }
            }, {
                key: "hideActive",
                value: function() {
                    return !!a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "hideActive", this).call(this) && (this.outer.classList.remove(this.prefixAdditional + "_showActive"), this.itemsSource[this.active].classList.remove(this.prefixAdditional + "__item_active"), this.animating = !0, setTimeout(function() {
                        this.animating = !1, this.launchEventsByTarget("hide")
                    }.bind(this), this.prop.duration), !0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = a(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "init", this).call(this);
                    return !!e && (this.outer.classList.add("" + this.prefixAdditional), this.count = this.itemsSource.length, this.prop.start && (this.activeShown = !0), this.startSlide(), e)
                }
            }]), n
        }(), p.prototype.Cursor = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "cursor", t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        selectorAnchor: "." + t.prefix + "__hover",
                        k: .3,
                        run: !0,
                        hideDefault: !1,
                        width: 36,
                        height: 36,
                        radius: 18,
                        helpers: 0,
                        moveInner: {
                            on: !0,
                            k: .1,
                            max: 1e3,
                            ignore: .1
                        }
                    }), e) t.prop[i] = e[i];
                return t.targets = [], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    var e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["selectorAnchor", "dom"],
                            ["k", "number"],
                            ["run", "boolean"],
                            ["hideDefault", "boolean"],
                            ["width", "integer"],
                            ["height", "integer"],
                            ["radius", "integer"],
                            ["helpers", "integer"],
                            ["moveInner", "object"]
                        ]
                    });
                    return !!e && (!!(e = this.checkTypes({
                        obj: this.prop.moveInner,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["on", "boolean"],
                            ["k", "number"],
                            ["max", "number"],
                            ["ignore", "number"]
                        ]
                    })) && (this.outer = this.prop.v.document().querySelector(this.prop.selector), this.prop.hideDefault ? this.outer.classList.add(this.prefix + "_hideDefault") : this.outer.classList.remove(this.prefix + "_hideDefault"), !0))
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    var t = this.prop.run;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.prop.run !== t && this.run(), !0)
                }
            }, {
                key: "create",
                value: function() {
                    this.outer.classList.add("" + this.prefix), this.element = document.createElement("div"), this.element.classList.add(this.prefix + "__element"), this.outer.appendChild(this.element), this.border = document.createElement("div"), this.border.classList.add(this.prefix + "__border"), this.element.appendChild(this.border);
                    for (var e = 0; e < this.prop.helpers; e++) {
                        var t = document.createElement("div");
                        t.classList.add(this.prefix + "__helper"), t.classList.add(this.prefix + "__helper_" + e), this.element.appendChild(t), this.helpers.push(t)
                    }
                    return !0
                }
            }, {
                key: "setEvents",
                value: function() {
                    return this.addEventListener({
                        el: this.outer,
                        target: "mousemove",
                        do: this.mousemove.bind(this)
                    }), this.addEventListener({
                        el: window,
                        target: "mouseover",
                        do: this.mouseover.bind(this)
                    }), this.addEventListener({
                        el: window,
                        target: "mouseout",
                        do: this.mouseout.bind(this)
                    }), this.addEventListener({
                        el: this.prop.v.document(),
                        target: "mousedown",
                        do: this.mousedown.bind(this)
                    }), this.addEventListener({
                        el: this.prop.v.document(),
                        target: "mouseup",
                        do: this.mouseup.bind(this)
                    }), !0
                }
            }, {
                key: "mousemove",
                value: function(e) {
                    this.coords.x = e.x, this.coords.y = e.y, this.shown || (this.shown = !0, this.element.classList.add(this.prefix + "__element_shown"), this.animate(!0))
                }
            }, {
                key: "mouseover",
                value: function(e) {
                    this.element.classList.add(this.prefix + "__element_shown")
                }
            }, {
                key: "mouseout",
                value: function(e) {
                    this.element.classList.remove(this.prefix + "__element_shown")
                }
            }, {
                key: "mousedown",
                value: function(e) {
                    this.element.classList.add(this.prefix + "__element_click")
                }
            }, {
                key: "mouseup",
                value: function(e) {
                    this.element.classList.remove(this.prefix + "__element_click")
                }
            }, {
                key: "updateElements",
                value: function() {
                    for (var e = this.prop.v.document().querySelectorAll(this.prop.selectorAnchor), t = [], i = 0; i < this.elements.length; i++) this.childOf(this.elements[i], this.outer) && t.push(this.elements[i]);
                    this.elements = t;
                    for (var r = 0; r < e.length; r++) {
                        null == e[r].getAttribute(this.data.proceeded) && (e[r][this.data.data] = {
                            hovered: !1,
                            inner: e[r].parentNode.querySelector("." + this.prefix + "__inner"),
                            bounding: {},
                            x: 0,
                            y: 0,
                            xCurrent: 0,
                            yCurrent: 0,
                            moveInnerMax: null
                        }, e[r][this.data.data].inner && (e[r][this.data.data].bounding = e[r].getBoundingClientRect()), e[r].getAttribute(this.data.moveInnerMax) && (e[r][this.data.data].moveInnerMax = parseFloat(e[r].getAttribute(this.data.moveInnerMax))), this.elements.push(e[r]), this.addEventListener({
                            el: e[r],
                            target: "mouseover",
                            do: this.mouseoverAnchor.bind(this, e[r])
                        }), this.addEventListener({
                            el: e[r],
                            target: "mouseout",
                            do: this.mouseoutAnchor.bind(this, e[r])
                        }), e[r].setAttribute(this.data.proceeded, "true"))
                    }
                }
            }, {
                key: "mouseoverAnchor",
                value: function(e, t) {
                    if (this.prop.run) {
                        this.hovered = !0, e[this.data.data].hovered = !0;
                        var i = e.getAttribute(this.data.width),
                            r = e.getAttribute(this.data.height),
                            s = e.getAttribute(this.data.borderColor),
                            o = e.getAttribute(this.data.class);
                        i ? (i = parseInt(i), this.pos.width = i) : this.pos.width = e.getBoundingClientRect().width, r ? (r = parseInt(r), this.pos.height = r) : this.pos.height = e.getBoundingClientRect().height, s && (this.border.style.borderColor = s), this.pos.radius = this.pos.height / 2, e.parentNode.classList.add(this.prefix + "_hovered"), o && this.element.classList.add(o)
                    }
                }
            }, {
                key: "mouseoutAnchor",
                value: function(e, t) {
                    if (this.prop.run) {
                        this.hovered = !1, e[this.data.data].hovered = !1, this.border.style.borderColor = "", this.pos.radius = this.prop.radius, e.parentNode.classList.remove(this.prefix + "_hovered");
                        var i = e.getAttribute(this.data.class);
                        i && this.element.classList.remove(i)
                    }
                }
            }, {
                key: "resetHover",
                value: function() {
                    this.hovered = !1;
                    for (var e = 0; e < this.elements.length; e++) this.mouseoutAnchor(this.elements[e])
                }
            }, {
                key: "run",
                value: function() {
                    this.prop.run && (window.requestAnimationFrame(this.run.bind(this)), this.animate())
                }
            }, {
                key: "animate",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = this.prop.k;
                    e && (t = 1);
                    var i = this.coords.x,
                        r = this.coords.y;
                    this.hovered && (i -= (this.pos.width - this.prop.width) / 2, r -= (this.pos.height - this.prop.height) / 2), this.pos.x += (i - this.pos.x) * t, this.pos.y += (r - this.pos.y) * t;
                    var s = this.prop.width,
                        o = this.prop.height;
                    this.hovered ? (this.pos.widthCurrent += (this.pos.width - this.pos.widthCurrent) * t, s = this.pos.widthCurrent, this.pos.heightCurrent += (this.pos.height - this.pos.heightCurrent) * t) : (this.pos.widthCurrent -= (this.pos.widthCurrent - this.prop.width) * t, s = this.pos.widthCurrent, this.pos.heightCurrent -= (this.pos.heightCurrent - this.prop.height) * t), o = this.pos.heightCurrent, this.hovered ? this.pos.radiusCurrent += (this.pos.radius - this.pos.radiusCurrent) * t : this.pos.radiusCurrent -= (this.pos.radiusCurrent - this.prop.radius) * t;
                    var n = this.pos.radiusCurrent;
                    this.element.style.transform = "translate3d(" + this.pos.x + "px, " + this.pos.y + "px, 0)", this.element.style.width = s + "px", this.element.style.height = o + "px", this.border.style.borderRadius = n + "px";
                    for (var a = this.prop.moveInner.max, l = 0; l < this.elements.length; l++) {
                        var h = this.elements[l],
                            d = h[this.data.data];
                        if (d.hovered & null != d.inner & this.prop.moveInner.on) {
                            h[this.data.data].bounding = h.getBoundingClientRect();
                            var c = this.coords.x - d.bounding.left - this.pos.width / 2 - (h.clientWidth - this.pos.width) / 2,
                                u = this.coords.y - d.bounding.top - this.pos.height / 2 - (h.clientHeight - this.pos.height) / 2;
                            d.xCurrent += (c - d.xCurrent) * this.prop.moveInner.k, d.yCurrent += (u - d.yCurrent) * this.prop.moveInner.k, null != d.moveInnerMax && (a = d.moveInnerMax), Math.abs(d.xCurrent) > a && (d.xCurrent < 0 ? d.xCurrent = -a : 0 < d.xCurrent && (d.xCurrent = a)), Math.abs(d.yCurrent) > a && (d.yCurrent < 0 ? d.yCurrent = -a : 0 < d.yCurrent && (d.yCurrent = a)), d.inner.style.transform = "translate3d(" + d.xCurrent + "px, " + d.yCurrent + "px, 0)"
                        } else if (!d.hovered & null != d.inner) {
                            if ((0 == d.xCurrent || Math.abs(d.xCurrent) <= this.prop.moveInner.ignore) & (0 == d.yCurrent || Math.abs(d.yCurrent) <= this.prop.moveInner.ignore)) continue;
                            d.xCurrent -= d.xCurrent * this.prop.moveInner.k, d.yCurrent -= d.yCurrent * this.prop.moveInner.k, d.inner.style.transform = "translate3d(" + d.xCurrent + "px, " + d.yCurrent + "px, 0)"
                        }
                    }
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!t && (this.coords = {
                        x: 0,
                        y: 0
                    }, this.pos = {
                        x: 0,
                        y: 0,
                        width: this.prop.width,
                        widthCurrent: this.prop.width,
                        height: this.prop.height,
                        heightCurrent: this.prop.height,
                        radius: this.prop.radius,
                        radiusCurrent: this.prop.radius
                    }, this.data = {
                        proceeded: "data-" + this.prefix + "-proceeded",
                        data: "data-" + this.prefix + "-data",
                        width: "data-" + this.prefix + "-width",
                        height: "data-" + this.prefix + "-height",
                        borderColor: "data-" + this.prefix + "-borderColor",
                        class: "data-" + this.prefix + "-class",
                        moveInnerMax: "data-" + this.prefix + "-moveInnerMax",
                        timeout: "data-" + this.prefix + "-timeout"
                    }, this.elements = [], this.helpers = [], this.hovered = !1, this.shown = !1, this.resizeId = null, this.create(), this.setEvents(), this.updateElements(), this.run(), Object.assign(t, {
                        getElement: function() {
                            return e.element
                        },
                        getElements: function() {
                            return e.elements
                        },
                        getBorder: function() {
                            return e.border
                        },
                        getHelper: function() {
                            return e.helper
                        },
                        getOuter: function() {
                            return e.outer
                        },
                        getPos: function() {
                            return e.pos
                        },
                        updateElements: this.updateElements.bind(this),
                        resetHover: this.resetHover.bind(this)
                    }))
                }
            }]), r
        }(), p.prototype.SameHeight = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "sameHeight", t.prop = Object.assign(t.prop, {
                        selector: "." + t.prefix,
                        resize: !0
                    }), e) t.prop[i] = e[i];
                return t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "string"],
                            ["resize", "boolean"]
                        ]
                    }) && (this.items = this.prop.v.document().querySelectorAll(this.prop.selector), !0)
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.update(), this.setEvents(), !0)
                }
            }, {
                key: "setEvents",
                value: function() {
                    return this.prop.resize ? null == this.resizeID && (this.resizeID = this.prop.v.viewport.add({
                        target: "w",
                        name: this.name + " Resize",
                        do: this.set.bind(this),
                        timeout: this.prop.v.timeMin()
                    })) : (this.prop.v.viewport.delete(this.resizeID), this.resizeID = null), !0
                }
            }, {
                key: "update",
                value: function() {
                    return this.items = this.prop.v.document().querySelectorAll(this.prop.selector), this.set(), !0
                }
            }, {
                key: "clear",
                value: function() {
                    for (var e = 0; e < this.items.length; e++) this.items[e].style.height = "";
                    return !0
                }
            }, {
                key: "set",
                value: function() {
                    return this.clear(), setTimeout(function() {
                        for (var e = 0, t = 0; t < this.items.length; t++) {
                            var i = this.items[t].clientHeight;
                            e < i && (e = i)
                        }
                        for (var r = 0; r < this.items.length; r++) this.items[r].style.height = e + "px"
                    }.bind(this), this.prop.v.timeMin()), !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this) && (this.resizeID = null, this.setEvents(), this.set(), {
                        clear: this.clear.bind(this),
                        set: this.set.bind(this),
                        update: this.update.bind(this),
                        prop: function() {
                            return e.prop
                        },
                        changeProp: this.changeProp.bind(this)
                    })
                }
            }]), r
        }(), p.prototype.ScrollEvents = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "scrollEvents", t.prop = Object.assign(t.prop, {
                        scrollSelector: "#" + t.prop.v.prefix() + "scrollbar",
                        selector: "." + t.prefix,
                        init: !0,
                        on: !0,
                        resize: !0
                    }), e) t.prop[i] = e[i];
                return t.targets = [], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["scrollSelector", "dom"],
                            ["selector", "dom"],
                            ["init", "boolean"],
                            ["on", "boolean"],
                            ["resize", "boolean"]
                        ]
                    })
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.firstLoad = !0, this.getElements(), this.setEvents(), this.setResizeEvents(), !0)
                }
            }, {
                key: "removeElements",
                value: function() {
                    this.checkType("htmlElement", this.outer) && this.outer.removeAttribute(this.data.proceeded), this.removeEventListeners()
                }
            }, {
                key: "getElements",
                value: function() {
                    this.removeElements(), this.outer = this.prop.v.doc().querySelector(this.prop.scrollSelector), this.elements = this.prop.v.doc().querySelectorAll(this.prop.selector), this.outer.classList.add(this.prefix + "__outer");
                    for (var e = 0; e < this.elements.length; e++) this.elements[e].classList.add("" + this.prefix);
                    return !0
                }
            }, {
                key: "setResizeEvents",
                value: function() {
                    null === this.resizeHeightId & this.prop.resize ? this.resizeHeightId = this.prop.v.viewport.add({
                        target: "wh",
                        name: this.name + " Resize Height",
                        do: this.setHeight.bind(this)
                    }) : null !== this.resizeHeightId & !this.prop.resize && (this.prop.v.viewport.delete(this.resizeHeightId), this.resizeHeightId = null), null === this.resizeSeekId & this.prop.resize ? this.resizeSeekId = this.prop.v.viewport.add({
                        target: "wh",
                        name: this.name + " Resize Seek",
                        do: this.setHeight.bind(this)
                    }) : null !== this.resizeSeekId & !this.prop.resize && (this.prop.v.viewport.delete(this.resizeSeekId), this.resizeSeekId = null)
                }
            }, {
                key: "setEvents",
                value: function() {
                    for (var e = 0; e < this.elements.length; e++) {
                        null === this.elements[e].getAttribute(this.data.proceeded) && this.elements[e].setAttribute(this.data.proceeded, !0)
                    }
                    return this.setScrollEvent(), !0
                }
            }, {
                key: "setScrollEvent",
                value: function() {
                    if (!this.firstLoad) return !1;
                    if (null === this.outer.getAttribute(this.data.proceeded) || this.prevSelector !== this.prop.selector) {
                        var e = this.outer;
                        this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (e = window), this.addEventListener({
                            el: e,
                            target: "scroll",
                            do: this.seek.bind(this)
                        }), this.outer.setAttribute(this.data.proceeded, !0), this.prevSelector = this.prop.selector
                    }
                    return this.prop.init && (this.seek(), this.firstLoad = !1), !0
                }
            }, {
                key: "setHeight",
                value: function() {
                    return this.height = this.outer.clientHeight, this.outer !== window && this.outer !== this.prop.v.document() && this.outer !== this.prop.v.body() || (this.height = this.prop.v.vh()[1]), this.setScrollTop(), !0
                }
            }, {
                key: "setScrollTop",
                value: function() {
                    return this.outer === window || this.outer === this.prop.v.document() || this.outer === this.prop.v.body() ? this.scrollTop = window.pageYOffset : this.scrollTop = this.outer.scrollTop, !0
                }
            }, {
                key: "seek",
                value: function() {
                    return !!this.prop.on && (this.setScrollTop(), !0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!e && (this.data = {
                        proceeded: "data-" + this.prefix + "-proceeded"
                    }, this.prevSelector = "", this.firstLoad = !0, this.height = 0, this.scrollTop = 0, this.resizeSeekId = null, this.resizeHeightId = null, this.getElements(), this.setHeight(), this.setEvents(), this.setResizeEvents(), e)
                }
            }]), r
        }(), p.prototype.View = function(e) {
            function s() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, s);
                var t = l(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
                for (var i in t.prefix = t.prop.v.prefix() + "view", t.prop = Object.assign(t.prop, {
                        selector: "." + t.prefix,
                        percent: .3,
                        load: !0,
                        loadTimeout: 1e3
                    }), e) t.prop[i] = e[i];
                return t.targets = ["in"], t
            }
            return h(s, p.prototype.ScrollEvents), o(s, [{
                key: "check",
                value: function() {
                    return !!a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "check", this).call(this) && !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["percent", "number"],
                            ["load", "boolean"],
                            ["loadTimeout", "integer"]
                        ]
                    })
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "changeProp", this).call(this, e) && (this.setHeight(), !0)
                }
            }, {
                key: "setEvents",
                value: function() {
                    for (var e = 0; e < this.elements.length; e++) {
                        null === this.elements[e].getAttribute(this.data.proceeded) && (this.elements[e].in = !1, this.elements[e].out = !1, this.elements[e].setAttribute(this.data.proceeded, !0))
                    }
                    return this.prop.load & !this.prop.v.loaded() ? v.addLoad(function() {
                        setTimeout(this.setScrollEvent.bind(this), this.prop.loadTimeout)
                    }.bind(this)) : this.setScrollEvent(), !0
                }
            }, {
                key: "setHeight",
                value: function() {
                    return !!a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "setHeight", this).call(this) && (this.percent = this.prop.percent * this.height, !0)
                }
            }, {
                key: "seek",
                value: function() {
                    if (!a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "seek", this).call(this)) return !1;
                    var e = this.percent;
                    this.firstLoad && (e = this.height);
                    for (var t = 0; t < this.elements.length; t++)
                        if (!this.elements[t].in) {
                            var i = this.elements[t].getBoundingClientRect();
                            if ((i.top < e & !this.elements[t].out || i.bottom > e & this.elements[t].out) && i.top > -1 * this.elements[t].clientHeight) {
                                var r = null;
                                this.firstLoad && (r = this.elements[t].getAttribute(this.data.firstStackDelay)) && (r = parseInt(r)), null != r & this.firstLoad && this.elements[t].classList.add(this.prefix + "_" + r), this.launchEventsByTarget("in", { in : !0, element: this.elements[t]
                                }), this.elements[t].in = !0, this.elements[t].out = !1
                            }
                        }
                    return this.firstLoad && (this.firstLoad = !1), !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.percent = 0, this.add({
                        target: "in",
                        do: function(e) {
                            e.element.classList.add(this.prefix + "ed"), this.checkType("function", e.element[this.data.callback]) && e.element[this.data.callback]()
                        }.bind(this)
                    });
                    var t = a(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "init", this).call(this);
                    return !!t && (this.data = Object.assign(this.data, {
                        callback: this.prefix + "-callback",
                        firstStackDelay: "data-" + this.prefix + "-firstStackDelay"
                    }), Object.assign(t, {
                        getElements: function() {
                            return e.elements
                        },
                        getOuter: function() {
                            return e.outer
                        },
                        seek: this.seek.bind(this)
                    }))
                }
            }]), s
        }(), p.prototype.SmoothScroll = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "smoothScroll", t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        selectorElements: "." + t.prefix + "__element",
                        run: !0,
                        autoResize: !0,
                        allowScroll: !0,
                        useScroll: !1,
                        useTransform: !0,
                        horizontal: !1,
                        k: {
                            value: .1,
                            reduce: !0,
                            reduceK: .005
                        },
                        stopPropagation: !0
                    }), e) t.prop[i] = e[i];
                return t.scrollTargets = [], t.targets = ["update"], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    var e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["selectorElements", "dom"],
                            ["run", "boolean"],
                            ["autoResize", "boolean"],
                            ["allowScroll", "boolean"],
                            ["useScroll", "boolean"],
                            ["useTransform", "boolean"],
                            ["horizontal", "boolean"],
                            ["k", "object"],
                            ["stopPropagation", "boolean"]
                        ]
                    });
                    return !!e && !!(e = this.checkTypes({
                        obj: this.prop.k,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["value", "number"],
                            ["reduce", "boolean"],
                            ["reduceK", "number"]
                        ]
                    }))
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    var t = this.prop.run;
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.getElements(), this.createElements(), this.prop.run !== t && this.run(), !0)
                }
            }, {
                key: "getElements",
                value: function() {
                    return this.outer = this.prop.v.doc().querySelector(this.prop.selector), this.outer.classList.add("" + this.prefix), this.prop.useScroll ? this.outer.classList.add(this.prefix + "_scroll") : this.outer.classList.remove(this.prefix + "_scroll"), this.elements = document.querySelectorAll(this.prop.selectorElements), this.elementsLength = this.elements.length, this.setItemsProperties(), !0
                }
            }, {
                key: "createElements",
                value: function() {
                    if (null === this.outer.getAttribute(this.data.proceeded) & this.prevSelector !== this.prop.selector) {
                        this.sub = document.createElement("div"), this.sub.classList.add(this.prefix + "__sub"), this.outer.appendChild(this.sub), this.container = document.createElement("div"), this.container.classList.add(this.prefix + "__container"), this.outer.appendChild(this.container);
                        for (var e = 0; e < this.outer.children.length; e++) this.outer.children[e] !== this.sub & this.outer.children[e] !== this.container && this.container.appendChild(this.outer.children[e]);
                        this.outer.setAttribute(this.data.proceeded, !0), this.prevSelector = this.prop.selector, this.removeEventListeners(), this.setEvents()
                    }
                    return this.setSize(), !0
                }
            }, {
                key: "setItemsProperties",
                value: function() {
                    for (var e = 0; e < this.elementsLength; e++) {
                        var t = void 0,
                            i = this.elements[e].getAttribute(this.data.k);
                        t = null !== i ? parseFloat(i) : this.getReducedK(e), this.checkType("number", t) || (t = this.getReducedK(e)), this.elements[e][this.properties.k] = t, this.elements[e][this.properties.x] = 0, this.elements[e][this.properties.y] = 0, this.elements[e][this.properties.current] = [0, 0]
                    }
                }
            }, {
                key: "setEvents",
                value: function() {
                    return this.setSize(), this.setResize(), this.addEventListener({
                        el: this.outer,
                        target: "scroll",
                        do: this.updateScrollTargets.bind(this)
                    }), this.addEventListener({
                        el: this.outer,
                        target: "wheel",
                        do: this.wheel.bind(this)
                    }), !0
                }
            }, {
                key: "setSize",
                value: function() {
                    return this.prop.useScroll ? (this.container.style.width = this.outer.clientWidth + "px", this.container.style.height = this.outer.clientHeight + "px", this.height = this.container.scrollHeight, this.width = this.container.scrollWidth) : (this.container.style.width = "", this.container.style.height = "", this.height = this.container.clientHeight, this.width = this.container.clientWidth), this.sub.style.width = this.width + "px", this.sub.style.height = this.height + "px", this.scrollForce = !0
                }
            }, {
                key: "setResize",
                value: function() {
                    return null == this.resizeId && (this.resizeId = this.prop.v.viewport.add({
                        target: "wh",
                        name: this.name + " Resize",
                        do: this.setSize.bind(this)
                    })), !0
                }
            }, {
                key: "resetResize",
                value: function() {
                    return null !== this.resizeId && (this.prop.v.viewport.delete(this.resizeId), this.resizeId = null), !0
                }
            }, {
                key: "r",
                value: function(e, t) {
                    return t = void 0 !== t ? Math.pow(10, t) : 1e3, Math.round(e * t) / t
                }
            }, {
                key: "getReducedK",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.elementsLength;
                    return this.prop.k.reduce ? this.prop.k.value - this.prop.k.reduceK * e : this.prop.k.value
                }
            }, {
                key: "run",
                value: function() {
                    this.prop.run ? (this.setResize(), requestAnimationFrame(this.loop.bind(this))) : this.resetResize()
                }
            }, {
                key: "updateScrollTargets",
                value: function() {
                    this.scrollTargets = [this.outer.scrollLeft, this.outer.scrollTop], this.scrollValues = [this.outer.scrollLeft, this.outer.scrollTop]
                }
            }, {
                key: "wheel",
                value: function(e) {
                    if (this.prop.run & this.prop.allowScroll) {
                        this.prop.stopPropagation && (e.preventDefault(), e.stopPropagation());
                        var t = this.normalizeWheel(e);
                        return this.prop.horizontal ? (this.outer.scrollLeft += t.pixelY, this.outer.scrollTop += t.pixelX) : (this.outer.scrollLeft += t.pixelX, this.outer.scrollTop += t.pixelY), !0
                    }
                }
            }, {
                key: "loop",
                value: function() {
                    if (this.prop.run) {
                        if (this.prop.autoResize) {
                            var e = this.container.clientHeight,
                                t = this.container.clientWidth;
                            this.prop.useScroll && (e = this.container.scrollHeight, t = this.container.scrollWidth), e == this.height && t == this.width || this.setSize()
                        }
                        var i = !1;
                        this.scrollForce && (i = !0, this.scrollForce = !1);
                        for (var r = 0; r < this.elementsLength; r++) {
                            var s = [this.scrollTargets[0] - this.elements[r][this.properties.current][0], this.scrollTargets[1] - this.elements[r][this.properties.current][1]],
                                o = this.elements[r][this.properties.k];
                            i && (o = 1), this.elements[r][this.properties.current][0] += o * s[0], this.elements[r][this.properties.current][1] += o * s[1]
                        }
                        this.render(), requestAnimationFrame(this.loop.bind(this))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    for (var e = {
                            left: 0,
                            top: 0
                        }, t = 0; t < this.elementsLength; t++) {
                        var i = this.r(this.elements[t][this.properties.current][0]),
                            r = this.r(this.elements[t][this.properties.current][1]);
                        this.elements[t][this.properties.x] = i, this.elements[t][this.properties.y] = r, e.left = i, e.top = r, this.prop.useScroll || (this.prop.useTransform ? this.elements[t].style.transform = "translate3d(-" + i + "px, -" + r + "px, 0)" : (this.elements[t].style.left = "-" + i + "px", this.elements[t].style.top = "-" + r + "px"))
                    }
                    this.prop.useScroll && (this.container.scrollLeft = e.left, this.container.scrollTop = e.top), this.launchEventsByTarget("update", {
                        scrollValues: this.scrollValues
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!t && (this.data = {
                        proceeded: "data-" + this.prefix + "-proceeded",
                        k: "data-" + this.prefix + "-k"
                    }, this.properties = {
                        current: this.prefix + "-current",
                        k: this.prefix + "-k",
                        y: this.prefix + "-y",
                        x: this.prefix + "-x"
                    }, this.scrollTargets = [0, 0], this.scrollValues = [0, 0], this.scrollForce = !1, this.prevSelector = "", this.resizeId = null, this.getElements(), this.createElements(), this.run(), Object.assign(t, {
                        getOuter: function() {
                            return e.outer
                        },
                        getElements: function() {
                            return e.elements
                        },
                        setSize: this.setSize.bind(this)
                    }))
                }
            }]), r
        }(), p.prototype.Form = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "form", t.dataPrefix = "data-" + t.prefix, t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        addErrorClass: !0,
                        errorInfoDuration: 250,
                        scrollSelector: "#" + t.prop.v.prefix() + "scrollbar",
                        scroll: !0,
                        scrollDuration: 500,
                        clearAfterSuccess: !0,
                        autocomplete: !1,
                        spellcheck: !1,
                        separator: "__"
                    }), e) t.prop[i] = e[i];
                return t.targets = ["success", "fail"], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    var e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["addErrorClass", "boolean"],
                            ["errorInfoDuration", "integer"],
                            ["scroll", "boolean"],
                            ["scrollDuration", "integer"],
                            ["clearAfterSuccess", "boolean"],
                            ["autocomplete", "boolean"],
                            ["spellcheck", "boolean"],
                            ["separator", "string"]
                        ]
                    });
                    return !!e && (!(this.prop.scroll && !(e = this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["scrollSelector", "dom"]
                        ]
                    }))) && (this.getElements(), this.setEvents(), !0))
                }
            }, {
                key: "getElements",
                value: function() {
                    this.form = this.prop.v.doc().querySelector(this.prop.selector), this.form.classList.add("" + this.prefix), this.scroll = this.prop.v.doc().querySelector(this.prop.scrollSelector), this.action = this.form.getAttribute("action"), null === this.action && this.form.setAttribute("action", window.location.href), this.method = this.form.getAttribute("method"), null === this.method ? this.method = "post" : (this.method = this.method.toLowerCase(), "post" !== this.method & "get" !== this.method && (this.method = "post")), this.form.setAttribute("method", this.method), this.submit = this.form.querySelector("input[type='submit']"), null === this.submit && (this.submit = this.form.querySelector("button[type='submit']"), null === this.submit && (this.submit = document.createElement("button"))), this.elements = this.form.querySelectorAll("input, select, textarea");
                    for (var e = 0; e < this.elements.length; e++) this.prop.autocomplete ? this.elements[e].removeAttribute("autocomplete") : this.elements[e].setAttribute("autocomplete", "off"), this.prop.spellcheck ? this.elements[e].removeAttribute("spellcheck") : this.elements[e].setAttribute("spellcheck", "false");
                    return !0
                }
            }, {
                key: "getInputs",
                value: function() {
                    return this.inputs = this.form.querySelectorAll("input:not([type='submit']):not([type='button']), textarea, select"), this.inputs
                }
            }, {
                key: "getErrorsEl",
                value: function() {
                    return this.errors = this.form.querySelectorAll("." + this.prefix + "__error"), this.errors
                }
            }, {
                key: "getInfosEl",
                value: function() {
                    return this.infos = this.form.querySelectorAll("." + this.prefix + "__info"), this.infos
                }
            }, {
                key: "getJSON",
                value: function() {
                    return this.json = $(this.form).serializeObject(), this.json
                }
            }, {
                key: "setEvents",
                value: function() {
                    return null == this.form.getAttribute(this.data.proceeded) && (this.addEventListener({
                        el: this.form,
                        target: "submit",
                        do: this.eventSubmit.bind(this)
                    }), this.form.setAttribute(this.data.proceeded, "true")), !0
                }
            }, {
                key: "eventSubmit",
                value: function(e) {
                    e.preventDefault(), this.formEvent(e)
                }
            }, {
                key: "formEvent",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    return null !== e && e.preventDefault(), this.submit.setAttribute("disabled", "disabled"), this.getInputs(), this.getErrorsEl(), this.getInfosEl(), this.getJSON(), this.prop.v.ajax({
                        url: this.action,
                        method: this.method,
                        data: {
                            inputs: this.json
                        },
                        callback: this.formEventCallback.bind(this),
                        fail: this.formEvent.bind(this)
                    }), !0
                }
            }, {
                key: "formEventCallback",
                value: function(e) {
                    if (this.submit.removeAttribute("disabled"), this.removeErrors(), "error_smtp" === e) return alert(this.name + ". SMTP Error!"), !1;
                    if ("error_inputs" === e) return alert(this.name + ". Inputs Error!"), !1;
                    if ("error_form" === e) return alert(this.name + ". Form Error!"), !1;
                    var t = this.getErrors(e);
                    if (0 === t.length) {
                        this.clearInputs(), this.hideErrors(), this.launchEventsByTarget("success", {
                            json: this.json,
                            inputs: this.inputs,
                            data: e,
                            form: this.form
                        });
                        var i = this.form.getAttribute(this.data.redirect);
                        null !== i && (location.href = i)
                    } else this.addErrors(t), this.toggleErrors(t), this.scrollToError(t), this.launchEventsByTarget("fail", {
                        errors: t,
                        json: this.json,
                        inputs: this.inputs,
                        data: e,
                        form: this.form
                    });
                    return !0
                }
            }, {
                key: "removeErrors",
                value: function() {
                    for (var e = 0; e < this.inputs.length; e++) {
                        var t = this.inputs[e].parentElement;
                        this.inputs[e].classList.remove(this.prefix + "__input_error"), t.classList.contains(this.prefix + "__input_select") && t.classList.remove(this.prefix + "__input_select-error")
                    }
                    return !0
                }
            }, {
                key: "hideErrors",
                value: function() {
                    for (var e = 0; e < this.errors.length; e++) $(this.errors[e]).stop().slideUp(this.prop.errorInfoDuration);
                    for (var t = 0; t < this.infos.length; t++) $(this.infos[t]).stop().slideDown(this.prop.errorInfoDuration);
                    return !0
                }
            }, {
                key: "getErrors",
                value: function(e) {
                    for (var t = e.split(this.prop.separator), i = [], r = [], s = 0; s < t.length; s++) i.push(t[s]);
                    for (var o = 0; o < this.inputs.length; o++) {
                        var n = this.inputs[o].getAttribute("name");
                        if (null !== n)
                            for (var a = 0; a < i.length; a++) n.toLowerCase() === i[a].toLowerCase() && r.push({
                                name: i[a],
                                e: this.inputs[o]
                            })
                    }
                    return r
                }
            }, {
                key: "addErrors",
                value: function(e) {
                    if (!this.prop.addErrorClass) return !1;
                    for (var t = 0; t < e.length; t++) {
                        e[t].name;
                        var i = e[t].e,
                            r = i.parentElement;
                        if (i.classList.add(this.prefix + "__input_error"), r.classList.contains(this.prefix + "__input_select") && r.classList.add(this.prefix + "__input_select-error"), i.classList.contains(this.prop.v.prefix() + "checkbox_hidden")) {
                            var s = i.previousElementSibling;
                            null !== s && s.classList.add(this.prefix + "__input_checkbox-error")
                        }
                    }
                    return !0
                }
            }, {
                key: "toggleErrors",
                value: function(e) {
                    for (var t = 0; t < this.errors.length; t++) {
                        for (var i = !1, r = this.errors[t].getAttribute(this.data.name), s = 0; s < e.length; s++) e[s].name == r && (i = !0);
                        if (i) {
                            for (var o = !1, n = 0; n < this.infos.length; n++) {
                                o = !1, this.infos[n].getAttribute(this.data.name) == r && (o = !0), o && $(this.infos[n]).stop().slideUp(this.prop.errorInfoDuration)
                            }
                            o ? $(this.errors[t]).stop().delay(this.prop.errorInfoDuration).slideDown(this.prop.errorInfoDuration) : $(this.errors[t]).stop().slideDown(this.prop.errorInfoDuration)
                        } else {
                            $(this.errors[t]).stop().slideUp(this.prop.errorInfoDuration);
                            for (var a = 0; a < this.infos.length; a++) {
                                var l = !1;
                                this.infos[a].getAttribute(this.data.name) == r && (l = !0), l && $(this.infos[a]).stop().delay(this.prop.errorInfoDuration).slideDown(this.prop.errorInfoDuration)
                            }
                        }
                    }
                    return !0
                }
            }, {
                key: "scrollToError",
                value: function(e) {
                    if (!this.prop.scroll) return !1;
                    if (0 === e.length) return !1;
                    e[0].name;
                    var t = e[0].e,
                        i = t.parentElement,
                        r = void 0;
                    if (i.classList.contains(this.prefix + "__input_select")) r = $(i).offset().top;
                    else if (t.classList.contains(this.prop.v.prefix() + "checkbox_hidden")) {
                        var s = t.previousElementSibling;
                        null === s && (s = t), r = $(s).offset().top
                    } else r = $(t).offset().top;
                    return (r < this.prop.v.vh()[1] / 2 || r > .75 * this.prop.v.vh()[1]) && $(this.scroll).stop().animate({
                        scrollTop: $(this.scroll).scrollTop() + r - this.prop.v.vh()[1] / 2
                    }, this.prop.scrollDuration), !0
                }
            }, {
                key: "clearInputs",
                value: function() {
                    if (this.prop.clearAfterSuccess)
                        for (var e = 0; e < this.inputs.length; e++) "hidden" !== this.inputs[e].getAttribute("type") & "checkbox" !== this.inputs[e].getAttribute("type") & "radio" !== this.inputs[e].getAttribute("type") & "SELECT" !== this.inputs[e].tagName && (this.inputs[e].value = "");
                    return !0
                }
            }, {
                key: "init",
                value: function() {
                    this.data = {
                        proceeded: this.dataPrefix + "-proceeded",
                        redirect: this.dataPrefix + "-redirect",
                        name: this.dataPrefix + "-name"
                    };
                    var e = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!e && (this.inputs = [], this.errors = [], this.infos = [], this.json = {}, Object.assign(e, {
                        formEvent: this.formEvent.bind(this),
                        getInputs: this.getInputs.bind(this),
                        getErrors: this.getErrorsEl.bind(this),
                        getInfos: this.getInfosEl.bind(this),
                        getJSON: this.getJSON.bind(this),
                        removeErrors: this.removeErrors.bind(this),
                        clearInputs: this.clearInputs.bind(this)
                    }))
                }
            }]), r
        }(), p.prototype.Popup = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "popup", t.prop = Object.assign(t.prop, {
                        animation: 500
                    }), e) t.prop[i] = e[i];
                return t.targets = ["show", "shown", "hide", "hidden"], t.types = ["standard", "modal", "media", "text", "auto"], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["animation", "integer"]
                        ]
                    })
                }
            }, {
                key: "create",
                value: function() {
                    return !this.created && (this.id = this.prefix + "_" + this.randInt(0, 9999), this.outer = document.createElement("div"), this.outer.setAttribute("id", this.id), this.outer.classList.add("" + this.prefix), this.outer.classList.add(this.id), this.outer.classList.add("display_none"), this.overlay = document.createElement("div"), this.overlay.classList.add(this.prefix + "__overlay"), this.outer.appendChild(this.overlay), this.container = document.createElement("div"), this.container.classList.add(this.prefix + "__container"), this.outer.appendChild(this.container), this.content = document.createElement("div"), this.content.classList.add(this.prefix + "__content"), this.container.appendChild(this.content), this.levelsEl[0] = document.createElement("div"), this.levelsEl[0].classList.add(this.prefix + "__level"), this.levelsEl[0].classList.add(this.prefix + "__level_0"), this.content.appendChild(this.levelsEl[0]), this.levelsEl[1] = document.createElement("div"), this.levelsEl[1].classList.add(this.prefix + "__level"), this.levelsEl[1].classList.add(this.prefix + "__level_1"), this.content.appendChild(this.levelsEl[1]), this.close = document.createElement("div"), this.close.classList.add(this.prefix + "__close"), this.container.appendChild(this.close), this.prop.v.body().appendChild(this.outer), this.setEvents(), this.created = !0)
                }
            }, {
                key: "setEvents",
                value: function() {
                    return this.addEventListener({
                        el: this.overlay,
                        target: "click",
                        do: this.hide.bind(this)
                    }), this.addEventListener({
                        el: this.close,
                        target: "click",
                        do: this.hide.bind(this)
                    }), !0
                }
            }, {
                key: "closeButtonsEvents",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = this.levelsEl[e].querySelectorAll("." + this.prefix + "__close-button"), i = 0; i < t.length; i++) this.addEventListener({
                        el: t[i],
                        target: "click",
                        do: this.clickCloseButton.bind(this)
                    });
                    return !0
                }
            }, {
                key: "clickCloseButton",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    null !== e && e.preventDefault(), this.hide()
                }
            }, {
                key: "afterCloseEvent",
                value: function() {
                    return this.addEventListener({
                        el: this.levelsEl[0].querySelector("." + this.prefix + "__after-close"),
                        target: "click",
                        do: this.clickAfterClose.bind(this)
                    }), !0
                }
            }, {
                key: "clickAfterClose",
                value: function() {
                    return this.levels[1] && this.hide(), !0
                }
            }, {
                key: "stopVideo",
                value: function() {
                    for (var e = this.outer.querySelectorAll("video"), t = 0; t < e.length; t++) e[t].pause();
                    return !0
                }
            }, {
                key: "getLevel",
                value: function() {
                    for (var e = !1, t = 0; t < this.levels.length; t++) this.levels[t] && (e = t);
                    return e
                }
            }, {
                key: "getNextLevel",
                value: function() {
                    var e = this.getLevel();
                    return e = !1 === e ? 0 : 1
                }
            }, {
                key: "checkData",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = {
                            selector: "." + this.prefix + "__html",
                            types: ["standard"]
                        };
                    for (var i in e) t[i] = e[i];
                    if (!this.checkTypes({
                            obj: t,
                            name: this.name,
                            console: this.prop.console,
                            vars: [
                                ["selector", "dom"],
                                ["types", "stringArray", {
                                    count: 1
                                }]
                            ]
                        })) return !1;
                    for (var r = !1, s = 0; s < t.types.length; s++)
                        for (var o = 0; o < this.types.length; o++) t.types[s] === this.types[o] && (r = !0);
                    r || t.types.push(this.types[0]);
                    for (var n = 0; n < t.types.length; n++)
                        if (0 === t.types[n].length) return !1;
                    return t
                }
            }, {
                key: "show",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.created || this.create(), !(e = this.checkData(e))) return !1;
                    var t = this.getNextLevel();
                    if (this.levels[t]) return !1;
                    var i = this.prop.v.document().querySelector(e.selector);
                    return this["showLevel_" + t](i, e.types), this.launchEventsByTarget("show", {
                        outer: this.outer,
                        level: t,
                        types: e.types
                    }), !0
                }
            }, {
                key: "showLevel_0",
                value: function(e, t) {
                    this.levels[0] = !0, this.levels[1] = !1, this.activeTypes = t, this.shown = !0, this.levelsEl[0].innerHTML = e.innerHTML, this.levelsEl[0].innerHTML += '<div class="' + this.prefix + '__after-close"></div>', this.outer.classList.remove("display_none"), this.outer.classList.add("display_flex"), this.prop.v.document().classList.add(this.prefix + "_shown");
                    for (var i = 0; i < t.length; i++) this.outer.classList.add(this.prefix + "_" + t[i]);
                    return setTimeout(function() {
                        this.outer.classList.add(this.prefix + "_level_0"), this.outer.classList.remove(this.prefix + "_level_1"), this.prop.v.document().classList.add(this.prefix + "_shown_level_0"), this.prop.v.document().classList.remove(this.prefix + "_shown_level_1")
                    }.bind(this), this.prop.v.timeMin()), this.afterCloseEvent(), this.closeButtonsEvents(0), setTimeout(function() {
                        this.launchEventsByTarget("shown", {
                            outer: this.outer,
                            level: 0,
                            types: this.activeTypes
                        })
                    }.bind(this), this.prop.v.timeMin() + this.prop.animation), !0
                }
            }, {
                key: "showLevel_1",
                value: function(e, t) {
                    return this.levels[0] = !0, this.levels[1] = !0, this.levelsEl[1].innerHTML = e.innerHTML, setTimeout(function() {
                        this.outer.classList.add(this.prefix + "_level_1"), this.prop.v.document().classList.add(this.prefix + "_shown_level_1")
                    }.bind(this), v.timeMin), this.afterCloseEvent(), this.closeButtonsEvents(1), setTimeout(function() {
                        this.launchEventsByTarget("shown", {
                            outer: this.outer,
                            level: 1,
                            types: this.activeTypes
                        })
                    }.bind(this), this.prop.v.timeMin() + this.prop.animation), !0
                }
            }, {
                key: "hide",
                value: function() {
                    return !!this.show && (this.stopVideo(), this.launchEventsByTarget("hide", {
                        outer: this.outer,
                        level: this.getLevel(),
                        types: this.activeTypes
                    }), 1 === this.getLevel() ? this.hideLevel_1() : 0 !== this.getLevel() || this.hideLevel_0())
                }
            }, {
                key: "hideLevel_0",
                value: function() {
                    return this.levels[0] = !1, this.levels[1] = !1, this.outer.classList.remove(this.prefix + "_level_0"), this.prop.v.document().classList.remove(this.prefix + "_shown_level_0"), this.prop.v.document().classList.remove(this.prefix + "_shown_level_1"), setTimeout(function() {
                        this.prop.v.document().classList.remove(this.prefix + "_shown"), this.outer.classList.add("display_none"), this.outer.classList.remove("display_flex");
                        for (var e = 0; e < this.activeTypes.length; e++) this.outer.classList.remove(this.prefix + "_" + this.activeTypes[e]);
                        this.levelsEl[0].innerHTML = "", this.shown = !1, this.launchEventsByTarget("hidden", {
                            outer: this.outer,
                            level: 0,
                            types: this.activeTypes
                        })
                    }.bind(this), this.prop.animation), !0
                }
            }, {
                key: "hideLevel_1",
                value: function() {
                    return this.levels[0] = !0, this.levels[1] = !1, setTimeout(function() {
                        this.outer.classList.remove(this.prefix + "_level_1"), this.prop.v.document().classList.remove(this.prefix + "_shown_level_1")
                    }.bind(this), this.prop.v.timeMin()), setTimeout(function() {
                        this.levelsEl[1].innerHTML = "", this.launchEventsByTarget("hidden", {
                            outer: this.outer,
                            level: 1,
                            types: this.activeTypes
                        })
                    }.bind(this), this.prop.v.timeMin() + this.prop.animation), !0
                }
            }, {
                key: "hideAll",
                value: function() {
                    return this.levels[0] = !1, this.levels[1] = !1, this.launchEventsByTarget("hide", {
                        outer: this.outer,
                        level: 0,
                        types: this.activeTypes
                    }), this.outer.classList.remove(this.prefix + "_level_0"), this.outer.classList.remove(this.prefix + "_level_1"), this.prop.v.document().classList.remove(this.prefix + "_shown_level_0"), this.prop.v.document().classList.remove(this.prefix + "_shown_level_1"), setTimeout(function() {
                        this.prop.v.document().classList.remove(this.prefix + "_shown"), this.outer.classList.add("display_none"), this.outer.classList.remove("display_flex");
                        for (var e = 0; e < this.activeTypes.length; e++) this.outer.classList.remove(this.prefix + "_" + this.activeTypes[e]);
                        this.levelsEl[0].innerHTML = "", this.levelsEl[1].innerHTML = "", this.shown = !1, this.launchEventsByTarget("hidden", {
                            outer: this.outer,
                            level: 0,
                            types: this.activeTypes
                        })
                    }.bind(this), this.prop.animation), !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!t && (this.created = !1, this.shown = !1, this.levels = [!1, !1], this.levelsEl = [], this.activeTypes = [], Object.assign(t, {
                        level: this.getLevel.bind(this),
                        shown: function() {
                            return e.shown
                        },
                        id: function() {
                            return e.id
                        },
                        activeTypes: function() {
                            return e.activeTypes
                        },
                        show: this.show.bind(this),
                        hide: this.hide.bind(this),
                        hideAll: this.hideAll.bind(this)
                    }))
                }
            }]), r
        }(), p.prototype.AjaxPage = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "ajaxPage", t.prop = Object.assign(t.prop, {
                        selectorLinks: "." + t.prefix + "__link",
                        selectorOuter: "#" + t.prefix + "__outer",
                        selectorVData: "body",
                        disabled: !1,
                        disabledTries: 1e3,
                        popstateEvent: !0,
                        on: !0,
                        updateUrl: !0,
                        updateTitle: !0,
                        updateContent: !0,
                        timeoutAjax: 0,
                        timeoutUpdate: 0,
                        timeoutAfter: 0,
                        maxChanges: 999
                    }), e) t.prop[i] = e[i];
                return t.targets = ["before", "load", "after"], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selectorLinks", "dom"],
                            ["selectorOuter", "dom"],
                            ["selectorVData", "string"],
                            ["disabled", "boolean"],
                            ["disabledTries", "integer"],
                            ["popstateEvent", "boolean"],
                            ["on", "boolean"],
                            ["updateUrl", "boolean"],
                            ["updateTitle", "boolean"],
                            ["updateContent", "boolean"],
                            ["timeoutAjax", "integer"],
                            ["timeoutUpdate", "integer"],
                            ["timeoutAfter", "integer"],
                            ["maxChanges", "integer"]
                        ]
                    })
                }
            }, {
                key: "changeProp",
                value: function(e) {
                    return !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "changeProp", this).call(this, e) && (this.getElements(), this.setEvents(), !0)
                }
            }, {
                key: "getElements",
                value: function() {
                    this.outer = this.prop.v.doc().querySelector(this.prop.selectorOuter);
                    for (var e = this.prop.v.doc().querySelectorAll(this.prop.selectorLinks), t = 0; t < e.length; t++) {
                        null === e[t].getAttribute(this.data.proceeded) && this.links.push(e[t])
                    }
                    return this.links
                }
            }, {
                key: "setEvents",
                value: function() {
                    for (var e = 0; e < this.links.length; e++) {
                        null === this.links[e].getAttribute(this.data.proceeded) && (this.addEventListener({
                            el: this.links[e],
                            target: "click",
                            do: this.load.bind(this, this.links[e], !0)
                        }), this.links[e].setAttribute("data-" + this.prop.v.prefix() + "preloader-none", !0), this.links[e].setAttribute(this.data.proceeded, !0))
                    }
                    return !0
                }
            }, {
                key: "checkHref",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    if (null === e) return !1;
                    var t = "";
                    if ("string" == typeof e) t = e;
                    else {
                        if (!this.checkType("htmlElement", e)) return !1;
                        if (null === e.getAttribute("href")) return !1;
                        t = e.href
                    }
                    return t
                }
            }, {
                key: "setTimeout",
                value: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function() {},
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = +new Date - this.startLoading;
                    return i < t ? setTimeout(e.bind(this), t - i) : e(), !0
                })
            }, {
                key: "getVPage",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    if (null === e) return !1;
                    var t = e.getAttribute("data-" + this.prop.v.prefix() + "page");
                    if (null !== t) {
                        for (var i = t.split(" "), r = [], s = 0; s < i.length; s++) r.push(i[s]);
                        return r
                    }
                    return !1
                }
            }, {
                key: "load",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (this.prop.on) {
                        if (null !== i && i.preventDefault(), this.loading) return !1;
                        if (this.prop.disabled) return !1;
                        var r = this.checkHref(e);
                        if (!r) return !1;
                        if (v.checkType("function", e.getAttribute))
                            if (null !== e.getAttribute("target")) return void(window.location.href = r);
                        return r.includes(window.location.host) ? this.changes >= this.prop.maxChanges ? void(window.location.href = r) : (this.loading = !0, this.launchEventsByTarget("before", {
                            link: e
                        }), setTimeout(function(e, t) {
                            this.startLoading = +new Date, this.ajaxLoad(e, t), this.changes++
                        }.bind(this, r, t), this.prop.timeoutAjax), !0) : void(window.location.href = r)
                    }
                }
            }, {
                key: "ajaxLoad",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    return this.loading = !0, this.prop.v.ajax({
                        url: e,
                        method: "post",
                        data: {
                            ajaxPage: 1
                        },
                        abortOnError: !0,
                        callback: this.update.bind(this, e, t),
                        fail: this.ajaxLoad.bind(this, e),
                        error: this.error.bind(this, e)
                    }), !0
                }
            }, {
                key: "error",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                    return window.location.href = e, !0
                }
            }, {
                key: "update",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                        r = document.createElement("html");
                    r.innerHTML = i;
                    var s = r.querySelector(this.prop.selectorVData),
                        o = this.getVPage(s);
                    if (!o) return window.location.href = e, !1;
                    var n = {
                        current: this.outer,
                        new: r.querySelector(this.prop.selectorOuter)
                    };
                    if (null === n.new) return window.location.href = e, !1;
                    this.setTimeout(function() {
                        this.prop.updateUrl & t && window.history.pushState(null, "", e)
                    }.bind(this), this.prop.timeoutUpdate), this.setTimeout(function() {
                        if (this.prop.updateTitle) {
                            var e = {
                                current: document.querySelector("title"),
                                new: r.querySelector("title")
                            };
                            null !== e.current & null !== e.new && (e.current.innerHTML = e.new.innerHTML)
                        }
                    }.bind(this), this.prop.timeoutUpdate);
                    var a = n.new.innerHTML;
                    return this.setTimeout(function() {
                        this.prop.updateContent && (n.current.innerHTML = a, this.getElements(), this.setEvents())
                    }.bind(this), this.prop.timeoutUpdate), this.setTimeout(function() {
                        this.launchEventsByTarget("load", {
                            prev: this.page,
                            next: o,
                            url: e,
                            html: a,
                            htmlFull: i
                        })
                    }.bind(this), this.prop.timeoutUpdate), this.setTimeout(function() {
                        setTimeout(function() {
                            this.launchEventsByTarget("after", {
                                prev: this.page,
                                next: o,
                                url: e,
                                html: a
                            })
                        }.bind(this), this.prop.timeoutAfter)
                    }.bind(this), this.prop.timeoutUpdate), this.setTimeout(function() {
                        setTimeout(function() {
                            this.loading = !1, this.url = e, this.page = o
                        }.bind(this), this.prop.timeoutAfter)
                    }.bind(this), this.prop.timeoutUpdate), !0
                }
            }, {
                key: "popstate",
                value: function() {
                    return this.disabledTries = 0, window.onpopstate = this.popstateEvent.bind(this), !0
                }
            }, {
                key: "popstateEvent",
                value: function(e) {
                    return this.prop.popstateEvent ? (this.catchStopLoading(), !0) : (location.reload(), !1)
                }
            }, {
                key: "catchStopLoading",
                value: function() {
                    !this.loading & !this.prop.disabled ? (this.load(location.href, !1), this.disabledTries = 0) : (this.disabledTries++, this.disabledTries <= this.prop.disabledTries && window.requestAnimationFrame(this.catchStopLoading.bind(this)))
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!t && (this.data = {
                        proceeded: "data-" + this.prefix + "-proceeded"
                    }, this.outer = null, this.links = [], this.changes = 0, this.url = window.location.href, this.page = this.prop.v.getPage(), this.startLoading = 0, this.loading = !1, this.popstate(), this.getElements(), this.setEvents(), Object.assign(t, {
                        changes: function() {
                            return e.changes
                        },
                        links: function() {
                            return e.links
                        },
                        outer: function() {
                            return e.outer
                        },
                        url: function() {
                            return e.url
                        },
                        page: function() {
                            return e.page
                        },
                        loading: function() {
                            return e.loading
                        },
                        getElements: this.getElements.bind(this),
                        setEvents: this.setEvents.bind(this),
                        load: this.load.bind(this)
                    }))
                }
            }]), r
        }(), p.prototype.Page = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prop = Object.assign(t.prop, {
                        name: "" + t.prefix
                    }), e) t.prop[i] = e[i];
                return t.targets = ["create", "show", "hide", "destroy", "resize", "resizeW", "resizeH"], t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["name", "string"]
                        ]
                    })
                }
            }, {
                key: "resize",
                value: function() {
                    return this.launchEventsByTarget("resize"), !0
                }
            }, {
                key: "resizeW",
                value: function() {
                    return this.launchEventsByTarget("resizeW"), !0
                }
            }, {
                key: "resizeH",
                value: function() {
                    return this.launchEventsByTarget("resizeH"), !0
                }
            }, {
                key: "create",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (this.created) return !1;
                    this.created = !0;
                    var e = this.prop.v.viewport;
                    return this.resizeId = e.add({
                        target: "wh",
                        name: this.name + " Resize",
                        do: this.resize.bind(this)
                    }), this.resizeWId = e.add({
                        target: "w",
                        name: this.name + " Resize Width",
                        do: this.resizeW.bind(this)
                    }), this.resizeHId = e.add({
                        target: "h",
                        name: this.name + " Resize Height",
                        do: this.resizeH.bind(this)
                    }), this.launchEventsByTarget("create"), !0
                }
            }, {
                key: "show",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !this.shown && (this.shown = !0, this.launchEventsByTarget("show"), !0)
                }
            }, {
                key: "hide",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!this.shown && (this.shown = !1, this.launchEventsByTarget("hide"), !0)
                }
            }, {
                key: "destroy",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!this.created && (this.created = !1, null !== this.resizeId && (this.prop.v.viewport.delete(this.resizeId), this.resizeId = null), null !== this.resizeWId && (this.prop.v.viewport.delete(this.resizeWId), this.resizeWId = null), null !== this.resizeHId && (this.prop.v.viewport.delete(this.resizeHId), this.resizeHId = null), this.launchEventsByTarget("destroy"), this.removeEventListeners(), this.deleteAll(this.prop.console), !0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this);
                    return !!t && (this.created = !1, this.shown = !1, this.resizeId = null, this.resizeWId = null, this.resizeHId = null, this.prop.v.pages instanceof Array || (this.prop.v.pages = []), this.prop.v.pages.push(this.prop.name), Object.assign(t, {
                        shown: function() {
                            return e.shown
                        },
                        created: function() {
                            return e.created
                        },
                        create: this.create.bind(this),
                        show: this.show.bind(this),
                        hide: this.hide.bind(this),
                        destroy: this.destroy.bind(this)
                    }))
                }
            }]), r
        }(), p.prototype.Columns = function(e) {
            function r() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                u(this, r);
                var t = l(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
                for (var i in t.prefix = t.prefix + "columns", t.prop = Object.assign(t.prop, {
                        selector: "#" + t.prefix,
                        selectorItem: "#" + t.prefix,
                        columns: [0, 1, 2]
                    }), e) t.prop[i] = e[i];
                return t
            }
            return h(r, p.prototype.Class), o(r, [{
                key: "check",
                value: function() {
                    return !!this.checkTypes({
                        obj: this.prop,
                        name: this.name,
                        console: this.prop.console,
                        vars: [
                            ["selector", "dom"],
                            ["selectorItem", "dom"],
                            ["columns", "numberArray"]
                        ]
                    }) && (this.firstLoad && this.getElements(), this.moveItemsToParent(), this.deleteColumns(), this.createColumns(), this.insertItems(), !(this.firstLoad = !1))
                }
            }, {
                key: "getElements",
                value: function() {
                    return this.outer = this.prop.v.doc().querySelector(this.prop.selector), this.outer.classList.add("" + this.prefix), this.elements = this.outer.querySelectorAll(this.prop.selectorItem), !0
                }
            }, {
                key: "moveItemsToParent",
                value: function() {
                    for (var e = 0; e < this.elements.length; e++) this.outer.appendChild(this.elements[e]);
                    return !0
                }
            }, {
                key: "deleteColumns",
                value: function() {
                    this.outer.classList.remove(this.prefix + "_" + this.columns.length);
                    for (var e = 0; e < this.columns.length; e++) this.outer.removeChild(this.columns[e]);
                    return this.columns = [], !(this.lastColumn = 0)
                }
            }, {
                key: "createColumns",
                value: function() {
                    this.outer.classList.add(this.prefix + "_" + this.prop.columns.length);
                    for (var e = 0; e < this.prop.columns.length; e++) {
                        var t = document.createElement("div");
                        t.classList.add(this.prefix + "__column"), t.classList.add(this.prefix + "__column_" + e), this.outer.appendChild(t), this.columns.push(t)
                    }
                    return !0
                }
            }, {
                key: "insertItems",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.elements,
                        t = 0;
                    e !== this.elements && (t = this.lastColumn + 1) >= this.prop.columns.length && (t = 0);
                    for (var i = 0, r = t; i < e.length; r++, i++) {
                        var s = this.prop.columns[r];
                        this.columns[s].appendChild(e[i]), (this.lastColumn = r) >= this.prop.columns.length - 1 && (r = -1)
                    }
                    return !0
                }
            }, {
                key: "addItem",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!this.checkType("htmlElement", e) && (this.insertItems([e]), !0)
                }
            }, {
                key: "addHtml",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                    if (!this.checkType("string", e)) return !1;
                    var t = document.createElement("html");
                    t.innerHTML = e;
                    for (var i = t.querySelectorAll(this.prop.selectorItem), r = 0; r < i.length; r++) this.addItem(i[r]);
                    return !0
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return this.firstLoad = !0, this.outer = null, this.elements = [], this.columns = [], this.lastColumn = 0, !!a(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "init", this).call(this) && {
                        addHtml: this.addHtml.bind(this),
                        addItem: this.addItem.bind(this),
                        getElements: this.getElements.bind(this),
                        prop: function() {
                            return e.prop
                        },
                        changeProp: this.changeProp.bind(this)
                    }
                }
            }]), r
        }(), p.prototype.init = function() {
            var e = this;
            if (!this.checkTypes({
                    obj: this.prop,
                    name: this.name,
                    console: this.prop.console,
                    vars: [
                        ["console", "boolean"],
                        ["page", "string"],
                        ["tablet", "integer"],
                        ["mobile", "integer"]
                    ]
                })) return !1;
            this.console("Hello, V!", null, "title", !0), this.loadEvent(), this.setPage(), this.os = this.setOS(), this.document.classList.add(this.prefix + "os_" + this.os), this.console("OS: " + this.os), this.browser = this.setBrowser(), this.document.classList.add(this.prefix + "browser_" + this.browser), this.console("Browser: " + this.browser), this.popState(), this.viewport = new this.Viewport(this.prop), this.viewport = this.viewport.init();
            var t = new this.Keydown({
                console: this.prop.console
            });
            t = t.init();
            var i = new this.Swipe({
                console: this.prop.console
            });
            i = i.init();
            var r = new this.Wheel({
                console: this.prop.console
            });
            r = r.init();
            var s = new this.Interval({
                console: this.prop.console
            });
            return s = s.init(), {
                prop: function() {
                    return e.prop
                },
                prefix: function() {
                    return e.prefix
                },
                time: function() {
                    return e.time
                },
                loaded: function() {
                    return e.loaded
                },
                addLoad: this.addLoad.bind(this),
                deleteLoad: this.deleteLoad.bind(this),
                checkType: this.checkType.bind(this),
                checkTypes: this.checkTypes.bind(this),
                childOf: this.childOf.bind(this),
                removeChildren: this.removeChildren.bind(this),
                bindEventListener: this.bindEventListener.bind(this),
                getEventListener: this.getEventListener.bind(this),
                unbindEventListener: this.unbindEventListener.bind(this),
                getPage: function() {
                    return e.page
                },
                os: function() {
                    return e.os
                },
                browser: function() {
                    return e.browser
                },
                console: this.console.bind(this),
                checkPage: this.checkPage.bind(this),
                timeMin: function() {
                    return e.timeMin
                },
                ajaxTimeMax: function() {
                    return e.ajaxTimeMax
                },
                doc: function() {
                    return e.doc
                },
                document: function() {
                    return e.document
                },
                body: function() {
                    return e.body
                },
                viewport: this.viewport,
                vw: this.viewport.vw.bind(this),
                vh: this.viewport.vh.bind(this),
                dpr: this.viewport.dpr.bind(this),
                desktop: this.viewport.desktop.bind(this),
                tablet: this.viewport.tablet.bind(this),
                mobile: this.viewport.mobile.bind(this),
                getResize: this.viewport.events.bind(this),
                addResize: this.addResize.bind(this),
                deleteResize: this.deleteResize.bind(this),
                turnResize: this.turnResize.bind(this),
                getParam: this.getParam.bind(this),
                setParam: this.setParam.bind(this),
                ajax: this.ajax.bind(this),
                bezier: this.bezier.bind(this),
                depthPercent: this.depthPercent.bind(this),
                randInt: this.randInt.bind(this),
                imageSize: this.imageSize.bind(this),
                Event: this.Event,
                keydown: t,
                swipe: i,
                wheel: r,
                interval: s,
                normalizeWheel: this.normalizeWheel,
                Preloader: this.Preloader,
                Scrollbar: this.Scrollbar,
                Animate: this.Animate,
                AnimationFrame: this.AnimationFrame,
                TextAnimate: this.TextAnimate,
                Slider: this.Slider,
                SliderCanvas: this.SliderCanvas,
                SliderContent: this.SliderContent,
                Cursor: this.Cursor,
                Menu: this.Menu,
                Filter: this.Filter,
                Media: this.Media,
                SameHeight: this.SameHeight,
                AjaxContent: this.AjaxContent,
                AjaxPage: this.AjaxPage,
                Page: this.Page,
                Anchor: this.Anchor,
                ScrollEvents: this.ScrollEvents,
                View: this.View,
                Parallax: this.Parallax,
                SmoothScroll: this.SmoothScroll,
                Select: this.Select,
                Form: this.Form,
                Popup: this.Popup,
                Faq: this.Faq,
                Map: this.Map,
                Columns: this.Columns,
                ElasticButton: this.ElasticButton
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        $.fn.serializeObject = function() {
            var e = {},
                t = this.serializeArray();
            return $.each(t, function() {
                e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]), e[this.name].push(this.value || "")) : e[this.name] = this.value || ""
            }), e
        }, Number.isInteger = Number.isInteger || function(e) {
            return "number" == typeof e && Number.isFinite(e) && !(e % 1)
        }, Number.isFinite = Number.isFinite || function(e) {
            return "number" == typeof e && isFinite(e)
        }, [].includes || (Array.prototype.includes = function(e) {
            var t = Object(this),
                i = parseInt(t.length) || 0;
            if (0 === i) return !1;
            var r, s = parseInt(arguments[1]) || 0;
            for (0 <= s ? r = s : (r = i + s) < 0 && (r = 0); r < i;) {
                var o = t[r];
                if (e === o || e != e && o != o) return !0;
                r++
            }
            return !1
        }), String.prototype.includes || (String.prototype.includes = function() {
            return -1 !== String.prototype.indexOf.apply(this, arguments)
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var i = Object(e), r = 1; r < arguments.length; r++) {
                    var s = arguments[r];
                    if (null != s)
                        for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (i[o] = s[o])
                }
                return i
            },
            writable: !0,
            configurable: !0
        })
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        window.page = {
            bezier: {
                on: !0,
                values: [.25, .1, .25, 1]
            },
            bezierText: {
                on: !0,
                values: [.25, .1, .25, 1]
            },
            current: !1,
            creating: !1,
            smoothScroll: !0,
            scrollSelector: void 0,
            preloaderAnimation: 1600,
            ajaxBool: !0,
            ajaxHideBool: !0,
            assetsPrefix: "newday" == location.host ? "assets/" : "/assets/",
            prevDevice: ""
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.frame = new v.AnimationFrame({
            console: !1,
            fps: 40,
            run: !0
        }), page.frame = page.frame.init(), page.frameVideo = new v.AnimationFrame({
            console: !1,
            fps: v.mobile() ? 40 : 29,
            run: !0
        }), page.frameVideo = page.frameVideo.init()
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.audio = {
            isPlaying: !1,
            autoPlay: !0,
            currentVolume: 0,
            volumeK: .015,
            volumeMax: 1,
            volumeEvent: null,
            lines: [0, 0, 0, 0],
            equalizerEvent: null,
            dpr: 1,
            init: function() {
                window.AudioContext = window.AudioContext || window.webkitAudioContext, this.getElements(), this.setEvents(), this.equalizer()
            },
            getElements: function() {
                this.audio = document.querySelector(".v-preloader audio"),   this.on = document.querySelector(".v-preloader #v-audio-on"), this.off = document.querySelector(".v-preloader #v-audio-off"), this.audioButton = document.querySelector(".audio-button a"), this.audioButtonPreloader = document.querySelector(".v-preloader__audio-ico a")
            },
            setEvents: function() {
                var e = this;
              this.volumeEvent = page.frame.add({
                    target: "audioVolume",
                    do: this.setVolume.bind(this)
                })
            },
            toggle: function() {
                this.isPlaying ? this.stop() : this.play()
            },
            play: function() {
                var t = this;
                if (this.isPlaying) return !1;
                this.audio.play().then(function(e) {
                    t.isPlaying = !0, page.frame.turn(t.volumeEvent, !0), page.frame.turn(t.equalizerEvent, !0), t.on.classList.add("active"), t.off.classList.remove("active")
                }).catch(function(e) {})
            },
            stop: function() {
                if (!this.isPlaying) return !1;
                this.isPlaying = !1, page.frame.turn(this.volumeEvent, !0), this.on.classList.remove("active"), this.off.classList.add("active")
            },
            setVolume: function() {
                var e = this;
                this.isPlaying ? (this.currentVolume += this.volumeK / 2, this.currentVolume > this.volumeMax && (this.currentVolume = this.volumeMax, page.frame.turn(this.volumeEvent, !1))) : (this.currentVolume -= this.volumeK, this.currentVolume < 0 && (this.currentVolume = 0, page.frame.turn(this.volumeEvent, !1), setTimeout(function() {
                    e.isPlaying || page.frame.turn(e.equalizerEvent, !1)
                }, 500)))
            },
            equalizer: function() {
                this.canvas = document.querySelector(".audio__equalizer canvas"), this.resize(), v.viewport.add({
                    target: "w",
                    name: "Audio Equalizer",
                    do: this.resize.bind(this),
                    timeout: 50
                }), this.equalizerEvent = page.frame.add({
                    target: "audioEqualizer",
                    do: this.renderEqualizer.bind(this)
                }, !1)
            },
            resize: function() {
                
            },
            renderEqualizer: function() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                for (var e = void 0, t = void 0, i = void 0, r = 1 * this.dpr, s = 0; s < 4; s++) 0 === s ? e = 0 : 1 === s ? e = 3 : 2 === s ? e = 6 : 3 === s && (e = 9), e *= this.dpr, this.lines[s] -= (this.lines[s] - Math.random()) * this.volumeK * 8, (i = this.lines[s] * this.height * this.currentVolume) < 2 * this.dpr && (i = 2 * this.dpr), t = (this.height - i) / 2, this.ctx.fillRect(e, t, r, i)
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.cursor = new v.Cursor({
            console: !1,
            selector: "body",
            selectorAnchor: ".v-cursor__hover, .v-cursor__h",
            moveInner: {
                on: v.desktop(),
                k: .05,
                max: 75,
                ignore: .1
            },
            hideDefault: !1,
            helpers: 4,
            run: v.desktop()
        }), page.cursor = page.cursor.init(), page.cursorInited = !0, page.cursorChange = function() {
            var e = 1580;
            if (page.cursor.changeProp({
                    moveInner: {
                        on: v.desktop(),
                        k: .05,
                        max: 75,
                        ignore: .1
                    },
                    hideDefault: !1,
                    run: v.desktop()
                }), v.desktop()) {
                for (var t = document.querySelectorAll(".home .a-button .v-cursor__hover"), i = 0; i < t.length; i++) v.vw()[1] >= e ? t[i].setAttribute("data-v-cursor-height", "50") : t[i].setAttribute("data-v-cursor-height", "40");
                for (var r = document.querySelectorAll(".button .v-cursor__hover"), s = 0; s < r.length; s++) v.vw()[1] >= e ? (r[s].setAttribute("data-v-cursor-height", "80"), r[s].setAttribute("data-v-cursor-width", "80")) : (r[s].setAttribute("data-v-cursor-height", "60"), r[s].setAttribute("data-v-cursor-width", "60"));
                for (var o = document.querySelectorAll(".services__items .v-cursor__hover"), n = 0; n < o.length; n++) v.vw()[1] >= e ? o[n].setAttribute("data-v-cursor-height", "50") : o[n].setAttribute("data-v-cursor-height", "40");
                for (var a = document.querySelectorAll(".callback__success .v-cursor__hover, button .v-cursor__hover"), l = 0; l < a.length; l++) v.vw()[1] >= e ? a[l].setAttribute("data-v-cursor-height", "50") : a[l].setAttribute("data-v-cursor-height", "40");
                for (var h = document.querySelectorAll(".contacts__screen .a-button .v-cursor__hover"), d = 0; d < h.length; d++) v.vw()[1] >= e ? h[d].setAttribute("data-v-cursor-height", "50") : h[d].setAttribute("data-v-cursor-height", "40")
            }
        }, v.viewport.add({
            target: "w",
            name: "Cursor Change",
            do: page.cursorChange.bind(void 0),
            timeout: 100
        })
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.menu = {
            numPoints: 2,
            delayPerPath: 20,
            delayPointsMax: 0,
            duration: 650,
            delay: 475,
            allow: !1,
            isOpened: !1,
            onOpenProceeded: !1,
            init: function() {
                this.isAnimating = !1, this.opened = !1, this.timeStart = Date.now(), this.delayPointsArray = [], this.getElements(), this.setEvents(), this.socialImages()
            },
            getElements: function() {
                this.obj = {}, this.outer = document.querySelector(".menu"), this.buttonOpen = document.querySelector(".menu-button_open a"), this.buttonClose = document.querySelector(".menu-button_close"), this.buttonCloseA = document.querySelector(".menu-button_close a"), this.request = document.querySelector(".menu__request"), this.requestA = document.querySelector(".menu__request a"), this.language = document.querySelector(".menu__language"), this.pdf = document.querySelector(".menu__pdf"), this.social = document.querySelector(".menu__social"), this.email = document.querySelector(".menu__email"), this.links = document.querySelectorAll(".menu__links li a"), this.linksLi = document.querySelectorAll(".menu__links li"), this.overlay = this.outer.querySelector(".menu-overlay"), this.circle = this.outer.querySelector(".menu-overlay_circle"), this.createPIXI()
            },
            socialImages: function() {
                this.socialImagesCount = 0;
            },
            socialImagesLoaded: function() {
                this.socialImagesCount++, 4 == this.socialImagesCount && (this.allow = !0)
            },
            createPIXI: function() {
                page.headerAnimate.loaded ? this.createPIXICanvas() : page.headerAnimate.onloaded.push(this.createPIXICanvas.bind(this))
            },
            createPIXICanvas: function() {
                var e = document.createElement("canvas");
                e.classList.add("menu__links-canvas"), this.outer.appendChild(e), this.canvas = e;
                var t = page.pixi.init(e);
                this.obj = Object.assign(this.obj, t), this.linksCreate(), window.obj = this.obj
            },
            linksCreate: function() {
                for (var e = 0; e < this.links.length; e++) {
                    var t = {
                        el: this.links[e],
                        ropeLength: 5,
                        ropeYK: 5,
                        app: this.obj.app,
                        stage: this.obj.stage,
                        shown: !1,
                        callbacks: [],
                        scaleK: 0,
                        allowHover: !0,
                        hasHover: !0,
                        hovered: !1,
                        hoverTicker: 0,
                        hoverProgress: 0,
                        hoverAnimating: !1,
                        hasOuter: !1,
                        color: "#fff"
                    };
                    this.links[e].obj = t, page.headerAnimate.draw(t), page.headerAnimate.setEvents(t)
                }
            },
            linksRemove: function() {
                for (; this.obj.stage.children[0];) this.obj.stage.removeChild(this.obj.stage.children[0])
            },
            resize: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                page.pixi.resize(this.obj), this.linksRemove();
                for (var t = 0; t < this.links.length; t++) page.headerAnimate.draw(this.links[t].obj), this.obj.app.render(), e || page.headerAnimate.show(this.links[t].obj, 1e3)
            },
            onOpen: function() {
                var e = this;
                if (!this.onOpenProceeded) {
                    if (this.onOpenProceeded = !0, this.buttonClose.classList.add("display_flex"), setTimeout(function() {
                            e.buttonClose.classList.add("show")
                        }, v.timeMin()), this.request.classList.add("display_flex"), setTimeout(function() {
                            e.request.classList.add("show")
                        }, v.timeMin()), this.language.classList.add("display_flex"), setTimeout(function() {
                            e.language.classList.add("show")
                        }, v.timeMin()), this.pdf.classList.add("display_flex"), setTimeout(function() {
                            e.pdf.classList.add("show")
                        }, v.timeMin()), this.social.classList.add("show"), this.email.classList.add("show"), this.canvas.classList.add("show"), v.mobile())
                        for (var t = 0; t < this.links.length; t++) this.links[t].obj.shown = !0;
                    else this.resize();
                    for (var i = 0; i < this.linksLi.length; i++) this.linksLi[i].classList.add("show")
                }
            },
            onClose: function() {
                var e = this;
                this.buttonClose.classList.remove("show"), this.outer.classList.add("closing"), setTimeout(function() {
                    e.buttonClose.classList.remove("display_flex")
                }, this.delay), this.request.classList.remove("show"), setTimeout(function() {
                    e.request.classList.remove("display_flex")
                }, this.delay), this.language.classList.remove("show"), setTimeout(function() {
                    e.language.classList.remove("display_flex")
                }, this.delay), this.pdf.classList.remove("show"), setTimeout(function() {
                    e.pdf.classList.remove("display_flex")
                }, this.delay), this.canvas.classList.remove("show"), this.social.classList.remove("show"), this.email.classList.remove("show");
                for (var t = 0; t < this.linksLi.length; t++) this.linksLi[t].classList.remove("show")
            },
            setEvents: function() {
                 this.buttonCloseA.addEventListener("click", function(e) {
                    e.preventDefault(), this.close()
                }.bind(this)), v.keydown.add({
                    target: "once",
                    key: [27],
                    do: this.close.bind(this)
                }), this.requestA.addEventListener("click", function(e) {
                    e.preventDefault(), page.helpers.showCallback()
                }.bind(this)), v.viewport.add({
                    target: "w",
                    name: "Menu Resize",
                    do: this.resize.bind(this, !0),
                    timeout: 100
                }), v.viewport.add({
                    target: "w",
                    name: "Menu Circle Resize",
                    do: function() {
                        this.circleRender(this.isOpened, !0, 1, 1)
                    }.bind(this),
                    timeout: 100
                })
            },
            open: function() {
                if (this.isAnimating || !this.allow) return !1;
                this.onOpenProceeded = !1, this.updateDelayPoints(), this.isOpened = !0, this.timeStart = Date.now(), v.body().classList.add("menu-opened"), this.outer.classList.add("opened"), this.outer.classList.add("opening"), this.renderLoop(), this.circleLoop(), page.ajaxChange()
            },
            close: function() {
                var e = this;
                if (this.isAnimating) return !1;
                this.isAnimating = !0, this.onClose(), setTimeout(function() {
                    e.updateDelayPoints(), e.isOpened = !1, e.timeStart = Date.now(), e.renderLoop(), e.circleLoop()
                }, this.delay / 2)
            },
            sineOut: function(e) {
                return Math.sin(1.5707963267948966 * e)
            },
            exponentialInOut: function(e) {
                return 0 == e || 1 == e ? e : e < .5 ? .5 * Math.pow(2, 20 * e - 10) : -.5 * Math.pow(2, 10 - 20 * e) + 1
            },
            renderLoop: function() {
                var e = this;
                if (v.mobile() || this.render(), Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) window.requestAnimationFrame(this.renderLoop.bind(this));
                else {
                    if (v.mobile()) return void this.render();
                    if (this.outer.classList.remove("opening"), this.outer.classList.remove("closing"), this.isOpened) setTimeout(function() {
                        e.isAnimating = !1
                    }, this.delay), this.onOpen();
                    else {
                        this.isAnimating = !1, this.outer.classList.remove("opened"), v.body().classList.remove("menu-opened");
                        for (var t = 0; t < this.links.length; t++) this.links[t].obj.shown = !1;
                        this.linksRemove()
                    }
                    page.ajaxChange()
                }
            },
            render: function() {
                if (this.isOpened)
                    for (var e = 0; e < this.path.length; e++) this.path[e].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * e)));
                else
                    for (e = 0; e < this.path.length; e++) this.path[e].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - e - 1))))
            },
            updatePath: function(e) {
                for (var t = [], i = 0; i < this.numPoints; i++) {
                    var r = i % 2 == 1 ? this.sineOut : this.exponentialInOut;
                    t[i] = 100 * (1 - r(Math.min(Math.max(e - this.delayPointsArray[i], 0) / this.duration, 1)))
                }
                var s = "";
                s += this.isOpened ? "M 0 0 H " + t[0] : "M " + t[0] + " 0";
                for (i = 0; i < this.numPoints - 1; i++) {
                    var o = (i + 1) / (this.numPoints - 1) * 100,
                        n = o - 1 / (this.numPoints - 1) * 100 / 2;
                    s += "C " + t[i] + " " + n + " " + t[i + 1] + " " + n + " " + t[i + 1] + " " + o + " "
                }
                return s += this.isOpened ? "H 100 V 0" : "H 0 V 0"
            },
            updateDelayPoints: function() {
                for (var e = 0; e < this.numPoints; e++) this.delayPointsArray[e] = 0
            },
            circleLoop: function() {
                var e = this.isOpened,
                    t = new v.Animate({
                        console: !1,
                        duration: e ? 900 : 650,
                        delay: 0,
                        bezier: page.bezier,
                        do: this.circleRender.bind(this, e, !1)
                    });
                t.init(), t.run()
            },
            circleRender: function(e, t, i, r) {
                var s = this,
                    o = i;
                e || (i = 1 - i, r = 1 - r);
                var n = 57,
                    a = v.vw()[1],
                    l = v.vh()[1];
                v.vw()[1] <= 760 && (n = 37, 400 <= v.vw()[1] && (n = 41));
                var h = Math.sqrt(Math.pow(2 * (a - n), 2) + Math.pow(2 * (l - n), 2));
                if (h *= r, this.circle.style.width = h + 6 + "px", this.circle.style.height = h + 6 + "px", this.circle.style.transform = "translate(" + h / 2 + "px, " + h / -2 * r + "px)", v.mobile() && !t) {
                    if (1 === o) {
                        if (this.outer.classList.remove("opening"), this.outer.classList.remove("closing"), this.isOpened) setTimeout(function() {
                            s.isAnimating = !1
                        }, this.delay);
                        else {
                            this.isAnimating = !1, this.outer.classList.remove("opened"), v.body().classList.remove("menu-opened");
                            for (var d = 0; d < this.links.length; d++) this.links[d].obj.shown = !1;
                            this.linksRemove()
                        }
                        page.ajaxChange()
                    }.5 <= r & this.isOpened && this.onOpen()
                }
            }
        }, v.addLoad(function() {
            page.menu.init()
        })
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.preloader = {
            loaded: !1,
            videoWaitEnd: !0,
            playing: !1,
            el: {},
            callbacks: [],
            src: page.assetsPrefix + "video/loading/1920.mp4",
            init: function() {
                this.el.outer = document.querySelector("#v-preloader"), this.el.audio = this.el.outer.querySelector(".v-preloader__audio"), this.el.tap = document.querySelector(".v-preloader__tap"), page.cursor.getElement().classList.add("notinvert"), this.createElements(), v.addLoad(function() {
                // this.el.outer = document.querySelector("#v-preloader"), this.el.audio = this.el.outer.querySelector(".v-preloader__audio"), this.el.tap = document.querySelector(".v-preloader__tap"), page.cursor.getElement().classList.add("notinvert"), this.createElements(), v.addLoad(function() {
                    v.document().classList.remove("v-none-transition")
                }.bind(this))
            },
            createElements: function() {
                page.audio.init(),this.videoInit()
            },
            videoInit: function() {
                var e = this;
                v.checkPage("home") || v.addLoad(function() {
                    setTimeout(e.onended.bind(e), 300)
                })
            },
            onended: function() {
                var e = this;
                v.loaded() && (this.loaded = !0, v.checkPage("home") ? (this.el.outer.classList.add("hide"), page.current.show(), setTimeout(function() {
                    e.el.outer.classList.add("hidden"), e.afterLoad()
                }, 750)) : (v.desktop(), this.hideOnPage()))
            },
            hideOnPage: function() {
                var e = this;
                setTimeout(function() {
                    $(e.el.outer).stop().fadeOut(500, function() {
                        e.afterLoad(), setTimeout(function() {
                            page.current.show()
                        }, 350)
                    })
                }, 10)
            },
            addCallback: function(e) {
                this.callbacks.push(e)
            },
            afterLoad: function() {
                page.cursor.getElement().classList.remove("notinvert");
                for (var e = document.querySelectorAll(".afterLoad"), t = 0; t < e.length; t++) e[t].classList.add("shown");
                for (var i = 0; i < this.callbacks.length; i++) this.callbacks[i]()
            },
            tap: function(e) {
                this.el.tap.classList.add("show"), this.el.clickevent = function() {
                    this.el.tap.classList.remove("show"), e(), window.removeEventListener("click", this.el.clickevent), window.removeEventListener("touchstart", this.el.clickevent)
                }.bind(this), window.addEventListener("click", this.el.clickevent), window.addEventListener("touchstart", this.el.clickevent)
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.dark = {
            el: [],
            inited: !1,
            frameEvent: null,
            whiteHeader: !1,
            getTraceEl: function() {
                for (var e = [page.cursor.getElement(), page.logo, page.language, page.menuButton, page.audioButton], t = [], i = 0; i < e.length; i++) null != e[i] && t.push([e[i], e[i].getBoundingClientRect()]);
                this.elTrace = t;
                for (var r = 0; r < t.length; r++) {
                    var s = t[r][0];
                    s.classList.contains("button") ? s.isButton = !0 : s.isButton = !1, s.classList.contains("audio-button") ? s.isAudioButton = !0 : s.isAudioButton = !1, s.classList.contains("button_invert") ? s.isButtonInvert = !0 : s.isButtonInvert = !1, s.classList.contains("invert") ? s.isInvert = !0 : s.isInvert = !1
                }
            },
            getTraceScrolldown: function() {
                this.scrollDownWhite = document.querySelector(".scrolldown__outer_white"), this.scrollDownRed = document.querySelector(".scrolldown__outer_red"), this.scrollDownWhiteRect = document.querySelectorAll(".scrolldown__outer_white #scrolldown__path_white rect"), this.scrollDownRedRect = document.querySelector(".scrolldown__outer_red #scrolldown__path_red rect"), null != this.scrollDownWhite & null !== this.scrollDownRed && (this.scrollDownBounding = this.scrollDownWhite.getBoundingClientRect())
            },
            getElBounding: function() {
                for (var e = 0; e < this.el.length; e++) this.el[e].bounding = this.el[e].getBoundingClientRect()
            },
            update: function() {
                for (var e = document.querySelectorAll(".el-dark"), t = 0; t < e.length; t++) this.el.push(e[t]), e[t].darkTablet = !1, e[t].classList.contains("el-dark_tablet") && (e[t].darkTablet = !0);
                this.getTraceScrolldown()
            },
            clear: function() {
                this.el = []
            },
            init: function() {
                var e = this;
                return !this.inited && (this.clear(), this.update(), this.getTraceEl(), v.viewport.add({
                    target: "w",
                    name: "Dark Change",
                    do: function() {
                        e.getTraceEl(), e.getTraceScrolldown()
                    },
                    timeout: 100
                }), this.frameEvent = page.frame.add({
                    target: "dark",
                    do: this.render.bind(this)
                }, !1), this.inited = !0)
            },
            render: function() {
                this.getElBounding();
                for (var e = 0; e < this.elTrace.length; e++)
                    if (null != this.elTrace[e]) {
                        var t = this.elTrace[e][0],
                            i = this.elTrace[e][1];
                        0 === e && (i = t.getBoundingClientRect());
                        for (var r = i.top + i.height / 2, s = !1, o = 0; o < this.el.length; o++)(v.desktop() || this.el[o].darkTablet) && this.el[o].bounding.top < r & this.el[o].bounding.bottom > i.bottom && (s = !0);
                        if (s ? t.isButton ? t.isButtonInvert || (t.classList.add("button_invert"), t.isButtonInvert = !0, t.isAudioButton && page.audio.renderEqualizer()) : t.isInvert || (t.classList.add("invert"), t.isInvert = !0) : t.isButton ? t.isButtonInvert && (t.classList.remove("button_invert"), t.isButtonInvert = !1, t.isAudioButton && page.audio.renderEqualizer()) : t.isInvert && (t.classList.remove("invert"), t.isInvert = !1), t == page.logo & this.whiteHeader)
                            if (50 < page.wrap.scrollTop) {
                                var n = !0;
                                s && (n = !1), n ? page.header.classList.add("invert") : page.header.classList.remove("invert")
                            } else page.header.classList.remove("invert")
                    }
                if (v.desktop() && null != this.scrollDownWhite & null !== this.scrollDownRed) {
                    for (var a = this.scrollDownBounding, l = 100, h = 100, d = !1, c = 0; c < this.el.length; c++) {
                        var u = this.el[c].bounding;
                        u.top < a.bottom & u.bottom + a.height > a.bottom && ((l = -1 * (a.top - u.top)) < 0 && (l = 0), l = l / a.height * 100, 0 === (l = parseInt(l)) & (this.el[c].classList.contains("v-footer") || this.el[c].classList.contains("callback")) && (d = !0), (h = a.bottom - u.bottom) < 0 && (h = 0), h = 100 - h / a.height * 100, h = parseInt(h))
                    }
                    0 === l & d ? (this.scrollDownWhite.classList.add("hide"), this.scrollDownRed.classList.add("hide")) : (this.scrollDownWhite.classList.remove("hide"), this.scrollDownRed.classList.remove("hide"));
                    for (var p = 0; p < this.scrollDownWhiteRect.length; p++) this.scrollDownWhiteRect[p].setAttribute("y", l / 100 * 140), this.scrollDownWhiteRect[p].setAttribute("height", h / 100 * 140)
                }
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.slick = {
            el: [],
            init: function() {
                this.el = document.querySelectorAll(".slick");
                for (var e = 0; e < this.el.length; e++) {
                    if (!this.el[e].getAttribute("data-slick-proceeded")) {
                        var t = {
                            el: this.el[e]
                        };
                        this.initSlider(this.el[e], t), this.el[e].setAttribute("data-slick-proceeded", "true")
                    }
                }
            },
            initSlider: function(e, t) {
                var i = "slick_" + v.randInt(0, 1e3) * v.randInt(0, 50);
                t.id = i, this.moveSlides(e, t), this.proceedSlides(e, t), e.setAttribute("id", i), this.createCounter(e, t), this.createControls(e, t), this.createSlider(e, t), this.setEvents(e, t), e.show = this.show.bind(this, e, t), e.hide = this.hide.bind(this, e, t)
            },
            moveSlides: function(e, t) {
                var i = e.querySelectorAll(".slick__slide"),
                    r = [],
                    s = document.createElement("div");
                s.classList.add("slick__outer"), e.appendChild(s), t.outer = s;
                for (var o = 0; o < i.length; o++) s.appendChild(i[o]), r.push(i[o]);
                t.slides = r
            },
            proceedSlides: function(e, t) {
                for (var i = 0; i < t.slides.length; i++) {
                    var r = t.slides[i].querySelector(".slick__canvas");
                    if (null != r) {
                        var s = {
                            el: t.slides[i],
                            canvasOuter: r,
                            hovered: !1,
                            forceHovered: !1,
                            hasHover: !1,
                            resizeRedraw: !0
                        };
                        page.imageCanvas.add(s)
                    }
                }
                t.slidesToShow = e.getAttribute("data-slidesToShow") ? parseInt(e.getAttribute("data-slidesToShow")) : 1, 3 == t.slidesToShow && (v.tablet() || v.mobile()) && (t.slidesToShow = 2, v.vw()[1] <= 760 && (t.slidesToShow = 1))
            },
            createCounter: function(e, t) {
                var i = document.createElement("div");
                i.classList.add("slick__counter"), e.appendChild(i);
                var r = document.createElement("div");
                r.classList.add("slick__current"), r.innerHTML = "<span>00</span>", i.appendChild(r);
                var s = document.createElement("div");
                s.classList.add("slick__separator"), i.appendChild(s);
                var o = document.createElement("div");
                o.classList.add("slick__total"), i.appendChild(o), t.currents = [];
                for (var n = 0; n < t.slides.length; n++) {
                    var a = document.createElement("div"),
                        l = n + 1;
                    n < 9 && (l = "0" + l), a.innerHTML = l, 0 === n && (a.style.opacity = 1), r.appendChild(a), t.currents.push(a)
                }
                var h = t.slides.length / t.slidesToShow;
                h < 10 && (h = "0" + h), o.innerHTML = h
            },
            createControls: function(e, t) {
                var i = document.createElement("div");
                i.classList.add("slick__control"), i.classList.add("slick__control_prev"), i.innerHTML = '\n            <div class="v-cursor__hover" data-v-cursor-width="60" data-v-cursor-height="60"></div>\n            <div class="v-cursor__inner">\n                <div class="arrow">\n                    <div class="arrow-bg"></div>\n                </div>\n            </div>\n        ', e.appendChild(i), t.prev = i;
                var r = document.createElement("div");
                r.classList.add("slick__control"), r.classList.add("slick__control_next"), r.innerHTML = '\n            <div class="v-cursor__hover" data-v-cursor-width="60" data-v-cursor-height="60"></div>\n            <div class="v-cursor__inner">\n                <div class="arrow">\n                    <div class="arrow-bg"></div>\n                </div>\n            </div>\n        ', e.appendChild(r), t.next = r
            },
            createSlider: function(e, t) {
                $("#" + t.id + " .slick__outer").slick({
                    dots: !1,
                    arrows: !1,
                    infinite: !!e.getAttribute("data-loop"),
                    speed: 650,
                    slidesToShow: t.slidesToShow,
                    slidesToScroll: t.slidesToShow,
                    centerMode: !e.getAttribute("data-noCenter"),
                    focusOnSelect: !!e.getAttribute("data-focusOnSelect"),
                    variableWidth: !0,
                    draggable: !0
                }), t.slider = $("#" + t.id + " .slick__outer")
            },
            setEvents: function(e, t) {
                t.prev.addEventListener("click", function(e) {
                    e.slider.slick("slickPrev")
                }.bind(this, t)), t.next.addEventListener("click", function(e) {
                    e.slider.slick("slickNext")
                }.bind(this, t)), t.slider.on("beforeChange", function(e, t, i, r, s) {
                    var o = s;
                    o = Math.ceil(o / e.slidesToShow);
                    for (var n = 0; n < e.currents.length; n++) e.currents[n].style.opacity = n !== o ? 0 : 1;
                    if (e.el.classList.contains("slick_images"))
                        for (var a = e.outer.querySelectorAll(".slick__wrap-w"), l = 0; l < a.length; l++) this.parallaxAnimate(a[l], r, s)
                }.bind(this, t));
                for (var i = 0; i < t.slides.length; i++) {
                    var r = t.slides[i].querySelector(".slick__expand");
                    null != r && r.addEventListener("click", this.expand.bind(this, t.slides[i].obj))
                }
            },
            parallaxAnimate: function(e, t, i) {
                if (t != i) {
                    var r = new v.Animate({
                        console: !1,
                        duration: 750,
                        delay: 0,
                        bezier: page.bezier,
                        do: function(e, t, i, r, s) {
                            void 0 === e.currentX && (e.currentX = 0);
                            var o = s;
                            o = s <= .5 ? s / .5 : (1 - s) / .5;
                            var n = 100;
                            i < t && (n *= -1), e.currentX = n * o, e.style.transform = "translate3d(" + e.currentX + "px, 0, 0)"
                        }.bind(this, e, t, i)
                    });
                    r.init(), r.run()
                }
            },
            show: function(e, t) {
                for (var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {}, r = 0, s = t.slides.length, o = 0; o < t.slides.length; o++)
                    if (void 0 !== t.slides[o].obj.show) {
                        var n = t.slides[o].getBoundingClientRect(),
                            a = !0,
                            l = n.top <= v.vh()[1] && 0 <= n.top + n.height,
                            h = n.left <= v.vw()[1] && 0 <= n.left + n.width;
                        l && h && (a = !1), t.slides[o].obj.show(function() {
                            ++r == s && i()
                        }.bind(this), a)
                    }
            },
            hide: function(e, t) {
                for (var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {}, r = 0, s = t.slides.length, o = 0; o < t.slides.length; o++)
                    if (void 0 !== t.slides[o].obj.hide) {
                        var n = t.slides[o].getBoundingClientRect(),
                            a = !0,
                            l = n.top <= v.vh()[1] && 0 <= n.top + n.height,
                            h = n.left <= v.vw()[1] && 0 <= n.left + n.width;
                        l && h && (a = !1), t.slides[o].obj.hide(function() {
                            ++r == s && i()
                        }.bind(this), a)
                    }
            },
            expand: function(o, a) {
                var n = this;
                if (a.preventDefault(), a.target.parentNode.classList.contains("slick-current")) {
                    page.current.obj().scroll.stopScroll(), o.el.classList.add("hidden");
                    var e = document.createElement("div");
                    e.classList.add("image__fixed"), page.wrap.appendChild(e);
                    var t = document.createElement("div");
                    t.classList.add("image__fixed-canvas"), e.appendChild(t);
                    var l = document.createElement("div");
                    l.classList.add("bg-outer"), l.classList.add("el-dark"), l.style.opacity = 0, t.appendChild(l);
                    var h = document.createElement("div");
                    h.classList.add("bg-image"), h.style.opacity = 1, h.style.backgroundImage = "url(" + o.image.src + ")", l.appendChild(h), page.dark.init() || page.dark.update();
                    var d = o.canvasOuter.getBoundingClientRect();
                    o.stop = !0, o.hovered = !0, setTimeout(function() {
                        l.style.opacity = 1;
                        var e = d.height - 70,
                            t = d.width - 70,
                            i = d.left + 35,
                            r = d.top + 35;
                        l.style.height = e + "px", l.style.width = t + "px", l.style.transform = "translate(" + i + "px, " + r + "px)", h.style.height = e + 70 + "px", h.style.width = t + 70 + "px", h.style.transform = "translate(-35px, -35px)";
                        var s = new v.Animate({
                            console: !1,
                            duration: 550,
                            delay: 0,
                            bezier: page.bezier,
                            do: function(e, t, i) {
                                var r = d.height - 70 + i * (v.vh()[1] - d.height + 70),
                                    s = d.width - 70 + i * (v.vw()[1] - d.width + 70),
                                    o = (d.left + 35) * (1 - i),
                                    n = (d.top + 35) * (1 - i);
                                l.style.height = r + "px", l.style.width = s + "px", l.style.transform = "translate(" + o + "px, " + n + "px)", h.style.height = r + 70 * (1 - i) + "px", h.style.width = s + 70 * (1 - i) + "px", h.style.transform = "translate(" + -35 * (1 - i) + "px, " + -35 * (1 - i) + "px)", 1 === t && (page.ajaxHideBool = !1, page.ajax.load(a.target))
                            }.bind(n, o)
                        });
                        s.init(), s.run()
                    }, 300)
                }
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.slider = {
            el: [],
            init: function() {
                this.el = document.querySelectorAll(".slider");
                for (var e = 0; e < this.el.length; e++) {
                    if (!this.el[e].getAttribute("data-slider-proceeded")) {
                        var t = new v.AnimationFrame({
                            console: !1,
                            fps: 60,
                            run: !1
                        });
                        t = t.init();
                        var i = {
                            el: this.el[e],
                            loadedSlides: 0,
                            loaded: !1,
                            current: 0,
                            total: 0,
                            transformSlide: 0,
                            transformSlidePrev: 0,
                            transformSlideSmooth: null,
                            transformContent: 0,
                            transformContentPrev: 0,
                            transformContentSmooth: null,
                            imageCurrentShrink: 0,
                            allow: !0,
                            allowRender: !0,
                            dragValueX: null,
                            dragValueY: null,
                            dragChangeX: null,
                            dragChangeY: null,
                            frame: t
                        };
                        this.el[e].obj = i, this.initSlider(i), this.el[e].setAttribute("data-slider-proceeded", "true")
                    }
                }
            },
            initSlider: function(e) {
                var t = "slider_" + v.randInt(0, 1e3) * v.randInt(0, 50);
                e.id = t, e.el.setAttribute("id", t), this.moveSlides(e), this.proceedSlides(e), e.el.show = this.show.bind(this, e), e.el.hide = this.hide.bind(this, e), this.createCounter(e), this.createControls(e), this.setEvents(e), e.frame.add({
                    target: "slider",
                    do: this.render.bind(this, e)
                })
            },
            moveSlides: function(e) {
                var t = document.createElement("div");
                t.classList.add("slider__wrapper"), e.el.appendChild(t), e.wrapper = t;
                var i = e.el.querySelector(".slider__outer_content");
                e.content = i;
                var r = e.el.querySelectorAll(".slider__content");
                e.contents = r;
                var s = e.el.querySelectorAll(".slider__wrap");
                e.wraps = s;
                for (var o = 0; o < e.contents.length; o++) 0 === o && e.contents[o].classList.add("slider-current");
                var n = e.el.querySelector(".slider__outer");
                e.wrapper.appendChild(n), e.outer = n, e.slides = e.el.querySelectorAll(".slider__slide"), e.total = e.slides.length;
                for (var a = 0; a < e.slides.length; a++) 0 === a && e.slides[a].classList.add("slider-current")
            },
            proceedSlides: function(e) {
                for (var t = 0; t < e.slides.length; t++) {
                    var i = e.slides[t].querySelector(".slider__image"),
                        r = document.createElement("div");
                    if (r.classList.add("slider__canvas"), i.appendChild(r), null != r) {
                        var s = {
                            el: e.slides[t],
                            canvasOuter: r,
                            hovered: !1,
                            forceHovered: !1,
                            hasHover: !1,
                            resizeRedraw: !0
                        };
                        e.slides[t].onloadCallback = function(e) {
                            e.loadedSlides++, e.loadedSlides == e.slides.length && (e.loaded = !0, e.el.onloaded && e.el.onloaded())
                        }.bind(this, e), page.imageCanvas.add(s)
                    }
                }
                for (var o = 0; o < e.slides.length; o++) {
                    var n = e.slides[o].querySelector(".slider__expand");
                    n && n.addEventListener("click", this.expand.bind(this, o, e, e.slides[o].obj, n.getAttribute("data-href")))
                }
            },
            show: function(e) {
                for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {}, i = 0, r = e.slides.length, s = 0; s < e.slides.length; s++)
                    if (void 0 !== e.slides[s].obj.show) {
                        var o = e.slides[s].getBoundingClientRect(),
                            n = !0,
                            a = o.top <= v.vh()[1] && 0 <= o.top + o.height,
                            l = o.left <= v.vw()[1] && 0 <= o.left + o.width;
                        a && l && (n = !1), e.slides[s].obj.show(function() {
                            ++i == r && t()
                        }.bind(this), n)
                    }
            },
            hide: function(e) {
                for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {}, i = 0, r = e.slides.length, s = 0; s < e.slides.length; s++)
                    if (void 0 !== e.slides[s].obj.hide) {
                        var o = e.slides[s].getBoundingClientRect(),
                            n = !0,
                            a = o.top < v.vh()[1] && 0 <= o.top + o.height,
                            l = o.left < v.vw()[1] && 0 <= o.left + o.width;
                        a && l && (n = !1), e.slides[s].obj.hide(function() {
                            ++i == r && t()
                        }.bind(this), n)
                    }
            },
            createCounter: function(e) {
                var t = document.createElement("div");
                t.classList.add("counter__counter"), e.el.appendChild(t);
                var i = document.createElement("div");
                i.classList.add("counter__current"), i.innerHTML = "<span>00</span>", t.appendChild(i);
                var r = document.createElement("div");
                r.classList.add("counter__separator"), t.appendChild(r);
                var s = document.createElement("div");
                s.classList.add("counter__total"), t.appendChild(s);
                for (var o = [], n = 0; n < e.slides.length; n++) {
                    var a = document.createElement("div"),
                        l = n + 1;
                    n < 9 && (l = "0" + l), a.innerHTML = l, 0 === n && (a.style.opacity = 1), i.appendChild(a), o.push(a)
                }
                e.currents = o;
                var h = e.slides.length;
                h < 10 && (h = "0" + h), s.innerHTML = h
            },
            createControls: function(e) {
                var t = document.createElement("div");
                t.classList.add("slider__control"), t.classList.add("slider__control_prev"), t.innerHTML = '\n            <div class="v-cursor__hover" data-v-cursor-width="60" data-v-cursor-height="60"></div>\n            <div class="v-cursor__inner">\n                <div class="arrow">\n                    <div class="arrow-bg"></div>\n                </div>\n            </div>\n        ', e.el.appendChild(t), e.prev = t;
                var i = document.createElement("div");
                i.classList.add("slider__control"), i.classList.add("slider__control_next"), i.innerHTML = '\n            <div class="v-cursor__hover" data-v-cursor-width="60" data-v-cursor-height="60"></div>\n            <div class="v-cursor__inner">\n                <div class="arrow">\n                    <div class="arrow-bg"></div>\n                </div>\n            </div>\n        ', e.el.appendChild(i), e.next = i
            },
            setEvents: function(e) {
                e.prev.addEventListener("click", this.prev.bind(this, e)), e.next.addEventListener("click", this.next.bind(this, e)), this.positionate(e), page.current.add({
                    target: "resize",
                    do: this.positionate.bind(this, e),
                    timeout: 150
                }), e.el.addEventListener("mousedown", this.mousedown.bind(this, e, "mouse")), e.el.addEventListener("mousemove", this.mousemove.bind(this, e, "mouse")), e.el.addEventListener("mouseup", this.mouseup.bind(this, e, "mouse")), e.el.addEventListener("touchstart", this.mousedown.bind(this, e, "touch")), e.el.addEventListener("touchmove", this.mousemove.bind(this, e, "touch")), e.el.addEventListener("touchend", this.mouseup.bind(this, e, "touch"))
            },
            mousedown: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "mouse",
                    i = arguments[2];
                e.allow && ("mouse" == t ? (e.dragValueX = i.pageX, e.dragValueY = i.pageY) : (e.dragValueX = i.targetTouches[0].pageX, e.dragValueY = i.targetTouches[0].pageY), e.dragChangeX = 0, e.dragChangeY = 0, e.transformSlideSmooth = 0, e.transformContentSmooth = 0, e.frame.changeProp({
                    run: !0
                }), e.allowRender = !0)
            },
            mousemove: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "mouse",
                    i = arguments[2];
                if (e.allow && null != e.dragValueX) {
                    var r = 0,
                        s = 0;
                    "mouse" == t ? (r = i.pageX, s = i.pageY) : (r = i.targetTouches[0].pageX, s = i.targetTouches[0].pageY), e.dragChangeX = (e.dragValueX - r) / -this.gettransformSlide(), e.dragChangeY = (e.dragValueY - s) / -this.gettransformSlide()
                }
            },
            mouseup: function(e) {
                1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                var t = arguments[2];
                if (e.allow) {
                    0 !== e.dragChangeX ? Math.abs(e.dragChangeX) >= Math.abs(e.dragChangeY) && (t.preventDefault(), t.stopPropagation()) : (e.transformSlideSmooth = null, e.transformContentSmooth = null, e.frame.changeProp({
                        run: !1
                    }), e.allowRender = !1);
                    var i = e.transformSlideSmooth;
                    e.transformContentSmooth;
                    if (e.transformSlideSmooth = null, e.transformContentSmooth = null, e.allowRender = !1, e.frame.changeProp({
                            run: !1
                        }), e.transformSlidePrev = e.transformSlide, e.transformContentPrev = e.transformContent, i < 0) {
                        var r = e.current + 1;
                        r >= e.slides.length && (r = e.slides.length - 1), this.change(e, r, "drag")
                    } else if (0 < i) {
                        var s = e.current - 1;
                        s < 0 && (s = 0), this.change(e, s, "drag")
                    }
                    page.cursor.getElement().classList.remove("v-cursor__element_click")
                }
            },
            render: function(e) {
                if (e.allowRender) {
                    var t = .003;
                    if (v.mobile() && (t = .0075), t = 0, e.transformSlideSmooth += .05 * (e.dragChangeX - e.transformSlideSmooth), e.transformContentSmooth += (e.dragChangeX - e.transformContentSmooth) * (.05 - t), e.transformSlide = e.transformSlidePrev - this.gettransformSlide() * e.transformSlideSmooth, e.transformContent = e.transformContentPrev - this.gettransformSlide() * e.transformContentSmooth, e.outer.style.transform = "translate3d(" + -e.transformSlide + "px, 0, 0)", e.content.style.transform = "translate3d(" + -e.transformContent + "px, 0, 0)", v.desktop()) {
                        var i = e.transformSlideSmooth;
                        i < -1 && (i = -1), 1 < i && (i = 1), e.imageCurrentShrink = i;
                        for (var r = 0; r < e.slides.length; r++) page.imageCanvas.shrinkX(e.slides[r].obj, i)
                    }
                    if (0 !== e.transformSlideSmooth)
                        for (var s = 0; s < e.wraps.length; s++) s == e.current ? e.wraps[s].translateX = .1 * e.transformSlideSmooth : s == e.current - 1 ? e.wraps[s].translateX = .1 - .1 * e.transformSlideSmooth : s == e.current + 1 ? e.wraps[s].translateX = .25 + .25 * e.transformSlideSmooth : e.wraps[s].translateX = .25, e.wraps[s].style.transform = "translateX(" + 100 * e.wraps[s].translateX + "%)"
                }
            },
            prev: function(e) {
                var t = e.current - 1;
                t < 0 || this.change(e, t, "prev")
            },
            next: function(e) {
                var t = e.current + 1;
                t >= e.slides.length || this.change(e, t, "next")
            },
            change: function(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "normal";
                if (e.allow) {
                    e.allow = !1, e.current = t, this.scroll(e, t, i);
                    for (var r = 0; r < e.currents.length; r++) e.currents[r].style.opacity = r !== t ? 0 : 1;
                    for (var s = 0; s < e.slides.length; s++) s !== t ? e.slides[s].classList.remove("slider-current") : e.slides[s].classList.add("slider-current");
                    for (var o = 0; o < e.contents.length; o++) o !== t ? e.contents[o].classList.remove("slider-current") : e.contents[o].classList.add("slider-current")
                }
            },
            gettransformSlide: function() {
                var e = .5 * v.vw()[1] + 240;
                return v.vw()[1] < 1440 && (e = 960, v.desktop() || (e = v.vw()[1])), "home" == page.current.name() && (e = .725 * v.vw()[1], v.vw()[1] < 1440 && (e = .7 * v.vw()[1], v.desktop() || (e = v.vw()[1]))), e
            },
            scroll: function(e, c, t) {
                var i = new v.Animate({
                    console: !1,
                    duration: 550,
                    delay: 0,
                    bezier: page.bezier,
                    do: function(e, t, i, r) {
                        var s = this.gettransformSlide() * c - e.transformSlidePrev;
                        e.transformSlide = e.transformSlidePrev + s * r, e.outer.style.transform = "translate3d(" + -e.transformSlide + "px, 0, 0)";
                        var o = this.gettransformSlide() * c - e.transformContentPrev;
                        e.transformContent = e.transformContentPrev + o * r, e.content.style.transform = "translate3d(" + -e.transformContent + "px, 0, 0)";
                        for (var n = 0; n < e.wraps.length; n++)
                            if (n == c) e.wraps[n].style.transform = "translateX(" + e.wraps[n].translateX * (1 - r) * 100 + "%)";
                            else if (n == e.current - 1) {
                            var a = e.wraps[n].translateX + (-.1 - e.wraps[n].translateX) * r;
                            e.wraps[n].style.transform = "translateX(" + 100 * a + "%)"
                        } else if (n == e.current + 1) {
                            var l = e.wraps[n].translateX + (.25 - e.wraps[n].translateX) * r;
                            e.wraps[n].style.transform = "translateX(" + 100 * l + "%)"
                        }
                        if (v.desktop()) {
                            var h = 0;
                            "drag" == t ? h = e.imageCurrentShrink * (1 - r) : (h = v.depthPercent({
                                scope: [0, .5],
                                t: i
                            }), .5 <= i && (h = 1 - v.depthPercent({
                                scope: [.5, 1],
                                t: i
                            })), "next" == t && (h *= -1));
                            for (var d = 0; d < e.slides.length; d++) page.imageCanvas.shrinkX(e.slides[d].obj, h)
                        }
                        1 === i && (e.transformSlidePrev = e.transformSlide, e.transformContentPrev = e.transformContent, e.imageCurrentShrink = 0, e.allow = !0, e.allowRender = !0, this.positionate(e))
                    }.bind(this, e, t)
                });
                i.init(), i.run()
            },
            positionate: function(e) {
                e.transformSlide = e.transformSlidePrev = this.gettransformSlide() * e.current, e.transformContent = e.transformContentPrev = this.gettransformSlide() * e.current, e.outer.style.transform = "translate3d(" + -e.transformSlide + "px, 0, 0)", e.content.style.transform = "translate3d(" + -e.transformContent + "px, 0, 0)";
                for (var t = 0; t < e.wraps.length; t++) t == e.current - 1 ? e.wraps[t].translateX = -.1 : t == e.current + 1 ? e.wraps[t].translateX = .25 : e.wraps[t].translateX = 0, e.wraps[t].style.transform = "translateX(" + 100 * e.wraps[t].translateX + "%)"
            },
            expand: function(e, t, o, l, i) {
                var n = this;
                if (i.preventDefault(), !i.target.parentNode.classList.contains("slider-current") & t.allow) this.change(t, e);
                else if (t.allow) {
                    t.frame.changeProp({
                        run: !1
                    }), page.current.obj().scroll.stopScroll(), o.el.parentNode.parentNode.parentNode.classList.add("hidden");
                    var r = document.createElement("div");
                    r.classList.add("image__fixed"), page.wrap.appendChild(r);
                    var s = document.createElement("div");
                    s.classList.add("image__fixed-canvas"), r.appendChild(s);
                    var h = document.createElement("div");
                    h.classList.add("bg-outer"), h.classList.add("el-dark"), h.style.opacity = 0, s.appendChild(h);
                    var d = document.createElement("div");
                    d.classList.add("bg-image"), d.style.opacity = 1, v.desktop() ? d.style.backgroundImage = "url(" + o.image.src + ")" : v.tablet() ? o.el.getAttribute("data-image-tablet") ? d.style.backgroundImage = "url(" + o.el.getAttribute("data-image-tablet") + ")" : d.style.backgroundImage = "url(" + o.el.getAttribute("data-image") + ")" : o.el.getAttribute("data-image-mobile") ? d.style.backgroundImage = "url(" + o.el.getAttribute("data-image-mobile") + ")" : o.el.getAttribute("data-image-tablet") ? d.style.backgroundImage = "url(" + o.el.getAttribute("data-image-tablet") + ")" : d.style.backgroundImage = "url(" + o.el.getAttribute("data-image") + ")", h.appendChild(d), page.dark.init() || page.dark.update();
                    var c = o.canvasOuter.getBoundingClientRect();
                    o.stop = !0, o.hovered = !0, setTimeout(function() {
                        h.style.opacity = 1;
                        var e = c.height - 70,
                            t = c.width - 70,
                            i = c.left + 35,
                            r = c.top + 35;
                        h.style.height = e + "px", h.style.width = t + "px", h.style.transform = "translate(" + i + "px, " + r + "px)", d.style.height = e + 70 + "px", d.style.width = t + 70 + "px", d.style.transform = "translate(-35px, -35px)";
                        var s = new v.Animate({
                            console: !1,
                            duration: 550,
                            delay: 0,
                            bezier: page.bezier,
                            do: function(e, t, i) {
                                var r = c.height - 70 + i * (v.vh()[1] - c.height + 70),
                                    s = c.width - 70 + i * (v.vw()[1] - c.width + 70),
                                    o = (c.left + 35) * (1 - i),
                                    n = (c.top + 35) * (1 - i);
                                if (h.style.height = r + "px", h.style.width = s + "px", h.style.transform = "translate(" + o + "px, " + n + "px)", d.style.height = r + 70 * (1 - i) + "px", d.style.width = s + 70 * (1 - i) + "px", d.style.transform = "translate(" + -35 * (1 - i) + "px, " + -35 * (1 - i) + "px)", 1 === t) {
                                    page.ajaxHideBool = !1;
                                    var a = document.createElement("a");
                                    a.setAttribute("href", l), page.screen.appendChild(a), page.ajax.load(a)
                                }
                            }.bind(n, o)
                        });
                        s.init(), s.run()
                    }, 300)
                }
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.scrolldown = {
            frameEvent: null,
            resizeEvent: null,
            pathsShown: !1,
            k: .07,
            rotateK: .75,
            shift: .25,
            init: function() {
                if (this.el = document.querySelectorAll(".scrolldown"), 0 != this.el.length) {
                    this.circles = document.querySelectorAll(".scrolldown__circle #scrolldown__g"), this.scrolldownRotate = 195, this.circlePaths = document.querySelectorAll(".scrolldown__circle  path");
                    for (var e = 0; e < this.circlePaths.length; e++) this.circlePaths[e].scrolldownOpacity = 0;
                    this.frameEvent = page.frame.add({
                        target: "scrolldownCircle-" + +new Date,
                        do: this.animate.bind(this)
                    }, !1), this.resizeEvent = v.viewport.add({
                        target: "w",
                        name: "ScrollDown Change",
                        do: this.toggleResize.bind(this),
                        timeout: 100
                    })
                }
            },
            enable: function() {
                if (!page.current.shown()) return !1;
                if (null !== this.frameEvent & v.desktop()) {
                    page.frame.turn(this.frameEvent, !0);
                    for (var e = 0; e < this.el.length; e++) this.el[e].classList.add("show")
                }
            },
            toggleResize: function() {
                v.desktop() ? this.enable() : null !== this.frameEvent && page.frame.turn(this.frameEvent, !1)
            },
            disable: function() {
                null !== this.frameEvent && page.frame.delete(this.frameEvent), this.frameEvent = null, this.pathsShown = !1, null !== this.resizeEvent && v.viewport.delete(this.resizeEvent)
            },
            animate: function() {
                this.pathsShown ? this.frameEvent : this.setOpacity(), this.scrolldownRotate -= this.rotateK;
                for (var e = 0; e < this.circles.length; e++) this.circles[e].setAttribute("transform", "rotate(" + this.scrolldownRotate + ", 70, 70)")
            },
            setOpacity: function() {
                for (var e = 0; e < this.circlePaths.length; e++) {
                    var t = this.circlePaths[e].scrolldownOpacity,
                        i = !1;
                    if (0 < e) this.circlePaths[e - 1].scrolldownOpacity > this.shift && (i = !0);
                    else i = !0;
                    i && 1 <= (t += this.k) && (t = 1), e == this.circlePaths.length - 1 && 1 == t && (this.pathsShown = !0), this.circlePaths[e].scrolldownOpacity = t, this.circlePaths[e].style.opacity = t
                }
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        window.CanvasSlideshowFont = !1, window.CanvasSlideshow = function(p) {
            var f = {
                canvas: p.canvas,
                expandLink: p.expandLink,
                images: [],
                texts: [],
                pixiImages: [],
                count: 0,
                loaded: 0,
                active: 0,
                animating: !1,
                resizeId: null
            };
            (p = p || {}).displaceScale = p.hasOwnProperty("displaceScale") ? p.displaceScale : [200, 200], p.displacementImage = p.hasOwnProperty("displacementImage") ? p.displacementImage : "", p.displaceScaleTo = [0, 0];
            var t = function(e) {
                    if (f.animating) return !1;
                    if (e > f.count - 1) return !1;
                    if (e < 0) return !1;
                    f.animating = !0, p.expandLink.classList.add("disable");
                    var t = new v.Animate({
                        console: !1,
                        duration: 1200,
                        delay: 0,
                        bezier: page.bezier,
                        do: i.bind(this, e)
                    });
                    t.init(), t.run()
                },
                i = function(e, t, i) {
                    f.displacementSprite.rotation += .02 * i, f.displacementSprite.scale.set(3 * i);
                    var r = i;
                    if (r = .5 < i ? 1 - (r = v.depthPercent({
                            scope: [.5, 1],
                            t: i
                        })) : v.depthPercent({
                            scope: [0, .5],
                            t: i
                        }), f.displacementFilter.scale.x = p.displaceScale[0] * r, f.displacementFilter.scale.y = p.displaceScale[1] * r, i <= .7) {
                        var s = v.depthPercent({
                            scope: [0, .7],
                            t: i
                        });
                        s = 1 - s, s = f.pixiImages[f.active].alpha = s
                    } else {
                        var o = 0;
                        o = f.pixiImages[f.active].alpha = o
                    }
                    if (.3 <= i) {
                        var n = v.depthPercent({
                            scope: [.3, 1],
                            t: i
                        });
                        n = f.pixiImages[e].alpha = n
                    } else {
                        var a = 0;
                        a = f.pixiImages[e].alpha = a
                    }
                    if (1 === t && f.displacementSprite.scale.set(1), i <= .6) {
                        var l = v.depthPercent({
                            scope: [0, .6],
                            t: i
                        });
                        d(!1, f.active, l, l)
                    } else d(!1, f.active, 1, 1);
                    if (.4 <= i) {
                        var h = v.depthPercent({
                            scope: [.4, 1],
                            t: i
                        });
                        d(!0, e, h, h)
                    } else d(!0, e, 0, 0);
                    1 === t && (f.active = e, f.animating = !1, p.expandLink.setAttribute("href", p.hrefs[f.active]), p.expandLink.setAttribute("data-image", p.sprites[f.active]), p.expandLink.classList.remove("disable"))
                },
                d = function(e, t, i, r) {
                    var s = i;
                    if (e || (s = 1 - s), f.texts[t].rope.alpha = s, e) {
                        var o = r;
                        o = r < .35 ? v.depthPercent({
                            scope: [0, .35],
                            t: r
                        }) : .35 < r & r < .7 ? 1 + v.depthPercent({
                            scope: [.35, .7],
                            t: r
                        }) : 2 - v.depthPercent({
                            scope: [.7, 1],
                            t: r
                        });
                        for (var n = -.25 - -.25 * r - .05, a = 0; a < f.texts[t].points.length; a++) f.texts[t].points[a].y = Math.sin(a * n) * (1 - o) * 15 * v.dpr()
                    } else
                        for (var l = -.25 - -.25 * r - .05, h = 0; h < f.texts[t].points.length; h++) f.texts[t].points[h].y = Math.sin(h * l) * r * 15 * v.dpr()
                },
                s = function() {
                    for (var e = f.obj.renderer.width, t = f.obj.renderer.height, i = 0; i < f.pixiImages.length; i++) {
                        var r = v.imageSize({
                            img: f.images[i][0],
                            size: "cover",
                            width: 1.2 * e,
                            height: 1.2 * t,
                            maxWidth: e,
                            maxHeight: t
                        });
                        f.pixiImages[i].x = r.x, f.pixiImages[i].y = r.y, f.pixiImages[i].width = r.imageWidth, f.pixiImages[i].height = r.imageHeight
                    }
                    f.displacementSprite.anchor.set(.5), f.displacementSprite.x = e / 2, f.displacementSprite.y = t / 2, o()
                },
                e = function() {
                    window.CanvasSlideshowFont = !0;
                    for (var e = f.images, t = 0; t < e.length; t++) {
                        var i = new PIXI.Texture.fromImage(e[t][1]),
                            r = new PIXI.Sprite(i);
                        t !== f.active ? r.alpha = 0 : (p.expandLink.setAttribute("href", p.hrefs[t]), p.expandLink.setAttribute("data-image", p.sprites[t])), f.pixiImages.push(r), f.container.addChild(r)
                    }
                    s(), v.addLoad(s.bind(this)), f.obj.app.ticker.start(), f.resizeId = v.viewport.add({
                        target: "w",
                        name: "CanvasSlideShow Resize",
                        do: s.bind(this),
                        timeout: 100
                    }), f.obj.renderer.render(f.obj.stage)
                },
                r = function() {
                },
                o = function() {
                    var e = f.obj.renderer.width,
                        t = 40;
                    1580 <= v.vw()[1] && (t = 45);
                    var i = 48;
                    1580 <= v.vw()[1] && (i = 54);
                    for (var r = new PIXI.TextStyle({
                            fill: "#fff",
                            fontSize: t * v.dpr(),
                            lineHeight: i * v.dpr(),
                            fontWeight: "600",
                            fontFamily: "AvertaCY",
                            strokeThickness: 0,
                            wordWrap: !0,
                            wordWrapWidth: e
                        }); f.textContainer.children[0];) f.textContainer.removeChild(f.textContainer.children[0]);
                    f.texts = [];
                    for (var s = 0; s < p.texts.length; s++) {
                        var o = {},
                            n = new PIXI.Text(p.texts[s], r);
                        f.textContainer.addChild(n), n.alpha = 0, o.text = n;
                        for (var a = [], l = 30 * v.dpr(), h = Math.ceil(e / l), d = 0; d <= h; d++) {
                            var c = e / h * d;
                            a.push(new PIXI.Point(c, 0))
                        }
                        o.points = a;
                        var u = new PIXI.mesh.Rope(n.texture, a);
                        u.width = n.width, u.height = n.height, u.x = g().x, u.y = g().y, u.alpha = s == f.active ? 1 : 0, f.textContainer.addChild(u), o.rope = u, f.texts.push(o)
                    }
                },
                g = function() {
                    var e = f.obj.renderer.width / 2;
                    return e < 720 * v.dpr() && (e = 720 * v.dpr()), {
                        x: (f.obj.renderer.width - e) / 2,
                        y: f.obj.renderer.height / 2
                    }
                },
                n = function() {
                    f.obj = page.pixi.init(f.canvas), f.container = new PIXI.Container, f.obj.stage.addChild(f.container), f.textContainer = new PIXI.Container, f.obj.stage.addChild(f.textContainer), f.displacementSprite = new PIXI.Sprite.fromImage(p.displacementImage), f.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, f.displacementSprite.scale.x = 2, f.displacementSprite.scale.y = 2, f.obj.stage.addChild(f.displacementSprite), f.displacementFilter = new PIXI.filters.DisplacementFilter(f.displacementSprite), f.displacementFilter.scale.x = 0, f.displacementFilter.scale.y = 0, f.container.filters = [f.displacementFilter], f.count = p.sprites.length;
                    for (var e = 0; e < p.sprites.length; e++) {
                        var t = new Image;
                        t.onload = function() {
                            f.loaded++, f.loaded == f.count && r()
                        }.bind(this), t.src = p.sprites[e], f.images.push([t, p.sprites[e]])
                    }
                };
            ! function() {
                page.headerAnimate.loaded ? n() : page.headerAnimate.onloaded.push(n.bind(this))
            }();
            var a = function(e, t) {
                f.texts[f.active].rope.alpha = 1 - t
            };
            return {
                change: t.bind(this),
                prev: function() {
                    var e = f.active - 1;
                    e < 0 && (e = f.count - 1), t(e)
                }.bind(this),
                next: function() {
                    var e = f.active + 1;
                    e > f.count - 1 && (e = 0), t(e)
                }.bind(this),
                destroy: function() {
                    v.viewport.delete(f.resizeId);
                    for (var e = 0; e < f.obj.resizeEvents.length; e++) v.viewport.delete(f.obj.resizeEvents[e]);
                    f.obj.app.destroy()
                }.bind(this),
                hide: function() {
                    var e = new v.Animate({
                        console: !1,
                        duration: 300,
                        delay: 0,
                        bezier: page.bezier,
                        do: a.bind(this)
                    });
                    e.init(), e.run()
                }.bind(this)
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.sprite = {
            init: function() {
                var e = this,
                    t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    i = t;
                return i.current = 0, i.playing = !1, i.frame = new v.AnimationFrame({
                    console: !1,
                    fps: 30,
                    run: !1
                }), i.frame = i.frame.init(), i.frame.add({
                    target: i.name + " Sprite",
                    do: function() {
                        e.change(i)
                    }
                }), this.load(i), i.play = this.play.bind(this, t), i.pause = this.pause.bind(this, t), i.getImage = this.getImage.bind(this, t), i.getCanvas = this.getCanvas.bind(this, t), i
            },
            load: function(e) {
                var t = new Image;
                t.onload = function() {
                    e.onload(), e.canvas.width = t.width, e.canvas.height = t.height, e.ctx.drawImage(t, 0, 0)
                }, t.src = e.src, e.image = t, e.canvas = document.createElement("canvas"), e.ctx = e.canvas.getContext("2d")
            },
            getImage: function(e) {
                return e.image
            },
            getCanvas: function(e) {
                return e.canvas
            },
            change: function(e) {
                var t = e.count - 1;
                e.reverse ? (t = 0, e.current--) : e.current++;
                var i = e.current >= e.count - 1;
                e.reverse && (i = e.current <= 0), i && (e.current = t, e.frame.changeProp({
                    run: !1
                }), e.playing = !1, e.onended())
            },
            play: function(e) {
                e.playing = !0, e.current = 0, e.reverse && (e.current = e.count - 1), e.frame.changeProp({
                    run: !0
                })
            },
            pause: function(e) {
                e.playing = !1, e.frame.changeProp({
                    run: !1
                })
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.teamObj = {
            created: !1,
            init: function() {
                this.sliderCreate(), this.created = !0
            },
            sliderCreate: function() {
                v.desktop() || (this.wrap = document.querySelector(".team .wrap_1"), this.items = document.querySelectorAll(".team__item"), this.itemLinks = document.querySelectorAll(".team__item .image__link"), this.mobileOuter = document.querySelector(".team__outer"), this.sliderCreateCanvas(), this.sliderCreateSlick(), this.sliderCreateCounter())
            },
            sliderCreateCanvas: function() {
                var e = this,
                    t = document.createElement("div");
                t.classList.add("v-slider"), t.classList.add("v-slider_team");
                var i = document.createElement("ul");
                i.classList.add("v-slider__items"), t.appendChild(i);
                for (var r = 0; r < this.itemLinks.length; r++) {
                    var s = this.itemLinks[r].getAttribute("data-video");
                    if ("/storage/" != s) {
                        var o = document.createElement("li");
                        o.classList.add("v-slider__item"), i.appendChild(o);
                        var n = this.itemLinks[r].getAttribute("data-image"),
                            a = document.createElement("img");
                        a.setAttribute("src", n), o.appendChild(a);
                        var l = this.itemLinks[r].getAttribute("data-image-tablet");
                        l && a.setAttribute("src", l);
                        var h = this.itemLinks[r].getAttribute("data-image-mobile");
                        if (h && a.setAttribute("src", h), s) {
                            var d = document.createElement("video");
                            d.innerHTML = '<source src="' + s + '" type="video/mp4">', o.appendChild(d)
                        }
                    }
                }
                this.sliderCanvas = new v.SliderCanvas({
                    console: !1,
                    selector: ".v-slider_team",
                    tapVideo: !0,
                    tapVideoText: "Tap and hold",
                    interval: !1,
                    control: !0,
                    dot: !1,
                    duration: 750,
                    delay: 0,
                    reverse: !0,
                    direction: "h",
                    parallaxX: 0,
                    parallaxPrev: !1,
                    keydown: !0,
                    swipe: !0,
                    wheel: !1,
                    start: !0,
                    animations: {
                        prev: [.5, 1],
                        next: [0, 1]
                    },
                    bezier: {
                        on: !0,
                        name: "easeInOutCubic"
                    },
                    resizeTimeout: 30,
                    resetAnimatingTimeout: 250
                }), this.sliderCanvas = this.sliderCanvas.init()
            },
            sliderCreateSlick: function() {
                var e = document.createElement("div");
                e.classList.add("team__slick");
                for (var t = 0; t < this.items.length; t++) {
                    var i = this.items[t].querySelector(".image__name");
                    i = i ? i.innerHTML : "";
                    var r = this.items[t].querySelector(".image__related");
                    r = r ? r.innerHTML : "";
                    var s = document.createElement("div");
                    s.classList.add("team__slick-slide"), s.innerHTML = '\n                <div class="team__slick-name">' + i + '</div>\n                <div class="team__slick-related">' + r + "</div>\n            ", e.appendChild(s)
                }
                $(".team__slick").slick({
                    dots: !1,
                    arrows: !1,
                    infinite: !0,
                    speed: 750,
                    cssEase: "ease-in-out",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: !0,
                    variableWidth: !0,
                    draggable: !0,
                    swipe: !0
                })
            },
            sliderCreateCounter: function() {
                var e = document.createElement("div");
                e.classList.add("counter__counter");
                var t = document.createElement("div");
                t.classList.add("counter__current"), t.innerHTML = "<span>00</span>", e.appendChild(t);
                var i = document.createElement("div");
                i.classList.add("counter__separator"), e.appendChild(i);
                var r = document.createElement("div");
                r.classList.add("counter__total"), e.appendChild(r);
                
            
            }
        }, page.teamObj.init()
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.imageCanvas = {
            initialized: !1,
            dpr: 1,
            resizeCallbacks: [],
            bezierName: "linear",
            hover: {
                ticker: .05,
                progressK: .075,
                shrink: [.3, .3],
                sinSize: 3.5,
                sinK: .005,
                padding: 3.5,
                w: 100
            },
            showHide: {
                ticker: -.05,
                progressK: 0,
                shrink: [0, 1],
                sinSize: 0,
                sinK: 0,
                padding: 35,
                w: 0
            },
            shrink: {
                ticker: -.05,
                progressK: 0,
                shrink: [0, 0],
                sinSize: 35,
                sinK: .005,
                padding: 35,
                w: 70
            },
            showHideSettings: function() {
                this.showHide.progressK = .03, "macos" == v.os() || "firefox" == v.browser() ? this.showHide.progressK *= 1.5 : "android" == v.os() && (this.showHide.progressK *= 1.5)
            },
            init: function() {
                if (this.initialized) return !1;
                this.initialized = !0, this.setResize()
            },
            setResize: function() {
                this.resize(), v.viewport.add({
                    target: "wh",
                    name: "Image Canvas",
                    do: this.resize.bind(this),
                    timeout: 100
                })
            },
            resize: function() {
                this.dpr = v.dpr(), v.desktop() && (this.dpr = 1);
                for (var e = 0; e < this.resizeCallbacks.length; e++) this.resizeCallbacks[e]();
                v.desktop() ? (this.showHide.sinSize = 150, this.showHide.w = 70, this.showHide.sinK = .003) : v.tablet() ? (this.showHide.sinSize = 150, this.showHide.w = 60, this.showHide.sinK = .004) : (this.showHide.sinSize = 115, this.showHide.w = .06 * v.vw()[1], this.showHide.sinK = .01, this.showHide.w < 20 && (this.showHide.w = 20))
            },
            add: function(e) {
                e.loaded = !1, e.loadedVideo = !1, e.animating = !1, e.stop = !1, e.ticker = 0, e.progress = 0, e.alpha = 0, e.top = 0, e.left = 0, e.clipWidth = 0, e.clipHeight = 0, e.bounding = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }, e.video = null, e.shown = !1, e.show = function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {},
                        i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    e.animating || this.showHideAnimate(e, !0, t, i)
                }.bind(this, e), e.hide = function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {},
                        i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    e.animating || this.showHideAnimate(e, !1, t, i)
                }.bind(this, e), e.el.obj = e, this.createCanvas(e), this.itemSetResize(e), this.createImage(e)
            },
            createCanvas: function(e) {
                e.canvas = document.createElement("canvas"), e.canvasOuter.appendChild(e.canvas), e.ctx = e.canvas.getContext("2d")
            },
            itemSetResize: function(e) {
                this.itemResize(e), this.resizeCallbacks.push(this.itemResize.bind(this, e))
            },
            itemResize: function(e) {
                var t = Math.floor(e.canvas.clientWidth * this.dpr),
                    i = Math.floor(e.canvas.clientHeight * this.dpr);
                e.width = t, e.height = i, e.canvas.width = e.width, e.canvas.height = e.height
            },
            createImage: function(e) {
                e.imageTablet = null, e.imageMobile = null, e.imageCount = 0, e.imageCountLoaded = 0;
                var t = e.el.getAttribute("data-image");
                if (null != t) {
                    e.image = new Image, e.image.onload = this.imageLoaded.bind(this, e), e.image.src = t, e.imageCount = 1;
                    var i = e.el.getAttribute("data-image-tablet");
                    null !== i && (e.imageTablet = new Image, e.imageTablet.onload = this.imageLoaded.bind(this, e), e.imageTablet.src = i, e.imageCount++);
                    var r = e.el.getAttribute("data-image-mobile");
                    null !== r && (e.imageMobile = new Image, e.imageMobile.onload = this.imageLoaded.bind(this, e), e.imageMobile.src = r, e.imageCount++);
                    var s = e.el.getAttribute("data-video");
                    if (null !== s) {
                        if ("/storage/" == s) return;
                        e.video = document.createElement("video"), e.video.setAttribute("src", s), e.video.setAttribute("muted", ""), e.video.setAttribute("autoplay", ""), e.video.muted = !0, e.video.addEventListener("loadedmetadata", function() {
                            e.loadedVideo = !0
                        }.bind(this, e)), e.video.load()
                    }
                }
            },
            imageLoaded: function(e) {
                e.imageCountLoaded++, e.imageCountLoaded == e.imageCount && (e.loaded = !0, e.el.onloadCallback && e.el.onloadCallback(), this.setEvents(e))
            },
            setEvents: function(e) {
                e.hasHover && (e.onmouseenter = function(e) {
                    if (!e.animating & !e.stop) {
                        if (e.loadedVideo) e.video.play().then(function(e) {}).catch(function(e) {});
                        e.animating = !0, window.requestAnimationFrame(this.hoverAnimate.bind(this, e))
                    }
                }.bind(this, e)), e.resizeRedraw && page.current.add({
                    target: "resizeW",
                    do: this.showHideRedraw.bind(this, e),
                    timeout: 250
                })
            },
            hoverAnimate: function(e) {
                var t = this.hover;
                e.ticker += t.ticker, e.hovered ? (e.alpha += t.progressK, 1 < e.alpha && (e.alpha = 1)) : (e.alpha -= t.progressK, e.alpha < 0 && (e.alpha = 0)), e.hovered ? (e.progress += t.progressK, 1 < e.progress && (e.progress = 1)) : (e.progress -= t.progressK, e.progress < 0 && (e.progress = 0));
                var i = v.bezier({
                        name: this.bezierName,
                        t: e.progress,
                        b: 0,
                        c: 1,
                        d: 1
                    }),
                    r = e.image;
                v.tablet() & null != e.imageTablet && (r = e.imageTablet), v.mobile() & null != e.imageMobile ? r = e.imageMobile : v.mobile() & null != e.imageTablet && (r = e.imageTablet), e.loadedVideo && (r = e.video);
                var s = v.imageSize({
                    img: r,
                    width: e.width,
                    height: e.height,
                    maxWidth: e.width,
                    maxHeight: e.height
                });
                e.left = t.shrink[0] * (1 - i) * e.width / 2, e.top = t.shrink[1] * (1 - i) * e.height / 2, e.clipWidth = e.width - 2 * e.left, e.clipHeight = e.height - 2 * e.top, e.ctx.clearRect(0, 0, e.width, e.height), this.hoverAnimateLines(e), e.ctx.globalAlpha = e.alpha, "VIDEO" == r.tagName ? e.ctx.drawImage(r, 0, 0, r.videoWidth, r.videoHeight, s.x, s.y, s.imageWidth, s.imageHeight) : e.ctx.drawImage(r, 0, 0, r.width, r.height, s.x, s.y, s.imageWidth, s.imageHeight), e.ctx.restore(), !e.hovered & e.progress <= 0 ? (e.animating = !1, e.loadedVideo && (e.video.currentTime = 0, e.video.pause())) : e.stop ? e.loadedVideo && (e.video.currentTime = 0, e.video.pause()) : window.requestAnimationFrame(this.hoverAnimate.bind(this, e))
            },
            hoverAnimateLines: function(e) {
                var t = this.hover;
                e.topPoints = [], e.bottomPoints = [], e.leftPoints = [], e.rightPoints = [], e.ctx.save(), this.lineY(e, t, 1, "top", 1), this.lineY(e, t, 1, "bottom", Math.PI / 2), this.lineX(e, t, 1, "left", 0), this.lineX(e, t, 1, "right", Math.PI / 2)
            },
            showHideAnimate: function(e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                    r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                if (!(t & e.shown || !t & !e.shown)) {
                    var s = this.showHide;
                    e.animating = !0, e.ticker += s.ticker, t ? (e.progress += s.progressK, 1 < e.progress && (e.progress = 1)) : (e.progress -= 1.2 * s.progressK, e.progress < 0 && (e.progress = 0));
                    var o = page.bezier.values,
                        n = v.bezier({
                            values: o,
                            t: e.progress,
                            b: 0,
                            c: 1,
                            d: 1
                        });
                    t || (n = e.progress), r && (t ? (n = 1, e.progress = 1) : (n = 0, e.progress = 0));
                    var a = e.image;
                    v.tablet() & null != e.imageTablet && (a = e.imageTablet), v.mobile() & null != e.imageMobile ? a = e.imageMobile : v.mobile() & null != e.imageTablet && (a = e.imageTablet);
                    var l = v.imageSize({
                        img: a,
                        width: e.width,
                        height: e.height,
                        maxWidth: e.width,
                        maxHeight: e.height
                    });
                    e.left = s.shrink[0] * (1 - n) * e.width, e.top = s.shrink[1] * (1 - n) * e.height, e.clipWidth = e.width - 2 * e.left, e.clipHeight = e.height - 2 * e.top, e.ctx.save(), e.ctx.clearRect(0, 0, e.width, e.height), this.showHideAnimateLines(e, n, t), e.ctx.drawImage(a, 0, 0, a.width, a.height, l.x, l.y, l.imageWidth, l.imageHeight), e.ctx.restore(), t & 1 == e.progress ? e.shown = !0 : !t & 0 == e.progress && (e.shown = !1), t & 1 <= e.progress ? (e.animating = !1, i()) : !t & 0 == e.progress ? (e.animating = !1, i()) : window.requestAnimationFrame(this.showHideAnimate.bind(this, e, t, i, r))
                }
            },
            showHideRedraw: function(e) {
                if (!e.animating && e.shown) {
                    var t = this.showHide,
                        i = e.progress,
                        r = e.image;
                    v.tablet() & null != e.imageTablet && (r = e.imageTablet), v.mobile() & null != e.imageMobile ? r = e.imageMobile : v.mobile() & null != e.imageTablet && (r = e.imageTablet);
                    var s = v.imageSize({
                        img: r,
                        width: e.width,
                        height: e.height,
                        maxWidth: e.width,
                        maxHeight: e.height
                    });
                    e.left = t.shrink[0] * (1 - i) * e.width, e.top = t.shrink[1] * (1 - i) * e.height, e.clipWidth = e.width - 2 * e.left, e.clipHeight = e.height - 2 * e.top, e.ctx.clearRect(0, 0, e.width, e.height), this.showHideAnimateLines(e, i, !0), e.ctx.drawImage(r, 0, 0, r.width, r.height, s.x, s.y, s.imageWidth, s.imageHeight), e.ctx.restore()
                }
            },
            showHideAnimateLines: function(e, t, i) {
                var r = this.showHide,
                    s = e.progress;
                s = i ? t <= .5 ? t / .5 : 1 - (t - .5) / .5 : .2 <= t ? 1 - v.depthPercent({
                    scope: [.2, 1],
                    t: t
                }) : v.depthPercent({
                    scope: [0, .2],
                    t: t
                }), e.topPoints = [], e.bottomPoints = [], e.leftPoints = [], e.rightPoints = [], e.ctx.save(), i ? (this.lineY(e, r, s, "top", 0), this.lineY(e, r, 0, "bottom", 0, !1)) : (this.lineY(e, r, 0, "top", 0, !1), this.lineY(e, r, s, "bottom", 0)), this.lineX(e, r, 0, "left", 0), this.lineX(e, r, 0, "right", 0)
            },
            shrinkX: function(e, t) {
                var i = this.shrink,
                    r = t;
                e.topPoints = [], e.bottomPoints = [], e.leftPoints = [], e.rightPoints = [];
                var s = e.image;
                v.tablet() & null != e.imageTablet && (s = e.imageTablet), v.mobile() & null != e.imageMobile ? s = e.imageMobile : v.mobile() & null != e.imageTablet && (s = e.imageTablet);
                var o = v.imageSize({
                    img: s,
                    width: e.width,
                    height: e.height,
                    maxWidth: e.width,
                    maxHeight: e.height
                });
                e.left = i.shrink[0] * (1 - t) * e.width, e.top = i.shrink[1] * (1 - t) * e.height, e.clipWidth = e.width - 2 * e.left, e.clipHeight = e.height - 2 * e.top, e.ctx.clearRect(0, 0, e.width, e.height), e.ctx.save(), this.lineY(e, i, 0, "top", 0, !1), this.lineY(e, i, 0, "bottom", 0, !1), this.lineX(e, i, r, "left", 0), this.lineX(e, i, r, "right", 0), e.ctx.drawImage(s, 0, 0, s.width, s.height, o.x, o.y, o.imageWidth, o.imageHeight), e.ctx.restore()
            },
            lineX: function(e, t, i) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "left",
                    s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
                    o = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                e.ctx.beginPath();
                var n = t.padding * this.dpr,
                    a = t.w * this.dpr,
                    l = {
                        x: e.left + n,
                        y: 0,
                        size: e.width
                    },
                    h = [];
                "right" == r ? l.x = o ? e.width - e.left - n : e.width - n : o || (l.x = n), e.ctx.moveTo(l.x, l.y);
                for (var d = 0; d <= l.size + a; d++) {
                    var c = d,
                        u = Math.sin(c * t.sinK / this.dpr - s + e.ticker) * t.sinSize * this.dpr * i + l.x;
                    e.ctx.lineTo(u, c), h.push([u, c]), d += a - 1
                }
                "right" == r ? (e.ctx.lineTo(0, h[h.length - 1][1]), e.ctx.lineTo(0, 0)) : (e.ctx.lineTo(e.width, h[h.length - 1][1]), e.ctx.lineTo(e.width, h[0][1])), e.ctx.lineTo(h[0][0], h[0][1]), e.ctx.closePath(), e.ctx.clip()
            },
            lineY: function(e, t, i) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "top",
                    s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
                    o = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                e.ctx.beginPath();
                var n = t.padding * this.dpr,
                    a = t.w * this.dpr,
                    l = {
                        x: 0,
                        y: e.top + n,
                        size: e.width
                    },
                    h = [];
                "bottom" == r ? l.y = o ? e.height - e.top - n : e.height - n : o || (l.y = n), e.ctx.moveTo(l.x, l.y);
                for (var d = 0; d <= l.size + a; d++) {
                    var c = d,
                        u = Math.sin(c * t.sinK / this.dpr - s + e.ticker) * t.sinSize * this.dpr * i + l.y;
                    e.ctx.lineTo(c, u), h.push([c, u]), d += a - 1
                }
                "bottom" == r ? (e.ctx.lineTo(h[h.length - 1][0], 0), e.ctx.lineTo(h[0][0], 0)) : (e.ctx.lineTo(h[h.length - 1][0], e.height), e.ctx.lineTo(h[0][0], e.height)), e.ctx.lineTo(h[0][0], h[0][1]), e.ctx.closePath(), e.ctx.clip()
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.image = {
            el: [],
            delayMouseEnter: 250,
            init: function() {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".image__link", t = document.querySelectorAll(e), i = 0; i < t.length; i++) this.add(t[i])
            },
            add: function(e) {
                if (!e.getAttribute("data-image-proceeded")) {
                    e.setAttribute("data-image-proceeded", "true");
                    var t = {
                        el: e,
                        hasHover: !0,
                        hovered: !1,
                        forceHovered: !1,
                        onmouseenter: function() {},
                        onmouseleave: function() {}
                    };
                    t.el.obj = t;
                    var i = document.createElement("div");
                    i.classList.add("image__bg"), i.classList.add("image__bg_tablet"), e.getAttribute("data-image-tablet") ? i.style.backgroundImage = "url(" + e.getAttribute("data-image-tablet") + ")" : i.style.backgroundImage = "url(" + e.getAttribute("data-image") + ")", e.parentNode.insertBefore(i, e.parentNode.firstChild);
                    var r = document.createElement("div");
                    r.classList.add("image__bg"), r.classList.add("image__bg_mobile"), e.getAttribute("data-image-mobile") ? r.style.backgroundImage = "url(" + e.getAttribute("data-image-mobile") + ")" : e.getAttribute("data-image-tablet") ? r.style.backgroundImage = "url(" + e.getAttribute("data-image-tablet") + ")" : r.style.backgroundImage = "url(" + e.getAttribute("data-image") + ")", e.parentNode.insertBefore(r, e.parentNode.firstChild), this.createCanvas(t), page.imageCanvas.add(t), this.setEvents(t)
                }
            },
            createCanvas: function(e) {
                e.canvasOuter = document.createElement("div"), e.canvasOuter.classList.add("image__canvas"), e.el.appendChild(e.canvasOuter)
            },
            setEvents: function(e) {
                e.mouseenter = this.mouseenter.bind(this, e), e.mouseleave = this.mouseleave.bind(this, e), e.el.addEventListener("mouseenter", this.mouseenter.bind(this, e)), e.el.addEventListener("mouseleave", this.mouseleave.bind(this, e)), "A" == e.el.tagName && e.el.addEventListener("click", this.expand.bind(this, e))
            },
            mouseenter: function(e) {
                v.desktop() && setTimeout(function() {
                    $(e.el).is(":hover") && (e.el.classList.add("hover"), e.el.parentNode.classList.add("hover"), e.el.parentNode.parentNode.classList.add("hover"), e.hovered = !0, e.onmouseenter())
                }, this.delayMouseEnter)
            },
            mouseleave: function(e) {
                e.stop || (e.el.classList.remove("hover"), e.el.parentNode.classList.remove("hover"), e.el.parentNode.parentNode.classList.remove("hover"), e.hovered = !1, e.onmouseleave())
            },
            expand: function(e, t) {
                t.preventDefault(), page.current.obj().scroll.stopScroll();
                var i = document.createElement("div");
                i.classList.add("image__fixed"), page.wrap.appendChild(i);
                var r = document.createElement("div");
                r.classList.add("image__fixed-canvas"), i.appendChild(r);
                var s = document.createElement("div");
                s.classList.add("bg-image"), s.classList.add("el-dark"), s.style.opacity = 1, v.desktop() ? s.style.backgroundImage = "url(" + e.image.src + ")" : v.tablet() ? e.el.getAttribute("data-image-tablet") ? s.style.backgroundImage = "url(" + e.el.getAttribute("data-image-tablet") + ")" : s.style.backgroundImage = "url(" + e.el.getAttribute("data-image") + ")" : e.el.getAttribute("data-image-mobile") ? s.style.backgroundImage = "url(" + e.el.getAttribute("data-image-mobile") + ")" : e.el.getAttribute("data-image-tablet") ? s.style.backgroundImage = "url(" + e.el.getAttribute("data-image-tablet") + ")" : s.style.backgroundImage = "url(" + e.el.getAttribute("data-image") + ")", r.appendChild(s), page.dark.init() || page.dark.update(), e.el.parentNode.classList.add("hideText");
                var o = e.canvasOuter.getBoundingClientRect();
                v.desktop() || (o = e.canvasOuter.parentNode.getBoundingClientRect()), e.stop = !0, e.hovered = !0;
                var n = new v.Animate({
                    console: !1,
                    duration: v.desktop() ? 250 : 50,
                    delay: 0,
                    bezier: page.bezier,
                    do: function(e, t, i) {
                        if (page.imageCanvas.hover.sinSize = 3.5 * (1 - t), page.imageCanvas.hover.padding = 3.5 * (1 - t), page.imageCanvas.hoverAnimate(e), 1 === t) {
                            s.style.opacity = 1, s.style.height = o.height + "px", s.style.width = o.width + "px", s.style.transform = "translate(" + o.left + "px, " + o.top + "px)";
                            var r = new v.Animate({
                                console: !1,
                                duration: 600,
                                delay: 0,
                                bezier: page.bezier,
                                do: function(e, t, i) {
                                    s.style.height = o.height + i * (v.vh()[1] - o.height) + "px", s.style.width = o.width + i * (v.vw()[1] - o.width) + "px", s.style.transform = "translate(" + o.left * (1 - i) + "px, " + o.top * (1 - i) + "px)", 1 === t && (page.ajaxHideBool = !1, page.ajax.load(e.el))
                                }.bind(this, e)
                            });
                            r.init(), r.run()
                        }
                    }.bind(this, e)
                });
                n.init(), n.run()
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.pixi = {
            init: function(e) {
                var t = {
                    canvas: null,
                    resizeEvents: []
                };
                return v.checkType("string", e) ? t.canvas = document.querySelector(e) : v.checkType("htmlElement", e) && (t.canvas = e), this.createApp(t), t
            },
            createApp: function(e) {
                e.app = new PIXI.Application({
                    width: e.canvas.clientWidth,
                    height: e.canvas.clientHeight,
                    antialias: !0,
                    transparent: !0,
                    view: e.canvas,
                    forceCanvas: !1,
                    autoStart: !1
                }), e.stage = e.app.stage, e.app.renderer.autoResize = !0, e.renderer = e.app.renderer, this.resize(e), v.addLoad(this.resize.bind(this, e));
                var t = v.viewport.add({
                    target: "w",
                    name: "PIXI Resize",
                    do: this.resize.bind(this, e),
                    timeout: 50
                });
                e.resizeEvents.push(t)
            },
            resize: function(e) {
                var t = v.dpr();
                if (v.desktop(), null != e.app.renderer) {
                    var i = parseInt(e.canvas.parentNode.clientWidth * t),
                        r = parseInt(e.canvas.parentNode.clientHeight * t);
                    e.app.renderer.resize(i, r)
                }
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.headerAnimate = {
            loaded: !1,
            onloaded: [],
            el: [],
            resizeEvents: [],
            animationIn: 1550,
            animationOut: 600,
            ropeSinK: -.25,
            ropeYK: 0,
            ropeLength: 0,
            scaleK: .1,
            hoverK: .05,
            init: function() {
                this.loaded || (this.changeVars(), v.viewport.add({
                    target: "wh",
                    do: this.changeVars.bind(this),
                    timeout: 500
                }), PIXI.loader.add("font", page.assetsPrefix + "v-fonts/AvertaCY/AvertaCY-Semibold.ttf").load(this.fontLoaded.bind(this)))
            },
            changeVars: function() {
                760 < v.vw()[1] ? (this.ropeYK = 30, this.ropeLength = 30) : (this.ropeYK = 5, this.ropeLength = 5)
            },
            fontLoaded: function() {
                this.loaded = !0;
                for (var e = 0; e < this.onloaded.length; e++) this.onloaded[e]()
            },
            remove: function() {
                for (var e = [], t = [], i = 0; i < this.el.length; i++) v.childOf(this.el[i].el, v.body()) ? e.push(this.el[i]) : this.el[i].app.destroy();
                for (var r = 0; r < this.resizeEvents.length; r++)
                    if (v.childOf(this.resizeEvents[r].el, v.body())) t.push(this.resizeEvents[r]);
                    else
                        for (var s = 0; s < this.resizeEvents[r].array.length; s++) v.viewport.delete(this.resizeEvents[r].array[s]);
                this.el = e, this.resizeEvents = t
            },
            removeListeners: function() {
                for (var e = 0; e < this.el.length; e++) this.el[e].canvas.removeEventListener("webglcontextlost", this.el[e].canvas.webglcontextlost)
            },
            add: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                if (!v.checkType("callbacks", t)) return !1;
                this.remove();
                for (var r = document.querySelectorAll(e), s = 0; s < r.length; s++) {
                    if (!r[s].getAttribute("data-headerAnim-proceeded")) {
                        var o = this.createObject(t, r[s], i);
                        this.el.push(o), this.loaded ? this.create(o) : this.onloaded.push(this.create.bind(this, o)), r[s].setAttribute("data-headerAnim-proceeded", "true")
                    }
                }
                return !0
            },
            getStyles: function(e) {
                var t = e.el.clientWidth * v.dpr(),
                    i = e.el.getAttribute("data-color");
                i = i || "#000", e.color && (i = e.color);
                var r = parseInt(getComputedStyle(e.el).getPropertyValue("font-size")) * v.dpr(),
                    s = parseInt(getComputedStyle(e.el).getPropertyValue("line-height")) * v.dpr(),
                    o = getComputedStyle(e.el).getPropertyValue("letter-spacing");
                return {
                    fontSize: r,
                    lineHeight: s,
                    letterSpacing: o = "normal" != o ? parseInt(o) * v.dpr() : 0,
                    fontStyle: "normal",
                    fontWeight: "600",
                    fill: i,
                    strokeThickness: 0,
                    wordWrap: !0,
                    wordWrapWidth: t
                }
            },
            createObject: function(e, t, i) {
                var r = {
                    el: t,
                    shown: !1,
                    callbacks: e,
                    allowHover: !1,
                    hasHover: !1,
                    hovered: !1,
                    hoverTicker: 0,
                    hoverProgress: 0,
                    hoverAnimating: !1,
                    hasOuter: !0
                };
                return (r = Object.assign(r, i)).ropeYK || (r.ropeYK = this.ropeYK), r.scaleK ? r.scaleK = r.scaleK : r.scaleK = this.scaleK, r
            },
            create: function(e) {
                var t = document.createElement("div");
                t.classList.add("canvas__outer"), e.el.appendChild(t);
                var i = document.createElement("canvas");
                t.appendChild(i), i.webglcontextlost = function() {
                    page.creating
                }.bind(this), i.addEventListener("webglcontextlost", i.webglcontextlost);
                var r = page.pixi.init(i);
                e = Object.assign(e, r), this.resizeEvents.push({
                    el: e.el,
                    array: e.resizeEvents
                }), e.outer = t, e.el.getAttribute("data-hasHover") && (e.hasHover = !0), e.show = this.show.bind(this, e), e.hide = this.hide.bind(this, e), e.resize = this.resize.bind(this, e), e.draw = this.draw.bind(this, e), this.setEvents(e), e.el.obj = e, this.draw(e), page.current.add({
                    target: "resizeW",
                    do: this.resize.bind(this, e),
                    timeout: 100
                }), e.el.classList.contains("v-viewed") && this.show(e)
            },
            setEvents: function(e) {
                e.hasHover && (e.el.addEventListener("mouseenter", function(e) {
                    !e.hoverAnimating && v.desktop() && (e.hovered = !0, this.animateHover(e))
                }.bind(this, e)), e.el.addEventListener("mouseleave", function(e) {
                    e.hovered = !1
                }.bind(this, e)))
            },
            draw: function(e) {
                e.el.style.opacity = "0", e.text = new PIXI.Text(e.el.innerText, this.getStyles(e)), e.text.alpha = 0, e.stage.addChild(e.text), e.points = [], e.ropeLength = e.ropeLength ? e.ropeLength : this.ropeLength;
                var t = e.ropeLength * v.dpr();
                e.ropeCount = Math.ceil(e.text.width / t), e.hasOuter ? (e.paddingX = (e.outer.clientWidth - e.el.clientWidth) / 2 * v.dpr(), e.centerY = (e.text.height - e.el.clientHeight * v.dpr()) / 2 + e.outer.clientHeight / 2 * v.dpr()) : (e.paddingX = parseInt(e.el.getBoundingClientRect().left) * v.dpr(), e.centerY = parseInt(e.el.getBoundingClientRect().top + e.el.clientHeight / 2) * v.dpr());
                for (var i = 0; i <= e.ropeCount; i++) {
                    var r = e.text.width / e.ropeCount * i;
                    e.points.push(new PIXI.Point(r, e.centerY))
                }
                e.rope = new PIXI.mesh.Rope(e.text.texture, e.points), e.rope.width = e.text.width, e.rope.height = e.text.height, e.rope.x = e.paddingX, e.rope.y = 0, e.rope.alpha = e.shown ? 1 : 0, e.stage.addChild(e.rope), e.el.style.color = "transparent", e.el.style.opacity = "1"
            },
            resize: function(e) {
                for (; e.stage.children[0];) e.stage.removeChild(e.stage.children[0]);
                this.draw(e), e.app.render()
            },
            show: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.animationIn,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {};
                this.animate(t, e, !0, i)
            },
            hide: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.animationOut,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {};
                this.animate(t, e, !1, i)
            },
            animate: function(e, t) {
                var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                    s = new v.Animate({
                        console: !1,
                        duration: e,
                        delay: 0,
                        bezier: page.bezier,
                        do: this.animateCanvas.bind(this, t, i, r)
                    });
                s.init(), s.run()
            },
            animateCanvas: function(e, t, i, r, s) {
                var o = 1;
                t ? .5 <= s ? o += (1 - v.depthPercent({
                    scope: [.5, 1],
                    t: s
                })) * e.scaleK : o = 1 + e.scaleK : (o += s * e.scaleK, v.mobile() && (o = 1));
                var n = e.text.width * (o - 1) * -.5 + e.paddingX,
                    a = e.text.height * (o - 1) * -.5 + 2,
                    l = r;
                if (t || (l = v.depthPercent({
                        scope: [0, .5],
                        t: r
                    }), v.mobile() && (l = r), 1 < l && (l = 1), l = 1 - l, l = 1 - s), e.rope.alpha = l, e.rope.x = n, e.rope.y = a, e.rope.scale.set(o), t) {
                    var h = s;
                    h = s < .35 ? v.depthPercent({
                        scope: [0, .35],
                        t: s
                    }) : .35 < s & s < .7 ? 1 + v.depthPercent({
                        scope: [.35, .7],
                        t: s
                    }) : 2 - v.depthPercent({
                        scope: [.7, 1],
                        t: s
                    });
                    for (var d = this.ropeSinK - s * this.ropeSinK - .05, c = 0; c < e.points.length; c++) e.points[c].y = e.centerY + Math.sin(c * d) * (1 - h) * (e.ropeYK * v.dpr());
                    1 === s && (e.stage.filters = [])
                } else if (!v.mobile())
                    for (var u = this.ropeSinK - s * this.ropeSinK - .05, p = 0; p < e.points.length; p++) e.points[p].y = e.centerY + Math.sin(p * u) * s * (e.ropeYK * v.dpr());
                for (var f = 0; f < e.callbacks.length; f++) {
                    var g = e.callbacks[f];
                    !g.proceeded & "show" == g.action & t && s >= g.target && (g.do(e), g.proceeded = !0), !g.proceeded & "hide" == g.action & !t && s >= g.target && (g.do(e), g.proceeded = !0)
                }
                t ? (e.allowHover = !1, 1 === s && (e.shown = !0, e.allowHover = !0, i())) : (e.allowHover = !1, 1 === s && (e.shown = !1, i())), e.app.render(), e.hasHover & t & e.allowHover & $(e.el).is(":hover") && !e.hoverAnimating & v.desktop() && (e.hovered = !0, this.animateHover(e))
            },
            animateHover: function(e) {
                if (e.allowHover) {
                    e.hoverAnimating = !0;
                    var t = this.hoverK,
                        i = e.hoverTicker,
                        r = e.hoverProgress;
                    e.hoverTicker += t, e.hovered ? (e.hoverProgress += t, 1 < e.hoverProgress && (e.hoverProgress = 1)) : (e.hoverProgress -= t, e.hoverProgress < 0 && (e.hoverProgress = 0));
                    for (var s = 0; s < e.points.length; s++) e.points[s].y = e.centerY + Math.sin(s * -this.ropeSinK + i) * r * (e.ropeYK * v.dpr());
                    var o = !0;
                    !e.hovered & 0 === e.hoverProgress && (o = !1, e.hoverAnimating = !1), e.app.render(), o && window.requestAnimationFrame(this.animateHover.bind(this, e))
                }
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {}, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        jQuery.fn.phoneMask = function() {
            return $(this).each(function() {
                $(this).inputmask({
                    mask: ["(999) 999-99-99", "(099) 999-99-99", "(99) 999-99-99"],
                    showMaskOnHover: !1
                })
            })
        }, page.form = {
            init: function() {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".v-popup", s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], t = document.querySelectorAll(e + " .v-form"), i = 0; i < t.length; i++) {
                    var r = "v-form_" + v.randInt(0, 500) + "_" + +new Date;
                    t[i].setAttribute("id", r);
                    var o = new v.Form({
                        console: !1,
                        selector: e + " #" + r,
                        clearAfterSuccess: s,
                        scroll: !1
                    });
                    (o = o.init()).add({
                        target: "success",
                        do: function(e) {
                            var t = e.form.getAttribute("data-form-redirect");
                            null !== t & !page.loginCart && (location.href = t);
                            for (var i = 0; i < e.inputs.length; i++) e.inputs[i].parentNode.classList.remove("error");
                            if (e.form.v_Form_callback && e.form.v_Form_callback(e), s)
                                for (var r = 0; r < e.inputs.length; r++) this.blurEvent(e.inputs[r].parentNode, e.inputs[r])
                        }.bind(this)
                    }), o.add({
                        target: "fail",
                        do: function(e) {
                            for (var t = 0; t < e.inputs.length; t++) e.inputs[t].parentNode.classList.remove("error");
                            for (var i = 0; i < e.errors.length; i++) e.errors[i].e.parentNode.classList.add("error")
                        }.bind(this)
                    }), this.setEvents(t[i])
                }
                return !0
            },
            setEvents: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (null === e) return !1;
                for (var t = e.querySelectorAll(".v-form__input"), i = 0; i < t.length; i++) {
                    if (null === t[i].getAttribute("data-input-proceeded")) {
                        t[i].setAttribute("data-input-proceeded", "true");
                        var r = t[i].querySelector("input");
                        if (null != r || null != (r = t[i].querySelector("textarea"))) {
                            "telephone" == r.name && $(r).phoneMask();
                            var s = (r.getAttribute("placeholder")).toLowerCase(),
                                o = null;
                            null !== s & null === r.getAttribute("data-placeholder-none") && 0 < s.length && ((o = document.createElement("div")).classList.add("v-form__placeholder"), o.innerHTML = "<span style='text-transform:none'>" + s.charAt(0).toUpperCase()+ s.slice(1)+ "</span>", t[i].appendChild(o), r.setAttribute("placeholder", "")), page.current.addEventListener({
                                el: r,
                                target: "focus",
                                do: this.focusEvent.bind(this, e, t[i], r)
                            }), page.current.addEventListener({
                                el: r,
                                target: "blur",
                                do: this.blurEvent.bind(this, e, t[i], r)
                            }), page.current.addEventListener({
                                el: r,
                                target: "keyup",
                                do: this.keyupEvent.bind(this, e, t[i], r)
                            }), r.prevValue = r.value, r.oninput = this.inputEvent.bind(this, e, t[i], r), 0 < r.value.length && t[i].classList.add("v-form__input_focus")
                        }
                    }
                }
                var n = e.querySelector(".callback__file");
                if (n) {
                    var a = n.querySelector('input[type="file"]');
                    a && page.current.addEventListener({
                        target: "change",
                        el: a,
                        do: this.changeFile.bind(this, a, n, e)
                    })
                }
                return !0
            },
            focusEvent: function(e, t, i, r) {
                if (t.classList.add("v-form__input_focus"), !t.classList.contains("error")) {
                    var s = t.querySelector(".v-form__info");
                    s && $(s).stop().slideDown(250)
                }
            },
            blurEvent: function(e, t, i, r) {
                $(i).is(":focus") || 0 === i.value.length && t.classList.remove("v-form__input_focus");
                var s = t.querySelector(".v-form__info");
                s && $(s).stop().slideUp(250)
            },
            validateEmail: function(e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
            },
            keyupEvent: function(e, t, i, r) {
                "name" == i.name && (i.value.length < 2 & 0 < i.value.length ? this.errorSet(e, t, i) : this.errorReset(e, t, i)), "email" == i.name && (0 < i.value.length & !this.validateEmail(i.value) ? this.errorSet(e, t, i) : this.errorReset(e, t, i)), "telephone" == i.name && ("+" == i.value && (i.value = "", this.blurEvent(e, t, i)), i.value.length < 2 & 0 < i.value.length ? this.errorSet(e, t, i) : this.errorReset(e, t, i)), "comment" == i.name && (0 < i.value.length & (i.value.length < 5 || 500 < i.value.length) ? this.errorSet(e, t, i) : this.errorReset(e, t, i))
            },
            inputEvent: function(e, t, i, r) {
                if ("email" == i.name) {
                    var s = r.target.value;
                    if (s.match(/[^a-zA-Z0-9@.]/g)) return void(i.value = i.prevValue);
                    i.prevValue = s
                }
            },
            errorSet: function(e, t, i) {
                i.classList.add("v-form__input_error"), t.classList.add("error");
                var r = t.querySelector(".v-form__error");
                r && $(r).stop().slideDown(250);
                var s = t.querySelector(".v-form__info");
                s && $(s).stop().slideUp(250), i.classList.remove("filled"), this.checkErrors(e)
            },
            errorReset: function(e, t, i) {
                i.classList.remove("v-form__input_error"), t.classList.remove("error");
                var r = t.querySelector(".v-form__error");
                r && $(r).stop().slideUp(250), 0 < i.value.length ? i.classList.add("filled") : i.classList.remove("filled"), this.checkErrors(e)
            },
            checkErrors: function(e) {
                for (var t = e.querySelectorAll(".v-form__input input, .v-form__input textarea"), i = !1, r = !0, s = 0, o = 0; o < t.length; o++) t[o].classList.contains("v-form__input_error") && (i = !0), t[o].classList.contains("filled") && s++;
                s == t.length && (r = !1);
                var n = e.querySelector("input[type='submit']");
                null == n && (n = e.querySelector("button[type='submit']")), i ? e.classList.add("hasErrors") : e.classList.remove("hasErrors"), n.disabled = r
            },
            getFileElements: function(e, t) {
                return {
                    state: e.querySelector(".callback__file-state"),
                    stateAttach: e.querySelector(".callback__file-state .callback__file-attach"),
                    stateLoaded: e.querySelector(".callback__file-state .callback__file-loaded"),
                    stateError: e.querySelector(".callback__file-state .callback__file-error"),
                    title: e.querySelector(".callback__file-title"),
                    titleAttach: e.querySelector(".callback__file-title .callback__file-attach"),
                    titleLoaded: e.querySelector(".callback__file-title .callback__file-loaded"),
                    titleError: e.querySelector(".callback__file-title .callback__file-error"),
                    circle: e.querySelector("svg circle"),
                    exists: t.querySelector('input[name="attach"]')
                }
            },
            changeFile: function(e, t, i) {
                var r = this.getFileElements(t, i),
                    s = e.files,
                    o = e.value;
                return 20 < o.length && (o = "..." + o.slice(-17)), r.titleLoaded.innerHTML = o, r.titleAttach.style.opacity = 0, r.titleLoaded.style.opacity = 1, (r.titleError.style.opacity = 0) == s.length ? (r.titleAttach.style.opacity = 1, r.titleLoaded.style.opacity = 0, r.titleError.style.opacity = 0, r.stateAttach.style.opacity = 1, r.stateLoaded.style.opacity = 0, r.stateError.style.opacity = 0, r.circle.style.strokeDashoffset = 537, void(r.exists.value = 0)) : 2e4 < s[0].size / 1024 ? (r.titleAttach.style.opacity = 0, r.titleLoaded.style.opacity = 0, r.titleError.style.opacity = 1, r.stateAttach.style.opacity = 0, r.stateLoaded.style.opacity = 0, r.stateError.style.opacity = 1, r.circle.style.strokeDashoffset = 537, void(r.exists.value = 0)) : void this.uploadFiles(s, t.getAttribute("data-url"), r)
            },
            uploadFiles: function(e, t, i) {
                var r = e[0],
                    s = new FormData;
                s.append("attachment", r);
                var o = new XMLHttpRequest;
                o.upload.addEventListener("progress", this.uploadProgress.bind(this, i), !1), o.addEventListener("load", this.uploadComplete.bind(this, i), !1), o.addEventListener("error", this.uploadError.bind(this, i), !1), o.addEventListener("abort", this.uploadAbort.bind(this, i), !1), o.open("POST", t), o.send(s)
            },
            uploadProgress: function(e, t) {
                var i = t.loaded / t.total;
                e.circle.style.strokeDashoffset = Math.floor(537 * (1 - i)), e.exists.value = 0
            },
            uploadComplete: function(e, t) {
                e.titleAttach.style.opacity = 0, e.titleLoaded.style.opacity = 1, e.titleError.style.opacity = 0, e.stateAttach.style.opacity = 0, e.stateLoaded.style.opacity = 1, e.stateError.style.opacity = 0, e.circle.style.strokeDashoffset = 0, e.exists.value = 1, console.warn(t)
            },
            uploadError: function(e, t) {
                e.titleAttach.style.opacity = 0, e.titleLoaded.style.opacity = 0, e.titleError.style.opacity = 1, e.stateAttach.style.opacity = 0, e.stateLoaded.style.opacity = 0, e.stateError.style.opacity = 1, e.circle.style.strokeDashoffset = 537, e.exists.value = 0
            },
            uploadAbort: function(e, t) {
                e.titleAttach.style.opacity = 0, e.titleLoaded.style.opacity = 0, e.titleError.style.opacity = 1, e.stateAttach.style.opacity = 0, e.stateLoaded.style.opacity = 0, e.stateError.style.opacity = 1, e.circle.style.strokeDashoffset = 537, e.exists.value = 0
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.helpers = {
            getElements: function() {
                return page.wrap = document.querySelector(".page-wrap"), page.screen = document.querySelector(".page__screen"), page.default = document.querySelector(".default"), page.header = document.querySelector(".v-header"), page.logo = document.querySelector(".v-header__logo"), page.language = document.querySelector(".v-header__language"), page.menuButton = document.querySelector(".menu-button"), page.audioButton = document.querySelector(".audio-button"), page.footer = document.querySelector(".v-footer"), !0
            },
            elementsEvents: function() {
                return !0
            },
            changeAjaxElements: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (null === e) return !1;
                var t = {
                    old: document.querySelector(".v-header__logo"),
                    new: e.querySelector(".v-header__logo")
                };
                null !== t.old & null !== t.new && (t.old.innerHTML = t.new.innerHTML);
                var i = {
                    old: document.querySelector(".v-header__language"),
                    new: e.querySelector(".v-header__language")
                };
                null !== i.old & null !== i.new && i.old.setAttribute("href", i.new.getAttribute("href"));
                var r = {
                    old: document.querySelector(".menu__language a"),
                    new: e.querySelector(".menu__language a")
                };
                return null !== r.old & null !== r.new && r.old.setAttribute("href", r.new.getAttribute("href")), page.helpers.getElements(), !0
            },
            showAjaxHidden: function() {
                for (var e = document.querySelectorAll(".ajax_hidden"), t = 0; t < e.length; t++) e[t].classList.remove("ajax_hidden");
                return !0
            },
            scrollSelector: function() {
                if (void 0 === page.scrollSelector) return this.changeScrollSelector(), v.viewport.add({
                    target: "w",
                    name: "Scroll Selector",
                    do: this.changeScrollSelector.bind(this),
                    timeout: 100
                }), !0
            },
            changeScrollSelector: function() {
                v.mobile() || v.tablet() ? page.scrollSelector = "#wrap" : page.scrollSelector = "#v-scrollbar"
            },
            setCallback: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".callback",
                    t = document.querySelector(e);
                if (null != t) {
                    page.form.init(e);
                    var i = t.querySelector(".v-form");
                    i && (i.v_Form_callback = function(e) {
                        var t = e.querySelector(".callback__form"),
                            i = e.querySelector(".callback__success");
                        if (null != t & null != i) {
                            t.classList.add("hide"), i.classList.remove("hide");
                            for (var r = i.querySelectorAll(".v-view, .v-view_sync"), s = 0; s < r.length; s++) r[s].classList.add("v-view_" + (s + 1)), r[s].classList.add("v-view"), r[s].classList.add("v-viewed")
                        }
                    }.bind(this, t))
                }
            },
            showCallback: function() {
                var l = v.popupText.add({
                    target: "show",
                    do: function(a) {
                        page.helpers.setCallback("#" + v.popupText.id() + " .callback");
                        for (var e = a.outer.querySelectorAll(".callback__form .v-view"), t = 0; t < e.length; t++) e[t].classList.add("v-view_" + (t + 1)), e[t].classList.add("v-viewed");
                        for (var i = a.outer.querySelectorAll(".el-dark"), r = 0; r < i.length; r++) i[r].classList.remove("el-dark");
                        for (var s = a.outer.querySelectorAll("*[data-v-cursor-proceeded]"), o = 0; o < s.length; o++) s[o].removeAttribute("data-v-cursor-proceeded");
                        page.cursor.updateElements(), page.dark.update();
                        var n = a.outer.querySelector(".callback__close");
                        n && n.addEventListener("click", function(e) {
                            e.preventDefault();
                            for (var t = a.outer.querySelectorAll(".callback__form .v-view"), i = t.length - 1, r = 0; 0 <= i; i--, r++) t[i].classList.add("v-view_reverse_" + (r + 1)), t[i].classList.add("v-view_reverse");
                            for (var s = a.outer.querySelectorAll(".callback__success .v-view"), o = s.length - 1, n = 0; 0 <= o; o--, n++) s[o].classList.add("v-view_reverse_" + (n + 1)), s[o].classList.add("v-view_reverse");
                            setTimeout(function() {
                                v.popupText.hide()
                            }, 500)
                        }.bind(this)), setTimeout(function() {
                            page.menu.close()
                        }, 750), v.popupText.delete(l)
                    }.bind(this)
                });
                v.popupText.show({
                    selector: "#callback-popup",
                    types: ["text", "callback"]
                })
            },
            setFullHeight: function() {
                for (var e = document.querySelectorAll(".fullHeight"), t = 0; t < e.length; t++) e[t].style.height = v.vh()[1] + "px";
                for (var i = document.querySelectorAll(".fullHeightMin"), r = 0; r < i.length; r++) i[r].style.minHeight = v.vh()[1] + "px"
            }
        }
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            s = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        page.CommonPage = function(e) {
            function i() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(i, v.Page), r(i, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "init", this).call(this);
                    return !!t && (this.obj = {}, t = Object.assign(t, {
                        obj: function() {
                            return e.obj
                        }
                    }))
                }
            }, {
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "create", this).call(this, e) && (this.textAnimateArray = [], this.subheaders(), this.headers(), !0)
                }
            }, {
                key: "subheaders",
                value: function() {
                    for (var e = document.querySelectorAll(".page__subheader_animate .text"), t = 0; t < e.length; t++)
                        if (v.desktop()) {
                            var i = "id-" + v.randInt(0, 1e3) * v.randInt(0, 1e3);
                            e[t].setAttribute("id", i);
                            var r = new v.TextAnimate({
                                selector: "#" + i
                            });
                            r = r.init(), this.textAnimateArray.push(r), e[t].parentNode.textAnimate = r, e[t].parentNode["v-view-callback"] = function(e, t) {
                                t.classList.add("show"), t.textAnimate.animate({
                                    bezier: page.bezierText,
                                    types: ["letter"],
                                    duration: 450,
                                    shift: .1,
                                    delay: 300,
                                    letter: [{
                                        scope: [0, 1],
                                        property: "opacity",
                                        value: function(e) {
                                            return e
                                        }
                                    }, {
                                        scope: [0, 1],
                                        property: "transform",
                                        value: function(e) {
                                            return "translateX(" + 5 * (1 - e) + "px)"
                                        }
                                    }]
                                })
                            }.bind(this, e[t], e[t].parentNode)
                        } else e[t].parentNode["v-view-callback"] = function(e, t) {
                            t.classList.add("show")
                        }.bind(this, e[t], e[t].parentNode), e[t].parentNode.classList.add("v-view"), e[t].parentNode.classList.add("v-view_bottom")
                }
            }, {
                key: "headers",
                value: function() {
                    if (v.desktop()) {
                        page.headerAnimate.add(".page__header_animate", [{
                            action: "show",
                            target: .5,
                            do: function(e) {
                                var t = e.el.previousElementSibling;
                                t && t.classList.contains("page__subheader_animate") && t["v-view-callback"]();
                                var i = e.el.nextElementSibling;
                                i && i.classList.contains("v-view_header") && (i.classList.add("v-view"), i.classList.add("v-viewed")), page.scrolldown.enable()
                            }.bind(this)
                        }]), page.current.obj().view && page.current.obj().view.changeProp();
                        for (var e = document.querySelectorAll(".page__header_animate"), t = 0; t < e.length; t++) e[t]["v-view-callback"] = function(e) {
                            e.obj && e.obj.show()
                        }.bind(this, e[t])
                    } else {
                        for (var i = document.querySelectorAll(".page__header_animate"), r = 0; r < i.length; r++) {
                            i[r].classList.add("v-view"), i[r].classList.add("v-view_2"), i[r].classList.add("v-view_bottom");
                            var s = i[r].nextElementSibling;
                            s && s.classList.contains("v-view_header") && (s.classList.add("v-view"), s.classList.add("v-view_4"))
                        }
                        page.current.obj().view && page.current.obj().view.changeProp()
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "hide", this).call(this, e);
                    for (var t = 0; t < this.textAnimateArray.length; t++) this.textAnimateArray[t].changeProp({
                        resize: !1
                    });
                    return !0
                }
            }]), i
        }()
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var w = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var i = [],
                        r = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var n, a = e[Symbol.iterator](); !(r = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); r = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            o = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        window.homeVideos = {}, window.homeSprites = {}, page.home = function(e) {
            function s() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(s, v.Page), r(s, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "init", this).call(this);
                    return !!t && (this.obj = {}, t = Object.assign(t, {
                        obj: function() {
                            return e.obj
                        }
                    }), this.thoughAjax = !1, t)
                }
            }, {
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "create", this).call(this, e) && (this.thoughAjax = e, this.ajaxShow = !0, this.setReloadResize(), this.add({
                        target: "resize",
                        do: function() {
                            this.prevDevice != this.setReloadResize() && location.reload()
                        }.bind(this),
                        timeout: 25
                    }), this.scrolldownOuters = document.querySelectorAll(".scrolldown__outer"), this.sliderCreate(), this.servicesSlider(), page.slick.init(), page.slider.init(), this.videosCreate(), this.contactsAdaptive(), !0)
                }
            }, {
                key: "setReloadResize",
                value: function() {
                    return this.prevDevice = "", v.desktop() && (this.prevDevice = "desktop"), v.tablet() && (this.prevDevice = "tablet"), v.mobile() && (this.prevDevice = "tabletMobile", v.vw()[1] <= 760 && (this.prevDevice = "mobile")), this.prevDevice
                }
            }, {
                key: "videosCreate",
                value: function() {
                    var e = this,
                        t = document.querySelector(".home__canvas");
                    this.videos = {}, this.videoActive = null, this.videoSize = [1280, 720], 1440 < v.vw()[1] && (this.videoSize = [1920, 1080]);
                    var i = ["loading", "intro", "loop", "0-1", "1-0", "1-2", "2-1", "3-4", "4-3", "4-5", "5-4"];
                    if (v.mobile() && (i = ["loop", "0-1", "1-0", "1-2", "2-1", "3-4", "4-3", "4-5", "5-4"], this.videoSize = [640, 640]), this.videosOnCanvas = !1, v.desktop() || (this.videosOnCanvas = !0, "opera" != v.browser() && "firefox" != v.browser() && "chrome" != v.browser() || (this.videosOnCanvas = !1)), this.spritesBool = !1, this.sprites = {}, this.spritesLoadedCount = 0, v.mobile() && ("firefox" != v.browser() && "opera" != v.browser() || (this.spritesBool = !0)), this.videosLoadedCount = 0, this.spritesBool ? (this.videosExist = !1, 0 < Object.keys(window.homeSprites).length & Object.keys(window.homeSprites).length != i.length ? location.reload() : 0 < Object.keys(window.homeSprites).length && (this.videosExist = !0, this.ajaxShow = !1)) : (this.videosExist = !1, 0 < Object.keys(window.homeVideos).length & Object.keys(window.homeVideos).length != i.length ? location.reload() : 0 < Object.keys(window.homeVideos).length && (this.videosExist = !0, this.ajaxShow = !1)), this.spritesBool)
                        if (this.videosExist)
                            for (var r in this.videos = window.homeSprites, this.sprites = this.videos, this.sprites) {
                                this.sprites[r];
                                "loop" != r && (this.sprites[r].onended = function(e) {
                                    this.sliderProceeded.proceeded++, this.sliderEnable(), "1-0" == e && (this.sprites.loop.play(), this.videoActive = this.sprites.loop)
                                }.bind(this, r)), setTimeout(function() {
                                    e.videosLoaded()
                                }, 500)
                            } else {
                                for (var s = 0; s < i.length; s++) {
                                    var o = 51;
                                    "loop" == i[s] && (o = 76);
                                    var n = i[s],
                                        a = !1;
                                    "1-0" == n && (n = "0-1", a = !0), "2-1" == n && (n = "1-2", a = !0), "4-3" == n && (n = "3-4", a = !0), "5-4" == n && (n = "4-5", a = !0), this.sprites[i[s]] = page.sprite.init({
                                        src: page.assetsPrefix + "sequence/" + n + "/s1.jpg",
                                        count: o,
                                        reverse: a,
                                        onload: this.videosLoaded.bind(this)
                                    }), "loop" != i[s] && (this.sprites[i[s]].onended = function(e) {
                                        this.sliderProceeded.proceeded++, this.sliderEnable(), "1-0" == e && (this.sprites.loop.play(), this.videoActive = this.sprites.loop)
                                    }.bind(this, i[s]))
                                }
                                this.videos = this.sprites, window.homeSprites = this.videos
                            } else if (this.videosExist)
                                for (var r in this.videos = window.homeVideos, window.homeVideos) {
                                    var l = window.homeVideos[r];
                                    this.videosOnCanvas || t.appendChild(l), setTimeout(function() {
                                        e.videosLoaded()
                                    }, 500), "loading" != r & "intro" != r & "loop" != r && (this.videos[r].onended = function(e) {
                                        this.sliderProceeded.proceeded++, this.sliderEnable(), "1-0" == e && (this.videos.loop.playbackRate = 1, this.videos.loop.currentTime = 0, this.videos.loop.play(), this.videoActive = this.videos.loop)
                                    }.bind(this, r))
                                } else {
                                    for (var h = 0; h < i.length; h++) {
                                        this.videos[i[h]] = document.createElement("video"), this.videos[i[h]].classList.add("v-video"), this.videos[i[h]].setAttribute("preload", ""), this.videos[i[h]].setAttribute("muted", "muted"), this.videos[i[h]].setAttribute("playsinline", "playsinline"), this.videos[i[h]].muted = !0, this.videos[i[h]].volume = 0, this.videosOnCanvas || t.appendChild(this.videos[i[h]]), this.videos[i[h]].playbackRate = 1;
                                        var d = document.createElement("source");
                                        d.setAttribute("src", page.assetsPrefix + "video/" + i[h] + "/" + this.videoSize[0] + ".mp4"), this.videos[i[h]].appendChild(d), this.videos[i[h]].addEventListener("loadedmetadata", this.videosLoaded.bind(this), !1), this.videos[i[h]].load(), "loading" != i[h] & "intro" != i[h] & "loop" != i[h] && (this.videos[i[h]].onended = function(e) {
                                            this.sliderProceeded.proceeded++, this.sliderEnable(), "1-0" == e && (this.videos.loop.playbackRate = 1, this.videos.loop.currentTime = 0, this.videos.loop.play(), this.videoActive = this.videos.loop)
                                        }.bind(this, i[h]))
                                    }
                                    "safari" == !v.browser() && v.desktop() && (window.homeVideos = this.videos)
                                }
                            this.videosToCanvas()
                }
            }, {
                key: "videosToCanvas",
                value: function() {
                    this.videosCanvas = {
                        outer: document.querySelector(".home__canvas"),
                        canvas: document.querySelector(".home__canvas canvas"),
                        width: v.vw()[1],
                        height: v.vh()[1],
                        dpr: 1,
                        sizes: []
                    }, this.videosCanvas.outer.videoOpacity = 0, this.videosCanvas.canvas.videoScale = 0, this.videosCanvas.outer.style.opacity = 0, v.mobile() && (this.videosCanvas.canvas.style.transform = "scale(0)"), this.videosCanvas.ctx = this.videosCanvas.canvas.getContext("2d"), this.videosCanvasResize(), this.add({
                        target: "resize",
                        do: this.videosCanvasResize.bind(this),
                        timeout: this.videosOnCanvas ? 100 : 50
                    }), this.videosFrame = page.frameVideo.add({
                        target: "homeVideosFrame",
                        do: this.videosRender.bind(this)
                    }, !1)
                }
            }, {
                key: "videosCanvasResize",
                value: function() {
                    this.videosCanvas.dpr = v.dpr(), v.desktop() && (this.videosCanvas.dpr = 1);
                    var e = Math.floor(this.videosCanvas.outer.clientWidth * this.videosCanvas.dpr),
                        t = Math.floor(this.videosCanvas.outer.clientHeight * this.videosCanvas.dpr);
                    this.videosCanvas.width = e, this.videosCanvas.height = t, this.videosCanvas.canvas.width = this.videosCanvas.width, this.videosCanvas.canvas.height = this.videosCanvas.height;
                    var i = e,
                        r = this.videoSize[1] * i / this.videoSize[0],
                        s = 0,
                        o = Math.floor((t - r) / 2);
                    if (r < t && (r = t, i = this.videoSize[0] * r / this.videoSize[1], s = Math.floor((e - i) / 2), o = 0), this.videosCanvas.sizes = [s, o, i, r], !this.videosOnCanvas & !this.spritesBool)
                        for (var n in this.videos) {
                            var a = this.videos[n];
                            a.style.left = s / this.videosCanvas.dpr + "px", a.style.top = o / this.videosCanvas.dpr + "px", a.style.width = i / this.videosCanvas.dpr + "px", a.style.height = r / this.videosCanvas.dpr + "px"
                        }
                    this.videosRender(!0)
                }
            }, {
                key: "videosLoaded",
                value: function() {
                    this.videosLoadedCount++, this.spritesBool && this.spritesLoadedCount++, this.videosLoadedCount == Object.keys(this.videos).length & this.spritesLoadedCount == Object.keys(this.sprites).length && (this.spritesBool ? this.spritesStart() : this.videosStart())
                }
            }, {
                key: "videosStart",
                value: function() {
                    var t = this;
                    for (var e in this.videos) {
                        this.videos[e].load()
                    }
                    if (this.thoughAjax) page.frameVideo.turn(this.videosFrame, !0), this.videoActive = this.videos.loop, this.videos.loop.play(), this.show(!0, this.videosExist), page.preloader.afterLoad();
                    else {
                        if (v.tablet()) {
                            this.videoActive = this.videos.loading;
                            var i = this.videos.loading.play();
                            void 0 !== i ? i.then(function(e) {
                                page.frameVideo.turn(t.videosFrame, !0)
                            }).catch(function(e) {
                                page.preloader.tap(function() {
                                    page.frameVideo.turn(t.videosFrame, !0), t.videoActive = t.videos.loading, t.videos.loading.play()
                                })
                            }) : page.frameVideo.turn(this.videosFrame, !0)
                        } else if (v.mobile())
                            if (v.loaded()) {
                                this.videoActive = this.videos.loop;
                                var r = this.videos.loop.play();
                                void 0 !== r ? r.then(function(e) {
                                    page.preloader.onended(), page.frameVideo.turn(t.videosFrame, !0)
                                }).catch(function(e) {
                                    page.preloader.tap(function() {
                                        page.preloader.onended(), page.frameVideo.turn(t.videosFrame, !0), t.videoActive = t.videos.loop, t.videos.loop.play()
                                    })
                                }) : (page.preloader.onended(), page.frameVideo.turn(this.videosFrame, !0))
                            } else v.addLoad(function() {
                                t.videoActive = t.videos.loop;
                                var e = t.videos.loop.play();
                                void 0 !== e ? e.then(function(e) {
                                    page.preloader.onended(), page.frameVideo.turn(t.videosFrame, !0)
                                }).catch(function(e) {
                                    page.preloader.tap(function() {
                                        page.preloader.onended(), page.frameVideo.turn(t.videosFrame, !0), t.videoActive = t.videos.loop, t.videos.loop.play()
                                    })
                                }) : (page.preloader.onended(), page.frameVideo.turn(t.videosFrame, !0))
                            });
                        else page.frameVideo.turn(this.videosFrame, !0), this.videoActive = this.videos.loading, this.videos.loading.play();
                        v.mobile() || (this.videos.loading.repeated = 0, this.videos.loading.onended = function() {
                            this.videos.loading.repeated++, v.loaded() & 2 <= this.videos.loading.repeated ? (this.videos.intro.play(), this.videoActive = this.videos.intro, page.preloader.onended()) : (this.videos.loading.play(), this.videoActive = this.videos.loading)
                        }.bind(this), this.videos.intro.onended = function() {
                            this.videos.loop.play(), this.videoActive = this.videos.loop
                        }.bind(this))
                    }
                    this.videos.loop.callbackEnd = function() {
                        this.videos.loop.play(), this.videoActive = this.videos.loop
                    }.bind(this), this.videos.loop.onended = function() {
                        this.videos.loop.callbackEnd()
                    }.bind(this)
                }
            }, {
                key: "spritesStart",
                value: function() {
                    var e = this;
                    this.thoughAjax ? (page.frameVideo.turn(this.videosFrame, !0), this.videoActive = this.videos.loop, this.videos.loop.play(), this.show(!0, this.videosExist), page.preloader.afterLoad()) : v.loaded() ? page.headerAnimate.loaded ? this.spritesStartDo() : page.headerAnimate.onloaded.push(this.spritesStartDo.bind(this)) : v.addLoad(function() {
                        page.headerAnimate.loaded ? e.spritesStartDo() : page.headerAnimate.onloaded.push(e.spritesStartDo.bind(e))
                    }), this.videos.loop.callbackEnd = function() {
                        this.videos.loop.play(), this.videoActive = this.videos.loop
                    }.bind(this), this.videos.loop.onended = function() {
                        this.videos.loop.callbackEnd()
                    }.bind(this)
                }
            }, {
                key: "spritesStartDo",
                value: function() {
                    this.videoActive = this.videos.loop, this.videos.loop.play(), page.preloader.onended(), page.frameVideo.turn(this.videosFrame, !0)
                }
            }, {
                key: "videosRender",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = .01;
                    if ("mobile" != this.prevDevice && "tabletMobile" != this.prevDevice || (t = .05), this.videosCanvas.outer.videoOpacity += t, 1 < this.videosCanvas.outer.videoOpacity && (this.videosCanvas.outer.videoOpacity = 1), this.videosCanvas.outer.style.opacity = this.videosCanvas.outer.videoOpacity, "mobile" != this.prevDevice && "tabletMobile" != this.prevDevice || (this.videosCanvas.canvas.videoScale += t, 1 < this.videosCanvas.canvas.videoScale && (this.videosCanvas.canvas.videoScale = 1), this.videosCanvas.canvas.style.transform = "scale(" + this.videosCanvas.canvas.videoScale + ")"), this.spritesBool) {
                        var i, r, s, o, n = w(this.videosCanvas.sizes, 4);
                        for (var a in i = n[0], r = n[1], s = n[2], o = n[3], this.videos) {
                            var l = this.videos[a];
                            if (this.videoActive == l & l.playing) {
                                var h = l.current * this.videoSize[0] * 1;
                                this.videosCanvas.ctx.drawImage(l.image, h, 0, this.videoSize[0], this.videoSize[1], i, r, s, o)
                            } else if (this.videoActive == l & e) {
                                var d = l.current * this.videoSize[0] * 1;
                                this.videosCanvas.ctx.drawImage(l.image, d, 0, this.videoSize[0], this.videoSize[1], i, r, s, o)
                            }
                        }
                    } else if (this.videosOnCanvas) {
                        var c, u, p, v, f = w(this.videosCanvas.sizes, 4);
                        for (var g in c = f[0], u = f[1], p = f[2], v = f[3], this.videos) {
                            var m = this.videos[g];
                            !m.paused & !m.ended ? this.videosCanvas.ctx.drawImage(m, 0, 0, this.videoSize[0], this.videoSize[1], c, u, p, v) : this.videoActive == m & e && this.videosCanvas.ctx.drawImage(m, 0, 0, this.videoSize[0], this.videoSize[1], c, u, p, v)
                        }
                    } else
                        for (var y in this.videos) {
                            var b = this.videos[y];
                            !b.paused & !b.ended ? b.style.opacity = 1 : this.videoActive == b ? b.style.opacity = 1 : b.style.opacity = 0
                        }
                }
            }, {
                key: "sliderCreate",
                value: function() {
                    this.sliderProceeded = {
                        proceeded: 0,
                        total: 0
                    };
                    var e = "v";
                    v.tablet() & "tabletMobile" !== this.prevDevice && (e = "h"), this.slider = new v.SliderContent({
                        console: !1,
                        selector: ".home__slider",
                        start: !1,
                        keydown: !1,
                        swipe: !1,
                        wheel: !1,
                        control: !1,
                        dot: !1,
                        duration: 10,
                        loop: !1,
                        direction: e
                    }), this.slider = this.slider.init(), this.slides = document.querySelectorAll(".home__slider .v-sliderContent__item"), this.counter = document.querySelector(".home__counter"), this.counterCurrent = this.counter.querySelector(".current"), this.counterCurrents = [], this.counterSeparator = this.counter.querySelector(".separator"), this.counterSeparatorRotate = 0, this.counterTotal = this.counter.querySelector(".total");
                    for (var t = 0; t < this.slider.count(); t++) {
                        var i = document.createElement("div"),
                            r = t + 1;
                        t < 10 && (r = "0" + r), i.innerHTML = r, 0 === t && (i.style.opacity = 1), this.counterCurrent.appendChild(i), this.counterCurrents.push(i)
                    }
                    var s = this.slider.count();
                    s < 10 && (s = "0" + s), this.counterTotal.innerHTML = s;
                    for (var o = document.querySelectorAll(".home__slider .page__subheader .text"), n = 0; n < o.length; n++) {
                        var a = "id-" + v.randInt(0, 1e3) * v.randInt(0, 1e3);
                        o[n].setAttribute("id", a);
                        var l = new v.TextAnimate({
                            selector: "#" + a
                        });
                        l = l.init(), o[n].parentNode.textAnimate = l
                    }
                    page.headerAnimate.add(".home__slider .page__header"), 760 < v.vw()[1] && page.headerAnimate.add(".home__slider .contacts__city", [], {
                        ropeLength: 10,
                        ropeYK: 15
                    }), o = document.querySelectorAll(".home__slider .a-button i");
                    for (var h = 0; h < o.length; h++) {
                        var d = "id-" + v.randInt(0, 1e3) * v.randInt(0, 1e3);
                        o[h].setAttribute("id", d);
                        var c = new v.TextAnimate({
                            selector: "#" + d
                        });
                        c = c.init(), o[h].parentNode.parentNode.textAnimate = c
                    }
                    this.mobileScrollDown = document.querySelector(".home__mobilescroll"), this.slider.add({
                        target: "before",
                        do: this.sliderBefore.bind(this)
                    }), this.slider.add({
                        target: "show",
                        do: this.sliderShow.bind(this)
                    });
                    for (var u = document.querySelectorAll(".home__slider .home__next"), p = 0; p < u.length; p++) this.addEventListener({
                        target: "click",
                        el: u[p],
                        do: function(e) {
                            e.preventDefault(), this.slider.next()
                        }.bind(this)
                    });
                    var f = document.querySelector(".home__slider .home__request");
                    f && f.addEventListener("click", function(e) {
                        e.preventDefault(), page.helpers.showCallback()
                    }.bind(this))
                }
            }, {
                key: "sliderShow",
                value: function() {
                    var e = this.slides[0];
                    this.sliderShowElements(e), this.mobileScrollDown.classList.add("show")
                }
            }, {
                key: "sliderBefore",
                value: function(i) {
                    var r = this,
                        e = this.slides[i.prev],
                        t = this.slides[i.next];
                    if (this.sliderProceeded = {
                            proceeded: 0,
                            total: t.querySelectorAll("*[data-sliderAnim]").length
                        }, 3 != i.next && (this.sliderProceeded.total += 1), 2 == i.next & 3 == i.prev && (this.sliderProceeded.total -= 1), this.slider.changeProp({
                            disable: !0
                        }), 5 === i.next)
                        for (var s = 0; s < this.scrolldownOuters.length; s++) this.scrolldownOuters[s].classList.add("hide");
                    else
                        for (var o = 0; o < this.scrolldownOuters.length; o++) this.scrolldownOuters[o].classList.remove("hide");
                    3 <= i.next ? this.mobileScrollDown.classList.remove("show") : this.mobileScrollDown.classList.add("show"), 1 == i.next & 0 == i.prev ? this.videos.loop.callbackEnd = function() {
                        void 0 !== this.videos[i.prev + "-" + i.next] && (this.videos[i.prev + "-" + i.next].play(), this.videoActive = this.videos[i.prev + "-" + i.next]), this.videos.loop.callbackEnd = function() {
                            this.videos.loop.play(), this.videoActive = this.videos.loop
                        }.bind(this)
                    }.bind(this) : void 0 !== this.videos[i.prev + "-" + i.next] && (this.videos[i.prev + "-" + i.next].play(), this.videoActive = this.videos[i.prev + "-" + i.next]), setTimeout(function() {
                        var e = parseInt(r.slider.prop().duration / 2);
                        "next" === i.dir ? r.counterSeparatorRotate += 180 : r.counterSeparatorRotate -= 180, r.counterSeparator.style.transition = e / 1e3 + "s", r.counterSeparator.style.transform = "rotate(" + r.counterSeparatorRotate + "deg)";
                        for (var t = 0; t < r.counterCurrents.length; t++) r.counterCurrents[t].style.transition = e / 1e3 + "s", t !== i.next ? r.counterCurrents[t].style.opacity = 0 : r.counterCurrents[t].style.opacity = 1
                    }, 500), this.sliderHideElements(e), setTimeout(function() {
                        r.sliderShowElements(t)
                    }, 600)
                }
            }, {
                key: "sliderShowElements",
                value: function(i) {
                    for (var t = this, e = 600, r = i.querySelectorAll(".page__header"), s = 0; s < r.length; s++) r[s].obj.show(1150, function() {
                        this.sliderProceeded.proceeded++, this.sliderEnable()
                    }.bind(this));
                    var o = i.querySelectorAll(".contacts__city");
                    if (760 < v.vw()[1])
                        for (var n = 0; n < o.length; n++) o[n].obj.show(1150, function() {
                            this.sliderProceeded.proceeded++, this.sliderEnable()
                        }.bind(this));
                    else setTimeout(function() {
                        t.sliderProceeded.proceeded += o.length, t.sliderEnable()
                    }, 1e3);
                    0 == r.length & 0 == o.length && (e = 10), setTimeout(function() {
                        var e = i.querySelector(".page__subheader");
                        e && (e.classList.add("show"), e.textAnimate.animate({
                            bezier: page.bezierText,
                            types: ["letter"],
                            duration: 450,
                            shift: .1,
                            delay: 300,
                            letter: [{
                                scope: [0, 1],
                                property: "opacity",
                                value: function(e) {
                                    return e
                                }
                            }, {
                                scope: [0, 1],
                                property: "transform",
                                value: function(e) {
                                    return "translateX(" + 5 * (1 - e) + "px)"
                                }
                            }],
                            callbacks: [{
                                target: 1,
                                do: function() {
                                    this.sliderProceeded.proceeded++, this.sliderEnable()
                                }.bind(t)
                            }]
                        }))
                    }, e), setTimeout(function() {
                        var e = i.querySelector(".home__text");
                        e && e.classList.add("show")
                    }, .7 * e), setTimeout(function() {
                        for (var e = i.querySelectorAll(".home__view"), t = 0; t < e.length; t++) e[t].classList.add("show")
                    }, .7 * e), setTimeout(function() {
                        var e = i.querySelector(".a-button");
                        e && (e.classList.add("show"), e.textAnimate.animate({
                            bezier: page.bezierText,
                            types: ["letter"],
                            duration: 450,
                            shift: 0,
                            delay: 300,
                            letter: [{
                                scope: [0, 1],
                                property: "opacity",
                                value: function(e) {
                                    return 1
                                }
                            }, {
                                scope: [0, 1],
                                property: "transform",
                                value: function(e) {
                                    return "translateY(" + 110 * (1 - e) + "%)"
                                }
                            }],
                            callbacks: [{
                                target: 1,
                                do: function() {
                                    this.sliderProceeded.proceeded++, this.sliderEnable()
                                }.bind(t)
                            }]
                        }))
                    }, e);
                    var a = i.querySelector(".slider");
                    a && (a.show(), setTimeout(function() {
                        a.classList.add("show")
                    }, 150));
                    var l = i.querySelector(".slick");
                    l && l.classList.add("show")
                }
            }, {
                key: "sliderHideElements",
                value: function(e) {
                    for (var t = e.querySelectorAll(".page__header"), i = 0; i < t.length; i++) t[i].classList.add("hide"), t[i].obj.hide(900, function(e) {
                        e.classList.remove("hide")
                    }.bind(this, t[i]));
                    var r = e.querySelectorAll(".contacts__city");
                    if (760 < v.vw()[1])
                        for (var s = 0; s < r.length; s++) r[s].classList.add("hide"), r[s].obj.hide(900), r[s].obj.hide(900, function(e) {
                            e.classList.remove("hide")
                        }.bind(this, r[s]));
                    else
                        for (var o = 0; o < r.length; o++) r[o].classList.add("hide"), setTimeout(function(e) {
                            e.classList.remove("hide")
                        }.bind(this, r[o]), 1e3);
                    var n = e.querySelector(".page__subheader");
                    n && (n.classList.add("hide"), n.textAnimate.animate({
                        bezier: page.bezierText,
                        types: ["letter"],
                        duration: 450,
                        shift: 0,
                        delay: 0,
                        letter: [{
                            scope: [0, 1],
                            property: "opacity",
                            value: function(e) {
                                return 1 - e
                            }
                        }, {
                            scope: [0, 1],
                            property: "transform",
                            value: function(e) {
                                return ""
                            }
                        }],
                        callbacks: [{
                            target: 1,
                            do: function(e) {
                                e.classList.remove("show"), e.classList.remove("hide")
                            }.bind(this, n)
                        }]
                    }));
                    var a = e.querySelector(".home__text");
                    a && (a.classList.remove("show"), a.classList.add("hide"), setTimeout(function() {
                        a.classList.remove("hide")
                    }, 600));
                    for (var l = e.querySelectorAll(".home__view"), h = function(e) {
                            l[e].classList.remove("show"), l[e].classList.add("hide"), setTimeout(function() {
                                l[e].classList.remove("hide")
                            }, 600)
                        }, d = 0; d < l.length; d++) h(d);
                    var c = e.querySelector(".a-button");
                    c && (c.classList.add("hide"), c.textAnimate.animate({
                        bezier: page.bezierText,
                        types: ["letter"],
                        duration: v.mobile() ? 650 : 450,
                        shift: 0,
                        delay: 0,
                        letter: [{
                            scope: [0, 1],
                            property: "opacity",
                            value: function(e) {
                                return v.mobile() ? 1 === e ? 1 - e : 1 : 1 - e
                            }
                        }, {
                            scope: [0, 1],
                            property: "transform",
                            value: function(e) {
                                return ""
                            }
                        }],
                        callbacks: [{
                            target: 1,
                            do: function(e) {
                                e.classList.remove("show"), e.classList.remove("hide")
                            }.bind(this, c)
                        }]
                    }));
                    var u = e.querySelector(".slider");
                    u && (u.hide(), u.classList.remove("show"));
                    var p = e.querySelector(".slick");
                    p && (p.classList.remove("show"), p.classList.add("hide"), setTimeout(function() {
                        p.classList.remove("hide")
                    }, 600))
                }
            }, {
                key: "sliderEnable",
                value: function() {
                    this.sliderProceeded.total == this.sliderProceeded.proceeded && this.slider.changeProp({
                        disable: !1
                    })
                }
            }, {
                key: "contactsAdaptive",
                value: function() {
                    this.cities = document.querySelectorAll(".contacts__city"), this.offices = document.querySelectorAll(".contacts__office"), this.citiesOuter = document.querySelector(".contacts__cities");
                    for (var e = 0; e < this.cities.length; e++) this.cities[e].addEventListener("click", this.cityChange.bind(this, e));
                    this.cityChange(0), this.contactsAdaptiveMove(), this.add({
                        target: "resizeW",
                        do: this.contactsAdaptiveMove.bind(this, !0),
                        timeout: 100
                    })
                }
            }, {
                key: "contactsAdaptiveMove",
                value: function() {
                    if (0 < arguments.length && void 0 !== arguments[0] && arguments[0])
                        for (var e = 0; e < this.cities.length; e++) this.cities[e].style.animation = "none", this.cities[e].style.opacity = "1";
                    if (760 < v.vw()[1])
                        for (var t = 0; t < this.cities.length; t++) this.offices[t].insertBefore(this.cities[t], this.offices[t].firstChild);
                    else
                        for (var i = 0; i < this.cities.length; i++) this.citiesOuter.appendChild(this.cities[i])
                }
            }, {
                key: "cityChange",
                value: function(e) {
                    for (var t = 0; t < this.cities.length; t++) t == e ? this.cities[t].classList.add("active") : this.cities[t].classList.remove("active");
                    for (var i = 0; i < this.offices.length; i++) i == e ? this.offices[i].classList.add("active") : this.offices[i].classList.remove("active")
                }
            }, {
                key: "servicesSlider",
                value: function() {
                    var e = document.querySelector(".home__slide_services .slick");
                    if (null != e) {
                        var t = 0,
                            i = e.querySelectorAll(".slick__slide");
                        if (v.desktop()) {
                            var r = Math.ceil(i.length / 3);
                            i.length / 3 != r && (t = 3 * r - i.length)
                        }
                        if (!v.desktop() & 760 < v.vw()[1]) {
                            var s = Math.ceil(i.length / 2);
                            i.length / 2 != s && (t = 2 * s - i.length)
                        }
                        if (0 < t)
                            for (var o = 0; o < t; o++) e.innerHTML += '<div class="slick__slide"><div class="slick__wrap"><div class="slick__wrap-w"></div></div></div>'
                    }
                }
            }, {
                key: "show",
                value: function() {
                    var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (!(1 < arguments.length && void 0 !== arguments[1] && arguments[1]) && !this.ajaxShow) return !1;
                    if (!o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "show", this).call(this)) return !1;
                    var i = 3500;
                    t ? i = 250 : v.mobile() && (i = 1e3), setTimeout(function() {
                        e.slider.showActive(), page.scrolldown.enable()
                    }, i);
                    var r = i + 2500;
                    return t ? r = i + 2e3 : v.mobile() && (r = i + 1500), setTimeout(function() {
                        e.slider.changeProp({
                            keydown: !0,
                            swipe: !0,
                            wheel: !0,
                            duration: 500,
                            disable: !1
                        })
                    }, r), !0
                }
            }, {
                key: "hide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "hide", this).call(this, e), this.slider.changeProp({
                        disable: !0,
                        resize: !1
                    }), !0
                }
            }, {
                key: "destroy",
                value: function() {
                    0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (!o(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "destroy", this).call(this)) return !1;
                    for (var e in this.videos) {
                        this.videos[e].pause()
                    }
                    return this.videoActive = null, page.frameVideo.delete(this.videosFrame), !0
                }
            }]), s
        }(), v.pages = ["home"]
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            s = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        var o = "errorPage";
        page[o] = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, v.Page), r(t, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (!s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "create", this).call(this, e)) return !1;
                    this.sequence(), this.parallax()
                }
            }, {
                key: "hide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "hide", this).call(this, e), page.frame.delete(this.frameEvent), page.frame.delete(this.frameEventParallax)
                }
            }, {
                key: "sequence",
                value: function() {
                    this.imageCurrent = 0, this.imagesLoaded = 0, this.images = document.querySelectorAll(".errorPage__sequence img"), this.frameEvent = page.frame.add({
                        target: "errorSphere",
                        do: this.sequenceLoop.bind(this)
                    }, !1);
                    for (var e = 0; e < this.images.length; e++) {
                        var t = new Image;
                        t.onload = function() {
                            this.imagesLoaded++, this.imagesLoaded == this.images.length && this.sequenceShow()
                        }.bind(this), t.src = this.images[e].src
                    }
                }
            }, {
                key: "sequenceShow",
                value: function() {
                    document.querySelector(".errorPage__sequence").classList.add("show"), page.frame.turn(this.frameEvent, !0)
                }
            }, {
                key: "sequenceLoop",
                value: function() {
                    for (var e = 0; e < this.images.length; e++) e == this.imageCurrent ? this.images[e].style.opacity = "1" : this.images[e].style.opacity = "0";
                    this.imageCurrent++, this.imageCurrent >= this.images.length && (this.imageCurrent = 0)
                }
            }, {
                key: "parallax",
                value: function() {
                    this.parallaxArr = [], this.parallaxObj = {}, this.parallaxOuter = document.querySelector(".page__screen"), this.parallaxEl = document.querySelectorAll(".errorPage__parallax");
                    for (var e = 0; e < this.parallaxEl.length; e++) {
                        var t = {
                                el: this.parallaxEl[e],
                                k: .1,
                                kv: .5,
                                x: 0,
                                y: 0
                            },
                            i = this.parallaxEl[e].getAttribute("data-k"),
                            r = this.parallaxEl[e].getAttribute("data-kv");
                        i && (t.k = parseFloat(i)), r && (t.kv = parseFloat(r)), this.parallaxArr.push(t)
                    }
                    this.parallaxEvents()
                }
            }, {
                key: "parallaxEvents",
                value: function() {
                    this.firstParallaxObj;
                    this.parallaxObj.mouseX = this.parallaxOuter.clientWidth / 2, this.parallaxObj.mouseY = this.parallaxOuter.clientHeight / 2, this.parallaxObj.cursorX = 0, this.parallaxObj.cursorY = 0, this.gyroExists = !1, this.addEventListener({
                        target: "mousemove",
                        el: window,
                        do: function(e) {
                            this.gyroExists || (this.parallaxObj.mouseX = e.x, this.parallaxObj.mouseY = e.y, this.parallaxMousemove())
                        }.bind(this)
                    }), this.addEventListener({
                        target: "devicemotion",
                        el: window,
                        do: function(e) {
                            (e.rotationRate.alpha || e.rotationRate.beta || e.rotationRate.gamma) && (this.gyroExists = !0)
                        }.bind(this)
                    }), this.addEventListener({
                        target: "deviceorientation",
                        el: window,
                        do: function(e) {
                            this.gyroExists && (this.parallaxObj.mouseX = e.gamma, this.parallaxObj.mouseY = e.beta, this.parallaxOrientation())
                        }.bind(this)
                    }), this.frameEventParallax = page.frame.add({
                        target: "errorParallax",
                        do: this.parallaxRender.bind(this)
                    })
                }
            }, {
                key: "parallaxMousemove",
                value: function() {
                    this.parallaxObj.mouseX > this.parallaxOuter.clientWidth / 2 ? this.parallaxObj.cursorX = (this.parallaxOuter.clientWidth / 2 - this.parallaxObj.mouseX) / (this.parallaxOuter.clientWidth / 2) : this.parallaxObj.mouseX < this.parallaxOuter.clientWidth / 2 ? this.parallaxObj.cursorX = (this.parallaxOuter.clientWidth / 2 - this.parallaxObj.mouseX) / (this.parallaxOuter.clientWidth / 2) : this.parallaxObj.cursorX = 0, this.parallaxObj.mouseY > this.parallaxOuter.clientHeight / 2 ? this.parallaxObj.cursorY = (this.parallaxOuter.clientHeight / 2 - this.parallaxObj.mouseY) / (this.parallaxOuter.clientHeight / 2) : this.parallaxObj.mouseY < this.parallaxOuter.clientHeight / 2 ? this.parallaxObj.cursorY = (this.parallaxOuter.clientHeight / 2 - this.parallaxObj.mouseY) / (this.parallaxOuter.clientHeight / 2) : this.parallaxObj.cursorY = 0
                }
            }, {
                key: "parallaxOrientation",
                value: function() {
                    this.parallaxObj.cursorX = this.parallaxObj.mouseX / 90, this.parallaxObj.cursorY = this.parallaxObj.mouseY / 90
                }
            }, {
                key: "parallaxRender",
                value: function() {
                    for (var e = 0; e < this.parallaxArr.length; e++) {
                        var t = this.parallaxArr[e],
                            i = v.vw()[1] * t.kv,
                            r = v.vh()[1] * t.kv,
                            s = t.k;
                        v.vw()[1] <= 980 && (s = .1, 0 === e && (r = i = 120, v.vw()[1] <= 760 && (r = i = 60)), 1 === e && (r = i = 60, v.vw()[1] <= 760 && (r = i = 30)), 3 === e && (r = i = 76, v.vw()[1] <= 760 && (r = i = 38))), t.x += (-this.parallaxObj.cursorX * i - t.x) * s, t.y += (-this.parallaxObj.cursorY * r - t.y) * s, t.el.style.transform = "translate(" + t.x + "px, " + t.y + "px)"
                    }
                }
            }]), t
        }(), v.pages.push(o)
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            s = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        page.about = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, page.CommonPage), r(t, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "create", this).call(this, e) && (this.aboutImageParallax(), this.sameHeight(), this.slider(), this.slick(), !0)
                }
            }, {
                key: "show",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e) && (this.sameHeightValues && this.sameHeightValues.update(), !0)
                }
            }, {
                key: "aboutImageParallax",
                value: function() {
                    this.aboutImageParallaxObj = {
                        scroll: document.querySelector("#v-scrollbar"),
                        scrollOuter: document.querySelector("#v-scrollbar .scroll__outer"),
                        screenBg: document.querySelector(".about__info .bg-image"),
                        k: .1
                    };
                    var t = page.current.obj().scroll.smoothScroll;
                    this.aboutImageParallaxObj.scroll.addEventListener("scroll", function() {
                        var e = !0;
                        t && t.prop().run && (e = !1), e && this.aboutImageParallaxScroll(this.aboutImageParallaxObj.scroll.scrollTop)
                    }.bind(this)), t && t.add({
                        target: "update",
                        do: function() {
                            this.aboutImageParallaxScroll(this.aboutImageParallaxObj.scrollOuter["v-smoothScroll-y"])
                        }.bind(this)
                    })
                }
            }, {
                key: "aboutImageParallaxScroll",
                value: function(e) {
                    var t = 100 - e * this.aboutImageParallaxObj.k;
                    t < 0 && (t = 0), this.aboutImageParallaxObj.screenBg.style.transform = "translate(0, " + t + "px)"
                }
            }, {
                key: "sameHeight",
                value: function() {
                    this.sameHeightValues = new v.SameHeight({
                        selector: ".about__values-item"
                    }), this.sameHeightValues = this.sameHeightValues.init()
                }
            }, {
                key: "slider",
                value: function() {
                    page.slider.init(), this.sliderCategories = document.querySelectorAll(".about__service-categories li a"), this.sliderSliders = document.querySelectorAll(".about__service-sliders .slider"), this.slidersLoaded = !1, this.slidersLoadedCount = 0, this.sliderAllow = !1, this.sliderAllowCount = 0, this.sliderEvents()
                }
            }, {
                key: "sliderEvents",
                value: function() {
                    for (var e = 0; e < this.sliderSliders.length; e++) this.sliderSliders[e].onloaded = function() {
                        if (this.slidersLoadedCount++, this.slidersLoadedCount == this.sliderSliders.length) {
                            this.slidersLoaded = !0, this.sliderAllow = !0;
                            for (var e = 0; e < this.sliderCategories.length; e++)
                                if (0 === e) {
                                    var t = this.sliderCategories[e].getAttribute("data-category");
                                    this.sliderShow(t)
                                }
                        }
                    }.bind(this);
                    for (var t = 0; t < this.sliderCategories.length; t++) this.sliderCategories[t].addEventListener("click", function(e, t) {
                        if (t.preventDefault(), !e.parentNode.classList.contains("active") && this.slidersLoaded && this.sliderAllow) {
                            var i = e.getAttribute("data-category");
                            this.sliderAllow = !1, this.sliderAllowCount = 0, this.sliderHide(i), this.sliderShow(i)
                        }
                    }.bind(this, this.sliderCategories[t]))
                }
            }, {
                key: "sliderShow",
                value: function(e) {
                    for (var t = null, i = 0; i < this.sliderSliders.length; i++) {
                        this.sliderSliders[i].getAttribute("data-category") == e && (t = this.sliderSliders[i])
                    }
                    null != t && (t.classList.add("active"), t.classList.add("show"), t.show(this.sliderAllowCallback.bind(this)));
                    for (var r = 0; r < this.sliderCategories.length; r++) {
                        this.sliderCategories[r].getAttribute("data-category") == e ? this.sliderCategories[r].parentNode.classList.add("active") : this.sliderCategories[r].parentNode.classList.remove("active")
                    }
                }
            }, {
                key: "sliderHide",
                value: function(t) {
                    for (var i = this, e = 0; e < this.sliderSliders.length; e++) {
                        this.sliderSliders[e].getAttribute("data-category") != t && (this.sliderSliders[e].classList.remove("show"), this.sliderSliders[e].classList.remove("active"))
                    }
                    setTimeout(function() {
                        for (var e = 0; e < i.sliderSliders.length; e++) {
                            i.sliderSliders[e].getAttribute("data-category") != t && i.sliderSliders[e].hide(i.sliderAllowCallback.bind(i))
                        }
                    }, 500)
                }
            }, {
                key: "sliderAllowCallback",
                value: function() {
                    this.sliderAllowCount++, 2 == this.sliderAllowCount && (this.sliderAllowCount = 0, this.sliderAllow = !0)
                }
            }, {
                key: "slick",
                value: function() {
                    page.slick.init()
                }
            }, {
                key: "hide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "hide", this).call(this, e), this.sameHeightValues && this.sameHeightValues.changeProp({
                        resize: !1
                    }), !0
                }
            }]), t
        }(), v.pages.push("about")
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            s = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        var o = "portfolio";
        page[o] = function(e) {
            function i() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(i, v.Page), r(i, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "init", this).call(this);
                    return !!t && (this.obj = {}, t = Object.assign(t, {
                        obj: function() {
                            return e.obj
                        }
                    }))
                }
            }, {
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !!s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "create", this).call(this, e) && (this.filters(), page.imageCanvas.init(), page.image.init(), !0)
                }
            }, {
                key: "show",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (!s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "show", this).call(this, e)) return !1;
                    page.scrolldown.enable()
                }
            }, {
                key: "filters",
                value: function() {
                    this.filterAllow = !0, this.filtersEl = document.querySelectorAll(".portfolio__category a"), this.filtersScroll = document.querySelector(".portfolio__categories-scrollouter"), this.filtersLine = document.querySelector(".portfolio__categories-line"), this.filtersItems = document.querySelectorAll(".portfolio__item"), this.filterLine(), this.add({
                        target: "resizeW",
                        do: this.filterLine.bind(this)
                    });
                    for (var e = 0; e < this.filtersEl.length; e++) this.addEventListener({
                        target: "click",
                        el: this.filtersEl[e],
                        do: this.filtersClick.bind(this, this.filtersEl[e])
                    });
                    for (var t = 0; t < this.filtersItems.length; t++) this.filtersItems[t].filterChild = this.filtersItems[t].querySelector(".image__item-outer"), this.filtersItems[t].filterLink = this.filtersItems[t].querySelector(".image__link"), this.filtersItems[t].filterCategory = this.filtersItems[t].getAttribute("data-category")
                }
            }, {
                key: "filtersClick",
                value: function(e, t) {
                    if (t.preventDefault(), this.filterAllow) {
                        this.filterAllow = !1;
                        var i = e.getAttribute("data-category");
                        if (null != i && !e.classList.contains("active")) {
                            var r = page.current.obj().scroll;
                            v.body().classList.contains("noSmoothScroll") || r.smoothScroll && r.smoothScroll.changeProp({
                                allowScroll: !1
                            }), this.filterCategory(i), this.filterItem(i), this.filterLine(), v.body().classList.contains("noSmoothScroll") ? (v.desktop() && $(page.scrollSelector).animate({
                                scrollTop: 0
                            }, 150), setTimeout(function() {
                                page.current.obj().view.seek()
                            }, 250)) : setTimeout(function() {
                                r.smoothScroll && r.smoothScroll.changeProp({
                                    allowScroll: !0
                                })
                            }, 500)
                        }
                    }
                }
            }, {
                key: "filterCategory",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = 0; t < this.filtersEl.length; t++) {
                        this.filtersEl[t].getAttribute("data-category") != e ? this.filtersEl[t].classList.remove("active") : this.filtersEl[t].classList.add("active")
                    }
                }
            }, {
                key: "filterItem",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = new v.Animate({
                            console: !1,
                            duration: v.desktop() ? 450 : 750,
                            delay: 0,
                            bezier: page.bezier,
                            do: this.filterAnimate.bind(this, e)
                        });
                    t.init(), t.run();
                    for (var i = 0; i < this.filtersItems.length; i++) {
                        var r = this.filtersItems[i].getAttribute("data-category");
                        r = r.split(","), "all" == e || r.includes(e) ? this.filtersItems[i].classList.remove("hide") : this.filtersItems[i].classList.add("hide"), this.filtersItems[i].classList.add("v-viewed"), this.filtersItems[i].style.animation = "none", this.filtersItems[i].style.opacity = "1"
                    }
                }
            }, {
                key: "filterAnimate",
                value: function() {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = arguments[1], i = arguments[2], r = v.desktop(), s = 0; s < this.filtersItems.length; s++) {
                        var o = this.filtersItems[s],
                            n = o.filterCategory.split(","),
                            a = o.filterChild,
                            l = o.filterLink;
                        "all" == e || n.includes(e) ? o.classList.contains("hidden") && (o.style.height = a.clientHeight * i + "px", r || (a.style.transform = "translateY(" + a.clientHeight * (1 - i) * -.25 + "px)", l.style.transform = "translateY(" + a.clientHeight * (1 - i) * .15 + "px)"), 1 === t && (o.style.height = "", a.style.transform = "", l.style.transform = "", o.classList.remove("hidden"))) : o.classList.contains("hidden") || (o.style.height = a.clientHeight * (1 - i) + "px", r || (a.style.transform = "translateY(" + a.clientHeight * i * -.25 + "px)", l.style.transform = "translateY(" + a.clientHeight * i * .15 + "px)"), 1 === t && o.classList.add("hidden"))
                    }
                    1 === t && (this.filterAllow = !0, page.current.obj().view.seek())
                }
            }, {
                key: "filterLine",
                value: function() {
                    for (var e = 0, t = 0, i = 0; i < this.filtersEl.length; i++) this.filtersEl[i].classList.contains("active") && (e = this.filtersEl[i].getBoundingClientRect().left, t = this.filtersEl[i].clientWidth);
                    e += this.filtersScroll.scrollLeft, this.filtersLine.style.left = e + "px", this.filtersLine.style.width = t - 3.2 + "px"
                }
            }]), i
        }(), v.pages.push(o)
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var s = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            o = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        var r = "project";
        page[r] = function(e) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, page.CommonPage), s(r, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    o(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "create", this).call(this, e), this.screenParallax();
                    for (var t = document.querySelectorAll(".image__fixed"), i = 0; i < t.length; i++) t[i].parentNode.removeChild(t[i]);
                    page.slick.init(), this.projectSliderDesktop(), this.projectSliderTablet()
                }
            }, {
                key: "screenParallax",
                value: function() {
                    this.screenParallaxObj = {
                        scroll: document.querySelector("#v-scrollbar"),
                        scrollOuter: document.querySelector("#v-scrollbar .scroll__outer"),
                        screenImage: document.querySelector(".project__screen-image"),
                        screenContent: document.querySelector(".project__screen-content"),
                        screenBg: document.querySelector(".project__screen .bg-image"),
                        k: .5
                    }, "safari" == v.browser() && (this.screenParallaxObj.screenImage.classList.remove("el-dark"), this.screenParallaxObj.screenImage.classList.remove("el-dark_tablet"), this.screenParallaxObj.screenContent.classList.add("el-dark"), this.screenParallaxObj.screenContent.classList.add("el-dark_tablet"));
                    var t = page.current.obj().scroll.smoothScroll;
                    page.wrap.addEventListener("scroll", function() {
                        var e = !0;
                        t && t.prop().run && (e = !1), e && this.screenParallaxScroll(page.wrap.scrollTop)
                    }.bind(this)), this.screenParallaxObj.scroll.addEventListener("scroll", function() {
                        var e = !0;
                        t && t.prop().run && (e = !1), e && this.screenParallaxScroll(this.screenParallaxObj.scroll.scrollTop)
                    }.bind(this)), t && t.add({
                        target: "update",
                        do: function() {
                            this.screenParallaxScroll(this.screenParallaxObj.scrollOuter["v-smoothScroll-y"])
                        }.bind(this)
                    })
                }
            }, {
                key: "screenParallaxScroll",
                value: function(e) {
                    v.desktop() & "safari" != v.browser() && (this.screenParallaxObj.screenBg.style.transform = "translate(0, " + e * this.screenParallaxObj.k + "px)", v.desktop() ? this.screenParallaxObj.screenImage.style.height = 100 - e * this.screenParallaxObj.k / 1.5 / v.vh()[1] * 100 + "%" : this.screenParallaxObj.screenImage.style.height = "")
                }
            }, {
                key: "projectSliderDesktop",
                value: function() {
                    var e = document.querySelector(".project__slider");
                    if (null != e) {
                        this.sliderOuter = e;
                        for (var t = document.querySelectorAll(".project__slider_image li img"), i = [], r = 0; r < t.length; r++) i.push(t[r].getAttribute("src"));
                        for (var s = document.querySelectorAll(".project__slider_image li a"), o = [], n = [], a = 0; a < s.length; a++) o.push(s[a].innerHTML);
                        for (var l = 0; l < s.length; l++) n.push(s[l].getAttribute("href"));
                        var h = e.querySelector(".expand-link");
                        this.addEventListener({
                            target: "click",
                            el: h,
                            do: this.projectSliderClick.bind(this, h, null)
                        }), this.imageSlider = new CanvasSlideshow({
                            canvas: ".project__slider_image canvas",
                            expandLink: h,
                            sprites: i,
                            texts: o,
                            hrefs: n,
                            displacementImage: page.assetsPrefix + "image/jpg/displacement-clouds.jpg",
                            autoPlay: !1,
                            displaceScale: [150, 150],
                            fullScreen: !0,
                            wacky: !0,
                            centerSprites: !0
                        }), this.sliderHeader = e.querySelector(".page__subheader");
                        for (var d = document.querySelectorAll(".project__slider-prev, .project__slider-next"), c = 0; c < d.length; c++) {
                            var u = d[c];
                            u.onclick = function(e, t) {
                                return "next" === e.getAttribute("data-nav") ? this.imageSlider.next() : this.imageSlider.prev(), !1
                            }.bind(this, u)
                        }
                    }
                }
            }, {
                key: "projectSliderTablet",
                value: function() {
                    var e = document.querySelector(".project__slider");
                    if (null != e) {
                        var t = document.createElement("div");
                        t.classList.add("desktop_hide"), t.classList.add("project__slider_tablet"), e.appendChild(t);
                        var i = e.querySelector(".project__slider_image ul");
                        t.innerHTML = i.outerHTML;
                        var r = new v.SliderCanvas({
                            console: !1,
                            selector: ".project__slider_tablet",
                            selectorEvents: ".project__slider",
                            interval: !1,
                            control: !0,
                            dot: !1,
                            duration: 700,
                            delay: 0,
                            parallaxX: .1,
                            reverse: !0,
                            direction: "h",
                            parallaxPrev: !0,
                            keydown: !1,
                            swipe: !0,
                            wheel: !1,
                            start: !0,
                            animations: {
                                prev: [0, 1],
                                next: [0, 1]
                            },
                            bezier: {
                                on: !0,
                                name: "easeInOutCubic"
                            },
                            resetAnimatingTimeout: 250
                        });
                        r = r.init(), window.sliderCanvas = r;
                        var s = document.createElement("div");
                        s.classList.add("project__slider_slick"), s.classList.add("desktop_hide");
                        var o = document.querySelector(".project__slider .page__subheader");
                        o = null != o ? o.outerHTML : "";
                        for (var n = document.querySelectorAll(".project__slider_image .v-slider__item a"), a = 0; a < n.length; a++) {
                            var l = document.createElement("div");
                            l.classList.add("project__slider_slick-slide"), l.innerHTML = "\n            " + o + "\n            " + n[a].outerHTML + "\n            ", s.appendChild(l)
                        }
                        e.appendChild(s), $(".project__slider_slick").slick({
                            dots: !1,
                            arrows: !1,
                            infinite: !0,
                            speed: 750,
                            cssEase: "ease-in-out",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            variableWidth: !0,
                            draggable: !1,
                            swipe: !1
                        });
                        var h = document.createElement("a");
                        h.classList.add("project__slider_slick-expand"), s.appendChild(h);
                        var d = document.createElement("div");
                        d.classList.add("counter__counter"), d.classList.add("desktop_hide"), e.appendChild(d);
                        var c = document.createElement("div");
                        c.classList.add("counter__current"), c.innerHTML = "<span>00</span>", d.appendChild(c);
                        var u = document.createElement("div");
                        u.classList.add("counter__separator"), d.appendChild(u);
                        var p = document.createElement("div");
                        p.classList.add("counter__total"), d.appendChild(p);
                        for (var f = [], g = 0; g < n.length; g++) {
                            var m = document.createElement("div"),
                                y = g + 1;
                            g < 9 && (y = "0" + y), m.innerHTML = y, 0 === g && (m.style.opacity = 1), c.appendChild(m), f.push(m)
                        }
                        var b = n.length;
                        b < 10 && (b = "0" + b), p.innerHTML = b;
                        var w = function(e) {
                            var t = r.itemsSource()[e].querySelector("a");
                            null != t && h.setAttribute("href", t.getAttribute("href"))
                        };
                        w(0);
                        var _ = function() {
                            0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                            var e = arguments[1],
                                t = "Next";
                            "prev" == e.dir & 0 === e.prev & 0 < e.next ? t = "Prev" : "next" == e.dir & 0 < e.prev & 0 === e.next ? t = "Next" : "prev" == e.dir && (t = "Prev"), $(".project__slider_slick").slick("slick" + t), w(e.next);
                            for (var i = 0; i < f.length; i++) i !== e.next ? f[i].style.opacity = 0 : f[i].style.opacity = 1
                        };
                        r.add({
                            target: "prev",
                            do: _.bind(this, "prev")
                        }), r.add({
                            target: "next",
                            do: _.bind(this, "next")
                        }), r.add({
                            target: "before",
                            do: function() {
                                h.classList.add("disable")
                            }.bind(this)
                        }), r.add({
                            target: "after",
                            do: function() {
                                h.classList.remove("disable")
                            }.bind(this)
                        }), this.addEventListener({
                            target: "click",
                            el: h,
                            do: function(e) {
                                if (e.preventDefault(), !v.desktop()) {
                                    var t = r.itemsSource()[r.getActive()].querySelector("img");
                                    null != t && this.projectSliderClick(h, t)
                                }
                            }.bind(this)
                        })
                    }
                }
            }, {
                key: "projectSliderClick",
                value: function(i) {
                    var t = this,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (null !== r && r.preventDefault(), !i.classList.contains("disable")) {
                        page.current.obj().scroll.stopScroll(), this.imageSlider.hide(), this.sliderHeader.classList.add("hide"), i.parentNode.classList.add("hide_mobile"), this.sliderOuter.classList.add("hide_mobile");
                        var s = "";
                        s = v.desktop() ? i.getAttribute("data-image") : v.tablet() ? e.getAttribute("data-v-slider-imageTablet") ? e.getAttribute("data-v-slider-imageTablet") : e.getAttribute("src") : e.getAttribute("data-v-slider-imageMobile") ? e.getAttribute("data-v-slider-imageMobile") : e.getAttribute("data-v-slider-imageTablet") ? e.getAttribute("data-v-slider-imageTablet") : e.getAttribute("src");
                        var o = document.createElement("div");
                        o.classList.add("image__fixed"), page.wrap.appendChild(o);
                        var n = document.createElement("div");
                        n.classList.add("image__fixed-canvas"), o.appendChild(n);
                        var a = document.createElement("div");
                        a.classList.add("bg-outer"), a.style.opacity = 0, n.appendChild(a);
                        var l = document.createElement("div");
                        l.classList.add("bg-image"), l.style.backgroundImage = "url(" + s + ")", a.appendChild(l);
                        var h = this.sliderOuter.getBoundingClientRect();
                        setTimeout(function() {
                            l.style.transform = "scale(1.2)", l.classList.add("col_12"), l.classList.add("row_12"), a.style.opacity = 1, a.style.height = h.height + "px", a.style.width = h.width + "px", a.style.transform = "translate(" + h.left + "px, " + h.top + "px)";
                            var e = new v.Animate({
                                console: !1,
                                duration: 650,
                                delay: 0,
                                bezier: page.bezier,
                                do: function(e, t) {
                                    a.style.height = h.height + t * (v.vh()[1] - h.height) + "px", a.style.width = h.width + t * (v.vw()[1] - h.width) + "px", a.style.transform = "translate(" + h.left * (1 - t) + "px, " + h.top * (1 - t) + "px)", l.style.transform = "scale(" + (1 + .2 * (1 - t)) + ")", 1 === e && (page.ajaxHideBool = !1, page.ajax.load(i.href))
                                }.bind(t)
                            });
                            e.init(), e.run()
                        }, 400)
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return o(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "hide", this).call(this, e), this.imageSlider.destroy(), page.frame.delete(this.screenParallaxFrame), !0
                }
            }]), r
        }(), page[r] = new page[r]({
            console: !1,
            name: r
        }), page[r] = page[r].init()
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();
        var s = "services";
        page[s] = function(e) {
            function i() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(i, page.CommonPage), r(i, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (! function e(t, i, r) {
                            null === t && (t = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(t, i);
                            if (void 0 === s) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, i, r)
                            }
                            if ("value" in s) return s.value;
                            var n = s.get;
                            return void 0 !== n ? n.call(r) : void 0
                        }(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "create", this).call(this, e)) return !1;
                    page.slick.init();
                    var t = document.querySelector(".services__items");
                    return t && (v.desktop() || (t.classList.add("v-view"), t.classList.add("v-view_bottom"), t.classList.add("v-view_4"), page.current.obj().view.changeProp())), !0
                }
            }]), i
        }(), v.pages.push(s)
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var s = function() {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();
        var r = "servicesItem";
        page[r] = function(e) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, page.CommonPage), s(r, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    if (! function e(t, i, r) {
                            null === t && (t = Function.prototype);
                            var s = Object.getOwnPropertyDescriptor(t, i);
                            if (void 0 === s) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, i, r)
                            }
                            if ("value" in s) return s.value;
                            var n = s.get;
                            return void 0 !== n ? n.call(r) : void 0
                        }(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "create", this).call(this, e)) return !1;
                    var t = document.querySelector(".servicesItem__items .page__subheader"),
                        i = document.querySelector(".servicesItem__items ul");
                    return null != t & null != i && v.vw()[1] < 1440 && (t.classList.remove("v-view_10"), i.classList.remove("v-view_11"), v.tablet() && (t.classList.add("v-view_4"), i.classList.add("v-view_6"))), this.slider(), !0
                }
            }, {
                key: "slider",
                value: function() {
                    var e = document.querySelector(".slider");
                    e && (e.onloaded = function() {
                        e.classList.add("active"), e.classList.add("show"), e.show()
                    }.bind(this), page.slider.init())
                }
            }]), r
        }(), page[r] = new page[r]({
            console: !1,
            name: r
        }), page[r] = page[r].init()
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
            function r(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, i) {
                return t && r(e.prototype, t), i && r(e, i), e
            }
        }();
        var s = "contacts";
        page[s] = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, page.CommonPage), r(t, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return !! function e(t, i, r) {
                        null === t && (t = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(t, i);
                        if (void 0 === s) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, i, r)
                        }
                        if ("value" in s) return s.value;
                        var n = s.get;
                        return void 0 !== n ? n.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "create", this).call(this, e) && (this.scrollDown(), page.helpers.setCallback(".contacts .callback"), this.adaptive(), !0)
                }
            }, {
                key: "scrollDown",
                value: function() {
                    var e = document.querySelector(".contacts__sendrequest a");
                    e && this.addEventListener({
                        target: "click",
                        el: e,
                        do: function(e) {
                            e.preventDefault(), page.cursor.resetHover(), $(page.scrollSelector).stop().animate({
                                scrollTop: v.vh()[1]
                            })
                        }.bind(this)
                    })
                }
            }, {
                key: "adaptive",
                value: function() {
                    this.cities = document.querySelectorAll(".contacts__city"), this.offices = document.querySelectorAll(".contacts__office"), this.citiesOuter = document.querySelector(".contacts__cities");
                    for (var e = 0; e < this.cities.length; e++) this.cities[e].addEventListener("click", this.cityChange.bind(this, e));
                    this.cityChange(0), this.adaptiveMove(), this.add({
                        target: "resizeW",
                        do: this.adaptiveMove.bind(this, !0),
                        timeout: 100
                    })
                }
            }, {
                key: "adaptiveMove",
                value: function() {
                    if (0 < arguments.length && void 0 !== arguments[0] && arguments[0])
                        for (var e = 0; e < this.cities.length; e++) this.cities[e].style.animation = "none", this.cities[e].style.opacity = "1";
                    if (760 < v.vw()[1])
                        for (var t = 0; t < this.cities.length; t++) this.offices[t].insertBefore(this.cities[t], this.offices[t].firstChild);
                    else
                        for (var i = 0; i < this.cities.length; i++) this.citiesOuter.appendChild(this.cities[i])
                }
            }, {
                key: "cityChange",
                value: function(e) {
                    for (var t = 0; t < this.cities.length; t++) t == e ? this.cities[t].classList.add("active") : this.cities[t].classList.remove("active");
                    for (var i = 0; i < this.offices.length; i++) i == e ? this.offices[i].classList.add("active") : this.offices[i].classList.remove("active")
                }
            }]), t
        }(), v.pages.push(s)
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            s = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        page.team = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, page.CommonPage), r(t, [{
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "create", this).call(this, e), this.sliderCreate()
                }
            }, {
                key: "show",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), page.imageCanvas.resize()
                }
            }, {
                key: "sliderCreate",
                value: function() {
                    for (var e = document.querySelector(".team__outer-end"), t = document.querySelector(".team__outer-all"); 0 < e.childNodes.length;) t.appendChild(e.childNodes[0]);
                    setTimeout(function() {
                        page.teamObj.sliderCanvas && (page.teamObj.sliderCanvas.setSize(), page.teamObj.sliderCanvas.startSlide(), $(".team__slick").slick("resize"), page.imageCanvas.resize())
                    }, 100)
                }
            }]), t
        }(), v.pages.push("team")
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        var r = function() {
                function r(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, i) {
                    return t && r(e.prototype, t), i && r(e, i), e
                }
            }(),
            s = function e(t, i, r) {
                null === t && (t = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === s) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, r)
                }
                if ("value" in s) return s.value;
                var n = s.get;
                return void 0 !== n ? n.call(r) : void 0
            };
        var o = "defaultPage";
        page[o] = function(e) {
            function i() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(i, v.Page), r(i, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "init", this).call(this);
                    return !!t && (t = Object.assign(t, {
                        name: function() {
                            return e.pageName
                        }
                    }), this.obj = {}, this.p = {}, t = Object.assign(t, {
                        obj: function() {
                            return e.obj
                        },
                        p: function() {
                            return e.p
                        }
                    }), this.showTimeouts = {
                        ajax: 0,
                        defaut: 25,
                        tablet: 0,
                        mobile: 0
                    }, v.addLoad(function() {
                        $(window).click()
                    }), t)
                }
            }, {
                key: "create",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "create", this).call(this, e), page.imageCanvas.hover.padding = 3.5, page.imageCanvas.hover.sinSize = 3.5, page.ajaxHideBool = !0, page.helpers.getElements(), page.helpers.elementsEvents(), page.helpers.scrollSelector(), page.helpers.setFullHeight(), page.headerAnimate.remove(), page.creating = !0, setTimeout(function() {
                        page.creating = !1
                    }, 750), this.obj.scroll = {
                        smoothScroll: this.smoothScroll(),
                        srollbar: this.scrollbar(),
                        bool: this.smoothScrollBool.bind(this),
                        stopScroll: this.stopScroll.bind(this)
                    }, page.scrolldown.init(), this.video(), this.setLinksEvents(), this.view(), page.headerAnimate.init(), this.definePage(e), page.cursorInited && (page.cursor.getElement().classList.remove("prev"), page.cursor.getElement().classList.remove("next"), page.cursor.getElement().classList.remove("hidden"), page.cursor.getElement().classList.remove("scaleOut"), page.cursor.getElement().classList.remove("close"), page.cursor.getElement().classList.remove("slick-plus"), page.cursor.getElement().classList.remove("slick-cursor"), page.cursor.updateElements()), page.cursorChange(),page.dark.init() || page.dark.update(), "home" != page.current.name() ? page.frame.turn(page.dark.frameEvent, !0) : page.dark.render(), page.headerAnimate.remove(), page.imageCanvas.init(), page.image.init(), page.default.classList.contains("errorPage") || page.default.classList.contains("home") || page.default.classList.contains("team") ? v.body().classList.add("oneScreen") : v.body().classList.remove("oneScreen"), !0
                }
            }, {
                key: "show",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "show", this).call(this, e), page.helpers.showAjaxHidden();
                    var t = this.showTimeouts.defaut;
                    return e ? t = this.showTimeouts.ajax : v.tablet() ? t = this.showTimeouts.tablet : v.mobile() && (t = this.showTimeouts.mobile), this.obj.view && (this.obj.view.seek(), this.obj.view.changeProp({
                        percent: v.mobile() ? 1 : .9
                    }), this.obj.scroll.smoothScroll && this.obj.scroll.smoothScroll.add({
                        target: "update",
                        do: this.obj.view.seek.bind(this)
                    })), this.obj.scroll.smoothScroll && this.obj.scroll.smoothScroll.setSize(), page.imageCanvas.showHideSettings(), 0 < this.pageName.length && (0 < t ? setTimeout(page[this.pageName].show.bind(this, e), t) : page[this.pageName].show(e)), !0
                }
            }, {
                key: "hide",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "hide", this).call(this, e), 0 < this.pageName.length && page[this.pageName].hide(e), this.obj.scroll.smoothScroll && this.obj.scroll.smoothScroll.changeProp({
                        run: !1,
                        allowScroll: !1
                    }), page.scrolldown.disable(), this.obj.view && this.obj.view.changeProp({
                        resize: !1
                    }), page.frame.turn(page.dark.frameEvent, !1), page.dark.init() || page.dark.clear(), page.headerAnimate.removeListeners(), !0
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return s(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "destroy", this).call(this, e), 0 < this.pageName.length && page[this.pageName].destroy(e), !0
                }
            }, {
                key: "definePage",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.pageName = "";
                    for (var t = 0; t < v.pages.length; t++) page.default.classList.contains(v.pages[t]) && (this.pageName = v.pages[t]);
                    0 < this.pageName.length ? (this.p = page[this.pageName], this.p instanceof Function && (page[this.pageName] = new page[this.pageName]({
                        console: !1,
                        name: this.pageName
                    }), page[this.pageName] = page[this.pageName].init()), page[this.pageName].create(e)) : this.p = page.current
                }
            }, {
                key: "video",
                value: function() {
                    for (var e = document.querySelectorAll(".video__play"), t = 0; t < e.length; t++) this.addEventListener({
                        target: "click",
                        el: e[t],
                        do: this.videoPlay.bind(this, e[t])
                    })
                }
            }, {
                key: "videoPlay",
                value: function(e, t) {
                    t.preventDefault();
                    var r = e.getAttribute("data-iframe");
                    r.includes("youtube") && (r = "https://www.youtube.com" + (r = this.setParam({
                        name: "rel",
                        value: "0",
                        push: !1,
                        url: r
                    })));
                    var s = v.popupMedia.add({
                        target: "show",
                        do: function(e) {
                            var t = document.querySelector("#" + v.popupMedia.id() + " iframe");
                            t && t.setAttribute("src", r), null == e.outer.getAttribute("data-cursorPopup-proceeded") && (e.outer.classList.add("v-cursor__h"), e.outer.setAttribute("data-v-cursor-width", "84"), e.outer.setAttribute("data-v-cursor-height", "84"), e.outer.setAttribute("data-v-cursor-class", "scaleOut"), e.outer.setAttribute("data-cursorPopup-proceeded", "true"));
                            var i = e.outer.querySelector(".v-popup__overlay");
                            i && (null == i.getAttribute("data-cursorOverlay-proceeded") && (i.innerHTML = '<div class="v-cursor__hover" data-v-cursor-width="84" data-v-cursor-height="84" data-v-cursor-class="close" data-v-cursor-borderColor="#fff"></div>', i.setAttribute("data-cursorOverlay-proceeded", "true")));
                            page.cursor.updateElements(), v.popupMedia.delete(s)
                        }.bind(this)
                    });
                    v.popupMedia.show({
                        selector: "#popup__video",
                        types: ["media", "video"]
                    });
                    var i = v.popupMedia.add({
                        target: "hidden",
                        do: function(e) {
                            page.cursor.resetHover(), v.popupMedia.delete(i)
                        }.bind(this)
                    })
                }
            }, {
                key: "viewChange",
                value: function() {
                    this.obj.view && this.obj.view.changeProp({
                        scrollSelector: page.scrollSelector
                    })
                }
            }, {
                key: "view",
                value: function() {
                    this.obj.view = new v.View({
                        console: !1,
                        load: !1,
                        init: !1,
                        percent: 1,
                        scrollSelector: page.scrollSelector
                    }), this.obj.view = this.obj.view.init(), this.add({
                        target: "resize",
                        do: this.viewChange.bind(this),
                        timeout: 200
                    })
                }
            }, {
                key: "scrollbar",
                value: function() {
                    var e = new v.Scrollbar({
                        console: !1
                    });
                    return e = e.init(), e
                }
            }, {
                key: "smoothScroll",
                value: function() {
                    this.scrollValues = [0, 0];
                    var e = new v.SmoothScroll({
                        console: !1,
                        selector: "#v-scrollbar",
                        selectorElements: "#v-scrollbar .scroll__outer",
                        k: {
                            value: "safari" == v.browser() ? .035 : .07,
                            reduce: !0,
                            reduceK: .005
                        },
                        autoResize: !0,
                        run: !0,
                        useTransform: "firefox" != v.browser(),
                        useScroll: (v.browser(), !1)
                    });
                    e = e.init(), this.smoothScrollObj = e, this.smoothScrollClass(), this.add({
                        target: "resize",
                        do: this.smoothScrollClass.bind(this),
                        timeout: 50
                    }), this.smoothScrollBool() && e && (e.add({
                        target: "update",
                        do: function(e) {
                            0 == e.scrollValues[0] && 0 == e.scrollValues[1] || (this.scrollValues = e.scrollValues)
                        }.bind(this)
                    }), this.add({
                        target: "resizeW",
                        do: function() {
                            this.smoothScrollBool() ? (e.getOuter().scrollLeft = this.scrollValues[0], e.getOuter().scrollTop = this.scrollValues[1]) : v.desktop() || (page.wrap.scrollLeft = this.scrollValues[0], page.wrap.scrollTop = this.scrollValues[1])
                        }.bind(this),
                        timeout: 30
                    }));
                    var t = document.querySelector("#v-scrollbar");
                    return t && t.addEventListener("scroll", function() {
                        0 != e & !this.smoothScrollBool() & (0 != t.scrollLeft || 0 != t.scrollTop) && (this.scrollValues[0] = t.scrollLeft, this.scrollValues[1] = t.scrollTop)
                    }.bind(this)), this.add({
                        target: "resizeW",
                        do: function() {
                            v.desktop() & 0 != e & !this.smoothScrollBool() && (t.scrollLeft = this.scrollValues[0], t.scrollTop = this.scrollValues[1])
                        }.bind(this),
                        timeout: 30
                    }), e
                }
            }, {
                key: "smoothScrollBool",
                value: function() {
                    var e = !1;
                    return !!page.smoothScroll && ("chrome" == v.browser() & "windows" == v.os() && (e = !0), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) && (e = !1), (v.tablet() || v.mobile()) && (e = !1), e)
                }
            }, {
                key: "smoothScrollClass",
                value: function() {
                    this.smoothScrollBool() ? (v.body().classList.remove("noSmoothScroll"), this.smoothScrollObj && this.smoothScrollObj.changeProp({
                        run: !0
                    })) : (v.body().classList.add("noSmoothScroll"), this.smoothScrollObj && this.smoothScrollObj.changeProp({
                        run: !1
                    }))
                }
            }, {
                key: "stopScroll",
                value: function() {
                    this.smoothScrollBool() && this.smoothScrollObj && this.smoothScrollObj.changeProp({
                        allowScroll: !1,
                        run: !1
                    })
                }
            }, {
                key: "setLinksEvents",
                value: function() {
                    var e = document.querySelector("#v-footer__request");
                    e && e.addEventListener("click", function(e) {
                        e.preventDefault(), page.helpers.showCallback()
                    }.bind(this))
                }
            }]), i
        }(), page.current = new page[o]({
            console: !1,
            name: o
        }), page.current = page.current.init(), page.current.create()
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";
        page.ajaxChange = function() {
            page.menu.isOpened ? page.ajax.changeProp({
                timeoutAjax: v.mobile() ? 900 : 800,
                timeoutUpdate: 50,
                timeoutAfter: 250
            }) : page.ajax.changeProp({
                timeoutAjax: 350,
                timeoutUpdate: 50,
                timeoutAfter: 250
            })
        }, v.addLoad(function() {
            page.ajax = new v.AjaxPage({
                console: !1,
                timeoutAjax: 0,
                timeoutUpdate: 0,
                timeoutAfter: 0,
                on: !0,
                popstateEvent: !0,
                updateContent: !1
            }), page.ajax = page.ajax.init(), page.ajaxChange(), page.ajax && (v.viewport.add({
                target: "w",
                name: "Ajax Page Define Bool",
                do: function() {
                    page.ajax.changeProp({
                        on: !0
                    })
                },
                timeout: 25
            }), page.ajax.add({
                target: "before",
                timeout: 50,
                do: function(e) {
                    page.ajax.changeProp({
                        disabled: !0
                    }), page.current.hide(), page.current.destroy(), page.menu && page.menu.isOpened && page.menu.close(), page.ajaxHideBool && page.screen.classList.add("hide"), page.cursor.resetHover(), page.cursor.getElement().classList.remove("plus")
                }.bind(void 0)
            }), page.ajax.add({
                target: "load",
                timeout: 25,
                do: function(e) {
                    var t = document.querySelector(".team__outer-end"),
                        i = document.querySelector(".team__outer-all");
                    if (null != t & null != i)
                        for (; 0 < i.childNodes.length;) t.appendChild(i.childNodes[0]);
                    page.screen.innerHTML = e.html;
                    var r = document.createElement("html");
                    r.innerHTML = e.htmlFull, page.current.create(!0), page.helpers.changeAjaxElements(r), r = null
                }.bind(void 0)
            }), page.ajax.add({
                target: "after",
                timeout: 25,
                do: function(e) {
                    page.screen.classList.remove("hide"), page.menu && page.menu.isOpened ? (page.menu.close(), setTimeout(function() {
                        page.current.show(!0)
                    }, 750)) : page.current.show(!0), page.ajax.getElements(), page.ajax.setEvents(), setTimeout(function() {
                        page.ajax.changeProp({
                            disabled: !1
                        })
                    }, 250)
                }.bind(void 0)
            }))
        })
    }, {}]
}, {}, [1]),
function o(n, a, l) {
    function h(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (d) return d(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var s = a[t] = {
                exports: {}
            };
            n[t][0].call(s.exports, function(e) {
                return h(n[t][1][e] || e)
            }, s, s.exports, o, n, a, l)
        }
        return a[t].exports
    }
    for (var d = "function" == typeof require && require, e = 0; e < l.length; e++) h(l[e]);
    return h
}({
    1: [function(e, t, i) {
        "use strict";

        function r() {
            v.vw()[1] > v.vh()[1] ? (v.body().classList.remove("v-vertical"), v.body().classList.remove("v-equal"), v.body().classList.add("v-horizontal")) : (v.vw()[1] < v.vh()[1] ? (v.body().classList.add("v-vertical"), v.body().classList.remove("v-equal")) : (v.body().classList.remove("v-vertical"), v.body().classList.add("v-equal")), v.body().classList.remove("v-horizontal"))
        }

        function s() {
            return page.prevDevice = "", v.desktop() ? page.prevDevice = "desktop" : page.prevDevice = "mobile", page.prevDevice
        }
        r(), v.viewport.add({
            target: "w",
            name: "Set Orientation",
            do: r.bind(void 0),
            timeout: 25
        }), page.helpers.setFullHeight(), v.addLoad(page.helpers.setFullHeight.bind(void 0)), v.viewport.add({
            target: "wh",
            name: "Set FullHeight",
            do: page.helpers.setFullHeight.bind(void 0),
            timeout: 25
        }), page.preloader.init(), v.popupMedia = new v.Popup({
            console: !1
        }), v.popupMedia = v.popupMedia.init(), v.popupText = new v.Popup({
            console: !1
        }), v.popupText = v.popupText.init(), v.popupText.add({
            target: "show",
            do: function(e) {
                v.body().classList.add("popup-opened")
            }.bind(void 0)
        }), v.popupText.add({
            target: "hide",
            do: function(e) {
                v.body().classList.remove("popup-opened")
            }.bind(void 0)
        }), s(), v.viewport.add({
            target: "w",
            do: function() {
                page.prevDevice != s() && location.reload()
            }.bind(void 0),
            timeout: 25
        })
    }, {}]
}, {}, [1]);