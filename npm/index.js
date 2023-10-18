(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(":root{--primary-color: #f1c40f;--secondary-color: #e67e22;--shadow-progressbar-color: #f1c40f;--shadow-pointer-color: #f1c40f;--final-screen-color: #fff;--animation-time: 1s}._loaderContainer_j8434_3{padding:0;margin:0;width:100%;height:100vh;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}._progressbarContainer_j8434_16{background-color:#ffffff3b;display:flex;align-items:center;width:80%;border-radius:10px}._progressPointer_j8434_23{width:5px;height:2px;background-color:var(--primary-color);border-radius:50%;box-shadow:0 0 2px #fdfdfd,0 0 3px var(--shadow-pointer-color),0 0 4px var(--shadow-pointer-color),0 0 5px var(--shadow-pointer-color),0 0 6px var(--shadow-pointer-color),0 0 8px var(--shadow-pointer-color),0 0 10px var(--shadow-pointer-color),0 0 12px var(--shadow-pointer-color),0 0 14px var(--shadow-pointer-color)}._progressbar_j8434_16{position:relative;height:1px;background-color:#fff;box-shadow:0 0 2px var(--shadow-progressbar-color),0 0 4px var(--shadow-progressbar-color),0 0 6px var(--shadow-progressbar-color)}@keyframes _animate_j8434_1{10%{transform:scaleY(.002)}35%{transform:scale(.2,.002);opacity:1}50%{transform:scale(.2,.002);opacity:0}85%{transform:scaleY(.002) opacity 1}to{transform:scale(1)}}._loaderIcons_j8434_69{max-width:80%;height:50px;display:flex;align-items:center;justify-content:center}._finalScreen_j8434_77{width:100%;height:100%!important;position:absolute;top:0;left:0;background-color:var(--final-screen-color);z-index:1000;animation:_animate_j8434_1 var(--animation-time) ease}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import je from "react";
var Q = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function lr() {
  if (Pe)
    return N;
  Pe = 1;
  var c = je, f = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, a = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(C, v, x) {
    var h, T = {}, O = null, Y = null;
    x !== void 0 && (O = "" + x), v.key !== void 0 && (O = "" + v.key), v.ref !== void 0 && (Y = v.ref);
    for (h in v)
      b.call(v, h) && !p.hasOwnProperty(h) && (T[h] = v[h]);
    if (C && C.defaultProps)
      for (h in v = C.defaultProps, v)
        T[h] === void 0 && (T[h] = v[h]);
    return { $$typeof: f, type: C, key: O, ref: Y, props: T, _owner: a.current };
  }
  return N.Fragment = _, N.jsx = E, N.jsxs = E, N;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function fr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var c = je, f = Symbol.for("react.element"), _ = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), C = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, we = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[we];
      return typeof r == "function" ? r : null;
    }
    var k = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ie = !1, Ae = !1, $e = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === p || $e || e === a || e === x || e === h || Ae || e === Y || De || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === T || e.$$typeof === E || e.$$typeof === C || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case _:
          return "Portal";
        case p:
          return "Profiler";
        case a:
          return "StrictMode";
        case x:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return te(r) + ".Consumer";
          case E:
            var t = e;
            return te(t._context) + ".Provider";
          case v:
            return We(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case O: {
            var s = e, u = s._payload, i = s._init;
            try {
              return P(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, ne, ae, oe, ie, se, ue, ce;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ye() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ne
            }),
            info: w({}, e, {
              value: ae
            }),
            warn: w({}, e, {
              value: oe
            }),
            error: w({}, e, {
              value: ie
            }),
            group: w({}, e, {
              value: se
            }),
            groupCollapsed: w({}, e, {
              value: ue
            }),
            groupEnd: w({}, e, {
              value: ce
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function fe(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (S) {
              n = S;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), m = n.stack.split(`
`), l = o.length - 1, d = m.length - 1; l >= 1 && d >= 0 && o[l] !== m[d]; )
            d--;
          for (; l >= 1 && d >= 0; l--, d--)
            if (o[l] !== m[d]) {
              if (l !== 1 || d !== 1)
                do
                  if (l--, d--, d < 0 || o[l] !== m[d]) {
                    var y = `
` + o[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, y), y;
                  }
                while (l >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = u, Le(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", Te = F ? L(F) : "";
      return typeof e == "function" && M.set(e, Te), Te;
    }
    function Ve(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case h:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ve(e.render);
          case T:
            return V(e.type, r, t);
          case O: {
            var n = e, s = n._payload, u = n._init;
            try {
              return V(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, s) {
      {
        var u = Function.call.bind(U);
        for (var i in e)
          if (u(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              o = l;
            }
            o && !(o instanceof Error) && (B(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), B(null)), o instanceof Error && !(o.message in de) && (de[o.message] = !0, B(s), g("Failed %s type: %s", t, o.message), B(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ge(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), pe(e);
    }
    var $ = k.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, _e, H;
    H = {};
    function He(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = P($.current.type);
        H[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P($.current.type), e.ref), H[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          me || (me = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          _e || (_e = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, s, u, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, n, s) {
      {
        var u, i = {}, o = null, m = null;
        t !== void 0 && (ge(t), o = "" + t), Ke(r) && (ge(r.key), o = "" + r.key), He(r) && (m = r.ref, Xe(r, s));
        for (u in r)
          U.call(r, u) && !ze.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (o || m) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(i, d), m && Qe(i, d);
        }
        return er(e, o, m, s, n, $.current, i);
      }
    }
    var K = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function he() {
      {
        if (K.current) {
          var e = P(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function nr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + P(e._owner.type) + "."), D(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && ye(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = xe(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              Z(i.value) && ye(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var s = P(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Ce(e, r, t, n, s, u) {
      {
        var i = Ne(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = tr(s);
          m ? o += m : o += he();
          var l;
          e === null ? l = "null" : z(e) ? l = "array" : e !== void 0 && e.$$typeof === f ? (l = "<" + (P(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, o);
        }
        var d = rr(e, r, t, s, u);
        if (d == null)
          return d;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (z(y)) {
                for (var F = 0; F < y.length; F++)
                  Re(y[F], e);
                Object.freeze && Object.freeze(y);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(y, e);
        }
        return e === b ? or(d) : ar(d), d;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = sr, cr = ir;
    W.Fragment = b, W.jsx = ur, W.jsxs = cr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Q.exports = lr() : Q.exports = fr();
var I = Q.exports;
const dr = "_loaderContainer_j8434_3", vr = "_progressbarContainer_j8434_16", pr = "_progressPointer_j8434_23", gr = "_progressbar_j8434_16", mr = "_loaderIcons_j8434_69", _r = "_finalScreen_j8434_77", br = "_animate_j8434_1", j = {
  loaderContainer: dr,
  progressbarContainer: vr,
  progressPointer: pr,
  progressbar: gr,
  loaderIcons: mr,
  finalScreen: _r,
  animate: br
};
function hr(c, f) {
  if (c === "static")
    f && yr(f);
  else if (c === "interval")
    f && Er(f);
  else
    return;
}
const Er = (c) => {
  Oe(c);
}, yr = (c) => {
  const f = c * 1e3, _ = f / 100;
  let b = 0, a = 0;
  const p = setInterval(() => {
    b += _, a++, Oe(a), b >= f && clearTimeout(p);
  }, _);
}, Oe = (c) => {
  const f = (p) => document.getElementById(p), _ = f("progress-bar"), b = f("count"), a = 0.7;
  if (c <= 100) {
    const p = Math.random();
    _ && (_.style.width = c + "%"), b && (b.innerHTML = Math.round(c) + "%"), p < a && (c = c + p);
  }
  if (c >= 100) {
    const p = f("progressPointer"), E = f("loaderIcons");
    _ && E && p && (E.style.display = "none", p.style.display = "none", typeof R == "string" ? _.classList.add(R) : typeof R == "object" && (R.backgroundColor && document.documentElement.style.setProperty(
      "--final-screen-color",
      R.backgroundColor
    ), R.time && document.documentElement.style.setProperty(
      "--animation-time",
      R.time + "s"
    ), R.class && _.classList.add(R.class)));
  }
};
let R;
const Tr = (c) => {
  const {
    type: f = "static",
    time: _ = 2,
    porcentageShow: b = !0,
    styles: a
  } = c;
  hr(f, _);
  const p = a == null ? void 0 : a.container;
  let E = a == null ? void 0 : a.progressBarContainer;
  a != null && a.progressBarContainer && (a == null ? void 0 : a.progressBarContainer.display) === "hidden" && (E = {
    ...E,
    backgroundColor: "transparent"
  }), a != null && a.progressPointer && (a != null && a.progressPointer.shadowColor) && document.documentElement.style.setProperty(
    "--shadow-pointer-color",
    a == null ? void 0 : a.progressPointer.shadowColor
  );
  const C = a == null ? void 0 : a.progressbar, v = a == null ? void 0 : a.progressPointer;
  return R = Rr(a == null ? void 0 : a.finalScreen), /* @__PURE__ */ I.jsxs("div", { style: { ...p }, className: j.loaderContainer, children: [
    /* @__PURE__ */ I.jsx("div", { className: j.loaderIcons, id: "loaderIcons", children: b && /* @__PURE__ */ I.jsx("h1", { className: j.count, id: "count" }) }),
    /* @__PURE__ */ I.jsxs(
      "div",
      {
        style: { ...E },
        className: j.progressbarContainer,
        children: [
          /* @__PURE__ */ I.jsx(
            "div",
            {
              style: { ...C },
              className: j.progressbar,
              id: "progress-bar"
            }
          ),
          /* @__PURE__ */ I.jsx(
            "div",
            {
              style: { ...v },
              className: j.progressPointer,
              id: "progressPointer"
            }
          )
        ]
      }
    )
  ] });
}, Rr = (c) => c && Object.keys(c).length > 0 ? { ...c, class: j.finalScreen } : j.finalScreen;
export {
  Tr as default,
  R as finalScreen
};
