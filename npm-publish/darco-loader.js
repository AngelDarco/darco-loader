(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(":root{--primary-color: #f1c40f;--secondary-color: #e67e22;--shadow-progressbar-color: #f1c40f;--shadow-pointer-color: #f1c40f;--final-screen-color: #fff;--animation-time: 1s}._loaderContainer_j8434_3{padding:0;margin:0;width:100%;height:100vh;overflow:hidden;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}._progressbarContainer_j8434_16{background-color:#ffffff3b;display:flex;align-items:center;width:80%;border-radius:10px}._progressPointer_j8434_23{width:5px;height:2px;background-color:var(--primary-color);border-radius:50%;box-shadow:0 0 2px #fdfdfd,0 0 3px var(--shadow-pointer-color),0 0 4px var(--shadow-pointer-color),0 0 5px var(--shadow-pointer-color),0 0 6px var(--shadow-pointer-color),0 0 8px var(--shadow-pointer-color),0 0 10px var(--shadow-pointer-color),0 0 12px var(--shadow-pointer-color),0 0 14px var(--shadow-pointer-color)}._progressbar_j8434_16{position:relative;height:1px;background-color:#fff;box-shadow:0 0 2px var(--shadow-progressbar-color),0 0 4px var(--shadow-progressbar-color),0 0 6px var(--shadow-progressbar-color)}@keyframes _animate_j8434_1{10%{transform:scaleY(.002)}35%{transform:scale(.2,.002);opacity:1}50%{transform:scale(.2,.002);opacity:0}85%{transform:scaleY(.002) opacity 1}to{transform:scale(1)}}._loaderIcons_j8434_69{max-width:80%;height:50px;display:flex;align-items:center;justify-content:center}._finalScreen_j8434_77{width:100%;height:100%!important;position:absolute;top:0;left:0;background-color:var(--final-screen-color);z-index:1000;animation:_animate_j8434_1 var(--animation-time) ease}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Vr = { exports: {} }, Je = {}, gr = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Bt() {
  if (lt)
    return _;
  lt = 1;
  var C = Symbol.for("react.element"), d = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), q = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), H = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = H && n[H] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ee = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, $e = {};
  function oe(n, s, m) {
    this.props = n, this.context = s, this.refs = $e, this.updater = m || ee;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ie() {
  }
  ie.prototype = oe.prototype;
  function N(n, s, m) {
    this.props = n, this.context = s, this.refs = $e, this.updater = m || ee;
  }
  var me = N.prototype = new ie();
  me.constructor = N, fe(me, oe.prototype), me.isPureReactComponent = !0;
  var ue = Array.isArray, U = Object.prototype.hasOwnProperty, Q = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, s, m) {
    var w, b = {}, j = null, A = null;
    if (s != null)
      for (w in s.ref !== void 0 && (A = s.ref), s.key !== void 0 && (j = "" + s.key), s)
        U.call(s, w) && !le.hasOwnProperty(w) && (b[w] = s[w]);
    var P = arguments.length - 2;
    if (P === 1)
      b.children = m;
    else if (1 < P) {
      for (var T = Array(P), B = 0; B < P; B++)
        T[B] = arguments[B + 2];
      b.children = T;
    }
    if (n && n.defaultProps)
      for (w in P = n.defaultProps, P)
        b[w] === void 0 && (b[w] = P[w]);
    return { $$typeof: C, type: n, key: j, ref: A, props: b, _owner: Q.current };
  }
  function Se(n, s) {
    return { $$typeof: C, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === C;
  }
  function ze(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(m) {
      return s[m];
    });
  }
  var Te = /\/+/g;
  function Z(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? ze("" + n.key) : s.toString(36);
  }
  function re(n, s, m, w, b) {
    var j = typeof n;
    (j === "undefined" || j === "boolean") && (n = null);
    var A = !1;
    if (n === null)
      A = !0;
    else
      switch (j) {
        case "string":
        case "number":
          A = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case C:
            case d:
              A = !0;
          }
      }
    if (A)
      return A = n, b = b(A), n = w === "" ? "." + Z(A, 0) : w, ue(b) ? (m = "", n != null && (m = n.replace(Te, "$&/") + "/"), re(b, s, m, "", function(B) {
        return B;
      })) : b != null && (we(b) && (b = Se(b, m + (!b.key || A && A.key === b.key ? "" : ("" + b.key).replace(Te, "$&/") + "/") + n)), s.push(b)), 1;
    if (A = 0, w = w === "" ? "." : w + ":", ue(n))
      for (var P = 0; P < n.length; P++) {
        j = n[P];
        var T = w + Z(j, P);
        A += re(j, s, m, T, b);
      }
    else if (T = ae(n), typeof T == "function")
      for (n = T.call(n), P = 0; !(j = n.next()).done; )
        j = j.value, T = w + Z(j, P++), A += re(j, s, m, T, b);
    else if (j === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return A;
  }
  function G(n, s, m) {
    if (n == null)
      return n;
    var w = [], b = 0;
    return re(n, w, "", "", function(j) {
      return s.call(m, j, b++);
    }), w;
  }
  function se(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = m);
      }, function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = m);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var p = { current: null }, de = { transition: null }, Oe = { ReactCurrentDispatcher: p, ReactCurrentBatchConfig: de, ReactCurrentOwner: Q };
  return _.Children = { map: G, forEach: function(n, s, m) {
    G(n, function() {
      s.apply(this, arguments);
    }, m);
  }, count: function(n) {
    var s = 0;
    return G(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return G(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, _.Component = oe, _.Fragment = z, _.Profiler = y, _.PureComponent = N, _.StrictMode = W, _.Suspense = F, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, _.cloneElement = function(n, s, m) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var w = fe({}, n.props), b = n.key, j = n.ref, A = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (j = s.ref, A = Q.current), s.key !== void 0 && (b = "" + s.key), n.type && n.type.defaultProps)
        var P = n.type.defaultProps;
      for (T in s)
        U.call(s, T) && !le.hasOwnProperty(T) && (w[T] = s[T] === void 0 && P !== void 0 ? P[T] : s[T]);
    }
    var T = arguments.length - 2;
    if (T === 1)
      w.children = m;
    else if (1 < T) {
      P = Array(T);
      for (var B = 0; B < T; B++)
        P[B] = arguments[B + 2];
      w.children = P;
    }
    return { $$typeof: C, type: n.type, key: b, ref: j, props: w, _owner: A };
  }, _.createContext = function(n) {
    return n = { $$typeof: q, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: I, _context: n }, n.Consumer = n;
  }, _.createElement = ye, _.createFactory = function(n) {
    var s = ye.bind(null, n);
    return s.type = n, s;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(n) {
    return { $$typeof: X, render: n };
  }, _.isValidElement = we, _.lazy = function(n) {
    return { $$typeof: V, _payload: { _status: -1, _result: n }, _init: se };
  }, _.memo = function(n, s) {
    return { $$typeof: ne, type: n, compare: s === void 0 ? null : s };
  }, _.startTransition = function(n) {
    var s = de.transition;
    de.transition = {};
    try {
      n();
    } finally {
      de.transition = s;
    }
  }, _.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, _.useCallback = function(n, s) {
    return p.current.useCallback(n, s);
  }, _.useContext = function(n) {
    return p.current.useContext(n);
  }, _.useDebugValue = function() {
  }, _.useDeferredValue = function(n) {
    return p.current.useDeferredValue(n);
  }, _.useEffect = function(n, s) {
    return p.current.useEffect(n, s);
  }, _.useId = function() {
    return p.current.useId();
  }, _.useImperativeHandle = function(n, s, m) {
    return p.current.useImperativeHandle(n, s, m);
  }, _.useInsertionEffect = function(n, s) {
    return p.current.useInsertionEffect(n, s);
  }, _.useLayoutEffect = function(n, s) {
    return p.current.useLayoutEffect(n, s);
  }, _.useMemo = function(n, s) {
    return p.current.useMemo(n, s);
  }, _.useReducer = function(n, s, m) {
    return p.current.useReducer(n, s, m);
  }, _.useRef = function(n) {
    return p.current.useRef(n);
  }, _.useState = function(n) {
    return p.current.useState(n);
  }, _.useSyncExternalStore = function(n, s, m) {
    return p.current.useSyncExternalStore(n, s, m);
  }, _.useTransition = function() {
    return p.current.useTransition();
  }, _.version = "18.2.0", _;
}
var Qe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qe.exports;
var dt;
function zt() {
  return dt || (dt = 1, function(C, d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var z = "18.2.0", W = Symbol.for("react.element"), y = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), ne = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), oe = Symbol.iterator, ie = "@@iterator";
      function N(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ie];
        return typeof r == "function" ? r : null;
      }
      var me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, U = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {}, ye = null;
      function Se(e) {
        ye = e;
      }
      le.setExtraStackFrame = function(e) {
        ye = e;
      }, le.getCurrentStack = null, le.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = le.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, ze = !1, Te = !1, Z = !1, re = !1, G = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: Q
      };
      G.ReactDebugCurrentFrame = le, G.ReactCurrentActQueue = U;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("warn", e, a);
        }
      }
      function p(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("error", e, a);
        }
      }
      function de(e, r, a) {
        {
          var o = G.ReactDebugCurrentFrame, u = o.getStackAddendum();
          u !== "" && (r += "%s", a = a.concat([u]));
          var v = a.map(function(l) {
            return String(l);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Oe = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", u = o + "." + r;
          if (Oe[u])
            return;
          p("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Oe[u] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, m = Object.assign, w = {};
      Object.freeze(w);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var j = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, A = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var P in j)
          j.hasOwnProperty(P) && A(P, j[P]);
      }
      function T() {
      }
      T.prototype = b.prototype;
      function B(e, r, a) {
        this.props = e, this.context = r, this.refs = w, this.updater = a || s;
      }
      var ge = B.prototype = new T();
      ge.constructor = B, m(ge, b.prototype), ge.isPureReactComponent = !0;
      function _r() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Ze = Array.isArray;
      function Le(e) {
        return Ze(e);
      }
      function br(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ne(e) {
        try {
          return Pe(e), !1;
        } catch {
          return !0;
        }
      }
      function Pe(e) {
        return "" + e;
      }
      function ke(e) {
        if (Ne(e))
          return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), Pe(e);
      }
      function er(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var u = r.displayName || r.name || "";
        return u !== "" ? a + "(" + u + ")" : a;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case I:
            return "Fragment";
          case y:
            return "Portal";
          case X:
            return "Profiler";
          case q:
            return "StrictMode";
          case H:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ne:
              var r = e;
              return je(r) + ".Consumer";
            case F:
              var a = e;
              return je(a._context) + ".Provider";
            case V:
              return er(e, e.render, "ForwardRef");
            case ee:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case fe: {
              var u = e, v = u._payload, l = u._init;
              try {
                return pe(l(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rr, tr, We;
      We = {};
      function qe(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Er(e, r) {
        var a = function() {
          rr || (rr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function nr(e, r) {
        var a = function() {
          tr || (tr = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ar(e) {
        if (typeof e.ref == "string" && Q.current && e.__self && Q.current.stateNode !== e.__self) {
          var r = pe(Q.current.type);
          We[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var xe = function(e, r, a, o, u, v, l) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: W,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function Rr(e, r, a) {
        var o, u = {}, v = null, l = null, h = null, R = null;
        if (r != null) {
          qe(r) && (l = r.ref, ar(r)), _e(r) && (ke(r.key), v = "" + r.key), h = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Ae.call(r, o) && !Me.hasOwnProperty(o) && (u[o] = r[o]);
        }
        var k = arguments.length - 2;
        if (k === 1)
          u.children = a;
        else if (k > 1) {
          for (var x = Array(k), D = 0; D < k; D++)
            x[D] = arguments[D + 2];
          Object.freeze && Object.freeze(x), u.children = x;
        }
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (o in L)
            u[o] === void 0 && (u[o] = L[o]);
        }
        if (v || l) {
          var Y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Er(u, Y), l && nr(u, Y);
        }
        return xe(e, v, l, h, R, Q.current, u);
      }
      function Cr(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Sr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, u = m({}, e.props), v = e.key, l = e.ref, h = e._self, R = e._source, k = e._owner;
        if (r != null) {
          qe(r) && (l = r.ref, k = Q.current), _e(r) && (ke(r.key), v = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (o in r)
            Ae.call(r, o) && !Me.hasOwnProperty(o) && (r[o] === void 0 && x !== void 0 ? u[o] = x[o] : u[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          u.children = a;
        else if (D > 1) {
          for (var L = Array(D), Y = 0; Y < D; Y++)
            L[Y] = arguments[Y + 2];
          u.children = L;
        }
        return xe(e.type, v, l, h, R, k, u);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === W;
      }
      var or = ".", wr = ":";
      function Tr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(u) {
          return a[u];
        });
        return "$" + o;
      }
      var Ve = !1, ir = /\/+/g;
      function he(e) {
        return e.replace(ir, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Tr("" + e.key)) : r.toString(36);
      }
      function Ee(e, r, a, o, u) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (v) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case W:
                case y:
                  l = !0;
              }
          }
        if (l) {
          var h = e, R = u(h), k = o === "" ? or + De(h, 0) : o;
          if (Le(R)) {
            var x = "";
            k != null && (x = he(k) + "/"), Ee(R, r, x, "", function(Yt) {
              return Yt;
            });
          } else
            R != null && (be(R) && (R.key && (!h || h.key !== R.key) && ke(R.key), R = Cr(
              R,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (R.key && (!h || h.key !== R.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                he("" + R.key) + "/"
              ) : "") + k
            )), r.push(R));
          return 1;
        }
        var D, L, Y = 0, J = o === "" ? or : o + wr;
        if (Le(e))
          for (var mr = 0; mr < e.length; mr++)
            D = e[mr], L = J + De(D, mr), Y += Ee(D, r, a, L, u);
        else {
          var Wr = N(e);
          if (typeof Wr == "function") {
            var st = e;
            Wr === st.entries && (Ve || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Vt = Wr.call(st), ct, Ut = 0; !(ct = Vt.next()).done; )
              D = ct.value, L = J + De(D, Ut++), Y += Ee(D, r, a, L, u);
          } else if (v === "object") {
            var ft = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ft === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ft) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Y;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], u = 0;
        return Ee(e, o, "", "", function(v) {
          return r.call(a, v, u++);
        }), o;
      }
      function Or(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function ur(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Pr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function sr(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function cr(e) {
        var r = {
          $$typeof: ne,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: F,
          _context: r
        };
        var a = !1, o = !1, u = !1;
        {
          var v = {
            $$typeof: ne,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, p("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, p("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                u || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), u = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, He = 0, Ge = 1, kr = 2;
      function jr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === He || e._status === Fe) {
              var l = e;
              l._status = Ge, l._result = v;
            }
          }, function(v) {
            if (e._status === He || e._status === Fe) {
              var l = e;
              l._status = kr, l._result = v;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = He, o._result = a;
          }
        }
        if (e._status === Ge) {
          var u = e._result;
          return u === void 0 && p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || p(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function Ar(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: jr
        };
        {
          var o, u;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(v) {
                p("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === ee ? p("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? p("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && p("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && p("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: V,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === I || e === X || re || e === q || e === H || e === ae || Z || e === $e || we || ze || Te || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === ee || e.$$typeof === F || e.$$typeof === ne || e.$$typeof === V || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || p("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: ee,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(u) {
              o = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return a;
      }
      function f() {
        var e = me.current;
        return e === null && p(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function S(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? p("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && p("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function O(e) {
        var r = f();
        return r.useState(e);
      }
      function E(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function g(e) {
        var r = f();
        return r.useRef(e);
      }
      function K(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function $(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function M(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function te(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Re(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function fr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ce(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function gt() {
        var e = f();
        return e.useTransition();
      }
      function _t(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function bt() {
        var e = f();
        return e.useId();
      }
      function Et(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ke = 0, Ur, Yr, Br, zr, qr, Hr, Gr;
      function Kr() {
      }
      Kr.__reactDisabledLog = !0;
      function Rt() {
        {
          if (Ke === 0) {
            Ur = console.log, Yr = console.info, Br = console.warn, zr = console.error, qr = console.group, Hr = console.groupCollapsed, Gr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Kr,
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
          Ke++;
        }
      }
      function Ct() {
        {
          if (Ke--, Ke === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: m({}, e, {
                value: Ur
              }),
              info: m({}, e, {
                value: Yr
              }),
              warn: m({}, e, {
                value: Br
              }),
              error: m({}, e, {
                value: zr
              }),
              group: m({}, e, {
                value: qr
              }),
              groupCollapsed: m({}, e, {
                value: Hr
              }),
              groupEnd: m({}, e, {
                value: Gr
              })
            });
          }
          Ke < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Dr = G.ReactCurrentDispatcher, Ir;
      function lr(e, r, a) {
        {
          if (Ir === void 0)
            try {
              throw Error();
            } catch (u) {
              var o = u.stack.trim().match(/\n( *(at )?)/);
              Ir = o && o[1] || "";
            }
          return `
` + Ir + e;
        }
      }
      var Fr = !1, dr;
      {
        var St = typeof WeakMap == "function" ? WeakMap : Map;
        dr = new St();
      }
      function Jr(e, r) {
        if (!e || Fr)
          return "";
        {
          var a = dr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Fr = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = Dr.current, Dr.current = null, Rt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (J) {
                o = J;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (J) {
                o = J;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (J) {
              o = J;
            }
            e();
          }
        } catch (J) {
          if (J && o && typeof J.stack == "string") {
            for (var h = J.stack.split(`
`), R = o.stack.split(`
`), k = h.length - 1, x = R.length - 1; k >= 1 && x >= 0 && h[k] !== R[x]; )
              x--;
            for (; k >= 1 && x >= 0; k--, x--)
              if (h[k] !== R[x]) {
                if (k !== 1 || x !== 1)
                  do
                    if (k--, x--, x < 0 || h[k] !== R[x]) {
                      var D = `
` + h[k].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && dr.set(e, D), D;
                    }
                  while (k >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          Fr = !1, Dr.current = v, Ct(), Error.prepareStackTrace = u;
        }
        var L = e ? e.displayName || e.name : "", Y = L ? lr(L) : "";
        return typeof e == "function" && dr.set(e, Y), Y;
      }
      function wt(e, r, a) {
        return Jr(e, !1);
      }
      function Tt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function pr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Jr(e, Tt(e));
        if (typeof e == "string")
          return lr(e);
        switch (e) {
          case H:
            return lr("Suspense");
          case ae:
            return lr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case V:
              return wt(e.render);
            case ee:
              return pr(e.type, r, a);
            case fe: {
              var o = e, u = o._payload, v = o._init;
              try {
                return pr(v(u), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Xr = {}, Qr = G.ReactDebugCurrentFrame;
      function vr(e) {
        if (e) {
          var r = e._owner, a = pr(e.type, e._source, r ? r.type : null);
          Qr.setExtraStackFrame(a);
        } else
          Qr.setExtraStackFrame(null);
      }
      function Ot(e, r, a, o, u) {
        {
          var v = Function.call.bind(Ae);
          for (var l in e)
            if (v(e, l)) {
              var h = void 0;
              try {
                if (typeof e[l] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                h = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (k) {
                h = k;
              }
              h && !(h instanceof Error) && (vr(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof h), vr(null)), h instanceof Error && !(h.message in Xr) && (Xr[h.message] = !0, vr(u), p("Failed %s type: %s", a, h.message), vr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = pr(e.type, e._source, r ? r.type : null);
          Se(a);
        } else
          Se(null);
      }
      var $r;
      $r = !1;
      function Zr() {
        if (Q.current) {
          var e = pe(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Pt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? Pt(e.__source) : "";
      }
      var et = {};
      function jt(e) {
        var r = Zr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function rt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = jt(r);
          if (!et[a]) {
            et[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), Ue(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function tt(e, r) {
        if (typeof e == "object") {
          if (Le(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && rt(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = N(e);
            if (typeof u == "function" && u !== e.entries)
              for (var v = u.call(e), l; !(l = v.next()).done; )
                be(l.value) && rt(l.value, r);
          }
        }
      }
      function nt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === V || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === ee))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            Ot(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !$r) {
            $r = !0;
            var u = pe(r);
            p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function At(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function at(e, r, a) {
        var o = i(e);
        if (!o) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = kt(r);
          v ? u += v : u += Zr();
          var l;
          e === null ? l = "null" : Le(e) ? l = "array" : e !== void 0 && e.$$typeof === W ? (l = "<" + (pe(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, u);
        }
        var h = Rr.apply(this, arguments);
        if (h == null)
          return h;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            tt(arguments[R], e);
        return e === I ? At(h) : nt(h), h;
      }
      var ot = !1;
      function xt(e) {
        var r = at.bind(null, e);
        return r.type = e, ot || (ot = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Dt(e, r, a) {
        for (var o = Sr.apply(this, arguments), u = 2; u < arguments.length; u++)
          tt(arguments[u], o.type);
        return nt(o), o;
      }
      function It(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var u = o._updatedFibers.size;
            u > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var it = !1, yr = null;
      function Ft(e) {
        if (yr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = C && C[r];
            yr = a.call(C, "timers").setImmediate;
          } catch {
            yr = function(u) {
              it === !1 && (it = !0, typeof MessageChannel > "u" && p("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = u, v.port2.postMessage(void 0);
            };
          }
        return yr(e);
      }
      var Ye = 0, ut = !1;
      function $t(e) {
        {
          var r = Ye;
          Ye++, U.current === null && (U.current = []);
          var a = U.isBatchingLegacy, o;
          try {
            if (U.isBatchingLegacy = !0, o = e(), !a && U.didScheduleLegacyUpdate) {
              var u = U.current;
              u !== null && (U.didScheduleLegacyUpdate = !1, Mr(u));
            }
          } catch (L) {
            throw hr(r), L;
          } finally {
            U.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, l = !1, h = {
              then: function(L, Y) {
                l = !0, v.then(function(J) {
                  hr(r), Ye === 0 ? Lr(J, L, Y) : L(J);
                }, function(J) {
                  hr(r), Y(J);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ut = !0, p("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), h;
          } else {
            var R = o;
            if (hr(r), Ye === 0) {
              var k = U.current;
              k !== null && (Mr(k), U.current = null);
              var x = {
                then: function(L, Y) {
                  U.current === null ? (U.current = [], Lr(R, L, Y)) : L(R);
                }
              };
              return x;
            } else {
              var D = {
                then: function(L, Y) {
                  L(R);
                }
              };
              return D;
            }
          }
        }
      }
      function hr(e) {
        e !== Ye - 1 && p("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function Lr(e, r, a) {
        {
          var o = U.current;
          if (o !== null)
            try {
              Mr(o), Ft(function() {
                o.length === 0 ? (U.current = null, r(e)) : Lr(e, r, a);
              });
            } catch (u) {
              a(u);
            }
          else
            r(e);
        }
      }
      var Nr = !1;
      function Mr(e) {
        if (!Nr) {
          Nr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Nr = !1;
          }
        }
      }
      var Lt = at, Nt = Dt, Mt = xt, Wt = {
        map: Ie,
        forEach: ur,
        count: Or,
        toArray: Pr,
        only: sr
      };
      d.Children = Wt, d.Component = b, d.Fragment = I, d.Profiler = X, d.PureComponent = B, d.StrictMode = q, d.Suspense = H, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, d.cloneElement = Nt, d.createContext = cr, d.createElement = Lt, d.createFactory = Mt, d.createRef = _r, d.forwardRef = xr, d.isValidElement = be, d.lazy = Ar, d.memo = c, d.startTransition = It, d.unstable_act = $t, d.useCallback = te, d.useContext = S, d.useDebugValue = ce, d.useDeferredValue = _t, d.useEffect = K, d.useId = bt, d.useImperativeHandle = fr, d.useInsertionEffect = $, d.useLayoutEffect = M, d.useMemo = Re, d.useReducer = E, d.useRef = g, d.useState = O, d.useSyncExternalStore = Et, d.useTransition = gt, d.version = z, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qe, Qe.exports)), Qe.exports;
}
var pt;
function ht() {
  return pt || (pt = 1, process.env.NODE_ENV === "production" ? gr.exports = Bt() : gr.exports = zt()), gr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function qt() {
  if (vt)
    return Je;
  vt = 1;
  var C = ht(), d = Symbol.for("react.element"), z = Symbol.for("react.fragment"), W = Object.prototype.hasOwnProperty, y = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(X, F, ne) {
    var V, H = {}, ae = null, ee = null;
    ne !== void 0 && (ae = "" + ne), F.key !== void 0 && (ae = "" + F.key), F.ref !== void 0 && (ee = F.ref);
    for (V in F)
      W.call(F, V) && !I.hasOwnProperty(V) && (H[V] = F[V]);
    if (X && X.defaultProps)
      for (V in F = X.defaultProps, F)
        H[V] === void 0 && (H[V] = F[V]);
    return { $$typeof: d, type: X, key: ae, ref: ee, props: H, _owner: y.current };
  }
  return Je.Fragment = z, Je.jsx = q, Je.jsxs = q, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Ht() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var C = ht(), d = Symbol.for("react.element"), z = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), X = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), fe = Symbol.iterator, $e = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[$e];
      return typeof i == "function" ? i : null;
    }
    var ie = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          c[f - 1] = arguments[f];
        me("error", t, c);
      }
    }
    function me(t, i, c) {
      {
        var f = ie.ReactDebugCurrentFrame, S = f.getStackAddendum();
        S !== "" && (i += "%s", c = c.concat([S]));
        var O = c.map(function(E) {
          return String(E);
        });
        O.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, O);
      }
    }
    var ue = !1, U = !1, Q = !1, le = !1, ye = !1, Se;
    Se = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === W || t === I || ye || t === y || t === ne || t === V || le || t === ee || ue || U || Q || typeof t == "object" && t !== null && (t.$$typeof === ae || t.$$typeof === H || t.$$typeof === q || t.$$typeof === X || t.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Se || t.getModuleId !== void 0));
    }
    function ze(t, i, c) {
      var f = t.displayName;
      if (f)
        return f;
      var S = i.displayName || i.name || "";
      return S !== "" ? c + "(" + S + ")" : c;
    }
    function Te(t) {
      return t.displayName || "Context";
    }
    function Z(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case W:
          return "Fragment";
        case z:
          return "Portal";
        case I:
          return "Profiler";
        case y:
          return "StrictMode";
        case ne:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case X:
            var i = t;
            return Te(i) + ".Consumer";
          case q:
            var c = t;
            return Te(c._context) + ".Provider";
          case F:
            return ze(t, t.render, "ForwardRef");
          case H:
            var f = t.displayName || null;
            return f !== null ? f : Z(t.type) || "Memo";
          case ae: {
            var S = t, O = S._payload, E = S._init;
            try {
              return Z(E(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, G = 0, se, p, de, Oe, n, s, m;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function b() {
      {
        if (G === 0) {
          se = console.log, p = console.info, de = console.warn, Oe = console.error, n = console.group, s = console.groupCollapsed, m = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        G++;
      }
    }
    function j() {
      {
        if (G--, G === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, t, {
              value: se
            }),
            info: re({}, t, {
              value: p
            }),
            warn: re({}, t, {
              value: de
            }),
            error: re({}, t, {
              value: Oe
            }),
            group: re({}, t, {
              value: n
            }),
            groupCollapsed: re({}, t, {
              value: s
            }),
            groupEnd: re({}, t, {
              value: m
            })
          });
        }
        G < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = ie.ReactCurrentDispatcher, P;
    function T(t, i, c) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (S) {
            var f = S.stack.trim().match(/\n( *(at )?)/);
            P = f && f[1] || "";
          }
        return `
` + P + t;
      }
    }
    var B = !1, ge;
    {
      var _r = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new _r();
    }
    function Ze(t, i) {
      if (!t || B)
        return "";
      {
        var c = ge.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      B = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = A.current, A.current = null, b();
      try {
        if (i) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (ce) {
              f = ce;
            }
            Reflect.construct(t, [], E);
          } else {
            try {
              E.call();
            } catch (ce) {
              f = ce;
            }
            t.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            f = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && f && typeof ce.stack == "string") {
          for (var g = ce.stack.split(`
`), K = f.stack.split(`
`), $ = g.length - 1, M = K.length - 1; $ >= 1 && M >= 0 && g[$] !== K[M]; )
            M--;
          for (; $ >= 1 && M >= 0; $--, M--)
            if (g[$] !== K[M]) {
              if ($ !== 1 || M !== 1)
                do
                  if ($--, M--, M < 0 || g[$] !== K[M]) {
                    var te = `
` + g[$].replace(" at new ", " at ");
                    return t.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, te), te;
                  }
                while ($ >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        B = !1, A.current = O, j(), Error.prepareStackTrace = S;
      }
      var Re = t ? t.displayName || t.name : "", fr = Re ? T(Re) : "";
      return typeof t == "function" && ge.set(t, fr), fr;
    }
    function Le(t, i, c) {
      return Ze(t, !1);
    }
    function br(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ne(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ze(t, br(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ne:
          return T("Suspense");
        case V:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case F:
            return Le(t.render);
          case H:
            return Ne(t.type, i, c);
          case ae: {
            var f = t, S = f._payload, O = f._init;
            try {
              return Ne(O(S), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, ke = {}, er = ie.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var i = t._owner, c = Ne(t.type, t._source, i ? i.type : null);
        er.setExtraStackFrame(c);
      } else
        er.setExtraStackFrame(null);
    }
    function pe(t, i, c, f, S) {
      {
        var O = Function.call.bind(Pe);
        for (var E in t)
          if (O(t, E)) {
            var g = void 0;
            try {
              if (typeof t[E] != "function") {
                var K = Error((f || "React class") + ": " + c + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              g = t[E](i, E, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              g = $;
            }
            g && !(g instanceof Error) && (je(S), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, E, typeof g), je(null)), g instanceof Error && !(g.message in ke) && (ke[g.message] = !0, je(S), N("Failed %s type: %s", c, g.message), je(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Me(t) {
      return Ae(t);
    }
    function rr(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function tr(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function qe(t) {
      if (tr(t))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(t)), We(t);
    }
    var _e = ie.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nr, ar, xe;
    xe = {};
    function Rr(t) {
      if (Pe.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Cr(t) {
      if (Pe.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Sr(t, i) {
      if (typeof t.ref == "string" && _e.current && i && _e.current.stateNode !== i) {
        var c = Z(_e.current.type);
        xe[c] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(_e.current.type), t.ref), xe[c] = !0);
      }
    }
    function be(t, i) {
      {
        var c = function() {
          nr || (nr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function or(t, i) {
      {
        var c = function() {
          ar || (ar = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, i, c, f, S, O, E) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: E,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Tr(t, i, c, f, S) {
      {
        var O, E = {}, g = null, K = null;
        c !== void 0 && (qe(c), g = "" + c), Cr(i) && (qe(i.key), g = "" + i.key), Rr(i) && (K = i.ref, Sr(i, S));
        for (O in i)
          Pe.call(i, O) && !Er.hasOwnProperty(O) && (E[O] = i[O]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (O in $)
            E[O] === void 0 && (E[O] = $[O]);
        }
        if (g || K) {
          var M = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          g && be(E, M), K && or(E, M);
        }
        return wr(t, g, K, S, f, _e.current, E);
      }
    }
    var Ve = ie.ReactCurrentOwner, ir = ie.ReactDebugCurrentFrame;
    function he(t) {
      if (t) {
        var i = t._owner, c = Ne(t.type, t._source, i ? i.type : null);
        ir.setExtraStackFrame(c);
      } else
        ir.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === d;
    }
    function Ie() {
      {
        if (Ve.current) {
          var t = Z(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Or(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var ur = {};
    function Pr(t) {
      {
        var i = Ie();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function sr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Pr(i);
        if (ur[c])
          return;
        ur[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Ve.current && (f = " It was passed a child from " + Z(t._owner.type) + "."), he(t), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), he(null);
      }
    }
    function cr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            Ee(f) && sr(f, i);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var S = oe(t);
          if (typeof S == "function" && S !== t.entries)
            for (var O = S.call(t), E; !(E = O.next()).done; )
              Ee(E.value) && sr(E.value, i);
        }
      }
    }
    function Fe(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === F || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === H))
          c = i.propTypes;
        else
          return;
        if (c) {
          var f = Z(i);
          pe(c, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !De) {
          De = !0;
          var S = Z(i);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var f = i[c];
          if (f !== "children" && f !== "key") {
            he(t), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), he(null);
            break;
          }
        }
        t.ref !== null && (he(t), N("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function Ge(t, i, c, f, S, O) {
      {
        var E = we(t);
        if (!E) {
          var g = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Or(S);
          K ? g += K : g += Ie();
          var $;
          t === null ? $ = "null" : Me(t) ? $ = "array" : t !== void 0 && t.$$typeof === d ? ($ = "<" + (Z(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, g);
        }
        var M = Tr(t, i, c, S, O);
        if (M == null)
          return M;
        if (E) {
          var te = i.children;
          if (te !== void 0)
            if (f)
              if (Me(te)) {
                for (var Re = 0; Re < te.length; Re++)
                  cr(te[Re], t);
                Object.freeze && Object.freeze(te);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(te, t);
        }
        return t === W ? He(M) : Fe(M), M;
      }
    }
    function kr(t, i, c) {
      return Ge(t, i, c, !0);
    }
    function jr(t, i, c) {
      return Ge(t, i, c, !1);
    }
    var Ar = jr, xr = kr;
    Xe.Fragment = W, Xe.jsx = Ar, Xe.jsxs = xr;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Vr.exports = qt() : Vr.exports = Ht();
var Be = Vr.exports;
const Gt = "_loaderContainer_j8434_3", Kt = "_progressbarContainer_j8434_16", Jt = "_progressPointer_j8434_23", Xt = "_progressbar_j8434_16", Qt = "_loaderIcons_j8434_69", Zt = "_finalScreen_j8434_77", en = "_animate_j8434_1", Ce = {
  loaderContainer: Gt,
  progressbarContainer: Kt,
  progressPointer: Jt,
  progressbar: Xt,
  loaderIcons: Qt,
  finalScreen: Zt,
  animate: en
};
function rn(C, d) {
  if (C === "static")
    d && nn(d);
  else if (C === "interval")
    d && tn(d);
  else
    return;
}
const tn = (C) => {
  mt(C);
}, nn = (C) => {
  const d = C * 1e3, z = d / 100;
  let W = 0, y = 0;
  const I = setInterval(() => {
    W += z, y++, mt(y), W >= d && clearTimeout(I);
  }, z);
}, mt = (C) => {
  const d = (I) => document.getElementById(I), z = d("progress-bar"), W = d("count"), y = 0.7;
  if (C <= 100) {
    const I = Math.random();
    z && (z.style.width = C + "%"), W && (W.innerHTML = Math.round(C) + "%"), I < y && (C = C + I);
  }
  if (C >= 100) {
    const I = d("progressPointer"), q = d("loaderIcons");
    z && q && I && (q.style.display = "none", I.style.display = "none", typeof ve == "string" ? z.classList.add(ve) : typeof ve == "object" && (ve.backgroundColor && document.documentElement.style.setProperty(
      "--final-screen-color",
      ve.backgroundColor
    ), ve.time && document.documentElement.style.setProperty(
      "--animation-time",
      ve.time + "s"
    ), ve.class && z.classList.add(ve.class)));
  }
};
let ve;
const on = (C) => {
  const {
    type: d = "static",
    time: z = 2,
    porcentageShow: W = !0,
    styles: y
  } = C;
  rn(d, z);
  const I = y == null ? void 0 : y.container;
  let q = y == null ? void 0 : y.progressBarContainer;
  y != null && y.progressBarContainer && (y == null ? void 0 : y.progressBarContainer.display) === "hidden" && (q = {
    ...q,
    backgroundColor: "transparent"
  }), y != null && y.progressPointer && (y != null && y.progressPointer.shadowColor) && document.documentElement.style.setProperty(
    "--shadow-pointer-color",
    y == null ? void 0 : y.progressPointer.shadowColor
  );
  const X = y == null ? void 0 : y.progressbar, F = y == null ? void 0 : y.progressPointer;
  return ve = an(y == null ? void 0 : y.finalScreen), /* @__PURE__ */ Be.jsxs("div", { style: { ...I }, className: Ce.loaderContainer, children: [
    /* @__PURE__ */ Be.jsx("div", { className: Ce.loaderIcons, id: "loaderIcons", children: W && /* @__PURE__ */ Be.jsx("h1", { className: Ce.count, id: "count" }) }),
    /* @__PURE__ */ Be.jsxs(
      "div",
      {
        style: { ...q },
        className: Ce.progressbarContainer,
        children: [
          /* @__PURE__ */ Be.jsx(
            "div",
            {
              style: { ...X },
              className: Ce.progressbar,
              id: "progress-bar"
            }
          ),
          /* @__PURE__ */ Be.jsx(
            "div",
            {
              style: { ...F },
              className: Ce.progressPointer,
              id: "progressPointer"
            }
          )
        ]
      }
    )
  ] });
}, an = (C) => C && Object.keys(C).length > 0 ? { ...C, class: Ce.finalScreen } : Ce.finalScreen;
export {
  on as default,
  ve as finalScreen
};
