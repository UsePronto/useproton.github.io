/*!jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license*/ !(function (
  t,
  e,
) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  var i = [],
    n = t.document,
    s = Object.getPrototypeOf,
    o = i.slice,
    a = i.concat,
    r = i.push,
    l = i.indexOf,
    h = {},
    u = h.toString,
    c = h.hasOwnProperty,
    d = c.toString,
    p = d.call(Object),
    f = {};
  function m(t, e) {
    var i = (e = e || n).createElement("script");
    (i.text = t), e.head.appendChild(i).parentNode.removeChild(i);
  }
  var g = "3.1.0",
    v = function (t, e) {
      return new v.fn.init(t, e);
    },
    y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    b = /^-ms-/,
    _ = /-([a-z])/g,
    w = function (t, e) {
      return e.toUpperCase();
    };
  function x(t) {
    var e = !!t && "length" in t && t.length,
      i = v.type(t);
    return (
      "function" !== i &&
      !v.isWindow(t) &&
      ("array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  (v.fn = v.prototype =
    {
      jquery: g,
      constructor: v,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (t) {
        return null != t
          ? t < 0
            ? this[t + this.length]
            : this[t]
          : o.call(this);
      },
      pushStack: function (t) {
        var e = v.merge(this.constructor(), t);
        return (e.prevObject = this), e;
      },
      each: function (t) {
        return v.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          v.map(this, function (e, i) {
            return t.call(e, i, e);
          }),
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (t < 0 ? e : 0);
        return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: r,
      sort: i.sort,
      splice: i.splice,
    }),
    (v.extend = v.fn.extend =
      function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          a = arguments[0] || {},
          r = 1,
          l = arguments.length,
          h = !1;
        for (
          "boolean" == typeof a && ((h = a), (a = arguments[r] || {}), r++),
            "object" == typeof a || v.isFunction(a) || (a = {}),
            r === l && ((a = this), r--);
          r < l;
          r++
        )
          if (null != (t = arguments[r]))
            for (e in t)
              (i = a[e]),
                a !== (n = t[e]) &&
                  (h && n && (v.isPlainObject(n) || (s = v.isArray(n)))
                    ? (s
                        ? ((s = !1), (o = i && v.isArray(i) ? i : []))
                        : (o = i && v.isPlainObject(i) ? i : {}),
                      (a[e] = v.extend(h, o, n)))
                    : void 0 !== n && (a[e] = n));
        return a;
      }),
    v.extend({
      expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === v.type(t);
      },
      isArray: Array.isArray,
      isWindow: function (t) {
        return null != t && t === t.window;
      },
      isNumeric: function (t) {
        var e = v.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      },
      isPlainObject: function (t) {
        var e, i;
        return !(
          !t ||
          "[object Object]" !== u.call(t) ||
          ((e = s(t)) &&
            ((i = c.call(e, "constructor") && e.constructor),
            "function" != typeof i || d.call(i) !== p))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
            ? h[u.call(t)] || "object"
            : typeof t;
      },
      globalEval: function (t) {
        m(t);
      },
      camelCase: function (t) {
        return t.replace(b, "ms-").replace(_, w);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e) {
        var i,
          n = 0;
        if (x(t))
          for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(y, "");
      },
      makeArray: function (t, e) {
        var i = e || [];
        return (
          null != t &&
            (x(Object(t))
              ? v.merge(i, "string" == typeof t ? [t] : t)
              : r.call(i, t)),
          i
        );
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : l.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
        return (t.length = s), t;
      },
      grep: function (t, e, i) {
        for (var n = [], s = 0, o = t.length, a = !i; s < o; s++)
          !e(t[s], s) !== a && n.push(t[s]);
        return n;
      },
      map: function (t, e, i) {
        var n,
          s,
          o = 0,
          r = [];
        if (x(t))
          for (n = t.length; o < n; o++)
            null != (s = e(t[o], o, i)) && r.push(s);
        else for (o in t) null != (s = e(t[o], o, i)) && r.push(s);
        return a.apply([], r);
      },
      guid: 1,
      proxy: function (t, e) {
        var i, n, s;
        if (
          ("string" == typeof e && ((i = t[e]), (e = t), (t = i)),
          v.isFunction(t))
        )
          return (
            (n = o.call(arguments, 2)),
            (s = function () {
              return t.apply(e || this, n.concat(o.call(arguments)));
            }),
            (s.guid = t.guid = t.guid || v.guid++),
            s
          );
      },
      now: Date.now,
      support: f,
    }),
    "function" == typeof Symbol && (v.fn[Symbol.iterator] = i[Symbol.iterator]),
    v.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " ",
      ),
      function (t, e) {
        h["[object " + e + "]"] = e.toLowerCase();
      },
    );
  var C = (function (t) {
    var e,
      i,
      n,
      s,
      o,
      a,
      r,
      l,
      h,
      u,
      c,
      d,
      p,
      f,
      m,
      g,
      v,
      y,
      b,
      _ = "sizzle" + 1 * new Date(),
      w = t.document,
      x = 0,
      C = 0,
      k = at(),
      T = at(),
      D = at(),
      A = function (t, e) {
        return t === e && (c = !0), 0;
      },
      S = {}.hasOwnProperty,
      M = [],
      I = M.pop,
      P = M.push,
      O = M.push,
      E = M.slice,
      N = function (t, e) {
        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
        return -1;
      },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      z =
        "\\[" +
        L +
        "*(" +
        F +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        F +
        "))|)" +
        L +
        "*\\]",
      R =
        ":(" +
        F +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        z +
        ")*)|.*)\\)|)",
      W = new RegExp(L + "+", "g"),
      j = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      q = new RegExp("^" + L + "*," + L + "*"),
      B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      Y = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(R),
      Q = new RegExp("^" + F + "$"),
      V = {
        ID: new RegExp("^#(" + F + ")"),
        CLASS: new RegExp("^\\.(" + F + ")"),
        TAG: new RegExp("^(" + F + "|[*])"),
        ATTR: new RegExp("^" + z),
        PSEUDO: new RegExp("^" + R),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i",
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i",
        ),
      },
      K = /^(?:input|select|textarea|button)$/i,
      $ = /^h\d$/i,
      X = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      tt = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n != n || i
          ? e
          : n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      it = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      nt = function () {
        d();
      },
      st = yt(
        function (t) {
          return !0 === t.disabled;
        },
        { dir: "parentNode", next: "legend" },
      );
    try {
      O.apply((M = E.call(w.childNodes)), w.childNodes),
        M[w.childNodes.length].nodeType;
    } catch (t) {
      O = {
        apply: M.length
          ? function (t, e) {
              P.apply(t, E.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function ot(t, e, n, s) {
      var o,
        r,
        h,
        u,
        c,
        f,
        v,
        y = e && e.ownerDocument,
        x = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))
      )
        return n;
      if (
        !s &&
        ((e ? e.ownerDocument || e : w) !== p && d(e), (e = e || p), m)
      ) {
        if (11 !== x && (c = G.exec(t)))
          if ((o = c[1])) {
            if (9 === x) {
              if (!(h = e.getElementById(o))) return n;
              if (h.id === o) return n.push(h), n;
            } else if (y && (h = y.getElementById(o)) && b(e, h) && h.id === o)
              return n.push(h), n;
          } else {
            if (c[2]) return O.apply(n, e.getElementsByTagName(t)), n;
            if (
              (o = c[3]) &&
              i.getElementsByClassName &&
              e.getElementsByClassName
            )
              return O.apply(n, e.getElementsByClassName(o)), n;
          }
        if (i.qsa && !D[t + " "] && (!g || !g.test(t))) {
          if (1 !== x) (y = e), (v = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (u = e.getAttribute("id"))
                ? (u = u.replace(et, it))
                : e.setAttribute("id", (u = _)),
                r = (f = a(t)).length;
              r--;

            )
              f[r] = "#" + u + " " + vt(f[r]);
            (v = f.join(",")), (y = (J.test(t) && mt(e.parentNode)) || e);
          }
          if (v)
            try {
              return O.apply(n, y.querySelectorAll(v)), n;
            } catch (t) {
            } finally {
              u === _ && e.removeAttribute("id");
            }
        }
      }
      return l(t.replace(j, "$1"), e, n, s);
    }
    function at() {
      var t = [];
      return function e(i, s) {
        return (
          t.push(i + " ") > n.cacheLength && delete e[t.shift()],
          (e[i + " "] = s)
        );
      };
    }
    function rt(t) {
      return (t[_] = !0), t;
    }
    function lt(t) {
      var e = p.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ht(t, e) {
      for (var i = t.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = e;
    }
    function ut(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ct(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function dt(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function pt(t) {
      return function (e) {
        return (
          ("label" in e && e.disabled === t) ||
          ("form" in e && e.disabled === t) ||
          ("form" in e &&
            !1 === e.disabled &&
            (e.isDisabled === t ||
              (e.isDisabled !== !t && ("label" in e || !st(e)) !== t)))
        );
      };
    }
    function ft(t) {
      return rt(function (e) {
        return (
          (e = +e),
          rt(function (i, n) {
            for (var s, o = t([], i.length, e), a = o.length; a--; )
              i[(s = o[a])] && (i[s] = !(n[s] = i[s]));
          })
        );
      });
    }
    function mt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((i = ot.support = {}),
    (o = ot.isXML =
      function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (d = ot.setDocument =
      function (t) {
        var e,
          s,
          a = t ? t.ownerDocument || t : w;
        return a !== p && 9 === a.nodeType && a.documentElement
          ? ((f = (p = a).documentElement),
            (m = !o(p)),
            w !== p &&
              (s = p.defaultView) &&
              s.top !== s &&
              (s.addEventListener
                ? s.addEventListener("unload", nt, !1)
                : s.attachEvent && s.attachEvent("onunload", nt)),
            (i.attributes = lt(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (i.getElementsByTagName = lt(function (t) {
              return (
                t.appendChild(p.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (i.getElementsByClassName = X.test(p.getElementsByClassName)),
            (i.getById = lt(function (t) {
              return (
                (f.appendChild(t).id = _),
                !p.getElementsByName || !p.getElementsByName(_).length
              );
            })),
            i.getById
              ? ((n.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && m) {
                    var i = e.getElementById(t);
                    return i ? [i] : [];
                  }
                }),
                (n.filter.ID = function (t) {
                  var e = t.replace(Z, tt);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete n.find.ID,
                (n.filter.ID = function (t) {
                  var e = t.replace(Z, tt);
                  return function (t) {
                    var i =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                  };
                })),
            (n.find.TAG = i.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : i.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                }
              : function (t, e) {
                  var i,
                    n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return o;
                }),
            (n.find.CLASS =
              i.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && m)
                  return e.getElementsByClassName(t);
              }),
            (v = []),
            (g = []),
            (i.qsa = X.test(p.querySelectorAll)) &&
              (lt(function (t) {
                (f.appendChild(t).innerHTML =
                  "<a id='" +
                  _ +
                  "'></a><select id='" +
                  _ +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + L + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    g.push("\\[" + L + "*(?:value|" + H + ")"),
                  t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                  t.querySelectorAll(":checked").length || g.push(":checked"),
                  t.querySelectorAll("a#" + _ + "+*").length ||
                    g.push(".#.+[+~]");
              }),
              lt(function (t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    g.push("name" + L + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    g.push(":enabled", ":disabled"),
                  (f.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    g.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (i.matchesSelector = X.test(
              (y =
                f.matches ||
                f.webkitMatchesSelector ||
                f.mozMatchesSelector ||
                f.oMatchesSelector ||
                f.msMatchesSelector),
            )) &&
              lt(function (t) {
                (i.disconnectedMatch = y.call(t, "*")),
                  y.call(t, "[s!='']:x"),
                  v.push("!=", R);
              }),
            (g = g.length && new RegExp(g.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (e = X.test(f.compareDocumentPosition)),
            (b =
              e || X.test(f.contains)
                ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                    return (
                      t === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (A = e
              ? function (t, e) {
                  if (t === e) return (c = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!i.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t === p || (t.ownerDocument === w && b(w, t))
                        ? -1
                        : e === p || (e.ownerDocument === w && b(w, e))
                          ? 1
                          : u
                            ? N(u, t) - N(u, e)
                            : 0
                      : 4 & n
                        ? -1
                        : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (c = !0), 0;
                  var i,
                    n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    r = [e];
                  if (!s || !o)
                    return t === p
                      ? -1
                      : e === p
                        ? 1
                        : s
                          ? -1
                          : o
                            ? 1
                            : u
                              ? N(u, t) - N(u, e)
                              : 0;
                  if (s === o) return ut(t, e);
                  for (i = t; (i = i.parentNode); ) a.unshift(i);
                  for (i = e; (i = i.parentNode); ) r.unshift(i);
                  for (; a[n] === r[n]; ) n++;
                  return n
                    ? ut(a[n], r[n])
                    : a[n] === w
                      ? -1
                      : r[n] === w
                        ? 1
                        : 0;
                }),
            p)
          : p;
      }),
    (ot.matches = function (t, e) {
      return ot(t, null, null, e);
    }),
    (ot.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== p && d(t),
        (e = e.replace(Y, "='$1']")),
        i.matchesSelector &&
          m &&
          !D[e + " "] &&
          (!v || !v.test(e)) &&
          (!g || !g.test(e)))
      )
        try {
          var n = y.call(t, e);
          if (
            n ||
            i.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {}
      return ot(e, p, null, [t]).length > 0;
    }),
    (ot.contains = function (t, e) {
      return (t.ownerDocument || t) !== p && d(t), b(t, e);
    }),
    (ot.attr = function (t, e) {
      (t.ownerDocument || t) !== p && d(t);
      var s = n.attrHandle[e.toLowerCase()],
        o = s && S.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
      return void 0 !== o
        ? o
        : i.attributes || !m
          ? t.getAttribute(e)
          : (o = t.getAttributeNode(e)) && o.specified
            ? o.value
            : null;
    }),
    (ot.escape = function (t) {
      return (t + "").replace(et, it);
    }),
    (ot.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (ot.uniqueSort = function (t) {
      var e,
        n = [],
        s = 0,
        o = 0;
      if (
        ((c = !i.detectDuplicates),
        (u = !i.sortStable && t.slice(0)),
        t.sort(A),
        c)
      ) {
        for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
        for (; s--; ) t.splice(n[s], 1);
      }
      return (u = null), t;
    }),
    (s = ot.getText =
      function (t) {
        var e,
          i = "",
          n = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[n++]); ) i += s(e);
        return i;
      }),
    (n = ot.selectors =
      {
        cacheLength: 50,
        createPseudo: rt,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(Z, tt)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || ot.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && ot.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              i = !t[6] && t[2];
            return V.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : i &&
                    U.test(i) &&
                    (e = a(i, !0)) &&
                    (e = i.indexOf(")", i.length - e) - i.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(Z, tt).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = k[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) &&
                k(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      "",
                  );
                }))
            );
          },
          ATTR: function (t, e, i) {
            return function (n) {
              var s = ot.attr(n, t);
              return null == s
                ? "!=" === e
                : !e ||
                    ((s += ""),
                    "=" === e
                      ? s === i
                      : "!=" === e
                        ? s !== i
                        : "^=" === e
                          ? i && 0 === s.indexOf(i)
                          : "*=" === e
                            ? i && s.indexOf(i) > -1
                            : "$=" === e
                              ? i && s.slice(-i.length) === i
                              : "~=" === e
                                ? (" " + s.replace(W, " ") + " ").indexOf(i) >
                                  -1
                                : "|=" === e &&
                                  (s === i ||
                                    s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (t, e, i, n, s) {
            var o = "nth" !== t.slice(0, 3),
              a = "last" !== t.slice(-4),
              r = "of-type" === e;
            return 1 === n && 0 === s
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, l) {
                  var h,
                    u,
                    c,
                    d,
                    p,
                    f,
                    m = o !== a ? "nextSibling" : "previousSibling",
                    g = e.parentNode,
                    v = r && e.nodeName.toLowerCase(),
                    y = !l && !r,
                    b = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (d = e; (d = d[m]); )
                          if (
                            r
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        f = m = "only" === t && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        b =
                          (p =
                            (h =
                              (u =
                                (c = (d = g)[_] || (d[_] = {}))[d.uniqueID] ||
                                (c[d.uniqueID] = {}))[t] || [])[0] === x &&
                            h[1]) && h[2],
                          d = p && g.childNodes[p];
                        (d = (++p && d && d[m]) || (b = p = 0) || f.pop());

                      )
                        if (1 === d.nodeType && ++b && d === e) {
                          u[t] = [x, p, b];
                          break;
                        }
                    } else if (
                      (y &&
                        (b = p =
                          (h =
                            (u =
                              (c = (d = e)[_] || (d[_] = {}))[d.uniqueID] ||
                              (c[d.uniqueID] = {}))[t] || [])[0] === x && h[1]),
                      !1 === b)
                    )
                      for (
                        ;
                        (d = (++p && d && d[m]) || (b = p = 0) || f.pop()) &&
                        ((r
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++b ||
                          (y &&
                            ((u =
                              (c = d[_] || (d[_] = {}))[d.uniqueID] ||
                              (c[d.uniqueID] = {}))[t] = [x, b]),
                          d !== e));

                      );
                    return (b -= s) === n || (b % n == 0 && b / n >= 0);
                  }
                };
          },
          PSEUDO: function (t, e) {
            var i,
              s =
                n.pseudos[t] ||
                n.setFilters[t.toLowerCase()] ||
                ot.error("unsupported pseudo: " + t);
            return s[_]
              ? s(e)
              : s.length > 1
                ? ((i = [t, t, "", e]),
                  n.setFilters.hasOwnProperty(t.toLowerCase())
                    ? rt(function (t, i) {
                        for (var n, o = s(t, e), a = o.length; a--; )
                          t[(n = N(t, o[a]))] = !(i[n] = o[a]);
                      })
                    : function (t) {
                        return s(t, 0, i);
                      })
                : s;
          },
        },
        pseudos: {
          not: rt(function (t) {
            var e = [],
              i = [],
              n = r(t.replace(j, "$1"));
            return n[_]
              ? rt(function (t, e, i, s) {
                  for (var o, a = n(t, null, s, []), r = t.length; r--; )
                    (o = a[r]) && (t[r] = !(e[r] = o));
                })
              : function (t, s, o) {
                  return (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop();
                };
          }),
          has: rt(function (t) {
            return function (e) {
              return ot(t, e).length > 0;
            };
          }),
          contains: rt(function (t) {
            return (
              (t = t.replace(Z, tt)),
              function (e) {
                return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: rt(function (t) {
            return (
              Q.test(t || "") || ot.error("unsupported lang: " + t),
              (t = t.replace(Z, tt).toLowerCase()),
              function (e) {
                var i;
                do {
                  if (
                    (i = m
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === f;
          },
          focus: function (t) {
            return (
              t === p.activeElement &&
              (!p.hasFocus || p.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: pt(!1),
          disabled: pt(!0),
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !n.pseudos.empty(t);
          },
          header: function (t) {
            return $.test(t.nodeName);
          },
          input: function (t) {
            return K.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: ft(function () {
            return [0];
          }),
          last: ft(function (t, e) {
            return [e - 1];
          }),
          eq: ft(function (t, e, i) {
            return [i < 0 ? i + e : i];
          }),
          even: ft(function (t, e) {
            for (var i = 0; i < e; i += 2) t.push(i);
            return t;
          }),
          odd: ft(function (t, e) {
            for (var i = 1; i < e; i += 2) t.push(i);
            return t;
          }),
          lt: ft(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
            return t;
          }),
          gt: ft(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }),
    (n.pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ct(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = dt(e);
    function gt() {}
    function vt(t) {
      for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
      return n;
    }
    function yt(t, e, i) {
      var n = e.dir,
        s = e.next,
        o = s || n,
        a = i && "parentNode" === o,
        r = C++;
      return e.first
        ? function (e, i, s) {
            for (; (e = e[n]); ) if (1 === e.nodeType || a) return t(e, i, s);
          }
        : function (e, i, l) {
            var h,
              u,
              c,
              d = [x, r];
            if (l) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || a) && t(e, i, l)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || a)
                  if (
                    ((u =
                      (c = e[_] || (e[_] = {}))[e.uniqueID] ||
                      (c[e.uniqueID] = {})),
                    s && s === e.nodeName.toLowerCase())
                  )
                    e = e[n] || e;
                  else {
                    if ((h = u[o]) && h[0] === x && h[1] === r)
                      return (d[2] = h[2]);
                    if (((u[o] = d), (d[2] = t(e, i, l)))) return !0;
                  }
          };
    }
    function bt(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function _t(t, e, i, n, s) {
      for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)
        (o = t[r]) && ((i && !i(o, n, s)) || (a.push(o), h && e.push(r)));
      return a;
    }
    function wt(t, e, i, n, s, o) {
      return (
        n && !n[_] && (n = wt(n)),
        s && !s[_] && (s = wt(s, o)),
        rt(function (o, a, r, l) {
          var h,
            u,
            c,
            d = [],
            p = [],
            f = a.length,
            m =
              o ||
              (function (t, e, i) {
                for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                return i;
              })(e || "*", r.nodeType ? [r] : r, []),
            g = !t || (!o && e) ? m : _t(m, d, t, r, l),
            v = i ? (s || (o ? t : f || n) ? [] : a) : g;
          if ((i && i(g, v, r, l), n))
            for (h = _t(v, p), n(h, [], r, l), u = h.length; u--; )
              (c = h[u]) && (v[p[u]] = !(g[p[u]] = c));
          if (o) {
            if (s || t) {
              if (s) {
                for (h = [], u = v.length; u--; )
                  (c = v[u]) && h.push((g[u] = c));
                s(null, (v = []), h, l);
              }
              for (u = v.length; u--; )
                (c = v[u]) &&
                  (h = s ? N(o, c) : d[u]) > -1 &&
                  (o[h] = !(a[h] = c));
            }
          } else
            (v = _t(v === a ? v.splice(f, v.length) : v)),
              s ? s(null, a, v, l) : O.apply(a, v);
        })
      );
    }
    function xt(t) {
      for (
        var e,
          i,
          s,
          o = t.length,
          a = n.relative[t[0].type],
          r = a || n.relative[" "],
          l = a ? 1 : 0,
          u = yt(
            function (t) {
              return t === e;
            },
            r,
            !0,
          ),
          c = yt(
            function (t) {
              return N(e, t) > -1;
            },
            r,
            !0,
          ),
          d = [
            function (t, i, n) {
              var s =
                (!a && (n || i !== h)) ||
                ((e = i).nodeType ? u(t, i, n) : c(t, i, n));
              return (e = null), s;
            },
          ];
        l < o;
        l++
      )
        if ((i = n.relative[t[l].type])) d = [yt(bt(d), i)];
        else {
          if ((i = n.filter[t[l].type].apply(null, t[l].matches))[_]) {
            for (s = ++l; s < o && !n.relative[t[s].type]; s++);
            return wt(
              l > 1 && bt(d),
              l > 1 &&
                vt(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" }),
                ).replace(j, "$1"),
              i,
              l < s && xt(t.slice(l, s)),
              s < o && xt((t = t.slice(s))),
              s < o && vt(t),
            );
          }
          d.push(i);
        }
      return bt(d);
    }
    function Ct(t, e) {
      var i = e.length > 0,
        s = t.length > 0,
        o = function (o, a, r, l, u) {
          var c,
            f,
            g,
            v = 0,
            y = "0",
            b = o && [],
            _ = [],
            w = h,
            C = o || (s && n.find.TAG("*", u)),
            k = (x += null == w ? 1 : Math.random() || 0.1),
            T = C.length;
          for (
            u && (h = a === p || a || u);
            y !== T && null != (c = C[y]);
            y++
          ) {
            if (s && c) {
              for (
                f = 0, a || c.ownerDocument === p || (d(c), (r = !m));
                (g = t[f++]);

              )
                if (g(c, a || p, r)) {
                  l.push(c);
                  break;
                }
              u && (x = k);
            }
            i && ((c = !g && c) && v--, o && b.push(c));
          }
          if (((v += y), i && y !== v)) {
            for (f = 0; (g = e[f++]); ) g(b, _, a, r);
            if (o) {
              if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = I.call(l));
              _ = _t(_);
            }
            O.apply(l, _),
              u && !o && _.length > 0 && v + e.length > 1 && ot.uniqueSort(l);
          }
          return u && ((x = k), (h = w)), b;
        };
      return i ? rt(o) : o;
    }
    return (
      (gt.prototype = n.filters = n.pseudos),
      (n.setFilters = new gt()),
      (a = ot.tokenize =
        function (t, e) {
          var i,
            s,
            o,
            a,
            r,
            l,
            h,
            u = T[t + " "];
          if (u) return e ? 0 : u.slice(0);
          for (r = t, l = [], h = n.preFilter; r; ) {
            for (a in ((i && !(s = q.exec(r))) ||
              (s && (r = r.slice(s[0].length) || r), l.push((o = []))),
            (i = !1),
            (s = B.exec(r)) &&
              ((i = s.shift()),
              o.push({ value: i, type: s[0].replace(j, " ") }),
              (r = r.slice(i.length))),
            n.filter))
              !(s = V[a].exec(r)) ||
                (h[a] && !(s = h[a](s))) ||
                ((i = s.shift()),
                o.push({ value: i, type: a, matches: s }),
                (r = r.slice(i.length)));
            if (!i) break;
          }
          return e ? r.length : r ? ot.error(t) : T(t, l).slice(0);
        }),
      (r = ot.compile =
        function (t, e) {
          var i,
            n = [],
            s = [],
            o = D[t + " "];
          if (!o) {
            for (e || (e = a(t)), i = e.length; i--; )
              (o = xt(e[i]))[_] ? n.push(o) : s.push(o);
            (o = D(t, Ct(s, n))).selector = t;
          }
          return o;
        }),
      (l = ot.select =
        function (t, e, s, o) {
          var l,
            h,
            u,
            c,
            d,
            p = "function" == typeof t && t,
            f = !o && a((t = p.selector || t));
          if (((s = s || []), 1 === f.length)) {
            if (
              (h = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (u = h[0]).type &&
              i.getById &&
              9 === e.nodeType &&
              m &&
              n.relative[h[1].type]
            ) {
              if (!(e = (n.find.ID(u.matches[0].replace(Z, tt), e) || [])[0]))
                return s;
              p && (e = e.parentNode), (t = t.slice(h.shift().value.length));
            }
            for (
              l = V.needsContext.test(t) ? 0 : h.length;
              l-- && ((u = h[l]), !n.relative[(c = u.type)]);

            )
              if (
                (d = n.find[c]) &&
                (o = d(
                  u.matches[0].replace(Z, tt),
                  (J.test(h[0].type) && mt(e.parentNode)) || e,
                ))
              ) {
                if ((h.splice(l, 1), !(t = o.length && vt(h))))
                  return O.apply(s, o), s;
                break;
              }
          }
          return (
            (p || r(t, f))(
              o,
              e,
              !m,
              s,
              !e || (J.test(t) && mt(e.parentNode)) || e,
            ),
            s
          );
        }),
      (i.sortStable = _.split("").sort(A).join("") === _),
      (i.detectDuplicates = !!c),
      d(),
      (i.sortDetached = lt(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
      })),
      lt(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        ht("type|href|height|width", function (t, e, i) {
          if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        lt(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        ht("value", function (t, e, i) {
          if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      lt(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        ht(H, function (t, e, i) {
          var n;
          if (!i)
            return !0 === t[e]
              ? e.toLowerCase()
              : (n = t.getAttributeNode(e)) && n.specified
                ? n.value
                : null;
        }),
      ot
    );
  })(t);
  (v.find = C),
    (v.expr = C.selectors),
    (v.expr[":"] = v.expr.pseudos),
    (v.uniqueSort = v.unique = C.uniqueSort),
    (v.text = C.getText),
    (v.isXMLDoc = C.isXML),
    (v.contains = C.contains),
    (v.escapeSelector = C.escape);
  var k = function (t, e, i) {
      for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (s && v(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    T = function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
    D = v.expr.match.needsContext,
    A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    S = /^.[^:#\[\.,]*$/;
  function M(t, e, i) {
    if (v.isFunction(e))
      return v.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return v.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (S.test(e)) return v.filter(e, t, i);
      e = v.filter(e, t);
    }
    return v.grep(t, function (t) {
      return l.call(e, t) > -1 !== i && 1 === t.nodeType;
    });
  }
  (v.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? v.find.matchesSelector(n, t)
          ? [n]
          : []
        : v.find.matches(
            t,
            v.grep(e, function (t) {
              return 1 === t.nodeType;
            }),
          )
    );
  }),
    v.fn.extend({
      find: function (t) {
        var e,
          i,
          n = this.length,
          s = this;
        if ("string" != typeof t)
          return this.pushStack(
            v(t).filter(function () {
              for (e = 0; e < n; e++) if (v.contains(s[e], this)) return !0;
            }),
          );
        for (i = this.pushStack([]), e = 0; e < n; e++) v.find(t, s[e], i);
        return n > 1 ? v.uniqueSort(i) : i;
      },
      filter: function (t) {
        return this.pushStack(M(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(M(this, t || [], !0));
      },
      is: function (t) {
        return !!M(this, "string" == typeof t && D.test(t) ? v(t) : t || [], !1)
          .length;
      },
    });
  var I,
    P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    O = (v.fn.init = function (t, e, i) {
      var s, o;
      if (!t) return this;
      if (((i = i || I), "string" == typeof t)) {
        if (
          !(s =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : P.exec(t)) ||
          (!s[1] && e)
        )
          return !e || e.jquery
            ? (e || i).find(t)
            : this.constructor(e).find(t);
        if (s[1]) {
          if (
            ((e = e instanceof v ? e[0] : e),
            v.merge(
              this,
              v.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : n, !0),
            ),
            A.test(s[1]) && v.isPlainObject(e))
          )
            for (s in e)
              v.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
          return this;
        }
        return (
          (o = n.getElementById(s[2])) && ((this[0] = o), (this.length = 1)),
          this
        );
      }
      return t.nodeType
        ? ((this[0] = t), (this.length = 1), this)
        : v.isFunction(t)
          ? void 0 !== i.ready
            ? i.ready(t)
            : t(v)
          : v.makeArray(t, this);
    });
  (O.prototype = v.fn), (I = v(n));
  var E = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function H(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  v.fn.extend({
    has: function (t) {
      var e = v(t, this),
        i = e.length;
      return this.filter(function () {
        for (var t = 0; t < i; t++) if (v.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var i,
        n = 0,
        s = this.length,
        o = [],
        a = "string" != typeof t && v(t);
      if (!D.test(t))
        for (; n < s; n++)
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (a
                ? a.index(i) > -1
                : 1 === i.nodeType && v.find.matchesSelector(i, t))
            ) {
              o.push(i);
              break;
            }
      return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? l.call(v(t), this[0])
          : l.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (t, e) {
      return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    v.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return k(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return k(t, "parentNode", i);
        },
        next: function (t) {
          return H(t, "nextSibling");
        },
        prev: function (t) {
          return H(t, "previousSibling");
        },
        nextAll: function (t) {
          return k(t, "nextSibling");
        },
        prevAll: function (t) {
          return k(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return k(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return k(t, "previousSibling", i);
        },
        siblings: function (t) {
          return T((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return T(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument || v.merge([], t.childNodes);
        },
      },
      function (t, e) {
        v.fn[t] = function (i, n) {
          var s = v.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (s = v.filter(n, s)),
            this.length > 1 &&
              (N[t] || v.uniqueSort(s), E.test(t) && s.reverse()),
            this.pushStack(s)
          );
        };
      },
    );
  var L = /\S+/g;
  function F(t) {
    return t;
  }
  function z(t) {
    throw t;
  }
  function R(t, e, i) {
    var n;
    try {
      t && v.isFunction((n = t.promise))
        ? n.call(t).done(e).fail(i)
        : t && v.isFunction((n = t.then))
          ? n.call(t, e, i)
          : e.call(void 0, t);
    } catch (t) {
      i.call(void 0, t);
    }
  }
  (v.Callbacks = function (t) {
    t =
      "string" == typeof t
        ? (function (t) {
            var e = {};
            return (
              v.each(t.match(L) || [], function (t, i) {
                e[i] = !0;
              }),
              e
            );
          })(t)
        : v.extend({}, t);
    var e,
      i,
      n,
      s,
      o = [],
      a = [],
      r = -1,
      l = function () {
        for (s = t.once, n = e = !0; a.length; r = -1)
          for (i = a.shift(); ++r < o.length; )
            !1 === o[r].apply(i[0], i[1]) &&
              t.stopOnFalse &&
              ((r = o.length), (i = !1));
        t.memory || (i = !1), (e = !1), s && (o = i ? [] : "");
      },
      h = {
        add: function () {
          return (
            o &&
              (i && !e && ((r = o.length - 1), a.push(i)),
              (function e(i) {
                v.each(i, function (i, n) {
                  v.isFunction(n)
                    ? (t.unique && h.has(n)) || o.push(n)
                    : n && n.length && "string" !== v.type(n) && e(n);
                });
              })(arguments),
              i && !e && l()),
            this
          );
        },
        remove: function () {
          return (
            v.each(arguments, function (t, e) {
              for (var i; (i = v.inArray(e, o, i)) > -1; )
                o.splice(i, 1), i <= r && r--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? v.inArray(t, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (s = a = []), (o = i = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (s = a = []), i || e || (o = i = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (t, i) {
          return (
            s ||
              ((i = [t, (i = i || []).slice ? i.slice() : i]),
              a.push(i),
              e || l()),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return h;
  }),
    v.extend({
      Deferred: function (e) {
        var i = [
            [
              "notify",
              "progress",
              v.Callbacks("memory"),
              v.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              v.Callbacks("once memory"),
              v.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              v.Callbacks("once memory"),
              v.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          s = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return s.then(null, t);
            },
            pipe: function () {
              var t = arguments;
              return v
                .Deferred(function (e) {
                  v.each(i, function (i, n) {
                    var s = v.isFunction(t[n[4]]) && t[n[4]];
                    o[n[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && v.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[n[0] + "With"](this, s ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function (e, n, s) {
              var o = 0;
              function a(e, i, n, s) {
                return function () {
                  var r = this,
                    l = arguments,
                    h = function () {
                      var t, h;
                      if (!(e < o)) {
                        if ((t = n.apply(r, l)) === i.promise())
                          throw new TypeError("Thenable self-resolution");
                        (h =
                          t &&
                          ("object" == typeof t || "function" == typeof t) &&
                          t.then),
                          v.isFunction(h)
                            ? s
                              ? h.call(t, a(o, i, F, s), a(o, i, z, s))
                              : (o++,
                                h.call(
                                  t,
                                  a(o, i, F, s),
                                  a(o, i, z, s),
                                  a(o, i, F, i.notifyWith),
                                ))
                            : (n !== F && ((r = void 0), (l = [t])),
                              (s || i.resolveWith)(r, l));
                      }
                    },
                    u = s
                      ? h
                      : function () {
                          try {
                            h();
                          } catch (t) {
                            v.Deferred.exceptionHook &&
                              v.Deferred.exceptionHook(t, u.stackTrace),
                              e + 1 >= o &&
                                (n !== z && ((r = void 0), (l = [t])),
                                i.rejectWith(r, l));
                          }
                        };
                  e
                    ? u()
                    : (v.Deferred.getStackHook &&
                        (u.stackTrace = v.Deferred.getStackHook()),
                      t.setTimeout(u));
                };
              }
              return v
                .Deferred(function (t) {
                  i[0][3].add(a(0, t, v.isFunction(s) ? s : F, t.notifyWith)),
                    i[1][3].add(a(0, t, v.isFunction(e) ? e : F)),
                    i[2][3].add(a(0, t, v.isFunction(n) ? n : z));
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? v.extend(t, s) : s;
            },
          },
          o = {};
        return (
          v.each(i, function (t, e) {
            var a = e[2],
              r = e[5];
            (s[e[1]] = a.add),
              r &&
                a.add(
                  function () {
                    n = r;
                  },
                  i[3 - t][2].disable,
                  i[0][2].lock,
                ),
              a.add(e[3].fire),
              (o[e[0]] = function () {
                return (
                  o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[e[0] + "With"] = a.fireWith);
          }),
          s.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (t) {
        var e = arguments.length,
          i = e,
          n = Array(i),
          s = o.call(arguments),
          a = v.Deferred(),
          r = function (t) {
            return function (i) {
              (n[t] = this),
                (s[t] = arguments.length > 1 ? o.call(arguments) : i),
                --e || a.resolveWith(n, s);
            };
          };
        if (
          e <= 1 &&
          (R(t, a.done(r(i)).resolve, a.reject),
          "pending" === a.state() || v.isFunction(s[i] && s[i].then))
        )
          return a.then();
        for (; i--; ) R(s[i], r(i), a.reject);
        return a.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (v.Deferred.exceptionHook = function (e, i) {
    t.console &&
      t.console.warn &&
      e &&
      W.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
  }),
    (v.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var j = v.Deferred();
  function q() {
    n.removeEventListener("DOMContentLoaded", q),
      t.removeEventListener("load", q),
      v.ready();
  }
  (v.fn.ready = function (t) {
    return (
      j.then(t).catch(function (t) {
        v.readyException(t);
      }),
      this
    );
  }),
    v.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? v.readyWait++ : v.ready(!0);
      },
      ready: function (t) {
        (!0 === t ? --v.readyWait : v.isReady) ||
          ((v.isReady = !0),
          (!0 !== t && --v.readyWait > 0) || j.resolveWith(n, [v]));
      },
    }),
    (v.ready.then = j.then),
    "complete" === n.readyState ||
    ("loading" !== n.readyState && !n.documentElement.doScroll)
      ? t.setTimeout(v.ready)
      : (n.addEventListener("DOMContentLoaded", q),
        t.addEventListener("load", q));
  var B = function (t, e, i, n, s, o, a) {
      var r = 0,
        l = t.length,
        h = null == i;
      if ("object" === v.type(i))
        for (r in ((s = !0), i)) B(t, e, r, i[r], !0, o, a);
      else if (
        void 0 !== n &&
        ((s = !0),
        v.isFunction(n) || (a = !0),
        h &&
          (a
            ? (e.call(t, n), (e = null))
            : ((h = e),
              (e = function (t, e, i) {
                return h.call(v(t), i);
              }))),
        e)
      )
        for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
      return s ? t : h ? e.call(t) : l ? e(t[0], i) : o;
    },
    Y = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  function U() {
    this.expando = v.expando + U.uid++;
  }
  (U.uid = 1),
    (U.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Y(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, i) {
        var n,
          s = this.cache(t);
        if ("string" == typeof e) s[v.camelCase(e)] = i;
        else for (n in e) s[v.camelCase(n)] = e[n];
        return s;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][v.camelCase(e)];
      },
      access: function (t, e, i) {
        return void 0 === e || (e && "string" == typeof e && void 0 === i)
          ? this.get(t, e)
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n = t[this.expando];
        if (void 0 !== n) {
          if (void 0 !== e) {
            v.isArray(e)
              ? (e = e.map(v.camelCase))
              : (e = (e = v.camelCase(e)) in n ? [e] : e.match(L) || []),
              (i = e.length);
            for (; i--; ) delete n[e[i]];
          }
          (void 0 === e || v.isEmptyObject(n)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !v.isEmptyObject(e);
      },
    });
  var Q = new U(),
    V = new U(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    $ = /[A-Z]/g;
  function X(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
      if (
        ((n = "data-" + e.replace($, "-$&").toLowerCase()),
        "string" == typeof (i = t.getAttribute(n)))
      ) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : +i + "" === i
                  ? +i
                  : K.test(i)
                    ? JSON.parse(i)
                    : i));
        } catch (t) {}
        V.set(t, e, i);
      } else i = void 0;
    return i;
  }
  v.extend({
    hasData: function (t) {
      return V.hasData(t) || Q.hasData(t);
    },
    data: function (t, e, i) {
      return V.access(t, e, i);
    },
    removeData: function (t, e) {
      V.remove(t, e);
    },
    _data: function (t, e, i) {
      return Q.access(t, e, i);
    },
    _removeData: function (t, e) {
      Q.remove(t, e);
    },
  }),
    v.fn.extend({
      data: function (t, e) {
        var i,
          n,
          s,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((s = V.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            for (i = a.length; i--; )
              a[i] &&
                0 === (n = a[i].name).indexOf("data-") &&
                ((n = v.camelCase(n.slice(5))), X(o, n, s[n]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return s;
        }
        return "object" == typeof t
          ? this.each(function () {
              V.set(this, t);
            })
          : B(
              this,
              function (e) {
                var i;
                if (o && void 0 === e) {
                  if (void 0 !== (i = V.get(o, t))) return i;
                  if (void 0 !== (i = X(o, t))) return i;
                } else
                  this.each(function () {
                    V.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData: function (t) {
        return this.each(function () {
          V.remove(this, t);
        });
      },
    }),
    v.extend({
      queue: function (t, e, i) {
        var n;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (n = Q.get(t, e)),
            i &&
              (!n || v.isArray(i)
                ? (n = Q.access(t, e, v.makeArray(i)))
                : n.push(i)),
            n || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = v.queue(t, e),
          n = i.length,
          s = i.shift(),
          o = v._queueHooks(t, e);
        "inprogress" === s && ((s = i.shift()), n--),
          s &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(
              t,
              function () {
                v.dequeue(t, e);
              },
              o,
            )),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          Q.get(t, i) ||
          Q.access(t, i, {
            empty: v.Callbacks("once memory").add(function () {
              Q.remove(t, [e + "queue", i]);
            }),
          })
        );
      },
    }),
    v.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? v.queue(this[0], t)
            : void 0 === e
              ? this
              : this.each(function () {
                  var i = v.queue(this, t, e);
                  v._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && v.dequeue(this, t);
                })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          v.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          s = v.Deferred(),
          o = this,
          a = this.length,
          r = function () {
            --n || s.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          a--;

        )
          (i = Q.get(o[a], t + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(r));
        return r(), s.promise(e);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    J = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Z = ["Top", "Right", "Bottom", "Left"],
    tt = function (t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display &&
          v.contains(t.ownerDocument, t) &&
          "none" === v.css(t, "display"))
      );
    },
    et = function (t, e, i, n) {
      var s,
        o,
        a = {};
      for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((s = i.apply(t, n || [])), e)) t.style[o] = a[o];
      return s;
    };
  function it(t, e, i, n) {
    var s,
      o = 1,
      a = 20,
      r = n
        ? function () {
            return n.cur();
          }
        : function () {
            return v.css(t, e, "");
          },
      l = r(),
      h = (i && i[3]) || (v.cssNumber[e] ? "" : "px"),
      u = (v.cssNumber[e] || ("px" !== h && +l)) && J.exec(v.css(t, e));
    if (u && u[3] !== h) {
      (h = h || u[3]), (i = i || []), (u = +l || 1);
      do {
        (u /= o = o || ".5"), v.style(t, e, u + h);
      } while (o !== (o = r() / l) && 1 !== o && --a);
    }
    return (
      i &&
        ((u = +u || +l || 0),
        (s = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = h), (n.start = u), (n.end = s))),
      s
    );
  }
  var nt = {};
  function st(t) {
    var e,
      i = t.ownerDocument,
      n = t.nodeName,
      s = nt[n];
    return (
      s ||
      ((e = i.body.appendChild(i.createElement(n))),
      (s = v.css(e, "display")),
      e.parentNode.removeChild(e),
      "none" === s && (s = "block"),
      (nt[n] = s),
      s)
    );
  }
  function ot(t, e) {
    for (var i, n, s = [], o = 0, a = t.length; o < a; o++)
      (n = t[o]).style &&
        ((i = n.style.display),
        e
          ? ("none" === i &&
              ((s[o] = Q.get(n, "display") || null),
              s[o] || (n.style.display = "")),
            "" === n.style.display && tt(n) && (s[o] = st(n)))
          : "none" !== i && ((s[o] = "none"), Q.set(n, "display", i)));
    for (o = 0; o < a; o++) null != s[o] && (t[o].style.display = s[o]);
    return t;
  }
  v.fn.extend({
    show: function () {
      return ot(this, !0);
    },
    hide: function () {
      return ot(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            tt(this) ? v(this).show() : v(this).hide();
          });
    },
  });
  var at = /^(?:checkbox|radio)$/i,
    rt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    lt = /^$|\/(?:java|ecma)script/i,
    ht = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ut(t, e) {
    var i =
      void 0 !== t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : [];
    return void 0 === e || (e && v.nodeName(t, e)) ? v.merge([t], i) : i;
  }
  function ct(t, e) {
    for (var i = 0, n = t.length; i < n; i++)
      Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"));
  }
  (ht.optgroup = ht.option),
    (ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead),
    (ht.th = ht.td);
  var dt = /<|&#?\w+;/;
  function pt(t, e, i, n, s) {
    for (
      var o,
        a,
        r,
        l,
        h,
        u,
        c = e.createDocumentFragment(),
        d = [],
        p = 0,
        f = t.length;
      p < f;
      p++
    )
      if ((o = t[p]) || 0 === o)
        if ("object" === v.type(o)) v.merge(d, o.nodeType ? [o] : o);
        else if (dt.test(o)) {
          for (
            a = a || c.appendChild(e.createElement("div")),
              r = (rt.exec(o) || ["", ""])[1].toLowerCase(),
              l = ht[r] || ht._default,
              a.innerHTML = l[1] + v.htmlPrefilter(o) + l[2],
              u = l[0];
            u--;

          )
            a = a.lastChild;
          v.merge(d, a.childNodes), ((a = c.firstChild).textContent = "");
        } else d.push(e.createTextNode(o));
    for (c.textContent = "", p = 0; (o = d[p++]); )
      if (n && v.inArray(o, n) > -1) s && s.push(o);
      else if (
        ((h = v.contains(o.ownerDocument, o)),
        (a = ut(c.appendChild(o), "script")),
        h && ct(a),
        i)
      )
        for (u = 0; (o = a[u++]); ) lt.test(o.type || "") && i.push(o);
    return c;
  }
  !(function () {
    var t = n.createDocumentFragment().appendChild(n.createElement("div")),
      e = n.createElement("input");
    e.setAttribute("type", "radio"),
      e.setAttribute("checked", "checked"),
      e.setAttribute("name", "t"),
      t.appendChild(e),
      (f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var ft = n.documentElement,
    mt = /^key/,
    gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    vt = /^([^.]*)(?:\.(.+)|)/;
  function yt() {
    return !0;
  }
  function bt() {
    return !1;
  }
  function _t() {
    try {
      return n.activeElement;
    } catch (t) {}
  }
  function wt(t, e, i, n, s, o) {
    var a, r;
    if ("object" == typeof e) {
      for (r in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
        wt(t, r, i, n, e[r], o);
      return t;
    }
    if (
      (null == n && null == s
        ? ((s = i), (n = i = void 0))
        : null == s &&
          ("string" == typeof i
            ? ((s = n), (n = void 0))
            : ((s = n), (n = i), (i = void 0))),
      !1 === s)
    )
      s = bt;
    else if (!s) return t;
    return (
      1 === o &&
        ((a = s),
        (s = function (t) {
          return v().off(t), a.apply(this, arguments);
        }),
        (s.guid = a.guid || (a.guid = v.guid++))),
      t.each(function () {
        v.event.add(this, e, s, n, i);
      })
    );
  }
  (v.event = {
    global: {},
    add: function (t, e, i, n, s) {
      var o,
        a,
        r,
        l,
        h,
        u,
        c,
        d,
        p,
        f,
        m,
        g = Q.get(t);
      if (g)
        for (
          i.handler && ((i = (o = i).handler), (s = o.selector)),
            s && v.find.matchesSelector(ft, s),
            i.guid || (i.guid = v.guid++),
            (l = g.events) || (l = g.events = {}),
            (a = g.handle) ||
              (a = g.handle =
                function (e) {
                  return void 0 !== v && v.event.triggered !== e.type
                    ? v.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            h = (e = (e || "").match(L) || [""]).length;
          h--;

        )
          (p = m = (r = vt.exec(e[h]) || [])[1]),
            (f = (r[2] || "").split(".").sort()),
            p &&
              ((c = v.event.special[p] || {}),
              (p = (s ? c.delegateType : c.bindType) || p),
              (c = v.event.special[p] || {}),
              (u = v.extend(
                {
                  type: p,
                  origType: m,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && v.expr.match.needsContext.test(s),
                  namespace: f.join("."),
                },
                o,
              )),
              (d = l[p]) ||
                (((d = l[p] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(t, n, f, a)) ||
                  (t.addEventListener && t.addEventListener(p, a))),
              c.add &&
                (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
              s ? d.splice(d.delegateCount++, 0, u) : d.push(u),
              (v.event.global[p] = !0));
    },
    remove: function (t, e, i, n, s) {
      var o,
        a,
        r,
        l,
        h,
        u,
        c,
        d,
        p,
        f,
        m,
        g = Q.hasData(t) && Q.get(t);
      if (g && (l = g.events)) {
        for (h = (e = (e || "").match(L) || [""]).length; h--; )
          if (
            ((p = m = (r = vt.exec(e[h]) || [])[1]),
            (f = (r[2] || "").split(".").sort()),
            p)
          ) {
            for (
              c = v.event.special[p] || {},
                d = l[(p = (n ? c.delegateType : c.bindType) || p)] || [],
                r =
                  r[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = d.length;
              o--;

            )
              (u = d[o]),
                (!s && m !== u.origType) ||
                  (i && i.guid !== u.guid) ||
                  (r && !r.test(u.namespace)) ||
                  (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                  (d.splice(o, 1),
                  u.selector && d.delegateCount--,
                  c.remove && c.remove.call(t, u));
            a &&
              !d.length &&
              ((c.teardown && !1 !== c.teardown.call(t, f, g.handle)) ||
                v.removeEvent(t, p, g.handle),
              delete l[p]);
          } else for (p in l) v.event.remove(t, p + e[h], i, n, !0);
        v.isEmptyObject(l) && Q.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r = v.event.fix(t),
        l = new Array(arguments.length),
        h = (Q.get(this, "events") || {})[r.type] || [],
        u = v.event.special[r.type] || {};
      for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
      if (
        ((r.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, r))
      ) {
        for (
          a = v.event.handlers.call(this, r, h), e = 0;
          (s = a[e++]) && !r.isPropagationStopped();

        )
          for (
            r.currentTarget = s.elem, i = 0;
            (o = s.handlers[i++]) && !r.isImmediatePropagationStopped();

          )
            (r.rnamespace && !r.rnamespace.test(o.namespace)) ||
              ((r.handleObj = o),
              (r.data = o.data),
              void 0 !==
                (n = (
                  (v.event.special[o.origType] || {}).handle || o.handler
                ).apply(s.elem, l)) &&
                !1 === (r.result = n) &&
                (r.preventDefault(), r.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, r), r.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        s,
        o,
        a = [],
        r = e.delegateCount,
        l = t.target;
      if (
        r &&
        l.nodeType &&
        ("click" !== t.type || isNaN(t.button) || t.button < 1)
      )
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
            for (n = [], i = 0; i < r; i++)
              void 0 === n[(s = (o = e[i]).selector + " ")] &&
                (n[s] = o.needsContext
                  ? v(s, this).index(l) > -1
                  : v.find(s, this, null, [l]).length),
                n[s] && n.push(o);
            n.length && a.push({ elem: l, handlers: n });
          }
      return r < e.length && a.push({ elem: this, handlers: e.slice(r) }), a;
    },
    addProp: function (t, e) {
      Object.defineProperty(v.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (t) {
      return t[v.expando] ? t : new v.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== _t() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === _t() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            v.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (t) {
          return v.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (v.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }),
    (v.Event = function (t, e) {
      return this instanceof v.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? yt
                  : bt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
          e && v.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || v.now()),
          void (this[v.expando] = !0))
        : new v.Event(t, e);
    }),
    (v.Event.prototype = {
      constructor: v.Event,
      isDefaultPrevented: bt,
      isPropagationStopped: bt,
      isImmediatePropagationStopped: bt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = yt),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = yt),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = yt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    v.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
          var e = t.button;
          return null == t.which && mt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && gt.test(t.type)
              ? 1 & e
                ? 1
                : 2 & e
                  ? 3
                  : 4 & e
                    ? 2
                    : 0
              : t.which;
        },
      },
      v.event.addProp,
    ),
    v.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        v.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              s = t.relatedTarget,
              o = t.handleObj;
            return (
              (s && (s === n || v.contains(n, s))) ||
                ((t.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      },
    ),
    v.fn.extend({
      on: function (t, e, i, n) {
        return wt(this, t, e, i, n);
      },
      one: function (t, e, i, n) {
        return wt(this, t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            v(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler,
            ),
            this
          );
        if ("object" == typeof t) {
          for (s in t) this.off(s, e, t[s]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
          !1 === i && (i = bt),
          this.each(function () {
            v.event.remove(this, t, i, e);
          })
        );
      },
    });
  var xt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ct = /<script|<style|<link/i,
    kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Tt = /^true\/(.*)/,
    Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function At(t, e) {
    return (
      (v.nodeName(t, "table") &&
        v.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        t.getElementsByTagName("tbody")[0]) ||
      t
    );
  }
  function St(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function Mt(t) {
    var e = Tt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function It(t, e) {
    var i, n, s, o, a, r, l, h;
    if (1 === e.nodeType) {
      if (
        Q.hasData(t) &&
        ((o = Q.access(t)), (a = Q.set(e, o)), (h = o.events))
      )
        for (s in (delete a.handle, (a.events = {}), h))
          for (i = 0, n = h[s].length; i < n; i++) v.event.add(e, s, h[s][i]);
      V.hasData(t) && ((r = V.access(t)), (l = v.extend({}, r)), V.set(e, l));
    }
  }
  function Pt(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && at.test(t.type)
      ? (e.checked = t.checked)
      : ("input" !== i && "textarea" !== i) ||
        (e.defaultValue = t.defaultValue);
  }
  function Ot(t, e, i, n) {
    e = a.apply([], e);
    var s,
      o,
      r,
      l,
      h,
      u,
      c = 0,
      d = t.length,
      p = d - 1,
      g = e[0],
      y = v.isFunction(g);
    if (y || (d > 1 && "string" == typeof g && !f.checkClone && kt.test(g)))
      return t.each(function (s) {
        var o = t.eq(s);
        y && (e[0] = g.call(this, s, o.html())), Ot(o, e, i, n);
      });
    if (
      d &&
      ((o = (s = pt(e, t[0].ownerDocument, !1, t, n)).firstChild),
      1 === s.childNodes.length && (s = o),
      o || n)
    ) {
      for (l = (r = v.map(ut(s, "script"), St)).length; c < d; c++)
        (h = s),
          c !== p &&
            ((h = v.clone(h, !0, !0)), l && v.merge(r, ut(h, "script"))),
          i.call(t[c], h, c);
      if (l)
        for (u = r[r.length - 1].ownerDocument, v.map(r, Mt), c = 0; c < l; c++)
          (h = r[c]),
            lt.test(h.type || "") &&
              !Q.access(h, "globalEval") &&
              v.contains(u, h) &&
              (h.src
                ? v._evalUrl && v._evalUrl(h.src)
                : m(h.textContent.replace(Dt, ""), u));
    }
    return t;
  }
  function Et(t, e, i) {
    for (var n, s = e ? v.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
      i || 1 !== n.nodeType || v.cleanData(ut(n)),
        n.parentNode &&
          (i && v.contains(n.ownerDocument, n) && ct(ut(n, "script")),
          n.parentNode.removeChild(n));
    return t;
  }
  v.extend({
    htmlPrefilter: function (t) {
      return t.replace(xt, "<$1></$2>");
    },
    clone: function (t, e, i) {
      var n,
        s,
        o,
        a,
        r = t.cloneNode(!0),
        l = v.contains(t.ownerDocument, t);
      if (
        !(
          f.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          v.isXMLDoc(t)
        )
      )
        for (a = ut(r), n = 0, s = (o = ut(t)).length; n < s; n++)
          Pt(o[n], a[n]);
      if (e)
        if (i)
          for (o = o || ut(t), a = a || ut(r), n = 0, s = o.length; n < s; n++)
            It(o[n], a[n]);
        else It(t, r);
      return (
        (a = ut(r, "script")).length > 0 && ct(a, !l && ut(t, "script")), r
      );
    },
    cleanData: function (t) {
      for (var e, i, n, s = v.event.special, o = 0; void 0 !== (i = t[o]); o++)
        if (Y(i)) {
          if ((e = i[Q.expando])) {
            if (e.events)
              for (n in e.events)
                s[n] ? v.event.remove(i, n) : v.removeEvent(i, n, e.handle);
            i[Q.expando] = void 0;
          }
          i[V.expando] && (i[V.expando] = void 0);
        }
    },
  }),
    v.fn.extend({
      detach: function (t) {
        return Et(this, t, !0);
      },
      remove: function (t) {
        return Et(this, t);
      },
      text: function (t) {
        return B(
          this,
          function (t) {
            return void 0 === t
              ? v.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length,
        );
      },
      append: function () {
        return Ot(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            At(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return Ot(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = At(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return Ot(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return Ot(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (v.cleanData(ut(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return v.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return B(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Ct.test(t) &&
              !ht[(rt.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = v.htmlPrefilter(t);
              try {
                for (; i < n; i++)
                  1 === (e = this[i] || {}).nodeType &&
                    (v.cleanData(ut(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length,
        );
      },
      replaceWith: function () {
        var t = [];
        return Ot(
          this,
          arguments,
          function (e) {
            var i = this.parentNode;
            v.inArray(this, t) < 0 &&
              (v.cleanData(ut(this)), i && i.replaceChild(e, this));
          },
          t,
        );
      },
    }),
    v.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        v.fn[t] = function (t) {
          for (var i, n = [], s = v(t), o = s.length - 1, a = 0; a <= o; a++)
            (i = a === o ? this : this.clone(!0)),
              v(s[a])[e](i),
              r.apply(n, i.get());
          return this.pushStack(n);
        };
      },
    );
  var Nt = /^margin/,
    Ht = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    Lt = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(e);
    };
  function Ft(t, e, i) {
    var n,
      s,
      o,
      a,
      r = t.style;
    return (
      (i = i || Lt(t)) &&
        ("" !== (a = i.getPropertyValue(e) || i[e]) ||
          v.contains(t.ownerDocument, t) ||
          (a = v.style(t, e)),
        !f.pixelMarginRight() &&
          Ht.test(a) &&
          Nt.test(e) &&
          ((n = r.width),
          (s = r.minWidth),
          (o = r.maxWidth),
          (r.minWidth = r.maxWidth = r.width = a),
          (a = i.width),
          (r.width = n),
          (r.minWidth = s),
          (r.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function zt(t, e) {
    return {
      get: function () {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (l.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (l.innerHTML = ""),
          ft.appendChild(r);
        var e = t.getComputedStyle(l);
        (i = "1%" !== e.top),
          (a = "2px" === e.marginLeft),
          (s = "4px" === e.width),
          (l.style.marginRight = "50%"),
          (o = "4px" === e.marginRight),
          ft.removeChild(r),
          (l = null);
      }
    }
    var i,
      s,
      o,
      a,
      r = n.createElement("div"),
      l = n.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === l.style.backgroundClip),
      (r.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      r.appendChild(l),
      v.extend(f, {
        pixelPosition: function () {
          return e(), i;
        },
        boxSizingReliable: function () {
          return e(), s;
        },
        pixelMarginRight: function () {
          return e(), o;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
      }));
  })();
  var Rt = /^(none|table(?!-c[ea]).+)/,
    Wt = { position: "absolute", visibility: "hidden", display: "block" },
    jt = { letterSpacing: "0", fontWeight: "400" },
    qt = ["Webkit", "Moz", "ms"],
    Bt = n.createElement("div").style;
  function Yt(t) {
    if (t in Bt) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), i = qt.length; i--; )
      if ((t = qt[i] + e) in Bt) return t;
  }
  function Ut(t, e, i) {
    var n = J.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
  }
  function Qt(t, e, i, n, s) {
    for (
      var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === i && (a += v.css(t, i + Z[o], !0, s)),
        n
          ? ("content" === i && (a -= v.css(t, "padding" + Z[o], !0, s)),
            "margin" !== i && (a -= v.css(t, "border" + Z[o] + "Width", !0, s)))
          : ((a += v.css(t, "padding" + Z[o], !0, s)),
            "padding" !== i &&
              (a += v.css(t, "border" + Z[o] + "Width", !0, s)));
    return a;
  }
  function Vt(t, e, i) {
    var n,
      s = !0,
      o = Lt(t),
      a = "border-box" === v.css(t, "boxSizing", !1, o);
    if (
      (t.getClientRects().length && (n = t.getBoundingClientRect()[e]),
      n <= 0 || null == n)
    ) {
      if (
        (((n = Ft(t, e, o)) < 0 || null == n) && (n = t.style[e]), Ht.test(n))
      )
        return n;
      (s = a && (f.boxSizingReliable() || n === t.style[e])),
        (n = parseFloat(n) || 0);
    }
    return n + Qt(t, e, i || (a ? "border" : "content"), s, o) + "px";
  }
  function Kt(t, e, i, n, s) {
    return new Kt.prototype.init(t, e, i, n, s);
  }
  v.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = Ft(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s,
          o,
          a,
          r = v.camelCase(e),
          l = t.style;
        return (
          (e = v.cssProps[r] || (v.cssProps[r] = Yt(r) || r)),
          (a = v.cssHooks[e] || v.cssHooks[r]),
          void 0 === i
            ? a && "get" in a && void 0 !== (s = a.get(t, !1, n))
              ? s
              : l[e]
            : ("string" === (o = typeof i) &&
                (s = J.exec(i)) &&
                s[1] &&
                ((i = it(t, e, s)), (o = "number")),
              void (
                null != i &&
                i == i &&
                ("number" === o &&
                  (i += (s && s[3]) || (v.cssNumber[r] ? "" : "px")),
                f.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                (a && "set" in a && void 0 === (i = a.set(t, i, n))) ||
                  (l[e] = i))
              ))
        );
      }
    },
    css: function (t, e, i, n) {
      var s,
        o,
        a,
        r = v.camelCase(e);
      return (
        (e = v.cssProps[r] || (v.cssProps[r] = Yt(r) || r)),
        (a = v.cssHooks[e] || v.cssHooks[r]) &&
          "get" in a &&
          (s = a.get(t, !0, i)),
        void 0 === s && (s = Ft(t, e, n)),
        "normal" === s && e in jt && (s = jt[e]),
        "" === i || i
          ? ((o = parseFloat(s)), !0 === i || isFinite(o) ? o || 0 : s)
          : s
      );
    },
  }),
    v.each(["height", "width"], function (t, e) {
      v.cssHooks[e] = {
        get: function (t, i, n) {
          if (i)
            return !Rt.test(v.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Vt(t, e, n)
              : et(t, Wt, function () {
                  return Vt(t, e, n);
                });
        },
        set: function (t, i, n) {
          var s,
            o = n && Lt(t),
            a =
              n &&
              Qt(t, e, n, "border-box" === v.css(t, "boxSizing", !1, o), o);
          return (
            a &&
              (s = J.exec(i)) &&
              "px" !== (s[3] || "px") &&
              ((t.style[e] = i), (i = v.css(t, e))),
            Ut(0, i, a)
          );
        },
      };
    }),
    (v.cssHooks.marginLeft = zt(f.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(Ft(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              et(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    v.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (v.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
            n < 4;
            n++
          )
            s[t + Z[n] + e] = o[n] || o[n - 2] || o[0];
          return s;
        },
      }),
        Nt.test(t) || (v.cssHooks[t + e].set = Ut);
    }),
    v.fn.extend({
      css: function (t, e) {
        return B(
          this,
          function (t, e, i) {
            var n,
              s,
              o = {},
              a = 0;
            if (v.isArray(e)) {
              for (n = Lt(t), s = e.length; a < s; a++)
                o[e[a]] = v.css(t, e[a], !1, n);
              return o;
            }
            return void 0 !== i ? v.style(t, e, i) : v.css(t, e);
          },
          t,
          e,
          arguments.length > 1,
        );
      },
    }),
    (v.Tween = Kt),
    (Kt.prototype = {
      constructor: Kt,
      init: function (t, e, i, n, s, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = s || v.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (v.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = Kt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Kt.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = Kt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                v.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : Kt.propHooks._default.set(this),
          this
        );
      },
    }),
    (Kt.prototype.init.prototype = Kt.prototype),
    (Kt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = v.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0;
        },
        set: function (t) {
          v.fx.step[t.prop]
            ? v.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
                (null == t.elem.style[v.cssProps[t.prop]] &&
                  !v.cssHooks[t.prop])
              ? (t.elem[t.prop] = t.now)
              : v.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (Kt.propHooks.scrollTop = Kt.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (v.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (v.fx = Kt.prototype.init),
    (v.fx.step = {});
  var $t,
    Xt,
    Gt = /^(?:toggle|show|hide)$/,
    Jt = /queueHooks$/;
  function Zt() {
    Xt && (t.requestAnimationFrame(Zt), v.fx.tick());
  }
  function te() {
    return (
      t.setTimeout(function () {
        $t = void 0;
      }),
      ($t = v.now())
    );
  }
  function ee(t, e) {
    var i,
      n = 0,
      s = { height: t };
    for (e = e ? 1 : 0; n < 4; n += 2 - e)
      s["margin" + (i = Z[n])] = s["padding" + i] = t;
    return e && (s.opacity = s.width = t), s;
  }
  function ie(t, e, i) {
    for (
      var n,
        s = (ne.tweeners[e] || []).concat(ne.tweeners["*"]),
        o = 0,
        a = s.length;
      o < a;
      o++
    )
      if ((n = s[o].call(i, e, t))) return n;
  }
  function ne(t, e, i) {
    var n,
      s,
      o = 0,
      a = ne.prefilters.length,
      r = v.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = $t || te(),
            i = Math.max(0, h.startTime + h.duration - e),
            n = 1 - (i / h.duration || 0),
            o = 0,
            a = h.tweens.length;
          o < a;
          o++
        )
          h.tweens[o].run(n);
        return (
          r.notifyWith(t, [h, n, i]),
          n < 1 && a ? i : (r.resolveWith(t, [h]), !1)
        );
      },
      h = r.promise({
        elem: t,
        props: v.extend({}, e),
        opts: v.extend(!0, { specialEasing: {}, easing: v.easing._default }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: $t || te(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = v.Tween(
            t,
            h.opts,
            e,
            i,
            h.opts.specialEasing[e] || h.opts.easing,
          );
          return h.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? h.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < n; i++) h.tweens[i].run(1);
          return (
            e
              ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e]))
              : r.rejectWith(t, [h, e]),
            this
          );
        },
      }),
      u = h.props;
    for (
      (function (t, e) {
        var i, n, s, o, a;
        for (i in t)
          if (
            ((s = e[(n = v.camelCase(i))]),
            (o = t[i]),
            v.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
            i !== n && ((t[n] = o), delete t[i]),
            (a = v.cssHooks[n]) && ("expand" in a))
          )
            for (i in ((o = a.expand(o)), delete t[n], o))
              (i in t) || ((t[i] = o[i]), (e[i] = s));
          else e[n] = s;
      })(u, h.opts.specialEasing);
      o < a;
      o++
    )
      if ((n = ne.prefilters[o].call(h, t, u, h.opts)))
        return (
          v.isFunction(n.stop) &&
            (v._queueHooks(h.elem, h.opts.queue).stop = v.proxy(n.stop, n)),
          n
        );
    return (
      v.map(u, ie, h),
      v.isFunction(h.opts.start) && h.opts.start.call(t, h),
      v.fx.timer(v.extend(l, { elem: t, anim: h, queue: h.opts.queue })),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always)
    );
  }
  (v.Animation = v.extend(ne, {
    tweeners: {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e);
          return it(i.elem, t, J.exec(e), i), i;
        },
      ],
    },
    tweener: function (t, e) {
      v.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(L));
      for (var i, n = 0, s = t.length; n < s; n++)
        (i = t[n]),
          (ne.tweeners[i] = ne.tweeners[i] || []),
          ne.tweeners[i].unshift(e);
    },
    prefilters: [
      function (t, e, i) {
        var n,
          s,
          o,
          a,
          r,
          l,
          h,
          u,
          c = "width" in e || "height" in e,
          d = this,
          p = {},
          f = t.style,
          m = t.nodeType && tt(t),
          g = Q.get(t, "fxshow");
        for (n in (i.queue ||
          (null == (a = v._queueHooks(t, "fx")).unqueued &&
            ((a.unqueued = 0),
            (r = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || r();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, v.queue(t, "fx").length || a.empty.fire();
            });
          })),
        e))
          if (((s = e[n]), Gt.test(s))) {
            if (
              (delete e[n],
              (o = o || "toggle" === s),
              s === (m ? "hide" : "show"))
            ) {
              if ("show" !== s || !g || void 0 === g[n]) continue;
              m = !0;
            }
            p[n] = (g && g[n]) || v.style(t, n);
          }
        if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(p))
          for (n in (c &&
            1 === t.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (h = g && g.display) && (h = Q.get(t, "display")),
            "none" === (u = v.css(t, "display")) &&
              (h
                ? (u = h)
                : (ot([t], !0),
                  (h = t.style.display || h),
                  (u = v.css(t, "display")),
                  ot([t]))),
            ("inline" === u || ("inline-block" === u && null != h)) &&
              "none" === v.css(t, "float") &&
              (l ||
                (d.done(function () {
                  f.display = h;
                }),
                null == h && ((u = f.display), (h = "none" === u ? "" : u))),
              (f.display = "inline-block"))),
          i.overflow &&
            ((f.overflow = "hidden"),
            d.always(function () {
              (f.overflow = i.overflow[0]),
                (f.overflowX = i.overflow[1]),
                (f.overflowY = i.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Q.access(t, "fxshow", { display: h })),
              o && (g.hidden = !m),
              m && ot([t], !0),
              d.done(function () {
                for (n in (m || ot([t]), Q.remove(t, "fxshow"), p))
                  v.style(t, n, p[n]);
              })),
              (l = ie(m ? g[n] : 0, n, d)),
              n in g ||
                ((g[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? ne.prefilters.unshift(t) : ne.prefilters.push(t);
    },
  })),
    (v.speed = function (t, e, i) {
      var s =
        t && "object" == typeof t
          ? v.extend({}, t)
          : {
              complete: i || (!i && e) || (v.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !v.isFunction(e) && e),
            };
      return (
        v.fx.off || n.hidden
          ? (s.duration = 0)
          : (s.duration =
              "number" == typeof s.duration
                ? s.duration
                : s.duration in v.fx.speeds
                  ? v.fx.speeds[s.duration]
                  : v.fx.speeds._default),
        (null != s.queue && !0 !== s.queue) || (s.queue = "fx"),
        (s.old = s.complete),
        (s.complete = function () {
          v.isFunction(s.old) && s.old.call(this),
            s.queue && v.dequeue(this, s.queue);
        }),
        s
      );
    }),
    v.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(tt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var s = v.isEmptyObject(t),
          o = v.speed(e, i, n),
          a = function () {
            var e = ne(this, v.extend({}, t), o);
            (s || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              s = null != t && t + "queueHooks",
              o = v.timers,
              a = Q.get(this);
            if (s) a[s] && a[s].stop && n(a[s]);
            else for (s in a) a[s] && a[s].stop && Jt.test(s) && n(a[s]);
            for (s = o.length; s--; )
              o[s].elem !== this ||
                (null != t && o[s].queue !== t) ||
                (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
            (!e && i) || v.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              i = Q.get(this),
              n = i[t + "queue"],
              s = i[t + "queueHooks"],
              o = v.timers,
              a = n ? n.length : 0;
            for (
              i.finish = !0,
                v.queue(this, t, []),
                s && s.stop && s.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < a; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    v.each(["toggle", "show", "hide"], function (t, e) {
      var i = v.fn[e];
      v.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(ee(e, !0), t, n, s);
      };
    }),
    v.each(
      {
        slideDown: ee("show"),
        slideUp: ee("hide"),
        slideToggle: ee("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        v.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      },
    ),
    (v.timers = []),
    (v.fx.tick = function () {
      var t,
        e = 0,
        i = v.timers;
      for ($t = v.now(); e < i.length; e++)
        (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      i.length || v.fx.stop(), ($t = void 0);
    }),
    (v.fx.timer = function (t) {
      v.timers.push(t), t() ? v.fx.start() : v.timers.pop();
    }),
    (v.fx.interval = 13),
    (v.fx.start = function () {
      Xt ||
        (Xt = t.requestAnimationFrame
          ? t.requestAnimationFrame(Zt)
          : t.setInterval(v.fx.tick, v.fx.interval));
    }),
    (v.fx.stop = function () {
      t.cancelAnimationFrame ? t.cancelAnimationFrame(Xt) : t.clearInterval(Xt),
        (Xt = null);
    }),
    (v.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (v.fn.delay = function (e, i) {
      return (
        (e = (v.fx && v.fx.speeds[e]) || e),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var s = t.setTimeout(i, e);
          n.stop = function () {
            t.clearTimeout(s);
          };
        })
      );
    }),
    (function () {
      var t = n.createElement("input"),
        e = n.createElement("select").appendChild(n.createElement("option"));
      (t.type = "checkbox"),
        (f.checkOn = "" !== t.value),
        (f.optSelected = e.selected),
        ((t = n.createElement("input")).value = "t"),
        (t.type = "radio"),
        (f.radioValue = "t" === t.value);
    })();
  var se,
    oe = v.expr.attrHandle;
  v.fn.extend({
    attr: function (t, e) {
      return B(this, v.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        v.removeAttr(this, t);
      });
    },
  }),
    v.extend({
      attr: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? v.prop(t, e, i)
            : ((1 === o && v.isXMLDoc(t)) ||
                (s =
                  v.attrHooks[e.toLowerCase()] ||
                  (v.expr.match.bool.test(e) ? se : void 0)),
              void 0 !== i
                ? null === i
                  ? void v.removeAttr(t, e)
                  : s && "set" in s && void 0 !== (n = s.set(t, i, e))
                    ? n
                    : (t.setAttribute(e, i + ""), i)
                : s && "get" in s && null !== (n = s.get(t, e))
                  ? n
                  : null == (n = v.find.attr(t, e))
                    ? void 0
                    : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!f.radioValue && "radio" === e && v.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var i,
          n = 0,
          s = e && e.match(L);
        if (s && 1 === t.nodeType) for (; (i = s[n++]); ) t.removeAttribute(i);
      },
    }),
    (se = {
      set: function (t, e, i) {
        return !1 === e ? v.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    v.each(v.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = oe[e] || v.find.attr;
      oe[e] = function (t, e, n) {
        var s,
          o,
          a = e.toLowerCase();
        return (
          n ||
            ((o = oe[a]),
            (oe[a] = s),
            (s = null != i(t, e, n) ? a : null),
            (oe[a] = o)),
          s
        );
      };
    });
  var ae = /^(?:input|select|textarea|button)$/i,
    re = /^(?:a|area)$/i;
  v.fn.extend({
    prop: function (t, e) {
      return B(this, v.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[v.propFix[t] || t];
      });
    },
  }),
    v.extend({
      prop: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && v.isXMLDoc(t)) ||
              ((e = v.propFix[e] || e), (s = v.propHooks[e])),
            void 0 !== i
              ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                ? n
                : (t[e] = i)
              : s && "get" in s && null !== (n = s.get(t, e))
                ? n
                : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = v.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : ae.test(t.nodeName) || (re.test(t.nodeName) && t.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (v.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    v.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        v.propFix[this.toLowerCase()] = this;
      },
    );
  var le = /[\t\r\n\f]/g;
  function he(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  v.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r,
        l = 0;
      if (v.isFunction(t))
        return this.each(function (e) {
          v(this).addClass(t.call(this, e, he(this)));
        });
      if ("string" == typeof t && t)
        for (e = t.match(L) || []; (i = this[l++]); )
          if (
            ((s = he(i)),
            (n = 1 === i.nodeType && (" " + s + " ").replace(le, " ")))
          ) {
            for (a = 0; (o = e[a++]); )
              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            s !== (r = v.trim(n)) && i.setAttribute("class", r);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r,
        l = 0;
      if (v.isFunction(t))
        return this.each(function (e) {
          v(this).removeClass(t.call(this, e, he(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t)
        for (e = t.match(L) || []; (i = this[l++]); )
          if (
            ((s = he(i)),
            (n = 1 === i.nodeType && (" " + s + " ").replace(le, " ")))
          ) {
            for (a = 0; (o = e[a++]); )
              for (; n.indexOf(" " + o + " ") > -1; )
                n = n.replace(" " + o + " ", " ");
            s !== (r = v.trim(n)) && i.setAttribute("class", r);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : v.isFunction(t)
          ? this.each(function (i) {
              v(this).toggleClass(t.call(this, i, he(this), e), e);
            })
          : this.each(function () {
              var e, n, s, o;
              if ("string" === i)
                for (n = 0, s = v(this), o = t.match(L) || []; (e = o[n++]); )
                  s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
              else
                (void 0 !== t && "boolean" !== i) ||
                  ((e = he(this)) && Q.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : Q.get(this, "__className__") || "",
                    ));
            });
    },
    hasClass: function (t) {
      var e,
        i,
        n = 0;
      for (e = " " + t + " "; (i = this[n++]); )
        if (
          1 === i.nodeType &&
          (" " + he(i) + " ").replace(le, " ").indexOf(e) > -1
        )
          return !0;
      return !1;
    },
  });
  var ue = /\r/g,
    ce = /[\x20\t\r\n\f]+/g;
  v.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        s = this[0];
      return arguments.length
        ? ((n = v.isFunction(t)),
          this.each(function (i) {
            var s;
            1 === this.nodeType &&
              (null == (s = n ? t.call(this, i, v(this).val()) : t)
                ? (s = "")
                : "number" == typeof s
                  ? (s += "")
                  : v.isArray(s) &&
                    (s = v.map(s, function (t) {
                      return null == t ? "" : t + "";
                    })),
              ((e =
                v.valHooks[this.type] ||
                v.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, s, "value")) ||
                (this.value = s));
          }))
        : s
          ? (e = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()]) &&
            "get" in e &&
            void 0 !== (i = e.get(s, "value"))
            ? i
            : "string" == typeof (i = s.value)
              ? i.replace(ue, "")
              : null == i
                ? ""
                : i
          : void 0;
    },
  }),
    v.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = v.find.attr(t, "value");
            return null != e ? e : v.trim(v.text(t)).replace(ce, " ");
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                s = t.selectedIndex,
                o = "select-one" === t.type,
                a = o ? null : [],
                r = o ? s + 1 : n.length,
                l = s < 0 ? r : o ? s : 0;
              l < r;
              l++
            )
              if (
                ((i = n[l]).selected || l === s) &&
                !i.disabled &&
                (!i.parentNode.disabled ||
                  !v.nodeName(i.parentNode, "optgroup"))
              ) {
                if (((e = v(i).val()), o)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var i, n, s = t.options, o = v.makeArray(e), a = s.length;
              a--;

            )
              ((n = s[a]).selected =
                v.inArray(v.valHooks.option.get(n), o) > -1) && (i = !0);
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    v.each(["radio", "checkbox"], function () {
      (v.valHooks[this] = {
        set: function (t, e) {
          if (v.isArray(e)) return (t.checked = v.inArray(v(t).val(), e) > -1);
        },
      }),
        f.checkOn ||
          (v.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var de = /^(?:focusinfocus|focusoutblur)$/;
  v.extend(v.event, {
    trigger: function (e, i, s, o) {
      var a,
        r,
        l,
        h,
        u,
        d,
        p,
        f = [s || n],
        m = c.call(e, "type") ? e.type : e,
        g = c.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((r = l = s = s || n),
        3 !== s.nodeType &&
          8 !== s.nodeType &&
          !de.test(m + v.event.triggered) &&
          (m.indexOf(".") > -1 &&
            ((g = m.split(".")), (m = g.shift()), g.sort()),
          (u = m.indexOf(":") < 0 && "on" + m),
          ((e = e[v.expando]
            ? e
            : new v.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
          (e.namespace = g.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = s),
          (i = null == i ? [e] : v.makeArray(i, [e])),
          (p = v.event.special[m] || {}),
          o || !p.trigger || !1 !== p.trigger.apply(s, i)))
      ) {
        if (!o && !p.noBubble && !v.isWindow(s)) {
          for (
            h = p.delegateType || m, de.test(h + m) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            f.push(r), (l = r);
          l === (s.ownerDocument || n) &&
            f.push(l.defaultView || l.parentWindow || t);
        }
        for (a = 0; (r = f[a++]) && !e.isPropagationStopped(); )
          (e.type = a > 1 ? h : p.bindType || m),
            (d = (Q.get(r, "events") || {})[e.type] && Q.get(r, "handle")) &&
              d.apply(r, i),
            (d = u && r[u]) &&
              d.apply &&
              Y(r) &&
              ((e.result = d.apply(r, i)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = m),
          o ||
            e.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(f.pop(), i)) ||
            !Y(s) ||
            (u &&
              v.isFunction(s[m]) &&
              !v.isWindow(s) &&
              ((l = s[u]) && (s[u] = null),
              (v.event.triggered = m),
              s[m](),
              (v.event.triggered = void 0),
              l && (s[u] = l))),
          e.result
        );
      }
    },
    simulate: function (t, e, i) {
      var n = v.extend(new v.Event(), i, { type: t, isSimulated: !0 });
      v.event.trigger(n, null, e);
    },
  }),
    v.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          v.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        if (i) return v.event.trigger(t, e, i, !0);
      },
    }),
    v.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " ",
      ),
      function (t, e) {
        v.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      },
    ),
    v.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    (f.focusin = "onfocusin" in t),
    f.focusin ||
      v.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          v.event.simulate(e, t.target, v.event.fix(t));
        };
        v.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              s = Q.access(n, e);
            s || n.addEventListener(t, i, !0), Q.access(n, e, (s || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              s = Q.access(n, e) - 1;
            s
              ? Q.access(n, e, s)
              : (n.removeEventListener(t, i, !0), Q.remove(n, e));
          },
        };
      });
  var pe = t.location,
    fe = v.now(),
    me = /\?/;
  v.parseXML = function (e) {
    var i;
    if (!e || "string" != typeof e) return null;
    try {
      i = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {
      i = void 0;
    }
    return (
      (i && !i.getElementsByTagName("parsererror").length) ||
        v.error("Invalid XML: " + e),
      i
    );
  };
  var ge = /\[\]$/,
    ve = /\r?\n/g,
    ye = /^(?:submit|button|image|reset|file)$/i,
    be = /^(?:input|select|textarea|keygen)/i;
  function _e(t, e, i, n) {
    var s;
    if (v.isArray(e))
      v.each(e, function (e, s) {
        i || ge.test(t)
          ? n(t, s)
          : _e(
              t + "[" + ("object" == typeof s && null != s ? e : "") + "]",
              s,
              i,
              n,
            );
      });
    else if (i || "object" !== v.type(e)) n(t, e);
    else for (s in e) _e(t + "[" + s + "]", e[s], i, n);
  }
  (v.param = function (t, e) {
    var i,
      n = [],
      s = function (t, e) {
        var i = v.isFunction(e) ? e() : e;
        n[n.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (v.isArray(t) || (t.jquery && !v.isPlainObject(t)))
      v.each(t, function () {
        s(this.name, this.value);
      });
    else for (i in t) _e(i, t[i], e, s);
    return n.join("&");
  }),
    v.fn.extend({
      serialize: function () {
        return v.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = v.prop(this, "elements");
          return t ? v.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !v(this).is(":disabled") &&
              be.test(this.nodeName) &&
              !ye.test(t) &&
              (this.checked || !at.test(t))
            );
          })
          .map(function (t, e) {
            var i = v(this).val();
            return null == i
              ? null
              : v.isArray(i)
                ? v.map(i, function (t) {
                    return { name: e.name, value: t.replace(ve, "\r\n") };
                  })
                : { name: e.name, value: i.replace(ve, "\r\n") };
          })
          .get();
      },
    });
  var we = /%20/g,
    xe = /#.*$/,
    Ce = /([?&])_=[^&]*/,
    ke = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Te = /^(?:GET|HEAD)$/,
    De = /^\/\//,
    Ae = {},
    Se = {},
    Me = "*/".concat("*"),
    Ie = n.createElement("a");
  function Pe(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        s = 0,
        o = e.toLowerCase().match(L) || [];
      if (v.isFunction(i))
        for (; (n = o[s++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function Oe(t, e, i, n) {
    var s = {},
      o = t === Se;
    function a(r) {
      var l;
      return (
        (s[r] = !0),
        v.each(t[r] || [], function (t, r) {
          var h = r(e, i, n);
          return "string" != typeof h || o || s[h]
            ? o
              ? !(l = h)
              : void 0
            : (e.dataTypes.unshift(h), a(h), !1);
        }),
        l
      );
    }
    return a(e.dataTypes[0]) || (!s["*"] && a("*"));
  }
  function Ee(t, e) {
    var i,
      n,
      s = v.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
    return n && v.extend(!0, t, n), t;
  }
  (Ie.href = pe.href),
    v.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: pe.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            pe.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Me,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": v.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? Ee(Ee(t, v.ajaxSettings), e) : Ee(v.ajaxSettings, t);
      },
      ajaxPrefilter: Pe(Ae),
      ajaxTransport: Pe(Se),
      ajax: function (e, i) {
        "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
        var s,
          o,
          a,
          r,
          l,
          h,
          u,
          c,
          d,
          p,
          f = v.ajaxSetup({}, i),
          m = f.context || f,
          g = f.context && (m.nodeType || m.jquery) ? v(m) : v.event,
          y = v.Deferred(),
          b = v.Callbacks("once memory"),
          _ = f.statusCode || {},
          w = {},
          x = {},
          C = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (u) {
                if (!r)
                  for (r = {}; (e = ke.exec(a)); ) r[e[1].toLowerCase()] = e[2];
                e = r[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return u ? a : null;
            },
            setRequestHeader: function (t, e) {
              return (
                null == u &&
                  ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                  (w[t] = e)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == u && (f.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (u) k.always(t[k.status]);
                else for (e in t) _[e] = [_[e], t[e]];
              return this;
            },
            abort: function (t) {
              var e = t || C;
              return s && s.abort(e), T(0, e), this;
            },
          };
        if (
          (y.promise(k),
          (f.url = ((e || f.url || pe.href) + "").replace(
            De,
            pe.protocol + "//",
          )),
          (f.type = i.method || i.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""]),
          null == f.crossDomain)
        ) {
          h = n.createElement("a");
          try {
            (h.href = f.url),
              (h.href = h.href),
              (f.crossDomain =
                Ie.protocol + "//" + Ie.host != h.protocol + "//" + h.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = v.param(f.data, f.traditional)),
          Oe(Ae, f, i, k),
          u)
        )
          return k;
        for (d in ((c = v.event && f.global) &&
          0 == v.active++ &&
          v.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Te.test(f.type)),
        (o = f.url.replace(xe, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded",
              ) &&
            (f.data = f.data.replace(we, "+"))
          : ((p = f.url.slice(o.length)),
            f.data && ((o += (me.test(o) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((o = o.replace(Ce, "")),
              (p = (me.test(o) ? "&" : "?") + "_=" + fe++ + p)),
            (f.url = o + p)),
        f.ifModified &&
          (v.lastModified[o] &&
            k.setRequestHeader("If-Modified-Since", v.lastModified[o]),
          v.etag[o] && k.setRequestHeader("If-None-Match", v.etag[o])),
        ((f.data && f.hasContent && !1 !== f.contentType) || i.contentType) &&
          k.setRequestHeader("Content-Type", f.contentType),
        k.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Me + "; q=0.01" : "")
            : f.accepts["*"],
        ),
        f.headers))
          k.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || u))
          return k.abort();
        if (
          ((C = "abort"),
          b.add(f.complete),
          k.done(f.success),
          k.fail(f.error),
          (s = Oe(Se, f, i, k)))
        ) {
          if (((k.readyState = 1), c && g.trigger("ajaxSend", [k, f]), u))
            return k;
          f.async &&
            f.timeout > 0 &&
            (l = t.setTimeout(function () {
              k.abort("timeout");
            }, f.timeout));
          try {
            (u = !1), s.send(w, T);
          } catch (t) {
            if (u) throw t;
            T(-1, t);
          }
        } else T(-1, "No Transport");
        function T(e, i, n, r) {
          var h,
            d,
            p,
            w,
            x,
            C = i;
          u ||
            ((u = !0),
            l && t.clearTimeout(l),
            (s = void 0),
            (a = r || ""),
            (k.readyState = e > 0 ? 4 : 0),
            (h = (e >= 200 && e < 300) || 304 === e),
            n &&
              (w = (function (t, e, i) {
                for (
                  var n, s, o, a, r = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                  for (s in r)
                    if (r[s] && r[s].test(n)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in i) o = l[0];
                else {
                  for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                      o = s;
                      break;
                    }
                    a || (a = s);
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), i[o];
              })(f, k, n)),
            (w = (function (t, e, i, n) {
              var s,
                o,
                a,
                r,
                l,
                h = {},
                u = t.dataTypes.slice();
              if (u[1])
                for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
              for (o = u.shift(); o; )
                if (
                  (t.responseFields[o] && (i[t.responseFields[o]] = e),
                  !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = o),
                  (o = u.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(a = h[l + " " + o] || h["* " + o]))
                      for (s in h)
                        if (
                          (r = s.split(" "))[1] === o &&
                          (a = h[l + " " + r[0]] || h["* " + r[0]])
                        ) {
                          !0 === a
                            ? (a = h[s])
                            : !0 !== h[s] && ((o = r[0]), u.unshift(r[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && t.throws) e = a(e);
                      else
                        try {
                          e = a(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: a
                              ? t
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(f, w, k, h)),
            h
              ? (f.ifModified &&
                  ((x = k.getResponseHeader("Last-Modified")) &&
                    (v.lastModified[o] = x),
                  (x = k.getResponseHeader("etag")) && (v.etag[o] = x)),
                204 === e || "HEAD" === f.type
                  ? (C = "nocontent")
                  : 304 === e
                    ? (C = "notmodified")
                    : ((C = w.state), (d = w.data), (h = !(p = w.error))))
              : ((p = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
            (k.status = e),
            (k.statusText = (i || C) + ""),
            h ? y.resolveWith(m, [d, C, k]) : y.rejectWith(m, [k, C, p]),
            k.statusCode(_),
            (_ = void 0),
            c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [k, f, h ? d : p]),
            b.fireWith(m, [k, C]),
            c &&
              (g.trigger("ajaxComplete", [k, f]),
              --v.active || v.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (t, e, i) {
        return v.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return v.get(t, void 0, e, "script");
      },
    }),
    v.each(["get", "post"], function (t, e) {
      v[e] = function (t, i, n, s) {
        return (
          v.isFunction(i) && ((s = s || n), (n = i), (i = void 0)),
          v.ajax(
            v.extend(
              { url: t, type: e, dataType: s, data: i, success: n },
              v.isPlainObject(t) && t,
            ),
          )
        );
      };
    }),
    (v._evalUrl = function (t) {
      return v.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    v.fn.extend({
      wrapAll: function (t) {
        var e;
        return (
          this[0] &&
            (v.isFunction(t) && (t = t.call(this[0])),
            (e = v(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (t) {
        return v.isFunction(t)
          ? this.each(function (e) {
              v(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = v(this),
                i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = v.isFunction(t);
        return this.each(function (i) {
          v(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              v(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (v.expr.pseudos.hidden = function (t) {
      return !v.expr.pseudos.visible(t);
    }),
    (v.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (v.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var Ne = { 0: 200, 1223: 204 },
    He = v.ajaxSettings.xhr();
  (f.cors = !!He && "withCredentials" in He),
    (f.ajax = He = !!He),
    v.ajaxTransport(function (e) {
      var i, n;
      if (f.cors || (He && !e.crossDomain))
        return {
          send: function (s, o) {
            var a,
              r = e.xhr();
            if (
              (r.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (a in e.xhrFields) r[a] = e.xhrFields[a];
            for (a in (e.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(e.mimeType),
            e.crossDomain ||
              s["X-Requested-With"] ||
              (s["X-Requested-With"] = "XMLHttpRequest"),
            s))
              r.setRequestHeader(a, s[a]);
            (i = function (t) {
              return function () {
                i &&
                  ((i =
                    n =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.onreadystatechange =
                      null),
                  "abort" === t
                    ? r.abort()
                    : "error" === t
                      ? "number" != typeof r.status
                        ? o(0, "error")
                        : o(r.status, r.statusText)
                      : o(
                          Ne[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders(),
                        ));
              };
            }),
              (r.onload = i()),
              (n = r.onerror = i("error")),
              void 0 !== r.onabort
                ? (r.onabort = n)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      t.setTimeout(function () {
                        i && n();
                      });
                  }),
              (i = i("abort"));
            try {
              r.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (i) throw t;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    v.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    v.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return v.globalEval(t), t;
        },
      },
    }),
    v.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    v.ajaxTransport("script", function (t) {
      var e, i;
      if (t.crossDomain)
        return {
          send: function (s, o) {
            (e = v("<script>")
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (i = function (t) {
                  e.remove(),
                    (i = null),
                    t && o("error" === t.type ? 404 : 200, t.type);
                }),
              )),
              n.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Le = [],
    Fe = /(=)\?(?=&|$)|\?\?/;
  function ze(t) {
    return v.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  v.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Le.pop() || v.expando + "_" + fe++;
      return (this[t] = !0), t;
    },
  }),
    v.ajaxPrefilter("json jsonp", function (e, i, n) {
      var s,
        o,
        a,
        r =
          !1 !== e.jsonp &&
          (Fe.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) &&
              Fe.test(e.data) &&
              "data");
      if (r || "jsonp" === e.dataTypes[0])
        return (
          (s = e.jsonpCallback =
            v.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(Fe, "$1" + s))
            : !1 !== e.jsonp &&
              (e.url += (me.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
          (e.converters["script json"] = function () {
            return a || v.error(s + " was not called"), a[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[s]),
          (t[s] = function () {
            a = arguments;
          }),
          n.always(function () {
            void 0 === o ? v(t).removeProp(s) : (t[s] = o),
              e[s] && ((e.jsonpCallback = i.jsonpCallback), Le.push(s)),
              a && v.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument = (function () {
      var t = n.implementation.createHTMLDocument("").body;
      return (
        (t.innerHTML = "<form></form><form></form>"), 2 === t.childNodes.length
      );
    })()),
    (v.parseHTML = function (t, e, i) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((i = e), (e = !1)),
          e ||
            (f.createHTMLDocument
              ? (((s = (e =
                  n.implementation.createHTMLDocument("")).createElement(
                  "base",
                )).href = n.location.href),
                e.head.appendChild(s))
              : (e = n)),
          (a = !i && []),
          (o = A.exec(t))
            ? [e.createElement(o[1])]
            : ((o = pt([t], e, a)),
              a && a.length && v(a).remove(),
              v.merge([], o.childNodes)));
      var s, o, a;
    }),
    (v.fn.load = function (t, e, i) {
      var n,
        s,
        o,
        a = this,
        r = t.indexOf(" ");
      return (
        r > -1 && ((n = v.trim(t.slice(r))), (t = t.slice(0, r))),
        v.isFunction(e)
          ? ((i = e), (e = void 0))
          : e && "object" == typeof e && (s = "POST"),
        a.length > 0 &&
          v
            .ajax({ url: t, type: s || "GET", dataType: "html", data: e })
            .done(function (t) {
              (o = arguments),
                a.html(n ? v("<div>").append(v.parseHTML(t)).find(n) : t);
            })
            .always(
              i &&
                function (t, e) {
                  a.each(function () {
                    i.apply(this, o || [t.responseText, e, t]);
                  });
                },
            ),
        this
      );
    }),
    v.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        v.fn[e] = function (t) {
          return this.on(e, t);
        };
      },
    ),
    (v.expr.pseudos.animated = function (t) {
      return v.grep(v.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (v.offset = {
      setOffset: function (t, e, i) {
        var n,
          s,
          o,
          a,
          r,
          l,
          h = v.css(t, "position"),
          u = v(t),
          c = {};
        "static" === h && (t.style.position = "relative"),
          (r = u.offset()),
          (o = v.css(t, "top")),
          (l = v.css(t, "left")),
          ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1
            ? ((a = (n = u.position()).top), (s = n.left))
            : ((a = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
          v.isFunction(e) && (e = e.call(t, i, v.extend({}, r))),
          null != e.top && (c.top = e.top - r.top + a),
          null != e.left && (c.left = e.left - r.left + s),
          "using" in e ? e.using.call(t, c) : u.css(c);
      },
    }),
    v.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                v.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n,
          s,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? (n = o.getBoundingClientRect()).width || n.height
              ? ((i = ze((s = o.ownerDocument))),
                (e = s.documentElement),
                {
                  top: n.top + i.pageYOffset - e.clientTop,
                  left: n.left + i.pageXOffset - e.clientLeft,
                })
              : n
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = this[0],
            n = { top: 0, left: 0 };
          return (
            "fixed" === v.css(i, "position")
              ? (e = i.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                v.nodeName(t[0], "html") || (n = t.offset()),
                (n = {
                  top: n.top + v.css(t[0], "borderTopWidth", !0),
                  left: n.left + v.css(t[0], "borderLeftWidth", !0),
                })),
            {
              top: e.top - n.top - v.css(i, "marginTop", !0),
              left: e.left - n.left - v.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === v.css(t, "position");

          )
            t = t.offsetParent;
          return t || ft;
        });
      },
    }),
    v.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, e) {
        var i = "pageYOffset" === e;
        v.fn[t] = function (n) {
          return B(
            this,
            function (t, n, s) {
              var o = ze(t);
              return void 0 === s
                ? o
                  ? o[e]
                  : t[n]
                : void (o
                    ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset)
                    : (t[n] = s));
            },
            t,
            n,
            arguments.length,
          );
        };
      },
    ),
    v.each(["top", "left"], function (t, e) {
      v.cssHooks[e] = zt(f.pixelPosition, function (t, i) {
        if (i)
          return (i = Ft(t, e)), Ht.test(i) ? v(t).position()[e] + "px" : i;
      });
    }),
    v.each({ Height: "height", Width: "width" }, function (t, e) {
      v.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (i, n) {
          v.fn[n] = function (s, o) {
            var a = arguments.length && (i || "boolean" != typeof s),
              r = i || (!0 === s || !0 === o ? "margin" : "border");
            return B(
              this,
              function (e, i, s) {
                var o;
                return v.isWindow(e)
                  ? 0 === n.indexOf("outer")
                    ? e["inner" + t]
                    : e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t],
                      ))
                    : void 0 === s
                      ? v.css(e, i, r)
                      : v.style(e, i, s, r);
              },
              e,
              a ? s : void 0,
              a,
            );
          };
        },
      );
    }),
    v.fn.extend({
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
    }),
    (v.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return v;
      });
  var Re = t.jQuery,
    We = t.$;
  return (
    (v.noConflict = function (e) {
      return t.$ === v && (t.$ = We), e && t.jQuery === v && (t.jQuery = Re), v;
    }),
    e || (t.jQuery = t.$ = v),
    v
  );
}),
  /*! jQuery UI - v1.11.4 - 2015-03-11
   * http://jqueryui.com
   * Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
   * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    function e(e, n) {
      var s,
        o,
        a,
        r = e.nodeName.toLowerCase();
      return "area" === r
        ? ((o = (s = e.parentNode).name),
          !(!e.href || !o || "map" !== s.nodeName.toLowerCase()) &&
            !!(a = t("img[usemap='#" + o + "']")[0]) &&
            i(a))
        : (/^(input|select|textarea|button|object)$/.test(r)
            ? !e.disabled
            : ("a" === r && e.href) || n) && i(e);
    }
    function i(e) {
      return (
        t.expr.filters.visible(e) &&
        !t(e)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === t.css(this, "visibility");
          }).length
      );
    }
    function n() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.regional.en = t.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = s(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>",
          ),
        ));
    }
    function s(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .delegate(i, "mouseout", function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .delegate(i, "mouseover", o);
    }
    function o() {
      t.datepicker._isDisabledDatepicker(
        d.inline ? d.dpDiv.parent()[0] : d.input[0],
      ) ||
        (t(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          t(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e, i) {
      for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
      return e;
    }
    function r(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments),
          this._refresh(),
          e !== this.element.val() && this._trigger("change");
      };
    }
    (t.ui = t.ui || {}),
      t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      t.fn.extend({
        scrollParent: function (e) {
          var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents()
              .filter(function () {
                var e = t(this);
                return (
                  (!n || "static" !== e.css("position")) &&
                  s.test(
                    e.css("overflow") +
                      e.css("overflow-y") +
                      e.css("overflow-x"),
                  )
                );
              })
              .eq(0);
          return "fixed" !== i && o.length
            ? o
            : t(this[0].ownerDocument || document);
        },
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      t.extend(t.expr[":"], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function (e) {
              return function (i) {
                return !!t.data(i, e);
              };
            })
          : function (e, i, n) {
              return !!t.data(e, n[3]);
            },
        focusable: function (i) {
          return e(i, !isNaN(t.attr(i, "tabindex")));
        },
        tabbable: function (i) {
          var n = t.attr(i, "tabindex"),
            s = isNaN(n);
          return (s || n >= 0) && e(i, !s);
        },
      }),
      t("<a>").outerWidth(1).jquery ||
        t.each(["Width", "Height"], function (e, i) {
          function n(e, i, n, o) {
            return (
              t.each(s, function () {
                (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                  n &&
                    (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                  o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
              }),
              i
            );
          }
          var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            a = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight,
            };
          (t.fn["inner" + i] = function (e) {
            return void 0 === e
              ? a["inner" + i].call(this)
              : this.each(function () {
                  t(this).css(o, n(this, e) + "px");
                });
          }),
            (t.fn["outer" + i] = function (e, s) {
              return "number" != typeof e
                ? a["outer" + i].call(this, e)
                : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px");
                  });
            });
        }),
      t.fn.addBack ||
        (t.fn.addBack = function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t),
          );
        }),
      t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (t.fn.removeData = (function (e) {
          return function (i) {
            return arguments.length
              ? e.call(this, t.camelCase(i))
              : e.call(this);
          };
        })(t.fn.removeData)),
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      t.fn.extend({
        focus: (function (e) {
          return function (i, n) {
            return "number" == typeof i
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    t(e).focus(), n && n.call(e);
                  }, i);
                })
              : e.apply(this, arguments);
          };
        })(t.fn.focus),
        disableSelection: (function () {
          var t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return function () {
            return this.bind(t + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
        zIndex: function (e) {
          if (void 0 !== e) return this.css("zIndex", e);
          if (this.length)
            for (var i, n, s = t(this[0]); s.length && s[0] !== document; ) {
              if (
                ("absolute" === (i = s.css("position")) ||
                  "relative" === i ||
                  "fixed" === i) &&
                ((n = parseInt(s.css("zIndex"), 10)), !isNaN(n) && 0 !== n)
              )
                return n;
              s = s.parent();
            }
          return 0;
        },
      }),
      (t.ui.plugin = {
        add: function (e, i, n) {
          var s,
            o = t.ui[e].prototype;
          for (s in n)
            (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
        },
        call: function (t, e, i, n) {
          var s,
            o = t.plugins[e];
          if (
            o &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (s = 0; o.length > s; s++)
              t.options[o[s][0]] && o[s][1].apply(t.element, i);
        },
      });
    var l = 0,
      h = Array.prototype.slice;
    (t.cleanData = (function (e) {
      return function (i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++)
          try {
            (n = t._data(s, "events")) &&
              n.remove &&
              t(s).triggerHandler("remove");
          } catch (t) {}
        e(i);
      };
    })(t.cleanData)),
      (t.widget = function (e, i, n) {
        var s,
          o,
          a,
          r,
          l = {},
          h = e.split(".")[0];
        return (
          (e = e.split(".")[1]),
          (s = h + "-" + e),
          n || ((n = i), (i = t.Widget)),
          (t.expr[":"][s.toLowerCase()] = function (e) {
            return !!t.data(e, s);
          }),
          (t[h] = t[h] || {}),
          (o = t[h][e]),
          (a = t[h][e] =
            function (t, e) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(t, e))
                : new a(t, e);
            }),
          t.extend(a, o, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          ((r = new i()).options = t.widget.extend({}, r.options)),
          t.each(n, function (e, n) {
            return t.isFunction(n)
              ? void (l[e] = (function () {
                  var t = function () {
                      return i.prototype[e].apply(this, arguments);
                    },
                    s = function (t) {
                      return i.prototype[e].apply(this, t);
                    };
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = s),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (l[e] = n);
          }),
          (a.prototype = t.widget.extend(
            r,
            { widgetEventPrefix: (o && r.widgetEventPrefix) || e },
            l,
            { constructor: a, namespace: h, widgetName: e, widgetFullName: s },
          )),
          o
            ? (t.each(o._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, a, i._proto);
              }),
              delete o._childConstructors)
            : i._childConstructors.push(a),
          t.widget.bridge(e, a),
          a
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, n, s = h.call(arguments, 1), o = 0, a = s.length;
          a > o;
          o++
        )
          for (i in s[o])
            (n = s[o][i]),
              s[o].hasOwnProperty(i) &&
                void 0 !== n &&
                (e[i] = t.isPlainObject(n)
                  ? t.isPlainObject(e[i])
                    ? t.widget.extend({}, e[i], n)
                    : t.widget.extend({}, n)
                  : n);
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function (s) {
          var o = "string" == typeof s,
            a = h.call(arguments, 1),
            r = this;
          return (
            o
              ? this.each(function () {
                  var i,
                    o = t.data(this, n);
                  return "instance" === s
                    ? ((r = o), !1)
                    : o
                      ? t.isFunction(o[s]) && "_" !== s.charAt(0)
                        ? (i = o[s].apply(o, a)) !== o && void 0 !== i
                          ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
                          : void 0
                        : t.error(
                            "no such method '" +
                              s +
                              "' for " +
                              e +
                              " widget instance",
                          )
                      : t.error(
                          "cannot call methods on " +
                            e +
                            " prior to initialization; attempted to call method '" +
                            s +
                            "'",
                        );
                })
              : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))),
                this.each(function () {
                  var e = t.data(this, n);
                  e
                    ? (e.option(s || {}), e._init && e._init())
                    : t.data(this, n, new i(s, this));
                })),
            r
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function (e, i) {
          (i = t(i || this.defaultElement || this)[0]),
            (this.element = t(i)),
            (this.uuid = l++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            i !== this &&
              (t.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === i && this.destroy();
                },
              }),
              (this.document = t(i.style ? i.ownerDocument : i.document || i)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow,
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e,
            )),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            s,
            o,
            a = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((a = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                s = a[e] = t.widget.extend({}, this.options[e]), o = 0;
                n.length - 1 > o;
                o++
              )
                (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === s[e] ? null : s[e];
              s[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              a[e] = i;
            }
          return this._setOptions(a), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            "disabled" === t &&
              (this.widget().toggleClass(
                this.widgetFullName + "-disabled",
                !!e,
              ),
              e &&
                (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))),
            this
          );
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _on: function (e, i, n) {
          var s,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (s = this.widget())),
            t.each(n, function (n, a) {
              function r() {
                return e ||
                  (!0 !== o.options.disabled &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof a &&
                (r.guid = a.guid = a.guid || r.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                h = l[1] + o.eventNamespace,
                u = l[2];
              u ? s.delegate(u, h, r) : i.bind(h, r);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(i).undelegate(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var s,
            o,
            a = this.options[e];
          if (
            ((n = n || {}),
            ((i = t.Event(i)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (s in o) s in i || (i[s] = o[s]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(a) &&
                !1 === a.apply(this.element[0], [i].concat(n))) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
          "string" == typeof s && (s = { effect: s });
          var a,
            r = s ? (!0 === s || "number" == typeof s ? i : s.effect || i) : e;
          "number" == typeof (s = s || {}) && (s = { duration: s }),
            (a = !t.isEmptyObject(s)),
            (s.complete = o),
            s.delay && n.delay(s.delay),
            a && t.effects && t.effects.effect[r]
              ? n[e](s)
              : r !== e && n[r]
                ? n[r](s.duration, s.easing, o)
                : n.queue(function (i) {
                    t(this)[e](), o && o.call(n[0]), i();
                  });
        };
      }),
      t.widget;
    var u = !1;
    t(document).mouseup(function () {
      u = !1;
    }),
      t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .bind("mousedown." + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .bind("click." + this.widgetName, function (i) {
              return !0 ===
                t.data(i.target, e.widgetName + ".preventClickEvent")
                ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1)
                : void 0;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (e) {
          if (!u) {
            (this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(e),
              (this._mouseDownEvent = e);
            var i = this,
              n = 1 === e.which,
              s =
                !(
                  "string" != typeof this.options.cancel || !e.target.nodeName
                ) && t(e.target).closest(this.options.cancel).length;
            return (
              !(n && !s && this._mouseCapture(e)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = !1 !== this._mouseStart(e)),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent",
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate,
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (u = !0),
                  !0))
            );
          }
        },
        _mouseMove: function (e) {
          if (this._mouseMoved) {
            if (
              t.ui.ie &&
              (!document.documentMode || 9 > document.documentMode) &&
              !e.button
            )
              return this._mouseUp(e);
            if (!e.which) return this._mouseUp(e);
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    !1 !== this._mouseStart(this._mouseDownEvent, e)),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          );
        },
        _mouseUp: function (e) {
          return (
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                t.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            (u = !1),
            !1
          );
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY),
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      }),
      (function () {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1),
          ];
        }
        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0;
        }
        function n(e) {
          var i = e[0];
          return 9 === i.nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : t.isWindow(i)
              ? {
                  width: e.width(),
                  height: e.height(),
                  offset: { top: e.scrollTop(), left: e.scrollLeft() },
                }
              : i.preventDefault
                ? {
                    width: 0,
                    height: 0,
                    offset: { top: i.pageY, left: i.pageX },
                  }
                : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset(),
                  };
        }
        t.ui = t.ui || {};
        var s,
          o,
          a = Math.max,
          r = Math.abs,
          l = Math.round,
          h = /left|center|right/,
          u = /top|center|bottom/,
          c = /[\+\-]\d+(\.[\d]+)?%?/,
          d = /^\w+/,
          p = /%$/,
          f = t.fn.position;
        (t.position = {
          scrollbarWidth: function () {
            if (void 0 !== s) return s;
            var e,
              i,
              n = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>",
              ),
              o = n.children()[0];
            return (
              t("body").append(n),
              (e = o.offsetWidth),
              n.css("overflow", "scroll"),
              e === (i = o.offsetWidth) && (i = n[0].clientWidth),
              n.remove(),
              (s = e - i)
            );
          },
          getScrollInfo: function (e) {
            var i =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              s =
                "scroll" === i ||
                ("auto" === i && e.width < e.element[0].scrollWidth);
            return {
              width:
                "scroll" === n ||
                ("auto" === n && e.height < e.element[0].scrollHeight)
                  ? t.position.scrollbarWidth()
                  : 0,
              height: s ? t.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (e) {
            var i = t(e || window),
              n = t.isWindow(i[0]),
              s = !!i[0] && 9 === i[0].nodeType;
            return {
              element: i,
              isWindow: n,
              isDocument: s,
              offset: i.offset() || { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: n || s ? i.width() : i.outerWidth(),
              height: n || s ? i.height() : i.outerHeight(),
            };
          },
        }),
          (t.fn.position = function (s) {
            if (!s || !s.of) return f.apply(this, arguments);
            s = t.extend({}, s);
            var p,
              m,
              g,
              v,
              y,
              b,
              _ = t(s.of),
              w = t.position.getWithinInfo(s.within),
              x = t.position.getScrollInfo(w),
              C = (s.collision || "flip").split(" "),
              k = {};
            return (
              (b = n(_)),
              _[0].preventDefault && (s.at = "left top"),
              (m = b.width),
              (g = b.height),
              (v = b.offset),
              (y = t.extend({}, v)),
              t.each(["my", "at"], function () {
                var t,
                  e,
                  i = (s[this] || "").split(" ");
                1 === i.length &&
                  (i = h.test(i[0])
                    ? i.concat(["center"])
                    : u.test(i[0])
                      ? ["center"].concat(i)
                      : ["center", "center"]),
                  (i[0] = h.test(i[0]) ? i[0] : "center"),
                  (i[1] = u.test(i[1]) ? i[1] : "center"),
                  (t = c.exec(i[0])),
                  (e = c.exec(i[1])),
                  (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]);
              }),
              1 === C.length && (C[1] = C[0]),
              "right" === s.at[0]
                ? (y.left += m)
                : "center" === s.at[0] && (y.left += m / 2),
              "bottom" === s.at[1]
                ? (y.top += g)
                : "center" === s.at[1] && (y.top += g / 2),
              (p = e(k.at, m, g)),
              (y.left += p[0]),
              (y.top += p[1]),
              this.each(function () {
                var n,
                  h,
                  u = t(this),
                  c = u.outerWidth(),
                  d = u.outerHeight(),
                  f = i(this, "marginLeft"),
                  b = i(this, "marginTop"),
                  T = c + f + i(this, "marginRight") + x.width,
                  D = d + b + i(this, "marginBottom") + x.height,
                  A = t.extend({}, y),
                  S = e(k.my, u.outerWidth(), u.outerHeight());
                "right" === s.my[0]
                  ? (A.left -= c)
                  : "center" === s.my[0] && (A.left -= c / 2),
                  "bottom" === s.my[1]
                    ? (A.top -= d)
                    : "center" === s.my[1] && (A.top -= d / 2),
                  (A.left += S[0]),
                  (A.top += S[1]),
                  o || ((A.left = l(A.left)), (A.top = l(A.top))),
                  (n = { marginLeft: f, marginTop: b }),
                  t.each(["left", "top"], function (e, i) {
                    t.ui.position[C[e]] &&
                      t.ui.position[C[e]][i](A, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: c,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: T,
                        collisionHeight: D,
                        offset: [p[0] + S[0], p[1] + S[1]],
                        my: s.my,
                        at: s.at,
                        within: w,
                        elem: u,
                      });
                  }),
                  s.using &&
                    (h = function (t) {
                      var e = v.left - A.left,
                        i = e + m - c,
                        n = v.top - A.top,
                        o = n + g - d,
                        l = {
                          target: {
                            element: _,
                            left: v.left,
                            top: v.top,
                            width: m,
                            height: g,
                          },
                          element: {
                            element: u,
                            left: A.left,
                            top: A.top,
                            width: c,
                            height: d,
                          },
                          horizontal:
                            0 > i ? "left" : e > 0 ? "right" : "center",
                          vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle",
                        };
                      c > m && m > r(e + i) && (l.horizontal = "center"),
                        d > g && g > r(n + o) && (l.vertical = "middle"),
                        (l.important =
                          a(r(e), r(i)) > a(r(n), r(o))
                            ? "horizontal"
                            : "vertical"),
                        s.using.call(this, t, l);
                    }),
                  u.offset(t.extend(A, { using: h }));
              })
            );
          }),
          (t.ui.position = {
            fit: {
              left: function (t, e) {
                var i,
                  n = e.within,
                  s = n.isWindow ? n.scrollLeft : n.offset.left,
                  o = n.width,
                  r = t.left - e.collisionPosition.marginLeft,
                  l = s - r,
                  h = r + e.collisionWidth - o - s;
                e.collisionWidth > o
                  ? l > 0 && 0 >= h
                    ? ((i = t.left + l + e.collisionWidth - o - s),
                      (t.left += l - i))
                    : (t.left =
                        h > 0 && 0 >= l
                          ? s
                          : l > h
                            ? s + o - e.collisionWidth
                            : s)
                  : l > 0
                    ? (t.left += l)
                    : h > 0
                      ? (t.left -= h)
                      : (t.left = a(t.left - r, t.left));
              },
              top: function (t, e) {
                var i,
                  n = e.within,
                  s = n.isWindow ? n.scrollTop : n.offset.top,
                  o = e.within.height,
                  r = t.top - e.collisionPosition.marginTop,
                  l = s - r,
                  h = r + e.collisionHeight - o - s;
                e.collisionHeight > o
                  ? l > 0 && 0 >= h
                    ? ((i = t.top + l + e.collisionHeight - o - s),
                      (t.top += l - i))
                    : (t.top =
                        h > 0 && 0 >= l
                          ? s
                          : l > h
                            ? s + o - e.collisionHeight
                            : s)
                  : l > 0
                    ? (t.top += l)
                    : h > 0
                      ? (t.top -= h)
                      : (t.top = a(t.top - r, t.top));
              },
            },
            flip: {
              left: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  o = s.offset.left + s.scrollLeft,
                  a = s.width,
                  l = s.isWindow ? s.scrollLeft : s.offset.left,
                  h = t.left - e.collisionPosition.marginLeft,
                  u = h - l,
                  c = h + e.collisionWidth - a - l,
                  d =
                    "left" === e.my[0]
                      ? -e.elemWidth
                      : "right" === e.my[0]
                        ? e.elemWidth
                        : 0,
                  p =
                    "left" === e.at[0]
                      ? e.targetWidth
                      : "right" === e.at[0]
                        ? -e.targetWidth
                        : 0,
                  f = -2 * e.offset[0];
                0 > u
                  ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) ||
                      r(u) > i) &&
                    (t.left += d + p + f)
                  : c > 0 &&
                    ((n =
                      t.left - e.collisionPosition.marginLeft + d + p + f - l) >
                      0 ||
                      c > r(n)) &&
                    (t.left += d + p + f);
              },
              top: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  o = s.offset.top + s.scrollTop,
                  a = s.height,
                  l = s.isWindow ? s.scrollTop : s.offset.top,
                  h = t.top - e.collisionPosition.marginTop,
                  u = h - l,
                  c = h + e.collisionHeight - a - l,
                  d =
                    "top" === e.my[1]
                      ? -e.elemHeight
                      : "bottom" === e.my[1]
                        ? e.elemHeight
                        : 0,
                  p =
                    "top" === e.at[1]
                      ? e.targetHeight
                      : "bottom" === e.at[1]
                        ? -e.targetHeight
                        : 0,
                  f = -2 * e.offset[1];
                0 > u
                  ? (0 > (n = t.top + d + p + f + e.collisionHeight - a - o) ||
                      r(u) > n) &&
                    (t.top += d + p + f)
                  : c > 0 &&
                    ((i =
                      t.top - e.collisionPosition.marginTop + d + p + f - l) >
                      0 ||
                      c > r(i)) &&
                    (t.top += d + p + f);
              },
            },
            flipfit: {
              left: function () {
                t.ui.position.flip.left.apply(this, arguments),
                  t.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                t.ui.position.flip.top.apply(this, arguments),
                  t.ui.position.fit.top.apply(this, arguments);
              },
            },
          }),
          (function () {
            var e,
              i,
              n,
              s,
              a,
              r = document.getElementsByTagName("body")[0],
              l = document.createElement("div");
            for (a in ((e = document.createElement(r ? "div" : "body")),
            (n = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none",
            }),
            r &&
              t.extend(n, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px",
              }),
            n))
              e.style[a] = n[a];
            e.appendChild(l),
              (i = r || document.documentElement).insertBefore(e, i.firstChild),
              (l.style.cssText = "position: absolute; left: 10.7432222px;"),
              (s = t(l).offset().left),
              (o = s > 10 && 11 > s),
              (e.innerHTML = ""),
              i.removeChild(e);
          })();
      })(),
      t.ui.position,
      t.widget("ui.accordion", {
        version: "1.11.4",
        options: {
          active: 0,
          animate: {},
          collapsible: !1,
          event: "click",
          header: "> li > :first-child,> :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e",
          },
          activate: null,
          beforeActivate: null,
        },
        hideProps: {
          borderTopWidth: "hide",
          borderBottomWidth: "hide",
          paddingTop: "hide",
          paddingBottom: "hide",
          height: "hide",
        },
        showProps: {
          borderTopWidth: "show",
          borderBottomWidth: "show",
          paddingTop: "show",
          paddingBottom: "show",
          height: "show",
        },
        _create: function () {
          var e = this.options;
          (this.prevShow = this.prevHide = t()),
            this.element
              .addClass("ui-accordion ui-widget ui-helper-reset")
              .attr("role", "tablist"),
            e.collapsible ||
              (!1 !== e.active && null != e.active) ||
              (e.active = 0),
            this._processPanels(),
            0 > e.active && (e.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : t(),
          };
        },
        _createIcons: function () {
          var e = this.options.icons;
          e &&
            (t("<span>")
              .addClass("ui-accordion-header-icon ui-icon " + e.header)
              .prependTo(this.headers),
            this.active
              .children(".ui-accordion-header-icon")
              .removeClass(e.header)
              .addClass(e.activeHeader),
            this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function () {
          this.headers
            .removeClass("ui-accordion-icons")
            .children(".ui-accordion-header-icon")
            .remove();
        },
        _destroy: function () {
          var t;
          this.element
            .removeClass("ui-accordion ui-widget ui-helper-reset")
            .removeAttr("role"),
            this.headers
              .removeClass(
                "ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top",
              )
              .removeAttr("role")
              .removeAttr("aria-expanded")
              .removeAttr("aria-selected")
              .removeAttr("aria-controls")
              .removeAttr("tabIndex")
              .removeUniqueId(),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .removeClass(
                "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled",
              )
              .css("display", "")
              .removeAttr("role")
              .removeAttr("aria-hidden")
              .removeAttr("aria-labelledby")
              .removeUniqueId()),
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function (t, e) {
          return "active" === t
            ? void this._activate(e)
            : ("event" === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              "collapsible" !== t ||
                e ||
                !1 !== this.options.active ||
                this._activate(0),
              "icons" === t && (this._destroyIcons(), e && this._createIcons()),
              void (
                "disabled" === t &&
                (this.element
                  .toggleClass("ui-state-disabled", !!e)
                  .attr("aria-disabled", e),
                this.headers
                  .add(this.headers.next())
                  .toggleClass("ui-state-disabled", !!e))
              ));
        },
        _keydown: function (e) {
          if (!e.altKey && !e.ctrlKey) {
            var i = t.ui.keyCode,
              n = this.headers.length,
              s = this.headers.index(e.target),
              o = !1;
            switch (e.keyCode) {
              case i.RIGHT:
              case i.DOWN:
                o = this.headers[(s + 1) % n];
                break;
              case i.LEFT:
              case i.UP:
                o = this.headers[(s - 1 + n) % n];
                break;
              case i.SPACE:
              case i.ENTER:
                this._eventHandler(e);
                break;
              case i.HOME:
                o = this.headers[0];
                break;
              case i.END:
                o = this.headers[n - 1];
            }
            o &&
              (t(e.target).attr("tabIndex", -1),
              t(o).attr("tabIndex", 0),
              o.focus(),
              e.preventDefault());
          }
        },
        _panelKeyDown: function (e) {
          e.keyCode === t.ui.keyCode.UP &&
            e.ctrlKey &&
            t(e.currentTarget).prev().focus();
        },
        refresh: function () {
          var e = this.options;
          this._processPanels(),
            (!1 === e.active && !0 === e.collapsible) || !this.headers.length
              ? ((e.active = !1), (this.active = t()))
              : !1 === e.active
                ? this._activate(0)
                : this.active.length &&
                    !t.contains(this.element[0], this.active[0])
                  ? this.headers.length ===
                    this.headers.find(".ui-state-disabled").length
                    ? ((e.active = !1), (this.active = t()))
                    : this._activate(Math.max(0, e.active - 1))
                  : (e.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          var t = this.headers,
            e = this.panels;
          (this.headers = this.element
            .find(this.options.header)
            .addClass("ui-accordion-header ui-state-default ui-corner-all")),
            (this.panels = this.headers
              .next()
              .addClass(
                "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom",
              )
              .filter(":not(.ui-accordion-content-active)")
              .hide()),
            e &&
              (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function () {
          var e,
            i = this.options,
            n = i.heightStyle,
            s = this.element.parent();
          (this.active = this._findActive(i.active)
            .addClass(
              "ui-accordion-header-active ui-state-active ui-corner-top",
            )
            .removeClass("ui-corner-all")),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers
              .attr("role", "tab")
              .each(function () {
                var e = t(this),
                  i = e.uniqueId().attr("id"),
                  n = e.next(),
                  s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i);
              })
              .next()
              .attr("role", "tabpanel"),
            this.headers
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              })
              .next()
              .attr({ "aria-hidden": "true" })
              .hide(),
            this.active.length
              ? this.active
                  .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  })
                  .next()
                  .attr({ "aria-hidden": "false" })
              : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === n
              ? ((e = s.height()),
                this.element.siblings(":visible").each(function () {
                  var i = t(this),
                    n = i.css("position");
                  "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
                }),
                this.headers.each(function () {
                  e -= t(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    t(this).height(
                      Math.max(0, e - t(this).innerHeight() + t(this).height()),
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === n &&
                ((e = 0),
                this.headers
                  .next()
                  .each(function () {
                    e = Math.max(e, t(this).css("height", "").height());
                  })
                  .height(e));
        },
        _activate: function (e) {
          var i = this._findActive(e)[0];
          i !== this.active[0] &&
            ((i = i || this.active[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function (e) {
          var i = { keydown: "_keydown" };
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (e) {
          var i = this.options,
            n = this.active,
            s = t(e.currentTarget),
            o = s[0] === n[0],
            a = o && i.collapsible,
            r = a ? t() : s.next(),
            l = n.next(),
            h = {
              oldHeader: n,
              oldPanel: l,
              newHeader: a ? t() : s,
              newPanel: r,
            };
          e.preventDefault(),
            (o && !i.collapsible) ||
              !1 === this._trigger("beforeActivate", e, h) ||
              ((i.active = !a && this.headers.index(s)),
              (this.active = o ? t() : s),
              this._toggle(h),
              n.removeClass("ui-accordion-header-active ui-state-active"),
              i.icons &&
                n
                  .children(".ui-accordion-header-icon")
                  .removeClass(i.icons.activeHeader)
                  .addClass(i.icons.header),
              o ||
                (s
                  .removeClass("ui-corner-all")
                  .addClass(
                    "ui-accordion-header-active ui-state-active ui-corner-top",
                  ),
                i.icons &&
                  s
                    .children(".ui-accordion-header-icon")
                    .removeClass(i.icons.header)
                    .addClass(i.icons.activeHeader),
                s.next().addClass("ui-accordion-content-active")));
        },
        _toggle: function (e) {
          var i = e.newPanel,
            n = this.prevShow.length ? this.prevShow : e.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = i),
            (this.prevHide = n),
            this.options.animate
              ? this._animate(i, n, e)
              : (n.hide(), i.show(), this._toggleComplete(e)),
            n.attr({ "aria-hidden": "true" }),
            n
              .prev()
              .attr({ "aria-selected": "false", "aria-expanded": "false" }),
            i.length && n.length
              ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
              : i.length &&
                this.headers
                  .filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10);
                  })
                  .attr("tabIndex", -1),
            i
              .attr("aria-hidden", "false")
              .prev()
              .attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              });
        },
        _animate: function (t, e, i) {
          var n,
            s,
            o,
            a = this,
            r = 0,
            l = t.css("box-sizing"),
            h = t.length && (!e.length || t.index() < e.index()),
            u = this.options.animate || {},
            c = (h && u.down) || u,
            d = function () {
              a._toggleComplete(i);
            };
          return (
            "number" == typeof c && (o = c),
            "string" == typeof c && (s = c),
            (s = s || c.easing || u.easing),
            (o = o || c.duration || u.duration),
            e.length
              ? t.length
                ? ((n = t.show().outerHeight()),
                  e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function (t, i) {
                      (i.now = Math.round(t)),
                        "height" !== i.prop
                          ? "content-box" === l && (r += i.now)
                          : "content" !== a.options.heightStyle &&
                            ((i.now = Math.round(n - e.outerHeight() - r)),
                            (r = 0));
                    },
                  }))
                : e.animate(this.hideProps, o, s, d)
              : t.animate(this.showProps, o, s, d)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel;
          e
            .removeClass("ui-accordion-content-active")
            .prev()
            .removeClass("ui-corner-top")
            .addClass("ui-corner-all"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t);
        },
      }),
      t.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: { submenu: "ui-icon-carat-1-e" },
          items: "> *",
          menus: "ul",
          position: { my: "left-1 top", at: "right top" },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .addClass("ui-menu ui-widget ui-widget-content")
              .toggleClass(
                "ui-menu-icons",
                !!this.element.find(".ui-icon").length,
              )
              .attr({ role: this.options.role, tabIndex: 0 }),
            this.options.disabled &&
              this.element
                .addClass("ui-state-disabled")
                .attr("aria-disabled", "true"),
            this._on({
              "mousedown .ui-menu-item": function (t) {
                t.preventDefault();
              },
              "click .ui-menu-item": function (e) {
                var i = t(e.target);
                !this.mouseHandled &&
                  i.not(".ui-state-disabled").length &&
                  (this.select(e),
                  e.isPropagationStopped() || (this.mouseHandled = !0),
                  i.has(".ui-menu").length
                    ? this.expand(e)
                    : !this.element.is(":focus") &&
                      t(this.document[0].activeElement).closest(".ui-menu")
                        .length &&
                      (this.element.trigger("focus", [!0]),
                      this.active &&
                        1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)));
              },
              "mouseenter .ui-menu-item": function (e) {
                if (!this.previousFilter) {
                  var i = t(e.currentTarget);
                  i.siblings(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(e, i);
                }
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (t, e) {
                var i =
                  this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i);
              },
              blur: function (e) {
                this._delay(function () {
                  t.contains(this.element[0], this.document[0].activeElement) ||
                    this.collapseAll(e);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t),
                  (this.mouseHandled = !1);
              },
            });
        },
        _destroy: function () {
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeClass(
              "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front",
            )
            .removeAttr("role")
            .removeAttr("tabIndex")
            .removeAttr("aria-labelledby")
            .removeAttr("aria-expanded")
            .removeAttr("aria-hidden")
            .removeAttr("aria-disabled")
            .removeUniqueId()
            .show(),
            this.element
              .find(".ui-menu-item")
              .removeClass("ui-menu-item")
              .removeAttr("role")
              .removeAttr("aria-disabled")
              .removeUniqueId()
              .removeClass("ui-state-hover")
              .removeAttr("tabIndex")
              .removeAttr("role")
              .removeAttr("aria-haspopup")
              .children()
              .each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove();
              }),
            this.element
              .find(".ui-menu-divider")
              .removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function (e) {
          var i,
            n,
            s,
            o,
            a = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
            case t.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
            case t.ui.keyCode.END:
              this._move("last", "last", e);
              break;
            case t.ui.keyCode.UP:
              this.previous(e);
              break;
            case t.ui.keyCode.DOWN:
              this.next(e);
              break;
            case t.ui.keyCode.LEFT:
              this.collapse(e);
              break;
            case t.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(e);
              break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
              this._activate(e);
              break;
            case t.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
            default:
              (a = !1),
                (n = this.previousFilter || ""),
                (s = String.fromCharCode(e.keyCode)),
                (o = !1),
                clearTimeout(this.filterTimer),
                s === n ? (o = !0) : (s = n + s),
                (i = this._filterMenuItems(s)),
                (i =
                  o && -1 !== i.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : i).length ||
                  ((s = String.fromCharCode(e.keyCode)),
                  (i = this._filterMenuItems(s))),
                i.length
                  ? (this.focus(e, i),
                    (this.previousFilter = s),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          a && e.preventDefault();
        },
        _activate: function (t) {
          this.active.is(".ui-state-disabled") ||
            (this.active.is("[aria-haspopup='true']")
              ? this.expand(t)
              : this.select(t));
        },
        refresh: function () {
          var e,
            i = this,
            n = this.options.icons.submenu,
            s = this.element.find(this.options.menus);
          this.element.toggleClass(
            "ui-menu-icons",
            !!this.element.find(".ui-icon").length,
          ),
            s
              .filter(":not(.ui-menu)")
              .addClass("ui-menu ui-widget ui-widget-content ui-front")
              .hide()
              .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false",
              })
              .each(function () {
                var e = t(this),
                  i = e.parent(),
                  s = t("<span>")
                    .addClass("ui-menu-icon ui-icon " + n)
                    .data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s),
                  e.attr("aria-labelledby", i.attr("id"));
              }),
            (e = s.add(this.element).find(this.options.items))
              .not(".ui-menu-item")
              .each(function () {
                var e = t(this);
                i._isDivider(e) &&
                  e.addClass("ui-widget-content ui-menu-divider");
              }),
            e
              .not(".ui-menu-item, .ui-menu-divider")
              .addClass("ui-menu-item")
              .uniqueId()
              .attr({ tabIndex: -1, role: this._itemRole() }),
            e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !t.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return { menu: "menuitem", listbox: "option" }[this.options.role];
        },
        _setOption: function (t, e) {
          "icons" === t &&
            this.element
              .find(".ui-menu-icon")
              .removeClass(this.options.icons.submenu)
              .addClass(e.submenu),
            "disabled" === t &&
              this.element
                .toggleClass("ui-state-disabled", !!e)
                .attr("aria-disabled", e),
            this._super(t, e);
        },
        focus: function (t, e) {
          var i, n;
          this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            (this.active = e.first()),
            (n = this.active
              .addClass("ui-state-focus")
              .removeClass("ui-state-active")),
            this.options.role &&
              this.element.attr("aria-activedescendant", n.attr("id")),
            this.active
              .parent()
              .closest(".ui-menu-item")
              .addClass("ui-state-active"),
            t && "keydown" === t.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = e.children(".ui-menu")).length &&
              t &&
              /^mouse/.test(t.type) &&
              this._startOpening(i),
            (this.activeMenu = e.parent()),
            this._trigger("focus", t, { item: e });
        },
        _scrollIntoView: function (e) {
          var i, n, s, o, a, r;
          this._hasScroll() &&
            ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
            (s = e.offset().top - this.activeMenu.offset().top - i - n),
            (o = this.activeMenu.scrollTop()),
            (a = this.activeMenu.height()),
            (r = e.outerHeight()),
            0 > s
              ? this.activeMenu.scrollTop(o + s)
              : s + r > a && this.activeMenu.scrollTop(o + s - a + r));
        },
        blur: function (t, e) {
          e || clearTimeout(this.timer),
            this.active &&
              (this.active.removeClass("ui-state-focus"),
              (this.active = null),
              this._trigger("blur", t, { item: this.active }));
        },
        _startOpening: function (t) {
          clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(t);
              }, this.delay));
        },
        _open: function (e) {
          var i = t.extend({ of: this.active }, this.options.position);
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(e.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            e
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(i);
        },
        collapseAll: function (e, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var n = i
                ? this.element
                : t(e && e.target).closest(this.element.find(".ui-menu"));
              n.length || (n = this.element),
                this._close(n),
                this.blur(e),
                (this.activeMenu = n);
            }, this.delay));
        },
        _close: function (t) {
          t || (t = this.active ? this.active.parent() : this.element),
            t
              .find(".ui-menu")
              .hide()
              .attr("aria-hidden", "true")
              .attr("aria-expanded", "false")
              .end()
              .find(".ui-state-active")
              .not(".ui-state-focus")
              .removeClass("ui-state-active");
        },
        _closeOnDocumentClick: function (e) {
          return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function (t) {
          return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function (t) {
          var e =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function (t) {
          var e =
            this.active &&
            this.active.children(".ui-menu ").find(this.options.items).first();
          e &&
            e.length &&
            (this._open(e.parent()),
            this._delay(function () {
              this.focus(t, e);
            }));
        },
        next: function (t) {
          this._move("next", "first", t);
        },
        previous: function (t) {
          this._move("prev", "last", t);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (t, e, i) {
          var n;
          this.active &&
            (n =
              "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](
                    ".ui-menu-item",
                  ).eq(-1)
                : this.active[t + "All"](".ui-menu-item").eq(0)),
            (n && n.length && this.active) ||
              (n = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, n);
        },
        nextPage: function (e) {
          var i, n, s;
          return this.active
            ? void (
                this.isLastItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (s = this.element.height()),
                    this.active.nextAll(".ui-menu-item").each(function () {
                      return 0 > (i = t(this)).offset().top - n - s;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu
                        .find(this.options.items)
                        [this.active ? "last" : "first"](),
                    ))
              )
            : void this.next(e);
        },
        previousPage: function (e) {
          var i, n, s;
          return this.active
            ? void (
                this.isFirstItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (s = this.element.height()),
                    this.active.prevAll(".ui-menu-item").each(function () {
                      return (i = t(this)).offset().top - n + s > 0;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu.find(this.options.items).first(),
                    ))
              )
            : void this.next(e);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (e) {
          this.active = this.active || t(e.target).closest(".ui-menu-item");
          var i = { item: this.active };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i);
        },
        _filterMenuItems: function (e) {
          var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            n = RegExp("^" + i, "i");
          return this.activeMenu
            .find(this.options.items)
            .filter(".ui-menu-item")
            .filter(function () {
              return n.test(t.trim(t(this).text()));
            });
        },
      }),
      t.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var e,
            i,
            n,
            s = this.element[0].nodeName.toLowerCase(),
            o = "textarea" === s,
            a = "input" === s;
          (this.isMultiLine =
            !!o || (!a && this.element.prop("isContentEditable"))),
            (this.valueMethod = this.element[o || a ? "val" : "text"]),
            (this.isNewMenu = !0),
            this.element
              .addClass("ui-autocomplete-input")
              .attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (s) {
                if (this.element.prop("readOnly"))
                  return (e = !0), (n = !0), void (i = !0);
                (e = !1), (n = !1), (i = !1);
                var o = t.ui.keyCode;
                switch (s.keyCode) {
                  case o.PAGE_UP:
                    (e = !0), this._move("previousPage", s);
                    break;
                  case o.PAGE_DOWN:
                    (e = !0), this._move("nextPage", s);
                    break;
                  case o.UP:
                    (e = !0), this._keyEvent("previous", s);
                    break;
                  case o.DOWN:
                    (e = !0), this._keyEvent("next", s);
                    break;
                  case o.ENTER:
                    this.menu.active &&
                      ((e = !0), s.preventDefault(), this.menu.select(s));
                    break;
                  case o.TAB:
                    this.menu.active && this.menu.select(s);
                    break;
                  case o.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(s),
                      s.preventDefault());
                    break;
                  default:
                    (i = !0), this._searchTimeout(s);
                }
              },
              keypress: function (n) {
                if (e)
                  return (
                    (e = !1),
                    void (
                      (!this.isMultiLine || this.menu.element.is(":visible")) &&
                      n.preventDefault()
                    )
                  );
                if (!i) {
                  var s = t.ui.keyCode;
                  switch (n.keyCode) {
                    case s.PAGE_UP:
                      this._move("previousPage", n);
                      break;
                    case s.PAGE_DOWN:
                      this._move("nextPage", n);
                      break;
                    case s.UP:
                      this._keyEvent("previous", n);
                      break;
                    case s.DOWN:
                      this._keyEvent("next", n);
                  }
                }
              },
              input: function (t) {
                return n
                  ? ((n = !1), void t.preventDefault())
                  : void this._searchTimeout(t);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (t) {
                return this.cancelBlur
                  ? void delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t));
              },
            }),
            this._initSource(),
            (this.menu = t("<ul>")
              .addClass("ui-autocomplete ui-front")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur;
                  });
                var i = this.menu.element[0];
                t(e.target).closest(".ui-menu-item").length ||
                  this._delay(function () {
                    var e = this;
                    this.document.one("mousedown", function (n) {
                      n.target === e.element[0] ||
                        n.target === i ||
                        t.contains(i, n.target) ||
                        e.close();
                    });
                  });
              },
              menufocus: function (e, i) {
                var n, s;
                return this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                  ? (this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      t(e.target).trigger(e.originalEvent);
                    }))
                  : ((s = i.item.data("ui-autocomplete-item")),
                    !1 !== this._trigger("focus", e, { item: s }) &&
                      e.originalEvent &&
                      /^key/.test(e.originalEvent.type) &&
                      this._value(s.value),
                    void (
                      (n = i.item.attr("aria-label") || s.value) &&
                      t.trim(n).length &&
                      (this.liveRegion.children().hide(),
                      t("<div>").text(n).appendTo(this.liveRegion))
                    ));
              },
              menuselect: function (t, e) {
                var i = e.item.data("ui-autocomplete-item"),
                  n = this.previous;
                this.element[0] !== this.document[0].activeElement &&
                  (this.element.focus(),
                  (this.previous = n),
                  this._delay(function () {
                    (this.previous = n), (this.selectedItem = i);
                  })),
                  !1 !== this._trigger("select", t, { item: i }) &&
                    this._value(i.value),
                  (this.term = this._value()),
                  this.close(t),
                  (this.selectedItem = i);
              },
            }),
            (this.liveRegion = t("<span>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            })
              .addClass("ui-helper-hidden-accessible")
              .appendTo(this.document[0].body)),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element
              .removeClass("ui-autocomplete-input")
              .removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _initSource: function () {
          var e,
            i,
            n = this;
          t.isArray(this.options.source)
            ? ((e = this.options.source),
              (this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
              }))
            : "string" == typeof this.options.source
              ? ((i = this.options.source),
                (this.source = function (e, s) {
                  n.xhr && n.xhr.abort(),
                    (n.xhr = t.ajax({
                      url: i,
                      data: e,
                      dataType: "json",
                      success: function (t) {
                        s(t);
                      },
                      error: function () {
                        s([]);
                      },
                    }));
                }))
              : (this.source = this.options.source);
        },
        _searchTimeout: function (t) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var e = this.term === this._value(),
                i = this.menu.element.is(":visible"),
                n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
              (!e || (e && !i && !n)) &&
                ((this.selectedItem = null), this.search(null, t));
            }, this.options.delay));
        },
        search: function (t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : !1 !== this._trigger("search", e)
                ? this._search(t)
                : void 0
          );
        },
        _search: function (t) {
          this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response());
        },
        _response: function () {
          var e = ++this.requestIndex;
          return t.proxy(function (t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending ||
                this.element.removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (t) {
          t && (t = this._normalize(t)),
            this._trigger("response", null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger("open"))
              : this._close();
        },
        close: function (t) {
          (this.cancelSearch = !0), this._close(t);
        },
        _close: function (t) {
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.blur(),
            (this.isNewMenu = !0),
            this._trigger("close", t));
        },
        _change: function (t) {
          this.previous !== this._value() &&
            this._trigger("change", t, { item: this.selectedItem });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : t.map(e, function (e) {
                return "string" == typeof e
                  ? { label: e, value: e }
                  : t.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label,
                    });
              });
        },
        _suggest: function (e) {
          var i = this.menu.element.empty();
          this._renderMenu(i, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function () {
          var t = this.menu.element;
          t.outerWidth(
            Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()),
          );
        },
        _renderMenu: function (e, i) {
          var n = this;
          t.each(i, function (t, i) {
            n._renderItemData(e, i);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function (e, i) {
          return t("<li>").text(i.label).appendTo(e);
        },
        _move: function (t, e) {
          return this.menu.element.is(":visible")
            ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e)
            : void this.search(null, e);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (t, e) {
          (!this.isMultiLine || this.menu.element.is(":visible")) &&
            (this._move(t, e), e.preventDefault());
        },
      }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var i;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t("<div>").text(i).appendTo(this.liveRegion));
        },
      }),
      t.ui.autocomplete;
    var c,
      d,
      p = "ui-button ui-widget ui-state-default ui-corner-all",
      f =
        "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      m = function () {
        var e = t(this);
        setTimeout(function () {
          e.find(":ui-button").button("refresh");
        }, 1);
      },
      g = function (e) {
        var i = e.name,
          n = e.form,
          s = t([]);
        return (
          i &&
            ((i = i.replace(/'/g, "\\'")),
            (s = n
              ? t(n).find("[name='" + i + "'][type=radio]")
              : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(
                  function () {
                    return !this.form;
                  },
                ))),
          s
        );
      };
    t.widget("ui.button", {
      version: "1.11.4",
      defaultElement: "<button>",
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null },
      },
      _create: function () {
        this.element
          .closest("form")
          .unbind("reset" + this.eventNamespace)
          .bind("reset" + this.eventNamespace, m),
          "boolean" != typeof this.options.disabled
            ? (this.options.disabled = !!this.element.prop("disabled"))
            : this.element.prop("disabled", this.options.disabled),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr("title"));
        var e = this,
          i = this.options,
          n = "checkbox" === this.type || "radio" === this.type,
          s = n ? "" : "ui-state-active";
        null === i.label &&
          (i.label =
            "input" === this.type
              ? this.buttonElement.val()
              : this.buttonElement.html()),
          this._hoverable(this.buttonElement),
          this.buttonElement
            .addClass(p)
            .attr("role", "button")
            .bind("mouseenter" + this.eventNamespace, function () {
              i.disabled || (this === c && t(this).addClass("ui-state-active"));
            })
            .bind("mouseleave" + this.eventNamespace, function () {
              i.disabled || t(this).removeClass(s);
            })
            .bind("click" + this.eventNamespace, function (t) {
              i.disabled && (t.preventDefault(), t.stopImmediatePropagation());
            }),
          this._on({
            focus: function () {
              this.buttonElement.addClass("ui-state-focus");
            },
            blur: function () {
              this.buttonElement.removeClass("ui-state-focus");
            },
          }),
          n &&
            this.element.bind("change" + this.eventNamespace, function () {
              e.refresh();
            }),
          "checkbox" === this.type
            ? this.buttonElement.bind(
                "click" + this.eventNamespace,
                function () {
                  return !i.disabled && void 0;
                },
              )
            : "radio" === this.type
              ? this.buttonElement.bind(
                  "click" + this.eventNamespace,
                  function () {
                    if (i.disabled) return !1;
                    t(this).addClass("ui-state-active"),
                      e.buttonElement.attr("aria-pressed", "true");
                    var n = e.element[0];
                    g(n)
                      .not(n)
                      .map(function () {
                        return t(this).button("widget")[0];
                      })
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
                  },
                )
              : (this.buttonElement
                  .bind("mousedown" + this.eventNamespace, function () {
                    return (
                      !i.disabled &&
                      (t(this).addClass("ui-state-active"),
                      (c = this),
                      void e.document.one("mouseup", function () {
                        c = null;
                      }))
                    );
                  })
                  .bind("mouseup" + this.eventNamespace, function () {
                    return (
                      !i.disabled && void t(this).removeClass("ui-state-active")
                    );
                  })
                  .bind("keydown" + this.eventNamespace, function (e) {
                    return (
                      !i.disabled &&
                      void (
                        (e.keyCode === t.ui.keyCode.SPACE ||
                          e.keyCode === t.ui.keyCode.ENTER) &&
                        t(this).addClass("ui-state-active")
                      )
                    );
                  })
                  .bind(
                    "keyup" +
                      this.eventNamespace +
                      " blur" +
                      this.eventNamespace,
                    function () {
                      t(this).removeClass("ui-state-active");
                    },
                  ),
                this.buttonElement.is("a") &&
                  this.buttonElement.keyup(function (e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click();
                  })),
          this._setOption("disabled", i.disabled),
          this._resetButton();
      },
      _determineButtonType: function () {
        var t, e, i;
        (this.type = this.element.is("[type=checkbox]")
          ? "checkbox"
          : this.element.is("[type=radio]")
            ? "radio"
            : this.element.is("input")
              ? "input"
              : "button"),
          "checkbox" === this.type || "radio" === this.type
            ? ((t = this.element.parents().last()),
              (e = "label[for='" + this.element.attr("id") + "']"),
              (this.buttonElement = t.find(e)),
              this.buttonElement.length ||
                ((t = t.length ? t.siblings() : this.element.siblings()),
                (this.buttonElement = t.filter(e)),
                this.buttonElement.length || (this.buttonElement = t.find(e))),
              this.element.addClass("ui-helper-hidden-accessible"),
              (i = this.element.is(":checked")) &&
                this.buttonElement.addClass("ui-state-active"),
              this.buttonElement.prop("aria-pressed", i))
            : (this.buttonElement = this.element);
      },
      widget: function () {
        return this.buttonElement;
      },
      _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"),
          this.buttonElement
            .removeClass(p + " ui-state-active " + f)
            .removeAttr("role")
            .removeAttr("aria-pressed")
            .html(this.buttonElement.find(".ui-button-text").html()),
          this.hasTitle || this.buttonElement.removeAttr("title");
      },
      _setOption: function (t, e) {
        return (
          this._super(t, e),
          "disabled" === t
            ? (this.widget().toggleClass("ui-state-disabled", !!e),
              this.element.prop("disabled", !!e),
              void (
                e &&
                ("checkbox" === this.type || "radio" === this.type
                  ? this.buttonElement.removeClass("ui-state-focus")
                  : this.buttonElement.removeClass(
                      "ui-state-focus ui-state-active",
                    ))
              ))
            : void this._resetButton()
        );
      },
      refresh: function () {
        var e = this.element.is("input, button")
          ? this.element.is(":disabled")
          : this.element.hasClass("ui-button-disabled");
        e !== this.options.disabled && this._setOption("disabled", e),
          "radio" === this.type
            ? g(this.element[0]).each(function () {
                t(this).is(":checked")
                  ? t(this)
                      .button("widget")
                      .addClass("ui-state-active")
                      .attr("aria-pressed", "true")
                  : t(this)
                      .button("widget")
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
              })
            : "checkbox" === this.type &&
              (this.element.is(":checked")
                ? this.buttonElement
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : this.buttonElement
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false"));
      },
      _resetButton: function () {
        if ("input" !== this.type) {
          var e = this.buttonElement.removeClass(f),
            i = t("<span></span>", this.document[0])
              .addClass("ui-button-text")
              .html(this.options.label)
              .appendTo(e.empty())
              .text(),
            n = this.options.icons,
            s = n.primary && n.secondary,
            o = [];
          n.primary || n.secondary
            ? (this.options.text &&
                o.push(
                  "ui-button-text-icon" +
                    (s ? "s" : n.primary ? "-primary" : "-secondary"),
                ),
              n.primary &&
                e.prepend(
                  "<span class='ui-button-icon-primary ui-icon " +
                    n.primary +
                    "'></span>",
                ),
              n.secondary &&
                e.append(
                  "<span class='ui-button-icon-secondary ui-icon " +
                    n.secondary +
                    "'></span>",
                ),
              this.options.text ||
                (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"),
                this.hasTitle || e.attr("title", t.trim(i))))
            : o.push("ui-button-text-only"),
            e.addClass(o.join(" "));
        } else this.options.label && this.element.val(this.options.label);
      },
    }),
      t.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
          items:
            "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, e) {
          "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e);
        },
        refresh: function () {
          var e = "rtl" === this.element.css("direction"),
            i = this.element.find(this.options.items),
            n = i.filter(":ui-button");
          i.not(":ui-button").button(),
            n.button("refresh"),
            (this.buttons = i
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-all ui-corner-left ui-corner-right")
              .filter(":first")
              .addClass(e ? "ui-corner-right" : "ui-corner-left")
              .end()
              .filter(":last")
              .addClass(e ? "ui-corner-left" : "ui-corner-right")
              .end()
              .end());
        },
        _destroy: function () {
          this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy");
        },
      }),
      t.ui.button,
      t.extend(t.ui, { datepicker: { version: "1.11.4" } }),
      t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (t) {
          return a(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (e, i) {
          var n, s, o;
          (s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n),
            e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
            ((o = this._newInst(t(e), s)).settings = t.extend({}, i || {})),
            "input" === n
              ? this._connectDatepicker(e, o)
              : s && this._inlineDatepicker(e, o);
        },
        _newInst: function (e, i) {
          return {
            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: i,
            dpDiv: i
              ? s(
                  t(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>",
                  ),
                )
              : this.dpDiv,
          };
        },
        _connectDatepicker: function (e, i) {
          var n = t(e);
          (i.append = t([])),
            (i.trigger = t([])),
            n.hasClass(this.markerClassName) ||
              (this._attachments(n, i),
              n
                .addClass(this.markerClassName)
                .keydown(this._doKeyDown)
                .keypress(this._doKeyPress)
                .keyup(this._doKeyUp),
              this._autoSize(i),
              t.data(e, "datepicker", i),
              i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, i) {
          var n,
            s,
            o,
            a = this._get(i, "appendText"),
            r = this._get(i, "isRTL");
          i.append && i.append.remove(),
            a &&
              ((i.append = t(
                "<span class='" + this._appendClass + "'>" + a + "</span>",
              )),
              e[r ? "before" : "after"](i.append)),
            e.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            ("focus" === (n = this._get(i, "showOn")) || "both" === n) &&
              e.focus(this._showDatepicker),
            ("button" === n || "both" === n) &&
              ((s = this._get(i, "buttonText")),
              (o = this._get(i, "buttonImage")),
              (i.trigger = t(
                this._get(i, "buttonImageOnly")
                  ? t("<img/>")
                      .addClass(this._triggerClass)
                      .attr({ src: o, alt: s, title: s })
                  : t("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s,
                      ),
              )),
              e[r ? "before" : "after"](i.trigger),
              i.trigger.click(function () {
                return (
                  t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput === e[0]
                    ? t.datepicker._hideDatepicker()
                    : t.datepicker._datepickerShowing &&
                        t.datepicker._lastInput !== e[0]
                      ? (t.datepicker._hideDatepicker(),
                        t.datepicker._showDatepicker(e[0]))
                      : t.datepicker._showDatepicker(e[0]),
                  !1
                );
              }));
        },
        _autoSize: function (t) {
          if (this._get(t, "autoSize") && !t.inline) {
            var e,
              i,
              n,
              s,
              o = new Date(2009, 11, 20),
              a = this._get(t, "dateFormat");
            a.match(/[DM]/) &&
              ((e = function (t) {
                for (i = 0, n = 0, s = 0; t.length > s; s++)
                  t[s].length > i && ((i = t[s].length), (n = s));
                return n;
              }),
              o.setMonth(
                e(
                  this._get(
                    t,
                    a.match(/MM/) ? "monthNames" : "monthNamesShort",
                  ),
                ),
              ),
              o.setDate(
                e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  o.getDay(),
              )),
              t.input.attr("size", this._formatDate(t, o).length);
          }
        },
        _inlineDatepicker: function (e, i) {
          var n = t(e);
          n.hasClass(this.markerClassName) ||
            (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (e, i, n, s, o) {
          var r,
            l,
            h,
            u,
            c,
            d = this._dialogInst;
          return (
            d ||
              ((this.uuid += 1),
              (r = "dp" + this.uuid),
              (this._dialogInput = t(
                "<input type='text' id='" +
                  r +
                  "' style='position: absolute; top: -100px; width: 0px;'/>",
              )),
              this._dialogInput.keydown(this._doKeyDown),
              t("body").append(this._dialogInput),
              ((d = this._dialogInst =
                this._newInst(this._dialogInput, !1)).settings = {}),
              t.data(this._dialogInput[0], "datepicker", d)),
            a(d.settings, s || {}),
            (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
            this._dialogInput.val(i),
            (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
            this._pos ||
              ((l = document.documentElement.clientWidth),
              (h = document.documentElement.clientHeight),
              (u =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (c =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [l / 2 - 100 + u, h / 2 - 150 + c])),
            this._dialogInput
              .css("left", this._pos[0] + 20 + "px")
              .css("top", this._pos[1] + "px"),
            (d.settings.onSelect = n),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
          );
        },
        _destroyDatepicker: function (e) {
          var i,
            n = t(e),
            s = t.data(e, "datepicker");
          n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            t.removeData(e, "datepicker"),
            "input" === i
              ? (s.append.remove(),
                s.trigger.remove(),
                n
                  .removeClass(this.markerClassName)
                  .unbind("focus", this._showDatepicker)
                  .unbind("keydown", this._doKeyDown)
                  .unbind("keypress", this._doKeyPress)
                  .unbind("keyup", this._doKeyUp))
              : ("div" === i || "span" === i) &&
                n.removeClass(this.markerClassName).empty(),
            d === s && (d = null));
        },
        _enableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !1),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" }))
              : ("div" === i || "span" === i) &&
                ((n = s.children("." + this._inlineClass))
                  .children()
                  .removeClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })));
        },
        _disableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !0),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" }))
              : ("div" === i || "span" === i) &&
                ((n = s.children("." + this._inlineClass))
                  .children()
                  .addClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
          if (!t) return !1;
          for (var e = 0; this._disabledInputs.length > e; e++)
            if (this._disabledInputs[e] === t) return !0;
          return !1;
        },
        _getInst: function (e) {
          try {
            return t.data(e, "datepicker");
          } catch (t) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function (e, i, n) {
          var s,
            o,
            r,
            l,
            h = this._getInst(e);
          return 2 === arguments.length && "string" == typeof i
            ? "defaults" === i
              ? t.extend({}, t.datepicker._defaults)
              : h
                ? "all" === i
                  ? t.extend({}, h.settings)
                  : this._get(h, i)
                : null
            : ((s = i || {}),
              "string" == typeof i && ((s = {})[i] = n),
              void (
                h &&
                (this._curInst === h && this._hideDatepicker(),
                (o = this._getDateDatepicker(e, !0)),
                (r = this._getMinMaxDate(h, "min")),
                (l = this._getMinMaxDate(h, "max")),
                a(h.settings, s),
                null !== r &&
                  void 0 !== s.dateFormat &&
                  void 0 === s.minDate &&
                  (h.settings.minDate = this._formatDate(h, r)),
                null !== l &&
                  void 0 !== s.dateFormat &&
                  void 0 === s.maxDate &&
                  (h.settings.maxDate = this._formatDate(h, l)),
                "disabled" in s &&
                  (s.disabled
                    ? this._disableDatepicker(e)
                    : this._enableDatepicker(e)),
                this._attachments(t(e), h),
                this._autoSize(h),
                this._setDate(h, o),
                this._updateAlternate(h),
                this._updateDatepicker(h))
              ));
        },
        _changeDatepicker: function (t, e, i) {
          this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
          var e = this._getInst(t);
          e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          i &&
            (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i));
        },
        _getDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          return (
            i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
          );
        },
        _doKeyDown: function (e) {
          var i,
            n,
            s,
            o = t.datepicker._getInst(e.target),
            a = !0,
            r = o.dpDiv.is(".ui-datepicker-rtl");
          if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), (a = !1);
                break;
              case 13:
                return (
                  (s = t(
                    "td." +
                      t.datepicker._dayOverClass +
                      ":not(." +
                      t.datepicker._currentClass +
                      ")",
                    o.dpDiv,
                  ))[0] &&
                    t.datepicker._selectDay(
                      e.target,
                      o.selectedMonth,
                      o.selectedYear,
                      s[0],
                    ),
                  (i = t.datepicker._get(o, "onSelect"))
                    ? ((n = t.datepicker._formatDate(o)),
                      i.apply(o.input ? o.input[0] : null, [n, o]))
                    : t.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                t.datepicker._hideDatepicker();
                break;
              case 33:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, "stepBigMonths")
                    : -t.datepicker._get(o, "stepMonths"),
                  "M",
                );
                break;
              case 34:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, "stepBigMonths")
                    : +t.datepicker._get(o, "stepMonths"),
                  "M",
                );
                break;
              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                  (a = e.ctrlKey || e.metaKey);
                break;
              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                  (a = e.ctrlKey || e.metaKey);
                break;
              case 37:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                  (a = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? -t.datepicker._get(o, "stepBigMonths")
                        : -t.datepicker._get(o, "stepMonths"),
                      "M",
                    );
                break;
              case 38:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, -7, "D"),
                  (a = e.ctrlKey || e.metaKey);
                break;
              case 39:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                  (a = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? +t.datepicker._get(o, "stepBigMonths")
                        : +t.datepicker._get(o, "stepMonths"),
                      "M",
                    );
                break;
              case 40:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, 7, "D"),
                  (a = e.ctrlKey || e.metaKey);
                break;
              default:
                a = !1;
            }
          else
            36 === e.keyCode && e.ctrlKey
              ? t.datepicker._showDatepicker(this)
              : (a = !1);
          a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
          var i,
            n,
            s = t.datepicker._getInst(e.target);
          return t.datepicker._get(s, "constrainInput")
            ? ((i = t.datepicker._possibleChars(
                t.datepicker._get(s, "dateFormat"),
              )),
              (n = String.fromCharCode(
                null == e.charCode ? e.keyCode : e.charCode,
              )),
              e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1)
            : void 0;
        },
        _doKeyUp: function (e) {
          var i = t.datepicker._getInst(e.target);
          if (i.input.val() !== i.lastVal)
            try {
              t.datepicker.parseDate(
                t.datepicker._get(i, "dateFormat"),
                i.input ? i.input.val() : null,
                t.datepicker._getFormatConfig(i),
              ) &&
                (t.datepicker._setDateFromField(i),
                t.datepicker._updateAlternate(i),
                t.datepicker._updateDatepicker(i));
            } catch (t) {}
          return !0;
        },
        _showDatepicker: function (e) {
          var i, n, s, o, r, l, h;
          ("input" !== (e = e.target || e).nodeName.toLowerCase() &&
            (e = t("input", e.parentNode)[0]),
          t.datepicker._isDisabledDatepicker(e) ||
            t.datepicker._lastInput === e) ||
            ((i = t.datepicker._getInst(e)),
            t.datepicker._curInst &&
              t.datepicker._curInst !== i &&
              (t.datepicker._curInst.dpDiv.stop(!0, !0),
              i &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !==
              (s = (n = t.datepicker._get(i, "beforeShow"))
                ? n.apply(e, [e, i])
                : {}) &&
              (a(i.settings, s),
              (i.lastVal = null),
              (t.datepicker._lastInput = e),
              t.datepicker._setDateFromField(i),
              t.datepicker._inDialog && (e.value = ""),
              t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                (t.datepicker._pos[1] += e.offsetHeight)),
              (o = !1),
              t(e)
                .parents()
                .each(function () {
                  return !(o |= "fixed" === t(this).css("position"));
                }),
              (r = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
              (t.datepicker._pos = null),
              i.dpDiv.empty(),
              i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              t.datepicker._updateDatepicker(i),
              (r = t.datepicker._checkOffset(i, r, o)),
              i.dpDiv.css({
                position:
                  t.datepicker._inDialog && t.blockUI
                    ? "static"
                    : o
                      ? "fixed"
                      : "absolute",
                display: "none",
                left: r.left + "px",
                top: r.top + "px",
              }),
              i.inline ||
                ((l = t.datepicker._get(i, "showAnim")),
                (h = t.datepicker._get(i, "duration")),
                i.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) ||
                          "relative" === e ||
                          "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)),
                        !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(t(e)) + 1,
                ),
                (t.datepicker._datepickerShowing = !0),
                t.effects && t.effects.effect[l]
                  ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h)
                  : i.dpDiv[l || "show"](l ? h : null),
                t.datepicker._shouldFocusInput(i) && i.input.focus(),
                (t.datepicker._curInst = i))));
        },
        _updateDatepicker: function (e) {
          (this.maxRows = 4),
            (d = e),
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
          var i,
            n = this._getNumberOfMonths(e),
            s = n[1],
            a = e.dpDiv.find("." + this._dayOverClass + " a");
          a.length > 0 && o.apply(a.get(0)),
            e.dpDiv
              .removeClass(
                "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4",
              )
              .width(""),
            s > 1 &&
              e.dpDiv
                .addClass("ui-datepicker-multi-" + s)
                .css("width", 17 * s + "em"),
            e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"](
              "ui-datepicker-multi",
            ),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
              "ui-datepicker-rtl",
            ),
            e === t.datepicker._curInst &&
              t.datepicker._datepickerShowing &&
              t.datepicker._shouldFocusInput(e) &&
              e.input.focus(),
            e.yearshtml &&
              ((i = e.yearshtml),
              setTimeout(function () {
                i === e.yearshtml &&
                  e.yearshtml &&
                  e.dpDiv
                    .find("select.ui-datepicker-year:first")
                    .replaceWith(e.yearshtml),
                  (i = e.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (t) {
          return (
            t.input &&
            t.input.is(":visible") &&
            !t.input.is(":disabled") &&
            !t.input.is(":focus")
          );
        },
        _checkOffset: function (e, i, n) {
          var s = e.dpDiv.outerWidth(),
            o = e.dpDiv.outerHeight(),
            a = e.input ? e.input.outerWidth() : 0,
            r = e.input ? e.input.outerHeight() : 0,
            l =
              document.documentElement.clientWidth +
              (n ? 0 : t(document).scrollLeft()),
            h =
              document.documentElement.clientHeight +
              (n ? 0 : t(document).scrollTop());
          return (
            (i.left -= this._get(e, "isRTL") ? s - a : 0),
            (i.left -=
              n && i.left === e.input.offset().left
                ? t(document).scrollLeft()
                : 0),
            (i.top -=
              n && i.top === e.input.offset().top + r
                ? t(document).scrollTop()
                : 0),
            (i.left -= Math.min(
              i.left,
              i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0,
            )),
            (i.top -= Math.min(
              i.top,
              i.top + o > h && h > o ? Math.abs(o + r) : 0,
            )),
            i
          );
        },
        _findPos: function (e) {
          for (
            var i, n = this._getInst(e), s = this._get(n, "isRTL");
            e &&
            ("hidden" === e.type ||
              1 !== e.nodeType ||
              t.expr.filters.hidden(e));

          )
            e = e[s ? "previousSibling" : "nextSibling"];
          return [(i = t(e).offset()).left, i.top];
        },
        _hideDatepicker: function (e) {
          var i,
            n,
            s,
            o,
            a = this._curInst;
          !a ||
            (e && a !== t.data(e, "datepicker")) ||
            (this._datepickerShowing &&
              ((i = this._get(a, "showAnim")),
              (n = this._get(a, "duration")),
              (s = function () {
                t.datepicker._tidyDialog(a);
              }),
              t.effects && (t.effects.effect[i] || t.effects[i])
                ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s)
                : a.dpDiv[
                    "slideDown" === i
                      ? "slideUp"
                      : "fadeIn" === i
                        ? "fadeOut"
                        : "hide"
                  ](i ? n : null, s),
              i || s(),
              (this._datepickerShowing = !1),
              (o = this._get(a, "onClose")) &&
                o.apply(a.input ? a.input[0] : null, [
                  a.input ? a.input.val() : "",
                  a,
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px",
                }),
                t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
          t.dpDiv
            .removeClass(this._dialogClass)
            .unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (e) {
          if (t.datepicker._curInst) {
            var i = t(e.target),
              n = t.datepicker._getInst(i[0]);
            ((i[0].id !== t.datepicker._mainDivId &&
              0 === i.parents("#" + t.datepicker._mainDivId).length &&
              !i.hasClass(t.datepicker.markerClassName) &&
              !i.closest("." + t.datepicker._triggerClass).length &&
              t.datepicker._datepickerShowing &&
              (!t.datepicker._inDialog || !t.blockUI)) ||
              (i.hasClass(t.datepicker.markerClassName) &&
                t.datepicker._curInst !== n)) &&
              t.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          this._isDisabledDatepicker(s[0]) ||
            (this._adjustInstDate(
              o,
              i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
              n,
            ),
            this._updateDatepicker(o));
        },
        _gotoToday: function (e) {
          var i,
            n = t(e),
            s = this._getInst(n[0]);
          this._get(s, "gotoCurrent") && s.currentDay
            ? ((s.selectedDay = s.currentDay),
              (s.drawMonth = s.selectedMonth = s.currentMonth),
              (s.drawYear = s.selectedYear = s.currentYear))
            : ((i = new Date()),
              (s.selectedDay = i.getDate()),
              (s.drawMonth = s.selectedMonth = i.getMonth()),
              (s.drawYear = s.selectedYear = i.getFullYear())),
            this._notifyChange(s),
            this._adjustDate(n);
        },
        _selectMonthYear: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          (o["selected" + ("M" === n ? "Month" : "Year")] = o[
            "draw" + ("M" === n ? "Month" : "Year")
          ] =
            parseInt(i.options[i.selectedIndex].value, 10)),
            this._notifyChange(o),
            this._adjustDate(s);
        },
        _selectDay: function (e, i, n, s) {
          var o,
            a = t(e);
          t(s).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(a[0]) ||
            (((o = this._getInst(a[0])).selectedDay = o.currentDay =
              t("a", s).html()),
            (o.selectedMonth = o.currentMonth = i),
            (o.selectedYear = o.currentYear = n),
            this._selectDate(
              e,
              this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear),
            ));
        },
        _clearDate: function (e) {
          var i = t(e);
          this._selectDate(i, "");
        },
        _selectDate: function (e, i) {
          var n,
            s = t(e),
            o = this._getInst(s[0]);
          (i = null != i ? i : this._formatDate(o)),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (n = this._get(o, "onSelect"))
              ? n.apply(o.input ? o.input[0] : null, [i, o])
              : o.input && o.input.trigger("change"),
            o.inline
              ? this._updateDatepicker(o)
              : (this._hideDatepicker(),
                (this._lastInput = o.input[0]),
                "object" != typeof o.input[0] && o.input.focus(),
                (this._lastInput = null));
        },
        _updateAlternate: function (e) {
          var i,
            n,
            s,
            o = this._get(e, "altField");
          o &&
            ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
            (n = this._getDate(e)),
            (s = this.formatDate(i, n, this._getFormatConfig(e))),
            t(o).each(function () {
              t(this).val(s);
            }));
        },
        noWeekends: function (t) {
          var e = t.getDay();
          return [e > 0 && 6 > e, ""];
        },
        iso8601Week: function (t) {
          var e,
            i = new Date(t.getTime());
          return (
            i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            (e = i.getTime()),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
          );
        },
        parseDate: function (e, i, n) {
          if (null == e || null == i) throw "Invalid arguments";
          if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
          var s,
            o,
            a,
            r,
            l = 0,
            h =
              (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            u =
              "string" != typeof h
                ? h
                : (new Date().getFullYear() % 100) + parseInt(h, 10),
            c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
            d = (n ? n.dayNames : null) || this._defaults.dayNames,
            p =
              (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
            f = (n ? n.monthNames : null) || this._defaults.monthNames,
            m = -1,
            g = -1,
            v = -1,
            y = -1,
            b = !1,
            _ = function (t) {
              var i = e.length > s + 1 && e.charAt(s + 1) === t;
              return i && s++, i;
            },
            w = function (t) {
              var e = _(t),
                n =
                  "@" === t
                    ? 14
                    : "!" === t
                      ? 20
                      : "y" === t && e
                        ? 4
                        : "o" === t
                          ? 3
                          : 2,
                s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                o = i.substring(l).match(s);
              if (!o) throw "Missing number at position " + l;
              return (l += o[0].length), parseInt(o[0], 10);
            },
            x = function (e, n, s) {
              var o = -1,
                a = t
                  .map(_(e) ? s : n, function (t, e) {
                    return [[e, t]];
                  })
                  .sort(function (t, e) {
                    return -(t[1].length - e[1].length);
                  });
              if (
                (t.each(a, function (t, e) {
                  var n = e[1];
                  return i.substr(l, n.length).toLowerCase() === n.toLowerCase()
                    ? ((o = e[0]), (l += n.length), !1)
                    : void 0;
                }),
                -1 !== o)
              )
                return o + 1;
              throw "Unknown name at position " + l;
            },
            C = function () {
              if (i.charAt(l) !== e.charAt(s))
                throw "Unexpected literal at position " + l;
              l++;
            };
          for (s = 0; e.length > s; s++)
            if (b) "'" !== e.charAt(s) || _("'") ? C() : (b = !1);
            else
              switch (e.charAt(s)) {
                case "d":
                  v = w("d");
                  break;
                case "D":
                  x("D", c, d);
                  break;
                case "o":
                  y = w("o");
                  break;
                case "m":
                  g = w("m");
                  break;
                case "M":
                  g = x("M", p, f);
                  break;
                case "y":
                  m = w("y");
                  break;
                case "@":
                  (m = (r = new Date(w("@"))).getFullYear()),
                    (g = r.getMonth() + 1),
                    (v = r.getDate());
                  break;
                case "!":
                  (m = (r = new Date(
                    (w("!") - this._ticksTo1970) / 1e4,
                  )).getFullYear()),
                    (g = r.getMonth() + 1),
                    (v = r.getDate());
                  break;
                case "'":
                  _("'") ? C() : (b = !0);
                  break;
                default:
                  C();
              }
          if (i.length > l && ((a = i.substr(l)), !/^\s+/.test(a)))
            throw "Extra/unparsed characters found in date: " + a;
          if (
            (-1 === m
              ? (m = new Date().getFullYear())
              : 100 > m &&
                (m +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (u >= m ? 0 : -100)),
            y > -1)
          )
            for (g = 1, v = y; !((o = this._getDaysInMonth(m, g - 1)) >= v); )
              g++, (v -= o);
          if (
            (r = this._daylightSavingAdjust(
              new Date(m, g - 1, v),
            )).getFullYear() !== m ||
            r.getMonth() + 1 !== g ||
            r.getDate() !== v
          )
            throw "Invalid date";
          return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
          864e9 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
          if (!e) return "";
          var n,
            s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            a =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            r = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function (e) {
              var i = t.length > n + 1 && t.charAt(n + 1) === e;
              return i && n++, i;
            },
            h = function (t, e, i) {
              var n = "" + e;
              if (l(t)) for (; i > n.length; ) n = "0" + n;
              return n;
            },
            u = function (t, e, i, n) {
              return l(t) ? n[e] : i[e];
            },
            c = "",
            d = !1;
          if (e)
            for (n = 0; t.length > n; n++)
              if (d)
                "'" !== t.charAt(n) || l("'") ? (c += t.charAt(n)) : (d = !1);
              else
                switch (t.charAt(n)) {
                  case "d":
                    c += h("d", e.getDate(), 2);
                    break;
                  case "D":
                    c += u("D", e.getDay(), s, o);
                    break;
                  case "o":
                    c += h(
                      "o",
                      Math.round(
                        (new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate(),
                        ).getTime() -
                          new Date(e.getFullYear(), 0, 0).getTime()) /
                          864e5,
                      ),
                      3,
                    );
                    break;
                  case "m":
                    c += h("m", e.getMonth() + 1, 2);
                    break;
                  case "M":
                    c += u("M", e.getMonth(), a, r);
                    break;
                  case "y":
                    c += l("y")
                      ? e.getFullYear()
                      : (10 > e.getYear() % 100 ? "0" : "") +
                        (e.getYear() % 100);
                    break;
                  case "@":
                    c += e.getTime();
                    break;
                  case "!":
                    c += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    l("'") ? (c += "'") : (d = !0);
                    break;
                  default:
                    c += t.charAt(n);
                }
          return c;
        },
        _possibleChars: function (t) {
          var e,
            i = "",
            n = !1,
            s = function (i) {
              var n = t.length > e + 1 && t.charAt(e + 1) === i;
              return n && e++, n;
            };
          for (e = 0; t.length > e; e++)
            if (n)
              "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
            else
              switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  i += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  s("'") ? (i += "'") : (n = !0);
                  break;
                default:
                  i += t.charAt(e);
              }
          return i;
        },
        _get: function (t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function (t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, "dateFormat"),
              n = (t.lastVal = t.input ? t.input.val() : null),
              s = this._getDefaultDate(t),
              o = s,
              a = this._getFormatConfig(t);
            try {
              o = this.parseDate(i, n, a) || s;
            } catch (t) {
              n = e ? "" : n;
            }
            (t.selectedDay = o.getDate()),
              (t.drawMonth = t.selectedMonth = o.getMonth()),
              (t.drawYear = t.selectedYear = o.getFullYear()),
              (t.currentDay = n ? o.getDate() : 0),
              (t.currentMonth = n ? o.getMonth() : 0),
              (t.currentYear = n ? o.getFullYear() : 0),
              this._adjustInstDate(t);
          }
        },
        _getDefaultDate: function (t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, "defaultDate"), new Date()),
          );
        },
        _determineDate: function (e, i, n) {
          var s =
            null == i || "" === i
              ? n
              : "string" == typeof i
                ? (function (i) {
                    try {
                      return t.datepicker.parseDate(
                        t.datepicker._get(e, "dateFormat"),
                        i,
                        t.datepicker._getFormatConfig(e),
                      );
                    } catch (t) {}
                    for (
                      var n =
                          (i.toLowerCase().match(/^c/)
                            ? t.datepicker._getDate(e)
                            : null) || new Date(),
                        s = n.getFullYear(),
                        o = n.getMonth(),
                        a = n.getDate(),
                        r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        l = r.exec(i);
                      l;

                    ) {
                      switch (l[2] || "d") {
                        case "d":
                        case "D":
                          a += parseInt(l[1], 10);
                          break;
                        case "w":
                        case "W":
                          a += 7 * parseInt(l[1], 10);
                          break;
                        case "m":
                        case "M":
                          (o += parseInt(l[1], 10)),
                            (a = Math.min(
                              a,
                              t.datepicker._getDaysInMonth(s, o),
                            ));
                          break;
                        case "y":
                        case "Y":
                          (s += parseInt(l[1], 10)),
                            (a = Math.min(
                              a,
                              t.datepicker._getDaysInMonth(s, o),
                            ));
                      }
                      l = r.exec(i);
                    }
                    return new Date(s, o, a);
                  })(i)
                : "number" == typeof i
                  ? isNaN(i)
                    ? n
                    : (function (t) {
                        var e = new Date();
                        return e.setDate(e.getDate() + t), e;
                      })(i)
                  : new Date(i.getTime());
          return (
            (s = s && "Invalid Date" == "" + s ? n : s) &&
              (s.setHours(0),
              s.setMinutes(0),
              s.setSeconds(0),
              s.setMilliseconds(0)),
            this._daylightSavingAdjust(s)
          );
        },
        _daylightSavingAdjust: function (t) {
          return t
            ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
            : null;
        },
        _setDate: function (t, e, i) {
          var n = !e,
            s = t.selectedMonth,
            o = t.selectedYear,
            a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
          (t.selectedDay = t.currentDay = a.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
            (s === t.selectedMonth && o === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
          return !t.currentYear || (t.input && "" === t.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay),
              );
        },
        _attachHandlers: function (e) {
          var i = this._get(e, "stepMonths"),
            n = "#" + e.id.replace(/\\\\/g, "\\");
          e.dpDiv.find("[data-handler]").map(function () {
            var e = {
              prev: function () {
                t.datepicker._adjustDate(n, -i, "M");
              },
              next: function () {
                t.datepicker._adjustDate(n, +i, "M");
              },
              hide: function () {
                t.datepicker._hideDatepicker();
              },
              today: function () {
                t.datepicker._gotoToday(n);
              },
              selectDay: function () {
                return (
                  t.datepicker._selectDay(
                    n,
                    +this.getAttribute("data-month"),
                    +this.getAttribute("data-year"),
                    this,
                  ),
                  !1
                );
              },
              selectMonth: function () {
                return t.datepicker._selectMonthYear(n, this, "M"), !1;
              },
              selectYear: function () {
                return t.datepicker._selectMonthYear(n, this, "Y"), !1;
              },
            };
            t(this).bind(
              this.getAttribute("data-event"),
              e[this.getAttribute("data-handler")],
            );
          });
        },
        _generateHTML: function (t) {
          var e,
            i,
            n,
            s,
            o,
            a,
            r,
            l,
            h,
            u,
            c,
            d,
            p,
            f,
            m,
            g,
            v,
            y,
            b,
            _,
            w,
            x,
            C,
            k,
            T,
            D,
            A,
            S,
            M,
            I,
            P,
            O,
            E,
            N,
            H,
            L,
            F,
            z,
            R,
            W = new Date(),
            j = this._daylightSavingAdjust(
              new Date(W.getFullYear(), W.getMonth(), W.getDate()),
            ),
            q = this._get(t, "isRTL"),
            B = this._get(t, "showButtonPanel"),
            Y = this._get(t, "hideIfNoPrevNext"),
            U = this._get(t, "navigationAsDateFormat"),
            Q = this._getNumberOfMonths(t),
            V = this._get(t, "showCurrentAtPos"),
            K = this._get(t, "stepMonths"),
            $ = 1 !== Q[0] || 1 !== Q[1],
            X = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9),
            ),
            G = this._getMinMaxDate(t, "min"),
            J = this._getMinMaxDate(t, "max"),
            Z = t.drawMonth - V,
            tt = t.drawYear;
          if ((0 > Z && ((Z += 12), tt--), J))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  J.getFullYear(),
                  J.getMonth() - Q[0] * Q[1] + 1,
                  J.getDate(),
                ),
              ),
                e = G && G > e ? G : e;
              this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

            )
              0 > --Z && ((Z = 11), tt--);
          for (
            t.drawMonth = Z,
              t.drawYear = tt,
              i = this._get(t, "prevText"),
              i = U
                ? this.formatDate(
                    i,
                    this._daylightSavingAdjust(new Date(tt, Z - K, 1)),
                    this._getFormatConfig(t),
                  )
                : i,
              n = this._canAdjustMonth(t, -1, tt, Z)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (q ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>"
                : Y
                  ? ""
                  : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                    i +
                    "'><span class='ui-icon ui-icon-circle-triangle-" +
                    (q ? "e" : "w") +
                    "'>" +
                    i +
                    "</span></a>",
              s = this._get(t, "nextText"),
              s = U
                ? this.formatDate(
                    s,
                    this._daylightSavingAdjust(new Date(tt, Z + K, 1)),
                    this._getFormatConfig(t),
                  )
                : s,
              o = this._canAdjustMonth(t, 1, tt, Z)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (q ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>"
                : Y
                  ? ""
                  : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                    s +
                    "'><span class='ui-icon ui-icon-circle-triangle-" +
                    (q ? "w" : "e") +
                    "'>" +
                    s +
                    "</span></a>",
              a = this._get(t, "currentText"),
              r = this._get(t, "gotoCurrent") && t.currentDay ? X : j,
              a = U ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
              l = t.inline
                ? ""
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, "closeText") +
                  "</button>",
              h = B
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (q ? l : "") +
                  (this._isInRange(t, r)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      a +
                      "</button>"
                    : "") +
                  (q ? "" : l) +
                  "</div>"
                : "",
              u = parseInt(this._get(t, "firstDay"), 10),
              u = isNaN(u) ? 0 : u,
              c = this._get(t, "showWeek"),
              d = this._get(t, "dayNames"),
              p = this._get(t, "dayNamesMin"),
              f = this._get(t, "monthNames"),
              m = this._get(t, "monthNamesShort"),
              g = this._get(t, "beforeShowDay"),
              v = this._get(t, "showOtherMonths"),
              y = this._get(t, "selectOtherMonths"),
              b = this._getDefaultDate(t),
              _ = "",
              x = 0;
            Q[0] > x;
            x++
          ) {
            for (C = "", this.maxRows = 4, k = 0; Q[1] > k; k++) {
              if (
                ((T = this._daylightSavingAdjust(
                  new Date(tt, Z, t.selectedDay),
                )),
                (D = " ui-corner-all"),
                (A = ""),
                $)
              ) {
                if (((A += "<div class='ui-datepicker-group"), Q[1] > 1))
                  switch (k) {
                    case 0:
                      (A += " ui-datepicker-group-first"),
                        (D = " ui-corner-" + (q ? "right" : "left"));
                      break;
                    case Q[1] - 1:
                      (A += " ui-datepicker-group-last"),
                        (D = " ui-corner-" + (q ? "left" : "right"));
                      break;
                    default:
                      (A += " ui-datepicker-group-middle"), (D = "");
                  }
                A += "'>";
              }
              for (
                A +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  D +
                  "'>" +
                  (/all|left/.test(D) && 0 === x ? (q ? o : n) : "") +
                  (/all|right/.test(D) && 0 === x ? (q ? n : o) : "") +
                  this._generateMonthYearHeader(
                    t,
                    Z,
                    tt,
                    G,
                    J,
                    x > 0 || k > 0,
                    f,
                    m,
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  S = c
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, "weekHeader") +
                      "</th>"
                    : "",
                  w = 0;
                7 > w;
                w++
              )
                S +=
                  "<th scope='col'" +
                  ((w + u + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  d[(M = (w + u) % 7)] +
                  "'>" +
                  p[M] +
                  "</span></th>";
              for (
                A += S + "</tr></thead><tbody>",
                  I = this._getDaysInMonth(tt, Z),
                  tt === t.selectedYear &&
                    Z === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, I)),
                  P = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7,
                  O = Math.ceil((P + I) / 7),
                  E = $ && this.maxRows > O ? this.maxRows : O,
                  this.maxRows = E,
                  N = this._daylightSavingAdjust(new Date(tt, Z, 1 - P)),
                  H = 0;
                E > H;
                H++
              ) {
                for (
                  A += "<tr>",
                    L = c
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, "calculateWeek")(N) +
                        "</td>"
                      : "",
                    w = 0;
                  7 > w;
                  w++
                )
                  (F = g
                    ? g.apply(t.input ? t.input[0] : null, [N])
                    : [!0, ""]),
                    (R =
                      ((z = N.getMonth() !== Z) && !y) ||
                      !F[0] ||
                      (G && G > N) ||
                      (J && N > J)),
                    (L +=
                      "<td class='" +
                      ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                      (z ? " ui-datepicker-other-month" : "") +
                      ((N.getTime() === T.getTime() &&
                        Z === t.selectedMonth &&
                        t._keyEvent) ||
                      (b.getTime() === N.getTime() &&
                        b.getTime() === T.getTime())
                        ? " " + this._dayOverClass
                        : "") +
                      (R
                        ? " " + this._unselectableClass + " ui-state-disabled"
                        : "") +
                      (z && !v
                        ? ""
                        : " " +
                          F[1] +
                          (N.getTime() === X.getTime()
                            ? " " + this._currentClass
                            : "") +
                          (N.getTime() === j.getTime()
                            ? " ui-datepicker-today"
                            : "")) +
                      "'" +
                      ((z && !v) || !F[2]
                        ? ""
                        : " title='" + F[2].replace(/'/g, "&#39;") + "'") +
                      (R
                        ? ""
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          N.getMonth() +
                          "' data-year='" +
                          N.getFullYear() +
                          "'") +
                      ">" +
                      (z && !v
                        ? "&#xa0;"
                        : R
                          ? "<span class='ui-state-default'>" +
                            N.getDate() +
                            "</span>"
                          : "<a class='ui-state-default" +
                            (N.getTime() === j.getTime()
                              ? " ui-state-highlight"
                              : "") +
                            (N.getTime() === X.getTime()
                              ? " ui-state-active"
                              : "") +
                            (z ? " ui-priority-secondary" : "") +
                            "' href='#'>" +
                            N.getDate() +
                            "</a>") +
                      "</td>"),
                    N.setDate(N.getDate() + 1),
                    (N = this._daylightSavingAdjust(N));
                A += L + "</tr>";
              }
              ++Z > 11 && ((Z = 0), tt++),
                (C += A +=
                  "</tbody></table>" +
                  ($
                    ? "</div>" +
                      (Q[0] > 0 && k === Q[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : "")
                    : ""));
            }
            _ += C;
          }
          return (_ += h), (t._keyEvent = !1), _;
        },
        _generateMonthYearHeader: function (t, e, i, n, s, o, a, r) {
          var l,
            h,
            u,
            c,
            d,
            p,
            f,
            m,
            g = this._get(t, "changeMonth"),
            v = this._get(t, "changeYear"),
            y = this._get(t, "showMonthAfterYear"),
            b = "<div class='ui-datepicker-title'>",
            _ = "";
          if (o || !g)
            _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
          else {
            for (
              l = n && n.getFullYear() === i,
                h = s && s.getFullYear() === i,
                _ +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                u = 0;
              12 > u;
              u++
            )
              (!l || u >= n.getMonth()) &&
                (!h || s.getMonth() >= u) &&
                (_ +=
                  "<option value='" +
                  u +
                  "'" +
                  (u === e ? " selected='selected'" : "") +
                  ">" +
                  r[u] +
                  "</option>");
            _ += "</select>";
          }
          if ((y || (b += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml))
            if (((t.yearshtml = ""), o || !v))
              b += "<span class='ui-datepicker-year'>" + i + "</span>";
            else {
              for (
                c = this._get(t, "yearRange").split(":"),
                  d = new Date().getFullYear(),
                  p = function (t) {
                    var e = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                        ? d + parseInt(t, 10)
                        : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                  },
                  f = p(c[0]),
                  m = Math.max(f, p(c[1] || "")),
                  f = n ? Math.max(f, n.getFullYear()) : f,
                  m = s ? Math.min(m, s.getFullYear()) : m,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                m >= f;
                f++
              )
                t.yearshtml +=
                  "<option value='" +
                  f +
                  "'" +
                  (f === i ? " selected='selected'" : "") +
                  ">" +
                  f +
                  "</option>";
              (t.yearshtml += "</select>"),
                (b += t.yearshtml),
                (t.yearshtml = null);
            }
          return (
            (b += this._get(t, "yearSuffix")),
            y && (b += (!o && g && v ? "" : "&#xa0;") + _),
            b + "</div>"
          );
        },
        _adjustInstDate: function (t, e, i) {
          var n = t.drawYear + ("Y" === i ? e : 0),
            s = t.drawMonth + ("M" === i ? e : 0),
            o =
              Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
              ("D" === i ? e : 0),
            a = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(n, s, o)),
            );
          (t.selectedDay = a.getDate()),
            (t.drawMonth = t.selectedMonth = a.getMonth()),
            (t.drawYear = t.selectedYear = a.getFullYear()),
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            n = this._getMinMaxDate(t, "max"),
            s = i && i > e ? i : e;
          return n && s > n ? n : s;
        },
        _notifyChange: function (t) {
          var e = this._get(t, "onChangeMonthYear");
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t,
            ]);
        },
        _getNumberOfMonths: function (t) {
          var e = this._get(t, "numberOfMonths");
          return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function (t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
          return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, n) {
          var s = this._getNumberOfMonths(t),
            o = this._daylightSavingAdjust(
              new Date(i, n + (0 > e ? e : s[0] * s[1]), 1),
            );
          return (
            0 > e &&
              o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
          );
        },
        _isInRange: function (t, e) {
          var i,
            n,
            s = this._getMinMaxDate(t, "min"),
            o = this._getMinMaxDate(t, "max"),
            a = null,
            r = null,
            l = this._get(t, "yearRange");
          return (
            l &&
              ((i = l.split(":")),
              (n = new Date().getFullYear()),
              (a = parseInt(i[0], 10)),
              (r = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (a += n),
              i[1].match(/[+\-].*/) && (r += n)),
            (!s || e.getTime() >= s.getTime()) &&
              (!o || e.getTime() <= o.getTime()) &&
              (!a || e.getFullYear() >= a) &&
              (!r || r >= e.getFullYear())
          );
        },
        _getFormatConfig: function (t) {
          var e = this._get(t, "shortYearCutoff");
          return {
            shortYearCutoff: (e =
              "string" != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          };
        },
        _formatDate: function (t, e, i, n) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear));
          var s = e
            ? "object" == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(n, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay),
              );
          return this.formatDate(
            this._get(t, "dateFormat"),
            s,
            this._getFormatConfig(t),
          );
        },
      }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).mousedown(t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i),
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i),
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i),
            );
      }),
      (t.datepicker = new n()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.11.4"),
      t.datepicker,
      t.widget("ui.draggable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
          addClasses: !0,
          appendTo: "parent",
          axis: !1,
          connectToSortable: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          iframeFix: !1,
          opacity: !1,
          refreshPositions: !1,
          revert: !1,
          revertDuration: 500,
          scope: "default",
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          snap: !1,
          snapMode: "both",
          snapTolerance: 20,
          stack: !1,
          zIndex: !1,
          drag: null,
          start: null,
          stop: null,
        },
        _create: function () {
          "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled &&
              this.element.addClass("ui-draggable-disabled"),
            this._setHandleClassName(),
            this._mouseInit();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "handle" === t &&
              (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function () {
          return (this.helper || this.element).is(".ui-draggable-dragging")
            ? void (this.destroyOnClear = !0)
            : (this.element.removeClass(
                "ui-draggable ui-draggable-dragging ui-draggable-disabled",
              ),
              this._removeHandleClassName(),
              void this._mouseDestroy());
        },
        _mouseCapture: function (e) {
          var i = this.options;
          return (
            this._blurActiveElement(e),
            !(
              this.helper ||
              i.disabled ||
              t(e.target).closest(".ui-resizable-handle").length > 0
            ) &&
              ((this.handle = this._getHandle(e)),
              !!this.handle &&
                (this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
                !0))
          );
        },
        _blockFrames: function (e) {
          this.iframeBlocks = this.document.find(e).map(function () {
            var e = t(this);
            return t("<div>")
              .css("position", "absolute")
              .appendTo(e.parent())
              .outerWidth(e.outerWidth())
              .outerHeight(e.outerHeight())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function (e) {
          var i = this.document[0];
          if (this.handleElement.is(e.target))
            try {
              i.activeElement &&
                "body" !== i.activeElement.nodeName.toLowerCase() &&
                t(i.activeElement).blur();
            } catch (t) {}
        },
        _mouseStart: function (e) {
          var i = this.options;
          return (
            (this.helper = this._createHelper(e)),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            (this.cssPosition = this.helper.css("position")),
            (this.scrollParent = this.helper.scrollParent(!0)),
            (this.offsetParent = this.helper.offsetParent()),
            (this.hasFixedAncestor =
              this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position");
              }).length > 0),
            (this.positionAbs = this.element.offset()),
            this._refreshOffsets(e),
            (this.originalPosition = this.position =
              this._generatePosition(e, !1)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", e)
              ? (this._clear(), !1)
              : (this._cacheHelperProportions(),
                t.ui.ddmanager &&
                  !i.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e),
                this._normalizeRightBottom(),
                this._mouseDrag(e, !0),
                t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                !0)
          );
        },
        _refreshOffsets: function (t) {
          (this.offset = {
            top: this.positionAbs.top - this.margins.top,
            left: this.positionAbs.left - this.margins.left,
            scroll: !1,
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
            (this.offset.click = {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            });
        },
        _mouseDrag: function (e, i) {
          if (
            (this.hasFixedAncestor &&
              (this.offset.parent = this._getParentOffset()),
            (this.position = this._generatePosition(e, !0)),
            (this.positionAbs = this._convertPositionTo("absolute")),
            !i)
          ) {
            var n = this._uiHash();
            if (!1 === this._trigger("drag", e, n))
              return this._mouseUp({}), !1;
            this.position = n.position;
          }
          return (
            (this.helper[0].style.left = this.position.left + "px"),
            (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
          );
        },
        _mouseStop: function (e) {
          var i = this,
            n = !1;
          return (
            t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              (n = t.ui.ddmanager.drop(this, e)),
            this.dropped && ((n = this.dropped), (this.dropped = !1)),
            ("invalid" === this.options.revert && !n) ||
            ("valid" === this.options.revert && n) ||
            !0 === this.options.revert ||
            (t.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, n))
              ? t(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    !1 !== i._trigger("stop", e) && i._clear();
                  },
                )
              : !1 !== this._trigger("stop", e) && this._clear(),
            !1
          );
        },
        _mouseUp: function (e) {
          return (
            this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.focus(),
            t.ui.mouse.prototype._mouseUp.call(this, e)
          );
        },
        cancel: function () {
          return (
            this.helper.is(".ui-draggable-dragging")
              ? this._mouseUp({})
              : this._clear(),
            this
          );
        },
        _getHandle: function (e) {
          return (
            !this.options.handle ||
            !!t(e.target).closest(this.element.find(this.options.handle)).length
          );
        },
        _setHandleClassName: function () {
          (this.handleElement = this.options.handle
            ? this.element.find(this.options.handle)
            : this.element),
            this.handleElement.addClass("ui-draggable-handle");
        },
        _removeHandleClassName: function () {
          this.handleElement.removeClass("ui-draggable-handle");
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper),
            s = n
              ? t(i.helper.apply(this.element[0], [e]))
              : "clone" === i.helper
                ? this.element.clone().removeAttr("id")
                : this.element;
          return (
            s.parents("body").length ||
              s.appendTo(
                "parent" === i.appendTo
                  ? this.element[0].parentNode
                  : i.appendTo,
              ),
            n && s[0] === this.element[0] && this._setPositionRelative(),
            s[0] === this.element[0] ||
              /(fixed|absolute)/.test(s.css("position")) ||
              s.css("position", "absolute"),
            s
          );
        },
        _setPositionRelative: function () {
          /^(?:r|a|f)/.test(this.element.css("position")) ||
            (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function (t) {
          return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function () {
          var e = this.offsetParent.offset(),
            i = this.document[0];
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== i &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
          var t = this.element.position(),
            e = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollTop()),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollLeft()),
          };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options,
            o = this.document[0];
          return (
            (this.relativeContainer = null),
            s.containment
              ? "window" === s.containment
                ? void (this.containment = [
                    t(window).scrollLeft() -
                      this.offset.relative.left -
                      this.offset.parent.left,
                    t(window).scrollTop() -
                      this.offset.relative.top -
                      this.offset.parent.top,
                    t(window).scrollLeft() +
                      t(window).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    t(window).scrollTop() +
                      (t(window).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : "document" === s.containment
                  ? void (this.containment = [
                      0,
                      0,
                      t(o).width() -
                        this.helperProportions.width -
                        this.margins.left,
                      (t(o).height() || o.body.parentNode.scrollHeight) -
                        this.helperProportions.height -
                        this.margins.top,
                    ])
                  : s.containment.constructor === Array
                    ? void (this.containment = s.containment)
                    : ("parent" === s.containment &&
                        (s.containment = this.helper[0].parentNode),
                      void (
                        (n = (i = t(s.containment))[0]) &&
                        ((e = /(scroll|auto)/.test(i.css("overflow"))),
                        (this.containment = [
                          (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                            (parseInt(i.css("paddingLeft"), 10) || 0),
                          (parseInt(i.css("borderTopWidth"), 10) || 0) +
                            (parseInt(i.css("paddingTop"), 10) || 0),
                          (e
                            ? Math.max(n.scrollWidth, n.offsetWidth)
                            : n.offsetWidth) -
                            (parseInt(i.css("borderRightWidth"), 10) || 0) -
                            (parseInt(i.css("paddingRight"), 10) || 0) -
                            this.helperProportions.width -
                            this.margins.left -
                            this.margins.right,
                          (e
                            ? Math.max(n.scrollHeight, n.offsetHeight)
                            : n.offsetHeight) -
                            (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                            (parseInt(i.css("paddingBottom"), 10) || 0) -
                            this.helperProportions.height -
                            this.margins.top -
                            this.margins.bottom,
                        ]),
                        (this.relativeContainer = i))
                      ))
              : void (this.containment = null)
          );
        },
        _convertPositionTo: function (t, e) {
          e || (e = this.position);
          var i = "absolute" === t ? 1 : -1,
            n = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              e.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : n
                  ? 0
                  : this.offset.scroll.top) *
                i,
            left:
              e.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : n
                  ? 0
                  : this.offset.scroll.left) *
                i,
          };
        },
        _generatePosition: function (t, e) {
          var i,
            n,
            s,
            o,
            a = this.options,
            r = this._isRootNode(this.scrollParent[0]),
            l = t.pageX,
            h = t.pageY;
          return (
            (r && this.offset.scroll) ||
              (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft(),
              }),
            e &&
              (this.containment &&
                (this.relativeContainer
                  ? ((n = this.relativeContainer.offset()),
                    (i = [
                      this.containment[0] + n.left,
                      this.containment[1] + n.top,
                      this.containment[2] + n.left,
                      this.containment[3] + n.top,
                    ]))
                  : (i = this.containment),
                t.pageX - this.offset.click.left < i[0] &&
                  (l = i[0] + this.offset.click.left),
                t.pageY - this.offset.click.top < i[1] &&
                  (h = i[1] + this.offset.click.top),
                t.pageX - this.offset.click.left > i[2] &&
                  (l = i[2] + this.offset.click.left),
                t.pageY - this.offset.click.top > i[3] &&
                  (h = i[3] + this.offset.click.top)),
              a.grid &&
                ((s = a.grid[1]
                  ? this.originalPageY +
                    Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1]
                  : this.originalPageY),
                (h = i
                  ? s - this.offset.click.top >= i[1] ||
                    s - this.offset.click.top > i[3]
                    ? s
                    : s - this.offset.click.top >= i[1]
                      ? s - a.grid[1]
                      : s + a.grid[1]
                  : s),
                (o = a.grid[0]
                  ? this.originalPageX +
                    Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0]
                  : this.originalPageX),
                (l = i
                  ? o - this.offset.click.left >= i[0] ||
                    o - this.offset.click.left > i[2]
                    ? o
                    : o - this.offset.click.left >= i[0]
                      ? o - a.grid[0]
                      : o + a.grid[0]
                  : o)),
              "y" === a.axis && (l = this.originalPageX),
              "x" === a.axis && (h = this.originalPageY)),
            {
              top:
                h -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.top
                  : r
                    ? 0
                    : this.offset.scroll.top),
              left:
                l -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.left
                  : r
                    ? 0
                    : this.offset.scroll.left),
            }
          );
        },
        _clear: function () {
          this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] ||
              this.cancelHelperRemoval ||
              this.helper.remove(),
            (this.helper = null),
            (this.cancelHelperRemoval = !1),
            this.destroyOnClear && this.destroy();
        },
        _normalizeRightBottom: function () {
          "y" !== this.options.axis &&
            "auto" !== this.helper.css("right") &&
            (this.helper.width(this.helper.width()),
            this.helper.css("right", "auto")),
            "x" !== this.options.axis &&
              "auto" !== this.helper.css("bottom") &&
              (this.helper.height(this.helper.height()),
              this.helper.css("bottom", "auto"));
        },
        _trigger: function (e, i, n) {
          return (
            (n = n || this._uiHash()),
            t.ui.plugin.call(this, e, [i, n, this], !0),
            /^(drag|start|stop)/.test(e) &&
              ((this.positionAbs = this._convertPositionTo("absolute")),
              (n.offset = this.positionAbs)),
            t.Widget.prototype._trigger.call(this, e, i, n)
          );
        },
        plugins: {},
        _uiHash: function () {
          return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs,
          };
        },
      }),
      t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.sortables = []),
            t(n.options.connectToSortable).each(function () {
              var i = t(this).sortable("instance");
              i &&
                !i.options.disabled &&
                (n.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, s));
            });
        },
        stop: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.cancelHelperRemoval = !1),
            t.each(n.sortables, function () {
              var t = this;
              t.isOver
                ? ((t.isOver = 0),
                  (n.cancelHelperRemoval = !0),
                  (t.cancelHelperRemoval = !1),
                  (t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left"),
                  }),
                  t._mouseStop(e),
                  (t.options.helper = t.options._helper))
                : ((t.cancelHelperRemoval = !0),
                  t._trigger("deactivate", e, s));
            });
        },
        drag: function (e, i, n) {
          t.each(n.sortables, function () {
            var s = !1,
              o = this;
            (o.positionAbs = n.positionAbs),
              (o.helperProportions = n.helperProportions),
              (o.offset.click = n.offset.click),
              o._intersectsWith(o.containerCache) &&
                ((s = !0),
                t.each(n.sortables, function () {
                  return (
                    (this.positionAbs = n.positionAbs),
                    (this.helperProportions = n.helperProportions),
                    (this.offset.click = n.offset.click),
                    this !== o &&
                      this._intersectsWith(this.containerCache) &&
                      t.contains(o.element[0], this.element[0]) &&
                      (s = !1),
                    s
                  );
                })),
              s
                ? (o.isOver ||
                    ((o.isOver = 1),
                    (n._parent = i.helper.parent()),
                    (o.currentItem = i.helper
                      .appendTo(o.element)
                      .data("ui-sortable-item", !0)),
                    (o.options._helper = o.options.helper),
                    (o.options.helper = function () {
                      return i.helper[0];
                    }),
                    (e.target = o.currentItem[0]),
                    o._mouseCapture(e, !0),
                    o._mouseStart(e, !0, !0),
                    (o.offset.click.top = n.offset.click.top),
                    (o.offset.click.left = n.offset.click.left),
                    (o.offset.parent.left -=
                      n.offset.parent.left - o.offset.parent.left),
                    (o.offset.parent.top -=
                      n.offset.parent.top - o.offset.parent.top),
                    n._trigger("toSortable", e),
                    (n.dropped = o.element),
                    t.each(n.sortables, function () {
                      this.refreshPositions();
                    }),
                    (n.currentItem = n.element),
                    (o.fromOutside = n)),
                  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                : o.isOver &&
                  ((o.isOver = 0),
                  (o.cancelHelperRemoval = !0),
                  (o.options._revert = o.options.revert),
                  (o.options.revert = !1),
                  o._trigger("out", e, o._uiHash(o)),
                  o._mouseStop(e, !0),
                  (o.options.revert = o.options._revert),
                  (o.options.helper = o.options._helper),
                  o.placeholder && o.placeholder.remove(),
                  i.helper.appendTo(n._parent),
                  n._refreshOffsets(e),
                  (i.position = n._generatePosition(e, !0)),
                  n._trigger("fromSortable", e),
                  (n.dropped = !1),
                  t.each(n.sortables, function () {
                    this.refreshPositions();
                  }));
          });
        },
      }),
      t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
          var s = t("body"),
            o = n.options;
          s.css("cursor") && (o._cursor = s.css("cursor")),
            s.css("cursor", o.cursor);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._cursor && t("body").css("cursor", s._cursor);
        },
      }),
      t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("opacity") && (o._opacity = s.css("opacity")),
            s.css("opacity", o.opacity);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._opacity && t(i.helper).css("opacity", s._opacity);
        },
      }),
      t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
          i.scrollParentNotHidden ||
            (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] &&
              "HTML" !== i.scrollParentNotHidden[0].tagName &&
              (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function (e, i, n) {
          var s = n.options,
            o = !1,
            a = n.scrollParentNotHidden[0],
            r = n.document[0];
          a !== r && "HTML" !== a.tagName
            ? ((s.axis && "x" === s.axis) ||
                (n.overflowOffset.top + a.offsetHeight - e.pageY <
                s.scrollSensitivity
                  ? (a.scrollTop = o = a.scrollTop + s.scrollSpeed)
                  : e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
                    (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (n.overflowOffset.left + a.offsetWidth - e.pageX <
                s.scrollSensitivity
                  ? (a.scrollLeft = o = a.scrollLeft + s.scrollSpeed)
                  : e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
                    (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (e.pageY - t(r).scrollTop() < s.scrollSensitivity
                  ? (o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed))
                  : t(window).height() - (e.pageY - t(r).scrollTop()) <
                      s.scrollSensitivity &&
                    (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))),
              (s.axis && "y" === s.axis) ||
                (e.pageX - t(r).scrollLeft() < s.scrollSensitivity
                  ? (o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed))
                  : t(window).width() - (e.pageX - t(r).scrollLeft()) <
                      s.scrollSensitivity &&
                    (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))),
            !1 !== o &&
              t.ui.ddmanager &&
              !s.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(n, e);
        },
      }),
      t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
          var s = n.options;
          (n.snapElements = []),
            t(
              s.snap.constructor !== String
                ? s.snap.items || ":data(ui-draggable)"
                : s.snap,
            ).each(function () {
              var e = t(this),
                i = e.offset();
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: i.top,
                  left: i.left,
                });
            });
        },
        drag: function (e, i, n) {
          var s,
            o,
            a,
            r,
            l,
            h,
            u,
            c,
            d,
            p,
            f = n.options,
            m = f.snapTolerance,
            g = i.offset.left,
            v = g + n.helperProportions.width,
            y = i.offset.top,
            b = y + n.helperProportions.height;
          for (d = n.snapElements.length - 1; d >= 0; d--)
            (h =
              (l = n.snapElements[d].left - n.margins.left) +
              n.snapElements[d].width),
              (c =
                (u = n.snapElements[d].top - n.margins.top) +
                n.snapElements[d].height),
              l - m > v ||
              g > h + m ||
              u - m > b ||
              y > c + m ||
              !t.contains(
                n.snapElements[d].item.ownerDocument,
                n.snapElements[d].item,
              )
                ? (n.snapElements[d].snapping &&
                    n.options.snap.release &&
                    n.options.snap.release.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      }),
                    ),
                  (n.snapElements[d].snapping = !1))
                : ("inner" !== f.snapMode &&
                    ((s = m >= Math.abs(u - b)),
                    (o = m >= Math.abs(c - y)),
                    (a = m >= Math.abs(l - v)),
                    (r = m >= Math.abs(h - g)),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u - n.helperProportions.height,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: c,
                        left: 0,
                      }).top),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width,
                      }).left),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: h,
                      }).left)),
                  (p = s || o || a || r),
                  "outer" !== f.snapMode &&
                    ((s = m >= Math.abs(u - y)),
                    (o = m >= Math.abs(c - b)),
                    (a = m >= Math.abs(l - g)),
                    (r = m >= Math.abs(h - v)),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: c - n.helperProportions.height,
                        left: 0,
                      }).top),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l,
                      }).left),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: h - n.helperProportions.width,
                      }).left)),
                  !n.snapElements[d].snapping &&
                    (s || o || a || r || p) &&
                    n.options.snap.snap &&
                    n.options.snap.snap.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      }),
                    ),
                  (n.snapElements[d].snapping = s || o || a || r || p));
        },
      }),
      t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
          var s,
            o = n.options,
            a = t.makeArray(t(o.stack)).sort(function (e, i) {
              return (
                (parseInt(t(e).css("zIndex"), 10) || 0) -
                (parseInt(t(i).css("zIndex"), 10) || 0)
              );
            });
          a.length &&
            ((s = parseInt(t(a[0]).css("zIndex"), 10) || 0),
            t(a).each(function (e) {
              t(this).css("zIndex", s + e);
            }),
            this.css("zIndex", s + a.length));
        },
      }),
      t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("zIndex") && (o._zIndex = s.css("zIndex")),
            s.css("zIndex", o.zIndex);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        },
      }),
      t.ui.draggable,
      t.widget("ui.resizable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
          alsoResize: !1,
          animate: !1,
          animateDuration: "slow",
          animateEasing: "swing",
          aspectRatio: !1,
          autoHide: !1,
          containment: !1,
          ghost: !1,
          grid: !1,
          handles: "e,s,se",
          helper: !1,
          maxHeight: null,
          maxWidth: null,
          minHeight: 10,
          minWidth: 10,
          zIndex: 90,
          resize: null,
          start: null,
          stop: null,
        },
        _num: function (t) {
          return parseInt(t, 10) || 0;
        },
        _isNumber: function (t) {
          return !isNaN(parseInt(t, 10));
        },
        _hasScroll: function (e, i) {
          if ("hidden" === t(e).css("overflow")) return !1;
          var n = i && "left" === i ? "scrollLeft" : "scrollTop",
            s = !1;
          return e[n] > 0 || ((e[n] = 1), (s = e[n] > 0), (e[n] = 0), s);
        },
        _create: function () {
          var e,
            i,
            n,
            s,
            o = this,
            a = this.options;
          if (
            (this.element.addClass("ui-resizable"),
            t.extend(this, {
              _aspectRatio: !!a.aspectRatio,
              aspectRatio: a.aspectRatio,
              originalElement: this.element,
              _proportionallyResizeElements: [],
              _helper:
                a.helper || a.ghost || a.animate
                  ? a.helper || "ui-resizable-helper"
                  : null,
            }),
            this.element[0].nodeName.match(
              /^(canvas|textarea|input|select|button|img)$/i,
            ) &&
              (this.element.wrap(
                t(
                  "<div class='ui-wrapper' style='overflow: hidden;'></div>",
                ).css({
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                }),
              ),
              (this.element = this.element
                .parent()
                .data("ui-resizable", this.element.resizable("instance"))),
              (this.elementIsWrapper = !0),
              this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
              }),
              this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
              }),
              (this.originalResizeStyle = this.originalElement.css("resize")),
              this.originalElement.css("resize", "none"),
              this._proportionallyResizeElements.push(
                this.originalElement.css({
                  position: "static",
                  zoom: 1,
                  display: "block",
                }),
              ),
              this.originalElement.css({
                margin: this.originalElement.css("margin"),
              }),
              this._proportionallyResize()),
            (this.handles =
              a.handles ||
              (t(".ui-resizable-handle", this.element).length
                ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw",
                  }
                : "e,s,se")),
            (this._handles = t()),
            this.handles.constructor === String)
          )
            for (
              "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                e = this.handles.split(","),
                this.handles = {},
                i = 0;
              e.length > i;
              i++
            )
              (n = t.trim(e[i])),
                (s = t(
                  "<div class='ui-resizable-handle " +
                    ("ui-resizable-" + n) +
                    "'></div>",
                )).css({ zIndex: a.zIndex }),
                "se" === n &&
                  s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                (this.handles[n] = ".ui-resizable-" + n),
                this.element.append(s);
          (this._renderAxis = function (e) {
            var i, n, s, a;
            for (i in ((e = e || this.element), this.handles))
              this.handles[i].constructor === String
                ? (this.handles[i] = this.element
                    .children(this.handles[i])
                    .first()
                    .show())
                : (this.handles[i].jquery || this.handles[i].nodeType) &&
                  ((this.handles[i] = t(this.handles[i])),
                  this._on(this.handles[i], { mousedown: o._mouseDown })),
                this.elementIsWrapper &&
                  this.originalElement[0].nodeName.match(
                    /^(textarea|input|select|button)$/i,
                  ) &&
                  ((n = t(this.handles[i], this.element)),
                  (a = /sw|ne|nw|se|n|s/.test(i)
                    ? n.outerHeight()
                    : n.outerWidth()),
                  (s = [
                    "padding",
                    /ne|nw|n/.test(i)
                      ? "Top"
                      : /se|sw|s/.test(i)
                        ? "Bottom"
                        : /^e$/.test(i)
                          ? "Right"
                          : "Left",
                  ].join("")),
                  e.css(s, a),
                  this._proportionallyResize()),
                (this._handles = this._handles.add(this.handles[i]));
          }),
            this._renderAxis(this.element),
            (this._handles = this._handles.add(
              this.element.find(".ui-resizable-handle"),
            )),
            this._handles.disableSelection(),
            this._handles.mouseover(function () {
              o.resizing ||
                (this.className &&
                  (s = this.className.match(
                    /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i,
                  )),
                (o.axis = s && s[1] ? s[1] : "se"));
            }),
            a.autoHide &&
              (this._handles.hide(),
              t(this.element)
                .addClass("ui-resizable-autohide")
                .mouseenter(function () {
                  a.disabled ||
                    (t(this).removeClass("ui-resizable-autohide"),
                    o._handles.show());
                })
                .mouseleave(function () {
                  a.disabled ||
                    o.resizing ||
                    (t(this).addClass("ui-resizable-autohide"),
                    o._handles.hide());
                })),
            this._mouseInit();
        },
        _destroy: function () {
          this._mouseDestroy();
          var e,
            i = function (e) {
              t(e)
                .removeClass(
                  "ui-resizable ui-resizable-disabled ui-resizable-resizing",
                )
                .removeData("resizable")
                .removeData("ui-resizable")
                .unbind(".resizable")
                .find(".ui-resizable-handle")
                .remove();
            };
          return (
            this.elementIsWrapper &&
              (i(this.element),
              (e = this.element),
              this.originalElement
                .css({
                  position: e.css("position"),
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: e.css("top"),
                  left: e.css("left"),
                })
                .insertAfter(e),
              e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
          );
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s = !1;
          for (i in this.handles)
            ((n = t(this.handles[i])[0]) === e.target ||
              t.contains(n, e.target)) &&
              (s = !0);
          return !this.options.disabled && s;
        },
        _mouseStart: function (e) {
          var i,
            n,
            s,
            o = this.options,
            a = this.element;
          return (
            (this.resizing = !0),
            this._renderProxy(),
            (i = this._num(this.helper.css("left"))),
            (n = this._num(this.helper.css("top"))),
            o.containment &&
              ((i += t(o.containment).scrollLeft() || 0),
              (n += t(o.containment).scrollTop() || 0)),
            (this.offset = this.helper.offset()),
            (this.position = { left: i, top: n }),
            (this.size = this._helper
              ? { width: this.helper.width(), height: this.helper.height() }
              : { width: a.width(), height: a.height() }),
            (this.originalSize = this._helper
              ? { width: a.outerWidth(), height: a.outerHeight() }
              : { width: a.width(), height: a.height() }),
            (this.sizeDiff = {
              width: a.outerWidth() - a.width(),
              height: a.outerHeight() - a.height(),
            }),
            (this.originalPosition = { left: i, top: n }),
            (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
            (this.aspectRatio =
              "number" == typeof o.aspectRatio
                ? o.aspectRatio
                : this.originalSize.width / this.originalSize.height || 1),
            (s = t(".ui-resizable-" + this.axis).css("cursor")),
            t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
            a.addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s = this.originalMousePosition,
            o = this.axis,
            a = e.pageX - s.left || 0,
            r = e.pageY - s.top || 0,
            l = this._change[o];
          return (
            this._updatePrevProperties(),
            !!l &&
              ((i = l.apply(this, [e, a, r])),
              this._updateVirtualBoundaries(e.shiftKey),
              (this._aspectRatio || e.shiftKey) &&
                (i = this._updateRatio(i, e)),
              (i = this._respectSize(i, e)),
              this._updateCache(i),
              this._propagate("resize", e),
              (n = this._applyChanges()),
              !this._helper &&
                this._proportionallyResizeElements.length &&
                this._proportionallyResize(),
              t.isEmptyObject(n) ||
                (this._updatePrevProperties(),
                this._trigger("resize", e, this.ui()),
                this._applyChanges()),
              !1)
          );
        },
        _mouseStop: function (e) {
          this.resizing = !1;
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            h = this.options,
            u = this;
          return (
            this._helper &&
              ((s =
                (n =
                  (i = this._proportionallyResizeElements).length &&
                  /textarea/i.test(i[0].nodeName)) &&
                this._hasScroll(i[0], "left")
                  ? 0
                  : u.sizeDiff.height),
              (o = n ? 0 : u.sizeDiff.width),
              (a = {
                width: u.helper.width() - o,
                height: u.helper.height() - s,
              }),
              (r =
                parseInt(u.element.css("left"), 10) +
                  (u.position.left - u.originalPosition.left) || null),
              (l =
                parseInt(u.element.css("top"), 10) +
                  (u.position.top - u.originalPosition.top) || null),
              h.animate || this.element.css(t.extend(a, { top: l, left: r })),
              u.helper.height(u.size.height),
              u.helper.width(u.size.width),
              this._helper && !h.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
          );
        },
        _updatePrevProperties: function () {
          (this.prevPosition = {
            top: this.position.top,
            left: this.position.left,
          }),
            (this.prevSize = {
              width: this.size.width,
              height: this.size.height,
            });
        },
        _applyChanges: function () {
          var t = {};
          return (
            this.position.top !== this.prevPosition.top &&
              (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left &&
              (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width &&
              (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height &&
              (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
          );
        },
        _updateVirtualBoundaries: function (t) {
          var e,
            i,
            n,
            s,
            o,
            a = this.options;
          (o = {
            minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
            maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
            minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
            maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
          }),
            (this._aspectRatio || t) &&
              ((e = o.minHeight * this.aspectRatio),
              (n = o.minWidth / this.aspectRatio),
              (i = o.maxHeight * this.aspectRatio),
              (s = o.maxWidth / this.aspectRatio),
              e > o.minWidth && (o.minWidth = e),
              n > o.minHeight && (o.minHeight = n),
              o.maxWidth > i && (o.maxWidth = i),
              o.maxHeight > s && (o.maxHeight = s)),
            (this._vBoundaries = o);
        },
        _updateCache: function (t) {
          (this.offset = this.helper.offset()),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function (t) {
          var e = this.position,
            i = this.size,
            n = this.axis;
          return (
            this._isNumber(t.height)
              ? (t.width = t.height * this.aspectRatio)
              : this._isNumber(t.width) &&
                (t.height = t.width / this.aspectRatio),
            "sw" === n &&
              ((t.left = e.left + (i.width - t.width)), (t.top = null)),
            "nw" === n &&
              ((t.top = e.top + (i.height - t.height)),
              (t.left = e.left + (i.width - t.width))),
            t
          );
        },
        _respectSize: function (t) {
          var e = this._vBoundaries,
            i = this.axis,
            n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
            s =
              this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
            o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
            a =
              this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
            r = this.originalPosition.left + this.originalSize.width,
            l = this.position.top + this.size.height,
            h = /sw|nw|w/.test(i),
            u = /nw|ne|n/.test(i);
          return (
            o && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            n && (t.width = e.maxWidth),
            s && (t.height = e.maxHeight),
            o && h && (t.left = r - e.minWidth),
            n && h && (t.left = r - e.maxWidth),
            a && u && (t.top = l - e.minHeight),
            s && u && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top
              ? t.width || t.height || t.top || !t.left || (t.left = null)
              : (t.top = null),
            t
          );
        },
        _getPaddingPlusBorderDimensions: function (t) {
          for (
            var e = 0,
              i = [],
              n = [
                t.css("borderTopWidth"),
                t.css("borderRightWidth"),
                t.css("borderBottomWidth"),
                t.css("borderLeftWidth"),
              ],
              s = [
                t.css("paddingTop"),
                t.css("paddingRight"),
                t.css("paddingBottom"),
                t.css("paddingLeft"),
              ];
            4 > e;
            e++
          )
            (i[e] = parseInt(n[e], 10) || 0), (i[e] += parseInt(s[e], 10) || 0);
          return { height: i[0] + i[2], width: i[1] + i[3] };
        },
        _proportionallyResize: function () {
          if (this._proportionallyResizeElements.length)
            for (
              var t, e = 0, i = this.helper || this.element;
              this._proportionallyResizeElements.length > e;
              e++
            )
              (t = this._proportionallyResizeElements[e]),
                this.outerDimensions ||
                  (this.outerDimensions =
                    this._getPaddingPlusBorderDimensions(t)),
                t.css({
                  height: i.height() - this.outerDimensions.height || 0,
                  width: i.width() - this.outerDimensions.width || 0,
                });
        },
        _renderProxy: function () {
          var e = this.element,
            i = this.options;
          (this.elementOffset = e.offset()),
            this._helper
              ? ((this.helper =
                  this.helper || t("<div style='overflow:hidden;'></div>")),
                this.helper
                  .addClass(this._helper)
                  .css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex,
                  }),
                this.helper.appendTo("body").disableSelection())
              : (this.helper = this.element);
        },
        _change: {
          e: function (t, e) {
            return { width: this.originalSize.width + e };
          },
          w: function (t, e) {
            var i = this.originalSize;
            return { left: this.originalPosition.left + e, width: i.width - e };
          },
          n: function (t, e, i) {
            var n = this.originalSize;
            return { top: this.originalPosition.top + i, height: n.height - i };
          },
          s: function (t, e, i) {
            return { height: this.originalSize.height + i };
          },
          se: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.e.apply(this, [e, i, n]),
            );
          },
          sw: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.w.apply(this, [e, i, n]),
            );
          },
          ne: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.e.apply(this, [e, i, n]),
            );
          },
          nw: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.w.apply(this, [e, i, n]),
            );
          },
        },
        _propagate: function (e, i) {
          t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function () {
          return {
            originalElement: this.originalElement,
            element: this.element,
            helper: this.helper,
            position: this.position,
            size: this.size,
            originalSize: this.originalSize,
            originalPosition: this.originalPosition,
          };
        },
      }),
      t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = t(this).resizable("instance"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            r = o ? 0 : i.sizeDiff.width,
            l = { width: i.size.width - r, height: i.size.height - a },
            h =
              parseInt(i.element.css("left"), 10) +
                (i.position.left - i.originalPosition.left) || null,
            u =
              parseInt(i.element.css("top"), 10) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(l, u && h ? { top: u, left: h } : {}), {
            duration: n.animateDuration,
            easing: n.animateEasing,
            step: function () {
              var n = {
                width: parseInt(i.element.css("width"), 10),
                height: parseInt(i.element.css("height"), 10),
                top: parseInt(i.element.css("top"), 10),
                left: parseInt(i.element.css("left"), 10),
              };
              s &&
                s.length &&
                t(s[0]).css({ width: n.width, height: n.height }),
                i._updateCache(n),
                i._propagate("resize", e);
            },
          });
        },
      }),
      t.ui.plugin.add("resizable", "containment", {
        start: function () {
          var e,
            i,
            n,
            s,
            o,
            a,
            r,
            l = t(this).resizable("instance"),
            h = l.options,
            u = l.element,
            c = h.containment,
            d =
              c instanceof t
                ? c.get(0)
                : /parent/.test(c)
                  ? u.parent().get(0)
                  : c;
          d &&
            ((l.containerElement = t(d)),
            /document/.test(c) || c === document
              ? ((l.containerOffset = { left: 0, top: 0 }),
                (l.containerPosition = { left: 0, top: 0 }),
                (l.parentData = {
                  element: t(document),
                  left: 0,
                  top: 0,
                  width: t(document).width(),
                  height:
                    t(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((e = t(d)),
                (i = []),
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                  i[t] = l._num(e.css("padding" + n));
                }),
                (l.containerOffset = e.offset()),
                (l.containerPosition = e.position()),
                (l.containerSize = {
                  height: e.innerHeight() - i[3],
                  width: e.innerWidth() - i[1],
                }),
                (n = l.containerOffset),
                (s = l.containerSize.height),
                (o = l.containerSize.width),
                (a = l._hasScroll(d, "left") ? d.scrollWidth : o),
                (r = l._hasScroll(d) ? d.scrollHeight : s),
                (l.parentData = {
                  element: d,
                  left: n.left,
                  top: n.top,
                  width: a,
                  height: r,
                })));
        },
        resize: function (e) {
          var i,
            n,
            s,
            o,
            a = t(this).resizable("instance"),
            r = a.options,
            l = a.containerOffset,
            h = a.position,
            u = a._aspectRatio || e.shiftKey,
            c = { top: 0, left: 0 },
            d = a.containerElement,
            p = !0;
          d[0] !== document && /static/.test(d.css("position")) && (c = l),
            h.left < (a._helper ? l.left : 0) &&
              ((a.size.width =
                a.size.width +
                (a._helper
                  ? a.position.left - l.left
                  : a.position.left - c.left)),
              u && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)),
              (a.position.left = r.helper ? l.left : 0)),
            h.top < (a._helper ? l.top : 0) &&
              ((a.size.height =
                a.size.height +
                (a._helper ? a.position.top - l.top : a.position.top)),
              u && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)),
              (a.position.top = a._helper ? l.top : 0)),
            (s = a.containerElement.get(0) === a.element.parent().get(0)),
            (o = /relative|absolute/.test(a.containerElement.css("position"))),
            s && o
              ? ((a.offset.left = a.parentData.left + a.position.left),
                (a.offset.top = a.parentData.top + a.position.top))
              : ((a.offset.left = a.element.offset().left),
                (a.offset.top = a.element.offset().top)),
            (i = Math.abs(
              a.sizeDiff.width +
                (a._helper ? a.offset.left - c.left : a.offset.left - l.left),
            )),
            (n = Math.abs(
              a.sizeDiff.height +
                (a._helper ? a.offset.top - c.top : a.offset.top - l.top),
            )),
            i + a.size.width >= a.parentData.width &&
              ((a.size.width = a.parentData.width - i),
              u && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
            n + a.size.height >= a.parentData.height &&
              ((a.size.height = a.parentData.height - n),
              u && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
            p ||
              ((a.position.left = a.prevPosition.left),
              (a.position.top = a.prevPosition.top),
              (a.size.width = a.prevSize.width),
              (a.size.height = a.prevSize.height));
        },
        stop: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.containerOffset,
            s = e.containerPosition,
            o = e.containerElement,
            a = t(e.helper),
            r = a.offset(),
            l = a.outerWidth() - e.sizeDiff.width,
            h = a.outerHeight() - e.sizeDiff.height;
          e._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            t(this).css({
              left: r.left - s.left - n.left,
              width: l,
              height: h,
            }),
            e._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: h,
              });
        },
      }),
      t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var e = t(this).resizable("instance").options;
          t(e.alsoResize).each(function () {
            var e = t(this);
            e.data("ui-resizable-alsoresize", {
              width: parseInt(e.width(), 10),
              height: parseInt(e.height(), 10),
              left: parseInt(e.css("left"), 10),
              top: parseInt(e.css("top"), 10),
            });
          });
        },
        resize: function (e, i) {
          var n = t(this).resizable("instance"),
            s = n.options,
            o = n.originalSize,
            a = n.originalPosition,
            r = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - a.top || 0,
              left: n.position.left - a.left || 0,
            };
          t(s.alsoResize).each(function () {
            var e = t(this),
              n = t(this).data("ui-resizable-alsoresize"),
              s = {},
              o = e.parents(i.originalElement[0]).length
                ? ["width", "height"]
                : ["width", "height", "top", "left"];
            t.each(o, function (t, e) {
              var i = (n[e] || 0) + (r[e] || 0);
              i && i >= 0 && (s[e] = i || null);
            }),
              e.css(s);
          });
        },
        stop: function () {
          t(this).removeData("resizable-alsoresize");
        },
      }),
      t.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.size;
          (e.ghost = e.originalElement.clone()),
            e.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass("string" == typeof i.ghost ? i.ghost : ""),
            e.ghost.appendTo(e.helper);
        },
        resize: function () {
          var e = t(this).resizable("instance");
          e.ghost &&
            e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width,
            });
        },
        stop: function () {
          var e = t(this).resizable("instance");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        },
      }),
      t.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var e,
            i = t(this).resizable("instance"),
            n = i.options,
            s = i.size,
            o = i.originalSize,
            a = i.originalPosition,
            r = i.axis,
            l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
            h = l[0] || 1,
            u = l[1] || 1,
            c = Math.round((s.width - o.width) / h) * h,
            d = Math.round((s.height - o.height) / u) * u,
            p = o.width + c,
            f = o.height + d,
            m = n.maxWidth && p > n.maxWidth,
            g = n.maxHeight && f > n.maxHeight,
            v = n.minWidth && n.minWidth > p,
            y = n.minHeight && n.minHeight > f;
          (n.grid = l),
            v && (p += h),
            y && (f += u),
            m && (p -= h),
            g && (f -= u),
            /^(se|s|e)$/.test(r)
              ? ((i.size.width = p), (i.size.height = f))
              : /^(ne)$/.test(r)
                ? ((i.size.width = p),
                  (i.size.height = f),
                  (i.position.top = a.top - d))
                : /^(sw)$/.test(r)
                  ? ((i.size.width = p),
                    (i.size.height = f),
                    (i.position.left = a.left - c))
                  : ((0 >= f - u || 0 >= p - h) &&
                      (e = i._getPaddingPlusBorderDimensions(this)),
                    f - u > 0
                      ? ((i.size.height = f), (i.position.top = a.top - d))
                      : ((f = u - e.height),
                        (i.size.height = f),
                        (i.position.top = a.top + o.height - f)),
                    p - h > 0
                      ? ((i.size.width = p), (i.position.left = a.left - c))
                      : ((p = h - e.width),
                        (i.size.width = p),
                        (i.position.left = a.left + o.width - p)));
        },
      }),
      t.ui.resizable,
      t.widget("ui.dialog", {
        version: "1.11.4",
        options: {
          appendTo: "body",
          autoOpen: !0,
          buttons: [],
          closeOnEscape: !0,
          closeText: "Close",
          dialogClass: "",
          draggable: !0,
          hide: null,
          height: "auto",
          maxHeight: null,
          maxWidth: null,
          minHeight: 150,
          minWidth: 150,
          modal: !1,
          position: {
            my: "center",
            at: "center",
            of: window,
            collision: "fit",
            using: function (e) {
              var i = t(this).css(e).offset().top;
              0 > i && t(this).css("top", e.top - i);
            },
          },
          resizable: !0,
          show: null,
          title: null,
          width: 300,
          beforeClose: null,
          close: null,
          drag: null,
          dragStart: null,
          dragStop: null,
          focus: null,
          open: null,
          resize: null,
          resizeStart: null,
          resizeStop: null,
        },
        sizeRelatedOptions: {
          buttons: !0,
          height: !0,
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
          width: !0,
        },
        resizableRelatedOptions: {
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
        },
        _create: function () {
          (this.originalCss = {
            display: this.element[0].style.display,
            width: this.element[0].style.width,
            minHeight: this.element[0].style.minHeight,
            maxHeight: this.element[0].style.maxHeight,
            height: this.element[0].style.height,
          }),
            (this.originalPosition = {
              parent: this.element.parent(),
              index: this.element.parent().children().index(this.element),
            }),
            (this.originalTitle = this.element.attr("title")),
            (this.options.title = this.options.title || this.originalTitle),
            this._createWrapper(),
            this.element
              .show()
              .removeAttr("title")
              .addClass("ui-dialog-content ui-widget-content")
              .appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            (this._isOpen = !1),
            this._trackFocus();
        },
        _init: function () {
          this.options.autoOpen && this.open();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return e && (e.jquery || e.nodeType)
            ? t(e)
            : this.document.find(e || "body").eq(0);
        },
        _destroy: function () {
          var t,
            e = this.originalPosition;
          this._untrackInstance(),
            this._destroyOverlay(),
            this.element
              .removeUniqueId()
              .removeClass("ui-dialog-content ui-widget-content")
              .css(this.originalCss)
              .detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle &&
              this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)).length &&
            t[0] !== this.element[0]
              ? t.before(this.element)
              : e.parent.append(this.element);
        },
        widget: function () {
          return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
          var i,
            n = this;
          if (this._isOpen && !1 !== this._trigger("beforeClose", e)) {
            if (
              ((this._isOpen = !1),
              (this._focusedElement = null),
              this._destroyOverlay(),
              this._untrackInstance(),
              !this.opener.filter(":focusable").focus().length)
            )
              try {
                (i = this.document[0].activeElement) &&
                  "body" !== i.nodeName.toLowerCase() &&
                  t(i).blur();
              } catch (t) {}
            this._hide(this.uiDialog, this.options.hide, function () {
              n._trigger("close", e);
            });
          }
        },
        isOpen: function () {
          return this._isOpen;
        },
        moveToTop: function () {
          this._moveToTop();
        },
        _moveToTop: function (e, i) {
          var n = !1,
            s = this.uiDialog
              .siblings(".ui-front:visible")
              .map(function () {
                return +t(this).css("z-index");
              })
              .get(),
            o = Math.max.apply(null, s);
          return (
            o >= +this.uiDialog.css("z-index") &&
              (this.uiDialog.css("z-index", o + 1), (n = !0)),
            n && !i && this._trigger("focus", e),
            n
          );
        },
        open: function () {
          var e = this;
          return this._isOpen
            ? void (this._moveToTop() && this._focusTabbable())
            : ((this._isOpen = !0),
              (this.opener = t(this.document[0].activeElement)),
              this._size(),
              this._position(),
              this._createOverlay(),
              this._moveToTop(null, !0),
              this.overlay &&
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
              this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus");
              }),
              this._makeFocusTarget(),
              void this._trigger("open"));
        },
        _focusTabbable: function () {
          var t = this._focusedElement;
          t || (t = this.element.find("[autofocus]")),
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).focus();
        },
        _keepFocus: function (e) {
          function i() {
            var e = this.document[0].activeElement;
            this.uiDialog[0] === e ||
              t.contains(this.uiDialog[0], e) ||
              this._focusTabbable();
          }
          e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function () {
          (this.uiDialog = t("<div>")
            .addClass(
              "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
                this.options.dialogClass,
            )
            .hide()
            .attr({ tabIndex: -1, role: "dialog" })
            .appendTo(this._appendTo())),
            this._on(this.uiDialog, {
              keydown: function (e) {
                if (
                  this.options.closeOnEscape &&
                  !e.isDefaultPrevented() &&
                  e.keyCode &&
                  e.keyCode === t.ui.keyCode.ESCAPE
                )
                  return e.preventDefault(), void this.close(e);
                if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                  var i = this.uiDialog.find(":tabbable"),
                    n = i.filter(":first"),
                    s = i.filter(":last");
                  (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                  e.shiftKey
                    ? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                      !e.shiftKey ||
                      (this._delay(function () {
                        s.focus();
                      }),
                      e.preventDefault())
                    : (this._delay(function () {
                        n.focus();
                      }),
                      e.preventDefault());
                }
              },
              mousedown: function (t) {
                this._moveToTop(t) && this._focusTabbable();
              },
            }),
            this.element.find("[aria-describedby]").length ||
              this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id"),
              });
        },
        _createTitlebar: function () {
          var e;
          (this.uiDialogTitlebar = t("<div>")
            .addClass(
              "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix",
            )
            .prependTo(this.uiDialog)),
            this._on(this.uiDialogTitlebar, {
              mousedown: function (e) {
                t(e.target).closest(".ui-dialog-titlebar-close") ||
                  this.uiDialog.focus();
              },
            }),
            (this.uiDialogTitlebarClose = t("<button type='button'></button>")
              .button({
                label: this.options.closeText,
                icons: { primary: "ui-icon-closethick" },
                text: !1,
              })
              .addClass("ui-dialog-titlebar-close")
              .appendTo(this.uiDialogTitlebar)),
            this._on(this.uiDialogTitlebarClose, {
              click: function (t) {
                t.preventDefault(), this.close(t);
              },
            }),
            (e = t("<span>")
              .uniqueId()
              .addClass("ui-dialog-title")
              .prependTo(this.uiDialogTitlebar)),
            this._title(e),
            this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
        },
        _title: function (t) {
          this.options.title || t.html("&#160;"), t.text(this.options.title);
        },
        _createButtonPane: function () {
          (this.uiDialogButtonPane = t("<div>").addClass(
            "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix",
          )),
            (this.uiButtonSet = t("<div>")
              .addClass("ui-dialog-buttonset")
              .appendTo(this.uiDialogButtonPane)),
            this._createButtons();
        },
        _createButtons: function () {
          var e = this,
            i = this.options.buttons;
          return (
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || (t.isArray(i) && !i.length)
              ? void this.uiDialog.removeClass("ui-dialog-buttons")
              : (t.each(i, function (i, n) {
                  var s, o;
                  (n = t.isFunction(n) ? { click: n, text: i } : n),
                    (n = t.extend({ type: "button" }, n)),
                    (s = n.click),
                    (n.click = function () {
                      s.apply(e.element[0], arguments);
                    }),
                    (o = { icons: n.icons, text: n.showText }),
                    delete n.icons,
                    delete n.showText,
                    t("<button></button>", n).button(o).appendTo(e.uiButtonSet);
                }),
                this.uiDialog.addClass("ui-dialog-buttons"),
                void this.uiDialogButtonPane.appendTo(this.uiDialog))
          );
        },
        _makeDraggable: function () {
          function e(t) {
            return { position: t.position, offset: t.offset };
          }
          var i = this,
            n = this.options;
          this.uiDialog.draggable({
            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
            handle: ".ui-dialog-titlebar",
            containment: "document",
            start: function (n, s) {
              t(this).addClass("ui-dialog-dragging"),
                i._blockFrames(),
                i._trigger("dragStart", n, e(s));
            },
            drag: function (t, n) {
              i._trigger("drag", t, e(n));
            },
            stop: function (s, o) {
              var a = o.offset.left - i.document.scrollLeft(),
                r = o.offset.top - i.document.scrollTop();
              (n.position = {
                my: "left top",
                at:
                  "left" +
                  (a >= 0 ? "+" : "") +
                  a +
                  " top" +
                  (r >= 0 ? "+" : "") +
                  r,
                of: i.window,
              }),
                t(this).removeClass("ui-dialog-dragging"),
                i._unblockFrames(),
                i._trigger("dragStop", s, e(o));
            },
          });
        },
        _makeResizable: function () {
          function e(t) {
            return {
              originalPosition: t.originalPosition,
              originalSize: t.originalSize,
              position: t.position,
              size: t.size,
            };
          }
          var i = this,
            n = this.options,
            s = n.resizable,
            o = this.uiDialog.css("position"),
            a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
          this.uiDialog
            .resizable({
              cancel: ".ui-dialog-content",
              containment: "document",
              alsoResize: this.element,
              maxWidth: n.maxWidth,
              maxHeight: n.maxHeight,
              minWidth: n.minWidth,
              minHeight: this._minHeight(),
              handles: a,
              start: function (n, s) {
                t(this).addClass("ui-dialog-resizing"),
                  i._blockFrames(),
                  i._trigger("resizeStart", n, e(s));
              },
              resize: function (t, n) {
                i._trigger("resize", t, e(n));
              },
              stop: function (s, o) {
                var a = i.uiDialog.offset(),
                  r = a.left - i.document.scrollLeft(),
                  l = a.top - i.document.scrollTop();
                (n.height = i.uiDialog.height()),
                  (n.width = i.uiDialog.width()),
                  (n.position = {
                    my: "left top",
                    at:
                      "left" +
                      (r >= 0 ? "+" : "") +
                      r +
                      " top" +
                      (l >= 0 ? "+" : "") +
                      l,
                    of: i.window,
                  }),
                  t(this).removeClass("ui-dialog-resizing"),
                  i._unblockFrames(),
                  i._trigger("resizeStop", s, e(o));
              },
            })
            .css("position", o);
        },
        _trackFocus: function () {
          this._on(this.widget(), {
            focusin: function (e) {
              this._makeFocusTarget(), (this._focusedElement = t(e.target));
            },
          });
        },
        _makeFocusTarget: function () {
          this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function () {
          var e = this._trackingInstances(),
            i = t.inArray(this, e);
          -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function () {
          var t = this.document.data("ui-dialog-instances");
          return (
            t || ((t = []), this.document.data("ui-dialog-instances", t)), t
          );
        },
        _minHeight: function () {
          var t = this.options;
          return "auto" === t.height
            ? t.minHeight
            : Math.min(t.minHeight, t.height);
        },
        _position: function () {
          var t = this.uiDialog.is(":visible");
          t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide();
        },
        _setOptions: function (e) {
          var i = this,
            n = !1,
            s = {};
          t.each(e, function (t, e) {
            i._setOption(t, e),
              t in i.sizeRelatedOptions && (n = !0),
              t in i.resizableRelatedOptions && (s[t] = e);
          }),
            n && (this._size(), this._position()),
            this.uiDialog.is(":data(ui-resizable)") &&
              this.uiDialog.resizable("option", s);
        },
        _setOption: function (t, e) {
          var i,
            n,
            s = this.uiDialog;
          "dialogClass" === t &&
            s.removeClass(this.options.dialogClass).addClass(e),
            "disabled" !== t &&
              (this._super(t, e),
              "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
              "buttons" === t && this._createButtons(),
              "closeText" === t &&
                this.uiDialogTitlebarClose.button({ label: "" + e }),
              "draggable" === t &&
                ((i = s.is(":data(ui-draggable)")) &&
                  !e &&
                  s.draggable("destroy"),
                !i && e && this._makeDraggable()),
              "position" === t && this._position(),
              "resizable" === t &&
                ((n = s.is(":data(ui-resizable)")) &&
                  !e &&
                  s.resizable("destroy"),
                n &&
                  "string" == typeof e &&
                  s.resizable("option", "handles", e),
                n || !1 === e || this._makeResizable()),
              "title" === t &&
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function () {
          var t,
            e,
            i,
            n = this.options;
          this.element
            .show()
            .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
            n.minWidth > n.width && (n.width = n.minWidth),
            (t = this.uiDialog
              .css({ height: "auto", width: n.width })
              .outerHeight()),
            (e = Math.max(0, n.minHeight - t)),
            (i =
              "number" == typeof n.maxHeight
                ? Math.max(0, n.maxHeight - t)
                : "none"),
            "auto" === n.height
              ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
              : this.element.height(Math.max(0, n.height - t)),
            this.uiDialog.is(":data(ui-resizable)") &&
              this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function () {
          this.iframeBlocks = this.document.find("iframe").map(function () {
            var e = t(this);
            return t("<div>")
              .css({
                position: "absolute",
                width: e.outerWidth(),
                height: e.outerHeight(),
              })
              .appendTo(e.parent())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function (e) {
          return (
            !!t(e.target).closest(".ui-dialog").length ||
            !!t(e.target).closest(".ui-datepicker").length
          );
        },
        _createOverlay: function () {
          if (this.options.modal) {
            var e = !0;
            this._delay(function () {
              e = !1;
            }),
              this.document.data("ui-dialog-overlays") ||
                this._on(this.document, {
                  focusin: function (t) {
                    e ||
                      this._allowInteraction(t) ||
                      (t.preventDefault(),
                      this._trackingInstances()[0]._focusTabbable());
                  },
                }),
              (this.overlay = t("<div>")
                .addClass("ui-widget-overlay ui-front")
                .appendTo(this._appendTo())),
              this._on(this.overlay, { mousedown: "_keepFocus" }),
              this.document.data(
                "ui-dialog-overlays",
                (this.document.data("ui-dialog-overlays") || 0) + 1,
              );
          }
        },
        _destroyOverlay: function () {
          if (this.options.modal && this.overlay) {
            var t = this.document.data("ui-dialog-overlays") - 1;
            t
              ? this.document.data("ui-dialog-overlays", t)
              : this.document
                  .unbind("focusin")
                  .removeData("ui-dialog-overlays"),
              this.overlay.remove(),
              (this.overlay = null);
          }
        },
      }),
      t.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
          accept: "*",
          activeClass: !1,
          addClasses: !0,
          greedy: !1,
          hoverClass: !1,
          scope: "default",
          tolerance: "intersect",
          activate: null,
          deactivate: null,
          drop: null,
          out: null,
          over: null,
        },
        _create: function () {
          var e,
            i = this.options,
            n = i.accept;
          (this.isover = !1),
            (this.isout = !0),
            (this.accept = t.isFunction(n)
              ? n
              : function (t) {
                  return t.is(n);
                }),
            (this.proportions = function () {
              return arguments.length
                ? void (e = arguments[0])
                : e ||
                    (e = {
                      width: this.element[0].offsetWidth,
                      height: this.element[0].offsetHeight,
                    });
            }),
            this._addToManager(i.scope),
            i.addClasses && this.element.addClass("ui-droppable");
        },
        _addToManager: function (e) {
          (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
            t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function (t) {
          for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function () {
          var e = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(e),
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function (e, i) {
          if ("accept" === e)
            this.accept = t.isFunction(i)
              ? i
              : function (t) {
                  return t.is(i);
                };
          else if ("scope" === e) {
            var n = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(n), this._addToManager(i);
          }
          this._super(e, i);
        },
        _activate: function (e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass &&
            this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function (e) {
          var i = t.ui.ddmanager.current;
          this.options.activeClass &&
            this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass),
            this._trigger("over", e, this.ui(i)));
        },
        _out: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function (e, i) {
          var n = i || t.ui.ddmanager.current,
            s = !1;
          return (
            !(!n || (n.currentItem || n.element)[0] === this.element[0]) &&
            (this.element
              .find(":data(ui-droppable)")
              .not(".ui-draggable-dragging")
              .each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy &&
                  !i.options.disabled &&
                  i.options.scope === n.options.scope &&
                  i.accept.call(i.element[0], n.currentItem || n.element) &&
                  t.ui.intersect(
                    n,
                    t.extend(i, { offset: i.element.offset() }),
                    i.options.tolerance,
                    e,
                  )
                  ? ((s = !0), !1)
                  : void 0;
              }),
            !s &&
              !!this.accept.call(this.element[0], n.currentItem || n.element) &&
              (this.options.activeClass &&
                this.element.removeClass(this.options.activeClass),
              this.options.hoverClass &&
                this.element.removeClass(this.options.hoverClass),
              this._trigger("drop", e, this.ui(n)),
              this.element))
          );
        },
        ui: function (t) {
          return {
            draggable: t.currentItem || t.element,
            helper: t.helper,
            position: t.position,
            offset: t.positionAbs,
          };
        },
      }),
      (t.ui.intersect = (function () {
        function t(t, e, i) {
          return t >= e && e + i > t;
        }
        return function (e, i, n, s) {
          if (!i.offset) return !1;
          var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
            a = (e.positionAbs || e.position.absolute).top + e.margins.top,
            r = o + e.helperProportions.width,
            l = a + e.helperProportions.height,
            h = i.offset.left,
            u = i.offset.top,
            c = h + i.proportions().width,
            d = u + i.proportions().height;
          switch (n) {
            case "fit":
              return o >= h && c >= r && a >= u && d >= l;
            case "intersect":
              return (
                o + e.helperProportions.width / 2 > h &&
                c > r - e.helperProportions.width / 2 &&
                a + e.helperProportions.height / 2 > u &&
                d > l - e.helperProportions.height / 2
              );
            case "pointer":
              return (
                t(s.pageY, u, i.proportions().height) &&
                t(s.pageX, h, i.proportions().width)
              );
            case "touch":
              return (
                ((a >= u && d >= a) ||
                  (l >= u && d >= l) ||
                  (u > a && l > d)) &&
                ((o >= h && c >= o) || (r >= h && c >= r) || (h > o && r > c))
              );
            default:
              return !1;
          }
        };
      })()),
      (t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (e, i) {
          var n,
            s,
            o = t.ui.ddmanager.droppables[e.options.scope] || [],
            a = i ? i.type : null,
            r = (e.currentItem || e.element)
              .find(":data(ui-droppable)")
              .addBack();
          t: for (n = 0; o.length > n; n++)
            if (
              !(
                o[n].options.disabled ||
                (e &&
                  !o[n].accept.call(
                    o[n].element[0],
                    e.currentItem || e.element,
                  ))
              )
            ) {
              for (s = 0; r.length > s; s++)
                if (r[s] === o[n].element[0]) {
                  o[n].proportions().height = 0;
                  continue t;
                }
              (o[n].visible = "none" !== o[n].element.css("display")),
                o[n].visible &&
                  ("mousedown" === a && o[n]._activate.call(o[n], i),
                  (o[n].offset = o[n].element.offset()),
                  o[n].proportions({
                    width: o[n].element[0].offsetWidth,
                    height: o[n].element[0].offsetHeight,
                  }));
            }
        },
        drop: function (e, i) {
          var n = !1;
          return (
            t.each(
              (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    t.ui.intersect(e, this, this.options.tolerance, i) &&
                    (n = this._drop.call(this, i) || n),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      e.currentItem || e.element,
                    ) &&
                    ((this.isout = !0),
                    (this.isover = !1),
                    this._deactivate.call(this, i)));
              },
            ),
            n
          );
        },
        dragStart: function (e, i) {
          e.element.parentsUntil("body").bind("scroll.droppable", function () {
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
          });
        },
        drag: function (e, i) {
          e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(
              t.ui.ddmanager.droppables[e.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var n,
                    s,
                    o,
                    a = t.ui.intersect(e, this, this.options.tolerance, i),
                    r =
                      !a && this.isover
                        ? "isout"
                        : a && !this.isover
                          ? "isover"
                          : null;
                  r &&
                    (this.options.greedy &&
                      ((s = this.options.scope),
                      (o = this.element
                        .parents(":data(ui-droppable)")
                        .filter(function () {
                          return (
                            t(this).droppable("instance").options.scope === s
                          );
                        })).length &&
                        ((n = t(o[0]).droppable("instance")).greedyChild =
                          "isover" === r)),
                    n &&
                      "isover" === r &&
                      ((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
                    (this[r] = !0),
                    (this["isout" === r ? "isover" : "isout"] = !1),
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    n &&
                      "isout" === r &&
                      ((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
                }
              },
            );
        },
        dragStop: function (e, i) {
          e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        },
      }),
      t.ui.droppable;
    var v = "ui-effects-",
      y = t;
    (t.effects = { effect: {} }),
      (function (t, e) {
        function i(t, e, i) {
          var n = u[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = n.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : n.mod
                  ? (t + n.mod) % n.mod
                  : 0 > t
                    ? 0
                    : t > n.max
                      ? n.max
                      : t);
        }
        function n(i) {
          var n = l(),
            s = (n._rgba = []);
          return (
            (i = i.toLowerCase()),
            p(r, function (t, o) {
              var a,
                r = o.re.exec(i),
                l = r && o.parse(r),
                u = o.space || "rgba";
              return l
                ? ((a = n[u](l)),
                  (n[h[u].cache] = a[h[u].cache]),
                  (s = n._rgba = a._rgba),
                  !1)
                : e;
            }),
            s.length
              ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n)
              : o[i]
          );
        }
        function s(t, e, i) {
          return 1 > 6 * (i = (i + 1) % 1)
            ? t + 6 * (e - t) * i
            : 1 > 2 * i
              ? e
              : 2 > 3 * i
                ? t + 6 * (e - t) * (2 / 3 - i)
                : t;
        }
        var o,
          a = /^([\-+])=\s*(\d+\.?\d*)/,
          r = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          l = (t.Color = function (e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
          }),
          h = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          u = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          c = (l.support = {}),
          d = t("<p>")[0],
          p = t.each;
        (d.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (c.rgba = d.style.backgroundColor.indexOf("rgba") > -1),
          p(h, function (t, e) {
            (e.cache = "_" + t),
              (e.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (l.fn = t.extend(l.prototype, {
            parse: function (s, a, r, u) {
              if (s === e) return (this._rgba = [null, null, null, null]), this;
              (s.jquery || s.nodeType) && ((s = t(s).css(a)), (a = e));
              var c = this,
                d = t.type(s),
                f = (this._rgba = []);
              return (
                a !== e && ((s = [s, a, r, u]), (d = "array")),
                "string" === d
                  ? this.parse(n(s) || o._default)
                  : "array" === d
                    ? (p(h.rgba.props, function (t, e) {
                        f[e.idx] = i(s[e.idx], e);
                      }),
                      this)
                    : "object" === d
                      ? (p(
                          h,
                          s instanceof l
                            ? function (t, e) {
                                s[e.cache] && (c[e.cache] = s[e.cache].slice());
                              }
                            : function (e, n) {
                                var o = n.cache;
                                p(n.props, function (t, e) {
                                  if (!c[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    c[o] = n.to(c._rgba);
                                  }
                                  c[o][e.idx] = i(s[t], e, !0);
                                }),
                                  c[o] &&
                                    0 > t.inArray(null, c[o].slice(0, 3)) &&
                                    ((c[o][3] = 1),
                                    n.from && (c._rgba = n.from(c[o])));
                              },
                        ),
                        this)
                      : e
              );
            },
            is: function (t) {
              var i = l(t),
                n = !0,
                s = this;
              return (
                p(h, function (t, o) {
                  var a,
                    r = i[o.cache];
                  return (
                    r &&
                      ((a = s[o.cache] || (o.to && o.to(s._rgba)) || []),
                      p(o.props, function (t, i) {
                        return null != r[i.idx]
                          ? (n = r[i.idx] === a[i.idx])
                          : e;
                      })),
                    n
                  );
                }),
                n
              );
            },
            _space: function () {
              var t = [],
                e = this;
              return (
                p(h, function (i, n) {
                  e[n.cache] && t.push(i);
                }),
                t.pop()
              );
            },
            transition: function (t, e) {
              var n = l(t),
                s = n._space(),
                o = h[s],
                a = 0 === this.alpha() ? l("transparent") : this,
                r = a[o.cache] || o.to(a._rgba),
                c = r.slice();
              return (
                (n = n[o.cache]),
                p(o.props, function (t, s) {
                  var o = s.idx,
                    a = r[o],
                    l = n[o],
                    h = u[s.type] || {};
                  null !== l &&
                    (null === a
                      ? (c[o] = l)
                      : (h.mod &&
                          (l - a > h.mod / 2
                            ? (a += h.mod)
                            : a - l > h.mod / 2 && (a -= h.mod)),
                        (c[o] = i((l - a) * e + a, s))));
                }),
                this[s](c)
              );
            },
            blend: function (e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                n = i.pop(),
                s = l(e)._rgba;
              return l(
                t.map(i, function (t, e) {
                  return (1 - n) * s[e] + n * t;
                }),
              );
            },
            toRgbaString: function () {
              var e = "rgba(",
                i = t.map(this._rgba, function (t, e) {
                  return null == t ? (e > 2 ? 1 : 0) : t;
                });
              return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
            },
            toHslaString: function () {
              var e = "hsla(",
                i = t.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                  );
                });
              return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
            },
            toHexString: function (e) {
              var i = this._rgba.slice(),
                n = i.pop();
              return (
                e && i.push(~~(255 * n)),
                "#" +
                  t
                    .map(i, function (t) {
                      return 1 === (t = (t || 0).toString(16)).length
                        ? "0" + t
                        : t;
                    })
                    .join("")
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            },
          })),
          (l.fn.parse.prototype = l.fn),
          (h.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              n = t[0] / 255,
              s = t[1] / 255,
              o = t[2] / 255,
              a = t[3],
              r = Math.max(n, s, o),
              l = Math.min(n, s, o),
              h = r - l,
              u = r + l,
              c = 0.5 * u;
            return (
              (e =
                l === r
                  ? 0
                  : n === r
                    ? (60 * (s - o)) / h + 360
                    : s === r
                      ? (60 * (o - n)) / h + 120
                      : (60 * (n - s)) / h + 240),
              (i = 0 === h ? 0 : 0.5 >= c ? h / u : h / (2 - u)),
              [Math.round(e) % 360, i, c, null == a ? 1 : a]
            );
          }),
          (h.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              n = t[2],
              o = t[3],
              a = 0.5 >= n ? n * (1 + i) : n + i - n * i,
              r = 2 * n - a;
            return [
              Math.round(255 * s(r, a, e + 1 / 3)),
              Math.round(255 * s(r, a, e)),
              Math.round(255 * s(r, a, e - 1 / 3)),
              o,
            ];
          }),
          p(h, function (n, s) {
            var o = s.props,
              r = s.cache,
              h = s.to,
              u = s.from;
            (l.fn[n] = function (n) {
              if ((h && !this[r] && (this[r] = h(this._rgba)), n === e))
                return this[r].slice();
              var s,
                a = t.type(n),
                c = "array" === a || "object" === a ? n : arguments,
                d = this[r].slice();
              return (
                p(o, function (t, e) {
                  var n = c["object" === a ? t : e.idx];
                  null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
                }),
                u ? (((s = l(u(d)))[r] = d), s) : l(d)
              );
            }),
              p(o, function (e, i) {
                l.fn[e] ||
                  (l.fn[e] = function (s) {
                    var o,
                      r = t.type(s),
                      l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
                      h = this[l](),
                      u = h[i.idx];
                    return "undefined" === r
                      ? u
                      : ("function" === r &&
                          ((s = s.call(this, u)), (r = t.type(s))),
                        null == s && i.empty
                          ? this
                          : ("string" === r &&
                              (o = a.exec(s)) &&
                              (s =
                                u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)),
                            (h[i.idx] = s),
                            this[l](h)));
                  });
              });
          }),
          (l.hook = function (e) {
            var i = e.split(" ");
            p(i, function (e, i) {
              (t.cssHooks[i] = {
                set: function (e, s) {
                  var o,
                    a,
                    r = "";
                  if (
                    "transparent" !== s &&
                    ("string" !== t.type(s) || (o = n(s)))
                  ) {
                    if (((s = l(o || s)), !c.rgba && 1 !== s._rgba[3])) {
                      for (
                        a = "backgroundColor" === i ? e.parentNode : e;
                        ("" === r || "transparent" === r) && a && a.style;

                      )
                        try {
                          (r = t.css(a, "backgroundColor")), (a = a.parentNode);
                        } catch (t) {}
                      s = s.blend(r && "transparent" !== r ? r : "_default");
                    }
                    s = s.toRgbaString();
                  }
                  try {
                    e.style[i] = s;
                  } catch (t) {}
                },
              }),
                (t.fx.step[i] = function (e) {
                  e.colorInit ||
                    ((e.start = l(e.elem, i)),
                    (e.end = l(e.end)),
                    (e.colorInit = !0)),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                });
            });
          }),
          l.hook(
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
          ),
          (t.cssHooks.borderColor = {
            expand: function (t) {
              var e = {};
              return (
                p(["Top", "Right", "Bottom", "Left"], function (i, n) {
                  e["border" + n + "Color"] = t;
                }),
                e
              );
            },
          }),
          (o = t.Color.names =
            {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff",
            });
      })(y),
      (function () {
        function e(e) {
          var i,
            n,
            s = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
            o = {};
          if (s && s.length && s[0] && s[s[0]])
            for (n = s.length; n--; )
              "string" == typeof s[(i = s[n])] && (o[t.camelCase(i)] = s[i]);
          else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
          return o;
        }
        function i(e, i) {
          var n,
            o,
            a = {};
          for (n in i)
            (o = i[n]),
              e[n] !== o &&
                (s[n] ||
                  ((t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o)));
          return a;
        }
        var n = ["add", "remove", "toggle"],
          s = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        t.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (e, i) {
            t.fx.step[i] = function (t) {
              (("none" !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (y.style(t.elem, i, t.end), (t.setAttr = !0));
            };
          },
        ),
          t.fn.addBack ||
            (t.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t),
              );
            }),
          (t.effects.animateClass = function (s, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function () {
              var o,
                a = t(this),
                r = a.attr("class") || "",
                h = l.children ? a.find("*").addBack() : a;
              (h = h.map(function () {
                return { el: t(this), start: e(this) };
              })),
                (o = function () {
                  t.each(n, function (t, e) {
                    s[e] && a[e + "Class"](s[e]);
                  });
                }),
                o(),
                (h = h.map(function () {
                  return (
                    (this.end = e(this.el[0])),
                    (this.diff = i(this.start, this.end)),
                    this
                  );
                })),
                a.attr("class", r),
                (h = h.map(function () {
                  var e = this,
                    i = t.Deferred(),
                    n = t.extend({}, l, {
                      queue: !1,
                      complete: function () {
                        i.resolve(e);
                      },
                    });
                  return this.el.animate(this.diff, n), i.promise();
                })),
                t.when.apply(t, h.get()).done(function () {
                  o(),
                    t.each(arguments, function () {
                      var e = this.el;
                      t.each(this.diff, function (t) {
                        e.css(t, "");
                      });
                    }),
                    l.complete.call(a[0]);
                });
            });
          }),
          t.fn.extend({
            addClass: (function (e) {
              return function (i, n, s, o) {
                return n
                  ? t.effects.animateClass.call(this, { add: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.addClass),
            removeClass: (function (e) {
              return function (i, n, s, o) {
                return arguments.length > 1
                  ? t.effects.animateClass.call(this, { remove: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.removeClass),
            toggleClass: (function (e) {
              return function (i, n, s, o, a) {
                return "boolean" == typeof n || void 0 === n
                  ? s
                    ? t.effects.animateClass.call(
                        this,
                        n ? { add: i } : { remove: i },
                        s,
                        o,
                        a,
                      )
                    : e.apply(this, arguments)
                  : t.effects.animateClass.call(this, { toggle: i }, n, s, o);
              };
            })(t.fn.toggleClass),
            switchClass: function (e, i, n, s, o) {
              return t.effects.animateClass.call(
                this,
                { add: i, remove: e },
                n,
                s,
                o,
              );
            },
          });
      })(),
      (function () {
        function e(e, i, n, s) {
          return (
            t.isPlainObject(e) && ((i = e), (e = e.effect)),
            (e = { effect: e }),
            null == i && (i = {}),
            t.isFunction(i) && ((s = i), (n = null), (i = {})),
            ("number" == typeof i || t.fx.speeds[i]) &&
              ((s = n), (n = i), (i = {})),
            t.isFunction(n) && ((s = n), (n = null)),
            i && t.extend(e, i),
            (n = n || i.duration),
            (e.duration = t.fx.off
              ? 0
              : "number" == typeof n
                ? n
                : n in t.fx.speeds
                  ? t.fx.speeds[n]
                  : t.fx.speeds._default),
            (e.complete = s || i.complete),
            e
          );
        }
        function i(e) {
          return (
            !(e && "number" != typeof e && !t.fx.speeds[e]) ||
            ("string" == typeof e && !t.effects.effect[e]) ||
            !!t.isFunction(e) ||
            ("object" == typeof e && !e.effect)
          );
        }
        t.extend(t.effects, {
          version: "1.11.4",
          save: function (t, e) {
            for (var i = 0; e.length > i; i++)
              null !== e[i] && t.data(v + e[i], t[0].style[e[i]]);
          },
          restore: function (t, e) {
            var i, n;
            for (n = 0; e.length > n; n++)
              null !== e[n] &&
                (void 0 === (i = t.data(v + e[n])) && (i = ""), t.css(e[n], i));
          },
          setMode: function (t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
          },
          getBaseline: function (t, e) {
            var i, n;
            switch (t[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case "left":
                n = 0;
                break;
              case "center":
                n = 0.5;
                break;
              case "right":
                n = 1;
                break;
              default:
                n = t[1] / e.width;
            }
            return { x: n, y: i };
          },
          createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
            var i = {
                width: e.outerWidth(!0),
                height: e.outerHeight(!0),
                float: e.css("float"),
              },
              n = t("<div></div>")
                .addClass("ui-effects-wrapper")
                .css({
                  fontSize: "100%",
                  background: "transparent",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }),
              s = { width: e.width(), height: e.height() },
              o = document.activeElement;
            try {
              o.id;
            } catch (t) {
              o = document.body;
            }
            return (
              e.wrap(n),
              (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
              (n = e.parent()),
              "static" === e.css("position")
                ? (n.css({ position: "relative" }),
                  e.css({ position: "relative" }))
                : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index"),
                  }),
                  t.each(["top", "left", "bottom", "right"], function (t, n) {
                    (i[n] = e.css(n)),
                      isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                  }),
                  e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              e.css(s),
              n.css(i).show()
            );
          },
          removeWrapper: function (e) {
            var i = document.activeElement;
            return (
              e.parent().is(".ui-effects-wrapper") &&
                (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
              e
            );
          },
          setTransition: function (e, i, n, s) {
            return (
              (s = s || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i);
                o[0] > 0 && (s[i] = o[0] * n + o[1]);
              }),
              s
            );
          },
        }),
          t.fn.extend({
            effect: function () {
              function i(e) {
                function i() {
                  t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e();
                }
                var s = t(this),
                  o = n.complete,
                  r = n.mode;
                (s.is(":hidden") ? "hide" === r : "show" === r)
                  ? (s[r](), i())
                  : a.call(s[0], n, i);
              }
              var n = e.apply(this, arguments),
                s = n.mode,
                o = n.queue,
                a = t.effects.effect[n.effect];
              return t.fx.off || !a
                ? s
                  ? this[s](n.duration, n.complete)
                  : this.each(function () {
                      n.complete && n.complete.call(this);
                    })
                : !1 === o
                  ? this.each(i)
                  : this.queue(o || "fx", i);
            },
            show: (function (t) {
              return function (n) {
                if (i(n)) return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "show"), this.effect.call(this, s);
              };
            })(t.fn.show),
            hide: (function (t) {
              return function (n) {
                if (i(n)) return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "hide"), this.effect.call(this, s);
              };
            })(t.fn.hide),
            toggle: (function (t) {
              return function (n) {
                if (i(n) || "boolean" == typeof n)
                  return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "toggle"), this.effect.call(this, s);
              };
            })(t.fn.toggle),
            cssUnit: function (e) {
              var i = this.css(e),
                n = [];
              return (
                t.each(["em", "px", "%", "pt"], function (t, e) {
                  i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
                }),
                n
              );
            },
          });
      })(),
      (function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
          e[i] = function (e) {
            return Math.pow(e, t + 2);
          };
        }),
          t.extend(e, {
            Sine: function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            },
            Circ: function (t) {
              return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function (t) {
              return 0 === t || 1 === t
                ? t
                : -Math.pow(2, 8 * (t - 1)) *
                    Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
            },
            Back: function (t) {
              return t * t * (3 * t - 2);
            },
            Bounce: function (t) {
              for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
              return (
                1 / Math.pow(4, 3 - i) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            },
          }),
          t.each(e, function (e, i) {
            (t.easing["easeIn" + e] = i),
              (t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t);
              }),
              (t.easing["easeInOut" + e] = function (t) {
                return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
              });
          });
      })(),
      t.effects,
      (t.effects.effect.blind = function (e, i) {
        var n,
          s,
          o,
          a = t(this),
          r = ["position", "top", "bottom", "left", "right", "height", "width"],
          l = t.effects.setMode(a, e.mode || "hide"),
          h = e.direction || "up",
          u = /up|down|vertical/.test(h),
          c = u ? "height" : "width",
          d = u ? "top" : "left",
          p = /up|left|vertical|horizontal/.test(h),
          f = {},
          m = "show" === l;
        a.parent().is(".ui-effects-wrapper")
          ? t.effects.save(a.parent(), r)
          : t.effects.save(a, r),
          a.show(),
          (s = (n = t.effects.createWrapper(a).css({ overflow: "hidden" }))[
            c
          ]()),
          (o = parseFloat(n.css(d)) || 0),
          (f[c] = m ? s : 0),
          p ||
            (a
              .css(u ? "bottom" : "right", 0)
              .css(u ? "top" : "left", "auto")
              .css({ position: "absolute" }),
            (f[d] = m ? o : s + o)),
          m && (n.css(c, 0), p || n.css(d, o + s)),
          n.animate(f, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function () {
              "hide" === l && a.hide(),
                t.effects.restore(a, r),
                t.effects.removeWrapper(a),
                i();
            },
          });
      }),
      (t.effects.effect.bounce = function (e, i) {
        var n,
          s,
          o,
          a = t(this),
          r = ["position", "top", "bottom", "left", "right", "height", "width"],
          l = t.effects.setMode(a, e.mode || "effect"),
          h = "hide" === l,
          u = "show" === l,
          c = e.direction || "up",
          d = e.distance,
          p = e.times || 5,
          f = 2 * p + (u || h ? 1 : 0),
          m = e.duration / f,
          g = e.easing,
          v = "up" === c || "down" === c ? "top" : "left",
          y = "up" === c || "left" === c,
          b = a.queue(),
          _ = b.length;
        for (
          (u || h) && r.push("opacity"),
            t.effects.save(a, r),
            a.show(),
            t.effects.createWrapper(a),
            d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3),
            u &&
              (((o = { opacity: 1 })[v] = 0),
              a
                .css("opacity", 0)
                .css(v, y ? 2 * -d : 2 * d)
                .animate(o, m, g)),
            h && (d /= Math.pow(2, p - 1)),
            (o = {})[v] = 0,
            n = 0;
          p > n;
          n++
        )
          ((s = {})[v] = (y ? "-=" : "+=") + d),
            a.animate(s, m, g).animate(o, m, g),
            (d = h ? 2 * d : d / 2);
        h &&
          (((s = { opacity: 0 })[v] = (y ? "-=" : "+=") + d),
          a.animate(s, m, g)),
          a.queue(function () {
            h && a.hide(),
              t.effects.restore(a, r),
              t.effects.removeWrapper(a),
              i();
          }),
          _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))),
          a.dequeue();
      }),
      (t.effects.effect.clip = function (e, i) {
        var n,
          s,
          o,
          a = t(this),
          r = ["position", "top", "bottom", "left", "right", "height", "width"],
          l = "show" === t.effects.setMode(a, e.mode || "hide"),
          h = "vertical" === (e.direction || "vertical"),
          u = h ? "height" : "width",
          c = h ? "top" : "left",
          d = {};
        t.effects.save(a, r),
          a.show(),
          (n = t.effects.createWrapper(a).css({ overflow: "hidden" })),
          (o = (s = "IMG" === a[0].tagName ? n : a)[u]()),
          l && (s.css(u, 0), s.css(c, o / 2)),
          (d[u] = l ? o : 0),
          (d[c] = l ? 0 : o / 2),
          s.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              l || a.hide(),
                t.effects.restore(a, r),
                t.effects.removeWrapper(a),
                i();
            },
          });
      }),
      (t.effects.effect.drop = function (e, i) {
        var n,
          s = t(this),
          o = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "opacity",
            "height",
            "width",
          ],
          a = t.effects.setMode(s, e.mode || "hide"),
          r = "show" === a,
          l = e.direction || "left",
          h = "up" === l || "down" === l ? "top" : "left",
          u = "up" === l || "left" === l ? "pos" : "neg",
          c = { opacity: r ? 1 : 0 };
        t.effects.save(s, o),
          s.show(),
          t.effects.createWrapper(s),
          (n =
            e.distance ||
            s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2),
          r && s.css("opacity", 0).css(h, "pos" === u ? -n : n),
          (c[h] =
            (r ? ("pos" === u ? "+=" : "-=") : "pos" === u ? "-=" : "+=") + n),
          s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              "hide" === a && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i();
            },
          });
      }),
      (t.effects.effect.explode = function (e, i) {
        function n() {
          v.push(this),
            v.length === u * c &&
              (d.css({ visibility: "visible" }),
              t(v).remove(),
              p || d.hide(),
              i());
        }
        var s,
          o,
          a,
          r,
          l,
          h,
          u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
          c = u,
          d = t(this),
          p = "show" === t.effects.setMode(d, e.mode || "hide"),
          f = d.show().css("visibility", "hidden").offset(),
          m = Math.ceil(d.outerWidth() / c),
          g = Math.ceil(d.outerHeight() / u),
          v = [];
        for (s = 0; u > s; s++)
          for (r = f.top + s * g, h = s - (u - 1) / 2, o = 0; c > o; o++)
            (a = f.left + o * m),
              (l = o - (c - 1) / 2),
              d
                .clone()
                .appendTo("body")
                .wrap("<div></div>")
                .css({
                  position: "absolute",
                  visibility: "visible",
                  left: -o * m,
                  top: -s * g,
                })
                .parent()
                .addClass("ui-effects-explode")
                .css({
                  position: "absolute",
                  overflow: "hidden",
                  width: m,
                  height: g,
                  left: a + (p ? l * m : 0),
                  top: r + (p ? h * g : 0),
                  opacity: p ? 0 : 1,
                })
                .animate(
                  {
                    left: a + (p ? 0 : l * m),
                    top: r + (p ? 0 : h * g),
                    opacity: p ? 1 : 0,
                  },
                  e.duration || 500,
                  e.easing,
                  n,
                );
      }),
      (t.effects.effect.fade = function (e, i) {
        var n = t(this),
          s = t.effects.setMode(n, e.mode || "toggle");
        n.animate(
          { opacity: s },
          { queue: !1, duration: e.duration, easing: e.easing, complete: i },
        );
      }),
      (t.effects.effect.fold = function (e, i) {
        var n,
          s,
          o = t(this),
          a = ["position", "top", "bottom", "left", "right", "height", "width"],
          r = t.effects.setMode(o, e.mode || "hide"),
          l = "show" === r,
          h = "hide" === r,
          u = e.size || 15,
          c = /([0-9]+)%/.exec(u),
          d = !!e.horizFirst,
          p = l !== d,
          f = p ? ["width", "height"] : ["height", "width"],
          m = e.duration / 2,
          g = {},
          v = {};
        t.effects.save(o, a),
          o.show(),
          (n = t.effects.createWrapper(o).css({ overflow: "hidden" })),
          (s = p ? [n.width(), n.height()] : [n.height(), n.width()]),
          c && (u = (parseInt(c[1], 10) / 100) * s[h ? 0 : 1]),
          l && n.css(d ? { height: 0, width: u } : { height: u, width: 0 }),
          (g[f[0]] = l ? s[0] : u),
          (v[f[1]] = l ? s[1] : 0),
          n.animate(g, m, e.easing).animate(v, m, e.easing, function () {
            h && o.hide(),
              t.effects.restore(o, a),
              t.effects.removeWrapper(o),
              i();
          });
      }),
      (t.effects.effect.highlight = function (e, i) {
        var n = t(this),
          s = ["backgroundImage", "backgroundColor", "opacity"],
          o = t.effects.setMode(n, e.mode || "show"),
          a = { backgroundColor: n.css("backgroundColor") };
        "hide" === o && (a.opacity = 0),
          t.effects.save(n, s),
          n
            .show()
            .css({
              backgroundImage: "none",
              backgroundColor: e.color || "#ffff99",
            })
            .animate(a, {
              queue: !1,
              duration: e.duration,
              easing: e.easing,
              complete: function () {
                "hide" === o && n.hide(), t.effects.restore(n, s), i();
              },
            });
      }),
      (t.effects.effect.size = function (e, i) {
        var n,
          s,
          o,
          a = t(this),
          r = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "width",
            "height",
            "overflow",
            "opacity",
          ],
          l = ["width", "height", "overflow"],
          h = ["fontSize"],
          u = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom",
          ],
          c = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight",
          ],
          d = t.effects.setMode(a, e.mode || "effect"),
          p = e.restore || "effect" !== d,
          f = e.scale || "both",
          m = e.origin || ["middle", "center"],
          g = a.css("position"),
          v = p
            ? r
            : [
                "position",
                "top",
                "bottom",
                "left",
                "right",
                "overflow",
                "opacity",
              ],
          y = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        "show" === d && a.show(),
          (n = {
            height: a.height(),
            width: a.width(),
            outerHeight: a.outerHeight(),
            outerWidth: a.outerWidth(),
          }),
          "toggle" === e.mode && "show" === d
            ? ((a.from = e.to || y), (a.to = e.from || n))
            : ((a.from = e.from || ("show" === d ? y : n)),
              (a.to = e.to || ("hide" === d ? y : n))),
          (o = {
            from: { y: a.from.height / n.height, x: a.from.width / n.width },
            to: { y: a.to.height / n.height, x: a.to.width / n.width },
          }),
          ("box" === f || "both" === f) &&
            (o.from.y !== o.to.y &&
              ((v = v.concat(u)),
              (a.from = t.effects.setTransition(a, u, o.from.y, a.from)),
              (a.to = t.effects.setTransition(a, u, o.to.y, a.to))),
            o.from.x !== o.to.x &&
              ((v = v.concat(c)),
              (a.from = t.effects.setTransition(a, c, o.from.x, a.from)),
              (a.to = t.effects.setTransition(a, c, o.to.x, a.to)))),
          ("content" === f || "both" === f) &&
            o.from.y !== o.to.y &&
            ((v = v.concat(h).concat(l)),
            (a.from = t.effects.setTransition(a, h, o.from.y, a.from)),
            (a.to = t.effects.setTransition(a, h, o.to.y, a.to))),
          t.effects.save(a, v),
          a.show(),
          t.effects.createWrapper(a),
          a.css("overflow", "hidden").css(a.from),
          m &&
            ((s = t.effects.getBaseline(m, n)),
            (a.from.top = (n.outerHeight - a.outerHeight()) * s.y),
            (a.from.left = (n.outerWidth - a.outerWidth()) * s.x),
            (a.to.top = (n.outerHeight - a.to.outerHeight) * s.y),
            (a.to.left = (n.outerWidth - a.to.outerWidth) * s.x)),
          a.css(a.from),
          ("content" === f || "both" === f) &&
            ((u = u.concat(["marginTop", "marginBottom"]).concat(h)),
            (c = c.concat(["marginLeft", "marginRight"])),
            (l = r.concat(u).concat(c)),
            a.find("*[width]").each(function () {
              var i = t(this),
                n = i.height(),
                s = i.width(),
                a = i.outerHeight(),
                r = i.outerWidth();
              p && t.effects.save(i, l),
                (i.from = {
                  height: n * o.from.y,
                  width: s * o.from.x,
                  outerHeight: a * o.from.y,
                  outerWidth: r * o.from.x,
                }),
                (i.to = {
                  height: n * o.to.y,
                  width: s * o.to.x,
                  outerHeight: n * o.to.y,
                  outerWidth: s * o.to.x,
                }),
                o.from.y !== o.to.y &&
                  ((i.from = t.effects.setTransition(i, u, o.from.y, i.from)),
                  (i.to = t.effects.setTransition(i, u, o.to.y, i.to))),
                o.from.x !== o.to.x &&
                  ((i.from = t.effects.setTransition(i, c, o.from.x, i.from)),
                  (i.to = t.effects.setTransition(i, c, o.to.x, i.to))),
                i.css(i.from),
                i.animate(i.to, e.duration, e.easing, function () {
                  p && t.effects.restore(i, l);
                });
            })),
          a.animate(a.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              0 === a.to.opacity && a.css("opacity", a.from.opacity),
                "hide" === d && a.hide(),
                t.effects.restore(a, v),
                p ||
                  ("static" === g
                    ? a.css({
                        position: "relative",
                        top: a.to.top,
                        left: a.to.left,
                      })
                    : t.each(["top", "left"], function (t, e) {
                        a.css(e, function (e, i) {
                          var n = parseInt(i, 10),
                            s = t ? a.to.left : a.to.top;
                          return "auto" === i ? s + "px" : n + s + "px";
                        });
                      })),
                t.effects.removeWrapper(a),
                i();
            },
          });
      }),
      (t.effects.effect.scale = function (e, i) {
        var n = t(this),
          s = t.extend(!0, {}, e),
          o = t.effects.setMode(n, e.mode || "effect"),
          a =
            parseInt(e.percent, 10) ||
            (0 === parseInt(e.percent, 10) || "hide" === o ? 0 : 100),
          r = e.direction || "both",
          l = e.origin,
          h = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth(),
          },
          u = "horizontal" !== r ? a / 100 : 1,
          c = "vertical" !== r ? a / 100 : 1;
        (s.effect = "size"),
          (s.queue = !1),
          (s.complete = i),
          "effect" !== o &&
            ((s.origin = l || ["middle", "center"]), (s.restore = !0)),
          (s.from =
            e.from ||
            ("show" === o
              ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
              : h)),
          (s.to = {
            height: h.height * u,
            width: h.width * c,
            outerHeight: h.outerHeight * u,
            outerWidth: h.outerWidth * c,
          }),
          s.fade &&
            ("show" === o && ((s.from.opacity = 0), (s.to.opacity = 1)),
            "hide" === o && ((s.from.opacity = 1), (s.to.opacity = 0))),
          n.effect(s);
      }),
      (t.effects.effect.puff = function (e, i) {
        var n = t(this),
          s = t.effects.setMode(n, e.mode || "hide"),
          o = "hide" === s,
          a = parseInt(e.percent, 10) || 150,
          r = a / 100,
          l = {
            height: n.height(),
            width: n.width(),
            outerHeight: n.outerHeight(),
            outerWidth: n.outerWidth(),
          };
        t.extend(e, {
          effect: "scale",
          queue: !1,
          fade: !0,
          mode: s,
          complete: i,
          percent: o ? a : 100,
          from: o
            ? l
            : {
                height: l.height * r,
                width: l.width * r,
                outerHeight: l.outerHeight * r,
                outerWidth: l.outerWidth * r,
              },
        }),
          n.effect(e);
      }),
      (t.effects.effect.pulsate = function (e, i) {
        var n,
          s = t(this),
          o = t.effects.setMode(s, e.mode || "show"),
          a = "show" === o,
          r = "hide" === o,
          l = a || "hide" === o,
          h = 2 * (e.times || 5) + (l ? 1 : 0),
          u = e.duration / h,
          c = 0,
          d = s.queue(),
          p = d.length;
        for (
          (a || !s.is(":visible")) && (s.css("opacity", 0).show(), (c = 1)),
            n = 1;
          h > n;
          n++
        )
          s.animate({ opacity: c }, u, e.easing), (c = 1 - c);
        s.animate({ opacity: c }, u, e.easing),
          s.queue(function () {
            r && s.hide(), i();
          }),
          p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))),
          s.dequeue();
      }),
      (t.effects.effect.shake = function (e, i) {
        var n,
          s = t(this),
          o = ["position", "top", "bottom", "left", "right", "height", "width"],
          a = t.effects.setMode(s, e.mode || "effect"),
          r = e.direction || "left",
          l = e.distance || 20,
          h = e.times || 3,
          u = 2 * h + 1,
          c = Math.round(e.duration / u),
          d = "up" === r || "down" === r ? "top" : "left",
          p = "up" === r || "left" === r,
          f = {},
          m = {},
          g = {},
          v = s.queue(),
          y = v.length;
        for (
          t.effects.save(s, o),
            s.show(),
            t.effects.createWrapper(s),
            f[d] = (p ? "-=" : "+=") + l,
            m[d] = (p ? "+=" : "-=") + 2 * l,
            g[d] = (p ? "-=" : "+=") + 2 * l,
            s.animate(f, c, e.easing),
            n = 1;
          h > n;
          n++
        )
          s.animate(m, c, e.easing).animate(g, c, e.easing);
        s
          .animate(m, c, e.easing)
          .animate(f, c / 2, e.easing)
          .queue(function () {
            "hide" === a && s.hide(),
              t.effects.restore(s, o),
              t.effects.removeWrapper(s),
              i();
          }),
          y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))),
          s.dequeue();
      }),
      (t.effects.effect.slide = function (e, i) {
        var n,
          s = t(this),
          o = ["position", "top", "bottom", "left", "right", "width", "height"],
          a = t.effects.setMode(s, e.mode || "show"),
          r = "show" === a,
          l = e.direction || "left",
          h = "up" === l || "down" === l ? "top" : "left",
          u = "up" === l || "left" === l,
          c = {};
        t.effects.save(s, o),
          s.show(),
          (n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0)),
          t.effects.createWrapper(s).css({ overflow: "hidden" }),
          r && s.css(h, u ? (isNaN(n) ? "-" + n : -n) : n),
          (c[h] = (r ? (u ? "+=" : "-=") : u ? "-=" : "+=") + n),
          s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              "hide" === a && s.hide(),
                t.effects.restore(s, o),
                t.effects.removeWrapper(s),
                i();
            },
          });
      }),
      (t.effects.effect.transfer = function (e, i) {
        var n = t(this),
          s = t(e.to),
          o = "fixed" === s.css("position"),
          a = t("body"),
          r = o ? a.scrollTop() : 0,
          l = o ? a.scrollLeft() : 0,
          h = s.offset(),
          u = {
            top: h.top - r,
            left: h.left - l,
            height: s.innerHeight(),
            width: s.innerWidth(),
          },
          c = n.offset(),
          d = t("<div class='ui-effects-transfer'></div>")
            .appendTo(document.body)
            .addClass(e.className)
            .css({
              top: c.top - r,
              left: c.left - l,
              height: n.innerHeight(),
              width: n.innerWidth(),
              position: o ? "fixed" : "absolute",
            })
            .animate(u, e.duration, e.easing, function () {
              d.remove(), i();
            });
      }),
      t.widget("ui.progressbar", {
        version: "1.11.4",
        options: { max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function () {
          (this.oldValue = this.options.value = this._constrainedValue()),
            this.element
              .addClass(
                "ui-progressbar ui-widget ui-widget-content ui-corner-all",
              )
              .attr({ role: "progressbar", "aria-valuemin": this.min }),
            (this.valueDiv = t(
              "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>",
            ).appendTo(this.element)),
            this._refreshValue();
        },
        _destroy: function () {
          this.element
            .removeClass(
              "ui-progressbar ui-widget ui-widget-content ui-corner-all",
            )
            .removeAttr("role")
            .removeAttr("aria-valuemin")
            .removeAttr("aria-valuemax")
            .removeAttr("aria-valuenow"),
            this.valueDiv.remove();
        },
        value: function (t) {
          return void 0 === t
            ? this.options.value
            : ((this.options.value = this._constrainedValue(t)),
              void this._refreshValue());
        },
        _constrainedValue: function (t) {
          return (
            void 0 === t && (t = this.options.value),
            (this.indeterminate = !1 === t),
            "number" != typeof t && (t = 0),
            !this.indeterminate &&
              Math.min(this.options.max, Math.max(this.min, t))
          );
        },
        _setOptions: function (t) {
          var e = t.value;
          delete t.value,
            this._super(t),
            (this.options.value = this._constrainedValue(e)),
            this._refreshValue();
        },
        _setOption: function (t, e) {
          "max" === t && (e = Math.max(this.min, e)),
            "disabled" === t &&
              this.element
                .toggleClass("ui-state-disabled", !!e)
                .attr("aria-disabled", e),
            this._super(t, e);
        },
        _percentage: function () {
          return this.indeterminate
            ? 100
            : (100 * (this.options.value - this.min)) /
                (this.options.max - this.min);
        },
        _refreshValue: function () {
          var e = this.options.value,
            i = this._percentage();
          this.valueDiv
            .toggle(this.indeterminate || e > this.min)
            .toggleClass("ui-corner-right", e === this.options.max)
            .width(i.toFixed(0) + "%"),
            this.element.toggleClass(
              "ui-progressbar-indeterminate",
              this.indeterminate,
            ),
            this.indeterminate
              ? (this.element.removeAttr("aria-valuenow"),
                this.overlayDiv ||
                  (this.overlayDiv = t(
                    "<div class='ui-progressbar-overlay'></div>",
                  ).appendTo(this.valueDiv)))
              : (this.element.attr({
                  "aria-valuemax": this.options.max,
                  "aria-valuenow": e,
                }),
                this.overlayDiv &&
                  (this.overlayDiv.remove(), (this.overlayDiv = null))),
            this.oldValue !== e &&
              ((this.oldValue = e), this._trigger("change")),
            e === this.options.max && this._trigger("complete");
        },
      }),
      t.widget("ui.selectable", t.ui.mouse, {
        version: "1.11.4",
        options: {
          appendTo: "body",
          autoRefresh: !0,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null,
        },
        _create: function () {
          var e,
            i = this;
          this.element.addClass("ui-selectable"),
            (this.dragged = !1),
            (this.refresh = function () {
              (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"),
                e.each(function () {
                  var e = t(this),
                    i = e.offset();
                  t.data(this, "selectable-item", {
                    element: this,
                    $element: e,
                    left: i.left,
                    top: i.top,
                    right: i.left + e.outerWidth(),
                    bottom: i.top + e.outerHeight(),
                    startselected: !1,
                    selected: e.hasClass("ui-selected"),
                    selecting: e.hasClass("ui-selecting"),
                    unselecting: e.hasClass("ui-unselecting"),
                  });
                });
            }),
            this.refresh(),
            (this.selectees = e.addClass("ui-selectee")),
            this._mouseInit(),
            (this.helper = t("<div class='ui-selectable-helper'></div>"));
        },
        _destroy: function () {
          this.selectees
            .removeClass("ui-selectee")
            .removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy();
        },
        _mouseStart: function (e) {
          var i = this,
            n = this.options;
          (this.opos = [e.pageX, e.pageY]),
            this.options.disabled ||
              ((this.selectees = t(n.filter, this.element[0])),
              this._trigger("start", e),
              t(n.appendTo).append(this.helper),
              this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0,
              }),
              n.autoRefresh && this.refresh(),
              this.selectees.filter(".ui-selected").each(function () {
                var n = t.data(this, "selectable-item");
                (n.startselected = !0),
                  e.metaKey ||
                    e.ctrlKey ||
                    (n.$element.removeClass("ui-selected"),
                    (n.selected = !1),
                    n.$element.addClass("ui-unselecting"),
                    (n.unselecting = !0),
                    i._trigger("unselecting", e, { unselecting: n.element }));
              }),
              t(e.target)
                .parents()
                .addBack()
                .each(function () {
                  var n,
                    s = t.data(this, "selectable-item");
                  return s
                    ? ((n =
                        (!e.metaKey && !e.ctrlKey) ||
                        !s.$element.hasClass("ui-selected")),
                      s.$element
                        .removeClass(n ? "ui-unselecting" : "ui-selected")
                        .addClass(n ? "ui-selecting" : "ui-unselecting"),
                      (s.unselecting = !n),
                      (s.selecting = n),
                      (s.selected = n),
                      n
                        ? i._trigger("selecting", e, { selecting: s.element })
                        : i._trigger("unselecting", e, {
                            unselecting: s.element,
                          }),
                      !1)
                    : void 0;
                }));
        },
        _mouseDrag: function (e) {
          if (((this.dragged = !0), !this.options.disabled)) {
            var i,
              n = this,
              s = this.options,
              o = this.opos[0],
              a = this.opos[1],
              r = e.pageX,
              l = e.pageY;
            return (
              o > r && ((i = r), (r = o), (o = i)),
              a > l && ((i = l), (l = a), (a = i)),
              this.helper.css({ left: o, top: a, width: r - o, height: l - a }),
              this.selectees.each(function () {
                var i = t.data(this, "selectable-item"),
                  h = !1;
                i &&
                  i.element !== n.element[0] &&
                  ("touch" === s.tolerance
                    ? (h = !(
                        i.left > r ||
                        o > i.right ||
                        i.top > l ||
                        a > i.bottom
                      ))
                    : "fit" === s.tolerance &&
                      (h =
                        i.left > o && r > i.right && i.top > a && l > i.bottom),
                  h
                    ? (i.selected &&
                        (i.$element.removeClass("ui-selected"),
                        (i.selected = !1)),
                      i.unselecting &&
                        (i.$element.removeClass("ui-unselecting"),
                        (i.unselecting = !1)),
                      i.selecting ||
                        (i.$element.addClass("ui-selecting"),
                        (i.selecting = !0),
                        n._trigger("selecting", e, { selecting: i.element })))
                    : (i.selecting &&
                        ((e.metaKey || e.ctrlKey) && i.startselected
                          ? (i.$element.removeClass("ui-selecting"),
                            (i.selecting = !1),
                            i.$element.addClass("ui-selected"),
                            (i.selected = !0))
                          : (i.$element.removeClass("ui-selecting"),
                            (i.selecting = !1),
                            i.startselected &&
                              (i.$element.addClass("ui-unselecting"),
                              (i.unselecting = !0)),
                            n._trigger("unselecting", e, {
                              unselecting: i.element,
                            }))),
                      i.selected &&
                        (e.metaKey ||
                          e.ctrlKey ||
                          i.startselected ||
                          (i.$element.removeClass("ui-selected"),
                          (i.selected = !1),
                          i.$element.addClass("ui-unselecting"),
                          (i.unselecting = !0),
                          n._trigger("unselecting", e, {
                            unselecting: i.element,
                          })))));
              }),
              !1
            );
          }
        },
        _mouseStop: function (e) {
          var i = this;
          return (
            (this.dragged = !1),
            t(".ui-unselecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              n.$element.removeClass("ui-unselecting"),
                (n.unselecting = !1),
                (n.startselected = !1),
                i._trigger("unselected", e, { unselected: n.element });
            }),
            t(".ui-selecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              n.$element.removeClass("ui-selecting").addClass("ui-selected"),
                (n.selecting = !1),
                (n.selected = !0),
                (n.startselected = !0),
                i._trigger("selected", e, { selected: n.element });
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
          );
        },
      }),
      t.widget("ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var t = this.element.uniqueId().attr("id");
          (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this.options.disabled && this.disable();
        },
        _drawButton: function () {
          var e = this;
          (this.label = t("label[for='" + this.ids.element + "']").attr(
            "for",
            this.ids.button,
          )),
            this._on(this.label, {
              click: function (t) {
                this.button.focus(), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = t("<span>", {
              class:
                "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
            }).insertAfter(this.element)),
            t("<span>", {
              class: "ui-icon " + this.options.icons.button,
            }).prependTo(this.button),
            (this.buttonText = t("<span>", {
              class: "ui-selectmenu-text",
            }).appendTo(this.button)),
            this._setText(
              this.buttonText,
              this.element.find("option:selected").text(),
            ),
            this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              e.menuItems || e._refreshMenu();
            }),
            this._hoverable(this.button),
            this._focusable(this.button);
        },
        _drawMenu: function () {
          var e = this;
          (this.menu = t("<ul>", {
            "aria-hidden": "true",
            "aria-labelledby": this.ids.button,
            id: this.ids.menu,
          })),
            (this.menuWrap = t("<div>", {
              class: "ui-selectmenu-menu ui-front",
            })
              .append(this.menu)
              .appendTo(this._appendTo())),
            (this.menuInstance = this.menu
              .menu({
                role: "listbox",
                select: function (t, i) {
                  t.preventDefault(),
                    e._setSelection(),
                    e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, i) {
                  var n = i.item.data("ui-selectmenu-item");
                  null != e.focusIndex &&
                    n.index !== e.focusIndex &&
                    (e._trigger("focus", t, { item: n }),
                    e.isOpen || e._select(n, t)),
                    (e.focusIndex = n.index),
                    e.button.attr(
                      "aria-activedescendant",
                      e.menuItems.eq(n.index).attr("id"),
                    );
                },
              })
              .menu("instance")),
            this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this._setText(this.buttonText, this._getSelectedItem().text()),
            this.options.width || this._resizeButton();
        },
        _refreshMenu: function () {
          this.menu.empty();
          var t,
            e = this.element.find("option");
          e.length &&
            (this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu
              .find("li")
              .not(".ui-selectmenu-optgroup")),
            (t = this._getSelectedItem()),
            this.menuInstance.focus(null, t),
            this._setAria(t.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this.menuItems
              ? (this.menu
                  .find(".ui-state-focus")
                  .removeClass("ui-state-focus"),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            (this.isOpen = !0),
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", t));
        },
        _position: function () {
          this.menuWrap.position(
            t.extend({ of: this.button }, this.options.position),
          );
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderMenu: function (e, i) {
          var n = this,
            s = "";
          t.each(i, function (i, o) {
            o.optgroup !== s &&
              (t("<li>", {
                class:
                  "ui-selectmenu-optgroup ui-menu-divider" +
                  (o.element.parent("optgroup").prop("disabled")
                    ? " ui-state-disabled"
                    : ""),
                text: o.optgroup,
              }).appendTo(e),
              (s = o.optgroup)),
              n._renderItemData(e, o);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (e, i) {
          var n = t("<li>");
          return (
            i.disabled && n.addClass("ui-state-disabled"),
            this._setText(n, i.label),
            n.appendTo(e)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            n,
            s = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex))
            : ((i = this.menuItems.eq(this.element[0].selectedIndex)),
              (s += ":not(.ui-state-disabled)")),
            (n =
              "first" === t || "last" === t
                ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                : i[t + "All"](s).eq(0)).length &&
              this.menuInstance.focus(e, n);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex);
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()).removeAllRanges(),
                t.addRange(this.range))
              : this.range.select(),
            this.button.focus());
        },
        _documentClick: {
          mousedown: function (e) {
            this.isOpen &&
              (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button)
                .length ||
                this.close(e));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? (t = window.getSelection()).rangeCount &&
                (this.range = t.getRangeAt(0))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (e) {
            var i = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                this.close(e), (i = !1);
                break;
              case t.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(e);
                break;
              case t.ui.keyCode.UP:
                e.altKey ? this._toggle(e) : this._move("prev", e);
                break;
              case t.ui.keyCode.DOWN:
                e.altKey ? this._toggle(e) : this._move("next", e);
                break;
              case t.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                break;
              case t.ui.keyCode.LEFT:
                this._move("prev", e);
                break;
              case t.ui.keyCode.RIGHT:
                this._move("next", e);
                break;
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                this._move("first", e);
                break;
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                this._move("last", e);
                break;
              default:
                this.menu.trigger(e), (i = !1);
            }
            i && e.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex);
          e.hasClass("ui-state-disabled") ||
            this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this._setText(this.buttonText, t.label),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          var e = this.menuItems.eq(t.index).attr("id");
          this.button.attr({
            "aria-labelledby": e,
            "aria-activedescendant": e,
          }),
            this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function (t, e) {
          "icons" === t &&
            this.button
              .find("span.ui-icon")
              .removeClass(this.options.icons.button)
              .addClass(e.button),
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "disabled" === t &&
              (this.menuInstance.option("disabled", e),
              this.button
                .toggleClass("ui-state-disabled", e)
                .attr("aria-disabled", e),
              this.element.prop("disabled", e),
              e
                ? (this.button.attr("tabindex", -1), this.close())
                : this.button.attr("tabindex", 0)),
            "width" === t && this._resizeButton();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _toggleAttr: function () {
          this.button
            .toggleClass("ui-corner-top", this.isOpen)
            .toggleClass("ui-corner-all", !this.isOpen)
            .attr("aria-expanded", this.isOpen),
            this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          t || ((t = this.element.show().outerWidth()), this.element.hide()),
            this.button.outerWidth(t);
        },
        _resizeMenu: function () {
          this.menu.outerWidth(
            Math.max(
              this.button.outerWidth(),
              this.menu.width("").outerWidth() + 1,
            ),
          );
        },
        _getCreateOptions: function () {
          return { disabled: this.element.prop("disabled") };
        },
        _parseOptions: function (e) {
          var i = [];
          e.each(function (e, n) {
            var s = t(n),
              o = s.parent("optgroup");
            i.push({
              element: s,
              index: e,
              value: s.val(),
              label: s.text(),
              optgroup: o.attr("label") || "",
              disabled: o.prop("disabled") || s.prop("disabled"),
            });
          }),
            (this.items = i);
        },
        _destroy: function () {
          this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.label.attr("for", this.ids.element);
        },
      }),
      t.widget("ui.slider", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this.element.addClass(
              "ui-slider ui-slider-" +
                this.orientation +
                " ui-widget ui-widget-content ui-corner-all",
            ),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var e,
            i,
            n = this.options,
            s = this.element
              .find(".ui-slider-handle")
              .addClass("ui-state-default ui-corner-all"),
            o = [];
          for (
            i = (n.values && n.values.length) || 1,
              s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
              e = s.length;
            i > e;
            e++
          )
            o.push(
              "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
            );
          (this.handles = s.add(t(o.join("")).appendTo(this.element))),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (e) {
              t(this).data("ui-slider-handle-index", e);
            });
        },
        _createRange: function () {
          var e = this.options,
            i = "";
          e.range
            ? (!0 === e.range &&
                (e.values
                  ? e.values.length && 2 !== e.values.length
                    ? (e.values = [e.values[0], e.values[0]])
                    : t.isArray(e.values) && (e.values = e.values.slice(0))
                  : (e.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? this.range
                    .removeClass("ui-slider-range-min ui-slider-range-max")
                    .css({ left: "", bottom: "" })
                : ((this.range = t("<div></div>").appendTo(this.element)),
                  (i = "ui-slider-range ui-widget-header ui-corner-all")),
              this.range.addClass(
                i +
                  ("min" === e.range || "max" === e.range
                    ? " ui-slider-range-" + e.range
                    : ""),
              ))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this.element.removeClass(
              "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all",
            ),
            this._mouseDestroy();
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            h = this,
            u = this.options;
          return (
            !u.disabled &&
            ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (n = this._normValueFromMouse(i)),
            (s = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(n - h.values(e));
              (s > i ||
                (s === i &&
                  (e === h._lastChangedValue || h.values(e) === u.min))) &&
                ((s = i), (o = t(this)), (a = e));
            }),
            !1 !== this._start(e, a) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = a),
              o.addClass("ui-state-active").focus(),
              (r = o.offset()),
              (l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = l
                ? { left: 0, top: 0 }
                : {
                    left: e.pageX - r.left - o.width() / 2,
                    top:
                      e.pageY -
                      r.top -
                      o.height() / 2 -
                      (parseInt(o.css("borderTopWidth"), 10) || 0) -
                      (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(o.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(e, a, n),
              (this._animateOff = !0),
              !0))
          );
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (t) {
          var e = { x: t.pageX, y: t.pageY },
            i = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function (t) {
          return (
            this.handles.removeClass("ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1),
            !1
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (t) {
          var e, i, n, s, o;
          return (
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                (i =
                  t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0)))
              : ((e = this.elementSize.height),
                (i =
                  t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0))),
            (n = i / e) > 1 && (n = 1),
            0 > n && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            (s = this._valueMax() - this._valueMin()),
            (o = this._valueMin() + n * s),
            this._trimAlignValue(o)
          );
        },
        _start: function (t, e) {
          var i = { handle: this.handles[e], value: this.value() };
          return (
            this.options.values &&
              this.options.values.length &&
              ((i.value = this.values(e)), (i.values = this.values())),
            this._trigger("start", t, i)
          );
        },
        _slide: function (t, e, i) {
          var n, s, o;
          this.options.values && this.options.values.length
            ? ((n = this.values(e ? 0 : 1)),
              2 === this.options.values.length &&
                !0 === this.options.range &&
                ((0 === e && i > n) || (1 === e && n > i)) &&
                (i = n),
              i !== this.values(e) &&
                (((s = this.values())[e] = i),
                (o = this._trigger("slide", t, {
                  handle: this.handles[e],
                  value: i,
                  values: s,
                })),
                (n = this.values(e ? 0 : 1)),
                !1 !== o && this.values(e, i)))
            : i !== this.value() &&
              !1 !==
                (o = this._trigger("slide", t, {
                  handle: this.handles[e],
                  value: i,
                })) &&
              this.value(i);
        },
        _stop: function (t, e) {
          var i = { handle: this.handles[e], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
            this._trigger("stop", t, i);
        },
        _change: function (t, e) {
          if (!this._keySliding && !this._mouseSliding) {
            var i = { handle: this.handles[e], value: this.value() };
            this.options.values &&
              this.options.values.length &&
              ((i.value = this.values(e)), (i.values = this.values())),
              (this._lastChangedValue = e),
              this._trigger("change", t, i);
          }
        },
        value: function (t) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value();
        },
        values: function (e, i) {
          var n, s, o;
          if (arguments.length > 1)
            return (
              (this.options.values[e] = this._trimAlignValue(i)),
              this._refreshValue(),
              void this._change(null, e)
            );
          if (!arguments.length) return this._values();
          if (!t.isArray(arguments[0]))
            return this.options.values && this.options.values.length
              ? this._values(e)
              : this.value();
          for (
            n = this.options.values, s = arguments[0], o = 0;
            n.length > o;
            o += 1
          )
            (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
          this._refreshValue();
        },
        _setOption: function (e, i) {
          var n,
            s = 0;
          switch (
            ("range" === e &&
              !0 === this.options.range &&
              ("min" === i
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === i &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1,
                  )),
                  (this.options.values = null))),
            t.isArray(this.options.values) && (s = this.options.values.length),
            "disabled" === e &&
              this.element.toggleClass("ui-state-disabled", !!i),
            this._super(e, i),
            e)
          ) {
            case "orientation":
              this._detectOrientation(),
                this.element
                  .removeClass("ui-slider-horizontal ui-slider-vertical")
                  .addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), n = 0;
                s > n;
                n += 1
              )
                this._change(null, n);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _value: function () {
          var t = this.options.value;
          return this._trimAlignValue(t);
        },
        _values: function (t) {
          var e, i, n;
          if (arguments.length)
            return (e = this.options.values[t]), this._trimAlignValue(e);
          if (this.options.values && this.options.values.length) {
            for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
              i[n] = this._trimAlignValue(i[n]);
            return i;
          }
          return [];
        },
        _trimAlignValue: function (t) {
          if (this._valueMin() >= t) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = this.options.step > 0 ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            n = t - i;
          return (
            2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
            parseFloat(n.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var t = this.options.max,
            e = this._valueMin(),
            i = this.options.step;
          (t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e),
            (this.max = parseFloat(t.toFixed(this._precision())));
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = "" + t,
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshValue: function () {
          var e,
            i,
            n,
            s,
            o,
            a = this.options.range,
            r = this.options,
            l = this,
            h = !this._animateOff && r.animate,
            u = {};
          this.options.values && this.options.values.length
            ? this.handles.each(function (n) {
                (i =
                  ((l.values(n) - l._valueMin()) /
                    (l._valueMax() - l._valueMin())) *
                  100),
                  (u["horizontal" === l.orientation ? "left" : "bottom"] =
                    i + "%"),
                  t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate),
                  !0 === l.options.range &&
                    ("horizontal" === l.orientation
                      ? (0 === n &&
                          l.range
                            .stop(1, 1)
                            [
                              h ? "animate" : "css"
                            ]({ left: i + "%" }, r.animate),
                        1 === n &&
                          l.range[h ? "animate" : "css"](
                            { width: i - e + "%" },
                            { queue: !1, duration: r.animate },
                          ))
                      : (0 === n &&
                          l.range
                            .stop(1, 1)
                            [
                              h ? "animate" : "css"
                            ]({ bottom: i + "%" }, r.animate),
                        1 === n &&
                          l.range[h ? "animate" : "css"](
                            { height: i - e + "%" },
                            { queue: !1, duration: r.animate },
                          ))),
                  (e = i);
              })
            : ((n = this.value()),
              (s = this._valueMin()),
              (o = this._valueMax()),
              (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
              (u["horizontal" === this.orientation ? "left" : "bottom"] =
                i + "%"),
              this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate),
              "min" === a &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ width: i + "%" }, r.animate),
              "max" === a &&
                "horizontal" === this.orientation &&
                this.range[h ? "animate" : "css"](
                  { width: 100 - i + "%" },
                  { queue: !1, duration: r.animate },
                ),
              "min" === a &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ height: i + "%" }, r.animate),
              "max" === a &&
                "vertical" === this.orientation &&
                this.range[h ? "animate" : "css"](
                  { height: 100 - i + "%" },
                  { queue: !1, duration: r.animate },
                ));
        },
        _handleEvents: {
          keydown: function (e) {
            var i,
              n,
              s,
              o = t(e.target).data("ui-slider-handle-index");
            switch (e.keyCode) {
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_UP:
              case t.ui.keyCode.PAGE_DOWN:
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (
                  (e.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    t(e.target).addClass("ui-state-active"),
                    !1 === this._start(e, o)))
                )
                  return;
            }
            switch (
              ((s = this.options.step),
              (i = n =
                this.options.values && this.options.values.length
                  ? this.values(o)
                  : this.value()),
              e.keyCode)
            ) {
              case t.ui.keyCode.HOME:
                n = this._valueMin();
                break;
              case t.ui.keyCode.END:
                n = this._valueMax();
                break;
              case t.ui.keyCode.PAGE_UP:
                n = this._trimAlignValue(
                  i + (this._valueMax() - this._valueMin()) / this.numPages,
                );
                break;
              case t.ui.keyCode.PAGE_DOWN:
                n = this._trimAlignValue(
                  i - (this._valueMax() - this._valueMin()) / this.numPages,
                );
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
                if (i === this._valueMax()) return;
                n = this._trimAlignValue(i + s);
                break;
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (i === this._valueMin()) return;
                n = this._trimAlignValue(i - s);
            }
            this._slide(e, o, n);
          },
          keyup: function (e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(e, i),
              this._change(e, i),
              t(e.target).removeClass("ui-state-active"));
          },
        },
      }),
      t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null,
        },
        _isOverAxis: function (t, e, i) {
          return t >= e && e + i > t;
        },
        _isFloating: function (t) {
          return (
            /left|right/.test(t.css("float")) ||
            /inline|table-cell/.test(t.css("display"))
          );
        },
        _create: function () {
          (this.containerCache = {}),
            this.element.addClass("ui-sortable"),
            this.refresh(),
            (this.offset = this.element.offset()),
            this._mouseInit(),
            this._setHandleClassName(),
            (this.ready = !0);
        },
        _setOption: function (t, e) {
          this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function () {
          this.element
            .find(".ui-sortable-handle")
            .removeClass("ui-sortable-handle"),
            t.each(this.items, function () {
              (this.instance.options.handle
                ? this.item.find(this.instance.options.handle)
                : this.item
              ).addClass("ui-sortable-handle");
            });
        },
        _destroy: function () {
          this.element
            .removeClass("ui-sortable ui-sortable-disabled")
            .find(".ui-sortable-handle")
            .removeClass("ui-sortable-handle"),
            this._mouseDestroy();
          for (var t = this.items.length - 1; t >= 0; t--)
            this.items[t].item.removeData(this.widgetName + "-item");
          return this;
        },
        _mouseCapture: function (e, i) {
          var n = null,
            s = !1,
            o = this;
          return (
            !this.reverting &&
            !this.options.disabled &&
            "static" !== this.options.type &&
            (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                return t.data(this, o.widgetName + "-item") === o
                  ? ((n = t(this)), !1)
                  : void 0;
              }),
            t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
            !!n &&
              !(
                this.options.handle &&
                !i &&
                (t(this.options.handle, n)
                  .find("*")
                  .addBack()
                  .each(function () {
                    this === e.target && (s = !0);
                  }),
                !s)
              ) &&
              ((this.currentItem = n), this._removeCurrentsFromItems(), !0))
          );
        },
        _mouseStart: function (e, i, n) {
          var s,
            o,
            a = this.options;
          if (
            ((this.currentContainer = this),
            this.refreshPositions(),
            (this.helper = this._createHelper(e)),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            (this.scrollParent = this.helper.scrollParent()),
            (this.offset = this.currentItem.offset()),
            (this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left,
            }),
            t.extend(this.offset, {
              click: {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top,
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset(),
            }),
            this.helper.css("position", "absolute"),
            (this.cssPosition = this.helper.css("position")),
            (this.originalPosition = this._generatePosition(e)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            (this.domPosition = {
              prev: this.currentItem.prev()[0],
              parent: this.currentItem.parent()[0],
            }),
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor &&
              "auto" !== a.cursor &&
              ((o = this.document.find("body")),
              (this.storedCursor = o.css("cursor")),
              o.css("cursor", a.cursor),
              (this.storedStylesheet = t(
                "<style>*{ cursor: " + a.cursor + " !important; }</style>",
              ).appendTo(o))),
            a.opacity &&
              (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")),
              this.helper.css("opacity", a.opacity)),
            a.zIndex &&
              (this.helper.css("zIndex") &&
                (this._storedZIndex = this.helper.css("zIndex")),
              this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== this.document[0] &&
              "HTML" !== this.scrollParent[0].tagName &&
              (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !n)
          )
            for (s = this.containers.length - 1; s >= 0; s--)
              this.containers[s]._trigger("activate", e, this._uiHash(this));
          return (
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager &&
              !a.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(this, e),
            (this.dragging = !0),
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s,
            o,
            a = this.options,
            r = !1;
          for (
            this.position = this._generatePosition(e),
              this.positionAbs = this._convertPositionTo("absolute"),
              this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
              this.options.scroll &&
                (this.scrollParent[0] !== this.document[0] &&
                "HTML" !== this.scrollParent[0].tagName
                  ? (this.overflowOffset.top +
                      this.scrollParent[0].offsetHeight -
                      e.pageY <
                    a.scrollSensitivity
                      ? (this.scrollParent[0].scrollTop = r =
                          this.scrollParent[0].scrollTop + a.scrollSpeed)
                      : e.pageY - this.overflowOffset.top <
                          a.scrollSensitivity &&
                        (this.scrollParent[0].scrollTop = r =
                          this.scrollParent[0].scrollTop - a.scrollSpeed),
                    this.overflowOffset.left +
                      this.scrollParent[0].offsetWidth -
                      e.pageX <
                    a.scrollSensitivity
                      ? (this.scrollParent[0].scrollLeft = r =
                          this.scrollParent[0].scrollLeft + a.scrollSpeed)
                      : e.pageX - this.overflowOffset.left <
                          a.scrollSensitivity &&
                        (this.scrollParent[0].scrollLeft = r =
                          this.scrollParent[0].scrollLeft - a.scrollSpeed))
                  : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                      ? (r = this.document.scrollTop(
                          this.document.scrollTop() - a.scrollSpeed,
                        ))
                      : this.window.height() -
                          (e.pageY - this.document.scrollTop()) <
                          a.scrollSensitivity &&
                        (r = this.document.scrollTop(
                          this.document.scrollTop() + a.scrollSpeed,
                        )),
                    e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                      ? (r = this.document.scrollLeft(
                          this.document.scrollLeft() - a.scrollSpeed,
                        ))
                      : this.window.width() -
                          (e.pageX - this.document.scrollLeft()) <
                          a.scrollSensitivity &&
                        (r = this.document.scrollLeft(
                          this.document.scrollLeft() + a.scrollSpeed,
                        ))),
                !1 !== r &&
                  t.ui.ddmanager &&
                  !a.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e)),
              this.positionAbs = this._convertPositionTo("absolute"),
              (this.options.axis && "y" === this.options.axis) ||
                (this.helper[0].style.left = this.position.left + "px"),
              (this.options.axis && "x" === this.options.axis) ||
                (this.helper[0].style.top = this.position.top + "px"),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            if (
              ((s = (n = this.items[i]).item[0]),
              (o = this._intersectsWithPointer(n)) &&
                n.instance === this.currentContainer &&
                s !== this.currentItem[0] &&
                this.placeholder[1 === o ? "next" : "prev"]()[0] !== s &&
                !t.contains(this.placeholder[0], s) &&
                ("semi-dynamic" !== this.options.type ||
                  !t.contains(this.element[0], s)))
            ) {
              if (
                ((this.direction = 1 === o ? "down" : "up"),
                "pointer" !== this.options.tolerance &&
                  !this._intersectsWithSides(n))
              )
                break;
              this._rearrange(e, n), this._trigger("change", e, this._uiHash());
              break;
            }
          return (
            this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            (this.lastPositionAbs = this.positionAbs),
            !1
          );
        },
        _mouseStop: function (e, i) {
          if (e) {
            if (
              (t.ui.ddmanager &&
                !this.options.dropBehaviour &&
                t.ui.ddmanager.drop(this, e),
              this.options.revert)
            ) {
              var n = this,
                s = this.placeholder.offset(),
                o = this.options.axis,
                a = {};
              (o && "x" !== o) ||
                (a.left =
                  s.left -
                  this.offset.parent.left -
                  this.margins.left +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollLeft)),
                (o && "y" !== o) ||
                  (a.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                t(this.helper).animate(
                  a,
                  parseInt(this.options.revert, 10) || 500,
                  function () {
                    n._clear(e);
                  },
                );
            } else this._clear(e, i);
            return !1;
          }
        },
        cancel: function () {
          if (this.dragging) {
            this._mouseUp({ target: null }),
              "original" === this.options.helper
                ? this.currentItem
                    .css(this._storedCSS)
                    .removeClass("ui-sortable-helper")
                : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)
              this.containers[e]._trigger(
                "deactivate",
                null,
                this._uiHash(this),
              ),
                this.containers[e].containerCache.over &&
                  (this.containers[e]._trigger("out", null, this._uiHash(this)),
                  (this.containers[e].containerCache.over = 0));
          }
          return (
            this.placeholder &&
              (this.placeholder[0].parentNode &&
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
              "original" !== this.options.helper &&
                this.helper &&
                this.helper[0].parentNode &&
                this.helper.remove(),
              t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null,
              }),
              this.domPosition.prev
                ? t(this.domPosition.prev).after(this.currentItem)
                : t(this.domPosition.parent).prepend(this.currentItem)),
            this
          );
        },
        serialize: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            t(i).each(function () {
              var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
                e.expression || /(.+)[\-=_](.+)/,
              );
              i &&
                n.push(
                  (e.key || i[1] + "[]") +
                    "=" +
                    (e.key && e.expression ? i[1] : i[2]),
                );
            }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
          );
        },
        toArray: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            i.each(function () {
              n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }),
            n
          );
        },
        _intersectsWith: function (t) {
          var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            n = this.positionAbs.top,
            s = n + this.helperProportions.height,
            o = t.left,
            a = o + t.width,
            r = t.top,
            l = r + t.height,
            h = this.offset.click.top,
            u = this.offset.click.left,
            c = "x" === this.options.axis || (n + h > r && l > n + h),
            d = "y" === this.options.axis || (e + u > o && a > e + u),
            p = c && d;
          return "pointer" === this.options.tolerance ||
            this.options.forcePointerForContainers ||
            ("pointer" !== this.options.tolerance &&
              this.helperProportions[this.floating ? "width" : "height"] >
                t[this.floating ? "width" : "height"])
            ? p
            : e + this.helperProportions.width / 2 > o &&
                a > i - this.helperProportions.width / 2 &&
                n + this.helperProportions.height / 2 > r &&
                l > s - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function (t) {
          var e =
              "x" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.top + this.offset.click.top,
                t.top,
                t.height,
              ),
            i =
              "y" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.left + this.offset.click.left,
                t.left,
                t.width,
              ),
            n = e && i,
            s = this._getDragVerticalDirection(),
            o = this._getDragHorizontalDirection();
          return (
            !!n &&
            (this.floating
              ? (o && "right" === o) || "down" === s
                ? 2
                : 1
              : s && ("down" === s ? 2 : 1))
          );
        },
        _intersectsWithSides: function (t) {
          var e = this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top + t.height / 2,
              t.height,
            ),
            i = this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left + t.width / 2,
              t.width,
            ),
            n = this._getDragVerticalDirection(),
            s = this._getDragHorizontalDirection();
          return this.floating && s
            ? ("right" === s && i) || ("left" === s && !i)
            : n && (("down" === n && e) || ("up" === n && !e));
        },
        _getDragVerticalDirection: function () {
          var t = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function () {
          var t = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function (t) {
          return (
            this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
          );
        },
        _connectWith: function () {
          var t = this.options;
          return t.connectWith.constructor === String
            ? [t.connectWith]
            : t.connectWith;
        },
        _getItemsAsjQuery: function (e) {
          function i() {
            r.push(this);
          }
          var n,
            s,
            o,
            a,
            r = [],
            l = [],
            h = this._connectWith();
          if (h && e)
            for (n = h.length - 1; n >= 0; n--)
              for (s = (o = t(h[n], this.document[0])).length - 1; s >= 0; s--)
                (a = t.data(o[s], this.widgetFullName)) &&
                  a !== this &&
                  !a.options.disabled &&
                  l.push([
                    t.isFunction(a.options.items)
                      ? a.options.items.call(a.element)
                      : t(a.options.items, a.element)
                          .not(".ui-sortable-helper")
                          .not(".ui-sortable-placeholder"),
                    a,
                  ]);
          for (
            l.push([
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem,
                  })
                : t(this.options.items, this.element)
                    .not(".ui-sortable-helper")
                    .not(".ui-sortable-placeholder"),
              this,
            ]),
              n = l.length - 1;
            n >= 0;
            n--
          )
            l[n][0].each(i);
          return t(r);
        },
        _removeCurrentsFromItems: function () {
          var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = t.grep(this.items, function (t) {
            for (var i = 0; e.length > i; i++)
              if (e[i] === t.item[0]) return !1;
            return !0;
          });
        },
        _refreshItems: function (e) {
          (this.items = []), (this.containers = [this]);
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            h,
            u = this.items,
            c = [
              [
                t.isFunction(this.options.items)
                  ? this.options.items.call(this.element[0], e, {
                      item: this.currentItem,
                    })
                  : t(this.options.items, this.element),
                this,
              ],
            ],
            d = this._connectWith();
          if (d && this.ready)
            for (i = d.length - 1; i >= 0; i--)
              for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)
                (o = t.data(s[n], this.widgetFullName)) &&
                  o !== this &&
                  !o.options.disabled &&
                  (c.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, {
                          item: this.currentItem,
                        })
                      : t(o.options.items, o.element),
                    o,
                  ]),
                  this.containers.push(o));
          for (i = c.length - 1; i >= 0; i--)
            for (a = c[i][1], n = 0, h = (r = c[i][0]).length; h > n; n++)
              (l = t(r[n])).data(this.widgetName + "-item", a),
                u.push({
                  item: l,
                  instance: a,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
                });
        },
        refreshPositions: function (e) {
          var i, n, s, o;
          for (
            this.floating =
              !!this.items.length &&
              ("x" === this.options.axis ||
                this._isFloating(this.items[0].item)),
              this.offsetParent &&
                this.helper &&
                (this.offset.parent = this._getParentOffset()),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            ((n = this.items[i]).instance !== this.currentContainer &&
              this.currentContainer &&
              n.item[0] !== this.currentItem[0]) ||
              ((s = this.options.toleranceElement
                ? t(this.options.toleranceElement, n.item)
                : n.item),
              e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
              (o = s.offset()),
              (n.left = o.left),
              (n.top = o.top));
          if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
          else
            for (i = this.containers.length - 1; i >= 0; i--)
              (o = this.containers[i].element.offset()),
                (this.containers[i].containerCache.left = o.left),
                (this.containers[i].containerCache.top = o.top),
                (this.containers[i].containerCache.width =
                  this.containers[i].element.outerWidth()),
                (this.containers[i].containerCache.height =
                  this.containers[i].element.outerHeight());
          return this;
        },
        _createPlaceholder: function (e) {
          var i,
            n = (e = e || this).options;
          (n.placeholder && n.placeholder.constructor !== String) ||
            ((i = n.placeholder),
            (n.placeholder = {
              element: function () {
                var n = e.currentItem[0].nodeName.toLowerCase(),
                  s = t("<" + n + ">", e.document[0])
                    .addClass(
                      i ||
                        e.currentItem[0].className + " ui-sortable-placeholder",
                    )
                    .removeClass("ui-sortable-helper");
                return (
                  "tbody" === n
                    ? e._createTrPlaceholder(
                        e.currentItem.find("tr").eq(0),
                        t("<tr>", e.document[0]).appendTo(s),
                      )
                    : "tr" === n
                      ? e._createTrPlaceholder(e.currentItem, s)
                      : "img" === n && s.attr("src", e.currentItem.attr("src")),
                  i || s.css("visibility", "hidden"),
                  s
                );
              },
              update: function (t, s) {
                (!i || n.forcePlaceholderSize) &&
                  (s.height() ||
                    s.height(
                      e.currentItem.innerHeight() -
                        parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                        parseInt(e.currentItem.css("paddingBottom") || 0, 10),
                    ),
                  s.width() ||
                    s.width(
                      e.currentItem.innerWidth() -
                        parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                        parseInt(e.currentItem.css("paddingRight") || 0, 10),
                    ));
              },
            })),
            (e.placeholder = t(
              n.placeholder.element.call(e.element, e.currentItem),
            )),
            e.currentItem.after(e.placeholder),
            n.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function (e, i) {
          var n = this;
          e.children().each(function () {
            t("<td>&#160;</td>", n.document[0])
              .attr("colspan", t(this).attr("colspan") || 1)
              .appendTo(i);
          });
        },
        _contactContainers: function (e) {
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            h,
            u,
            c,
            d = null,
            p = null;
          for (i = this.containers.length - 1; i >= 0; i--)
            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
              if (this._intersectsWith(this.containers[i].containerCache)) {
                if (
                  d &&
                  t.contains(this.containers[i].element[0], d.element[0])
                )
                  continue;
                (d = this.containers[i]), (p = i);
              } else
                this.containers[i].containerCache.over &&
                  (this.containers[i]._trigger("out", e, this._uiHash(this)),
                  (this.containers[i].containerCache.over = 0));
          if (d)
            if (1 === this.containers.length)
              this.containers[p].containerCache.over ||
                (this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1));
            else {
              for (
                s = 1e4,
                  o = null,
                  a = (u = d.floating || this._isFloating(this.currentItem))
                    ? "left"
                    : "top",
                  r = u ? "width" : "height",
                  c = u ? "clientX" : "clientY",
                  n = this.items.length - 1;
                n >= 0;
                n--
              )
                t.contains(
                  this.containers[p].element[0],
                  this.items[n].item[0],
                ) &&
                  this.items[n].item[0] !== this.currentItem[0] &&
                  ((l = this.items[n].item.offset()[a]),
                  (h = !1),
                  e[c] - l > this.items[n][r] / 2 && (h = !0),
                  s > Math.abs(e[c] - l) &&
                    ((s = Math.abs(e[c] - l)),
                    (o = this.items[n]),
                    (this.direction = h ? "up" : "down")));
              if (!o && !this.options.dropOnEmpty) return;
              if (this.currentContainer === this.containers[p])
                return void (
                  this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger("over", e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1))
                );
              o
                ? this._rearrange(e, o, null, !0)
                : this._rearrange(e, null, this.containers[p].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[p]._trigger("change", e, this._uiHash(this)),
                (this.currentContainer = this.containers[p]),
                this.options.placeholder.update(
                  this.currentContainer,
                  this.placeholder,
                ),
                this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1);
            }
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper)
              ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
              : "clone" === i.helper
                ? this.currentItem.clone()
                : this.currentItem;
          return (
            n.parents("body").length ||
              t(
                "parent" !== i.appendTo
                  ? i.appendTo
                  : this.currentItem[0].parentNode,
              )[0].appendChild(n[0]),
            n[0] === this.currentItem[0] &&
              (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left"),
              }),
            (!n[0].style.width || i.forceHelperSize) &&
              n.width(this.currentItem.width()),
            (!n[0].style.height || i.forceHelperSize) &&
              n.height(this.currentItem.height()),
            n
          );
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function () {
          this.offsetParent = this.helper.offsetParent();
          var e = this.offsetParent.offset();
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            (this.offsetParent[0] === this.document[0].body ||
              (this.offsetParent[0].tagName &&
                "html" === this.offsetParent[0].tagName.toLowerCase() &&
                t.ui.ie)) &&
              (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return {
              top:
                t.top -
                (parseInt(this.helper.css("top"), 10) || 0) +
                this.scrollParent.scrollTop(),
              left:
                t.left -
                (parseInt(this.helper.css("left"), 10) || 0) +
                this.scrollParent.scrollLeft(),
            };
          }
          return { top: 0, left: 0 };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
            top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options;
          "parent" === s.containment &&
            (s.containment = this.helper[0].parentNode),
            ("document" === s.containment || "window" === s.containment) &&
              (this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                "document" === s.containment
                  ? this.document.width()
                  : this.window.width() -
                    this.helperProportions.width -
                    this.margins.left,
                ("document" === s.containment
                  ? this.document.width()
                  : this.window.height() ||
                    this.document[0].body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ]),
            /^(document|window|parent)$/.test(s.containment) ||
              ((e = t(s.containment)[0]),
              (i = t(s.containment).offset()),
              (n = "hidden" !== t(e).css("overflow")),
              (this.containment = [
                i.left +
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                  this.margins.left,
                i.top +
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingTop"), 10) || 0) -
                  this.margins.top,
                i.left +
                  (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingRight"), 10) || 0) -
                  this.helperProportions.width -
                  this.margins.left,
                i.top +
                  (n
                    ? Math.max(e.scrollHeight, e.offsetHeight)
                    : e.offsetHeight) -
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                  this.helperProportions.height -
                  this.margins.top,
              ]));
        },
        _convertPositionTo: function (e, i) {
          i || (i = this.position);
          var n = "absolute" === e ? 1 : -1,
            s =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            o = /(html|body)/i.test(s[0].tagName);
          return {
            top:
              i.top +
              this.offset.relative.top * n +
              this.offset.parent.top * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : o
                  ? 0
                  : s.scrollTop()) *
                n,
            left:
              i.left +
              this.offset.relative.left * n +
              this.offset.parent.left * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : o
                  ? 0
                  : s.scrollLeft()) *
                n,
          };
        },
        _generatePosition: function (e) {
          var i,
            n,
            s = this.options,
            o = e.pageX,
            a = e.pageY,
            r =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            l = /(html|body)/i.test(r[0].tagName);
          return (
            "relative" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                this.scrollParent[0] !== this.offsetParent[0]) ||
              (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition &&
              (this.containment &&
                (e.pageX - this.offset.click.left < this.containment[0] &&
                  (o = this.containment[0] + this.offset.click.left),
                e.pageY - this.offset.click.top < this.containment[1] &&
                  (a = this.containment[1] + this.offset.click.top),
                e.pageX - this.offset.click.left > this.containment[2] &&
                  (o = this.containment[2] + this.offset.click.left),
                e.pageY - this.offset.click.top > this.containment[3] &&
                  (a = this.containment[3] + this.offset.click.top)),
              s.grid &&
                ((i =
                  this.originalPageY +
                  Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]),
                (a = this.containment
                  ? i - this.offset.click.top >= this.containment[1] &&
                    i - this.offset.click.top <= this.containment[3]
                    ? i
                    : i - this.offset.click.top >= this.containment[1]
                      ? i - s.grid[1]
                      : i + s.grid[1]
                  : i),
                (n =
                  this.originalPageX +
                  Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
                (o = this.containment
                  ? n - this.offset.click.left >= this.containment[0] &&
                    n - this.offset.click.left <= this.containment[2]
                    ? n
                    : n - this.offset.click.left >= this.containment[0]
                      ? n - s.grid[0]
                      : n + s.grid[0]
                  : n))),
            {
              top:
                a -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : l
                    ? 0
                    : r.scrollTop()),
              left:
                o -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : l
                    ? 0
                    : r.scrollLeft()),
            }
          );
        },
        _rearrange: function (t, e, i, n) {
          i
            ? i[0].appendChild(this.placeholder[0])
            : e.item[0].parentNode.insertBefore(
                this.placeholder[0],
                "down" === this.direction ? e.item[0] : e.item[0].nextSibling,
              ),
            (this.counter = this.counter ? ++this.counter : 1);
          var s = this.counter;
          this._delay(function () {
            s === this.counter && this.refreshPositions(!n);
          });
        },
        _clear: function (t, e) {
          function i(t, e, i) {
            return function (n) {
              i._trigger(t, n, e._uiHash(e));
            };
          }
          this.reverting = !1;
          var n,
            s = [];
          if (
            (!this._noFinalSort &&
              this.currentItem.parent().length &&
              this.placeholder.before(this.currentItem),
            (this._noFinalSort = null),
            this.helper[0] === this.currentItem[0])
          ) {
            for (n in this._storedCSS)
              ("auto" === this._storedCSS[n] ||
                "static" === this._storedCSS[n]) &&
                (this._storedCSS[n] = "");
            this.currentItem
              .css(this._storedCSS)
              .removeClass("ui-sortable-helper");
          } else this.currentItem.show();
          for (
            this.fromOutside &&
              !e &&
              s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
              }),
              (!this.fromOutside &&
                this.domPosition.prev ===
                  this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                this.domPosition.parent === this.currentItem.parent()[0]) ||
                e ||
                s.push(function (t) {
                  this._trigger("update", t, this._uiHash());
                }),
              this !== this.currentContainer &&
                (e ||
                  (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash());
                  }),
                  s.push(
                    function (t) {
                      return function (e) {
                        t._trigger("receive", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer),
                  ),
                  s.push(
                    function (t) {
                      return function (e) {
                        t._trigger("update", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer),
                  ))),
              n = this.containers.length - 1;
            n >= 0;
            n--
          )
            e || s.push(i("deactivate", this, this.containers[n])),
              this.containers[n].containerCache.over &&
                (s.push(i("out", this, this.containers[n])),
                (this.containers[n].containerCache.over = 0));
          if (
            (this.storedCursor &&
              (this.document.find("body").css("cursor", this.storedCursor),
              this.storedStylesheet.remove()),
            this._storedOpacity &&
              this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex &&
              this.helper.css(
                "zIndex",
                "auto" === this._storedZIndex ? "" : this._storedZIndex,
              ),
            (this.dragging = !1),
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval ||
              (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
              (this.helper = null)),
            !e)
          ) {
            for (n = 0; s.length > n; n++) s[n].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return (this.fromOutside = !1), !this.cancelHelperRemoval;
        },
        _trigger: function () {
          !1 === t.Widget.prototype._trigger.apply(this, arguments) &&
            this.cancel();
        },
        _uiHash: function (e) {
          var i = e || this;
          return {
            helper: i.helper,
            placeholder: i.placeholder || t([]),
            position: i.position,
            originalPosition: i.originalPosition,
            offset: i.positionAbs,
            item: i.currentItem,
            sender: e ? e.element : null,
          };
        },
      }),
      t.widget("ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
          culture: null,
          icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
          incremental: !0,
          max: null,
          min: null,
          numberFormat: null,
          page: 10,
          step: 1,
          change: null,
          spin: null,
          start: null,
          stop: null,
        },
        _create: function () {
          this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _getCreateOptions: function () {
          var e = {},
            i = this.element;
          return (
            t.each(["min", "max", "step"], function (t, n) {
              var s = i.attr(n);
              void 0 !== s && s.length && (e[n] = s);
            }),
            e
          );
        },
        _events: {
          keydown: function (t) {
            this._start(t) && this._keydown(t) && t.preventDefault();
          },
          keyup: "_stop",
          focus: function () {
            this.previous = this.element.val();
          },
          blur: function (t) {
            return this.cancelBlur
              ? void delete this.cancelBlur
              : (this._stop(),
                this._refresh(),
                void (
                  this.previous !== this.element.val() &&
                  this._trigger("change", t)
                ));
          },
          mousewheel: function (t, e) {
            if (e) {
              if (!this.spinning && !this._start(t)) return !1;
              this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                clearTimeout(this.mousewheelTimer),
                (this.mousewheelTimer = this._delay(function () {
                  this.spinning && this._stop(t);
                }, 100)),
                t.preventDefault();
            }
          },
          "mousedown .ui-spinner-button": function (e) {
            function i() {
              this.element[0] === this.document[0].activeElement ||
                (this.element.focus(),
                (this.previous = n),
                this._delay(function () {
                  this.previous = n;
                }));
            }
            var n;
            (n =
              this.element[0] === this.document[0].activeElement
                ? this.previous
                : this.element.val()),
              e.preventDefault(),
              i.call(this),
              (this.cancelBlur = !0),
              this._delay(function () {
                delete this.cancelBlur, i.call(this);
              }),
              !1 !== this._start(e) &&
                this._repeat(
                  null,
                  t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                  e,
                );
          },
          "mouseup .ui-spinner-button": "_stop",
          "mouseenter .ui-spinner-button": function (e) {
            return t(e.currentTarget).hasClass("ui-state-active")
              ? !1 !== this._start(e) &&
                  void this._repeat(
                    null,
                    t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                    e,
                  )
              : void 0;
          },
          "mouseleave .ui-spinner-button": "_stop",
        },
        _draw: function () {
          var t = (this.uiSpinner = this.element
            .addClass("ui-spinner-input")
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml()));
          this.element.attr("role", "spinbutton"),
            (this.buttons = t
              .find(".ui-spinner-button")
              .attr("tabIndex", -1)
              .button()
              .removeClass("ui-corner-all")),
            this.buttons.height() > Math.ceil(0.5 * t.height()) &&
              t.height() > 0 &&
              t.height(t.height()),
            this.options.disabled && this.disable();
        },
        _keydown: function (e) {
          var i = this.options,
            n = t.ui.keyCode;
          switch (e.keyCode) {
            case n.UP:
              return this._repeat(null, 1, e), !0;
            case n.DOWN:
              return this._repeat(null, -1, e), !0;
            case n.PAGE_UP:
              return this._repeat(null, i.page, e), !0;
            case n.PAGE_DOWN:
              return this._repeat(null, -i.page, e), !0;
          }
          return !1;
        },
        _uiSpinnerHtml: function () {
          return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },
        _buttonHtml: function () {
          return (
            "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
            this.options.icons.up +
            "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " +
            this.options.icons.down +
            "'>&#9660;</span></a>"
          );
        },
        _start: function (t) {
          return (
            !(!this.spinning && !1 === this._trigger("start", t)) &&
            (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          );
        },
        _repeat: function (t, e, i) {
          (t = t || 500),
            clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              this._repeat(40, e, i);
            }, t)),
            this._spin(e * this.options.step, i);
        },
        _spin: function (t, e) {
          var i = this.value() || 0;
          this.counter || (this.counter = 1),
            (i = this._adjustValue(i + t * this._increment(this.counter))),
            (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
              (this._value(i), this.counter++);
        },
        _increment: function (e) {
          var i = this.options.incremental;
          return i
            ? t.isFunction(i)
              ? i(e)
              : Math.floor(
                  (e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1,
                )
            : 1;
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = "" + t,
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function (t) {
          var e,
            i,
            n = this.options;
          return (
            (i = t - (e = null !== n.min ? n.min : 0)),
            (t = e + (i = Math.round(i / n.step) * n.step)),
            (t = parseFloat(t.toFixed(this._precision()))),
            null !== n.max && t > n.max
              ? n.max
              : null !== n.min && n.min > t
                ? n.min
                : t
          );
        },
        _stop: function (t) {
          this.spinning &&
            (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            (this.counter = 0),
            (this.spinning = !1),
            this._trigger("stop", t));
        },
        _setOption: function (t, e) {
          if ("culture" === t || "numberFormat" === t) {
            var i = this._parse(this.element.val());
            return (
              (this.options[t] = e), void this.element.val(this._format(i))
            );
          }
          ("max" === t || "min" === t || "step" === t) &&
            "string" == typeof e &&
            (e = this._parse(e)),
            "icons" === t &&
              (this.buttons
                .first()
                .find(".ui-icon")
                .removeClass(this.options.icons.up)
                .addClass(e.up),
              this.buttons
                .last()
                .find(".ui-icon")
                .removeClass(this.options.icons.down)
                .addClass(e.down)),
            this._super(t, e),
            "disabled" === t &&
              (this.widget().toggleClass("ui-state-disabled", !!e),
              this.element.prop("disabled", !!e),
              this.buttons.button(e ? "disable" : "enable"));
        },
        _setOptions: r(function (t) {
          this._super(t);
        }),
        _parse: function (t) {
          return (
            "string" == typeof t &&
              "" !== t &&
              (t =
                window.Globalize && this.options.numberFormat
                  ? Globalize.parseFloat(t, 10, this.options.culture)
                  : +t),
            "" === t || isNaN(t) ? null : t
          );
        },
        _format: function (t) {
          return "" === t
            ? ""
            : window.Globalize && this.options.numberFormat
              ? Globalize.format(
                  t,
                  this.options.numberFormat,
                  this.options.culture,
                )
              : t;
        },
        _refresh: function () {
          this.element.attr({
            "aria-valuemin": this.options.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._parse(this.element.val()),
          });
        },
        isValid: function () {
          var t = this.value();
          return null !== t && t === this._adjustValue(t);
        },
        _value: function (t, e) {
          var i;
          "" !== t &&
            null !== (i = this._parse(t)) &&
            (e || (i = this._adjustValue(i)), (t = this._format(i))),
            this.element.val(t),
            this._refresh();
        },
        _destroy: function () {
          this.element
            .removeClass("ui-spinner-input")
            .prop("disabled", !1)
            .removeAttr("autocomplete")
            .removeAttr("role")
            .removeAttr("aria-valuemin")
            .removeAttr("aria-valuemax")
            .removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: r(function (t) {
          this._stepUp(t);
        }),
        _stepUp: function (t) {
          this._start() &&
            (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: r(function (t) {
          this._stepDown(t);
        }),
        _stepDown: function (t) {
          this._start() &&
            (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: r(function (t) {
          this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: r(function (t) {
          this._stepDown((t || 1) * this.options.page);
        }),
        value: function (t) {
          return arguments.length
            ? void r(this._value).call(this, t)
            : this._parse(this.element.val());
        },
        widget: function () {
          return this.uiSpinner;
        },
      }),
      t.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
          active: null,
          collapsible: !1,
          event: "click",
          heightStyle: "content",
          hide: null,
          show: null,
          activate: null,
          beforeActivate: null,
          beforeLoad: null,
          load: null,
        },
        _isLocal: (function () {
          var t = /#.*$/;
          return function (e) {
            var i, n;
            (i = (e = e.cloneNode(!1)).href.replace(t, "")),
              (n = location.href.replace(t, ""));
            try {
              i = decodeURIComponent(i);
            } catch (t) {}
            try {
              n = decodeURIComponent(n);
            } catch (t) {}
            return e.hash.length > 1 && i === n;
          };
        })(),
        _create: function () {
          var e = this,
            i = this.options;
          (this.running = !1),
            this.element
              .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
              .toggleClass("ui-tabs-collapsible", i.collapsible),
            this._processTabs(),
            (i.active = this._initialActive()),
            t.isArray(i.disabled) &&
              (i.disabled = t
                .unique(
                  i.disabled.concat(
                    t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                      return e.tabs.index(t);
                    }),
                  ),
                )
                .sort()),
            (this.active =
              !1 !== this.options.active && this.anchors.length
                ? this._findActive(i.active)
                : t()),
            this._refresh(),
            this.active.length && this.load(i.active);
        },
        _initialActive: function () {
          var e = this.options.active,
            i = this.options.collapsible,
            n = location.hash.substring(1);
          return (
            null === e &&
              (n &&
                this.tabs.each(function (i, s) {
                  return t(s).attr("aria-controls") === n
                    ? ((e = i), !1)
                    : void 0;
                }),
              null === e &&
                (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
              (null === e || -1 === e) && (e = !!this.tabs.length && 0)),
            !1 !== e &&
              -1 === (e = this.tabs.index(this.tabs.eq(e))) &&
              (e = !i && 0),
            !i && !1 === e && this.anchors.length && (e = 0),
            e
          );
        },
        _getCreateEventData: function () {
          return {
            tab: this.active,
            panel: this.active.length ? this._getPanelForTab(this.active) : t(),
          };
        },
        _tabKeydown: function (e) {
          var i = t(this.document[0].activeElement).closest("li"),
            n = this.tabs.index(i),
            s = !0;
          if (!this._handlePageNav(e)) {
            switch (e.keyCode) {
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
                n++;
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.LEFT:
                (s = !1), n--;
                break;
              case t.ui.keyCode.END:
                n = this.anchors.length - 1;
                break;
              case t.ui.keyCode.HOME:
                n = 0;
                break;
              case t.ui.keyCode.SPACE:
                return (
                  e.preventDefault(),
                  clearTimeout(this.activating),
                  void this._activate(n)
                );
              case t.ui.keyCode.ENTER:
                return (
                  e.preventDefault(),
                  clearTimeout(this.activating),
                  void this._activate(n !== this.options.active && n)
                );
              default:
                return;
            }
            e.preventDefault(),
              clearTimeout(this.activating),
              (n = this._focusNextTab(n, s)),
              e.ctrlKey ||
                e.metaKey ||
                (i.attr("aria-selected", "false"),
                this.tabs.eq(n).attr("aria-selected", "true"),
                (this.activating = this._delay(function () {
                  this.option("active", n);
                }, this.delay)));
          }
        },
        _panelKeydown: function (e) {
          this._handlePageNav(e) ||
            (e.ctrlKey &&
              e.keyCode === t.ui.keyCode.UP &&
              (e.preventDefault(), this.active.focus()));
        },
        _handlePageNav: function (e) {
          return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
            ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
              !0)
            : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
              ? (this._activate(
                  this._focusNextTab(this.options.active + 1, !0),
                ),
                !0)
              : void 0;
        },
        _findNextTab: function (e, i) {
          for (
            var n = this.tabs.length - 1;
            -1 !==
            t.inArray(
              (e > n && (e = 0), 0 > e && (e = n), e),
              this.options.disabled,
            );

          )
            e = i ? e + 1 : e - 1;
          return e;
        },
        _focusNextTab: function (t, e) {
          return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
        },
        _setOption: function (t, e) {
          return "active" === t
            ? void this._activate(e)
            : "disabled" === t
              ? void this._setupDisabled(e)
              : (this._super(t, e),
                "collapsible" === t &&
                  (this.element.toggleClass("ui-tabs-collapsible", e),
                  e || !1 !== this.options.active || this._activate(0)),
                "event" === t && this._setupEvents(e),
                void ("heightStyle" === t && this._setupHeightStyle(e)));
        },
        _sanitizeSelector: function (t) {
          return t
            ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
            : "";
        },
        refresh: function () {
          var e = this.options,
            i = this.tablist.children(":has(a[href])");
          (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
            return i.index(t);
          })),
            this._processTabs(),
            !1 !== e.active && this.anchors.length
              ? this.active.length &&
                !t.contains(this.tablist[0], this.active[0])
                ? this.tabs.length === e.disabled.length
                  ? ((e.active = !1), (this.active = t()))
                  : this._activate(
                      this._findNextTab(Math.max(0, e.active - 1), !1),
                    )
                : (e.active = this.tabs.index(this.active))
              : ((e.active = !1), (this.active = t())),
            this._refresh();
        },
        _refresh: function () {
          this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              }),
            this.panels
              .not(this._getPanelForTab(this.active))
              .hide()
              .attr({ "aria-hidden": "true" }),
            this.active.length
              ? (this.active
                  .addClass("ui-tabs-active ui-state-active")
                  .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  }),
                this._getPanelForTab(this.active)
                  .show()
                  .attr({ "aria-hidden": "false" }))
              : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function () {
          var e = this,
            i = this.tabs,
            n = this.anchors,
            s = this.panels;
          (this.tablist = this._getList()
            .addClass(
              "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",
            )
            .attr("role", "tablist")
            .delegate("> li", "mousedown" + this.eventNamespace, function (e) {
              t(this).is(".ui-state-disabled") && e.preventDefault();
            })
            .delegate(
              ".ui-tabs-anchor",
              "focus" + this.eventNamespace,
              function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
              },
            )),
            (this.tabs = this.tablist
              .find("> li:has(a[href])")
              .addClass("ui-state-default ui-corner-top")
              .attr({ role: "tab", tabIndex: -1 })),
            (this.anchors = this.tabs
              .map(function () {
                return t("a", this)[0];
              })
              .addClass("ui-tabs-anchor")
              .attr({ role: "presentation", tabIndex: -1 })),
            (this.panels = t()),
            this.anchors.each(function (i, n) {
              var s,
                o,
                a,
                r = t(n).uniqueId().attr("id"),
                l = t(n).closest("li"),
                h = l.attr("aria-controls");
              e._isLocal(n)
                ? ((a = (s = n.hash).substring(1)),
                  (o = e.element.find(e._sanitizeSelector(s))))
                : ((s =
                    "#" +
                    (a = l.attr("aria-controls") || t({}).uniqueId()[0].id)),
                  (o = e.element.find(s)).length ||
                    (o = e._createPanel(a)).insertAfter(
                      e.panels[i - 1] || e.tablist,
                    ),
                  o.attr("aria-live", "polite")),
                o.length && (e.panels = e.panels.add(o)),
                h && l.data("ui-tabs-aria-controls", h),
                l.attr({ "aria-controls": a, "aria-labelledby": r }),
                o.attr("aria-labelledby", r);
            }),
            this.panels
              .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
              .attr("role", "tabpanel"),
            i &&
              (this._off(i.not(this.tabs)),
              this._off(n.not(this.anchors)),
              this._off(s.not(this.panels)));
        },
        _getList: function () {
          return this.tablist || this.element.find("ol,ul").eq(0);
        },
        _createPanel: function (e) {
          return t("<div>")
            .attr("id", e)
            .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
            .data("ui-tabs-destroy", !0);
        },
        _setupDisabled: function (e) {
          t.isArray(e) &&
            (e.length
              ? e.length === this.anchors.length && (e = !0)
              : (e = !1));
          for (var i, n = 0; (i = this.tabs[n]); n++)
            !0 === e || -1 !== t.inArray(n, e)
              ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true")
              : t(i)
                  .removeClass("ui-state-disabled")
                  .removeAttr("aria-disabled");
          this.options.disabled = e;
        },
        _setupEvents: function (e) {
          var i = {};
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
              click: function (t) {
                t.preventDefault();
              },
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, { keydown: "_tabKeydown" }),
            this._on(this.panels, { keydown: "_panelKeydown" }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs);
        },
        _setupHeightStyle: function (e) {
          var i,
            n = this.element.parent();
          "fill" === e
            ? ((i = n.height()),
              (i -= this.element.outerHeight() - this.element.height()),
              this.element.siblings(":visible").each(function () {
                var e = t(this),
                  n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
              }),
              this.element
                .children()
                .not(this.panels)
                .each(function () {
                  i -= t(this).outerHeight(!0);
                }),
              this.panels
                .each(function () {
                  t(this).height(
                    Math.max(0, i - t(this).innerHeight() + t(this).height()),
                  );
                })
                .css("overflow", "auto"))
            : "auto" === e &&
              ((i = 0),
              this.panels
                .each(function () {
                  i = Math.max(i, t(this).height("").height());
                })
                .height(i));
        },
        _eventHandler: function (e) {
          var i = this.options,
            n = this.active,
            s = t(e.currentTarget).closest("li"),
            o = s[0] === n[0],
            a = o && i.collapsible,
            r = a ? t() : this._getPanelForTab(s),
            l = n.length ? this._getPanelForTab(n) : t(),
            h = { oldTab: n, oldPanel: l, newTab: a ? t() : s, newPanel: r };
          e.preventDefault(),
            s.hasClass("ui-state-disabled") ||
              s.hasClass("ui-tabs-loading") ||
              this.running ||
              (o && !i.collapsible) ||
              !1 === this._trigger("beforeActivate", e, h) ||
              ((i.active = !a && this.tabs.index(s)),
              (this.active = o ? t() : s),
              this.xhr && this.xhr.abort(),
              l.length ||
                r.length ||
                t.error("jQuery UI Tabs: Mismatching fragment identifier."),
              r.length && this.load(this.tabs.index(s), e),
              this._toggle(e, h));
        },
        _toggle: function (e, i) {
          function n() {
            (o.running = !1), o._trigger("activate", e, i);
          }
          function s() {
            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
              a.length && o.options.show
                ? o._show(a, o.options.show, n)
                : (a.show(), n());
          }
          var o = this,
            a = i.newPanel,
            r = i.oldPanel;
          (this.running = !0),
            r.length && this.options.hide
              ? this._hide(r, this.options.hide, function () {
                  i.oldTab
                    .closest("li")
                    .removeClass("ui-tabs-active ui-state-active"),
                    s();
                })
              : (i.oldTab
                  .closest("li")
                  .removeClass("ui-tabs-active ui-state-active"),
                r.hide(),
                s()),
            r.attr("aria-hidden", "true"),
            i.oldTab.attr({
              "aria-selected": "false",
              "aria-expanded": "false",
            }),
            a.length && r.length
              ? i.oldTab.attr("tabIndex", -1)
              : a.length &&
                this.tabs
                  .filter(function () {
                    return 0 === t(this).attr("tabIndex");
                  })
                  .attr("tabIndex", -1),
            a.attr("aria-hidden", "false"),
            i.newTab.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            });
        },
        _activate: function (e) {
          var i,
            n = this._findActive(e);
          n[0] !== this.active[0] &&
            (n.length || (n = this.active),
            (i = n.find(".ui-tabs-anchor")[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return !1 === e ? t() : this.tabs.eq(e);
        },
        _getIndex: function (t) {
          return (
            "string" == typeof t &&
              (t = this.anchors.index(
                this.anchors.filter("[href$='" + t + "']"),
              )),
            t
          );
        },
        _destroy: function () {
          this.xhr && this.xhr.abort(),
            this.element.removeClass(
              "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible",
            ),
            this.tablist
              .removeClass(
                "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",
              )
              .removeAttr("role"),
            this.anchors
              .removeClass("ui-tabs-anchor")
              .removeAttr("role")
              .removeAttr("tabIndex")
              .removeUniqueId(),
            this.tablist.unbind(this.eventNamespace),
            this.tabs.add(this.panels).each(function () {
              t.data(this, "ui-tabs-destroy")
                ? t(this).remove()
                : t(this)
                    .removeClass(
                      "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel",
                    )
                    .removeAttr("tabIndex")
                    .removeAttr("aria-live")
                    .removeAttr("aria-busy")
                    .removeAttr("aria-selected")
                    .removeAttr("aria-labelledby")
                    .removeAttr("aria-hidden")
                    .removeAttr("aria-expanded")
                    .removeAttr("role");
            }),
            this.tabs.each(function () {
              var e = t(this),
                i = e.data("ui-tabs-aria-controls");
              i
                ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
                : e.removeAttr("aria-controls");
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle &&
              this.panels.css("height", "");
        },
        enable: function (e) {
          var i = this.options.disabled;
          !1 !== i &&
            (void 0 === e
              ? (i = !1)
              : ((e = this._getIndex(e)),
                (i = t.isArray(i)
                  ? t.map(i, function (t) {
                      return t !== e ? t : null;
                    })
                  : t.map(this.tabs, function (t, i) {
                      return i !== e ? i : null;
                    }))),
            this._setupDisabled(i));
        },
        disable: function (e) {
          var i = this.options.disabled;
          if (!0 !== i) {
            if (void 0 === e) i = !0;
            else {
              if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
              i = t.isArray(i) ? t.merge([e], i).sort() : [e];
            }
            this._setupDisabled(i);
          }
        },
        load: function (e, i) {
          e = this._getIndex(e);
          var n = this,
            s = this.tabs.eq(e),
            o = s.find(".ui-tabs-anchor"),
            a = this._getPanelForTab(s),
            r = { tab: s, panel: a },
            l = function (t, e) {
              "abort" === e && n.panels.stop(!1, !0),
                s.removeClass("ui-tabs-loading"),
                a.removeAttr("aria-busy"),
                t === n.xhr && delete n.xhr;
            };
          this._isLocal(o[0]) ||
            ((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
            this.xhr &&
              "canceled" !== this.xhr.statusText &&
              (s.addClass("ui-tabs-loading"),
              a.attr("aria-busy", "true"),
              this.xhr
                .done(function (t, e, s) {
                  setTimeout(function () {
                    a.html(t), n._trigger("load", i, r), l(s, e);
                  }, 1);
                })
                .fail(function (t, e) {
                  setTimeout(function () {
                    l(t, e);
                  }, 1);
                })));
        },
        _ajaxSettings: function (e, i, n) {
          var s = this;
          return {
            url: e.attr("href"),
            beforeSend: function (e, o) {
              return s._trigger(
                "beforeLoad",
                i,
                t.extend({ jqXHR: e, ajaxSettings: o }, n),
              );
            },
          };
        },
        _getPanelForTab: function (e) {
          var i = t(e).attr("aria-controls");
          return this.element.find(this._sanitizeSelector("#" + i));
        },
      }),
      t.widget("ui.tooltip", {
        version: "1.11.4",
        options: {
          content: function () {
            var e = t(this).attr("title") || "";
            return t("<a>").text(e).html();
          },
          hide: !0,
          items: "[title]:not([disabled])",
          position: {
            my: "left top+15",
            at: "left bottom",
            collision: "flipfit flip",
          },
          show: !0,
          tooltipClass: null,
          track: !1,
          close: null,
          open: null,
        },
        _addDescribedBy: function (e, i) {
          var n = (e.attr("aria-describedby") || "").split(/\s+/);
          n.push(i),
            e
              .data("ui-tooltip-id", i)
              .attr("aria-describedby", t.trim(n.join(" ")));
        },
        _removeDescribedBy: function (e) {
          var i = e.data("ui-tooltip-id"),
            n = (e.attr("aria-describedby") || "").split(/\s+/),
            s = t.inArray(i, n);
          -1 !== s && n.splice(s, 1),
            e.removeData("ui-tooltip-id"),
            (n = t.trim(n.join(" ")))
              ? e.attr("aria-describedby", n)
              : e.removeAttr("aria-describedby");
        },
        _create: function () {
          this._on({ mouseover: "open", focusin: "open" }),
            (this.tooltips = {}),
            (this.parents = {}),
            this.options.disabled && this._disable(),
            (this.liveRegion = t("<div>")
              .attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions",
              })
              .addClass("ui-helper-hidden-accessible")
              .appendTo(this.document[0].body));
        },
        _setOption: function (e, i) {
          var n = this;
          return "disabled" === e
            ? (this[i ? "_disable" : "_enable"](), void (this.options[e] = i))
            : (this._super(e, i),
              void (
                "content" === e &&
                t.each(this.tooltips, function (t, e) {
                  n._updateContent(e.element);
                })
              ));
        },
        _disable: function () {
          var e = this;
          t.each(this.tooltips, function (i, n) {
            var s = t.Event("blur");
            (s.target = s.currentTarget = n.element[0]), e.close(s, !0);
          }),
            this.element
              .find(this.options.items)
              .addBack()
              .each(function () {
                var e = t(this);
                e.is("[title]") &&
                  e
                    .data("ui-tooltip-title", e.attr("title"))
                    .removeAttr("title");
              });
        },
        _enable: function () {
          this.element
            .find(this.options.items)
            .addBack()
            .each(function () {
              var e = t(this);
              e.data("ui-tooltip-title") &&
                e.attr("title", e.data("ui-tooltip-title"));
            });
        },
        open: function (e) {
          var i = this,
            n = t(e ? e.target : this.element).closest(this.options.items);
          n.length &&
            !n.data("ui-tooltip-id") &&
            (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
            n.data("ui-tooltip-open", !0),
            e &&
              "mouseover" === e.type &&
              n.parents().each(function () {
                var e,
                  n = t(this);
                n.data("ui-tooltip-open") &&
                  (((e = t.Event("blur")).target = e.currentTarget = this),
                  i.close(e, !0)),
                  n.attr("title") &&
                    (n.uniqueId(),
                    (i.parents[this.id] = {
                      element: this,
                      title: n.attr("title"),
                    }),
                    n.attr("title", ""));
              }),
            this._registerCloseHandlers(e, n),
            this._updateContent(n, e));
        },
        _updateContent: function (t, e) {
          var i,
            n = this.options.content,
            s = this,
            o = e ? e.type : null;
          return "string" == typeof n
            ? this._open(e, t, n)
            : void (
                (i = n.call(t[0], function (i) {
                  s._delay(function () {
                    t.data("ui-tooltip-open") &&
                      (e && (e.type = o), this._open(e, t, i));
                  });
                })) && this._open(e, t, i)
              );
        },
        _open: function (e, i, n) {
          function s(t) {
            (h.of = t), a.is(":hidden") || a.position(h);
          }
          var o,
            a,
            r,
            l,
            h = t.extend({}, this.options.position);
          if (n) {
            if ((o = this._find(i)))
              return void o.tooltip.find(".ui-tooltip-content").html(n);
            i.is("[title]") &&
              (e && "mouseover" === e.type
                ? i.attr("title", "")
                : i.removeAttr("title")),
              (o = this._tooltip(i)),
              (a = o.tooltip),
              this._addDescribedBy(i, a.attr("id")),
              a.find(".ui-tooltip-content").html(n),
              this.liveRegion.children().hide(),
              n.clone
                ? (l = n.clone()).removeAttr("id").find("[id]").removeAttr("id")
                : (l = n),
              t("<div>").html(l).appendTo(this.liveRegion),
              this.options.track && e && /^mouse/.test(e.type)
                ? (this._on(this.document, { mousemove: s }), s(e))
                : a.position(t.extend({ of: i }, this.options.position)),
              a.hide(),
              this._show(a, this.options.show),
              this.options.show &&
                this.options.show.delay &&
                (r = this.delayedShow =
                  setInterval(function () {
                    a.is(":visible") && (s(h.of), clearInterval(r));
                  }, t.fx.interval)),
              this._trigger("open", e, { tooltip: a });
          }
        },
        _registerCloseHandlers: function (e, i) {
          var n = {
            keyup: function (e) {
              if (e.keyCode === t.ui.keyCode.ESCAPE) {
                var n = t.Event(e);
                (n.currentTarget = i[0]), this.close(n, !0);
              }
            },
          };
          i[0] !== this.element[0] &&
            (n.remove = function () {
              this._removeTooltip(this._find(i).tooltip);
            }),
            (e && "mouseover" !== e.type) || (n.mouseleave = "close"),
            (e && "focusin" !== e.type) || (n.focusout = "close"),
            this._on(!0, i, n);
        },
        close: function (e) {
          var i,
            n = this,
            s = t(e ? e.currentTarget : this.element),
            o = this._find(s);
          return o
            ? ((i = o.tooltip),
              void (
                o.closing ||
                (clearInterval(this.delayedShow),
                s.data("ui-tooltip-title") &&
                  !s.attr("title") &&
                  s.attr("title", s.data("ui-tooltip-title")),
                this._removeDescribedBy(s),
                (o.hiding = !0),
                i.stop(!0),
                this._hide(i, this.options.hide, function () {
                  n._removeTooltip(t(this));
                }),
                s.removeData("ui-tooltip-open"),
                this._off(s, "mouseleave focusout keyup"),
                s[0] !== this.element[0] && this._off(s, "remove"),
                this._off(this.document, "mousemove"),
                e &&
                  "mouseleave" === e.type &&
                  t.each(this.parents, function (e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e];
                  }),
                (o.closing = !0),
                this._trigger("close", e, { tooltip: i }),
                o.hiding || (o.closing = !1))
              ))
            : void s.removeData("ui-tooltip-open");
        },
        _tooltip: function (e) {
          var i = t("<div>")
              .attr("role", "tooltip")
              .addClass(
                "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                  (this.options.tooltipClass || ""),
              ),
            n = i.uniqueId().attr("id");
          return (
            t("<div>").addClass("ui-tooltip-content").appendTo(i),
            i.appendTo(this.document[0].body),
            (this.tooltips[n] = { element: e, tooltip: i })
          );
        },
        _find: function (t) {
          var e = t.data("ui-tooltip-id");
          return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function (t) {
          t.remove(), delete this.tooltips[t.attr("id")];
        },
        _destroy: function () {
          var e = this;
          t.each(this.tooltips, function (i, n) {
            var s = t.Event("blur"),
              o = n.element;
            (s.target = s.currentTarget = o[0]),
              e.close(s, !0),
              t("#" + i).remove(),
              o.data("ui-tooltip-title") &&
                (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"));
          }),
            this.liveRegion.remove();
        },
      });
  }),
  /*!
   * jQuery Migrate - v3.0.0 - 2016-06-09
   * Copyright jQuery Foundation and other contributors
   */
  (function (t, e) {
    "use strict";
    (t.migrateVersion = "3.0.0"),
      (function () {
        t.migrateMute = !0;
        var i =
          e.console &&
          e.console.log &&
          function () {
            e.console.log.apply(e.console, arguments);
          };
        i &&
          ((t && !/^[12]\./.test(t.fn.jquery)) ||
            i("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
          t.migrateWarnings &&
            i("JQMIGRATE: Migrate plugin loaded multiple times"),
          i(
            "JQMIGRATE: Migrate is installed" +
              (t.migrateMute ? "" : " with logging active") +
              ", version " +
              t.migrateVersion,
          ));
      })();
    var i = {};
    function n(n) {
      var s = e.console;
      i[n] ||
        ((i[n] = !0),
        t.migrateWarnings.push(n),
        s &&
          s.warn &&
          !t.migrateMute &&
          (s.warn("JQMIGRATE: " + n), t.migrateTrace && s.trace && s.trace()));
    }
    function s(t, e, i, s) {
      Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return n(s), i;
        },
      });
    }
    (t.migrateWarnings = []),
      void 0 === t.migrateTrace && (t.migrateTrace = !0),
      (t.migrateReset = function () {
        (i = {}), (t.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        n("jQuery is not compatible with Quirks Mode");
    var o,
      a = t.fn.init,
      r = t.isNumeric,
      l = t.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    for (o in ((t.fn.init = function (t) {
      var e = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof t &&
          "#" === t &&
          (n("jQuery( '#' ) is not a valid selector"), (e[0] = [])),
        a.apply(this, e)
      );
    }),
    (t.fn.init.prototype = t.fn),
    (t.find = function (t) {
      var e = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && h.test(t))
        try {
          document.querySelector(t);
        } catch (i) {
          t = t.replace(u, function (t, e, i, n) {
            return "[" + e + i + '"' + n + '"]';
          });
          try {
            document.querySelector(t),
              n("Attribute selector with '#' must be quoted: " + e[0]),
              (e[0] = t);
          } catch (t) {
            n("Attribute selector with '#' was not fixed: " + e[0]);
          }
        }
      return l.apply(this, e);
    }),
    l))
      Object.prototype.hasOwnProperty.call(l, o) && (t.find[o] = l[o]);
    (t.fn.size = function () {
      return (
        n("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
      );
    }),
      (t.parseJSON = function () {
        return (
          n("jQuery.parseJSON is deprecated; use JSON.parse"),
          JSON.parse.apply(null, arguments)
        );
      }),
      (t.isNumeric = function (e) {
        var i,
          s,
          o = r(e),
          a =
            ((s = (i = e) && i.toString()),
            !t.isArray(i) && s - parseFloat(s) + 1 >= 0);
        return (
          o !== a &&
            n("jQuery.isNumeric() should not be called on constructed objects"),
          a
        );
      }),
      s(
        t,
        "unique",
        t.uniqueSort,
        "jQuery.unique is deprecated, use jQuery.uniqueSort",
      ),
      s(
        t.expr,
        "filters",
        t.expr.pseudos,
        "jQuery.expr.filters is now jQuery.expr.pseudos",
      ),
      s(
        t.expr,
        ":",
        t.expr.pseudos,
        'jQuery.expr[":"] is now jQuery.expr.pseudos',
      );
    var c = t.ajax;
    t.ajax = function () {
      var t = c.apply(this, arguments);
      return (
        t.promise &&
          (s(t, "success", t.done, "jQXHR.success is deprecated and removed"),
          s(t, "error", t.fail, "jQXHR.error is deprecated and removed"),
          s(
            t,
            "complete",
            t.always,
            "jQXHR.complete is deprecated and removed",
          )),
        t
      );
    };
    var d = t.fn.removeAttr,
      p = t.fn.toggleClass,
      f = /\S+/g;
    (t.fn.removeAttr = function (e) {
      var i = this;
      return (
        t.each(e.match(f), function (e, s) {
          t.expr.match.bool.test(s) &&
            (n("jQuery.fn.removeAttr no longer sets boolean properties: " + s),
            i.prop(s, !1));
        }),
        d.apply(this, arguments)
      );
    }),
      (t.fn.toggleClass = function (e) {
        return void 0 !== e && "boolean" != typeof e
          ? p.apply(this, arguments)
          : (n("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var i = (this.getAttribute && this.getAttribute("class")) || "";
              i && t.data(this, "__className__", i),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    i || !1 === e ? "" : t.data(this, "__className__") || "",
                  );
            }));
      });
    var m = !1;
    t.swap &&
      t.each(["height", "width", "reliableMarginRight"], function (e, i) {
        var n = t.cssHooks[i] && t.cssHooks[i].get;
        n &&
          (t.cssHooks[i].get = function () {
            var t;
            return (m = !0), (t = n.apply(this, arguments)), (m = !1), t;
          });
      }),
      (t.swap = function (t, e, i, s) {
        var o,
          a,
          r = {};
        for (a in (m || n("jQuery.swap() is undocumented and deprecated"), e))
          (r[a] = t.style[a]), (t.style[a] = e[a]);
        for (a in ((o = i.apply(t, s || [])), e)) t.style[a] = r[a];
        return o;
      });
    var g = t.data;
    t.data = function (e, i, s) {
      var o;
      return i &&
        i !== t.camelCase(i) &&
        (o = t.hasData(e) && g.call(this, e)) &&
        i in o
        ? (n("jQuery.data() always sets/gets camelCased names: " + i),
          arguments.length > 2 && (o[i] = s),
          o[i])
        : g.apply(this, arguments);
    };
    var v = t.Tween.prototype.run;
    t.Tween.prototype.run = function (e) {
      t.easing[this.easing].length > 1 &&
        (n(
          'easing function "jQuery.easing.' +
            this.easing.toString() +
            '" should use only first argument',
        ),
        (t.easing[this.easing] = t.easing[this.easing].bind(
          t.easing,
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration,
        ))),
        v.apply(this, arguments);
    };
    var y = t.fn.load,
      b = t.event.fix;
    (t.event.props = []),
      (t.event.fixHooks = {}),
      (t.event.fix = function (e) {
        var i,
          s = e.type,
          o = this.fixHooks[s],
          a = t.event.props;
        if (a.length)
          for (
            n("jQuery.event.props are deprecated and removed: " + a.join());
            a.length;

          )
            t.event.addProp(a.pop());
        if (
          o &&
          !o._migrated_ &&
          ((o._migrated_ = !0),
          n("jQuery.event.fixHooks are deprecated and removed: " + s),
          (a = o.props) && a.length)
        )
          for (; a.length; ) t.event.addProp(a.pop());
        return (i = b.call(this, e)), o && o.filter ? o.filter(i, e) : i;
      }),
      t.each(["load", "unload", "error"], function (e, i) {
        t.fn[i] = function () {
          var t = Array.prototype.slice.call(arguments, 0);
          return "load" === i && "string" == typeof t[0]
            ? y.apply(this, t)
            : (n("jQuery.fn." + i + "() is deprecated"),
              t.splice(0, 0, i),
              arguments.length
                ? this.on.apply(this, t)
                : (this.triggerHandler.apply(this, t), this));
        };
      }),
      t(function () {
        t(document).triggerHandler("ready");
      }),
      (t.event.special.ready = {
        setup: function () {
          this === document && n("'ready' event is deprecated");
        },
      }),
      t.fn.extend({
        bind: function (t, e, i) {
          return n("jQuery.fn.bind() is deprecated"), this.on(t, null, e, i);
        },
        unbind: function (t, e) {
          return n("jQuery.fn.unbind() is deprecated"), this.off(t, null, e);
        },
        delegate: function (t, e, i, s) {
          return n("jQuery.fn.delegate() is deprecated"), this.on(e, t, i, s);
        },
        undelegate: function (t, e, i) {
          return (
            n("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", i)
          );
        },
      });
    var _ = t.fn.offset;
    t.fn.offset = function () {
      var e,
        i = this[0],
        s = { top: 0, left: 0 };
      return i && i.nodeType
        ? ((e = (i.ownerDocument || document).documentElement),
          t.contains(e, i)
            ? _.apply(this, arguments)
            : (n(
                "jQuery.fn.offset() requires an element connected to a document",
              ),
              s))
        : (n("jQuery.fn.offset() requires a valid DOM element"), s);
    };
    var w = t.param;
    t.param = function (e, i) {
      var s = t.ajaxSettings && t.ajaxSettings.traditional;
      return (
        void 0 === i &&
          s &&
          (n("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
          (i = s)),
        w.call(this, e, i)
      );
    };
    var x = t.fn.andSelf || t.fn.addBack;
    t.fn.andSelf = function () {
      return (
        n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        x.apply(this, arguments)
      );
    };
    var C = t.Deferred,
      k = [
        [
          "resolve",
          "done",
          t.Callbacks("once memory"),
          t.Callbacks("once memory"),
          "resolved",
        ],
        [
          "reject",
          "fail",
          t.Callbacks("once memory"),
          t.Callbacks("once memory"),
          "rejected",
        ],
        ["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory")],
      ];
    t.Deferred = function (e) {
      var i = C(),
        s = i.promise();
      return (
        (i.pipe = s.pipe =
          function () {
            var e = arguments;
            return (
              n("deferred.pipe() is deprecated"),
              t
                .Deferred(function (n) {
                  t.each(k, function (o, a) {
                    var r = t.isFunction(e[o]) && e[o];
                    i[a[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && t.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[a[0] + "With"](
                            this === s ? n.promise() : this,
                            r ? [e] : arguments,
                          );
                    });
                  }),
                    (e = null);
                })
                .promise()
            );
          }),
        e && e.call(i, i),
        i
      );
    };
  })(jQuery, window);
var ModalEffects = (function () {
    var t;
    (t = document.querySelector(".md-overlay")),
      [].slice
        .call(document.querySelectorAll(".md-trigger"))
        .forEach(function (e, i) {
          var n = document.querySelector("#" + e.getAttribute("data-modal")),
            s = n.querySelector(".md-close");
          function o() {
            var t;
            (t = $(e).hasClass("md-setperspective")),
              $(n).removeClass("md-show"),
              t && $(document.documentElement).removeClass("md-perspective");
          }
          $(n).attr("style", ""),
            e.addEventListener("click", function (i) {
              $(n).addClass("md-show"),
                t.removeEventListener("click", o),
                t.addEventListener("click", o),
                $(e).hasClass("md-setperspective") &&
                  setTimeout(function () {
                    $(document.documentElement).addClass("md-perspective");
                  }, 25);
            }),
            s.addEventListener("click", function (t) {
              t.stopPropagation(), o();
            });
        });
  })(),
  Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r,
        l = "",
        h = 0;
      for (t = Base64._utf8_encode(t); h < t.length; )
        (s = (e = t.charCodeAt(h++)) >> 2),
          (o = ((3 & e) << 4) | ((i = t.charCodeAt(h++)) >> 4)),
          (a = ((15 & i) << 2) | ((n = t.charCodeAt(h++)) >> 6)),
          (r = 63 & n),
          isNaN(i) ? (a = r = 64) : isNaN(n) && (r = 64),
          (l =
            l +
            this._keyStr.charAt(s) +
            this._keyStr.charAt(o) +
            this._keyStr.charAt(a) +
            this._keyStr.charAt(r));
      return l;
    },
    decode: function (t) {
      var e,
        i,
        n,
        s,
        o,
        a,
        r = "",
        l = 0;
      for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length; )
        (e =
          (this._keyStr.indexOf(t.charAt(l++)) << 2) |
          ((s = this._keyStr.indexOf(t.charAt(l++))) >> 4)),
          (i =
            ((15 & s) << 4) | ((o = this._keyStr.indexOf(t.charAt(l++))) >> 2)),
          (n = ((3 & o) << 6) | (a = this._keyStr.indexOf(t.charAt(l++)))),
          (r += String.fromCharCode(e)),
          64 != o && (r += String.fromCharCode(i)),
          64 != a && (r += String.fromCharCode(n));
      return (r = Base64._utf8_decode(r));
    },
    _utf8_encode: function (t) {
      t = t.replace(/\r\n/g, "\n");
      for (var e = "", i = 0; i < t.length; i++) {
        var n = t.charCodeAt(i);
        n < 128
          ? (e += String.fromCharCode(n))
          : n > 127 && n < 2048
            ? ((e += String.fromCharCode((n >> 6) | 192)),
              (e += String.fromCharCode((63 & n) | 128)))
            : ((e += String.fromCharCode((n >> 12) | 224)),
              (e += String.fromCharCode(((n >> 6) & 63) | 128)),
              (e += String.fromCharCode((63 & n) | 128)));
      }
      return e;
    },
    _utf8_decode: function (t) {
      for (var e = "", i = 0, n = (c1 = c2 = 0); i < t.length; )
        (n = t.charCodeAt(i)) < 128
          ? ((e += String.fromCharCode(n)), i++)
          : n > 191 && n < 224
            ? ((c2 = t.charCodeAt(i + 1)),
              (e += String.fromCharCode(((31 & n) << 6) | (63 & c2))),
              (i += 2))
            : ((c2 = t.charCodeAt(i + 1)),
              (c3 = t.charCodeAt(i + 2)),
              (e += String.fromCharCode(
                ((15 & n) << 12) | ((63 & c2) << 6) | (63 & c3),
              )),
              (i += 3));
      return e;
    },
  };
function runEffect(t, e, i) {
  var n = t,
    s = {};
  "scale" === n
    ? (s = { percent: 100 })
    : "size" === n && (s = { to: { width: 280, height: 185 } }),
    $(e).show(n, s, i, callback);
}
function hideIt(t, e, i) {
  var n = t,
    s = {};
  "scale" === n
    ? (s = { percent: 0 })
    : "size" === n && (s = { to: { width: 200, height: 60 } }),
    $(e).hide(n, s, i, callback);
}
function callback() {}
!(function () {
  for (
    var t,
      e = function () {},
      i = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      n = i.length,
      s = (window.console = window.console || {});
    n--;

  )
    s[(t = i[n])] || (s[t] = e);
})(),
  (function (t) {
    t.fn.jrumble = function (e) {
      var i = t.extend(
        { x: 2, y: 2, rotation: 1, speed: 15, opacity: !1, opacityMin: 0.5 },
        e,
      );
      return this.each(function () {
        var e,
          n,
          s = t(this),
          o = 2 * i.x,
          a = 2 * i.y,
          r = 2 * i.rotation,
          l = 0 === i.speed ? 1 : i.speed,
          h = i.opacity,
          u = i.opacityMin,
          c = function () {
            var t = Math.floor(Math.random() * (o + 1)) - o / 2,
              i = Math.floor(Math.random() * (a + 1)) - a / 2,
              n = Math.floor(Math.random() * (r + 1)) - r / 2,
              l = h ? Math.random() + u : 1;
            (t = 0 === t && 0 !== o ? (Math.random() < 0.5 ? 1 : -1) : t),
              (i = 0 === i && 0 !== a ? (Math.random() < 0.5 ? 1 : -1) : i);
            "inline" === s.css("display") &&
              ((e = !0), s.css("display", "inline-block")),
              s.css({
                position: "relative",
                left: t + "px",
                top: i + "px",
                "-ms-filter":
                  "progid:DXImageTransform.Microsoft.Alpha(Opacity=" +
                  100 * l +
                  ")",
                filter: "alpha(opacity=" + 100 * l + ")",
                "-moz-opacity": l,
                "-khtml-opacity": l,
                opacity: l,
                "-webkit-transform": "rotate(" + n + "deg)",
                "-moz-transform": "rotate(" + n + "deg)",
                "-ms-transform": "rotate(" + n + "deg)",
                "-o-transform": "rotate(" + n + "deg)",
                transform: "rotate(" + n + "deg)",
              });
          },
          d = {
            left: 0,
            top: 0,
            "-ms-filter":
              "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
            filter: "alpha(opacity=100)",
            "-moz-opacity": 1,
            "-khtml-opacity": 1,
            opacity: 1,
            "-webkit-transform": "rotate(0deg)",
            "-moz-transform": "rotate(0deg)",
            "-ms-transform": "rotate(0deg)",
            "-o-transform": "rotate(0deg)",
            transform: "rotate(0deg)",
          };
        s.bind({
          startRumble: function (t) {
            t.stopPropagation(), clearInterval(n), (n = setInterval(c, l));
          },
          stopRumble: function (t) {
            t.stopPropagation(),
              clearInterval(n),
              e && s.css("display", "inline"),
              s.css(d);
          },
        });
      });
    };
  })(jQuery),
  "function" != typeof Object.create &&
    (Object.create = function (t) {
      function e() {}
      return (e.prototype = t), new e();
    }),
  (function (t) {
    var e = {
      init: function (e) {
        return (
          (this.options = t.extend({}, t.noty.defaults, e)),
          (this.options.layout = this.options.custom
            ? t.noty.layouts.inline
            : t.noty.layouts[this.options.layout]),
          t.noty.themes[this.options.theme]
            ? (this.options.theme = t.noty.themes[this.options.theme])
            : (e.themeClassName = this.options.theme),
          delete e.layout,
          delete e.theme,
          (this.options = t.extend(
            {},
            this.options,
            this.options.layout.options,
          )),
          (this.options.id =
            "noty_" + new Date().getTime() * Math.floor(1e6 * Math.random())),
          (this.options = t.extend({}, this.options, e)),
          this._build(),
          this
        );
      },
      _build: function () {
        var e = t(
          '<div class="noty_bar noty_type_' + this.options.type + '"></div>',
        ).attr("id", this.options.id);
        if (
          (e
            .append(this.options.template)
            .find(".noty_text")
            .html(this.options.text),
          (this.$bar =
            null !== this.options.layout.parent.object
              ? t(this.options.layout.parent.object)
                  .css(this.options.layout.parent.css)
                  .append(e)
              : e),
          this.options.themeClassName &&
            this.$bar
              .addClass(this.options.themeClassName)
              .addClass("noty_container_type_" + this.options.type),
          this.options.buttons)
        ) {
          (this.options.closeWith = []), (this.options.timeout = !1);
          var i = t("<div/>").addClass("noty_buttons");
          null !== this.options.layout.parent.object
            ? this.$bar.find(".noty_bar").append(i)
            : this.$bar.append(i);
          var n = this;
          t.each(this.options.buttons, function (e, i) {
            var s = t("<button/>")
              .addClass(i.addClass ? i.addClass : "gray")
              .html(i.text)
              .attr("id", i.id ? i.id : "button-" + e)
              .appendTo(n.$bar.find(".noty_buttons"))
              .bind("click", function () {
                t.isFunction(i.onClick) && i.onClick.call(s, n);
              });
          });
        }
        (this.$message = this.$bar.find(".noty_message")),
          (this.$closeButton = this.$bar.find(".noty_close")),
          (this.$buttons = this.$bar.find(".noty_buttons")),
          (t.noty.store[this.options.id] = this);
      },
      show: function () {
        var e = this;
        return (
          e.options.custom
            ? e.options.custom
                .find(e.options.layout.container.selector)
                .append(e.$bar)
            : t(e.options.layout.container.selector).append(e.$bar),
          e.options.theme &&
            e.options.theme.style &&
            e.options.theme.style.apply(e),
          "function" === t.type(e.options.layout.css)
            ? this.options.layout.css.apply(e.$bar)
            : e.$bar.css(this.options.layout.css || {}),
          e.$bar.addClass(e.options.layout.addClass),
          e.options.layout.container.style.apply(
            t(e.options.layout.container.selector),
          ),
          (e.showing = !0),
          e.options.theme &&
            e.options.theme.style &&
            e.options.theme.callback.onShow.apply(this),
          t.inArray("click", e.options.closeWith) > -1 &&
            e.$bar.css("cursor", "pointer").one("click", function (t) {
              e.stopPropagation(t),
                e.options.callback.onCloseClick &&
                  e.options.callback.onCloseClick.apply(e),
                e.close();
            }),
          t.inArray("hover", e.options.closeWith) > -1 &&
            e.$bar.one("mouseenter", function () {
              e.close();
            }),
          t.inArray("button", e.options.closeWith) > -1 &&
            e.$closeButton.one("click", function (t) {
              e.stopPropagation(t), e.close();
            }),
          -1 == t.inArray("button", e.options.closeWith) &&
            e.$closeButton.remove(),
          e.options.callback.onShow && e.options.callback.onShow.apply(e),
          e.$bar.animate(
            e.options.animation.open,
            e.options.animation.speed,
            e.options.animation.easing,
            function () {
              e.options.callback.afterShow &&
                e.options.callback.afterShow.apply(e),
                (e.showing = !1),
                (e.shown = !0);
            },
          ),
          e.options.timeout &&
            e.$bar
              .delay(e.options.timeout)
              .promise()
              .done(function () {
                e.close();
              }),
          this
        );
      },
      close: function () {
        if (
          !(
            this.closed ||
            (this.$bar && this.$bar.hasClass("i-am-closing-now"))
          )
        ) {
          var e = this;
          if (this.showing)
            return void e.$bar.queue(function () {
              e.close.apply(e);
            });
          if (!this.shown && !this.showing) {
            var i = [];
            return (
              t.each(t.noty.queue, function (t, n) {
                n.options.id != e.options.id && i.push(n);
              }),
              void (t.noty.queue = i)
            );
          }
          e.$bar.addClass("i-am-closing-now"),
            e.options.callback.onClose && e.options.callback.onClose.apply(e),
            e.$bar
              .clearQueue()
              .stop()
              .animate(
                e.options.animation.close,
                e.options.animation.speed,
                e.options.animation.easing,
                function () {
                  e.options.callback.afterClose &&
                    e.options.callback.afterClose.apply(e);
                },
              )
              .promise()
              .done(function () {
                e.options.modal &&
                  (t.notyRenderer.setModalCount(-1),
                  0 == t.notyRenderer.getModalCount() &&
                    t(".noty_modal").fadeOut("fast", function () {
                      t(this).remove();
                    })),
                  t.notyRenderer.setLayoutCountFor(e, -1),
                  0 == t.notyRenderer.getLayoutCountFor(e) &&
                    t(e.options.layout.container.selector).remove(),
                  void 0 !== e.$bar &&
                    null !== e.$bar &&
                    (e.$bar.remove(), (e.$bar = null), (e.closed = !0)),
                  delete t.noty.store[e.options.id],
                  e.options.theme.callback &&
                    e.options.theme.callback.onClose &&
                    e.options.theme.callback.onClose.apply(e),
                  e.options.dismissQueue ||
                    ((t.noty.ontap = !0), t.notyRenderer.render()),
                  e.options.maxVisible > 0 &&
                    e.options.dismissQueue &&
                    t.notyRenderer.render();
              });
        }
      },
      setText: function (t) {
        return (
          this.closed ||
            ((this.options.text = t), this.$bar.find(".noty_text").html(t)),
          this
        );
      },
      setType: function (t) {
        return (
          this.closed ||
            ((this.options.type = t),
            this.options.theme.style.apply(this),
            this.options.theme.callback.onShow.apply(this)),
          this
        );
      },
      setTimeout: function (t) {
        if (!this.closed) {
          var e = this;
          (this.options.timeout = t),
            e.$bar
              .delay(e.options.timeout)
              .promise()
              .done(function () {
                e.close();
              });
        }
        return this;
      },
      stopPropagation: function (t) {
        void 0 !== (t = t || window.event).stopPropagation
          ? t.stopPropagation()
          : (t.cancelBubble = !0);
      },
      closed: !1,
      showing: !1,
      shown: !1,
    };
    (t.notyRenderer = {}),
      (t.notyRenderer.init = function (i) {
        var n = Object.create(e).init(i);
        return (
          n.options.killer && t.noty.closeAll(),
          n.options.force ? t.noty.queue.unshift(n) : t.noty.queue.push(n),
          t.notyRenderer.render(),
          "object" == t.noty.returns ? n : n.options.id
        );
      }),
      (t.notyRenderer.render = function () {
        var e = t.noty.queue[0];
        "object" === t.type(e)
          ? e.options.dismissQueue
            ? e.options.maxVisible > 0
              ? t(e.options.layout.container.selector + " li").length <
                  e.options.maxVisible &&
                t.notyRenderer.show(t.noty.queue.shift())
              : t.notyRenderer.show(t.noty.queue.shift())
            : t.noty.ontap &&
              (t.notyRenderer.show(t.noty.queue.shift()), (t.noty.ontap = !1))
          : (t.noty.ontap = !0);
      }),
      (t.notyRenderer.show = function (e) {
        e.options.modal &&
          (t.notyRenderer.createModalFor(e), t.notyRenderer.setModalCount(1)),
          e.options.custom
            ? 0 ==
              e.options.custom.find(e.options.layout.container.selector).length
              ? e.options.custom.append(
                  t(e.options.layout.container.object).addClass("i-am-new"),
                )
              : e.options.custom
                  .find(e.options.layout.container.selector)
                  .removeClass("i-am-new")
            : 0 == t(e.options.layout.container.selector).length
              ? t("body").append(
                  t(e.options.layout.container.object).addClass("i-am-new"),
                )
              : t(e.options.layout.container.selector).removeClass("i-am-new"),
          t.notyRenderer.setLayoutCountFor(e, 1),
          e.show();
      }),
      (t.notyRenderer.createModalFor = function (e) {
        if (0 == t(".noty_modal").length) {
          var i = t("<div/>")
            .addClass("noty_modal")
            .addClass(e.options.theme)
            .data("noty_modal_count", 0);
          e.options.theme.modal &&
            e.options.theme.modal.css &&
            i.css(e.options.theme.modal.css),
            i.prependTo(t("body")).fadeIn("fast");
        }
      }),
      (t.notyRenderer.getLayoutCountFor = function (e) {
        return (
          t(e.options.layout.container.selector).data("noty_layout_count") || 0
        );
      }),
      (t.notyRenderer.setLayoutCountFor = function (e, i) {
        return t(e.options.layout.container.selector).data(
          "noty_layout_count",
          t.notyRenderer.getLayoutCountFor(e) + i,
        );
      }),
      (t.notyRenderer.getModalCount = function () {
        return t(".noty_modal").data("noty_modal_count") || 0;
      }),
      (t.notyRenderer.setModalCount = function (e) {
        return t(".noty_modal").data(
          "noty_modal_count",
          t.notyRenderer.getModalCount() + e,
        );
      }),
      (t.fn.noty = function (e) {
        return (e.custom = t(this)), t.notyRenderer.init(e);
      }),
      (t.noty = {}),
      (t.noty.queue = []),
      (t.noty.ontap = !0),
      (t.noty.layouts = {}),
      (t.noty.themes = {}),
      (t.noty.returns = "object"),
      (t.noty.store = {}),
      (t.noty.get = function (e) {
        return !!t.noty.store.hasOwnProperty(e) && t.noty.store[e];
      }),
      (t.noty.close = function (e) {
        return !!t.noty.get(e) && t.noty.get(e).close();
      }),
      (t.noty.setText = function (e, i) {
        return !!t.noty.get(e) && t.noty.get(e).setText(i);
      }),
      (t.noty.setType = function (e, i) {
        return !!t.noty.get(e) && t.noty.get(e).setType(i);
      }),
      (t.noty.clearQueue = function () {
        t.noty.queue = [];
      }),
      (t.noty.closeAll = function () {
        t.noty.clearQueue(),
          t.each(t.noty.store, function (t, e) {
            e.close();
          });
      });
    var i = window.alert;
    (t.noty.consumeAlert = function (e) {
      window.alert = function (i) {
        e ? (e.text = i) : (e = { text: i }), t.notyRenderer.init(e);
      };
    }),
      (t.noty.stopConsumeAlert = function () {
        window.alert = i;
      }),
      (t.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: !0,
        template:
          '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
          open: { height: "toggle" },
          close: { height: "toggle" },
          easing: "swing",
          speed: 500,
        },
        timeout: !1,
        force: !1,
        modal: !1,
        maxVisible: 5,
        killer: !1,
        closeWith: ["click"],
        callback: {
          onShow: function () {},
          afterShow: function () {},
          onClose: function () {},
          afterClose: function () {},
          onCloseClick: function () {},
        },
        buttons: !1,
      }),
      t(window).resize(function () {
        t.each(t.noty.layouts, function (e, i) {
          i.container.style.apply(t(i.container.selector));
        });
      });
  })(jQuery),
  (window.noty = function (t) {
    return jQuery.notyRenderer.init(t);
  }),
  (function (t) {
    t.noty.layouts.bottom = {
      name: "bottom",
      options: {},
      container: {
        object: '<ul id="noty_bottom_layout_container" />',
        selector: "ul#noty_bottom_layout_container",
        style: function () {
          t(this).css({
            bottom: 0,
            left: "5%",
            position: "fixed",
            width: "90%",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 9999999,
          });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.bottomCenter = {
      name: "bottomCenter",
      options: {},
      container: {
        object: '<ul id="noty_bottomCenter_layout_container" />',
        selector: "ul#noty_bottomCenter_layout_container",
        style: function () {
          t(this).css({
            bottom: 20,
            left: 0,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          }),
            t(this).css({
              left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
            });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.bottomLeft = {
      name: "bottomLeft",
      options: {},
      container: {
        object: '<ul id="noty_bottomLeft_layout_container" />',
        selector: "ul#noty_bottomLeft_layout_container",
        style: function () {
          t(this).css({
            bottom: 20,
            left: 20,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          }),
            window.innerWidth < 600 && t(this).css({ left: 5 });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.bottomRight = {
      name: "bottomRight",
      options: {},
      container: {
        object: '<ul id="noty_bottomRight_layout_container" />',
        selector: "ul#noty_bottomRight_layout_container",
        style: function () {
          t(this).css({
            bottom: 20,
            right: 20,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          }),
            window.innerWidth < 600 && t(this).css({ right: 5 });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.center = {
      name: "center",
      options: {},
      container: {
        object: '<ul id="noty_center_layout_container" />',
        selector: "ul#noty_center_layout_container",
        style: function () {
          t(this).css({
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          });
          var e = t(this)
            .clone()
            .css({
              visibility: "hidden",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
            })
            .attr("id", "dupe");
          t("body").append(e),
            e.find(".i-am-closing-now").remove(),
            e.find("li").css("display", "block");
          var i = e.height();
          e.remove(),
            t(this).hasClass("i-am-new")
              ? t(this).css({
                  left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                  top: (t(window).height() - i) / 2 + "px",
                })
              : t(this).animate(
                  {
                    left:
                      (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                    top: (t(window).height() - i) / 2 + "px",
                  },
                  500,
                );
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.centerLeft = {
      name: "centerLeft",
      options: {},
      container: {
        object: '<ul id="noty_centerLeft_layout_container" />',
        selector: "ul#noty_centerLeft_layout_container",
        style: function () {
          t(this).css({
            left: 20,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          });
          var e = t(this)
            .clone()
            .css({
              visibility: "hidden",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
            })
            .attr("id", "dupe");
          t("body").append(e),
            e.find(".i-am-closing-now").remove(),
            e.find("li").css("display", "block");
          var i = e.height();
          e.remove(),
            t(this).hasClass("i-am-new")
              ? t(this).css({ top: (t(window).height() - i) / 2 + "px" })
              : t(this).animate(
                  { top: (t(window).height() - i) / 2 + "px" },
                  500,
                ),
            window.innerWidth < 600 && t(this).css({ left: 5 });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.centerRight = {
      name: "centerRight",
      options: {},
      container: {
        object: '<ul id="noty_centerRight_layout_container" />',
        selector: "ul#noty_centerRight_layout_container",
        style: function () {
          t(this).css({
            right: 20,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          });
          var e = t(this)
            .clone()
            .css({
              visibility: "hidden",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
            })
            .attr("id", "dupe");
          t("body").append(e),
            e.find(".i-am-closing-now").remove(),
            e.find("li").css("display", "block");
          var i = e.height();
          e.remove(),
            t(this).hasClass("i-am-new")
              ? t(this).css({ top: (t(window).height() - i) / 2 + "px" })
              : t(this).animate(
                  { top: (t(window).height() - i) / 2 + "px" },
                  500,
                ),
            window.innerWidth < 600 && t(this).css({ right: 5 });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.inline = {
      name: "inline",
      options: {},
      container: {
        object: '<ul class="noty_inline_layout_container" />',
        selector: "ul.noty_inline_layout_container",
        style: function () {
          t(this).css({
            width: "100%",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 9999999,
          });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.top = {
      name: "top",
      options: {},
      container: {
        object: '<ul id="noty_top_layout_container" />',
        selector: "ul#noty_top_layout_container",
        style: function () {
          t(this).css({
            top: 0,
            left: "5%",
            position: "fixed",
            width: "90%",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 9999999,
          });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.topCenter = {
      name: "topCenter",
      options: {},
      container: {
        object: '<ul id="noty_topCenter_layout_container" />',
        selector: "ul#noty_topCenter_layout_container",
        style: function () {
          t(this).css({
            top: 20,
            left: 0,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          }),
            t(this).css({
              left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
            });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.topLeft = {
      name: "topLeft",
      options: {},
      container: {
        object: '<ul id="noty_topLeft_layout_container" />',
        selector: "ul#noty_topLeft_layout_container",
        style: function () {
          t(this).css({
            top: 20,
            left: 20,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          }),
            window.innerWidth < 600 && t(this).css({ left: 5 });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.topRight = {
      name: "topRight",
      options: {},
      container: {
        object: '<ul id="noty_topRight_layout_container" />',
        selector: "ul#noty_topRight_layout_container",
        style: function () {
          t(this).css({
            top: 20,
            right: 20,
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          }),
            window.innerWidth < 600 && t(this).css({ right: 5 });
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  (function (t) {
    t.noty.themes.defaultTheme = {
      name: "defaultTheme",
      helpers: {
        borderFix: function () {
          if (this.options.dismissQueue) {
            var e =
              this.options.layout.container.selector +
              " " +
              this.options.layout.parent.selector;
            switch (this.options.layout.name) {
              case "top":
                t(e).css({ borderRadius: "0px 0px 0px 0px" }),
                  t(e).last().css({ borderRadius: "0px 0px 5px 5px" });
                break;
              case "topCenter":
              case "topLeft":
              case "topRight":
              case "bottomCenter":
              case "bottomLeft":
              case "bottomRight":
              case "center":
              case "centerLeft":
              case "centerRight":
              case "inline":
                t(e).css({ borderRadius: "0px 0px 0px 0px" }),
                  t(e)
                    .first()
                    .css({
                      "border-top-left-radius": "5px",
                      "border-top-right-radius": "5px",
                    }),
                  t(e)
                    .last()
                    .css({
                      "border-bottom-left-radius": "5px",
                      "border-bottom-right-radius": "5px",
                    });
                break;
              case "bottom":
                t(e).css({ borderRadius: "0px 0px 0px 0px" }),
                  t(e).first().css({ borderRadius: "5px 5px 0px 0px" });
            }
          }
        },
      },
      modal: {
        css: {
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          zIndex: 1e4,
          opacity: 0.6,
          display: "none",
          left: 0,
          top: 0,
        },
      },
      style: function () {
        switch (
          (this.$bar.css({
            overflow: "hidden",
            background:
              "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff",
          }),
          this.$message.css({
            fontSize: "13px",
            lineHeight: "16px",
            textAlign: "center",
            padding: "8px 10px 9px",
            width: "auto",
            position: "relative",
          }),
          this.$closeButton.css({
            position: "absolute",
            top: 4,
            right: 4,
            width: 10,
            height: 10,
            background:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",
            display: "none",
            cursor: "pointer",
          }),
          this.$buttons.css({
            padding: 5,
            textAlign: "right",
            borderTop: "1px solid #ccc",
            backgroundColor: "#fff",
          }),
          this.$buttons.find("button").css({ marginLeft: 5 }),
          this.$buttons.find("button:first").css({ marginLeft: 0 }),
          this.$bar.bind({
            mouseenter: function () {
              t(this).find(".noty_close").stop().fadeTo("normal", 1);
            },
            mouseleave: function () {
              t(this).find(".noty_close").stop().fadeTo("normal", 0);
            },
          }),
          this.options.layout.name)
        ) {
          case "top":
            this.$bar.css({
              borderRadius: "0px 0px 5px 5px",
              borderBottom: "2px solid #eee",
              borderLeft: "2px solid #eee",
              borderRight: "2px solid #eee",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            });
            break;
          case "topCenter":
          case "center":
          case "bottomCenter":
          case "inline":
            this.$bar.css({
              borderRadius: "5px",
              border: "1px solid #eee",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }),
              this.$message.css({ fontSize: "13px", textAlign: "center" });
            break;
          case "topLeft":
          case "topRight":
          case "bottomLeft":
          case "bottomRight":
          case "centerLeft":
          case "centerRight":
            this.$bar.css({
              borderRadius: "5px",
              border: "1px solid #eee",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }),
              this.$message.css({ fontSize: "13px", textAlign: "left" });
            break;
          case "bottom":
            this.$bar.css({
              borderRadius: "5px 5px 0px 0px",
              borderTop: "2px solid #eee",
              borderLeft: "2px solid #eee",
              borderRight: "2px solid #eee",
              boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
            });
            break;
          default:
            this.$bar.css({
              border: "2px solid #eee",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            });
        }
        switch (this.options.type) {
          case "alert":
          case "notification":
          default:
            this.$bar.css({
              backgroundColor: "#FFF",
              borderColor: "#CCC",
              color: "#444",
            });
            break;
          case "warning":
            this.$bar.css({
              backgroundColor: "#FFEAA8",
              borderColor: "#FFC237",
              color: "#826200",
            }),
              this.$buttons.css({ borderTop: "1px solid #FFC237" });
            break;
          case "error":
            this.$bar.css({
              backgroundColor: "red",
              borderColor: "darkred",
              color: "#FFF",
            }),
              this.$message.css({ fontWeight: "bold" }),
              this.$buttons.css({ borderTop: "1px solid darkred" });
            break;
          case "information":
            this.$bar.css({
              backgroundColor: "#57B7E2",
              borderColor: "#0B90C4",
              color: "#FFF",
            }),
              this.$buttons.css({ borderTop: "1px solid #0B90C4" });
            break;
          case "success":
            this.$bar.css({
              backgroundColor: "lightgreen",
              borderColor: "#50C24E",
              color: "darkgreen",
            }),
              this.$buttons.css({ borderTop: "1px solid #50C24E" });
        }
      },
      callback: {
        onShow: function () {
          t.noty.themes.defaultTheme.helpers.borderFix.apply(this);
        },
        onClose: function () {
          t.noty.themes.defaultTheme.helpers.borderFix.apply(this);
        },
      },
    };
  })(jQuery),
  (function (t) {
    t.noty.layouts.center = {
      name: "center",
      options: {},
      container: {
        object: '<ul id="noty_center_layout_container" />',
        selector: "ul#noty_center_layout_container",
        style: function () {
          t(this).css({
            position: "fixed",
            width: "310px",
            height: "auto",
            margin: 0,
            padding: 0,
            listStyleType: "none",
            zIndex: 1e7,
          });
          var e = t(this)
            .clone()
            .css({
              visibility: "hidden",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
            })
            .attr("id", "dupe");
          t("body").append(e),
            e.find(".i-am-closing-now").remove(),
            e.find("li").css("display", "block");
          var i = e.height();
          e.remove(),
            t(this).hasClass("i-am-new")
              ? t(this).css({
                  left: (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                  top: (t(window).height() - i) / 2 + "px",
                })
              : t(this).animate(
                  {
                    left:
                      (t(window).width() - t(this).outerWidth(!1)) / 2 + "px",
                    top: (t(window).height() - i) / 2 + "px",
                  },
                  500,
                );
        },
      },
      parent: { object: "<li />", selector: "li", css: {} },
      css: { display: "none", width: "310px" },
      addClass: "",
    };
  })(jQuery),
  /*!
   * jQuery Cookie Plugin v1.4.0
   * https://github.com/carhartl/jquery-cookie
   *
   * Copyright 2013 Klaus Hartl
   * Released under the MIT license
   */
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    var e = /\+/g;
    function i(t) {
      return o.raw ? t : encodeURIComponent(t);
    }
    function n(t) {
      return i(o.json ? JSON.stringify(t) : String(t));
    }
    function s(i, n) {
      var s = o.raw
        ? i
        : (function (t) {
            0 === t.indexOf('"') &&
              (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
              t = decodeURIComponent(t.replace(e, " "));
            } catch (t) {
              return;
            }
            try {
              return o.json ? JSON.parse(t) : t;
            } catch (t) {}
          })(i);
      return t.isFunction(n) ? n(s) : s;
    }
    var o = (t.cookie = function (e, a, r) {
      if (void 0 !== a && !t.isFunction(a)) {
        if ("number" == typeof (r = t.extend({}, o.defaults, r)).expires) {
          var l = r.expires,
            h = (r.expires = new Date());
          h.setDate(h.getDate() + l);
        }
        return (document.cookie = [
          i(e),
          "=",
          n(a),
          r.expires ? "; expires=" + r.expires.toUTCString() : "",
          r.path ? "; path=" + r.path : "",
          r.domain ? "; domain=" + r.domain : "",
          r.secure ? "; secure" : "",
        ].join(""));
      }
      for (
        var u,
          c = e ? void 0 : {},
          d = document.cookie ? document.cookie.split("; ") : [],
          p = 0,
          f = d.length;
        p < f;
        p++
      ) {
        var m = d[p].split("="),
          g = ((u = m.shift()), o.raw ? u : decodeURIComponent(u)),
          v = m.join("=");
        if (e && e === g) {
          c = s(v, a);
          break;
        }
        e || void 0 === (v = s(v)) || (c[g] = v);
      }
      return c;
    });
    (o.defaults = {}),
      (t.removeCookie = function (e, i) {
        return (
          void 0 !== t.cookie(e) &&
          (t.cookie(e, "", t.extend({}, i, { expires: -1 })), !0)
        );
      });
  }),
  (function (t, e) {
    function i(i, n) {
      function s(t) {
        return (
          ht.preferFlash &&
          it &&
          !ht.ignoreFlash &&
          ht.flash[t] !== e &&
          ht.flash[t]
        );
      }
      function o(t) {
        return function (e) {
          var i = this._s;
          return i && i._a ? t.call(this, e) : null;
        };
      }
      (this.setupOptions = {
        url: i || null,
        flashVersion: 8,
        debugMode: !0,
        debugFlash: !1,
        useConsole: !0,
        consoleOnly: !0,
        waitForWindowLoad: !1,
        bgColor: "#ffffff",
        useHighPerformance: !1,
        flashPollingInterval: null,
        html5PollingInterval: null,
        flashLoadTimeout: 1e3,
        wmode: null,
        allowScriptAccess: "always",
        useFlashBlock: !1,
        useHTML5Audio: !0,
        forceUseGlobalHTML5Audio: !1,
        ignoreMobileRestrictions: !1,
        html5Test: /^(probably|maybe)$/i,
        preferFlash: !1,
        noSWFCache: !1,
        idPrefix: "sound",
      }),
        (this.defaultOptions = {
          autoLoad: !1,
          autoPlay: !1,
          from: null,
          loops: 1,
          onid3: null,
          onload: null,
          whileloading: null,
          onplay: null,
          onpause: null,
          onresume: null,
          whileplaying: null,
          onposition: null,
          onstop: null,
          onfailure: null,
          onfinish: null,
          multiShot: !0,
          multiShotEvents: !1,
          position: null,
          pan: 0,
          stream: !0,
          to: null,
          type: null,
          usePolicyFile: !1,
          volume: 100,
        }),
        (this.flash9Options = {
          isMovieStar: null,
          usePeakData: !1,
          useWaveformData: !1,
          useEQData: !1,
          onbufferchange: null,
          ondataerror: null,
        }),
        (this.movieStarOptions = {
          bufferTime: 3,
          serverURL: null,
          onconnect: null,
          duration: null,
        }),
        (this.audioFormats = {
          mp3: {
            type: [
              'audio/mpeg; codecs="mp3"',
              "audio/mpeg",
              "audio/mp3",
              "audio/MPA",
              "audio/mpa-robust",
            ],
            required: !0,
          },
          mp4: {
            related: ["aac", "m4a", "m4b"],
            type: [
              'audio/mp4; codecs="mp4a.40.2"',
              "audio/aac",
              "audio/x-m4a",
              "audio/MP4A-LATM",
              "audio/mpeg4-generic",
            ],
            required: !1,
          },
          ogg: { type: ["audio/ogg; codecs=vorbis"], required: !1 },
          opus: {
            type: ["audio/ogg; codecs=opus", "audio/opus"],
            required: !1,
          },
          wav: {
            type: [
              'audio/wav; codecs="1"',
              "audio/wav",
              "audio/wave",
              "audio/x-wav",
            ],
            required: !1,
          },
        }),
        (this.movieID = "sm2-container"),
        (this.id = n || "sm2movie"),
        (this.debugID = "soundmanager-debug"),
        (this.debugURLParam = /([#?&])debug=1/i),
        (this.versionNumber = "V2.97a.20150601"),
        (this.altURL = this.movieURL = this.version = null),
        (this.enabled = this.swfLoaded = !1),
        (this.oMC = null),
        (this.sounds = {}),
        (this.soundIDs = []),
        (this.didFlashBlock = this.muted = !1),
        (this.filePattern = null),
        (this.filePatterns = {
          flash8: /\.mp3(\?.*)?$/i,
          flash9: /\.mp3(\?.*)?$/i,
        }),
        (this.features = {
          buffering: !1,
          peakData: !1,
          waveformData: !1,
          eqData: !1,
          movieStar: !1,
        }),
        (this.sandbox = {}),
        (this.html5 = { usingFlash: null }),
        (this.flash = {}),
        (this.ignoreFlash = this.html5Only = !1);
      var a,
        r,
        l,
        h,
        u,
        c,
        d,
        p,
        f,
        m,
        g,
        v,
        y,
        b,
        _,
        w,
        x,
        C,
        k,
        T,
        D,
        A,
        S,
        M,
        I,
        P,
        O,
        E,
        N,
        H,
        L,
        F,
        z,
        R,
        W,
        j,
        q,
        B,
        Y,
        U,
        Q,
        V,
        K,
        $,
        X,
        G,
        J,
        Z,
        tt,
        et,
        it,
        nt,
        st,
        ot,
        at,
        rt,
        lt,
        ht = this,
        ut = null,
        ct = null,
        dt = navigator.userAgent,
        pt = t.location.href.toString(),
        ft = document,
        mt = [],
        gt = !1,
        vt = !1,
        yt = !1,
        bt = !1,
        _t = !1,
        wt = null,
        xt = null,
        Ct = !1,
        kt = !1,
        Tt = 0,
        Dt = null,
        At = [],
        St = null,
        Mt = Array.prototype.slice,
        It = !1,
        Pt = 0,
        Ot = dt.match(/(ipad|iphone|ipod)/i),
        Et = dt.match(/android/i),
        Nt = dt.match(/msie/i),
        Ht = dt.match(/webkit/i),
        Lt = dt.match(/safari/i) && !dt.match(/chrome/i),
        Ft = dt.match(/opera/i),
        zt = dt.match(/(mobile|pre\/|xoom)/i) || Ot || Et,
        Rt =
          !pt.match(/usehtml5audio/i) &&
          !pt.match(/sm2\-ignorebadua/i) &&
          Lt &&
          !dt.match(/silk/i) &&
          dt.match(/OS X 10_6_([3-7])/i),
        Wt = ft.hasFocus !== e ? ft.hasFocus() : null,
        jt = Lt && (ft.hasFocus === e || !ft.hasFocus()),
        qt = !jt,
        Bt = /(mp3|mp4|mpa|m4a|m4b)/i,
        Yt = ft.location ? ft.location.protocol.match(/http/i) : null,
        Ut = Yt ? "" : "http://",
        Qt =
          /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
        Vt = "mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),
        Kt = new RegExp("\\.(" + Vt.join("|") + ")(\\?.*)?$", "i");
      (this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i),
        (this.useAltURL = !Yt);
      try {
        lt =
          Audio !== e &&
          (Ft && opera !== e && 10 > opera.version()
            ? new Audio(null)
            : new Audio()
          ).canPlayType !== e;
      } catch (t) {
        lt = !1;
      }
      (this.hasHTML5 = lt),
        (this.setup = function (t) {
          var i = !ht.url;
          return (
            t !== e && yt && St && ht.ok(),
            f(t),
            It ||
              (zt
                ? (ht.setupOptions.ignoreMobileRestrictions &&
                    !ht.setupOptions.forceUseGlobalHTML5Audio) ||
                  (At.push(k.globalHTML5), (It = !0))
                : ht.setupOptions.forceUseGlobalHTML5Audio &&
                  (At.push(k.globalHTML5), (It = !0))),
            !rt &&
              zt &&
              (ht.setupOptions.ignoreMobileRestrictions
                ? At.push(k.ignoreMobile)
                : ((ht.setupOptions.useHTML5Audio = !0),
                  (ht.setupOptions.preferFlash = !1),
                  Ot
                    ? (ht.ignoreFlash = !0)
                    : ((Et && !dt.match(/android\s2\.3/i)) || !Et) &&
                      (It = !0))),
            t &&
              (i && S && t.url !== e && ht.beginDelayedInit(),
              S ||
                t.url === e ||
                "complete" !== ft.readyState ||
                setTimeout(D, 1)),
            (rt = !0),
            ht
          );
        }),
        (this.supported = this.ok =
          function () {
            return St ? yt && !bt : ht.useHTML5Audio && ht.hasHTML5;
          }),
        (this.getMovie = function (e) {
          return r(e) || ft[e] || t[e];
        }),
        (this.createSound = function (t, i) {
          function n() {
            return (
              (s = R(s)),
              (ht.sounds[s.id] = new a(s)),
              ht.soundIDs.push(s.id),
              ht.sounds[s.id]
            );
          }
          var s,
            o = null;
          if (!yt || !ht.ok()) return !1;
          if (
            (i !== e && (t = { id: t, url: i }),
            ((s = p(t)).url = U(s.url)),
            s.id === e && (s.id = ht.setupOptions.idPrefix + Pt++),
            j(s.id, !0))
          )
            return ht.sounds[s.id];
          if (K(s)) (o = n())._setup_html5(s);
          else {
            if (
              ht.html5Only ||
              (ht.html5.usingFlash && s.url && s.url.match(/data\:/i))
            )
              return n();
            8 < c &&
              null === s.isMovieStar &&
              (s.isMovieStar = !!(
                s.serverURL ||
                (s.type && s.type.match(Qt)) ||
                (s.url && s.url.match(Kt))
              )),
              (s = W(s, void 0)),
              (o = n()),
              8 === c
                ? ct._createSound(s.id, s.loops || 1, s.usePolicyFile)
                : (ct._createSound(
                    s.id,
                    s.url,
                    s.usePeakData,
                    s.useWaveformData,
                    s.useEQData,
                    s.isMovieStar,
                    !!s.isMovieStar && s.bufferTime,
                    s.loops || 1,
                    s.serverURL,
                    s.duration || null,
                    s.autoPlay,
                    !0,
                    s.autoLoad,
                    s.usePolicyFile,
                  ),
                  s.serverURL ||
                    ((o.connected = !0), s.onconnect && s.onconnect.apply(o))),
              s.serverURL || (!s.autoLoad && !s.autoPlay) || o.load(s);
          }
          return !s.serverURL && s.autoPlay && o.play(), o;
        }),
        (this.destroySound = function (t, e) {
          if (!j(t)) return !1;
          var i,
            n = ht.sounds[t];
          for (
            n.stop(), n._iO = {}, n.unload(), i = 0;
            i < ht.soundIDs.length;
            i++
          )
            if (ht.soundIDs[i] === t) {
              ht.soundIDs.splice(i, 1);
              break;
            }
          return e || n.destruct(!0), delete ht.sounds[t], !0;
        }),
        (this.load = function (t, e) {
          return !!j(t) && ht.sounds[t].load(e);
        }),
        (this.unload = function (t) {
          return !!j(t) && ht.sounds[t].unload();
        }),
        (this.onposition = this.onPosition =
          function (t, e, i, n) {
            return !!j(t) && ht.sounds[t].onposition(e, i, n);
          }),
        (this.clearOnPosition = function (t, e, i) {
          return !!j(t) && ht.sounds[t].clearOnPosition(e, i);
        }),
        (this.start = this.play =
          function (t, e) {
            var i = null,
              n = e && !(e instanceof Object);
            if (!yt || !ht.ok()) return !1;
            if (j(t, n)) n && (e = { url: e });
            else {
              if (!n) return !1;
              n && (e = { url: e }),
                e && e.url && ((e.id = t), (i = ht.createSound(e).play()));
            }
            return null === i && (i = ht.sounds[t].play(e)), i;
          }),
        (this.setPosition = function (t, e) {
          return !!j(t) && ht.sounds[t].setPosition(e);
        }),
        (this.stop = function (t) {
          return !!j(t) && ht.sounds[t].stop();
        }),
        (this.stopAll = function () {
          for (var t in ht.sounds)
            ht.sounds.hasOwnProperty(t) && ht.sounds[t].stop();
        }),
        (this.pause = function (t) {
          return !!j(t) && ht.sounds[t].pause();
        }),
        (this.pauseAll = function () {
          var t;
          for (t = ht.soundIDs.length - 1; 0 <= t; t--)
            ht.sounds[ht.soundIDs[t]].pause();
        }),
        (this.resume = function (t) {
          return !!j(t) && ht.sounds[t].resume();
        }),
        (this.resumeAll = function () {
          var t;
          for (t = ht.soundIDs.length - 1; 0 <= t; t--)
            ht.sounds[ht.soundIDs[t]].resume();
        }),
        (this.togglePause = function (t) {
          return !!j(t) && ht.sounds[t].togglePause();
        }),
        (this.setPan = function (t, e) {
          return !!j(t) && ht.sounds[t].setPan(e);
        }),
        (this.setVolume = function (t, i) {
          var n, s;
          if (t === e || isNaN(t) || i !== e)
            return !!j(t) && ht.sounds[t].setVolume(i);
          for (n = 0, s = ht.soundIDs.length; n < s; n++)
            ht.sounds[ht.soundIDs[n]].setVolume(t);
        }),
        (this.mute = function (t) {
          var e = 0;
          if ((t instanceof String && (t = null), t))
            return !!j(t) && ht.sounds[t].mute();
          for (e = ht.soundIDs.length - 1; 0 <= e; e--)
            ht.sounds[ht.soundIDs[e]].mute();
          return (ht.muted = !0);
        }),
        (this.muteAll = function () {
          ht.mute();
        }),
        (this.unmute = function (t) {
          if ((t instanceof String && (t = null), t))
            return !!j(t) && ht.sounds[t].unmute();
          for (t = ht.soundIDs.length - 1; 0 <= t; t--)
            ht.sounds[ht.soundIDs[t]].unmute();
          return (ht.muted = !1), !0;
        }),
        (this.unmuteAll = function () {
          ht.unmute();
        }),
        (this.toggleMute = function (t) {
          return !!j(t) && ht.sounds[t].toggleMute();
        }),
        (this.getMemoryUse = function () {
          var t = 0;
          return ct && 8 !== c && (t = parseInt(ct._getMemoryUse(), 10)), t;
        }),
        (this.disable = function (i) {
          var n;
          if ((i === e && (i = !1), bt)) return !1;
          for (bt = !0, n = ht.soundIDs.length - 1; 0 <= n; n--)
            E(ht.sounds[ht.soundIDs[n]]);
          return d(i), tt.remove(t, "load", y), !0;
        }),
        (this.canPlayMIME = function (t) {
          var e;
          return (
            ht.hasHTML5 && (e = $({ type: t })),
            !e &&
              St &&
              (e =
                t && ht.ok()
                  ? !!((8 < c && t.match(Qt)) || t.match(ht.mimePattern))
                  : null),
            e
          );
        }),
        (this.canPlayURL = function (t) {
          var e;
          return (
            ht.hasHTML5 && (e = $({ url: t })),
            !e && St && (e = t && ht.ok() ? !!t.match(ht.filePattern) : null),
            e
          );
        }),
        (this.canPlayLink = function (t) {
          return (
            !(t.type === e || !t.type || !ht.canPlayMIME(t.type)) ||
            ht.canPlayURL(t.href)
          );
        }),
        (this.getSoundById = function (t, e) {
          return t ? ht.sounds[t] : null;
        }),
        (this.onready = function (e, i) {
          if ("function" != typeof e) throw L("needFunction", "onready");
          return i || (i = t), g("onready", e, i), v(), !0;
        }),
        (this.ontimeout = function (e, i) {
          if ("function" != typeof e) throw L("needFunction", "ontimeout");
          return (
            i || (i = t), g("ontimeout", e, i), v({ type: "ontimeout" }), !0
          );
        }),
        (this._wD = this._writeDebug =
          function (t, e) {
            return !0;
          }),
        (this._debug = function () {}),
        (this.reboot = function (e, i) {
          var n, s, o;
          for (n = ht.soundIDs.length - 1; 0 <= n; n--)
            ht.sounds[ht.soundIDs[n]].destruct();
          if (ct)
            try {
              Nt && (xt = ct.innerHTML), (wt = ct.parentNode.removeChild(ct));
            } catch (t) {}
          if (
            ((xt = wt = St = ct = null),
            (ht.enabled =
              S =
              yt =
              Ct =
              kt =
              gt =
              vt =
              bt =
              It =
              ht.swfLoaded =
                !1),
            (ht.soundIDs = []),
            (ht.sounds = {}),
            (Pt = 0),
            (rt = !1),
            e)
          )
            mt = [];
          else
            for (n in mt)
              if (mt.hasOwnProperty(n))
                for (s = 0, o = mt[n].length; s < o; s++) mt[n][s].fired = !1;
          return (
            (ht.html5 = { usingFlash: null }),
            (ht.flash = {}),
            (ht.html5Only = !1),
            (ht.ignoreFlash = !1),
            t.setTimeout(function () {
              i || ht.beginDelayedInit();
            }, 20),
            ht
          );
        }),
        (this.reset = function () {
          return ht.reboot(!0, !0);
        }),
        (this.getMoviePercent = function () {
          return ct && "PercentLoaded" in ct ? ct.PercentLoaded() : null;
        }),
        (this.beginDelayedInit = function () {
          (_t = !0),
            D(),
            setTimeout(function () {
              return !kt && (I(), T(), (kt = !0));
            }, 20),
            b();
        }),
        (this.destruct = function () {
          ht.disable(!0);
        }),
        (a = function (t) {
          var i,
            n,
            s,
            o,
            a,
            r,
            l,
            h,
            u,
            d,
            f,
            m = this,
            g = !1,
            v = [],
            y = 0,
            b = null;
          (n = i = null),
            (this.sID = this.id = t.id),
            (this.url = t.url),
            (this._iO = this.instanceOptions = this.options = p(t)),
            (this.pan = this.options.pan),
            (this.volume = this.options.volume),
            (this.isHTML5 = !1),
            (this._a = null),
            (f = !this.url),
            (this.id3 = {}),
            (this._debug = function () {}),
            (this.load = function (t) {
              var i;
              if (
                (t !== e
                  ? (m._iO = p(t, m.options))
                  : ((t = m.options),
                    (m._iO = t),
                    b && b !== m.url && ((m._iO.url = m.url), (m.url = null))),
                m._iO.url || (m._iO.url = m.url),
                (m._iO.url = U(m._iO.url)),
                !(i = m.instanceOptions = m._iO).url && !m.url)
              )
                return m;
              if (i.url === m.url && 0 !== m.readyState && 2 !== m.readyState)
                return (
                  3 === m.readyState &&
                    i.onload &&
                    at(m, function () {
                      i.onload.apply(m, [!!m.duration]);
                    }),
                  m
                );
              if (
                ((m.loaded = !1),
                (m.readyState = 1),
                (m.playState = 0),
                (m.id3 = {}),
                K(i))
              )
                m._setup_html5(i)._called_load ||
                  ((m._html5_canplay = !1),
                  m.url !== i.url && ((m._a.src = i.url), m.setPosition(0)),
                  (m._a.autobuffer = "auto"),
                  (m._a.preload = "auto"),
                  (m._a._called_load = !0));
              else {
                if (ht.html5Only || (m._iO.url && m._iO.url.match(/data\:/i)))
                  return m;
                try {
                  (m.isHTML5 = !1),
                    (m._iO = W(R(i))),
                    m._iO.autoPlay &&
                      (m._iO.position || m._iO.from) &&
                      (m._iO.autoPlay = !1),
                    (i = m._iO),
                    8 === c
                      ? ct._load(
                          m.id,
                          i.url,
                          i.stream,
                          i.autoPlay,
                          i.usePolicyFile,
                        )
                      : ct._load(
                          m.id,
                          i.url,
                          !!i.stream,
                          !!i.autoPlay,
                          i.loops || 1,
                          !!i.autoLoad,
                          i.usePolicyFile,
                        );
                } catch (t) {
                  P({ type: "SMSOUND_LOAD_JS_EXCEPTION", fatal: !0 });
                }
              }
              return (m.url = i.url), m;
            }),
            (this.unload = function () {
              return (
                0 !== m.readyState &&
                  (m.isHTML5
                    ? (r(), m._a && (m._a.pause(), (b = G(m._a))))
                    : 8 === c
                      ? ct._unload(m.id, "about:blank")
                      : ct._unload(m.id),
                  s()),
                m
              );
            }),
            (this.destruct = function (t) {
              m.isHTML5
                ? (r(),
                  m._a &&
                    (m._a.pause(),
                    G(m._a),
                    It || a(),
                    (m._a._s = null),
                    (m._a = null)))
                : ((m._iO.onfailure = null), ct._destroySound(m.id)),
                t || ht.destroySound(m.id, !0);
            }),
            (this.start = this.play =
              function (t, i) {
                var n, s, o, a, r;
                if (
                  ((s = !0),
                  (s = null),
                  (i = i === e || i),
                  t || (t = {}),
                  m.url && (m._iO.url = m.url),
                  (m._iO = p(m._iO, m.options)),
                  (m._iO = p(t, m._iO)),
                  (m._iO.url = U(m._iO.url)),
                  (m.instanceOptions = m._iO),
                  !m.isHTML5 && m._iO.serverURL && !m.connected)
                )
                  return m.getAutoPlay() || m.setAutoPlay(!0), m;
                if (
                  (K(m._iO) && (m._setup_html5(m._iO), l()),
                  1 !== m.playState ||
                    m.paused ||
                    (n = m._iO.multiShot) ||
                    (m.isHTML5 && m.setPosition(m._iO.position), (s = m)),
                  null !== s)
                )
                  return s;
                if (
                  (t.url &&
                    t.url !== m.url &&
                    (m.readyState || m.isHTML5 || 8 !== c || !f
                      ? m.load(m._iO)
                      : (f = !1)),
                  m.loaded ||
                    (0 === m.readyState
                      ? (m.isHTML5 || ht.html5Only
                          ? m.isHTML5
                            ? m.load(m._iO)
                            : (s = m)
                          : ((m._iO.autoPlay = !0), m.load(m._iO)),
                        (m.instanceOptions = m._iO))
                      : 2 === m.readyState && (s = m)),
                  null !== s)
                )
                  return s;
                if (
                  (!m.isHTML5 &&
                    9 === c &&
                    0 < m.position &&
                    m.position === m.duration &&
                    (t.position = 0),
                  m.paused &&
                    0 <= m.position &&
                    (!m._iO.serverURL || 0 < m.position))
                )
                  m.resume();
                else {
                  if (
                    ((m._iO = p(t, m._iO)),
                    ((!m.isHTML5 &&
                      null !== m._iO.position &&
                      0 < m._iO.position) ||
                      (null !== m._iO.from && 0 < m._iO.from) ||
                      null !== m._iO.to) &&
                      0 === m.instanceCount &&
                      0 === m.playState &&
                      !m._iO.serverURL)
                  ) {
                    if (
                      ((n = function () {
                        (m._iO = p(t, m._iO)), m.play(m._iO);
                      }),
                      m.isHTML5 && !m._html5_canplay
                        ? (m.load({ _oncanplay: n }), (s = !1))
                        : m.isHTML5 ||
                          m.loaded ||
                          (m.readyState && 2 === m.readyState) ||
                          (m.load({ onload: n }), (s = !1)),
                      null !== s)
                    )
                      return s;
                    m._iO = d();
                  }
                  (!m.instanceCount ||
                    m._iO.multiShotEvents ||
                    (m.isHTML5 && m._iO.multiShot && !It) ||
                    (!m.isHTML5 && 8 < c && !m.getAutoPlay())) &&
                    m.instanceCount++,
                    m._iO.onposition && 0 === m.playState && h(m),
                    (m.playState = 1),
                    (m.paused = !1),
                    (m.position =
                      m._iO.position === e || isNaN(m._iO.position)
                        ? 0
                        : m._iO.position),
                    m.isHTML5 || (m._iO = W(R(m._iO))),
                    m._iO.onplay && i && (m._iO.onplay.apply(m), (g = !0)),
                    m.setVolume(m._iO.volume, !0),
                    m.setPan(m._iO.pan, !0),
                    m.isHTML5
                      ? 2 > m.instanceCount
                        ? (l(),
                          (s = m._setup_html5()),
                          m.setPosition(m._iO.position),
                          s.play())
                        : ((o = new Audio(m._iO.url)),
                          (a = function () {
                            tt.remove(o, "ended", a),
                              m._onfinish(m),
                              G(o),
                              (o = null);
                          }),
                          (r = function () {
                            tt.remove(o, "canplay", r);
                            try {
                              o.currentTime = m._iO.position / 1e3;
                            } catch (t) {}
                            o.play();
                          }),
                          tt.add(o, "ended", a),
                          m._iO.volume !== e &&
                            (o.volume = Math.max(
                              0,
                              Math.min(1, m._iO.volume / 100),
                            )),
                          m.muted && (o.muted = !0),
                          m._iO.position ? tt.add(o, "canplay", r) : o.play())
                      : ((s = ct._start(
                          m.id,
                          m._iO.loops || 1,
                          9 === c ? m.position : m.position / 1e3,
                          m._iO.multiShot || !1,
                        )),
                        9 !== c ||
                          s ||
                          (m._iO.onplayerror && m._iO.onplayerror.apply(m)));
                }
                return m;
              }),
            (this.stop = function (t) {
              var e = m._iO;
              return (
                1 === m.playState &&
                  (m._onbufferchange(0),
                  m._resetOnPosition(0),
                  (m.paused = !1),
                  m.isHTML5 || (m.playState = 0),
                  u(),
                  e.to && m.clearOnPosition(e.to),
                  m.isHTML5
                    ? m._a &&
                      ((t = m.position),
                      m.setPosition(0),
                      (m.position = t),
                      m._a.pause(),
                      (m.playState = 0),
                      m._onTimer(),
                      r())
                    : (ct._stop(m.id, t), e.serverURL && m.unload()),
                  (m.instanceCount = 0),
                  (m._iO = {}),
                  e.onstop && e.onstop.apply(m)),
                m
              );
            }),
            (this.setAutoPlay = function (t) {
              (m._iO.autoPlay = t),
                m.isHTML5 ||
                  (ct._setAutoPlay(m.id, t),
                  t &&
                    (m.instanceCount ||
                      1 !== m.readyState ||
                      m.instanceCount++));
            }),
            (this.getAutoPlay = function () {
              return m._iO.autoPlay;
            }),
            (this.setPosition = function (t) {
              t === e && (t = 0);
              var i = m.isHTML5
                ? Math.max(t, 0)
                : Math.min(m.duration || m._iO.duration, Math.max(t, 0));
              if (
                ((m.position = i),
                (t = m.position / 1e3),
                m._resetOnPosition(m.position),
                (m._iO.position = i),
                m.isHTML5)
              ) {
                if (m._a) {
                  if (m._html5_canplay) {
                    if (m._a.currentTime !== t)
                      try {
                        (m._a.currentTime = t),
                          (0 === m.playState || m.paused) && m._a.pause();
                      } catch (t) {}
                  } else if (t) return m;
                  m.paused && m._onTimer(!0);
                }
              } else
                (t = 9 === c ? m.position : t),
                  m.readyState &&
                    2 !== m.readyState &&
                    ct._setPosition(
                      m.id,
                      t,
                      m.paused || !m.playState,
                      m._iO.multiShot,
                    );
              return m;
            }),
            (this.pause = function (t) {
              return (
                m.paused ||
                  (0 === m.playState && 1 !== m.readyState) ||
                  ((m.paused = !0),
                  m.isHTML5
                    ? (m._setup_html5().pause(), r())
                    : (t || t === e) && ct._pause(m.id, m._iO.multiShot),
                  m._iO.onpause && m._iO.onpause.apply(m)),
                m
              );
            }),
            (this.resume = function () {
              var t = m._iO;
              return m.paused
                ? ((m.paused = !1),
                  (m.playState = 1),
                  m.isHTML5
                    ? (m._setup_html5().play(), l())
                    : (t.isMovieStar &&
                        !t.serverURL &&
                        m.setPosition(m.position),
                      ct._pause(m.id, t.multiShot)),
                  !g && t.onplay
                    ? (t.onplay.apply(m), (g = !0))
                    : t.onresume && t.onresume.apply(m),
                  m)
                : m;
            }),
            (this.togglePause = function () {
              return 0 === m.playState
                ? (m.play({
                    position:
                      9 !== c || m.isHTML5 ? m.position / 1e3 : m.position,
                  }),
                  m)
                : (m.paused ? m.resume() : m.pause(), m);
            }),
            (this.setPan = function (t, i) {
              return (
                t === e && (t = 0),
                i === e && (i = !1),
                m.isHTML5 || ct._setPan(m.id, t),
                (m._iO.pan = t),
                i || ((m.pan = t), (m.options.pan = t)),
                m
              );
            }),
            (this.setVolume = function (t, i) {
              return (
                t === e && (t = 100),
                i === e && (i = !1),
                m.isHTML5
                  ? m._a &&
                    (ht.muted &&
                      !m.muted &&
                      ((m.muted = !0), (m._a.muted = !0)),
                    (m._a.volume = Math.max(0, Math.min(1, t / 100))))
                  : ct._setVolume(
                      m.id,
                      (ht.muted && !m.muted) || m.muted ? 0 : t,
                    ),
                (m._iO.volume = t),
                i || ((m.volume = t), (m.options.volume = t)),
                m
              );
            }),
            (this.mute = function () {
              return (
                (m.muted = !0),
                m.isHTML5 ? m._a && (m._a.muted = !0) : ct._setVolume(m.id, 0),
                m
              );
            }),
            (this.unmute = function () {
              m.muted = !1;
              var t = m._iO.volume !== e;
              return (
                m.isHTML5
                  ? m._a && (m._a.muted = !1)
                  : ct._setVolume(m.id, t ? m._iO.volume : m.options.volume),
                m
              );
            }),
            (this.toggleMute = function () {
              return m.muted ? m.unmute() : m.mute();
            }),
            (this.onposition = this.onPosition =
              function (t, i, n) {
                return (
                  v.push({
                    position: parseInt(t, 10),
                    method: i,
                    scope: n !== e ? n : m,
                    fired: !1,
                  }),
                  m
                );
              }),
            (this.clearOnPosition = function (t, e) {
              var i;
              if (((t = parseInt(t, 10)), isNaN(t))) return !1;
              for (i = 0; i < v.length; i++)
                t !== v[i].position ||
                  (e && e !== v[i].method) ||
                  (v[i].fired && y--, v.splice(i, 1));
            }),
            (this._processOnPosition = function () {
              var t, e;
              if (!(t = v.length) || !m.playState || y >= t) return !1;
              for (--t; 0 <= t; t--)
                !(e = v[t]).fired &&
                  m.position >= e.position &&
                  ((e.fired = !0), y++, e.method.apply(e.scope, [e.position]));
              return !0;
            }),
            (this._resetOnPosition = function (t) {
              var e, i;
              if (!(e = v.length)) return !1;
              for (--e; 0 <= e; e--)
                (i = v[e]).fired && t <= i.position && ((i.fired = !1), y--);
              return !0;
            }),
            (d = function () {
              var t,
                e,
                i = m._iO,
                n = i.from,
                s = i.to;
              return (
                (e = function () {
                  m.clearOnPosition(s, e), m.stop();
                }),
                (t = function () {
                  null === s || isNaN(s) || m.onPosition(s, e);
                }),
                null === n ||
                  isNaN(n) ||
                  ((i.position = n), (i.multiShot = !1), t()),
                i
              );
            }),
            (h = function () {
              var t,
                e = m._iO.onposition;
              if (e)
                for (t in e)
                  e.hasOwnProperty(t) && m.onPosition(parseInt(t, 10), e[t]);
            }),
            (u = function () {
              var t,
                e = m._iO.onposition;
              if (e)
                for (t in e)
                  e.hasOwnProperty(t) && m.clearOnPosition(parseInt(t, 10));
            }),
            (l = function () {
              m.isHTML5 && q(m);
            }),
            (r = function () {
              m.isHTML5 && B(m);
            }),
            (s = function (t) {
              t || ((v = []), (y = 0)),
                (g = !1),
                (m._hasTimer = null),
                (m._a = null),
                (m._html5_canplay = !1),
                (m.bytesLoaded = null),
                (m.bytesTotal = null),
                (m.duration = m._iO && m._iO.duration ? m._iO.duration : null),
                (m.durationEstimate = null),
                (m.buffered = []),
                (m.eqData = []),
                (m.eqData.left = []),
                (m.eqData.right = []),
                (m.failures = 0),
                (m.isBuffering = !1),
                (m.instanceOptions = {}),
                (m.instanceCount = 0),
                (m.loaded = !1),
                (m.metadata = {}),
                (m.readyState = 0),
                (m.muted = !1),
                (m.paused = !1),
                (m.peakData = { left: 0, right: 0 }),
                (m.waveformData = { left: [], right: [] }),
                (m.playState = 0),
                (m.position = null),
                (m.id3 = {});
            }),
            s(),
            (this._onTimer = function (t) {
              var e,
                s = !1,
                o = {};
              if (m._hasTimer || t)
                return (
                  m._a &&
                    (t ||
                      ((0 < m.playState || 1 === m.readyState) && !m.paused)) &&
                    ((e = m._get_html5_duration()) !== i &&
                      ((i = e), (m.duration = e), (s = !0)),
                    (m.durationEstimate = m.duration),
                    (e = 1e3 * m._a.currentTime || 0) !== n &&
                      ((n = e), (s = !0)),
                    (s || t) && m._whileplaying(e, o, o, o, o)),
                  s
                );
            }),
            (this._get_html5_duration = function () {
              var t = m._iO;
              return (t =
                m._a && m._a.duration
                  ? 1e3 * m._a.duration
                  : t && t.duration
                    ? t.duration
                    : null) &&
                !isNaN(t) &&
                1 / 0 !== t
                ? t
                : null;
            }),
            (this._apply_loop = function (t, e) {
              t.loop = 1 < e ? "loop" : "";
            }),
            (this._setup_html5 = function (t) {
              t = p(m._iO, t);
              var e,
                i = It ? ut : m._a,
                n = decodeURI(t.url);
              if (
                (It
                  ? n === decodeURI(et) && (e = !0)
                  : n === decodeURI(b) && (e = !0),
                i)
              ) {
                if (i._s)
                  if (It) i._s && i._s.playState && !e && i._s.stop();
                  else if (!It && n === decodeURI(b))
                    return m._apply_loop(i, t.loops), i;
                e ||
                  (b && s(!1),
                  (i.src = t.url),
                  (et = b = m.url = t.url),
                  (i._called_load = !1));
              } else
                t.autoLoad || t.autoPlay
                  ? ((m._a = new Audio(t.url)), m._a.load())
                  : (m._a =
                      Ft && 10 > opera.version()
                        ? new Audio(null)
                        : new Audio()),
                  ((i = m._a)._called_load = !1),
                  It && (ut = i);
              return (
                (m.isHTML5 = !0),
                (m._a = i),
                (i._s = m),
                o(),
                m._apply_loop(i, t.loops),
                t.autoLoad || t.autoPlay
                  ? m.load()
                  : ((i.autobuffer = !1), (i.preload = "auto")),
                i
              );
            }),
            (o = function () {
              if (m._a._added_events) return !1;
              var t;
              for (t in ((m._a._added_events = !0), ot))
                ot.hasOwnProperty(t) &&
                  m._a &&
                  m._a.addEventListener(t, ot[t], !1);
              return !0;
            }),
            (a = function () {
              var t;
              for (t in ((m._a._added_events = !1), ot))
                ot.hasOwnProperty(t) &&
                  m._a &&
                  m._a.removeEventListener(t, ot[t], !1);
            }),
            (this._onload = function (t) {
              var e = !!t || (!m.isHTML5 && 8 === c && m.duration);
              return (
                (m.loaded = e),
                (m.readyState = e ? 3 : 2),
                m._onbufferchange(0),
                m._iO.onload &&
                  at(m, function () {
                    m._iO.onload.apply(m, [e]);
                  }),
                !0
              );
            }),
            (this._onbufferchange = function (t) {
              return (
                !(
                  0 === m.playState ||
                  (t && m.isBuffering) ||
                  (!t && !m.isBuffering)
                ) &&
                ((m.isBuffering = 1 === t),
                m._iO.onbufferchange && m._iO.onbufferchange.apply(m, [t]),
                !0)
              );
            }),
            (this._onsuspend = function () {
              return m._iO.onsuspend && m._iO.onsuspend.apply(m), !0;
            }),
            (this._onfailure = function (t, e, i) {
              m.failures++,
                m._iO.onfailure && 1 === m.failures && m._iO.onfailure(t, e, i);
            }),
            (this._onwarning = function (t, e, i) {
              m._iO.onwarning && m._iO.onwarning(t, e, i);
            }),
            (this._onfinish = function () {
              var t = m._iO.onfinish;
              m._onbufferchange(0),
                m._resetOnPosition(0),
                m.instanceCount &&
                  (m.instanceCount--,
                  m.instanceCount ||
                    (u(),
                    (m.playState = 0),
                    (m.paused = !1),
                    (m.instanceCount = 0),
                    (m.instanceOptions = {}),
                    (m._iO = {}),
                    r(),
                    m.isHTML5 && (m.position = 0)),
                  (!m.instanceCount || m._iO.multiShotEvents) &&
                    t &&
                    at(m, function () {
                      t.apply(m);
                    }));
            }),
            (this._whileloading = function (t, e, i, n) {
              var s = m._iO;
              (m.bytesLoaded = t),
                (m.bytesTotal = e),
                (m.duration = Math.floor(i)),
                (m.bufferLength = n),
                (m.durationEstimate =
                  m.isHTML5 || s.isMovieStar
                    ? m.duration
                    : s.duration
                      ? m.duration > s.duration
                        ? m.duration
                        : s.duration
                      : parseInt(
                          (m.bytesTotal / m.bytesLoaded) * m.duration,
                          10,
                        )),
                m.isHTML5 || (m.buffered = [{ start: 0, end: m.duration }]),
                (3 !== m.readyState || m.isHTML5) &&
                  s.whileloading &&
                  s.whileloading.apply(m);
            }),
            (this._whileplaying = function (t, i, n, s, o) {
              var a = m._iO;
              return (
                !isNaN(t) &&
                null !== t &&
                ((m.position = Math.max(0, t)),
                m._processOnPosition(),
                !m.isHTML5 &&
                  8 < c &&
                  (a.usePeakData &&
                    i !== e &&
                    i &&
                    (m.peakData = { left: i.leftPeak, right: i.rightPeak }),
                  a.useWaveformData &&
                    n !== e &&
                    n &&
                    (m.waveformData = {
                      left: n.split(","),
                      right: s.split(","),
                    }),
                  a.useEQData &&
                    o !== e &&
                    o &&
                    o.leftEQ &&
                    ((t = o.leftEQ.split(",")),
                    (m.eqData = t),
                    (m.eqData.left = t),
                    o.rightEQ !== e &&
                      o.rightEQ &&
                      (m.eqData.right = o.rightEQ.split(",")))),
                1 === m.playState &&
                  (m.isHTML5 ||
                    8 !== c ||
                    m.position ||
                    !m.isBuffering ||
                    m._onbufferchange(0),
                  a.whileplaying && a.whileplaying.apply(m)),
                !0)
              );
            }),
            (this._oncaptiondata = function (t) {
              (m.captiondata = t),
                m._iO.oncaptiondata && m._iO.oncaptiondata.apply(m, [t]);
            }),
            (this._onmetadata = function (t, e) {
              var i,
                n,
                s = {};
              for (i = 0, n = t.length; i < n; i++) s[t[i]] = e[i];
              (m.metadata = s),
                m._iO.onmetadata && m._iO.onmetadata.call(m, m.metadata);
            }),
            (this._onid3 = function (t, e) {
              var i,
                n,
                s = [];
              for (i = 0, n = t.length; i < n; i++) s[t[i]] = e[i];
              (m.id3 = p(m.id3, s)), m._iO.onid3 && m._iO.onid3.apply(m);
            }),
            (this._onconnect = function (t) {
              (t = 1 === t),
                (m.connected = t) &&
                  ((m.failures = 0),
                  j(m.id) &&
                    (m.getAutoPlay()
                      ? m.play(e, m.getAutoPlay())
                      : m._iO.autoLoad && m.load()),
                  m._iO.onconnect && m._iO.onconnect.apply(m, [t]));
            }),
            (this._ondataerror = function (t) {
              0 < m.playState &&
                m._iO.ondataerror &&
                m._iO.ondataerror.apply(m);
            });
        }),
        (M = function () {
          return ft.body || ft.getElementsByTagName("div")[0];
        }),
        (r = function (t) {
          return ft.getElementById(t);
        }),
        (p = function (t, i) {
          var n,
            s,
            o = t || {};
          for (s in (n = i === e ? ht.defaultOptions : i))
            n.hasOwnProperty(s) &&
              o[s] === e &&
              (o[s] =
                "object" != typeof n[s] || null === n[s]
                  ? n[s]
                  : p(o[s], n[s]));
          return o;
        }),
        (at = function (e, i) {
          e.isHTML5 || 8 !== c ? i() : t.setTimeout(i, 0);
        }),
        (m = {
          onready: 1,
          ontimeout: 1,
          defaultOptions: 1,
          flash9Options: 1,
          movieStarOptions: 1,
        }),
        (f = function (t, i) {
          var n,
            s = !0,
            o = i !== e,
            a = ht.setupOptions;
          for (n in t)
            if (t.hasOwnProperty(n))
              if (
                "object" != typeof t[n] ||
                null === t[n] ||
                t[n] instanceof Array ||
                t[n] instanceof RegExp
              )
                o && m[i] !== e
                  ? (ht[i][n] = t[n])
                  : a[n] !== e
                    ? ((ht.setupOptions[n] = t[n]), (ht[n] = t[n]))
                    : m[n] === e
                      ? (s = !1)
                      : ht[n] instanceof Function
                        ? ht[n].apply(ht, t[n] instanceof Array ? t[n] : [t[n]])
                        : (ht[n] = t[n]);
              else {
                if (m[n] !== e) return f(t[n], n);
                s = !1;
              }
          return s;
        }),
        (tt = (function () {
          function e(t) {
            var e = (t = Mt.call(t)).length;
            return (
              n
                ? ((t[1] = "on" + t[1]), 3 < e && t.pop())
                : 3 === e && t.push(!1),
              t
            );
          }
          function i(t, e) {
            var i = t.shift(),
              o = [s[e]];
            n ? i[o](t[0], t[1]) : i[o].apply(i, t);
          }
          var n = t.attachEvent,
            s = {
              add: n ? "attachEvent" : "addEventListener",
              remove: n ? "detachEvent" : "removeEventListener",
            };
          return {
            add: function () {
              i(e(arguments), "add");
            },
            remove: function () {
              i(e(arguments), "remove");
            },
          };
        })()),
        (ot = {
          abort: o(function () {}),
          canplay: o(function () {
            var t,
              i = this._s;
            if (i._html5_canplay) return !0;
            if (
              ((i._html5_canplay = !0),
              i._onbufferchange(0),
              (t =
                i._iO.position === e || isNaN(i._iO.position)
                  ? null
                  : i._iO.position / 1e3),
              this.currentTime !== t)
            )
              try {
                this.currentTime = t;
              } catch (t) {}
            i._iO._oncanplay && i._iO._oncanplay();
          }),
          canplaythrough: o(function () {
            var t = this._s;
            t.loaded ||
              (t._onbufferchange(0),
              t._whileloading(
                t.bytesLoaded,
                t.bytesTotal,
                t._get_html5_duration(),
              ),
              t._onload(!0));
          }),
          durationchange: o(function () {
            var t,
              e = this._s;
            (t = e._get_html5_duration()),
              isNaN(t) ||
                t === e.duration ||
                (e.durationEstimate = e.duration = t);
          }),
          ended: o(function () {
            this._s._onfinish();
          }),
          error: o(function () {
            this._s._onload(!1);
          }),
          loadeddata: o(function () {
            var t = this._s;
            t._loaded || Lt || (t.duration = t._get_html5_duration());
          }),
          loadedmetadata: o(function () {}),
          loadstart: o(function () {
            this._s._onbufferchange(1);
          }),
          play: o(function () {
            this._s._onbufferchange(0);
          }),
          playing: o(function () {
            this._s._onbufferchange(0);
          }),
          progress: o(function (t) {
            var e,
              i,
              n = this._s,
              s = 0;
            s = t.target.buffered;
            e = t.loaded || 0;
            var o = t.total || 1;
            if (((n.buffered = []), s && s.length)) {
              for (e = 0, i = s.length; e < i; e++)
                n.buffered.push({
                  start: 1e3 * s.start(e),
                  end: 1e3 * s.end(e),
                });
              (s = 1e3 * (s.end(0) - s.start(0))),
                (e = Math.min(1, s / (1e3 * t.target.duration)));
            }
            isNaN(e) ||
              (n._whileloading(e, o, n._get_html5_duration()),
              e && o && e === o && ot.canplaythrough.call(this, t));
          }),
          ratechange: o(function () {}),
          suspend: o(function (t) {
            var e = this._s;
            ot.progress.call(this, t), e._onsuspend();
          }),
          stalled: o(function () {}),
          timeupdate: o(function () {
            this._s._onTimer();
          }),
          waiting: o(function () {
            this._s._onbufferchange(1);
          }),
        }),
        (K = function (t) {
          return (
            !(!t || !(t.type || t.url || t.serverURL)) &&
            !(t.serverURL || (t.type && s(t.type))) &&
            (t.type
              ? $({ type: t.type })
              : $({ url: t.url }) || ht.html5Only || t.url.match(/data\:/i))
          );
        }),
        (G = function (t) {
          var i;
          return (
            t &&
              ((i = Lt
                ? "about:blank"
                : ht.html5.canPlayType("audio/wav")
                  ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w=="
                  : "about:blank"),
              (t.src = i),
              t._called_unload !== e && (t._called_load = !1)),
            It && (et = null),
            i
          );
        }),
        ($ = function (t) {
          if (!ht.useHTML5Audio || !ht.hasHTML5) return !1;
          var i = t.url || null;
          t = t.type || null;
          var n,
            o = ht.audioFormats;
          if (t && ht.html5[t] !== e) return ht.html5[t] && !s(t);
          if (!X) {
            for (n in ((X = []), o))
              o.hasOwnProperty(n) &&
                (X.push(n), o[n].related && (X = X.concat(o[n].related)));
            X = new RegExp("\\.(" + X.join("|") + ")(\\?.*)?$", "i");
          }
          return (
            (n = i ? i.toLowerCase().match(X) : null) && n.length
              ? (n = n[1])
              : t &&
                (n = (-1 !== (i = t.indexOf(";")) ? t.substr(0, i) : t).substr(
                  6,
                )),
            n && ht.html5[n] !== e
              ? (i = ht.html5[n] && !s(n))
              : ((t = "audio/" + n),
                (i = ht.html5.canPlayType({ type: t })),
                (i = (ht.html5[n] = i) && ht.html5[t] && !s(t))),
            i
          );
        }),
        (Z = function () {
          function t(t) {
            var e,
              i = (e = !1);
            if (!a || "function" != typeof a.canPlayType) return e;
            if (t instanceof Array) {
              for (o = 0, e = t.length; o < e; o++)
                (ht.html5[t[o]] || a.canPlayType(t[o]).match(ht.html5Test)) &&
                  ((i = !0),
                  (ht.html5[t[o]] = !0),
                  (ht.flash[t[o]] = !!t[o].match(Bt)));
              e = i;
            } else
              e = !(
                !(t =
                  !(!a || "function" != typeof a.canPlayType) &&
                  a.canPlayType(t)) || !t.match(ht.html5Test)
              );
            return e;
          }
          if (!ht.useHTML5Audio || !ht.hasHTML5)
            return (St = ht.html5.usingFlash = !0), !1;
          var i,
            n,
            s,
            o,
            a =
              Audio !== e
                ? Ft && 10 > opera.version()
                  ? new Audio(null)
                  : new Audio()
                : null,
            r = {};
          for (i in (s = ht.audioFormats))
            if (
              s.hasOwnProperty(i) &&
              ((n = "audio/" + i),
              (r[i] = t(s[i].type)),
              (r[n] = r[i]),
              i.match(Bt)
                ? ((ht.flash[i] = !0), (ht.flash[n] = !0))
                : ((ht.flash[i] = !1), (ht.flash[n] = !1)),
              s[i] && s[i].related)
            )
              for (o = s[i].related.length - 1; 0 <= o; o--)
                (r["audio/" + s[i].related[o]] = r[i]),
                  (ht.html5[s[i].related[o]] = r[i]),
                  (ht.flash[s[i].related[o]] = r[i]);
          return (
            (r.canPlayType = a ? t : null),
            (ht.html5 = p(ht.html5, r)),
            (ht.html5.usingFlash = V()),
            (St = ht.html5.usingFlash),
            !0
          );
        }),
        (k = {}),
        (L = function () {}),
        (R = function (t) {
          return 8 === c && 1 < t.loops && t.stream && (t.stream = !1), t;
        }),
        (W = function (t, e) {
          return (
            t &&
              !t.usePolicyFile &&
              (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) &&
              (t.usePolicyFile = !0),
            t
          );
        }),
        (l = function () {
          return !1;
        }),
        (E = function (t) {
          for (var e in t)
            t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = l);
        }),
        (N = function (t) {
          t === e && (t = !1), (bt || t) && ht.disable(t);
        }),
        (H = function (t) {
          if (t)
            if (t.match(/\.swf(\?.*)?$/i)) {
              if (t.substr(t.toLowerCase().lastIndexOf(".swf?") + 4)) return t;
            } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
          return (
            (t =
              (t && -1 !== t.lastIndexOf("/")
                ? t.substr(0, t.lastIndexOf("/") + 1)
                : "./") + ht.movieURL),
            ht.noSWFCache && (t += "?ts=" + new Date().getTime()),
            t
          );
        }),
        (x = function () {
          8 !== (c = parseInt(ht.flashVersion, 10)) &&
            9 !== c &&
            (ht.flashVersion = c = 8);
          var t = ht.debugMode || ht.debugFlash ? "_debug.swf" : ".swf";
          ht.useHTML5Audio &&
            !ht.html5Only &&
            ht.audioFormats.mp4.required &&
            9 > c &&
            (ht.flashVersion = c = 9),
            (ht.version =
              ht.versionNumber +
              (ht.html5Only
                ? " (HTML5-only mode)"
                : 9 === c
                  ? " (AS3/Flash 9)"
                  : " (AS2/Flash 8)")),
            8 < c
              ? ((ht.defaultOptions = p(ht.defaultOptions, ht.flash9Options)),
                (ht.features.buffering = !0),
                (ht.defaultOptions = p(ht.defaultOptions, ht.movieStarOptions)),
                (ht.filePatterns.flash9 = new RegExp(
                  "\\.(mp3|" + Vt.join("|") + ")(\\?.*)?$",
                  "i",
                )),
                (ht.features.movieStar = !0))
              : (ht.features.movieStar = !1),
            (ht.filePattern = ht.filePatterns[8 !== c ? "flash9" : "flash8"]),
            (ht.movieURL = (
              8 === c ? "soundmanager2.swf" : "soundmanager2_flash9.swf"
            ).replace(".swf", t)),
            (ht.features.peakData =
              ht.features.waveformData =
              ht.features.eqData =
                8 < c);
        }),
        (O = function (t, e) {
          if (!ct) return !1;
          ct._setPolling(t, e);
        }),
        (j = this.getSoundById),
        (z = function () {
          var t = [];
          return (
            ht.debugMode && t.push("sm2_debug"),
            ht.debugFlash && t.push("flash_debug"),
            ht.useHighPerformance && t.push("high_performance"),
            t.join(" ")
          );
        }),
        (F = function () {
          L("fbHandler");
          var t = ht.getMoviePercent(),
            e = { type: "FLASHBLOCK" };
          if (ht.html5Only) return !1;
          ht.ok()
            ? ht.oMC &&
              (ht.oMC.className = [
                z(),
                "movieContainer",
                "swf_loaded" + (ht.didFlashBlock ? " swf_unblocked" : ""),
              ].join(" "))
            : (St &&
                (ht.oMC.className =
                  z() +
                  " movieContainer " +
                  (null === t ? "swf_timedout" : "swf_error")),
              (ht.didFlashBlock = !0),
              v({ type: "ontimeout", ignoreInit: !0, error: e }),
              P(e));
        }),
        (g = function (t, i, n) {
          mt[t] === e && (mt[t] = []),
            mt[t].push({ method: i, scope: n || null, fired: !1 });
        }),
        (v = function (t) {
          if (
            (t || (t = { type: ht.ok() ? "onready" : "ontimeout" }),
            (!yt && t && !t.ignoreInit) ||
              ("ontimeout" === t.type && (ht.ok() || (bt && !t.ignoreInit))))
          )
            return !1;
          var e,
            i = { success: t && t.ignoreInit ? ht.ok() : !bt },
            n = (t && t.type && mt[t.type]) || [],
            s = [],
            o = ((i = [i]), St && !ht.ok());
          for (
            t.error && (i[0].error = t.error), t = 0, e = n.length;
            t < e;
            t++
          )
            !0 !== n[t].fired && s.push(n[t]);
          if (s.length)
            for (t = 0, e = s.length; t < e; t++)
              s[t].scope
                ? s[t].method.apply(s[t].scope, i)
                : s[t].method.apply(this, i),
                o || (s[t].fired = !0);
          return !0;
        }),
        (y = function () {
          t.setTimeout(function () {
            ht.useFlashBlock && F(),
              v(),
              "function" == typeof ht.onload && ht.onload.apply(t),
              ht.waitForWindowLoad && tt.add(t, "load", y);
          }, 1);
        }),
        (nt = function () {
          if (it !== e) return it;
          var i,
            n = !1,
            s = navigator,
            o = s.plugins,
            a = t.ActiveXObject;
          if (o && o.length)
            (s = s.mimeTypes) &&
              s["application/x-shockwave-flash"] &&
              s["application/x-shockwave-flash"].enabledPlugin &&
              s["application/x-shockwave-flash"].enabledPlugin.description &&
              (n = !0);
          else if (a !== e && !dt.match(/MSAppHost/i)) {
            try {
              i = new a("ShockwaveFlash.ShockwaveFlash");
            } catch (t) {
              i = null;
            }
            n = !!i;
          }
          return (it = n);
        }),
        (V = function () {
          var t,
            e,
            i = ht.audioFormats;
          if (
            (Ot && dt.match(/os (1|2|3_0|3_1)\s/i)
              ? ((ht.hasHTML5 = !1),
                (ht.html5Only = !0),
                ht.oMC && (ht.oMC.style.display = "none"))
              : !ht.useHTML5Audio ||
                (ht.html5 && ht.html5.canPlayType) ||
                (ht.hasHTML5 = !1),
            ht.useHTML5Audio && ht.hasHTML5)
          )
            for (e in ((Q = !0), i))
              i.hasOwnProperty(e) &&
                i[e].required &&
                (ht.html5.canPlayType(i[e].type)
                  ? ht.preferFlash &&
                    (ht.flash[e] || ht.flash[i[e].type]) &&
                    (t = !0)
                  : ((Q = !1), (t = !0)));
          return (
            ht.ignoreFlash && ((t = !1), (Q = !0)),
            (ht.html5Only = ht.hasHTML5 && ht.useHTML5Audio && !t),
            !ht.html5Only
          );
        }),
        (U = function (t) {
          var e,
            i,
            n = 0;
          if (t instanceof Array) {
            for (e = 0, i = t.length; e < i; e++)
              if (t[e] instanceof Object) {
                if (ht.canPlayMIME(t[e].type)) {
                  n = e;
                  break;
                }
              } else if (ht.canPlayURL(t[e])) {
                n = e;
                break;
              }
            t[n].url && (t[n] = t[n].url), (t = t[n]);
          }
          return t;
        }),
        (q = function (t) {
          t._hasTimer ||
            ((t._hasTimer = !0),
            !zt &&
              ht.html5PollingInterval &&
              (null === Dt &&
                0 === Tt &&
                (Dt = setInterval(Y, ht.html5PollingInterval)),
              Tt++));
        }),
        (B = function (t) {
          t._hasTimer &&
            ((t._hasTimer = !1), !zt && ht.html5PollingInterval && Tt--);
        }),
        (Y = function () {
          var t;
          if (null !== Dt && !Tt) return clearInterval(Dt), (Dt = null), !1;
          for (t = ht.soundIDs.length - 1; 0 <= t; t--)
            ht.sounds[ht.soundIDs[t]].isHTML5 &&
              ht.sounds[ht.soundIDs[t]]._hasTimer &&
              ht.sounds[ht.soundIDs[t]]._onTimer();
        }),
        (P = function (i) {
          (i = i !== e ? i : {}),
            "function" == typeof ht.onerror &&
              ht.onerror.apply(t, [{ type: i.type !== e ? i.type : null }]),
            i.fatal !== e && i.fatal && ht.disable();
        }),
        (st = function () {
          if (!Rt || !nt()) return !1;
          var t,
            e,
            i = ht.audioFormats;
          for (e in i)
            if (
              i.hasOwnProperty(e) &&
              ("mp3" === e || "mp4" === e) &&
              ((ht.html5[e] = !1), i[e] && i[e].related)
            )
              for (t = i[e].related.length - 1; 0 <= t; t--)
                ht.html5[i[e].related[t]] = !1;
        }),
        (this._setSandboxType = function (t) {}),
        (this._externalInterfaceOK = function (t) {
          if (ht.swfLoaded) return !1;
          (ht.swfLoaded = !0),
            (jt = !1),
            Rt && st(),
            setTimeout(u, Nt ? 100 : 1);
        }),
        (I = function (t, i) {
          function n(t, e) {
            return '<param name="' + t + '" value="' + e + '" />';
          }
          if (gt && vt) return !1;
          if (ht.html5Only)
            return x(), (ht.oMC = r(ht.movieID)), u(), (vt = gt = !0), !1;
          var s,
            o,
            a,
            l = i || ht.url,
            h = ht.altURL || l,
            c = M(),
            d = z(),
            p = null;
          p =
            (p = ft.getElementsByTagName("html")[0]) &&
            p.dir &&
            p.dir.match(/rtl/i);
          if (
            ((t = t === e ? ht.id : t),
            x(),
            (ht.url = H(Yt ? l : h)),
            (i = ht.url),
            (ht.wmode =
              !ht.wmode && ht.useHighPerformance ? "transparent" : ht.wmode),
            null !== ht.wmode &&
              (dt.match(/msie 8/i) || (!Nt && !ht.useHighPerformance)) &&
              navigator.platform.match(/win32|win64/i) &&
              (At.push(k.spcWmode), (ht.wmode = null)),
            (c = {
              name: t,
              id: t,
              src: i,
              quality: "high",
              allowScriptAccess: ht.allowScriptAccess,
              bgcolor: ht.bgColor,
              pluginspage: Ut + "www.macromedia.com/go/getflashplayer",
              title: "JS/Flash audio component (SoundManager 2)",
              type: "application/x-shockwave-flash",
              wmode: ht.wmode,
              hasPriority: "true",
            }),
            ht.debugFlash && (c.FlashVars = "debug=1"),
            ht.wmode || delete c.wmode,
            Nt)
          )
            (l = ft.createElement("div")),
              (o = [
                '<object id="' +
                  t +
                  '" data="' +
                  i +
                  '" type="' +
                  c.type +
                  '" title="' +
                  c.title +
                  '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
                n("movie", i),
                n("AllowScriptAccess", ht.allowScriptAccess),
                n("quality", c.quality),
                ht.wmode ? n("wmode", ht.wmode) : "",
                n("bgcolor", ht.bgColor),
                n("hasPriority", "true"),
                ht.debugFlash ? n("FlashVars", c.FlashVars) : "",
                "</object>",
              ].join(""));
          else
            for (s in ((l = ft.createElement("embed")), c))
              c.hasOwnProperty(s) && l.setAttribute(s, c[s]);
          if (((d = z()), (c = M())))
            if (
              ((ht.oMC = r(ht.movieID) || ft.createElement("div")), ht.oMC.id)
            )
              (a = ht.oMC.className),
                (ht.oMC.className =
                  (a ? a + " " : "movieContainer") + (d ? " " + d : "")),
                ht.oMC.appendChild(l),
                Nt &&
                  (((s = ht.oMC.appendChild(
                    ft.createElement("div"),
                  )).className = "sm2-object-box"),
                  (s.innerHTML = o)),
                (vt = !0);
            else {
              if (
                ((ht.oMC.id = ht.movieID),
                (ht.oMC.className = "movieContainer " + d),
                (s = d = null),
                ht.useFlashBlock ||
                  (ht.useHighPerformance
                    ? (d = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden",
                      })
                    : ((d = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px",
                      }),
                      p && (d.left = Math.abs(parseInt(d.left, 10)) + "px"))),
                Ht && (ht.oMC.style.zIndex = 1e4),
                !ht.debugFlash)
              )
                for (a in d) d.hasOwnProperty(a) && (ht.oMC.style[a] = d[a]);
              try {
                Nt || ht.oMC.appendChild(l),
                  c.appendChild(ht.oMC),
                  Nt &&
                    (((s = ht.oMC.appendChild(
                      ft.createElement("div"),
                    )).className = "sm2-object-box"),
                    (s.innerHTML = o)),
                  (vt = !0);
              } catch (t) {
                throw Error(L("domError") + " \n" + t.toString());
              }
            }
          return (gt = !0);
        }),
        (T = function () {
          return ht.html5Only
            ? (I(), !1)
            : !(ct || !ht.url) &&
                ((ct = ht.getMovie(ht.id)) ||
                  (wt
                    ? (Nt ? (ht.oMC.innerHTML = xt) : ht.oMC.appendChild(wt),
                      (wt = null),
                      (gt = !0))
                    : I(ht.id, ht.url),
                  (ct = ht.getMovie(ht.id))),
                "function" == typeof ht.oninitmovie &&
                  setTimeout(ht.oninitmovie, 1),
                !0);
        }),
        (b = function () {
          setTimeout(_, 1e3);
        }),
        (w = function () {
          t.setTimeout(function () {
            ht.setup({ preferFlash: !1 }).reboot(),
              (ht.didFlashBlock = !0),
              ht.beginDelayedInit();
          }, 1);
        }),
        (_ = function () {
          var e,
            i = !1;
          return (
            !(!ht.url || Ct) &&
            ((Ct = !0),
            tt.remove(t, "load", b),
            !(it && jt && !Wt) &&
              (yt || (0 < (e = ht.getMoviePercent()) && 100 > e && (i = !0)),
              void setTimeout(function () {
                if (((e = ht.getMoviePercent()), i))
                  return (Ct = !1), t.setTimeout(b, 1), !1;
                !yt &&
                  qt &&
                  (null === e
                    ? ht.useFlashBlock || 0 === ht.flashLoadTimeout
                      ? ht.useFlashBlock && F()
                      : !ht.useFlashBlock && Q
                        ? w()
                        : v({
                            type: "ontimeout",
                            ignoreInit: !0,
                            error: { type: "INIT_FLASHBLOCK" },
                          })
                    : 0 !== ht.flashLoadTimeout &&
                      (!ht.useFlashBlock && Q ? w() : N(!0)));
              }, ht.flashLoadTimeout)))
          );
        }),
        (C = function () {
          return Wt || !jt
            ? (tt.remove(t, "focus", C), !0)
            : ((Wt = qt = !0), (Ct = !1), b(), tt.remove(t, "focus", C), !0);
        }),
        (d = function (e) {
          if (yt) return !1;
          if (ht.html5Only) return (yt = !0), y(), !0;
          var i,
            n = !0;
          return (
            (ht.useFlashBlock &&
              ht.flashLoadTimeout &&
              !ht.getMoviePercent()) ||
              (yt = !0),
            (i = { type: !it && St ? "NO_FLASH" : "INIT_TIMEOUT" }),
            (bt || e) &&
              (ht.useFlashBlock &&
                ht.oMC &&
                (ht.oMC.className =
                  z() +
                  " " +
                  (null === ht.getMoviePercent()
                    ? "swf_timedout"
                    : "swf_error")),
              v({ type: "ontimeout", error: i, ignoreInit: !0 }),
              P(i),
              (n = !1)),
            bt || (ht.waitForWindowLoad && !_t ? tt.add(t, "load", y) : y()),
            n
          );
        }),
        (h = function () {
          var t,
            i = ht.setupOptions;
          for (t in i)
            i.hasOwnProperty(t) &&
              (ht[t] === e
                ? (ht[t] = i[t])
                : ht[t] !== i[t] && (ht.setupOptions[t] = ht[t]));
        }),
        (u = function () {
          if (yt) return !1;
          if (ht.html5Only)
            return (
              yt ||
                (tt.remove(t, "load", ht.beginDelayedInit),
                (ht.enabled = !0),
                d()),
              !0
            );
          T();
          try {
            ct._externalInterfaceTest(!1),
              O(
                !0,
                ht.flashPollingInterval || (ht.useHighPerformance ? 10 : 50),
              ),
              ht.debugMode || ct._disableDebug(),
              (ht.enabled = !0),
              ht.html5Only || tt.add(t, "unload", l);
          } catch (t) {
            return (
              P({ type: "JS_TO_FLASH_EXCEPTION", fatal: !0 }), N(!0), d(), !1
            );
          }
          return d(), tt.remove(t, "load", ht.beginDelayedInit), !0;
        }),
        (D = function () {
          return (
            !S &&
            ((S = !0),
            h(),
            !it &&
              ht.hasHTML5 &&
              ht.setup({ useHTML5Audio: !0, preferFlash: !1 }),
            Z(),
            !it &&
              St &&
              (At.push(k.needFlash), ht.setup({ flashLoadTimeout: 1 })),
            ft.removeEventListener &&
              ft.removeEventListener("DOMContentLoaded", D, !1),
            T(),
            !0)
          );
        }),
        (J = function () {
          return (
            "complete" === ft.readyState &&
              (D(), ft.detachEvent("onreadystatechange", J)),
            !0
          );
        }),
        (A = function () {
          (_t = !0), D(), tt.remove(t, "load", A);
        }),
        nt(),
        tt.add(t, "focus", C),
        tt.add(t, "load", b),
        tt.add(t, "load", A),
        ft.addEventListener
          ? ft.addEventListener("DOMContentLoaded", D, !1)
          : ft.attachEvent
            ? ft.attachEvent("onreadystatechange", J)
            : P({ type: "NO_DOM2_EVENTS", fatal: !0 });
    }
    if (!t || !t.document)
      throw Error(
        "SoundManager requires a browser with window and document objects.",
      );
    var n = null;
    (t.SM2_DEFER !== e && SM2_DEFER) || (n = new i()),
      "object" == typeof module && module && "object" == typeof module.exports
        ? ((module.exports.SoundManager = i), (module.exports.soundManager = n))
        : "function" == typeof define &&
          define.amd &&
          define(function () {
            return {
              constructor: i,
              getInstance: function (e) {
                return (
                  !t.soundManager &&
                    e instanceof Function &&
                    (e = e(i)) instanceof i &&
                    (t.soundManager = e),
                  t.soundManager
                );
              },
            };
          }),
      (t.SoundManager = i),
      (t.soundManager = n);
  })(window);
