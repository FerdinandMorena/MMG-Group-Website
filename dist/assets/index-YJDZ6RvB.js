var L0 = Object.defineProperty;
var D0 = (t, r, s) =>
  r in t
    ? L0(t, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (t[r] = s);
var an = (t, r, s) => D0(t, typeof r != "symbol" ? r + "" : r, s);
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = s(l);
    fetch(l.href, c);
  }
})();
function Uo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Ul = { exports: {} },
  Mi = {},
  $l = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ah;
function V0() {
  if (Ah) return ae;
  Ah = 1;
  var t = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function w(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (v && P[v]) || P["@@iterator"]),
        typeof P == "function" ? P : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    M = {};
  function j(P, _, oe) {
    ((this.props = P),
      (this.context = _),
      (this.refs = M),
      (this.updater = oe || C));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (P, _) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, P, _, "setState");
    }),
    (j.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    }));
  function A() {}
  A.prototype = j.prototype;
  function V(P, _, oe) {
    ((this.props = P),
      (this.context = _),
      (this.refs = M),
      (this.updater = oe || C));
  }
  var D = (V.prototype = new A());
  ((D.constructor = V), N(D, j.prototype), (D.isPureReactComponent = !0));
  var $ = Array.isArray,
    W = Object.prototype.hasOwnProperty,
    ie = { current: null },
    se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(P, _, oe) {
    var le,
      de = {},
      fe = null,
      we = null;
    if (_ != null)
      for (le in (_.ref !== void 0 && (we = _.ref),
      _.key !== void 0 && (fe = "" + _.key),
      _))
        W.call(_, le) && !se.hasOwnProperty(le) && (de[le] = _[le]);
    var ge = arguments.length - 2;
    if (ge === 1) de.children = oe;
    else if (1 < ge) {
      for (var Re = Array(ge), ft = 0; ft < ge; ft++)
        Re[ft] = arguments[ft + 2];
      de.children = Re;
    }
    if (P && P.defaultProps)
      for (le in ((ge = P.defaultProps), ge))
        de[le] === void 0 && (de[le] = ge[le]);
    return {
      $$typeof: t,
      type: P,
      key: fe,
      ref: we,
      props: de,
      _owner: ie.current,
    };
  }
  function ce(P, _) {
    return {
      $$typeof: t,
      type: P.type,
      key: _,
      ref: P.ref,
      props: P.props,
      _owner: P._owner,
    };
  }
  function J(P) {
    return typeof P == "object" && P !== null && P.$$typeof === t;
  }
  function pe(P) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (oe) {
        return _[oe];
      })
    );
  }
  var ve = /\/+/g;
  function Ne(P, _) {
    return typeof P == "object" && P !== null && P.key != null
      ? pe("" + P.key)
      : _.toString(36);
  }
  function ke(P, _, oe, le, de) {
    var fe = typeof P;
    (fe === "undefined" || fe === "boolean") && (P = null);
    var we = !1;
    if (P === null) we = !0;
    else
      switch (fe) {
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case t:
            case r:
              we = !0;
          }
      }
    if (we)
      return (
        (we = P),
        (de = de(we)),
        (P = le === "" ? "." + Ne(we, 0) : le),
        $(de)
          ? ((oe = ""),
            P != null && (oe = P.replace(ve, "$&/") + "/"),
            ke(de, _, oe, "", function (ft) {
              return ft;
            }))
          : de != null &&
            (J(de) &&
              (de = ce(
                de,
                oe +
                  (!de.key || (we && we.key === de.key)
                    ? ""
                    : ("" + de.key).replace(ve, "$&/") + "/") +
                  P,
              )),
            _.push(de)),
        1
      );
    if (((we = 0), (le = le === "" ? "." : le + ":"), $(P)))
      for (var ge = 0; ge < P.length; ge++) {
        fe = P[ge];
        var Re = le + Ne(fe, ge);
        we += ke(fe, _, oe, Re, de);
      }
    else if (((Re = w(P)), typeof Re == "function"))
      for (P = Re.call(P), ge = 0; !(fe = P.next()).done; )
        ((fe = fe.value),
          (Re = le + Ne(fe, ge++)),
          (we += ke(fe, _, oe, Re, de)));
    else if (fe === "object")
      throw (
        (_ = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(P).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return we;
  }
  function me(P, _, oe) {
    if (P == null) return P;
    var le = [],
      de = 0;
    return (
      ke(P, le, "", "", function (fe) {
        return _.call(oe, fe, de++);
      }),
      le
    );
  }
  function Ce(P) {
    if (P._status === -1) {
      var _ = P._result;
      ((_ = _()),
        _.then(
          function (oe) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = oe));
          },
          function (oe) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = oe));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = _)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var Me = { current: null },
    B = { transition: null },
    X = {
      ReactCurrentDispatcher: Me,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: ie,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ae.Children = {
      map: me,
      forEach: function (P, _, oe) {
        me(
          P,
          function () {
            _.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (P) {
        var _ = 0;
        return (
          me(P, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (P) {
        return (
          me(P, function (_) {
            return _;
          }) || []
        );
      },
      only: function (P) {
        if (!J(P))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return P;
      },
    }),
    (ae.Component = j),
    (ae.Fragment = s),
    (ae.Profiler = l),
    (ae.PureComponent = V),
    (ae.StrictMode = o),
    (ae.Suspense = p),
    (ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (ae.act = H),
    (ae.cloneElement = function (P, _, oe) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            ".",
        );
      var le = N({}, P.props),
        de = P.key,
        fe = P.ref,
        we = P._owner;
      if (_ != null) {
        if (
          (_.ref !== void 0 && ((fe = _.ref), (we = ie.current)),
          _.key !== void 0 && (de = "" + _.key),
          P.type && P.type.defaultProps)
        )
          var ge = P.type.defaultProps;
        for (Re in _)
          W.call(_, Re) &&
            !se.hasOwnProperty(Re) &&
            (le[Re] = _[Re] === void 0 && ge !== void 0 ? ge[Re] : _[Re]);
      }
      var Re = arguments.length - 2;
      if (Re === 1) le.children = oe;
      else if (1 < Re) {
        ge = Array(Re);
        for (var ft = 0; ft < Re; ft++) ge[ft] = arguments[ft + 2];
        le.children = ge;
      }
      return {
        $$typeof: t,
        type: P.type,
        key: de,
        ref: fe,
        props: le,
        _owner: we,
      };
    }),
    (ae.createContext = function (P) {
      return (
        (P = {
          $$typeof: d,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: c, _context: P }),
        (P.Consumer = P)
      );
    }),
    (ae.createElement = ee),
    (ae.createFactory = function (P) {
      var _ = ee.bind(null, P);
      return ((_.type = P), _);
    }),
    (ae.createRef = function () {
      return { current: null };
    }),
    (ae.forwardRef = function (P) {
      return { $$typeof: h, render: P };
    }),
    (ae.isValidElement = J),
    (ae.lazy = function (P) {
      return { $$typeof: y, _payload: { _status: -1, _result: P }, _init: Ce };
    }),
    (ae.memo = function (P, _) {
      return { $$typeof: g, type: P, compare: _ === void 0 ? null : _ };
    }),
    (ae.startTransition = function (P) {
      var _ = B.transition;
      B.transition = {};
      try {
        P();
      } finally {
        B.transition = _;
      }
    }),
    (ae.unstable_act = H),
    (ae.useCallback = function (P, _) {
      return Me.current.useCallback(P, _);
    }),
    (ae.useContext = function (P) {
      return Me.current.useContext(P);
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (P) {
      return Me.current.useDeferredValue(P);
    }),
    (ae.useEffect = function (P, _) {
      return Me.current.useEffect(P, _);
    }),
    (ae.useId = function () {
      return Me.current.useId();
    }),
    (ae.useImperativeHandle = function (P, _, oe) {
      return Me.current.useImperativeHandle(P, _, oe);
    }),
    (ae.useInsertionEffect = function (P, _) {
      return Me.current.useInsertionEffect(P, _);
    }),
    (ae.useLayoutEffect = function (P, _) {
      return Me.current.useLayoutEffect(P, _);
    }),
    (ae.useMemo = function (P, _) {
      return Me.current.useMemo(P, _);
    }),
    (ae.useReducer = function (P, _, oe) {
      return Me.current.useReducer(P, _, oe);
    }),
    (ae.useRef = function (P) {
      return Me.current.useRef(P);
    }),
    (ae.useState = function (P) {
      return Me.current.useState(P);
    }),
    (ae.useSyncExternalStore = function (P, _, oe) {
      return Me.current.useSyncExternalStore(P, _, oe);
    }),
    (ae.useTransition = function () {
      return Me.current.useTransition();
    }),
    (ae.version = "18.3.1"),
    ae
  );
}
var Lh;
function Ju() {
  return (Lh || ((Lh = 1), ($l.exports = V0())), $l.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dh;
function I0() {
  if (Dh) return Mi;
  Dh = 1;
  var t = Ju(),
    r = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, p, g) {
    var y,
      v = {},
      w = null,
      C = null;
    (g !== void 0 && (w = "" + g),
      p.key !== void 0 && (w = "" + p.key),
      p.ref !== void 0 && (C = p.ref));
    for (y in p) o.call(p, y) && !c.hasOwnProperty(y) && (v[y] = p[y]);
    if (h && h.defaultProps)
      for (y in ((p = h.defaultProps), p)) v[y] === void 0 && (v[y] = p[y]);
    return {
      $$typeof: r,
      type: h,
      key: w,
      ref: C,
      props: v,
      _owner: l.current,
    };
  }
  return ((Mi.Fragment = s), (Mi.jsx = d), (Mi.jsxs = d), Mi);
}
var Vh;
function _0() {
  return (Vh || ((Vh = 1), (Ul.exports = I0())), Ul.exports);
}
var m = _0(),
  T = Ju();
const Ln = Uo(T);
var ho = {},
  Wl = { exports: {} },
  dt = {},
  Hl = { exports: {} },
  ql = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih;
function O0() {
  return (
    Ih ||
      ((Ih = 1),
      (function (t) {
        function r(B, X) {
          var H = B.length;
          B.push(X);
          e: for (; 0 < H; ) {
            var P = (H - 1) >>> 1,
              _ = B[P];
            if (0 < l(_, X)) ((B[P] = X), (B[H] = _), (H = P));
            else break e;
          }
        }
        function s(B) {
          return B.length === 0 ? null : B[0];
        }
        function o(B) {
          if (B.length === 0) return null;
          var X = B[0],
            H = B.pop();
          if (H !== X) {
            B[0] = H;
            e: for (var P = 0, _ = B.length, oe = _ >>> 1; P < oe; ) {
              var le = 2 * (P + 1) - 1,
                de = B[le],
                fe = le + 1,
                we = B[fe];
              if (0 > l(de, H))
                fe < _ && 0 > l(we, de)
                  ? ((B[P] = we), (B[fe] = H), (P = fe))
                  : ((B[P] = de), (B[le] = H), (P = le));
              else if (fe < _ && 0 > l(we, H))
                ((B[P] = we), (B[fe] = H), (P = fe));
              else break e;
            }
          }
          return X;
        }
        function l(B, X) {
          var H = B.sortIndex - X.sortIndex;
          return H !== 0 ? H : B.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          t.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          t.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          g = [],
          y = 1,
          v = null,
          w = 3,
          C = !1,
          N = !1,
          M = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(B) {
          for (var X = s(g); X !== null; ) {
            if (X.callback === null) o(g);
            else if (X.startTime <= B)
              (o(g), (X.sortIndex = X.expirationTime), r(p, X));
            else break;
            X = s(g);
          }
        }
        function $(B) {
          if (((M = !1), D(B), !N))
            if (s(p) !== null) ((N = !0), Ce(W));
            else {
              var X = s(g);
              X !== null && Me($, X.startTime - B);
            }
        }
        function W(B, X) {
          ((N = !1), M && ((M = !1), A(ee), (ee = -1)), (C = !0));
          var H = w;
          try {
            for (
              D(X), v = s(p);
              v !== null && (!(v.expirationTime > X) || (B && !pe()));
            ) {
              var P = v.callback;
              if (typeof P == "function") {
                ((v.callback = null), (w = v.priorityLevel));
                var _ = P(v.expirationTime <= X);
                ((X = t.unstable_now()),
                  typeof _ == "function"
                    ? (v.callback = _)
                    : v === s(p) && o(p),
                  D(X));
              } else o(p);
              v = s(p);
            }
            if (v !== null) var oe = !0;
            else {
              var le = s(g);
              (le !== null && Me($, le.startTime - X), (oe = !1));
            }
            return oe;
          } finally {
            ((v = null), (w = H), (C = !1));
          }
        }
        var ie = !1,
          se = null,
          ee = -1,
          ce = 5,
          J = -1;
        function pe() {
          return !(t.unstable_now() - J < ce);
        }
        function ve() {
          if (se !== null) {
            var B = t.unstable_now();
            J = B;
            var X = !0;
            try {
              X = se(!0, B);
            } finally {
              X ? Ne() : ((ie = !1), (se = null));
            }
          } else ie = !1;
        }
        var Ne;
        if (typeof V == "function")
          Ne = function () {
            V(ve);
          };
        else if (typeof MessageChannel < "u") {
          var ke = new MessageChannel(),
            me = ke.port2;
          ((ke.port1.onmessage = ve),
            (Ne = function () {
              me.postMessage(null);
            }));
        } else
          Ne = function () {
            j(ve, 0);
          };
        function Ce(B) {
          ((se = B), ie || ((ie = !0), Ne()));
        }
        function Me(B, X) {
          ee = j(function () {
            B(t.unstable_now());
          }, X);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            N || C || ((N = !0), Ce(W));
          }),
          (t.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ce = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return s(p);
          }),
          (t.unstable_next = function (B) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = w;
            }
            var H = w;
            w = X;
            try {
              return B();
            } finally {
              w = H;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (B, X) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var H = w;
            w = B;
            try {
              return X();
            } finally {
              w = H;
            }
          }),
          (t.unstable_scheduleCallback = function (B, X, H) {
            var P = t.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? P + H : P))
                : (H = P),
              B)
            ) {
              case 1:
                var _ = -1;
                break;
              case 2:
                _ = 250;
                break;
              case 5:
                _ = 1073741823;
                break;
              case 4:
                _ = 1e4;
                break;
              default:
                _ = 5e3;
            }
            return (
              (_ = H + _),
              (B = {
                id: y++,
                callback: X,
                priorityLevel: B,
                startTime: H,
                expirationTime: _,
                sortIndex: -1,
              }),
              H > P
                ? ((B.sortIndex = H),
                  r(g, B),
                  s(p) === null &&
                    B === s(g) &&
                    (M ? (A(ee), (ee = -1)) : (M = !0), Me($, H - P)))
                : ((B.sortIndex = _), r(p, B), N || C || ((N = !0), Ce(W))),
              B
            );
          }),
          (t.unstable_shouldYield = pe),
          (t.unstable_wrapCallback = function (B) {
            var X = w;
            return function () {
              var H = w;
              w = X;
              try {
                return B.apply(this, arguments);
              } finally {
                w = H;
              }
            };
          }));
      })(ql)),
    ql
  );
}
var _h;
function F0() {
  return (_h || ((_h = 1), (Hl.exports = O0())), Hl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oh;
function z0() {
  if (Oh) return dt;
  Oh = 1;
  var t = Ju(),
    r = F0();
  function s(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      n += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    l = {};
  function c(e, n) {
    (d(e, n), d(e + "Capture", n));
  }
  function d(e, n) {
    for (l[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    v = {};
  function w(e) {
    return p.call(v, e)
      ? !0
      : p.call(y, e)
        ? !1
        : g.test(e)
          ? (v[e] = !0)
          : ((y[e] = !0), !1);
  }
  function C(e, n, i, a) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function N(e, n, i, a) {
    if (n === null || typeof n > "u" || C(e, n, i, a)) return !0;
    if (a) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function M(e, n, i, a, u, f, x) {
    ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = f),
      (this.removeEmptyString = x));
  }
  var j = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      j[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      j[n] = new M(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        j[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      j[e] = new M(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        j[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      j[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      j[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      j[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      j[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var A = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(A, V);
      j[n] = new M(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(A, V);
        j[n] = new M(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(A, V);
      j[n] = new M(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      j[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (j.xlinkHref = new M(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      j[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function D(e, n, i, a) {
    var u = j.hasOwnProperty(n) ? j[n] : null;
    (u !== null
      ? u.type !== 0
      : a ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (N(n, i, u, a) && (i = null),
      a || u === null
        ? w(n) &&
          (i === null ? e.removeAttribute(n) : e.setAttribute(n, "" + i))
        : u.mustUseProperty
          ? (e[u.propertyName] = i === null ? (u.type === 3 ? !1 : "") : i)
          : ((n = u.attributeName),
            (a = u.attributeNamespace),
            i === null
              ? e.removeAttribute(n)
              : ((u = u.type),
                (i = u === 3 || (u === 4 && i === !0) ? "" : "" + i),
                a ? e.setAttributeNS(a, n, i) : e.setAttribute(n, i))));
  }
  var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    W = Symbol.for("react.element"),
    ie = Symbol.for("react.portal"),
    se = Symbol.for("react.fragment"),
    ee = Symbol.for("react.strict_mode"),
    ce = Symbol.for("react.profiler"),
    J = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    ve = Symbol.for("react.forward_ref"),
    Ne = Symbol.for("react.suspense"),
    ke = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    Ce = Symbol.for("react.lazy"),
    Me = Symbol.for("react.offscreen"),
    B = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (B && e[B]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Object.assign,
    P;
  function _(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        P = (n && n[1]) || "";
      }
    return (
      `
` +
      P +
      e
    );
  }
  var oe = !1;
  function le(e, n) {
    if (!e || oe) return "";
    oe = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (L) {
            var a = L;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (L) {
            a = L;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          a = L;
        }
        e();
      }
    } catch (L) {
      if (L && a && typeof L.stack == "string") {
        for (
          var u = L.stack.split(`
`),
            f = a.stack.split(`
`),
            x = u.length - 1,
            S = f.length - 1;
          1 <= x && 0 <= S && u[x] !== f[S];
        )
          S--;
        for (; 1 <= x && 0 <= S; x--, S--)
          if (u[x] !== f[S]) {
            if (x !== 1 || S !== 1)
              do
                if ((x--, S--, 0 > S || u[x] !== f[S])) {
                  var k =
                    `
` + u[x].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= x && 0 <= S);
            break;
          }
      }
    } finally {
      ((oe = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : "") ? _(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return _(e.type);
      case 16:
        return _("Lazy");
      case 13:
        return _("Suspense");
      case 19:
        return _("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = le(e.type, !1)), e);
      case 11:
        return ((e = le(e.type.render, !1)), e);
      case 1:
        return ((e = le(e.type, !0)), e);
      default:
        return "";
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case se:
        return "Fragment";
      case ie:
        return "Portal";
      case ce:
        return "Profiler";
      case ee:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return (e.displayName || "Context") + ".Consumer";
        case J:
          return (e._context.displayName || "Context") + ".Provider";
        case ve:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (n = e.displayName || null),
            n !== null ? n : fe(e.type) || "Memo"
          );
        case Ce:
          ((n = e._payload), (e = e._init));
          try {
            return fe(e(n));
          } catch {}
      }
    return null;
  }
  function we(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return fe(n);
      case 8:
        return n === ee ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function ge(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Re(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function ft(e) {
    var n = Re(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      a = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var u = i.get,
        f = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (x) {
            ((a = "" + x), f.call(this, x));
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (x) {
            a = "" + x;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function ns(e) {
    e._valueTracker || (e._valueTracker = ft(e));
  }
  function _c(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      a = "";
    return (
      e && (a = Re(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function rs(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yo(e, n) {
    var i = n.checked;
    return H({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Oc(e, n) {
    var i = n.defaultValue == null ? "" : n.defaultValue,
      a = n.checked != null ? n.checked : n.defaultChecked;
    ((i = ge(n.value != null ? n.value : i)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: i,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      }));
  }
  function Fc(e, n) {
    ((n = n.checked), n != null && D(e, "checked", n, !1));
  }
  function Xo(e, n) {
    Fc(e, n);
    var i = ge(n.value),
      a = n.type;
    if (i != null)
      a === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    (n.hasOwnProperty("value")
      ? Qo(e, n.type, i)
      : n.hasOwnProperty("defaultValue") && Qo(e, n.type, ge(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked));
  }
  function zc(e, n, i) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var a = n.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      ((n = "" + e._wrapperState.initialValue),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i));
  }
  function Qo(e, n, i) {
    (n !== "number" || rs(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var qr = Array.isArray;
  function sr(e, n, i, a) {
    if (((e = e.options), n)) {
      n = {};
      for (var u = 0; u < i.length; u++) n["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        ((u = n.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && a && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + ge(i), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          ((e[u].selected = !0), a && (e[u].defaultSelected = !0));
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Zo(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(s(91));
    return H({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Bc(e, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(s(92));
        if (qr(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (i = n));
    }
    e._wrapperState = { initialValue: ge(i) };
  }
  function Uc(e, n) {
    var i = ge(n.value),
      a = ge(n.defaultValue);
    (i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      a != null && (e.defaultValue = "" + a));
  }
  function $c(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Wc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Jo(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Wc(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var is,
    Hc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, i, a, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, i, a, u);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          is = is || document.createElement("div"),
            is.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = is.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Kr(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Gr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    _y = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gr).forEach(function (e) {
    _y.forEach(function (n) {
      ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[n] = Gr[e]));
    });
  });
  function qc(e, n, i) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : i || typeof n != "number" || n === 0 || (Gr.hasOwnProperty(e) && Gr[e])
        ? ("" + n).trim()
        : n + "px";
  }
  function Kc(e, n) {
    e = e.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var a = i.indexOf("--") === 0,
          u = qc(i, n[i], a);
        (i === "float" && (i = "cssFloat"),
          a ? e.setProperty(i, u) : (e[i] = u));
      }
  }
  var Oy = H(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function ea(e, n) {
    if (n) {
      if (Oy[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(s(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(s(62));
    }
  }
  function ta(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var na = null;
  function ra(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ia = null,
    or = null,
    ar = null;
  function Gc(e) {
    if ((e = gi(e))) {
      if (typeof ia != "function") throw Error(s(280));
      var n = e.stateNode;
      n && ((n = js(n)), ia(e.stateNode, e.type, n));
    }
  }
  function Yc(e) {
    or ? (ar ? ar.push(e) : (ar = [e])) : (or = e);
  }
  function Xc() {
    if (or) {
      var e = or,
        n = ar;
      if (((ar = or = null), Gc(e), n)) for (e = 0; e < n.length; e++) Gc(n[e]);
    }
  }
  function Qc(e, n) {
    return e(n);
  }
  function Zc() {}
  var sa = !1;
  function Jc(e, n, i) {
    if (sa) return e(n, i);
    sa = !0;
    try {
      return Qc(e, n, i);
    } finally {
      ((sa = !1), (or !== null || ar !== null) && (Zc(), Xc()));
    }
  }
  function Yr(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var a = js(i);
    if (a === null) return null;
    i = a[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(s(231, n, typeof i));
    return i;
  }
  var oa = !1;
  if (h)
    try {
      var Xr = {};
      (Object.defineProperty(Xr, "passive", {
        get: function () {
          oa = !0;
        },
      }),
        window.addEventListener("test", Xr, Xr),
        window.removeEventListener("test", Xr, Xr));
    } catch {
      oa = !1;
    }
  function Fy(e, n, i, a, u, f, x, S, k) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, L);
    } catch (F) {
      this.onError(F);
    }
  }
  var Qr = !1,
    ss = null,
    os = !1,
    aa = null,
    zy = {
      onError: function (e) {
        ((Qr = !0), (ss = e));
      },
    };
  function By(e, n, i, a, u, f, x, S, k) {
    ((Qr = !1), (ss = null), Fy.apply(zy, arguments));
  }
  function Uy(e, n, i, a, u, f, x, S, k) {
    if ((By.apply(this, arguments), Qr)) {
      if (Qr) {
        var L = ss;
        ((Qr = !1), (ss = null));
      } else throw Error(s(198));
      os || ((os = !0), (aa = L));
    }
  }
  function Fn(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (i = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function ed(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function td(e) {
    if (Fn(e) !== e) throw Error(s(188));
  }
  function $y(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Fn(e)), n === null)) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var i = e, a = n; ; ) {
      var u = i.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((a = u.return), a !== null)) {
          i = a;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === i) return (td(u), e);
          if (f === a) return (td(u), n);
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== a.return) ((i = u), (a = f));
      else {
        for (var x = !1, S = u.child; S; ) {
          if (S === i) {
            ((x = !0), (i = u), (a = f));
            break;
          }
          if (S === a) {
            ((x = !0), (a = u), (i = f));
            break;
          }
          S = S.sibling;
        }
        if (!x) {
          for (S = f.child; S; ) {
            if (S === i) {
              ((x = !0), (i = f), (a = u));
              break;
            }
            if (S === a) {
              ((x = !0), (a = f), (i = u));
              break;
            }
            S = S.sibling;
          }
          if (!x) throw Error(s(189));
        }
      }
      if (i.alternate !== a) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : n;
  }
  function nd(e) {
    return ((e = $y(e)), e !== null ? rd(e) : null);
  }
  function rd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = rd(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var id = r.unstable_scheduleCallback,
    sd = r.unstable_cancelCallback,
    Wy = r.unstable_shouldYield,
    Hy = r.unstable_requestPaint,
    _e = r.unstable_now,
    qy = r.unstable_getCurrentPriorityLevel,
    la = r.unstable_ImmediatePriority,
    od = r.unstable_UserBlockingPriority,
    as = r.unstable_NormalPriority,
    Ky = r.unstable_LowPriority,
    ad = r.unstable_IdlePriority,
    ls = null,
    Bt = null;
  function Gy(e) {
    if (Bt && typeof Bt.onCommitFiberRoot == "function")
      try {
        Bt.onCommitFiberRoot(ls, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : Qy,
    Yy = Math.log,
    Xy = Math.LN2;
  function Qy(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Yy(e) / Xy) | 0)) | 0);
  }
  var us = 64,
    cs = 4194304;
  function Zr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ds(e, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      x = i & 268435455;
    if (x !== 0) {
      var S = x & ~u;
      S !== 0 ? (a = Zr(S)) : ((f &= x), f !== 0 && (a = Zr(f)));
    } else ((x = i & ~u), x !== 0 ? (a = Zr(x)) : f !== 0 && (a = Zr(f)));
    if (a === 0) return 0;
    if (
      n !== 0 &&
      n !== a &&
      (n & u) === 0 &&
      ((u = a & -a), (f = n & -n), u >= f || (u === 16 && (f & 4194240) !== 0))
    )
      return n;
    if (((a & 4) !== 0 && (a |= i & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= a; 0 < n; )
        ((i = 31 - Nt(n)), (u = 1 << i), (a |= e[i]), (n &= ~u));
    return a;
  }
  function Zy(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Jy(e, n) {
    for (
      var i = e.suspendedLanes,
        a = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes;
      0 < f;
    ) {
      var x = 31 - Nt(f),
        S = 1 << x,
        k = u[x];
      (k === -1
        ? ((S & i) === 0 || (S & a) !== 0) && (u[x] = Zy(S, n))
        : k <= n && (e.expiredLanes |= S),
        (f &= ~S));
    }
  }
  function ua(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ld() {
    var e = us;
    return ((us <<= 1), (us & 4194240) === 0 && (us = 64), e);
  }
  function ca(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Jr(e, n, i) {
    ((e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - Nt(n)),
      (e[n] = i));
  }
  function ev(e, n) {
    var i = e.pendingLanes & ~n;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements));
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - Nt(i),
        f = 1 << u;
      ((n[u] = 0), (a[u] = -1), (e[u] = -1), (i &= ~f));
    }
  }
  function da(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var a = 31 - Nt(i),
        u = 1 << a;
      ((u & n) | (e[a] & n) && (e[a] |= n), (i &= ~u));
    }
  }
  var ye = 0;
  function ud(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var cd,
    fa,
    dd,
    fd,
    hd,
    ha = !1,
    fs = [],
    fn = null,
    hn = null,
    pn = null,
    ei = new Map(),
    ti = new Map(),
    mn = [],
    tv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function pd(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        ei.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ti.delete(n.pointerId);
    }
  }
  function ni(e, n, i, a, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: a,
          nativeEvent: f,
          targetContainers: [u],
        }),
        n !== null && ((n = gi(n)), n !== null && fa(n)),
        e)
      : ((e.eventSystemFlags |= a),
        (n = e.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        e);
  }
  function nv(e, n, i, a, u) {
    switch (n) {
      case "focusin":
        return ((fn = ni(fn, e, n, i, a, u)), !0);
      case "dragenter":
        return ((hn = ni(hn, e, n, i, a, u)), !0);
      case "mouseover":
        return ((pn = ni(pn, e, n, i, a, u)), !0);
      case "pointerover":
        var f = u.pointerId;
        return (ei.set(f, ni(ei.get(f) || null, e, n, i, a, u)), !0);
      case "gotpointercapture":
        return (
          (f = u.pointerId),
          ti.set(f, ni(ti.get(f) || null, e, n, i, a, u)),
          !0
        );
    }
    return !1;
  }
  function md(e) {
    var n = zn(e.target);
    if (n !== null) {
      var i = Fn(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = ed(i)), n !== null)) {
            ((e.blockedOn = n),
              hd(e.priority, function () {
                dd(i);
              }));
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function hs(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = ma(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var a = new i.constructor(i.type, i);
        ((na = a), i.target.dispatchEvent(a), (na = null));
      } else return ((n = gi(i)), n !== null && fa(n), (e.blockedOn = i), !1);
      n.shift();
    }
    return !0;
  }
  function gd(e, n, i) {
    hs(e) && i.delete(n);
  }
  function rv() {
    ((ha = !1),
      fn !== null && hs(fn) && (fn = null),
      hn !== null && hs(hn) && (hn = null),
      pn !== null && hs(pn) && (pn = null),
      ei.forEach(gd),
      ti.forEach(gd));
  }
  function ri(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      ha ||
        ((ha = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, rv)));
  }
  function ii(e) {
    function n(u) {
      return ri(u, e);
    }
    if (0 < fs.length) {
      ri(fs[0], e);
      for (var i = 1; i < fs.length; i++) {
        var a = fs[i];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      fn !== null && ri(fn, e),
        hn !== null && ri(hn, e),
        pn !== null && ri(pn, e),
        ei.forEach(n),
        ti.forEach(n),
        i = 0;
      i < mn.length;
      i++
    )
      ((a = mn[i]), a.blockedOn === e && (a.blockedOn = null));
    for (; 0 < mn.length && ((i = mn[0]), i.blockedOn === null); )
      (md(i), i.blockedOn === null && mn.shift());
  }
  var lr = $.ReactCurrentBatchConfig,
    ps = !0;
  function iv(e, n, i, a) {
    var u = ye,
      f = lr.transition;
    lr.transition = null;
    try {
      ((ye = 1), pa(e, n, i, a));
    } finally {
      ((ye = u), (lr.transition = f));
    }
  }
  function sv(e, n, i, a) {
    var u = ye,
      f = lr.transition;
    lr.transition = null;
    try {
      ((ye = 4), pa(e, n, i, a));
    } finally {
      ((ye = u), (lr.transition = f));
    }
  }
  function pa(e, n, i, a) {
    if (ps) {
      var u = ma(e, n, i, a);
      if (u === null) (Aa(e, n, a, ms, i), pd(e, a));
      else if (nv(u, e, n, i, a)) a.stopPropagation();
      else if ((pd(e, a), n & 4 && -1 < tv.indexOf(e))) {
        for (; u !== null; ) {
          var f = gi(u);
          if (
            (f !== null && cd(f),
            (f = ma(e, n, i, a)),
            f === null && Aa(e, n, a, ms, i),
            f === u)
          )
            break;
          u = f;
        }
        u !== null && a.stopPropagation();
      } else Aa(e, n, a, null, i);
    }
  }
  var ms = null;
  function ma(e, n, i, a) {
    if (((ms = null), (e = ra(a)), (e = zn(e)), e !== null))
      if (((n = Fn(e)), n === null)) e = null;
      else if (((i = n.tag), i === 13)) {
        if (((e = ed(n)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return ((ms = e), null);
  }
  function yd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (qy()) {
          case la:
            return 1;
          case od:
            return 4;
          case as:
          case Ky:
            return 16;
          case ad:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null,
    ga = null,
    gs = null;
  function vd() {
    if (gs) return gs;
    var e,
      n = ga,
      i = n.length,
      a,
      u = "value" in gn ? gn.value : gn.textContent,
      f = u.length;
    for (e = 0; e < i && n[e] === u[e]; e++);
    var x = i - e;
    for (a = 1; a <= x && n[i - a] === u[f - a]; a++);
    return (gs = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ys(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function vs() {
    return !0;
  }
  function xd() {
    return !1;
  }
  function ht(e) {
    function n(i, a, u, f, x) {
      ((this._reactName = i),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = f),
        (this.target = x),
        (this.currentTarget = null));
      for (var S in e)
        e.hasOwnProperty(S) && ((i = e[S]), (this[S] = i ? i(f) : f[S]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? vs
          : xd),
        (this.isPropagationStopped = xd),
        this
      );
    }
    return (
      H(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = vs));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = vs));
        },
        persist: function () {},
        isPersistent: vs,
      }),
      n
    );
  }
  var ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ya = ht(ur),
    si = H({}, ur, { view: 0, detail: 0 }),
    ov = ht(si),
    va,
    xa,
    oi,
    xs = H({}, si, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sa,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== oi &&
              (oi && e.type === "mousemove"
                ? ((va = e.screenX - oi.screenX), (xa = e.screenY - oi.screenY))
                : (xa = va = 0),
              (oi = e)),
            va);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : xa;
      },
    }),
    wd = ht(xs),
    av = H({}, xs, { dataTransfer: 0 }),
    lv = ht(av),
    uv = H({}, si, { relatedTarget: 0 }),
    wa = ht(uv),
    cv = H({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dv = ht(cv),
    fv = H({}, ur, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hv = ht(fv),
    pv = H({}, ur, { data: 0 }),
    Sd = ht(pv),
    mv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    yv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vv(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = yv[e])
        ? !!n[e]
        : !1;
  }
  function Sa() {
    return vv;
  }
  var xv = H({}, si, {
      key: function (e) {
        if (e.key) {
          var n = mv[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? gv[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sa,
      charCode: function (e) {
        return e.type === "keypress" ? ys(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ys(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    wv = ht(xv),
    Sv = H({}, xs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    kd = ht(Sv),
    kv = H({}, si, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sa,
    }),
    Cv = ht(kv),
    Ev = H({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tv = ht(Ev),
    Pv = H({}, xs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jv = ht(Pv),
    Nv = [9, 13, 27, 32],
    ka = h && "CompositionEvent" in window,
    ai = null;
  h && "documentMode" in document && (ai = document.documentMode);
  var Rv = h && "TextEvent" in window && !ai,
    Cd = h && (!ka || (ai && 8 < ai && 11 >= ai)),
    Ed = " ",
    Td = !1;
  function Pd(e, n) {
    switch (e) {
      case "keyup":
        return Nv.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jd(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var cr = !1;
  function bv(e, n) {
    switch (e) {
      case "compositionend":
        return jd(n);
      case "keypress":
        return n.which !== 32 ? null : ((Td = !0), Ed);
      case "textInput":
        return ((e = n.data), e === Ed && Td ? null : e);
      default:
        return null;
    }
  }
  function Mv(e, n) {
    if (cr)
      return e === "compositionend" || (!ka && Pd(e, n))
        ? ((e = vd()), (gs = ga = gn = null), (cr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Cd && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Av = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Nd(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Av[e.type] : n === "textarea";
  }
  function Rd(e, n, i, a) {
    (Yc(a),
      (n = Es(n, "onChange")),
      0 < n.length &&
        ((i = new ya("onChange", "change", null, i, a)),
        e.push({ event: i, listeners: n })));
  }
  var li = null,
    ui = null;
  function Lv(e) {
    Kd(e, 0);
  }
  function ws(e) {
    var n = mr(e);
    if (_c(n)) return e;
  }
  function Dv(e, n) {
    if (e === "change") return n;
  }
  var bd = !1;
  if (h) {
    var Ca;
    if (h) {
      var Ea = "oninput" in document;
      if (!Ea) {
        var Md = document.createElement("div");
        (Md.setAttribute("oninput", "return;"),
          (Ea = typeof Md.oninput == "function"));
      }
      Ca = Ea;
    } else Ca = !1;
    bd = Ca && (!document.documentMode || 9 < document.documentMode);
  }
  function Ad() {
    li && (li.detachEvent("onpropertychange", Ld), (ui = li = null));
  }
  function Ld(e) {
    if (e.propertyName === "value" && ws(ui)) {
      var n = [];
      (Rd(n, ui, e, ra(e)), Jc(Lv, n));
    }
  }
  function Vv(e, n, i) {
    e === "focusin"
      ? (Ad(), (li = n), (ui = i), li.attachEvent("onpropertychange", Ld))
      : e === "focusout" && Ad();
  }
  function Iv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ws(ui);
  }
  function _v(e, n) {
    if (e === "click") return ws(n);
  }
  function Ov(e, n) {
    if (e === "input" || e === "change") return ws(n);
  }
  function Fv(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Rt = typeof Object.is == "function" ? Object.is : Fv;
  function ci(e, n) {
    if (Rt(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var i = Object.keys(e),
      a = Object.keys(n);
    if (i.length !== a.length) return !1;
    for (a = 0; a < i.length; a++) {
      var u = i[a];
      if (!p.call(n, u) || !Rt(e[u], n[u])) return !1;
    }
    return !0;
  }
  function Dd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vd(e, n) {
    var i = Dd(e);
    e = 0;
    for (var a; i; ) {
      if (i.nodeType === 3) {
        if (((a = e + i.textContent.length), e <= n && a >= n))
          return { node: i, offset: n - e };
        e = a;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Dd(i);
    }
  }
  function Id(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Id(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function _d() {
    for (var e = window, n = rs(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = rs(e.document);
    }
    return n;
  }
  function Ta(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function zv(e) {
    var n = _d(),
      i = e.focusedElem,
      a = e.selectionRange;
    if (
      n !== i &&
      i &&
      i.ownerDocument &&
      Id(i.ownerDocument.documentElement, i)
    ) {
      if (a !== null && Ta(i)) {
        if (
          ((n = a.start),
          (e = a.end),
          e === void 0 && (e = n),
          "selectionStart" in i)
        )
          ((i.selectionStart = n),
            (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((n = i.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = i.textContent.length,
            f = Math.min(a.start, u);
          ((a = a.end === void 0 ? f : Math.min(a.end, u)),
            !e.extend && f > a && ((u = a), (a = f), (f = u)),
            (u = Vd(i, f)));
          var x = Vd(i, a);
          u &&
            x &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== x.node ||
              e.focusOffset !== x.offset) &&
            ((n = n.createRange()),
            n.setStart(u.node, u.offset),
            e.removeAllRanges(),
            f > a
              ? (e.addRange(n), e.extend(x.node, x.offset))
              : (n.setEnd(x.node, x.offset), e.addRange(n)));
        }
      }
      for (n = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++)
        ((e = n[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Bv = h && "documentMode" in document && 11 >= document.documentMode,
    dr = null,
    Pa = null,
    di = null,
    ja = !1;
  function Od(e, n, i) {
    var a =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    ja ||
      dr == null ||
      dr !== rs(a) ||
      ((a = dr),
      "selectionStart" in a && Ta(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (di && ci(di, a)) ||
        ((di = a),
        (a = Es(Pa, "onSelect")),
        0 < a.length &&
          ((n = new ya("onSelect", "select", null, n, i)),
          e.push({ event: n, listeners: a }),
          (n.target = dr))));
  }
  function Ss(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + e] = "webkit" + n),
      (i["Moz" + e] = "moz" + n),
      i
    );
  }
  var fr = {
      animationend: Ss("Animation", "AnimationEnd"),
      animationiteration: Ss("Animation", "AnimationIteration"),
      animationstart: Ss("Animation", "AnimationStart"),
      transitionend: Ss("Transition", "TransitionEnd"),
    },
    Na = {},
    Fd = {};
  h &&
    ((Fd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fr.animationend.animation,
      delete fr.animationiteration.animation,
      delete fr.animationstart.animation),
    "TransitionEvent" in window || delete fr.transitionend.transition);
  function ks(e) {
    if (Na[e]) return Na[e];
    if (!fr[e]) return e;
    var n = fr[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Fd) return (Na[e] = n[i]);
    return e;
  }
  var zd = ks("animationend"),
    Bd = ks("animationiteration"),
    Ud = ks("animationstart"),
    $d = ks("transitionend"),
    Wd = new Map(),
    Hd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function yn(e, n) {
    (Wd.set(e, n), c(n, [e]));
  }
  for (var Ra = 0; Ra < Hd.length; Ra++) {
    var ba = Hd[Ra],
      Uv = ba.toLowerCase(),
      $v = ba[0].toUpperCase() + ba.slice(1);
    yn(Uv, "on" + $v);
  }
  (yn(zd, "onAnimationEnd"),
    yn(Bd, "onAnimationIteration"),
    yn(Ud, "onAnimationStart"),
    yn("dblclick", "onDoubleClick"),
    yn("focusin", "onFocus"),
    yn("focusout", "onBlur"),
    yn($d, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var fi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Wv = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(fi),
    );
  function qd(e, n, i) {
    var a = e.type || "unknown-event";
    ((e.currentTarget = i), Uy(a, n, void 0, e), (e.currentTarget = null));
  }
  function Kd(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var a = e[i],
        u = a.event;
      a = a.listeners;
      e: {
        var f = void 0;
        if (n)
          for (var x = a.length - 1; 0 <= x; x--) {
            var S = a[x],
              k = S.instance,
              L = S.currentTarget;
            if (((S = S.listener), k !== f && u.isPropagationStopped()))
              break e;
            (qd(u, S, L), (f = k));
          }
        else
          for (x = 0; x < a.length; x++) {
            if (
              ((S = a[x]),
              (k = S.instance),
              (L = S.currentTarget),
              (S = S.listener),
              k !== f && u.isPropagationStopped())
            )
              break e;
            (qd(u, S, L), (f = k));
          }
      }
    }
    if (os) throw ((e = aa), (os = !1), (aa = null), e);
  }
  function Ee(e, n) {
    var i = n[Oa];
    i === void 0 && (i = n[Oa] = new Set());
    var a = e + "__bubble";
    i.has(a) || (Gd(n, e, 2, !1), i.add(a));
  }
  function Ma(e, n, i) {
    var a = 0;
    (n && (a |= 4), Gd(i, e, a, n));
  }
  var Cs = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(e) {
    if (!e[Cs]) {
      ((e[Cs] = !0),
        o.forEach(function (i) {
          i !== "selectionchange" && (Wv.has(i) || Ma(i, !1, e), Ma(i, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Cs] || ((n[Cs] = !0), Ma("selectionchange", !1, n));
    }
  }
  function Gd(e, n, i, a) {
    switch (yd(n)) {
      case 1:
        var u = iv;
        break;
      case 4:
        u = sv;
        break;
      default:
        u = pa;
    }
    ((i = u.bind(null, n, i, e)),
      (u = void 0),
      !oa ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: u })
          : e.addEventListener(n, i, !0)
        : u !== void 0
          ? e.addEventListener(n, i, { passive: u })
          : e.addEventListener(n, i, !1));
  }
  function Aa(e, n, i, a, u) {
    var f = a;
    if ((n & 1) === 0 && (n & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var x = a.tag;
        if (x === 3 || x === 4) {
          var S = a.stateNode.containerInfo;
          if (S === u || (S.nodeType === 8 && S.parentNode === u)) break;
          if (x === 4)
            for (x = a.return; x !== null; ) {
              var k = x.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = x.stateNode.containerInfo),
                k === u || (k.nodeType === 8 && k.parentNode === u))
              )
                return;
              x = x.return;
            }
          for (; S !== null; ) {
            if (((x = zn(S)), x === null)) return;
            if (((k = x.tag), k === 5 || k === 6)) {
              a = f = x;
              continue e;
            }
            S = S.parentNode;
          }
        }
        a = a.return;
      }
    Jc(function () {
      var L = f,
        F = ra(i),
        z = [];
      e: {
        var O = Wd.get(e);
        if (O !== void 0) {
          var q = ya,
            G = e;
          switch (e) {
            case "keypress":
              if (ys(i) === 0) break e;
            case "keydown":
            case "keyup":
              q = wv;
              break;
            case "focusin":
              ((G = "focus"), (q = wa));
              break;
            case "focusout":
              ((G = "blur"), (q = wa));
              break;
            case "beforeblur":
            case "afterblur":
              q = wa;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = wd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = lv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Cv;
              break;
            case zd:
            case Bd:
            case Ud:
              q = dv;
              break;
            case $d:
              q = Tv;
              break;
            case "scroll":
              q = ov;
              break;
            case "wheel":
              q = jv;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = hv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = kd;
          }
          var Q = (n & 4) !== 0,
            Oe = !Q && e === "scroll",
            R = Q ? (O !== null ? O + "Capture" : null) : O;
          Q = [];
          for (var E = L, b; E !== null; ) {
            b = E;
            var U = b.stateNode;
            if (
              (b.tag === 5 &&
                U !== null &&
                ((b = U),
                R !== null &&
                  ((U = Yr(E, R)), U != null && Q.push(pi(E, U, b)))),
              Oe)
            )
              break;
            E = E.return;
          }
          0 < Q.length &&
            ((O = new q(O, G, null, i, F)), z.push({ event: O, listeners: Q }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            O &&
              i !== na &&
              (G = i.relatedTarget || i.fromElement) &&
              (zn(G) || G[Zt]))
          )
            break e;
          if (
            (q || O) &&
            ((O =
              F.window === F
                ? F
                : (O = F.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            q
              ? ((G = i.relatedTarget || i.toElement),
                (q = L),
                (G = G ? zn(G) : null),
                G !== null &&
                  ((Oe = Fn(G)), G !== Oe || (G.tag !== 5 && G.tag !== 6)) &&
                  (G = null))
              : ((q = null), (G = L)),
            q !== G)
          ) {
            if (
              ((Q = wd),
              (U = "onMouseLeave"),
              (R = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = kd),
                (U = "onPointerLeave"),
                (R = "onPointerEnter"),
                (E = "pointer")),
              (Oe = q == null ? O : mr(q)),
              (b = G == null ? O : mr(G)),
              (O = new Q(U, E + "leave", q, i, F)),
              (O.target = Oe),
              (O.relatedTarget = b),
              (U = null),
              zn(F) === L &&
                ((Q = new Q(R, E + "enter", G, i, F)),
                (Q.target = b),
                (Q.relatedTarget = Oe),
                (U = Q)),
              (Oe = U),
              q && G)
            )
              t: {
                for (Q = q, R = G, E = 0, b = Q; b; b = hr(b)) E++;
                for (b = 0, U = R; U; U = hr(U)) b++;
                for (; 0 < E - b; ) ((Q = hr(Q)), E--);
                for (; 0 < b - E; ) ((R = hr(R)), b--);
                for (; E--; ) {
                  if (Q === R || (R !== null && Q === R.alternate)) break t;
                  ((Q = hr(Q)), (R = hr(R)));
                }
                Q = null;
              }
            else Q = null;
            (q !== null && Yd(z, O, q, Q, !1),
              G !== null && Oe !== null && Yd(z, Oe, G, Q, !0));
          }
        }
        e: {
          if (
            ((O = L ? mr(L) : window),
            (q = O.nodeName && O.nodeName.toLowerCase()),
            q === "select" || (q === "input" && O.type === "file"))
          )
            var Z = Dv;
          else if (Nd(O))
            if (bd) Z = Ov;
            else {
              Z = Iv;
              var te = Vv;
            }
          else
            (q = O.nodeName) &&
              q.toLowerCase() === "input" &&
              (O.type === "checkbox" || O.type === "radio") &&
              (Z = _v);
          if (Z && (Z = Z(e, L))) {
            Rd(z, Z, i, F);
            break e;
          }
          (te && te(e, O, L),
            e === "focusout" &&
              (te = O._wrapperState) &&
              te.controlled &&
              O.type === "number" &&
              Qo(O, "number", O.value));
        }
        switch (((te = L ? mr(L) : window), e)) {
          case "focusin":
            (Nd(te) || te.contentEditable === "true") &&
              ((dr = te), (Pa = L), (di = null));
            break;
          case "focusout":
            di = Pa = dr = null;
            break;
          case "mousedown":
            ja = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ja = !1), Od(z, i, F));
            break;
          case "selectionchange":
            if (Bv) break;
          case "keydown":
          case "keyup":
            Od(z, i, F);
        }
        var ne;
        if (ka)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          cr
            ? Pd(e, i) && (re = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (re = "onCompositionStart");
        (re &&
          (Cd &&
            i.locale !== "ko" &&
            (cr || re !== "onCompositionStart"
              ? re === "onCompositionEnd" && cr && (ne = vd())
              : ((gn = F),
                (ga = "value" in gn ? gn.value : gn.textContent),
                (cr = !0))),
          (te = Es(L, re)),
          0 < te.length &&
            ((re = new Sd(re, e, null, i, F)),
            z.push({ event: re, listeners: te }),
            ne
              ? (re.data = ne)
              : ((ne = jd(i)), ne !== null && (re.data = ne)))),
          (ne = Rv ? bv(e, i) : Mv(e, i)) &&
            ((L = Es(L, "onBeforeInput")),
            0 < L.length &&
              ((F = new Sd("onBeforeInput", "beforeinput", null, i, F)),
              z.push({ event: F, listeners: L }),
              (F.data = ne))));
      }
      Kd(z, n);
    });
  }
  function pi(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function Es(e, n) {
    for (var i = n + "Capture", a = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      (u.tag === 5 &&
        f !== null &&
        ((u = f),
        (f = Yr(e, i)),
        f != null && a.unshift(pi(e, f, u)),
        (f = Yr(e, n)),
        f != null && a.push(pi(e, f, u))),
        (e = e.return));
    }
    return a;
  }
  function hr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yd(e, n, i, a, u) {
    for (var f = n._reactName, x = []; i !== null && i !== a; ) {
      var S = i,
        k = S.alternate,
        L = S.stateNode;
      if (k !== null && k === a) break;
      (S.tag === 5 &&
        L !== null &&
        ((S = L),
        u
          ? ((k = Yr(i, f)), k != null && x.unshift(pi(i, k, S)))
          : u || ((k = Yr(i, f)), k != null && x.push(pi(i, k, S)))),
        (i = i.return));
    }
    x.length !== 0 && e.push({ event: n, listeners: x });
  }
  var Hv = /\r\n?/g,
    qv = /\u0000|\uFFFD/g;
  function Xd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Hv,
        `
`,
      )
      .replace(qv, "");
  }
  function Ts(e, n, i) {
    if (((n = Xd(n)), Xd(e) !== n && i)) throw Error(s(425));
  }
  function Ps() {}
  var La = null,
    Da = null;
  function Va(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ia = typeof setTimeout == "function" ? setTimeout : void 0,
    Kv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qd = typeof Promise == "function" ? Promise : void 0,
    Gv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qd < "u"
          ? function (e) {
              return Qd.resolve(null).then(e).catch(Yv);
            }
          : Ia;
  function Yv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _a(e, n) {
    var i = n,
      a = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$")) {
          if (a === 0) {
            (e.removeChild(u), ii(n));
            return;
          }
          a--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || a++;
      i = u;
    } while (i);
    ii(n);
  }
  function vn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Zd(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var pr = Math.random().toString(36).slice(2),
    Ut = "__reactFiber$" + pr,
    mi = "__reactProps$" + pr,
    Zt = "__reactContainer$" + pr,
    Oa = "__reactEvents$" + pr,
    Xv = "__reactListeners$" + pr,
    Qv = "__reactHandles$" + pr;
  function zn(e) {
    var n = e[Ut];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[Zt] || i[Ut])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = Zd(e); e !== null; ) {
            if ((i = e[Ut])) return i;
            e = Zd(e);
          }
        return n;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function gi(e) {
    return (
      (e = e[Ut] || e[Zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function mr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function js(e) {
    return e[mi] || null;
  }
  var Fa = [],
    gr = -1;
  function xn(e) {
    return { current: e };
  }
  function Te(e) {
    0 > gr || ((e.current = Fa[gr]), (Fa[gr] = null), gr--);
  }
  function Se(e, n) {
    (gr++, (Fa[gr] = e.current), (e.current = n));
  }
  var wn = {},
    Ze = xn(wn),
    ot = xn(!1),
    Bn = wn;
  function yr(e, n) {
    var i = e.type.contextTypes;
    if (!i) return wn;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === n)
      return a.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      f;
    for (f in i) u[f] = n[f];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function at(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Ns() {
    (Te(ot), Te(Ze));
  }
  function Jd(e, n, i) {
    if (Ze.current !== wn) throw Error(s(168));
    (Se(Ze, n), Se(ot, i));
  }
  function ef(e, n, i) {
    var a = e.stateNode;
    if (((n = n.childContextTypes), typeof a.getChildContext != "function"))
      return i;
    a = a.getChildContext();
    for (var u in a) if (!(u in n)) throw Error(s(108, we(e) || "Unknown", u));
    return H({}, i, a);
  }
  function Rs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        wn),
      (Bn = Ze.current),
      Se(Ze, e),
      Se(ot, ot.current),
      !0
    );
  }
  function tf(e, n, i) {
    var a = e.stateNode;
    if (!a) throw Error(s(169));
    (i
      ? ((e = ef(e, n, Bn)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        Te(ot),
        Te(Ze),
        Se(Ze, e))
      : Te(ot),
      Se(ot, i));
  }
  var Jt = null,
    bs = !1,
    za = !1;
  function nf(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  function Zv(e) {
    ((bs = !0), nf(e));
  }
  function Sn() {
    if (!za && Jt !== null) {
      za = !0;
      var e = 0,
        n = ye;
      try {
        var i = Jt;
        for (ye = 1; e < i.length; e++) {
          var a = i[e];
          do a = a(!0);
          while (a !== null);
        }
        ((Jt = null), (bs = !1));
      } catch (u) {
        throw (Jt !== null && (Jt = Jt.slice(e + 1)), id(la, Sn), u);
      } finally {
        ((ye = n), (za = !1));
      }
    }
    return null;
  }
  var vr = [],
    xr = 0,
    Ms = null,
    As = 0,
    vt = [],
    xt = 0,
    Un = null,
    en = 1,
    tn = "";
  function $n(e, n) {
    ((vr[xr++] = As), (vr[xr++] = Ms), (Ms = e), (As = n));
  }
  function rf(e, n, i) {
    ((vt[xt++] = en), (vt[xt++] = tn), (vt[xt++] = Un), (Un = e));
    var a = en;
    e = tn;
    var u = 32 - Nt(a) - 1;
    ((a &= ~(1 << u)), (i += 1));
    var f = 32 - Nt(n) + u;
    if (30 < f) {
      var x = u - (u % 5);
      ((f = (a & ((1 << x) - 1)).toString(32)),
        (a >>= x),
        (u -= x),
        (en = (1 << (32 - Nt(n) + u)) | (i << u) | a),
        (tn = f + e));
    } else ((en = (1 << f) | (i << u) | a), (tn = e));
  }
  function Ba(e) {
    e.return !== null && ($n(e, 1), rf(e, 1, 0));
  }
  function Ua(e) {
    for (; e === Ms; )
      ((Ms = vr[--xr]), (vr[xr] = null), (As = vr[--xr]), (vr[xr] = null));
    for (; e === Un; )
      ((Un = vt[--xt]),
        (vt[xt] = null),
        (tn = vt[--xt]),
        (vt[xt] = null),
        (en = vt[--xt]),
        (vt[xt] = null));
  }
  var pt = null,
    mt = null,
    be = !1,
    bt = null;
  function sf(e, n) {
    var i = Ct(5, null, null, 0);
    ((i.elementType = "DELETED"),
      (i.stateNode = n),
      (i.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [i]), (e.flags |= 16)) : n.push(i));
  }
  function of(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (n =
            n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (pt = e), (mt = vn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (pt = e), (mt = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = Un !== null ? { id: en, overflow: tn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = Ct(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = e),
              (e.child = i),
              (pt = e),
              (mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function $a(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Wa(e) {
    if (be) {
      var n = mt;
      if (n) {
        var i = n;
        if (!of(e, n)) {
          if ($a(e)) throw Error(s(418));
          n = vn(i.nextSibling);
          var a = pt;
          n && of(e, n)
            ? sf(a, i)
            : ((e.flags = (e.flags & -4097) | 2), (be = !1), (pt = e));
        }
      } else {
        if ($a(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (be = !1), (pt = e));
      }
    }
  }
  function af(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    pt = e;
  }
  function Ls(e) {
    if (e !== pt) return !1;
    if (!be) return (af(e), (be = !0), !1);
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !Va(e.type, e.memoizedProps))),
      n && (n = mt))
    ) {
      if ($a(e)) throw (lf(), Error(s(418)));
      for (; n; ) (sf(e, n), (n = vn(n.nextSibling)));
    }
    if ((af(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (n === 0) {
                mt = vn(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = pt ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function lf() {
    for (var e = mt; e; ) e = vn(e.nextSibling);
  }
  function wr() {
    ((mt = pt = null), (be = !1));
  }
  function Ha(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  var Jv = $.ReactCurrentBatchConfig;
  function yi(e, n, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(s(309));
          var a = i.stateNode;
        }
        if (!a) throw Error(s(147, e));
        var u = a,
          f = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === f
          ? n.ref
          : ((n = function (x) {
              var S = u.refs;
              x === null ? delete S[f] : (S[f] = x);
            }),
            (n._stringRef = f),
            n);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!i._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Ds(e, n) {
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function uf(e) {
    var n = e._init;
    return n(e._payload);
  }
  function cf(e) {
    function n(R, E) {
      if (e) {
        var b = R.deletions;
        b === null ? ((R.deletions = [E]), (R.flags |= 16)) : b.push(E);
      }
    }
    function i(R, E) {
      if (!e) return null;
      for (; E !== null; ) (n(R, E), (E = E.sibling));
      return null;
    }
    function a(R, E) {
      for (R = new Map(); E !== null; )
        (E.key !== null ? R.set(E.key, E) : R.set(E.index, E), (E = E.sibling));
      return R;
    }
    function u(R, E) {
      return ((R = Rn(R, E)), (R.index = 0), (R.sibling = null), R);
    }
    function f(R, E, b) {
      return (
        (R.index = b),
        e
          ? ((b = R.alternate),
            b !== null
              ? ((b = b.index), b < E ? ((R.flags |= 2), E) : b)
              : ((R.flags |= 2), E))
          : ((R.flags |= 1048576), E)
      );
    }
    function x(R) {
      return (e && R.alternate === null && (R.flags |= 2), R);
    }
    function S(R, E, b, U) {
      return E === null || E.tag !== 6
        ? ((E = Il(b, R.mode, U)), (E.return = R), E)
        : ((E = u(E, b)), (E.return = R), E);
    }
    function k(R, E, b, U) {
      var Z = b.type;
      return Z === se
        ? F(R, E, b.props.children, U, b.key)
        : E !== null &&
            (E.elementType === Z ||
              (typeof Z == "object" &&
                Z !== null &&
                Z.$$typeof === Ce &&
                uf(Z) === E.type))
          ? ((U = u(E, b.props)), (U.ref = yi(R, E, b)), (U.return = R), U)
          : ((U = io(b.type, b.key, b.props, null, R.mode, U)),
            (U.ref = yi(R, E, b)),
            (U.return = R),
            U);
    }
    function L(R, E, b, U) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== b.containerInfo ||
        E.stateNode.implementation !== b.implementation
        ? ((E = _l(b, R.mode, U)), (E.return = R), E)
        : ((E = u(E, b.children || [])), (E.return = R), E);
    }
    function F(R, E, b, U, Z) {
      return E === null || E.tag !== 7
        ? ((E = Qn(b, R.mode, U, Z)), (E.return = R), E)
        : ((E = u(E, b)), (E.return = R), E);
    }
    function z(R, E, b) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return ((E = Il("" + E, R.mode, b)), (E.return = R), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case W:
            return (
              (b = io(E.type, E.key, E.props, null, R.mode, b)),
              (b.ref = yi(R, null, E)),
              (b.return = R),
              b
            );
          case ie:
            return ((E = _l(E, R.mode, b)), (E.return = R), E);
          case Ce:
            var U = E._init;
            return z(R, U(E._payload), b);
        }
        if (qr(E) || X(E))
          return ((E = Qn(E, R.mode, b, null)), (E.return = R), E);
        Ds(R, E);
      }
      return null;
    }
    function O(R, E, b, U) {
      var Z = E !== null ? E.key : null;
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return Z !== null ? null : S(R, E, "" + b, U);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case W:
            return b.key === Z ? k(R, E, b, U) : null;
          case ie:
            return b.key === Z ? L(R, E, b, U) : null;
          case Ce:
            return ((Z = b._init), O(R, E, Z(b._payload), U));
        }
        if (qr(b) || X(b)) return Z !== null ? null : F(R, E, b, U, null);
        Ds(R, b);
      }
      return null;
    }
    function q(R, E, b, U, Z) {
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return ((R = R.get(b) || null), S(E, R, "" + U, Z));
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case W:
            return (
              (R = R.get(U.key === null ? b : U.key) || null),
              k(E, R, U, Z)
            );
          case ie:
            return (
              (R = R.get(U.key === null ? b : U.key) || null),
              L(E, R, U, Z)
            );
          case Ce:
            var te = U._init;
            return q(R, E, b, te(U._payload), Z);
        }
        if (qr(U) || X(U)) return ((R = R.get(b) || null), F(E, R, U, Z, null));
        Ds(E, U);
      }
      return null;
    }
    function G(R, E, b, U) {
      for (
        var Z = null, te = null, ne = E, re = (E = 0), qe = null;
        ne !== null && re < b.length;
        re++
      ) {
        ne.index > re ? ((qe = ne), (ne = null)) : (qe = ne.sibling);
        var he = O(R, ne, b[re], U);
        if (he === null) {
          ne === null && (ne = qe);
          break;
        }
        (e && ne && he.alternate === null && n(R, ne),
          (E = f(he, E, re)),
          te === null ? (Z = he) : (te.sibling = he),
          (te = he),
          (ne = qe));
      }
      if (re === b.length) return (i(R, ne), be && $n(R, re), Z);
      if (ne === null) {
        for (; re < b.length; re++)
          ((ne = z(R, b[re], U)),
            ne !== null &&
              ((E = f(ne, E, re)),
              te === null ? (Z = ne) : (te.sibling = ne),
              (te = ne)));
        return (be && $n(R, re), Z);
      }
      for (ne = a(R, ne); re < b.length; re++)
        ((qe = q(ne, R, re, b[re], U)),
          qe !== null &&
            (e &&
              qe.alternate !== null &&
              ne.delete(qe.key === null ? re : qe.key),
            (E = f(qe, E, re)),
            te === null ? (Z = qe) : (te.sibling = qe),
            (te = qe)));
      return (
        e &&
          ne.forEach(function (bn) {
            return n(R, bn);
          }),
        be && $n(R, re),
        Z
      );
    }
    function Q(R, E, b, U) {
      var Z = X(b);
      if (typeof Z != "function") throw Error(s(150));
      if (((b = Z.call(b)), b == null)) throw Error(s(151));
      for (
        var te = (Z = null), ne = E, re = (E = 0), qe = null, he = b.next();
        ne !== null && !he.done;
        re++, he = b.next()
      ) {
        ne.index > re ? ((qe = ne), (ne = null)) : (qe = ne.sibling);
        var bn = O(R, ne, he.value, U);
        if (bn === null) {
          ne === null && (ne = qe);
          break;
        }
        (e && ne && bn.alternate === null && n(R, ne),
          (E = f(bn, E, re)),
          te === null ? (Z = bn) : (te.sibling = bn),
          (te = bn),
          (ne = qe));
      }
      if (he.done) return (i(R, ne), be && $n(R, re), Z);
      if (ne === null) {
        for (; !he.done; re++, he = b.next())
          ((he = z(R, he.value, U)),
            he !== null &&
              ((E = f(he, E, re)),
              te === null ? (Z = he) : (te.sibling = he),
              (te = he)));
        return (be && $n(R, re), Z);
      }
      for (ne = a(R, ne); !he.done; re++, he = b.next())
        ((he = q(ne, R, re, he.value, U)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              ne.delete(he.key === null ? re : he.key),
            (E = f(he, E, re)),
            te === null ? (Z = he) : (te.sibling = he),
            (te = he)));
      return (
        e &&
          ne.forEach(function (A0) {
            return n(R, A0);
          }),
        be && $n(R, re),
        Z
      );
    }
    function Oe(R, E, b, U) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === se &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case W:
            e: {
              for (var Z = b.key, te = E; te !== null; ) {
                if (te.key === Z) {
                  if (((Z = b.type), Z === se)) {
                    if (te.tag === 7) {
                      (i(R, te.sibling),
                        (E = u(te, b.props.children)),
                        (E.return = R),
                        (R = E));
                      break e;
                    }
                  } else if (
                    te.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === Ce &&
                      uf(Z) === te.type)
                  ) {
                    (i(R, te.sibling),
                      (E = u(te, b.props)),
                      (E.ref = yi(R, te, b)),
                      (E.return = R),
                      (R = E));
                    break e;
                  }
                  i(R, te);
                  break;
                } else n(R, te);
                te = te.sibling;
              }
              b.type === se
                ? ((E = Qn(b.props.children, R.mode, U, b.key)),
                  (E.return = R),
                  (R = E))
                : ((U = io(b.type, b.key, b.props, null, R.mode, U)),
                  (U.ref = yi(R, E, b)),
                  (U.return = R),
                  (R = U));
            }
            return x(R);
          case ie:
            e: {
              for (te = b.key; E !== null; ) {
                if (E.key === te)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === b.containerInfo &&
                    E.stateNode.implementation === b.implementation
                  ) {
                    (i(R, E.sibling),
                      (E = u(E, b.children || [])),
                      (E.return = R),
                      (R = E));
                    break e;
                  } else {
                    i(R, E);
                    break;
                  }
                else n(R, E);
                E = E.sibling;
              }
              ((E = _l(b, R.mode, U)), (E.return = R), (R = E));
            }
            return x(R);
          case Ce:
            return ((te = b._init), Oe(R, E, te(b._payload), U));
        }
        if (qr(b)) return G(R, E, b, U);
        if (X(b)) return Q(R, E, b, U);
        Ds(R, b);
      }
      return (typeof b == "string" && b !== "") || typeof b == "number"
        ? ((b = "" + b),
          E !== null && E.tag === 6
            ? (i(R, E.sibling), (E = u(E, b)), (E.return = R), (R = E))
            : (i(R, E), (E = Il(b, R.mode, U)), (E.return = R), (R = E)),
          x(R))
        : i(R, E);
    }
    return Oe;
  }
  var Sr = cf(!0),
    df = cf(!1),
    Vs = xn(null),
    Is = null,
    kr = null,
    qa = null;
  function Ka() {
    qa = kr = Is = null;
  }
  function Ga(e) {
    var n = Vs.current;
    (Te(Vs), (e._currentValue = n));
  }
  function Ya(e, n, i) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), a !== null && (a.childLanes |= n))
          : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Cr(e, n) {
    ((Is = e),
      (qa = kr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & n) !== 0 && (lt = !0), (e.firstContext = null)));
  }
  function wt(e) {
    var n = e._currentValue;
    if (qa !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), kr === null)) {
        if (Is === null) throw Error(s(308));
        ((kr = e), (Is.dependencies = { lanes: 0, firstContext: e }));
      } else kr = kr.next = e;
    return n;
  }
  var Wn = null;
  function Xa(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  function ff(e, n, i, a) {
    var u = n.interleaved;
    return (
      u === null ? ((i.next = i), Xa(n)) : ((i.next = u.next), (u.next = i)),
      (n.interleaved = i),
      nn(e, a)
    );
  }
  function nn(e, n) {
    e.lanes |= n;
    var i = e.alternate;
    for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null; )
      ((e.childLanes |= n),
        (i = e.alternate),
        i !== null && (i.childLanes |= n),
        (i = e),
        (e = e.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var kn = !1;
  function Qa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function hf(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function rn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Cn(e, n, i) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ue & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (a.pending = n),
        nn(e, i)
      );
    }
    return (
      (u = a.interleaved),
      u === null ? ((n.next = n), Xa(a)) : ((n.next = u.next), (u.next = n)),
      (a.interleaved = n),
      nn(e, i)
    );
  }
  function _s(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))
    ) {
      var a = n.lanes;
      ((a &= e.pendingLanes), (i |= a), (n.lanes = i), da(e, i));
    }
  }
  function pf(e, n) {
    var i = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), i === a)) {
      var u = null,
        f = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var x = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (f === null ? (u = f = x) : (f = f.next = x), (i = i.next));
        } while (i !== null);
        f === null ? (u = f = n) : (f = f.next = n);
      } else u = f = n;
      ((i = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n));
  }
  function Os(e, n, i, a) {
    var u = e.updateQueue;
    kn = !1;
    var f = u.firstBaseUpdate,
      x = u.lastBaseUpdate,
      S = u.shared.pending;
    if (S !== null) {
      u.shared.pending = null;
      var k = S,
        L = k.next;
      ((k.next = null), x === null ? (f = L) : (x.next = L), (x = k));
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (S = F.lastBaseUpdate),
        S !== x &&
          (S === null ? (F.firstBaseUpdate = L) : (S.next = L),
          (F.lastBaseUpdate = k)));
    }
    if (f !== null) {
      var z = u.baseState;
      ((x = 0), (F = L = k = null), (S = f));
      do {
        var O = S.lane,
          q = S.eventTime;
        if ((a & O) === O) {
          F !== null &&
            (F = F.next =
              {
                eventTime: q,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var G = e,
              Q = S;
            switch (((O = n), (q = i), Q.tag)) {
              case 1:
                if (((G = Q.payload), typeof G == "function")) {
                  z = G.call(q, z, O);
                  break e;
                }
                z = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Q.payload),
                  (O = typeof G == "function" ? G.call(q, z, O) : G),
                  O == null)
                )
                  break e;
                z = H({}, z, O);
                break e;
              case 2:
                kn = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((e.flags |= 64),
            (O = u.effects),
            O === null ? (u.effects = [S]) : O.push(S));
        } else
          ((q = {
            eventTime: q,
            lane: O,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            F === null ? ((L = F = q), (k = z)) : (F = F.next = q),
            (x |= O));
        if (((S = S.next), S === null)) {
          if (((S = u.shared.pending), S === null)) break;
          ((O = S),
            (S = O.next),
            (O.next = null),
            (u.lastBaseUpdate = O),
            (u.shared.pending = null));
        }
      } while (!0);
      if (
        (F === null && (k = z),
        (u.baseState = k),
        (u.firstBaseUpdate = L),
        (u.lastBaseUpdate = F),
        (n = u.shared.interleaved),
        n !== null)
      ) {
        u = n;
        do ((x |= u.lane), (u = u.next));
        while (u !== n);
      } else f === null && (u.shared.lanes = 0);
      ((Kn |= x), (e.lanes = x), (e.memoizedState = z));
    }
  }
  function mf(e, n, i) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var a = e[n],
          u = a.callback;
        if (u !== null) {
          if (((a.callback = null), (a = i), typeof u != "function"))
            throw Error(s(191, u));
          u.call(a);
        }
      }
  }
  var vi = {},
    $t = xn(vi),
    xi = xn(vi),
    wi = xn(vi);
  function Hn(e) {
    if (e === vi) throw Error(s(174));
    return e;
  }
  function Za(e, n) {
    switch ((Se(wi, n), Se(xi, e), Se($t, vi), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Jo(null, "");
        break;
      default:
        ((e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Jo(n, e)));
    }
    (Te($t), Se($t, n));
  }
  function Er() {
    (Te($t), Te(xi), Te(wi));
  }
  function gf(e) {
    Hn(wi.current);
    var n = Hn($t.current),
      i = Jo(n, e.type);
    n !== i && (Se(xi, e), Se($t, i));
  }
  function Ja(e) {
    xi.current === e && (Te($t), Te(xi));
  }
  var Ae = xn(0);
  function Fs(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var el = [];
  function tl() {
    for (var e = 0; e < el.length; e++)
      el[e]._workInProgressVersionPrimary = null;
    el.length = 0;
  }
  var zs = $.ReactCurrentDispatcher,
    nl = $.ReactCurrentBatchConfig,
    qn = 0,
    Le = null,
    Be = null,
    We = null,
    Bs = !1,
    Si = !1,
    ki = 0,
    e0 = 0;
  function Je() {
    throw Error(s(321));
  }
  function rl(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Rt(e[i], n[i])) return !1;
    return !0;
  }
  function il(e, n, i, a, u, f) {
    if (
      ((qn = f),
      (Le = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (zs.current = e === null || e.memoizedState === null ? i0 : s0),
      (e = i(a, u)),
      Si)
    ) {
      f = 0;
      do {
        if (((Si = !1), (ki = 0), 25 <= f)) throw Error(s(301));
        ((f += 1),
          (We = Be = null),
          (n.updateQueue = null),
          (zs.current = o0),
          (e = i(a, u)));
      } while (Si);
    }
    if (
      ((zs.current = Ws),
      (n = Be !== null && Be.next !== null),
      (qn = 0),
      (We = Be = Le = null),
      (Bs = !1),
      n)
    )
      throw Error(s(300));
    return e;
  }
  function sl() {
    var e = ki !== 0;
    return ((ki = 0), e);
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (We === null ? (Le.memoizedState = We = e) : (We = We.next = e), We);
  }
  function St() {
    if (Be === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var n = We === null ? Le.memoizedState : We.next;
    if (n !== null) ((We = n), (Be = e));
    else {
      if (e === null) throw Error(s(310));
      ((Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        We === null ? (Le.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Ci(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function ol(e) {
    var n = St(),
      i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var a = Be,
      u = a.baseQueue,
      f = i.pending;
    if (f !== null) {
      if (u !== null) {
        var x = u.next;
        ((u.next = f.next), (f.next = x));
      }
      ((a.baseQueue = u = f), (i.pending = null));
    }
    if (u !== null) {
      ((f = u.next), (a = a.baseState));
      var S = (x = null),
        k = null,
        L = f;
      do {
        var F = L.lane;
        if ((qn & F) === F)
          (k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null,
              }),
            (a = L.hasEagerState ? L.eagerState : e(a, L.action)));
        else {
          var z = {
            lane: F,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          };
          (k === null ? ((S = k = z), (x = a)) : (k = k.next = z),
            (Le.lanes |= F),
            (Kn |= F));
        }
        L = L.next;
      } while (L !== null && L !== f);
      (k === null ? (x = a) : (k.next = S),
        Rt(a, n.memoizedState) || (lt = !0),
        (n.memoizedState = a),
        (n.baseState = x),
        (n.baseQueue = k),
        (i.lastRenderedState = a));
    }
    if (((e = i.interleaved), e !== null)) {
      u = e;
      do ((f = u.lane), (Le.lanes |= f), (Kn |= f), (u = u.next));
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function al(e) {
    var n = St(),
      i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var a = i.dispatch,
      u = i.pending,
      f = n.memoizedState;
    if (u !== null) {
      i.pending = null;
      var x = (u = u.next);
      do ((f = e(f, x.action)), (x = x.next));
      while (x !== u);
      (Rt(f, n.memoizedState) || (lt = !0),
        (n.memoizedState = f),
        n.baseQueue === null && (n.baseState = f),
        (i.lastRenderedState = f));
    }
    return [f, a];
  }
  function yf() {}
  function vf(e, n) {
    var i = Le,
      a = St(),
      u = n(),
      f = !Rt(a.memoizedState, u);
    if (
      (f && ((a.memoizedState = u), (lt = !0)),
      (a = a.queue),
      ll(Sf.bind(null, i, a, e), [e]),
      a.getSnapshot !== n || f || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ei(9, wf.bind(null, i, a, u, n), void 0, null),
        He === null)
      )
        throw Error(s(349));
      (qn & 30) !== 0 || xf(i, n, u);
    }
    return u;
  }
  function xf(e, n, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = Le.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Le.updateQueue = n),
          (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e)));
  }
  function wf(e, n, i, a) {
    ((n.value = i), (n.getSnapshot = a), kf(n) && Cf(e));
  }
  function Sf(e, n, i) {
    return i(function () {
      kf(n) && Cf(e);
    });
  }
  function kf(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Rt(e, i);
    } catch {
      return !0;
    }
  }
  function Cf(e) {
    var n = nn(e, 1);
    n !== null && Dt(n, e, 1, -1);
  }
  function Ef(e) {
    var n = Wt();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ci,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = r0.bind(null, Le, e)),
      [n.memoizedState, e]
    );
  }
  function Ei(e, n, i, a) {
    return (
      (e = { tag: e, create: n, destroy: i, deps: a, next: null }),
      (n = Le.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Le.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = e.next = e)
            : ((a = i.next), (i.next = e), (e.next = a), (n.lastEffect = e))),
      e
    );
  }
  function Tf() {
    return St().memoizedState;
  }
  function Us(e, n, i, a) {
    var u = Wt();
    ((Le.flags |= e),
      (u.memoizedState = Ei(1 | n, i, void 0, a === void 0 ? null : a)));
  }
  function $s(e, n, i, a) {
    var u = St();
    a = a === void 0 ? null : a;
    var f = void 0;
    if (Be !== null) {
      var x = Be.memoizedState;
      if (((f = x.destroy), a !== null && rl(a, x.deps))) {
        u.memoizedState = Ei(n, i, f, a);
        return;
      }
    }
    ((Le.flags |= e), (u.memoizedState = Ei(1 | n, i, f, a)));
  }
  function Pf(e, n) {
    return Us(8390656, 8, e, n);
  }
  function ll(e, n) {
    return $s(2048, 8, e, n);
  }
  function jf(e, n) {
    return $s(4, 2, e, n);
  }
  function Nf(e, n) {
    return $s(4, 4, e, n);
  }
  function Rf(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function bf(e, n, i) {
    return (
      (i = i != null ? i.concat([e]) : null),
      $s(4, 4, Rf.bind(null, n, e), i)
    );
  }
  function ul() {}
  function Mf(e, n) {
    var i = St();
    n = n === void 0 ? null : n;
    var a = i.memoizedState;
    return a !== null && n !== null && rl(n, a[1])
      ? a[0]
      : ((i.memoizedState = [e, n]), e);
  }
  function Af(e, n) {
    var i = St();
    n = n === void 0 ? null : n;
    var a = i.memoizedState;
    return a !== null && n !== null && rl(n, a[1])
      ? a[0]
      : ((e = e()), (i.memoizedState = [e, n]), e);
  }
  function Lf(e, n, i) {
    return (qn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = i))
      : (Rt(i, n) ||
          ((i = ld()), (Le.lanes |= i), (Kn |= i), (e.baseState = !0)),
        n);
  }
  function t0(e, n) {
    var i = ye;
    ((ye = i !== 0 && 4 > i ? i : 4), e(!0));
    var a = nl.transition;
    nl.transition = {};
    try {
      (e(!1), n());
    } finally {
      ((ye = i), (nl.transition = a));
    }
  }
  function Df() {
    return St().memoizedState;
  }
  function n0(e, n, i) {
    var a = jn(e);
    if (
      ((i = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vf(e))
    )
      If(n, i);
    else if (((i = ff(e, n, i, a)), i !== null)) {
      var u = rt();
      (Dt(i, e, a, u), _f(i, n, a));
    }
  }
  function r0(e, n, i) {
    var a = jn(e),
      u = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Vf(e)) If(n, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = n.lastRenderedReducer), f !== null)
      )
        try {
          var x = n.lastRenderedState,
            S = f(x, i);
          if (((u.hasEagerState = !0), (u.eagerState = S), Rt(S, x))) {
            var k = n.interleaved;
            (k === null
              ? ((u.next = u), Xa(n))
              : ((u.next = k.next), (k.next = u)),
              (n.interleaved = u));
            return;
          }
        } catch {
        } finally {
        }
      ((i = ff(e, n, u, a)),
        i !== null && ((u = rt()), Dt(i, e, a, u), _f(i, n, a)));
    }
  }
  function Vf(e) {
    var n = e.alternate;
    return e === Le || (n !== null && n === Le);
  }
  function If(e, n) {
    Si = Bs = !0;
    var i = e.pending;
    (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n));
  }
  function _f(e, n, i) {
    if ((i & 4194240) !== 0) {
      var a = n.lanes;
      ((a &= e.pendingLanes), (i |= a), (n.lanes = i), da(e, i));
    }
  }
  var Ws = {
      readContext: wt,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    i0 = {
      readContext: wt,
      useCallback: function (e, n) {
        return ((Wt().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: wt,
      useEffect: Pf,
      useImperativeHandle: function (e, n, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          Us(4194308, 4, Rf.bind(null, n, e), i)
        );
      },
      useLayoutEffect: function (e, n) {
        return Us(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return Us(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = Wt();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (i.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, i) {
        var a = Wt();
        return (
          (n = i !== void 0 ? i(n) : n),
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = n0.bind(null, Le, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Wt();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: Ef,
      useDebugValue: ul,
      useDeferredValue: function (e) {
        return (Wt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ef(!1),
          n = e[0];
        return ((e = t0.bind(null, e[1])), (Wt().memoizedState = e), [n, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, i) {
        var a = Le,
          u = Wt();
        if (be) {
          if (i === void 0) throw Error(s(407));
          i = i();
        } else {
          if (((i = n()), He === null)) throw Error(s(349));
          (qn & 30) !== 0 || xf(a, n, i);
        }
        u.memoizedState = i;
        var f = { value: i, getSnapshot: n };
        return (
          (u.queue = f),
          Pf(Sf.bind(null, a, f, e), [e]),
          (a.flags |= 2048),
          Ei(9, wf.bind(null, a, f, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Wt(),
          n = He.identifierPrefix;
        if (be) {
          var i = tn,
            a = en;
          ((i = (a & ~(1 << (32 - Nt(a) - 1))).toString(32) + i),
            (n = ":" + n + "R" + i),
            (i = ki++),
            0 < i && (n += "H" + i.toString(32)),
            (n += ":"));
        } else ((i = e0++), (n = ":" + n + "r" + i.toString(32) + ":"));
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    s0 = {
      readContext: wt,
      useCallback: Mf,
      useContext: wt,
      useEffect: ll,
      useImperativeHandle: bf,
      useInsertionEffect: jf,
      useLayoutEffect: Nf,
      useMemo: Af,
      useReducer: ol,
      useRef: Tf,
      useState: function () {
        return ol(Ci);
      },
      useDebugValue: ul,
      useDeferredValue: function (e) {
        var n = St();
        return Lf(n, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = ol(Ci)[0],
          n = St().memoizedState;
        return [e, n];
      },
      useMutableSource: yf,
      useSyncExternalStore: vf,
      useId: Df,
      unstable_isNewReconciler: !1,
    },
    o0 = {
      readContext: wt,
      useCallback: Mf,
      useContext: wt,
      useEffect: ll,
      useImperativeHandle: bf,
      useInsertionEffect: jf,
      useLayoutEffect: Nf,
      useMemo: Af,
      useReducer: al,
      useRef: Tf,
      useState: function () {
        return al(Ci);
      },
      useDebugValue: ul,
      useDeferredValue: function (e) {
        var n = St();
        return Be === null ? (n.memoizedState = e) : Lf(n, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = al(Ci)[0],
          n = St().memoizedState;
        return [e, n];
      },
      useMutableSource: yf,
      useSyncExternalStore: vf,
      useId: Df,
      unstable_isNewReconciler: !1,
    };
  function Mt(e, n) {
    if (e && e.defaultProps) {
      ((n = H({}, n)), (e = e.defaultProps));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function cl(e, n, i, a) {
    ((n = e.memoizedState),
      (i = i(a, n)),
      (i = i == null ? n : H({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Hs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Fn(e) === e : !1;
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var a = rt(),
        u = jn(e),
        f = rn(a, u);
      ((f.payload = n),
        i != null && (f.callback = i),
        (n = Cn(e, f, u)),
        n !== null && (Dt(n, e, u, a), _s(n, e, u)));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var a = rt(),
        u = jn(e),
        f = rn(a, u);
      ((f.tag = 1),
        (f.payload = n),
        i != null && (f.callback = i),
        (n = Cn(e, f, u)),
        n !== null && (Dt(n, e, u, a), _s(n, e, u)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = rt(),
        a = jn(e),
        u = rn(i, a);
      ((u.tag = 2),
        n != null && (u.callback = n),
        (n = Cn(e, u, a)),
        n !== null && (Dt(n, e, a, i), _s(n, e, a)));
    },
  };
  function Of(e, n, i, a, u, f, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, f, x)
        : n.prototype && n.prototype.isPureReactComponent
          ? !ci(i, a) || !ci(u, f)
          : !0
    );
  }
  function Ff(e, n, i) {
    var a = !1,
      u = wn,
      f = n.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = wt(f))
        : ((u = at(n) ? Bn : Ze.current),
          (a = n.contextTypes),
          (f = (a = a != null) ? yr(e, u) : wn)),
      (n = new n(i, f)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Hs),
      (e.stateNode = n),
      (n._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = f)),
      n
    );
  }
  function zf(e, n, i, a) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(i, a),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(i, a),
      n.state !== e && Hs.enqueueReplaceState(n, n.state, null));
  }
  function dl(e, n, i, a) {
    var u = e.stateNode;
    ((u.props = i), (u.state = e.memoizedState), (u.refs = {}), Qa(e));
    var f = n.contextType;
    (typeof f == "object" && f !== null
      ? (u.context = wt(f))
      : ((f = at(n) ? Bn : Ze.current), (u.context = yr(e, f))),
      (u.state = e.memoizedState),
      (f = n.getDerivedStateFromProps),
      typeof f == "function" && (cl(e, n, f, i), (u.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((n = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        n !== u.state && Hs.enqueueReplaceState(u, u.state, null),
        Os(e, i, u, a),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Tr(e, n) {
    try {
      var i = "",
        a = n;
      do ((i += de(a)), (a = a.return));
      while (a);
      var u = i;
    } catch (f) {
      u =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: e, source: n, stack: u, digest: null };
  }
  function fl(e, n, i) {
    return { value: e, source: null, stack: i ?? null, digest: n ?? null };
  }
  function hl(e, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var a0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Bf(e, n, i) {
    ((i = rn(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var a = n.value;
    return (
      (i.callback = function () {
        (Zs || ((Zs = !0), (Nl = a)), hl(e, n));
      }),
      i
    );
  }
  function Uf(e, n, i) {
    ((i = rn(-1, i)), (i.tag = 3));
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = n.value;
      ((i.payload = function () {
        return a(u);
      }),
        (i.callback = function () {
          hl(e, n);
        }));
    }
    var f = e.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (i.callback = function () {
          (hl(e, n),
            typeof a != "function" &&
              (Tn === null ? (Tn = new Set([this])) : Tn.add(this)));
          var x = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: x !== null ? x : "",
          });
        }),
      i
    );
  }
  function $f(e, n, i) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new a0();
      var u = new Set();
      a.set(n, u);
    } else ((u = a.get(n)), u === void 0 && ((u = new Set()), a.set(n, u)));
    u.has(i) || (u.add(i), (e = S0.bind(null, e, n, i)), n.then(e, e));
  }
  function Wf(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Hf(e, n, i, a, u) {
    return (e.mode & 1) === 0
      ? (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((n = rn(-1, 1)), (n.tag = 2), Cn(i, n, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var l0 = $.ReactCurrentOwner,
    lt = !1;
  function nt(e, n, i, a) {
    n.child = e === null ? df(n, null, i, a) : Sr(n, e.child, i, a);
  }
  function qf(e, n, i, a, u) {
    i = i.render;
    var f = n.ref;
    return (
      Cr(n, u),
      (a = il(e, n, i, a, f, u)),
      (i = sl()),
      e !== null && !lt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~u),
          sn(e, n, u))
        : (be && i && Ba(n), (n.flags |= 1), nt(e, n, a, u), n.child)
    );
  }
  function Kf(e, n, i, a, u) {
    if (e === null) {
      var f = i.type;
      return typeof f == "function" &&
        !Vl(f) &&
        f.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = f), Gf(e, n, f, a, u))
        : ((e = io(i.type, null, a, n, n.mode, u)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((f = e.child), (e.lanes & u) === 0)) {
      var x = f.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : ci), i(x, a) && e.ref === n.ref)
      )
        return sn(e, n, u);
    }
    return (
      (n.flags |= 1),
      (e = Rn(f, a)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Gf(e, n, i, a, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ci(f, a) && e.ref === n.ref)
        if (((lt = !1), (n.pendingProps = a = f), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (lt = !0);
        else return ((n.lanes = e.lanes), sn(e, n, u));
    }
    return pl(e, n, i, a, u);
  }
  function Yf(e, n, i) {
    var a = n.pendingProps,
      u = a.children,
      f = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if ((n.mode & 1) === 0)
        ((n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Se(jr, gt),
          (gt |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = f !== null ? f.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Se(jr, gt),
            (gt |= e),
            null
          );
        ((n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = f !== null ? f.baseLanes : i),
          Se(jr, gt),
          (gt |= a));
      }
    else
      (f !== null ? ((a = f.baseLanes | i), (n.memoizedState = null)) : (a = i),
        Se(jr, gt),
        (gt |= a));
    return (nt(e, n, u, i), n.child);
  }
  function Xf(e, n) {
    var i = n.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function pl(e, n, i, a, u) {
    var f = at(i) ? Bn : Ze.current;
    return (
      (f = yr(n, f)),
      Cr(n, u),
      (i = il(e, n, i, a, f, u)),
      (a = sl()),
      e !== null && !lt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~u),
          sn(e, n, u))
        : (be && a && Ba(n), (n.flags |= 1), nt(e, n, i, u), n.child)
    );
  }
  function Qf(e, n, i, a, u) {
    if (at(i)) {
      var f = !0;
      Rs(n);
    } else f = !1;
    if ((Cr(n, u), n.stateNode === null))
      (Ks(e, n), Ff(n, i, a), dl(n, i, a, u), (a = !0));
    else if (e === null) {
      var x = n.stateNode,
        S = n.memoizedProps;
      x.props = S;
      var k = x.context,
        L = i.contextType;
      typeof L == "object" && L !== null
        ? (L = wt(L))
        : ((L = at(i) ? Bn : Ze.current), (L = yr(n, L)));
      var F = i.getDerivedStateFromProps,
        z =
          typeof F == "function" ||
          typeof x.getSnapshotBeforeUpdate == "function";
      (z ||
        (typeof x.UNSAFE_componentWillReceiveProps != "function" &&
          typeof x.componentWillReceiveProps != "function") ||
        ((S !== a || k !== L) && zf(n, x, a, L)),
        (kn = !1));
      var O = n.memoizedState;
      ((x.state = O),
        Os(n, a, x, u),
        (k = n.memoizedState),
        S !== a || O !== k || ot.current || kn
          ? (typeof F == "function" && (cl(n, i, F, a), (k = n.memoizedState)),
            (S = kn || Of(n, i, S, a, O, k, L))
              ? (z ||
                  (typeof x.UNSAFE_componentWillMount != "function" &&
                    typeof x.componentWillMount != "function") ||
                  (typeof x.componentWillMount == "function" &&
                    x.componentWillMount(),
                  typeof x.UNSAFE_componentWillMount == "function" &&
                    x.UNSAFE_componentWillMount()),
                typeof x.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof x.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = a),
                (n.memoizedState = k)),
            (x.props = a),
            (x.state = k),
            (x.context = L),
            (a = S))
          : (typeof x.componentDidMount == "function" && (n.flags |= 4194308),
            (a = !1)));
    } else {
      ((x = n.stateNode),
        hf(e, n),
        (S = n.memoizedProps),
        (L = n.type === n.elementType ? S : Mt(n.type, S)),
        (x.props = L),
        (z = n.pendingProps),
        (O = x.context),
        (k = i.contextType),
        typeof k == "object" && k !== null
          ? (k = wt(k))
          : ((k = at(i) ? Bn : Ze.current), (k = yr(n, k))));
      var q = i.getDerivedStateFromProps;
      ((F =
        typeof q == "function" ||
        typeof x.getSnapshotBeforeUpdate == "function") ||
        (typeof x.UNSAFE_componentWillReceiveProps != "function" &&
          typeof x.componentWillReceiveProps != "function") ||
        ((S !== z || O !== k) && zf(n, x, a, k)),
        (kn = !1),
        (O = n.memoizedState),
        (x.state = O),
        Os(n, a, x, u));
      var G = n.memoizedState;
      S !== z || O !== G || ot.current || kn
        ? (typeof q == "function" && (cl(n, i, q, a), (G = n.memoizedState)),
          (L = kn || Of(n, i, L, a, O, G, k) || !1)
            ? (F ||
                (typeof x.UNSAFE_componentWillUpdate != "function" &&
                  typeof x.componentWillUpdate != "function") ||
                (typeof x.componentWillUpdate == "function" &&
                  x.componentWillUpdate(a, G, k),
                typeof x.UNSAFE_componentWillUpdate == "function" &&
                  x.UNSAFE_componentWillUpdate(a, G, k)),
              typeof x.componentDidUpdate == "function" && (n.flags |= 4),
              typeof x.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof x.componentDidUpdate != "function" ||
                (S === e.memoizedProps && O === e.memoizedState) ||
                (n.flags |= 4),
              typeof x.getSnapshotBeforeUpdate != "function" ||
                (S === e.memoizedProps && O === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = a),
              (n.memoizedState = G)),
          (x.props = a),
          (x.state = G),
          (x.context = k),
          (a = L))
        : (typeof x.componentDidUpdate != "function" ||
            (S === e.memoizedProps && O === e.memoizedState) ||
            (n.flags |= 4),
          typeof x.getSnapshotBeforeUpdate != "function" ||
            (S === e.memoizedProps && O === e.memoizedState) ||
            (n.flags |= 1024),
          (a = !1));
    }
    return ml(e, n, i, a, f, u);
  }
  function ml(e, n, i, a, u, f) {
    Xf(e, n);
    var x = (n.flags & 128) !== 0;
    if (!a && !x) return (u && tf(n, i, !1), sn(e, n, f));
    ((a = n.stateNode), (l0.current = n));
    var S =
      x && typeof i.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (n.flags |= 1),
      e !== null && x
        ? ((n.child = Sr(n, e.child, null, f)), (n.child = Sr(n, null, S, f)))
        : nt(e, n, S, f),
      (n.memoizedState = a.state),
      u && tf(n, i, !0),
      n.child
    );
  }
  function Zf(e) {
    var n = e.stateNode;
    (n.pendingContext
      ? Jd(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Jd(e, n.context, !1),
      Za(e, n.containerInfo));
  }
  function Jf(e, n, i, a, u) {
    return (wr(), Ha(u), (n.flags |= 256), nt(e, n, i, a), n.child);
  }
  var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function yl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function eh(e, n, i) {
    var a = n.pendingProps,
      u = Ae.current,
      f = !1,
      x = (n.flags & 128) !== 0,
      S;
    if (
      ((S = x) ||
        (S = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      S
        ? ((f = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Se(Ae, u & 1),
      e === null)
    )
      return (
        Wa(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((n.mode & 1) === 0
              ? (n.lanes = 1)
              : e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
            null)
          : ((x = a.children),
            (e = a.fallback),
            f
              ? ((a = n.mode),
                (f = n.child),
                (x = { mode: "hidden", children: x }),
                (a & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = x))
                  : (f = so(x, a, 0, null)),
                (e = Qn(e, a, i, null)),
                (f.return = n),
                (e.return = n),
                (f.sibling = e),
                (n.child = f),
                (n.child.memoizedState = yl(i)),
                (n.memoizedState = gl),
                e)
              : vl(n, x))
      );
    if (((u = e.memoizedState), u !== null && ((S = u.dehydrated), S !== null)))
      return u0(e, n, x, a, S, u, i);
    if (f) {
      ((f = a.fallback), (x = n.mode), (u = e.child), (S = u.sibling));
      var k = { mode: "hidden", children: a.children };
      return (
        (x & 1) === 0 && n.child !== u
          ? ((a = n.child),
            (a.childLanes = 0),
            (a.pendingProps = k),
            (n.deletions = null))
          : ((a = Rn(u, k)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        S !== null ? (f = Rn(S, f)) : ((f = Qn(f, x, i, null)), (f.flags |= 2)),
        (f.return = n),
        (a.return = n),
        (a.sibling = f),
        (n.child = a),
        (a = f),
        (f = n.child),
        (x = e.child.memoizedState),
        (x =
          x === null
            ? yl(i)
            : {
                baseLanes: x.baseLanes | i,
                cachePool: null,
                transitions: x.transitions,
              }),
        (f.memoizedState = x),
        (f.childLanes = e.childLanes & ~i),
        (n.memoizedState = gl),
        a
      );
    }
    return (
      (f = e.child),
      (e = f.sibling),
      (a = Rn(f, { mode: "visible", children: a.children })),
      (n.mode & 1) === 0 && (a.lanes = i),
      (a.return = n),
      (a.sibling = null),
      e !== null &&
        ((i = n.deletions),
        i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
      (n.child = a),
      (n.memoizedState = null),
      a
    );
  }
  function vl(e, n) {
    return (
      (n = so({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function qs(e, n, i, a) {
    return (
      a !== null && Ha(a),
      Sr(n, e.child, null, i),
      (e = vl(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function u0(e, n, i, a, u, f, x) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (a = fl(Error(s(422)))), qs(e, n, x, a))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((f = a.fallback),
            (u = n.mode),
            (a = so({ mode: "visible", children: a.children }, u, 0, null)),
            (f = Qn(f, u, x, null)),
            (f.flags |= 2),
            (a.return = n),
            (f.return = n),
            (a.sibling = f),
            (n.child = a),
            (n.mode & 1) !== 0 && Sr(n, e.child, null, x),
            (n.child.memoizedState = yl(x)),
            (n.memoizedState = gl),
            f);
    if ((n.mode & 1) === 0) return qs(e, n, x, null);
    if (u.data === "$!") {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var S = a.dgst;
      return (
        (a = S),
        (f = Error(s(419))),
        (a = fl(f, a, void 0)),
        qs(e, n, x, a)
      );
    }
    if (((S = (x & e.childLanes) !== 0), lt || S)) {
      if (((a = He), a !== null)) {
        switch (x & -x) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        ((u = (u & (a.suspendedLanes | x)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== f.retryLane &&
            ((f.retryLane = u), nn(e, u), Dt(a, e, u, -1)));
      }
      return (Dl(), (a = fl(Error(s(421)))), qs(e, n, x, a));
    }
    return u.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = k0.bind(null, e)),
        (u._reactRetry = n),
        null)
      : ((e = f.treeContext),
        (mt = vn(u.nextSibling)),
        (pt = n),
        (be = !0),
        (bt = null),
        e !== null &&
          ((vt[xt++] = en),
          (vt[xt++] = tn),
          (vt[xt++] = Un),
          (en = e.id),
          (tn = e.overflow),
          (Un = n)),
        (n = vl(n, a.children)),
        (n.flags |= 4096),
        n);
  }
  function th(e, n, i) {
    e.lanes |= n;
    var a = e.alternate;
    (a !== null && (a.lanes |= n), Ya(e.return, n, i));
  }
  function xl(e, n, i, a, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: i,
          tailMode: u,
        })
      : ((f.isBackwards = n),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = i),
        (f.tailMode = u));
  }
  function nh(e, n, i) {
    var a = n.pendingProps,
      u = a.revealOrder,
      f = a.tail;
    if ((nt(e, n, a.children, i), (a = Ae.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (n.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && th(e, i, n);
          else if (e.tag === 19) th(e, i, n);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      a &= 1;
    }
    if ((Se(Ae, a), (n.mode & 1) === 0)) n.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (i = n.child, u = null; i !== null; )
            ((e = i.alternate),
              e !== null && Fs(e) === null && (u = i),
              (i = i.sibling));
          ((i = u),
            i === null
              ? ((u = n.child), (n.child = null))
              : ((u = i.sibling), (i.sibling = null)),
            xl(n, !1, u, i, f));
          break;
        case "backwards":
          for (i = null, u = n.child, n.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Fs(e) === null)) {
              n.child = u;
              break;
            }
            ((e = u.sibling), (u.sibling = i), (i = u), (u = e));
          }
          xl(n, !0, i, null, f);
          break;
        case "together":
          xl(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Ks(e, n) {
    (n.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function sn(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Kn |= n.lanes),
      (i & n.childLanes) === 0)
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        e = n.child, i = Rn(e, e.pendingProps), n.child = i, i.return = n;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (i = i.sibling = Rn(e, e.pendingProps)),
          (i.return = n));
      i.sibling = null;
    }
    return n.child;
  }
  function c0(e, n, i) {
    switch (n.tag) {
      case 3:
        (Zf(n), wr());
        break;
      case 5:
        gf(n);
        break;
      case 1:
        at(n.type) && Rs(n);
        break;
      case 4:
        Za(n, n.stateNode.containerInfo);
        break;
      case 10:
        var a = n.type._context,
          u = n.memoizedProps.value;
        (Se(Vs, a._currentValue), (a._currentValue = u));
        break;
      case 13:
        if (((a = n.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Se(Ae, Ae.current & 1), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0
              ? eh(e, n, i)
              : (Se(Ae, Ae.current & 1),
                (e = sn(e, n, i)),
                e !== null ? e.sibling : null);
        Se(Ae, Ae.current & 1);
        break;
      case 19:
        if (((a = (i & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (a) return nh(e, n, i);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Se(Ae, Ae.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), Yf(e, n, i));
    }
    return sn(e, n, i);
  }
  var rh, wl, ih, sh;
  ((rh = function (e, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (wl = function () {}),
    (ih = function (e, n, i, a) {
      var u = e.memoizedProps;
      if (u !== a) {
        ((e = n.stateNode), Hn($t.current));
        var f = null;
        switch (i) {
          case "input":
            ((u = Yo(e, u)), (a = Yo(e, a)), (f = []));
            break;
          case "select":
            ((u = H({}, u, { value: void 0 })),
              (a = H({}, a, { value: void 0 })),
              (f = []));
            break;
          case "textarea":
            ((u = Zo(e, u)), (a = Zo(e, a)), (f = []));
            break;
          default:
            typeof u.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = Ps);
        }
        ea(i, a);
        var x;
        i = null;
        for (L in u)
          if (!a.hasOwnProperty(L) && u.hasOwnProperty(L) && u[L] != null)
            if (L === "style") {
              var S = u[L];
              for (x in S) S.hasOwnProperty(x) && (i || (i = {}), (i[x] = ""));
            } else
              L !== "dangerouslySetInnerHTML" &&
                L !== "children" &&
                L !== "suppressContentEditableWarning" &&
                L !== "suppressHydrationWarning" &&
                L !== "autoFocus" &&
                (l.hasOwnProperty(L)
                  ? f || (f = [])
                  : (f = f || []).push(L, null));
        for (L in a) {
          var k = a[L];
          if (
            ((S = u != null ? u[L] : void 0),
            a.hasOwnProperty(L) && k !== S && (k != null || S != null))
          )
            if (L === "style")
              if (S) {
                for (x in S)
                  !S.hasOwnProperty(x) ||
                    (k && k.hasOwnProperty(x)) ||
                    (i || (i = {}), (i[x] = ""));
                for (x in k)
                  k.hasOwnProperty(x) &&
                    S[x] !== k[x] &&
                    (i || (i = {}), (i[x] = k[x]));
              } else (i || (f || (f = []), f.push(L, i)), (i = k));
            else
              L === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (S = S ? S.__html : void 0),
                  k != null && S !== k && (f = f || []).push(L, k))
                : L === "children"
                  ? (typeof k != "string" && typeof k != "number") ||
                    (f = f || []).push(L, "" + k)
                  : L !== "suppressContentEditableWarning" &&
                    L !== "suppressHydrationWarning" &&
                    (l.hasOwnProperty(L)
                      ? (k != null && L === "onScroll" && Ee("scroll", e),
                        f || S === k || (f = []))
                      : (f = f || []).push(L, k));
        }
        i && (f = f || []).push("style", i);
        var L = f;
        (n.updateQueue = L) && (n.flags |= 4);
      }
    }),
    (sh = function (e, n, i, a) {
      i !== a && (n.flags |= 4);
    }));
  function Ti(e, n) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var a = null; i !== null; )
            (i.alternate !== null && (a = i), (i = i.sibling));
          a === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function et(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      a = 0;
    if (n)
      for (var u = e.child; u !== null; )
        ((i |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 14680064),
          (a |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((i |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = i), n);
  }
  function d0(e, n, i) {
    var a = n.pendingProps;
    switch ((Ua(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (et(n), null);
      case 1:
        return (at(n.type) && Ns(), et(n), null);
      case 3:
        return (
          (a = n.stateNode),
          Er(),
          Te(ot),
          Te(Ze),
          tl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ls(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), bt !== null && (Ml(bt), (bt = null)))),
          wl(e, n),
          et(n),
          null
        );
      case 5:
        Ja(n);
        var u = Hn(wi.current);
        if (((i = n.type), e !== null && n.stateNode != null))
          (ih(e, n, i, a, u),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
        else {
          if (!a) {
            if (n.stateNode === null) throw Error(s(166));
            return (et(n), null);
          }
          if (((e = Hn($t.current)), Ls(n))) {
            ((a = n.stateNode), (i = n.type));
            var f = n.memoizedProps;
            switch (((a[Ut] = n), (a[mi] = f), (e = (n.mode & 1) !== 0), i)) {
              case "dialog":
                (Ee("cancel", a), Ee("close", a));
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < fi.length; u++) Ee(fi[u], a);
                break;
              case "source":
                Ee("error", a);
                break;
              case "img":
              case "image":
              case "link":
                (Ee("error", a), Ee("load", a));
                break;
              case "details":
                Ee("toggle", a);
                break;
              case "input":
                (Oc(a, f), Ee("invalid", a));
                break;
              case "select":
                ((a._wrapperState = { wasMultiple: !!f.multiple }),
                  Ee("invalid", a));
                break;
              case "textarea":
                (Bc(a, f), Ee("invalid", a));
            }
            (ea(i, f), (u = null));
            for (var x in f)
              if (f.hasOwnProperty(x)) {
                var S = f[x];
                x === "children"
                  ? typeof S == "string"
                    ? a.textContent !== S &&
                      (f.suppressHydrationWarning !== !0 &&
                        Ts(a.textContent, S, e),
                      (u = ["children", S]))
                    : typeof S == "number" &&
                      a.textContent !== "" + S &&
                      (f.suppressHydrationWarning !== !0 &&
                        Ts(a.textContent, S, e),
                      (u = ["children", "" + S]))
                  : l.hasOwnProperty(x) &&
                    S != null &&
                    x === "onScroll" &&
                    Ee("scroll", a);
              }
            switch (i) {
              case "input":
                (ns(a), zc(a, f, !0));
                break;
              case "textarea":
                (ns(a), $c(a));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (a.onclick = Ps);
            }
            ((a = u), (n.updateQueue = a), a !== null && (n.flags |= 4));
          } else {
            ((x = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Wc(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = x.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                    ? (e = x.createElement(i, { is: a.is }))
                    : ((e = x.createElement(i)),
                      i === "select" &&
                        ((x = e),
                        a.multiple
                          ? (x.multiple = !0)
                          : a.size && (x.size = a.size)))
                : (e = x.createElementNS(e, i)),
              (e[Ut] = n),
              (e[mi] = a),
              rh(e, n, !1, !1),
              (n.stateNode = e));
            e: {
              switch (((x = ta(i, a)), i)) {
                case "dialog":
                  (Ee("cancel", e), Ee("close", e), (u = a));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Ee("load", e), (u = a));
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < fi.length; u++) Ee(fi[u], e);
                  u = a;
                  break;
                case "source":
                  (Ee("error", e), (u = a));
                  break;
                case "img":
                case "image":
                case "link":
                  (Ee("error", e), Ee("load", e), (u = a));
                  break;
                case "details":
                  (Ee("toggle", e), (u = a));
                  break;
                case "input":
                  (Oc(e, a), (u = Yo(e, a)), Ee("invalid", e));
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = H({}, a, { value: void 0 })),
                    Ee("invalid", e));
                  break;
                case "textarea":
                  (Bc(e, a), (u = Zo(e, a)), Ee("invalid", e));
                  break;
                default:
                  u = a;
              }
              (ea(i, u), (S = u));
              for (f in S)
                if (S.hasOwnProperty(f)) {
                  var k = S[f];
                  f === "style"
                    ? Kc(e, k)
                    : f === "dangerouslySetInnerHTML"
                      ? ((k = k ? k.__html : void 0), k != null && Hc(e, k))
                      : f === "children"
                        ? typeof k == "string"
                          ? (i !== "textarea" || k !== "") && Kr(e, k)
                          : typeof k == "number" && Kr(e, "" + k)
                        : f !== "suppressContentEditableWarning" &&
                          f !== "suppressHydrationWarning" &&
                          f !== "autoFocus" &&
                          (l.hasOwnProperty(f)
                            ? k != null && f === "onScroll" && Ee("scroll", e)
                            : k != null && D(e, f, k, x));
                }
              switch (i) {
                case "input":
                  (ns(e), zc(e, a, !1));
                  break;
                case "textarea":
                  (ns(e), $c(e));
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + ge(a.value));
                  break;
                case "select":
                  ((e.multiple = !!a.multiple),
                    (f = a.value),
                    f != null
                      ? sr(e, !!a.multiple, f, !1)
                      : a.defaultValue != null &&
                        sr(e, !!a.multiple, a.defaultValue, !0));
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Ps);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return (et(n), null);
      case 6:
        if (e && n.stateNode != null) sh(e, n, e.memoizedProps, a);
        else {
          if (typeof a != "string" && n.stateNode === null) throw Error(s(166));
          if (((i = Hn(wi.current)), Hn($t.current), Ls(n))) {
            if (
              ((a = n.stateNode),
              (i = n.memoizedProps),
              (a[Ut] = n),
              (f = a.nodeValue !== i) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ts(a.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ts(a.nodeValue, i, (e.mode & 1) !== 0);
              }
            f && (n.flags |= 4);
          } else
            ((a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a)),
              (a[Ut] = n),
              (n.stateNode = a));
        }
        return (et(n), null);
      case 13:
        if (
          (Te(Ae),
          (a = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (be && mt !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            (lf(), wr(), (n.flags |= 98560), (f = !1));
          else if (((f = Ls(n)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[Ut] = n;
            } else
              (wr(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (et(n), (f = !1));
          } else (bt !== null && (Ml(bt), (bt = null)), (f = !0));
          if (!f) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0
          ? ((n.lanes = i), n)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((n.child.flags |= 8192),
              (n.mode & 1) !== 0 &&
                (e === null || (Ae.current & 1) !== 0
                  ? Ue === 0 && (Ue = 3)
                  : Dl())),
            n.updateQueue !== null && (n.flags |= 4),
            et(n),
            null);
      case 4:
        return (
          Er(),
          wl(e, n),
          e === null && hi(n.stateNode.containerInfo),
          et(n),
          null
        );
      case 10:
        return (Ga(n.type._context), et(n), null);
      case 17:
        return (at(n.type) && Ns(), et(n), null);
      case 19:
        if ((Te(Ae), (f = n.memoizedState), f === null)) return (et(n), null);
        if (((a = (n.flags & 128) !== 0), (x = f.rendering), x === null))
          if (a) Ti(f, !1);
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((x = Fs(e)), x !== null)) {
                  for (
                    n.flags |= 128,
                      Ti(f, !1),
                      a = x.updateQueue,
                      a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      a = i,
                      i = n.child;
                    i !== null;
                  )
                    ((f = i),
                      (e = a),
                      (f.flags &= 14680066),
                      (x = f.alternate),
                      x === null
                        ? ((f.childLanes = 0),
                          (f.lanes = e),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = x.childLanes),
                          (f.lanes = x.lanes),
                          (f.child = x.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = x.memoizedProps),
                          (f.memoizedState = x.memoizedState),
                          (f.updateQueue = x.updateQueue),
                          (f.type = x.type),
                          (e = x.dependencies),
                          (f.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (i = i.sibling));
                  return (Se(Ae, (Ae.current & 1) | 2), n.child);
                }
                e = e.sibling;
              }
            f.tail !== null &&
              _e() > Nr &&
              ((n.flags |= 128), (a = !0), Ti(f, !1), (n.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Fs(x)), e !== null)) {
              if (
                ((n.flags |= 128),
                (a = !0),
                (i = e.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                Ti(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !x.alternate &&
                  !be)
              )
                return (et(n), null);
            } else
              2 * _e() - f.renderingStartTime > Nr &&
                i !== 1073741824 &&
                ((n.flags |= 128), (a = !0), Ti(f, !1), (n.lanes = 4194304));
          f.isBackwards
            ? ((x.sibling = n.child), (n.child = x))
            : ((i = f.last),
              i !== null ? (i.sibling = x) : (n.child = x),
              (f.last = x));
        }
        return f.tail !== null
          ? ((n = f.tail),
            (f.rendering = n),
            (f.tail = n.sibling),
            (f.renderingStartTime = _e()),
            (n.sibling = null),
            (i = Ae.current),
            Se(Ae, a ? (i & 1) | 2 : i & 1),
            n)
          : (et(n), null);
      case 22:
      case 23:
        return (
          Ll(),
          (a = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (n.flags |= 8192),
          a && (n.mode & 1) !== 0
            ? (gt & 1073741824) !== 0 &&
              (et(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : et(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function f0(e, n) {
    switch ((Ua(n), n.tag)) {
      case 1:
        return (
          at(n.type) && Ns(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Er(),
          Te(ot),
          Te(Ze),
          tl(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 5:
        return (Ja(n), null);
      case 13:
        if (
          (Te(Ae), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          wr();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return (Te(Ae), null);
      case 4:
        return (Er(), null);
      case 10:
        return (Ga(n.type._context), null);
      case 22:
      case 23:
        return (Ll(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gs = !1,
    tt = !1,
    h0 = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
  function Pr(e, n) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (a) {
          Ve(e, n, a);
        }
      else i.current = null;
  }
  function Sl(e, n, i) {
    try {
      i();
    } catch (a) {
      Ve(e, n, a);
    }
  }
  var oh = !1;
  function p0(e, n) {
    if (((La = ps), (e = _d()), Ta(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var a = i.getSelection && i.getSelection();
          if (a && a.rangeCount !== 0) {
            i = a.anchorNode;
            var u = a.anchorOffset,
              f = a.focusNode;
            a = a.focusOffset;
            try {
              (i.nodeType, f.nodeType);
            } catch {
              i = null;
              break e;
            }
            var x = 0,
              S = -1,
              k = -1,
              L = 0,
              F = 0,
              z = e,
              O = null;
            t: for (;;) {
              for (
                var q;
                z !== i || (u !== 0 && z.nodeType !== 3) || (S = x + u),
                  z !== f || (a !== 0 && z.nodeType !== 3) || (k = x + a),
                  z.nodeType === 3 && (x += z.nodeValue.length),
                  (q = z.firstChild) !== null;
              )
                ((O = z), (z = q));
              for (;;) {
                if (z === e) break t;
                if (
                  (O === i && ++L === u && (S = x),
                  O === f && ++F === a && (k = x),
                  (q = z.nextSibling) !== null)
                )
                  break;
                ((z = O), (O = z.parentNode));
              }
              z = q;
            }
            i = S === -1 || k === -1 ? null : { start: S, end: k };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Da = { focusedElem: e, selectionRange: i }, ps = !1, K = n;
      K !== null;
    )
      if (((n = K), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = n), (K = e));
      else
        for (; K !== null; ) {
          n = K;
          try {
            var G = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (G !== null) {
                    var Q = G.memoizedProps,
                      Oe = G.memoizedState,
                      R = n.stateNode,
                      E = R.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? Q : Mt(n.type, Q),
                        Oe,
                      );
                    R.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var b = n.stateNode.containerInfo;
                  b.nodeType === 1
                    ? (b.textContent = "")
                    : b.nodeType === 9 &&
                      b.documentElement &&
                      b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (U) {
            Ve(n, n.return, U);
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (K = e));
            break;
          }
          K = n.return;
        }
    return ((G = oh), (oh = !1), G);
  }
  function Pi(e, n, i) {
    var a = n.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          ((u.destroy = void 0), f !== void 0 && Sl(n, i, f));
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function Ys(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var a = i.create;
          i.destroy = a();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function kl(e) {
    var n = e.ref;
    if (n !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function ah(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), ah(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[Ut],
          delete n[mi],
          delete n[Oa],
          delete n[Xv],
          delete n[Qv])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function lh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function uh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || lh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cl(e, n, i) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, n)
            : i.insertBefore(e, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(e, i))
              : ((n = i), n.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = Ps)));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (Cl(e, n, i), e = e.sibling; e !== null; )
        (Cl(e, n, i), (e = e.sibling));
  }
  function El(e, n, i) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (El(e, n, i), e = e.sibling; e !== null; )
        (El(e, n, i), (e = e.sibling));
  }
  var Ge = null,
    At = !1;
  function En(e, n, i) {
    for (i = i.child; i !== null; ) (ch(e, n, i), (i = i.sibling));
  }
  function ch(e, n, i) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function")
      try {
        Bt.onCommitFiberUnmount(ls, i);
      } catch {}
    switch (i.tag) {
      case 5:
        tt || Pr(i, n);
      case 6:
        var a = Ge,
          u = At;
        ((Ge = null),
          En(e, n, i),
          (Ge = a),
          (At = u),
          Ge !== null &&
            (At
              ? ((e = Ge),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : Ge.removeChild(i.stateNode)));
        break;
      case 18:
        Ge !== null &&
          (At
            ? ((e = Ge),
              (i = i.stateNode),
              e.nodeType === 8
                ? _a(e.parentNode, i)
                : e.nodeType === 1 && _a(e, i),
              ii(e))
            : _a(Ge, i.stateNode));
        break;
      case 4:
        ((a = Ge),
          (u = At),
          (Ge = i.stateNode.containerInfo),
          (At = !0),
          En(e, n, i),
          (Ge = a),
          (At = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !tt &&
          ((a = i.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          u = a = a.next;
          do {
            var f = u,
              x = f.destroy;
            ((f = f.tag),
              x !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Sl(i, n, x),
              (u = u.next));
          } while (u !== a);
        }
        En(e, n, i);
        break;
      case 1:
        if (
          !tt &&
          (Pr(i, n),
          (a = i.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            ((a.props = i.memoizedProps),
              (a.state = i.memoizedState),
              a.componentWillUnmount());
          } catch (S) {
            Ve(i, n, S);
          }
        En(e, n, i);
        break;
      case 21:
        En(e, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((tt = (a = tt) || i.memoizedState !== null), En(e, n, i), (tt = a))
          : En(e, n, i);
        break;
      default:
        En(e, n, i);
    }
  }
  function dh(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new h0()),
        n.forEach(function (a) {
          var u = C0.bind(null, e, a);
          i.has(a) || (i.add(a), a.then(u, u));
        }));
    }
  }
  function Lt(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var a = 0; a < i.length; a++) {
        var u = i[a];
        try {
          var f = e,
            x = n,
            S = x;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                ((Ge = S.stateNode), (At = !1));
                break e;
              case 3:
                ((Ge = S.stateNode.containerInfo), (At = !0));
                break e;
              case 4:
                ((Ge = S.stateNode.containerInfo), (At = !0));
                break e;
            }
            S = S.return;
          }
          if (Ge === null) throw Error(s(160));
          (ch(f, x, u), (Ge = null), (At = !1));
          var k = u.alternate;
          (k !== null && (k.return = null), (u.return = null));
        } catch (L) {
          Ve(u, n, L);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) (fh(n, e), (n = n.sibling));
  }
  function fh(e, n) {
    var i = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Lt(n, e), Ht(e), a & 4)) {
          try {
            (Pi(3, e, e.return), Ys(3, e));
          } catch (Q) {
            Ve(e, e.return, Q);
          }
          try {
            Pi(5, e, e.return);
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        break;
      case 1:
        (Lt(n, e), Ht(e), a & 512 && i !== null && Pr(i, i.return));
        break;
      case 5:
        if (
          (Lt(n, e),
          Ht(e),
          a & 512 && i !== null && Pr(i, i.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            Kr(u, "");
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        if (a & 4 && ((u = e.stateNode), u != null)) {
          var f = e.memoizedProps,
            x = i !== null ? i.memoizedProps : f,
            S = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              (S === "input" &&
                f.type === "radio" &&
                f.name != null &&
                Fc(u, f),
                ta(S, x));
              var L = ta(S, f);
              for (x = 0; x < k.length; x += 2) {
                var F = k[x],
                  z = k[x + 1];
                F === "style"
                  ? Kc(u, z)
                  : F === "dangerouslySetInnerHTML"
                    ? Hc(u, z)
                    : F === "children"
                      ? Kr(u, z)
                      : D(u, F, z, L);
              }
              switch (S) {
                case "input":
                  Xo(u, f);
                  break;
                case "textarea":
                  Uc(u, f);
                  break;
                case "select":
                  var O = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!f.multiple;
                  var q = f.value;
                  q != null
                    ? sr(u, !!f.multiple, q, !1)
                    : O !== !!f.multiple &&
                      (f.defaultValue != null
                        ? sr(u, !!f.multiple, f.defaultValue, !0)
                        : sr(u, !!f.multiple, f.multiple ? [] : "", !1));
              }
              u[mi] = f;
            } catch (Q) {
              Ve(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((Lt(n, e), Ht(e), a & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((u = e.stateNode), (f = e.memoizedProps));
          try {
            u.nodeValue = f;
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          (Lt(n, e), Ht(e), a & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            ii(n.containerInfo);
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        break;
      case 4:
        (Lt(n, e), Ht(e));
        break;
      case 13:
        (Lt(n, e),
          Ht(e),
          (u = e.child),
          u.flags & 8192 &&
            ((f = u.memoizedState !== null),
            (u.stateNode.isHidden = f),
            !f ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (jl = _e())),
          a & 4 && dh(e));
        break;
      case 22:
        if (
          ((F = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((tt = (L = tt) || F), Lt(n, e), (tt = L)) : Lt(n, e),
          Ht(e),
          a & 8192)
        ) {
          if (
            ((L = e.memoizedState !== null),
            (e.stateNode.isHidden = L) && !F && (e.mode & 1) !== 0)
          )
            for (K = e, F = e.child; F !== null; ) {
              for (z = K = F; K !== null; ) {
                switch (((O = K), (q = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pi(4, O, O.return);
                    break;
                  case 1:
                    Pr(O, O.return);
                    var G = O.stateNode;
                    if (typeof G.componentWillUnmount == "function") {
                      ((a = O), (i = O.return));
                      try {
                        ((n = a),
                          (G.props = n.memoizedProps),
                          (G.state = n.memoizedState),
                          G.componentWillUnmount());
                      } catch (Q) {
                        Ve(a, i, Q);
                      }
                    }
                    break;
                  case 5:
                    Pr(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      mh(z);
                      continue;
                    }
                }
                q !== null ? ((q.return = O), (K = q)) : mh(z);
              }
              F = F.sibling;
            }
          e: for (F = null, z = e; ; ) {
            if (z.tag === 5) {
              if (F === null) {
                F = z;
                try {
                  ((u = z.stateNode),
                    L
                      ? ((f = u.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((S = z.stateNode),
                        (k = z.memoizedProps.style),
                        (x =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (S.style.display = qc("display", x))));
                } catch (Q) {
                  Ve(e, e.return, Q);
                }
              }
            } else if (z.tag === 6) {
              if (F === null)
                try {
                  z.stateNode.nodeValue = L ? "" : z.memoizedProps;
                } catch (Q) {
                  Ve(e, e.return, Q);
                }
            } else if (
              ((z.tag !== 22 && z.tag !== 23) ||
                z.memoizedState === null ||
                z === e) &&
              z.child !== null
            ) {
              ((z.child.return = z), (z = z.child));
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              (F === z && (F = null), (z = z.return));
            }
            (F === z && (F = null),
              (z.sibling.return = z.return),
              (z = z.sibling));
          }
        }
        break;
      case 19:
        (Lt(n, e), Ht(e), a & 4 && dh(e));
        break;
      case 21:
        break;
      default:
        (Lt(n, e), Ht(e));
    }
  }
  function Ht(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (lh(i)) {
              var a = i;
              break e;
            }
            i = i.return;
          }
          throw Error(s(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Kr(u, ""), (a.flags &= -33));
            var f = uh(e);
            El(e, f, u);
            break;
          case 3:
          case 4:
            var x = a.stateNode.containerInfo,
              S = uh(e);
            Cl(e, S, x);
            break;
          default:
            throw Error(s(161));
        }
      } catch (k) {
        Ve(e, e.return, k);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function m0(e, n, i) {
    ((K = e), hh(e));
  }
  function hh(e, n, i) {
    for (var a = (e.mode & 1) !== 0; K !== null; ) {
      var u = K,
        f = u.child;
      if (u.tag === 22 && a) {
        var x = u.memoizedState !== null || Gs;
        if (!x) {
          var S = u.alternate,
            k = (S !== null && S.memoizedState !== null) || tt;
          S = Gs;
          var L = tt;
          if (((Gs = x), (tt = k) && !L))
            for (K = u; K !== null; )
              ((x = K),
                (k = x.child),
                x.tag === 22 && x.memoizedState !== null
                  ? gh(u)
                  : k !== null
                    ? ((k.return = x), (K = k))
                    : gh(u));
          for (; f !== null; ) ((K = f), hh(f), (f = f.sibling));
          ((K = u), (Gs = S), (tt = L));
        }
        ph(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && f !== null
          ? ((f.return = u), (K = f))
          : ph(e);
    }
  }
  function ph(e) {
    for (; K !== null; ) {
      var n = K;
      if ((n.flags & 8772) !== 0) {
        var i = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                tt || Ys(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !tt)
                  if (i === null) a.componentDidMount();
                  else {
                    var u =
                      n.elementType === n.type
                        ? i.memoizedProps
                        : Mt(n.type, i.memoizedProps);
                    a.componentDidUpdate(
                      u,
                      i.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var f = n.updateQueue;
                f !== null && mf(n, f, a);
                break;
              case 3:
                var x = n.updateQueue;
                if (x !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  mf(n, x, i);
                }
                break;
              case 5:
                var S = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = S;
                  var k = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && i.focus();
                      break;
                    case "img":
                      k.src && (i.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var L = n.alternate;
                  if (L !== null) {
                    var F = L.memoizedState;
                    if (F !== null) {
                      var z = F.dehydrated;
                      z !== null && ii(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          tt || (n.flags & 512 && kl(n));
        } catch (O) {
          Ve(n, n.return, O);
        }
      }
      if (n === e) {
        K = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        ((i.return = n.return), (K = i));
        break;
      }
      K = n.return;
    }
  }
  function mh(e) {
    for (; K !== null; ) {
      var n = K;
      if (n === e) {
        K = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        ((i.return = n.return), (K = i));
        break;
      }
      K = n.return;
    }
  }
  function gh(e) {
    for (; K !== null; ) {
      var n = K;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              Ys(4, n);
            } catch (k) {
              Ve(n, i, k);
            }
            break;
          case 1:
            var a = n.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = n.return;
              try {
                a.componentDidMount();
              } catch (k) {
                Ve(n, u, k);
              }
            }
            var f = n.return;
            try {
              kl(n);
            } catch (k) {
              Ve(n, f, k);
            }
            break;
          case 5:
            var x = n.return;
            try {
              kl(n);
            } catch (k) {
              Ve(n, x, k);
            }
        }
      } catch (k) {
        Ve(n, n.return, k);
      }
      if (n === e) {
        K = null;
        break;
      }
      var S = n.sibling;
      if (S !== null) {
        ((S.return = n.return), (K = S));
        break;
      }
      K = n.return;
    }
  }
  var g0 = Math.ceil,
    Xs = $.ReactCurrentDispatcher,
    Tl = $.ReactCurrentOwner,
    kt = $.ReactCurrentBatchConfig,
    ue = 0,
    He = null,
    Fe = null,
    Ye = 0,
    gt = 0,
    jr = xn(0),
    Ue = 0,
    ji = null,
    Kn = 0,
    Qs = 0,
    Pl = 0,
    Ni = null,
    ut = null,
    jl = 0,
    Nr = 1 / 0,
    on = null,
    Zs = !1,
    Nl = null,
    Tn = null,
    Js = !1,
    Pn = null,
    eo = 0,
    Ri = 0,
    Rl = null,
    to = -1,
    no = 0;
  function rt() {
    return (ue & 6) !== 0 ? _e() : to !== -1 ? to : (to = _e());
  }
  function jn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ue & 2) !== 0 && Ye !== 0
        ? Ye & -Ye
        : Jv.transition !== null
          ? (no === 0 && (no = ld()), no)
          : ((e = ye),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : yd(e.type))),
            e);
  }
  function Dt(e, n, i, a) {
    if (50 < Ri) throw ((Ri = 0), (Rl = null), Error(s(185)));
    (Jr(e, i, a),
      ((ue & 2) === 0 || e !== He) &&
        (e === He && ((ue & 2) === 0 && (Qs |= i), Ue === 4 && Nn(e, Ye)),
        ct(e, a),
        i === 1 &&
          ue === 0 &&
          (n.mode & 1) === 0 &&
          ((Nr = _e() + 500), bs && Sn())));
  }
  function ct(e, n) {
    var i = e.callbackNode;
    Jy(e, n);
    var a = ds(e, e === He ? Ye : 0);
    if (a === 0)
      (i !== null && sd(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((n = a & -a), e.callbackPriority !== n)) {
      if ((i != null && sd(i), n === 1))
        (e.tag === 0 ? Zv(vh.bind(null, e)) : nf(vh.bind(null, e)),
          Gv(function () {
            (ue & 6) === 0 && Sn();
          }),
          (i = null));
      else {
        switch (ud(a)) {
          case 1:
            i = la;
            break;
          case 4:
            i = od;
            break;
          case 16:
            i = as;
            break;
          case 536870912:
            i = ad;
            break;
          default:
            i = as;
        }
        i = Ph(i, yh.bind(null, e));
      }
      ((e.callbackPriority = n), (e.callbackNode = i));
    }
  }
  function yh(e, n) {
    if (((to = -1), (no = 0), (ue & 6) !== 0)) throw Error(s(327));
    var i = e.callbackNode;
    if (Rr() && e.callbackNode !== i) return null;
    var a = ds(e, e === He ? Ye : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || n) n = ro(e, a);
    else {
      n = a;
      var u = ue;
      ue |= 2;
      var f = wh();
      (He !== e || Ye !== n) && ((on = null), (Nr = _e() + 500), Yn(e, n));
      do
        try {
          x0();
          break;
        } catch (S) {
          xh(e, S);
        }
      while (!0);
      (Ka(),
        (Xs.current = f),
        (ue = u),
        Fe !== null ? (n = 0) : ((He = null), (Ye = 0), (n = Ue)));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((u = ua(e)), u !== 0 && ((a = u), (n = bl(e, u)))),
        n === 1)
      )
        throw ((i = ji), Yn(e, 0), Nn(e, a), ct(e, _e()), i);
      if (n === 6) Nn(e, a);
      else {
        if (
          ((u = e.current.alternate),
          (a & 30) === 0 &&
            !y0(u) &&
            ((n = ro(e, a)),
            n === 2 && ((f = ua(e)), f !== 0 && ((a = f), (n = bl(e, f)))),
            n === 1))
        )
          throw ((i = ji), Yn(e, 0), Nn(e, a), ct(e, _e()), i);
        switch (((e.finishedWork = u), (e.finishedLanes = a), n)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Xn(e, ut, on);
            break;
          case 3:
            if (
              (Nn(e, a),
              (a & 130023424) === a && ((n = jl + 500 - _e()), 10 < n))
            ) {
              if (ds(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & a) !== a)) {
                (rt(), (e.pingedLanes |= e.suspendedLanes & u));
                break;
              }
              e.timeoutHandle = Ia(Xn.bind(null, e, ut, on), n);
              break;
            }
            Xn(e, ut, on);
            break;
          case 4:
            if ((Nn(e, a), (a & 4194240) === a)) break;
            for (n = e.eventTimes, u = -1; 0 < a; ) {
              var x = 31 - Nt(a);
              ((f = 1 << x), (x = n[x]), x > u && (u = x), (a &= ~f));
            }
            if (
              ((a = u),
              (a = _e() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                    ? 480
                    : 1080 > a
                      ? 1080
                      : 1920 > a
                        ? 1920
                        : 3e3 > a
                          ? 3e3
                          : 4320 > a
                            ? 4320
                            : 1960 * g0(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = Ia(Xn.bind(null, e, ut, on), a);
              break;
            }
            Xn(e, ut, on);
            break;
          case 5:
            Xn(e, ut, on);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (ct(e, _e()), e.callbackNode === i ? yh.bind(null, e) : null);
  }
  function bl(e, n) {
    var i = Ni;
    return (
      e.current.memoizedState.isDehydrated && (Yn(e, n).flags |= 256),
      (e = ro(e, n)),
      e !== 2 && ((n = ut), (ut = i), n !== null && Ml(n)),
      e
    );
  }
  function Ml(e) {
    ut === null ? (ut = e) : ut.push.apply(ut, e);
  }
  function y0(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var a = 0; a < i.length; a++) {
            var u = i[a],
              f = u.getSnapshot;
            u = u.value;
            try {
              if (!Rt(f(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        ((i.return = n), (n = i));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function Nn(e, n) {
    for (
      n &= ~Pl,
        n &= ~Qs,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;
    ) {
      var i = 31 - Nt(n),
        a = 1 << i;
      ((e[i] = -1), (n &= ~a));
    }
  }
  function vh(e) {
    if ((ue & 6) !== 0) throw Error(s(327));
    Rr();
    var n = ds(e, 0);
    if ((n & 1) === 0) return (ct(e, _e()), null);
    var i = ro(e, n);
    if (e.tag !== 0 && i === 2) {
      var a = ua(e);
      a !== 0 && ((n = a), (i = bl(e, a)));
    }
    if (i === 1) throw ((i = ji), Yn(e, 0), Nn(e, n), ct(e, _e()), i);
    if (i === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      Xn(e, ut, on),
      ct(e, _e()),
      null
    );
  }
  function Al(e, n) {
    var i = ue;
    ue |= 1;
    try {
      return e(n);
    } finally {
      ((ue = i), ue === 0 && ((Nr = _e() + 500), bs && Sn()));
    }
  }
  function Gn(e) {
    Pn !== null && Pn.tag === 0 && (ue & 6) === 0 && Rr();
    var n = ue;
    ue |= 1;
    var i = kt.transition,
      a = ye;
    try {
      if (((kt.transition = null), (ye = 1), e)) return e();
    } finally {
      ((ye = a), (kt.transition = i), (ue = n), (ue & 6) === 0 && Sn());
    }
  }
  function Ll() {
    ((gt = jr.current), Te(jr));
  }
  function Yn(e, n) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), Kv(i)), Fe !== null))
      for (i = Fe.return; i !== null; ) {
        var a = i;
        switch ((Ua(a), a.tag)) {
          case 1:
            ((a = a.type.childContextTypes), a != null && Ns());
            break;
          case 3:
            (Er(), Te(ot), Te(Ze), tl());
            break;
          case 5:
            Ja(a);
            break;
          case 4:
            Er();
            break;
          case 13:
            Te(Ae);
            break;
          case 19:
            Te(Ae);
            break;
          case 10:
            Ga(a.type._context);
            break;
          case 22:
          case 23:
            Ll();
        }
        i = i.return;
      }
    if (
      ((He = e),
      (Fe = e = Rn(e.current, null)),
      (Ye = gt = n),
      (Ue = 0),
      (ji = null),
      (Pl = Qs = Kn = 0),
      (ut = Ni = null),
      Wn !== null)
    ) {
      for (n = 0; n < Wn.length; n++)
        if (((i = Wn[n]), (a = i.interleaved), a !== null)) {
          i.interleaved = null;
          var u = a.next,
            f = i.pending;
          if (f !== null) {
            var x = f.next;
            ((f.next = u), (a.next = x));
          }
          i.pending = a;
        }
      Wn = null;
    }
    return e;
  }
  function xh(e, n) {
    do {
      var i = Fe;
      try {
        if ((Ka(), (zs.current = Ws), Bs)) {
          for (var a = Le.memoizedState; a !== null; ) {
            var u = a.queue;
            (u !== null && (u.pending = null), (a = a.next));
          }
          Bs = !1;
        }
        if (
          ((qn = 0),
          (We = Be = Le = null),
          (Si = !1),
          (ki = 0),
          (Tl.current = null),
          i === null || i.return === null)
        ) {
          ((Ue = 1), (ji = n), (Fe = null));
          break;
        }
        e: {
          var f = e,
            x = i.return,
            S = i,
            k = n;
          if (
            ((n = Ye),
            (S.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var L = k,
              F = S,
              z = F.tag;
            if ((F.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var O = F.alternate;
              O
                ? ((F.updateQueue = O.updateQueue),
                  (F.memoizedState = O.memoizedState),
                  (F.lanes = O.lanes))
                : ((F.updateQueue = null), (F.memoizedState = null));
            }
            var q = Wf(x);
            if (q !== null) {
              ((q.flags &= -257),
                Hf(q, x, S, f, n),
                q.mode & 1 && $f(f, L, n),
                (n = q),
                (k = L));
              var G = n.updateQueue;
              if (G === null) {
                var Q = new Set();
                (Q.add(k), (n.updateQueue = Q));
              } else G.add(k);
              break e;
            } else {
              if ((n & 1) === 0) {
                ($f(f, L, n), Dl());
                break e;
              }
              k = Error(s(426));
            }
          } else if (be && S.mode & 1) {
            var Oe = Wf(x);
            if (Oe !== null) {
              ((Oe.flags & 65536) === 0 && (Oe.flags |= 256),
                Hf(Oe, x, S, f, n),
                Ha(Tr(k, S)));
              break e;
            }
          }
          ((f = k = Tr(k, S)),
            Ue !== 4 && (Ue = 2),
            Ni === null ? (Ni = [f]) : Ni.push(f),
            (f = x));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (n &= -n), (f.lanes |= n));
                var R = Bf(f, k, n);
                pf(f, R);
                break e;
              case 1:
                S = k;
                var E = f.type,
                  b = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (b !== null &&
                      typeof b.componentDidCatch == "function" &&
                      (Tn === null || !Tn.has(b))))
                ) {
                  ((f.flags |= 65536), (n &= -n), (f.lanes |= n));
                  var U = Uf(f, S, n);
                  pf(f, U);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        kh(i);
      } catch (Z) {
        ((n = Z), Fe === i && i !== null && (Fe = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function wh() {
    var e = Xs.current;
    return ((Xs.current = Ws), e === null ? Ws : e);
  }
  function Dl() {
    ((Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
      He === null ||
        ((Kn & 268435455) === 0 && (Qs & 268435455) === 0) ||
        Nn(He, Ye));
  }
  function ro(e, n) {
    var i = ue;
    ue |= 2;
    var a = wh();
    (He !== e || Ye !== n) && ((on = null), Yn(e, n));
    do
      try {
        v0();
        break;
      } catch (u) {
        xh(e, u);
      }
    while (!0);
    if ((Ka(), (ue = i), (Xs.current = a), Fe !== null)) throw Error(s(261));
    return ((He = null), (Ye = 0), Ue);
  }
  function v0() {
    for (; Fe !== null; ) Sh(Fe);
  }
  function x0() {
    for (; Fe !== null && !Wy(); ) Sh(Fe);
  }
  function Sh(e) {
    var n = Th(e.alternate, e, gt);
    ((e.memoizedProps = e.pendingProps),
      n === null ? kh(e) : (Fe = n),
      (Tl.current = null));
  }
  function kh(e) {
    var n = e;
    do {
      var i = n.alternate;
      if (((e = n.return), (n.flags & 32768) === 0)) {
        if (((i = d0(i, n, gt)), i !== null)) {
          Fe = i;
          return;
        }
      } else {
        if (((i = f0(i, n)), i !== null)) {
          ((i.flags &= 32767), (Fe = i));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ue = 6), (Fe = null));
          return;
        }
      }
      if (((n = n.sibling), n !== null)) {
        Fe = n;
        return;
      }
      Fe = n = e;
    } while (n !== null);
    Ue === 0 && (Ue = 5);
  }
  function Xn(e, n, i) {
    var a = ye,
      u = kt.transition;
    try {
      ((kt.transition = null), (ye = 1), w0(e, n, i, a));
    } finally {
      ((kt.transition = u), (ye = a));
    }
    return null;
  }
  function w0(e, n, i, a) {
    do Rr();
    while (Pn !== null);
    if ((ue & 6) !== 0) throw Error(s(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var f = i.lanes | i.childLanes;
    if (
      (ev(e, f),
      e === He && ((Fe = He = null), (Ye = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Js ||
        ((Js = !0),
        Ph(as, function () {
          return (Rr(), null);
        })),
      (f = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = kt.transition), (kt.transition = null));
      var x = ye;
      ye = 1;
      var S = ue;
      ((ue |= 4),
        (Tl.current = null),
        p0(e, i),
        fh(i, e),
        zv(Da),
        (ps = !!La),
        (Da = La = null),
        (e.current = i),
        m0(i),
        Hy(),
        (ue = S),
        (ye = x),
        (kt.transition = f));
    } else e.current = i;
    if (
      (Js && ((Js = !1), (Pn = e), (eo = u)),
      (f = e.pendingLanes),
      f === 0 && (Tn = null),
      Gy(i.stateNode),
      ct(e, _e()),
      n !== null)
    )
      for (a = e.onRecoverableError, i = 0; i < n.length; i++)
        ((u = n[i]), a(u.value, { componentStack: u.stack, digest: u.digest }));
    if (Zs) throw ((Zs = !1), (e = Nl), (Nl = null), e);
    return (
      (eo & 1) !== 0 && e.tag !== 0 && Rr(),
      (f = e.pendingLanes),
      (f & 1) !== 0 ? (e === Rl ? Ri++ : ((Ri = 0), (Rl = e))) : (Ri = 0),
      Sn(),
      null
    );
  }
  function Rr() {
    if (Pn !== null) {
      var e = ud(eo),
        n = kt.transition,
        i = ye;
      try {
        if (((kt.transition = null), (ye = 16 > e ? 16 : e), Pn === null))
          var a = !1;
        else {
          if (((e = Pn), (Pn = null), (eo = 0), (ue & 6) !== 0))
            throw Error(s(331));
          var u = ue;
          for (ue |= 4, K = e.current; K !== null; ) {
            var f = K,
              x = f.child;
            if ((K.flags & 16) !== 0) {
              var S = f.deletions;
              if (S !== null) {
                for (var k = 0; k < S.length; k++) {
                  var L = S[k];
                  for (K = L; K !== null; ) {
                    var F = K;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pi(8, F, f);
                    }
                    var z = F.child;
                    if (z !== null) ((z.return = F), (K = z));
                    else
                      for (; K !== null; ) {
                        F = K;
                        var O = F.sibling,
                          q = F.return;
                        if ((ah(F), F === L)) {
                          K = null;
                          break;
                        }
                        if (O !== null) {
                          ((O.return = q), (K = O));
                          break;
                        }
                        K = q;
                      }
                  }
                }
                var G = f.alternate;
                if (G !== null) {
                  var Q = G.child;
                  if (Q !== null) {
                    G.child = null;
                    do {
                      var Oe = Q.sibling;
                      ((Q.sibling = null), (Q = Oe));
                    } while (Q !== null);
                  }
                }
                K = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && x !== null)
              ((x.return = f), (K = x));
            else
              e: for (; K !== null; ) {
                if (((f = K), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(9, f, f.return);
                  }
                var R = f.sibling;
                if (R !== null) {
                  ((R.return = f.return), (K = R));
                  break e;
                }
                K = f.return;
              }
          }
          var E = e.current;
          for (K = E; K !== null; ) {
            x = K;
            var b = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && b !== null)
              ((b.return = x), (K = b));
            else
              e: for (x = E; K !== null; ) {
                if (((S = K), (S.flags & 2048) !== 0))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ys(9, S);
                    }
                  } catch (Z) {
                    Ve(S, S.return, Z);
                  }
                if (S === x) {
                  K = null;
                  break e;
                }
                var U = S.sibling;
                if (U !== null) {
                  ((U.return = S.return), (K = U));
                  break e;
                }
                K = S.return;
              }
          }
          if (
            ((ue = u),
            Sn(),
            Bt && typeof Bt.onPostCommitFiberRoot == "function")
          )
            try {
              Bt.onPostCommitFiberRoot(ls, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        ((ye = i), (kt.transition = n));
      }
    }
    return !1;
  }
  function Ch(e, n, i) {
    ((n = Tr(i, n)),
      (n = Bf(e, n, 1)),
      (e = Cn(e, n, 1)),
      (n = rt()),
      e !== null && (Jr(e, 1, n), ct(e, n)));
  }
  function Ve(e, n, i) {
    if (e.tag === 3) Ch(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ch(n, e, i);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Tn === null || !Tn.has(a)))
          ) {
            ((e = Tr(i, e)),
              (e = Uf(n, e, 1)),
              (n = Cn(n, e, 1)),
              (e = rt()),
              n !== null && (Jr(n, 1, e), ct(n, e)));
            break;
          }
        }
        n = n.return;
      }
  }
  function S0(e, n, i) {
    var a = e.pingCache;
    (a !== null && a.delete(n),
      (n = rt()),
      (e.pingedLanes |= e.suspendedLanes & i),
      He === e &&
        (Ye & i) === i &&
        (Ue === 4 || (Ue === 3 && (Ye & 130023424) === Ye && 500 > _e() - jl)
          ? Yn(e, 0)
          : (Pl |= i)),
      ct(e, n));
  }
  function Eh(e, n) {
    n === 0 &&
      ((e.mode & 1) === 0
        ? (n = 1)
        : ((n = cs), (cs <<= 1), (cs & 130023424) === 0 && (cs = 4194304)));
    var i = rt();
    ((e = nn(e, n)), e !== null && (Jr(e, n, i), ct(e, i)));
  }
  function k0(e) {
    var n = e.memoizedState,
      i = 0;
    (n !== null && (i = n.retryLane), Eh(e, i));
  }
  function C0(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (a !== null && a.delete(n), Eh(e, i));
  }
  var Th;
  Th = function (e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || ot.current) lt = !0;
      else {
        if ((e.lanes & i) === 0 && (n.flags & 128) === 0)
          return ((lt = !1), c0(e, n, i));
        lt = (e.flags & 131072) !== 0;
      }
    else ((lt = !1), be && (n.flags & 1048576) !== 0 && rf(n, As, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var a = n.type;
        (Ks(e, n), (e = n.pendingProps));
        var u = yr(n, Ze.current);
        (Cr(n, i), (u = il(null, n, a, e, u, i)));
        var f = sl();
        return (
          (n.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              at(a) ? ((f = !0), Rs(n)) : (f = !1),
              (n.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Qa(n),
              (u.updater = Hs),
              (n.stateNode = u),
              (u._reactInternals = n),
              dl(n, a, e, i),
              (n = ml(null, n, a, !0, f, i)))
            : ((n.tag = 0), be && f && Ba(n), nt(null, n, u, i), (n = n.child)),
          n
        );
      case 16:
        a = n.elementType;
        e: {
          switch (
            (Ks(e, n),
            (e = n.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (n.type = a),
            (u = n.tag = T0(a)),
            (e = Mt(a, e)),
            u)
          ) {
            case 0:
              n = pl(null, n, a, e, i);
              break e;
            case 1:
              n = Qf(null, n, a, e, i);
              break e;
            case 11:
              n = qf(null, n, a, e, i);
              break e;
            case 14:
              n = Kf(null, n, a, Mt(a.type, e), i);
              break e;
          }
          throw Error(s(306, a, ""));
        }
        return n;
      case 0:
        return (
          (a = n.type),
          (u = n.pendingProps),
          (u = n.elementType === a ? u : Mt(a, u)),
          pl(e, n, a, u, i)
        );
      case 1:
        return (
          (a = n.type),
          (u = n.pendingProps),
          (u = n.elementType === a ? u : Mt(a, u)),
          Qf(e, n, a, u, i)
        );
      case 3:
        e: {
          if ((Zf(n), e === null)) throw Error(s(387));
          ((a = n.pendingProps),
            (f = n.memoizedState),
            (u = f.element),
            hf(e, n),
            Os(n, a, null, i));
          var x = n.memoizedState;
          if (((a = x.element), f.isDehydrated))
            if (
              ((f = {
                element: a,
                isDehydrated: !1,
                cache: x.cache,
                pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                transitions: x.transitions,
              }),
              (n.updateQueue.baseState = f),
              (n.memoizedState = f),
              n.flags & 256)
            ) {
              ((u = Tr(Error(s(423)), n)), (n = Jf(e, n, a, i, u)));
              break e;
            } else if (a !== u) {
              ((u = Tr(Error(s(424)), n)), (n = Jf(e, n, a, i, u)));
              break e;
            } else
              for (
                mt = vn(n.stateNode.containerInfo.firstChild),
                  pt = n,
                  be = !0,
                  bt = null,
                  i = df(n, null, a, i),
                  n.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((wr(), a === u)) {
              n = sn(e, n, i);
              break e;
            }
            nt(e, n, a, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          gf(n),
          e === null && Wa(n),
          (a = n.type),
          (u = n.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (x = u.children),
          Va(a, u) ? (x = null) : f !== null && Va(a, f) && (n.flags |= 32),
          Xf(e, n),
          nt(e, n, x, i),
          n.child
        );
      case 6:
        return (e === null && Wa(n), null);
      case 13:
        return eh(e, n, i);
      case 4:
        return (
          Za(n, n.stateNode.containerInfo),
          (a = n.pendingProps),
          e === null ? (n.child = Sr(n, null, a, i)) : nt(e, n, a, i),
          n.child
        );
      case 11:
        return (
          (a = n.type),
          (u = n.pendingProps),
          (u = n.elementType === a ? u : Mt(a, u)),
          qf(e, n, a, u, i)
        );
      case 7:
        return (nt(e, n, n.pendingProps, i), n.child);
      case 8:
        return (nt(e, n, n.pendingProps.children, i), n.child);
      case 12:
        return (nt(e, n, n.pendingProps.children, i), n.child);
      case 10:
        e: {
          if (
            ((a = n.type._context),
            (u = n.pendingProps),
            (f = n.memoizedProps),
            (x = u.value),
            Se(Vs, a._currentValue),
            (a._currentValue = x),
            f !== null)
          )
            if (Rt(f.value, x)) {
              if (f.children === u.children && !ot.current) {
                n = sn(e, n, i);
                break e;
              }
            } else
              for (f = n.child, f !== null && (f.return = n); f !== null; ) {
                var S = f.dependencies;
                if (S !== null) {
                  x = f.child;
                  for (var k = S.firstContext; k !== null; ) {
                    if (k.context === a) {
                      if (f.tag === 1) {
                        ((k = rn(-1, i & -i)), (k.tag = 2));
                        var L = f.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var F = L.pending;
                          (F === null
                            ? (k.next = k)
                            : ((k.next = F.next), (F.next = k)),
                            (L.pending = k));
                        }
                      }
                      ((f.lanes |= i),
                        (k = f.alternate),
                        k !== null && (k.lanes |= i),
                        Ya(f.return, i, n),
                        (S.lanes |= i));
                      break;
                    }
                    k = k.next;
                  }
                } else if (f.tag === 10) x = f.type === n.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((x = f.return), x === null)) throw Error(s(341));
                  ((x.lanes |= i),
                    (S = x.alternate),
                    S !== null && (S.lanes |= i),
                    Ya(x, i, n),
                    (x = f.sibling));
                } else x = f.child;
                if (x !== null) x.return = f;
                else
                  for (x = f; x !== null; ) {
                    if (x === n) {
                      x = null;
                      break;
                    }
                    if (((f = x.sibling), f !== null)) {
                      ((f.return = x.return), (x = f));
                      break;
                    }
                    x = x.return;
                  }
                f = x;
              }
          (nt(e, n, u.children, i), (n = n.child));
        }
        return n;
      case 9:
        return (
          (u = n.type),
          (a = n.pendingProps.children),
          Cr(n, i),
          (u = wt(u)),
          (a = a(u)),
          (n.flags |= 1),
          nt(e, n, a, i),
          n.child
        );
      case 14:
        return (
          (a = n.type),
          (u = Mt(a, n.pendingProps)),
          (u = Mt(a.type, u)),
          Kf(e, n, a, u, i)
        );
      case 15:
        return Gf(e, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (a = n.type),
          (u = n.pendingProps),
          (u = n.elementType === a ? u : Mt(a, u)),
          Ks(e, n),
          (n.tag = 1),
          at(a) ? ((e = !0), Rs(n)) : (e = !1),
          Cr(n, i),
          Ff(n, a, u),
          dl(n, a, u, i),
          ml(null, n, a, !0, e, i)
        );
      case 19:
        return nh(e, n, i);
      case 22:
        return Yf(e, n, i);
    }
    throw Error(s(156, n.tag));
  };
  function Ph(e, n) {
    return id(e, n);
  }
  function E0(e, n, i, a) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ct(e, n, i, a) {
    return new E0(e, n, i, a);
  }
  function Vl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function T0(e) {
    if (typeof e == "function") return Vl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ve)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function Rn(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Ct(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function io(e, n, i, a, u, f) {
    var x = 2;
    if (((a = e), typeof e == "function")) Vl(e) && (x = 1);
    else if (typeof e == "string") x = 5;
    else
      e: switch (e) {
        case se:
          return Qn(i.children, u, f, n);
        case ee:
          ((x = 8), (u |= 8));
          break;
        case ce:
          return (
            (e = Ct(12, i, n, u | 2)),
            (e.elementType = ce),
            (e.lanes = f),
            e
          );
        case Ne:
          return (
            (e = Ct(13, i, n, u)),
            (e.elementType = Ne),
            (e.lanes = f),
            e
          );
        case ke:
          return (
            (e = Ct(19, i, n, u)),
            (e.elementType = ke),
            (e.lanes = f),
            e
          );
        case Me:
          return so(i, u, f, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                x = 10;
                break e;
              case pe:
                x = 9;
                break e;
              case ve:
                x = 11;
                break e;
              case me:
                x = 14;
                break e;
              case Ce:
                ((x = 16), (a = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = Ct(x, i, n, u)),
      (n.elementType = e),
      (n.type = a),
      (n.lanes = f),
      n
    );
  }
  function Qn(e, n, i, a) {
    return ((e = Ct(7, e, a, n)), (e.lanes = i), e);
  }
  function so(e, n, i, a) {
    return (
      (e = Ct(22, e, a, n)),
      (e.elementType = Me),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Il(e, n, i) {
    return ((e = Ct(6, e, null, n)), (e.lanes = i), e);
  }
  function _l(e, n, i) {
    return (
      (n = Ct(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function P0(e, n, i, a, u) {
    ((this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ca(0)),
      (this.expirationTimes = ca(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ca(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ol(e, n, i, a, u, f, x, S, k) {
    return (
      (e = new P0(e, n, i, S, k)),
      n === 1 ? ((n = 1), f === !0 && (n |= 8)) : (n = 0),
      (f = Ct(3, null, null, n)),
      (e.current = f),
      (f.stateNode = e),
      (f.memoizedState = {
        element: a,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Qa(f),
      e
    );
  }
  function j0(e, n, i) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ie,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: n,
      implementation: i,
    };
  }
  function jh(e) {
    if (!e) return wn;
    e = e._reactInternals;
    e: {
      if (Fn(e) !== e || e.tag !== 1) throw Error(s(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (at(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (at(i)) return ef(e, i, n);
    }
    return n;
  }
  function Nh(e, n, i, a, u, f, x, S, k) {
    return (
      (e = Ol(i, a, !0, e, u, f, x, S, k)),
      (e.context = jh(null)),
      (i = e.current),
      (a = rt()),
      (u = jn(i)),
      (f = rn(a, u)),
      (f.callback = n ?? null),
      Cn(i, f, u),
      (e.current.lanes = u),
      Jr(e, u, a),
      ct(e, a),
      e
    );
  }
  function oo(e, n, i, a) {
    var u = n.current,
      f = rt(),
      x = jn(u);
    return (
      (i = jh(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = rn(f, x)),
      (n.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (n.callback = a),
      (e = Cn(u, n, x)),
      e !== null && (Dt(e, u, x, f), _s(e, u, x)),
      x
    );
  }
  function ao(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rh(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Fl(e, n) {
    (Rh(e, n), (e = e.alternate) && Rh(e, n));
  }
  function N0() {
    return null;
  }
  var bh =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function zl(e) {
    this._internalRoot = e;
  }
  ((lo.prototype.render = zl.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      oo(e, n, null, null);
    }),
    (lo.prototype.unmount = zl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (Gn(function () {
            oo(null, e, null, null);
          }),
            (n[Zt] = null));
        }
      }));
  function lo(e) {
    this._internalRoot = e;
  }
  lo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = fd();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < mn.length && n !== 0 && n < mn[i].priority; i++);
      (mn.splice(i, 0, e), i === 0 && md(e));
    }
  };
  function Bl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function uo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Mh() {}
  function R0(e, n, i, a, u) {
    if (u) {
      if (typeof a == "function") {
        var f = a;
        a = function () {
          var L = ao(x);
          f.call(L);
        };
      }
      var x = Nh(n, a, e, 0, null, !1, !1, "", Mh);
      return (
        (e._reactRootContainer = x),
        (e[Zt] = x.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        Gn(),
        x
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof a == "function") {
      var S = a;
      a = function () {
        var L = ao(k);
        S.call(L);
      };
    }
    var k = Ol(e, 0, !1, null, null, !1, !1, "", Mh);
    return (
      (e._reactRootContainer = k),
      (e[Zt] = k.current),
      hi(e.nodeType === 8 ? e.parentNode : e),
      Gn(function () {
        oo(n, k, i, a);
      }),
      k
    );
  }
  function co(e, n, i, a, u) {
    var f = i._reactRootContainer;
    if (f) {
      var x = f;
      if (typeof u == "function") {
        var S = u;
        u = function () {
          var k = ao(x);
          S.call(k);
        };
      }
      oo(n, x, e, u);
    } else x = R0(i, n, e, u, a);
    return ao(x);
  }
  ((cd = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = Zr(n.pendingLanes);
          i !== 0 &&
            (da(n, i | 1),
            ct(n, _e()),
            (ue & 6) === 0 && ((Nr = _e() + 500), Sn()));
        }
        break;
      case 13:
        (Gn(function () {
          var a = nn(e, 1);
          if (a !== null) {
            var u = rt();
            Dt(a, e, 1, u);
          }
        }),
          Fl(e, 1));
    }
  }),
    (fa = function (e) {
      if (e.tag === 13) {
        var n = nn(e, 134217728);
        if (n !== null) {
          var i = rt();
          Dt(n, e, 134217728, i);
        }
        Fl(e, 134217728);
      }
    }),
    (dd = function (e) {
      if (e.tag === 13) {
        var n = jn(e),
          i = nn(e, n);
        if (i !== null) {
          var a = rt();
          Dt(i, e, n, a);
        }
        Fl(e, n);
      }
    }),
    (fd = function () {
      return ye;
    }),
    (hd = function (e, n) {
      var i = ye;
      try {
        return ((ye = e), n());
      } finally {
        ye = i;
      }
    }),
    (ia = function (e, n, i) {
      switch (n) {
        case "input":
          if ((Xo(e, i), (n = i.name), i.type === "radio" && n != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var a = i[n];
              if (a !== e && a.form === e.form) {
                var u = js(a);
                if (!u) throw Error(s(90));
                (_c(a), Xo(a, u));
              }
            }
          }
          break;
        case "textarea":
          Uc(e, i);
          break;
        case "select":
          ((n = i.value), n != null && sr(e, !!i.multiple, n, !1));
      }
    }),
    (Qc = Al),
    (Zc = Gn));
  var b0 = { usingClientEntryPoint: !1, Events: [gi, mr, js, Yc, Xc, Al] },
    bi = {
      findFiberByHostInstance: zn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    M0 = {
      bundleType: bi.bundleType,
      version: bi.version,
      rendererPackageName: bi.rendererPackageName,
      rendererConfig: bi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: $.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = nd(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: bi.findFiberByHostInstance || N0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fo.isDisabled && fo.supportsFiber)
      try {
        ((ls = fo.inject(M0)), (Bt = fo));
      } catch {}
  }
  return (
    (dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b0),
    (dt.createPortal = function (e, n) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Bl(n)) throw Error(s(200));
      return j0(e, n, null, i);
    }),
    (dt.createRoot = function (e, n) {
      if (!Bl(e)) throw Error(s(299));
      var i = !1,
        a = "",
        u = bh;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (n = Ol(e, 1, !1, null, null, i, !1, a, u)),
        (e[Zt] = n.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        new zl(n)
      );
    }),
    (dt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return ((e = nd(n)), (e = e === null ? null : e.stateNode), e);
    }),
    (dt.flushSync = function (e) {
      return Gn(e);
    }),
    (dt.hydrate = function (e, n, i) {
      if (!uo(n)) throw Error(s(200));
      return co(null, e, n, !0, i);
    }),
    (dt.hydrateRoot = function (e, n, i) {
      if (!Bl(e)) throw Error(s(405));
      var a = (i != null && i.hydratedSources) || null,
        u = !1,
        f = "",
        x = bh;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (u = !0),
          i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (x = i.onRecoverableError)),
        (n = Nh(n, null, e, 1, i ?? null, u, !1, f, x)),
        (e[Zt] = n.current),
        hi(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          ((i = a[e]),
            (u = i._getVersion),
            (u = u(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, u])
              : n.mutableSourceEagerHydrationData.push(i, u));
      return new lo(n);
    }),
    (dt.render = function (e, n, i) {
      if (!uo(n)) throw Error(s(200));
      return co(null, e, n, !1, i);
    }),
    (dt.unmountComponentAtNode = function (e) {
      if (!uo(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Gn(function () {
            co(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Zt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (dt.unstable_batchedUpdates = Al),
    (dt.unstable_renderSubtreeIntoContainer = function (e, n, i, a) {
      if (!uo(i)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return co(e, n, i, !1, a);
    }),
    (dt.version = "18.3.1-next-f1338f8080-20240426"),
    dt
  );
}
var Fh;
function B0() {
  if (Fh) return Wl.exports;
  Fh = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return (t(), (Wl.exports = z0()), Wl.exports);
}
var zh;
function U0() {
  if (zh) return ho;
  zh = 1;
  var t = B0();
  return ((ho.createRoot = t.createRoot), (ho.hydrateRoot = t.hydrateRoot), ho);
}
var $0 = U0();
/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Bh = "popstate";
function Uh(t) {
  return (
    typeof t == "object" &&
    t != null &&
    "pathname" in t &&
    "search" in t &&
    "hash" in t &&
    "state" in t &&
    "key" in t
  );
}
function W0(t = {}) {
  function r(o, l) {
    var g;
    let c = (g = l.state) == null ? void 0 : g.masked,
      { pathname: d, search: h, hash: p } = c || o.location;
    return ku(
      "",
      { pathname: d, search: h, hash: p },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
      c
        ? {
            pathname: o.location.pathname,
            search: o.location.search,
            hash: o.location.hash,
          }
        : void 0,
    );
  }
  function s(o, l) {
    return typeof l == "string" ? l : $i(l);
  }
  return q0(r, s, null, t);
}
function De(t, r) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
function Xt(t, r) {
  if (!t) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function H0() {
  return Math.random().toString(36).substring(2, 10);
}
function $h(t, r) {
  return {
    usr: t.state,
    key: t.key,
    idx: r,
    masked: t.unstable_mask
      ? { pathname: t.pathname, search: t.search, hash: t.hash }
      : void 0,
  };
}
function ku(t, r, s = null, o, l) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Br(r) : r),
    state: s,
    key: (r && r.key) || o || H0(),
    unstable_mask: l,
  };
}
function $i({ pathname: t = "/", search: r = "", hash: s = "" }) {
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    s && s !== "#" && (t += s.charAt(0) === "#" ? s : "#" + s),
    t
  );
}
function Br(t) {
  let r = {};
  if (t) {
    let s = t.indexOf("#");
    s >= 0 && ((r.hash = t.substring(s)), (t = t.substring(0, s)));
    let o = t.indexOf("?");
    (o >= 0 && ((r.search = t.substring(o)), (t = t.substring(0, o))),
      t && (r.pathname = t));
  }
  return r;
}
function q0(t, r, s, o = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = o,
    d = l.history,
    h = "POP",
    p = null,
    g = y();
  g == null && ((g = 0), d.replaceState({ ...d.state, idx: g }, ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function v() {
    h = "POP";
    let j = y(),
      A = j == null ? null : j - g;
    ((g = j), p && p({ action: h, location: M.location, delta: A }));
  }
  function w(j, A) {
    h = "PUSH";
    let V = Uh(j) ? j : ku(M.location, j, A);
    g = y() + 1;
    let D = $h(V, g),
      $ = M.createHref(V.unstable_mask || V);
    try {
      d.pushState(D, "", $);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError") throw W;
      l.location.assign($);
    }
    c && p && p({ action: h, location: M.location, delta: 1 });
  }
  function C(j, A) {
    h = "REPLACE";
    let V = Uh(j) ? j : ku(M.location, j, A);
    g = y();
    let D = $h(V, g),
      $ = M.createHref(V.unstable_mask || V);
    (d.replaceState(D, "", $),
      c && p && p({ action: h, location: M.location, delta: 0 }));
  }
  function N(j) {
    return K0(j);
  }
  let M = {
    get action() {
      return h;
    },
    get location() {
      return t(l, d);
    },
    listen(j) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Bh, v),
        (p = j),
        () => {
          (l.removeEventListener(Bh, v), (p = null));
        }
      );
    },
    createHref(j) {
      return r(l, j);
    },
    createURL: N,
    encodeLocation(j) {
      let A = N(j);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: w,
    replace: C,
    go(j) {
      return d.go(j);
    },
  };
  return M;
}
function K0(t, r = !1) {
  let s = "http://localhost";
  (typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    De(s, "No window.location.(origin|href) available to create URL"));
  let o = typeof t == "string" ? t : $i(t);
  return (
    (o = o.replace(/ $/, "%20")),
    !r && o.startsWith("//") && (o = s + o),
    new URL(o, s)
  );
}
function wm(t, r, s = "/") {
  return G0(t, r, s, !1);
}
function G0(t, r, s, o) {
  let l = typeof r == "string" ? Br(r) : r,
    c = cn(l.pathname || "/", s);
  if (c == null) return null;
  let d = Sm(t);
  Y0(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let g = ox(c);
    h = ix(d[p], g, o);
  }
  return h;
}
function Sm(t, r = [], s = [], o = "", l = !1) {
  let c = (d, h, p = l, g) => {
    let y = {
      relativePath: g === void 0 ? d.path || "" : g,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(o) && p) return;
      (De(
        y.relativePath.startsWith(o),
        `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(o.length)));
    }
    let v = Gt([o, y.relativePath]),
      w = s.concat(y);
    (d.children &&
      d.children.length > 0 &&
      (De(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`,
      ),
      Sm(d.children, r, w, v, p)),
      !(d.path == null && !d.index) &&
        r.push({ path: v, score: nx(v, d.index), routesMeta: w }));
  };
  return (
    t.forEach((d, h) => {
      var p;
      if (d.path === "" || !((p = d.path) != null && p.includes("?"))) c(d, h);
      else for (let g of km(d.path)) c(d, h, !0, g);
    }),
    r
  );
}
function km(t) {
  let r = t.split("/");
  if (r.length === 0) return [];
  let [s, ...o] = r,
    l = s.endsWith("?"),
    c = s.replace(/\?$/, "");
  if (o.length === 0) return l ? [c, ""] : [c];
  let d = km(o.join("/")),
    h = [];
  return (
    h.push(...d.map((p) => (p === "" ? c : [c, p].join("/")))),
    l && h.push(...d),
    h.map((p) => (t.startsWith("/") && p === "" ? "/" : p))
  );
}
function Y0(t) {
  t.sort((r, s) =>
    r.score !== s.score
      ? s.score - r.score
      : rx(
          r.routesMeta.map((o) => o.childrenIndex),
          s.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var X0 = /^:[\w-]+$/,
  Q0 = 3,
  Z0 = 2,
  J0 = 1,
  ex = 10,
  tx = -2,
  Wh = (t) => t === "*";
function nx(t, r) {
  let s = t.split("/"),
    o = s.length;
  return (
    s.some(Wh) && (o += tx),
    r && (o += Z0),
    s
      .filter((l) => !Wh(l))
      .reduce((l, c) => l + (X0.test(c) ? Q0 : c === "" ? J0 : ex), o)
  );
}
function rx(t, r) {
  return t.length === r.length && t.slice(0, -1).every((o, l) => o === r[l])
    ? t[t.length - 1] - r[r.length - 1]
    : 0;
}
function ix(t, r, s = !1) {
  let { routesMeta: o } = t,
    l = {},
    c = "/",
    d = [];
  for (let h = 0; h < o.length; ++h) {
    let p = o[h],
      g = h === o.length - 1,
      y = c === "/" ? r : r.slice(c.length) || "/",
      v = Ao(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
        y,
      ),
      w = p.route;
    if (
      (!v &&
        g &&
        s &&
        !o[o.length - 1].route.index &&
        (v = Ao(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          y,
        )),
      !v)
    )
      return null;
    (Object.assign(l, v.params),
      d.push({
        params: l,
        pathname: Gt([c, v.pathname]),
        pathnameBase: cx(Gt([c, v.pathnameBase])),
        route: w,
      }),
      v.pathnameBase !== "/" && (c = Gt([c, v.pathnameBase])));
  }
  return d;
}
function Ao(t, r) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [s, o] = sx(t.path, t.caseSensitive, t.end),
    l = r.match(s);
  if (!l) return null;
  let c = l[0],
    d = c.replace(/(.)\/+$/, "$1"),
    h = l.slice(1);
  return {
    params: o.reduce((g, { paramName: y, isOptional: v }, w) => {
      if (y === "*") {
        let N = h[w] || "";
        d = c.slice(0, c.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const C = h[w];
      return (
        v && !C ? (g[y] = void 0) : (g[y] = (C || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: t,
  };
}
function sx(t, r = !1, s = !0) {
  Xt(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`,
  );
  let o = [],
    l =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (d, h, p, g, y) => {
          if ((o.push({ paramName: h, isOptional: p != null }), p)) {
            let v = y.charAt(g + d.length);
            return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    t.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (l += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (l += "\\/*$")
        : t !== "" && t !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, r ? void 0 : "i"), o]
  );
}
function ox(t) {
  try {
    return t
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Xt(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      t
    );
  }
}
function cn(t, r) {
  if (r === "/") return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase())) return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length,
    o = t.charAt(s);
  return o && o !== "/" ? null : t.slice(s) || "/";
}
var ax = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function lx(t, r = "/") {
  let {
      pathname: s,
      search: o = "",
      hash: l = "",
    } = typeof t == "string" ? Br(t) : t,
    c;
  return (
    s
      ? ((s = s.replace(/\/\/+/g, "/")),
        s.startsWith("/") ? (c = Hh(s.substring(1), "/")) : (c = Hh(s, r)))
      : (c = r),
    { pathname: c, search: dx(o), hash: fx(l) }
  );
}
function Hh(t, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((l) => {
      l === ".." ? s.length > 1 && s.pop() : l !== "." && s.push(l);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Kl(t, r, s, o) {
  return `Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ux(t) {
  return t.filter(
    (r, s) => s === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Cm(t) {
  let r = ux(t);
  return r.map((s, o) => (o === r.length - 1 ? s.pathname : s.pathnameBase));
}
function ec(t, r, s, o = !1) {
  let l;
  typeof t == "string"
    ? (l = Br(t))
    : ((l = { ...t }),
      De(
        !l.pathname || !l.pathname.includes("?"),
        Kl("?", "pathname", "search", l),
      ),
      De(
        !l.pathname || !l.pathname.includes("#"),
        Kl("#", "pathname", "hash", l),
      ),
      De(!l.search || !l.search.includes("#"), Kl("#", "search", "hash", l)));
  let c = t === "" || l.pathname === "",
    d = c ? "/" : l.pathname,
    h;
  if (d == null) h = s;
  else {
    let v = r.length - 1;
    if (!o && d.startsWith("..")) {
      let w = d.split("/");
      for (; w[0] === ".."; ) (w.shift(), (v -= 1));
      l.pathname = w.join("/");
    }
    h = v >= 0 ? r[v] : "/";
  }
  let p = lx(l, h),
    g = d && d !== "/" && d.endsWith("/"),
    y = (c || d === ".") && s.endsWith("/");
  return (!p.pathname.endsWith("/") && (g || y) && (p.pathname += "/"), p);
}
var Gt = (t) => t.join("/").replace(/\/\/+/g, "/"),
  cx = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  dx = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  fx = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t),
  hx = class {
    constructor(t, r, s, o = !1) {
      ((this.status = t),
        (this.statusText = r || ""),
        (this.internal = o),
        s instanceof Error
          ? ((this.data = s.toString()), (this.error = s))
          : (this.data = s));
    }
  };
function px(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
function mx(t) {
  return (
    t
      .map((r) => r.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Em =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Tm(t, r) {
  let s = t;
  if (typeof s != "string" || !ax.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let o = s,
    l = !1;
  if (Em)
    try {
      let c = new URL(window.location.href),
        d = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s),
        h = cn(d.pathname, r);
      d.origin === c.origin && h != null
        ? (s = h + d.search + d.hash)
        : (l = !0);
    } catch {
      Xt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: o, isExternal: l, to: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Pm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Pm);
var gx = ["GET", ...Pm];
new Set(gx);
var Ur = T.createContext(null);
Ur.displayName = "DataRouter";
var $o = T.createContext(null);
$o.displayName = "DataRouterState";
var jm = T.createContext(!1);
function yx() {
  return T.useContext(jm);
}
var Nm = T.createContext({ isTransitioning: !1 });
Nm.displayName = "ViewTransition";
var vx = T.createContext(new Map());
vx.displayName = "Fetchers";
var xx = T.createContext(null);
xx.displayName = "Await";
var jt = T.createContext(null);
jt.displayName = "Navigation";
var Gi = T.createContext(null);
Gi.displayName = "Location";
var dn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
dn.displayName = "Route";
var tc = T.createContext(null);
tc.displayName = "RouteError";
var Rm = "REACT_ROUTER_ERROR",
  wx = "REDIRECT",
  Sx = "ROUTE_ERROR_RESPONSE";
function kx(t) {
  if (t.startsWith(`${Rm}:${wx}:{`))
    try {
      let r = JSON.parse(t.slice(28));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string" &&
        typeof r.location == "string" &&
        typeof r.reloadDocument == "boolean" &&
        typeof r.replace == "boolean"
      )
        return r;
    } catch {}
}
function Cx(t) {
  if (t.startsWith(`${Rm}:${Sx}:{`))
    try {
      let r = JSON.parse(t.slice(40));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string"
      )
        return new hx(r.status, r.statusText, r.data);
    } catch {}
}
function Ex(t, { relative: r } = {}) {
  De(
    Yi(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: s, navigator: o } = T.useContext(jt),
    { hash: l, pathname: c, search: d } = Xi(t, { relative: r }),
    h = c;
  return (
    s !== "/" && (h = c === "/" ? s : Gt([s, c])),
    o.createHref({ pathname: h, search: d, hash: l })
  );
}
function Yi() {
  return T.useContext(Gi) != null;
}
function zt() {
  return (
    De(
      Yi(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(Gi).location
  );
}
var bm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mm(t) {
  T.useContext(jt).static || T.useLayoutEffect(t);
}
function Tx() {
  let { isDataRoute: t } = T.useContext(dn);
  return t ? Ox() : Px();
}
function Px() {
  De(
    Yi(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let t = T.useContext(Ur),
    { basename: r, navigator: s } = T.useContext(jt),
    { matches: o } = T.useContext(dn),
    { pathname: l } = zt(),
    c = JSON.stringify(Cm(o)),
    d = T.useRef(!1);
  return (
    Mm(() => {
      d.current = !0;
    }),
    T.useCallback(
      (p, g = {}) => {
        if ((Xt(d.current, bm), !d.current)) return;
        if (typeof p == "number") {
          s.go(p);
          return;
        }
        let y = ec(p, JSON.parse(c), l, g.relative === "path");
        (t == null &&
          r !== "/" &&
          (y.pathname = y.pathname === "/" ? r : Gt([r, y.pathname])),
          (g.replace ? s.replace : s.push)(y, g.state, g));
      },
      [r, s, c, l, t],
    )
  );
}
T.createContext(null);
function Xi(t, { relative: r } = {}) {
  let { matches: s } = T.useContext(dn),
    { pathname: o } = zt(),
    l = JSON.stringify(Cm(s));
  return T.useMemo(() => ec(t, JSON.parse(l), o, r === "path"), [t, l, o, r]);
}
function jx(t, r) {
  return Am(t, r);
}
function Am(t, r, s) {
  var j;
  De(
    Yi(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: o } = T.useContext(jt),
    { matches: l } = T.useContext(dn),
    c = l[l.length - 1],
    d = c ? c.params : {},
    h = c ? c.pathname : "/",
    p = c ? c.pathnameBase : "/",
    g = c && c.route;
  {
    let A = (g && g.path) || "";
    Dm(
      h,
      !g || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`,
    );
  }
  let y = zt(),
    v;
  if (r) {
    let A = typeof r == "string" ? Br(r) : r;
    (De(
      p === "/" || ((j = A.pathname) == null ? void 0 : j.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${A.pathname}" was given in the \`location\` prop.`,
    ),
      (v = A));
  } else v = y;
  let w = v.pathname || "/",
    C = w;
  if (p !== "/") {
    let A = p.replace(/^\//, "").split("/");
    C = "/" + w.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let N = wm(t, { pathname: C });
  (Xt(
    g || N != null,
    `No routes matched location "${v.pathname}${v.search}${v.hash}" `,
  ),
    Xt(
      N == null ||
        N[N.length - 1].route.element !== void 0 ||
        N[N.length - 1].route.Component !== void 0 ||
        N[N.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let M = Ax(
    N &&
      N.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, d, A.params),
          pathname: Gt([
            p,
            o.encodeLocation
              ? o.encodeLocation(
                  A.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? p
              : Gt([
                  p,
                  o.encodeLocation
                    ? o.encodeLocation(
                        A.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : A.pathnameBase,
                ]),
        }),
      ),
    l,
    s,
  );
  return r && M
    ? T.createElement(
        Gi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...v,
            },
            navigationType: "POP",
          },
        },
        M,
      )
    : M;
}
function Nx() {
  let t = _x(),
    r = px(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    s = t instanceof Error ? t.stack : null,
    o = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: o },
    c = { padding: "2px 4px", backgroundColor: o },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", t),
    (d = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, r),
      s ? T.createElement("pre", { style: l }, s) : null,
      d,
    )
  );
}
var Rx = T.createElement(Nx, null),
  Lm = class extends T.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location ||
        (r.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation,
          };
    }
    componentDidCatch(t, r) {
      this.props.onError
        ? this.props.onError(t, r)
        : console.error(
            "React Router caught the following error during render",
            t,
          );
    }
    render() {
      let t = this.state.error;
      if (
        this.context &&
        typeof t == "object" &&
        t &&
        "digest" in t &&
        typeof t.digest == "string"
      ) {
        const s = Cx(t.digest);
        s && (t = s);
      }
      let r =
        t !== void 0
          ? T.createElement(
              dn.Provider,
              { value: this.props.routeContext },
              T.createElement(tc.Provider, {
                value: t,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? T.createElement(bx, { error: t }, r) : r;
    }
  };
Lm.contextType = jm;
var Gl = new WeakMap();
function bx({ children: t, error: r }) {
  let { basename: s } = T.useContext(jt);
  if (
    typeof r == "object" &&
    r &&
    "digest" in r &&
    typeof r.digest == "string"
  ) {
    let o = kx(r.digest);
    if (o) {
      let l = Gl.get(r);
      if (l) throw l;
      let c = Tm(o.location, s);
      if (Em && !Gl.get(r))
        if (c.isExternal || o.reloadDocument)
          window.location.href = c.absoluteURL || c.to;
        else {
          const d = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(c.to, {
              replace: o.replace,
            }),
          );
          throw (Gl.set(r, d), d);
        }
      return T.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${c.absoluteURL || c.to}`,
      });
    }
  }
  return t;
}
function Mx({ routeContext: t, match: r, children: s }) {
  let o = T.useContext(Ur);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    T.createElement(dn.Provider, { value: t }, s)
  );
}
function Ax(t, r = [], s) {
  let o = s == null ? void 0 : s.state;
  if (t == null) {
    if (!o) return null;
    if (o.errors) t = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      t = o.matches;
    else return null;
  }
  let l = t,
    c = o == null ? void 0 : o.errors;
  if (c != null) {
    let y = l.findIndex(
      (v) => v.route.id && (c == null ? void 0 : c[v.route.id]) !== void 0,
    );
    (De(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`,
    ),
      (l = l.slice(0, Math.min(l.length, y + 1))));
  }
  let d = !1,
    h = -1;
  if (s && o) {
    d = o.renderFallback;
    for (let y = 0; y < l.length; y++) {
      let v = l[y];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = y),
        v.route.id)
      ) {
        let { loaderData: w, errors: C } = o,
          N =
            v.route.loader &&
            !w.hasOwnProperty(v.route.id) &&
            (!C || C[v.route.id] === void 0);
        if (v.route.lazy || N) {
          (s.isStatic && (d = !0),
            h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]));
          break;
        }
      }
    }
  }
  let p = s == null ? void 0 : s.onError,
    g =
      o && p
        ? (y, v) => {
            var w, C;
            p(y, {
              location: o.location,
              params:
                ((C = (w = o.matches) == null ? void 0 : w[0]) == null
                  ? void 0
                  : C.params) ?? {},
              unstable_pattern: mx(o.matches),
              errorInfo: v,
            });
          }
        : void 0;
  return l.reduceRight((y, v, w) => {
    let C,
      N = !1,
      M = null,
      j = null;
    o &&
      ((C = c && v.route.id ? c[v.route.id] : void 0),
      (M = v.route.errorElement || Rx),
      d &&
        (h < 0 && w === 0
          ? (Dm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (N = !0),
            (j = null))
          : h === w &&
            ((N = !0), (j = v.route.hydrateFallbackElement || null))));
    let A = r.concat(l.slice(0, w + 1)),
      V = () => {
        let D;
        return (
          C
            ? (D = M)
            : N
              ? (D = j)
              : v.route.Component
                ? (D = T.createElement(v.route.Component, null))
                : v.route.element
                  ? (D = v.route.element)
                  : (D = y),
          T.createElement(Mx, {
            match: v,
            routeContext: { outlet: y, matches: A, isDataRoute: o != null },
            children: D,
          })
        );
      };
    return o && (v.route.ErrorBoundary || v.route.errorElement || w === 0)
      ? T.createElement(Lm, {
          location: o.location,
          revalidation: o.revalidation,
          component: M,
          error: C,
          children: V(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
          onError: g,
        })
      : V();
  }, null);
}
function nc(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lx(t) {
  let r = T.useContext(Ur);
  return (De(r, nc(t)), r);
}
function Dx(t) {
  let r = T.useContext($o);
  return (De(r, nc(t)), r);
}
function Vx(t) {
  let r = T.useContext(dn);
  return (De(r, nc(t)), r);
}
function rc(t) {
  let r = Vx(t),
    s = r.matches[r.matches.length - 1];
  return (
    De(
      s.route.id,
      `${t} can only be used on routes that contain a unique "id"`,
    ),
    s.route.id
  );
}
function Ix() {
  return rc("useRouteId");
}
function _x() {
  var o;
  let t = T.useContext(tc),
    r = Dx("useRouteError"),
    s = rc("useRouteError");
  return t !== void 0 ? t : (o = r.errors) == null ? void 0 : o[s];
}
function Ox() {
  let { router: t } = Lx("useNavigate"),
    r = rc("useNavigate"),
    s = T.useRef(!1);
  return (
    Mm(() => {
      s.current = !0;
    }),
    T.useCallback(
      async (l, c = {}) => {
        (Xt(s.current, bm),
          s.current &&
            (typeof l == "number"
              ? await t.navigate(l)
              : await t.navigate(l, { fromRouteId: r, ...c })));
      },
      [t, r],
    )
  );
}
var qh = {};
function Dm(t, r, s) {
  !r && !qh[t] && ((qh[t] = !0), Xt(!1, s));
}
T.memo(Fx);
function Fx({ routes: t, future: r, state: s, isStatic: o, onError: l }) {
  return Am(t, void 0, { state: s, isStatic: o, onError: l });
}
function Ar(t) {
  De(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function zx({
  basename: t = "/",
  children: r = null,
  location: s,
  navigationType: o = "POP",
  navigator: l,
  static: c = !1,
  unstable_useTransitions: d,
}) {
  De(
    !Yi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let h = t.replace(/^\/*/, "/"),
    p = T.useMemo(
      () => ({
        basename: h,
        navigator: l,
        static: c,
        unstable_useTransitions: d,
        future: {},
      }),
      [h, l, c, d],
    );
  typeof s == "string" && (s = Br(s));
  let {
      pathname: g = "/",
      search: y = "",
      hash: v = "",
      state: w = null,
      key: C = "default",
      unstable_mask: N,
    } = s,
    M = T.useMemo(() => {
      let j = cn(g, h);
      return j == null
        ? null
        : {
            location: {
              pathname: j,
              search: y,
              hash: v,
              state: w,
              key: C,
              unstable_mask: N,
            },
            navigationType: o,
          };
    }, [h, g, y, v, w, C, o, N]);
  return (
    Xt(
      M != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    M == null
      ? null
      : T.createElement(
          jt.Provider,
          { value: p },
          T.createElement(Gi.Provider, { children: r, value: M }),
        )
  );
}
function Bx({ children: t, location: r }) {
  return jx(Cu(t), r);
}
function Cu(t, r = []) {
  let s = [];
  return (
    T.Children.forEach(t, (o, l) => {
      if (!T.isValidElement(o)) return;
      let c = [...r, l];
      if (o.type === T.Fragment) {
        s.push.apply(s, Cu(o.props.children, c));
        return;
      }
      (De(
        o.type === Ar,
        `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        De(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes.",
        ));
      let d = {
        id: o.props.id || c.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        middleware: o.props.middleware,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      (o.props.children && (d.children = Cu(o.props.children, c)), s.push(d));
    }),
    s
  );
}
var ko = "get",
  Co = "application/x-www-form-urlencoded";
function Wo(t) {
  return typeof HTMLElement < "u" && t instanceof HTMLElement;
}
function Ux(t) {
  return Wo(t) && t.tagName.toLowerCase() === "button";
}
function $x(t) {
  return Wo(t) && t.tagName.toLowerCase() === "form";
}
function Wx(t) {
  return Wo(t) && t.tagName.toLowerCase() === "input";
}
function Hx(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function qx(t, r) {
  return t.button === 0 && (!r || r === "_self") && !Hx(t);
}
var po = null;
function Kx() {
  if (po === null)
    try {
      (new FormData(document.createElement("form"), 0), (po = !1));
    } catch {
      po = !0;
    }
  return po;
}
var Gx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Yl(t) {
  return t != null && !Gx.has(t)
    ? (Xt(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Co}"`,
      ),
      null)
    : t;
}
function Yx(t, r) {
  let s, o, l, c, d;
  if ($x(t)) {
    let h = t.getAttribute("action");
    ((o = h ? cn(h, r) : null),
      (s = t.getAttribute("method") || ko),
      (l = Yl(t.getAttribute("enctype")) || Co),
      (c = new FormData(t)));
  } else if (Ux(t) || (Wx(t) && (t.type === "submit" || t.type === "image"))) {
    let h = t.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = t.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((o = p ? cn(p, r) : null),
      (s = t.getAttribute("formmethod") || h.getAttribute("method") || ko),
      (l =
        Yl(t.getAttribute("formenctype")) ||
        Yl(h.getAttribute("enctype")) ||
        Co),
      (c = new FormData(h, t)),
      !Kx())
    ) {
      let { name: g, type: y, value: v } = t;
      if (y === "image") {
        let w = g ? `${g}.` : "";
        (c.append(`${w}x`, "0"), c.append(`${w}y`, "0"));
      } else g && c.append(g, v);
    }
  } else {
    if (Wo(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((s = ko), (o = null), (l = Co), (d = t));
  }
  return (
    c && l === "text/plain" && ((d = c), (c = void 0)),
    { action: o, method: s.toLowerCase(), encType: l, formData: c, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ic(t, r) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
function Vm(t, r, s, o) {
  let l =
    typeof t == "string"
      ? new URL(
          t,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : t;
  return (
    s
      ? l.pathname.endsWith("/")
        ? (l.pathname = `${l.pathname}_.${o}`)
        : (l.pathname = `${l.pathname}.${o}`)
      : l.pathname === "/"
        ? (l.pathname = `_root.${o}`)
        : r && cn(l.pathname, r) === "/"
          ? (l.pathname = `${r.replace(/\/$/, "")}/_root.${o}`)
          : (l.pathname = `${l.pathname.replace(/\/$/, "")}.${o}`),
    l
  );
}
async function Xx(t, r) {
  if (t.id in r) return r[t.id];
  try {
    let s = await import(t.module);
    return ((r[t.id] = s), s);
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`,
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qx(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === "preload" &&
        typeof t.imageSrcSet == "string" &&
        typeof t.imageSizes == "string"
      : typeof t.rel == "string" && typeof t.href == "string";
}
async function Zx(t, r, s) {
  let o = await Promise.all(
    t.map(async (l) => {
      let c = r.routes[l.route.id];
      if (c) {
        let d = await Xx(c, s);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return n1(
    o
      .flat(1)
      .filter(Qx)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" },
      ),
  );
}
function Kh(t, r, s, o, l, c) {
  let d = (p, g) => (s[g] ? p.route.id !== s[g].route.id : !0),
    h = (p, g) => {
      var y;
      return (
        s[g].pathname !== p.pathname ||
        (((y = s[g].route.path) == null ? void 0 : y.endsWith("*")) &&
          s[g].params["*"] !== p.params["*"])
      );
    };
  return c === "assets"
    ? r.filter((p, g) => d(p, g) || h(p, g))
    : c === "data"
      ? r.filter((p, g) => {
          var v;
          let y = o.routes[p.route.id];
          if (!y || !y.hasLoader) return !1;
          if (d(p, g) || h(p, g)) return !0;
          if (p.route.shouldRevalidate) {
            let w = p.route.shouldRevalidate({
              currentUrl: new URL(
                l.pathname + l.search + l.hash,
                window.origin,
              ),
              currentParams: ((v = s[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(t, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof w == "boolean") return w;
          }
          return !0;
        })
      : [];
}
function Jx(t, r, { includeHydrateFallback: s } = {}) {
  return e1(
    t
      .map((o) => {
        let l = r.routes[o.route.id];
        if (!l) return [];
        let c = [l.module];
        return (
          l.clientActionModule && (c = c.concat(l.clientActionModule)),
          l.clientLoaderModule && (c = c.concat(l.clientLoaderModule)),
          s &&
            l.hydrateFallbackModule &&
            (c = c.concat(l.hydrateFallbackModule)),
          l.imports && (c = c.concat(l.imports)),
          c
        );
      })
      .flat(1),
  );
}
function e1(t) {
  return [...new Set(t)];
}
function t1(t) {
  let r = {},
    s = Object.keys(t).sort();
  for (let o of s) r[o] = t[o];
  return r;
}
function n1(t, r) {
  let s = new Set();
  return (
    new Set(r),
    t.reduce((o, l) => {
      let c = JSON.stringify(t1(l));
      return (s.has(c) || (s.add(c), o.push({ key: c, link: l })), o);
    }, [])
  );
}
function sc() {
  let t = T.useContext(Ur);
  return (
    ic(
      t,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    t
  );
}
function r1() {
  let t = T.useContext($o);
  return (
    ic(
      t,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    t
  );
}
var oc = T.createContext(void 0);
oc.displayName = "FrameworkContext";
function ac() {
  let t = T.useContext(oc);
  return (
    ic(t, "You must render this element inside a <HydratedRouter> element"),
    t
  );
}
function i1(t, r) {
  let s = T.useContext(oc),
    [o, l] = T.useState(!1),
    [c, d] = T.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: g,
      onMouseLeave: y,
      onTouchStart: v,
    } = r,
    w = T.useRef(null);
  (T.useEffect(() => {
    if ((t === "render" && d(!0), t === "viewport")) {
      let M = (A) => {
          A.forEach((V) => {
            d(V.isIntersecting);
          });
        },
        j = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        w.current && j.observe(w.current),
        () => {
          j.disconnect();
        }
      );
    }
  }, [t]),
    T.useEffect(() => {
      if (o) {
        let M = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [o]));
  let C = () => {
      l(!0);
    },
    N = () => {
      (l(!1), d(!1));
    };
  return s
    ? t !== "intent"
      ? [c, w, {}]
      : [
          c,
          w,
          {
            onFocus: Ai(h, C),
            onBlur: Ai(p, N),
            onMouseEnter: Ai(g, C),
            onMouseLeave: Ai(y, N),
            onTouchStart: Ai(v, C),
          },
        ]
    : [!1, w, {}];
}
function Ai(t, r) {
  return (s) => {
    (t && t(s), s.defaultPrevented || r(s));
  };
}
function s1({ page: t, ...r }) {
  let s = yx(),
    { router: o } = sc(),
    l = T.useMemo(() => wm(o.routes, t, o.basename), [o.routes, t, o.basename]);
  return l
    ? s
      ? T.createElement(a1, { page: t, matches: l, ...r })
      : T.createElement(l1, { page: t, matches: l, ...r })
    : null;
}
function o1(t) {
  let { manifest: r, routeModules: s } = ac(),
    [o, l] = T.useState([]);
  return (
    T.useEffect(() => {
      let c = !1;
      return (
        Zx(t, r, s).then((d) => {
          c || l(d);
        }),
        () => {
          c = !0;
        }
      );
    }, [t, r, s]),
    o
  );
}
function a1({ page: t, matches: r, ...s }) {
  let o = zt(),
    { future: l } = ac(),
    { basename: c } = sc(),
    d = T.useMemo(() => {
      if (t === o.pathname + o.search + o.hash) return [];
      let h = Vm(t, c, l.unstable_trailingSlashAwareDataRequests, "rsc"),
        p = !1,
        g = [];
      for (let y of r)
        typeof y.route.shouldRevalidate == "function"
          ? (p = !0)
          : g.push(y.route.id);
      return (
        p && g.length > 0 && h.searchParams.set("_routes", g.join(",")),
        [h.pathname + h.search]
      );
    }, [c, l.unstable_trailingSlashAwareDataRequests, t, o, r]);
  return T.createElement(
    T.Fragment,
    null,
    d.map((h) =>
      T.createElement("link", {
        key: h,
        rel: "prefetch",
        as: "fetch",
        href: h,
        ...s,
      }),
    ),
  );
}
function l1({ page: t, matches: r, ...s }) {
  let o = zt(),
    { future: l, manifest: c, routeModules: d } = ac(),
    { basename: h } = sc(),
    { loaderData: p, matches: g } = r1(),
    y = T.useMemo(() => Kh(t, r, g, c, o, "data"), [t, r, g, c, o]),
    v = T.useMemo(() => Kh(t, r, g, c, o, "assets"), [t, r, g, c, o]),
    w = T.useMemo(() => {
      if (t === o.pathname + o.search + o.hash) return [];
      let M = new Set(),
        j = !1;
      if (
        (r.forEach((V) => {
          var $;
          let D = c.routes[V.route.id];
          !D ||
            !D.hasLoader ||
            ((!y.some((W) => W.route.id === V.route.id) &&
              V.route.id in p &&
              ($ = d[V.route.id]) != null &&
              $.shouldRevalidate) ||
            D.hasClientLoader
              ? (j = !0)
              : M.add(V.route.id));
        }),
        M.size === 0)
      )
        return [];
      let A = Vm(t, h, l.unstable_trailingSlashAwareDataRequests, "data");
      return (
        j &&
          M.size > 0 &&
          A.searchParams.set(
            "_routes",
            r
              .filter((V) => M.has(V.route.id))
              .map((V) => V.route.id)
              .join(","),
          ),
        [A.pathname + A.search]
      );
    }, [h, l.unstable_trailingSlashAwareDataRequests, p, o, c, y, r, t, d]),
    C = T.useMemo(() => Jx(v, c), [v, c]),
    N = o1(v);
  return T.createElement(
    T.Fragment,
    null,
    w.map((M) =>
      T.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...s,
      }),
    ),
    C.map((M) =>
      T.createElement("link", { key: M, rel: "modulepreload", href: M, ...s }),
    ),
    N.map(({ key: M, link: j }) =>
      T.createElement("link", {
        key: M,
        nonce: s.nonce,
        ...j,
        crossOrigin: j.crossOrigin ?? s.crossOrigin,
      }),
    ),
  );
}
function u1(...t) {
  return (r) => {
    t.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var c1 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  c1 && (window.__reactRouterVersion = "7.14.0");
} catch {}
function d1({
  basename: t,
  children: r,
  unstable_useTransitions: s,
  window: o,
}) {
  let l = T.useRef();
  l.current == null && (l.current = W0({ window: o, v5Compat: !0 }));
  let c = l.current,
    [d, h] = T.useState({ action: c.action, location: c.location }),
    p = T.useCallback(
      (g) => {
        s === !1 ? h(g) : T.startTransition(() => h(g));
      },
      [s],
    );
  return (
    T.useLayoutEffect(() => c.listen(p), [c, p]),
    T.createElement(zx, {
      basename: t,
      children: r,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      unstable_useTransitions: s,
    })
  );
}
var Im = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ke = T.forwardRef(function (
    {
      onClick: r,
      discover: s = "render",
      prefetch: o = "none",
      relative: l,
      reloadDocument: c,
      replace: d,
      unstable_mask: h,
      state: p,
      target: g,
      to: y,
      preventScrollReset: v,
      viewTransition: w,
      unstable_defaultShouldRevalidate: C,
      ...N
    },
    M,
  ) {
    let {
        basename: j,
        navigator: A,
        unstable_useTransitions: V,
      } = T.useContext(jt),
      D = typeof y == "string" && Im.test(y),
      $ = Tm(y, j);
    y = $.to;
    let W = Ex(y, { relative: l }),
      ie = zt(),
      se = null;
    if (h) {
      let me = ec(
        h,
        [],
        ie.unstable_mask ? ie.unstable_mask.pathname : "/",
        !0,
      );
      (j !== "/" &&
        (me.pathname = me.pathname === "/" ? j : Gt([j, me.pathname])),
        (se = A.createHref(me)));
    }
    let [ee, ce, J] = i1(o, N),
      pe = m1(y, {
        replace: d,
        unstable_mask: h,
        state: p,
        target: g,
        preventScrollReset: v,
        relative: l,
        viewTransition: w,
        unstable_defaultShouldRevalidate: C,
        unstable_useTransitions: V,
      });
    function ve(me) {
      (r && r(me), me.defaultPrevented || pe(me));
    }
    let Ne = !($.isExternal || c),
      ke = T.createElement("a", {
        ...N,
        ...J,
        href: (Ne ? se : void 0) || $.absoluteURL || W,
        onClick: Ne ? ve : r,
        ref: u1(M, ce),
        target: g,
        "data-discover": !D && s === "render" ? "true" : void 0,
      });
    return ee && !D
      ? T.createElement(T.Fragment, null, ke, T.createElement(s1, { page: W }))
      : ke;
  });
Ke.displayName = "Link";
var f1 = T.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: l = !1,
    style: c,
    to: d,
    viewTransition: h,
    children: p,
    ...g
  },
  y,
) {
  let v = Xi(d, { relative: g.relative }),
    w = zt(),
    C = T.useContext($o),
    { navigator: N, basename: M } = T.useContext(jt),
    j = C != null && w1(v) && h === !0,
    A = N.encodeLocation ? N.encodeLocation(v).pathname : v.pathname,
    V = w.pathname,
    D =
      C && C.navigation && C.navigation.location
        ? C.navigation.location.pathname
        : null;
  (s ||
    ((V = V.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (A = A.toLowerCase())),
    D && M && (D = cn(D, M) || D));
  const $ = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let W = V === A || (!l && V.startsWith(A) && V.charAt($) === "/"),
    ie =
      D != null &&
      (D === A || (!l && D.startsWith(A) && D.charAt(A.length) === "/")),
    se = { isActive: W, isPending: ie, isTransitioning: j },
    ee = W ? r : void 0,
    ce;
  typeof o == "function"
    ? (ce = o(se))
    : (ce = [
        o,
        W ? "active" : null,
        ie ? "pending" : null,
        j ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let J = typeof c == "function" ? c(se) : c;
  return T.createElement(
    Ke,
    {
      ...g,
      "aria-current": ee,
      className: ce,
      ref: y,
      style: J,
      to: d,
      viewTransition: h,
    },
    typeof p == "function" ? p(se) : p,
  );
});
f1.displayName = "NavLink";
var h1 = T.forwardRef(
  (
    {
      discover: t = "render",
      fetcherKey: r,
      navigate: s,
      reloadDocument: o,
      replace: l,
      state: c,
      method: d = ko,
      action: h,
      onSubmit: p,
      relative: g,
      preventScrollReset: y,
      viewTransition: v,
      unstable_defaultShouldRevalidate: w,
      ...C
    },
    N,
  ) => {
    let { unstable_useTransitions: M } = T.useContext(jt),
      j = v1(),
      A = x1(h, { relative: g }),
      V = d.toLowerCase() === "get" ? "get" : "post",
      D = typeof h == "string" && Im.test(h),
      $ = (W) => {
        if ((p && p(W), W.defaultPrevented)) return;
        W.preventDefault();
        let ie = W.nativeEvent.submitter,
          se = (ie == null ? void 0 : ie.getAttribute("formmethod")) || d,
          ee = () =>
            j(ie || W.currentTarget, {
              fetcherKey: r,
              method: se,
              navigate: s,
              replace: l,
              state: c,
              relative: g,
              preventScrollReset: y,
              viewTransition: v,
              unstable_defaultShouldRevalidate: w,
            });
        M && s !== !1 ? T.startTransition(() => ee()) : ee();
      };
    return T.createElement("form", {
      ref: N,
      method: V,
      action: A,
      onSubmit: o ? p : $,
      ...C,
      "data-discover": !D && t === "render" ? "true" : void 0,
    });
  },
);
h1.displayName = "Form";
function p1(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _m(t) {
  let r = T.useContext(Ur);
  return (De(r, p1(t)), r);
}
function m1(
  t,
  {
    target: r,
    replace: s,
    unstable_mask: o,
    state: l,
    preventScrollReset: c,
    relative: d,
    viewTransition: h,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: g,
  } = {},
) {
  let y = Tx(),
    v = zt(),
    w = Xi(t, { relative: d });
  return T.useCallback(
    (C) => {
      if (qx(C, r)) {
        C.preventDefault();
        let N = s !== void 0 ? s : $i(v) === $i(w),
          M = () =>
            y(t, {
              replace: N,
              unstable_mask: o,
              state: l,
              preventScrollReset: c,
              relative: d,
              viewTransition: h,
              unstable_defaultShouldRevalidate: p,
            });
        g ? T.startTransition(() => M()) : M();
      }
    },
    [v, y, w, s, o, l, r, t, c, d, h, p, g],
  );
}
var g1 = 0,
  y1 = () => `__${String(++g1)}__`;
function v1() {
  let { router: t } = _m("useSubmit"),
    { basename: r } = T.useContext(jt),
    s = Ix(),
    o = t.fetch,
    l = t.navigate;
  return T.useCallback(
    async (c, d = {}) => {
      let { action: h, method: p, encType: g, formData: y, body: v } = Yx(c, r);
      if (d.navigate === !1) {
        let w = d.fetcherKey || y1();
        await o(w, s, d.action || h, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: y,
          body: v,
          formMethod: d.method || p,
          formEncType: d.encType || g,
          flushSync: d.flushSync,
        });
      } else
        await l(d.action || h, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: y,
          body: v,
          formMethod: d.method || p,
          formEncType: d.encType || g,
          replace: d.replace,
          state: d.state,
          fromRouteId: s,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [o, l, r, s],
  );
}
function x1(t, { relative: r } = {}) {
  let { basename: s } = T.useContext(jt),
    o = T.useContext(dn);
  De(o, "useFormAction must be used inside a RouteContext");
  let [l] = o.matches.slice(-1),
    c = { ...Xi(t || ".", { relative: r }) },
    d = zt();
  if (t == null) {
    c.search = d.search;
    let h = new URLSearchParams(c.search),
      p = h.getAll("index");
    if (p.some((y) => y === "")) {
      (h.delete("index"),
        p.filter((v) => v).forEach((v) => h.append("index", v)));
      let y = h.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (
    (!t || t === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (c.pathname = c.pathname === "/" ? s : Gt([s, c.pathname])),
    $i(c)
  );
}
function w1(t, { relative: r } = {}) {
  let s = T.useContext(Nm);
  De(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = _m("useViewTransitionState"),
    l = Xi(t, { relative: r });
  if (!s.isTransitioning) return !1;
  let c = cn(s.currentLocation.pathname, o) || s.currentLocation.pathname,
    d = cn(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return Ao(l.pathname, d) != null || Ao(l.pathname, c) != null;
}
var Xl, Gh;
function S1() {
  if (Gh) return Xl;
  Gh = 1;
  var t = typeof Element < "u",
    r = typeof Map == "function",
    s = typeof Set == "function",
    o = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function l(c, d) {
    if (c === d) return !0;
    if (c && d && typeof c == "object" && typeof d == "object") {
      if (c.constructor !== d.constructor) return !1;
      var h, p, g;
      if (Array.isArray(c)) {
        if (((h = c.length), h != d.length)) return !1;
        for (p = h; p-- !== 0; ) if (!l(c[p], d[p])) return !1;
        return !0;
      }
      var y;
      if (r && c instanceof Map && d instanceof Map) {
        if (c.size !== d.size) return !1;
        for (y = c.entries(); !(p = y.next()).done; )
          if (!d.has(p.value[0])) return !1;
        for (y = c.entries(); !(p = y.next()).done; )
          if (!l(p.value[1], d.get(p.value[0]))) return !1;
        return !0;
      }
      if (s && c instanceof Set && d instanceof Set) {
        if (c.size !== d.size) return !1;
        for (y = c.entries(); !(p = y.next()).done; )
          if (!d.has(p.value[0])) return !1;
        return !0;
      }
      if (o && ArrayBuffer.isView(c) && ArrayBuffer.isView(d)) {
        if (((h = c.length), h != d.length)) return !1;
        for (p = h; p-- !== 0; ) if (c[p] !== d[p]) return !1;
        return !0;
      }
      if (c.constructor === RegExp)
        return c.source === d.source && c.flags === d.flags;
      if (
        c.valueOf !== Object.prototype.valueOf &&
        typeof c.valueOf == "function" &&
        typeof d.valueOf == "function"
      )
        return c.valueOf() === d.valueOf();
      if (
        c.toString !== Object.prototype.toString &&
        typeof c.toString == "function" &&
        typeof d.toString == "function"
      )
        return c.toString() === d.toString();
      if (((g = Object.keys(c)), (h = g.length), h !== Object.keys(d).length))
        return !1;
      for (p = h; p-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(d, g[p])) return !1;
      if (t && c instanceof Element) return !1;
      for (p = h; p-- !== 0; )
        if (
          !(
            (g[p] === "_owner" || g[p] === "__v" || g[p] === "__o") &&
            c.$$typeof
          ) &&
          !l(c[g[p]], d[g[p]])
        )
          return !1;
      return !0;
    }
    return c !== c && d !== d;
  }
  return (
    (Xl = function (d, h) {
      try {
        return l(d, h);
      } catch (p) {
        if ((p.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"),
            !1
          );
        throw p;
      }
    }),
    Xl
  );
}
var k1 = S1();
const C1 = Uo(k1);
var Ql, Yh;
function E1() {
  if (Yh) return Ql;
  Yh = 1;
  var t = function (r, s, o, l, c, d, h, p) {
    if (!r) {
      var g;
      if (s === void 0)
        g = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var y = [o, l, c, d, h, p],
          v = 0;
        ((g = new Error(
          s.replace(/%s/g, function () {
            return y[v++];
          }),
        )),
          (g.name = "Invariant Violation"));
      }
      throw ((g.framesToPop = 1), g);
    }
  };
  return ((Ql = t), Ql);
}
var T1 = E1();
const Xh = Uo(T1);
var Zl, Qh;
function P1() {
  return (
    Qh ||
      ((Qh = 1),
      (Zl = function (r, s, o, l) {
        var c = o ? o.call(l, r, s) : void 0;
        if (c !== void 0) return !!c;
        if (r === s) return !0;
        if (typeof r != "object" || !r || typeof s != "object" || !s) return !1;
        var d = Object.keys(r),
          h = Object.keys(s);
        if (d.length !== h.length) return !1;
        for (
          var p = Object.prototype.hasOwnProperty.bind(s), g = 0;
          g < d.length;
          g++
        ) {
          var y = d[g];
          if (!p(y)) return !1;
          var v = r[y],
            w = s[y];
          if (
            ((c = o ? o.call(l, v, w, y) : void 0),
            c === !1 || (c === void 0 && v !== w))
          )
            return !1;
        }
        return !0;
      })),
    Zl
  );
}
var j1 = P1();
const N1 = Uo(j1);
var Om = ((t) => (
    (t.BASE = "base"),
    (t.BODY = "body"),
    (t.HEAD = "head"),
    (t.HTML = "html"),
    (t.LINK = "link"),
    (t.META = "meta"),
    (t.NOSCRIPT = "noscript"),
    (t.SCRIPT = "script"),
    (t.STYLE = "style"),
    (t.TITLE = "title"),
    (t.FRAGMENT = "Symbol(react.fragment)"),
    t
  ))(Om || {}),
  Jl = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  Zh = Object.values(Om),
  lc = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  R1 = Object.entries(lc).reduce((t, [r, s]) => ((t[s] = r), t), {}),
  Ot = "data-rh",
  _r = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  Or = (t, r) => {
    for (let s = t.length - 1; s >= 0; s -= 1) {
      const o = t[s];
      if (Object.prototype.hasOwnProperty.call(o, r)) return o[r];
    }
    return null;
  },
  b1 = (t) => {
    let r = Or(t, "title");
    const s = Or(t, _r.TITLE_TEMPLATE);
    if ((Array.isArray(r) && (r = r.join("")), s && r))
      return s.replace(/%s/g, () => r);
    const o = Or(t, _r.DEFAULT_TITLE);
    return r || o || void 0;
  },
  M1 = (t) => Or(t, _r.ON_CHANGE_CLIENT_STATE) || (() => {}),
  eu = (t, r) =>
    r
      .filter((s) => typeof s[t] < "u")
      .map((s) => s[t])
      .reduce((s, o) => ({ ...s, ...o }), {}),
  A1 = (t, r) =>
    r
      .filter((s) => typeof s.base < "u")
      .map((s) => s.base)
      .reverse()
      .reduce((s, o) => {
        if (!s.length) {
          const l = Object.keys(o);
          for (let c = 0; c < l.length; c += 1) {
            const h = l[c].toLowerCase();
            if (t.indexOf(h) !== -1 && o[h]) return s.concat(o);
          }
        }
        return s;
      }, []),
  L1 = (t) => console && typeof console.warn == "function" && console.warn(t),
  Li = (t, r, s) => {
    const o = {};
    return s
      .filter((l) =>
        Array.isArray(l[t])
          ? !0
          : (typeof l[t] < "u" &&
              L1(
                `Helmet: ${t} should be of type "Array". Instead found type "${typeof l[t]}"`,
              ),
            !1),
      )
      .map((l) => l[t])
      .reverse()
      .reduce((l, c) => {
        const d = {};
        c.filter((p) => {
          let g;
          const y = Object.keys(p);
          for (let w = 0; w < y.length; w += 1) {
            const C = y[w],
              N = C.toLowerCase();
            (r.indexOf(N) !== -1 &&
              !(g === "rel" && p[g].toLowerCase() === "canonical") &&
              !(N === "rel" && p[N].toLowerCase() === "stylesheet") &&
              (g = N),
              r.indexOf(C) !== -1 &&
                (C === "innerHTML" || C === "cssText" || C === "itemprop") &&
                (g = C));
          }
          if (!g || !p[g]) return !1;
          const v = p[g].toLowerCase();
          return (
            o[g] || (o[g] = {}),
            d[g] || (d[g] = {}),
            o[g][v] ? !1 : ((d[g][v] = !0), !0)
          );
        })
          .reverse()
          .forEach((p) => l.push(p));
        const h = Object.keys(d);
        for (let p = 0; p < h.length; p += 1) {
          const g = h[p],
            y = { ...o[g], ...d[g] };
          o[g] = y;
        }
        return l;
      }, [])
      .reverse();
  },
  D1 = (t, r) => {
    if (Array.isArray(t) && t.length) {
      for (let s = 0; s < t.length; s += 1) if (t[s][r]) return !0;
    }
    return !1;
  },
  V1 = (t) => ({
    baseTag: A1(["href"], t),
    bodyAttributes: eu("bodyAttributes", t),
    defer: Or(t, _r.DEFER),
    encode: Or(t, _r.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: eu("htmlAttributes", t),
    linkTags: Li("link", ["rel", "href"], t),
    metaTags: Li(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      t,
    ),
    noscriptTags: Li("noscript", ["innerHTML"], t),
    onChangeClientState: M1(t),
    scriptTags: Li("script", ["src", "innerHTML"], t),
    styleTags: Li("style", ["cssText"], t),
    title: b1(t),
    titleAttributes: eu("titleAttributes", t),
    prioritizeSeoTags: D1(t, _r.PRIORITIZE_SEO_TAGS),
  }),
  Fm = (t) => (Array.isArray(t) ? t.join("") : t),
  I1 = (t, r) => {
    const s = Object.keys(t);
    for (let o = 0; o < s.length; o += 1)
      if (r[s[o]] && r[s[o]].includes(t[s[o]])) return !0;
    return !1;
  },
  tu = (t, r) =>
    Array.isArray(t)
      ? t.reduce(
          (s, o) => (I1(o, r) ? s.priority.push(o) : s.default.push(o), s),
          { priority: [], default: [] },
        )
      : { default: t, priority: [] },
  Jh = (t, r) => ({ ...t, [r]: void 0 }),
  _1 = ["noscript", "script", "style"],
  Eu = (t, r = !0) =>
    r === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  zm = (t) =>
    Object.keys(t).reduce((r, s) => {
      const o = typeof t[s] < "u" ? `${s}="${t[s]}"` : `${s}`;
      return r ? `${r} ${o}` : o;
    }, ""),
  O1 = (t, r, s, o) => {
    const l = zm(s),
      c = Fm(r);
    return l
      ? `<${t} ${Ot}="true" ${l}>${Eu(c, o)}</${t}>`
      : `<${t} ${Ot}="true">${Eu(c, o)}</${t}>`;
  },
  F1 = (t, r, s = !0) =>
    r.reduce((o, l) => {
      const c = l,
        d = Object.keys(c)
          .filter((g) => !(g === "innerHTML" || g === "cssText"))
          .reduce((g, y) => {
            const v = typeof c[y] > "u" ? y : `${y}="${Eu(c[y], s)}"`;
            return g ? `${g} ${v}` : v;
          }, ""),
        h = c.innerHTML || c.cssText || "",
        p = _1.indexOf(t) === -1;
      return `${o}<${t} ${Ot}="true" ${d}${p ? "/>" : `>${h}</${t}>`}`;
    }, ""),
  Bm = (t, r = {}) =>
    Object.keys(t).reduce((s, o) => {
      const l = lc[o];
      return ((s[l || o] = t[o]), s);
    }, r),
  z1 = (t, r, s) => {
    const o = { key: r, [Ot]: !0 },
      l = Bm(s, o);
    return [Ln.createElement("title", l, r)];
  },
  Eo = (t, r) =>
    r.map((s, o) => {
      const l = { key: o, [Ot]: !0 };
      return (
        Object.keys(s).forEach((c) => {
          const h = lc[c] || c;
          if (h === "innerHTML" || h === "cssText") {
            const p = s.innerHTML || s.cssText;
            l.dangerouslySetInnerHTML = { __html: p };
          } else l[h] = s[c];
        }),
        Ln.createElement(t, l)
      );
    }),
  Et = (t, r, s = !0) => {
    switch (t) {
      case "title":
        return {
          toComponent: () => z1(t, r.title, r.titleAttributes),
          toString: () => O1(t, r.title, r.titleAttributes, s),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => Bm(r), toString: () => zm(r) };
      default:
        return { toComponent: () => Eo(t, r), toString: () => F1(t, r, s) };
    }
  },
  B1 = ({ metaTags: t, linkTags: r, scriptTags: s, encode: o }) => {
    const l = tu(t, Jl.meta),
      c = tu(r, Jl.link),
      d = tu(s, Jl.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...Eo("meta", l.priority),
          ...Eo("link", c.priority),
          ...Eo("script", d.priority),
        ],
        toString: () =>
          `${Et("meta", l.priority, o)} ${Et("link", c.priority, o)} ${Et("script", d.priority, o)}`,
      },
      metaTags: l.default,
      linkTags: c.default,
      scriptTags: d.default,
    };
  },
  U1 = (t) => {
    const {
      baseTag: r,
      bodyAttributes: s,
      encode: o = !0,
      htmlAttributes: l,
      noscriptTags: c,
      styleTags: d,
      title: h = "",
      titleAttributes: p,
      prioritizeSeoTags: g,
    } = t;
    let { linkTags: y, metaTags: v, scriptTags: w } = t,
      C = { toComponent: () => {}, toString: () => "" };
    return (
      g &&
        ({
          priorityMethods: C,
          linkTags: y,
          metaTags: v,
          scriptTags: w,
        } = B1(t)),
      {
        priority: C,
        base: Et("base", r, o),
        bodyAttributes: Et("bodyAttributes", s, o),
        htmlAttributes: Et("htmlAttributes", l, o),
        link: Et("link", y, o),
        meta: Et("meta", v, o),
        noscript: Et("noscript", c, o),
        script: Et("script", w, o),
        style: Et("style", d, o),
        title: Et("title", { title: h, titleAttributes: p }, o),
      }
    );
  },
  Tu = U1,
  mo = [],
  Um = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Pu = class {
    constructor(t, r) {
      an(this, "instances", []);
      an(this, "canUseDOM", Um);
      an(this, "context");
      an(this, "value", {
        setHelmet: (t) => {
          this.context.helmet = t;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? mo : this.instances),
          add: (t) => {
            (this.canUseDOM ? mo : this.instances).push(t);
          },
          remove: (t) => {
            const r = (this.canUseDOM ? mo : this.instances).indexOf(t);
            (this.canUseDOM ? mo : this.instances).splice(r, 1);
          },
        },
      });
      ((this.context = t),
        (this.canUseDOM = r || !1),
        r ||
          (t.helmet = Tu({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          })));
    }
  },
  $1 = {},
  $m = Ln.createContext($1),
  nr,
  Wm =
    ((nr = class extends T.Component {
      constructor(s) {
        super(s);
        an(this, "helmetData");
        this.helmetData = new Pu(this.props.context || {}, nr.canUseDOM);
      }
      render() {
        return Ln.createElement(
          $m.Provider,
          { value: this.helmetData.value },
          this.props.children,
        );
      }
    }),
    an(nr, "canUseDOM", Um),
    nr),
  br = (t, r) => {
    const s = document.head || document.querySelector("head"),
      o = s.querySelectorAll(`${t}[${Ot}]`),
      l = [].slice.call(o),
      c = [];
    let d;
    return (
      r &&
        r.length &&
        r.forEach((h) => {
          const p = document.createElement(t);
          for (const g in h)
            if (Object.prototype.hasOwnProperty.call(h, g))
              if (g === "innerHTML") p.innerHTML = h.innerHTML;
              else if (g === "cssText")
                p.styleSheet
                  ? (p.styleSheet.cssText = h.cssText)
                  : p.appendChild(document.createTextNode(h.cssText));
              else {
                const y = g,
                  v = typeof h[y] > "u" ? "" : h[y];
                p.setAttribute(g, v);
              }
          (p.setAttribute(Ot, "true"),
            l.some((g, y) => ((d = y), p.isEqualNode(g)))
              ? l.splice(d, 1)
              : c.push(p));
        }),
      l.forEach((h) => {
        var p;
        return (p = h.parentNode) == null ? void 0 : p.removeChild(h);
      }),
      c.forEach((h) => s.appendChild(h)),
      { oldTags: l, newTags: c }
    );
  },
  ju = (t, r) => {
    const s = document.getElementsByTagName(t)[0];
    if (!s) return;
    const o = s.getAttribute(Ot),
      l = o ? o.split(",") : [],
      c = [...l],
      d = Object.keys(r);
    for (const h of d) {
      const p = r[h] || "";
      (s.getAttribute(h) !== p && s.setAttribute(h, p),
        l.indexOf(h) === -1 && l.push(h));
      const g = c.indexOf(h);
      g !== -1 && c.splice(g, 1);
    }
    for (let h = c.length - 1; h >= 0; h -= 1) s.removeAttribute(c[h]);
    l.length === c.length
      ? s.removeAttribute(Ot)
      : s.getAttribute(Ot) !== d.join(",") && s.setAttribute(Ot, d.join(","));
  },
  W1 = (t, r) => {
    (typeof t < "u" && document.title !== t && (document.title = Fm(t)),
      ju("title", r));
  },
  ep = (t, r) => {
    const {
      baseTag: s,
      bodyAttributes: o,
      htmlAttributes: l,
      linkTags: c,
      metaTags: d,
      noscriptTags: h,
      onChangeClientState: p,
      scriptTags: g,
      styleTags: y,
      title: v,
      titleAttributes: w,
    } = t;
    (ju("body", o), ju("html", l), W1(v, w));
    const C = {
        baseTag: br("base", s),
        linkTags: br("link", c),
        metaTags: br("meta", d),
        noscriptTags: br("noscript", h),
        scriptTags: br("script", g),
        styleTags: br("style", y),
      },
      N = {},
      M = {};
    (Object.keys(C).forEach((j) => {
      const { newTags: A, oldTags: V } = C[j];
      (A.length && (N[j] = A), V.length && (M[j] = C[j].oldTags));
    }),
      r && r(),
      p(t, N, M));
  },
  Di = null,
  H1 = (t) => {
    (Di && cancelAnimationFrame(Di),
      t.defer
        ? (Di = requestAnimationFrame(() => {
            ep(t, () => {
              Di = null;
            });
          }))
        : (ep(t), (Di = null)));
  },
  q1 = H1,
  tp = class extends T.Component {
    constructor() {
      super(...arguments);
      an(this, "rendered", !1);
    }
    shouldComponentUpdate(r) {
      return !N1(r, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: r } = this.props.context;
      (r.remove(this), this.emitChange());
    }
    emitChange() {
      const { helmetInstances: r, setHelmet: s } = this.props.context;
      let o = null;
      const l = V1(
        r.get().map((c) => {
          const d = { ...c.props };
          return (delete d.context, d);
        }),
      );
      (Wm.canUseDOM ? q1(l) : Tu && (o = Tu(l)), s(o));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: r } = this.props.context;
      (r.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  Su,
  Qi =
    ((Su = class extends T.Component {
      shouldComponentUpdate(t) {
        return !C1(Jh(this.props, "helmetData"), Jh(t, "helmetData"));
      }
      mapNestedChildrenToProps(t, r) {
        if (!r) return null;
        switch (t.type) {
          case "script":
          case "noscript":
            return { innerHTML: r };
          case "style":
            return { cssText: r };
          default:
            throw new Error(
              `<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
            );
        }
      }
      flattenArrayTypeChildren(t, r, s, o) {
        return {
          ...r,
          [t.type]: [
            ...(r[t.type] || []),
            { ...s, ...this.mapNestedChildrenToProps(t, o) },
          ],
        };
      }
      mapObjectTypeChildren(t, r, s, o) {
        switch (t.type) {
          case "title":
            return { ...r, [t.type]: o, titleAttributes: { ...s } };
          case "body":
            return { ...r, bodyAttributes: { ...s } };
          case "html":
            return { ...r, htmlAttributes: { ...s } };
          default:
            return { ...r, [t.type]: { ...s } };
        }
      }
      mapArrayTypeChildrenToProps(t, r) {
        let s = { ...r };
        return (
          Object.keys(t).forEach((o) => {
            s = { ...s, [o]: t[o] };
          }),
          s
        );
      }
      warnOnInvalidChildren(t, r) {
        return (
          Xh(
            Zh.some((s) => t.type === s),
            typeof t.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Zh.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`,
          ),
          Xh(
            !r ||
              typeof r == "string" ||
              (Array.isArray(r) && !r.some((s) => typeof s != "string")),
            `Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(t, r) {
        let s = {};
        return (
          Ln.Children.forEach(t, (o) => {
            if (!o || !o.props) return;
            const { children: l, ...c } = o.props,
              d = Object.keys(c).reduce(
                (p, g) => ((p[R1[g] || g] = c[g]), p),
                {},
              );
            let { type: h } = o;
            switch (
              (typeof h == "symbol"
                ? (h = h.toString())
                : this.warnOnInvalidChildren(o, l),
              h)
            ) {
              case "Symbol(react.fragment)":
                r = this.mapChildrenToProps(l, r);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                s = this.flattenArrayTypeChildren(o, s, d, l);
                break;
              default:
                r = this.mapObjectTypeChildren(o, r, d, l);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(s, r)
        );
      }
      render() {
        const { children: t, ...r } = this.props;
        let s = { ...r },
          { helmetData: o } = r;
        if (
          (t && (s = this.mapChildrenToProps(t, s)), o && !(o instanceof Pu))
        ) {
          const l = o;
          ((o = new Pu(l.context, !0)), delete s.helmetData);
        }
        return o
          ? Ln.createElement(tp, { ...s, context: o.value })
          : Ln.createElement($m.Consumer, null, (l) =>
              Ln.createElement(tp, { ...s, context: l }),
            );
      }
    }),
    an(Su, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    Su);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hm = (...t) =>
  t
    .filter((r, s, o) => !!r && r.trim() !== "" && o.indexOf(r) === s)
    .join(" ")
    .trim();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = (t) =>
  t.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, s, o) =>
    o ? o.toUpperCase() : s.toLowerCase(),
  );
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = (t) => {
  const r = G1(t);
  return r.charAt(0).toUpperCase() + r.slice(1);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Y1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = (t) => {
  for (const r in t)
    if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
  return !1;
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = T.forwardRef(
  (
    {
      color: t = "currentColor",
      size: r = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: o,
      className: l = "",
      children: c,
      iconNode: d,
      ...h
    },
    p,
  ) =>
    T.createElement(
      "svg",
      {
        ref: p,
        ...Y1,
        width: r,
        height: r,
        stroke: t,
        strokeWidth: o ? (Number(s) * 24) / Number(r) : s,
        className: Hm("lucide", l),
        ...(!c && !X1(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([g, y]) => T.createElement(g, y)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const je = (t, r) => {
  const s = T.forwardRef(({ className: o, ...l }, c) =>
    T.createElement(Q1, {
      ref: c,
      iconNode: r,
      className: Hm(`lucide-${K1(np(t))}`, `lucide-${t}`, o),
      ...l,
    }),
  );
  return ((s.displayName = np(t)), s);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Dn = je("arrow-right", Z1);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  ew = je("arrow-up-right", J1);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  nw = je("award", tw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = [
    ["path", { d: "M12 10h.01", key: "1nrarc" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["path", { d: "M16 10h.01", key: "1m94wz" }],
    ["path", { d: "M16 14h.01", key: "1gbofw" }],
    ["path", { d: "M16 6h.01", key: "1x0f13" }],
    ["path", { d: "M8 10h.01", key: "19clt8" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M8 6h.01", key: "1dz90k" }],
    ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
    [
      "rect",
      { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" },
    ],
  ],
  iw = je("building", rw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = [
    ["path", { d: "M10 12h4", key: "a56b0p" }],
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
  ],
  ow = je("building-2", sw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  lw = je("chevron-left", aw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  cw = je("chevron-right", uw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dw = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  uc = je("circle-check", dw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  hw = je("clock", fw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  qm = je("eye", pw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mw = [
    ["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }],
    ["path", { d: "m18 15 4-4", key: "16gjal" }],
    [
      "path",
      {
        d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
        key: "15ts47",
      },
    ],
  ],
  gw = je("hammer", mw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yw = [
    ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
    ["path", { d: "M14 6a6 6 0 0 1 6 6v3", key: "1hnv84" }],
    ["path", { d: "M4 15v-3a6 6 0 0 1 6-6", key: "9ciidu" }],
    [
      "rect",
      { x: "2", y: "15", width: "20", height: "4", rx: "1", key: "g3x8cw" },
    ],
  ],
  vw = je("hard-hat", yw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  ww = je("house", xw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sw = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  kw = je("layers", Sw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cw = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Ew = je("mail", Cw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tw = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Nu = je("map-pin", Tw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pw = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  jw = je("menu", Pw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nw = [
    ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
    [
      "path",
      {
        d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
        key: "18tc5c",
      },
    ],
    [
      "path",
      {
        d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
        key: "ytzfxy",
      },
    ],
  ],
  Rw = je("paintbrush", Nw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Mw = je("phone", bw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aw = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  rp = je("send", Aw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lw = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Dw = je("shield", Lw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vw = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Km = je("target", Vw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iw = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Gm = je("users", Iw);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _w = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ],
  Ow = je("wrench", _w);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fw = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Ym = je("x", Fw),
  Xm = T.createContext({});
function zw(t) {
  const r = T.useRef(null);
  return (r.current === null && (r.current = t()), r.current);
}
const Bw = typeof window < "u",
  Uw = Bw ? T.useLayoutEffect : T.useEffect,
  cc = T.createContext(null);
function dc(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
function Lo(t, r) {
  const s = t.indexOf(r);
  s > -1 && t.splice(s, 1);
}
const Qt = (t, r, s) => (s > r ? r : s < t ? t : s);
let fc = () => {};
const In = {},
  Qm = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Zm(t) {
  return typeof t == "object" && t !== null;
}
const Jm = (t) => /^0[^.\s]+$/u.test(t);
function eg(t) {
  let r;
  return () => (r === void 0 && (r = t()), r);
}
const Pt = (t) => t,
  $w = (t, r) => (s) => r(t(s)),
  Zi = (...t) => t.reduce($w),
  Wi = (t, r, s) => {
    const o = r - t;
    return o === 0 ? 1 : (s - t) / o;
  };
class hc {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return (dc(this.subscriptions, r), () => Lo(this.subscriptions, r));
  }
  notify(r, s, o) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1) this.subscriptions[0](r, s, o);
      else
        for (let c = 0; c < l; c++) {
          const d = this.subscriptions[c];
          d && d(r, s, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const yt = (t) => t * 1e3,
  Tt = (t) => t / 1e3;
function tg(t, r) {
  return r ? t * (1e3 / r) : 0;
}
const ng = (t, r, s) =>
    (((1 - 3 * s + 3 * r) * t + (3 * s - 6 * r)) * t + 3 * r) * t,
  Ww = 1e-7,
  Hw = 12;
function qw(t, r, s, o, l) {
  let c,
    d,
    h = 0;
  do ((d = r + (s - r) / 2), (c = ng(d, o, l) - t), c > 0 ? (s = d) : (r = d));
  while (Math.abs(c) > Ww && ++h < Hw);
  return d;
}
function Ji(t, r, s, o) {
  if (t === r && s === o) return Pt;
  const l = (c) => qw(c, 0, 1, t, s);
  return (c) => (c === 0 || c === 1 ? c : ng(l(c), r, o));
}
const rg = (t) => (r) => (r <= 0.5 ? t(2 * r) / 2 : (2 - t(2 * (1 - r))) / 2),
  ig = (t) => (r) => 1 - t(1 - r),
  sg = Ji(0.33, 1.53, 0.69, 0.99),
  pc = ig(sg),
  og = rg(pc),
  ag = (t) =>
    t >= 1
      ? 1
      : (t *= 2) < 1
        ? 0.5 * pc(t)
        : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  mc = (t) => 1 - Math.sin(Math.acos(t)),
  lg = ig(mc),
  ug = rg(mc),
  Kw = Ji(0.42, 0, 1, 1),
  Gw = Ji(0, 0, 0.58, 1),
  cg = Ji(0.42, 0, 0.58, 1),
  Yw = (t) => Array.isArray(t) && typeof t[0] != "number",
  dg = (t) => Array.isArray(t) && typeof t[0] == "number",
  Xw = {
    linear: Pt,
    easeIn: Kw,
    easeInOut: cg,
    easeOut: Gw,
    circIn: mc,
    circInOut: ug,
    circOut: lg,
    backIn: pc,
    backInOut: og,
    backOut: sg,
    anticipate: ag,
  },
  Qw = (t) => typeof t == "string",
  ip = (t) => {
    if (dg(t)) {
      fc(t.length === 4);
      const [r, s, o, l] = t;
      return Ji(r, s, o, l);
    } else if (Qw(t)) return Xw[t];
    return t;
  },
  go = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Zw(t, r) {
  let s = new Set(),
    o = new Set(),
    l = !1,
    c = !1;
  const d = new WeakSet();
  let h = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(y) {
    (d.has(y) && (g.schedule(y), t()), y(h));
  }
  const g = {
    schedule: (y, v = !1, w = !1) => {
      const N = w && l ? s : o;
      return (v && d.add(y), N.add(y), y);
    },
    cancel: (y) => {
      (o.delete(y), d.delete(y));
    },
    process: (y) => {
      if (((h = y), l)) {
        c = !0;
        return;
      }
      l = !0;
      const v = s;
      ((s = o),
        (o = v),
        s.forEach(p),
        s.clear(),
        (l = !1),
        c && ((c = !1), g.process(y)));
    },
  };
  return g;
}
const Jw = 40;
function fg(t, r) {
  let s = !1,
    o = !0;
  const l = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = () => (s = !0),
    d = go.reduce((D, $) => ((D[$] = Zw(c)), D), {}),
    {
      setup: h,
      read: p,
      resolveKeyframes: g,
      preUpdate: y,
      update: v,
      preRender: w,
      render: C,
      postRender: N,
    } = d,
    M = () => {
      const D = In.useManualTiming,
        $ = D ? l.timestamp : performance.now();
      ((s = !1),
        D ||
          (l.delta = o ? 1e3 / 60 : Math.max(Math.min($ - l.timestamp, Jw), 1)),
        (l.timestamp = $),
        (l.isProcessing = !0),
        h.process(l),
        p.process(l),
        g.process(l),
        y.process(l),
        v.process(l),
        w.process(l),
        C.process(l),
        N.process(l),
        (l.isProcessing = !1),
        s && r && ((o = !1), t(M)));
    },
    j = () => {
      ((s = !0), (o = !0), l.isProcessing || t(M));
    };
  return {
    schedule: go.reduce((D, $) => {
      const W = d[$];
      return (
        (D[$] = (ie, se = !1, ee = !1) => (s || j(), W.schedule(ie, se, ee))),
        D
      );
    }, {}),
    cancel: (D) => {
      for (let $ = 0; $ < go.length; $++) d[go[$]].cancel(D);
    },
    state: l,
    steps: d,
  };
}
const {
  schedule: xe,
  cancel: _n,
  state: Xe,
  steps: nu,
} = fg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pt, !0);
let To;
function eS() {
  To = void 0;
}
const it = {
    now: () => (
      To === void 0 &&
        it.set(
          Xe.isProcessing || In.useManualTiming
            ? Xe.timestamp
            : performance.now(),
        ),
      To
    ),
    set: (t) => {
      ((To = t), queueMicrotask(eS));
    },
  },
  hg = (t) => (r) => typeof r == "string" && r.startsWith(t),
  pg = hg("--"),
  tS = hg("var(--"),
  gc = (t) => (tS(t) ? nS.test(t.split("/*")[0].trim()) : !1),
  nS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function sp(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const $r = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Hi = { ...$r, transform: (t) => Qt(0, 1, t) },
  yo = { ...$r, default: 1 },
  Fi = (t) => Math.round(t * 1e5) / 1e5,
  yc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function rS(t) {
  return t == null;
}
const iS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  vc = (t, r) => (s) =>
    !!(
      (typeof s == "string" && iS.test(s) && s.startsWith(t)) ||
      (r && !rS(s) && Object.prototype.hasOwnProperty.call(s, r))
    ),
  mg = (t, r, s) => (o) => {
    if (typeof o != "string") return o;
    const [l, c, d, h] = o.match(yc);
    return {
      [t]: parseFloat(l),
      [r]: parseFloat(c),
      [s]: parseFloat(d),
      alpha: h !== void 0 ? parseFloat(h) : 1,
    };
  },
  sS = (t) => Qt(0, 255, t),
  ru = { ...$r, transform: (t) => Math.round(sS(t)) },
  er = {
    test: vc("rgb", "red"),
    parse: mg("red", "green", "blue"),
    transform: ({ red: t, green: r, blue: s, alpha: o = 1 }) =>
      "rgba(" +
      ru.transform(t) +
      ", " +
      ru.transform(r) +
      ", " +
      ru.transform(s) +
      ", " +
      Fi(Hi.transform(o)) +
      ")",
  };
function oS(t) {
  let r = "",
    s = "",
    o = "",
    l = "";
  return (
    t.length > 5
      ? ((r = t.substring(1, 3)),
        (s = t.substring(3, 5)),
        (o = t.substring(5, 7)),
        (l = t.substring(7, 9)))
      : ((r = t.substring(1, 2)),
        (s = t.substring(2, 3)),
        (o = t.substring(3, 4)),
        (l = t.substring(4, 5)),
        (r += r),
        (s += s),
        (o += o),
        (l += l)),
    {
      red: parseInt(r, 16),
      green: parseInt(s, 16),
      blue: parseInt(o, 16),
      alpha: l ? parseInt(l, 16) / 255 : 1,
    }
  );
}
const Ru = { test: vc("#"), parse: oS, transform: er.transform },
  es = (t) => ({
    test: (r) =>
      typeof r == "string" && r.endsWith(t) && r.split(" ").length === 1,
    parse: parseFloat,
    transform: (r) => `${r}${t}`,
  }),
  Mn = es("deg"),
  Yt = es("%"),
  Y = es("px"),
  aS = es("vh"),
  lS = es("vw"),
  op = {
    ...Yt,
    parse: (t) => Yt.parse(t) / 100,
    transform: (t) => Yt.transform(t * 100),
  },
  Dr = {
    test: vc("hsl", "hue"),
    parse: mg("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: r, lightness: s, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      Yt.transform(Fi(r)) +
      ", " +
      Yt.transform(Fi(s)) +
      ", " +
      Fi(Hi.transform(o)) +
      ")",
  },
  ze = {
    test: (t) => er.test(t) || Ru.test(t) || Dr.test(t),
    parse: (t) =>
      er.test(t) ? er.parse(t) : Dr.test(t) ? Dr.parse(t) : Ru.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? er.transform(t)
          : Dr.transform(t),
    getAnimatableNone: (t) => {
      const r = ze.parse(t);
      return ((r.alpha = 0), ze.transform(r));
    },
  },
  uS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function cS(t) {
  var r, s;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((r = t.match(yc)) == null ? void 0 : r.length) || 0) +
      (((s = t.match(uS)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const gg = "number",
  yg = "color",
  dS = "var",
  fS = "var(",
  ap = "${}",
  hS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Fr(t) {
  const r = t.toString(),
    s = [],
    o = { color: [], number: [], var: [] },
    l = [];
  let c = 0;
  const h = r
    .replace(
      hS,
      (p) => (
        ze.test(p)
          ? (o.color.push(c), l.push(yg), s.push(ze.parse(p)))
          : p.startsWith(fS)
            ? (o.var.push(c), l.push(dS), s.push(p))
            : (o.number.push(c), l.push(gg), s.push(parseFloat(p))),
        ++c,
        ap
      ),
    )
    .split(ap);
  return { values: s, split: h, indexes: o, types: l };
}
function pS(t) {
  return Fr(t).values;
}
function vg({ split: t, types: r }) {
  const s = t.length;
  return (o) => {
    let l = "";
    for (let c = 0; c < s; c++)
      if (((l += t[c]), o[c] !== void 0)) {
        const d = r[c];
        d === gg
          ? (l += Fi(o[c]))
          : d === yg
            ? (l += ze.transform(o[c]))
            : (l += o[c]);
      }
    return l;
  };
}
function mS(t) {
  return vg(Fr(t));
}
const gS = (t) =>
    typeof t == "number" ? 0 : ze.test(t) ? ze.getAnimatableNone(t) : t,
  yS = (t, r) =>
    typeof t == "number"
      ? r != null && r.trim().endsWith("/")
        ? t
        : 0
      : gS(t);
function vS(t) {
  const r = Fr(t);
  return vg(r)(r.values.map((o, l) => yS(o, r.split[l])));
}
const Ft = {
  test: cS,
  parse: pS,
  createTransformer: mS,
  getAnimatableNone: vS,
};
function iu(t, r, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? t + (r - t) * 6 * s
      : s < 1 / 2
        ? r
        : s < 2 / 3
          ? t + (r - t) * (2 / 3 - s) * 6
          : t
  );
}
function xS({ hue: t, saturation: r, lightness: s, alpha: o }) {
  ((t /= 360), (r /= 100), (s /= 100));
  let l = 0,
    c = 0,
    d = 0;
  if (!r) l = c = d = s;
  else {
    const h = s < 0.5 ? s * (1 + r) : s + r - s * r,
      p = 2 * s - h;
    ((l = iu(p, h, t + 1 / 3)), (c = iu(p, h, t)), (d = iu(p, h, t - 1 / 3)));
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(d * 255),
    alpha: o,
  };
}
function Do(t, r) {
  return (s) => (s > 0 ? r : t);
}
const Pe = (t, r, s) => t + (r - t) * s,
  su = (t, r, s) => {
    const o = t * t,
      l = s * (r * r - o) + o;
    return l < 0 ? 0 : Math.sqrt(l);
  },
  wS = [Ru, er, Dr],
  SS = (t) => wS.find((r) => r.test(t));
function lp(t) {
  const r = SS(t);
  if (!r) return !1;
  let s = r.parse(t);
  return (r === Dr && (s = xS(s)), s);
}
const up = (t, r) => {
    const s = lp(t),
      o = lp(r);
    if (!s || !o) return Do(t, r);
    const l = { ...s };
    return (c) => (
      (l.red = su(s.red, o.red, c)),
      (l.green = su(s.green, o.green, c)),
      (l.blue = su(s.blue, o.blue, c)),
      (l.alpha = Pe(s.alpha, o.alpha, c)),
      er.transform(l)
    );
  },
  bu = new Set(["none", "hidden"]);
function kS(t, r) {
  return bu.has(t) ? (s) => (s <= 0 ? t : r) : (s) => (s >= 1 ? r : t);
}
function CS(t, r) {
  return (s) => Pe(t, r, s);
}
function xc(t) {
  return typeof t == "number"
    ? CS
    : typeof t == "string"
      ? gc(t)
        ? Do
        : ze.test(t)
          ? up
          : PS
      : Array.isArray(t)
        ? xg
        : typeof t == "object"
          ? ze.test(t)
            ? up
            : ES
          : Do;
}
function xg(t, r) {
  const s = [...t],
    o = s.length,
    l = t.map((c, d) => xc(c)(c, r[d]));
  return (c) => {
    for (let d = 0; d < o; d++) s[d] = l[d](c);
    return s;
  };
}
function ES(t, r) {
  const s = { ...t, ...r },
    o = {};
  for (const l in s)
    t[l] !== void 0 && r[l] !== void 0 && (o[l] = xc(t[l])(t[l], r[l]));
  return (l) => {
    for (const c in o) s[c] = o[c](l);
    return s;
  };
}
function TS(t, r) {
  const s = [],
    o = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < r.values.length; l++) {
    const c = r.types[l],
      d = t.indexes[c][o[c]],
      h = t.values[d] ?? 0;
    ((s[l] = h), o[c]++);
  }
  return s;
}
const PS = (t, r) => {
  const s = Ft.createTransformer(r),
    o = Fr(t),
    l = Fr(r);
  return o.indexes.var.length === l.indexes.var.length &&
    o.indexes.color.length === l.indexes.color.length &&
    o.indexes.number.length >= l.indexes.number.length
    ? (bu.has(t) && !l.values.length) || (bu.has(r) && !o.values.length)
      ? kS(t, r)
      : Zi(xg(TS(o, l), l.values), s)
    : Do(t, r);
};
function wg(t, r, s) {
  return typeof t == "number" && typeof r == "number" && typeof s == "number"
    ? Pe(t, r, s)
    : xc(t)(t, r);
}
const jS = (t) => {
    const r = ({ timestamp: s }) => t(s);
    return {
      start: (s = !0) => xe.update(r, s),
      stop: () => _n(r),
      now: () => (Xe.isProcessing ? Xe.timestamp : it.now()),
    };
  },
  Sg = (t, r, s = 10) => {
    let o = "";
    const l = Math.max(Math.round(r / s), 2);
    for (let c = 0; c < l; c++)
      o += Math.round(t(c / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  Vo = 2e4;
function wc(t) {
  let r = 0;
  const s = 50;
  let o = t.next(r);
  for (; !o.done && r < Vo; ) ((r += s), (o = t.next(r)));
  return r >= Vo ? 1 / 0 : r;
}
function NS(t, r = 100, s) {
  const o = s({ ...t, keyframes: [0, r] }),
    l = Math.min(wc(o), Vo);
  return {
    type: "keyframes",
    ease: (c) => o.next(l * c).value / r,
    duration: Tt(l),
  };
}
const Ie = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Mu(t, r) {
  return t * Math.sqrt(1 - r * r);
}
const RS = 12;
function bS(t, r, s) {
  let o = s;
  for (let l = 1; l < RS; l++) o = o - t(o) / r(o);
  return o;
}
const ou = 0.001;
function MS({
  duration: t = Ie.duration,
  bounce: r = Ie.bounce,
  velocity: s = Ie.velocity,
  mass: o = Ie.mass,
}) {
  let l,
    c,
    d = 1 - r;
  ((d = Qt(Ie.minDamping, Ie.maxDamping, d)),
    (t = Qt(Ie.minDuration, Ie.maxDuration, Tt(t))),
    d < 1
      ? ((l = (g) => {
          const y = g * d,
            v = y * t,
            w = y - s,
            C = Mu(g, d),
            N = Math.exp(-v);
          return ou - (w / C) * N;
        }),
        (c = (g) => {
          const v = g * d * t,
            w = v * s + s,
            C = Math.pow(d, 2) * Math.pow(g, 2) * t,
            N = Math.exp(-v),
            M = Mu(Math.pow(g, 2), d);
          return ((-l(g) + ou > 0 ? -1 : 1) * ((w - C) * N)) / M;
        }))
      : ((l = (g) => {
          const y = Math.exp(-g * t),
            v = (g - s) * t + 1;
          return -ou + y * v;
        }),
        (c = (g) => {
          const y = Math.exp(-g * t),
            v = (s - g) * (t * t);
          return y * v;
        })));
  const h = 5 / t,
    p = bS(l, c, h);
  if (((t = yt(t)), isNaN(p)))
    return { stiffness: Ie.stiffness, damping: Ie.damping, duration: t };
  {
    const g = Math.pow(p, 2) * o;
    return { stiffness: g, damping: d * 2 * Math.sqrt(o * g), duration: t };
  }
}
const AS = ["duration", "bounce"],
  LS = ["stiffness", "damping", "mass"];
function cp(t, r) {
  return r.some((s) => t[s] !== void 0);
}
function DS(t) {
  let r = {
    velocity: Ie.velocity,
    stiffness: Ie.stiffness,
    damping: Ie.damping,
    mass: Ie.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!cp(t, LS) && cp(t, AS))
    if (((r.velocity = 0), t.visualDuration)) {
      const s = t.visualDuration,
        o = (2 * Math.PI) / (s * 1.2),
        l = o * o,
        c = 2 * Qt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(l);
      r = { ...r, mass: Ie.mass, stiffness: l, damping: c };
    } else {
      const s = MS({ ...t, velocity: 0 });
      ((r = { ...r, ...s, mass: Ie.mass }), (r.isResolvedFromDuration = !0));
    }
  return r;
}
function Io(t = Ie.visualDuration, r = Ie.bounce) {
  const s =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: r }
      : t;
  let { restSpeed: o, restDelta: l } = s;
  const c = s.keyframes[0],
    d = s.keyframes[s.keyframes.length - 1],
    h = { done: !1, value: c },
    {
      stiffness: p,
      damping: g,
      mass: y,
      duration: v,
      velocity: w,
      isResolvedFromDuration: C,
    } = DS({ ...s, velocity: -Tt(s.velocity || 0) }),
    N = w || 0,
    M = g / (2 * Math.sqrt(p * y)),
    j = d - c,
    A = Tt(Math.sqrt(p / y)),
    V = Math.abs(j) < 5;
  (o || (o = V ? Ie.restSpeed.granular : Ie.restSpeed.default),
    l || (l = V ? Ie.restDelta.granular : Ie.restDelta.default));
  let D, $, W, ie, se, ee;
  if (M < 1)
    ((W = Mu(A, M)),
      (ie = (N + M * A * j) / W),
      (D = (J) => {
        const pe = Math.exp(-M * A * J);
        return d - pe * (ie * Math.sin(W * J) + j * Math.cos(W * J));
      }),
      (se = M * A * ie + j * W),
      (ee = M * A * j - ie * W),
      ($ = (J) =>
        Math.exp(-M * A * J) * (se * Math.sin(W * J) + ee * Math.cos(W * J))));
  else if (M === 1) {
    D = (pe) => d - Math.exp(-A * pe) * (j + (N + A * j) * pe);
    const J = N + A * j;
    $ = (pe) => Math.exp(-A * pe) * (A * J * pe - N);
  } else {
    const J = A * Math.sqrt(M * M - 1);
    D = (ke) => {
      const me = Math.exp(-M * A * ke),
        Ce = Math.min(J * ke, 300);
      return (
        d - (me * ((N + M * A * j) * Math.sinh(Ce) + J * j * Math.cosh(Ce))) / J
      );
    };
    const pe = (N + M * A * j) / J,
      ve = M * A * pe - j * J,
      Ne = M * A * j - pe * J;
    $ = (ke) => {
      const me = Math.exp(-M * A * ke),
        Ce = Math.min(J * ke, 300);
      return me * (ve * Math.sinh(Ce) + Ne * Math.cosh(Ce));
    };
  }
  const ce = {
    calculatedDuration: (C && v) || null,
    velocity: (J) => yt($(J)),
    next: (J) => {
      if (!C && M < 1) {
        const ve = Math.exp(-M * A * J),
          Ne = Math.sin(W * J),
          ke = Math.cos(W * J),
          me = d - ve * (ie * Ne + j * ke),
          Ce = yt(ve * (se * Ne + ee * ke));
        return (
          (h.done = Math.abs(Ce) <= o && Math.abs(d - me) <= l),
          (h.value = h.done ? d : me),
          h
        );
      }
      const pe = D(J);
      if (C) h.done = J >= v;
      else {
        const ve = yt($(J));
        h.done = Math.abs(ve) <= o && Math.abs(d - pe) <= l;
      }
      return ((h.value = h.done ? d : pe), h);
    },
    toString: () => {
      const J = Math.min(wc(ce), Vo),
        pe = Sg((ve) => ce.next(J * ve).value, J, 30);
      return J + "ms " + pe;
    },
    toTransition: () => {},
  };
  return ce;
}
Io.applyToOptions = (t) => {
  const r = NS(t, 100, Io);
  return (
    (t.ease = r.ease),
    (t.duration = yt(r.duration)),
    (t.type = "keyframes"),
    t
  );
};
const VS = 5;
function kg(t, r, s) {
  const o = Math.max(r - VS, 0);
  return tg(s - t(o), r - o);
}
function Au({
  keyframes: t,
  velocity: r = 0,
  power: s = 0.8,
  timeConstant: o = 325,
  bounceDamping: l = 10,
  bounceStiffness: c = 500,
  modifyTarget: d,
  min: h,
  max: p,
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const v = t[0],
    w = { done: !1, value: v },
    C = (ee) => (h !== void 0 && ee < h) || (p !== void 0 && ee > p),
    N = (ee) =>
      h === void 0
        ? p
        : p === void 0 || Math.abs(h - ee) < Math.abs(p - ee)
          ? h
          : p;
  let M = s * r;
  const j = v + M,
    A = d === void 0 ? j : d(j);
  A !== j && (M = A - v);
  const V = (ee) => -M * Math.exp(-ee / o),
    D = (ee) => A + V(ee),
    $ = (ee) => {
      const ce = V(ee),
        J = D(ee);
      ((w.done = Math.abs(ce) <= g), (w.value = w.done ? A : J));
    };
  let W, ie;
  const se = (ee) => {
    C(w.value) &&
      ((W = ee),
      (ie = Io({
        keyframes: [w.value, N(w.value)],
        velocity: kg(D, ee, w.value),
        damping: l,
        stiffness: c,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    se(0),
    {
      calculatedDuration: null,
      next: (ee) => {
        let ce = !1;
        return (
          !ie && W === void 0 && ((ce = !0), $(ee), se(ee)),
          W !== void 0 && ee >= W ? ie.next(ee - W) : (!ce && $(ee), w)
        );
      },
    }
  );
}
function IS(t, r, s) {
  const o = [],
    l = s || In.mix || wg,
    c = t.length - 1;
  for (let d = 0; d < c; d++) {
    let h = l(t[d], t[d + 1]);
    if (r) {
      const p = Array.isArray(r) ? r[d] || Pt : r;
      h = Zi(p, h);
    }
    o.push(h);
  }
  return o;
}
function _S(t, r, { clamp: s = !0, ease: o, mixer: l } = {}) {
  const c = t.length;
  if ((fc(c === r.length), c === 1)) return () => r[0];
  if (c === 2 && r[0] === r[1]) return () => r[1];
  const d = t[0] === t[1];
  t[0] > t[c - 1] && ((t = [...t].reverse()), (r = [...r].reverse()));
  const h = IS(r, o, l),
    p = h.length,
    g = (y) => {
      if (d && y < t[0]) return r[0];
      let v = 0;
      if (p > 1) for (; v < t.length - 2 && !(y < t[v + 1]); v++);
      const w = Wi(t[v], t[v + 1], y);
      return h[v](w);
    };
  return s ? (y) => g(Qt(t[0], t[c - 1], y)) : g;
}
function OS(t, r) {
  const s = t[t.length - 1];
  for (let o = 1; o <= r; o++) {
    const l = Wi(0, r, o);
    t.push(Pe(s, 1, l));
  }
}
function FS(t) {
  const r = [0];
  return (OS(r, t.length - 1), r);
}
function zS(t, r) {
  return t.map((s) => s * r);
}
function BS(t, r) {
  return t.map(() => r || cg).splice(0, t.length - 1);
}
function zi({
  duration: t = 300,
  keyframes: r,
  times: s,
  ease: o = "easeInOut",
}) {
  const l = Yw(o) ? o.map(ip) : ip(o),
    c = { done: !1, value: r[0] },
    d = zS(s && s.length === r.length ? s : FS(r), t),
    h = _S(d, r, { ease: Array.isArray(l) ? l : BS(r, l) });
  return {
    calculatedDuration: t,
    next: (p) => ((c.value = h(p)), (c.done = p >= t), c),
  };
}
const US = (t) => t !== null;
function Ho(t, { repeat: r, repeatType: s = "loop" }, o, l = 1) {
  const c = t.filter(US),
    h = l < 0 || (r && s !== "loop" && r % 2 === 1) ? 0 : c.length - 1;
  return !h || o === void 0 ? c[h] : o;
}
const $S = { decay: Au, inertia: Au, tween: zi, keyframes: zi, spring: Io };
function Cg(t) {
  typeof t.type == "string" && (t.type = $S[t.type]);
}
class Sc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((r) => {
      this.resolve = r;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(r, s) {
    return this.finished.then(r, s);
  }
}
const WS = (t) => t / 100;
class _o extends Sc {
  constructor(r) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var o, l;
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== it.now() && this.tick(it.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (l = (o = this.options).onStop) == null || l.call(o)));
      }),
      (this.options = r),
      this.initAnimation(),
      this.play(),
      r.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: r } = this;
    Cg(r);
    const {
      type: s = zi,
      repeat: o = 0,
      repeatDelay: l = 0,
      repeatType: c,
      velocity: d = 0,
    } = r;
    let { keyframes: h } = r;
    const p = s || zi;
    p !== zi &&
      typeof h[0] != "number" &&
      ((this.mixKeyframes = Zi(WS, wg(h[0], h[1]))), (h = [0, 100]));
    const g = p({ ...r, keyframes: h });
    (c === "mirror" &&
      (this.mirroredGenerator = p({
        ...r,
        keyframes: [...h].reverse(),
        velocity: -d,
      })),
      g.calculatedDuration === null && (g.calculatedDuration = wc(g)));
    const { calculatedDuration: y } = g;
    ((this.calculatedDuration = y),
      (this.resolvedDuration = y + l),
      (this.totalDuration = this.resolvedDuration * (o + 1) - l),
      (this.generator = g));
  }
  updateTime(r) {
    const s = Math.round(r - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(r, s = !1) {
    const {
      generator: o,
      totalDuration: l,
      mixKeyframes: c,
      mirroredGenerator: d,
      resolvedDuration: h,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: g = 0,
      keyframes: y,
      repeat: v,
      repeatType: w,
      repeatDelay: C,
      type: N,
      onUpdate: M,
      finalKeyframe: j,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, r))
      : this.speed < 0 &&
        (this.startTime = Math.min(r - l / this.speed, this.startTime)),
      s ? (this.currentTime = r) : this.updateTime(r));
    const A = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      V = this.playbackSpeed >= 0 ? A < 0 : A > l;
    ((this.currentTime = Math.max(A, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = l));
    let D = this.currentTime,
      $ = o;
    if (v) {
      const ee = Math.min(this.currentTime, l) / h;
      let ce = Math.floor(ee),
        J = ee % 1;
      (!J && ee >= 1 && (J = 1),
        J === 1 && ce--,
        (ce = Math.min(ce, v + 1)),
        !!(ce % 2) &&
          (w === "reverse"
            ? ((J = 1 - J), C && (J -= C / h))
            : w === "mirror" && ($ = d)),
        (D = Qt(0, 1, J) * h));
    }
    let W;
    (V
      ? ((this.delayState.value = y[0]), (W = this.delayState))
      : (W = $.next(D)),
      c && !V && (W.value = c(W.value)));
    let { done: ie } = W;
    !V &&
      p !== null &&
      (ie =
        this.playbackSpeed >= 0
          ? this.currentTime >= l
          : this.currentTime <= 0);
    const se =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && ie));
    return (
      se && N !== Au && (W.value = Ho(y, this.options, j, this.speed)),
      M && M(W.value),
      se && this.finish(),
      W
    );
  }
  then(r, s) {
    return this.finished.then(r, s);
  }
  get duration() {
    return Tt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + Tt(r);
  }
  get time() {
    return Tt(this.currentTime);
  }
  set time(r) {
    ((r = yt(r)),
      (this.currentTime = r),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = r)
        : this.driver &&
          (this.startTime = this.driver.now() - r / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = r),
          this.tick(r)));
  }
  getGeneratorVelocity() {
    const r = this.currentTime;
    if (r <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(r);
    const s = this.generator.next(r).value;
    return kg((o) => this.generator.next(o).value, r, s);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    const s = this.playbackSpeed !== r;
    (s && this.driver && this.updateTime(it.now()),
      (this.playbackSpeed = r),
      s && this.driver && (this.time = Tt(this.currentTime)));
  }
  play() {
    var l, c;
    if (this.isStopped) return;
    const { driver: r = jS, startTime: s } = this.options;
    (this.driver || (this.driver = r((d) => this.tick(d))),
      (c = (l = this.options).onPlay) == null || c.call(l));
    const o = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime || (this.startTime = s ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(it.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var r, s;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (s = (r = this.options).onComplete) == null || s.call(r));
  }
  cancel() {
    var r, s;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (s = (r = this.options).onCancel) == null || s.call(r));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(r) {
    return ((this.startTime = 0), this.tick(r, !0));
  }
  attachTimeline(r) {
    var s;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (s = this.driver) == null || s.stop(),
      r.observe(this)
    );
  }
}
function HS(t) {
  for (let r = 1; r < t.length; r++) t[r] ?? (t[r] = t[r - 1]);
}
const tr = (t) => (t * 180) / Math.PI,
  Lu = (t) => {
    const r = tr(Math.atan2(t[1], t[0]));
    return Du(r);
  },
  qS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Lu,
    rotateZ: Lu,
    skewX: (t) => tr(Math.atan(t[1])),
    skewY: (t) => tr(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Du = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  dp = Lu,
  fp = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  hp = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  KS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: fp,
    scaleY: hp,
    scale: (t) => (fp(t) + hp(t)) / 2,
    rotateX: (t) => Du(tr(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Du(tr(Math.atan2(-t[2], t[0]))),
    rotateZ: dp,
    rotate: dp,
    skewX: (t) => tr(Math.atan(t[4])),
    skewY: (t) => tr(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Vu(t) {
  return t.includes("scale") ? 1 : 0;
}
function Iu(t, r) {
  if (!t || t === "none") return Vu(r);
  const s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, l;
  if (s) ((o = KS), (l = s));
  else {
    const h = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = qS), (l = h));
  }
  if (!l) return Vu(r);
  const c = o[r],
    d = l[1].split(",").map(YS);
  return typeof c == "function" ? c(d) : d[c];
}
const GS = (t, r) => {
  const { transform: s = "none" } = getComputedStyle(t);
  return Iu(s, r);
};
function YS(t) {
  return parseFloat(t.trim());
}
const Wr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Hr = new Set(Wr),
  pp = (t) => t === $r || t === Y,
  XS = new Set(["x", "y", "z"]),
  QS = Wr.filter((t) => !XS.has(t));
function ZS(t) {
  const r = [];
  return (
    QS.forEach((s) => {
      const o = t.getValue(s);
      o !== void 0 &&
        (r.push([s, o.get()]), o.set(s.startsWith("scale") ? 1 : 0));
    }),
    r
  );
}
const Vn = {
  width: (
    { x: t },
    { paddingLeft: r = "0", paddingRight: s = "0", boxSizing: o },
  ) => {
    const l = t.max - t.min;
    return o === "border-box" ? l : l - parseFloat(r) - parseFloat(s);
  },
  height: (
    { y: t },
    { paddingTop: r = "0", paddingBottom: s = "0", boxSizing: o },
  ) => {
    const l = t.max - t.min;
    return o === "border-box" ? l : l - parseFloat(r) - parseFloat(s);
  },
  top: (t, { top: r }) => parseFloat(r),
  left: (t, { left: r }) => parseFloat(r),
  bottom: ({ y: t }, { top: r }) => parseFloat(r) + (t.max - t.min),
  right: ({ x: t }, { left: r }) => parseFloat(r) + (t.max - t.min),
  x: (t, { transform: r }) => Iu(r, "x"),
  y: (t, { transform: r }) => Iu(r, "y"),
};
Vn.translateX = Vn.x;
Vn.translateY = Vn.y;
const rr = new Set();
let _u = !1,
  Ou = !1,
  Fu = !1;
function Eg() {
  if (Ou) {
    const t = Array.from(rr).filter((o) => o.needsMeasurement),
      r = new Set(t.map((o) => o.element)),
      s = new Map();
    (r.forEach((o) => {
      const l = ZS(o);
      l.length && (s.set(o, l), o.render());
    }),
      t.forEach((o) => o.measureInitialState()),
      r.forEach((o) => {
        o.render();
        const l = s.get(o);
        l &&
          l.forEach(([c, d]) => {
            var h;
            (h = o.getValue(c)) == null || h.set(d);
          });
      }),
      t.forEach((o) => o.measureEndState()),
      t.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((Ou = !1), (_u = !1), rr.forEach((t) => t.complete(Fu)), rr.clear());
}
function Tg() {
  rr.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Ou = !0));
  });
}
function JS() {
  ((Fu = !0), Tg(), Eg(), (Fu = !1));
}
class kc {
  constructor(r, s, o, l, c, d = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...r]),
      (this.onComplete = s),
      (this.name = o),
      (this.motionValue = l),
      (this.element = c),
      (this.isAsync = d));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (rr.add(this),
          _u || ((_u = !0), xe.read(Tg), xe.resolveKeyframes(Eg)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: r,
      name: s,
      element: o,
      motionValue: l,
    } = this;
    if (r[0] === null) {
      const c = l == null ? void 0 : l.get(),
        d = r[r.length - 1];
      if (c !== void 0) r[0] = c;
      else if (o && s) {
        const h = o.readValue(s, d);
        h != null && (r[0] = h);
      }
      (r[0] === void 0 && (r[0] = d), l && c === void 0 && l.set(r[0]));
    }
    HS(r);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(r = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r),
      rr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (rr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const e2 = (t) => t.startsWith("--");
function Pg(t, r, s) {
  e2(r) ? t.style.setProperty(r, s) : (t.style[r] = s);
}
const t2 = {};
function jg(t, r) {
  const s = eg(t);
  return () => t2[r] ?? s();
}
const n2 = jg(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Ng = jg(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Oi = ([t, r, s, o]) => `cubic-bezier(${t}, ${r}, ${s}, ${o})`,
  mp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Oi([0, 0.65, 0.55, 1]),
    circOut: Oi([0.55, 0, 1, 0.45]),
    backIn: Oi([0.31, 0.01, 0.66, -0.59]),
    backOut: Oi([0.33, 1.53, 0.69, 0.99]),
  };
function Rg(t, r) {
  if (t)
    return typeof t == "function"
      ? Ng()
        ? Sg(t, r)
        : "ease-out"
      : dg(t)
        ? Oi(t)
        : Array.isArray(t)
          ? t.map((s) => Rg(s, r) || mp.easeOut)
          : mp[t];
}
function r2(
  t,
  r,
  s,
  {
    delay: o = 0,
    duration: l = 300,
    repeat: c = 0,
    repeatType: d = "loop",
    ease: h = "easeOut",
    times: p,
  } = {},
  g = void 0,
) {
  const y = { [r]: s };
  p && (y.offset = p);
  const v = Rg(h, l);
  Array.isArray(v) && (y.easing = v);
  const w = {
    delay: o,
    duration: l,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: c + 1,
    direction: d === "reverse" ? "alternate" : "normal",
  };
  return (g && (w.pseudoElement = g), t.animate(y, w));
}
function bg(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function i2({ type: t, ...r }) {
  return bg(t) && Ng()
    ? t.applyToOptions(r)
    : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r);
}
class Mg extends Sc {
  constructor(r) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !r)
    )
      return;
    const {
      element: s,
      name: o,
      keyframes: l,
      pseudoElement: c,
      allowFlatten: d = !1,
      finalKeyframe: h,
      onComplete: p,
    } = r;
    ((this.isPseudoElement = !!c),
      (this.allowFlatten = d),
      (this.options = r),
      fc(typeof r.type != "string"));
    const g = i2(r);
    ((this.animation = r2(s, o, l, g, c)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !c)) {
          const y = Ho(l, this.options, h, this.speed);
          (this.updateMotionValue && this.updateMotionValue(y),
            Pg(s, o, y),
            this.animation.cancel());
        }
        (p == null || p(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var r, s;
    (s = (r = this.animation).finish) == null || s.call(r);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: r } = this;
    r === "idle" ||
      r === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var s, o, l;
    const r = (s = this.options) == null ? void 0 : s.element;
    !this.isPseudoElement &&
      r != null &&
      r.isConnected &&
      ((l = (o = this.animation).commitStyles) == null || l.call(o));
  }
  get duration() {
    var s, o;
    const r =
      ((o =
        (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) ==
      null
        ? void 0
        : o.call(s).duration) || 0;
    return Tt(Number(r));
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + Tt(r);
  }
  get time() {
    return Tt(Number(this.animation.currentTime) || 0);
  }
  set time(r) {
    const s = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = yt(r)),
      s && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(r) {
    (r < 0 && (this.finishedTime = null), (this.animation.playbackRate = r));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(r) {
    this.manualStartTime = this.animation.startTime = r;
  }
  attachTimeline({ timeline: r, rangeStart: s, rangeEnd: o, observe: l }) {
    var c;
    return (
      this.allowFlatten &&
        ((c = this.animation.effect) == null ||
          c.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      r && n2()
        ? ((this.animation.timeline = r),
          s && (this.animation.rangeStart = s),
          o && (this.animation.rangeEnd = o),
          Pt)
        : l(this)
    );
  }
}
const Ag = { anticipate: ag, backInOut: og, circInOut: ug };
function s2(t) {
  return t in Ag;
}
function o2(t) {
  typeof t.ease == "string" && s2(t.ease) && (t.ease = Ag[t.ease]);
}
const au = 10;
class a2 extends Mg {
  constructor(r) {
    (o2(r),
      Cg(r),
      super(r),
      r.startTime !== void 0 &&
        r.autoplay !== !1 &&
        (this.startTime = r.startTime),
      (this.options = r));
  }
  updateMotionValue(r) {
    const {
      motionValue: s,
      onUpdate: o,
      onComplete: l,
      element: c,
      ...d
    } = this.options;
    if (!s) return;
    if (r !== void 0) {
      s.set(r);
      return;
    }
    const h = new _o({ ...d, autoplay: !1 }),
      p = Math.max(au, it.now() - this.startTime),
      g = Qt(0, au, p - au),
      y = h.sample(p).value,
      { name: v } = this.options;
    (c && v && Pg(c, v, y),
      s.setWithVelocity(h.sample(Math.max(0, p - g)).value, y, g),
      h.stop());
  }
}
const gp = (t, r) =>
  r === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (Ft.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function l2(t) {
  const r = t[0];
  if (t.length === 1) return !0;
  for (let s = 0; s < t.length; s++) if (t[s] !== r) return !0;
}
function u2(t, r, s, o) {
  const l = t[0];
  if (l === null) return !1;
  if (r === "display" || r === "visibility") return !0;
  const c = t[t.length - 1],
    d = gp(l, r),
    h = gp(c, r);
  return !d || !h ? !1 : l2(t) || ((s === "spring" || bg(s)) && o);
}
function zu(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
const Lg = new Set(["opacity", "clipPath", "filter", "transform"]),
  c2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function d2(t) {
  for (let r = 0; r < t.length; r++)
    if (typeof t[r] == "string" && c2.test(t[r])) return !0;
  return !1;
}
const f2 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  h2 = eg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function p2(t) {
  var v;
  const {
    motionValue: r,
    name: s,
    repeatDelay: o,
    repeatType: l,
    damping: c,
    type: d,
    keyframes: h,
  } = t;
  if (
    !(
      ((v = r == null ? void 0 : r.owner) == null
        ? void 0
        : v.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: g, transformTemplate: y } = r.owner.getProps();
  return (
    h2() &&
    s &&
    (Lg.has(s) || (f2.has(s) && d2(h))) &&
    (s !== "transform" || !y) &&
    !g &&
    !o &&
    l !== "mirror" &&
    c !== 0 &&
    d !== "inertia"
  );
}
const m2 = 40;
class g2 extends Sc {
  constructor({
    autoplay: r = !0,
    delay: s = 0,
    type: o = "keyframes",
    repeat: l = 0,
    repeatDelay: c = 0,
    repeatType: d = "loop",
    keyframes: h,
    name: p,
    motionValue: g,
    element: y,
    ...v
  }) {
    var N;
    (super(),
      (this.stop = () => {
        var M, j;
        (this._animation &&
          (this._animation.stop(),
          (M = this.stopTimeline) == null || M.call(this)),
          (j = this.keyframeResolver) == null || j.cancel());
      }),
      (this.createdAt = it.now()));
    const w = {
        autoplay: r,
        delay: s,
        type: o,
        repeat: l,
        repeatDelay: c,
        repeatType: d,
        name: p,
        motionValue: g,
        element: y,
        ...v,
      },
      C = (y == null ? void 0 : y.KeyframeResolver) || kc;
    ((this.keyframeResolver = new C(
      h,
      (M, j, A) => this.onKeyframesResolved(M, j, w, !A),
      p,
      g,
      y,
    )),
      (N = this.keyframeResolver) == null || N.scheduleResolve());
  }
  onKeyframesResolved(r, s, o, l) {
    var A, V;
    this.keyframeResolver = void 0;
    const {
      name: c,
      type: d,
      velocity: h,
      delay: p,
      isHandoff: g,
      onUpdate: y,
    } = o;
    this.resolvedAt = it.now();
    let v = !0;
    u2(r, c, d, h) ||
      ((v = !1),
      (In.instantAnimations || !p) && (y == null || y(Ho(r, o, s))),
      (r[0] = r[r.length - 1]),
      zu(o),
      (o.repeat = 0));
    const C = {
        startTime: l
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > m2
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: s,
        ...o,
        keyframes: r,
      },
      N = v && !g && p2(C),
      M =
        (V = (A = C.motionValue) == null ? void 0 : A.owner) == null
          ? void 0
          : V.current;
    let j;
    if (N)
      try {
        j = new a2({ ...C, element: M });
      } catch {
        j = new _o(C);
      }
    else j = new _o(C);
    (j.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Pt),
      this.pendingTimeline &&
        ((this.stopTimeline = j.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = j));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(r, s) {
    return this.finished.finally(r).then(() => {});
  }
  get animation() {
    var r;
    return (
      this._animation ||
        ((r = this.keyframeResolver) == null || r.resume(), JS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(r) {
    this.animation.time = r;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(r) {
    this.animation.speed = r;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(r) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(r))
        : (this.pendingTimeline = r),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var r;
    (this._animation && this.animation.cancel(),
      (r = this.keyframeResolver) == null || r.cancel());
  }
}
function Dg(t, r, s, o = 0, l = 1) {
  const c = Array.from(t)
      .sort((g, y) => g.sortNodePosition(y))
      .indexOf(r),
    d = t.size,
    h = (d - 1) * o;
  return typeof s == "function" ? s(c, d) : l === 1 ? c * o : h - c * o;
}
const y2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function v2(t) {
  const r = y2.exec(t);
  if (!r) return [,];
  const [, s, o, l] = r;
  return [`--${s ?? o}`, l];
}
function Vg(t, r, s = 1) {
  const [o, l] = v2(t);
  if (!o) return;
  const c = window.getComputedStyle(r).getPropertyValue(o);
  if (c) {
    const d = c.trim();
    return Qm(d) ? parseFloat(d) : d;
  }
  return gc(l) ? Vg(l, r, s + 1) : l;
}
const x2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  w2 = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  S2 = { type: "keyframes", duration: 0.8 },
  k2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  C2 = (t, { keyframes: r }) =>
    r.length > 2
      ? S2
      : Hr.has(t)
        ? t.startsWith("scale")
          ? w2(r[1])
          : x2
        : k2;
function Ig(t, r) {
  if (t != null && t.inherit && r) {
    const { inherit: s, ...o } = t;
    return { ...r, ...o };
  }
  return t;
}
function Cc(t, r) {
  const s =
    (t == null ? void 0 : t[r]) ?? (t == null ? void 0 : t.default) ?? t;
  return s !== t ? Ig(s, t) : s;
}
const E2 = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function T2(t) {
  for (const r in t) if (!E2.has(r)) return !0;
  return !1;
}
const Ec =
  (t, r, s, o = {}, l, c) =>
  (d) => {
    const h = Cc(o, t) || {},
      p = h.delay || o.delay || 0;
    let { elapsed: g = 0 } = o;
    g = g - yt(p);
    const y = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: r.getVelocity(),
      ...h,
      delay: -g,
      onUpdate: (w) => {
        (r.set(w), h.onUpdate && h.onUpdate(w));
      },
      onComplete: () => {
        (d(), h.onComplete && h.onComplete());
      },
      name: t,
      motionValue: r,
      element: c ? void 0 : l,
    };
    (T2(h) || Object.assign(y, C2(t, y)),
      y.duration && (y.duration = yt(y.duration)),
      y.repeatDelay && (y.repeatDelay = yt(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from));
    let v = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        (zu(y), y.delay === 0 && (v = !0)),
      (In.instantAnimations ||
        In.skipAnimations ||
        (l != null && l.shouldSkipAnimations)) &&
        ((v = !0), zu(y), (y.delay = 0)),
      (y.allowFlatten = !h.type && !h.ease),
      v && !c && r.get() !== void 0)
    ) {
      const w = Ho(y.keyframes, h);
      if (w !== void 0) {
        xe.update(() => {
          (y.onUpdate(w), y.onComplete());
        });
        return;
      }
    }
    return h.isSync ? new _o(y) : new g2(y);
  };
function yp(t) {
  const r = [{}, {}];
  return (
    t == null ||
      t.values.forEach((s, o) => {
        ((r[0][o] = s.get()), (r[1][o] = s.getVelocity()));
      }),
    r
  );
}
function Tc(t, r, s, o) {
  if (typeof r == "function") {
    const [l, c] = yp(o);
    r = r(s !== void 0 ? s : t.custom, l, c);
  }
  if (
    (typeof r == "string" && (r = t.variants && t.variants[r]),
    typeof r == "function")
  ) {
    const [l, c] = yp(o);
    r = r(s !== void 0 ? s : t.custom, l, c);
  }
  return r;
}
function ir(t, r, s) {
  const o = t.getProps();
  return Tc(o, r, s !== void 0 ? s : o.custom, t);
}
const _g = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Wr,
  ]),
  vp = 30,
  P2 = (t) => !isNaN(parseFloat(t));
class j2 {
  constructor(r, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        var c;
        const l = it.now();
        if (
          (this.updatedAt !== l && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            ((c = this.events.change) == null || c.notify(this.current),
            this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(r),
      (this.owner = s.owner));
  }
  setCurrent(r) {
    ((this.current = r),
      (this.updatedAt = it.now()),
      this.canTrackVelocity === null &&
        r !== void 0 &&
        (this.canTrackVelocity = P2(this.current)));
  }
  setPrevFrameValue(r = this.current) {
    ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(r) {
    return this.on("change", r);
  }
  on(r, s) {
    this.events[r] || (this.events[r] = new hc());
    const o = this.events[r].add(s);
    return r === "change"
      ? () => {
          (o(),
            xe.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const r in this.events) this.events[r].clear();
  }
  attach(r, s) {
    ((this.passiveEffect = r), (this.stopPassiveEffect = s));
  }
  set(r) {
    this.passiveEffect
      ? this.passiveEffect(r, this.updateAndNotify)
      : this.updateAndNotify(r);
  }
  setWithVelocity(r, s, o) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = r),
      (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(r, s = !0) {
    (this.updateAndNotify(r),
      (this.prev = r),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var r;
    (r = this.events.change) == null || r.notify(this.current);
  }
  addDependent(r) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(r));
  }
  removeDependent(r) {
    this.dependents && this.dependents.delete(r);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const r = it.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      r - this.updatedAt > vp
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, vp);
    return tg(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(r) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = r(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var r, s;
    ((r = this.dependents) == null || r.clear(),
      (s = this.events.destroy) == null || s.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function zr(t, r) {
  return new j2(t, r);
}
const Bu = (t) => Array.isArray(t);
function N2(t, r, s) {
  t.hasValue(r) ? t.getValue(r).set(s) : t.addValue(r, zr(s));
}
function R2(t) {
  return Bu(t) ? t[t.length - 1] || 0 : t;
}
function b2(t, r) {
  const s = ir(t, r);
  let { transitionEnd: o = {}, transition: l = {}, ...c } = s || {};
  c = { ...c, ...o };
  for (const d in c) {
    const h = R2(c[d]);
    N2(t, d, h);
  }
}
const Qe = (t) => !!(t && t.getVelocity);
function M2(t) {
  return !!(Qe(t) && t.add);
}
function Uu(t, r) {
  const s = t.getValue("willChange");
  if (M2(s)) return s.add(r);
  if (!s && In.WillChange) {
    const o = new In.WillChange("auto");
    (t.addValue("willChange", o), o.add(r));
  }
}
function Pc(t) {
  return t.replace(/([A-Z])/g, (r) => `-${r.toLowerCase()}`);
}
const A2 = "framerAppearId",
  Og = "data-" + Pc(A2);
function Fg(t) {
  return t.props[Og];
}
function L2({ protectedKeys: t, needsAnimating: r }, s) {
  const o = t.hasOwnProperty(s) && r[s] !== !0;
  return ((r[s] = !1), o);
}
function zg(t, r, { delay: s = 0, transitionOverride: o, type: l } = {}) {
  let { transition: c, transitionEnd: d, ...h } = r;
  const p = t.getDefaultTransition();
  c = c ? Ig(c, p) : p;
  const g = c == null ? void 0 : c.reduceMotion;
  o && (c = o);
  const y = [],
    v = l && t.animationState && t.animationState.getState()[l];
  for (const w in h) {
    const C = t.getValue(w, t.latestValues[w] ?? null),
      N = h[w];
    if (N === void 0 || (v && L2(v, w))) continue;
    const M = { delay: s, ...Cc(c || {}, w) },
      j = C.get();
    if (
      j !== void 0 &&
      !C.isAnimating() &&
      !Array.isArray(N) &&
      N === j &&
      !M.velocity
    ) {
      xe.update(() => C.set(N));
      continue;
    }
    let A = !1;
    if (window.MotionHandoffAnimation) {
      const $ = Fg(t);
      if ($) {
        const W = window.MotionHandoffAnimation($, w, xe);
        W !== null && ((M.startTime = W), (A = !0));
      }
    }
    Uu(t, w);
    const V = g ?? t.shouldReduceMotion;
    C.start(Ec(w, C, N, V && _g.has(w) ? { type: !1 } : M, t, A));
    const D = C.animation;
    D && y.push(D);
  }
  if (d) {
    const w = () =>
      xe.update(() => {
        d && b2(t, d);
      });
    y.length ? Promise.all(y).then(w) : w();
  }
  return y;
}
function $u(t, r, s = {}) {
  var p;
  const o = ir(
    t,
    r,
    s.type === "exit"
      ? (p = t.presenceContext) == null
        ? void 0
        : p.custom
      : void 0,
  );
  let { transition: l = t.getDefaultTransition() || {} } = o || {};
  s.transitionOverride && (l = s.transitionOverride);
  const c = o ? () => Promise.all(zg(t, o, s)) : () => Promise.resolve(),
    d =
      t.variantChildren && t.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: y = 0,
              staggerChildren: v,
              staggerDirection: w,
            } = l;
            return D2(t, r, g, y, v, w, s);
          }
        : () => Promise.resolve(),
    { when: h } = l;
  if (h) {
    const [g, y] = h === "beforeChildren" ? [c, d] : [d, c];
    return g().then(() => y());
  } else return Promise.all([c(), d(s.delay)]);
}
function D2(t, r, s = 0, o = 0, l = 0, c = 1, d) {
  const h = [];
  for (const p of t.variantChildren)
    (p.notify("AnimationStart", r),
      h.push(
        $u(p, r, {
          ...d,
          delay:
            s +
            (typeof o == "function" ? 0 : o) +
            Dg(t.variantChildren, p, o, l, c),
        }).then(() => p.notify("AnimationComplete", r)),
      ));
  return Promise.all(h);
}
function V2(t, r, s = {}) {
  t.notify("AnimationStart", r);
  let o;
  if (Array.isArray(r)) {
    const l = r.map((c) => $u(t, c, s));
    o = Promise.all(l);
  } else if (typeof r == "string") o = $u(t, r, s);
  else {
    const l = typeof r == "function" ? ir(t, r, s.custom) : r;
    o = Promise.all(zg(t, l, s));
  }
  return o.then(() => {
    t.notify("AnimationComplete", r);
  });
}
const I2 = { test: (t) => t === "auto", parse: (t) => t },
  Bg = (t) => (r) => r.test(t),
  Ug = [$r, Y, Yt, Mn, lS, aS, I2],
  xp = (t) => Ug.find(Bg(t));
function _2(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || Jm(t)
      : !0;
}
const O2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function F2(t) {
  const [r, s] = t.slice(0, -1).split("(");
  if (r === "drop-shadow") return t;
  const [o] = s.match(yc) || [];
  if (!o) return t;
  const l = s.replace(o, "");
  let c = O2.has(r) ? 1 : 0;
  return (o !== s && (c *= 100), r + "(" + c + l + ")");
}
const z2 = /\b([a-z-]*)\(.*?\)/gu,
  Wu = {
    ...Ft,
    getAnimatableNone: (t) => {
      const r = t.match(z2);
      return r ? r.map(F2).join(" ") : t;
    },
  },
  Hu = {
    ...Ft,
    getAnimatableNone: (t) => {
      const r = Ft.parse(t);
      return Ft.createTransformer(t)(
        r.map((o) =>
          typeof o == "number"
            ? 0
            : typeof o == "object"
              ? { ...o, alpha: 1 }
              : o,
        ),
      );
    },
  },
  wp = { ...$r, transform: Math.round },
  B2 = {
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: yo,
    scaleX: yo,
    scaleY: yo,
    scaleZ: yo,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: Y,
    translateX: Y,
    translateY: Y,
    translateZ: Y,
    x: Y,
    y: Y,
    z: Y,
    perspective: Y,
    transformPerspective: Y,
    opacity: Hi,
    originX: op,
    originY: op,
    originZ: Y,
  },
  jc = {
    borderWidth: Y,
    borderTopWidth: Y,
    borderRightWidth: Y,
    borderBottomWidth: Y,
    borderLeftWidth: Y,
    borderRadius: Y,
    borderTopLeftRadius: Y,
    borderTopRightRadius: Y,
    borderBottomRightRadius: Y,
    borderBottomLeftRadius: Y,
    width: Y,
    maxWidth: Y,
    height: Y,
    maxHeight: Y,
    top: Y,
    right: Y,
    bottom: Y,
    left: Y,
    inset: Y,
    insetBlock: Y,
    insetBlockStart: Y,
    insetBlockEnd: Y,
    insetInline: Y,
    insetInlineStart: Y,
    insetInlineEnd: Y,
    padding: Y,
    paddingTop: Y,
    paddingRight: Y,
    paddingBottom: Y,
    paddingLeft: Y,
    paddingBlock: Y,
    paddingBlockStart: Y,
    paddingBlockEnd: Y,
    paddingInline: Y,
    paddingInlineStart: Y,
    paddingInlineEnd: Y,
    margin: Y,
    marginTop: Y,
    marginRight: Y,
    marginBottom: Y,
    marginLeft: Y,
    marginBlock: Y,
    marginBlockStart: Y,
    marginBlockEnd: Y,
    marginInline: Y,
    marginInlineStart: Y,
    marginInlineEnd: Y,
    fontSize: Y,
    backgroundPositionX: Y,
    backgroundPositionY: Y,
    ...B2,
    zIndex: wp,
    fillOpacity: Hi,
    strokeOpacity: Hi,
    numOctaves: wp,
  },
  U2 = {
    ...jc,
    color: ze,
    backgroundColor: ze,
    outlineColor: ze,
    fill: ze,
    stroke: ze,
    borderColor: ze,
    borderTopColor: ze,
    borderRightColor: ze,
    borderBottomColor: ze,
    borderLeftColor: ze,
    filter: Wu,
    WebkitFilter: Wu,
    mask: Hu,
    WebkitMask: Hu,
  },
  $g = (t) => U2[t],
  $2 = new Set([Wu, Hu]);
function Wg(t, r) {
  let s = $g(t);
  return (
    $2.has(s) || (s = Ft),
    s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
  );
}
const W2 = new Set(["auto", "none", "0"]);
function H2(t, r, s) {
  let o = 0,
    l;
  for (; o < t.length && !l; ) {
    const c = t[o];
    (typeof c == "string" && !W2.has(c) && Fr(c).values.length && (l = t[o]),
      o++);
  }
  if (l && s) for (const c of r) t[c] = Wg(s, l);
}
class q2 extends kc {
  constructor(r, s, o, l, c) {
    super(r, s, o, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: s, name: o } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let y = 0; y < r.length; y++) {
      let v = r[y];
      if (typeof v == "string" && ((v = v.trim()), gc(v))) {
        const w = Vg(v, s.current);
        (w !== void 0 && (r[y] = w),
          y === r.length - 1 && (this.finalKeyframe = v));
      }
    }
    if ((this.resolveNoneKeyframes(), !_g.has(o) || r.length !== 2)) return;
    const [l, c] = r,
      d = xp(l),
      h = xp(c),
      p = sp(l),
      g = sp(c);
    if (p !== g && Vn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== h)
      if (pp(d) && pp(h))
        for (let y = 0; y < r.length; y++) {
          const v = r[y];
          typeof v == "string" && (r[y] = parseFloat(v));
        }
      else Vn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: s } = this,
      o = [];
    for (let l = 0; l < r.length; l++) (r[l] === null || _2(r[l])) && o.push(l);
    o.length && H2(r, o, s);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: s, name: o } = this;
    if (!r || !r.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Vn[o](
        r.measureViewportBox(),
        window.getComputedStyle(r.current),
      )),
      (s[0] = this.measuredOrigin));
    const l = s[s.length - 1];
    l !== void 0 && r.getValue(o, l).jump(l, !1);
  }
  measureEndState() {
    var h;
    const { element: r, name: s, unresolvedKeyframes: o } = this;
    if (!r || !r.current) return;
    const l = r.getValue(s);
    l && l.jump(this.measuredOrigin, !1);
    const c = o.length - 1,
      d = o[c];
    ((o[c] = Vn[s](r.measureViewportBox(), window.getComputedStyle(r.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      (h = this.removedTransforms) != null &&
        h.length &&
        this.removedTransforms.forEach(([p, g]) => {
          r.getValue(p).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
function Hg(t, r, s) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let o = document;
    const l = (s == null ? void 0 : s[t]) ?? o.querySelectorAll(t);
    return l ? Array.from(l) : [];
  }
  return Array.from(t).filter((o) => o != null);
}
const qg = (t, r) => (r && typeof t == "number" ? r.transform(t) : t);
function K2(t) {
  return Zm(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: Nc } = fg(queueMicrotask, !1),
  _t = { x: !1, y: !1 };
function Kg() {
  return _t.x || _t.y;
}
function G2(t) {
  return t === "x" || t === "y"
    ? _t[t]
      ? null
      : ((_t[t] = !0),
        () => {
          _t[t] = !1;
        })
    : _t.x || _t.y
      ? null
      : ((_t.x = _t.y = !0),
        () => {
          _t.x = _t.y = !1;
        });
}
function Gg(t, r) {
  const s = Hg(t),
    o = new AbortController(),
    l = { passive: !0, ...r, signal: o.signal };
  return [s, l, () => o.abort()];
}
function Y2(t) {
  return !(t.pointerType === "touch" || Kg());
}
function X2(t, r, s = {}) {
  const [o, l, c] = Gg(t, s);
  return (
    o.forEach((d) => {
      let h = !1,
        p = !1,
        g;
      const y = () => {
          d.removeEventListener("pointerleave", N);
        },
        v = (j) => {
          (g && (g(j), (g = void 0)), y());
        },
        w = (j) => {
          ((h = !1),
            window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", w),
            p && ((p = !1), v(j)));
        },
        C = () => {
          ((h = !0),
            window.addEventListener("pointerup", w, l),
            window.addEventListener("pointercancel", w, l));
        },
        N = (j) => {
          if (j.pointerType !== "touch") {
            if (h) {
              p = !0;
              return;
            }
            v(j);
          }
        },
        M = (j) => {
          if (!Y2(j)) return;
          p = !1;
          const A = r(d, j);
          typeof A == "function" &&
            ((g = A), d.addEventListener("pointerleave", N, l));
        };
      (d.addEventListener("pointerenter", M, l),
        d.addEventListener("pointerdown", C, l));
    }),
    c
  );
}
const Yg = (t, r) => (r ? (t === r ? !0 : Yg(t, r.parentElement)) : !1),
  Rc = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  Q2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Z2(t) {
  return Q2.has(t.tagName) || t.isContentEditable === !0;
}
const J2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function ek(t) {
  return J2.has(t.tagName) || t.isContentEditable === !0;
}
const Po = new WeakSet();
function Sp(t) {
  return (r) => {
    r.key === "Enter" && t(r);
  };
}
function lu(t, r) {
  t.dispatchEvent(
    new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }),
  );
}
const tk = (t, r) => {
  const s = t.currentTarget;
  if (!s) return;
  const o = Sp(() => {
    if (Po.has(s)) return;
    lu(s, "down");
    const l = Sp(() => {
        lu(s, "up");
      }),
      c = () => lu(s, "cancel");
    (s.addEventListener("keyup", l, r), s.addEventListener("blur", c, r));
  });
  (s.addEventListener("keydown", o, r),
    s.addEventListener("blur", () => s.removeEventListener("keydown", o), r));
};
function kp(t) {
  return Rc(t) && !Kg();
}
const Cp = new WeakSet();
function nk(t, r, s = {}) {
  const [o, l, c] = Gg(t, s),
    d = (h) => {
      const p = h.currentTarget;
      if (!kp(h) || Cp.has(h)) return;
      (Po.add(p), s.stopPropagation && Cp.add(h));
      const g = r(p, h),
        y = (C, N) => {
          (window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", w),
            Po.has(p) && Po.delete(p),
            kp(C) && typeof g == "function" && g(C, { success: N }));
        },
        v = (C) => {
          y(
            C,
            p === window ||
              p === document ||
              s.useGlobalTarget ||
              Yg(p, C.target),
          );
        },
        w = (C) => {
          y(C, !1);
        };
      (window.addEventListener("pointerup", v, l),
        window.addEventListener("pointercancel", w, l));
    };
  return (
    o.forEach((h) => {
      ((s.useGlobalTarget ? window : h).addEventListener("pointerdown", d, l),
        K2(h) &&
          (h.addEventListener("focus", (g) => tk(g, l)),
          !Z2(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0)));
    }),
    c
  );
}
function bc(t) {
  return Zm(t) && "ownerSVGElement" in t;
}
const jo = new WeakMap();
let An;
const Xg = (t, r, s) => (o, l) =>
    l && l[0]
      ? l[0][t + "Size"]
      : bc(o) && "getBBox" in o
        ? o.getBBox()[r]
        : o[s],
  rk = Xg("inline", "width", "offsetWidth"),
  ik = Xg("block", "height", "offsetHeight");
function sk({ target: t, borderBoxSize: r }) {
  var s;
  (s = jo.get(t)) == null ||
    s.forEach((o) => {
      o(t, {
        get width() {
          return rk(t, r);
        },
        get height() {
          return ik(t, r);
        },
      });
    });
}
function ok(t) {
  t.forEach(sk);
}
function ak() {
  typeof ResizeObserver > "u" || (An = new ResizeObserver(ok));
}
function lk(t, r) {
  An || ak();
  const s = Hg(t);
  return (
    s.forEach((o) => {
      let l = jo.get(o);
      (l || ((l = new Set()), jo.set(o, l)),
        l.add(r),
        An == null || An.observe(o));
    }),
    () => {
      s.forEach((o) => {
        const l = jo.get(o);
        (l == null || l.delete(r),
          (l != null && l.size) || An == null || An.unobserve(o));
      });
    }
  );
}
const No = new Set();
let Vr;
function uk() {
  ((Vr = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    No.forEach((r) => r(t));
  }),
    window.addEventListener("resize", Vr));
}
function ck(t) {
  return (
    No.add(t),
    Vr || uk(),
    () => {
      (No.delete(t),
        !No.size &&
          typeof Vr == "function" &&
          (window.removeEventListener("resize", Vr), (Vr = void 0)));
    }
  );
}
function Ep(t, r) {
  return typeof t == "function" ? ck(t) : lk(t, r);
}
function dk(t) {
  return bc(t) && t.tagName === "svg";
}
const fk = [...Ug, ze, Ft],
  hk = (t) => fk.find(Bg(t)),
  Tp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ir = () => ({ x: Tp(), y: Tp() }),
  Pp = () => ({ min: 0, max: 0 }),
  $e = () => ({ x: Pp(), y: Pp() }),
  pk = new WeakMap();
function qo(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function qi(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Mc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ac = ["initial", ...Mc];
function Ko(t) {
  return qo(t.animate) || Ac.some((r) => qi(t[r]));
}
function Qg(t) {
  return !!(Ko(t) || t.variants);
}
function mk(t, r, s) {
  for (const o in r) {
    const l = r[o],
      c = s[o];
    if (Qe(l)) t.addValue(o, l);
    else if (Qe(c)) t.addValue(o, zr(l, { owner: t }));
    else if (c !== l)
      if (t.hasValue(o)) {
        const d = t.getValue(o);
        d.liveStyle === !0 ? d.jump(l) : d.hasAnimated || d.set(l);
      } else {
        const d = t.getStaticValue(o);
        t.addValue(o, zr(d !== void 0 ? d : l, { owner: t }));
      }
  }
  for (const o in s) r[o] === void 0 && t.removeValue(o);
  return r;
}
const qu = { current: null },
  Zg = { current: !1 },
  gk = typeof window < "u";
function yk() {
  if (((Zg.current = !0), !!gk))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        r = () => (qu.current = t.matches);
      (t.addEventListener("change", r), r());
    } else qu.current = !1;
}
const jp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Oo = {};
function Jg(t) {
  Oo = t;
}
function vk() {
  return Oo;
}
class xk {
  scrapeMotionValuesFromProps(r, s, o) {
    return {};
  }
  constructor(
    {
      parent: r,
      props: s,
      presenceContext: o,
      reducedMotionConfig: l,
      skipAnimations: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = kc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const C = it.now();
        this.renderScheduledAt < C &&
          ((this.renderScheduledAt = C), xe.render(this.render, !1, !0));
      }));
    const { latestValues: g, renderState: y } = h;
    ((this.latestValues = g),
      (this.baseTarget = { ...g }),
      (this.initialValues = s.initial ? { ...g } : {}),
      (this.renderState = y),
      (this.parent = r),
      (this.props = s),
      (this.presenceContext = o),
      (this.depth = r ? r.depth + 1 : 0),
      (this.reducedMotionConfig = l),
      (this.skipAnimationsConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Ko(s)),
      (this.isVariantNode = Qg(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(r && r.current)));
    const { willChange: v, ...w } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this,
    );
    for (const C in w) {
      const N = w[C];
      g[C] !== void 0 && Qe(N) && N.set(g[C]);
    }
  }
  mount(r) {
    var s, o;
    if (this.hasBeenMounted)
      for (const l in this.initialValues)
        ((s = this.values.get(l)) == null || s.jump(this.initialValues[l]),
          (this.latestValues[l] = this.initialValues[l]));
    ((this.current = r),
      pk.set(r, this),
      this.projection && !this.projection.instance && this.projection.mount(r),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((l, c) => this.bindToMotionValue(c, l)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (Zg.current || yk(), (this.shouldReduceMotion = qu.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (o = this.parent) == null || o.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var r;
    (this.projection && this.projection.unmount(),
      _n(this.notifyUpdate),
      _n(this.render),
      this.valueSubscriptions.forEach((s) => s()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (r = this.parent) == null || r.removeChild(this));
    for (const s in this.events) this.events[s].clear();
    for (const s in this.features) {
      const o = this.features[s];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(r) {
    (this.children.add(r),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(r));
  }
  removeChild(r) {
    (this.children.delete(r),
      this.enteringChildren && this.enteringChildren.delete(r));
  }
  bindToMotionValue(r, s) {
    if (
      (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(),
      s.accelerate && Lg.has(r) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: d,
          keyframes: h,
          times: p,
          ease: g,
          duration: y,
        } = s.accelerate,
        v = new Mg({
          element: this.current,
          name: r,
          keyframes: h,
          times: p,
          ease: g,
          duration: yt(y),
        }),
        w = d(v);
      this.valueSubscriptions.set(r, () => {
        (w(), v.cancel());
      });
      return;
    }
    const o = Hr.has(r);
    o && this.onBindTransform && this.onBindTransform();
    const l = s.on("change", (d) => {
      ((this.latestValues[r] = d),
        this.props.onUpdate && xe.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let c;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, r, s)),
      this.valueSubscriptions.set(r, () => {
        (l(), c && c(), s.owner && s.stop());
      }));
  }
  sortNodePosition(r) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== r.type
      ? 0
      : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in Oo) {
      const s = Oo[r];
      if (!s) continue;
      const { isEnabled: o, Feature: l } = s;
      if (
        (!this.features[r] &&
          l &&
          o(this.props) &&
          (this.features[r] = new l(this)),
        this.features[r])
      ) {
        const c = this.features[r];
        c.isMounted ? c.update() : (c.mount(), (c.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : $e();
  }
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, s) {
    this.latestValues[r] = s;
  }
  update(r, s) {
    ((r.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = r),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s));
    for (let o = 0; o < jp.length; o++) {
      const l = jp[o];
      this.propEventSubscriptions[l] &&
        (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const c = "on" + l,
        d = r[c];
      d && (this.propEventSubscriptions[l] = this.on(l, d));
    }
    ((this.prevMotionValues = mk(
      this,
      this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(r) {
    return this.props.variants ? this.props.variants[r] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(r) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(r),
        () => s.variantChildren.delete(r)
      );
  }
  addValue(r, s) {
    const o = this.values.get(r);
    s !== o &&
      (o && this.removeValue(r),
      this.bindToMotionValue(r, s),
      this.values.set(r, s),
      (this.latestValues[r] = s.get()));
  }
  removeValue(r) {
    this.values.delete(r);
    const s = this.valueSubscriptions.get(r);
    (s && (s(), this.valueSubscriptions.delete(r)),
      delete this.latestValues[r],
      this.removeValueFromRenderState(r, this.renderState));
  }
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, s) {
    if (this.props.values && this.props.values[r]) return this.props.values[r];
    let o = this.values.get(r);
    return (
      o === void 0 &&
        s !== void 0 &&
        ((o = zr(s === null ? void 0 : s, { owner: this })),
        this.addValue(r, o)),
      o
    );
  }
  readValue(r, s) {
    let o =
      this.latestValues[r] !== void 0 || !this.current
        ? this.latestValues[r]
        : (this.getBaseTargetFromProps(this.props, r) ??
          this.readValueFromInstance(this.current, r, this.options));
    return (
      o != null &&
        (typeof o == "string" && (Qm(o) || Jm(o))
          ? (o = parseFloat(o))
          : !hk(o) && Ft.test(s) && (o = Wg(r, s)),
        this.setBaseTarget(r, Qe(o) ? o.get() : o)),
      Qe(o) ? o.get() : o
    );
  }
  setBaseTarget(r, s) {
    this.baseTarget[r] = s;
  }
  getBaseTarget(r) {
    var c;
    const { initial: s } = this.props;
    let o;
    if (typeof s == "string" || typeof s == "object") {
      const d = Tc(
        this.props,
        s,
        (c = this.presenceContext) == null ? void 0 : c.custom,
      );
      d && (o = d[r]);
    }
    if (s && o !== void 0) return o;
    const l = this.getBaseTargetFromProps(this.props, r);
    return l !== void 0 && !Qe(l)
      ? l
      : this.initialValues[r] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[r];
  }
  on(r, s) {
    return (
      this.events[r] || (this.events[r] = new hc()),
      this.events[r].add(s)
    );
  }
  notify(r, ...s) {
    this.events[r] && this.events[r].notify(...s);
  }
  scheduleRenderMicrotask() {
    Nc.render(this.render);
  }
}
class ey extends xk {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = q2));
  }
  sortInstanceNodePosition(r, s) {
    return r.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, s) {
    const o = r.style;
    return o ? o[s] : void 0;
  }
  removeValueFromRenderState(r, { vars: s, style: o }) {
    (delete s[r], delete o[r]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    Qe(r) &&
      (this.childSubscription = r.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
class On {
  constructor(r) {
    ((this.isMounted = !1), (this.node = r));
  }
  update() {}
}
function ty({ top: t, left: r, right: s, bottom: o }) {
  return { x: { min: r, max: s }, y: { min: t, max: o } };
}
function wk({ x: t, y: r }) {
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function Sk(t, r) {
  if (!r) return t;
  const s = r({ x: t.left, y: t.top }),
    o = r({ x: t.right, y: t.bottom });
  return { top: s.y, left: s.x, bottom: o.y, right: o.x };
}
function uu(t) {
  return t === void 0 || t === 1;
}
function Ku({ scale: t, scaleX: r, scaleY: s }) {
  return !uu(t) || !uu(r) || !uu(s);
}
function Jn(t) {
  return (
    Ku(t) ||
    ny(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function ny(t) {
  return Np(t.x) || Np(t.y);
}
function Np(t) {
  return t && t !== "0%";
}
function Fo(t, r, s) {
  const o = t - s,
    l = r * o;
  return s + l;
}
function Rp(t, r, s, o, l) {
  return (l !== void 0 && (t = Fo(t, l, o)), Fo(t, s, o) + r);
}
function Gu(t, r = 0, s = 1, o, l) {
  ((t.min = Rp(t.min, r, s, o, l)), (t.max = Rp(t.max, r, s, o, l)));
}
function ry(t, { x: r, y: s }) {
  (Gu(t.x, r.translate, r.scale, r.originPoint),
    Gu(t.y, s.translate, s.scale, s.originPoint));
}
const bp = 0.999999999999,
  Mp = 1.0000000000001;
function kk(t, r, s, o = !1) {
  var h;
  const l = s.length;
  if (!l) return;
  r.x = r.y = 1;
  let c, d;
  for (let p = 0; p < l; p++) {
    ((c = s[p]), (d = c.projectionDelta));
    const { visualElement: g } = c.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (o &&
        c.options.layoutScroll &&
        c.scroll &&
        c !== c.root &&
        (Kt(t.x, -c.scroll.offset.x), Kt(t.y, -c.scroll.offset.y)),
      d && ((r.x *= d.x.scale), (r.y *= d.y.scale), ry(t, d)),
      o &&
        Jn(c.latestValues) &&
        Ro(t, c.latestValues, (h = c.layout) == null ? void 0 : h.layoutBox));
  }
  (r.x < Mp && r.x > bp && (r.x = 1), r.y < Mp && r.y > bp && (r.y = 1));
}
function Kt(t, r) {
  ((t.min += r), (t.max += r));
}
function Ap(t, r, s, o, l = 0.5) {
  const c = Pe(t.min, t.max, l);
  Gu(t, r, s, c, o);
}
function Lp(t, r) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (r.max - r.min) : t;
}
function Ro(t, r, s) {
  const o = s ?? t;
  (Ap(t.x, Lp(r.x, o.x), r.scaleX, r.scale, r.originX),
    Ap(t.y, Lp(r.y, o.y), r.scaleY, r.scale, r.originY));
}
function iy(t, r) {
  return ty(Sk(t.getBoundingClientRect(), r));
}
function Ck(t, r, s) {
  const o = iy(t, s),
    { scroll: l } = r;
  return (l && (Kt(o.x, l.offset.x), Kt(o.y, l.offset.y)), o);
}
const Ek = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Tk = Wr.length;
function Pk(t, r, s) {
  let o = "",
    l = !0;
  for (let c = 0; c < Tk; c++) {
    const d = Wr[c],
      h = t[d];
    if (h === void 0) continue;
    let p = !0;
    if (typeof h == "number") p = h === (d.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(h);
      p = d.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!p || s) {
      const g = qg(h, jc[d]);
      if (!p) {
        l = !1;
        const y = Ek[d] || d;
        o += `${y}(${g}) `;
      }
      s && (r[d] = g);
    }
  }
  return ((o = o.trim()), s ? (o = s(r, l ? "" : o)) : l && (o = "none"), o);
}
function Lc(t, r, s) {
  const { style: o, vars: l, transformOrigin: c } = t;
  let d = !1,
    h = !1;
  for (const p in r) {
    const g = r[p];
    if (Hr.has(p)) {
      d = !0;
      continue;
    } else if (pg(p)) {
      l[p] = g;
      continue;
    } else {
      const y = qg(g, jc[p]);
      p.startsWith("origin") ? ((h = !0), (c[p] = y)) : (o[p] = y);
    }
  }
  if (
    (r.transform ||
      (d || s
        ? (o.transform = Pk(r, t.transform, s))
        : o.transform && (o.transform = "none")),
    h)
  ) {
    const { originX: p = "50%", originY: g = "50%", originZ: y = 0 } = c;
    o.transformOrigin = `${p} ${g} ${y}`;
  }
}
function sy(t, { style: r, vars: s }, o, l) {
  const c = t.style;
  let d;
  for (d in r) c[d] = r[d];
  l == null || l.applyProjectionStyles(c, o);
  for (d in s) c.setProperty(d, s[d]);
}
function Dp(t, r) {
  return r.max === r.min ? 0 : (t / (r.max - r.min)) * 100;
}
const Vi = {
    correct: (t, r) => {
      if (!r.target) return t;
      if (typeof t == "string")
        if (Y.test(t)) t = parseFloat(t);
        else return t;
      const s = Dp(t, r.target.x),
        o = Dp(t, r.target.y);
      return `${s}% ${o}%`;
    },
  },
  jk = {
    correct: (t, { treeScale: r, projectionDelta: s }) => {
      const o = t,
        l = Ft.parse(t);
      if (l.length > 5) return o;
      const c = Ft.createTransformer(t),
        d = typeof l[0] != "number" ? 1 : 0,
        h = s.x.scale * r.x,
        p = s.y.scale * r.y;
      ((l[0 + d] /= h), (l[1 + d] /= p));
      const g = Pe(h, p, 0.5);
      return (
        typeof l[2 + d] == "number" && (l[2 + d] /= g),
        typeof l[3 + d] == "number" && (l[3 + d] /= g),
        c(l)
      );
    },
  },
  Yu = {
    borderRadius: {
      ...Vi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Vi,
    borderTopRightRadius: Vi,
    borderBottomLeftRadius: Vi,
    borderBottomRightRadius: Vi,
    boxShadow: jk,
  };
function oy(t, { layout: r, layoutId: s }) {
  return (
    Hr.has(t) ||
    t.startsWith("origin") ||
    ((r || s !== void 0) && (!!Yu[t] || t === "opacity"))
  );
}
function Dc(t, r, s) {
  var d;
  const o = t.style,
    l = r == null ? void 0 : r.style,
    c = {};
  if (!o) return c;
  for (const h in o)
    (Qe(o[h]) ||
      (l && Qe(l[h])) ||
      oy(h, t) ||
      ((d = s == null ? void 0 : s.getValue(h)) == null
        ? void 0
        : d.liveStyle) !== void 0) &&
      (c[h] = o[h]);
  return c;
}
function Nk(t) {
  return window.getComputedStyle(t);
}
class Rk extends ey {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = sy));
  }
  readValueFromInstance(r, s) {
    var o;
    if (Hr.has(s))
      return (o = this.projection) != null && o.isProjecting ? Vu(s) : GS(r, s);
    {
      const l = Nk(r),
        c = (pg(s) ? l.getPropertyValue(s) : l[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: s }) {
    return iy(r, s);
  }
  build(r, s, o) {
    Lc(r, s, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, s, o) {
    return Dc(r, s, o);
  }
}
const bk = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Mk = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Ak(t, r, s = 1, o = 0, l = !0) {
  t.pathLength = 1;
  const c = l ? bk : Mk;
  ((t[c.offset] = `${-o}`), (t[c.array] = `${r} ${s}`));
}
const Lk = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function ay(
  t,
  {
    attrX: r,
    attrY: s,
    attrScale: o,
    pathLength: l,
    pathSpacing: c = 1,
    pathOffset: d = 0,
    ...h
  },
  p,
  g,
  y,
) {
  if ((Lc(t, h, g), p)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: v, style: w } = t;
  (v.transform && ((w.transform = v.transform), delete v.transform),
    (w.transform || v.transformOrigin) &&
      ((w.transformOrigin = v.transformOrigin ?? "50% 50%"),
      delete v.transformOrigin),
    w.transform &&
      ((w.transformBox = (y == null ? void 0 : y.transformBox) ?? "fill-box"),
      delete v.transformBox));
  for (const C of Lk) v[C] !== void 0 && ((w[C] = v[C]), delete v[C]);
  (r !== void 0 && (v.x = r),
    s !== void 0 && (v.y = s),
    o !== void 0 && (v.scale = o),
    l !== void 0 && Ak(v, l, c, d, !1));
}
const ly = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  uy = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Dk(t, r, s, o) {
  sy(t, r, void 0, o);
  for (const l in r.attrs) t.setAttribute(ly.has(l) ? l : Pc(l), r.attrs[l]);
}
function cy(t, r, s) {
  const o = Dc(t, r, s);
  for (const l in t)
    if (Qe(t[l]) || Qe(r[l])) {
      const c =
        Wr.indexOf(l) !== -1
          ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
          : l;
      o[c] = t[l];
    }
  return o;
}
class Vk extends ey {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = $e));
  }
  getBaseTargetFromProps(r, s) {
    return r[s];
  }
  readValueFromInstance(r, s) {
    if (Hr.has(s)) {
      const o = $g(s);
      return (o && o.default) || 0;
    }
    return ((s = ly.has(s) ? s : Pc(s)), r.getAttribute(s));
  }
  scrapeMotionValuesFromProps(r, s, o) {
    return cy(r, s, o);
  }
  build(r, s, o) {
    ay(r, s, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(r, s, o, l) {
    Dk(r, s, o, l);
  }
  mount(r) {
    ((this.isSVGTag = uy(r.tagName)), super.mount(r));
  }
}
const Ik = Ac.length;
function dy(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const s = t.parent ? dy(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (s.initial = t.props.initial), s);
  }
  const r = {};
  for (let s = 0; s < Ik; s++) {
    const o = Ac[s],
      l = t.props[o];
    (qi(l) || l === !1) && (r[o] = l);
  }
  return r;
}
function fy(t, r) {
  if (!Array.isArray(r)) return !1;
  const s = r.length;
  if (s !== t.length) return !1;
  for (let o = 0; o < s; o++) if (r[o] !== t[o]) return !1;
  return !0;
}
const _k = [...Mc].reverse(),
  Ok = Mc.length;
function Fk(t) {
  return (r) =>
    Promise.all(r.map(({ animation: s, options: o }) => V2(t, s, o)));
}
function zk(t) {
  let r = Fk(t),
    s = Vp(),
    o = !0,
    l = !1;
  const c = (g) => (y, v) => {
    var C;
    const w = ir(
      t,
      v,
      g === "exit"
        ? (C = t.presenceContext) == null
          ? void 0
          : C.custom
        : void 0,
    );
    if (w) {
      const { transition: N, transitionEnd: M, ...j } = w;
      y = { ...y, ...j, ...M };
    }
    return y;
  };
  function d(g) {
    r = g(t);
  }
  function h(g) {
    const { props: y } = t,
      v = dy(t.parent) || {},
      w = [],
      C = new Set();
    let N = {},
      M = 1 / 0;
    for (let A = 0; A < Ok; A++) {
      const V = _k[A],
        D = s[V],
        $ = y[V] !== void 0 ? y[V] : v[V],
        W = qi($),
        ie = V === g ? D.isActive : null;
      ie === !1 && (M = A);
      let se = $ === v[V] && $ !== y[V] && W;
      if (
        (se && (o || l) && t.manuallyAnimateOnMount && (se = !1),
        (D.protectedKeys = { ...N }),
        (!D.isActive && ie === null) ||
          (!$ && !D.prevProp) ||
          qo($) ||
          typeof $ == "boolean")
      )
        continue;
      if (V === "exit" && D.isActive && ie !== !0) {
        D.prevResolvedValues && (N = { ...N, ...D.prevResolvedValues });
        continue;
      }
      const ee = Bk(D.prevProp, $);
      let ce = ee || (V === g && D.isActive && !se && W) || (A > M && W),
        J = !1;
      const pe = Array.isArray($) ? $ : [$];
      let ve = pe.reduce(c(V), {});
      ie === !1 && (ve = {});
      const { prevResolvedValues: Ne = {} } = D,
        ke = { ...Ne, ...ve },
        me = (B) => {
          ((ce = !0),
            C.has(B) && ((J = !0), C.delete(B)),
            (D.needsAnimating[B] = !0));
          const X = t.getValue(B);
          X && (X.liveStyle = !1);
        };
      for (const B in ke) {
        const X = ve[B],
          H = Ne[B];
        if (N.hasOwnProperty(B)) continue;
        let P = !1;
        (Bu(X) && Bu(H) ? (P = !fy(X, H)) : (P = X !== H),
          P
            ? X != null
              ? me(B)
              : C.add(B)
            : X !== void 0 && C.has(B)
              ? me(B)
              : (D.protectedKeys[B] = !0));
      }
      ((D.prevProp = $),
        (D.prevResolvedValues = ve),
        D.isActive && (N = { ...N, ...ve }),
        (o || l) && t.blockInitialAnimation && (ce = !1));
      const Ce = se && ee;
      ce &&
        (!Ce || J) &&
        w.push(
          ...pe.map((B) => {
            const X = { type: V };
            if (
              typeof B == "string" &&
              (o || l) &&
              !Ce &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: H } = t,
                P = ir(H, B);
              if (H.enteringChildren && P) {
                const { delayChildren: _ } = P.transition || {};
                X.delay = Dg(H.enteringChildren, t, _);
              }
            }
            return { animation: B, options: X };
          }),
        );
    }
    if (C.size) {
      const A = {};
      if (typeof y.initial != "boolean") {
        const V = ir(t, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        V && V.transition && (A.transition = V.transition);
      }
      (C.forEach((V) => {
        const D = t.getBaseTarget(V),
          $ = t.getValue(V);
        ($ && ($.liveStyle = !0), (A[V] = D ?? null));
      }),
        w.push({ animation: A }));
    }
    let j = !!w.length;
    return (
      o &&
        (y.initial === !1 || y.initial === y.animate) &&
        !t.manuallyAnimateOnMount &&
        (j = !1),
      (o = !1),
      (l = !1),
      j ? r(w) : Promise.resolve()
    );
  }
  function p(g, y) {
    var w;
    if (s[g].isActive === y) return Promise.resolve();
    ((w = t.variantChildren) == null ||
      w.forEach((C) => {
        var N;
        return (N = C.animationState) == null ? void 0 : N.setActive(g, y);
      }),
      (s[g].isActive = y));
    const v = h(g);
    for (const C in s) s[C].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: d,
    getState: () => s,
    reset: () => {
      ((s = Vp()), (l = !0));
    },
  };
}
function Bk(t, r) {
  return typeof r == "string" ? r !== t : Array.isArray(r) ? !fy(r, t) : !1;
}
function Zn(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Vp() {
  return {
    animate: Zn(!0),
    whileInView: Zn(),
    whileHover: Zn(),
    whileTap: Zn(),
    whileDrag: Zn(),
    whileFocus: Zn(),
    exit: Zn(),
  };
}
function Xu(t, r) {
  ((t.min = r.min), (t.max = r.max));
}
function Vt(t, r) {
  (Xu(t.x, r.x), Xu(t.y, r.y));
}
function Ip(t, r) {
  ((t.translate = r.translate),
    (t.scale = r.scale),
    (t.originPoint = r.originPoint),
    (t.origin = r.origin));
}
const hy = 1e-4,
  Uk = 1 - hy,
  $k = 1 + hy,
  py = 0.01,
  Wk = 0 - py,
  Hk = 0 + py;
function st(t) {
  return t.max - t.min;
}
function qk(t, r, s) {
  return Math.abs(t - r) <= s;
}
function _p(t, r, s, o = 0.5) {
  ((t.origin = o),
    (t.originPoint = Pe(r.min, r.max, t.origin)),
    (t.scale = st(s) / st(r)),
    (t.translate = Pe(s.min, s.max, t.origin) - t.originPoint),
    ((t.scale >= Uk && t.scale <= $k) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= Wk && t.translate <= Hk) || isNaN(t.translate)) &&
      (t.translate = 0));
}
function Bi(t, r, s, o) {
  (_p(t.x, r.x, s.x, o ? o.originX : void 0),
    _p(t.y, r.y, s.y, o ? o.originY : void 0));
}
function Op(t, r, s, o = 0) {
  const l = o ? Pe(s.min, s.max, o) : s.min;
  ((t.min = l + r.min), (t.max = t.min + st(r)));
}
function Kk(t, r, s, o) {
  (Op(t.x, r.x, s.x, o == null ? void 0 : o.x),
    Op(t.y, r.y, s.y, o == null ? void 0 : o.y));
}
function Fp(t, r, s, o = 0) {
  const l = o ? Pe(s.min, s.max, o) : s.min;
  ((t.min = r.min - l), (t.max = t.min + st(r)));
}
function zo(t, r, s, o) {
  (Fp(t.x, r.x, s.x, o == null ? void 0 : o.x),
    Fp(t.y, r.y, s.y, o == null ? void 0 : o.y));
}
function zp(t, r, s, o, l) {
  return (
    (t -= r),
    (t = Fo(t, 1 / s, o)),
    l !== void 0 && (t = Fo(t, 1 / l, o)),
    t
  );
}
function Gk(t, r = 0, s = 1, o = 0.5, l, c = t, d = t) {
  if (
    (Yt.test(r) &&
      ((r = parseFloat(r)), (r = Pe(d.min, d.max, r / 100) - d.min)),
    typeof r != "number")
  )
    return;
  let h = Pe(c.min, c.max, o);
  (t === c && (h -= r),
    (t.min = zp(t.min, r, s, h, l)),
    (t.max = zp(t.max, r, s, h, l)));
}
function Bp(t, r, [s, o, l], c, d) {
  Gk(t, r[s], r[o], r[l], r.scale, c, d);
}
const Yk = ["x", "scaleX", "originX"],
  Xk = ["y", "scaleY", "originY"];
function Up(t, r, s, o) {
  (Bp(t.x, r, Yk, s ? s.x : void 0, o ? o.x : void 0),
    Bp(t.y, r, Xk, s ? s.y : void 0, o ? o.y : void 0));
}
function $p(t) {
  return t.translate === 0 && t.scale === 1;
}
function my(t) {
  return $p(t.x) && $p(t.y);
}
function Wp(t, r) {
  return t.min === r.min && t.max === r.max;
}
function Qk(t, r) {
  return Wp(t.x, r.x) && Wp(t.y, r.y);
}
function Hp(t, r) {
  return (
    Math.round(t.min) === Math.round(r.min) &&
    Math.round(t.max) === Math.round(r.max)
  );
}
function gy(t, r) {
  return Hp(t.x, r.x) && Hp(t.y, r.y);
}
function qp(t) {
  return st(t.x) / st(t.y);
}
function Kp(t, r) {
  return (
    t.translate === r.translate &&
    t.scale === r.scale &&
    t.originPoint === r.originPoint
  );
}
function qt(t) {
  return [t("x"), t("y")];
}
function Zk(t, r, s) {
  let o = "";
  const l = t.x.translate / r.x,
    c = t.y.translate / r.y,
    d = (s == null ? void 0 : s.z) || 0;
  if (
    ((l || c || d) && (o = `translate3d(${l}px, ${c}px, ${d}px) `),
    (r.x !== 1 || r.y !== 1) && (o += `scale(${1 / r.x}, ${1 / r.y}) `),
    s)
  ) {
    const {
      transformPerspective: g,
      rotate: y,
      rotateX: v,
      rotateY: w,
      skewX: C,
      skewY: N,
    } = s;
    (g && (o = `perspective(${g}px) ${o}`),
      y && (o += `rotate(${y}deg) `),
      v && (o += `rotateX(${v}deg) `),
      w && (o += `rotateY(${w}deg) `),
      C && (o += `skewX(${C}deg) `),
      N && (o += `skewY(${N}deg) `));
  }
  const h = t.x.scale * r.x,
    p = t.y.scale * r.y;
  return ((h !== 1 || p !== 1) && (o += `scale(${h}, ${p})`), o || "none");
}
const yy = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  Jk = yy.length,
  Gp = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Yp = (t) => typeof t == "number" || Y.test(t);
function eC(t, r, s, o, l, c) {
  l
    ? ((t.opacity = Pe(0, s.opacity ?? 1, tC(o))),
      (t.opacityExit = Pe(r.opacity ?? 1, 0, nC(o))))
    : c && (t.opacity = Pe(r.opacity ?? 1, s.opacity ?? 1, o));
  for (let d = 0; d < Jk; d++) {
    const h = yy[d];
    let p = Xp(r, h),
      g = Xp(s, h);
    if (p === void 0 && g === void 0) continue;
    (p || (p = 0),
      g || (g = 0),
      p === 0 || g === 0 || Yp(p) === Yp(g)
        ? ((t[h] = Math.max(Pe(Gp(p), Gp(g), o), 0)),
          (Yt.test(g) || Yt.test(p)) && (t[h] += "%"))
        : (t[h] = g));
  }
  (r.rotate || s.rotate) && (t.rotate = Pe(r.rotate || 0, s.rotate || 0, o));
}
function Xp(t, r) {
  return t[r] !== void 0 ? t[r] : t.borderRadius;
}
const tC = vy(0, 0.5, lg),
  nC = vy(0.5, 0.95, Pt);
function vy(t, r, s) {
  return (o) => (o < t ? 0 : o > r ? 1 : s(Wi(t, r, o)));
}
function rC(t, r, s) {
  const o = Qe(t) ? t : zr(t);
  return (o.start(Ec("", o, r, s)), o.animation);
}
function Ki(t, r, s, o = { passive: !0 }) {
  return (t.addEventListener(r, s, o), () => t.removeEventListener(r, s));
}
const iC = (t, r) => t.depth - r.depth;
class sC {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(r) {
    (dc(this.children, r), (this.isDirty = !0));
  }
  remove(r) {
    (Lo(this.children, r), (this.isDirty = !0));
  }
  forEach(r) {
    (this.isDirty && this.children.sort(iC),
      (this.isDirty = !1),
      this.children.forEach(r));
  }
}
function oC(t, r) {
  const s = it.now(),
    o = ({ timestamp: l }) => {
      const c = l - s;
      c >= r && (_n(o), t(c - r));
    };
  return (xe.setup(o, !0), () => _n(o));
}
function bo(t) {
  return Qe(t) ? t.get() : t;
}
class aC {
  constructor() {
    this.members = [];
  }
  add(r) {
    dc(this.members, r);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const o = this.members[s];
      if (o === r || o === this.lead || o === this.prevLead) continue;
      const l = o.instance;
      (!l || l.isConnected === !1) &&
        !o.snapshot &&
        (Lo(this.members, o), o.unmount());
    }
    r.scheduleRender();
  }
  remove(r) {
    if (
      (Lo(this.members, r),
      r === this.prevLead && (this.prevLead = void 0),
      r === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(r) {
    var s;
    for (let o = this.members.indexOf(r) - 1; o >= 0; o--) {
      const l = this.members[o];
      if (
        l.isPresent !== !1 &&
        ((s = l.instance) == null ? void 0 : s.isConnected) !== !1
      )
        return (this.promote(l), !0);
    }
    return !1;
  }
  promote(r, s) {
    var l;
    const o = this.lead;
    if (r !== o && ((this.prevLead = o), (this.lead = r), r.show(), o)) {
      (o.updateSnapshot(), r.scheduleRender());
      const { layoutDependency: c } = o.options,
        { layoutDependency: d } = r.options;
      ((c === void 0 || c !== d) &&
        ((r.resumeFrom = o),
        s && (o.preserveOpacity = !0),
        o.snapshot &&
          ((r.snapshot = o.snapshot),
          (r.snapshot.latestValues = o.animationValues || o.latestValues)),
        (l = r.root) != null && l.isUpdating && (r.isLayoutDirty = !0)),
        r.options.crossfade === !1 && o.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      var s, o, l, c, d;
      ((o = (s = r.options).onExitComplete) == null || o.call(s),
        (d =
          (l = r.resumingFrom) == null
            ? void 0
            : (c = l.options).onExitComplete) == null || d.call(c));
    });
  }
  scheduleRender() {
    this.members.forEach((r) => r.instance && r.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var r;
    (r = this.lead) != null && r.snapshot && (this.lead.snapshot = void 0);
  }
}
const Mo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  cu = ["", "X", "Y", "Z"],
  lC = 1e3;
let uC = 0;
function du(t, r, s, o) {
  const { latestValues: l } = r;
  l[t] && ((s[t] = l[t]), r.setStaticValue(t, 0), o && (o[t] = 0));
}
function xy(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: r } = t.options;
  if (!r) return;
  const s = Fg(r);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: l, layoutId: c } = t.options;
    window.MotionCancelOptimisedAnimation(s, "transform", xe, !(l || c));
  }
  const { parent: o } = t;
  o && !o.hasCheckedOptimisedAppear && xy(o);
}
function wy({
  attachResizeListener: t,
  defaultParent: r,
  measureScroll: s,
  checkIsScrollRoot: o,
  resetTransform: l,
}) {
  return class {
    constructor(d = {}, h = r == null ? void 0 : r()) {
      ((this.id = uC++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(fC),
            this.nodes.forEach(vC),
            this.nodes.forEach(xC),
            this.nodes.forEach(hC));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = h ? h.root || h : this),
        (this.path = h ? [...h.path, h] : []),
        (this.parent = h),
        (this.depth = h ? h.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new sC());
    }
    addEventListener(d, h) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new hc()),
        this.eventHandlers.get(d).add(h)
      );
    }
    notifyListeners(d, ...h) {
      const p = this.eventHandlers.get(d);
      p && p.notify(...h);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d) {
      if (this.instance) return;
      ((this.isSVG = bc(d) && !dk(d)), (this.instance = d));
      const { layoutId: h, layout: p, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
        t)
      ) {
        let y,
          v = 0;
        const w = () => (this.root.updateBlockedByResize = !1);
        (xe.read(() => {
          v = window.innerWidth;
        }),
          t(d, () => {
            const C = window.innerWidth;
            C !== v &&
              ((v = C),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = oC(w, 250)),
              Mo.hasAnimatedSinceResize &&
                ((Mo.hasAnimatedSinceResize = !1), this.nodes.forEach(Jp)));
          }));
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          g &&
          (h || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: v,
              hasRelativeLayoutChanged: w,
              layout: C,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const N =
                  this.options.transition || g.getDefaultTransition() || EC,
                { onLayoutAnimationStart: M, onLayoutAnimationComplete: j } =
                  g.getProps(),
                A = !this.targetLayout || !gy(this.targetLayout, C),
                V = !v && w;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                V ||
                (v && (A || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const D = { ...Cc(N, "layout"), onPlay: M, onComplete: j };
                ((g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((D.delay = 0), (D.type = !1)),
                  this.startAnimation(D),
                  this.setAnimationOrigin(y, V));
              } else
                (v || Jp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = C;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const d = this.getStack();
      (d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        _n(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(wC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          xy(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        ((v.shouldResetTransform = !0),
          (typeof v.latestValues.x == "string" ||
            typeof v.latestValues.y == "string") &&
            (v.isLayoutDirty = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1));
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p) return;
      const g = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = g
        ? g(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const p = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          p && this.nodes.forEach(mC),
          this.nodes.forEach(Qp));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Zp);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(gC),
            this.nodes.forEach(yC),
            this.nodes.forEach(cC),
            this.nodes.forEach(dC))
          : this.nodes.forEach(Zp),
        this.clearAllSnapshots());
      const h = it.now();
      ((Xe.delta = Qt(0, 1e3 / 60, h - Xe.timestamp)),
        (Xe.timestamp = h),
        (Xe.isProcessing = !0),
        nu.update.process(Xe),
        nu.preRender.process(Xe),
        nu.render.process(Xe),
        (Xe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Nc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(pC), this.sharedNodes.forEach(SC));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        xe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      xe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !st(this.snapshot.measuredBox.x) &&
          !st(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const d = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = $e()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: h } = this.options;
      h &&
        h.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0,
        );
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (h = !1),
        h && this.instance)
      ) {
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!l) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        h = this.projectionDelta && !my(this.projectionDelta),
        p = this.getTransformTemplate(),
        g = p ? p(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      d &&
        this.instance &&
        (h || Jn(this.latestValues) || y) &&
        (l(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return (
        d && (p = this.removeTransform(p)),
        TC(p),
        {
          animationId: this.root.animationId,
          measuredBox: h,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var g;
      const { visualElement: d } = this.options;
      if (!d) return $e();
      const h = d.measureViewportBox();
      if (
        !(
          ((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(PC)
        )
      ) {
        const { scroll: y } = this.root;
        y && (Kt(h.x, y.offset.x), Kt(h.y, y.offset.y));
      }
      return h;
    }
    removeElementScroll(d) {
      var p;
      const h = $e();
      if ((Vt(h, d), (p = this.scroll) != null && p.wasRoot)) return h;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g],
          { scroll: v, options: w } = y;
        y !== this.root &&
          v &&
          w.layoutScroll &&
          (v.wasRoot && Vt(h, d), Kt(h.x, v.offset.x), Kt(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(d, h = !1, p) {
      var y, v;
      const g = p || $e();
      Vt(g, d);
      for (let w = 0; w < this.path.length; w++) {
        const C = this.path[w];
        (!h &&
          C.options.layoutScroll &&
          C.scroll &&
          C !== C.root &&
          (Kt(g.x, -C.scroll.offset.x), Kt(g.y, -C.scroll.offset.y)),
          Jn(C.latestValues) &&
            Ro(
              g,
              C.latestValues,
              (y = C.layout) == null ? void 0 : y.layoutBox,
            ));
      }
      return (
        Jn(this.latestValues) &&
          Ro(
            g,
            this.latestValues,
            (v = this.layout) == null ? void 0 : v.layoutBox,
          ),
        g
      );
    }
    removeTransform(d) {
      var p;
      const h = $e();
      Vt(h, d);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        if (!Jn(y.latestValues)) continue;
        let v;
        (y.instance &&
          (Ku(y.latestValues) && y.updateSnapshot(),
          (v = $e()),
          Vt(v, y.measurePageBox())),
          Up(
            h,
            y.latestValues,
            (p = y.snapshot) == null ? void 0 : p.layoutBox,
            v,
          ));
      }
      return (Jn(this.latestValues) && Up(h, this.latestValues), h);
    }
    setTargetDelta(d) {
      ((this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Xe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var C;
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== h;
      if (
        !(
          d ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((C = this.parent) != null && C.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: v } = this.options;
      if (!this.layout || !(y || v)) return;
      this.resolvedRelativeTargetAt = Xe.timestamp;
      const w = this.getClosestProjectingParent();
      (w &&
        this.linkedParentVersion !== w.layoutVersion &&
        !w.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && w && w.layout
            ? this.createRelativeTarget(
                w,
                this.layout.layoutBox,
                w.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = $e()), (this.targetWithTransforms = $e())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Kk(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Vt(this.target, this.layout.layoutBox),
                ry(this.target, this.targetDelta))
              : Vt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            w &&
            !!w.resumingFrom == !!this.resumingFrom &&
            !w.options.layoutScroll &&
            w.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(w, this.target, w.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ku(this.parent.latestValues) ||
          ny(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(d, h, p) {
      ((this.relativeParent = d),
        (this.linkedParentVersion = d.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = $e()),
        (this.relativeTargetOrigin = $e()),
        zo(
          this.relativeTargetOrigin,
          h,
          p,
          this.options.layoutAnchor || void 0,
        ),
        Vt(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var N;
      const d = this.getLead(),
        h = !!this.resumingFrom || this !== d;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          ((N = this.parent) != null && N.isProjectionDirty)) &&
          (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Xe.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      Vt(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x,
        w = this.treeScale.y;
      (kk(this.layoutCorrected, this.treeScale, this.path, h),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = $e())));
      const { target: C } = d;
      if (!C) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ip(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ip(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Bi(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== v ||
          this.treeScale.y !== w ||
          !Kp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Kp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", C)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var h;
      if (((h = this.options.visualElement) == null || h.scheduleRender(), d)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Ir()),
        (this.projectionDelta = Ir()),
        (this.projectionDeltaWithTransform = Ir()));
    }
    setAnimationOrigin(d, h = !1) {
      const p = this.snapshot,
        g = p ? p.latestValues : {},
        y = { ...this.latestValues },
        v = Ir();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !h));
      const w = $e(),
        C = p ? p.source : void 0,
        N = this.layout ? this.layout.source : void 0,
        M = C !== N,
        j = this.getStack(),
        A = !j || j.members.length <= 1,
        V = !!(M && !A && this.options.crossfade === !0 && !this.path.some(CC));
      this.animationProgress = 0;
      let D;
      ((this.mixTargetDelta = ($) => {
        const W = $ / 1e3;
        (em(v.x, d.x, W),
          em(v.y, d.y, W),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (zo(
              w,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            kC(this.relativeTarget, this.relativeTargetOrigin, w, W),
            D && Qk(this.relativeTarget, D) && (this.isProjectionDirty = !1),
            D || (D = $e()),
            Vt(D, this.relativeTarget)),
          M &&
            ((this.animationValues = y), eC(y, g, this.latestValues, W, V, A)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = W));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(d) {
      var h, p, g;
      (this.notifyListeners("animationStart"),
        (h = this.currentAnimation) == null || h.stop(),
        (g = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) ==
          null || g.stop(),
        this.pendingAnimation &&
          (_n(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          ((Mo.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = zr(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = rC(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: (y) => {
                (this.mixTargetDelta(y), d.onUpdate && d.onUpdate(y));
              },
              onStop: () => {},
              onComplete: () => {
                (d.onComplete && d.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      (d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(lC),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: h,
        target: p,
        layout: g,
        latestValues: y,
      } = d;
      if (!(!h || !p || !g)) {
        if (
          this !== d &&
          this.layout &&
          g &&
          Sy(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          p = this.target || $e();
          const v = st(this.layout.layoutBox.x);
          ((p.x.min = d.target.x.min), (p.x.max = p.x.min + v));
          const w = st(this.layout.layoutBox.y);
          ((p.y.min = d.target.y.min), (p.y.max = p.y.min + w));
        }
        (Vt(h, p),
          Ro(h, y),
          Bi(this.projectionDeltaWithTransform, this.layoutCorrected, h, y));
      }
    }
    registerSharedNode(d, h) {
      (this.sharedNodes.has(d) || this.sharedNodes.set(d, new aC()),
        this.sharedNodes.get(d).add(h));
      const g = h.options.initialPromotionConfig;
      h.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(h)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: d } = this.options;
      return d
        ? ((h = this.getStack()) == null ? void 0 : h.lead) || this
        : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: d } = this.options;
      return d ? ((h = this.getStack()) == null ? void 0 : h.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: h, preserveFollowOpacity: p } = {}) {
      const g = this.getStack();
      (g && g.promote(this, p),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        h && this.setOptions({ transition: h }));
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let h = !1;
      const { latestValues: p } = d;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (h = !0),
        !h)
      )
        return;
      const g = {};
      p.z && du("z", d, g, this.animationValues);
      for (let y = 0; y < cu.length; y++)
        (du(`rotate${cu[y]}`, d, g, this.animationValues),
          du(`skew${cu[y]}`, d, g, this.animationValues));
      d.render();
      for (const y in g)
        (d.setStaticValue(y, g[y]),
          this.animationValues && (this.animationValues[y] = g[y]));
      d.scheduleRender();
    }
    applyProjectionStyles(d, h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (d.visibility = ""),
          (d.opacity = ""),
          (d.pointerEvents = bo(h == null ? void 0 : h.pointerEvents) || ""),
          (d.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        (this.options.layoutId &&
          ((d.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (d.pointerEvents = bo(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !Jn(this.latestValues) &&
            ((d.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      d.visibility = "";
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let v = Zk(this.projectionDeltaWithTransform, this.treeScale, y);
      (p && (v = p(y, v)), (d.transform = v));
      const { x: w, y: C } = this.projectionDelta;
      ((d.transformOrigin = `${w.origin * 100}% ${C.origin * 100}% 0`),
        g.animationValues
          ? (d.opacity =
              g === this
                ? (y.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : y.opacityExit)
          : (d.opacity =
              g === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                  ? y.opacityExit
                  : 0));
      for (const N in Yu) {
        if (y[N] === void 0) continue;
        const { correct: M, applyTo: j, isCSSVariable: A } = Yu[N],
          V = v === "none" ? y[N] : M(y[N], g);
        if (j) {
          const D = j.length;
          for (let $ = 0; $ < D; $++) d[j[$]] = V;
        } else
          A ? (this.options.visualElement.renderState.vars[N] = V) : (d[N] = V);
      }
      this.options.layoutId &&
        (d.pointerEvents =
          g === this ? bo(h == null ? void 0 : h.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((d) => {
        var h;
        return (h = d.currentAnimation) == null ? void 0 : h.stop();
      }),
        this.root.nodes.forEach(Qp),
        this.root.sharedNodes.clear());
    }
  };
}
function cC(t) {
  t.updateLayout();
}
function dC(t) {
  var s;
  const r = ((s = t.resumeFrom) == null ? void 0 : s.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: l } = t.layout,
      { animationType: c } = t.options,
      d = r.source !== t.layout.source;
    if (c === "size")
      qt((v) => {
        const w = d ? r.measuredBox[v] : r.layoutBox[v],
          C = st(w);
        ((w.min = o[v].min), (w.max = w.min + C));
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      Xu(d ? r.measuredBox[v] : r.layoutBox[v], o[v]);
    } else
      Sy(c, r.layoutBox, o) &&
        qt((v) => {
          const w = d ? r.measuredBox[v] : r.layoutBox[v],
            C = st(o[v]);
          ((w.max = w.min + C),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[v].max = t.relativeTarget[v].min + C)));
        });
    const h = Ir();
    Bi(h, o, r.layoutBox);
    const p = Ir();
    d ? Bi(p, t.applyTransform(l, !0), r.measuredBox) : Bi(p, o, r.layoutBox);
    const g = !my(h);
    let y = !1;
    if (!t.resumeFrom) {
      const v = t.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: w, layout: C } = v;
        if (w && C) {
          const N = t.options.layoutAnchor || void 0,
            M = $e();
          zo(M, r.layoutBox, w.layoutBox, N);
          const j = $e();
          (zo(j, o, C.layoutBox, N),
            gy(M, j) || (y = !0),
            v.options.layoutRoot &&
              ((t.relativeTarget = j),
              (t.relativeTargetOrigin = M),
              (t.relativeParent = v)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: o,
      snapshot: r,
      delta: p,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: y,
    });
  } else if (t.isLead()) {
    const { onExitComplete: o } = t.options;
    o && o();
  }
  t.options.transition = void 0;
}
function fC(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function hC(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function pC(t) {
  t.clearSnapshot();
}
function Qp(t) {
  t.clearMeasurements();
}
function mC(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function Zp(t) {
  t.isLayoutDirty = !1;
}
function gC(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function yC(t) {
  const { visualElement: r } = t.options;
  (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
    t.resetTransform());
}
function Jp(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function vC(t) {
  t.resolveTargetDelta();
}
function xC(t) {
  t.calcProjection();
}
function wC(t) {
  t.resetSkewAndRotation();
}
function SC(t) {
  t.removeLeadSnapshot();
}
function em(t, r, s) {
  ((t.translate = Pe(r.translate, 0, s)),
    (t.scale = Pe(r.scale, 1, s)),
    (t.origin = r.origin),
    (t.originPoint = r.originPoint));
}
function tm(t, r, s, o) {
  ((t.min = Pe(r.min, s.min, o)), (t.max = Pe(r.max, s.max, o)));
}
function kC(t, r, s, o) {
  (tm(t.x, r.x, s.x, o), tm(t.y, r.y, s.y, o));
}
function CC(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const EC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  nm = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  rm = nm("applewebkit/") && !nm("chrome/") ? Math.round : Pt;
function im(t) {
  ((t.min = rm(t.min)), (t.max = rm(t.max)));
}
function TC(t) {
  (im(t.x), im(t.y));
}
function Sy(t, r, s) {
  return (
    t === "position" || (t === "preserve-aspect" && !qk(qp(r), qp(s), 0.2))
  );
}
function PC(t) {
  var r;
  return t !== t.root && ((r = t.scroll) == null ? void 0 : r.wasRoot);
}
const jC = wy({
    attachResizeListener: (t, r) => Ki(t, "resize", r),
    measureScroll: () => {
      var t, r;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((t = document.body) == null ? void 0 : t.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((r = document.body) == null ? void 0 : r.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  fu = { current: void 0 },
  ky = wy({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!fu.current) {
        const t = new jC({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (fu.current = t));
      }
      return fu.current;
    },
    resetTransform: (t, r) => {
      t.style.transform = r !== void 0 ? r : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Cy = T.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
function NC(t = !0) {
  const r = T.useContext(cc);
  if (r === null) return [!0, null];
  const { isPresent: s, onExitComplete: o, register: l } = r,
    c = T.useId();
  T.useEffect(() => {
    if (t) return l(c);
  }, [t]);
  const d = T.useCallback(() => t && o && o(c), [c, o, t]);
  return !s && o ? [!1, d] : [!0];
}
const Ey = T.createContext({ strict: !1 }),
  sm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let om = !1;
function RC() {
  if (om) return;
  const t = {};
  for (const r in sm) t[r] = { isEnabled: (s) => sm[r].some((o) => !!s[o]) };
  (Jg(t), (om = !0));
}
function Ty() {
  return (RC(), vk());
}
function bC(t) {
  const r = Ty();
  for (const s in t) r[s] = { ...r[s], ...t[s] };
  Jg(r);
}
const MC = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Bo(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    MC.has(t)
  );
}
let Py = (t) => !Bo(t);
function AC(t) {
  typeof t == "function" && (Py = (r) => (r.startsWith("on") ? !Bo(r) : t(r)));
}
try {
  AC(require("@emotion/is-prop-valid").default);
} catch {}
function LC(t, r, s) {
  const o = {};
  for (const l in t)
    (l === "values" && typeof t.values == "object") ||
      Qe(t[l]) ||
      ((Py(l) ||
        (s === !0 && Bo(l)) ||
        (!r && !Bo(l)) ||
        (t.draggable && l.startsWith("onDrag"))) &&
        (o[l] = t[l]));
  return o;
}
const Go = T.createContext({});
function DC(t, r) {
  if (Ko(t)) {
    const { initial: s, animate: o } = t;
    return {
      initial: s === !1 || qi(s) ? s : void 0,
      animate: qi(o) ? o : void 0,
    };
  }
  return t.inherit !== !1 ? r : {};
}
function VC(t) {
  const { initial: r, animate: s } = DC(t, T.useContext(Go));
  return T.useMemo(() => ({ initial: r, animate: s }), [am(r), am(s)]);
}
function am(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Vc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function jy(t, r, s) {
  for (const o in r) !Qe(r[o]) && !oy(o, s) && (t[o] = r[o]);
}
function IC({ transformTemplate: t }, r) {
  return T.useMemo(() => {
    const s = Vc();
    return (Lc(s, r, t), Object.assign({}, s.vars, s.style));
  }, [r]);
}
function _C(t, r) {
  const s = t.style || {},
    o = {};
  return (jy(o, s, t), Object.assign(o, IC(t, r)), o);
}
function OC(t, r) {
  const s = {},
    o = _C(t, r);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((s.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (s.tabIndex = 0),
    (s.style = o),
    s
  );
}
const Ny = () => ({ ...Vc(), attrs: {} });
function FC(t, r, s, o) {
  const l = T.useMemo(() => {
    const c = Ny();
    return (
      ay(c, r, uy(o), t.transformTemplate, t.style),
      { ...c.attrs, style: { ...c.style } }
    );
  }, [r]);
  if (t.style) {
    const c = {};
    (jy(c, t.style, t), (l.style = { ...c, ...l.style }));
  }
  return l;
}
const zC = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ic(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(zC.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function BC(t, r, s, { latestValues: o }, l, c = !1, d) {
  const p = ((d ?? Ic(t)) ? FC : OC)(r, o, l, t),
    g = LC(r, typeof t == "string", c),
    y = t !== T.Fragment ? { ...g, ...p, ref: s } : {},
    { children: v } = r,
    w = T.useMemo(() => (Qe(v) ? v.get() : v), [v]);
  return T.createElement(t, { ...y, children: w });
}
function UC({ scrapeMotionValuesFromProps: t, createRenderState: r }, s, o, l) {
  return { latestValues: $C(s, o, l, t), renderState: r() };
}
function $C(t, r, s, o) {
  const l = {},
    c = o(t, {});
  for (const w in c) l[w] = bo(c[w]);
  let { initial: d, animate: h } = t;
  const p = Ko(t),
    g = Qg(t);
  r &&
    g &&
    !p &&
    t.inherit !== !1 &&
    (d === void 0 && (d = r.initial), h === void 0 && (h = r.animate));
  let y = s ? s.initial === !1 : !1;
  y = y || d === !1;
  const v = y ? h : d;
  if (v && typeof v != "boolean" && !qo(v)) {
    const w = Array.isArray(v) ? v : [v];
    for (let C = 0; C < w.length; C++) {
      const N = Tc(t, w[C]);
      if (N) {
        const { transitionEnd: M, transition: j, ...A } = N;
        for (const V in A) {
          let D = A[V];
          if (Array.isArray(D)) {
            const $ = y ? D.length - 1 : 0;
            D = D[$];
          }
          D !== null && (l[V] = D);
        }
        for (const V in M) l[V] = M[V];
      }
    }
  }
  return l;
}
const Ry = (t) => (r, s) => {
    const o = T.useContext(Go),
      l = T.useContext(cc),
      c = () => UC(t, r, o, l);
    return s ? c() : zw(c);
  },
  WC = Ry({ scrapeMotionValuesFromProps: Dc, createRenderState: Vc }),
  HC = Ry({ scrapeMotionValuesFromProps: cy, createRenderState: Ny }),
  qC = Symbol.for("motionComponentSymbol");
function KC(t, r, s) {
  const o = T.useRef(s);
  T.useInsertionEffect(() => {
    o.current = s;
  });
  const l = T.useRef(null);
  return T.useCallback(
    (c) => {
      var h;
      c && ((h = t.onMount) == null || h.call(t, c));
      const d = o.current;
      if (typeof d == "function")
        if (c) {
          const p = d(c);
          typeof p == "function" && (l.current = p);
        } else l.current ? (l.current(), (l.current = null)) : d(c);
      else d && (d.current = c);
      r && (c ? r.mount(c) : r.unmount());
    },
    [r],
  );
}
const by = T.createContext({});
function Lr(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function GC(t, r, s, o, l, c) {
  var D, $;
  const { visualElement: d } = T.useContext(Go),
    h = T.useContext(Ey),
    p = T.useContext(cc),
    g = T.useContext(Cy),
    y = g.reducedMotion,
    v = g.skipAnimations,
    w = T.useRef(null),
    C = T.useRef(!1);
  ((o = o || h.renderer),
    !w.current &&
      o &&
      ((w.current = o(t, {
        visualState: r,
        parent: d,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: v,
        isSVG: c,
      })),
      C.current && w.current && (w.current.manuallyAnimateOnMount = !0)));
  const N = w.current,
    M = T.useContext(by);
  N &&
    !N.projection &&
    l &&
    (N.type === "html" || N.type === "svg") &&
    YC(w.current, s, l, M);
  const j = T.useRef(!1);
  T.useInsertionEffect(() => {
    N && j.current && N.update(s, p);
  });
  const A = s[Og],
    V = T.useRef(
      !!A &&
        typeof window < "u" &&
        !((D = window.MotionHandoffIsComplete) != null && D.call(window, A)) &&
        (($ = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : $.call(window, A)),
    );
  return (
    Uw(() => {
      ((C.current = !0),
        N &&
          ((j.current = !0),
          (window.MotionIsMounted = !0),
          N.updateFeatures(),
          N.scheduleRenderMicrotask(),
          V.current && N.animationState && N.animationState.animateChanges()));
    }),
    T.useEffect(() => {
      N &&
        (!V.current && N.animationState && N.animationState.animateChanges(),
        V.current &&
          (queueMicrotask(() => {
            var W;
            (W = window.MotionHandoffMarkAsComplete) == null ||
              W.call(window, A);
          }),
          (V.current = !1)),
        (N.enteringChildren = void 0));
    }),
    N
  );
}
function YC(t, r, s, o) {
  const {
    layoutId: l,
    layout: c,
    drag: d,
    dragConstraints: h,
    layoutScroll: p,
    layoutRoot: g,
    layoutAnchor: y,
    layoutCrossfade: v,
  } = r;
  ((t.projection = new s(
    t.latestValues,
    r["data-framer-portal-id"] ? void 0 : My(t.parent),
  )),
    t.projection.setOptions({
      layoutId: l,
      layout: c,
      alwaysMeasureLayout: !!d || (h && Lr(h)),
      visualElement: t,
      animationType: typeof c == "string" ? c : "both",
      initialPromotionConfig: o,
      crossfade: v,
      layoutScroll: p,
      layoutRoot: g,
      layoutAnchor: y,
    }));
}
function My(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : My(t.parent);
}
function hu(t, { forwardMotionProps: r = !1, type: s } = {}, o, l) {
  o && bC(o);
  const c = s ? s === "svg" : Ic(t),
    d = c ? HC : WC;
  function h(g, y) {
    let v;
    const w = { ...T.useContext(Cy), ...g, layoutId: XC(g) },
      { isStatic: C } = w,
      N = VC(g),
      M = d(g, C);
    if (!C && typeof window < "u") {
      QC();
      const j = ZC(w);
      ((v = j.MeasureLayout),
        (N.visualElement = GC(t, M, w, l, j.ProjectionNode, c)));
    }
    return m.jsxs(Go.Provider, {
      value: N,
      children: [
        v && N.visualElement
          ? m.jsx(v, { visualElement: N.visualElement, ...w })
          : null,
        BC(t, g, KC(M, N.visualElement, y), M, C, r, c),
      ],
    });
  }
  h.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const p = T.forwardRef(h);
  return ((p[qC] = t), p);
}
function XC({ layoutId: t }) {
  const r = T.useContext(Xm).id;
  return r && t !== void 0 ? r + "-" + t : t;
}
function QC(t, r) {
  T.useContext(Ey).strict;
}
function ZC(t) {
  const r = Ty(),
    { drag: s, layout: o } = r;
  if (!s && !o) return {};
  const l = { ...s, ...o };
  return {
    MeasureLayout:
      (s != null && s.isEnabled(t)) || (o != null && o.isEnabled(t))
        ? l.MeasureLayout
        : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
function JC(t, r) {
  if (typeof Proxy > "u") return hu;
  const s = new Map(),
    o = (c, d) => hu(c, d, t, r),
    l = (c, d) => o(c, d);
  return new Proxy(l, {
    get: (c, d) =>
      d === "create"
        ? o
        : (s.has(d) || s.set(d, hu(d, void 0, t, r)), s.get(d)),
  });
}
const eE = (t, r) =>
  (r.isSVG ?? Ic(t))
    ? new Vk(r)
    : new Rk(r, { allowProjection: t !== T.Fragment });
class tE extends On {
  constructor(r) {
    (super(r), r.animationState || (r.animationState = zk(r)));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    qo(r) && (this.unmountControls = r.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    r !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var r;
    (this.node.animationState.reset(),
      (r = this.unmountControls) == null || r.call(this));
  }
}
let nE = 0;
class rE extends On {
  constructor() {
    (super(...arguments), (this.id = nE++), (this.isExitComplete = !1));
  }
  update() {
    var c;
    if (!this.node.presenceContext) return;
    const { isPresent: r, onExitComplete: s } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === o) return;
    if (r && o === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: h } = this.node.getProps();
        if (typeof d == "string") {
          const p = ir(this.node, d, h);
          if (p) {
            const { transition: g, transitionEnd: y, ...v } = p;
            for (const w in v)
              (c = this.node.getValue(w)) == null || c.jump(v[w]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const l = this.node.animationState.setActive("exit", !r);
    s &&
      !r &&
      l.then(() => {
        ((this.isExitComplete = !0), s(this.id));
      });
  }
  mount() {
    const { register: r, onExitComplete: s } = this.node.presenceContext || {};
    (s && s(this.id), r && (this.unmount = r(this.id)));
  }
  unmount() {}
}
const iE = { animation: { Feature: tE }, exit: { Feature: rE } };
function ts(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const sE = (t) => (r) => Rc(r) && t(r, ts(r));
function Ui(t, r, s, o) {
  return Ki(t, r, sE(s), o);
}
const Ay = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  lm = (t, r) => Math.abs(t - r);
function oE(t, r) {
  const s = lm(t.x, r.x),
    o = lm(t.y, r.y);
  return Math.sqrt(s ** 2 + o ** 2);
}
const um = new Set(["auto", "scroll"]);
class Ly {
  constructor(
    r,
    s,
    {
      transformPagePoint: o,
      contextWindow: l = window,
      dragSnapToOrigin: c = !1,
      distanceThreshold: d = 3,
      element: h,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (C) => {
        this.handleScroll(C.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = vo(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const C = pu(this.lastMoveEventInfo, this.history),
          N = this.startEvent !== null,
          M = oE(C.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!N && !M) return;
        const { point: j } = C,
          { timestamp: A } = Xe;
        this.history.push({ ...j, timestamp: A });
        const { onStart: V, onMove: D } = this.handlers;
        (N ||
          (V && V(this.lastMoveEvent, C),
          (this.startEvent = this.lastMoveEvent)),
          D && D(this.lastMoveEvent, C));
      }),
      (this.handlePointerMove = (C, N) => {
        ((this.lastMoveEvent = C),
          (this.lastRawMoveEventInfo = N),
          (this.lastMoveEventInfo = vo(N, this.transformPagePoint)),
          xe.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (C, N) => {
        this.end();
        const { onEnd: M, onSessionEnd: j, resumeAnimation: A } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && A && A(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const V = pu(
          C.type === "pointercancel"
            ? this.lastMoveEventInfo
            : vo(N, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && M && M(C, V), j && j(C, V));
      }),
      !Rc(r))
    )
      return;
    ((this.dragSnapToOrigin = c),
      (this.handlers = s),
      (this.transformPagePoint = o),
      (this.distanceThreshold = d),
      (this.contextWindow = l || window));
    const p = ts(r),
      g = vo(p, this.transformPagePoint),
      { point: y } = g,
      { timestamp: v } = Xe;
    this.history = [{ ...y, timestamp: v }];
    const { onSessionStart: w } = s;
    (w && w(r, pu(g, this.history)),
      (this.removeListeners = Zi(
        Ui(this.contextWindow, "pointermove", this.handlePointerMove),
        Ui(this.contextWindow, "pointerup", this.handlePointerUp),
        Ui(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      h && this.startScrollTracking(h));
  }
  startScrollTracking(r) {
    let s = r.parentElement;
    for (; s; ) {
      const o = getComputedStyle(s);
      ((um.has(o.overflowX) || um.has(o.overflowY)) &&
        this.scrollPositions.set(s, { x: s.scrollLeft, y: s.scrollTop }),
        (s = s.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(r) {
    const s = this.scrollPositions.get(r);
    if (!s) return;
    const o = r === window,
      l = o
        ? { x: window.scrollX, y: window.scrollY }
        : { x: r.scrollLeft, y: r.scrollTop },
      c = { x: l.x - s.x, y: l.y - s.y };
    (c.x === 0 && c.y === 0) ||
      (o
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += c.x),
          (this.lastMoveEventInfo.point.y += c.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= c.x), (this.history[0].y -= c.y)),
      this.scrollPositions.set(r, l),
      xe.update(this.updatePoint, !0));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      _n(this.updatePoint));
  }
}
function vo(t, r) {
  return r ? { point: r(t.point) } : t;
}
function cm(t, r) {
  return { x: t.x - r.x, y: t.y - r.y };
}
function pu({ point: t }, r) {
  return {
    point: t,
    delta: cm(t, Dy(r)),
    offset: cm(t, aE(r)),
    velocity: lE(r, 0.1),
  };
}
function aE(t) {
  return t[0];
}
function Dy(t) {
  return t[t.length - 1];
}
function lE(t, r) {
  if (t.length < 2) return { x: 0, y: 0 };
  let s = t.length - 1,
    o = null;
  const l = Dy(t);
  for (; s >= 0 && ((o = t[s]), !(l.timestamp - o.timestamp > yt(r))); ) s--;
  if (!o) return { x: 0, y: 0 };
  o === t[0] &&
    t.length > 2 &&
    l.timestamp - o.timestamp > yt(r) * 2 &&
    (o = t[1]);
  const c = Tt(l.timestamp - o.timestamp);
  if (c === 0) return { x: 0, y: 0 };
  const d = { x: (l.x - o.x) / c, y: (l.y - o.y) / c };
  return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function uE(t, { min: r, max: s }, o) {
  return (
    r !== void 0 && t < r
      ? (t = o ? Pe(r, t, o.min) : Math.max(t, r))
      : s !== void 0 && t > s && (t = o ? Pe(s, t, o.max) : Math.min(t, s)),
    t
  );
}
function dm(t, r, s) {
  return {
    min: r !== void 0 ? t.min + r : void 0,
    max: s !== void 0 ? t.max + s - (t.max - t.min) : void 0,
  };
}
function cE(t, { top: r, left: s, bottom: o, right: l }) {
  return { x: dm(t.x, s, l), y: dm(t.y, r, o) };
}
function fm(t, r) {
  let s = r.min - t.min,
    o = r.max - t.max;
  return (
    r.max - r.min < t.max - t.min && ([s, o] = [o, s]),
    { min: s, max: o }
  );
}
function dE(t, r) {
  return { x: fm(t.x, r.x), y: fm(t.y, r.y) };
}
function fE(t, r) {
  let s = 0.5;
  const o = st(t),
    l = st(r);
  return (
    l > o
      ? (s = Wi(r.min, r.max - o, t.min))
      : o > l && (s = Wi(t.min, t.max - l, r.min)),
    Qt(0, 1, s)
  );
}
function hE(t, r) {
  const s = {};
  return (
    r.min !== void 0 && (s.min = r.min - t.min),
    r.max !== void 0 && (s.max = r.max - t.min),
    s
  );
}
const Qu = 0.35;
function pE(t = Qu) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Qu),
    { x: hm(t, "left", "right"), y: hm(t, "top", "bottom") }
  );
}
function hm(t, r, s) {
  return { min: pm(t, r), max: pm(t, s) };
}
function pm(t, r) {
  return typeof t == "number" ? t : t[r] || 0;
}
const mE = new WeakMap();
class gE {
  constructor(r) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = $e()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = r));
  }
  start(r, { snapToCursor: s = !1, distanceThreshold: o } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const c = (v) => {
        (s && this.snapToCursor(ts(v).point), this.stopAnimation());
      },
      d = (v, w) => {
        const { drag: C, dragPropagation: N, onDragStart: M } = this.getProps();
        if (
          C &&
          !N &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = G2(C)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = w),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          qt((A) => {
            let V = this.getAxisMotionValue(A).get() || 0;
            if (Yt.test(V)) {
              const { projection: D } = this.visualElement;
              if (D && D.layout) {
                const $ = D.layout.layoutBox[A];
                $ && (V = st($) * (parseFloat(V) / 100));
              }
            }
            this.originPoint[A] = V;
          }),
          M && xe.update(() => M(v, w), !1, !0),
          Uu(this.visualElement, "transform"));
        const { animationState: j } = this.visualElement;
        j && j.setActive("whileDrag", !0);
      },
      h = (v, w) => {
        ((this.latestPointerEvent = v), (this.latestPanInfo = w));
        const {
          dragPropagation: C,
          dragDirectionLock: N,
          onDirectionLock: M,
          onDrag: j,
        } = this.getProps();
        if (!C && !this.openDragLock) return;
        const { offset: A } = w;
        if (N && this.currentDirection === null) {
          ((this.currentDirection = vE(A)),
            this.currentDirection !== null && M && M(this.currentDirection));
          return;
        }
        (this.updateAxis("x", w.point, A),
          this.updateAxis("y", w.point, A),
          this.visualElement.render(),
          j && xe.update(() => j(v, w), !1, !0));
      },
      p = (v, w) => {
        ((this.latestPointerEvent = v),
          (this.latestPanInfo = w),
          this.stop(v, w),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      g = () => {
        const { dragSnapToOrigin: v } = this.getProps();
        (v || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new Ly(
      r,
      {
        onSessionStart: c,
        onStart: d,
        onMove: h,
        onSessionEnd: p,
        resumeAnimation: g,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: o,
        contextWindow: Ay(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(r, s) {
    const o = r || this.latestPointerEvent,
      l = s || this.latestPanInfo,
      c = this.isDragging;
    if ((this.cancel(), !c || !l || !o)) return;
    const { velocity: d } = l;
    this.startAnimation(d);
    const { onDragEnd: h } = this.getProps();
    h && xe.postRender(() => h(o, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: s } = this.visualElement;
    (r && (r.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: o } = this.getProps();
    (!o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(r, s, o) {
    const { drag: l } = this.getProps();
    if (!o || !xo(r, l, this.currentDirection)) return;
    const c = this.getAxisMotionValue(r);
    let d = this.originPoint[r] + o[r];
    (this.constraints &&
      this.constraints[r] &&
      (d = uE(d, this.constraints[r], this.elastic[r])),
      c.set(d));
  }
  resolveConstraints() {
    var c;
    const { dragConstraints: r, dragElastic: s } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (c = this.visualElement.projection) == null
            ? void 0
            : c.layout,
      l = this.constraints;
    (r && Lr(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && o
        ? (this.constraints = cE(o.layoutBox, r))
        : (this.constraints = !1),
      (this.elastic = pE(s)),
      l !== this.constraints &&
        !Lr(r) &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        qt((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = hE(o.layoutBox[d], this.constraints[d]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: s } = this.getProps();
    if (!r || !Lr(r)) return !1;
    const o = r.current,
      { projection: l } = this.visualElement;
    if (!l || !l.layout) return !1;
    const c = Ck(o, l.root, this.visualElement.getTransformPagePoint());
    let d = dE(l.layout.layoutBox, c);
    if (s) {
      const h = s(wk(d));
      ((this.hasMutatedConstraints = !!h), h && (d = ty(h)));
    }
    return d;
  }
  startAnimation(r) {
    const {
        drag: s,
        dragMomentum: o,
        dragElastic: l,
        dragTransition: c,
        dragSnapToOrigin: d,
        onDragTransitionEnd: h,
      } = this.getProps(),
      p = this.constraints || {},
      g = qt((y) => {
        if (!xo(y, s, this.currentDirection)) return;
        let v = (p && p[y]) || {};
        (d === !0 || d === y) && (v = { min: 0, max: 0 });
        const w = l ? 200 : 1e6,
          C = l ? 40 : 1e7,
          N = {
            type: "inertia",
            velocity: o ? r[y] : 0,
            bounceStiffness: w,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...c,
            ...v,
          };
        return this.startAxisValueAnimation(y, N);
      });
    return Promise.all(g).then(h);
  }
  startAxisValueAnimation(r, s) {
    const o = this.getAxisMotionValue(r);
    return (
      Uu(this.visualElement, r),
      o.start(Ec(r, o, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    qt((r) => this.getAxisMotionValue(r).stop());
  }
  getAxisMotionValue(r) {
    const s = `_drag${r.toUpperCase()}`,
      o = this.visualElement.getProps(),
      l = o[s];
    return (
      l ||
      this.visualElement.getValue(r, (o.initial ? o.initial[r] : void 0) || 0)
    );
  }
  snapToCursor(r) {
    qt((s) => {
      const { drag: o } = this.getProps();
      if (!xo(s, o, this.currentDirection)) return;
      const { projection: l } = this.visualElement,
        c = this.getAxisMotionValue(s);
      if (l && l.layout) {
        const { min: d, max: h } = l.layout.layoutBox[s],
          p = c.get() || 0;
        c.set(r[s] - Pe(d, h, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: r, dragConstraints: s } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!Lr(s) || !o || !this.constraints) return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    qt((d) => {
      const h = this.getAxisMotionValue(d);
      if (h && this.constraints !== !1) {
        const p = h.get();
        l[d] = fE({ min: p, max: p }, this.constraints[d]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = c ? c({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      qt((d) => {
        if (!xo(d, r, null)) return;
        const h = this.getAxisMotionValue(d),
          { min: p, max: g } = this.constraints[d];
        h.set(Pe(p, g, l[d]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    mE.set(this.visualElement, this);
    const r = this.visualElement.current,
      s = Ui(r, "pointerdown", (g) => {
        const { drag: y, dragListener: v = !0 } = this.getProps(),
          w = g.target,
          C = w !== r && ek(w);
        y && v && !C && this.start(g);
      });
    let o;
    const l = () => {
        const { dragConstraints: g } = this.getProps();
        Lr(g) &&
          g.current &&
          ((this.constraints = this.resolveRefConstraints()),
          o ||
            (o = yE(r, g.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", l);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      xe.read(l));
    const h = Ki(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: g, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (qt((v) => {
              const w = this.getAxisMotionValue(v);
              w &&
                ((this.originPoint[v] += g[v].translate),
                w.set(w.get() + g[v].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (h(), s(), d(), p && p(), o && o());
    };
  }
  getProps() {
    const r = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: o = !1,
        dragPropagation: l = !1,
        dragConstraints: c = !1,
        dragElastic: d = Qu,
        dragMomentum: h = !0,
      } = r;
    return {
      ...r,
      drag: s,
      dragDirectionLock: o,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: d,
      dragMomentum: h,
    };
  }
}
function mm(t) {
  let r = !0;
  return () => {
    if (r) {
      r = !1;
      return;
    }
    t();
  };
}
function yE(t, r, s) {
  const o = Ep(t, mm(s)),
    l = Ep(r, mm(s));
  return () => {
    (o(), l());
  };
}
function xo(t, r, s) {
  return (r === !0 || r === t) && (s === null || s === t);
}
function vE(t, r = 10) {
  let s = null;
  return (Math.abs(t.y) > r ? (s = "y") : Math.abs(t.x) > r && (s = "x"), s);
}
class xE extends On {
  constructor(r) {
    (super(r),
      (this.removeGroupControls = Pt),
      (this.removeListeners = Pt),
      (this.controls = new gE(r)));
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    (r && (this.removeGroupControls = r.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Pt));
  }
  update() {
    const { dragControls: r } = this.node.getProps(),
      { dragControls: s } = this.node.prevProps || {};
    r !== s &&
      (this.removeGroupControls(),
      r && (this.removeGroupControls = r.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const mu = (t) => (r, s) => {
  t && xe.update(() => t(r, s), !1, !0);
};
class wE extends On {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Pt));
  }
  onPointerDown(r) {
    this.session = new Ly(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ay(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: r,
      onPanStart: s,
      onPan: o,
      onPanEnd: l,
    } = this.node.getProps();
    return {
      onSessionStart: mu(r),
      onStart: mu(s),
      onMove: mu(o),
      onEnd: (c, d) => {
        (delete this.session, l && xe.postRender(() => l(c, d)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ui(this.node.current, "pointerdown", (r) =>
      this.onPointerDown(r),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let gu = !1;
class SE extends T.Component {
  componentDidMount() {
    const {
        visualElement: r,
        layoutGroup: s,
        switchLayoutGroup: o,
        layoutId: l,
      } = this.props,
      { projection: c } = r;
    (c &&
      (s.group && s.group.add(c),
      o && o.register && l && o.register(c),
      gu && c.root.didUpdate(),
      c.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      c.setOptions({
        ...c.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Mo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(r) {
    const {
        layoutDependency: s,
        visualElement: o,
        drag: l,
        isPresent: c,
      } = this.props,
      { projection: d } = o;
    return (
      d &&
        ((d.isPresent = c),
        r.layoutDependency !== s &&
          d.setOptions({ ...d.options, layoutDependency: s }),
        (gu = !0),
        l || r.layoutDependency !== s || s === void 0 || r.isPresent !== c
          ? d.willUpdate()
          : this.safeToRemove(),
        r.isPresent !== c &&
          (c
            ? d.promote()
            : d.relegate() ||
              xe.postRender(() => {
                const h = d.getStack();
                (!h || !h.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: r, layoutAnchor: s } = this.props,
      { projection: o } = r;
    o &&
      ((o.options.layoutAnchor = s),
      o.root.didUpdate(),
      Nc.postRender(() => {
        !o.currentAnimation && o.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: r,
        layoutGroup: s,
        switchLayoutGroup: o,
      } = this.props,
      { projection: l } = r;
    ((gu = !0),
      l &&
        (l.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(l),
        o && o.deregister && o.deregister(l)));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function Vy(t) {
  const [r, s] = NC(),
    o = T.useContext(Xm);
  return m.jsx(SE, {
    ...t,
    layoutGroup: o,
    switchLayoutGroup: T.useContext(by),
    isPresent: r,
    safeToRemove: s,
  });
}
const kE = {
  pan: { Feature: wE },
  drag: { Feature: xE, ProjectionNode: ky, MeasureLayout: Vy },
};
function gm(t, r, s) {
  const { props: o } = t;
  t.animationState &&
    o.whileHover &&
    t.animationState.setActive("whileHover", s === "Start");
  const l = "onHover" + s,
    c = o[l];
  c && xe.postRender(() => c(r, ts(r)));
}
class CE extends On {
  mount() {
    const { current: r } = this.node;
    r &&
      (this.unmount = X2(
        r,
        (s, o) => (gm(this.node, o, "Start"), (l) => gm(this.node, l, "End")),
      ));
  }
  unmount() {}
}
class EE extends On {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let r = !1;
    try {
      r = this.node.current.matches(":focus-visible");
    } catch {
      r = !0;
    }
    !r ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Zi(
      Ki(this.node.current, "focus", () => this.onFocus()),
      Ki(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ym(t, r, s) {
  const { props: o } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    o.whileTap &&
    t.animationState.setActive("whileTap", s === "Start");
  const l = "onTap" + (s === "End" ? "" : s),
    c = o[l];
  c && xe.postRender(() => c(r, ts(r)));
}
class TE extends On {
  mount() {
    const { current: r } = this.node;
    if (!r) return;
    const { globalTapTarget: s, propagate: o } = this.node.props;
    this.unmount = nk(
      r,
      (l, c) => (
        ym(this.node, c, "Start"),
        (d, { success: h }) => ym(this.node, d, h ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: s,
        stopPropagation: (o == null ? void 0 : o.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Zu = new WeakMap(),
  yu = new WeakMap(),
  PE = (t) => {
    const r = Zu.get(t.target);
    r && r(t);
  },
  jE = (t) => {
    t.forEach(PE);
  };
function NE({ root: t, ...r }) {
  const s = t || document;
  yu.has(s) || yu.set(s, {});
  const o = yu.get(s),
    l = JSON.stringify(r);
  return (
    o[l] || (o[l] = new IntersectionObserver(jE, { root: t, ...r })),
    o[l]
  );
}
function RE(t, r, s) {
  const o = NE(r);
  return (
    Zu.set(t, s),
    o.observe(t),
    () => {
      (Zu.delete(t), o.unobserve(t));
    }
  );
}
const bE = { some: 0, all: 1 };
class ME extends On {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var p;
    (p = this.stopObserver) == null || p.call(this);
    const { viewport: r = {} } = this.node.getProps(),
      { root: s, margin: o, amount: l = "some", once: c } = r,
      d = {
        root: s ? s.current : void 0,
        rootMargin: o,
        threshold: typeof l == "number" ? l : bE[l],
      },
      h = (g) => {
        const { isIntersecting: y } = g;
        if (
          this.isInView === y ||
          ((this.isInView = y), c && !y && this.hasEnteredView)
        )
          return;
        (y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", y));
        const { onViewportEnter: v, onViewportLeave: w } = this.node.getProps(),
          C = y ? v : w;
        C && C(g);
      };
    this.stopObserver = RE(this.node.current, d, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: r, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(AE(r, s)) && this.startObserver();
  }
  unmount() {
    var r;
    ((r = this.stopObserver) == null || r.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function AE({ viewport: t = {} }, { viewport: r = {} } = {}) {
  return (s) => t[s] !== r[s];
}
const LE = {
    inView: { Feature: ME },
    tap: { Feature: TE },
    focus: { Feature: EE },
    hover: { Feature: CE },
  },
  DE = { layout: { ProjectionNode: ky, MeasureLayout: Vy } },
  VE = { ...iE, ...LE, ...kE, ...DE },
  I = JC(VE, eE);
function Iy({ className: t = "", noText: r = !1 }) {
  return m.jsx(Ke, {
    to: "/",
    className: `flex items-center gap-3 ${t}`,
    "aria-label": "MMG Building Maintenance & Management Home",
    children: m.jsx("div", {
      className: "w-full h-16 s sm:h-20 flex-shrink-0",
      children: m.jsx("img", {
        src: "/logo.jpeg",
        alt: "MMG Logo",
        className: "w-full h-full object-cover rounded",
      }),
    }),
  });
}
const vm = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];
function IE() {
  const [t, r] = T.useState(!1),
    s = zt(),
    o = (l) => (l === "/" ? s.pathname === "/" : s.pathname.startsWith(l));
  return m.jsxs(I.header, {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border",
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    children: [
      m.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: m.jsxs("div", {
          className: "flex items-center justify-between ",
          children: [
            m.jsx(I.div, {
              className: "flex items-center",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
              children: m.jsx(Iy, { className: "text-sm" }),
            }),
            m.jsx("nav", {
              className: "hidden md:flex items-center gap-8",
              children: vm.map((l) =>
                m.jsx(
                  Ke,
                  {
                    to: l.href,
                    className: `text-sm font-medium transition-colors ${o(l.href) ? "text-accent" : "text-foreground hover:text-accent"}`,
                    children: l.name,
                  },
                  l.name,
                ),
              ),
            }),
            m.jsx("div", {
              className: "hidden md:flex items-center gap-4",
              children: m.jsx(Ke, {
                to: "/contact",
                className:
                  "px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors",
                children: "Get a Quote",
              }),
            }),
            m.jsx("button", {
              onClick: () => r(!t),
              className: "md:hidden p-2 text-foreground",
              "aria-label": "Toggle menu",
              children: t ? m.jsx(Ym, { size: 24 }) : m.jsx(jw, { size: 24 }),
            }),
          ],
        }),
      }),
      t &&
        m.jsx("div", {
          className: "md:hidden bg-white border-t border-border",
          children: m.jsxs("nav", {
            className: "flex flex-col px-4 py-4",
            children: [
              vm.map((l) =>
                m.jsx(
                  Ke,
                  {
                    to: l.href,
                    onClick: () => r(!1),
                    className: `py-3 transition-colors ${o(l.href) ? "text-accent" : "text-foreground hover:text-accent"}`,
                    children: l.name,
                  },
                  l.name,
                ),
              ),
              m.jsx(Ke, {
                to: "/contact",
                onClick: () => r(!1),
                className:
                  "mt-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full text-center hover:bg-primary/90 transition-colors",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
    ],
  });
}
const vu = {
  services: [
    { name: "Roofing", href: "/services#roofing" },
    { name: "Painting", href: "/services#painting" },
    { name: "Flooring", href: "/services#flooring" },
    { name: "Construction", href: "/services#construction" },
    { name: "Maintenance", href: "/services#maintenance" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};
function _E() {
  return m.jsx("footer", {
    className: "bg-[#041f5e] text-white",
    children: m.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
      children: [
        m.jsxs("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-12",
          children: [
            m.jsxs("div", {
              className: "lg:col-span-1",
              children: [
                m.jsx("div", {
                  className: "inline-block mb-6",
                  children: m.jsx(Iy, { className: "text-sm" }),
                }),
                m.jsx("p", {
                  className: "text-white/60 text-sm leading-relaxed mb-6",
                  children:
                    "Situnda Global Solutions (PTY) LTD is a 100% South African owned company committed to providing quality building services with integrity.",
                }),
                m.jsx("div", {
                  className: "text-sm text-white/40",
                  children: m.jsx("p", { children: "REG NO: 2026/244431/07" }),
                }),
              ],
            }),
            m.jsxs("div", {
              children: [
                m.jsx("h4", {
                  className: "font-semibold text-white mb-6",
                  children: "Services",
                }),
                m.jsx("ul", {
                  className: "space-y-3",
                  children: vu.services.map((t) =>
                    m.jsx(
                      "li",
                      {
                        children: m.jsx(Ke, {
                          to: t.href,
                          className:
                            "text-white/60 hover:text-accent transition-colors text-sm",
                          children: t.name,
                        }),
                      },
                      t.name,
                    ),
                  ),
                }),
              ],
            }),
            m.jsxs("div", {
              children: [
                m.jsx("h4", {
                  className: "font-semibold text-white mb-6",
                  children: "Company",
                }),
                m.jsx("ul", {
                  className: "space-y-3",
                  children: vu.company.map((t) =>
                    m.jsx(
                      "li",
                      {
                        children: m.jsx(Ke, {
                          to: t.href,
                          className:
                            "text-white/60 hover:text-accent transition-colors text-sm",
                          children: t.name,
                        }),
                      },
                      t.name,
                    ),
                  ),
                }),
              ],
            }),
            m.jsxs("div", {
              children: [
                m.jsx("h4", {
                  className: "font-semibold text-white mb-6",
                  children: "Contact",
                }),
                m.jsxs("ul", {
                  className: "space-y-3 text-sm text-white/60",
                  children: [
                    m.jsxs("li", {
                      children: [
                        m.jsx("p", {
                          className:
                            "text-white/40 text-xs uppercase tracking-wider mb-1",
                          children: "Head Office",
                        }),
                        m.jsx("p", { children: "Polokwane, Limpopo Province" }),
                      ],
                    }),
                    m.jsxs("li", {
                      children: [
                        m.jsx("p", {
                          className:
                            "text-white/40 text-xs uppercase tracking-wider mb-1",
                          children: "Satellite Office",
                        }),
                        m.jsx("p", { children: "East London, Eastern Cape" }),
                      ],
                    }),
                    m.jsxs("li", {
                      children: [
                        m.jsx("p", {
                          className:
                            "text-white/40 text-xs uppercase tracking-wider mb-1",
                          children: "Directors",
                        }),
                        m.jsx("p", { children: "Asandiswa Situnda" }),
                        m.jsx("p", { children: "Thapelo Matsobane Chepape" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className:
            "mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",
          children: [
            m.jsxs("p", {
              className: "text-white/40 text-sm",
              children: [
                "© ",
                new Date().getFullYear(),
                " MMG Building Maintenance & Management. All rights reserved.",
              ],
            }),
            m.jsx("div", {
              className: "flex items-center gap-6",
              children: vu.legal.map((t) =>
                m.jsx(
                  "a",
                  {
                    href: t.href,
                    className:
                      "text-white/40 hover:text-accent transition-colors text-sm",
                    children: t.name,
                  },
                  t.name,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function OE() {
  const { pathname: t } = zt(),
    [r, s] = T.useState(!1);
  return (
    T.useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [t]),
    T.useEffect(() => {
      const o = () => {
        s(window.scrollY > 300);
      };
      return (
        window.addEventListener("scroll", o),
        o(),
        () => window.removeEventListener("scroll", o)
      );
    }, []),
    r
      ? m.jsx("button", {
          type: "button",
          onClick: () =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
          className:
            "fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/20 transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50",
          "aria-label": "Scroll to top",
          children: "↑",
        })
      : null
  );
}
const FE = [
    {
      title: "Roofing",
      description: "Complete roof design, restoration, and installation",
    },
    {
      title: "Painting",
      description: "Industrial and commercial painting services",
    },
    {
      title: "Flooring",
      description: "Epoxy, polyurethane, and concrete systems",
    },
    {
      title: "Construction",
      description: "Full building and structural works",
    },
  ],
  wo = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  ln = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
function zE() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(Qi, {
        children: [
          m.jsx("title", {
            children:
              "MMG Building Maintenance & Management | Professional Construction Services",
          }),
          m.jsx("meta", {
            name: "description",
            content:
              "MMG Building Maintenance & Management provides comprehensive construction, roofing, painting, flooring, and industrial maintenance services across South Africa since 2018.",
          }),
          m.jsx("meta", {
            name: "keywords",
            content:
              "building maintenance, construction, roofing, painting, flooring, South Africa, industrial services",
          }),
          m.jsx("link", {
            rel: "canonical",
            href: "https://mmgbuilding.co.za/",
          }),
        ],
      }),
      m.jsxs("section", {
        className:
          "relative min-h-screen flex items-center bg-[#041f5e] overflow-hidden",
        children: [
          m.jsx("div", {
            className:
              "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40",
            style: {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
            },
          }),
          m.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70",
          }),
          m.jsx("div", {
            className:
              "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20",
            children: m.jsxs(I.div, {
              className: "max-w-3xl",
              variants: wo,
              initial: "hidden",
              animate: "visible",
              children: [
                m.jsx(I.p, {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  variants: ln,
                  children: "Professional Building Services Since 2018",
                }),
                m.jsx(I.h1, {
                  className:
                    "font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance",
                  variants: ln,
                  children: "Building Excellence Through Quality & Integrity",
                }),
                m.jsx(I.p, {
                  className:
                    "text-lg text-white/80 mb-8 leading-relaxed max-w-2xl",
                  variants: ln,
                  children:
                    "MMG Building Maintenance & Management delivers comprehensive construction, maintenance, and industrial solutions across South Africa. From roofing to flooring, we bring professionalism to every project.",
                }),
                m.jsxs(I.div, {
                  className: "flex flex-col sm:flex-row gap-4 mb-16",
                  variants: ln,
                  children: [
                    m.jsxs(Ke, {
                      to: "/services",
                      className:
                        "inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors",
                      children: ["Our Services", m.jsx(Dn, { size: 18 })],
                    }),
                    m.jsx(Ke, {
                      to: "/contact",
                      className:
                        "inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors",
                      children: "Request a Quote",
                    }),
                  ],
                }),
                m.jsxs(I.div, {
                  className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
                  variants: wo,
                  children: [
                    m.jsxs(I.div, {
                      className:
                        "flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10",
                      variants: ln,
                      children: [
                        m.jsx("div", {
                          className: "p-3 bg-accent/20 rounded-lg",
                          children: m.jsx(ow, {
                            className: "text-accent",
                            size: 24,
                          }),
                        }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("p", {
                              className: "text-white font-semibold",
                              children: "Commercial",
                            }),
                            m.jsx("p", {
                              className: "text-white/60 text-sm",
                              children: "& Industrial",
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsxs(I.div, {
                      className:
                        "flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10",
                      variants: ln,
                      children: [
                        m.jsx("div", {
                          className: "p-3 bg-accent/20 rounded-lg",
                          children: m.jsx(gw, {
                            className: "text-accent",
                            size: 24,
                          }),
                        }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("p", {
                              className: "text-white font-semibold",
                              children: "Construction",
                            }),
                            m.jsx("p", {
                              className: "text-white/60 text-sm",
                              children: "& Renovation",
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsxs(I.div, {
                      className:
                        "flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10",
                      variants: ln,
                      children: [
                        m.jsx("div", {
                          className: "p-3 bg-accent/20 rounded-lg",
                          children: m.jsx(Dw, {
                            className: "text-accent",
                            size: 24,
                          }),
                        }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("p", {
                              className: "text-white font-semibold",
                              children: "Quality",
                            }),
                            m.jsx("p", {
                              className: "text-white/60 text-sm",
                              children: "Guaranteed",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-24 bg-secondary",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            m.jsxs(I.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: [
                m.jsx("p", {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  children: "What We Do",
                }),
                m.jsx("h2", {
                  className:
                    "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
                  children: "Comprehensive Building Solutions",
                }),
              ],
            }),
            m.jsx(I.div, {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
              variants: wo,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0 },
              children: FE.map((t) =>
                m.jsxs(
                  I.div,
                  {
                    className:
                      "bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow",
                    variants: ln,
                    children: [
                      m.jsx("h3", {
                        className: "text-lg font-semibold text-foreground mb-2",
                        children: t.title,
                      }),
                      m.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children: t.description,
                      }),
                    ],
                  },
                  t.title,
                ),
              ),
            }),
            m.jsx(I.div, {
              className: "text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6, delay: 0.3 },
              viewport: { once: !0 },
              children: m.jsxs(Ke, {
                to: "/services",
                className:
                  "inline-flex items-center gap-2 text-accent font-medium hover:underline",
                children: ["View All Services", m.jsx(Dn, { size: 18 })],
              }),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-white",
        children: m.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: m.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-16 items-center",
            children: [
              m.jsxs(I.div, {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: [
                  m.jsx("p", {
                    className:
                      "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                    children: "Why Choose Us",
                  }),
                  m.jsx("h2", {
                    className:
                      "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
                    children: "Your Trusted Partner in Building Excellence",
                  }),
                  m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed mb-8",
                    children:
                      "Situnda Global Solutions (PTY) LTD, trading as MMG Building Maintenance & Management, has been delivering exceptional building services since 2018. Our commitment to professionalism, integrity, and quality sets us apart.",
                  }),
                  m.jsx(I.div, {
                    className: "space-y-4 mb-8",
                    variants: wo,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    children: [
                      "100% South African Owned Company",
                      "Offices in Limpopo & Eastern Cape",
                      "Commercial, Domestic & Industrial Services",
                      "Expert Team of Professionals",
                    ].map((t) =>
                      m.jsxs(
                        I.div,
                        {
                          className: "flex items-center gap-3",
                          variants: ln,
                          children: [
                            m.jsx(uc, {
                              className: "text-accent flex-shrink-0",
                              size: 20,
                            }),
                            m.jsx("span", {
                              className: "text-foreground",
                              children: t,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  m.jsx(I.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.6, delay: 0.3 },
                    viewport: { once: !0 },
                    children: m.jsxs(Ke, {
                      to: "/about",
                      className:
                        "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors",
                      children: [
                        "Learn More About Us",
                        m.jsx(Dn, { size: 18 }),
                      ],
                    }),
                  }),
                ],
              }),
              m.jsxs(I.div, {
                className: "relative",
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: [
                  m.jsx("div", {
                    className: "aspect-[4/3] rounded-2xl overflow-hidden",
                    children: m.jsx("img", {
                      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
                      alt: "Construction site with workers",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  m.jsxs("div", {
                    className:
                      "absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl",
                    children: [
                      m.jsx("p", {
                        className: "text-4xl font-bold",
                        children: "2018",
                      }),
                      m.jsx("p", {
                        className: "text-white/80 text-sm",
                        children: "Established",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-[#041f5e]",
        children: m.jsxs(I.div, {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: !0 },
          children: [
            m.jsx("h2", {
              className:
                "font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance",
              children: "Ready to Start Your Project?",
            }),
            m.jsx("p", {
              className: "text-white/70 mb-8 leading-relaxed",
              children:
                "Contact us today for a free consultation and quote. We guarantee competitive rates with top-quality service.",
            }),
            m.jsxs(Ke, {
              to: "/contact",
              className:
                "inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors",
              children: ["Get a Free Quote", m.jsx(Dn, { size: 18 })],
            }),
          ],
        }),
      }),
    ],
  });
}
const BE = [
    "100% South African Owned Company",
    "Offices in Limpopo & Eastern Cape",
    "Commercial, Domestic & Industrial",
    "Expert Team of Professionals",
  ],
  UE = [
    {
      number: "01",
      title: "Professionalism",
      description:
        "We maintain the highest standards in every aspect of our work, from initial consultation to project completion.",
      icon: Gm,
    },
    {
      number: "02",
      title: "Integrity",
      description:
        "Honest dealings and transparent communication form the foundation of our client relationships.",
      icon: nw,
    },
    {
      number: "03",
      title: "Honesty",
      description:
        "We provide accurate assessments, realistic timelines, and fair pricing for all our services.",
      icon: Km,
    },
    {
      number: "04",
      title: "Excellence",
      description:
        "Our commitment to quality ensures superior results that exceed client expectations every time.",
      icon: qm,
    },
  ],
  $E = [{ name: "Asandiswa Situnda", role: "Director" }],
  Mr = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  It = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
function WE() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(Qi, {
        children: [
          m.jsx("title", {
            children: "About Us | MMG Building Maintenance & Management",
          }),
          m.jsx("meta", {
            name: "description",
            content:
              "Learn about MMG Building Maintenance & Management - a 100% South African owned company established in 2018, providing quality building services with integrity across Limpopo and Eastern Cape.",
          }),
          m.jsx("meta", {
            name: "keywords",
            content:
              "about MMG, South African construction company, building services, Polokwane, East London",
          }),
          m.jsx("link", {
            rel: "canonical",
            href: "https://mmgbuilding.co.za/about",
          }),
        ],
      }),
      m.jsxs("section", {
        className: "relative pt-32 pb-20 bg-[#041f5e] overflow-hidden",
        children: [
          m.jsx("div", {
            className:
              "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
            style: {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
            },
          }),
          m.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-black/60 to-black/40",
          }),
          m.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: m.jsxs(I.div, {
              className: "max-w-3xl",
              variants: Mr,
              initial: "hidden",
              animate: "visible",
              children: [
                m.jsx(I.p, {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  variants: It,
                  children: "About Us",
                }),
                m.jsx(I.h1, {
                  className:
                    "font-serif text-4xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance",
                  variants: It,
                  children: "Building South Africa's Future With Excellence",
                }),
                m.jsx(I.p, {
                  className: "text-white/80 text-lg max-w-2xl leading-relaxed",
                  variants: It,
                  children:
                    "Established in 2018, MMG Building Maintenance & Management is committed to delivering quality construction and maintenance services across the nation.",
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-24 bg-white",
        children: m.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: m.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-16 items-center",
            children: [
              m.jsxs(I.div, {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: [
                  m.jsx("h2", {
                    className:
                      "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
                    children: "Your Trusted Partner in Building Excellence",
                  }),
                  m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed mb-6",
                    children:
                      "Situnda Global Solutions (PTY) LTD, trading as MMG Building Maintenance & Management, was established in 2018 as a private company dedicated to providing premium products and services to public institutions, private businesses, and households.",
                  }),
                  m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed mb-8",
                    children:
                      "With headquarters in Polokwane, Limpopo Province and a satellite office in East London, Eastern Cape, we are strategically positioned to serve clients across South Africa with professional industrial building maintenance and construction services.",
                  }),
                  m.jsx(I.div, {
                    className: "grid sm:grid-cols-2 gap-4 mb-8",
                    variants: Mr,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    children: BE.map((t) =>
                      m.jsxs(
                        I.div,
                        {
                          className: "flex items-center gap-3",
                          variants: It,
                          children: [
                            m.jsx(uc, {
                              className: "text-accent flex-shrink-0",
                              size: 20,
                            }),
                            m.jsx("span", {
                              className: "text-foreground font-medium",
                              children: t,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  m.jsxs(I.div, {
                    className:
                      "flex flex-col sm:flex-row gap-8 pt-6 border-t border-border",
                    variants: Mr,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    children: [
                      m.jsxs(I.div, {
                        variants: It,
                        children: [
                          m.jsx("p", {
                            className: "text-3xl font-bold text-foreground",
                            children: "2018",
                          }),
                          m.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Established",
                          }),
                        ],
                      }),
                      m.jsxs(I.div, {
                        variants: It,
                        children: [
                          m.jsx("p", {
                            className: "text-3xl font-bold text-foreground",
                            children: "2",
                          }),
                          m.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Office Locations",
                          }),
                        ],
                      }),
                      m.jsxs(I.div, {
                        variants: It,
                        children: [
                          m.jsx("p", {
                            className: "text-3xl font-bold text-foreground",
                            children: "100%",
                          }),
                          m.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "SA Owned",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs(I.div, {
                className: "relative",
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: [
                  m.jsx("div", {
                    className: "aspect-[4/5] rounded-2xl overflow-hidden",
                    children: m.jsx("img", {
                      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
                      alt: "Construction site with workers",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  m.jsxs(I.div, {
                    className:
                      "absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl max-w-xs",
                    initial: { opacity: 0, scale: 0.8 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { duration: 0.6, delay: 0.2 },
                    viewport: { once: !0 },
                    children: [
                      m.jsx("p", {
                        className: "font-serif text-xl font-semibold mb-2",
                        children:
                          '"To be the preferred service provider that is credible and has integrity"',
                      }),
                      m.jsx("p", {
                        className: "text-white/80 text-sm",
                        children: "— Our Vision",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-secondary",
        children: m.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: m.jsxs(I.div, {
            className: "grid md:grid-cols-2 gap-8",
            variants: Mr,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            children: [
              m.jsxs(I.div, {
                className: "bg-white p-10 rounded-2xl shadow-sm",
                variants: It,
                children: [
                  m.jsx(I.div, {
                    className:
                      "w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6",
                    initial: { scale: 0.8, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    transition: { duration: 0.6, delay: 0.1 },
                    viewport: { once: !0 },
                    children: m.jsx(Km, { className: "text-accent", size: 28 }),
                  }),
                  m.jsx("h3", {
                    className: "text-2xl font-semibold text-foreground mb-4",
                    children: "Our Mission",
                  }),
                  m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children:
                      "To supply our clients with quality service at a competitive price. We are dedicated to providing beneficial and cost-effective solutions with the best quality products and excellent service to our clients, always prioritizing their needs and satisfaction.",
                  }),
                ],
              }),
              m.jsxs(I.div, {
                className: "bg-white p-10 rounded-2xl shadow-sm",
                variants: It,
                children: [
                  m.jsx(I.div, {
                    className:
                      "w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6",
                    initial: { scale: 0.8, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    transition: { duration: 0.6, delay: 0.1 },
                    viewport: { once: !0 },
                    children: m.jsx(qm, { className: "text-accent", size: 28 }),
                  }),
                  m.jsx("h3", {
                    className: "text-2xl font-semibold text-foreground mb-4",
                    children: "Our Vision",
                  }),
                  m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children:
                      "To be the preferred service provider that is credible and has integrity. We aim to build lasting relationships with our clients through consistent quality, transparent communication, and unwavering commitment to excellence in every project we undertake.",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-[#041f5e]",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            m.jsxs(I.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: [
                m.jsx("p", {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  children: "Our Values",
                }),
                m.jsx("h2", {
                  className:
                    "font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance",
                  children: "What Drives Us Forward",
                }),
                m.jsx("p", {
                  className: "text-white/70 max-w-2xl mx-auto leading-relaxed",
                  children:
                    "Our mission is to supply our clients with quality service at a competitive price, guided by our core values.",
                }),
              ],
            }),
            m.jsx(I.div, {
              className:
                "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden",
              variants: Mr,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0 },
              children: UE.map((t) =>
                m.jsxs(
                  I.div,
                  {
                    className:
                      "bg-[#041f5e] p-8 hover:bg-white/5 transition-colors",
                    variants: It,
                    children: [
                      m.jsx(I.p, {
                        className:
                          "text-accent text-4xl font-serif font-bold mb-4",
                        initial: { opacity: 0, scale: 0.8 },
                        whileInView: { opacity: 1, scale: 1 },
                        transition: { duration: 0.6, delay: 0.1 },
                        viewport: { once: !0 },
                        children: t.number,
                      }),
                      m.jsx("h3", {
                        className: "text-white text-xl font-semibold mb-3",
                        children: t.title,
                      }),
                      m.jsx("p", {
                        className: "text-white/60 text-sm leading-relaxed",
                        children: t.description,
                      }),
                    ],
                  },
                  t.number,
                ),
              ),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-white",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            m.jsxs(I.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: [
                m.jsx("p", {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  children: "Leadership",
                }),
                m.jsx("h2", {
                  className:
                    "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
                  children: "Meet Our Directors",
                }),
              ],
            }),
            m.jsx(I.div, {
              className: "max-w-lg mx-auto",
              variants: Mr,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0 },
              children: $E.map((t) =>
                m.jsxs(
                  I.div,
                  {
                    className:
                      "text-center p-10 bg-secondary rounded-2xl shadow-sm",
                    variants: It,
                    children: [
                      m.jsx(I.div, {
                        className:
                          "w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8",
                        initial: { scale: 0.8, opacity: 0 },
                        whileInView: { scale: 1, opacity: 1 },
                        transition: { duration: 0.6, delay: 0.1 },
                        viewport: { once: !0 },
                        children: m.jsx(Gm, {
                          className: "text-accent",
                          size: 48,
                        }),
                      }),
                      m.jsx("h3", {
                        className:
                          "text-2xl font-semibold text-foreground mb-2",
                        children: t.name,
                      }),
                      m.jsx("p", {
                        className: "text-accent font-medium text-lg",
                        children: t.role,
                      }),
                      m.jsx("p", {
                        className: "text-muted-foreground mt-4 leading-relaxed",
                        children:
                          "Leading our team with expertise and dedication to delivering exceptional building maintenance and construction services across South Africa.",
                      }),
                    ],
                  },
                  t.name,
                ),
              ),
            }),
            m.jsxs("div", {
              className: "mt-12 text-center",
              children: [
                m.jsx("p", {
                  className: "text-muted-foreground mb-2",
                  children: "Company Registration Number",
                }),
                m.jsx("p", {
                  className: "text-foreground font-semibold",
                  children: "REG NO: 2026/244431/07",
                }),
              ],
            }),
          ],
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-secondary",
        children: m.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            m.jsx(I.h2, {
              className:
                "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: "Ready to Work With Us?",
            }),
            m.jsx(I.p, {
              className: "text-muted-foreground mb-8 leading-relaxed",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: !0 },
              children:
                "Let us bring our expertise and commitment to excellence to your next project.",
            }),
            m.jsx(I.div, {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6, delay: 0.2 },
              viewport: { once: !0 },
              children: m.jsxs(Ke, {
                to: "/contact",
                className:
                  "inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors",
                children: ["Contact Us Today", m.jsx(Dn, { size: 18 })],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const HE = [
    {
      id: "roofing",
      icon: ww,
      title: "Roofing",
      description:
        "Complete roof designing, restoration, and installation services including cladding, steel structures, and refurbishment for all sectors.",
      features: [
        "Roof Design & Planning",
        "Installation & Cladding",
        "Steel Structure Building",
        "Restoration & Repairs",
        "IBR & Corrugated Sheeting",
        "Gutter Installation",
      ],
      image:
        "https://images.unsplash.com/photo-1632873669009-05e9da94a09b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "painting",
      icon: Rw,
      title: "Painting",
      description:
        "Professional contract painting services with specialized spray systems including epoxy paints, poly-urea, and polyurethane coatings.",
      features: [
        "Contract Painting",
        "Industrial Coatings",
        "Epoxy Paint Systems",
        "Polyurethane Finishes",
        "Spray Applications",
        "Surface Preparation",
      ],
      image:
        "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "flooring",
      icon: kw,
      title: "Flooring",
      description:
        "Comprehensive flooring solutions from concrete and epoxy systems to vinyl and tile installations for any environment.",
      features: [
        "Epoxy Flooring",
        "Polyurethane Floors",
        "Concrete Systems",
        "Vinyl & Tile Installation",
        "Self-Leveling Floors",
        "Anti-Slip Coatings",
      ],
      image:
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "construction",
      icon: iw,
      title: "Construction",
      description:
        "Full building and structural construction services for residential and commercial projects of any scale.",
      features: [
        "Structural Building",
        "Residential Projects",
        "Commercial Development",
        "Renovations",
        "Extensions",
        "New Builds",
      ],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "maintenance",
      icon: Ow,
      title: "Maintenance",
      description:
        "Reactive and preventive building maintenance services ensuring your property remains in optimal condition.",
      features: [
        "Facilities Management",
        "Reactive Repairs",
        "Preventive Care",
        "Emergency Services",
        "Scheduled Maintenance",
        "Property Inspections",
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "masonry",
      icon: vw,
      title: "Masonry",
      description:
        "Expert masonry work including brick and concrete block construction, grouting, and polished concrete installations.",
      features: [
        "Brick Masonry",
        "Concrete Blocks",
        "Rib & Block Slabs",
        "Polished Concrete",
        "Grouting",
        "Plastering",
      ],
      image:
        "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&w=800&q=80",
    },
  ],
  qE = [
    "Commercial Buildings",
    "Industrial Facilities",
    "Residential Properties",
    "Government Projects",
    "Retail Spaces",
    "Warehouses",
  ],
  xu = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  Ii = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
function KE() {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(Qi, {
        children: [
          m.jsx("title", {
            children: "Our Services | MMG Building Maintenance & Management",
          }),
          m.jsx("meta", {
            name: "description",
            content:
              "Explore MMG's comprehensive building services including roofing, painting, flooring, construction, maintenance, and masonry for commercial, industrial, and residential sectors.",
          }),
          m.jsx("meta", {
            name: "keywords",
            content:
              "roofing services, painting services, flooring installation, construction, building maintenance, masonry, South Africa",
          }),
          m.jsx("link", {
            rel: "canonical",
            href: "https://mmgbuilding.co.za/services",
          }),
        ],
      }),
      m.jsxs("section", {
        className: "relative pt-32 pb-20 bg-[#041f5e] overflow-hidden",
        children: [
          m.jsx("div", {
            className:
              "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
            style: {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80')",
            },
          }),
          m.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-black/60 to-black/40",
          }),
          m.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: m.jsxs(I.div, {
              className: "max-w-3xl",
              variants: xu,
              initial: "hidden",
              animate: "visible",
              children: [
                m.jsx(I.p, {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  variants: Ii,
                  children: "Our Services",
                }),
                m.jsx(I.h1, {
                  className:
                    "font-serif text-4xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance",
                  variants: Ii,
                  children: "Comprehensive Building Solutions",
                }),
                m.jsx(I.p, {
                  className: "text-white/80 text-lg max-w-2xl leading-relaxed",
                  variants: Ii,
                  children:
                    "From concept to completion, we provide beneficial and cost-effective solutions with quality products and excellent service across all sectors.",
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-24 bg-white",
        children: m.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: m.jsx("div", {
            className: "space-y-24",
            children: HE.map((t, r) =>
              m.jsxs(
                I.div,
                {
                  id: t.id,
                  className: `grid lg:grid-cols-2 gap-12 items-center ${r % 2 === 1 ? "lg:flex-row-reverse" : ""}`,
                  initial: { opacity: 0, x: r % 2 === 0 ? -50 : 50 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  viewport: { once: !0 },
                  children: [
                    m.jsxs("div", {
                      className: r % 2 === 1 ? "lg:order-2" : "",
                      children: [
                        m.jsx(I.div, {
                          className:
                            "w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6",
                          initial: { scale: 0.8, opacity: 0 },
                          whileInView: { scale: 1, opacity: 1 },
                          transition: { duration: 0.5, delay: 0.1 },
                          viewport: { once: !0 },
                          children: m.jsx(t.icon, {
                            className: "text-accent",
                            size: 28,
                          }),
                        }),
                        m.jsx(I.h2, {
                          className: "text-3xl font-bold text-foreground mb-4",
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          transition: { duration: 0.6, delay: 0.15 },
                          viewport: { once: !0 },
                          children: t.title,
                        }),
                        m.jsx(I.p, {
                          className:
                            "text-muted-foreground leading-relaxed mb-6",
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          transition: { duration: 0.6, delay: 0.2 },
                          viewport: { once: !0 },
                          children: t.description,
                        }),
                        m.jsx(I.div, {
                          className: "grid sm:grid-cols-2 gap-3 mb-8",
                          variants: xu,
                          initial: "hidden",
                          whileInView: "visible",
                          viewport: { once: !0 },
                          children: t.features.map((s) =>
                            m.jsxs(
                              I.div,
                              {
                                className: "flex items-center gap-2",
                                variants: Ii,
                                children: [
                                  m.jsx(uc, {
                                    className: "text-accent flex-shrink-0",
                                    size: 18,
                                  }),
                                  m.jsx("span", {
                                    className: "text-foreground text-sm",
                                    children: s,
                                  }),
                                ],
                              },
                              s,
                            ),
                          ),
                        }),
                        m.jsx(I.div, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          transition: { duration: 0.6, delay: 0.35 },
                          viewport: { once: !0 },
                          children: m.jsxs(Ke, {
                            to: "/contact",
                            className:
                              "inline-flex items-center gap-2 text-accent font-medium hover:underline",
                            children: [
                              "Request a Quote",
                              m.jsx(Dn, { size: 18 }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    m.jsx(I.div, {
                      className: r % 2 === 1 ? "lg:order-1" : "",
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                      viewport: { once: !0 },
                      children: m.jsx("div", {
                        className: "aspect-[4/3] rounded-2xl overflow-hidden",
                        children: m.jsx("img", {
                          src: t.image,
                          alt: t.title,
                          className: "w-full h-full object-cover",
                        }),
                      }),
                    }),
                  ],
                },
                t.id,
              ),
            ),
          }),
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-secondary",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            m.jsxs(I.div, {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: [
                m.jsx("p", {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  children: "Sectors We Serve",
                }),
                m.jsx("h2", {
                  className:
                    "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
                  children: "Expertise Across Industries",
                }),
                m.jsx("p", {
                  className: "text-muted-foreground max-w-2xl mx-auto",
                  children:
                    "We provide our services to a diverse range of sectors, ensuring quality and professionalism in every project.",
                }),
              ],
            }),
            m.jsx(I.div, {
              className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6",
              variants: xu,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0 },
              children: qE.map((t) =>
                m.jsx(
                  I.div,
                  {
                    className: "bg-white p-6 rounded-xl shadow-sm text-center",
                    variants: Ii,
                    children: m.jsx("p", {
                      className: "text-foreground font-medium",
                      children: t,
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-[#041f5e]",
        children: m.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            m.jsx(I.h2, {
              className:
                "font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: "Need a Custom Solution?",
            }),
            m.jsx(I.p, {
              className: "text-white/70 mb-8 leading-relaxed",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: !0 },
              children:
                "Every project is unique. Contact us to discuss your specific requirements and receive a tailored quote.",
            }),
            m.jsx(I.div, {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.6, delay: 0.2 },
              viewport: { once: !0 },
              children: m.jsxs(Ke, {
                to: "/contact",
                className:
                  "inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors",
                children: ["Get Your Free Quote", m.jsx(Dn, { size: 18 })],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const GE = [
    "All",
    "Roofing",
    "Flooring",
    "Construction",
    "Painting",
    "Maintenance",
  ],
  xm = [
    {
      id: 1,
      title: "Industrial Warehouse Roofing",
      category: "Roofing",
      description:
        "Complete roof installation for a 5,000 sqm industrial warehouse including IBR sheeting and gutter systems.",
      location: "Polokwane, Limpopo",
      image:
        "https://images.unsplash.com/photo-1632873669009-05e9da94a09b?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1632873669009-05e9da94a09b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581092336060-6ee94ed74815?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !0,
    },
    {
      id: 2,
      title: "Commercial Floor Coating",
      category: "Flooring",
      description:
        "Epoxy flooring installation for a commercial warehouse with anti-slip coating.",
      location: "East London, Eastern Cape",
      image:
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518733057094-95b5313b00a6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !0,
    },
    {
      id: 3,
      title: "Office Building Construction",
      category: "Construction",
      description:
        "New build commercial office space with modern finishes and structural work.",
      location: "Polokwane, Limpopo",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !0,
    },
    {
      id: 4,
      title: "Factory Spray Painting",
      category: "Painting",
      description:
        "Industrial spray painting with specialized epoxy coatings for manufacturing facility.",
      location: "East London, Eastern Cape",
      image:
        "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !1,
    },
    {
      id: 5,
      title: "Shopping Center Maintenance",
      category: "Maintenance",
      description:
        "Comprehensive maintenance contract for retail shopping center.",
      location: "Polokwane, Limpopo",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !1,
    },
    {
      id: 6,
      title: "Residential Roof Restoration",
      category: "Roofing",
      description:
        "Complete roof restoration and waterproofing for residential estate.",
      location: "East London, Eastern Cape",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1581091870620-0b03398b05e4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !1,
    },
    {
      id: 7,
      title: "Warehouse Floor System",
      category: "Flooring",
      description:
        "Polyurethane floor system installation for cold storage warehouse.",
      location: "Polokwane, Limpopo",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1534158592723-3e3f3c1b4106?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1508896694512-9c6ad1d8d849?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !1,
    },
    {
      id: 8,
      title: "Office Block Extension",
      category: "Construction",
      description:
        "Two-story extension to existing commercial office building.",
      location: "East London, Eastern Cape",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1463668952892-3b6cf5ec5f3a?auto=format&fit=crop&w=1200&q=80",
      ],
      featured: !1,
    },
  ],
  So = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  un = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
function YE() {
  const [t, r] = T.useState("All"),
    [s, o] = T.useState(null),
    [l, c] = T.useState(0),
    d = xm.filter((v) =>
      t === "All"
        ? !0
        : v.category.trim().toLowerCase() === t.trim().toLowerCase(),
    ),
    h = (v) => {
      (o(v), c(0));
    },
    p = () => o(null),
    g = () => {
      s && c((v) => (v === 0 ? s.images.length - 1 : v - 1));
    },
    y = () => {
      s && c((v) => (v === s.images.length - 1 ? 0 : v + 1));
    };
  return (
    T.useEffect(() => {
      const v = (w) => {
        s &&
          (w.key === "Escape" && p(),
          w.key === "ArrowRight" && y(),
          w.key === "ArrowLeft" && g());
      };
      return (
        window.addEventListener("keydown", v),
        () => window.removeEventListener("keydown", v)
      );
    }, [s]),
    m.jsxs(m.Fragment, {
      children: [
        m.jsxs(Qi, {
          children: [
            m.jsx("title", {
              children: "Our Works | MMG Building Maintenance & Management",
            }),
            m.jsx("meta", {
              name: "description",
              content:
                "Explore MMG's portfolio of completed construction, roofing, painting, flooring, and maintenance projects across South Africa's commercial and industrial sectors.",
            }),
            m.jsx("meta", {
              name: "keywords",
              content:
                "construction projects, building portfolio, roofing projects, commercial construction, South Africa",
            }),
            m.jsx("link", {
              rel: "canonical",
              href: "https://mmgbuilding.co.za/works",
            }),
          ],
        }),
        m.jsxs("section", {
          className: "relative pt-32 pb-20 bg-[#041f5e] overflow-hidden",
          children: [
            m.jsx("div", {
              className:
                "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
              style: {
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80')",
              },
            }),
            m.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-black/60 to-black/40",
            }),
            m.jsx("div", {
              className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: m.jsxs(I.div, {
                className: "max-w-3xl",
                variants: So,
                initial: "hidden",
                animate: "visible",
                children: [
                  m.jsx(I.p, {
                    className:
                      "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                    variants: un,
                    children: "Our Works",
                  }),
                  m.jsx(I.h1, {
                    className:
                      "font-serif text-4xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance",
                    variants: un,
                    children: "Featured Projects",
                  }),
                  m.jsx(I.p, {
                    className:
                      "text-white/80 text-lg max-w-2xl leading-relaxed",
                    variants: un,
                    children:
                      "Explore our portfolio of completed projects across commercial, industrial, and residential sectors throughout South Africa.",
                  }),
                ],
              }),
            }),
          ],
        }),
        m.jsx("section", {
          className: "py-24 bg-white",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              m.jsx("div", {
                className: "flex flex-wrap justify-center gap-3 mb-16",
                children: GE.map((v) =>
                  m.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => r(v),
                      className: `px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${t === v ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"}`,
                      children: v,
                    },
                    v,
                  ),
                ),
              }),
              t === "All" &&
                m.jsxs(I.div, {
                  className: "mb-16",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  viewport: { once: !0 },
                  children: [
                    m.jsx(I.h2, {
                      className: "text-2xl font-bold text-foreground mb-8",
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: 0.1 },
                      viewport: { once: !0 },
                      children: "Featured Projects",
                    }),
                    m.jsx(I.div, {
                      className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                      variants: So,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0 },
                      children: xm
                        .filter((v) => v.featured)
                        .map((v) =>
                          m.jsxs(
                            I.div,
                            {
                              className:
                                "group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer",
                              variants: un,
                              onClick: () => h(v),
                              children: [
                                m.jsx("img", {
                                  src: v.image,
                                  alt: v.title,
                                  className:
                                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                }),
                                m.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",
                                }),
                                m.jsxs("div", {
                                  className:
                                    "absolute bottom-0 left-0 right-0 p-6",
                                  children: [
                                    m.jsx("p", {
                                      className:
                                        "text-accent text-sm font-medium mb-2",
                                      children: v.category,
                                    }),
                                    m.jsx("h3", {
                                      className:
                                        "text-white text-xl font-semibold mb-1",
                                      children: v.title,
                                    }),
                                    m.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        m.jsxs("span", {
                                          className: "text-white/60 text-sm",
                                          children: [
                                            v.images.length,
                                            " photos",
                                          ],
                                        }),
                                        m.jsx("span", {
                                          className: "text-white/60 text-sm",
                                          children: "Click to view gallery",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                m.jsx("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20 md:group-hover:bg-black/20",
                                  children: m.jsxs("span", {
                                    className:
                                      "opacity-100 md:opacity-0 md:group-hover:opacity-100 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white text-sm backdrop-blur-sm",
                                    children: [
                                      "View Gallery",
                                      m.jsx(ew, { size: 16 }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            v.id,
                          ),
                        ),
                    }),
                  ],
                }),
              m.jsxs("div", {
                children: [
                  t === "All" &&
                    m.jsx(I.h2, {
                      className: "text-2xl font-bold text-foreground mb-8",
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                      viewport: { once: !0 },
                      children: "All Projects",
                    }),
                  m.jsx(
                    I.div,
                    {
                      className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                      variants: So,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0 },
                      children: d.map((v) =>
                        m.jsxs(
                          I.div,
                          {
                            className:
                              "group bg-secondary rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
                            variants: un,
                            onClick: () => h(v),
                            children: [
                              m.jsx("div", {
                                className: "aspect-[16/10] overflow-hidden",
                                children: m.jsx("img", {
                                  src: v.image,
                                  alt: v.title,
                                  className:
                                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                }),
                              }),
                              m.jsxs("div", {
                                className: "p-6",
                                children: [
                                  m.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-3",
                                    children: [
                                      m.jsx("span", {
                                        className:
                                          "text-accent text-sm font-medium",
                                        children: v.category,
                                      }),
                                      m.jsxs("span", {
                                        className:
                                          "text-muted-foreground text-sm",
                                        children: [v.images.length, " photos"],
                                      }),
                                    ],
                                  }),
                                  m.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-foreground mb-2",
                                    children: v.title,
                                  }),
                                  m.jsx("p", {
                                    className:
                                      "text-muted-foreground text-sm mb-3",
                                    children: v.description,
                                  }),
                                  m.jsx("p", {
                                    className:
                                      "text-accent text-sm font-medium",
                                    children: "Click to view gallery →",
                                  }),
                                ],
                              }),
                            ],
                          },
                          v.id,
                        ),
                      ),
                    },
                    t,
                  ),
                ],
              }),
              d.length === 0 &&
                m.jsx(I.div, {
                  className: "text-center py-12",
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { duration: 0.6 },
                  viewport: { once: !0 },
                  children: m.jsx("p", {
                    className: "text-muted-foreground",
                    children: "No projects found in this category.",
                  }),
                }),
            ],
          }),
        }),
        s &&
          m.jsx(I.div, {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: (v) => {
              v.target === v.currentTarget && p();
            },
            children: m.jsxs("div", {
              className:
                "relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl",
              children: [
                m.jsx("button", {
                  type: "button",
                  onClick: p,
                  className:
                    "absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20",
                  children: m.jsx(Ym, { size: 20 }),
                }),
                m.jsxs("div", {
                  className: "relative",
                  children: [
                    m.jsx("img", {
                      src: s.images[l],
                      alt: `${s.title} image ${l + 1}`,
                      className: "h-[55vh] w-full object-cover sm:h-[60vh]",
                    }),
                    m.jsx("button", {
                      type: "button",
                      onClick: g,
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70",
                      children: m.jsx(lw, { size: 24 }),
                    }),
                    m.jsx("button", {
                      type: "button",
                      onClick: y,
                      className:
                        "absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70",
                      children: m.jsx(cw, { size: 24 }),
                    }),
                    m.jsxs("div", {
                      className:
                        "absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white text-sm",
                      children: [
                        s.title,
                        " (",
                        l + 1,
                        "/",
                        s.images.length,
                        ")",
                      ],
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className:
                    "space-y-4 border-t border-white/10 bg-slate-950 px-6 py-5 sm:px-8",
                  children: [
                    m.jsxs("div", {
                      className:
                        "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                      children: [
                        m.jsxs("div", {
                          children: [
                            m.jsx("p", {
                              className:
                                "text-sm uppercase tracking-[0.24em] text-accent",
                              children: s.category,
                            }),
                            m.jsx("h3", {
                              className: "text-2xl font-semibold text-white",
                              children: s.title,
                            }),
                          ],
                        }),
                        m.jsx("p", {
                          className: "text-sm text-white/70",
                          children: s.location,
                        }),
                      ],
                    }),
                    m.jsx("p", {
                      className: "text-sm leading-relaxed text-white/75",
                      children: s.description,
                    }),
                    m.jsx("div", {
                      className: "grid grid-cols-3 gap-3 sm:grid-cols-5",
                      children: s.images.map((v, w) =>
                        m.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => c(w),
                            className: `overflow-hidden rounded-2xl border transition ${w === l ? "border-accent" : "border-white/10"}`,
                            children: m.jsx("img", {
                              src: v,
                              alt: `${s.title} thumbnail ${w + 1}`,
                              className: "h-20 w-full object-cover",
                            }),
                          },
                          v,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        m.jsx("section", {
          className: "py-24 bg-secondary",
          children: m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              m.jsx(I.div, {
                className: "text-center mb-16",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: m.jsx("h2", {
                  className:
                    "font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance",
                  children: "Our Track Record",
                }),
              }),
              m.jsxs(I.div, {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8",
                variants: So,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: !0 },
                children: [
                  m.jsxs(I.div, {
                    className: "text-center",
                    variants: un,
                    children: [
                      m.jsx("p", {
                        className: "text-4xl font-bold text-accent mb-2",
                        children: "50+",
                      }),
                      m.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Projects Completed",
                      }),
                    ],
                  }),
                  m.jsxs(I.div, {
                    className: "text-center",
                    variants: un,
                    children: [
                      m.jsx("p", {
                        className: "text-4xl font-bold text-accent mb-2",
                        children: "100%",
                      }),
                      m.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Client Satisfaction",
                      }),
                    ],
                  }),
                  m.jsxs(I.div, {
                    className: "text-center",
                    variants: un,
                    children: [
                      m.jsx("p", {
                        className: "text-4xl font-bold text-accent mb-2",
                        children: "6+",
                      }),
                      m.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Years Experience",
                      }),
                    ],
                  }),
                  m.jsxs(I.div, {
                    className: "text-center",
                    variants: un,
                    children: [
                      m.jsx("p", {
                        className: "text-4xl font-bold text-accent mb-2",
                        children: "2",
                      }),
                      m.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Provinces Served",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        m.jsx("section", {
          className: "py-24 bg-[#041f5e]",
          children: m.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [
              m.jsx(I.h2, {
                className:
                  "font-serif text-3xl sm:text-4xl font-bold text-white mb-6 text-balance",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: "Ready to Start Your Project?",
              }),
              m.jsx(I.p, {
                className: "text-white/70 mb-8 leading-relaxed",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                viewport: { once: !0 },
                children:
                  "Join our growing list of satisfied clients. Contact us today for a free consultation and quote.",
              }),
              m.jsx(I.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.2 },
                viewport: { once: !0 },
                children: m.jsxs(Ke, {
                  to: "/contact",
                  className:
                    "inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors",
                  children: ["Get Started Today", m.jsx(Dn, { size: 18 })],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const XE = [
    {
      icon: Nu,
      title: "Head Office",
      details: ["Polokwane", "Limpopo Province", "South Africa"],
    },
    {
      icon: Nu,
      title: "Satellite Office",
      details: ["East London", "Eastern Cape", "South Africa"],
    },
    { icon: Mw, title: "Phone", details: ["+27 XX XXX XXXX"] },
    { icon: Ew, title: "Email", details: ["info@mmgbuilding.co.za"] },
  ],
  QE = [
    { value: "roofing", label: "Roofing" },
    { value: "painting", label: "Painting" },
    { value: "flooring", label: "Flooring" },
    { value: "construction", label: "Construction" },
    { value: "maintenance", label: "Maintenance" },
    { value: "masonry", label: "Masonry" },
    { value: "other", label: "Other" },
  ],
  wu = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  _i = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
function ZE() {
  const [t, r] = T.useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      projectType: "",
      message: "",
    }),
    [s, o] = T.useState(!1),
    [l, c] = T.useState(!1),
    d = (p) => {
      (p.preventDefault(),
        o(!0),
        setTimeout(() => {
          (o(!1),
            c(!0),
            r({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              projectType: "",
              message: "",
            }));
        }, 1e3));
    },
    h = (p) => {
      r({ ...t, [p.target.name]: p.target.value });
    };
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(Qi, {
        children: [
          m.jsx("title", {
            children: "Contact Us | MMG Building Maintenance & Management",
          }),
          m.jsx("meta", {
            name: "description",
            content:
              "Contact MMG Building Maintenance & Management for a free quote on construction, roofing, painting, flooring, and maintenance services. Offices in Polokwane and East London.",
          }),
          m.jsx("meta", {
            name: "keywords",
            content:
              "contact MMG, building quote, construction services contact, Polokwane, East London",
          }),
          m.jsx("link", {
            rel: "canonical",
            href: "https://mmgbuilding.co.za/contact",
          }),
        ],
      }),
      m.jsxs("section", {
        className: "relative pt-32 pb-20 bg-[#041f5e] overflow-hidden",
        children: [
          m.jsx("div", {
            className:
              "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
            style: {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')",
            },
          }),
          m.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-black/60 to-black/40",
          }),
          m.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: m.jsxs(I.div, {
              className: "max-w-3xl",
              variants: wu,
              initial: "hidden",
              animate: "visible",
              children: [
                m.jsx(I.p, {
                  className:
                    "text-accent font-medium mb-4 tracking-wider uppercase text-sm",
                  variants: _i,
                  children: "Contact Us",
                }),
                m.jsx(I.h1, {
                  className:
                    "font-serif text-4xl sm:text-5xl font-bold text-white mb-6 max-w-2xl text-balance",
                  variants: _i,
                  children: "Let's Discuss Your Project",
                }),
                m.jsx(I.p, {
                  className: "text-white/80 text-lg max-w-2xl leading-relaxed",
                  variants: _i,
                  children:
                    "Ready to start your next building project? Get in touch with our team for a free consultation and competitive quote.",
                }),
              ],
            }),
          }),
        ],
      }),
      m.jsx("section", {
        className: "py-24 bg-white",
        children: m.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: m.jsxs("div", {
            className: "grid lg:grid-cols-5 gap-16",
            children: [
              m.jsxs("div", {
                className: "lg:col-span-2",
                children: [
                  m.jsx(I.h2, {
                    className: "text-2xl font-bold text-foreground mb-6",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                    viewport: { once: !0 },
                    children: "Get in Touch",
                  }),
                  m.jsx(I.p, {
                    className: "text-muted-foreground leading-relaxed mb-12",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.1 },
                    viewport: { once: !0 },
                    children:
                      "We guarantee competitive rates with top-quality service. Our team is ready to help with your construction, maintenance, and building needs.",
                  }),
                  m.jsx("div", {
                    className: "space-y-8 mb-12",
                    children: m.jsx(I.div, {
                      variants: wu,
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0 },
                      children: XE.map((p) =>
                        m.jsxs(
                          I.div,
                          {
                            className: "flex gap-4",
                            variants: _i,
                            children: [
                              m.jsx(I.div, {
                                className:
                                  "w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0",
                                initial: { opacity: 0, scale: 0.8 },
                                whileInView: { opacity: 1, scale: 1 },
                                transition: { duration: 0.6 },
                                viewport: { once: !0 },
                                children: m.jsx(p.icon, {
                                  className: "text-accent",
                                  size: 22,
                                }),
                              }),
                              m.jsxs("div", {
                                children: [
                                  m.jsx("p", {
                                    className:
                                      "font-medium text-foreground mb-1",
                                    children: p.title,
                                  }),
                                  p.details.map((g) =>
                                    m.jsx(
                                      "p",
                                      {
                                        className:
                                          "text-muted-foreground text-sm",
                                        children: g,
                                      },
                                      g,
                                    ),
                                  ),
                                ],
                              }),
                            ],
                          },
                          p.title,
                        ),
                      ),
                    }),
                  }),
                  m.jsxs(I.div, {
                    className: "p-6 bg-secondary rounded-2xl",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                    viewport: { once: !0 },
                    children: [
                      m.jsxs("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                          m.jsx(hw, { className: "text-accent", size: 22 }),
                          m.jsx("h3", {
                            className: "font-medium text-foreground",
                            children: "Business Hours",
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-2 text-sm",
                        children: [
                          m.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              m.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Monday - Friday",
                              }),
                              m.jsx("span", {
                                className: "text-foreground",
                                children: "08:00 - 17:00",
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              m.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Saturday",
                              }),
                              m.jsx("span", {
                                className: "text-foreground",
                                children: "08:00 - 13:00",
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              m.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Sunday",
                              }),
                              m.jsx("span", {
                                className: "text-foreground",
                                children: "Closed",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx(I.div, {
                className: "lg:col-span-3",
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: m.jsxs("div", {
                  className: "bg-secondary rounded-2xl p-8 lg:p-10",
                  children: [
                    m.jsx("h3", {
                      className: "text-xl font-semibold text-foreground mb-2",
                      children: "Request a Quote",
                    }),
                    m.jsx("p", {
                      className: "text-muted-foreground text-sm mb-8",
                      children:
                        "Fill out the form below and we'll get back to you within 24 hours.",
                    }),
                    l
                      ? m.jsxs("div", {
                          className: "text-center py-12",
                          children: [
                            m.jsx("div", {
                              className:
                                "w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6",
                              children: m.jsx(rp, {
                                className: "text-accent",
                                size: 28,
                              }),
                            }),
                            m.jsx("h4", {
                              className:
                                "text-xl font-semibold text-foreground mb-2",
                              children: "Thank You!",
                            }),
                            m.jsx("p", {
                              className: "text-muted-foreground mb-6",
                              children:
                                "Your inquiry has been submitted. Our team will contact you shortly.",
                            }),
                            m.jsx("button", {
                              onClick: () => c(!1),
                              className:
                                "text-accent font-medium hover:underline",
                              children: "Send Another Inquiry",
                            }),
                          ],
                        })
                      : m.jsxs("form", {
                          onSubmit: d,
                          className: "space-y-6",
                          children: [
                            m.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-6",
                              children: [
                                m.jsxs("div", {
                                  children: [
                                    m.jsx("label", {
                                      htmlFor: "name",
                                      className:
                                        "block text-sm font-medium text-foreground mb-2",
                                      children: "Full Name *",
                                    }),
                                    m.jsx("input", {
                                      type: "text",
                                      id: "name",
                                      name: "name",
                                      value: t.name,
                                      onChange: h,
                                      required: !0,
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors",
                                      placeholder: "Your full name",
                                    }),
                                  ],
                                }),
                                m.jsxs("div", {
                                  children: [
                                    m.jsx("label", {
                                      htmlFor: "email",
                                      className:
                                        "block text-sm font-medium text-foreground mb-2",
                                      children: "Email Address *",
                                    }),
                                    m.jsx("input", {
                                      type: "email",
                                      id: "email",
                                      name: "email",
                                      value: t.email,
                                      onChange: h,
                                      required: !0,
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors",
                                      placeholder: "your@email.com",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            m.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-6",
                              children: [
                                m.jsxs("div", {
                                  children: [
                                    m.jsx("label", {
                                      htmlFor: "phone",
                                      className:
                                        "block text-sm font-medium text-foreground mb-2",
                                      children: "Phone Number",
                                    }),
                                    m.jsx("input", {
                                      type: "tel",
                                      id: "phone",
                                      name: "phone",
                                      value: t.phone,
                                      onChange: h,
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors",
                                      placeholder: "+27 XX XXX XXXX",
                                    }),
                                  ],
                                }),
                                m.jsxs("div", {
                                  children: [
                                    m.jsx("label", {
                                      htmlFor: "company",
                                      className:
                                        "block text-sm font-medium text-foreground mb-2",
                                      children: "Company Name",
                                    }),
                                    m.jsx("input", {
                                      type: "text",
                                      id: "company",
                                      name: "company",
                                      value: t.company,
                                      onChange: h,
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors",
                                      placeholder: "Your company (optional)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            m.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-6",
                              children: [
                                m.jsxs("div", {
                                  children: [
                                    m.jsx("label", {
                                      htmlFor: "service",
                                      className:
                                        "block text-sm font-medium text-foreground mb-2",
                                      children: "Service Required *",
                                    }),
                                    m.jsxs("select", {
                                      id: "service",
                                      name: "service",
                                      value: t.service,
                                      onChange: h,
                                      required: !0,
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors",
                                      children: [
                                        m.jsx("option", {
                                          value: "",
                                          children: "Select a service",
                                        }),
                                        QE.map((p) =>
                                          m.jsx(
                                            "option",
                                            {
                                              value: p.value,
                                              children: p.label,
                                            },
                                            p.value,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                                m.jsxs("div", {
                                  children: [
                                    m.jsx("label", {
                                      htmlFor: "projectType",
                                      className:
                                        "block text-sm font-medium text-foreground mb-2",
                                      children: "Project Type",
                                    }),
                                    m.jsxs("select", {
                                      id: "projectType",
                                      name: "projectType",
                                      value: t.projectType,
                                      onChange: h,
                                      className:
                                        "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors",
                                      children: [
                                        m.jsx("option", {
                                          value: "",
                                          children: "Select type",
                                        }),
                                        m.jsx("option", {
                                          value: "commercial",
                                          children: "Commercial",
                                        }),
                                        m.jsx("option", {
                                          value: "industrial",
                                          children: "Industrial",
                                        }),
                                        m.jsx("option", {
                                          value: "residential",
                                          children: "Residential",
                                        }),
                                        m.jsx("option", {
                                          value: "government",
                                          children: "Government",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            m.jsxs("div", {
                              children: [
                                m.jsx("label", {
                                  htmlFor: "message",
                                  className:
                                    "block text-sm font-medium text-foreground mb-2",
                                  children: "Project Details *",
                                }),
                                m.jsx("textarea", {
                                  id: "message",
                                  name: "message",
                                  value: t.message,
                                  onChange: h,
                                  required: !0,
                                  rows: 5,
                                  className:
                                    "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none",
                                  placeholder:
                                    "Tell us about your project, requirements, timeline, and any other relevant details...",
                                }),
                              ],
                            }),
                            m.jsxs("button", {
                              type: "submit",
                              disabled: s,
                              className:
                                "w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                              children: [
                                s ? "Sending..." : "Send Inquiry",
                                m.jsx(rp, { size: 18 }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      m.jsx("section", {
        className: "py-24 bg-secondary",
        children: m.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            m.jsxs(I.div, {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              children: [
                m.jsx("h2", {
                  className:
                    "font-serif text-3xl font-bold text-foreground mb-4",
                  children: "Our Locations",
                }),
                m.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "Serving clients across Limpopo and Eastern Cape provinces",
                }),
              ],
            }),
            m.jsx(I.div, {
              className: "max-w-2xl mx-auto",
              variants: wu,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !0 },
              children: m.jsxs(I.div, {
                className:
                  "bg-white rounded-2xl p-8 lg:p-10 shadow-sm text-center",
                variants: _i,
                children: [
                  m.jsxs("div", {
                    className: "flex items-center justify-center gap-3 mb-6",
                    children: [
                      m.jsx("div", {
                        className:
                          "w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center",
                        children: m.jsx(Nu, {
                          className: "text-accent",
                          size: 24,
                        }),
                      }),
                      m.jsx("h3", {
                        className: "text-xl font-semibold text-foreground",
                        children: "Head Office - Polokwane",
                      }),
                    ],
                  }),
                  m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed mb-6",
                    children:
                      "Our main headquarters located in the heart of Limpopo Province, serving the northern regions of South Africa with professional building maintenance and construction services.",
                  }),
                  m.jsxs("div", {
                    className: "text-sm text-muted-foreground",
                    children: [
                      m.jsx("p", {
                        className: "font-medium text-foreground mb-1",
                        children: "Address",
                      }),
                      m.jsx("p", {
                        children: "Polokwane, Limpopo Province, South Africa",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function JE() {
  return m.jsx(Wm, {
    children: m.jsxs(d1, {
      children: [
        m.jsx(OE, {}),
        m.jsxs("div", {
          className: "min-h-screen bg-background flex flex-col",
          children: [
            m.jsx(IE, {}),
            m.jsx("main", {
              className: "flex-grow",
              children: m.jsxs(Bx, {
                children: [
                  m.jsx(Ar, { path: "/", element: m.jsx(zE, {}) }),
                  m.jsx(Ar, { path: "/about", element: m.jsx(WE, {}) }),
                  m.jsx(Ar, { path: "/services", element: m.jsx(KE, {}) }),
                  m.jsx(Ar, { path: "/works", element: m.jsx(YE, {}) }),
                  m.jsx(Ar, { path: "/contact", element: m.jsx(ZE, {}) }),
                ],
              }),
            }),
            m.jsx(_E, {}),
          ],
        }),
      ],
    }),
  });
}
$0.createRoot(document.getElementById("root")).render(
  m.jsx(T.StrictMode, { children: m.jsx(JE, {}) }),
);
