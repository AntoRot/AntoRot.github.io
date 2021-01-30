(() => {
    "use strict";
    var e = {
            589: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var o = n(645),
                    r = n.n(o)()((function(e) {
                        return e[1]
                    }));
                r.push([e.id, ":root {\n  --default-theme-color: #4682b4;\n  --default-accent-color: #f96f35;\n  --actual-theme-color: var(--theme-color, var(--default-theme-color));\n  --actual-accent-color: var(--accent-color, var(--default-accent-color));\n}\nbody {\n  background-image: var(--background-image);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: left top;\n  background-size: 25px auto;\n  max-width: 1024px;\n}\ndiv.head h3 {\n  margin-top: 0px;\n}\ndiv.head h2 {\n  margin-bottom: 0.5em;\n}\n#respec-ui,\ndiv.head h2:last-of-type,\ndiv.head p {\n  display: none;\n}\nh4,\nh5,\nh6 {\n  color: var(--heading-text);\n}\ncode {\n  color: var(--actual-accent-color);\n}\npre code {\n  color: var(--actual-theme-color);\n}\ncode.ascii,\ncode.EBNF,\ncode.URI {\n  color: var(--actual-theme-color);\n  font-size: 1.1em;\n}\n:root {\n  --unofficial-watermark: unset;\n  --toclink-underline: var(--actual-theme-color);\n  --toclink-visited-underline: var(--actual-theme-color);\n  --heading-text: var(--actual-theme-color);\n  --a-normal-text: var(--actual-theme-color);\n}\n", ""]);
                const a = r
            },
            645: e => {
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = e(t);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                        })).join("")
                    }, t.i = function(e, n, o) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var r = {};
                        if (o)
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a][0];
                                null != i && (r[i] = !0)
                            }
                        for (var c = 0; c < e.length; c++) {
                            var s = [].concat(e[c]);
                            o && r[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
                        }
                    }, t
                }
            }
        },
        t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            id: o,
            exports: {}
        };
        return e[o](r, r.exports, n), r.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = n(589);
        const t = {};

    })()
})();