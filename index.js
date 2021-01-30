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

        
        var r = {};

        
        
        var i, c = ["nunjucks", "handlebars", "mustache"];
        (i = window.respecConfig).preProcess || (i.preProcess = []), i.preProcess.push((async function(n, r) {
                await
                
                
                
           
            })), i.postProcess || (i.postProcess = []), i.postProcess.push((function(e, n) {
                ! function(e, t) {
                    let n;
                    if (e.publisher) n = e.publisher;
                    else {
                        n = e.shortName;
                        for (const t of [...e.authors, ...e.editors])
                            if (t.company) {
                                n = t.company;
                                break
                            }
                    }
                    const o = n + "  " + e.longStatus,
                        r = t.querySelector(":root"),
                        a = getComputedStyle(r).getPropertyValue("--actual-accent-color"),
                        i = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="380"><rect x="0" y="0" width="25" height="380" fill="${a}"/><text x="-190" y="12.5" transform="rotate(270)" dominant-baseline="middle" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#ffffff" xml:space="preserve">${o}</text></svg>`)}`;
                    r.style.setProperty("--background-image", `url(${i})`)
                }(e, n),
                function(e, n) {
                    const o = n.querySelector("div.head dl");
                    let r = n.querySelector("div.head dl dd.vcard");
                    if (o && r) {
                        r = r.previousElementSibling;
                        const e = o.childNodes;
                        for (let t = 0; t < e.length && e[t] != r; t++) e[t].style && (e[t].style.display = "none")
                    }
                    if (t.version) {
                        const e = n.createElement("h3");
                        e.innerHTML = t.version, n.querySelector("div.head").insertBefore(e, o)
                    }
                }(0, n)
            })),
            function(e) {
                r = e, document.addEventListener("DOMContentLoaded", (() => {
                    document.querySelectorAll("section[data-include][data-format]").forEach((e => {
                        let t = e.getAttribute("data-format");
                        c.includes(t) && (e.setAttribute("data-format", "markdown"), e.setAttribute("data-oninclude", (e.getAttribute("data-oninclude") || "") + ` ${t}Render`))
                    }))
                }))
            }(i)
    })()
})();