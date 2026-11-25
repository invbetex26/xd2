(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const l of a.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = t(o);
    fetch(o.href, a);
  }
})();
var K1 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Yu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gc = { exports: {} },
  ni = {},
  hc = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = Symbol.for("react.element"),
  Ku = Symbol.for("react.portal"),
  Ju = Symbol.for("react.fragment"),
  Xu = Symbol.for("react.strict_mode"),
  Zu = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  tf = Symbol.for("react.forward_ref"),
  rf = Symbol.for("react.suspense"),
  of = Symbol.for("react.memo"),
  af = Symbol.for("react.lazy"),
  Ul = Symbol.iterator;
function lf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ul && e[Ul]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xc = Object.assign,
  vc = {};
function $t(e, n, t) {
  ((this.props = e),
    (this.context = n),
    (this.refs = vc),
    (this.updater = t || yc));
}
$t.prototype.isReactComponent = {};
$t.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
$t.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kc() {}
kc.prototype = $t.prototype;
function Va(e, n, t) {
  ((this.props = e),
    (this.context = n),
    (this.refs = vc),
    (this.updater = t || yc));
}
var Ga = (Va.prototype = new kc());
Ga.constructor = Va;
xc(Ga, $t.prototype);
Ga.isPureReactComponent = !0;
var Vl = Array.isArray,
  Ec = Object.prototype.hasOwnProperty,
  Qa = { current: null },
  Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, n, t) {
  var r,
    o = {},
    a = null,
    l = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (l = n.ref),
    n.key !== void 0 && (a = "" + n.key),
    n))
      Ec.call(n, r) && !Sc.hasOwnProperty(r) && (o[r] = n[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = t;
  else if (1 < s) {
    for (var d = Array(s), c = 0; c < s; c++) d[c] = arguments[c + 2];
    o.children = d;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Nr,
    type: e,
    key: a,
    ref: l,
    props: o,
    _owner: Qa.current,
  };
}
function sf(e, n) {
  return {
    $$typeof: Nr,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function cf(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Gl = /\/+/g;
function Si(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? cf("" + e.key)
    : n.toString(36);
}
function co(e, n, t, r, o) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (a) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Nr:
          case Ku:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Si(l, 0) : r),
      Vl(o)
        ? ((t = ""),
          e != null && (t = e.replace(Gl, "$&/") + "/"),
          co(o, n, t, "", function (c) {
            return c;
          }))
        : o != null &&
          (qa(o) &&
            (o = sf(
              o,
              t +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Gl, "$&/") + "/") +
                e,
            )),
          n.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Vl(e)))
    for (var s = 0; s < e.length; s++) {
      a = e[s];
      var d = r + Si(a, s);
      l += co(a, n, t, d, o);
    }
  else if (((d = lf(e)), typeof d == "function"))
    for (e = d.call(e), s = 0; !(a = e.next()).done;)
      ((a = a.value), (d = r + Si(a, s++)), (l += co(a, n, t, d, o)));
  else if (a === "object")
    throw (
      (n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return l;
}
function Gr(e, n, t) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    co(e, r, "", "", function (a) {
      return n.call(t, a, o++);
    }),
    r
  );
}
function df(e) {
  if (e._status === -1) {
    var n = e._result;
    ((n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = n)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  uo = { transition: null },
  uf = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: uo,
    ReactCurrentOwner: Qa,
  };
function bc() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
  map: Gr,
  forEach: function (e, n, t) {
    Gr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t,
    );
  },
  count: function (e) {
    var n = 0;
    return (
      Gr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      Gr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!qa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
W.Component = $t;
W.Fragment = Ju;
W.Profiler = Zu;
W.PureComponent = Va;
W.StrictMode = Xu;
W.Suspense = rf;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uf;
W.act = bc;
W.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = xc({}, e.props),
    o = e.key,
    a = e.ref,
    l = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((a = n.ref), (l = Qa.current)),
      n.key !== void 0 && (o = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (d in n)
      Ec.call(n, d) &&
        !Sc.hasOwnProperty(d) &&
        (r[d] = n[d] === void 0 && s !== void 0 ? s[d] : n[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) r.children = t;
  else if (1 < d) {
    s = Array(d);
    for (var c = 0; c < d; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Nr, type: e.type, key: o, ref: a, props: r, _owner: l };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = jc;
W.createFactory = function (e) {
  var n = jc.bind(null, e);
  return ((n.type = e), n);
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: tf, render: e };
};
W.isValidElement = qa;
W.lazy = function (e) {
  return { $$typeof: af, _payload: { _status: -1, _result: e }, _init: df };
};
W.memo = function (e, n) {
  return { $$typeof: of, type: e, compare: n === void 0 ? null : n };
};
W.startTransition = function (e) {
  var n = uo.transition;
  uo.transition = {};
  try {
    e();
  } finally {
    uo.transition = n;
  }
};
W.unstable_act = bc;
W.useCallback = function (e, n) {
  return je.current.useCallback(e, n);
};
W.useContext = function (e) {
  return je.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
W.useEffect = function (e, n) {
  return je.current.useEffect(e, n);
};
W.useId = function () {
  return je.current.useId();
};
W.useImperativeHandle = function (e, n, t) {
  return je.current.useImperativeHandle(e, n, t);
};
W.useInsertionEffect = function (e, n) {
  return je.current.useInsertionEffect(e, n);
};
W.useLayoutEffect = function (e, n) {
  return je.current.useLayoutEffect(e, n);
};
W.useMemo = function (e, n) {
  return je.current.useMemo(e, n);
};
W.useReducer = function (e, n, t) {
  return je.current.useReducer(e, n, t);
};
W.useRef = function (e) {
  return je.current.useRef(e);
};
W.useState = function (e) {
  return je.current.useState(e);
};
W.useSyncExternalStore = function (e, n, t) {
  return je.current.useSyncExternalStore(e, n, t);
};
W.useTransition = function () {
  return je.current.useTransition();
};
W.version = "18.3.1";
hc.exports = W;
var F = hc.exports;
const ff = Yu(F);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = F,
  mf = Symbol.for("react.element"),
  gf = Symbol.for("react.fragment"),
  hf = Object.prototype.hasOwnProperty,
  yf = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fc(e, n, t) {
  var r,
    o = {},
    a = null,
    l = null;
  (t !== void 0 && (a = "" + t),
    n.key !== void 0 && (a = "" + n.key),
    n.ref !== void 0 && (l = n.ref));
  for (r in n) hf.call(n, r) && !xf.hasOwnProperty(r) && (o[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) o[r] === void 0 && (o[r] = n[r]);
  return {
    $$typeof: mf,
    type: e,
    key: a,
    ref: l,
    props: o,
    _owner: yf.current,
  };
}
ni.Fragment = gf;
ni.jsx = Fc;
ni.jsxs = Fc;
gc.exports = ni;
var i = gc.exports,
  Cc = { exports: {} },
  Le = {},
  wc = { exports: {} },
  Ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(B, N) {
    var k = B.length;
    B.push(N);
    e: for (; 0 < k;) {
      var L = (k - 1) >>> 1,
        U = B[L];
      if (0 < o(U, N)) ((B[L] = N), (B[k] = U), (k = L));
      else break e;
    }
  }
  function t(B) {
    return B.length === 0 ? null : B[0];
  }
  function r(B) {
    if (B.length === 0) return null;
    var N = B[0],
      k = B.pop();
    if (k !== N) {
      B[0] = k;
      e: for (var L = 0, U = B.length, We = U >>> 1; L < We;) {
        var Ce = 2 * (L + 1) - 1,
          on = B[Ce],
          w = Ce + 1,
          Q = B[w];
        if (0 > o(on, k))
          w < U && 0 > o(Q, on)
            ? ((B[L] = Q), (B[w] = k), (L = w))
            : ((B[L] = on), (B[Ce] = k), (L = Ce));
        else if (w < U && 0 > o(Q, k)) ((B[L] = Q), (B[w] = k), (L = w));
        else break e;
      }
    }
    return N;
  }
  function o(B, N) {
    var k = B.sortIndex - N.sortIndex;
    return k !== 0 ? k : B.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var d = [],
    c = [],
    m = 1,
    u = null,
    h = 3,
    g = !1,
    x = !1,
    E = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(B) {
    for (var N = t(c); N !== null;) {
      if (N.callback === null) r(c);
      else if (N.startTime <= B)
        (r(c), (N.sortIndex = N.expirationTime), n(d, N));
      else break;
      N = t(c);
    }
  }
  function v(B) {
    if (((E = !1), y(B), !x))
      if (t(d) !== null) ((x = !0), Fe(j));
      else {
        var N = t(c);
        N !== null && rn(v, N.startTime - B);
      }
  }
  function j(B, N) {
    ((x = !1), E && ((E = !1), p(A), (A = -1)), (g = !0));
    var k = h;
    try {
      for (
        y(N), u = t(d);
        u !== null && (!(u.expirationTime > N) || (B && !J()));
      ) {
        var L = u.callback;
        if (typeof L == "function") {
          ((u.callback = null), (h = u.priorityLevel));
          var U = L(u.expirationTime <= N);
          ((N = e.unstable_now()),
            typeof U == "function" ? (u.callback = U) : u === t(d) && r(d),
            y(N));
        } else r(d);
        u = t(d);
      }
      if (u !== null) var We = !0;
      else {
        var Ce = t(c);
        (Ce !== null && rn(v, Ce.startTime - N), (We = !1));
      }
      return We;
    } finally {
      ((u = null), (h = k), (g = !1));
    }
  }
  var C = !1,
    I = null,
    A = -1,
    O = 5,
    T = -1;
  function J() {
    return !(e.unstable_now() - T < O);
  }
  function Re() {
    if (I !== null) {
      var B = e.unstable_now();
      T = B;
      var N = !0;
      try {
        N = I(!0, B);
      } finally {
        N ? Oe() : ((C = !1), (I = null));
      }
    } else C = !1;
  }
  var Oe;
  if (typeof f == "function")
    Oe = function () {
      f(Re);
    };
  else if (typeof MessageChannel < "u") {
    var qe = new MessageChannel(),
      bn = qe.port2;
    ((qe.port1.onmessage = Re),
      (Oe = function () {
        bn.postMessage(null);
      }));
  } else
    Oe = function () {
      b(Re, 0);
    };
  function Fe(B) {
    ((I = B), C || ((C = !0), Oe()));
  }
  function rn(B, N) {
    A = b(function () {
      B(e.unstable_now());
    }, N);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (B) {
      B.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), Fe(j));
    }),
    (e.unstable_forceFrameRate = function (B) {
      0 > B || 125 < B
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < B ? Math.floor(1e3 / B) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(d);
    }),
    (e.unstable_next = function (B) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var k = h;
      h = N;
      try {
        return B();
      } finally {
        h = k;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (B, N) {
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
      var k = h;
      h = B;
      try {
        return N();
      } finally {
        h = k;
      }
    }),
    (e.unstable_scheduleCallback = function (B, N, k) {
      var L = e.unstable_now();
      switch (
        (typeof k == "object" && k !== null
          ? ((k = k.delay), (k = typeof k == "number" && 0 < k ? L + k : L))
          : (k = L),
        B)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = k + U),
        (B = {
          id: m++,
          callback: N,
          priorityLevel: B,
          startTime: k,
          expirationTime: U,
          sortIndex: -1,
        }),
        k > L
          ? ((B.sortIndex = k),
            n(c, B),
            t(d) === null &&
              B === t(c) &&
              (E ? (p(A), (A = -1)) : (E = !0), rn(v, k - L)))
          : ((B.sortIndex = U), n(d, B), x || g || ((x = !0), Fe(j))),
        B
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (B) {
      var N = h;
      return function () {
        var k = h;
        h = N;
        try {
          return B.apply(this, arguments);
        } finally {
          h = k;
        }
      };
    }));
})(Ic);
wc.exports = Ic;
var vf = wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kf = F,
  Ne = vf;
function S(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var zc = new Set(),
  gr = {};
function lt(e, n) {
  (Mt(e, n), Mt(e + "Capture", n));
}
function Mt(e, n) {
  for (gr[e] = n, e = 0; e < n.length; e++) zc.add(n[e]);
}
var yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ji = Object.prototype.hasOwnProperty,
  Ef =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ql = {},
  ql = {};
function Sf(e) {
  return Ji.call(ql, e)
    ? !0
    : Ji.call(Ql, e)
      ? !1
      : Ef.test(e)
        ? (ql[e] = !0)
        : ((Ql[e] = !0), !1);
}
function jf(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bf(e, n, t, r) {
  if (n === null || typeof n > "u" || jf(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
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
function be(e, n, t, r, o, a, l) {
  ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = a),
    (this.removeEmptyString = l));
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ge[n] = new be(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ya = /[\-:]([a-z])/g;
function Ka(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Ya, Ka);
    ge[n] = new be(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Ya, Ka);
    ge[n] = new be(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Ya, Ka);
  ge[n] = new be(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ja(e, n, t, r) {
  var o = ge.hasOwnProperty(n) ? ge[n] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (bf(n, t, o, r) && (t = null),
    r || o === null
      ? Sf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : o.mustUseProperty
        ? (e[o.propertyName] = t === null ? (o.type === 3 ? !1 : "") : t)
        : ((n = o.attributeName),
          (r = o.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((o = o.type),
              (t = o === 3 || (o === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Sn = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qr = Symbol.for("react.element"),
  ft = Symbol.for("react.portal"),
  pt = Symbol.for("react.fragment"),
  Xa = Symbol.for("react.strict_mode"),
  Xi = Symbol.for("react.profiler"),
  Ac = Symbol.for("react.provider"),
  Bc = Symbol.for("react.context"),
  Za = Symbol.for("react.forward_ref"),
  Zi = Symbol.for("react.suspense"),
  ea = Symbol.for("react.suspense_list"),
  el = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  Dc = Symbol.for("react.offscreen"),
  Yl = Symbol.iterator;
function Qt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yl && e[Yl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  ji;
function tr(e) {
  if (ji === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      ji = (n && n[1]) || "";
    }
  return (
    `
` +
    ji +
    e
  );
}
var bi = !1;
function Fi(e, n) {
  if (!e || bi) return "";
  bi = !0;
  var t = Error.prepareStackTrace;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          a = r.stack.split(`
`),
          l = o.length - 1,
          s = a.length - 1;
        1 <= l && 0 <= s && o[l] !== a[s];
      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== a[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== a[s])) {
                var d =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    d.includes("<anonymous>") &&
                    (d = d.replace("<anonymous>", e.displayName)),
                  d
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    ((bi = !1), (Error.prepareStackTrace = t));
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function Ff(e) {
  switch (e.tag) {
    case 5:
      return tr(e.type);
    case 16:
      return tr("Lazy");
    case 13:
      return tr("Suspense");
    case 19:
      return tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Fi(e.type, !1)), e);
    case 11:
      return ((e = Fi(e.type.render, !1)), e);
    case 1:
      return ((e = Fi(e.type, !0)), e);
    default:
      return "";
  }
}
function na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pt:
      return "Fragment";
    case ft:
      return "Portal";
    case Xi:
      return "Profiler";
    case Xa:
      return "StrictMode";
    case Zi:
      return "Suspense";
    case ea:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bc:
        return (e.displayName || "Context") + ".Consumer";
      case Ac:
        return (e._context.displayName || "Context") + ".Provider";
      case Za:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case el:
        return (
          (n = e.displayName || null),
          n !== null ? n : na(e.type) || "Memo"
        );
      case Cn:
        ((n = e._payload), (e = e._init));
        try {
          return na(e(n));
        } catch {}
    }
  return null;
}
function Cf(e) {
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
      return na(n);
    case 8:
      return n === Xa ? "StrictMode" : "Mode";
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
function $n(e) {
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
function Rc(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function wf(e) {
  var n = Rc(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var o = t.get,
      a = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          ((r = "" + l), a.call(this, l));
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[n]);
        },
      }
    );
  }
}
function qr(e) {
  e._valueTracker || (e._valueTracker = wf(e));
}
function Mc(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = Rc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Co(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ta(e, n) {
  var t = n.checked;
  return re({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Kl(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  ((t = $n(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    }));
}
function Tc(e, n) {
  ((n = n.checked), n != null && Ja(e, "checked", n, !1));
}
function ra(e, n) {
  Tc(e, n);
  var t = $n(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (n.hasOwnProperty("value")
    ? oa(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && oa(e, n.type, $n(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked));
}
function Jl(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(
      (r !== "submit" && r !== "reset") ||
      (n.value !== void 0 && n.value !== null)
    ))
      return;
    ((n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n));
  }
  ((t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t));
}
function oa(e, n, t) {
  (n !== "number" || Co(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var rr = Array.isArray;
function Ct(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var o = 0; o < t.length; o++) n["$" + t[o]] = !0;
    for (t = 0; t < e.length; t++)
      ((o = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== o && (e[t].selected = o),
        o && r && (e[t].defaultSelected = !0));
  } else {
    for (t = "" + $n(t), n = null, o = 0; o < e.length; o++) {
      if (e[o].value === t) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      n !== null || e[o].disabled || (n = e[o]);
    }
    n !== null && (n.selected = !0);
  }
}
function ia(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(S(91));
  return re({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xl(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(S(92));
      if (rr(t)) {
        if (1 < t.length) throw Error(S(93));
        t = t[0];
      }
      n = t;
    }
    (n == null && (n = ""), (t = n));
  }
  e._wrapperState = { initialValue: $n(t) };
}
function Pc(e, n) {
  var t = $n(n.value),
    r = $n(n.defaultValue);
  (t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r));
}
function Zl(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function aa(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Nc(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Yr,
  Lc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, o);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        Yr = Yr || document.createElement("div"),
          Yr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = Yr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; n.firstChild;) e.appendChild(n.firstChild);
    }
  });
function hr(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var ar = {
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
  If = ["Webkit", "ms", "Moz", "O"];
Object.keys(ar).forEach(function (e) {
  If.forEach(function (n) {
    ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (ar[n] = ar[e]));
  });
});
function _c(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (ar.hasOwnProperty(e) && ar[e])
      ? ("" + n).trim()
      : n + "px";
}
function Oc(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        o = _c(t, n[t], r);
      (t === "float" && (t = "cssFloat"), r ? e.setProperty(t, o) : (e[t] = o));
    }
}
var zf = re(
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
function la(e, n) {
  if (n) {
    if (zf[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(S(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(S(62));
  }
}
function sa(e, n) {
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
var ca = null;
function nl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var da = null,
  wt = null,
  It = null;
function es(e) {
  if ((e = Or(e))) {
    if (typeof da != "function") throw Error(S(280));
    var n = e.stateNode;
    n && ((n = ai(n)), da(e.stateNode, e.type, n));
  }
}
function Wc(e) {
  wt ? (It ? It.push(e) : (It = [e])) : (wt = e);
}
function $c() {
  if (wt) {
    var e = wt,
      n = It;
    if (((It = wt = null), es(e), n)) for (e = 0; e < n.length; e++) es(n[e]);
  }
}
function Hc(e, n) {
  return e(n);
}
function Uc() {}
var Ci = !1;
function Vc(e, n, t) {
  if (Ci) return e(n, t);
  Ci = !0;
  try {
    return Hc(e, n, t);
  } finally {
    ((Ci = !1), (wt !== null || It !== null) && (Uc(), $c()));
  }
}
function yr(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = ai(t);
  if (r === null) return null;
  t = r[n];
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(S(231, n, typeof t));
  return t;
}
var ua = !1;
if (yn)
  try {
    var qt = {};
    (Object.defineProperty(qt, "passive", {
      get: function () {
        ua = !0;
      },
    }),
      window.addEventListener("test", qt, qt),
      window.removeEventListener("test", qt, qt));
  } catch {
    ua = !1;
  }
function Af(e, n, t, r, o, a, l, s, d) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var lr = !1,
  wo = null,
  Io = !1,
  fa = null,
  Bf = {
    onError: function (e) {
      ((lr = !0), (wo = e));
    },
  };
function Df(e, n, t, r, o, a, l, s, d) {
  ((lr = !1), (wo = null), Af.apply(Bf, arguments));
}
function Rf(e, n, t, r, o, a, l, s, d) {
  if ((Df.apply(this, arguments), lr)) {
    if (lr) {
      var c = wo;
      ((lr = !1), (wo = null));
    } else throw Error(S(198));
    Io || ((Io = !0), (fa = c));
  }
}
function st(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return;) n = n.return;
  else {
    e = n;
    do ((n = e), n.flags & 4098 && (t = n.return), (e = n.return));
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Gc(e) {
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
function ns(e) {
  if (st(e) !== e) throw Error(S(188));
}
function Mf(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = st(e)), n === null)) throw Error(S(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ;) {
    var o = t.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (((r = o.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a;) {
        if (a === t) return (ns(o), e);
        if (a === r) return (ns(o), n);
        a = a.sibling;
      }
      throw Error(S(188));
    }
    if (t.return !== r.return) ((t = o), (r = a));
    else {
      for (var l = !1, s = o.child; s;) {
        if (s === t) {
          ((l = !0), (t = o), (r = a));
          break;
        }
        if (s === r) {
          ((l = !0), (r = o), (t = a));
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = a.child; s;) {
          if (s === t) {
            ((l = !0), (t = a), (r = o));
            break;
          }
          if (s === r) {
            ((l = !0), (r = a), (t = o));
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (t.alternate !== r) throw Error(S(190));
  }
  if (t.tag !== 3) throw Error(S(188));
  return t.stateNode.current === t ? e : n;
}
function Qc(e) {
  return ((e = Mf(e)), e !== null ? qc(e) : null);
}
function qc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var n = qc(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Yc = Ne.unstable_scheduleCallback,
  ts = Ne.unstable_cancelCallback,
  Tf = Ne.unstable_shouldYield,
  Pf = Ne.unstable_requestPaint,
  ie = Ne.unstable_now,
  Nf = Ne.unstable_getCurrentPriorityLevel,
  tl = Ne.unstable_ImmediatePriority,
  Kc = Ne.unstable_UserBlockingPriority,
  zo = Ne.unstable_NormalPriority,
  Lf = Ne.unstable_LowPriority,
  Jc = Ne.unstable_IdlePriority,
  ti = null,
  cn = null;
function _f(e) {
  if (cn && typeof cn.onCommitFiberRoot == "function")
    try {
      cn.onCommitFiberRoot(ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var en = Math.clz32 ? Math.clz32 : $f,
  Of = Math.log,
  Wf = Math.LN2;
function $f(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Of(e) / Wf) | 0)) | 0);
}
var Kr = 64,
  Jr = 4194304;
function or(e) {
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
function Ao(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    a = e.pingedLanes,
    l = t & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = or(s)) : ((a &= l), a !== 0 && (r = or(a)));
  } else ((l = t & ~o), l !== 0 ? (r = or(l)) : a !== 0 && (r = or(a)));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & o) &&
    ((o = r & -r), (a = n & -n), o >= a || (o === 16 && (a & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n;)
      ((t = 31 - en(n)), (o = 1 << t), (r |= e[t]), (n &= ~o));
  return r;
}
function Hf(e, n) {
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
function Uf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var l = 31 - en(a),
      s = 1 << l,
      d = o[l];
    (d === -1
      ? (!(s & t) || s & r) && (o[l] = Hf(s, n))
      : d <= n && (e.expiredLanes |= s),
      (a &= ~s));
  }
}
function pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xc() {
  var e = Kr;
  return ((Kr <<= 1), !(Kr & 4194240) && (Kr = 64), e);
}
function wi(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Lr(e, n, t) {
  ((e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - en(n)),
    (e[n] = t));
}
function Vf(e, n) {
  var t = e.pendingLanes & ~n;
  ((e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t;) {
    var o = 31 - en(t),
      a = 1 << o;
    ((n[o] = 0), (r[o] = -1), (e[o] = -1), (t &= ~a));
  }
}
function rl(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t;) {
    var r = 31 - en(t),
      o = 1 << r;
    ((o & n) | (e[r] & n) && (e[r] |= n), (t &= ~o));
  }
}
var G = 0;
function Zc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ed,
  ol,
  nd,
  td,
  rd,
  ma = !1,
  Xr = [],
  Mn = null,
  Tn = null,
  Pn = null,
  xr = new Map(),
  vr = new Map(),
  In = [],
  Gf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function rs(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mn = null;
      break;
    case "dragenter":
    case "dragleave":
      Tn = null;
      break;
    case "mouseover":
    case "mouseout":
      Pn = null;
      break;
    case "pointerover":
    case "pointerout":
      xr.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(n.pointerId);
  }
}
function Yt(e, n, t, r, o, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o],
      }),
      n !== null && ((n = Or(n)), n !== null && ol(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      o !== null && n.indexOf(o) === -1 && n.push(o),
      e);
}
function Qf(e, n, t, r, o) {
  switch (n) {
    case "focusin":
      return ((Mn = Yt(Mn, e, n, t, r, o)), !0);
    case "dragenter":
      return ((Tn = Yt(Tn, e, n, t, r, o)), !0);
    case "mouseover":
      return ((Pn = Yt(Pn, e, n, t, r, o)), !0);
    case "pointerover":
      var a = o.pointerId;
      return (xr.set(a, Yt(xr.get(a) || null, e, n, t, r, o)), !0);
    case "gotpointercapture":
      return (
        (a = o.pointerId),
        vr.set(a, Yt(vr.get(a) || null, e, n, t, r, o)),
        !0
      );
  }
  return !1;
}
function od(e) {
  var n = Kn(e.target);
  if (n !== null) {
    var t = st(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Gc(t)), n !== null)) {
          ((e.blockedOn = n),
            rd(e.priority, function () {
              nd(t);
            }));
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fo(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length;) {
    var t = ga(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      ((ca = r), t.target.dispatchEvent(r), (ca = null));
    } else return ((n = Or(t)), n !== null && ol(n), (e.blockedOn = t), !1);
    n.shift();
  }
  return !0;
}
function os(e, n, t) {
  fo(e) && t.delete(n);
}
function qf() {
  ((ma = !1),
    Mn !== null && fo(Mn) && (Mn = null),
    Tn !== null && fo(Tn) && (Tn = null),
    Pn !== null && fo(Pn) && (Pn = null),
    xr.forEach(os),
    vr.forEach(os));
}
function Kt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    ma ||
      ((ma = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, qf)));
}
function kr(e) {
  function n(o) {
    return Kt(o, e);
  }
  if (0 < Xr.length) {
    Kt(Xr[0], e);
    for (var t = 1; t < Xr.length; t++) {
      var r = Xr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mn !== null && Kt(Mn, e),
      Tn !== null && Kt(Tn, e),
      Pn !== null && Kt(Pn, e),
      xr.forEach(n),
      vr.forEach(n),
      t = 0;
    t < In.length;
    t++
  )
    ((r = In[t]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < In.length && ((t = In[0]), t.blockedOn === null);)
    (od(t), t.blockedOn === null && In.shift());
}
var zt = Sn.ReactCurrentBatchConfig,
  Bo = !0;
function Yf(e, n, t, r) {
  var o = G,
    a = zt.transition;
  zt.transition = null;
  try {
    ((G = 1), il(e, n, t, r));
  } finally {
    ((G = o), (zt.transition = a));
  }
}
function Kf(e, n, t, r) {
  var o = G,
    a = zt.transition;
  zt.transition = null;
  try {
    ((G = 4), il(e, n, t, r));
  } finally {
    ((G = o), (zt.transition = a));
  }
}
function il(e, n, t, r) {
  if (Bo) {
    var o = ga(e, n, t, r);
    if (o === null) (Ni(e, n, r, Do, t), rs(e, r));
    else if (Qf(o, e, n, t, r)) r.stopPropagation();
    else if ((rs(e, r), n & 4 && -1 < Gf.indexOf(e))) {
      for (; o !== null;) {
        var a = Or(o);
        if (
          (a !== null && ed(a),
          (a = ga(e, n, t, r)),
          a === null && Ni(e, n, r, Do, t),
          a === o)
        )
          break;
        o = a;
      }
      o !== null && r.stopPropagation();
    } else Ni(e, n, r, null, t);
  }
}
var Do = null;
function ga(e, n, t, r) {
  if (((Do = null), (e = nl(r)), (e = Kn(e)), e !== null))
    if (((n = st(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Gc(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return ((Do = e), null);
}
function id(e) {
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
      switch (Nf()) {
        case tl:
          return 1;
        case Kc:
          return 4;
        case zo:
        case Lf:
          return 16;
        case Jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var An = null,
  al = null,
  po = null;
function ad() {
  if (po) return po;
  var e,
    n = al,
    t = n.length,
    r,
    o = "value" in An ? An.value : An.textContent,
    a = o.length;
  for (e = 0; e < t && n[e] === o[e]; e++);
  var l = t - e;
  for (r = 1; r <= l && n[t - r] === o[a - r]; r++);
  return (po = o.slice(e, 1 < r ? 1 - r : void 0));
}
function mo(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Zr() {
  return !0;
}
function is() {
  return !1;
}
function _e(e) {
  function n(t, r, o, a, l) {
    ((this._reactName = t),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null));
    for (var s in e)
      e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(a) : a[s]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Zr
        : is),
      (this.isPropagationStopped = is),
      this
    );
  }
  return (
    re(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = Zr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = Zr));
      },
      persist: function () {},
      isPersistent: Zr,
    }),
    n
  );
}
var Ht = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ll = _e(Ht),
  _r = re({}, Ht, { view: 0, detail: 0 }),
  Jf = _e(_r),
  Ii,
  zi,
  Jt,
  ri = re({}, _r, {
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
    getModifierState: sl,
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
        : (e !== Jt &&
            (Jt && e.type === "mousemove"
              ? ((Ii = e.screenX - Jt.screenX), (zi = e.screenY - Jt.screenY))
              : (zi = Ii = 0),
            (Jt = e)),
          Ii);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zi;
    },
  }),
  as = _e(ri),
  Xf = re({}, ri, { dataTransfer: 0 }),
  Zf = _e(Xf),
  ep = re({}, _r, { relatedTarget: 0 }),
  Ai = _e(ep),
  np = re({}, Ht, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tp = _e(np),
  rp = re({}, Ht, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  op = _e(rp),
  ip = re({}, Ht, { data: 0 }),
  ls = _e(ip),
  ap = {
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
  lp = {
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
  sp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cp(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = sp[e]) ? !!n[e] : !1;
}
function sl() {
  return cp;
}
var dp = re({}, _r, {
    key: function (e) {
      if (e.key) {
        var n = ap[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = mo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? lp[e.keyCode] || "Unidentified"
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
    getModifierState: sl,
    charCode: function (e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  up = _e(dp),
  fp = re({}, ri, {
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
  ss = _e(fp),
  pp = re({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sl,
  }),
  mp = _e(pp),
  gp = re({}, Ht, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = _e(gp),
  yp = re({}, ri, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  xp = _e(yp),
  vp = [9, 13, 27, 32],
  cl = yn && "CompositionEvent" in window,
  sr = null;
yn && "documentMode" in document && (sr = document.documentMode);
var kp = yn && "TextEvent" in window && !sr,
  ld = yn && (!cl || (sr && 8 < sr && 11 >= sr)),
  cs = " ",
  ds = !1;
function sd(e, n) {
  switch (e) {
    case "keyup":
      return vp.indexOf(n.keyCode) !== -1;
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
function cd(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var mt = !1;
function Ep(e, n) {
  switch (e) {
    case "compositionend":
      return cd(n);
    case "keypress":
      return n.which !== 32 ? null : ((ds = !0), cs);
    case "textInput":
      return ((e = n.data), e === cs && ds ? null : e);
    default:
      return null;
  }
}
function Sp(e, n) {
  if (mt)
    return e === "compositionend" || (!cl && sd(e, n))
      ? ((e = ad()), (po = al = An = null), (mt = !1), e)
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
      return ld && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var jp = {
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
function us(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!jp[e.type] : n === "textarea";
}
function dd(e, n, t, r) {
  (Wc(r),
    (n = Ro(n, "onChange")),
    0 < n.length &&
      ((t = new ll("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n })));
}
var cr = null,
  Er = null;
function bp(e) {
  Ed(e, 0);
}
function oi(e) {
  var n = yt(e);
  if (Mc(n)) return e;
}
function Fp(e, n) {
  if (e === "change") return n;
}
var ud = !1;
if (yn) {
  var Bi;
  if (yn) {
    var Di = "oninput" in document;
    if (!Di) {
      var fs = document.createElement("div");
      (fs.setAttribute("oninput", "return;"),
        (Di = typeof fs.oninput == "function"));
    }
    Bi = Di;
  } else Bi = !1;
  ud = Bi && (!document.documentMode || 9 < document.documentMode);
}
function ps() {
  cr && (cr.detachEvent("onpropertychange", fd), (Er = cr = null));
}
function fd(e) {
  if (e.propertyName === "value" && oi(Er)) {
    var n = [];
    (dd(n, Er, e, nl(e)), Vc(bp, n));
  }
}
function Cp(e, n, t) {
  e === "focusin"
    ? (ps(), (cr = n), (Er = t), cr.attachEvent("onpropertychange", fd))
    : e === "focusout" && ps();
}
function wp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oi(Er);
}
function Ip(e, n) {
  if (e === "click") return oi(n);
}
function zp(e, n) {
  if (e === "input" || e === "change") return oi(n);
}
function Ap(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var tn = typeof Object.is == "function" ? Object.is : Ap;
function Sr(e, n) {
  if (tn(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var o = t[r];
    if (!Ji.call(n, o) || !tn(e[o], n[o])) return !1;
  }
  return !0;
}
function ms(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function gs(e, n) {
  var t = ms(e);
  e = 0;
  for (var r; t;) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t;) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ms(t);
  }
}
function pd(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
          ? pd(e, n.parentNode)
          : "contains" in e
            ? e.contains(n)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(n) & 16)
              : !1
    : !1;
}
function md() {
  for (var e = window, n = Co(); n instanceof e.HTMLIFrameElement;) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Co(e.document);
  }
  return n;
}
function dl(e) {
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
function Bp(e) {
  var n = md(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    pd(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && dl(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        ((t.selectionStart = n),
          (t.selectionEnd = Math.min(e, t.value.length)));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = t.textContent.length,
          a = Math.min(r.start, o);
        ((r = r.end === void 0 ? a : Math.min(r.end, o)),
          !e.extend && a > r && ((o = r), (r = a), (a = o)),
          (o = gs(t, a)));
        var l = gs(t, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((n = n.createRange()),
          n.setStart(o.node, o.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(n), e.extend(l.node, l.offset))
            : (n.setEnd(l.node, l.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode);)
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      ((e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Dp = yn && "documentMode" in document && 11 >= document.documentMode,
  gt = null,
  ha = null,
  dr = null,
  ya = !1;
function hs(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  ya ||
    gt == null ||
    gt !== Co(r) ||
    ((r = gt),
    "selectionStart" in r && dl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dr && Sr(dr, r)) ||
      ((dr = r),
      (r = Ro(ha, "onSelect")),
      0 < r.length &&
        ((n = new ll("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = gt))));
}
function eo(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var ht = {
    animationend: eo("Animation", "AnimationEnd"),
    animationiteration: eo("Animation", "AnimationIteration"),
    animationstart: eo("Animation", "AnimationStart"),
    transitionend: eo("Transition", "TransitionEnd"),
  },
  Ri = {},
  gd = {};
yn &&
  ((gd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ht.animationend.animation,
    delete ht.animationiteration.animation,
    delete ht.animationstart.animation),
  "TransitionEvent" in window || delete ht.transitionend.transition);
function ii(e) {
  if (Ri[e]) return Ri[e];
  if (!ht[e]) return e;
  var n = ht[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in gd) return (Ri[e] = n[t]);
  return e;
}
var hd = ii("animationend"),
  yd = ii("animationiteration"),
  xd = ii("animationstart"),
  vd = ii("transitionend"),
  kd = new Map(),
  ys =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Un(e, n) {
  (kd.set(e, n), lt(n, [e]));
}
for (var Mi = 0; Mi < ys.length; Mi++) {
  var Ti = ys[Mi],
    Rp = Ti.toLowerCase(),
    Mp = Ti[0].toUpperCase() + Ti.slice(1);
  Un(Rp, "on" + Mp);
}
Un(hd, "onAnimationEnd");
Un(yd, "onAnimationIteration");
Un(xd, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(vd, "onTransitionEnd");
Mt("onMouseEnter", ["mouseout", "mouseover"]);
Mt("onMouseLeave", ["mouseout", "mouseover"]);
Mt("onPointerEnter", ["pointerout", "pointerover"]);
Mt("onPointerLeave", ["pointerout", "pointerover"]);
lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Tp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
function xs(e, n, t) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = t), Rf(r, n, void 0, e), (e.currentTarget = null));
}
function Ed(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      o = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (n)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            d = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), d !== a && o.isPropagationStopped())) break e;
          (xs(o, s, c), (a = d));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (d = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            d !== a && o.isPropagationStopped())
          )
            break e;
          (xs(o, s, c), (a = d));
        }
    }
  }
  if (Io) throw ((e = fa), (Io = !1), (fa = null), e);
}
function Y(e, n) {
  var t = n[Sa];
  t === void 0 && (t = n[Sa] = new Set());
  var r = e + "__bubble";
  t.has(r) || (Sd(n, e, 2, !1), t.add(r));
}
function Pi(e, n, t) {
  var r = 0;
  (n && (r |= 4), Sd(t, e, r, n));
}
var no = "_reactListening" + Math.random().toString(36).slice(2);
function jr(e) {
  if (!e[no]) {
    ((e[no] = !0),
      zc.forEach(function (t) {
        t !== "selectionchange" && (Tp.has(t) || Pi(t, !1, e), Pi(t, !0, e));
      }));
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[no] || ((n[no] = !0), Pi("selectionchange", !1, n));
  }
}
function Sd(e, n, t, r) {
  switch (id(n)) {
    case 1:
      var o = Yf;
      break;
    case 4:
      o = Kf;
      break;
    default:
      o = il;
  }
  ((t = o.bind(null, n, t, e)),
    (o = void 0),
    !ua ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: o })
        : e.addEventListener(n, t, !0)
      : o !== void 0
        ? e.addEventListener(n, t, { passive: o })
        : e.addEventListener(n, t, !1));
}
function Ni(e, n, t, r, o) {
  var a = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null;) {
            var d = l.tag;
            if (
              (d === 3 || d === 4) &&
              ((d = l.stateNode.containerInfo),
              d === o || (d.nodeType === 8 && d.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null;) {
          if (((l = Kn(s)), l === null)) return;
          if (((d = l.tag), d === 5 || d === 6)) {
            r = a = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Vc(function () {
    var c = a,
      m = nl(t),
      u = [];
    e: {
      var h = kd.get(e);
      if (h !== void 0) {
        var g = ll,
          x = e;
        switch (e) {
          case "keypress":
            if (mo(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = up;
            break;
          case "focusin":
            ((x = "focus"), (g = Ai));
            break;
          case "focusout":
            ((x = "blur"), (g = Ai));
            break;
          case "beforeblur":
          case "afterblur":
            g = Ai;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = as;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Zf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = mp;
            break;
          case hd:
          case yd:
          case xd:
            g = tp;
            break;
          case vd:
            g = hp;
            break;
          case "scroll":
            g = Jf;
            break;
          case "wheel":
            g = xp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ss;
        }
        var E = (n & 4) !== 0,
          b = !E && e === "scroll",
          p = E ? (h !== null ? h + "Capture" : null) : h;
        E = [];
        for (var f = c, y; f !== null;) {
          y = f;
          var v = y.stateNode;
          if (
            (y.tag === 5 &&
              v !== null &&
              ((y = v),
              p !== null && ((v = yr(f, p)), v != null && E.push(br(f, v, y)))),
            b)
          )
            break;
          f = f.return;
        }
        0 < E.length &&
          ((h = new g(h, x, null, t, m)), u.push({ event: h, listeners: E }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            t !== ca &&
            (x = t.relatedTarget || t.fromElement) &&
            (Kn(x) || x[xn]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          g
            ? ((x = t.relatedTarget || t.toElement),
              (g = c),
              (x = x ? Kn(x) : null),
              x !== null &&
                ((b = st(x)), x !== b || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = c)),
          g !== x)
        ) {
          if (
            ((E = as),
            (v = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = ss),
              (v = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (b = g == null ? h : yt(g)),
            (y = x == null ? h : yt(x)),
            (h = new E(v, f + "leave", g, t, m)),
            (h.target = b),
            (h.relatedTarget = y),
            (v = null),
            Kn(m) === c &&
              ((E = new E(p, f + "enter", x, t, m)),
              (E.target = y),
              (E.relatedTarget = b),
              (v = E)),
            (b = v),
            g && x)
          )
            n: {
              for (E = g, p = x, f = 0, y = E; y; y = dt(y)) f++;
              for (y = 0, v = p; v; v = dt(v)) y++;
              for (; 0 < f - y;) ((E = dt(E)), f--);
              for (; 0 < y - f;) ((p = dt(p)), y--);
              for (; f--;) {
                if (E === p || (p !== null && E === p.alternate)) break n;
                ((E = dt(E)), (p = dt(p)));
              }
              E = null;
            }
          else E = null;
          (g !== null && vs(u, h, g, E, !1),
            x !== null && b !== null && vs(u, b, x, E, !0));
        }
      }
      e: {
        if (
          ((h = c ? yt(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var j = Fp;
        else if (us(h))
          if (ud) j = zp;
          else {
            j = wp;
            var C = Cp;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = Ip);
        if (j && (j = j(e, c))) {
          dd(u, j, t, m);
          break e;
        }
        (C && C(e, h, c),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            oa(h, "number", h.value));
      }
      switch (((C = c ? yt(c) : window), e)) {
        case "focusin":
          (us(C) || C.contentEditable === "true") &&
            ((gt = C), (ha = c), (dr = null));
          break;
        case "focusout":
          dr = ha = gt = null;
          break;
        case "mousedown":
          ya = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ya = !1), hs(u, t, m));
          break;
        case "selectionchange":
          if (Dp) break;
        case "keydown":
        case "keyup":
          hs(u, t, m);
      }
      var I;
      if (cl)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        mt
          ? sd(e, t) && (A = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (A = "onCompositionStart");
      (A &&
        (ld &&
          t.locale !== "ko" &&
          (mt || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && mt && (I = ad())
            : ((An = m),
              (al = "value" in An ? An.value : An.textContent),
              (mt = !0))),
        (C = Ro(c, A)),
        0 < C.length &&
          ((A = new ls(A, e, null, t, m)),
          u.push({ event: A, listeners: C }),
          I ? (A.data = I) : ((I = cd(t)), I !== null && (A.data = I)))),
        (I = kp ? Ep(e, t) : Sp(e, t)) &&
          ((c = Ro(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new ls("onBeforeInput", "beforeinput", null, t, m)),
            u.push({ event: m, listeners: c }),
            (m.data = I))));
    }
    Ed(u, n);
  });
}
function br(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ro(e, n) {
  for (var t = n + "Capture", r = []; e !== null;) {
    var o = e,
      a = o.stateNode;
    (o.tag === 5 &&
      a !== null &&
      ((o = a),
      (a = yr(e, t)),
      a != null && r.unshift(br(e, a, o)),
      (a = yr(e, n)),
      a != null && r.push(br(e, a, o))),
      (e = e.return));
  }
  return r;
}
function dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vs(e, n, t, r, o) {
  for (var a = n._reactName, l = []; t !== null && t !== r;) {
    var s = t,
      d = s.alternate,
      c = s.stateNode;
    if (d !== null && d === r) break;
    (s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((d = yr(t, a)), d != null && l.unshift(br(t, d, s)))
        : o || ((d = yr(t, a)), d != null && l.push(br(t, d, s)))),
      (t = t.return));
  }
  l.length !== 0 && e.push({ event: n, listeners: l });
}
var Pp = /\r\n?/g,
  Np = /\u0000|\uFFFD/g;
function ks(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Pp,
      `
`,
    )
    .replace(Np, "");
}
function to(e, n, t) {
  if (((n = ks(n)), ks(e) !== n && t)) throw Error(S(425));
}
function Mo() {}
var xa = null,
  va = null;
function ka(e, n) {
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
var Ea = typeof setTimeout == "function" ? setTimeout : void 0,
  Lp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Es = typeof Promise == "function" ? Promise : void 0,
  _p =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Es < "u"
        ? function (e) {
            return Es.resolve(null).then(e).catch(Op);
          }
        : Ea;
function Op(e) {
  setTimeout(function () {
    throw e;
  });
}
function Li(e, n) {
  var t = n,
    r = 0;
  do {
    var o = t.nextSibling;
    if ((e.removeChild(t), o && o.nodeType === 8))
      if (((t = o.data), t === "/$")) {
        if (r === 0) {
          (e.removeChild(o), kr(n));
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = o;
  } while (t);
  kr(n);
}
function Nn(e) {
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
function Ss(e) {
  e = e.previousSibling;
  for (var n = 0; e;) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ut = Math.random().toString(36).slice(2),
  sn = "__reactFiber$" + Ut,
  Fr = "__reactProps$" + Ut,
  xn = "__reactContainer$" + Ut,
  Sa = "__reactEvents$" + Ut,
  Wp = "__reactListeners$" + Ut,
  $p = "__reactHandles$" + Ut;
function Kn(e) {
  var n = e[sn];
  if (n) return n;
  for (var t = e.parentNode; t;) {
    if ((n = t[xn] || t[sn])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = Ss(e); e !== null;) {
          if ((t = e[sn])) return t;
          e = Ss(e);
        }
      return n;
    }
    ((e = t), (t = e.parentNode));
  }
  return null;
}
function Or(e) {
  return (
    (e = e[sn] || e[xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function ai(e) {
  return e[Fr] || null;
}
var ja = [],
  xt = -1;
function Vn(e) {
  return { current: e };
}
function K(e) {
  0 > xt || ((e.current = ja[xt]), (ja[xt] = null), xt--);
}
function q(e, n) {
  (xt++, (ja[xt] = e.current), (e.current = n));
}
var Hn = {},
  ve = Vn(Hn),
  Ae = Vn(!1),
  tt = Hn;
function Tt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    a;
  for (a in t) o[a] = n[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Be(e) {
  return ((e = e.childContextTypes), e != null);
}
function To() {
  (K(Ae), K(ve));
}
function js(e, n, t) {
  if (ve.current !== Hn) throw Error(S(168));
  (q(ve, n), q(Ae, t));
}
function jd(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var o in r) if (!(o in n)) throw Error(S(108, Cf(e) || "Unknown", o));
  return re({}, t, r);
}
function Po(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hn),
    (tt = ve.current),
    q(ve, e),
    q(Ae, Ae.current),
    !0
  );
}
function bs(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (t
    ? ((e = jd(e, n, tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ae),
      K(ve),
      q(ve, e))
    : K(Ae),
    q(Ae, t));
}
var fn = null,
  li = !1,
  _i = !1;
function bd(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function Hp(e) {
  ((li = !0), bd(e));
}
function Gn() {
  if (!_i && fn !== null) {
    _i = !0;
    var e = 0,
      n = G;
    try {
      var t = fn;
      for (G = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      ((fn = null), (li = !1));
    } catch (o) {
      throw (fn !== null && (fn = fn.slice(e + 1)), Yc(tl, Gn), o);
    } finally {
      ((G = n), (_i = !1));
    }
  }
  return null;
}
var vt = [],
  kt = 0,
  No = null,
  Lo = 0,
  $e = [],
  He = 0,
  rt = null,
  mn = 1,
  gn = "";
function qn(e, n) {
  ((vt[kt++] = Lo), (vt[kt++] = No), (No = e), (Lo = n));
}
function Fd(e, n, t) {
  (($e[He++] = mn), ($e[He++] = gn), ($e[He++] = rt), (rt = e));
  var r = mn;
  e = gn;
  var o = 32 - en(r) - 1;
  ((r &= ~(1 << o)), (t += 1));
  var a = 32 - en(n) + o;
  if (30 < a) {
    var l = o - (o % 5);
    ((a = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (mn = (1 << (32 - en(n) + o)) | (t << o) | r),
      (gn = a + e));
  } else ((mn = (1 << a) | (t << o) | r), (gn = e));
}
function ul(e) {
  e.return !== null && (qn(e, 1), Fd(e, 1, 0));
}
function fl(e) {
  for (; e === No;)
    ((No = vt[--kt]), (vt[kt] = null), (Lo = vt[--kt]), (vt[kt] = null));
  for (; e === rt;)
    ((rt = $e[--He]),
      ($e[He] = null),
      (gn = $e[--He]),
      ($e[He] = null),
      (mn = $e[--He]),
      ($e[He] = null));
}
var Pe = null,
  Te = null,
  Z = !1,
  Ze = null;
function Cd(e, n) {
  var t = Ue(5, null, null, 0);
  ((t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t));
}
function Fs(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (Pe = e), (Te = Nn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (Pe = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = rt !== null ? { id: mn, overflow: gn } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ue(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (Pe = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ba(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fa(e) {
  if (Z) {
    var n = Te;
    if (n) {
      var t = n;
      if (!Fs(e, n)) {
        if (ba(e)) throw Error(S(418));
        n = Nn(t.nextSibling);
        var r = Pe;
        n && Fs(e, n)
          ? Cd(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Pe = e));
      }
    } else {
      if (ba(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Pe = e));
    }
  }
}
function Cs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Pe = e;
}
function ro(e) {
  if (e !== Pe) return !1;
  if (!Z) return (Cs(e), (Z = !0), !1);
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !ka(e.type, e.memoizedProps))),
    n && (n = Te))
  ) {
    if (ba(e)) throw (wd(), Error(S(418)));
    for (; n;) (Cd(e, n), (n = Nn(n.nextSibling)));
  }
  if ((Cs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, n = 0; e;) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Te = Nn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = Pe ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function wd() {
  for (var e = Te; e;) e = Nn(e.nextSibling);
}
function Pt() {
  ((Te = Pe = null), (Z = !1));
}
function pl(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var Up = Sn.ReactCurrentBatchConfig;
function Xt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(S(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r,
        a = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === a
        ? n.ref
        : ((n = function (l) {
            var s = o.refs;
            l === null ? delete s[a] : (s[a] = l);
          }),
          (n._stringRef = a),
          n);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!t._owner) throw Error(S(290, e));
  }
  return e;
}
function oo(e, n) {
  throw (
    (e = Object.prototype.toString.call(n)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ws(e) {
  var n = e._init;
  return n(e._payload);
}
function Id(e) {
  function n(p, f) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [f]), (p.flags |= 16)) : y.push(f);
    }
  }
  function t(p, f) {
    if (!e) return null;
    for (; f !== null;) (n(p, f), (f = f.sibling));
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null;)
      (f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling));
    return p;
  }
  function o(p, f) {
    return ((p = Wn(p, f)), (p.index = 0), (p.sibling = null), p);
  }
  function a(p, f, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < f ? ((p.flags |= 2), f) : y)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function l(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function s(p, f, y, v) {
    return f === null || f.tag !== 6
      ? ((f = Gi(y, p.mode, v)), (f.return = p), f)
      : ((f = o(f, y)), (f.return = p), f);
  }
  function d(p, f, y, v) {
    var j = y.type;
    return j === pt
      ? m(p, f, y.props.children, v, y.key)
      : f !== null &&
          (f.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Cn &&
              ws(j) === f.type))
        ? ((v = o(f, y.props)), (v.ref = Xt(p, f, y)), (v.return = p), v)
        : ((v = Eo(y.type, y.key, y.props, null, p.mode, v)),
          (v.ref = Xt(p, f, y)),
          (v.return = p),
          v);
  }
  function c(p, f, y, v) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== y.containerInfo ||
      f.stateNode.implementation !== y.implementation
      ? ((f = Qi(y, p.mode, v)), (f.return = p), f)
      : ((f = o(f, y.children || [])), (f.return = p), f);
  }
  function m(p, f, y, v, j) {
    return f === null || f.tag !== 7
      ? ((f = et(y, p.mode, v, j)), (f.return = p), f)
      : ((f = o(f, y)), (f.return = p), f);
  }
  function u(p, f, y) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = Gi("" + f, p.mode, y)), (f.return = p), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Qr:
          return (
            (y = Eo(f.type, f.key, f.props, null, p.mode, y)),
            (y.ref = Xt(p, null, f)),
            (y.return = p),
            y
          );
        case ft:
          return ((f = Qi(f, p.mode, y)), (f.return = p), f);
        case Cn:
          var v = f._init;
          return u(p, v(f._payload), y);
      }
      if (rr(f) || Qt(f))
        return ((f = et(f, p.mode, y, null)), (f.return = p), f);
      oo(p, f);
    }
    return null;
  }
  function h(p, f, y, v) {
    var j = f !== null ? f.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return j !== null ? null : s(p, f, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Qr:
          return y.key === j ? d(p, f, y, v) : null;
        case ft:
          return y.key === j ? c(p, f, y, v) : null;
        case Cn:
          return ((j = y._init), h(p, f, j(y._payload), v));
      }
      if (rr(y) || Qt(y)) return j !== null ? null : m(p, f, y, v, null);
      oo(p, y);
    }
    return null;
  }
  function g(p, f, y, v, j) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((p = p.get(y) || null), s(f, p, "" + v, j));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Qr:
          return (
            (p = p.get(v.key === null ? y : v.key) || null),
            d(f, p, v, j)
          );
        case ft:
          return (
            (p = p.get(v.key === null ? y : v.key) || null),
            c(f, p, v, j)
          );
        case Cn:
          var C = v._init;
          return g(p, f, y, C(v._payload), j);
      }
      if (rr(v) || Qt(v)) return ((p = p.get(y) || null), m(f, p, v, j, null));
      oo(f, v);
    }
    return null;
  }
  function x(p, f, y, v) {
    for (
      var j = null, C = null, I = f, A = (f = 0), O = null;
      I !== null && A < y.length;
      A++
    ) {
      I.index > A ? ((O = I), (I = null)) : (O = I.sibling);
      var T = h(p, I, y[A], v);
      if (T === null) {
        I === null && (I = O);
        break;
      }
      (e && I && T.alternate === null && n(p, I),
        (f = a(T, f, A)),
        C === null ? (j = T) : (C.sibling = T),
        (C = T),
        (I = O));
    }
    if (A === y.length) return (t(p, I), Z && qn(p, A), j);
    if (I === null) {
      for (; A < y.length; A++)
        ((I = u(p, y[A], v)),
          I !== null &&
            ((f = a(I, f, A)),
            C === null ? (j = I) : (C.sibling = I),
            (C = I)));
      return (Z && qn(p, A), j);
    }
    for (I = r(p, I); A < y.length; A++)
      ((O = g(I, p, A, y[A], v)),
        O !== null &&
          (e && O.alternate !== null && I.delete(O.key === null ? A : O.key),
          (f = a(O, f, A)),
          C === null ? (j = O) : (C.sibling = O),
          (C = O)));
    return (
      e &&
        I.forEach(function (J) {
          return n(p, J);
        }),
      Z && qn(p, A),
      j
    );
  }
  function E(p, f, y, v) {
    var j = Qt(y);
    if (typeof j != "function") throw Error(S(150));
    if (((y = j.call(y)), y == null)) throw Error(S(151));
    for (
      var C = (j = null), I = f, A = (f = 0), O = null, T = y.next();
      I !== null && !T.done;
      A++, T = y.next()
    ) {
      I.index > A ? ((O = I), (I = null)) : (O = I.sibling);
      var J = h(p, I, T.value, v);
      if (J === null) {
        I === null && (I = O);
        break;
      }
      (e && I && J.alternate === null && n(p, I),
        (f = a(J, f, A)),
        C === null ? (j = J) : (C.sibling = J),
        (C = J),
        (I = O));
    }
    if (T.done) return (t(p, I), Z && qn(p, A), j);
    if (I === null) {
      for (; !T.done; A++, T = y.next())
        ((T = u(p, T.value, v)),
          T !== null &&
            ((f = a(T, f, A)),
            C === null ? (j = T) : (C.sibling = T),
            (C = T)));
      return (Z && qn(p, A), j);
    }
    for (I = r(p, I); !T.done; A++, T = y.next())
      ((T = g(I, p, A, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && I.delete(T.key === null ? A : T.key),
          (f = a(T, f, A)),
          C === null ? (j = T) : (C.sibling = T),
          (C = T)));
    return (
      e &&
        I.forEach(function (Re) {
          return n(p, Re);
        }),
      Z && qn(p, A),
      j
    );
  }
  function b(p, f, y, v) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === pt &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Qr:
          e: {
            for (var j = y.key, C = f; C !== null;) {
              if (C.key === j) {
                if (((j = y.type), j === pt)) {
                  if (C.tag === 7) {
                    (t(p, C.sibling),
                      (f = o(C, y.props.children)),
                      (f.return = p),
                      (p = f));
                    break e;
                  }
                } else if (
                  C.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Cn &&
                    ws(j) === C.type)
                ) {
                  (t(p, C.sibling),
                    (f = o(C, y.props)),
                    (f.ref = Xt(p, C, y)),
                    (f.return = p),
                    (p = f));
                  break e;
                }
                t(p, C);
                break;
              } else n(p, C);
              C = C.sibling;
            }
            y.type === pt
              ? ((f = et(y.props.children, p.mode, v, y.key)),
                (f.return = p),
                (p = f))
              : ((v = Eo(y.type, y.key, y.props, null, p.mode, v)),
                (v.ref = Xt(p, f, y)),
                (v.return = p),
                (p = v));
          }
          return l(p);
        case ft:
          e: {
            for (C = y.key; f !== null;) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === y.containerInfo &&
                  f.stateNode.implementation === y.implementation
                ) {
                  (t(p, f.sibling),
                    (f = o(f, y.children || [])),
                    (f.return = p),
                    (p = f));
                  break e;
                } else {
                  t(p, f);
                  break;
                }
              else n(p, f);
              f = f.sibling;
            }
            ((f = Qi(y, p.mode, v)), (f.return = p), (p = f));
          }
          return l(p);
        case Cn:
          return ((C = y._init), b(p, f, C(y._payload), v));
      }
      if (rr(y)) return x(p, f, y, v);
      if (Qt(y)) return E(p, f, y, v);
      oo(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        f !== null && f.tag === 6
          ? (t(p, f.sibling), (f = o(f, y)), (f.return = p), (p = f))
          : (t(p, f), (f = Gi(y, p.mode, v)), (f.return = p), (p = f)),
        l(p))
      : t(p, f);
  }
  return b;
}
var Nt = Id(!0),
  zd = Id(!1),
  _o = Vn(null),
  Oo = null,
  Et = null,
  ml = null;
function gl() {
  ml = Et = Oo = null;
}
function hl(e) {
  var n = _o.current;
  (K(_o), (e._currentValue = n));
}
function Ca(e, n, t) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function At(e, n) {
  ((Oo = e),
    (ml = Et = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ze = !0), (e.firstContext = null)));
}
function Ge(e) {
  var n = e._currentValue;
  if (ml !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Et === null)) {
      if (Oo === null) throw Error(S(308));
      ((Et = e), (Oo.dependencies = { lanes: 0, firstContext: e }));
    } else Et = Et.next = e;
  return n;
}
var Jn = null;
function yl(e) {
  Jn === null ? (Jn = [e]) : Jn.push(e);
}
function Ad(e, n, t, r) {
  var o = n.interleaved;
  return (
    o === null ? ((t.next = t), yl(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    vn(e, r)
  );
}
function vn(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)
    ((e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return));
  return t.tag === 3 ? t.stateNode : null;
}
var wn = !1;
function xl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bd(e, n) {
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
function hn(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ln(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var o = r.pending;
    return (
      o === null ? (n.next = n) : ((n.next = o.next), (o.next = n)),
      (r.pending = n),
      vn(e, t)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((n.next = n), yl(r)) : ((n.next = o.next), (o.next = n)),
    (r.interleaved = n),
    vn(e, t)
  );
}
function go(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    ((r &= e.pendingLanes), (t |= r), (n.lanes = t), rl(e, t));
  }
}
function Is(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var o = null,
      a = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var l = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        (a === null ? (o = a = l) : (a = a.next = l), (t = t.next));
      } while (t !== null);
      a === null ? (o = a = n) : (a = a.next = n);
    } else o = a = n;
    ((t = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t));
    return;
  }
  ((e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n));
}
function Wo(e, n, t, r) {
  var o = e.updateQueue;
  wn = !1;
  var a = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var d = s,
      c = d.next;
    ((d.next = null), l === null ? (a = c) : (l.next = c), (l = d));
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== l &&
        (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
        (m.lastBaseUpdate = d)));
  }
  if (a !== null) {
    var u = o.baseState;
    ((l = 0), (m = c = d = null), (s = a));
    do {
      var h = s.lane,
        g = s.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            E = s;
          switch (((h = n), (g = t), E.tag)) {
            case 1:
              if (((x = E.payload), typeof x == "function")) {
                u = x.call(g, u, h);
                break e;
              }
              u = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = E.payload),
                (h = typeof x == "function" ? x.call(g, u, h) : x),
                h == null)
              )
                break e;
              u = re({}, u, h);
              break e;
            case 2:
              wn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [s]) : h.push(s));
      } else
        ((g = {
          eventTime: g,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (d = u)) : (m = m.next = g),
          (l |= h));
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        ((h = s),
          (s = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (m === null && (d = u),
      (o.baseState = d),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = m),
      (n = o.shared.interleaved),
      n !== null)
    ) {
      o = n;
      do ((l |= o.lane), (o = o.next));
      while (o !== n);
    } else a === null && (o.shared.lanes = 0);
    ((it |= l), (e.lanes = l), (e.memoizedState = u));
  }
}
function zs(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = t), typeof o != "function"))
          throw Error(S(191, o));
        o.call(r);
      }
    }
}
var Wr = {},
  dn = Vn(Wr),
  Cr = Vn(Wr),
  wr = Vn(Wr);
function Xn(e) {
  if (e === Wr) throw Error(S(174));
  return e;
}
function vl(e, n) {
  switch ((q(wr, n), q(Cr, e), q(dn, Wr), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : aa(null, "");
      break;
    default:
      ((e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = aa(n, e)));
  }
  (K(dn), q(dn, n));
}
function Lt() {
  (K(dn), K(Cr), K(wr));
}
function Dd(e) {
  Xn(wr.current);
  var n = Xn(dn.current),
    t = aa(n, e.type);
  n !== t && (q(Cr, e), q(dn, t));
}
function kl(e) {
  Cr.current === e && (K(dn), K(Cr));
}
var ne = Vn(0);
function $o(e) {
  for (var n = e; n !== null;) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
  return null;
}
var Oi = [];
function El() {
  for (var e = 0; e < Oi.length; e++)
    Oi[e]._workInProgressVersionPrimary = null;
  Oi.length = 0;
}
var ho = Sn.ReactCurrentDispatcher,
  Wi = Sn.ReactCurrentBatchConfig,
  ot = 0,
  te = null,
  le = null,
  ce = null,
  Ho = !1,
  ur = !1,
  Ir = 0,
  Vp = 0;
function he() {
  throw Error(S(321));
}
function Sl(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!tn(e[t], n[t])) return !1;
  return !0;
}
function jl(e, n, t, r, o, a) {
  if (
    ((ot = a),
    (te = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (ho.current = e === null || e.memoizedState === null ? Yp : Kp),
    (e = t(r, o)),
    ur)
  ) {
    a = 0;
    do {
      if (((ur = !1), (Ir = 0), 25 <= a)) throw Error(S(301));
      ((a += 1),
        (ce = le = null),
        (n.updateQueue = null),
        (ho.current = Jp),
        (e = t(r, o)));
    } while (ur);
  }
  if (
    ((ho.current = Uo),
    (n = le !== null && le.next !== null),
    (ot = 0),
    (ce = le = te = null),
    (Ho = !1),
    n)
  )
    throw Error(S(300));
  return e;
}
function bl() {
  var e = Ir !== 0;
  return ((Ir = 0), e);
}
function ln() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ce === null ? (te.memoizedState = ce = e) : (ce = ce.next = e), ce);
}
function Qe() {
  if (le === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var n = ce === null ? te.memoizedState : ce.next;
  if (n !== null) ((ce = n), (le = e));
  else {
    if (e === null) throw Error(S(310));
    ((le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ce === null ? (te.memoizedState = ce = e) : (ce = ce.next = e));
  }
  return ce;
}
function zr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function $i(e) {
  var n = Qe(),
    t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = le,
    o = r.baseQueue,
    a = t.pending;
  if (a !== null) {
    if (o !== null) {
      var l = o.next;
      ((o.next = a.next), (a.next = l));
    }
    ((r.baseQueue = o = a), (t.pending = null));
  }
  if (o !== null) {
    ((a = o.next), (r = r.baseState));
    var s = (l = null),
      d = null,
      c = a;
    do {
      var m = c.lane;
      if ((ot & m) === m)
        (d !== null &&
          (d = d.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var u = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (d === null ? ((s = d = u), (l = r)) : (d = d.next = u),
          (te.lanes |= m),
          (it |= m));
      }
      c = c.next;
    } while (c !== null && c !== a);
    (d === null ? (l = r) : (d.next = s),
      tn(r, n.memoizedState) || (ze = !0),
      (n.memoizedState = r),
      (n.baseState = l),
      (n.baseQueue = d),
      (t.lastRenderedState = r));
  }
  if (((e = t.interleaved), e !== null)) {
    o = e;
    do ((a = o.lane), (te.lanes |= a), (it |= a), (o = o.next));
    while (o !== e);
  } else o === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hi(e) {
  var n = Qe(),
    t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    o = t.pending,
    a = n.memoizedState;
  if (o !== null) {
    t.pending = null;
    var l = (o = o.next);
    do ((a = e(a, l.action)), (l = l.next));
    while (l !== o);
    (tn(a, n.memoizedState) || (ze = !0),
      (n.memoizedState = a),
      n.baseQueue === null && (n.baseState = a),
      (t.lastRenderedState = a));
  }
  return [a, r];
}
function Rd() {}
function Md(e, n) {
  var t = te,
    r = Qe(),
    o = n(),
    a = !tn(r.memoizedState, o);
  if (
    (a && ((r.memoizedState = o), (ze = !0)),
    (r = r.queue),
    Fl(Nd.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || a || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Ar(9, Pd.bind(null, t, r, o, n), void 0, null),
      de === null)
    )
      throw Error(S(349));
    ot & 30 || Td(t, n, o);
  }
  return o;
}
function Td(e, n, t) {
  ((e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = te.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (te.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e)));
}
function Pd(e, n, t, r) {
  ((n.value = t), (n.getSnapshot = r), Ld(n) && _d(e));
}
function Nd(e, n, t) {
  return t(function () {
    Ld(n) && _d(e);
  });
}
function Ld(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !tn(e, t);
  } catch {
    return !0;
  }
}
function _d(e) {
  var n = vn(e, 1);
  n !== null && nn(n, e, 1, -1);
}
function As(e) {
  var n = ln();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zr,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = qp.bind(null, te, e)),
    [n.memoizedState, e]
  );
}
function Ar(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = te.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (te.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Od() {
  return Qe().memoizedState;
}
function yo(e, n, t, r) {
  var o = ln();
  ((te.flags |= e),
    (o.memoizedState = Ar(1 | n, t, void 0, r === void 0 ? null : r)));
}
function si(e, n, t, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (le !== null) {
    var l = le.memoizedState;
    if (((a = l.destroy), r !== null && Sl(r, l.deps))) {
      o.memoizedState = Ar(n, t, a, r);
      return;
    }
  }
  ((te.flags |= e), (o.memoizedState = Ar(1 | n, t, a, r)));
}
function Bs(e, n) {
  return yo(8390656, 8, e, n);
}
function Fl(e, n) {
  return si(2048, 8, e, n);
}
function Wd(e, n) {
  return si(4, 2, e, n);
}
function $d(e, n) {
  return si(4, 4, e, n);
}
function Hd(e, n) {
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
function Ud(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null),
    si(4, 4, Hd.bind(null, n, e), t)
  );
}
function Cl() {}
function Vd(e, n) {
  var t = Qe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Sl(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Gd(e, n) {
  var t = Qe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Sl(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Qd(e, n, t) {
  return ot & 21
    ? (tn(t, n) || ((t = Xc()), (te.lanes |= t), (it |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = t));
}
function Gp(e, n) {
  var t = G;
  ((G = t !== 0 && 4 > t ? t : 4), e(!0));
  var r = Wi.transition;
  Wi.transition = {};
  try {
    (e(!1), n());
  } finally {
    ((G = t), (Wi.transition = r));
  }
}
function qd() {
  return Qe().memoizedState;
}
function Qp(e, n, t) {
  var r = On(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yd(e))
  )
    Kd(n, t);
  else if (((t = Ad(e, n, t, r)), t !== null)) {
    var o = Se();
    (nn(t, e, r, o), Jd(t, n, r));
  }
}
function qp(e, n, t) {
  var r = On(e),
    o = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Yd(e)) Kd(n, o);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = n.lastRenderedReducer), a !== null)
    )
      try {
        var l = n.lastRenderedState,
          s = a(l, t);
        if (((o.hasEagerState = !0), (o.eagerState = s), tn(s, l))) {
          var d = n.interleaved;
          (d === null
            ? ((o.next = o), yl(n))
            : ((o.next = d.next), (d.next = o)),
            (n.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((t = Ad(e, n, o, r)),
      t !== null && ((o = Se()), nn(t, e, r, o), Jd(t, n, r)));
  }
}
function Yd(e) {
  var n = e.alternate;
  return e === te || (n !== null && n === te);
}
function Kd(e, n) {
  ur = Ho = !0;
  var t = e.pending;
  (t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n));
}
function Jd(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    ((r &= e.pendingLanes), (t |= r), (n.lanes = t), rl(e, t));
  }
}
var Uo = {
    readContext: Ge,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: Ge,
    useCallback: function (e, n) {
      return ((ln().memoizedState = [e, n === void 0 ? null : n]), e);
    },
    useContext: Ge,
    useEffect: Bs,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        yo(4194308, 4, Hd.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return yo(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return yo(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = ln();
      return (
        (n = n === void 0 ? null : n),
        (e = e()),
        (t.memoizedState = [e, n]),
        e
      );
    },
    useReducer: function (e, n, t) {
      var r = ln();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = Qp.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = ln();
      return ((e = { current: e }), (n.memoizedState = e));
    },
    useState: As,
    useDebugValue: Cl,
    useDeferredValue: function (e) {
      return (ln().memoizedState = e);
    },
    useTransition: function () {
      var e = As(!1),
        n = e[0];
      return ((e = Gp.bind(null, e[1])), (ln().memoizedState = e), [n, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = te,
        o = ln();
      if (Z) {
        if (t === void 0) throw Error(S(407));
        t = t();
      } else {
        if (((t = n()), de === null)) throw Error(S(349));
        ot & 30 || Td(r, n, t);
      }
      o.memoizedState = t;
      var a = { value: t, getSnapshot: n };
      return (
        (o.queue = a),
        Bs(Nd.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Ar(9, Pd.bind(null, r, a, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = ln(),
        n = de.identifierPrefix;
      if (Z) {
        var t = gn,
          r = mn;
        ((t = (r & ~(1 << (32 - en(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Ir++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":"));
      } else ((t = Vp++), (n = ":" + n + "r" + t.toString(32) + ":"));
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: Ge,
    useCallback: Vd,
    useContext: Ge,
    useEffect: Fl,
    useImperativeHandle: Ud,
    useInsertionEffect: Wd,
    useLayoutEffect: $d,
    useMemo: Gd,
    useReducer: $i,
    useRef: Od,
    useState: function () {
      return $i(zr);
    },
    useDebugValue: Cl,
    useDeferredValue: function (e) {
      var n = Qe();
      return Qd(n, le.memoizedState, e);
    },
    useTransition: function () {
      var e = $i(zr)[0],
        n = Qe().memoizedState;
      return [e, n];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Md,
    useId: qd,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: Ge,
    useCallback: Vd,
    useContext: Ge,
    useEffect: Fl,
    useImperativeHandle: Ud,
    useInsertionEffect: Wd,
    useLayoutEffect: $d,
    useMemo: Gd,
    useReducer: Hi,
    useRef: Od,
    useState: function () {
      return Hi(zr);
    },
    useDebugValue: Cl,
    useDeferredValue: function (e) {
      var n = Qe();
      return le === null ? (n.memoizedState = e) : Qd(n, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Hi(zr)[0],
        n = Qe().memoizedState;
      return [e, n];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Md,
    useId: qd,
    unstable_isNewReconciler: !1,
  };
function Je(e, n) {
  if (e && e.defaultProps) {
    ((n = re({}, n)), (e = e.defaultProps));
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function wa(e, n, t, r) {
  ((n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : re({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t));
}
var ci = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? st(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = Se(),
      o = On(e),
      a = hn(r, o);
    ((a.payload = n),
      t != null && (a.callback = t),
      (n = Ln(e, a, o)),
      n !== null && (nn(n, e, o, r), go(n, e, o)));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = Se(),
      o = On(e),
      a = hn(r, o);
    ((a.tag = 1),
      (a.payload = n),
      t != null && (a.callback = t),
      (n = Ln(e, a, o)),
      n !== null && (nn(n, e, o, r), go(n, e, o)));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = Se(),
      r = On(e),
      o = hn(t, r);
    ((o.tag = 2),
      n != null && (o.callback = n),
      (n = Ln(e, o, r)),
      n !== null && (nn(n, e, r, t), go(n, e, r)));
  },
};
function Ds(e, n, t, r, o, a, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, l)
      : n.prototype && n.prototype.isPureReactComponent
        ? !Sr(t, r) || !Sr(o, a)
        : !0
  );
}
function Xd(e, n, t) {
  var r = !1,
    o = Hn,
    a = n.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Ge(a))
      : ((o = Be(n) ? tt : ve.current),
        (r = n.contextTypes),
        (a = (r = r != null) ? Tt(e, o) : Hn)),
    (n = new n(t, a)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ci),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    n
  );
}
function Rs(e, n, t, r) {
  ((e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && ci.enqueueReplaceState(n, n.state, null));
}
function Ia(e, n, t, r) {
  var o = e.stateNode;
  ((o.props = t), (o.state = e.memoizedState), (o.refs = {}), xl(e));
  var a = n.contextType;
  (typeof a == "object" && a !== null
    ? (o.context = Ge(a))
    : ((a = Be(n) ? tt : ve.current), (o.context = Tt(e, a))),
    (o.state = e.memoizedState),
    (a = n.getDerivedStateFromProps),
    typeof a == "function" && (wa(e, n, a, t), (o.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((n = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      n !== o.state && ci.enqueueReplaceState(o, o.state, null),
      Wo(e, t, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function _t(e, n) {
  try {
    var t = "",
      r = n;
    do ((t += Ff(r)), (r = r.return));
    while (r);
    var o = t;
  } catch (a) {
    o =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: n, stack: o, digest: null };
}
function Ui(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function za(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Xp = typeof WeakMap == "function" ? WeakMap : Map;
function Zd(e, n, t) {
  ((t = hn(-1, t)), (t.tag = 3), (t.payload = { element: null }));
  var r = n.value;
  return (
    (t.callback = function () {
      (Go || ((Go = !0), (_a = r)), za(e, n));
    }),
    t
  );
}
function eu(e, n, t) {
  ((t = hn(-1, t)), (t.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = n.value;
    ((t.payload = function () {
      return r(o);
    }),
      (t.callback = function () {
        za(e, n);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (t.callback = function () {
        (za(e, n),
          typeof r != "function" &&
            (_n === null ? (_n = new Set([this])) : _n.add(this)));
        var l = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    t
  );
}
function Ms(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xp();
    var o = new Set();
    r.set(n, o);
  } else ((o = r.get(n)), o === void 0 && ((o = new Set()), r.set(n, o)));
  o.has(t) || (o.add(t), (e = fm.bind(null, e, n, t)), n.then(e, e));
}
function Ts(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ps(e, n, t, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = hn(-1, 1)), (n.tag = 2), Ln(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var Zp = Sn.ReactCurrentOwner,
  ze = !1;
function Ee(e, n, t, r) {
  n.child = e === null ? zd(n, null, t, r) : Nt(n, e.child, t, r);
}
function Ns(e, n, t, r, o) {
  t = t.render;
  var a = n.ref;
  return (
    At(n, o),
    (r = jl(e, n, t, r, a, o)),
    (t = bl()),
    e !== null && !ze
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~o),
        kn(e, n, o))
      : (Z && t && ul(n), (n.flags |= 1), Ee(e, n, r, o), n.child)
  );
}
function Ls(e, n, t, r, o) {
  if (e === null) {
    var a = t.type;
    return typeof a == "function" &&
      !Ml(a) &&
      a.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = a), nu(e, n, a, r, o))
      : ((e = Eo(t.type, null, r, n, n.mode, o)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((a = e.child), !(e.lanes & o))) {
    var l = a.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Sr), t(l, r) && e.ref === n.ref)
    )
      return kn(e, n, o);
  }
  return (
    (n.flags |= 1),
    (e = Wn(a, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function nu(e, n, t, r, o) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Sr(a, r) && e.ref === n.ref)
      if (((ze = !1), (n.pendingProps = r = a), (e.lanes & o) !== 0))
        e.flags & 131072 && (ze = !0);
      else return ((n.lanes = e.lanes), kn(e, n, o));
  }
  return Aa(e, n, t, r, o);
}
function tu(e, n, t) {
  var r = n.pendingProps,
    o = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(jt, Me),
        (Me |= t));
    else {
      if (!(t & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          q(jt, Me),
          (Me |= e),
          null
        );
      ((n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : t),
        q(jt, Me),
        (Me |= r));
    }
  else
    (a !== null ? ((r = a.baseLanes | t), (n.memoizedState = null)) : (r = t),
      q(jt, Me),
      (Me |= r));
  return (Ee(e, n, o, t), n.child);
}
function ru(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Aa(e, n, t, r, o) {
  var a = Be(t) ? tt : ve.current;
  return (
    (a = Tt(n, a)),
    At(n, o),
    (t = jl(e, n, t, r, a, o)),
    (r = bl()),
    e !== null && !ze
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~o),
        kn(e, n, o))
      : (Z && r && ul(n), (n.flags |= 1), Ee(e, n, t, o), n.child)
  );
}
function _s(e, n, t, r, o) {
  if (Be(t)) {
    var a = !0;
    Po(n);
  } else a = !1;
  if ((At(n, o), n.stateNode === null))
    (xo(e, n), Xd(n, t, r), Ia(n, t, r, o), (r = !0));
  else if (e === null) {
    var l = n.stateNode,
      s = n.memoizedProps;
    l.props = s;
    var d = l.context,
      c = t.contextType;
    typeof c == "object" && c !== null
      ? (c = Ge(c))
      : ((c = Be(t) ? tt : ve.current), (c = Tt(n, c)));
    var m = t.getDerivedStateFromProps,
      u =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (u ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || d !== c) && Rs(n, l, r, c)),
      (wn = !1));
    var h = n.memoizedState;
    ((l.state = h),
      Wo(n, r, l, o),
      (d = n.memoizedState),
      s !== r || h !== d || Ae.current || wn
        ? (typeof m == "function" && (wa(n, t, m, r), (d = n.memoizedState)),
          (s = wn || Ds(n, t, s, r, h, d, c))
            ? (u ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = d)),
          (l.props = r),
          (l.state = d),
          (l.context = c),
          (r = s))
        : (typeof l.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = n.stateNode),
      Bd(e, n),
      (s = n.memoizedProps),
      (c = n.type === n.elementType ? s : Je(n.type, s)),
      (l.props = c),
      (u = n.pendingProps),
      (h = l.context),
      (d = t.contextType),
      typeof d == "object" && d !== null
        ? (d = Ge(d))
        : ((d = Be(t) ? tt : ve.current), (d = Tt(n, d))));
    var g = t.getDerivedStateFromProps;
    ((m =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== u || h !== d) && Rs(n, l, r, d)),
      (wn = !1),
      (h = n.memoizedState),
      (l.state = h),
      Wo(n, r, l, o));
    var x = n.memoizedState;
    s !== u || h !== x || Ae.current || wn
      ? (typeof g == "function" && (wa(n, t, g, r), (x = n.memoizedState)),
        (c = wn || Ds(n, t, c, r, h, x, d) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, x, d),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, x, d)),
            typeof l.componentDidUpdate == "function" && (n.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = x)),
        (l.props = r),
        (l.state = x),
        (l.context = d),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Ba(e, n, t, r, a, o);
}
function Ba(e, n, t, r, o, a) {
  ru(e, n);
  var l = (n.flags & 128) !== 0;
  if (!r && !l) return (o && bs(n, t, !1), kn(e, n, a));
  ((r = n.stateNode), (Zp.current = n));
  var s =
    l && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && l
      ? ((n.child = Nt(n, e.child, null, a)), (n.child = Nt(n, null, s, a)))
      : Ee(e, n, s, a),
    (n.memoizedState = r.state),
    o && bs(n, t, !0),
    n.child
  );
}
function ou(e) {
  var n = e.stateNode;
  (n.pendingContext
    ? js(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && js(e, n.context, !1),
    vl(e, n.containerInfo));
}
function Os(e, n, t, r, o) {
  return (Pt(), pl(o), (n.flags |= 256), Ee(e, n, t, r), n.child);
}
var Da = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function iu(e, n, t) {
  var r = n.pendingProps,
    o = ne.current,
    a = !1,
    l = (n.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((a = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    q(ne, o & 1),
    e === null)
  )
    return (
      Fa(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          a
            ? ((r = n.mode),
              (a = n.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = l))
                : (a = fi(l, r, 0, null)),
              (e = et(e, r, t, null)),
              (a.return = n),
              (e.return = n),
              (a.sibling = e),
              (n.child = a),
              (n.child.memoizedState = Ra(t)),
              (n.memoizedState = Da),
              e)
            : wl(n, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return em(e, n, l, r, s, o, t);
  if (a) {
    ((a = r.fallback), (l = n.mode), (o = e.child), (s = o.sibling));
    var d = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && n.child !== o
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = d),
          (n.deletions = null))
        : ((r = Wn(o, d)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (a = Wn(s, a)) : ((a = et(a, l, t, null)), (a.flags |= 2)),
      (a.return = n),
      (r.return = n),
      (r.sibling = a),
      (n.child = r),
      (r = a),
      (a = n.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ra(t)
          : {
              baseLanes: l.baseLanes | t,
              cachePool: null,
              transitions: l.transitions,
            }),
      (a.memoizedState = l),
      (a.childLanes = e.childLanes & ~t),
      (n.memoizedState = Da),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Wn(a, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function wl(e, n) {
  return (
    (n = fi({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function io(e, n, t, r) {
  return (
    r !== null && pl(r),
    Nt(n, e.child, null, t),
    (e = wl(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function em(e, n, t, r, o, a, l) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Ui(Error(S(422)))), io(e, n, l, r))
      : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((a = r.fallback),
          (o = n.mode),
          (r = fi({ mode: "visible", children: r.children }, o, 0, null)),
          (a = et(a, o, l, null)),
          (a.flags |= 2),
          (r.return = n),
          (a.return = n),
          (r.sibling = a),
          (n.child = r),
          n.mode & 1 && Nt(n, e.child, null, l),
          (n.child.memoizedState = Ra(l)),
          (n.memoizedState = Da),
          a);
  if (!(n.mode & 1)) return io(e, n, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (a = Error(S(419))),
      (r = Ui(a, r, void 0)),
      io(e, n, l, r)
    );
  }
  if (((s = (l & e.childLanes) !== 0), ze || s)) {
    if (((r = de), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== a.retryLane &&
          ((a.retryLane = o), vn(e, o), nn(r, e, o, -1)));
    }
    return (Rl(), (r = Ui(Error(S(421)))), io(e, n, l, r));
  }
  return o.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = pm.bind(null, e)),
      (o._reactRetry = n),
      null)
    : ((e = a.treeContext),
      (Te = Nn(o.nextSibling)),
      (Pe = n),
      (Z = !0),
      (Ze = null),
      e !== null &&
        (($e[He++] = mn),
        ($e[He++] = gn),
        ($e[He++] = rt),
        (mn = e.id),
        (gn = e.overflow),
        (rt = n)),
      (n = wl(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ws(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  (r !== null && (r.lanes |= n), Ca(e.return, n, t));
}
function Vi(e, n, t, r, o) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: o,
      })
    : ((a.isBackwards = n),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = t),
      (a.tailMode = o));
}
function au(e, n, t) {
  var r = n.pendingProps,
    o = r.revealOrder,
    a = r.tail;
  if ((Ee(e, n, r.children, t), (r = ne.current), r & 2))
    ((r = (r & 1) | 2), (n.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && Ws(e, t, n);
        else if (e.tag === 19) Ws(e, t, n);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((q(ne, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (t = n.child, o = null; t !== null;)
          ((e = t.alternate),
            e !== null && $o(e) === null && (o = t),
            (t = t.sibling));
        ((t = o),
          t === null
            ? ((o = n.child), (n.child = null))
            : ((o = t.sibling), (t.sibling = null)),
          Vi(n, !1, o, t, a));
        break;
      case "backwards":
        for (t = null, o = n.child, n.child = null; o !== null;) {
          if (((e = o.alternate), e !== null && $o(e) === null)) {
            n.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = t), (t = o), (o = e));
        }
        Vi(n, !0, t, null, a);
        break;
      case "together":
        Vi(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function xo(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function kn(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (it |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(S(153));
  if (n.child !== null) {
    for (
      e = n.child, t = Wn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (t = t.sibling = Wn(e, e.pendingProps)),
        (t.return = n));
    t.sibling = null;
  }
  return n.child;
}
function nm(e, n, t) {
  switch (n.tag) {
    case 3:
      (ou(n), Pt());
      break;
    case 5:
      Dd(n);
      break;
    case 1:
      Be(n.type) && Po(n);
      break;
    case 4:
      vl(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        o = n.memoizedProps.value;
      (q(_o, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ne, ne.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
            ? iu(e, n, t)
            : (q(ne, ne.current & 1),
              (e = kn(e, n, t)),
              e !== null ? e.sibling : null);
      q(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return au(e, n, t);
        n.flags |= 128;
      }
      if (
        ((o = n.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        q(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((n.lanes = 0), tu(e, n, t));
  }
  return kn(e, n, t);
}
var lu, Ma, su, cu;
lu = function (e, n) {
  for (var t = n.child; t !== null;) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
};
Ma = function () {};
su = function (e, n, t, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = n.stateNode), Xn(dn.current));
    var a = null;
    switch (t) {
      case "input":
        ((o = ta(e, o)), (r = ta(e, r)), (a = []));
        break;
      case "select":
        ((o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((o = ia(e, o)), (r = ia(e, r)), (a = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mo);
    }
    la(t, r);
    var l;
    t = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var s = o[c];
          for (l in s) s.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (gr.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in r) {
      var d = r[c];
      if (
        ((s = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && d !== s && (d != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (d && d.hasOwnProperty(l)) ||
                (t || (t = {}), (t[l] = ""));
            for (l in d)
              d.hasOwnProperty(l) &&
                s[l] !== d[l] &&
                (t || (t = {}), (t[l] = d[l]));
          } else (t || (a || (a = []), a.push(c, t)), (t = d));
        else
          c === "dangerouslySetInnerHTML"
            ? ((d = d ? d.__html : void 0),
              (s = s ? s.__html : void 0),
              d != null && s !== d && (a = a || []).push(c, d))
            : c === "children"
              ? (typeof d != "string" && typeof d != "number") ||
                (a = a || []).push(c, "" + d)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (gr.hasOwnProperty(c)
                  ? (d != null && c === "onScroll" && Y("scroll", e),
                    a || s === d || (a = []))
                  : (a = a || []).push(c, d));
    }
    t && (a = a || []).push("style", t);
    var c = a;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
cu = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Zt(e, n) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null;)
          (n.alternate !== null && (t = n), (n = n.sibling));
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null;)
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var o = e.child; o !== null;)
      ((t |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null;)
      ((t |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = t), n);
}
function tm(e, n, t) {
  var r = n.pendingProps;
  switch ((fl(n), n.tag)) {
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
      return (ye(n), null);
    case 1:
      return (Be(n.type) && To(), ye(n), null);
    case 3:
      return (
        (r = n.stateNode),
        Lt(),
        K(Ae),
        K(ve),
        El(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ro(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Ze !== null && ($a(Ze), (Ze = null)))),
        Ma(e, n),
        ye(n),
        null
      );
    case 5:
      kl(n);
      var o = Xn(wr.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        (su(e, n, t, r, o),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(S(166));
          return (ye(n), null);
        }
        if (((e = Xn(dn.current)), ro(n))) {
          ((r = n.stateNode), (t = n.type));
          var a = n.memoizedProps;
          switch (((r[sn] = n), (r[Fr] = a), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              (Y("cancel", r), Y("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ir.length; o++) Y(ir[o], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Y("error", r), Y("load", r));
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              (Kl(r, a), Y("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!a.multiple }),
                Y("invalid", r));
              break;
            case "textarea":
              (Xl(r, a), Y("invalid", r));
          }
          (la(t, a), (o = null));
          for (var l in a)
            if (a.hasOwnProperty(l)) {
              var s = a[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (a.suppressHydrationWarning !== !0 &&
                      to(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (a.suppressHydrationWarning !== !0 &&
                      to(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : gr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  Y("scroll", r);
            }
          switch (t) {
            case "input":
              (qr(r), Jl(r, a, !0));
              break;
            case "textarea":
              (qr(r), Zl(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Mo);
          }
          ((r = o), (n.updateQueue = r), r !== null && (n.flags |= 4));
        } else {
          ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Nc(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(t, { is: r.is }))
                  : ((e = l.createElement(t)),
                    t === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, t)),
            (e[sn] = n),
            (e[Fr] = r),
            lu(e, n, !1, !1),
            (n.stateNode = e));
          e: {
            switch (((l = sa(t, r)), t)) {
              case "dialog":
                (Y("cancel", e), Y("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Y("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < ir.length; o++) Y(ir[o], e);
                o = r;
                break;
              case "source":
                (Y("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (Y("error", e), Y("load", e), (o = r));
                break;
              case "details":
                (Y("toggle", e), (o = r));
                break;
              case "input":
                (Kl(e, r), (o = ta(e, r)), Y("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  Y("invalid", e));
                break;
              case "textarea":
                (Xl(e, r), (o = ia(e, r)), Y("invalid", e));
                break;
              default:
                o = r;
            }
            (la(t, o), (s = o));
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var d = s[a];
                a === "style"
                  ? Oc(e, d)
                  : a === "dangerouslySetInnerHTML"
                    ? ((d = d ? d.__html : void 0), d != null && Lc(e, d))
                    : a === "children"
                      ? typeof d == "string"
                        ? (t !== "textarea" || d !== "") && hr(e, d)
                        : typeof d == "number" && hr(e, "" + d)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (gr.hasOwnProperty(a)
                          ? d != null && a === "onScroll" && Y("scroll", e)
                          : d != null && Ja(e, a, d, l));
              }
            switch (t) {
              case "input":
                (qr(e), Jl(e, r, !1));
                break;
              case "textarea":
                (qr(e), Zl(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Ct(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Ct(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Mo);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return (ye(n), null);
    case 6:
      if (e && n.stateNode != null) cu(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(S(166));
        if (((t = Xn(wr.current)), Xn(dn.current), ro(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[sn] = n),
            (a = r.nodeValue !== t) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                to(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  to(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          a && (n.flags |= 4);
        } else
          ((r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[sn] = n),
            (n.stateNode = r));
      }
      return (ye(n), null);
    case 13:
      if (
        (K(ne),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Te !== null && n.mode & 1 && !(n.flags & 128))
          (wd(), Pt(), (n.flags |= 98560), (a = !1));
        else if (((a = ro(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(S(318));
            if (
              ((a = n.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(S(317));
            a[sn] = n;
          } else
            (Pt(),
              !(n.flags & 128) && (n.memoizedState = null),
              (n.flags |= 4));
          (ye(n), (a = !1));
        } else (Ze !== null && ($a(Ze), (Ze = null)), (a = !0));
        if (!a) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || ne.current & 1 ? se === 0 && (se = 3) : Rl())),
          n.updateQueue !== null && (n.flags |= 4),
          ye(n),
          null);
    case 4:
      return (
        Lt(),
        Ma(e, n),
        e === null && jr(n.stateNode.containerInfo),
        ye(n),
        null
      );
    case 10:
      return (hl(n.type._context), ye(n), null);
    case 17:
      return (Be(n.type) && To(), ye(n), null);
    case 19:
      if ((K(ne), (a = n.memoizedState), a === null)) return (ye(n), null);
      if (((r = (n.flags & 128) !== 0), (l = a.rendering), l === null))
        if (r) Zt(a, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null;) {
              if (((l = $o(e)), l !== null)) {
                for (
                  n.flags |= 128,
                    Zt(a, !1),
                    r = l.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;
                )
                  ((a = t),
                    (e = r),
                    (a.flags &= 14680066),
                    (l = a.alternate),
                    l === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = l.childLanes),
                        (a.lanes = l.lanes),
                        (a.child = l.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = l.memoizedProps),
                        (a.memoizedState = l.memoizedState),
                        (a.updateQueue = l.updateQueue),
                        (a.type = l.type),
                        (e = l.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling));
                return (q(ne, (ne.current & 1) | 2), n.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            ie() > Ot &&
            ((n.flags |= 128), (r = !0), Zt(a, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $o(l)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              Zt(a, !0),
              a.tail === null && a.tailMode === "hidden" && !l.alternate && !Z)
            )
              return (ye(n), null);
          } else
            2 * ie() - a.renderingStartTime > Ot &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), Zt(a, !1), (n.lanes = 4194304));
        a.isBackwards
          ? ((l.sibling = n.child), (n.child = l))
          : ((t = a.last),
            t !== null ? (t.sibling = l) : (n.child = l),
            (a.last = l));
      }
      return a.tail !== null
        ? ((n = a.tail),
          (a.rendering = n),
          (a.tail = n.sibling),
          (a.renderingStartTime = ie()),
          (n.sibling = null),
          (t = ne.current),
          q(ne, r ? (t & 1) | 2 : t & 1),
          n)
        : (ye(n), null);
    case 22:
    case 23:
      return (
        Dl(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? Me & 1073741824 && (ye(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : ye(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, n.tag));
}
function rm(e, n) {
  switch ((fl(n), n.tag)) {
    case 1:
      return (
        Be(n.type) && To(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        Lt(),
        K(Ae),
        K(ve),
        El(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return (kl(n), null);
    case 13:
      if ((K(ne), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(S(340));
        Pt();
      }
      return (
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return (K(ne), null);
    case 4:
      return (Lt(), null);
    case 10:
      return (hl(n.type._context), null);
    case 22:
    case 23:
      return (Dl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ao = !1,
  xe = !1,
  om = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function St(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        oe(e, n, r);
      }
    else t.current = null;
}
function Ta(e, n, t) {
  try {
    t();
  } catch (r) {
    oe(e, n, r);
  }
}
var $s = !1;
function im(e, n) {
  if (((xa = Bo), (e = md()), dl(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var o = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            (t.nodeType, a.nodeType);
          } catch {
            t = null;
            break e;
          }
          var l = 0,
            s = -1,
            d = -1,
            c = 0,
            m = 0,
            u = e,
            h = null;
          n: for (;;) {
            for (
              var g;
              u !== t || (o !== 0 && u.nodeType !== 3) || (s = l + o),
                u !== a || (r !== 0 && u.nodeType !== 3) || (d = l + r),
                u.nodeType === 3 && (l += u.nodeValue.length),
                (g = u.firstChild) !== null;
            )
              ((h = u), (u = g));
            for (;;) {
              if (u === e) break n;
              if (
                (h === t && ++c === o && (s = l),
                h === a && ++m === r && (d = l),
                (g = u.nextSibling) !== null)
              )
                break;
              ((u = h), (h = u.parentNode));
            }
            u = g;
          }
          t = s === -1 || d === -1 ? null : { start: s, end: d };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (va = { focusedElem: e, selectionRange: t }, Bo = !1, D = n; D !== null;)
    if (((n = D), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = n), (D = e));
    else
      for (; D !== null;) {
        n = D;
        try {
          var x = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var E = x.memoizedProps,
                    b = x.memoizedState,
                    p = n.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? E : Je(n.type, E),
                      b,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var y = n.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          oe(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          ((e.return = n.return), (D = e));
          break;
        }
        D = n.return;
      }
  return ((x = $s), ($s = !1), x);
}
function fr(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy;
        ((o.destroy = void 0), a !== void 0 && Ta(n, t, a));
      }
      o = o.next;
    } while (o !== r);
  }
}
function di(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Pa(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function du(e) {
  var n = e.alternate;
  (n !== null && ((e.alternate = null), du(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[sn], delete n[Fr], delete n[Sa], delete n[Wp], delete n[$p])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function uu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hs(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || uu(e.return)) return null;
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
function Na(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Mo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Na(e, n, t), e = e.sibling; e !== null;)
      (Na(e, n, t), (e = e.sibling));
}
function La(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, n, t), e = e.sibling; e !== null;)
      (La(e, n, t), (e = e.sibling));
}
var pe = null,
  Xe = !1;
function Fn(e, n, t) {
  for (t = t.child; t !== null;) (fu(e, n, t), (t = t.sibling));
}
function fu(e, n, t) {
  if (cn && typeof cn.onCommitFiberUnmount == "function")
    try {
      cn.onCommitFiberUnmount(ti, t);
    } catch {}
  switch (t.tag) {
    case 5:
      xe || St(t, n);
    case 6:
      var r = pe,
        o = Xe;
      ((pe = null),
        Fn(e, n, t),
        (pe = r),
        (Xe = o),
        pe !== null &&
          (Xe
            ? ((e = pe),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : pe.removeChild(t.stateNode)));
      break;
    case 18:
      pe !== null &&
        (Xe
          ? ((e = pe),
            (t = t.stateNode),
            e.nodeType === 8
              ? Li(e.parentNode, t)
              : e.nodeType === 1 && Li(e, t),
            kr(e))
          : Li(pe, t.stateNode));
      break;
    case 4:
      ((r = pe),
        (o = Xe),
        (pe = t.stateNode.containerInfo),
        (Xe = !0),
        Fn(e, n, t),
        (pe = r),
        (Xe = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var a = o,
            l = a.destroy;
          ((a = a.tag),
            l !== void 0 && (a & 2 || a & 4) && Ta(t, n, l),
            (o = o.next));
        } while (o !== r);
      }
      Fn(e, n, t);
      break;
    case 1:
      if (
        !xe &&
        (St(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          oe(t, n, s);
        }
      Fn(e, n, t);
      break;
    case 21:
      Fn(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((xe = (r = xe) || t.memoizedState !== null), Fn(e, n, t), (xe = r))
        : Fn(e, n, t);
      break;
    default:
      Fn(e, n, t);
  }
}
function Us(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    (t === null && (t = e.stateNode = new om()),
      n.forEach(function (r) {
        var o = mm.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(o, o));
      }));
  }
}
function Ke(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      try {
        var a = e,
          l = n,
          s = l;
        e: for (; s !== null;) {
          switch (s.tag) {
            case 5:
              ((pe = s.stateNode), (Xe = !1));
              break e;
            case 3:
              ((pe = s.stateNode.containerInfo), (Xe = !0));
              break e;
            case 4:
              ((pe = s.stateNode.containerInfo), (Xe = !0));
              break e;
          }
          s = s.return;
        }
        if (pe === null) throw Error(S(160));
        (fu(a, l, o), (pe = null), (Xe = !1));
        var d = o.alternate;
        (d !== null && (d.return = null), (o.return = null));
      } catch (c) {
        oe(o, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null;) (pu(n, e), (n = n.sibling));
}
function pu(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(n, e), an(e), r & 4)) {
        try {
          (fr(3, e, e.return), di(3, e));
        } catch (E) {
          oe(e, e.return, E);
        }
        try {
          fr(5, e, e.return);
        } catch (E) {
          oe(e, e.return, E);
        }
      }
      break;
    case 1:
      (Ke(n, e), an(e), r & 512 && t !== null && St(t, t.return));
      break;
    case 5:
      if (
        (Ke(n, e),
        an(e),
        r & 512 && t !== null && St(t, t.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          hr(o, "");
        } catch (E) {
          oe(e, e.return, E);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var a = e.memoizedProps,
          l = t !== null ? t.memoizedProps : a,
          s = e.type,
          d = e.updateQueue;
        if (((e.updateQueue = null), d !== null))
          try {
            (s === "input" && a.type === "radio" && a.name != null && Tc(o, a),
              sa(s, l));
            var c = sa(s, a);
            for (l = 0; l < d.length; l += 2) {
              var m = d[l],
                u = d[l + 1];
              m === "style"
                ? Oc(o, u)
                : m === "dangerouslySetInnerHTML"
                  ? Lc(o, u)
                  : m === "children"
                    ? hr(o, u)
                    : Ja(o, m, u, c);
            }
            switch (s) {
              case "input":
                ra(o, a);
                break;
              case "textarea":
                Pc(o, a);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!a.multiple;
                var g = a.value;
                g != null
                  ? Ct(o, !!a.multiple, g, !1)
                  : h !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Ct(o, !!a.multiple, a.defaultValue, !0)
                      : Ct(o, !!a.multiple, a.multiple ? [] : "", !1));
            }
            o[Fr] = a;
          } catch (E) {
            oe(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Ke(n, e), an(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((o = e.stateNode), (a = e.memoizedProps));
        try {
          o.nodeValue = a;
        } catch (E) {
          oe(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Ke(n, e), an(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          kr(n.containerInfo);
        } catch (E) {
          oe(e, e.return, E);
        }
      break;
    case 4:
      (Ke(n, e), an(e));
      break;
    case 13:
      (Ke(n, e),
        an(e),
        (o = e.child),
        o.flags & 8192 &&
          ((a = o.memoizedState !== null),
          (o.stateNode.isHidden = a),
          !a ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Al = ie())),
        r & 4 && Us(e));
      break;
    case 22:
      if (
        ((m = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((xe = (c = xe) || m), Ke(n, e), (xe = c)) : Ke(n, e),
        an(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (D = e, m = e.child; m !== null;) {
            for (u = D = m; D !== null;) {
              switch (((h = D), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fr(4, h, h.return);
                  break;
                case 1:
                  St(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = h), (t = h.return));
                    try {
                      ((n = r),
                        (x.props = n.memoizedProps),
                        (x.state = n.memoizedState),
                        x.componentWillUnmount());
                    } catch (E) {
                      oe(r, t, E);
                    }
                  }
                  break;
                case 5:
                  St(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Gs(u);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (D = g)) : Gs(u);
            }
            m = m.sibling;
          }
        e: for (m = null, u = e; ;) {
          if (u.tag === 5) {
            if (m === null) {
              m = u;
              try {
                ((o = u.stateNode),
                  c
                    ? ((a = o.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((s = u.stateNode),
                      (d = u.memoizedProps.style),
                      (l =
                        d != null && d.hasOwnProperty("display")
                          ? d.display
                          : null),
                      (s.style.display = _c("display", l))));
              } catch (E) {
                oe(e, e.return, E);
              }
            }
          } else if (u.tag === 6) {
            if (m === null)
              try {
                u.stateNode.nodeValue = c ? "" : u.memoizedProps;
              } catch (E) {
                oe(e, e.return, E);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === e) &&
            u.child !== null
          ) {
            ((u.child.return = u), (u = u.child));
            continue;
          }
          if (u === e) break e;
          for (; u.sibling === null;) {
            if (u.return === null || u.return === e) break e;
            (m === u && (m = null), (u = u.return));
          }
          (m === u && (m = null),
            (u.sibling.return = u.return),
            (u = u.sibling));
        }
      }
      break;
    case 19:
      (Ke(n, e), an(e), r & 4 && Us(e));
      break;
    case 21:
      break;
    default:
      (Ke(n, e), an(e));
  }
}
function an(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null;) {
          if (uu(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (hr(o, ""), (r.flags &= -33));
          var a = Hs(e);
          La(e, a, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Hs(e);
          Na(e, s, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (d) {
      oe(e, e.return, d);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function am(e, n, t) {
  ((D = e), mu(e));
}
function mu(e, n, t) {
  for (var r = (e.mode & 1) !== 0; D !== null;) {
    var o = D,
      a = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ao;
      if (!l) {
        var s = o.alternate,
          d = (s !== null && s.memoizedState !== null) || xe;
        s = ao;
        var c = xe;
        if (((ao = l), (xe = d) && !c))
          for (D = o; D !== null;)
            ((l = D),
              (d = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Qs(o)
                : d !== null
                  ? ((d.return = l), (D = d))
                  : Qs(o));
        for (; a !== null;) ((D = a), mu(a), (a = a.sibling));
        ((D = o), (ao = s), (xe = c));
      }
      Vs(e);
    } else
      o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (D = a)) : Vs(e);
  }
}
function Vs(e) {
  for (; D !== null;) {
    var n = D;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              xe || di(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !xe)
                if (t === null) r.componentDidMount();
                else {
                  var o =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Je(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = n.updateQueue;
              a !== null && zs(n, a, r);
              break;
            case 3:
              var l = n.updateQueue;
              if (l !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                zs(n, l, t);
              }
              break;
            case 5:
              var s = n.stateNode;
              if (t === null && n.flags & 4) {
                t = s;
                var d = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && t.focus();
                    break;
                  case "img":
                    d.src && (t.src = d.src);
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
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var u = m.dehydrated;
                    u !== null && kr(u);
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
              throw Error(S(163));
          }
        xe || (n.flags & 512 && Pa(n));
      } catch (h) {
        oe(n, n.return, h);
      }
    }
    if (n === e) {
      D = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      ((t.return = n.return), (D = t));
      break;
    }
    D = n.return;
  }
}
function Gs(e) {
  for (; D !== null;) {
    var n = D;
    if (n === e) {
      D = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      ((t.return = n.return), (D = t));
      break;
    }
    D = n.return;
  }
}
function Qs(e) {
  for (; D !== null;) {
    var n = D;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            di(4, n);
          } catch (d) {
            oe(n, t, d);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = n.return;
            try {
              r.componentDidMount();
            } catch (d) {
              oe(n, o, d);
            }
          }
          var a = n.return;
          try {
            Pa(n);
          } catch (d) {
            oe(n, a, d);
          }
          break;
        case 5:
          var l = n.return;
          try {
            Pa(n);
          } catch (d) {
            oe(n, l, d);
          }
      }
    } catch (d) {
      oe(n, n.return, d);
    }
    if (n === e) {
      D = null;
      break;
    }
    var s = n.sibling;
    if (s !== null) {
      ((s.return = n.return), (D = s));
      break;
    }
    D = n.return;
  }
}
var lm = Math.ceil,
  Vo = Sn.ReactCurrentDispatcher,
  Il = Sn.ReactCurrentOwner,
  Ve = Sn.ReactCurrentBatchConfig,
  H = 0,
  de = null,
  ae = null,
  me = 0,
  Me = 0,
  jt = Vn(0),
  se = 0,
  Br = null,
  it = 0,
  ui = 0,
  zl = 0,
  pr = null,
  we = null,
  Al = 0,
  Ot = 1 / 0,
  un = null,
  Go = !1,
  _a = null,
  _n = null,
  lo = !1,
  Bn = null,
  Qo = 0,
  mr = 0,
  Oa = null,
  vo = -1,
  ko = 0;
function Se() {
  return H & 6 ? ie() : vo !== -1 ? vo : (vo = ie());
}
function On(e) {
  return e.mode & 1
    ? H & 2 && me !== 0
      ? me & -me
      : Up.transition !== null
        ? (ko === 0 && (ko = Xc()), ko)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : id(e.type))),
          e)
    : 1;
}
function nn(e, n, t, r) {
  if (50 < mr) throw ((mr = 0), (Oa = null), Error(S(185)));
  (Lr(e, t, r),
    (!(H & 2) || e !== de) &&
      (e === de && (!(H & 2) && (ui |= t), se === 4 && zn(e, me)),
      De(e, r),
      t === 1 && H === 0 && !(n.mode & 1) && ((Ot = ie() + 500), li && Gn())));
}
function De(e, n) {
  var t = e.callbackNode;
  Uf(e, n);
  var r = Ao(e, e === de ? me : 0);
  if (r === 0)
    (t !== null && ts(t), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && ts(t), n === 1))
      (e.tag === 0 ? Hp(qs.bind(null, e)) : bd(qs.bind(null, e)),
        _p(function () {
          !(H & 6) && Gn();
        }),
        (t = null));
    else {
      switch (Zc(r)) {
        case 1:
          t = tl;
          break;
        case 4:
          t = Kc;
          break;
        case 16:
          t = zo;
          break;
        case 536870912:
          t = Jc;
          break;
        default:
          t = zo;
      }
      t = Su(t, gu.bind(null, e));
    }
    ((e.callbackPriority = n), (e.callbackNode = t));
  }
}
function gu(e, n) {
  if (((vo = -1), (ko = 0), H & 6)) throw Error(S(327));
  var t = e.callbackNode;
  if (Bt() && e.callbackNode !== t) return null;
  var r = Ao(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = qo(e, r);
  else {
    n = r;
    var o = H;
    H |= 2;
    var a = yu();
    (de !== e || me !== n) && ((un = null), (Ot = ie() + 500), Zn(e, n));
    do
      try {
        dm();
        break;
      } catch (s) {
        hu(e, s);
      }
    while (!0);
    (gl(),
      (Vo.current = a),
      (H = o),
      ae !== null ? (n = 0) : ((de = null), (me = 0), (n = se)));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((o = pa(e)), o !== 0 && ((r = o), (n = Wa(e, o)))), n === 1)
    )
      throw ((t = Br), Zn(e, 0), zn(e, r), De(e, ie()), t);
    if (n === 6) zn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !sm(o) &&
          ((n = qo(e, r)),
          n === 2 && ((a = pa(e)), a !== 0 && ((r = a), (n = Wa(e, a)))),
          n === 1))
      )
        throw ((t = Br), Zn(e, 0), zn(e, r), De(e, ie()), t);
      switch (((e.finishedWork = o), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Yn(e, we, un);
          break;
        case 3:
          if (
            (zn(e, r), (r & 130023424) === r && ((n = Al + 500 - ie()), 10 < n))
          ) {
            if (Ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Se(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Ea(Yn.bind(null, e, we, un), n);
            break;
          }
          Yn(e, we, un);
          break;
        case 4:
          if ((zn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, o = -1; 0 < r;) {
            var l = 31 - en(r);
            ((a = 1 << l), (l = n[l]), l > o && (o = l), (r &= ~a));
          }
          if (
            ((r = o),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * lm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ea(Yn.bind(null, e, we, un), r);
            break;
          }
          Yn(e, we, un);
          break;
        case 5:
          Yn(e, we, un);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return (De(e, ie()), e.callbackNode === t ? gu.bind(null, e) : null);
}
function Wa(e, n) {
  var t = pr;
  return (
    e.current.memoizedState.isDehydrated && (Zn(e, n).flags |= 256),
    (e = qo(e, n)),
    e !== 2 && ((n = we), (we = t), n !== null && $a(n)),
    e
  );
}
function $a(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function sm(e) {
  for (var n = e; ;) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var o = t[r],
            a = o.getSnapshot;
          o = o.value;
          try {
            if (!tn(a(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      ((t.return = n), (n = t));
    else {
      if (n === e) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }
  return !0;
}
function zn(e, n) {
  for (
    n &= ~zl,
      n &= ~ui,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;
  ) {
    var t = 31 - en(n),
      r = 1 << t;
    ((e[t] = -1), (n &= ~r));
  }
}
function qs(e) {
  if (H & 6) throw Error(S(327));
  Bt();
  var n = Ao(e, 0);
  if (!(n & 1)) return (De(e, ie()), null);
  var t = qo(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = pa(e);
    r !== 0 && ((n = r), (t = Wa(e, r)));
  }
  if (t === 1) throw ((t = Br), Zn(e, 0), zn(e, n), De(e, ie()), t);
  if (t === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    Yn(e, we, un),
    De(e, ie()),
    null
  );
}
function Bl(e, n) {
  var t = H;
  H |= 1;
  try {
    return e(n);
  } finally {
    ((H = t), H === 0 && ((Ot = ie() + 500), li && Gn()));
  }
}
function at(e) {
  Bn !== null && Bn.tag === 0 && !(H & 6) && Bt();
  var n = H;
  H |= 1;
  var t = Ve.transition,
    r = G;
  try {
    if (((Ve.transition = null), (G = 1), e)) return e();
  } finally {
    ((G = r), (Ve.transition = t), (H = n), !(H & 6) && Gn());
  }
}
function Dl() {
  ((Me = jt.current), K(jt));
}
function Zn(e, n) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Lp(t)), ae !== null))
    for (t = ae.return; t !== null;) {
      var r = t;
      switch ((fl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && To());
          break;
        case 3:
          (Lt(), K(Ae), K(ve), El());
          break;
        case 5:
          kl(r);
          break;
        case 4:
          Lt();
          break;
        case 13:
          K(ne);
          break;
        case 19:
          K(ne);
          break;
        case 10:
          hl(r.type._context);
          break;
        case 22:
        case 23:
          Dl();
      }
      t = t.return;
    }
  if (
    ((de = e),
    (ae = e = Wn(e.current, null)),
    (me = Me = n),
    (se = 0),
    (Br = null),
    (zl = ui = it = 0),
    (we = pr = null),
    Jn !== null)
  ) {
    for (n = 0; n < Jn.length; n++)
      if (((t = Jn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var o = r.next,
          a = t.pending;
        if (a !== null) {
          var l = a.next;
          ((a.next = o), (r.next = l));
        }
        t.pending = r;
      }
    Jn = null;
  }
  return e;
}
function hu(e, n) {
  do {
    var t = ae;
    try {
      if ((gl(), (ho.current = Uo), Ho)) {
        for (var r = te.memoizedState; r !== null;) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        Ho = !1;
      }
      if (
        ((ot = 0),
        (ce = le = te = null),
        (ur = !1),
        (Ir = 0),
        (Il.current = null),
        t === null || t.return === null)
      ) {
        ((se = 1), (Br = n), (ae = null));
        break;
      }
      e: {
        var a = e,
          l = t.return,
          s = t,
          d = n;
        if (
          ((n = me),
          (s.flags |= 32768),
          d !== null && typeof d == "object" && typeof d.then == "function")
        ) {
          var c = d,
            m = s,
            u = m.tag;
          if (!(m.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Ts(l);
          if (g !== null) {
            ((g.flags &= -257),
              Ps(g, l, s, a, n),
              g.mode & 1 && Ms(a, c, n),
              (n = g),
              (d = c));
            var x = n.updateQueue;
            if (x === null) {
              var E = new Set();
              (E.add(d), (n.updateQueue = E));
            } else x.add(d);
            break e;
          } else {
            if (!(n & 1)) {
              (Ms(a, c, n), Rl());
              break e;
            }
            d = Error(S(426));
          }
        } else if (Z && s.mode & 1) {
          var b = Ts(l);
          if (b !== null) {
            (!(b.flags & 65536) && (b.flags |= 256),
              Ps(b, l, s, a, n),
              pl(_t(d, s)));
            break e;
          }
        }
        ((a = d = _t(d, s)),
          se !== 4 && (se = 2),
          pr === null ? (pr = [a]) : pr.push(a),
          (a = l));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (n &= -n), (a.lanes |= n));
              var p = Zd(a, d, n);
              Is(a, p);
              break e;
            case 1:
              s = d;
              var f = a.type,
                y = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (_n === null || !_n.has(y))))
              ) {
                ((a.flags |= 65536), (n &= -n), (a.lanes |= n));
                var v = eu(a, s, n);
                Is(a, v);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      vu(t);
    } catch (j) {
      ((n = j), ae === t && t !== null && (ae = t = t.return));
      continue;
    }
    break;
  } while (!0);
}
function yu() {
  var e = Vo.current;
  return ((Vo.current = Uo), e === null ? Uo : e);
}
function Rl() {
  ((se === 0 || se === 3 || se === 2) && (se = 4),
    de === null || (!(it & 268435455) && !(ui & 268435455)) || zn(de, me));
}
function qo(e, n) {
  var t = H;
  H |= 2;
  var r = yu();
  (de !== e || me !== n) && ((un = null), Zn(e, n));
  do
    try {
      cm();
      break;
    } catch (o) {
      hu(e, o);
    }
  while (!0);
  if ((gl(), (H = t), (Vo.current = r), ae !== null)) throw Error(S(261));
  return ((de = null), (me = 0), se);
}
function cm() {
  for (; ae !== null;) xu(ae);
}
function dm() {
  for (; ae !== null && !Tf();) xu(ae);
}
function xu(e) {
  var n = Eu(e.alternate, e, Me);
  ((e.memoizedProps = e.pendingProps),
    n === null ? vu(e) : (ae = n),
    (Il.current = null));
}
function vu(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = rm(t, n)), t !== null)) {
        ((t.flags &= 32767), (ae = t));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((se = 6), (ae = null));
        return;
      }
    } else if (((t = tm(t, n, Me)), t !== null)) {
      ae = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      ae = n;
      return;
    }
    ae = n = e;
  } while (n !== null);
  se === 0 && (se = 5);
}
function Yn(e, n, t) {
  var r = G,
    o = Ve.transition;
  try {
    ((Ve.transition = null), (G = 1), um(e, n, t, r));
  } finally {
    ((Ve.transition = o), (G = r));
  }
  return null;
}
function um(e, n, t, r) {
  do Bt();
  while (Bn !== null);
  if (H & 6) throw Error(S(327));
  t = e.finishedWork;
  var o = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = t.lanes | t.childLanes;
  if (
    (Vf(e, a),
    e === de && ((ae = de = null), (me = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      lo ||
      ((lo = !0),
      Su(zo, function () {
        return (Bt(), null);
      })),
    (a = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || a)
  ) {
    ((a = Ve.transition), (Ve.transition = null));
    var l = G;
    G = 1;
    var s = H;
    ((H |= 4),
      (Il.current = null),
      im(e, t),
      pu(t, e),
      Bp(va),
      (Bo = !!xa),
      (va = xa = null),
      (e.current = t),
      am(t),
      Pf(),
      (H = s),
      (G = l),
      (Ve.transition = a));
  } else e.current = t;
  if (
    (lo && ((lo = !1), (Bn = e), (Qo = o)),
    (a = e.pendingLanes),
    a === 0 && (_n = null),
    _f(t.stateNode),
    De(e, ie()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      ((o = n[t]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Go) throw ((Go = !1), (e = _a), (_a = null), e);
  return (
    Qo & 1 && e.tag !== 0 && Bt(),
    (a = e.pendingLanes),
    a & 1 ? (e === Oa ? mr++ : ((mr = 0), (Oa = e))) : (mr = 0),
    Gn(),
    null
  );
}
function Bt() {
  if (Bn !== null) {
    var e = Zc(Qo),
      n = Ve.transition,
      t = G;
    try {
      if (((Ve.transition = null), (G = 16 > e ? 16 : e), Bn === null))
        var r = !1;
      else {
        if (((e = Bn), (Bn = null), (Qo = 0), H & 6)) throw Error(S(331));
        var o = H;
        for (H |= 4, D = e.current; D !== null;) {
          var a = D,
            l = a.child;
          if (D.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var d = 0; d < s.length; d++) {
                var c = s[d];
                for (D = c; D !== null;) {
                  var m = D;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fr(8, m, a);
                  }
                  var u = m.child;
                  if (u !== null) ((u.return = m), (D = u));
                  else
                    for (; D !== null;) {
                      m = D;
                      var h = m.sibling,
                        g = m.return;
                      if ((du(m), m === c)) {
                        D = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = g), (D = h));
                        break;
                      }
                      D = g;
                    }
                }
              }
              var x = a.alternate;
              if (x !== null) {
                var E = x.child;
                if (E !== null) {
                  x.child = null;
                  do {
                    var b = E.sibling;
                    ((E.sibling = null), (E = b));
                  } while (E !== null);
                }
              }
              D = a;
            }
          }
          if (a.subtreeFlags & 2064 && l !== null) ((l.return = a), (D = l));
          else
            e: for (; D !== null;) {
              if (((a = D), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fr(9, a, a.return);
                }
              var p = a.sibling;
              if (p !== null) {
                ((p.return = a.return), (D = p));
                break e;
              }
              D = a.return;
            }
        }
        var f = e.current;
        for (D = f; D !== null;) {
          l = D;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) ((y.return = l), (D = y));
          else
            e: for (l = f; D !== null;) {
              if (((s = D), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      di(9, s);
                  }
                } catch (j) {
                  oe(s, s.return, j);
                }
              if (s === l) {
                D = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                ((v.return = s.return), (D = v));
                break e;
              }
              D = s.return;
            }
        }
        if (
          ((H = o), Gn(), cn && typeof cn.onPostCommitFiberRoot == "function")
        )
          try {
            cn.onPostCommitFiberRoot(ti, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((G = t), (Ve.transition = n));
    }
  }
  return !1;
}
function Ys(e, n, t) {
  ((n = _t(t, n)),
    (n = Zd(e, n, 1)),
    (e = Ln(e, n, 1)),
    (n = Se()),
    e !== null && (Lr(e, 1, n), De(e, n)));
}
function oe(e, n, t) {
  if (e.tag === 3) Ys(e, e, t);
  else
    for (; n !== null;) {
      if (n.tag === 3) {
        Ys(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_n === null || !_n.has(r)))
        ) {
          ((e = _t(t, e)),
            (e = eu(n, e, 1)),
            (n = Ln(n, e, 1)),
            (e = Se()),
            n !== null && (Lr(n, 1, e), De(n, e)));
          break;
        }
      }
      n = n.return;
    }
}
function fm(e, n, t) {
  var r = e.pingCache;
  (r !== null && r.delete(n),
    (n = Se()),
    (e.pingedLanes |= e.suspendedLanes & t),
    de === e &&
      (me & t) === t &&
      (se === 4 || (se === 3 && (me & 130023424) === me && 500 > ie() - Al)
        ? Zn(e, 0)
        : (zl |= t)),
    De(e, n));
}
function ku(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = Jr), (Jr <<= 1), !(Jr & 130023424) && (Jr = 4194304))
      : (n = 1));
  var t = Se();
  ((e = vn(e, n)), e !== null && (Lr(e, n, t), De(e, t)));
}
function pm(e) {
  var n = e.memoizedState,
    t = 0;
  (n !== null && (t = n.retryLane), ku(e, t));
}
function mm(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (t = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  (r !== null && r.delete(n), ku(e, t));
}
var Eu;
Eu = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || Ae.current) ze = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return ((ze = !1), nm(e, n, t));
      ze = !!(e.flags & 131072);
    }
  else ((ze = !1), Z && n.flags & 1048576 && Fd(n, Lo, n.index));
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      (xo(e, n), (e = n.pendingProps));
      var o = Tt(n, ve.current);
      (At(n, t), (o = jl(null, n, r, e, o, t)));
      var a = bl();
      return (
        (n.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            Be(r) ? ((a = !0), Po(n)) : (a = !1),
            (n.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            xl(n),
            (o.updater = ci),
            (n.stateNode = o),
            (o._reactInternals = n),
            Ia(n, r, e, t),
            (n = Ba(null, n, r, !0, a, t)))
          : ((n.tag = 0), Z && a && ul(n), Ee(null, n, o, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (xo(e, n),
          (e = n.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (n.type = r),
          (o = n.tag = hm(r)),
          (e = Je(r, e)),
          o)
        ) {
          case 0:
            n = Aa(null, n, r, e, t);
            break e;
          case 1:
            n = _s(null, n, r, e, t);
            break e;
          case 11:
            n = Ns(null, n, r, e, t);
            break e;
          case 14:
            n = Ls(null, n, r, Je(r.type, e), t);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (o = n.pendingProps),
        (o = n.elementType === r ? o : Je(r, o)),
        Aa(e, n, r, o, t)
      );
    case 1:
      return (
        (r = n.type),
        (o = n.pendingProps),
        (o = n.elementType === r ? o : Je(r, o)),
        _s(e, n, r, o, t)
      );
    case 3:
      e: {
        if ((ou(n), e === null)) throw Error(S(387));
        ((r = n.pendingProps),
          (a = n.memoizedState),
          (o = a.element),
          Bd(e, n),
          Wo(n, r, null, t));
        var l = n.memoizedState;
        if (((r = l.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (n.updateQueue.baseState = a),
            (n.memoizedState = a),
            n.flags & 256)
          ) {
            ((o = _t(Error(S(423)), n)), (n = Os(e, n, r, t, o)));
            break e;
          } else if (r !== o) {
            ((o = _t(Error(S(424)), n)), (n = Os(e, n, r, t, o)));
            break e;
          } else
            for (
              Te = Nn(n.stateNode.containerInfo.firstChild),
                Pe = n,
                Z = !0,
                Ze = null,
                t = zd(n, null, r, t),
                n.child = t;
              t;
            )
              ((t.flags = (t.flags & -3) | 4096), (t = t.sibling));
        else {
          if ((Pt(), r === o)) {
            n = kn(e, n, t);
            break e;
          }
          Ee(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        Dd(n),
        e === null && Fa(n),
        (r = n.type),
        (o = n.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ka(r, o) ? (l = null) : a !== null && ka(r, a) && (n.flags |= 32),
        ru(e, n),
        Ee(e, n, l, t),
        n.child
      );
    case 6:
      return (e === null && Fa(n), null);
    case 13:
      return iu(e, n, t);
    case 4:
      return (
        vl(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = Nt(n, null, r, t)) : Ee(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (o = n.pendingProps),
        (o = n.elementType === r ? o : Je(r, o)),
        Ns(e, n, r, o, t)
      );
    case 7:
      return (Ee(e, n, n.pendingProps, t), n.child);
    case 8:
      return (Ee(e, n, n.pendingProps.children, t), n.child);
    case 12:
      return (Ee(e, n, n.pendingProps.children, t), n.child);
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (o = n.pendingProps),
          (a = n.memoizedProps),
          (l = o.value),
          q(_o, r._currentValue),
          (r._currentValue = l),
          a !== null)
        )
          if (tn(a.value, l)) {
            if (a.children === o.children && !Ae.current) {
              n = kn(e, n, t);
              break e;
            }
          } else
            for (a = n.child, a !== null && (a.return = n); a !== null;) {
              var s = a.dependencies;
              if (s !== null) {
                l = a.child;
                for (var d = s.firstContext; d !== null;) {
                  if (d.context === r) {
                    if (a.tag === 1) {
                      ((d = hn(-1, t & -t)), (d.tag = 2));
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        (m === null
                          ? (d.next = d)
                          : ((d.next = m.next), (m.next = d)),
                          (c.pending = d));
                      }
                    }
                    ((a.lanes |= t),
                      (d = a.alternate),
                      d !== null && (d.lanes |= t),
                      Ca(a.return, t, n),
                      (s.lanes |= t));
                    break;
                  }
                  d = d.next;
                }
              } else if (a.tag === 10) l = a.type === n.type ? null : a.child;
              else if (a.tag === 18) {
                if (((l = a.return), l === null)) throw Error(S(341));
                ((l.lanes |= t),
                  (s = l.alternate),
                  s !== null && (s.lanes |= t),
                  Ca(l, t, n),
                  (l = a.sibling));
              } else l = a.child;
              if (l !== null) l.return = a;
              else
                for (l = a; l !== null;) {
                  if (l === n) {
                    l = null;
                    break;
                  }
                  if (((a = l.sibling), a !== null)) {
                    ((a.return = l.return), (l = a));
                    break;
                  }
                  l = l.return;
                }
              a = l;
            }
        (Ee(e, n, o.children, t), (n = n.child));
      }
      return n;
    case 9:
      return (
        (o = n.type),
        (r = n.pendingProps.children),
        At(n, t),
        (o = Ge(o)),
        (r = r(o)),
        (n.flags |= 1),
        Ee(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (o = Je(r, n.pendingProps)),
        (o = Je(r.type, o)),
        Ls(e, n, r, o, t)
      );
    case 15:
      return nu(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (o = n.pendingProps),
        (o = n.elementType === r ? o : Je(r, o)),
        xo(e, n),
        (n.tag = 1),
        Be(r) ? ((e = !0), Po(n)) : (e = !1),
        At(n, t),
        Xd(n, r, o),
        Ia(n, r, o, t),
        Ba(null, n, r, !0, e, t)
      );
    case 19:
      return au(e, n, t);
    case 22:
      return tu(e, n, t);
  }
  throw Error(S(156, n.tag));
};
function Su(e, n) {
  return Yc(e, n);
}
function gm(e, n, t, r) {
  ((this.tag = e),
    (this.key = t),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ue(e, n, t, r) {
  return new gm(e, n, t, r);
}
function Ml(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function hm(e) {
  if (typeof e == "function") return Ml(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Za)) return 11;
    if (e === el) return 14;
  }
  return 2;
}
function Wn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ue(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Eo(e, n, t, r, o, a) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ml(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case pt:
        return et(t.children, o, a, n);
      case Xa:
        ((l = 8), (o |= 8));
        break;
      case Xi:
        return (
          (e = Ue(12, t, n, o | 2)),
          (e.elementType = Xi),
          (e.lanes = a),
          e
        );
      case Zi:
        return ((e = Ue(13, t, n, o)), (e.elementType = Zi), (e.lanes = a), e);
      case ea:
        return ((e = Ue(19, t, n, o)), (e.elementType = ea), (e.lanes = a), e);
      case Dc:
        return fi(t, o, a, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ac:
              l = 10;
              break e;
            case Bc:
              l = 9;
              break e;
            case Za:
              l = 11;
              break e;
            case el:
              l = 14;
              break e;
            case Cn:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ue(l, t, n, o)),
    (n.elementType = e),
    (n.type = r),
    (n.lanes = a),
    n
  );
}
function et(e, n, t, r) {
  return ((e = Ue(7, e, r, n)), (e.lanes = t), e);
}
function fi(e, n, t, r) {
  return (
    (e = Ue(22, e, r, n)),
    (e.elementType = Dc),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gi(e, n, t) {
  return ((e = Ue(6, e, null, n)), (e.lanes = t), e);
}
function Qi(e, n, t) {
  return (
    (n = Ue(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function ym(e, n, t, r, o) {
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
    (this.eventTimes = wi(0)),
    (this.expirationTimes = wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Tl(e, n, t, r, o, a, l, s, d) {
  return (
    (e = new ym(e, n, t, s, d)),
    n === 1 ? ((n = 1), a === !0 && (n |= 8)) : (n = 0),
    (a = Ue(3, null, null, n)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xl(a),
    e
  );
}
function xm(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ju(e) {
  if (!e) return Hn;
  e = e._reactInternals;
  e: {
    if (st(e) !== e || e.tag !== 1) throw Error(S(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (Be(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (Be(t)) return jd(e, t, n);
  }
  return n;
}
function bu(e, n, t, r, o, a, l, s, d) {
  return (
    (e = Tl(t, r, !0, e, o, a, l, s, d)),
    (e.context = ju(null)),
    (t = e.current),
    (r = Se()),
    (o = On(t)),
    (a = hn(r, o)),
    (a.callback = n ?? null),
    Ln(t, a, o),
    (e.current.lanes = o),
    Lr(e, o, r),
    De(e, r),
    e
  );
}
function pi(e, n, t, r) {
  var o = n.current,
    a = Se(),
    l = On(o);
  return (
    (t = ju(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = hn(a, l)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = Ln(o, n, l)),
    e !== null && (nn(e, o, l, a), go(e, o, l)),
    l
  );
}
function Yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ks(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Pl(e, n) {
  (Ks(e, n), (e = e.alternate) && Ks(e, n));
}
function vm() {
  return null;
}
var Fu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nl(e) {
  this._internalRoot = e;
}
mi.prototype.render = Nl.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(S(409));
  pi(e, n, null, null);
};
mi.prototype.unmount = Nl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    (at(function () {
      pi(null, e, null, null);
    }),
      (n[xn] = null));
  }
};
function mi(e) {
  this._internalRoot = e;
}
mi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = td();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < In.length && n !== 0 && n < In[t].priority; t++);
    (In.splice(t, 0, e), t === 0 && od(e));
  }
};
function Ll(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Js() {}
function km(e, n, t, r, o) {
  if (o) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var c = Yo(l);
        a.call(c);
      };
    }
    var l = bu(n, r, e, 0, null, !1, !1, "", Js);
    return (
      (e._reactRootContainer = l),
      (e[xn] = l.current),
      jr(e.nodeType === 8 ? e.parentNode : e),
      at(),
      l
    );
  }
  for (; (o = e.lastChild);) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Yo(d);
      s.call(c);
    };
  }
  var d = Tl(e, 0, !1, null, null, !1, !1, "", Js);
  return (
    (e._reactRootContainer = d),
    (e[xn] = d.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    at(function () {
      pi(n, d, t, r);
    }),
    d
  );
}
function hi(e, n, t, r, o) {
  var a = t._reactRootContainer;
  if (a) {
    var l = a;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var d = Yo(l);
        s.call(d);
      };
    }
    pi(n, l, e, o);
  } else l = km(t, n, e, o, r);
  return Yo(l);
}
ed = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = or(n.pendingLanes);
        t !== 0 &&
          (rl(n, t | 1), De(n, ie()), !(H & 6) && ((Ot = ie() + 500), Gn()));
      }
      break;
    case 13:
      (at(function () {
        var r = vn(e, 1);
        if (r !== null) {
          var o = Se();
          nn(r, e, 1, o);
        }
      }),
        Pl(e, 1));
  }
};
ol = function (e) {
  if (e.tag === 13) {
    var n = vn(e, 134217728);
    if (n !== null) {
      var t = Se();
      nn(n, e, 134217728, t);
    }
    Pl(e, 134217728);
  }
};
nd = function (e) {
  if (e.tag === 13) {
    var n = On(e),
      t = vn(e, n);
    if (t !== null) {
      var r = Se();
      nn(t, e, n, r);
    }
    Pl(e, n);
  }
};
td = function () {
  return G;
};
rd = function (e, n) {
  var t = G;
  try {
    return ((G = e), n());
  } finally {
    G = t;
  }
};
da = function (e, n, t) {
  switch (n) {
    case "input":
      if ((ra(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode;) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var o = ai(r);
            if (!o) throw Error(S(90));
            (Mc(r), ra(r, o));
          }
        }
      }
      break;
    case "textarea":
      Pc(e, t);
      break;
    case "select":
      ((n = t.value), n != null && Ct(e, !!t.multiple, n, !1));
  }
};
Hc = Bl;
Uc = at;
var Em = { usingClientEntryPoint: !1, Events: [Or, yt, ai, Wc, $c, Bl] },
  er = {
    findFiberByHostInstance: Kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Sm = {
    bundleType: er.bundleType,
    version: er.version,
    rendererPackageName: er.rendererPackageName,
    rendererConfig: er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Qc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: er.findFiberByHostInstance || vm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!so.isDisabled && so.supportsFiber)
    try {
      ((ti = so.inject(Sm)), (cn = so));
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Le.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ll(n)) throw Error(S(200));
  return xm(e, n, null, t);
};
Le.createRoot = function (e, n) {
  if (!Ll(e)) throw Error(S(299));
  var t = !1,
    r = "",
    o = Fu;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (n = Tl(e, 1, !1, null, null, t, !1, r, o)),
    (e[xn] = n.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    new Nl(n)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return ((e = Qc(n)), (e = e === null ? null : e.stateNode), e);
};
Le.flushSync = function (e) {
  return at(e);
};
Le.hydrate = function (e, n, t) {
  if (!gi(n)) throw Error(S(200));
  return hi(null, e, n, !0, t);
};
Le.hydrateRoot = function (e, n, t) {
  if (!Ll(e)) throw Error(S(405));
  var r = (t != null && t.hydratedSources) || null,
    o = !1,
    a = "",
    l = Fu;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (o = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (n = bu(n, null, e, 1, t ?? null, o, !1, a, l)),
    (e[xn] = n.current),
    jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((t = r[e]),
        (o = t._getVersion),
        (o = o(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o));
  return new mi(n);
};
Le.render = function (e, n, t) {
  if (!gi(n)) throw Error(S(200));
  return hi(null, e, n, !1, t);
};
Le.unmountComponentAtNode = function (e) {
  if (!gi(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (at(function () {
        hi(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[xn] = null));
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Bl;
Le.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!gi(t)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return hi(e, n, t, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Cu() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cu);
    } catch (e) {
      console.error(e);
    }
}
(Cu(), (Cc.exports = Le));
var jm = Cc.exports,
  wu,
  Xs = jm;
((wu = Xs.createRoot), Xs.hydrateRoot);
const bm = "modulepreload",
  Fm = function (e, n) {
    return new URL(e, n).href;
  },
  Zs = {},
  ec = function (n, t, r) {
    let o = Promise.resolve();
    if (t && t.length > 0) {
      const l = document.getElementsByTagName("link"),
        s = document.querySelector("meta[property=csp-nonce]"),
        d =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.allSettled(
        t.map((c) => {
          if (((c = Fm(c, r)), c in Zs)) return;
          Zs[c] = !0;
          const m = c.endsWith(".css"),
            u = m ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let x = l.length - 1; x >= 0; x--) {
              const E = l[x];
              if (E.href === c && (!m || E.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${c}"]${u}`)) return;
          const g = document.createElement("link");
          if (
            ((g.rel = m ? "stylesheet" : bm),
            m || (g.as = "script"),
            (g.crossOrigin = ""),
            (g.href = c),
            d && g.setAttribute("nonce", d),
            document.head.appendChild(g),
            m)
          )
            return new Promise((x, E) => {
              (g.addEventListener("load", x),
                g.addEventListener("error", () =>
                  E(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
      );
    }
    function a(l) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = l), window.dispatchEvent(s), !s.defaultPrevented))
        throw l;
    }
    return o.then((l) => {
      for (const s of l || []) s.status === "rejected" && a(s.reason);
      return n().catch(a);
    });
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Iu = (...e) =>
    e
      .filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wm = {
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
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = F.forwardRef(
  (
    {
      color: e = "currentColor",
      size: n = 24,
      strokeWidth: t = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: a,
      iconNode: l,
      ...s
    },
    d,
  ) =>
    F.createElement(
      "svg",
      {
        ref: d,
        ...wm,
        width: n,
        height: n,
        stroke: e,
        strokeWidth: r ? (Number(t) * 24) / Number(n) : t,
        className: Iu("lucide", o),
        ...s,
      },
      [
        ...l.map(([c, m]) => F.createElement(c, m)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = (e, n) => {
  const t = F.forwardRef(({ className: r, ...o }, a) =>
    F.createElement(Im, {
      ref: a,
      iconNode: n,
      className: Iu(`lucide-${Cm(e)}`, r),
      ...o,
    }),
  );
  return ((t.displayName = `${e}`), t);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = _("Accessibility", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _l = _("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = _("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dr = _("BedDouble", [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
  ["path", { d: "M12 4v6", key: "1dcgq2" }],
  ["path", { d: "M2 18h20", key: "ajqnye" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ol = _("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bt = _("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nc = _("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = _("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dm = _("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zu = _("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jn = _("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = _("ClipboardList", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ko = _("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = _("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = _("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jo = _("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tc = _("HeartHandshake", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "4oyue0",
    },
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = _("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xo = _("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ft = _("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = _("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = _("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = _("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = _("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rc = _("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Du = _("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oc = _("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ic = _("PackagePlus", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  ["path", { d: "M19 13v6", key: "85cyf1" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h",
    },
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ac = _("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _m = _("PhoneCall", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = _("Pill", [
  [
    "path",
    {
      d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
      key: "wa1lgi",
    },
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lc = _("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = _("ScanBarcode", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 7v10", key: "23sfjj" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M17 7v10", key: "578dap" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ru = _("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mu = _("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wl = _("ShieldAlert", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $l = _("Siren", [
  ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
  [
    "path",
    {
      d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
      key: "1b4s83",
    },
  ],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yi = _("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $r = _("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = _("Stethoscope", [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  [
    "path",
    {
      d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      key: "rb5t3r",
    },
  ],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xi = _("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wt = _("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const En = _("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $m = _("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  ee = {
    bgApp: "radial-gradient(1100px 560px at 88% -8%, rgba(99,102,241,.30), transparent 60%), radial-gradient(900px 520px at -8% 28%, rgba(34,211,238,.16), transparent 58%), linear-gradient(180deg, #060A1F 0%, #0A1030 55%, #070B22 100%)",
    headerGrad: "linear-gradient(100deg, rgba(8,13,38,.88) 0%, rgba(22,16,60,.88) 100%)",
    navActiveGrad: "linear-gradient(120deg, #2563EB 0%, #7C3AED 100%)",
    ctaGrad: "linear-gradient(120deg, #2563EB 0%, #7C3AED 100%)",
    ctaCoralGrad: "linear-gradient(120deg, #F43F5E 0%, #FB7185 100%)",
    logoGrad: "linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)",
  },  Ie = {
    nombre: "Hospital Nacional Arzobispo Loayza",
    direccion: "Av. Alfonso Ugarte 848, Cercado de Lima",
    categoria: "III-1 · MINSA",
    fundado: 1549,
    director: "Dr. Eduardo Franklin Yong Motta — Director General",
  },
  Hm = [
    {
      nombre: "Paracetamol 500mg TAB",
      cat: "Analgésico",
      stock: 8,
      estado: "crítico",
    },
    {
      nombre: "Paracetamol 120mg/5mL LIQ ORAL",
      cat: "Analgésico",
      stock: 34,
      estado: "bajo",
    },
    {
      nombre: "Ácido acetilsalicílico 500mg TAB",
      cat: "Analgésico",
      stock: 61,
      estado: "normal",
    },
    {
      nombre: "Tramadol clorhidrato 50mg TAB",
      cat: "Analgésico opioide",
      stock: 22,
      estado: "bajo",
    },
    {
      nombre: "Morfina clorhidrato 10mg/mL INY 1mL",
      cat: "Analgésico opioide",
      stock: 15,
      estado: "atención",
    },
    {
      nombre: "Metamizol sódico (Dipirona) 500mg/mL INY 2mL",
      cat: "Analgésico",
      stock: 47,
      estado: "normal",
    },
    {
      nombre: "Amoxicilina 500mg TAB",
      cat: "Antibiótico",
      stock: 72,
      estado: "normal",
    },
    {
      nombre: "Ceftriaxona (sal sódica) 1g INY",
      cat: "Antibiótico",
      stock: 19,
      estado: "bajo",
    },
    {
      nombre: "Ciprofloxacino 500mg TAB",
      cat: "Antibiótico",
      stock: 55,
      estado: "normal",
    },
    {
      nombre: "Azitromicina 500mg TAB",
      cat: "Antibiótico",
      stock: 12,
      estado: "crítico",
    },
    {
      nombre: "Vancomicina (clorhidrato) 500mg INY",
      cat: "Antibiótico",
      stock: 9,
      estado: "crítico",
    },
    {
      nombre: "Meropenem 500mg INY",
      cat: "Antibiótico",
      stock: 26,
      estado: "bajo",
    },
    {
      nombre: "Losartán potásico 50mg TAB",
      cat: "Antihipertensivo",
      stock: 88,
      estado: "normal",
    },
    {
      nombre: "Enalapril maleato 20mg TAB",
      cat: "Antihipertensivo",
      stock: 66,
      estado: "normal",
    },
    {
      nombre: "Amlodipino (besilato) 10mg TAB",
      cat: "Antihipertensivo",
      stock: 70,
      estado: "normal",
    },
    {
      nombre: "Furosemida 40mg TAB",
      cat: "Diurético",
      stock: 41,
      estado: "normal",
    },
    {
      nombre: "Insulina isofana humana (NPH) 100UI/mL INY 10mL",
      cat: "Metabólico",
      stock: 17,
      estado: "atención",
    },
    {
      nombre: "Metformina clorhidrato 850mg TAB",
      cat: "Metabólico",
      stock: 58,
      estado: "normal",
    },
    {
      nombre: "Dexametasona fosfato 4mg INY",
      cat: "Corticoide",
      stock: 30,
      estado: "normal",
    },
    {
      nombre: "Hidrocortisona (succinato sódico) 100mg INY",
      cat: "Corticoide",
      stock: 21,
      estado: "bajo",
    },
    {
      nombre: "Diazepam 10mg TAB",
      cat: "Sistema nervioso",
      stock: 44,
      estado: "normal",
    },
    {
      nombre: "Midazolam (clorhidrato) 5mg/mL INY 10mL",
      cat: "Sistema nervioso",
      stock: 13,
      estado: "atención",
    },
    {
      nombre: "Fenitoína sódica 100mg TAB",
      cat: "Sistema nervioso",
      stock: 39,
      estado: "normal",
    },
    {
      nombre: "Haloperidol 5mg TAB",
      cat: "Sistema nervioso",
      stock: 27,
      estado: "normal",
    },
    {
      nombre: "Sodio cloruro 0.9% INY 1L",
      cat: "Soluciones IV",
      stock: 95,
      estado: "normal",
    },
    {
      nombre: "Glucosa en agua 33.3% INY 20mL",
      cat: "Soluciones IV",
      stock: 52,
      estado: "normal",
    },
    {
      nombre: "Solución polielectrolítica INY 1L",
      cat: "Soluciones IV",
      stock: 6,
      estado: "crítico",
    },
    {
      nombre: "Ondansetrón (clorhidrato) 8mg TAB",
      cat: "Antiemético",
      stock: 33,
      estado: "normal",
    },
    {
      nombre: "Omeprazol (sal sódica) 40mg INY",
      cat: "Gastrointestinal",
      stock: 24,
      estado: "bajo",
    },
    {
      nombre: "Ranitidina (clorhidrato) 150mg TAB",
      cat: "Gastrointestinal",
      stock: 49,
      estado: "normal",
    },
    {
      nombre: "Epinefrina (clorhidrato) 1mg/mL INY 1mL",
      cat: "Emergencia",
      stock: 11,
      estado: "crítico",
    },
    {
      nombre: "Atropina sulfato 1mg/mL INY",
      cat: "Emergencia",
      stock: 20,
      estado: "bajo",
    },
    {
      nombre: "Norepinefrina (tartrato ácido) 1mg/mL INY 4mL",
      cat: "Emergencia",
      stock: 14,
      estado: "atención",
    },
    {
      nombre: "Bencilpenicilina benzatínica 2 400 000UI INY",
      cat: "Antibiótico",
      stock: 36,
      estado: "normal",
    },
    {
      nombre: "Salbutamol (sulfato) SOL NBZ 5mg/mL",
      cat: "Respiratorio",
      stock: 29,
      estado: "normal",
    },
    {
      nombre: "Propofol 1% INY 20mL",
      cat: "Anestésico",
      stock: 18,
      estado: "atención",
    },
    {
      nombre: "Bupivacaína clorhidrato + preservante 0.005 INY 20mL",
      cat: "Anestésico",
      stock: 25,
      estado: "normal",
    },
    {
      nombre: "Sulfadiazina de plata 1% CRM TOP 400-500g",
      cat: "Dermatológico",
      stock: 10,
      estado: "crítico",
    },
    {
      nombre: "Heparina sódica 5 000UI/mL INY 5mL",
      cat: "Anticoagulante",
      stock: 31,
      estado: "normal",
    },
    {
      nombre: "Warfarina sódica 5mg TAB",
      cat: "Anticoagulante",
      stock: 45,
      estado: "normal",
    },
  ],
  Mr = 15,
  Dt = 40;
function Zo(e) {
  return e <= Mr ? "crítico" : e <= Dt ? "bajo" : "normal";
}
const ke = {
  crítico: {
    color: "#FF5D7A",
    bg: "rgba(255,93,122,.14)",
    label: "Crítico",
    sub: "Pocas unidades",
    argb: "FFE8553D",
    fill: "FFFDEDEA",
  },
  bajo: {
    color: "#FFB547",
    bg: "rgba(255,181,71,.14)",
    label: "Por acabarse",
    sub: "Stock bajo",
    argb: "FFC98A1B",
    fill: "FFFFF3CD",
  },
  normal: {
    color: "#2EE6A0",
    bg: "rgba(46,230,160,.13)",
    label: "Suficiente",
    sub: "Stock suficiente",
    argb: "FF2F9E6E",
    fill: "FFE0F5EA",
  },
};
function Um(e) {
  let n = 0;
  for (let t = 0; t < 12; t++) n += Number(e[t]) * (t % 2 === 0 ? 1 : 3);
  return String((10 - (n % 10)) % 10);
}
const sc = (e) => /^\d{13}$/.test(e),
  Vm = Hm.map((e, n) => {
    const t = "775" + String(1e6 + n * 7919).padStart(9, "0");
    return { ...e, codigo: t + Um(t), estado: Zo(e.stock) };
  }),
  Gm = {
    Analgésico: "Almacén Central — Sección Analgésicos",
    "Analgésico opioide": "Almacén Central — Sección Controlados",
    Antibiótico: "Almacén Central — Sección Antibióticos",
    Antihipertensivo: "Almacén Central — Sección Cardiovascular",
    Diurético: "Almacén Central — Sección Cardiovascular",
    Metabólico: "Almacén Central — Sección Metabólico",
    Corticoide: "Almacén Central — Sección Corticoides",
    "Sistema nervioso": "Almacén Central — Sección Neurología",
    "Soluciones IV": "Almacén Central — Sección Soluciones",
    Antiemético: "Almacén Central — Sección Gastrointestinal",
    Gastrointestinal: "Almacén Central — Sección Gastrointestinal",
    Emergencia: "Farmacia de Emergencias",
    Respiratorio: "Almacén Central — Sección Respiratorio",
    Anestésico: "Farmacia de Sala de Operaciones",
    Dermatológico: "Almacén Central — Sección Dermatológico",
    Anticoagulante: "Almacén Central — Sección Hematología",
  };
function Tu(e) {
  return Gm[e] || "Almacén Central";
}
function Qm(e) {
  const n = [],
    t = new Date();
  for (let r = e - 1; r >= 0; r--) {
    const o = new Date(t);
    (o.setDate(t.getDate() - r), n.push(o));
  }
  return n;
}
const Pu = Qm(14),
  ei = (e) =>
    e.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit" }),
  qm = (e) => e.toLocaleDateString("es-PE", { weekday: "short" });
function Ym(e) {
  return Pu.map((n, t) => {
    const r = e[t] || "-",
      o =
        r === "T"
          ? "a-tiempo"
          : r === "R"
            ? "tardanza"
            : r === "F"
              ? "falta"
              : "libre",
      a =
        o === "a-tiempo"
          ? "07:00"
          : o === "tardanza"
            ? `07:${18 + (t % 4) * 5}`
            : null;
    return { fecha: n, estado: o, hora: a };
  });
}
function Ha(e) {
  const n = Math.sin(e * 12.9898) * 43758.5453;
  return n - Math.floor(n);
}
function Km(e, n) {
  return Pu.map((t, r) => {
    const o = t.getDay();
    if (!n && (o === 0 || o === 6)) return "-";
    const a = Ha(e * 7.13 + r * 3.71);
    return a < 0.06 ? "F" : a < 0.18 ? "R" : "T";
  });
}
const Jm = new Set([
    "Emergencia y Cuidados Críticos",
    "Cuidados Intensivos y Cuidados Intermedios",
    "Reanimación",
  ]),
  cc = [
    "Lunes a Viernes · 07:00–13:00",
    "Lunes a Viernes · 08:00–14:00",
    "Lunes a Viernes · 14:00–20:00",
  ];
function Xm(e, n, t) {
  const r = Jm.has(t),
    o = r ? "Guardia rotativa · 24 horas" : cc[e % cc.length];
  return {
    id: e,
    nombre: n,
    esp: t,
    turno: o,
    guardia: r,
    asistencia: Ym(Km(e, r)),
  };
}
const Zm = [
    [1, "Aldo Belly Vivar Mendoza", "Medicina Interna 8-I"],
    [2, "Alexander Adonias Espinoza Vargas", "Cirugía 6-III"],
    [3, "Ana María Del Carmen Paredes Pérez", "Ecografía"],
    [
      4,
      "Carlos Homero Otiniano Alvarado",
      "Cirugía General, Aparato Digestivo y Pared Abdominal",
    ],
    [5, "Daniel Andrés Caceres Alpaca", "Medicina Interna 1-II"],
    [6, "Eduardo Demetrio Matos Prado", "Infectología"],
    [7, "Eduardo Franklin Yong Motta", "Dirección General"],
    [8, "Federico Efrain Elguera Falcón", "Medicina Interna 4-II"],
    [9, "Freddy Edmundo García Ramos", "Endocrinología"],
    [10, "Freddy Rafael Piaggio Fernandez", "Ortopedia y Traumatología"],
    [11, "Gerber Hernan Flores Ccosi", "Urología"],
    [12, "Gilberto Fernando Torres Vega", "Cardiología y Cuidados Coronarios"],
    [13, "Graciela Celina Priale Priale", "Hematología"],
    [14, "Helmund Mariano Manza Diaz", "Otorrinolaringología"],
    [15, "Iván Bernuy Rodríguez", "Emergencia y Cuidados Críticos"],
    [16, "Jorge Aquiles Orna Costa", "Oftalmología"],
    [17, "Jorge Aysanoa Ballester", "Cirugía Vascular Periférico y Angiología"],
    [18, "Jorge Luis Garavito Rentería", "Gastroenterología"],
    [19, "Juan Antonio Allemant Mori", "Reproducción Humana"],
    [20, "Juan Carlos Samame Perez Vargas", "Oncohematología"],
    [21, "Juan Ismael Villarreal Menchola", "Medicina Interna 3-I"],
    [22, "Juan Marcos Villón Almendras", "Geriatría"],
    [23, "José Alberto Rojas Jaimes", "Ginecología y Obstetricia"],
    [24, "José Antonio Novoa Pérez", "Cirugía de Cabeza y Cuello"],
    [25, "José Ignacio Vladimiro Caballero López", "Medicina Interna 4-I"],
    [
      26,
      "Julio Cesar Ricardo Castillo Garagate",
      "Cirugía Torácica y Cardiovascular",
    ],
    [27, "Leónidas Chang Carrillo Ñañez", "Medicina Interna 2-I"],
    [28, "Luis Alberto Maya Pérez", "Medicina Interna"],
    [29, "Luis Sandro Florian Tutaya", "Pediatría"],
    [30, "Lily Nera Asencios Trujillo", "Estomatología"],
    [
      31,
      "Marco Antonio Limache Tueros",
      "Consulta Externa y Hospitalización / Salud Mental",
    ],
    [32, "Mario Daniel Danilla Dávila", "Neumología"],
    [33, "Mario Roberto Cavero Cueva", "Radiología"],
    [34, "Marsi Mónica Larragán Rodríguez", "Pediatría"],
    [35, "Martin Diego Sanchez Sanguinetti", "Neurología"],
    [36, "Mijahil Pavel Cornejo Ortega", "Inmunoreumatología"],
    [37, "Oswaldo Ángelo Granados Huaynates", "Reanimación"],
    [38, "Pedro Cesar Ciudad Cruz", "Cirugía Plástica y Quemados"],
    [39, "Pedro Ernesto Castillo Chirinos", "Especialidades Quirúrgicas"],
    [
      40,
      "Percy Genaro Salas Ponce",
      "Patología Clínica y Banco de Sangre / Bioquímica",
    ],
    [41, "Roberto Eduardo Avila Matos", "Ginecología"],
    [42, "Ronald Arnaldo Ore De La Cruz", "Cirugía 6-I"],
    [
      43,
      "Ronny Mitchel Mercado Lopez",
      "Cuidados Intensivos y Cuidados Intermedios",
    ],
    [44, "Silvia Patricia Martina Zamudio Romero", "Medicina Interna 3-II"],
    [45, "Víctor Alfonso Valencia Caballero", "Medicina Interna 1-I"],
    [46, "Víctor Vladimir Torres Pérez", "Neurocirugía"],
    [47, "Wenceslao Javier Castillo Farneschi", "Dermatología"],
    [48, "Zandra Judith Moncada Vilela", "Medicina Interna 2-II"],
  ],
  V = Zm.map(([e, n, t]) => Xm(e, n, t)),
  Hr = [
    {
      area: "Dirección y Gestión",
      color: "#818CF8",
      especialidades: ["Dirección General"],
    },
    {
      area: "Medicina Interna",
      color: "#38BDF8",
      especialidades: [
        "Medicina Interna",
        "Medicina Interna 1-I",
        "Medicina Interna 1-II",
        "Medicina Interna 2-I",
        "Medicina Interna 2-II",
        "Medicina Interna 3-I",
        "Medicina Interna 3-II",
        "Medicina Interna 4-I",
        "Medicina Interna 4-II",
        "Medicina Interna 8-I",
      ],
    },
    {
      area: "Cirugía y Especialidades Quirúrgicas",
      color: "#5CF2B0",
      especialidades: [
        "Cirugía 6-I",
        "Cirugía 6-III",
        "Cirugía General, Aparato Digestivo y Pared Abdominal",
        "Cirugía Vascular Periférico y Angiología",
        "Cirugía de Cabeza y Cuello",
        "Cirugía Torácica y Cardiovascular",
        "Cirugía Plástica y Quemados",
        "Especialidades Quirúrgicas",
        "Neurocirugía",
        "Ortopedia y Traumatología",
      ],
    },
    {
      area: "Emergencia y Cuidados Críticos",
      color: "#FF5D7A",
      especialidades: [
        "Emergencia y Cuidados Críticos",
        "Cuidados Intensivos y Cuidados Intermedios",
        "Reanimación",
      ],
    },
    {
      area: "Especialidades Médicas",
      color: "#2EE6A0",
      especialidades: [
        "Cardiología y Cuidados Coronarios",
        "Neumología",
        "Gastroenterología",
        "Endocrinología",
        "Neurología",
        "Dermatología",
        "Hematología",
        "Oncohematología",
        "Infectología",
        "Inmunoreumatología",
        "Geriatría",
        "Urología",
      ],
    },
    {
      area: "Cabeza, Cuello y Sentidos",
      color: "#FFB547",
      especialidades: ["Otorrinolaringología", "Oftalmología", "Estomatología"],
    },
    {
      area: "Materno Infantil",
      color: "#F472B6",
      especialidades: [
        "Ginecología y Obstetricia",
        "Ginecología",
        "Reproducción Humana",
        "Pediatría",
      ],
    },
    {
      area: "Diagnóstico y Apoyo Clínico",
      color: "#9AA9D0",
      especialidades: [
        "Ecografía",
        "Radiología",
        "Patología Clínica y Banco de Sangre / Bioquímica",
      ],
    },
    {
      area: "Salud Mental",
      color: "#A78BFA",
      especialidades: ["Consulta Externa y Hospitalización / Salud Mental"],
    },
  ],
  Nu = {};
Hr.forEach((e) =>
  e.especialidades.forEach((n) => {
    Nu[n] = e.area;
  }),
);
function Lu(e) {
  return Nu[e] || "Otras especialidades";
}
const e1 = Object.fromEntries(Hr.map((e) => [e.area, e.color]));
function Tr(e) {
  return e1[e] || "#9AA9D0";
}
V.forEach((e) => {
  e.area = Lu(e.esp);
});
function Vt(e) {
  const n = Hr.map((r) => r.area).concat("Otras especialidades"),
    t = new Map(n.map((r) => [r, []]));
  return (
    e.forEach((r) => {
      (t.has(r.area) || t.set(r.area, []), t.get(r.area).push(r));
    }),
    n
      .map((r) => ({ area: r, color: Tr(r), doctores: t.get(r) || [] }))
      .filter((r) => r.doctores.length > 0)
  );
}
const nt = 2;
function n1(e) {
  const n = e.match(/(\d{2}:\d{2})/);
  return n ? n[1] : "07:00";
}
const _u = Object.fromEntries(V.map((e) => [e.id, n1(e.turno)]));
function dc(e) {
  const [n, t] = e.split(":").map(Number);
  return n * 60 + t;
}
function t1(e, n) {
  return dc(e) > dc(n);
}
const r1 = [
  {
    id: "op-1",
    sev: "alta",
    area: "Cirugía",
    msg: "Equipo de monitoreo #EQ-14 reporta falla intermitente",
    time: "Hace 18 min",
  },
  {
    id: "op-2",
    sev: "media",
    area: "Farmacia",
    msg: "Azitromicina 500mg: stock crítico (12%)",
    time: "Hace 12 min",
  },
  {
    id: "op-3",
    sev: "baja",
    area: "Consulta externa",
    msg: "3 citas sin confirmar para mañana",
    time: "Hace 26 min",
  },
  {
    id: "op-4",
    sev: "media",
    area: "Hospitalización",
    msg: "Cama 214 pendiente de limpieza hace 40 min",
    time: "Hace 40 min",
  },
];
function o1(e = 3) {
  const n = [];
  return (
    V.forEach((t) => {
      t.asistencia.slice(-e).forEach((o) => {
        (o.estado === "falta" || o.estado === "tardanza") &&
          n.push({
            id: `doc-${t.id}-${ei(o.fecha)}-${o.estado}`,
            sev: o.estado === "falta" ? "alta" : "media",
            area: t.esp,
            msg: `${t.nombre} — ${o.estado === "falta" ? "no asistió" : "llegó tarde"} el ${ei(o.fecha)}${o.hora ? ` (${o.hora})` : ""}`,
            time:
              o.estado === "falta"
                ? "Falta registrada · sujeto a sanción"
                : "Tardanza registrada",
          });
      });
    }),
    n
  );
}
const Pr = [
  { area: "Emergencias", total: 14, libresInicial: 2 },
  { area: "Hospitalización A", total: 30, libresInicial: 6 },
  { area: "Hospitalización B", total: 30, libresInicial: 11 },
  { area: "UCI", total: 10, libresInicial: 1 },
  { area: "Pediatría", total: 16, libresInicial: 5 },
];
function i1() {
  var n, t;
  const e = {};
  return (
    Pr.forEach((r) => {
      e[r.area] = Array.from({ length: r.total }, (o, a) => ({
        ocupada: a < r.total - r.libresInicial,
        dni: null,
        nombre: null,
      }));
    }),
    (n = e["Hospitalización A"]) != null &&
      n[0] &&
      (e["Hospitalización A"][0] = {
        ocupada: !0,
        dni: "70844839",
        nombre: "Abel Andrés Zegarra Villanueva",
      }),
    (t = e.UCI) != null &&
      t[0] &&
      (e.UCI[0] = {
        ocupada: !0,
        dni: "45119203",
        nombre: "Rosa Elena Quinteros Palacios",
      }),
    e
  );
}
const Dn = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
  a1 = new Set([
    "Dirección General",
    "Ecografía",
    "Radiología",
    "Patología Clínica y Banco de Sangre / Bioquímica",
    "Emergencia y Cuidados Críticos",
    "Reanimación",
    "Cuidados Intensivos y Cuidados Intermedios",
  ]),
  vi = V.filter((e) => !a1.has(e.esp)).map((e) => e.id),
  l1 = Array.from(
    new Set(V.filter((e) => vi.includes(e.id)).map((e) => e.esp)),
  ).sort((e, n) => e.localeCompare(n, "es"));
function Rt() {
  const e = new Date();
  return (e.setDate(e.getDate() + 1), e.toISOString().slice(0, 10));
}
const s1 = [
  {
    docId: 10,
    slot: 0,
    nombre: "Abel Andrés Zegarra Villanueva",
    dni: "70844839",
    celular: "987654321",
  },
  {
    docId: 23,
    slot: 2,
    nombre: "Luisa Villanueva Vásquez",
    dni: "10287579",
    celular: "",
  },
  {
    docId: 29,
    slot: 1,
    nombre: "Billy André Garro Flores",
    dni: "10288161",
    celular: "",
  },
  {
    docId: 4,
    slot: 4,
    nombre: "Rosa Elena Quinteros Palacios",
    dni: "45119203",
    celular: "",
  },
  {
    docId: 9,
    slot: 3,
    nombre: "Jorge Luis Prado Salcedo",
    dni: "08765432",
    celular: "",
  },
];
function c1() {
  const e = {};
  return (
    vi.forEach((n) => {
      e[n] = Array.from({ length: Dn.length }, () => null);
    }),
    s1.forEach((n) => {
      e[n.docId][n.slot] = {
        nombre: n.nombre,
        dni: n.dni,
        celular: n.celular,
        fecha: Rt(),
        nueva: !1,
      };
    }),
    e
  );
}
const Qn = [
    { area: "Admisión", tiempoMin: 5 },
    { area: "Seguros / SOAT", tiempoMin: 8 },
    { area: "Historia Clínica", tiempoMin: 6 },
    { area: "Farmacia", tiempoMin: 4 },
  ],
  d1 = {
    alta: { bg: "rgba(255,93,122,.14)", fg: "#FF7A93", dot: "#FF5D7A", label: "Alta" },
    media: { bg: "rgba(255,181,71,.14)", fg: "#FFC857", dot: "#FFB547", label: "Media" },
    baja: { bg: "rgba(46,230,160,.13)", fg: "#5CF2B0", dot: "#2EE6A0", label: "Baja" },
  },
  Ua = {
    "a-tiempo": { color: "#2EE6A0", bg: "rgba(46,230,160,.13)", label: "A tiempo" },
    tardanza: { color: "#FFB547", bg: "rgba(255,181,71,.14)", label: "Tardanza" },
    falta: { color: "#FF5D7A", bg: "rgba(255,93,122,.14)", label: "Falta" },
    libre: { color: "#5E6E9A", bg: "rgba(255,255,255,.06)", label: "Libre / no le tocaba" },
  },
  So = 60,
  u1 = `
:root { color-scheme: dark; }
html, body { background: #060A1F; color: #E8EEFF; }
body::before { content: ""; position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(120,140,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,140,255,.07) 1px, transparent 1px);
  background-size: 48px 48px; -webkit-mask-image: radial-gradient(ellipse at 50% 15%, #000 25%, transparent 78%); mask-image: radial-gradient(ellipse at 50% 15%, #000 25%, transparent 78%); }
body::after { content: ""; position: fixed; width: 560px; height: 560px; right: -160px; top: -160px; border-radius: 50%; z-index: 0; pointer-events: none;
  background: radial-gradient(circle, rgba(139,92,246,.38), transparent 66%); filter: blur(30px); animation: afy-float 16s ease-in-out infinite; }
#root { position: relative; z-index: 1; }
@keyframes afy-float { 50% { transform: translate(-60px, 70px) scale(1.1); } }
@keyframes afy-pulse { 0%,100% { opacity: .45; transform: scale(.85); } 50% { opacity: 1; transform: scale(1.15); } }
@keyframes afy-spin { to { transform: rotate(360deg); } }
@keyframes afy-blink { 50% { opacity: 0; } }
@keyframes afy-shine { to { background-position: 200% center; } }
@keyframes afy-bob { 50% { transform: translateY(-8px); } }
::selection { background: rgba(99,102,241,.55); color: #fff; }
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-thumb { background: linear-gradient(#3B82F6, #8B5CF6); border-radius: 8px; }
::-webkit-scrollbar-track { background: rgba(255,255,255,.03); }
input:not([type=checkbox]):not([type=radio]):not([type=file]):not([type=range]), select, textarea { background: rgba(8,14,38,.78); color: #E8EEFF; }
input::placeholder, textarea::placeholder { color: #6B7BA6; }
input:focus, select:focus, textarea:focus { outline: none; box-shadow: 0 0 0 2px rgba(56,189,248,.45), 0 0 20px rgba(99,102,241,.35); }
select option { background: #0B1230; color: #E8EEFF; }
button { transition: transform .15s ease, box-shadow .2s ease, filter .2s ease; }
button:not(:disabled):hover { filter: brightness(1.14); }
.afinty-eyebrow { font-family: 'Space Mono', 'IBM Plex Mono', monospace; font-size: 11.5px; color: #38BDF8; text-transform: uppercase; letter-spacing: 1.6px; margin-bottom: 5px; text-shadow: 0 0 14px rgba(56,189,248,.55); }
.afinty-eyebrow::after { content: "_"; margin-left: 2px; animation: afy-blink 1.1s steps(1) infinite; }
.afinty-h2 { background: linear-gradient(95deg, #FFFFFF 0%, #B8C9FF 55%, #38BDF8 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }

/* ---------- HERO ---------- */
.afy-hero { position: relative; display: grid; grid-template-columns: 1.15fr 1fr; gap: 28px; align-items: center; padding: 34px; margin-top: 22px; border-radius: 28px; overflow: hidden;
  background: linear-gradient(135deg, rgba(14,24,64,.78), rgba(32,16,70,.6)); border: 1px solid rgba(130,150,255,.28);
  box-shadow: 0 30px 80px -30px rgba(79,70,229,.6), inset 0 0 0 1px rgba(255,255,255,.04); backdrop-filter: blur(14px); }
.afy-hero::before { content: ""; position: absolute; width: 420px; height: 420px; left: -120px; bottom: -200px; border-radius: 50%; background: radial-gradient(circle, rgba(34,211,238,.28), transparent 65%); pointer-events: none; }
.afy-pill { display: inline-flex; align-items: center; gap: 9px; font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 1.4px; color: #7DD3FC; padding: 7px 13px; border-radius: 999px; border: 1px solid rgba(56,189,248,.4); background: rgba(56,189,248,.08); }
.afy-dot { width: 8px; height: 8px; border-radius: 50%; background: #38BDF8; box-shadow: 0 0 12px #38BDF8; animation: afy-pulse 1.8s ease-in-out infinite; display: inline-block; }
.afy-h1 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(34px, 5vw, 62px); line-height: 1.02; margin: 18px 0 14px; letter-spacing: -1px; color: #fff; text-transform: uppercase; }
.afy-h1-thin { font-weight: 400; letter-spacing: 3px; color: #B5C3EE; font-size: .62em; }
.afy-h1-glow { background: linear-gradient(95deg, #38BDF8, #A78BFA, #F472B6, #38BDF8); background-size: 250% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: afy-shine 6s linear infinite; }
.afy-lead { font-size: 15px; line-height: 1.65; color: #AEBBDF; max-width: 520px; margin: 0 0 22px; }
.afy-lead b { color: #E8EEFF; }
.afy-btn-main { display: inline-flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; border: none; border-radius: 12px; padding: 12px 20px; font: 600 13.5px Inter, sans-serif; color: #fff; background: linear-gradient(120deg, #2563EB, #7C3AED); box-shadow: 0 10px 30px -10px rgba(99,102,241,.9), inset 0 1px 0 rgba(255,255,255,.25); }
.afy-btn-main:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 16px 36px -10px rgba(124,58,237,1); }
.afy-btn-main:disabled { opacity: .6; cursor: default; }
.afy-btn-ghost { cursor: pointer; border-radius: 12px; padding: 11px 18px; font: 500 13.5px Inter, sans-serif; color: #D5DEFF; background: rgba(255,255,255,.04); border: 1px solid rgba(130,150,255,.35); }
.afy-btn-ghost:hover { background: rgba(130,150,255,.14); transform: translateY(-2px); }
.afy-hero-media { position: relative; }
.afy-media-frame { position: relative; border-radius: 22px; overflow: hidden; aspect-ratio: 4 / 3.3; border: 1px solid rgba(130,150,255,.4); box-shadow: 0 0 60px -12px rgba(99,102,241,.8); }
.afy-media-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; display: block; filter: saturate(.9) contrast(1.05); }
.afy-media-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(6,10,31,0) 45%, rgba(6,10,31,.8)), linear-gradient(120deg, rgba(37,99,235,.35), rgba(124,58,237,.25)); mix-blend-mode: normal; }
.afy-float-chip { position: absolute; left: -14px; bottom: 26px; display: flex; align-items: center; gap: 9px; font: 700 11px 'Space Mono', monospace; letter-spacing: 1.2px; color: #E8EEFF; padding: 11px 15px; border-radius: 14px; background: rgba(8,14,40,.88); border: 1px solid rgba(130,150,255,.35); backdrop-filter: blur(10px); animation: afy-bob 5s ease-in-out infinite; }
.afy-ring { position: absolute; right: -10px; top: -14px; width: 86px; height: 86px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font: 700 10px 'Space Mono', monospace; letter-spacing: 1px; color: #C4B5FD; background: rgba(8,14,40,.85); }
.afy-ring::before { content: ""; position: absolute; inset: 0; border-radius: 50%; padding: 2px; background: conic-gradient(from 0deg, #38BDF8, #A78BFA, transparent 70%); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: afy-spin 4s linear infinite; }
.afy-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 16px; }
.afy-stat { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border-radius: 18px; background: rgba(14,22,56,.62); border: 1px solid rgba(130,150,255,.2); backdrop-filter: blur(12px); }
.afy-stat-ico { width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid; background: rgba(255,255,255,.03); flex-shrink: 0; }
.afy-stat-num { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 30px; line-height: 1; text-shadow: 0 0 22px currentColor; }
.afy-stat-lbl { font: 400 10.5px 'Space Mono', monospace; letter-spacing: 1.2px; color: #8EA0CC; margin-top: 6px; }

/* ---------- IA ---------- */
.afy-card { background: rgba(14,22,56,.66); border: 1px solid rgba(130,150,255,.22); border-radius: 18px; padding: 18px 20px; backdrop-filter: blur(14px); box-shadow: 0 18px 50px -28px rgba(0,0,0,.8); }
.afy-mini { font: 400 10.5px 'Space Mono', monospace; letter-spacing: 1.4px; color: #7DD3FC; margin-bottom: 5px; }
.afy-ia-bar { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; border-color: rgba(167,139,250,.4); background: linear-gradient(120deg, rgba(37,99,235,.18), rgba(124,58,237,.2)); }
.afy-orb { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: radial-gradient(circle at 30% 25%, #67E8F9, #6366F1 55%, #7C3AED); box-shadow: 0 0 28px rgba(139,92,246,.9), inset 0 0 12px rgba(255,255,255,.35); animation: afy-pulse 2.6s ease-in-out infinite; }
.afy-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; }
.afy-switch input { position: absolute; opacity: 0; pointer-events: none; }
.afy-switch-track { width: 46px; height: 26px; border-radius: 999px; background: rgba(255,255,255,.12); position: relative; transition: background .2s; }
.afy-switch-knob { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform .2s; }
.afy-switch input:checked + .afy-switch-track { background: linear-gradient(120deg, #22D3EE, #8B5CF6); box-shadow: 0 0 16px rgba(34,211,238,.6); }
.afy-switch input:checked + .afy-switch-track .afy-switch-knob { transform: translateX(20px); }
.afy-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin: 4px 0 16px; }
.afy-tab { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; border-radius: 12px; padding: 10px 16px; font: 500 13px Inter, sans-serif; color: #AEBBDF; background: rgba(255,255,255,.04); border: 1px solid rgba(130,150,255,.22); }
.afy-tab-on { color: #fff; background: linear-gradient(120deg, rgba(37,99,235,.85), rgba(124,58,237,.85)); border-color: transparent; box-shadow: 0 0 26px -6px rgba(99,102,241,.9); }
.afy-grid-doc { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 14px; margin-top: 14px; }
.afy-doc { transition: box-shadow .3s, border-color .3s; }
.afy-avatar { width: 38px; height: 38px; border-radius: 50%; border: 2px solid; display: flex; align-items: center; justify-content: center; color: #E8EEFF; background: rgba(255,255,255,.05); flex-shrink: 0; }
.afy-tag { font: 700 10px 'Space Mono', monospace; letter-spacing: .8px; padding: 4px 9px; border-radius: 999px; border: 1px solid; white-space: nowrap; }
.afy-step { font-size: 12px; margin-top: 8px; line-height: 1.45; }
.afy-propuesta { margin-top: 10px; padding: 11px 12px; border-radius: 12px; border: 1px dashed rgba(167,139,250,.6); background: rgba(124,58,237,.14); }
.afy-sms { margin-top: 8px; font-size: 12px; line-height: 1.5; color: #C2CDEB; padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,.05); border: 1px solid rgba(130,150,255,.2); }
.afy-log { display: flex; gap: 10px; align-items: flex-start; padding: 9px 12px; border-radius: 12px; background: rgba(255,255,255,.035); border: 1px solid rgba(130,150,255,.12); }
.afy-adm { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.afy-bar { height: 5px; border-radius: 99px; background: rgba(255,255,255,.08); overflow: hidden; margin-bottom: 12px; }
.afy-bar > div { height: 100%; background: linear-gradient(90deg, #22D3EE, #8B5CF6); transition: width .4s; box-shadow: 0 0 12px #38BDF8; }
.afy-chat { flex: 1; overflow-y: auto; max-height: 360px; display: flex; flex-direction: column; gap: 9px; padding: 4px 2px 12px; }
.afy-msg { max-width: 86%; padding: 10px 14px; border-radius: 16px; font-size: 13.5px; line-height: 1.55; animation: afy-in .3s ease; }
@keyframes afy-in { from { opacity: 0; transform: translateY(8px); } }
.afy-msg-ia { align-self: flex-start; background: rgba(255,255,255,.06); border: 1px solid rgba(130,150,255,.22); color: #DCE4FF; border-bottom-left-radius: 4px; }
.afy-msg-yo { align-self: flex-end; background: linear-gradient(120deg, #2563EB, #7C3AED); color: #fff; border-bottom-right-radius: 4px; }
.afy-chip { cursor: pointer; padding: 7px 13px; border-radius: 999px; font: 500 12.5px Inter, sans-serif; color: #C7D4FF; background: rgba(56,189,248,.08); border: 1px solid rgba(56,189,248,.4); }
.afy-chip:hover { background: rgba(56,189,248,.22); transform: translateY(-1px); }
.afy-field { padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,.04); border: 1px solid rgba(130,150,255,.14); min-width: 0; }
.afy-field div { font: 400 10px 'Space Mono', monospace; letter-spacing: 1px; color: #7C8DB8; text-transform: uppercase; margin-bottom: 3px; }
.afy-field b { font-size: 13px; font-weight: 600; color: #E8EEFF; word-break: break-word; }
.afy-prio { padding: 14px 16px; border-radius: 16px; border: 1px solid; }
.afy-doc-row { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 10px; background: rgba(255,255,255,.04); font-size: 13px; color: #DCE4FF; }
.afy-ahorro { display: flex; align-items: center; gap: 18px; margin-top: 14px; padding: 12px 16px; border-radius: 14px; background: rgba(46,230,160,.07); border: 1px solid rgba(46,230,160,.3); }
.afy-ahorro span { display: block; font: 400 10px 'Space Mono', monospace; letter-spacing: 1px; color: #7C8DB8; text-transform: uppercase; }
.afy-ahorro b { font-family: 'Syne', sans-serif; font-size: 20px; }
@media (max-width: 980px) { .afy-hero { grid-template-columns: 1fr; padding: 22px; } .afy-stats { grid-template-columns: 1fr 1fr; } .afy-adm { grid-template-columns: 1fr; } .afy-float-chip { left: 8px; } }
@media (prefers-reduced-motion: reduce) { .afy-dot, .afy-orb, .afy-ring::before, .afy-h1-glow, body::after, .afy-float-chip { animation: none !important; } }

  .afinty-reveal { opacity: 0; transform: translateY(26px); transition: opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1); }
  .afinty-reveal.afinty-in { opacity: 1; transform: none; }
  .afinty-sticky-title { position: sticky; top: ${So}px; z-index: 30; padding: 22px 0 12px; margin-bottom: 8px;
    background: linear-gradient(to bottom, rgba(8,13,36,.8) 72%, rgba(8,13,36,0)); backdrop-filter: blur(6px); }
  .afinty-star { transition: transform .15s ease; }
  .afinty-star:hover { transform: scale(1.18); }
  @media (prefers-reduced-motion: reduce) { .afinty-reveal { opacity: 1; transform: none; transition: none; } .afinty-star { transition: none; } }
`,
  f1 = [
    { key: "resumen", label: "Resumen", icon: Pm },
    { key: "hospital", label: "Hospital y médicos", icon: bt },
    { key: "turnos", label: "Turnos médicos", icon: Ko },
    { key: "mensajes", label: "Mensajes", icon: Xo },
    { key: "camas", label: "Camas", icon: Dr },
    { key: "citas", label: "Citas", icon: Wt },
    { key: "insumos", label: "Medicamentos y equipos", icon: Rr },
    { key: "documentos", label: "Documentos", icon: Jo },
    { key: "emergencias", label: "Emergencias", icon: $l },
    { key: "reportes", label: "Inasistencias y reportes", icon: Au },
    { key: "calificaciones", label: "Calificaciones", icon: $r },
    { key: "alertas", label: "Alertas", icon: Ol },
    { key: "ia", label: "Asistente IA", icon: yi },
    { key: "nosotros", label: "Nosotros", icon: Ft },
  ],
  qi = ["Paciente o familia", "Doctor", "Almacén", "Vigilante", "Jefatura"],
  jo = [
    "José Luis Quispe Huamán",
    "María Fernanda Torres Castillo",
    "Carlos Alberto Flores Mendoza",
    "Andrea Valentina Ramos Paredes",
    "Luis Ángel Condori Mamani",
    "Gabriela Alejandra Vargas Salazar",
    "Miguel Eduardo Chávez Rojas",
    "Daniela Sofía Huerta Cárdenas",
    "Juan Carlos Apaza Choque",
    "Valeria Nicole García Espinoza",
    "Pedro Antonio Medina Torres",
    "Camila Fernanda Navarro Ruiz",
    "Diego Sebastián Yupanqui Flores",
    "Lucía Isabel Mendoza Cueva",
    "Ricardo Andrés Palomino Sánchez",
    "Ana Paula Vilca Huamán",
    "Fernando Javier Paredes León",
    "Mariana Elizabeth Soto Quispe",
    "Jorge Luis Cárdenas Vargas",
    "Fiorella Alessandra Mamani Condori",
    "César Augusto Rojas Gutiérrez",
    "Patricia Milagros Salinas Chávez",
    "Óscar Daniel Huamán Quispe",
    "Renata Gabriela Castillo Ramos",
    "Víctor Manuel Espinoza Medina",
    "Claudia Beatriz Flores Salazar",
    "Martín Alejandro Choque Apaza",
    "Rosa Elena Cueva Paredes",
    "Sebastián Nicolás León Vargas",
    "Karla Michelle Sánchez Yupanqui",
  ].map((e, n) => ({ id: n + 1, nombre: e })),
  Yi = 5,
  bo = 0;
function p1(e) {
  return typeof e == "string" && e.startsWith("image/");
}
function m1(e) {
  return e < 1024
    ? `${e} B`
    : e < 1024 * 1024
      ? `${Math.round(e / 1024)} KB`
      : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function uc(e) {
  return new Date(e).toLocaleString("es-PE", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function g1({ usuarios: e, onRegistrar: n, onLogin: t }) {
  const [r, o] = F.useState("login"),
    [a, l] = F.useState({
      nombre: "",
      usuario: "",
      contrasena: "",
      rol: qi[0],
      doctorId: V[0].id,
      almacenId: jo[0].id,
    }),
    [s, d] = F.useState("");
  function c() {
    (l({
      nombre: "",
      usuario: "",
      contrasena: "",
      rol: qi[0],
      doctorId: V[0].id,
      almacenId: jo[0].id,
    }),
      d(""));
  }
  function m(g) {
    (o(g), c());
  }
  function u() {
    const g = e.find(
      (x) => x.usuario === a.usuario.trim() && x.contrasena === a.contrasena,
    );
    if (!g) {
      d("Usuario o contraseña incorrectos.");
      return;
    }
    t(g);
  }
  function h() {
    if (!a.nombre.trim() || !a.usuario.trim() || !a.contrasena) {
      d("Completa nombre, usuario y contraseña.");
      return;
    }
    if (e.some((x) => x.usuario === a.usuario.trim())) {
      d("Ese usuario ya existe, elige otro.");
      return;
    }
    const g = {
      nombre: a.nombre.trim(),
      usuario: a.usuario.trim(),
      contrasena: a.contrasena,
      rol: a.rol,
    };
    (a.rol === "Doctor" && (g.doctorId = a.doctorId),
      a.rol === "Almacén" && (g.almacenId = a.almacenId),
      n(g),
      t(g));
  }
  return i.jsxs("div", {
    style: {
      position: "relative",
      minHeight: "100vh",
      background: "#060A1F",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      padding: 20,
    },
    children: [
      i.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(31,191,160,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(31,191,160,0.09) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse at 50% 45%, #000 0%, #000 45%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 45%, #000 0%, #000 45%, transparent 85%)",
        },
      }),
      i.jsx("div", {
        style: {
          position: "absolute",
          width: 680,
          height: 680,
          borderRadius: "50%",
          top: -260,
          left: -180,
          background:
            "radial-gradient(circle, rgba(31,191,160,0.20) 0%, rgba(31,191,160,0) 70%)",
        },
      }),
      i.jsx("div", {
        style: {
          position: "absolute",
          width: 720,
          height: 720,
          borderRadius: "50%",
          bottom: -300,
          right: -200,
          background:
            "radial-gradient(circle, rgba(14,124,134,0.34) 0%, rgba(14,124,134,0) 70%)",
        },
      }),
      i.jsx("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: 120,
          marginTop: -60,
          overflow: "hidden",
          opacity: 0.5,
        },
        children: i.jsxs("svg", {
          width: "200%",
          height: "120",
          viewBox: "0 0 1600 120",
          preserveAspectRatio: "none",
          className: "afinty-auth-ecg",
          style: { position: "absolute", left: 0, top: 0 },
          children: [
            i.jsx("polyline", {
              fill: "none",
              stroke: "#A78BFA",
              strokeWidth: "1.6",
              strokeLinejoin: "round",
              strokeLinecap: "round",
              points:
                "0,60 220,60 250,60 268,20 284,100 300,60 560,60 600,60 618,44 636,76 654,60 800,60",
            }),
            i.jsx("polyline", {
              fill: "none",
              stroke: "#A78BFA",
              strokeWidth: "1.6",
              strokeLinejoin: "round",
              strokeLinecap: "round",
              points:
                "800,60 1020,60 1050,60 1068,20 1084,100 1100,60 1360,60 1400,60 1418,44 1436,76 1454,60 1600,60",
            }),
          ],
        }),
      }),
      i.jsx("div", {
        style: { position: "absolute", inset: 0 },
        children: [
          { top: "18%", left: "14%", d: "0s" },
          { top: "32%", left: "82%", d: "1.1s" },
          { top: "68%", left: "9%", d: "2.2s" },
          { top: "78%", left: "74%", d: "0.6s" },
          { top: "12%", left: "62%", d: "1.7s" },
        ].map((g, x) =>
          i.jsx(
            "span",
            {
              className: "afinty-auth-nodo",
              style: {
                position: "absolute",
                top: g.top,
                left: g.left,
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22D3EE",
                animationDelay: g.d,
              },
            },
            x,
          ),
        ),
      }),
      i.jsx("style", {
        children: `
        .afinty-auth-ecg { animation: afinty-auth-scroll 14s linear infinite; }
        @keyframes afinty-auth-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .afinty-auth-nodo { animation: afinty-auth-latido 4s ease-in-out infinite; }
        @keyframes afinty-auth-latido {
          0%, 100% { opacity: 0.25; box-shadow: 0 0 0 0 rgba(79,209,197,0); }
          50% { opacity: 1; box-shadow: 0 0 0 7px rgba(79,209,197,0.10); }
        }
        @media (prefers-reduced-motion: reduce) {
          .afinty-auth-ecg, .afinty-auth-nodo { animation: none !important; }
          .afinty-auth-nodo { opacity: 0.6; }
        }
      `,
      }),
      i.jsxs("div", {
        style: {
          position: "relative",
          zIndex: 1,
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          borderRadius: 18,
          padding: 32,
          width: 400,
          maxWidth: "92vw",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow:
            "0 30px 80px -30px rgba(0,0,0,0.75), 0 0 0 1px rgba(31,191,160,0.14)",
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 22,
              justifyContent: "center",
            },
            children: [
              i.jsx("div", {
                style: {
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: ee.logoGrad,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                },
                children: i.jsx(_l, { size: 20, color: "#fff" }),
              }),
              i.jsx("span", {
                style: {
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#E8EEFF",
                },
                children: "AFINTY",
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              display: "flex",
              background: "rgba(255,255,255,.06)",
              borderRadius: 10,
              padding: 4,
              marginBottom: 20,
            },
            children: [
              i.jsx("button", {
                onClick: () => m("login"),
                style: {
                  flex: 1,
                  padding: "9px 0",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  background: r === "login" ? "rgba(56,189,248,.22)" : "transparent",
                  color: r === "login" ? "#E8EEFF" : "#7C8DB8",
                },
                children: "Iniciar sesión",
              }),
              i.jsx("button", {
                onClick: () => m("registro"),
                style: {
                  flex: 1,
                  padding: "9px 0",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  background: r === "registro" ? "rgba(56,189,248,.22)" : "transparent",
                  color: r === "registro" ? "#E8EEFF" : "#7C8DB8",
                },
                children: "Registrarse",
              }),
            ],
          }),
          r === "registro" &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx("label", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    color: "#9AA9D0",
                    marginBottom: 4,
                    display: "block",
                  },
                  children: "Nombre completo",
                }),
                i.jsx("input", {
                  value: a.nombre,
                  onChange: (g) => l({ ...a, nombre: g.target.value }),
                  style: {
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid rgba(130,150,255,.2)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13.5,
                    marginBottom: 12,
                    boxSizing: "border-box",
                  },
                }),
                i.jsx("label", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    color: "#9AA9D0",
                    marginBottom: 4,
                    display: "block",
                  },
                  children: "Tipo de usuario",
                }),
                i.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 12,
                  },
                  children: qi.map((g) =>
                    i.jsx(
                      "button",
                      {
                        onClick: () => l({ ...a, rol: g }),
                        style: {
                          padding: "9px 6px",
                          borderRadius: 8,
                          cursor: "pointer",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12.5,
                          fontWeight: 600,
                          border: `1.5px solid ${a.rol === g ? "#38BDF8" : "rgba(130,150,255,.2)"}`,
                          background: a.rol === g ? "rgba(56,189,248,.09)" : "rgba(255,255,255,.04)",
                          color: a.rol === g ? "#38BDF8" : "#9AA9D0",
                        },
                        children: g,
                      },
                      g,
                    ),
                  ),
                }),
                a.rol === "Doctor" &&
                  i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("label", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#9AA9D0",
                          marginBottom: 4,
                          display: "block",
                        },
                        children: "¿Cuál eres?",
                      }),
                      i.jsx("select", {
                        value: a.doctorId,
                        onChange: (g) =>
                          l({ ...a, doctorId: Number(g.target.value) }),
                        style: {
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "1px solid rgba(130,150,255,.2)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          marginBottom: 12,
                          boxSizing: "border-box",
                        },
                        children: Vt(V).map((g) =>
                          i.jsx(
                            "optgroup",
                            {
                              label: g.area,
                              children: g.doctores.map((x) =>
                                i.jsxs(
                                  "option",
                                  {
                                    value: x.id,
                                    children: [x.nombre, " · ", x.esp],
                                  },
                                  x.id,
                                ),
                              ),
                            },
                            g.area,
                          ),
                        ),
                      }),
                    ],
                  }),
                a.rol === "Almacén" &&
                  i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("label", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#9AA9D0",
                          marginBottom: 4,
                          display: "block",
                        },
                        children: "¿Cuál eres?",
                      }),
                      i.jsx("select", {
                        value: a.almacenId,
                        onChange: (g) =>
                          l({ ...a, almacenId: Number(g.target.value) }),
                        style: {
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "1px solid rgba(130,150,255,.2)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          marginBottom: 12,
                          boxSizing: "border-box",
                        },
                        children: jo.map((g) =>
                          i.jsx(
                            "option",
                            { value: g.id, children: g.nombre },
                            g.id,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          i.jsx("label", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#9AA9D0",
              marginBottom: 4,
              display: "block",
            },
            children: "Usuario",
          }),
          i.jsx("input", {
            value: a.usuario,
            onChange: (g) => l({ ...a, usuario: g.target.value }),
            style: {
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              marginBottom: 12,
              boxSizing: "border-box",
            },
          }),
          i.jsx("label", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#9AA9D0",
              marginBottom: 4,
              display: "block",
            },
            children: "Contraseña",
          }),
          i.jsx("input", {
            type: "password",
            value: a.contrasena,
            onChange: (g) => l({ ...a, contrasena: g.target.value }),
            onKeyDown: (g) => g.key === "Enter" && (r === "login" ? u() : h()),
            style: {
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              marginBottom: 8,
              boxSizing: "border-box",
            },
          }),
          s &&
            i.jsx("div", {
              style: {
                color: "#FF7A93",
                fontFamily: "Inter, sans-serif",
                fontSize: 12.5,
                marginBottom: 10,
              },
              children: s,
            }),
          i.jsx("button", {
            onClick: r === "login" ? u : h,
            style: {
              width: "100%",
              background: ee.ctaGrad,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 0",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              marginTop: 6,
            },
            children: r === "login" ? "Iniciar sesión" : "Crear cuenta",
          }),
          i.jsx("p", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              color: "#5E6E9A",
              marginTop: 16,
              textAlign: "center",
            },
            children:
              "Los datos de esta demo se guardan mientras la app esté abierta en este dispositivo.",
          }),
        ],
      }),
    ],
  });
}
function h1() {
  return i.jsxs("div", {
    style: {
      position: "relative",
      height: 30,
      overflow: "hidden",
      flex: 1,
      margin: "0 20px",
    },
    children: [
      i.jsxs("svg", {
        width: "200%",
        height: "30",
        viewBox: "0 0 800 30",
        preserveAspectRatio: "none",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          animation: "afinty-scroll 6s linear infinite",
        },
        children: [
          i.jsx("polyline", {
            fill: "none",
            stroke: "#22D3EE",
            strokeWidth: "2",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            points:
              "0,15 60,15 75,15 85,2 95,28 105,15 400,15 460,15 475,15 485,2 495,28 505,15 800,15",
          }),
          i.jsx("polyline", {
            fill: "none",
            stroke: "#22D3EE",
            strokeWidth: "2",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            points:
              "800,15 860,15 875,15 885,2 895,28 905,15 1200,15 1260,15 1275,15 1285,2 1295,28 1305,15 1600,15",
          }),
        ],
      }),
      i.jsx("style", {
        children: `
        @keyframes afinty-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { svg { animation: none !important; } }
      `,
      }),
    ],
  });
}
function Rn({ label: e, value: n, sub: t, accent: r, icon: o, iconBg: a }) {
  return i.jsxs("div", {
    style: {
      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
      border: "1px solid rgba(130,150,255,.2)",
      borderRadius: 14,
      padding: "18px 20px",
      flex: "1 1 200px",
      minWidth: 180,
    },
    children: [
      o &&
        i.jsx("div", {
          style: {
            width: 34,
            height: 34,
            borderRadius: 10,
            background: a || "rgba(56,189,248,.09)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          },
          children: i.jsx(o, { size: 17, color: r || "#38BDF8" }),
        }),
      i.jsx("div", {
        style: {
          fontSize: 12.5,
          color: "#9AA9D0",
          fontFamily: "Inter, sans-serif",
        },
        children: e,
      }),
      i.jsx("div", {
        style: {
          fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
          fontSize: 30,
          fontWeight: 600,
          color: "#E8EEFF",
          marginTop: 6,
        },
        children: n,
      }),
      i.jsx("div", {
        style: {
          fontSize: 12.5,
          color: r || "#9AA9D0",
          marginTop: 4,
          fontFamily: "Inter, sans-serif",
        },
        children: t,
      }),
    ],
  });
}
function ue({ eyebrow: e, title: n }) {
  return i.jsxs("div", {
    className: "afinty-sticky-title",
    style: { marginBottom: 18 },
    children: [
      i.jsx("div", { className: "afinty-eyebrow", children: e }),
      i.jsx("h2", {
        className: "afinty-h2",
        style: { fontFamily: "'Syne', 'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: -0.3 },
        children: n,
      }),
    ],
  });
}
const ut = [
    {
      src: "./hospital-fachada.png",
      alt: "Fachada del Hospital Nacional Arzobispo Loayza",
      titulo: "Fachada histórica",
    },
    {
      src: "./hospital-jardines.png",
      alt: "Patio y jardines del Hospital Nacional Arzobispo Loayza",
      titulo: "Patios y jardines",
    },
    {
      src: "./hospital-mapa.png",
      alt: "Ubicación del Hospital Nacional Arzobispo Loayza",
      titulo: "Ubicación",
    },
  ],
  y1 = {};
function x1(e) {
  return (
    {
      "Cardiología y Cuidados Coronarios":
        "Evaluación y atención de enfermedades cardiovasculares y problemas coronarios.",
      Endocrinología:
        "Atención de enfermedades hormonales y metabólicas, incluido el manejo de diabetes y otras alteraciones endocrinas.",
      Gastroenterología:
        "Evaluación y tratamiento de enfermedades del aparato digestivo.",
      Geriatría:
        "Atención integral de personas adultas mayores, con enfoque preventivo, terapéutico y de rehabilitación.",
      Infectología:
        "Atención especializada de enfermedades infecciosas y seguimiento de tratamientos correspondientes.",
      Neurología:
        "Evaluación y tratamiento de enfermedades del sistema nervioso y realización de procedimientos especializados de neurofisiología.",
      Neumología:
        "Prevención, diagnóstico, recuperación y rehabilitación de pacientes con enfermedades respiratorias.",
      Hematología:
        "Atención de enfermedades de la sangre y sus complicaciones.",
      Oncohematología:
        "Atención especializada de enfermedades oncológicas y hematológicas.",
      Inmunoreumatología:
        "Atención integral de enfermedades inmunológicas y reumatológicas.",
      Urología:
        "Atención médica y quirúrgica de enfermedades del aparato urinario y problemas urológicos.",
      Oftalmología:
        "Evaluación y tratamiento de afecciones oculares, incluyendo procedimientos especializados.",
      Otorrinolaringología:
        "Atención de enfermedades de oído, nariz y garganta.",
      "Ortopedia y Traumatología":
        "Atención de lesiones y enfermedades del sistema musculoesquelético y traumatológicas.",
      "Cirugía Plástica y Quemados":
        "Atención quirúrgica integral de cirugía plástica y pacientes con quemaduras, incluida la atención de urgencia.",
      Neurocirugía:
        "Atención quirúrgica de enfermedades del sistema nervioso cuando requieren intervención especializada.",
      "Cirugía Torácica y Cardiovascular":
        "Atención médica y quirúrgica especializada de enfermedades torácicas y cardiovasculares.",
      "Cirugía Vascular Periférico y Angiología":
        "Evaluación y tratamiento médico y quirúrgico de enfermedades vasculares periféricas.",
      "Cirugía de Cabeza y Cuello":
        "Atención quirúrgica especializada de patologías de cabeza y cuello.",
      "Cirugía General, Aparato Digestivo y Pared Abdominal":
        "Atención quirúrgica general y especializada del aparato digestivo y pared abdominal.",
      "Ginecología y Obstetricia":
        "Atención integral de salud ginecológica y obstétrica.",
      Ginecología: "Atención especializada de la salud ginecológica.",
      "Reproducción Humana":
        "Atención especializada relacionada con salud reproductiva y reproducción humana.",
      Pediatría: "Atención médica de niños y adolescentes.",
      Estomatología: "Atención de salud bucal y servicios estomatológicos.",
      "Medicina Interna":
        "Atención médica integral de pacientes con enfermedades sistémicas y problemas de salud complejos.",
      "Medicina Interna 1-I":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 1-II":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 2-I":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 2-II":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 3-I":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 3-II":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 4-I":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 4-II":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Medicina Interna 8-I":
        "Atención de medicina interna, incluyendo pacientes ambulatorios y hospitalizados.",
      "Cirugía 6-I":
        "Atención quirúrgica especializada dentro del área de cirugía.",
      "Cirugía 6-III":
        "Atención quirúrgica especializada dentro del área de cirugía.",
      "Especialidades Quirúrgicas":
        "Atención quirúrgica especializada para pacientes que requieren procedimientos operatorios.",
      "Emergencia y Cuidados Críticos":
        "Atención de urgencias, emergencias y pacientes con necesidades de cuidados críticos.",
      "Cuidados Intensivos y Cuidados Intermedios":
        "Atención de pacientes que requieren vigilancia y soporte de cuidados intensivos o intermedios.",
      Reanimación:
        "Atención inmediata y procedimientos de reanimación ante situaciones críticas.",
      Ecografía: "Apoyo diagnóstico mediante estudios ecográficos.",
      Radiología: "Apoyo diagnóstico mediante estudios de imágenes.",
      "Patología Clínica y Banco de Sangre / Bioquímica":
        "Apoyo diagnóstico de laboratorio, bioquímica y servicios relacionados con banco de sangre.",
      "Consulta Externa y Hospitalización / Salud Mental":
        "Atención de salud mental en consulta externa y hospitalización.",
      Dermatología: "Atención especializada de enfermedades de la piel.",
      Anestesiología:
        "No corresponde a un médico de la lista actual; se muestra como servicio hospitalario especializado.",
    }[e] || `Atención médica especializada en ${e.toLowerCase()}.`
  );
}
function v1({ doctor: e }) {
  const n = y1[e.id],
    t = e.nombre
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((r) => r[0])
      .join("");
  return i.jsxs("div", {
    style: {
      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
      border: "1px solid rgba(130,150,255,.2)",
      borderRadius: 16,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 5px 18px rgba(15,23,42,.04)",
    },
    children: [
      i.jsxs("div", {
        style: {
          height: 150,
          background: "linear-gradient(135deg,#EAFBF7,rgba(56,189,248,.14))",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        },
        children: [
          i.jsx("div", {
            style: {
              width: 76,
              height: 76,
              borderRadius: "50%",
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              color: "#38BDF8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Syne', 'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 24,
              boxShadow: "0 8px 25px rgba(14,124,134,.15)",
            },
            children: t,
          }),
          n &&
            i.jsx("img", {
              src: n,
              alt: `Foto de ${e.nombre}`,
              style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              },
            }),
          i.jsx("span", {
            style: {
              position: "absolute",
              left: 12,
              bottom: 10,
              background: "rgba(255,255,255,.92)",
              color: "#38BDF8",
              borderRadius: 999,
              padding: "4px 9px",
              fontSize: 10.5,
              fontWeight: 700,
            },
            children: e.area,
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 11,
          flex: 1,
        },
        children: [
          i.jsxs("div", {
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: 1.35,
                  color: "#E8EEFF",
                },
                children: e.nombre,
              }),
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  color: "#38BDF8",
                  marginTop: 4,
                },
                children: e.esp,
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              background: "rgba(255,255,255,.035)",
              borderRadius: 10,
              padding: "10px 11px",
            },
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                  fontSize: 10.5,
                  color: "#38BDF8",
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  marginBottom: 4,
                },
                children: "¿En qué puede ayudarte?",
              }),
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12.5,
                  color: "#9AA9D0",
                  lineHeight: 1.55,
                },
                children: x1(e.esp),
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              display: "flex",
              gap: 7,
              flexWrap: "wrap",
              marginTop: "auto",
            },
            children: [
              i.jsx("span", {
                style: {
                  background: "rgba(56,189,248,.09)",
                  color: "#38BDF8",
                  borderRadius: 999,
                  padding: "4px 9px",
                  fontSize: 11.5,
                  fontWeight: 600,
                },
                children: e.area,
              }),
              i.jsx("span", {
                style: {
                  background: "rgba(255,255,255,.035)",
                  color: "#9AA9D0",
                  borderRadius: 999,
                  padding: "4px 9px",
                  fontSize: 11.5,
                },
                children: e.turno,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function k1() {
  const [e, n] = F.useState(""),
    [t, r] = F.useState("Todas"),
    [o, a] = F.useState(0),
    l = F.useMemo(() => {
      const c = e.trim().toLowerCase();
      return V.filter((m) => {
        const u =
            !c || `${m.nombre} ${m.esp} ${m.area}`.toLowerCase().includes(c),
          h = t === "Todas" || m.area === t;
        return u && h;
      });
    }, [e, t]),
    s = ["Todas", ...Hr.map((c) => c.area)],
    d =
      "https://www.google.com/maps/search/?api=1&query=Hospital+Nacional+Arzobispo+Loayza%2C+Av.+Alfonso+Ugarte+848%2C+Lima";
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Perfil del hospital",
        title: "Hospital Nacional Arzobispo Loayza",
      }),
      i.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "minmax(0,1.45fr) minmax(300px,.85fr)",
          gap: 18,
          marginBottom: 22,
        },
        children: [
          i.jsxs("div", {
            style: {
              background: "linear-gradient(135deg, #1E2A78 0%, #4C1D95 100%)", border: "1px solid rgba(167,139,250,.4)", boxShadow: "0 24px 60px -28px rgba(99,102,241,.8)", color: "#fff", borderRadius: 18,
              padding: 26,
              overflow: "hidden",
              position: "relative",
            },
            children: [
              i.jsx("div", {
                style: {
                  position: "absolute",
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  right: -100,
                  top: -100,
                  background: "rgba(31,191,160,.18)",
                },
              }),
              i.jsxs("div", {
                style: { position: "relative", zIndex: 1 },
                children: [
                  i.jsxs("div", {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: "rgba(255,255,255,.10)",
                      border: "1px solid rgba(255,255,255,.12)",
                      borderRadius: 999,
                      padding: "5px 10px",
                      fontSize: 11.5,
                      fontWeight: 600,
                      marginBottom: 14,
                    },
                    children: [
                      i.jsx(bt, { size: 13 }),
                      " Centro hospitalario · ",
                      Ie.categoria,
                    ],
                  }),
                  i.jsx("h3", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontSize: 29,
                      lineHeight: 1.12,
                      margin: "0 0 10px",
                      maxWidth: 680,
                    },
                    children: Ie.nombre,
                  }),
                  i.jsx("p", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: "rgba(56,189,248,.14)",
                      maxWidth: 700,
                      margin: 0,
                    },
                    children:
                      "Conoce el hospital, consulta su ubicación y explora profesionales por nombre, especialidad o área. Cada perfil explica de forma sencilla qué tipo de atención corresponde a su especialidad.",
                  }),
                  i.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      flexWrap: "wrap",
                      marginTop: 18,
                    },
                    children: [
                      i.jsxs("a", {
                        href: d,
                        target: "_blank",
                        rel: "noreferrer",
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 7,
                          background: "#A78BFA",
                          color: "#0B1230",
                          textDecoration: "none",
                          borderRadius: 9,
                          padding: "9px 13px",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12.5,
                          fontWeight: 700,
                        },
                        children: [i.jsx(oc, { size: 15 }), " Ver ubicación"],
                      }),
                      i.jsxs("a", {
                        href: "https://www.gob.pe/institucion/hospitalloayza/sedes",
                        target: "_blank",
                        rel: "noreferrer",
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 7,
                          background: "rgba(255,255,255,.10)",
                          color: "#fff",
                          textDecoration: "none",
                          border: "1px solid rgba(255,255,255,.18)",
                          borderRadius: 9,
                          padding: "9px 13px",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12.5,
                          fontWeight: 600,
                        },
                        children: [
                          i.jsx(Mm, { size: 14 }),
                          " Sede y contacto oficial",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 18,
              padding: 20,
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                },
                children: [
                  i.jsx(rc, { size: 17, color: "#38BDF8" }),
                  i.jsx("strong", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "#E8EEFF",
                    },
                    children: "Ubicación y contacto",
                  }),
                ],
              }),
              i.jsxs("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "#C2CDEB",
                  lineHeight: 1.65,
                },
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "Dirección" }),
                      i.jsx("br", {}),
                      Ie.direccion,
                    ],
                  }),
                  i.jsxs("div", {
                    style: { marginTop: 10 },
                    children: [
                      i.jsx("strong", { children: "Central telefónica" }),
                      i.jsx("br", {}),
                      "(01) 5094800",
                    ],
                  }),
                  i.jsxs("div", {
                    style: { marginTop: 10 },
                    children: [
                      i.jsx("strong", { children: "Solicitar citas" }),
                      i.jsx("br", {}),
                      "(01) 5094951",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "minmax(0,1.2fr) minmax(280px,.8fr)",
          gap: 18,
          marginBottom: 24,
        },
        children: [
          i.jsx("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 16,
              overflow: "hidden",
            },
            children: i.jsx("img", {
              src: ut[2].src,
              alt: ut[2].alt,
              style: {
                width: "100%",
                height: 245,
                objectFit: "cover",
                display: "block",
              },
            }),
          }),
          i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 16,
              padding: 20,
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 9,
                },
                children: [
                  i.jsx(rc, { size: 17, color: "#38BDF8" }),
                  i.jsx("strong", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "#E8EEFF",
                    },
                    children: "Cómo llegar",
                  }),
                ],
              }),
              i.jsx("p", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  color: "#9AA9D0",
                  margin: "0 0 13px",
                },
                children:
                  "Hospital Nacional Arzobispo Loayza · Av. Alfonso Ugarte 848, Cercado de Lima.",
              }),
              i.jsxs("a", {
                href: d,
                target: "_blank",
                rel: "noreferrer",
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: ee.ctaGrad,
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 9,
                  padding: "9px 13px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12.5,
                  fontWeight: 700,
                },
                children: [i.jsx(oc, { size: 15 }), " Abrir en Google Maps"],
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 16,
          padding: 18,
          marginBottom: 24,
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
            },
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      fontSize: 11,
                      color: "#38BDF8",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    },
                    children: "Galería",
                  }),
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#E8EEFF",
                    },
                    children: "Conoce el hospital",
                  }),
                ],
              }),
              i.jsxs("div", {
                style: {
                  fontSize: 12,
                  color: "#7C8DB8",
                  fontFamily: "Inter, sans-serif",
                },
                children: [o + 1, " / ", ut.length],
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "minmax(0,2fr) minmax(170px,1fr)",
              gap: 10,
            },
            children: [
              i.jsx("div", {
                style: {
                  height: 280,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "rgba(255,255,255,.05)",
                },
                children: i.jsx("img", {
                  src: ut[o].src,
                  alt: ut[o].alt,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  },
                }),
              }),
              i.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  gap: 10,
                },
                children: ut.map((c, m) =>
                  i.jsxs(
                    "button",
                    {
                      onClick: () => a(m),
                      style: {
                        padding: 0,
                        border:
                          m === o ? "2px solid #38BDF8" : "1px solid rgba(130,150,255,.2)",
                        borderRadius: 12,
                        overflow: "hidden",
                        background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                        cursor: "pointer",
                        position: "relative",
                      },
                      children: [
                        i.jsx("img", {
                          src: c.src,
                          alt: c.alt,
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          },
                        }),
                        i.jsx("span", {
                          style: {
                            position: "absolute",
                            left: 8,
                            bottom: 8,
                            background: "rgba(0,0,0,.62)",
                            color: "#fff",
                            borderRadius: 999,
                            padding: "4px 8px",
                            fontSize: 10.5,
                          },
                          children: c.titulo,
                        }),
                      ],
                    },
                    c.src,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 16,
          padding: 18,
          marginBottom: 24,
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 9,
              marginBottom: 8,
            },
            children: [
              i.jsx(Wm, { size: 18, color: "#38BDF8" }),
              i.jsx("div", {
                style: {
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#E8EEFF",
                },
                children: "Perfiles de profesionales",
              }),
            ],
          }),
          i.jsx("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12.5,
              color: "#9AA9D0",
              lineHeight: 1.55,
            },
            children:
              "Cada perfil muestra el nombre, especialidad, área de atención y una explicación sencilla de los problemas de salud que corresponde atender. Las fotografías deben ser imágenes autorizadas del profesional; mientras no se carguen, se muestran sus iniciales.",
          }),
        ],
      }),
      i.jsxs("div", {
        style: { marginBottom: 14 },
        children: [
          i.jsx("div", {
            style: {
              fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
              fontSize: 11,
              color: "#38BDF8",
              textTransform: "uppercase",
              letterSpacing: 1,
            },
            children: "Encuentra un profesional",
          }),
          i.jsx("div", {
            style: {
              fontFamily: "'Syne', 'Space Grotesk', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#E8EEFF",
              marginTop: 3,
            },
            children: "Médicos por nombre, especialidad o área",
          }),
        ],
      }),
      i.jsxs("div", {
        style: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 },
        children: [
          i.jsxs("div", {
            style: { flex: "1 1 320px", position: "relative" },
            children: [
              i.jsx(Ru, {
                size: 16,
                color: "#7C8DB8",
                style: { position: "absolute", left: 12, top: 12 },
              }),
              i.jsx("input", {
                value: e,
                onChange: (c) => n(c.target.value),
                placeholder: "Ej. cardiología, pediatría o nombre del médico",
                style: {
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "10px 12px 10px 35px",
                  borderRadius: 9,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                },
              }),
            ],
          }),
          i.jsx("select", {
            value: t,
            onChange: (c) => r(c.target.value),
            style: {
              flex: "0 1 300px",
              padding: "10px 12px",
              borderRadius: 9,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
            },
            children: s.map((c) => i.jsx("option", { children: c }, c)),
          }),
        ],
      }),
      i.jsx("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(285px,1fr))",
          gap: 14,
        },
        children: l.map((c) => i.jsx(v1, { doctor: c }, c.id)),
      }),
      l.length === 0 &&
        i.jsx("div", {
          style: {
            background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
            border: "1px solid rgba(130,150,255,.2)",
            borderRadius: 14,
            padding: 24,
            textAlign: "center",
            color: "#9AA9D0",
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
          },
          children: "No encontramos profesionales con esos filtros.",
        }),
    ],
  });
}
const E1 = [
  {
    icon: tc,
    emoji: "🤝",
    titulo: "Compromiso",
    texto: "Orientamos nuestras soluciones a las necesidades del hospital.",
    color: "#38BDF8",
    bg: "rgba(56,189,248,.09)",
  },
  {
    icon: Lm,
    emoji: "🔐",
    titulo: "Seguridad",
    texto: "Protegemos la información y controlamos el acceso según el rol.",
    color: "#5CF2B0",
    bg: "rgba(46,230,160,.13)",
  },
  {
    icon: Nm,
    emoji: "💡",
    titulo: "Innovación",
    texto: "Utilizamos tecnología para mejorar procesos existentes.",
    color: "#FFB547",
    bg: "rgba(255,181,71,.14)",
  },
  {
    icon: tc,
    emoji: "❤️",
    titulo: "Enfoque humano",
    texto: "Ponemos al paciente y al personal de salud en el centro.",
    color: "#FF7A93",
    bg: "rgba(255,93,122,.14)",
  },
  {
    icon: $m,
    emoji: "⚡",
    titulo: "Eficiencia",
    texto: "Buscamos reducir tiempos, duplicidad de tareas y desorganización.",
    color: "#A78BFA",
    bg: "rgba(167,139,250,.14)",
  },
];
function S1() {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, { eyebrow: "Institucional", title: "Nosotros" }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: 24,
          marginBottom: 20,
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            },
            children: [
              i.jsx("div", {
                style: {
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(56,189,248,.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                },
                children: i.jsx(Ft, { size: 17, color: "#38BDF8" }),
              }),
              i.jsx("span", {
                style: {
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "#E8EEFF",
                },
                children: "¿Quiénes somos?",
              }),
            ],
          }),
          i.jsx("p", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              color: "#C2CDEB",
              lineHeight: 1.65,
              margin: 0,
            },
            children:
              "AFINTY es una plataforma digital de gestión y coordinación hospitalaria diseñada para integrar en un solo entorno los principales procesos administrativos y operativos de un hospital.",
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: 24,
          marginBottom: 20,
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            },
            children: [
              i.jsx("div", {
                style: {
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(56,189,248,.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                },
                children: i.jsx(_l, { size: 17, color: "#38BDF8" }),
              }),
              i.jsx("span", {
                style: {
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "#E8EEFF",
                },
                children: "¿Qué hacemos?",
              }),
            ],
          }),
          i.jsx("p", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              color: "#C2CDEB",
              lineHeight: 1.65,
              margin: 0,
            },
            children:
              "Conectamos las diferentes áreas involucradas en la atención hospitalaria para facilitar la gestión de citas, turnos médicos, camas, medicamentos, documentos, emergencias, comunicación interna y seguimiento de incidencias.",
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(56,189,248,.09)",
          border: "1px solid rgba(56,189,248,.3)",
          borderRadius: 14,
          padding: "18px 22px",
          marginBottom: 24,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        },
        children: [
          i.jsx(yi, {
            size: 19,
            color: "#38BDF8",
            style: { flexShrink: 0, marginTop: 2 },
          }),
          i.jsxs("div", {
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: "#E8EEFF",
                  marginBottom: 4,
                },
                children: "Nuestro propósito",
              }),
              i.jsx("p", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "#C2CDEB",
                  lineHeight: 1.6,
                  margin: 0,
                },
                children:
                  "Contribuir a una atención hospitalaria más organizada, coordinada y eficiente mediante el uso de tecnología y la centralización de información.",
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        style: { display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 26 },
        children: [
          i.jsxs("div", {
            style: {
              flex: "1 1 300px",
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 14,
              padding: 22,
            },
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  color: "#38BDF8",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 8,
                },
                children: "Misión",
              }),
              i.jsx("p", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  color: "#C2CDEB",
                  lineHeight: 1.65,
                  margin: 0,
                },
                children:
                  "Desarrollar soluciones digitales que permitan mejorar la coordinación de los procesos hospitalarios, facilitando el trabajo del personal y proporcionando una mejor experiencia de atención al paciente.",
              }),
            ],
          }),
          i.jsxs("div", {
            style: {
              flex: "1 1 300px",
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 14,
              padding: 22,
            },
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                  fontSize: 11.5,
                  color: "#38BDF8",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 8,
                },
                children: "Visión",
              }),
              i.jsx("p", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  color: "#C2CDEB",
                  lineHeight: 1.65,
                  margin: 0,
                },
                children:
                  "Ser una plataforma de referencia para la gestión hospitalaria digital, promoviendo hospitales más conectados, organizados y orientados a una atención eficiente.",
              }),
            ],
          }),
        ],
      }),
      i.jsx("div", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#E8EEFF",
          marginBottom: 12,
        },
        children: "Nuestros valores",
      }),
      i.jsx("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: 14,
        },
        children: E1.map((e) =>
          i.jsxs(
            "div",
            {
              style: {
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 14,
                padding: 18,
              },
              children: [
                i.jsx("div", {
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: e.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                    fontSize: 16,
                  },
                  children: i.jsx("span", { children: e.emoji }),
                }),
                i.jsx("div", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 13.5,
                    color: "#E8EEFF",
                    marginBottom: 4,
                  },
                  children: e.titulo,
                }),
                i.jsx("p", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12.5,
                    color: "#9AA9D0",
                    lineHeight: 1.55,
                    margin: 0,
                  },
                  children: e.texto,
                }),
              ],
            },
            e.titulo,
          ),
        ),
      }),
      i.jsxs("div", {
        style: {
          marginTop: 26,
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: "14px 18px",
          display: "flex",
          gap: 18,
          flexWrap: "wrap",
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#9AA9D0",
        },
        children: [
          i.jsxs("span", {
            children: [
              i.jsx("strong", {
                style: { color: "#E8EEFF" },
                children: Ie.nombre,
              }),
              " — ",
              Ie.direccion,
            ],
          }),
          i.jsxs("span", { children: ["Categoría ", Ie.categoria] }),
          i.jsxs("span", { children: ["Fundado en ", Ie.fundado] }),
        ],
      }),
    ],
  });
}
const Ou = "abeliotpue123@gmail.com";
function j1(e) {
  const n = encodeURIComponent(`AFINTY · Alerta de asistencia — ${e.area}`),
    t = encodeURIComponent(`${e.msg}

Esta notificación fue generada automáticamente por AFINTY (módulo de asistencia médica).`);
  return `mailto:${Ou}?subject=${n}&body=${t}`;
}
function Wu({ a: e, onResolve: n, onEnviarCorreo: t, correoEnviado: r }) {
  const o = d1[e.sev],
    a = e.id.startsWith("doc-") || e.id.startsWith("entrada-");
  return i.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      flexWrap: "wrap",
      padding: "13px 16px",
      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
      border: "1px solid rgba(130,150,255,.2)",
      borderRadius: 12,
      marginBottom: 8,
    },
    children: [
      i.jsx("span", {
        style: {
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: o.dot,
          flexShrink: 0,
          marginTop: 6,
        },
      }),
      i.jsxs("div", {
        style: { flex: "3 1 240px", minWidth: 200 },
        children: [
          i.jsx("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "#E8EEFF",
              fontWeight: 500,
            },
            children: e.msg,
          }),
          i.jsxs("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#7C8DB8",
              marginTop: 2,
            },
            children: [e.area, " · ", e.time],
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
          marginLeft: "auto",
          flexShrink: 0,
        },
        children: [
          i.jsx("span", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              color: o.fg,
              background: o.bg,
              padding: "3px 10px",
              borderRadius: 999,
              flexShrink: 0,
            },
            children: o.label,
          }),
          a &&
            (r
              ? i.jsx("span", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: "#5CF2B0",
                    background: "rgba(46,230,160,.13)",
                    padding: "3px 10px",
                    borderRadius: 999,
                    flexShrink: 0,
                  },
                  children: "Correo enviado",
                })
              : i.jsx("a", {
                  href: j1(e),
                  onClick: () => t && t(e.id),
                  style: {
                    border: "1px solid rgba(130,150,255,.2)",
                    background: "rgba(56,189,248,.09)",
                    borderRadius: 8,
                    padding: "6px 10px",
                    fontSize: 12.5,
                    color: "#38BDF8",
                    fontFamily: "Inter, sans-serif",
                    cursor: "pointer",
                    fontWeight: 600,
                    flexShrink: 0,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  },
                  children: "Notificar por correo",
                })),
          i.jsx("button", {
            onClick: () => n(e.id),
            style: {
              border: "1px solid rgba(130,150,255,.2)",
              background: "rgba(255,255,255,.035)",
              borderRadius: 8,
              padding: "6px 10px",
              fontSize: 12.5,
              color: "#38BDF8",
              fontFamily: "Inter, sans-serif",
              cursor: "pointer",
              fontWeight: 600,
              flexShrink: 0,
              whiteSpace: "nowrap",
            },
            children: "Resolver",
          }),
        ],
      }),
    ],
  });
}
function b1({
  alerts: e,
  onResolve: n,
  areasResumen: t,
  onEnviarCorreo: r,
  correosEnviados: o,
  medicamentos: a,
  onIr: afyIr,
}) {
  const l = e.length,
    s = t.reduce((g, x) => g + x.total, 0),
    d = t.reduce((g, x) => g + x.libres, 0),
    c = Math.round(((s - d) / s) * 100),
    m = a.filter((g) => g.estado === "crítico").length,
    u = V.filter(
      (g) =>
        g.asistencia.filter(
          (x) => x.estado !== "a-tiempo" && x.estado !== "libre",
        ).length >= nt,
    ).length,
    h = e.filter((g) => g.sev === "alta").length;
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(HeroAfinty, { onIr: afyIr, ocupacion: c, camasLibres: d, alertas: l, criticos: m }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: "14px 18px",
          marginBottom: 20,
          display: "flex",
          gap: 18,
          flexWrap: "wrap",
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#9AA9D0",
        },
        children: [
          i.jsxs("span", {
            children: [
              i.jsx("strong", {
                style: { color: "#E8EEFF" },
                children: Ie.nombre,
              }),
              " — ",
              Ie.direccion,
            ],
          }),
          i.jsxs("span", { children: ["Categoría ", Ie.categoria] }),
          i.jsxs("span", { children: ["Fundado en ", Ie.fundado] }),
          i.jsx("span", { children: Ie.director }),
        ],
      }),
      i.jsx(ue, {
        eyebrow: "Panel general · en vivo",
        title: "Estado del hospital ahora",
      }),
      i.jsxs("div", {
        style: { display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 28 },
        children: [
          i.jsx(Rn, {
            label: "Médicos con incidencias",
            value: u,
            sub: "Tardanzas/faltas ≥ umbral",
            accent: "#FF5D7A",
            icon: Wl,
            iconBg: "rgba(255,93,122,.14)",
          }),
          i.jsx(Rn, {
            label: "Ocupación de camas",
            value: `${c}%`,
            sub: `${d} camas libres de ${s}`,
            icon: Dr,
            iconBg: "rgba(56,189,248,.14)",
          }),
          i.jsx(Rn, {
            label: "Alertas activas",
            value: l,
            sub: `${h} de severidad alta`,
            accent: "#FF5D7A",
            icon: Ol,
            iconBg: "rgba(255,93,122,.14)",
          }),
          i.jsx(Rn, {
            label: "Medicamentos en crítico",
            value: m,
            sub: "Requieren reposición urgente",
            accent: "#FFB547",
            icon: Rr,
            iconBg: "rgba(255,181,71,.14)",
          }),
        ],
      }),
      i.jsxs("div", {
        style: { display: "flex", gap: 24, flexWrap: "wrap" },
        children: [
          i.jsxs("div", {
            style: { flex: "2 1 380px" },
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 10,
                },
                children: "Ocupación por área",
              }),
              t.map((g) => {
                const x = Math.round(((g.total - g.libres) / g.total) * 100);
                return i.jsxs(
                  "div",
                  {
                    style: { marginBottom: 12 },
                    children: [
                      i.jsxs("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 12.5,
                          fontFamily: "Inter, sans-serif",
                          color: "#C2CDEB",
                          marginBottom: 4,
                        },
                        children: [
                          i.jsx("span", { children: g.area }),
                          i.jsxs("span", {
                            style: { fontFamily: "'Space Mono', 'IBM Plex Mono', monospace" },
                            children: [x, "%"],
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        style: {
                          height: 8,
                          background: "rgba(130,150,255,.2)",
                          borderRadius: 999,
                          overflow: "hidden",
                        },
                        children: i.jsx("div", {
                          style: {
                            width: `${x}%`,
                            height: "100%",
                            background:
                              x > 85
                                ? "#FF5D7A"
                                : x > 60
                                  ? "#FFB547"
                                  : "#38BDF8",
                            borderRadius: 999,
                          },
                        }),
                      }),
                    ],
                  },
                  g.area,
                );
              }),
            ],
          }),
          i.jsxs("div", {
            style: { flex: "1 1 320px" },
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 10,
                },
                children: "Alertas recientes",
              }),
              e
                .slice(0, 3)
                .map((g) =>
                  i.jsx(
                    Wu,
                    {
                      a: g,
                      onResolve: n,
                      onEnviarCorreo: r,
                      correoEnviado: o.includes(g.id),
                    },
                    g.id,
                  ),
                ),
              e.length === 0 &&
                i.jsx("div", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    color: "#7C8DB8",
                  },
                  children: "Sin alertas activas.",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function F1({ doc: e, onClose: n }) {
  const t = e.asistencia.filter(
    (r) => r.estado === "tardanza" || r.estado === "falta",
  ).length;
  return i.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(15,23,42,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
    },
    children: i.jsxs("div", {
      style: {
        background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
        borderRadius: 16,
        padding: 26,
        width: 480,
        maxWidth: "92vw",
      },
      children: [
        i.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 14,
          },
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("div", {
                  style: {
                    fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "#E8EEFF",
                  },
                  children: e.nombre,
                }),
                i.jsxs("div", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12.5,
                    color: "#9AA9D0",
                    marginTop: 2,
                  },
                  children: [e.area, " · ", e.esp, " · ", e.turno],
                }),
              ],
            }),
            i.jsx(En, {
              size: 18,
              style: { cursor: "pointer", color: "#7C8DB8" },
              onClick: n,
            }),
          ],
        }),
        e.guardia &&
          i.jsx("div", {
            style: {
              background: "rgba(46,230,160,.13)",
              border: "1px solid rgba(46,230,160,.32)",
              borderRadius: 10,
              padding: "10px 14px",
              marginBottom: 14,
              fontFamily: "Inter, sans-serif",
              fontSize: 12.5,
              color: "#5CF2B0",
            },
            children: "Guardia rotativa de 24 horas para esta especialidad.",
          }),
        i.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 6,
            marginBottom: 14,
          },
          children: e.asistencia.map((r, o) => {
            const a = Ua[r.estado];
            return i.jsxs(
              "div",
              {
                title: `${ei(r.fecha)} · ${a.label}`,
                style: {
                  background: a.bg,
                  border: `1px solid ${a.color}`,
                  borderRadius: 8,
                  padding: "6px 2px",
                  textAlign: "center",
                  fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                },
                children: [
                  i.jsx("div", {
                    style: {
                      fontSize: 9.5,
                      color: "#7C8DB8",
                      textTransform: "uppercase",
                    },
                    children: qm(r.fecha),
                  }),
                  i.jsx("div", {
                    style: { fontSize: 12, fontWeight: 700, color: a.color },
                    children: ei(r.fecha),
                  }),
                  r.hora &&
                    i.jsx("div", {
                      style: { fontSize: 8.5, color: a.color },
                      children: r.hora,
                    }),
                ],
              },
              o,
            );
          }),
        }),
        i.jsx("div", {
          style: {
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
          },
          children: Object.entries(Ua).map(([r, o]) =>
            i.jsxs(
              "span",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#9AA9D0",
                },
                children: [
                  i.jsx("span", {
                    style: {
                      width: 9,
                      height: 9,
                      borderRadius: 3,
                      background: o.color,
                      display: "inline-block",
                    },
                  }),
                  " ",
                  o.label,
                ],
              },
              r,
            ),
          ),
        }),
        t >= nt &&
          i.jsxs("div", {
            style: {
              marginTop: 16,
              background: "rgba(255,93,122,.14)",
              border: "1px solid rgba(255,93,122,.34)",
              borderRadius: 10,
              padding: "10px 14px",
              display: "flex",
              gap: 10,
              alignItems: "center",
            },
            children: [
              i.jsx(Wl, {
                size: 18,
                color: "#FF7A93",
                style: { flexShrink: 0 },
              }),
              i.jsxs("span", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12.5,
                  color: "#FF9B8A",
                },
                children: [
                  t,
                  " incidencias en 14 días. Se notificó automáticamente a Jefatura de Personal y Gestión Administrativa. Sujeto a sanción según reglamento interno.",
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function C1({ doctor: e, entrada: n, onMarcar: t }) {
  const r = _u[e.id];
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, { eyebrow: "Marcado de asistencia", title: "Mi turno" }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: 24,
          maxWidth: 460,
        },
        children: [
          i.jsx("div", {
            style: {
              fontFamily: "'Syne', 'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 17,
              color: "#E8EEFF",
            },
            children: e.nombre,
          }),
          i.jsxs("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "#9AA9D0",
              marginTop: 2,
              marginBottom: 6,
            },
            children: [e.esp, " · ", e.turno],
          }),
          i.jsx("div", {
            style: {
              display: "inline-block",
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              color: Tr(e.area),
              background: "rgba(255,255,255,.035)",
              border: `1px solid ${Tr(e.area)}33`,
              padding: "3px 10px",
              borderRadius: 999,
              marginBottom: 18,
            },
            children: e.area,
          }),
          i.jsxs("div", {
            style: { display: "flex", gap: 14, marginBottom: 20 },
            children: [
              i.jsxs("div", {
                style: {
                  flex: 1,
                  background: "rgba(255,255,255,.035)",
                  borderRadius: 10,
                  padding: "12px 14px",
                },
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 11.5,
                      color: "#7C8DB8",
                    },
                    children: "Hora programada",
                  }),
                  i.jsx("div", {
                    style: {
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#E8EEFF",
                    },
                    children: r,
                  }),
                ],
              }),
              n &&
                i.jsxs("div", {
                  style: {
                    flex: 1,
                    background: n.tarde ? "rgba(255,93,122,.14)" : "rgba(46,230,160,.13)",
                    borderRadius: 10,
                    padding: "12px 14px",
                  },
                  children: [
                    i.jsx("div", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11.5,
                        color: n.tarde ? "#FF7A93" : "#5CF2B0",
                      },
                      children: "Marcaste",
                    }),
                    i.jsx("div", {
                      style: {
                        fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                        fontSize: 20,
                        fontWeight: 700,
                        color: n.tarde ? "#FF7A93" : "#5CF2B0",
                      },
                      children: n.hora,
                    }),
                  ],
                }),
            ],
          }),
          n
            ? n.tarde
              ? i.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    background: "rgba(255,93,122,.14)",
                    border: "1px solid rgba(255,93,122,.34)",
                    borderRadius: 10,
                    padding: "12px 14px",
                  },
                  children: [
                    i.jsx(Wl, {
                      size: 18,
                      color: "#FF7A93",
                      style: { flexShrink: 0 },
                    }),
                    i.jsx("span", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#FF9B8A",
                      },
                      children:
                        "Marcaste después de tu horario. Se notificó automáticamente a Jefatura de Personal.",
                    }),
                  ],
                })
              : i.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    background: "rgba(46,230,160,.13)",
                    border: "1px solid rgba(46,230,160,.32)",
                    borderRadius: 10,
                    padding: "12px 14px",
                  },
                  children: [
                    i.jsx(jn, {
                      size: 18,
                      color: "#2EE6A0",
                      style: { flexShrink: 0 },
                    }),
                    i.jsx("span", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#5CF2B0",
                      },
                      children: "Entrada a tiempo. Buen turno.",
                    }),
                  ],
                })
            : i.jsx("button", {
                onClick: t,
                style: {
                  width: "100%",
                  background: ee.ctaGrad,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "13px 0",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                },
                children: "Marcar entrada ahora",
              }),
        ],
      }),
    ],
  });
}
function w1({ onEscribir: e }) {
  const [n, t] = F.useState(null),
    [r, o] = F.useState(""),
    [a, l] = F.useState([]),
    s = V.find(
      (u) =>
        u.guardia && u.asistencia[u.asistencia.length - 1].estado !== "libre",
    ),
    d = V.filter((u) => {
      const h = r.trim().toLowerCase();
      return h
        ? u.nombre.toLowerCase().includes(h) ||
            u.esp.toLowerCase().includes(h) ||
            u.area.toLowerCase().includes(h)
        : !0;
    }),
    c = Vt(d);
  function m(u) {
    l((h) => (h.includes(u) ? h.filter((g) => g !== u) : [...h, u]));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Programación diaria · plana médica por área",
        title: "Turnos médicos",
      }),
      s &&
        i.jsxs("div", {
          style: {
            background: "rgba(56,189,248,.09)",
            border: "1px solid rgba(56,189,248,.3)",
            borderRadius: 12,
            padding: "14px 18px",
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            gap: 10,
          },
          children: [
            i.jsx(nc, { size: 18, color: "#38BDF8" }),
            i.jsxs("span", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#E8EEFF",
              },
              children: [
                "Guardia activa en ",
                s.area,
                ": ",
                i.jsx("strong", { children: s.nombre }),
                " (",
                s.esp,
                ")",
              ],
            }),
          ],
        }),
      i.jsx("input", {
        value: r,
        onChange: (u) => o(u.target.value),
        placeholder: "Buscar médico, especialidad o área…",
        style: {
          width: "100%",
          maxWidth: 360,
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid rgba(130,150,255,.2)",
          fontFamily: "Inter, sans-serif",
          fontSize: 13.5,
          marginBottom: 14,
          boxSizing: "border-box",
        },
      }),
      i.jsxs("div", {
        style: { display: "flex", flexDirection: "column", gap: 16 },
        children: [
          c.map((u) => {
            const h = !a.includes(u.area),
              g = u.doctores.reduce(
                (x, E) =>
                  x +
                  E.asistencia.filter(
                    (b) => b.estado === "tardanza" || b.estado === "falta",
                  ).length,
                0,
              );
            return i.jsxs(
              "div",
              {
                style: {
                  background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(130,150,255,.2)",
                  borderRadius: 14,
                  overflow: "hidden",
                },
                children: [
                  i.jsxs("button", {
                    onClick: () => m(u.area),
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 18px",
                      background: "rgba(255,255,255,.035)",
                      border: "none",
                      borderBottom: h ? "1px solid rgba(130,150,255,.2)" : "none",
                      cursor: "pointer",
                      textAlign: "left",
                    },
                    children: [
                      i.jsx("span", {
                        style: {
                          width: 6,
                          height: 26,
                          borderRadius: 999,
                          background: u.color,
                          flexShrink: 0,
                        },
                      }),
                      i.jsx("span", {
                        style: {
                          fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: 15,
                          color: "#E8EEFF",
                          flex: 1,
                        },
                        children: u.area,
                      }),
                      i.jsxs("span", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#9AA9D0",
                        },
                        children: [u.doctores.length, " médicos"],
                      }),
                      g > 0 &&
                        i.jsxs("span", {
                          style: {
                            fontFamily: "Inter, sans-serif",
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: "#FF7A93",
                            background: "rgba(255,93,122,.14)",
                            padding: "2px 9px",
                            borderRadius: 999,
                          },
                          children: [g, " incidencias"],
                        }),
                      i.jsx(zu, {
                        size: 16,
                        color: "#7C8DB8",
                        style: {
                          transform: h ? "rotate(90deg)" : "none",
                          transition: "transform 0.15s ease",
                        },
                      }),
                    ],
                  }),
                  h &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsxs("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns:
                              "1.9fr 1.5fr 1.6fr 0.9fr 1.1fr",
                            padding: "10px 18px",
                            fontSize: 11.5,
                            fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                            color: "#7C8DB8",
                            textTransform: "uppercase",
                            letterSpacing: 0.6,
                            borderBottom: "1px solid rgba(255,255,255,.05)",
                          },
                          children: [
                            i.jsx("span", { children: "Médico" }),
                            i.jsx("span", { children: "Especialidad" }),
                            i.jsx("span", { children: "Horario" }),
                            i.jsx("span", { children: "Hoy" }),
                            i.jsx("span", {}),
                          ],
                        }),
                        u.doctores.map((x, E) => {
                          const b = x.asistencia[x.asistencia.length - 1],
                            p = Ua[b.estado];
                          return i.jsxs(
                            "div",
                            {
                              style: {
                                display: "grid",
                                gridTemplateColumns:
                                  "1.9fr 1.5fr 1.6fr 0.9fr 1.1fr",
                                padding: "13px 18px",
                                fontSize: 13.5,
                                fontFamily: "Inter, sans-serif",
                                color: "#E8EEFF",
                                borderBottom:
                                  E < u.doctores.length - 1
                                    ? "1px solid rgba(255,255,255,.05)"
                                    : "none",
                                alignItems: "center",
                              },
                              children: [
                                i.jsx("button", {
                                  onClick: () => t(x),
                                  style: {
                                    fontWeight: 500,
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    textAlign: "left",
                                    cursor: "pointer",
                                    color: "#E8EEFF",
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: 13.5,
                                  },
                                  children: x.nombre,
                                }),
                                i.jsx("span", {
                                  style: { color: "#9AA9D0", fontSize: 12.5 },
                                  children: x.esp,
                                }),
                                i.jsx("span", {
                                  style: {
                                    fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                                    fontSize: 12,
                                    color: "#9AA9D0",
                                  },
                                  children: x.turno,
                                }),
                                i.jsx("span", {
                                  style: {
                                    fontSize: 11.5,
                                    fontWeight: 600,
                                    color: p.color,
                                    background: p.bg,
                                    padding: "3px 9px",
                                    borderRadius: 999,
                                    width: "fit-content",
                                  },
                                  children: p.label,
                                }),
                                i.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    gap: 6,
                                    justifyContent: "flex-end",
                                  },
                                  children: [
                                    e &&
                                      i.jsxs("button", {
                                        onClick: () => e(x.id),
                                        title: `Escribir a ${x.nombre}`,
                                        style: {
                                          border: "1px solid rgba(130,150,255,.2)",
                                          background: "rgba(56,189,248,.09)",
                                          borderRadius: 8,
                                          padding: "5px 9px",
                                          cursor: "pointer",
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 5,
                                          color: "#38BDF8",
                                          fontFamily: "Inter, sans-serif",
                                          fontSize: 11.5,
                                          fontWeight: 600,
                                        },
                                        children: [
                                          i.jsx(Du, { size: 13 }),
                                          " Escribir",
                                        ],
                                      }),
                                    i.jsx("button", {
                                      onClick: () => t(x),
                                      title: "Ver asistencia",
                                      style: {
                                        border: "1px solid rgba(130,150,255,.2)",
                                        background: "rgba(255,255,255,.035)",
                                        borderRadius: 8,
                                        padding: "5px 8px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#9AA9D0",
                                      },
                                      children: i.jsx(nc, { size: 13 }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            x.id,
                          );
                        }),
                      ],
                    }),
                ],
              },
              u.area,
            );
          }),
          c.length === 0 &&
            i.jsxs("div", {
              style: {
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 14,
                padding: 18,
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#7C8DB8",
              },
              children: ['Ningún médico coincide con "', r, '".'],
            }),
        ],
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: 14,
        },
        children:
          "Cada bloque es un área del hospital con los médicos que le corresponden. Toca el nombre de un médico para ver, día por día, en qué fecha faltó o llegó tarde durante las últimas dos semanas. AFINTY genera una alerta automática — con nombre y fecha — cuando alguien no marca ingreso después del horario comprometido, y la escala a Jefatura de Personal si se repite.",
      }),
      n && i.jsx(F1, { doc: n, onClose: () => t(null) }),
    ],
  });
}
function fc({ adjuntos: e, onQuitar: n }) {
  return !e || e.length === 0
    ? null
    : i.jsx("div", {
        style: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 },
        children: e.map((t) =>
          i.jsxs(
            "div",
            {
              style: {
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 10,
                padding: 6,
                width: 118,
                background: "rgba(255,255,255,.035)",
                position: "relative",
              },
              children: [
                n &&
                  i.jsx("button", {
                    onClick: () => n(t.id),
                    title: "Quitar adjunto",
                    style: {
                      position: "absolute",
                      top: -7,
                      right: -7,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "1px solid rgba(130,150,255,.2)",
                      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                    },
                    children: i.jsx(En, { size: 11, color: "#7C8DB8" }),
                  }),
                p1(t.tipo)
                  ? i.jsx("a", {
                      href: t.dataUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      children: i.jsx("img", {
                        src: t.dataUrl,
                        alt: t.nombre,
                        style: {
                          width: "100%",
                          height: 70,
                          objectFit: "cover",
                          borderRadius: 7,
                          display: "block",
                        },
                      }),
                    })
                  : i.jsx("a", {
                      href: t.dataUrl,
                      download: t.nombre,
                      style: {
                        height: 70,
                        borderRadius: 7,
                        background: "rgba(255,255,255,.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      },
                      children: i.jsx(Jo, { size: 26, color: "#38BDF8" }),
                    }),
                i.jsx("div", {
                  title: t.nombre,
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10.5,
                    color: "#C2CDEB",
                    marginTop: 5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                  children: t.nombre,
                }),
                i.jsx("div", {
                  style: {
                    fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                    fontSize: 9.5,
                    color: "#7C8DB8",
                  },
                  children: m1(t.tamano),
                }),
              ],
            },
            t.id,
          ),
        ),
      });
}
function pc({ cita: e }) {
  return e
    ? i.jsxs("div", {
        style: {
          border: "1px solid rgba(56,189,248,.3)",
          background: "rgba(56,189,248,.09)",
          borderRadius: 10,
          padding: "10px 14px",
          marginTop: 10,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        },
        children: [
          i.jsx(Wt, {
            size: 16,
            color: "#38BDF8",
            style: { flexShrink: 0, marginTop: 2 },
          }),
          i.jsxs("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12.5,
              color: "#E8EEFF",
              lineHeight: 1.55,
            },
            children: [
              i.jsx("div", { style: { fontWeight: 600 }, children: e.nombre }),
              i.jsxs("div", {
                style: { color: "#9AA9D0" },
                children: ["DNI ", e.dni, " · ", e.fecha, " a las ", e.hora],
              }),
              i.jsxs("div", {
                style: { color: "#9AA9D0" },
                children: [e.doctor, " — ", e.esp],
              }),
            ],
          }),
        ],
      })
    : null;
}
function I1({
  remitente: e,
  mensajes: n,
  onEnviar: t,
  onMarcarLeido: r,
  citasDisponibles: o,
  destinoInicial: a,
  onConsumirDestino: l,
}) {
  const [s, d] = F.useState("recibidos"),
    [c, m] = F.useState(null),
    [u, h] = F.useState(""),
    [g, x] = F.useState(""),
    [E, b] = F.useState(""),
    [p, f] = F.useState([]),
    [y, v] = F.useState(""),
    [j, C] = F.useState(""),
    [I, A] = F.useState(!1),
    O = F.useRef(null);
  F.useEffect(() => {
    a &&
      (d("nuevo"),
      a.paraId != null && h(String(a.paraId)),
      a.citaKey && v(a.citaKey),
      a.asunto && x(a.asunto),
      A(!1),
      l && l());
  }, [a]);
  const T = n
      .filter((w) => w.paraId === e.id)
      .sort((w, Q) => Q.fecha.localeCompare(w.fecha)),
    J = n
      .filter((w) => w.deId === e.id)
      .sort((w, Q) => Q.fecha.localeCompare(w.fecha)),
    Re = T.filter((w) => !w.leido).length,
    Oe = {
      id: bo,
      nombre: "Jefatura de Personal",
      esp: "Gestión Administrativa",
      area: "Dirección y Gestión",
    },
    qe = Vt(V.filter((w) => w.id !== e.id)),
    bn = [...V, Oe],
    Fe = o.find((w) => w.key === y) || null;
  function rn(w) {
    (Array.from(w.target.files || []).forEach((fe) => {
      if (fe.size > Yi * 1024 * 1024) {
        C(`${fe.name} pesa más de ${Yi} MB. Comprímelo o envíalo por partes.`);
        return;
      }
      const ct = new FileReader();
      ((ct.onload = () => {
        f((Gt) => [
          ...Gt,
          {
            id: `${Date.now()}-${fe.name}-${Gt.length}`,
            nombre: fe.name,
            tipo: fe.type,
            tamano: fe.size,
            dataUrl: ct.result,
          },
        ]);
      }),
        (ct.onerror = () => C(`No se pudo leer ${fe.name}. Intenta de nuevo.`)),
        ct.readAsDataURL(fe));
    }),
      (w.target.value = ""));
  }
  function B() {
    (h(""), x(""), b(""), f([]), v(""), C(""));
  }
  function N() {
    if (!u) {
      C("Elige a qué médico le escribes.");
      return;
    }
    if (!E.trim() && p.length === 0 && !Fe) {
      C("Escribe un mensaje o adjunta un documento antes de enviarlo.");
      return;
    }
    const w = bn.find((Q) => Q.id === Number(u));
    (t({
      id: `msg-${Date.now()}`,
      deId: e.id,
      deNombre: e.nombre,
      deEsp: e.esp,
      deArea: e.area,
      paraId: w.id,
      paraNombre: w.nombre,
      paraEsp: w.esp,
      paraArea: w.area,
      asunto: g.trim() || "Sin asunto",
      texto: E.trim(),
      adjuntos: p,
      cita: Fe ? Fe.data : null,
      fecha: new Date().toISOString(),
      leido: !1,
    }),
      B(),
      A(!0),
      d("enviados"));
  }
  function k(w) {
    (m(w), !w.leido && w.paraId === e.id && r(w.id));
  }
  function L(w) {
    (d("nuevo"),
      h(String(w.deId)),
      x(w.asunto.startsWith("Re:") ? w.asunto : `Re: ${w.asunto}`),
      b(""),
      f([]),
      v(""),
      m(null),
      A(!1));
  }
  const U = s === "recibidos" ? T : J,
    We = [
      { key: "recibidos", label: `Recibidos${Re ? ` (${Re})` : ""}` },
      { key: "enviados", label: "Enviados" },
      { key: "nuevo", label: "Escribir mensaje" },
    ],
    Ce = {
      width: "100%",
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid rgba(130,150,255,.2)",
      fontFamily: "Inter, sans-serif",
      fontSize: 13.5,
      marginBottom: 12,
      boxSizing: "border-box",
    },
    on = {
      fontFamily: "Inter, sans-serif",
      fontSize: 12,
      color: "#9AA9D0",
      marginBottom: 4,
      display: "block",
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Comunicación entre áreas",
        title: "Mensajes del personal",
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 16,
        },
        children:
          "Escribe a cualquier médico del hospital sin salir de su consultorio. Si un paciente está siendo atendido y necesita que otro servicio revise algo, adjunta su cita, sus documentos o una foto del examen y llega directo a la bandeja del colega.",
      }),
      i.jsx("div", {
        style: {
          display: "flex",
          background: "rgba(255,255,255,.06)",
          borderRadius: 10,
          padding: 4,
          marginBottom: 18,
          maxWidth: 480,
        },
        children: We.map((w) =>
          i.jsx(
            "button",
            {
              onClick: () => {
                (d(w.key), A(!1));
              },
              style: {
                flex: 1,
                padding: "9px 0",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 12.5,
                background: s === w.key ? "rgba(56,189,248,.22)" : "transparent",
                color: s === w.key ? "#E8EEFF" : "#7C8DB8",
              },
              children: w.label,
            },
            w.key,
          ),
        ),
      }),
      s === "nuevo"
        ? i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 14,
              padding: 22,
              maxWidth: 560,
            },
            children: [
              i.jsx("label", { style: on, children: "Para" }),
              i.jsxs("select", {
                value: u,
                onChange: (w) => h(w.target.value),
                style: Ce,
                children: [
                  i.jsx("option", { value: "", children: "Elige un médico…" }),
                  qe.map((w) =>
                    i.jsx(
                      "optgroup",
                      {
                        label: w.area,
                        children: w.doctores.map((Q) =>
                          i.jsxs(
                            "option",
                            { value: Q.id, children: [Q.nombre, " · ", Q.esp] },
                            Q.id,
                          ),
                        ),
                      },
                      w.area,
                    ),
                  ),
                  e.id !== bo &&
                    i.jsx("optgroup", {
                      label: "Administración",
                      children: i.jsx("option", {
                        value: bo,
                        children:
                          "Jefatura de Personal · Gestión Administrativa",
                      }),
                    }),
                ],
              }),
              i.jsx("label", { style: on, children: "Asunto" }),
              i.jsx("input", {
                value: g,
                onChange: (w) => x(w.target.value),
                placeholder:
                  "Interconsulta, resultado de laboratorio, traslado…",
                style: Ce,
              }),
              i.jsx("label", { style: on, children: "Mensaje" }),
              i.jsx("textarea", {
                value: E,
                onChange: (w) => b(w.target.value),
                rows: 5,
                placeholder: "Cuéntale al colega qué necesitas y para cuándo.",
                style: { ...Ce, resize: "vertical", lineHeight: 1.5 },
              }),
              i.jsx("label", {
                style: on,
                children: "Paciente relacionado (opcional)",
              }),
              i.jsxs("select", {
                value: y,
                onChange: (w) => v(w.target.value),
                style: Ce,
                children: [
                  i.jsx("option", {
                    value: "",
                    children: "Sin paciente adjunto",
                  }),
                  o.map((w) =>
                    i.jsx("option", { value: w.key, children: w.label }, w.key),
                  ),
                ],
              }),
              Fe && i.jsx(pc, { cita: Fe.data }),
              i.jsxs("div", {
                style: { marginTop: 14, marginBottom: 6 },
                children: [
                  i.jsxs("button", {
                    onClick: () => {
                      var w;
                      return (w = O.current) == null ? void 0 : w.click();
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1px dashed rgba(56,189,248,.3)",
                      background: "rgba(56,189,248,.09)",
                      color: "#38BDF8",
                      borderRadius: 10,
                      padding: "11px 16px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                      width: "100%",
                      justifyContent: "center",
                    },
                    children: [
                      i.jsx(ac, { size: 15 }),
                      " Cargar documentos o fotos",
                    ],
                  }),
                  i.jsx("input", {
                    ref: O,
                    type: "file",
                    multiple: !0,
                    accept: "image/*,.pdf,.doc,.docx,.jpg,.jpeg,.png",
                    onChange: rn,
                    style: { display: "none" },
                  }),
                  i.jsxs("div", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 11,
                      color: "#5E6E9A",
                      marginTop: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    },
                    children: [
                      i.jsx(Tm, { size: 12 }),
                      " Fotos de exámenes, recetas o informes en PDF. Hasta ",
                      Yi,
                      " MB por archivo.",
                    ],
                  }),
                ],
              }),
              i.jsx(fc, {
                adjuntos: p,
                onQuitar: (w) => f((Q) => Q.filter((fe) => fe.id !== w)),
              }),
              j &&
                i.jsxs("div", {
                  style: {
                    marginTop: 12,
                    background: "rgba(255,93,122,.14)",
                    border: "1px solid rgba(255,93,122,.34)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  },
                  children: [
                    i.jsx(xi, {
                      size: 16,
                      color: "#FF7A93",
                      style: { flexShrink: 0 },
                    }),
                    i.jsx("span", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#FF9B8A",
                      },
                      children: j,
                    }),
                  ],
                }),
              i.jsxs("button", {
                onClick: N,
                style: {
                  width: "100%",
                  marginTop: 16,
                  background: ee.ctaGrad,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "13px 0",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                },
                children: [i.jsx(Mu, { size: 15 }), " Enviar mensaje"],
              }),
            ],
          })
        : i.jsxs(i.Fragment, {
            children: [
              I &&
                s === "enviados" &&
                i.jsxs("div", {
                  style: {
                    background: "rgba(46,230,160,.13)",
                    border: "1px solid rgba(46,230,160,.32)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    marginBottom: 14,
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  },
                  children: [
                    i.jsx(jn, {
                      size: 17,
                      color: "#2EE6A0",
                      style: { flexShrink: 0 },
                    }),
                    i.jsx("span", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        color: "#5CF2B0",
                      },
                      children:
                        "Mensaje enviado. Aparecerá en la bandeja del colega apenas abra AFINTY.",
                    }),
                  ],
                }),
              U.length === 0
                ? i.jsxs("div", {
                    style: {
                      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                      border: "1px solid rgba(130,150,255,.2)",
                      borderRadius: 14,
                      padding: "40px 20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    },
                    children: [
                      i.jsx(Xo, { size: 26, color: "#5E6E9A" }),
                      i.jsx("span", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          color: "#9AA9D0",
                        },
                        children:
                          s === "recibidos"
                            ? "Tu bandeja está vacía."
                            : "Todavía no has enviado ningún mensaje.",
                      }),
                      i.jsx("button", {
                        onClick: () => d("nuevo"),
                        style: {
                          background: ee.ctaGrad,
                          color: "#fff",
                          border: "none",
                          borderRadius: 10,
                          padding: "9px 18px",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          cursor: "pointer",
                        },
                        children: "Escribir a un colega",
                      }),
                    ],
                  })
                : i.jsx("div", {
                    style: { display: "flex", flexDirection: "column", gap: 8 },
                    children: U.map((w) => {
                      const Q =
                          s === "recibidos"
                            ? {
                                nombre: w.deNombre,
                                esp: w.deEsp,
                                area: w.deArea,
                              }
                            : {
                                nombre: w.paraNombre,
                                esp: w.paraEsp,
                                area: w.paraArea,
                              },
                        fe = s === "recibidos" && !w.leido;
                      return i.jsxs(
                        "button",
                        {
                          onClick: () => k(w),
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            textAlign: "left",
                            width: "100%",
                            background: fe ? "rgba(56,189,248,.09)" : "rgba(255,255,255,.04)",
                            border: `1px solid ${fe ? "rgba(56,189,248,.3)" : "rgba(130,150,255,.2)"}`,
                            borderRadius: 12,
                            padding: "13px 16px",
                            cursor: "pointer",
                          },
                          children: [
                            i.jsx("span", {
                              style: {
                                width: 6,
                                height: 34,
                                borderRadius: 999,
                                background: Tr(Q.area),
                                flexShrink: 0,
                              },
                            }),
                            i.jsxs("div", {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                i.jsx("div", {
                                  style: {
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: 13.5,
                                    color: "#E8EEFF",
                                    fontWeight: fe ? 700 : 500,
                                  },
                                  children:
                                    s === "recibidos"
                                      ? Q.nombre
                                      : `Para ${Q.nombre}`,
                                }),
                                i.jsx("div", {
                                  style: {
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: 12.5,
                                    color: "#C2CDEB",
                                    marginTop: 2,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  },
                                  children: w.asunto,
                                }),
                                i.jsxs("div", {
                                  style: {
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: 11.5,
                                    color: "#7C8DB8",
                                    marginTop: 2,
                                  },
                                  children: [Q.area, " · ", Q.esp],
                                }),
                              ],
                            }),
                            w.cita &&
                              i.jsx(Wt, {
                                size: 15,
                                color: "#38BDF8",
                                style: { flexShrink: 0 },
                              }),
                            w.adjuntos.length > 0 &&
                              i.jsxs("span", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 4,
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: 11.5,
                                  color: "#9AA9D0",
                                  flexShrink: 0,
                                },
                                children: [
                                  i.jsx(ac, { size: 13 }),
                                  " ",
                                  w.adjuntos.length,
                                ],
                              }),
                            i.jsx("span", {
                              style: {
                                fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                                fontSize: 11,
                                color: "#7C8DB8",
                                flexShrink: 0,
                              },
                              children: uc(w.fecha),
                            }),
                            fe &&
                              i.jsx("span", {
                                style: {
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: 10.5,
                                  fontWeight: 700,
                                  color: "#fff",
                                  background: "#38BDF8",
                                  padding: "2px 8px",
                                  borderRadius: 999,
                                  flexShrink: 0,
                                },
                                children: "Nuevo",
                              }),
                          ],
                        },
                        w.id,
                      );
                    }),
                  }),
            ],
          }),
      c &&
        i.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: 16,
          },
          onClick: () => m(null),
          children: i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: 26,
              width: 520,
              maxWidth: "94vw",
              maxHeight: "86vh",
              overflowY: "auto",
            },
            onClick: (w) => w.stopPropagation(),
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 14,
                },
                children: [
                  i.jsxs("div", {
                    style: { paddingRight: 12 },
                    children: [
                      i.jsx("div", {
                        style: {
                          fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: 17,
                          color: "#E8EEFF",
                        },
                        children: c.asunto,
                      }),
                      i.jsxs("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12.5,
                          color: "#9AA9D0",
                          marginTop: 3,
                        },
                        children: [
                          "De ",
                          c.deNombre,
                          " (",
                          c.deArea,
                          ") · para ",
                          c.paraNombre,
                          " (",
                          c.paraArea,
                          ")",
                        ],
                      }),
                      i.jsx("div", {
                        style: {
                          fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                          fontSize: 11.5,
                          color: "#7C8DB8",
                          marginTop: 2,
                        },
                        children: uc(c.fecha),
                      }),
                    ],
                  }),
                  i.jsx(En, {
                    size: 18,
                    style: {
                      cursor: "pointer",
                      color: "#7C8DB8",
                      flexShrink: 0,
                    },
                    onClick: () => m(null),
                  }),
                ],
              }),
              c.texto &&
                i.jsx("div", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13.5,
                    color: "#C2CDEB",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                    background: "rgba(255,255,255,.035)",
                    borderRadius: 10,
                    padding: "14px 16px",
                  },
                  children: c.texto,
                }),
              i.jsx(pc, { cita: c.cita }),
              i.jsx(fc, { adjuntos: c.adjuntos }),
              c.paraId === e.id &&
                i.jsx("button", {
                  onClick: () => L(c),
                  style: {
                    width: "100%",
                    marginTop: 18,
                    background: ee.ctaGrad,
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "11px 0",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 13.5,
                    cursor: "pointer",
                  },
                  children: "Responder",
                }),
            ],
          }),
        }),
    ],
  });
}
function z1({ cama: e, onClick: n, index: t }) {
  const r = e.ocupada,
    o = r ? "#FF5D7A" : "#2EE6A0",
    a = r ? "rgba(255,93,122,.14)" : "rgba(46,230,160,.13)",
    l = r
      ? `Cama ${t + 1} · Ocupada${e.nombre ? " — " + e.nombre : ""} — clic para ver / liberar`
      : `Cama ${t + 1} · Libre — clic para asignar paciente`;
  return i.jsx("button", {
    onClick: n,
    title: l,
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      border: `1.5px solid ${o}`,
      background: a,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.1s ease",
      padding: 0,
    },
    onMouseDown: (s) => (s.currentTarget.style.transform = "scale(0.92)"),
    onMouseUp: (s) => (s.currentTarget.style.transform = "scale(1)"),
    children: i.jsx(Dr, { size: 22, color: o, strokeWidth: 2 }),
  });
}
function A1({ camas: e, onOcupar: n, onLiberar: t }) {
  const [r, o] = F.useState(null),
    [a, l] = F.useState(null),
    [s, d] = F.useState({ nombre: "", dni: "" }),
    c = Pr.map((g) => {
      const x = e[g.area] || [],
        E = x.filter((b) => !b.ocupada).length;
      return { ...g, estados: x, libres: E };
    });
  function m(g, x) {
    (d({ nombre: "", dni: "" }), o({ area: g, idx: x }));
  }
  function u() {
    s.nombre.trim() &&
      (n(r.area, r.idx, {
        nombre: s.nombre.trim(),
        dni: s.dni.trim() || "Sin DNI",
      }),
      o(null));
  }
  function h() {
    (t(a.area, a.idx), l(null));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Disponibilidad en tiempo real",
        title: "Camas por área",
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 16,
        },
        children:
          "Toca una cama libre para registrar el nombre y DNI del paciente que la ocupará. Toca una cama ocupada para ver quién está y liberarla.",
      }),
      i.jsx("div", {
        style: { display: "flex", flexDirection: "column", gap: 18 },
        children: c.map((g) =>
          i.jsxs(
            "div",
            {
              style: {
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 14,
                padding: 18,
              },
              children: [
                i.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  },
                  children: [
                    i.jsx("span", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#E8EEFF",
                      },
                      children: g.area,
                    }),
                    i.jsxs("span", {
                      style: {
                        fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                        fontSize: 13,
                        color: "#9AA9D0",
                      },
                      children: [g.libres, " libres / ", g.total],
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: { display: "flex", flexWrap: "wrap", gap: 8 },
                  children: g.estados.map((x, E) =>
                    i.jsx(
                      z1,
                      {
                        cama: x,
                        index: E,
                        onClick: () =>
                          x.ocupada
                            ? l({ area: g.area, idx: E, cama: x })
                            : m(g.area, E),
                      },
                      E,
                    ),
                  ),
                }),
              ],
            },
            g.area,
          ),
        ),
      }),
      r &&
        i.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          },
          children: i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: 26,
              width: 380,
              maxWidth: "90vw",
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                },
                children: [
                  i.jsxs("span", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#E8EEFF",
                    },
                    children: ["Asignar cama ", r.idx + 1, " · ", r.area],
                  }),
                  i.jsx(En, {
                    size: 18,
                    style: { cursor: "pointer", color: "#7C8DB8" },
                    onClick: () => o(null),
                  }),
                ],
              }),
              i.jsx("input", {
                placeholder: "Nombre del paciente",
                value: s.nombre,
                onChange: (g) => d({ ...s, nombre: g.target.value }),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  marginBottom: 10,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("input", {
                placeholder: "DNI",
                value: s.dni,
                onChange: (g) => d({ ...s, dni: g.target.value }),
                onKeyDown: (g) => g.key === "Enter" && u(),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  marginBottom: 16,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("button", {
                onClick: u,
                style: {
                  width: "100%",
                  background: ee.ctaGrad,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "12px 0",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                },
                children: "Ocupar cama",
              }),
            ],
          }),
        }),
      a &&
        i.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          },
          children: i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: 26,
              width: 380,
              maxWidth: "90vw",
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                },
                children: [
                  i.jsxs("span", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#E8EEFF",
                    },
                    children: ["Cama ", a.idx + 1, " · ", a.area],
                  }),
                  i.jsx(En, {
                    size: 18,
                    style: { cursor: "pointer", color: "#7C8DB8" },
                    onClick: () => l(null),
                  }),
                ],
              }),
              i.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  color: "#C2CDEB",
                  marginBottom: 18,
                },
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "Paciente:" }),
                      " ",
                      a.cama.nombre || "Sin registrar",
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "DNI:" }),
                      " ",
                      a.cama.dni || "Sin registrar",
                    ],
                  }),
                ],
              }),
              i.jsx("button", {
                onClick: h,
                style: {
                  width: "100%",
                  background: "rgba(255,93,122,.14)",
                  color: "#FF7A93",
                  border: "1px solid rgba(255,93,122,.34)",
                  borderRadius: 10,
                  padding: "10px 0",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                },
                children: "Liberar cama",
              }),
            ],
          }),
        }),
    ],
  });
}
function B1({ camas: e }) {
  const [n, t] = F.useState(""),
    [r, o] = F.useState(!1),
    [a, l] = F.useState(null),
    s = Pr.map((c) => {
      const u = (e[c.area] || []).filter((h) => !h.ocupada).length;
      return { area: c.area, total: c.total, libres: u };
    });
  function d() {
    const c = n.trim();
    if ((o(!0), !c)) {
      l(null);
      return;
    }
    for (const m of Pr) {
      const u = e[m.area] || [],
        h = u.findIndex((g) => g.ocupada && g.dni && g.dni.trim() === c);
      if (h !== -1) {
        l({ encontrado: !0, area: m.area, numero: h + 1, nombre: u[h].nombre });
        return;
      }
    }
    l({ encontrado: !1 });
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Consulta para familiares",
        title: "Ubicación de camas",
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 18,
        },
        children:
          "Por privacidad, AFINTY solo muestra en qué cama está tu familiar si ingresas su DNI exacto. Sin el DNI, únicamente puedes ver cuántas camas hay libres por área.",
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: 20,
          display: "flex",
          gap: 10,
          marginBottom: 16,
          flexWrap: "wrap",
        },
        children: [
          i.jsx("input", {
            value: n,
            onChange: (c) => t(c.target.value),
            onKeyDown: (c) => c.key === "Enter" && d(),
            placeholder: "DNI del paciente",
            style: {
              flex: "1 1 200px",
              padding: "11px 14px",
              borderRadius: 10,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              boxSizing: "border-box",
            },
          }),
          i.jsxs("button", {
            onClick: d,
            style: {
              background: ee.ctaGrad,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "0 20px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 13.5,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            },
            children: [i.jsx(Ru, { size: 15 }), " Buscar"],
          }),
        ],
      }),
      r &&
        (n.trim()
          ? a != null && a.encontrado
            ? i.jsxs("div", {
                style: {
                  background: "rgba(46,230,160,.13)",
                  border: "1px solid rgba(46,230,160,.32)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  marginBottom: 20,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                },
                children: [
                  i.jsx(jn, {
                    size: 18,
                    color: "#2EE6A0",
                    style: { flexShrink: 0 },
                  }),
                  i.jsxs("span", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      color: "#5CF2B0",
                    },
                    children: [
                      a.nombre,
                      " se encuentra en la ",
                      i.jsxs("strong", { children: ["cama ", a.numero] }),
                      " del área ",
                      i.jsx("strong", { children: a.area }),
                      ".",
                    ],
                  }),
                ],
              })
            : i.jsxs("div", {
                style: {
                  background: "rgba(255,93,122,.14)",
                  border: "1px solid rgba(255,93,122,.34)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  marginBottom: 20,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                },
                children: [
                  i.jsx(xi, {
                    size: 18,
                    color: "#FF7A93",
                    style: { flexShrink: 0 },
                  }),
                  i.jsx("span", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      color: "#FF9B8A",
                    },
                    children:
                      "No se encontró ningún paciente registrado con ese DNI. Verifica el número o consulta con el personal del hospital.",
                  }),
                ],
              })
          : i.jsx("div", {
              style: {
                background: "rgba(255,181,71,.14)",
                border: "1px solid rgba(255,181,71,.35)",
                borderRadius: 12,
                padding: "12px 16px",
                marginBottom: 20,
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#FFC857",
              },
              children: "Ingresa un número de DNI para buscar.",
            })),
      i.jsx("div", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#E8EEFF",
          marginBottom: 10,
        },
        children: "Ocupación general por área",
      }),
      i.jsx("div", {
        style: { display: "flex", flexDirection: "column", gap: 10 },
        children: s.map((c) =>
          i.jsxs(
            "div",
            {
              style: {
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 12,
                padding: "12px 16px",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Inter, sans-serif",
                fontSize: 13.5,
                color: "#C2CDEB",
              },
              children: [
                i.jsx("span", { children: c.area }),
                i.jsxs("span", {
                  style: {
                    fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                    color: "#9AA9D0",
                  },
                  children: [c.libres, " libres / ", c.total],
                }),
              ],
            },
            c.area,
          ),
        ),
      }),
    ],
  });
}
async function D1(e) {
  const n =
      (
        await ec(
          async () => {
            const { default: v } =
              await import("./exceljs.min-CGpJgse4.js").then((j) => j.e);
            return { default: v };
          },
          [],
          import.meta.url,
        )
      ).default ||
      (await ec(
        () => import("./exceljs.min-CGpJgse4.js").then((v) => v.e),
        [],
        import.meta.url,
      )),
    t = new n.Workbook();
  ((t.creator = "AFINTY"), (t.created = new Date()));
  const r = new Date(),
    o = r.toLocaleString("es-PE", { dateStyle: "long", timeStyle: "short" }),
    a = { style: "thin", color: { argb: "FFD5DEE4" } },
    l = { top: a, left: a, bottom: a, right: a },
    s = t.addWorksheet("Inventario", {
      views: [{ state: "frozen", ySplit: 4 }],
    });
  ((s.columns = [
    { key: "n", width: 6 },
    { key: "codigo", width: 18 },
    { key: "nombre", width: 52 },
    { key: "cat", width: 22 },
    { key: "ubic", width: 42 },
    { key: "stock", width: 14 },
    { key: "estado", width: 18 },
  ]),
    s.mergeCells("A1:G1"),
    (s.getCell("A1").value = "AFINTY · Inventario de almacén"),
    (s.getCell("A1").font = {
      name: "Calibri",
      size: 18,
      bold: !0,
      color: { argb: "FFFFFFFF" },
    }),
    (s.getCell("A1").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0E7C86" },
    }),
    (s.getCell("A1").alignment = {
      vertical: "middle",
      horizontal: "left",
      indent: 1,
    }),
    (s.getRow(1).height = 34),
    s.mergeCells("A2:G2"),
    (s.getCell("A2").value = `${Ie.nombre} · Generado el ${o}`),
    (s.getCell("A2").font = {
      size: 10.5,
      italic: !0,
      color: { argb: "FF5B6B76" },
    }),
    (s.getCell("A2").alignment = { indent: 1 }));
  const d = s.getRow(4);
  ((d.values = [
    "N°",
    "Código de barras",
    "Medicamento",
    "Categoría",
    "Ubicación en almacén",
    "Unidades",
    "Estado",
  ]),
    (d.height = 24),
    d.eachCell((v) => {
      ((v.font = { bold: !0, color: { argb: "FFFFFFFF" } }),
        (v.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF0A3E44" },
        }),
        (v.alignment = { vertical: "middle", horizontal: "center" }),
        (v.border = l));
    }));
  const c = [...e].sort((v, j) => v.stock - j.stock);
  c.forEach((v, j) => {
    const C = s.getRow(5 + j),
      I = ke[v.estado];
    ((C.values = [
      j + 1,
      v.codigo,
      v.nombre,
      v.cat,
      Tu(v.cat),
      v.stock,
      I.label,
    ]),
      (C.height = 20),
      C.eachCell((A, O) => {
        ((A.border = l),
          (A.alignment = {
            vertical: "middle",
            horizontal: [1, 2, 6, 7].includes(O) ? "center" : "left",
            wrapText: O === 3,
          }),
          j % 2 === 1 &&
            (A.fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: { argb: "FFF7F9FB" },
            }));
      }),
      (C.getCell(2).numFmt = "@"),
      (C.getCell(2).font = { name: "Consolas" }),
      (C.getCell(6).font = { bold: !0 }),
      (C.getCell(7).font = { bold: !0, color: { argb: I.argb } }),
      (C.getCell(7).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: I.fill },
      }));
  });
  const m = 4 + c.length,
    u = s.getRow(m + 1);
  ((u.getCell(5).value = "TOTAL EN ALMACÉN"),
    (u.getCell(6).value = {
      formula: `SUM(F5:F${m})`,
      result: c.reduce((v, j) => v + j.stock, 0),
    }),
    [5, 6].forEach((v) => {
      ((u.getCell(v).font = { bold: !0, size: 12 }),
        (u.getCell(v).fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFDDF4F0" },
        }),
        (u.getCell(v).border = l));
    }),
    (u.getCell(5).alignment = { horizontal: "right" }),
    (u.getCell(6).alignment = { horizontal: "center" }),
    (s.autoFilter = { from: "A4", to: `G${m}` }));
  const h = t.addWorksheet("Resumen por riesgo");
  ((h.columns = [
    { width: 24 },
    { width: 24 },
    { width: 18 },
    { width: 18 },
    { width: 22 },
  ]),
    h.mergeCells("A1:E1"),
    (h.getCell("A1").value = "Resumen del almacén por nivel de riesgo"),
    (h.getCell("A1").font = {
      size: 16,
      bold: !0,
      color: { argb: "FFFFFFFF" },
    }),
    (h.getCell("A1").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0E7C86" },
    }),
    (h.getCell("A1").alignment = { vertical: "middle", indent: 1 }),
    (h.getRow(1).height = 30),
    h.mergeCells("A2:E2"),
    (h.getCell("A2").value =
      `Rojo: ${Mr} unidades o menos · Amarillo: ${Mr + 1} a ${Dt} · Verde: más de ${Dt}`),
    (h.getCell("A2").font = {
      size: 10.5,
      italic: !0,
      color: { argb: "FF5B6B76" },
    }),
    (h.getCell("A2").alignment = { indent: 1 }));
  const g = h.getRow(4);
  ((g.values = [
    "Nivel de riesgo",
    "Significado",
    "Medicamentos",
    "Unidades",
    "% de las unidades",
  ]),
    g.eachCell((v) => {
      ((v.font = { bold: !0, color: { argb: "FFFFFFFF" } }),
        (v.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF0A3E44" },
        }),
        (v.alignment = { horizontal: "center", vertical: "middle" }),
        (v.border = l));
    }));
  const x = e.reduce((v, j) => v + j.stock, 0) || 1;
  ["crítico", "bajo", "normal"].forEach((v, j) => {
    const C = e.filter((T) => T.estado === v),
      I = C.reduce((T, J) => T + J.stock, 0),
      A = ke[v],
      O = h.getRow(5 + j);
    ((O.values = [A.label, A.sub, C.length, I, I / x]),
      (O.height = 22),
      O.eachCell((T, J) => {
        ((T.border = l),
          (T.alignment = {
            horizontal: J <= 2 ? "left" : "center",
            vertical: "middle",
          }));
      }),
      (O.getCell(1).font = { bold: !0, color: { argb: A.argb } }),
      (O.getCell(1).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: A.fill },
      }),
      (O.getCell(5).numFmt = "0.0%"));
  });
  const E = h.getRow(8);
  ((E.values = [
    "TOTAL",
    "",
    { formula: "SUM(C5:C7)", result: e.length },
    { formula: "SUM(D5:D7)", result: x },
    "",
  ]),
    E.eachCell((v) => {
      ((v.font = { bold: !0 }),
        (v.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFDDF4F0" },
        }),
        (v.border = l),
        (v.alignment = { horizontal: "center" }));
    }),
    (E.getCell(1).alignment = { horizontal: "left" }));
  const b = await t.xlsx.writeBuffer(),
    p = new Blob([b], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
    f = URL.createObjectURL(p),
    y = document.createElement("a");
  ((y.href = f),
    (y.download = `AFINTY_Inventario_Almacen_${r.toISOString().slice(0, 10)}.xlsx`),
    document.body.appendChild(y),
    y.click(),
    y.remove(),
    setTimeout(() => URL.revokeObjectURL(f), 2e3));
}
function Ki({ titulo: e, onClose: n, children: t }) {
  return i.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(15,23,42,0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 60,
    },
    onClick: n,
    children: i.jsxs("div", {
      style: {
        background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
        borderRadius: 16,
        padding: 26,
        width: 440,
        maxWidth: "92vw",
        maxHeight: "90vh",
        overflowY: "auto",
      },
      onClick: (r) => r.stopPropagation(),
      children: [
        i.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          },
          children: [
            i.jsx("div", {
              style: {
                fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 17,
                color: "#E8EEFF",
                paddingRight: 12,
              },
              children: e,
            }),
            i.jsx(En, {
              size: 18,
              style: { cursor: "pointer", color: "#7C8DB8", flexShrink: 0 },
              onClick: n,
            }),
          ],
        }),
        t,
      ],
    }),
  });
}
const pn = {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    border: "1px solid rgba(130,150,255,.2)",
    borderRadius: 10,
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    outline: "none",
  },
  nr = {
    display: "block",
    fontFamily: "Inter, sans-serif",
    fontSize: 12.5,
    fontWeight: 600,
    color: "#C2CDEB",
    marginBottom: 6,
  };
function R1({
  medicamentos: e,
  puedeEditar: n,
  onAgregar: t,
  onSumarStock: r,
}) {
  const [o, a] = F.useState(null),
    [l, s] = F.useState("todos"),
    [d, c] = F.useState(""),
    [m, u] = F.useState(!1),
    [h, g] = F.useState(null),
    [x, E] = F.useState({ nombre: "", cat: "", cantidad: "", codigo: "" }),
    [b, p] = F.useState({}),
    [f, y] = F.useState(""),
    [v, j] = F.useState(""),
    [C, I] = F.useState(""),
    [A, O] = F.useState(!1),
    T = F.useMemo(
      () =>
        Array.from(new Set(e.map((k) => k.cat))).sort((k, L) =>
          k.localeCompare(L, "es"),
        ),
      [e],
    ),
    J = e.reduce((k, L) => k + L.stock, 0),
    Re = ["crítico", "bajo", "normal"].map((k) => {
      const L = e.filter((U) => U.estado === k);
      return { k, n: L.length, u: L.reduce((U, We) => U + We.stock, 0) };
    }),
    Oe = e
      .filter((k) => l === "todos" || k.estado === l)
      .filter(
        (k) =>
          !d.trim() ||
          (k.nombre + " " + k.codigo)
            .toLowerCase()
            .includes(d.trim().toLowerCase()),
      );
  function qe(k) {
    (I(k), setTimeout(() => I(""), 3500));
  }
  function bn() {
    const k = {},
      L = x.nombre.trim(),
      U = Number(x.cantidad);
    (L || (k.nombre = "Escribe el nombre de la medicina."),
      x.cat.trim() || (k.cat = "Elige o escribe una categoría."),
      (!x.cantidad || !Number.isInteger(U) || U < 1) &&
        (k.cantidad = "Ingresa una cantidad entera de 1 o más."),
      sc(x.codigo)
        ? e.some((We) => We.codigo === x.codigo) &&
          (k.codigo =
            "Ese código de barras ya está registrado. Usa «Agregar stock» en esa medicina.")
        : (k.codigo = `El código de barras debe tener exactamente 13 números (llevas ${x.codigo.length}).`),
      p(k),
      !Object.keys(k).length &&
        (t({ nombre: L, cat: x.cat.trim(), stock: U, codigo: x.codigo }),
        u(!1),
        E({ nombre: "", cat: "", cantidad: "", codigo: "" }),
        qe(`«${L}» se agregó al almacén con ${U} unidades.`)));
  }
  function Fe() {
    const k = Number(f);
    if (!f || !Number.isInteger(k) || k < 1) {
      j("Ingresa una cantidad entera de 1 o más.");
      return;
    }
    (r(h.codigo, k),
      qe(`Se sumaron ${k} unidades a «${h.nombre}».`),
      g(null),
      y(""),
      j(""));
  }
  async function rn() {
    O(!0);
    try {
      (await D1(e), qe("Excel descargado."));
    } catch {
      qe("No se pudo generar el Excel. Intenta de nuevo.");
    }
    O(!1);
  }
  const B = {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: ee.ctaGrad,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      padding: "10px 16px",
      fontFamily: "Inter, sans-serif",
      fontSize: 13.5,
      fontWeight: 600,
      cursor: "pointer",
    },
    N = {
      ...B,
      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
      color: "#38BDF8",
      border: "1px solid #38BDF8",
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Almacén y farmacia · nombres reales (PNUME / DIGEMID)",
        title: "Medicamentos y equipos",
      }),
      i.jsxs("div", {
        style: {
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 18,
          alignItems: "center",
        },
        children: [
          n &&
            i.jsxs("button", {
              style: B,
              onClick: () => {
                (p({}), u(!0));
              },
              children: [i.jsx(ic, { size: 16 }), " Agregar medicina nueva"],
            }),
          i.jsxs("button", {
            style: N,
            onClick: rn,
            disabled: A,
            children: [
              A ? i.jsx(Bu, { size: 16 }) : i.jsx(Rm, { size: 16 }),
              " Descargar Excel",
            ],
          }),
          C &&
            i.jsx("span", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#2EE6A0",
                fontWeight: 600,
              },
              children: C,
            }),
        ],
      }),
      i.jsxs("div", {
        style: { display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 18 },
        children: [
          i.jsx(Rn, {
            label: "Total en almacén",
            value: J.toLocaleString("es-PE"),
            sub: `unidades · ${e.length} presentaciones`,
            accent: "#38BDF8",
            icon: Rr,
            iconBg: "rgba(56,189,248,.09)",
          }),
          Re.map((k) =>
            i.jsx(
              Rn,
              {
                label: ke[k.k].label,
                value: k.n,
                sub: `${k.u.toLocaleString("es-PE")} unidades · ${ke[k.k].sub.toLowerCase()}`,
                accent: ke[k.k].color,
                icon: k.k === "normal" ? jn : xi,
                iconBg: ke[k.k].bg,
              },
              k.k,
            ),
          ),
        ],
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: "14px 18px",
          marginBottom: 18,
        },
        children: [
          i.jsxs("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12.5,
              color: "#9AA9D0",
              marginBottom: 8,
            },
            children: [
              "Unidades por nivel de riesgo · ",
              i.jsxs("span", {
                style: { color: ke.crítico.color, fontWeight: 600 },
                children: ["rojo ≤ ", Mr],
              }),
              " · ",
              i.jsxs("span", {
                style: { color: ke.bajo.color, fontWeight: 600 },
                children: ["amarillo ", Mr + 1, "–", Dt],
              }),
              " · ",
              i.jsxs("span", {
                style: { color: ke.normal.color, fontWeight: 600 },
                children: ["verde > ", Dt],
              }),
            ],
          }),
          i.jsx("div", {
            style: {
              display: "flex",
              height: 14,
              borderRadius: 999,
              overflow: "hidden",
              background: "rgba(130,150,255,.2)",
            },
            children: Re.map((k) =>
              i.jsx(
                "div",
                {
                  title: `${ke[k.k].label}: ${k.u} unidades`,
                  style: {
                    width: `${J ? (k.u / J) * 100 : 0}%`,
                    background: ke[k.k].color,
                    transition: "width .5s ease",
                  },
                },
                k.k,
              ),
            ),
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 12,
          alignItems: "center",
        },
        children: [
          [
            ["todos", "Todos"],
            ["crítico", "Crítico"],
            ["bajo", "Por acabarse"],
            ["normal", "Suficiente"],
          ].map(([k, L]) =>
            i.jsx(
              "button",
              {
                onClick: () => s(k),
                style: {
                  border: "1px solid " + (l === k ? "#38BDF8" : "rgba(130,150,255,.2)"),
                  background: l === k ? "#38BDF8" : "rgba(255,255,255,.04)",
                  color: l === k ? "#fff" : "#C2CDEB",
                  borderRadius: 999,
                  padding: "6px 14px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12.5,
                  fontWeight: 600,
                  cursor: "pointer",
                },
                children: L,
              },
              k,
            ),
          ),
          i.jsx("input", {
            value: d,
            onChange: (k) => c(k.target.value),
            placeholder: "Buscar por nombre o código…",
            style: {
              ...pn,
              width: 260,
              marginLeft: "auto",
              padding: "7px 12px",
              fontSize: 13,
            },
          }),
        ],
      }),
      i.jsxs("div", {
        style: { display: "flex", flexDirection: "column", gap: 8 },
        children: [
          Oe.length === 0 &&
            i.jsx("div", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 13.5,
                color: "#7C8DB8",
                padding: 20,
              },
              children: "No hay medicinas con ese filtro.",
            }),
          Oe.map((k) => {
            const L = ke[k.estado];
            return i.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(130,150,255,.2)",
                  borderLeft: `5px solid ${L.color}`,
                  borderRadius: 12,
                  padding: "12px 18px",
                  flexWrap: "wrap",
                },
                children: [
                  i.jsxs("div", {
                    style: { flex: "1 1 260px", minWidth: 200 },
                    children: [
                      i.jsx("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          fontWeight: 500,
                          color: "#E8EEFF",
                        },
                        children: k.nombre,
                      }),
                      i.jsxs("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#7C8DB8",
                        },
                        children: [
                          k.cat,
                          " · ",
                          i.jsx("span", {
                            style: { fontFamily: "'Space Mono', 'IBM Plex Mono', monospace" },
                            children: k.codigo,
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    style: { flex: "1 1 120px" },
                    children: i.jsx("div", {
                      style: {
                        height: 8,
                        background: "rgba(130,150,255,.2)",
                        borderRadius: 999,
                        overflow: "hidden",
                      },
                      children: i.jsx("div", {
                        style: {
                          width: `${Math.min(k.stock, 100)}%`,
                          height: "100%",
                          background: L.color,
                          borderRadius: 999,
                        },
                      }),
                    }),
                  }),
                  i.jsxs("div", {
                    style: {
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#E8EEFF",
                      width: 70,
                      textAlign: "right",
                    },
                    children: [
                      k.stock,
                      i.jsx("span", {
                        style: {
                          fontSize: 11,
                          color: "#7C8DB8",
                          fontWeight: 400,
                        },
                        children: " u.",
                      }),
                    ],
                  }),
                  i.jsx("button", {
                    onClick: () => a(k),
                    style: {
                      background: L.bg,
                      color: L.color,
                      border: "none",
                      borderRadius: 999,
                      padding: "5px 12px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      minWidth: 96,
                    },
                    children: L.label,
                  }),
                  n &&
                    i.jsxs("button", {
                      onClick: () => {
                        (g(k), y(""), j(""));
                      },
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                        color: "#38BDF8",
                        border: "1px solid #38BDF8",
                        borderRadius: 8,
                        padding: "5px 10px",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                      },
                      children: [i.jsx(lc, { size: 13 }), " Agregar stock"],
                    }),
                ],
              },
              k.codigo,
            );
          }),
        ],
      }),
      o &&
        i.jsx(Ki, {
          titulo: o.nombre,
          onClose: () => a(null),
          children: i.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              color: "#C2CDEB",
            },
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: "Código de barras:" }),
                  " ",
                  i.jsx("span", {
                    style: { fontFamily: "'Space Mono', 'IBM Plex Mono', monospace" },
                    children: o.codigo,
                  }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: "Área / ubicación:" }),
                  " ",
                  Tu(o.cat),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: "Categoría:" }),
                  " ",
                  o.cat,
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("strong", { children: "Stock actual:" }),
                  " ",
                  o.stock,
                  " unidades",
                ],
              }),
              i.jsxs("div", {
                style: { color: ke[o.estado].color, fontWeight: 700 },
                children: [
                  ke[o.estado].label,
                  o.estado !== "normal" &&
                    ` · faltan ${Dt + 1 - o.stock} unidades para llegar a nivel suficiente`,
                ],
              }),
            ],
          }),
        }),
      m &&
        i.jsx(Ki, {
          titulo: "Agregar medicina nueva",
          onClose: () => u(!1),
          children: i.jsxs("div", {
            style: { display: "flex", flexDirection: "column", gap: 14 },
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("label", {
                    style: nr,
                    children: "Nombre de la medicina",
                  }),
                  i.jsx("input", {
                    style: pn,
                    value: x.nombre,
                    onChange: (k) => E({ ...x, nombre: k.target.value }),
                    placeholder: "Ej. Ibuprofeno 400mg TAB",
                  }),
                  b.nombre &&
                    i.jsx("div", {
                      style: { color: "#FF5D7A", fontSize: 12, marginTop: 4 },
                      children: b.nombre,
                    }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("label", { style: nr, children: "Categoría" }),
                  i.jsx("input", {
                    style: pn,
                    list: "afinty-cats",
                    value: x.cat,
                    onChange: (k) => E({ ...x, cat: k.target.value }),
                    placeholder: "Elige o escribe una categoría",
                  }),
                  i.jsx("datalist", {
                    id: "afinty-cats",
                    children: T.map((k) => i.jsx("option", { value: k }, k)),
                  }),
                  b.cat &&
                    i.jsx("div", {
                      style: { color: "#FF5D7A", fontSize: 12, marginTop: 4 },
                      children: b.cat,
                    }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("label", {
                    style: nr,
                    children: "Cantidad que tiene (unidades)",
                  }),
                  i.jsx("input", {
                    style: pn,
                    inputMode: "numeric",
                    value: x.cantidad,
                    onChange: (k) =>
                      E({
                        ...x,
                        cantidad: k.target.value.replace(/\D/g, "").slice(0, 6),
                      }),
                    placeholder: "Ej. 120",
                  }),
                  b.cantidad &&
                    i.jsx("div", {
                      style: { color: "#FF5D7A", fontSize: 12, marginTop: 4 },
                      children: b.cantidad,
                    }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsxs("label", {
                    style: nr,
                    children: [
                      i.jsx(Om, { size: 13, style: { verticalAlign: -2 } }),
                      " Código de barras (13 números)",
                    ],
                  }),
                  i.jsx("input", {
                    style: {
                      ...pn,
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      letterSpacing: 1,
                      borderColor: b.codigo
                        ? "#FF5D7A"
                        : x.codigo.length === 13
                          ? "#2EE6A0"
                          : "rgba(130,150,255,.2)",
                    },
                    inputMode: "numeric",
                    value: x.codigo,
                    onChange: (k) =>
                      E({
                        ...x,
                        codigo: k.target.value.replace(/\D/g, "").slice(0, 13),
                      }),
                    placeholder: "7750000000000",
                  }),
                  i.jsxs("div", {
                    style: {
                      fontSize: 12,
                      marginTop: 4,
                      color: x.codigo.length === 13 ? "#2EE6A0" : "#7C8DB8",
                      fontFamily: "Inter, sans-serif",
                    },
                    children: [x.codigo.length, "/13 números"],
                  }),
                  b.codigo &&
                    i.jsx("div", {
                      style: { color: "#FF5D7A", fontSize: 12, marginTop: 2 },
                      children: b.codigo,
                    }),
                ],
              }),
              i.jsxs("button", {
                style: {
                  ...B,
                  justifyContent: "center",
                  opacity: sc(x.codigo) ? 1 : 0.6,
                },
                onClick: bn,
                children: [i.jsx(ic, { size: 16 }), " Guardar en almacén"],
              }),
            ],
          }),
        }),
      h &&
        i.jsxs(Ki, {
          titulo: `Agregar stock · ${h.nombre}`,
          onClose: () => g(null),
          children: [
            i.jsxs("div", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 13.5,
                color: "#C2CDEB",
                marginBottom: 12,
              },
              children: [
                "Stock actual: ",
                i.jsx("strong", { children: h.stock }),
                " unidades. Escribe cuántas llegaron de mercadería de esta misma medicina.",
              ],
            }),
            i.jsx("label", { style: nr, children: "Unidades que llegaron" }),
            i.jsx("input", {
              autoFocus: !0,
              style: pn,
              inputMode: "numeric",
              value: f,
              onChange: (k) => {
                (y(k.target.value.replace(/\D/g, "").slice(0, 6)), j(""));
              },
              onKeyDown: (k) => k.key === "Enter" && Fe(),
              placeholder: "Ej. 50",
            }),
            v &&
              i.jsx("div", {
                style: { color: "#FF5D7A", fontSize: 12, marginTop: 4 },
                children: v,
              }),
            Number(f) > 0 &&
              i.jsxs("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "#38BDF8",
                  marginTop: 8,
                },
                children: [
                  "Quedarán ",
                  h.stock + Number(f),
                  " unidades (",
                  ke[Zo(h.stock + Number(f))].label,
                  ").",
                ],
              }),
            i.jsxs("button", {
              style: {
                ...B,
                justifyContent: "center",
                width: "100%",
                marginTop: 16,
              },
              onClick: Fe,
              children: [i.jsx(lc, { size: 16 }), " Agregar"],
            }),
          ],
        }),
    ],
  });
}
function M1() {
  const [e, n] = F.useState(""),
    [t, r] = F.useState(null);
  function o() {
    if (!e.trim()) return;
    const c = Qn.map((m, u) => ({
      ...m,
      estado: u === 0 ? "en-proceso" : "pendiente",
    }));
    (r({ paciente: e.trim(), pasos: c, areaEntrega: Qn[Qn.length - 1].area }),
      n(""));
  }
  function a(c) {
    r((m) => {
      const u = m.pasos.map((h, g) =>
        g === c
          ? { ...h, estado: "listo" }
          : g === c + 1 && h.estado === "pendiente"
            ? { ...h, estado: "en-proceso" }
            : h,
      );
      return { ...m, pasos: u };
    });
  }
  const l = t
      ? t.pasos
          .filter((c) => c.estado !== "listo")
          .reduce((c, m) => c + m.tiempoMin, 0)
      : 0,
    s = t && t.pasos.every((c) => c.estado === "listo"),
    d = {
      pendiente: { color: "#7C8DB8", bg: "rgba(255,255,255,.06)", label: "Pendiente" },
      "en-proceso": {
        color: "#38BDF8",
        bg: "rgba(56,189,248,.09)",
        label: "La IA lo está moviendo",
      },
      listo: { color: "#2EE6A0", bg: "rgba(46,230,160,.13)", label: "Listo" },
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Trámites sin desplazamiento",
        title: "Documentos",
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(56,189,248,.09)",
          border: "1px solid rgba(56,189,248,.3)",
          borderRadius: 12,
          padding: "14px 18px",
          marginBottom: 20,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        },
        children: [
          i.jsx(yi, {
            size: 18,
            color: "#38BDF8",
            style: { flexShrink: 0, marginTop: 1 },
          }),
          i.jsx("span", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "#E8EEFF",
              lineHeight: 1.5,
            },
            children:
              "Con solo el nombre del paciente, la IA de AFINTY mueve su expediente entre Admisión, Seguros, Historia Clínica y Farmacia. El paciente no hace ningún papeleo ni se desplaza entre áreas: solo espera a que le avisen dónde recoger sus medicamentos, y al llegar únicamente firma la entrega.",
          }),
        ],
      }),
      !t &&
        i.jsxs(i.Fragment, {
          children: [
            i.jsxs("div", {
              style: {
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 14,
                padding: 20,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              },
              children: [
                i.jsx("input", {
                  value: e,
                  onChange: (c) => n(c.target.value),
                  onKeyDown: (c) => c.key === "Enter" && o(),
                  placeholder: "Nombre del paciente",
                  style: {
                    flex: "1 1 220px",
                    padding: "11px 14px",
                    borderRadius: 10,
                    border: "1px solid rgba(130,150,255,.2)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13.5,
                    boxSizing: "border-box",
                  },
                }),
                i.jsx("button", {
                  onClick: o,
                  style: {
                    background: ee.ctaGrad,
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "0 18px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 13.5,
                    cursor: "pointer",
                    flexShrink: 0,
                  },
                  children: "Iniciar gestión de documentos",
                }),
              ],
            }),
            i.jsx("div", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#E8EEFF",
                margin: "32px 0 4px",
              },
              children: "Por dónde pasa tu expediente",
            }),
            i.jsx("p", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 12.5,
                color: "#7C8DB8",
                marginTop: 0,
                marginBottom: 16,
              },
              children:
                "Este es el recorrido que hace la IA en tu nombre, en el orden en que ocurre. Tú solo esperas el aviso final.",
            }),
            i.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 12,
                marginBottom: 32,
              },
              children: Qn.map((c, m) =>
                i.jsxs(
                  "div",
                  {
                    style: {
                      background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                      border: "1px solid rgba(130,150,255,.2)",
                      borderRadius: 14,
                      padding: "16px 16px",
                      position: "relative",
                    },
                    children: [
                      i.jsx("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 8,
                        },
                        children: i.jsx("span", {
                          style: {
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            background: "rgba(56,189,248,.09)",
                            border: "1px solid rgba(56,189,248,.3)",
                            color: "#38BDF8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                            fontSize: 12,
                            fontWeight: 700,
                            flexShrink: 0,
                          },
                          children: m + 1,
                        }),
                      }),
                      i.jsx("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          fontWeight: 600,
                          color: "#E8EEFF",
                        },
                        children: c.area,
                      }),
                      i.jsxs("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#7C8DB8",
                          marginTop: 3,
                        },
                        children: ["~", c.tiempoMin, " min estimados"],
                      }),
                    ],
                  },
                  c.area,
                ),
              ),
            }),
            i.jsxs("div", {
              style: { display: "flex", flexWrap: "wrap", gap: 14 },
              children: [
                i.jsxs("div", {
                  style: {
                    flex: "1 1 260px",
                    background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                    border: "1px solid rgba(130,150,255,.2)",
                    borderRadius: 14,
                    padding: 18,
                  },
                  children: [
                    i.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      },
                      children: [
                        i.jsx("div", {
                          style: {
                            width: 30,
                            height: 30,
                            borderRadius: 9,
                            background: "rgba(56,189,248,.09)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          },
                          children: i.jsx(Au, { size: 15, color: "#38BDF8" }),
                        }),
                        i.jsx("span", {
                          style: {
                            fontFamily: "Inter, sans-serif",
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: "#E8EEFF",
                          },
                          children: "Qué necesitas llevar",
                        }),
                      ],
                    }),
                    i.jsx("p", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#9AA9D0",
                        lineHeight: 1.6,
                        margin: 0,
                      },
                      children:
                        "Nada de papeles. Con tu nombre completo AFINTY ubica tu historia clínica y tu seguro automáticamente. Solo trae tu documento de identidad para firmar al final.",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  style: {
                    flex: "1 1 260px",
                    background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                    border: "1px solid rgba(130,150,255,.2)",
                    borderRadius: 14,
                    padding: 18,
                  },
                  children: [
                    i.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      },
                      children: [
                        i.jsx("div", {
                          style: {
                            width: 30,
                            height: 30,
                            borderRadius: 9,
                            background: "rgba(255,181,71,.14)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          },
                          children: i.jsx(Ko, { size: 15, color: "#FFB547" }),
                        }),
                        i.jsx("span", {
                          style: {
                            fontFamily: "Inter, sans-serif",
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: "#E8EEFF",
                          },
                          children: "Cuánto se demora",
                        }),
                      ],
                    }),
                    i.jsxs("p", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#9AA9D0",
                        lineHeight: 1.6,
                        margin: 0,
                      },
                      children: [
                        "En promedio ",
                        Qn.reduce((c, m) => c + m.tiempoMin, 0),
                        " minutos entre las cuatro áreas. Te avisamos apenas esté todo listo para recoger.",
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  style: {
                    flex: "1 1 260px",
                    background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                    border: "1px solid rgba(130,150,255,.2)",
                    borderRadius: 14,
                    padding: 18,
                  },
                  children: [
                    i.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      },
                      children: [
                        i.jsx("div", {
                          style: {
                            width: 30,
                            height: 30,
                            borderRadius: 9,
                            background: "rgba(46,230,160,.13)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          },
                          children: i.jsx(jn, { size: 15, color: "#2EE6A0" }),
                        }),
                        i.jsx("span", {
                          style: {
                            fontFamily: "Inter, sans-serif",
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: "#E8EEFF",
                          },
                          children: "Dónde termina",
                        }),
                      ],
                    }),
                    i.jsxs("p", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#9AA9D0",
                        lineHeight: 1.6,
                        margin: 0,
                      },
                      children: [
                        "Todo trámite cierra en ",
                        Qn[Qn.length - 1].area,
                        ": ahí firmas y recoges, sin pasar antes por ninguna otra ventanilla.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      t &&
        i.jsxs("div", {
          style: {
            background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
            border: "1px solid rgba(130,150,255,.2)",
            borderRadius: 14,
            padding: 22,
          },
          children: [
            i.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 6,
              },
              children: [
                i.jsx("div", {
                  style: {
                    fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#E8EEFF",
                  },
                  children: t.paciente,
                }),
                i.jsx("button", {
                  onClick: () => r(null),
                  style: {
                    border: "1px solid rgba(130,150,255,.2)",
                    background: "rgba(255,255,255,.035)",
                    borderRadius: 8,
                    padding: "5px 10px",
                    fontSize: 12,
                    color: "#9AA9D0",
                    fontFamily: "Inter, sans-serif",
                    cursor: "pointer",
                  },
                  children: "Nuevo trámite",
                }),
              ],
            }),
            i.jsx("div", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 12.5,
                color: "#7C8DB8",
                marginBottom: 18,
              },
              children: s
                ? `Todo listo. El paciente solo debe acercarse a ${t.areaEntrega} a firmar y recoger sus medicamentos.`
                : `Tiempo estimado restante: ${l} min · entrega final en ${t.areaEntrega}`,
            }),
            i.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: 8 },
              children: t.pasos.map((c, m) => {
                const u = d[c.estado];
                return i.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      border: "1px solid rgba(130,150,255,.2)",
                      borderRadius: 12,
                      padding: "12px 16px",
                    },
                    children: [
                      m > 0 &&
                        i.jsx(Am, {
                          size: 14,
                          color: "#5E6E9A",
                          style: { flexShrink: 0 },
                        }),
                      i.jsxs("div", {
                        style: { flex: 1 },
                        children: [
                          i.jsx("div", {
                            style: {
                              fontFamily: "Inter, sans-serif",
                              fontSize: 13.5,
                              fontWeight: 500,
                              color: "#E8EEFF",
                            },
                            children: c.area,
                          }),
                          i.jsxs("div", {
                            style: {
                              fontFamily: "Inter, sans-serif",
                              fontSize: 12,
                              color: "#7C8DB8",
                            },
                            children: ["~", c.tiempoMin, " min"],
                          }),
                        ],
                      }),
                      i.jsx("span", {
                        style: {
                          fontSize: 11.5,
                          fontWeight: 600,
                          color: u.color,
                          background: u.bg,
                          padding: "3px 10px",
                          borderRadius: 999,
                        },
                        children: u.label,
                      }),
                      c.estado === "en-proceso" &&
                        i.jsx("button", {
                          onClick: () => a(m),
                          style: {
                            border: "1px solid rgba(130,150,255,.2)",
                            background: "rgba(255,255,255,.035)",
                            borderRadius: 8,
                            padding: "6px 10px",
                            fontSize: 12,
                            color: "#38BDF8",
                            fontFamily: "Inter, sans-serif",
                            cursor: "pointer",
                            fontWeight: 600,
                          },
                          children: "Marcar listo",
                        }),
                    ],
                  },
                  c.area,
                );
              }),
            }),
            i.jsx("p", {
              style: {
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                color: "#7C8DB8",
                marginTop: 12,
              },
              children:
                'En producción, estos pasos avanzan solos: aquí puedes simular el avance de la IA con "Marcar listo".',
            }),
          ],
        }),
    ],
  });
}
function T1({
  citas: e,
  onAsignar: n,
  onLiberar: t,
  onConfirmar: r,
  onCompartirCita: o,
}) {
  var b, p, f;
  const [a, l] = F.useState(null),
    [s, d] = F.useState(null),
    [c, m] = F.useState({ nombre: "", dni: "", celular: "", fecha: Rt() }),
    u = V.filter((y) => vi.includes(y.id)),
    h = Vt(u);
  function g(y, v) {
    (m({ nombre: "", dni: "", celular: "", fecha: Rt() }),
      l({ docId: y, idx: v }));
  }
  function x() {
    c.nombre.trim() &&
      (n(a.docId, a.idx, {
        nombre: c.nombre.trim(),
        dni: c.dni.trim() || "Sin DNI",
        celular: c.celular.trim(),
        fecha: c.fecha,
        nueva: !1,
      }),
      l(null));
  }
  const E = (y) => u.find((v) => v.id === y);
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Consulta externa · agenda por área y médico",
        title: "Citas",
      }),
      i.jsxs("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 18,
        },
        children: [
          "Toca un casillero vacío para agendar directamente. Los casilleros marcados como ",
          i.jsx("strong", { children: "Nueva" }),
          " fueron solicitados por un paciente o familiar desde su propia interfaz — revísalos y confírmalos. Desde cada cita puedes enviársela a otro médico con sus documentos.",
        ],
      }),
      i.jsx("div", {
        style: { display: "flex", flexDirection: "column", gap: 22 },
        children: h.map((y) =>
          i.jsxs(
            "div",
            {
              children: [
                i.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  },
                  children: [
                    i.jsx("span", {
                      style: {
                        width: 6,
                        height: 20,
                        borderRadius: 999,
                        background: y.color,
                      },
                    }),
                    i.jsx("span", {
                      style: {
                        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#E8EEFF",
                      },
                      children: y.area,
                    }),
                    i.jsxs("span", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        color: "#7C8DB8",
                      },
                      children: [
                        y.doctores.length,
                        " médicos con consulta externa",
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: { display: "flex", flexDirection: "column", gap: 12 },
                  children: y.doctores.map((v) =>
                    i.jsxs(
                      "div",
                      {
                        style: {
                          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                          border: "1px solid rgba(130,150,255,.2)",
                          borderRadius: 14,
                          padding: 18,
                        },
                        children: [
                          i.jsxs("div", {
                            style: {
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: 12,
                              flexWrap: "wrap",
                              gap: 6,
                            },
                            children: [
                              i.jsx("span", {
                                style: {
                                  fontFamily: "Inter, sans-serif",
                                  fontWeight: 600,
                                  fontSize: 14,
                                  color: "#E8EEFF",
                                },
                                children: v.nombre,
                              }),
                              i.jsx("span", {
                                style: {
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: 12.5,
                                  color: "#9AA9D0",
                                },
                                children: v.esp,
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            style: {
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 10,
                            },
                            children: Dn.map((j, C) => {
                              var O;
                              const I = (O = e[v.id]) == null ? void 0 : O[C],
                                A = !!I;
                              return i.jsxs(
                                "button",
                                {
                                  onClick: () =>
                                    A
                                      ? d({ docId: v.id, idx: C, paciente: I })
                                      : g(v.id, C),
                                  title: A
                                    ? `${I.nombre} · ${j}`
                                    : `Libre · ${j}`,
                                  style: {
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 4,
                                    width: 68,
                                    padding: "8px 4px",
                                    borderRadius: 12,
                                    cursor: "pointer",
                                    border: `1.5px solid ${A ? (I.nueva ? "#FFB547" : "#38BDF8") : "#2EE6A0"}`,
                                    background: A
                                      ? I.nueva
                                        ? "rgba(255,181,71,.14)"
                                        : "rgba(56,189,248,.09)"
                                      : "rgba(46,230,160,.13)",
                                  },
                                  children: [
                                    (I == null ? void 0 : I.nueva) &&
                                      i.jsx("span", {
                                        style: {
                                          position: "absolute",
                                          top: -7,
                                          right: -7,
                                          background: "#FFB547",
                                          color: "#fff",
                                          fontSize: 8.5,
                                          fontWeight: 700,
                                          borderRadius: 999,
                                          padding: "2px 5px",
                                          fontFamily: "Inter, sans-serif",
                                        },
                                        children: "Nueva",
                                      }),
                                    i.jsx(Wt, {
                                      size: 18,
                                      color: A
                                        ? I.nueva
                                          ? "#FFB547"
                                          : "#38BDF8"
                                        : "#2EE6A0",
                                    }),
                                    i.jsx("span", {
                                      style: {
                                        fontFamily:
                                          "'Space Mono', 'IBM Plex Mono', monospace",
                                        fontSize: 10.5,
                                        color: A
                                          ? I.nueva
                                            ? "#FFB547"
                                            : "#38BDF8"
                                          : "#2EE6A0",
                                        fontWeight: 700,
                                      },
                                      children: j,
                                    }),
                                  ],
                                },
                                C,
                              );
                            }),
                          }),
                        ],
                      },
                      v.id,
                    ),
                  ),
                }),
              ],
            },
            y.area,
          ),
        ),
      }),
      a &&
        i.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          },
          children: i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: 26,
              width: 380,
              maxWidth: "90vw",
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                },
                children: [
                  i.jsxs("span", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#E8EEFF",
                    },
                    children: ["Agendar cita · ", Dn[a.idx]],
                  }),
                  i.jsx(En, {
                    size: 18,
                    style: { cursor: "pointer", color: "#7C8DB8" },
                    onClick: () => l(null),
                  }),
                ],
              }),
              i.jsx("input", {
                placeholder: "Nombre del paciente",
                value: c.nombre,
                onChange: (y) => m({ ...c, nombre: y.target.value }),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  marginBottom: 10,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("input", {
                placeholder: "DNI",
                value: c.dni,
                onChange: (y) => m({ ...c, dni: y.target.value }),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  marginBottom: 10,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("input", {
                placeholder: "Celular (opcional)",
                value: c.celular,
                onChange: (y) => m({ ...c, celular: y.target.value }),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  marginBottom: 10,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("input", {
                type: "date",
                value: c.fecha,
                onChange: (y) => m({ ...c, fecha: y.target.value }),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  marginBottom: 16,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("button", {
                onClick: x,
                style: {
                  width: "100%",
                  background: ee.ctaGrad,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "12px 0",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                },
                children: "Confirmar cita",
              }),
            ],
          }),
        }),
      s &&
        i.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          },
          children: i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: 26,
              width: 380,
              maxWidth: "90vw",
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                },
                children: [
                  i.jsx("span", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#E8EEFF",
                    },
                    children: s.paciente.nombre,
                  }),
                  i.jsx(En, {
                    size: 18,
                    style: { cursor: "pointer", color: "#7C8DB8" },
                    onClick: () => d(null),
                  }),
                ],
              }),
              s.paciente.nueva &&
                i.jsx("div", {
                  style: {
                    background: "rgba(255,181,71,.14)",
                    border: "1px solid rgba(255,181,71,.35)",
                    borderRadius: 10,
                    padding: "8px 12px",
                    marginBottom: 14,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    color: "#FFC857",
                  },
                  children:
                    "Solicitada por el paciente o familiar desde su propia interfaz.",
                }),
              i.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  color: "#C2CDEB",
                  marginBottom: 18,
                },
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "DNI:" }),
                      " ",
                      s.paciente.dni,
                    ],
                  }),
                  s.paciente.celular &&
                    i.jsxs("div", {
                      children: [
                        i.jsx("strong", { children: "Celular:" }),
                        " ",
                        s.paciente.celular,
                      ],
                    }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "Fecha:" }),
                      " ",
                      s.paciente.fecha,
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "Hora:" }),
                      " ",
                      Dn[s.idx],
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "Doctor:" }),
                      " ",
                      (b = E(s.docId)) == null ? void 0 : b.nombre,
                      " · ",
                      (p = E(s.docId)) == null ? void 0 : p.esp,
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("strong", { children: "Área:" }),
                      " ",
                      (f = E(s.docId)) == null ? void 0 : f.area,
                    ],
                  }),
                ],
              }),
              o &&
                i.jsxs("button", {
                  onClick: () => {
                    (o(s.docId, s.idx), d(null));
                  },
                  style: {
                    width: "100%",
                    marginBottom: 10,
                    background: "rgba(56,189,248,.09)",
                    color: "#38BDF8",
                    border: "1px solid rgba(56,189,248,.3)",
                    borderRadius: 10,
                    padding: "10px 0",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 13.5,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  },
                  children: [
                    i.jsx(Du, { size: 15 }),
                    " Enviar esta cita a otro médico",
                  ],
                }),
              i.jsxs("div", {
                style: { display: "flex", gap: 10 },
                children: [
                  s.paciente.nueva &&
                    i.jsx("button", {
                      onClick: () => {
                        (r(s.docId, s.idx),
                          d({ ...s, paciente: { ...s.paciente, nueva: !1 } }));
                      },
                      style: {
                        flex: 1,
                        background: ee.ctaGrad,
                        color: "#fff",
                        border: "none",
                        borderRadius: 10,
                        padding: "10px 0",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: 13.5,
                        cursor: "pointer",
                      },
                      children: "Confirmar",
                    }),
                  i.jsx("button", {
                    onClick: () => {
                      (t(s.docId, s.idx), d(null));
                    },
                    style: {
                      flex: 1,
                      background: "rgba(255,93,122,.14)",
                      color: "#FF7A93",
                      border: "1px solid rgba(255,93,122,.34)",
                      borderRadius: 10,
                      padding: "10px 0",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: 13.5,
                      cursor: "pointer",
                    },
                    children: "Liberar casillero",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function P1({ especialidades: e, onSolicitar: n }) {
  const [t, r] = F.useState({
      nombre: "",
      dni: "",
      celular: "",
      especialidad: e[0] || "",
    }),
    [o, a] = F.useState(null),
    l = Hr.map((d) => ({
      area: d.area,
      esps: e.filter((c) => Lu(c) === d.area),
    })).filter((d) => d.esps.length > 0);
  function s() {
    if (!t.nombre.trim() || !t.celular.trim() || !t.especialidad) {
      a({
        ok: !1,
        mensaje: "Completa tu nombre, tu celular y la especialidad.",
      });
      return;
    }
    const d = n({
      nombre: t.nombre.trim(),
      dni: t.dni.trim(),
      celular: t.celular.trim(),
      especialidad: t.especialidad,
    });
    (a(d),
      d.ok &&
        r({ nombre: "", dni: "", celular: "", especialidad: e[0] || "" }));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, { eyebrow: "Solicitud de cita", title: "Pedir una cita" }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 18,
        },
        children:
          "Escribe tus datos y elige la especialidad. AFINTY agenda automáticamente el próximo horario disponible y avisa al doctor de inmediato.",
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: 22,
          maxWidth: 460,
        },
        children: [
          i.jsx("label", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#9AA9D0",
              marginBottom: 4,
              display: "block",
            },
            children: "Nombre completo del paciente",
          }),
          i.jsx("input", {
            value: t.nombre,
            onChange: (d) => r({ ...t, nombre: d.target.value }),
            style: {
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              marginBottom: 12,
              boxSizing: "border-box",
            },
          }),
          i.jsx("label", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#9AA9D0",
              marginBottom: 4,
              display: "block",
            },
            children: "DNI (opcional)",
          }),
          i.jsx("input", {
            value: t.dni,
            onChange: (d) => r({ ...t, dni: d.target.value }),
            style: {
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              marginBottom: 12,
              boxSizing: "border-box",
            },
          }),
          i.jsx("label", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#9AA9D0",
              marginBottom: 4,
              display: "block",
            },
            children: "Número de celular",
          }),
          i.jsxs("div", {
            style: { position: "relative", marginBottom: 12 },
            children: [
              i.jsx(_m, {
                size: 15,
                color: "#7C8DB8",
                style: { position: "absolute", left: 12, top: 12 },
              }),
              i.jsx("input", {
                value: t.celular,
                onChange: (d) => r({ ...t, celular: d.target.value }),
                placeholder: "9XXXXXXXX",
                style: {
                  width: "100%",
                  padding: "10px 12px 10px 34px",
                  borderRadius: 8,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  boxSizing: "border-box",
                },
              }),
            ],
          }),
          i.jsx("label", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "#9AA9D0",
              marginBottom: 4,
              display: "block",
            },
            children: "Especialidad",
          }),
          i.jsx("select", {
            value: t.especialidad,
            onChange: (d) => r({ ...t, especialidad: d.target.value }),
            style: {
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              marginBottom: 18,
              boxSizing: "border-box",
            },
            children: l.map((d) =>
              i.jsx(
                "optgroup",
                {
                  label: d.area,
                  children: d.esps.map((c) =>
                    i.jsx("option", { value: c, children: c }, c),
                  ),
                },
                d.area,
              ),
            ),
          }),
          i.jsx("button", {
            onClick: s,
            style: {
              width: "100%",
              background: ee.ctaGrad,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "13px 0",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            },
            children: "Solicitar cita",
          }),
          o &&
            i.jsxs("div", {
              style: {
                marginTop: 14,
                background: o.ok ? "rgba(46,230,160,.13)" : "rgba(255,93,122,.14)",
                border: `1px solid ${o.ok ? "rgba(46,230,160,.32)" : "rgba(255,93,122,.34)"}`,
                borderRadius: 10,
                padding: "10px 14px",
                display: "flex",
                gap: 10,
                alignItems: "center",
              },
              children: [
                o.ok
                  ? i.jsx(jn, {
                      size: 17,
                      color: "#2EE6A0",
                      style: { flexShrink: 0 },
                    })
                  : i.jsx(xi, {
                      size: 17,
                      color: "#FF7A93",
                      style: { flexShrink: 0 },
                    }),
                i.jsx("span", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12.5,
                    color: o.ok ? "#5CF2B0" : "#FF9B8A",
                  },
                  children: o.mensaje,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function N1({ atendidos: e, onAtender: n }) {
  const [t, r] = F.useState(!1),
    [o, a] = F.useState(1),
    [l, s] = F.useState({ nombre: "", dni: "" }),
    [d, c] = F.useState([]),
    [m, u] = F.useState({ dni: "", nombre: "" });
  function h() {
    (r(!0), a(1));
  }
  function g() {
    a(2);
  }
  function x() {
    (n({
      id: Date.now(),
      nombre: l.nombre || "Paciente sin identificar",
      dni: l.dni || "Pendiente",
    }),
      r(!1),
      s({ nombre: "", dni: "" }));
  }
  function E() {
    if (!m.nombre.trim()) return;
    const p = new Date().toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    (c((f) => [
      {
        id: Date.now(),
        dni: m.dni.trim() || "Sin DNI",
        nombre: m.nombre.trim(),
        hora: p,
        silla: !1,
      },
      ...f,
    ]),
      u({ dni: "", nombre: "" }));
  }
  function b(p) {
    c((f) => f.map((y) => (y.id === p ? { ...y, silla: !y.silla } : y)));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, { eyebrow: "Protocolo de urgencia", title: "Emergencias" }),
      i.jsxs("div", {
        style: {
          background: "rgba(255,93,122,.14)",
          border: "1px solid rgba(255,93,122,.34)",
          borderRadius: 14,
          padding: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 22,
        },
        children: [
          i.jsxs("div", {
            children: [
              i.jsx("div", {
                style: {
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#FF7A93",
                },
                children: "Atender primero, regularizar datos después",
              }),
              i.jsx("div", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "#FF9B8A",
                  marginTop: 4,
                },
                children:
                  "La falta de DNI u otros datos nunca debe retrasar la atención de una emergencia.",
              }),
            ],
          }),
          i.jsxs("button", {
            onClick: h,
            style: {
              background: ee.ctaCoralGrad,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 20px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            },
            children: [i.jsx($l, { size: 17 }), " Emergencia"],
          }),
        ],
      }),
      i.jsx("div", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#E8EEFF",
          marginBottom: 10,
        },
        children: "Pacientes atendidos hoy pendientes de regularizar datos",
      }),
      e.length === 0 &&
        i.jsx("div", {
          style: {
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "#7C8DB8",
          },
          children: "Aún no hay casos registrados.",
        }),
      e.map((p) =>
        i.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 12,
              padding: "12px 16px",
              marginBottom: 8,
            },
            children: [
              i.jsx(jn, {
                size: 18,
                color: "#2EE6A0",
                style: { flexShrink: 0 },
              }),
              i.jsxs("div", {
                style: { flex: 1 },
                children: [
                  i.jsx("div", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "#E8EEFF",
                      fontWeight: 500,
                    },
                    children: p.nombre,
                  }),
                  i.jsxs("div", {
                    style: {
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      color: "#7C8DB8",
                    },
                    children: ["DNI: ", p.dni, " · Atendido de inmediato"],
                  }),
                ],
              }),
              i.jsx("span", {
                style: {
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: "#FFC857",
                  background: "rgba(255,181,71,.14)",
                  padding: "3px 10px",
                  borderRadius: 999,
                },
                children: "Regularizar datos",
              }),
            ],
          },
          p.id,
        ),
      ),
      i.jsx("div", {
        style: { height: 1, background: "rgba(130,150,255,.2)", margin: "26px 0" },
      }),
      i.jsx("div", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#E8EEFF",
          marginBottom: 6,
        },
        children: "Ingreso sin emergencia",
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
          color: "#7C8DB8",
          marginTop: 0,
          marginBottom: 12,
        },
        children:
          "Para visitas o familiares que ingresan sin ser una urgencia: DNI, nombre y hora quedan registrados. Si la persona se lleva una silla de ruedas del hospital, solo toca el ícono — no hace falta escribir nada.",
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          padding: 18,
          marginBottom: 14,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        },
        children: [
          i.jsx("input", {
            placeholder: "DNI",
            value: m.dni,
            onChange: (p) => u({ ...m, dni: p.target.value }),
            style: {
              flex: "1 1 140px",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              boxSizing: "border-box",
            },
          }),
          i.jsx("input", {
            placeholder: "Nombre del paciente o visitante",
            value: m.nombre,
            onChange: (p) => u({ ...m, nombre: p.target.value }),
            onKeyDown: (p) => p.key === "Enter" && E(),
            style: {
              flex: "2 1 220px",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid rgba(130,150,255,.2)",
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              boxSizing: "border-box",
            },
          }),
          i.jsx("button", {
            onClick: E,
            style: {
              background: ee.ctaGrad,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "0 18px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 13.5,
              cursor: "pointer",
            },
            children: "Registrar ingreso",
          }),
        ],
      }),
      d.length === 0
        ? i.jsx("div", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "#7C8DB8",
            },
            children: "Aún no hay ingresos registrados.",
          })
        : d.map((p) =>
            i.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(130,150,255,.2)",
                  borderRadius: 12,
                  padding: "12px 16px",
                  marginBottom: 8,
                },
                children: [
                  i.jsxs("div", {
                    style: { flex: 1 },
                    children: [
                      i.jsx("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 14,
                          color: "#E8EEFF",
                          fontWeight: 500,
                        },
                        children: p.nombre,
                      }),
                      i.jsxs("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#7C8DB8",
                        },
                        children: ["DNI: ", p.dni, " · Ingresó a las ", p.hora],
                      }),
                    ],
                  }),
                  i.jsxs("button", {
                    onClick: () => b(p.id),
                    title: p.silla
                      ? "Tiene silla de ruedas del hospital — clic para quitar"
                      : "Marcar que se lleva una silla de ruedas",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      border: `1.5px solid ${p.silla ? "#38BDF8" : "rgba(130,150,255,.2)"}`,
                      background: p.silla ? "rgba(56,189,248,.09)" : "rgba(255,255,255,.035)",
                      borderRadius: 10,
                      padding: "7px 12px",
                      cursor: "pointer",
                    },
                    children: [
                      i.jsx(zm, {
                        size: 18,
                        color: p.silla ? "#38BDF8" : "#5E6E9A",
                      }),
                      p.silla &&
                        i.jsx("span", {
                          style: {
                            fontFamily: "Inter, sans-serif",
                            fontSize: 11.5,
                            fontWeight: 600,
                            color: "#38BDF8",
                          },
                          children: "Silla de ruedas",
                        }),
                    ],
                  }),
                ],
              },
              p.id,
            ),
          ),
      t &&
        i.jsx("div", {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          },
          children: i.jsxs("div", {
            style: {
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRadius: 16,
              padding: 26,
              width: 380,
              maxWidth: "90vw",
            },
            children: [
              i.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 18,
                },
                children: [
                  i.jsx("span", {
                    style: {
                      fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: 17,
                      color: "#E8EEFF",
                    },
                    children:
                      o === 1 ? "Confirmar ingreso" : "Regularizar datos",
                  }),
                  i.jsx(En, {
                    size: 18,
                    style: { cursor: "pointer", color: "#7C8DB8" },
                    onClick: () => r(!1),
                  }),
                ],
              }),
              o === 1
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("p", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          color: "#C2CDEB",
                          lineHeight: 1.5,
                        },
                        children:
                          "El paciente será atendido de inmediato. Podrás completar sus datos personales una vez estabilizado.",
                      }),
                      i.jsx("button", {
                        onClick: g,
                        style: {
                          width: "100%",
                          background: ee.ctaCoralGrad,
                          color: "#fff",
                          border: "none",
                          borderRadius: 10,
                          padding: "12px 0",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: "pointer",
                          marginTop: 8,
                        },
                        children: "Atender ahora",
                      }),
                    ],
                  })
                : i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("p", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12.5,
                          color: "#2EE6A0",
                          marginBottom: 14,
                        },
                        children:
                          "Paciente en atención. Completa lo que tengas disponible; si no tiene DNI ni ningún documento, igual ya está siendo atendido.",
                      }),
                      i.jsx("input", {
                        placeholder: "Nombre del paciente (si se conoce)",
                        value: l.nombre,
                        onChange: (p) => s({ ...l, nombre: p.target.value }),
                        style: {
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "1px solid rgba(130,150,255,.2)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          marginBottom: 10,
                          boxSizing: "border-box",
                        },
                      }),
                      i.jsx("input", {
                        placeholder: "DNI (opcional por ahora)",
                        value: l.dni,
                        onChange: (p) => s({ ...l, dni: p.target.value }),
                        style: {
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "1px solid rgba(130,150,255,.2)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13.5,
                          marginBottom: 12,
                          boxSizing: "border-box",
                        },
                      }),
                      i.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 12,
                        },
                        children: [
                          i.jsx("div", {
                            style: {
                              flex: 1,
                              height: 1,
                              background: "rgba(130,150,255,.2)",
                            },
                          }),
                          i.jsx("span", {
                            style: {
                              fontFamily: "Inter, sans-serif",
                              fontSize: 11,
                              color: "#5E6E9A",
                            },
                            children: "o, si no tiene documento",
                          }),
                          i.jsx("div", {
                            style: {
                              flex: 1,
                              height: 1,
                              background: "rgba(130,150,255,.2)",
                            },
                          }),
                        ],
                      }),
                      i.jsxs("button", {
                        onClick: () =>
                          s({ ...l, dni: "Identificado por foto" }),
                        style: {
                          width: "100%",
                          background:
                            l.dni === "Identificado por foto"
                              ? "rgba(46,230,160,.13)"
                              : "rgba(255,255,255,.035)",
                          color: "#5CF2B0",
                          border: `1px solid ${l.dni === "Identificado por foto" ? "#2EE6A0" : "rgba(130,150,255,.2)"}`,
                          borderRadius: 10,
                          padding: "10px 0",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          marginBottom: 16,
                        },
                        children: [
                          i.jsx(Bm, { size: 16 }),
                          " ",
                          l.dni === "Identificado por foto"
                            ? "Foto tomada — solo para saber quién es"
                            : "Tomar foto para identificarlo",
                        ],
                      }),
                      i.jsx("button", {
                        onClick: x,
                        style: {
                          width: "100%",
                          background: ee.ctaGrad,
                          color: "#fff",
                          border: "none",
                          borderRadius: 10,
                          padding: "12px 0",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: "pointer",
                        },
                        children: "Guardar registro",
                      }),
                    ],
                  }),
            ],
          }),
        }),
    ],
  });
}
function L1({
  alerts: e,
  onResolve: n,
  onEnviarCorreo: t,
  correosEnviados: r,
}) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Centro de alertas",
        title: "Todas las alertas activas",
      }),
      i.jsxs("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 16,
        },
        children: [
          'Las alertas de un médico específico tienen el botón "Notificar por correo": abre un correo ya redactado, listo para enviar a ',
          Ou,
          ".",
        ],
      }),
      e.length === 0
        ? i.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              padding: "40px 0",
              color: "#7C8DB8",
              fontFamily: "Inter, sans-serif",
            },
            children: [
              i.jsx(jn, { size: 28, color: "#2EE6A0" }),
              " Sin alertas pendientes. Todo bajo control.",
            ],
          })
        : e.map((o) =>
            i.jsx(
              Wu,
              {
                a: o,
                onResolve: n,
                onEnviarCorreo: t,
                correoEnviado: r.includes(o.id),
              },
              o.id,
            ),
          ),
    ],
  });
}
function _1() {
  const e = V.map((t) => {
      const r = t.asistencia.filter((l) => l.estado === "tardanza").length,
        o = t.asistencia.filter((l) => l.estado === "falta").length,
        a = r + o;
      return { ...t, tardanzas: r, faltas: o, total: a };
    }).sort((t, r) => r.total - t.total),
    n = Vt(V)
      .map((t) => ({
        ...t,
        total: t.doctores.reduce(
          (r, o) =>
            r +
            o.asistencia.filter(
              (a) => a.estado === "tardanza" || a.estado === "falta",
            ).length,
          0,
        ),
      }))
      .sort((t, r) => r.total - t.total);
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Reporte automático · últimos 14 días",
        title: "Inasistencias y reportes",
      }),
      i.jsxs("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 12.5,
          color: "#7C8DB8",
          marginTop: -10,
          marginBottom: 18,
        },
        children: [
          "Cuando un médico acumula ",
          nt,
          " o más tardanzas/faltas en la ventana analizada, AFINTY notifica automáticamente a Jefatura de Personal y a Gestión Administrativa para que evalúen las medidas correspondientes, incluida una posible sanción.",
        ],
      }),
      i.jsx("div", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#E8EEFF",
          marginBottom: 10,
        },
        children: "Incidencias acumuladas por área",
      }),
      i.jsx("div", {
        style: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 },
        children: n.map((t) =>
          i.jsxs(
            "div",
            {
              style: {
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 12,
                padding: "12px 16px",
                flex: "1 1 220px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              },
              children: [
                i.jsx("span", {
                  style: {
                    width: 6,
                    height: 30,
                    borderRadius: 999,
                    background: t.color,
                    flexShrink: 0,
                  },
                }),
                i.jsxs("div", {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    i.jsx("div", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#C2CDEB",
                      },
                      children: t.area,
                    }),
                    i.jsxs("div", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11.5,
                        color: "#7C8DB8",
                      },
                      children: [t.doctores.length, " médicos"],
                    }),
                  ],
                }),
                i.jsx("span", {
                  style: {
                    fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                    fontSize: 20,
                    fontWeight: 700,
                    color: t.total > 0 ? "#FF7A93" : "#2EE6A0",
                  },
                  children: t.total,
                }),
              ],
            },
            t.area,
          ),
        ),
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          overflow: "hidden",
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1.9fr 1.5fr 1.3fr 0.8fr 0.8fr 0.8fr 1.3fr",
              padding: "12px 18px",
              fontSize: 11.5,
              fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
              color: "#7C8DB8",
              textTransform: "uppercase",
              letterSpacing: 0.6,
              borderBottom: "1px solid rgba(130,150,255,.2)",
            },
            children: [
              i.jsx("span", { children: "Médico" }),
              i.jsx("span", { children: "Especialidad" }),
              i.jsx("span", { children: "Área" }),
              i.jsx("span", { children: "Tard." }),
              i.jsx("span", { children: "Faltas" }),
              i.jsx("span", { children: "Total" }),
              i.jsx("span", { children: "Acción sugerida" }),
            ],
          }),
          e.map((t, r) => {
            const o = t.total >= nt;
            return i.jsxs(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns:
                    "1.9fr 1.5fr 1.3fr 0.8fr 0.8fr 0.8fr 1.3fr",
                  padding: "14px 18px",
                  fontSize: 13,
                  fontFamily: "Inter, sans-serif",
                  color: "#E8EEFF",
                  borderBottom: r < e.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
                  alignItems: "center",
                },
                children: [
                  i.jsx("span", {
                    style: { fontWeight: 500 },
                    children: t.nombre,
                  }),
                  i.jsx("span", {
                    style: { color: "#9AA9D0", fontSize: 12.5 },
                    children: t.esp,
                  }),
                  i.jsx("span", {
                    style: { color: Tr(t.area), fontSize: 12, fontWeight: 600 },
                    children: t.area,
                  }),
                  i.jsx("span", {
                    style: {
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      color: "#FFB547",
                    },
                    children: t.tardanzas,
                  }),
                  i.jsx("span", {
                    style: {
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      color: "#FF5D7A",
                    },
                    children: t.faltas,
                  }),
                  i.jsx("span", {
                    style: {
                      fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                      fontWeight: 700,
                    },
                    children: t.total,
                  }),
                  i.jsx("span", {
                    style: {
                      fontSize: 11.5,
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 999,
                      width: "fit-content",
                      color: o ? "#FF7A93" : "#5CF2B0",
                      background: o ? "rgba(255,93,122,.14)" : "rgba(46,230,160,.13)",
                    },
                    children: o
                      ? "Escalado a Jefatura"
                      : "Sin acción requerida",
                  }),
                ],
              },
              t.id,
            );
          }),
        ],
      }),
    ],
  });
}
function O1(e, n, t) {
  var l;
  const r = e.toLowerCase(),
    o = Vt(V),
    a = (s) => ({
      tard: s.asistencia.filter((d) => d.estado === "tardanza").length,
      falt: s.asistencia.filter((d) => d.estado === "falta").length,
    });
  if (/reemplaz|reasign|no llega|llega tarde|doctor tarde|m[eé]dico tarde/.test(r)) {
    return "Protocolo de contingencia por doctor tarde:\n• +10 min: aviso automático al doctor (mensaje y llamada).\n• +20 min: reasigno a sus pacientes con otro médico del área y les envío SMS con su nuevo consultorio.\n• +35 min: escalo a Jefatura de Personal y registro la alerta.\n\nPuedes verlo en acción en la pestaña «Monitor en vivo».";
  }
  if (/papeler|tr[aá]mite|admisi|ventanilla|formulario|ficha/.test(r)) {
    return "En «Admisión inteligente» le hago preguntas al paciente (DNI, seguro, motivo, alergias), valido cada dato, calculo su prioridad y sugiero especialidad y doctor. Con eso genero la ficha y la envío a Admisión, Seguros, Historia Clínica y Farmacia: pasa de ~23 min de trámites a ~3 min.";
  }
  if (/tardanza|falta|asistencia|escalar|jefatura|personal/.test(r)) {
    const s = o
        .map((m) => {
          const u = m.doctores.reduce((h, g) => {
            const x = a(g);
            return h + x.tard + x.falt;
          }, 0);
          return { area: m.area, total: u };
        })
        .sort((m, u) => u.total - m.total),
      d = V.map((m) => {
        const u = a(m);
        return { d: m, total: u.tard + u.falt };
      }).filter((m) => m.total >= nt);
    let c =
      `Incidencias (tardanzas + faltas) en 14 días por área:
` +
      s.map((m) => `• ${m.area}: ${m.total}`).join(`
`);
    return (
      (c += d.length
        ? `

Superan el umbral de ${nt} y deben escalarse a Jefatura de Personal:
` +
          d.map((m) => `• ${m.d.nombre} (${m.d.esp}): ${m.total} incidencias`)
            .join(`
`)
        : `

Ningún médico supera el umbral de ${nt}; no hay casos que escalar.`),
      c
    );
  }
  if (/medicament|stock|reposic|farmacia|insumo/.test(r)) {
    const s = t.filter((c) => c.estado === "crítico"),
      d = t.filter((c) => c.estado === "bajo");
    return (
      `Reposición urgente (estado crítico):
` +
      s.map((c) => `• ${c.nombre} — stock ${c.stock} u.`).join(`
`) +
      `

Stock bajo (programar reposición):
` +
      d.map((c) => `• ${c.nombre} — stock ${c.stock} u.`).join(`
`)
    );
  }
  if (/cama|ocupaci|hospitaliz/.test(r)) {
    const s = [...n].sort((d, c) => d.libres - c.libres);
    return (
      `Disponibilidad de camas (menos libres primero):
` +
      s.map((d) => `• ${d.area}: ${d.libres}/${d.total} libres`).join(`
`) +
      `

El área con menos camas libres es ${(l = s[0]) == null ? void 0 : l.area}.`
    );
  }
  return "Puedo ayudarte con asistencia del personal, camas y stock de medicamentos. Prueba con una de las sugerencias de abajo.";
}
function W1({ areasResumen: e, medicamentos: n }) {
  const [t, r] = F.useState([
      {
        rol: "asistente",
        texto:
          "Soy el asistente de IA de AFINTY. Puedo revisar turnos por área, asistencia del personal, disponibilidad de camas y stock de medicamentos, y sugerir acciones administrativas. ¿En qué te ayudo?",
      },
    ]),
    [o, a] = F.useState(""),
    [l, s] = F.useState(!1),
    d = F.useRef(null);
  F.useEffect(() => {
    var u;
    (u = d.current) == null || u.scrollIntoView({ behavior: "smooth" });
  }, [t]);
  async function c() {
    const u = o.trim();
    if (!u || l) return;
    const h = [...t, { rol: "usuario", texto: u }];
    (r(h), a(""), s(!0));
    try {
      const g = h.map((b) => ({
          role: b.rol === "usuario" ? "user" : "assistant",
          content: b.texto,
        })),
        x = void 0;
      let E;
      (x || (await new Promise((b) => setTimeout(b, 400)), (E = O1(u, e, n))),
        r((b) => [...b, { rol: "asistente", texto: E }]));
    } catch {
      r((x) => [
        ...x,
        {
          rol: "asistente",
          texto:
            "Hubo un problema de conexión con el asistente. Intenta nuevamente en unos segundos.",
        },
      ]);
    } finally {
      s(!1);
    }
  }
  const m = [
    "¿Qué área acumula más tardanzas esta semana?",
    "¿Qué medicamentos necesitan reposición urgente?",
    "¿Qué área tiene menos camas disponibles?",
    "¿Debo escalar algún caso a Jefatura de Personal?",
    "¿Qué haces si un doctor llega tarde?",
    "¿Cómo aceleras los papeles del paciente?",
  ];
  return i.jsxs(i.Fragment, {
    children: [
      null,
      i.jsxs("div", {
        style: {
          background: "rgba(56,189,248,.09)",
          border: "1px solid rgba(56,189,248,.3)",
          borderRadius: 12,
          padding: "12px 16px",
          marginBottom: 16,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        },
        children: [
          i.jsx(yi, {
            size: 18,
            color: "#38BDF8",
            style: { flexShrink: 0, marginTop: 1 },
          }),
          i.jsxs("span", {
            style: {
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "#E8EEFF",
              lineHeight: 1.5,
            },
            children: [
              "Este asistente actúa como ",
              i.jsx("strong", { children: "administrador virtual del turno" }),
              ": cruza asistencia médica por área, camas y stock de medicamentos en tiempo real, y te dice qué escalar a Jefatura de Personal o Gestión Administrativa antes de que se vuelva un problema.",
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        style: {
          background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
          border: "1px solid rgba(130,150,255,.2)",
          borderRadius: 14,
          display: "flex",
          flexDirection: "column",
          height: 520,
        },
        children: [
          i.jsxs("div", {
            style: {
              flex: 1,
              overflowY: "auto",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            },
            children: [
              t.map((u, h) =>
                i.jsx(
                  "div",
                  {
                    style: {
                      alignSelf:
                        u.rol === "usuario" ? "flex-end" : "flex-start",
                      maxWidth: "78%",
                      background: u.rol === "usuario" ? ee.ctaGrad : "rgba(255,255,255,.06)",
                      color: u.rol === "usuario" ? "#fff" : "#E8EEFF",
                      padding: "10px 14px",
                      borderRadius: 14,
                      borderBottomRightRadius: u.rol === "usuario" ? 4 : 14,
                      borderBottomLeftRadius: u.rol === "usuario" ? 14 : 4,
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      whiteSpace: "pre-wrap",
                    },
                    children: u.texto,
                  },
                  h,
                ),
              ),
              l &&
                i.jsxs("div", {
                  style: {
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#7C8DB8",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                  },
                  children: [
                    i.jsx(Bu, { size: 14, className: "afinty-spin" }),
                    " Analizando datos del hospital…",
                  ],
                }),
              i.jsx("div", { ref: d }),
            ],
          }),
          i.jsx("div", {
            style: {
              padding: "10px 16px",
              borderTop: "1px solid rgba(130,150,255,.2)",
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
            },
            children: m.map((u) =>
              i.jsx(
                "button",
                {
                  onClick: () => a(u),
                  style: {
                    border: "1px solid rgba(130,150,255,.2)",
                    background: "rgba(255,255,255,.035)",
                    borderRadius: 999,
                    padding: "5px 12px",
                    fontSize: 12,
                    fontFamily: "Inter, sans-serif",
                    color: "#38BDF8",
                    cursor: "pointer",
                  },
                  children: u,
                },
                u,
              ),
            ),
          }),
          i.jsxs("div", {
            style: {
              padding: 14,
              borderTop: "1px solid rgba(130,150,255,.2)",
              display: "flex",
              gap: 10,
            },
            children: [
              i.jsx("input", {
                value: o,
                onChange: (u) => a(u.target.value),
                onKeyDown: (u) => u.key === "Enter" && c(),
                placeholder:
                  "Pregúntale al asistente sobre turnos, camas o medicamentos…",
                style: {
                  flex: 1,
                  padding: "11px 14px",
                  borderRadius: 10,
                  border: "1px solid rgba(130,150,255,.2)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  boxSizing: "border-box",
                },
              }),
              i.jsx("button", {
                onClick: c,
                disabled: l,
                style: {
                  background: ee.ctaGrad,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "0 18px",
                  cursor: l ? "default" : "pointer",
                  opacity: l ? 0.6 : 1,
                  display: "flex",
                  alignItems: "center",
                },
                children: i.jsx(Mu, { size: 16 }),
              }),
            ],
          }),
        ],
      }),
      i.jsx("style", {
        children: `
        .afinty-spin { animation: afinty-spin 1s linear infinite; }
        @keyframes afinty-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `,
      }),
    ],
  });
}
const Fo = [
    {
      key: "calidad",
      label: "Calidad",
      desc: "Calidad de la atención médica recibida",
    },
    {
      key: "experiencia",
      label: "Experiencia",
      desc: "Trato y experiencia general en la consulta",
    },
    {
      key: "velocidad",
      label: "Velocidad",
      desc: "Rapidez de la atención y tiempo de espera",
    },
  ],
  $1 = ["", "Muy mala", "Mala", "Regular", "Buena", "Excelente"];
function H1() {
  const e = [];
  return (
    V.forEach((n) => {
      const t = 3 + Math.floor(Ha(n.id * 5.3) * 5);
      for (let r = 0; r < t; r++) {
        const o = (a) =>
          Math.min(
            5,
            Math.max(2, Math.round(3.2 + Ha(n.id * 11.7 + r * 2.9 + a) * 2.2)),
          );
        e.push({
          doctorId: n.id,
          calidad: o(1),
          experiencia: o(2),
          velocidad: o(3),
          autor: "demo",
        });
      }
    }),
    e
  );
}
function $u({ valor: e, onChange: n, size: t = 30, soloLectura: r = !1 }) {
  const [o, a] = F.useState(0),
    l = o || e;
  return i.jsx("div", {
    style: { display: "inline-flex", gap: 4 },
    onMouseLeave: () => a(0),
    children: [1, 2, 3, 4, 5].map((s) =>
      i.jsx(
        "button",
        {
          type: "button",
          className: r ? "" : "afinty-star",
          disabled: r,
          "aria-label": `${s} ${s === 1 ? "estrella" : "estrellas"}`,
          onMouseEnter: () => !r && a(s),
          onClick: () => n && n(s),
          style: {
            background: "none",
            border: "none",
            padding: 0,
            cursor: r ? "default" : "pointer",
            lineHeight: 0,
          },
          children: i.jsx($r, {
            size: t,
            color: s <= l ? "#F5A623" : "#3B4670",
            fill: s <= l ? "#F5A623" : "none",
            strokeWidth: 1.8,
          }),
        },
        s,
      ),
    ),
  });
}
function mc(e) {
  const n = e.length;
  if (!n) return { n: 0, calidad: 0, experiencia: 0, velocidad: 0, general: 0 };
  const t = (l) => e.reduce((s, d) => s + d[l], 0) / n,
    r = t("calidad"),
    o = t("experiencia"),
    a = t("velocidad");
  return {
    n,
    calidad: r,
    experiencia: o,
    velocidad: a,
    general: (r + o + a) / 3,
  };
}
function U1({ calificaciones: e, onCalificar: n, autor: t }) {
  const [r, o] = F.useState(""),
    [a, l] = F.useState(null),
    [s, d] = F.useState({ calidad: 0, experiencia: 0, velocidad: 0 }),
    [c, m] = F.useState(null),
    u = new Set(e.filter((b) => b.autor === t).map((b) => b.doctorId)),
    h = V.filter(
      (b) =>
        !r.trim() ||
        (b.nombre + " " + b.esp).toLowerCase().includes(r.trim().toLowerCase()),
    ).slice(0, 40),
    g = V.find((b) => b.id === a),
    x = s.calidad && s.experiencia && s.velocidad;
  function E() {
    !x ||
      !g ||
      (n({ doctorId: g.id, ...s, autor: t }),
      m(g.nombre),
      l(null),
      d({ calidad: 0, experiencia: 0, velocidad: 0 }));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Pacientes y familiares",
        title: "Califica a tu doctor",
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          color: "#9AA9D0",
          marginTop: -6,
          marginBottom: 16,
        },
        children:
          "Elige al doctor que te atendió y califica de 1 a 5 estrellas. Solo estrellas: no se pueden dejar comentarios.",
      }),
      c &&
        i.jsxs("div", {
          style: {
            background: "rgba(46,230,160,.13)",
            color: "#2EE6A0",
            borderRadius: 12,
            padding: "12px 16px",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 16,
            display: "flex",
            gap: 8,
            alignItems: "center",
          },
          children: [
            i.jsx(jn, { size: 18 }),
            " ¡Gracias! Tu calificación para ",
            c,
            " fue enviada.",
          ],
        }),
      i.jsxs("div", {
        style: {
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          alignItems: "flex-start",
        },
        children: [
          i.jsxs("div", {
            style: {
              flex: "1 1 320px",
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 14,
              padding: 16,
            },
            children: [
              i.jsx("input", {
                value: r,
                onChange: (b) => o(b.target.value),
                placeholder: "Buscar doctor o especialidad…",
                style: { ...pn, marginBottom: 10 },
              }),
              i.jsxs("div", {
                style: {
                  maxHeight: 420,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                },
                children: [
                  h.map((b) =>
                    i.jsxs(
                      "button",
                      {
                        onClick: () => {
                          (l(b.id), m(null));
                        },
                        disabled: u.has(b.id),
                        style: {
                          textAlign: "left",
                          border:
                            "1px solid " + (a === b.id ? "#38BDF8" : "rgba(130,150,255,.2)"),
                          background: a === b.id ? "rgba(56,189,248,.09)" : "rgba(255,255,255,.04)",
                          borderRadius: 10,
                          padding: "9px 12px",
                          cursor: u.has(b.id) ? "default" : "pointer",
                          opacity: u.has(b.id) ? 0.55 : 1,
                          fontFamily: "Inter, sans-serif",
                        },
                        children: [
                          i.jsx("div", {
                            style: {
                              fontSize: 13.5,
                              fontWeight: 600,
                              color: "#E8EEFF",
                            },
                            children: b.nombre,
                          }),
                          i.jsxs("div", {
                            style: { fontSize: 12, color: "#38BDF8" },
                            children: [
                              b.esp,
                              u.has(b.id) ? " · ya calificado" : "",
                            ],
                          }),
                        ],
                      },
                      b.id,
                    ),
                  ),
                  h.length === 0 &&
                    i.jsx("div", {
                      style: { fontSize: 13, color: "#7C8DB8", padding: 10 },
                      children: "No se encontraron doctores.",
                    }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            style: {
              flex: "1 1 360px",
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(130,150,255,.2)",
              borderRadius: 14,
              padding: 22,
            },
            children: g
              ? i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("div", {
                      style: {
                        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#E8EEFF",
                      },
                      children: g.nombre,
                    }),
                    i.jsx("div", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#38BDF8",
                        marginBottom: 18,
                      },
                      children: g.esp,
                    }),
                    Fo.map((b) =>
                      i.jsxs(
                        "div",
                        {
                          style: { marginBottom: 18 },
                          children: [
                            i.jsxs("div", {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                fontFamily: "Inter, sans-serif",
                              },
                              children: [
                                i.jsx("span", {
                                  style: {
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#E8EEFF",
                                  },
                                  children: b.label,
                                }),
                                i.jsx("span", {
                                  style: {
                                    fontSize: 12.5,
                                    color: "#F5A623",
                                    fontWeight: 600,
                                  },
                                  children: $1[s[b.key]],
                                }),
                              ],
                            }),
                            i.jsx("div", {
                              style: {
                                fontFamily: "Inter, sans-serif",
                                fontSize: 12,
                                color: "#7C8DB8",
                                marginBottom: 6,
                              },
                              children: b.desc,
                            }),
                            i.jsx($u, {
                              valor: s[b.key],
                              onChange: (p) => d({ ...s, [b.key]: p }),
                            }),
                          ],
                        },
                        b.key,
                      ),
                    ),
                    i.jsx("button", {
                      onClick: E,
                      disabled: !x,
                      style: {
                        width: "100%",
                        background: ee.ctaGrad,
                        color: "#fff",
                        border: "none",
                        borderRadius: 10,
                        padding: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: x ? "pointer" : "not-allowed",
                        opacity: x ? 1 : 0.5,
                      },
                      children: "Enviar calificación",
                    }),
                    !x &&
                      i.jsx("div", {
                        style: {
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          color: "#7C8DB8",
                          marginTop: 8,
                          textAlign: "center",
                        },
                        children: "Califica los tres aspectos para enviar.",
                      }),
                  ],
                })
              : i.jsxs("div", {
                  style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "#7C8DB8",
                    textAlign: "center",
                    padding: "40px 10px",
                  },
                  children: [
                    i.jsx($r, { size: 34, color: "#3B4670" }),
                    i.jsx("br", {}),
                    "Selecciona un doctor de la lista para calificarlo.",
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
function V1({ calificaciones: e }) {
  const [n, t] = F.useState("general"),
    [r, o] = F.useState("Todas"),
    a = F.useMemo(() => {
      const c = {};
      return (
        e.forEach((m) => {
          (c[m.doctorId] = c[m.doctorId] || []).push(m);
        }),
        V.map((m) => ({ d: m, p: mc(c[m.id] || []) })).filter((m) => m.p.n > 0)
      );
    }, [e]),
    l = ["Todas", ...Array.from(new Set(V.map((c) => c.area)))],
    s = a
      .filter((c) => r === "Todas" || c.d.area === r)
      .sort((c, m) => m.p[n] - c.p[n]),
    d = mc(e);
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(ue, {
        eyebrow: "Jefatura · opinión de pacientes y familias",
        title: "Calificaciones de doctores",
      }),
      i.jsxs("div", {
        style: { display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 18 },
        children: [
          i.jsx(Rn, {
            label: "Promedio general",
            value: d.general.toFixed(2),
            sub: `${d.n} calificaciones recibidas`,
            accent: "#F5A623",
            icon: $r,
            iconBg: "rgba(255,181,71,.14)",
          }),
          Fo.map((c) =>
            i.jsx(
              Rn,
              {
                label: c.label,
                value: d[c.key].toFixed(2),
                sub: "promedio de 1 a 5",
                accent: "#38BDF8",
                icon: Dm,
                iconBg: "rgba(56,189,248,.09)",
              },
              c.key,
            ),
          ),
        ],
      }),
      i.jsxs("div", {
        style: {
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 14,
          alignItems: "center",
        },
        children: [
          i.jsx("select", {
            value: r,
            onChange: (c) => o(c.target.value),
            style: { ...pn, width: "auto" },
            children: l.map((c) => i.jsx("option", { children: c }, c)),
          }),
          i.jsxs("select", {
            value: n,
            onChange: (c) => t(c.target.value),
            style: { ...pn, width: "auto" },
            children: [
              i.jsx("option", {
                value: "general",
                children: "Ordenar por: general",
              }),
              Fo.map((c) =>
                i.jsxs(
                  "option",
                  { value: c.key, children: ["Ordenar por: ", c.label] },
                  c.key,
                ),
              ),
            ],
          }),
        ],
      }),
      i.jsx("div", {
        style: { display: "flex", flexDirection: "column", gap: 8 },
        children: s.map(({ d: c, p: m }, u) =>
          i.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(130,150,255,.2)",
                borderRadius: 12,
                padding: "12px 18px",
                flexWrap: "wrap",
              },
              children: [
                i.jsxs("div", {
                  style: {
                    fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                    fontWeight: 600,
                    color: "#7C8DB8",
                    width: 28,
                  },
                  children: ["#", u + 1],
                }),
                i.jsxs("div", {
                  style: { flex: "1 1 240px", minWidth: 200 },
                  children: [
                    i.jsx("div", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13.5,
                        fontWeight: 600,
                        color: "#E8EEFF",
                      },
                      children: c.nombre,
                    }),
                    i.jsxs("div", {
                      style: {
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        color: "#38BDF8",
                      },
                      children: [c.esp, " · ", m.n, " calificaciones"],
                    }),
                  ],
                }),
                i.jsx("div", {
                  style: {
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    flex: "2 1 300px",
                  },
                  children: Fo.map((h) =>
                    i.jsxs(
                      "div",
                      {
                        style: { flex: "1 1 80px" },
                        children: [
                          i.jsxs("div", {
                            style: {
                              fontFamily: "Inter, sans-serif",
                              fontSize: 11,
                              color: "#7C8DB8",
                              display: "flex",
                              justifyContent: "space-between",
                            },
                            children: [
                              i.jsx("span", { children: h.label }),
                              i.jsx("strong", {
                                style: { color: "#E8EEFF" },
                                children: m[h.key].toFixed(1),
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            style: {
                              height: 6,
                              background: "rgba(130,150,255,.2)",
                              borderRadius: 999,
                              overflow: "hidden",
                              marginTop: 3,
                            },
                            children: i.jsx("div", {
                              style: {
                                width: `${(m[h.key] / 5) * 100}%`,
                                height: "100%",
                                background: "#38BDF8",
                              },
                            }),
                          }),
                        ],
                      },
                      h.key,
                    ),
                  ),
                }),
                i.jsxs("div", {
                  style: { textAlign: "center" },
                  children: [
                    i.jsx($u, {
                      valor: Math.round(m.general),
                      size: 15,
                      soloLectura: !0,
                    }),
                    i.jsx("div", {
                      style: {
                        fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#E8EEFF",
                      },
                      children: m.general.toFixed(2),
                    }),
                  ],
                }),
              ],
            },
            c.id,
          ),
        ),
      }),
      i.jsx("p", {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: 11.5,
          color: "#7C8DB8",
          marginTop: 14,
        },
        children:
          "Incluye calificaciones ilustrativas de la demo junto con las reales enviadas desde la sesión de pacientes.",
      }),
    ],
  });
}
function G1(e) {
  return e === "Jefatura"
    ? f1
    : e === "Doctor"
      ? [
          { key: "miturno", label: "Mi turno", icon: Ko },
          { key: "mensajes", label: "Mensajes", icon: Xo },
          { key: "turnos", label: "Médicos por área", icon: Ko },
          { key: "camas", label: "Camas", icon: Dr },
          { key: "citas", label: "Citas", icon: Wt },
          { key: "insumos", label: "Medicamentos y equipos", icon: Rr },
          { key: "documentos", label: "Documentos", icon: Jo },
          { key: "hospital", label: "Hospital y médicos", icon: bt },
          { key: "nosotros", label: "Nosotros", icon: Ft },
        ]
      : e === "Almacén"
        ? [
            { key: "insumos", label: "Medicamentos y equipos", icon: Rr },
            { key: "mensajes", label: "Mensajes", icon: Xo },
            { key: "alertas", label: "Alertas", icon: Ol },
            { key: "hospital", label: "Hospital y médicos", icon: bt },
            { key: "nosotros", label: "Nosotros", icon: Ft },
          ]
        : e === "Vigilante"
          ? [
              { key: "emergencias", label: "Emergencia / Ingreso", icon: $l },
              { key: "hospital", label: "Hospital y médicos", icon: bt },
              { key: "nosotros", label: "Nosotros", icon: Ft },
            ]
          : [
              { key: "admision", label: "Admisión con IA", icon: yi },
              { key: "citasFamilia", label: "Citas", icon: Wt },
              { key: "camasFamilia", label: "Camas", icon: Dr },
              { key: "calificar", label: "Calificar doctores", icon: $r },
              { key: "documentos", label: "Documentos", icon: Jo },
              { key: "hospital", label: "Hospital y médicos", icon: bt },
              { key: "nosotros", label: "Nosotros", icon: Ft },
            ];
}
function Q1(e) {
  return e === "Doctor"
    ? "miturno"
    : e === "Almacén"
      ? "insumos"
      : e === "Vigilante"
        ? "emergencias"
        : e === "Jefatura"
          ? "resumen"
          : "citasFamilia";
}
const IcSpark = yi, IcCheck = jn;
const AFY_FONT_D = "'Syne', 'Space Grotesk', sans-serif";
const AFY_FONT_M = "'Space Mono', 'IBM Plex Mono', monospace";
function afyHm(min) {
  const h = Math.floor(min / 60), m = min % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}
function useCuenta(objetivo, ms = 1100) {
  const [v, setV] = F.useState(0);
  F.useEffect(() => {
    let raf, t0;
    const paso = (t) => {
      if (!t0) t0 = t;
      const k = Math.min(1, (t - t0) / ms);
      setV(Math.round(objetivo * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(paso);
    };
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [objetivo, ms]);
  return v;
}
function AfyStat({ valor, sufijo, etiqueta, color, icono }) {
  const n = useCuenta(valor);
  const Ico = icono;
  return /* @__PURE__ */ F.createElement("div", { className: "afy-stat" }, /* @__PURE__ */ F.createElement("div", { className: "afy-stat-ico", style: { color, borderColor: color + "55", boxShadow: "0 0 18px -4px " + color } }, /* @__PURE__ */ F.createElement(Ico, { size: 18 })), /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("div", { className: "afy-stat-num", style: { color } }, n, sufijo), /* @__PURE__ */ F.createElement("div", { className: "afy-stat-lbl" }, etiqueta)));
}
function HeroAfinty({ onIr, ocupacion, camasLibres, alertas, criticos }) {
  return /* @__PURE__ */ F.createElement("div", { style: { marginBottom: 22 } }, /* @__PURE__ */ F.createElement("div", { className: "afy-hero" }, /* @__PURE__ */ F.createElement("div", { className: "afy-hero-copy" }, /* @__PURE__ */ F.createElement("span", { className: "afy-pill" }, /* @__PURE__ */ F.createElement("span", { className: "afy-dot" }), " IA ACTIVA · MONITOREANDO EL HOSPITAL"), /* @__PURE__ */ F.createElement("h1", { className: "afy-h1" }, "GESTIÓN", /* @__PURE__ */ F.createElement("br", null), /* @__PURE__ */ F.createElement("span", { className: "afy-h1-thin" }, "HOSPITALARIA"), /* @__PURE__ */ F.createElement("br", null), /* @__PURE__ */ F.createElement("span", { className: "afy-h1-glow" }, "INTELIGENTE")), /* @__PURE__ */ F.createElement("p", { className: "afy-lead" }, "Una IA que no solo responde: ", /* @__PURE__ */ F.createElement("b", null, "interviene"), ". Si un doctor llega tarde reasigna pacientes y les avisa; si llegas al hospital, te hace las preguntas y deja tus papeles listos antes de la ventanilla."), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ F.createElement("button", { className: "afy-btn-main", onClick: () => onIr && onIr("ia") }, "Abrir centro de comando IA ", /* @__PURE__ */ F.createElement(Am, { size: 16 })), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", onClick: () => onIr && onIr("turnos") }, "Ver turnos médicos"))), /* @__PURE__ */ F.createElement("div", { className: "afy-hero-media" }, /* @__PURE__ */ F.createElement("div", { className: "afy-media-frame" }, /* @__PURE__ */ F.createElement("img", { src: "./hospital-fachada.png", alt: "Hospital Nacional Arzobispo Loayza" }), /* @__PURE__ */ F.createElement("div", { className: "afy-media-shade" })), /* @__PURE__ */ F.createElement("div", { className: "afy-float-chip" }, /* @__PURE__ */ F.createElement("span", { className: "afy-dot", style: { background: "#2EE6A0", boxShadow: "0 0 10px #2EE6A0" } }), " OPERATIVO 24/7"), /* @__PURE__ */ F.createElement("div", { className: "afy-ring" }, /* @__PURE__ */ F.createElement("span", null, "IA", /* @__PURE__ */ F.createElement("br", null), "ONLINE")))), /* @__PURE__ */ F.createElement("div", { className: "afy-stats" }, /* @__PURE__ */ F.createElement(AfyStat, { valor: ocupacion, sufijo: "%", etiqueta: "OCUPACIÓN DE CAMAS", color: "#38BDF8", icono: Dr }), /* @__PURE__ */ F.createElement(AfyStat, { valor: camasLibres, sufijo: "", etiqueta: "CAMAS LIBRES", color: "#2EE6A0", icono: IcCheck }), /* @__PURE__ */ F.createElement(AfyStat, { valor: alertas, sufijo: "", etiqueta: "ALERTAS ACTIVAS", color: "#FFB547", icono: Ol }), /* @__PURE__ */ F.createElement(AfyStat, { valor: criticos, sufijo: "", etiqueta: "MEDICINAS CRÍTICAS", color: "#FF5D7A", icono: Rr })));
}
const TOL_AVISO = 10, TOL_REASIGNA = 20, TOL_ESCALA = 35;
const PACIENTES_DEMO = jo;
function IAMonitor({ onAlerta }) {
  const lista = F.useMemo(() => {
    const base = V.filter((d) => vi.includes(d.id) && _u[d.id] === "07:00");
    const vistos = /* @__PURE__ */ new Set();
    const out = [];
    for (const d of base) {
      if (!vistos.has(d.area)) {
        vistos.add(d.area);
        out.push(d);
      }
      if (out.length === 6) break;
    }
    for (const d of base) {
      if (out.length >= 6) break;
      if (!out.includes(d)) out.push(d);
    }
    return out;
  }, []);
  const plan = F.useMemo(() => {
    const p = {};
    lista.forEach((d, k) => {
      p[d.id] = k === 1 ? 7 * 60 + 24 : k === 3 ? null : 7 * 60 - 4 + Math.floor(Ha(d.id * 1.7) * 8);
    });
    return p;
  }, [lista]);
  const espera = (d) => 4 + Math.floor(Ha(d.id * 3.1) * 7);
  const pacientesDe = (d) => Array.from({ length: espera(d) }, (_, k) => PACIENTES_DEMO[(d.id * 3 + k * 5) % PACIENTES_DEMO.length].nombre);
  const [t, setT] = F.useState(7 * 60 - 10);
  const [corre, setCorre] = F.useState(false);
  const [auto, setAuto] = F.useState(true);
  const [llegadas, setLlegadas] = F.useState({});
  const [acciones, setAcciones] = F.useState({});
  const [log, setLog] = F.useState([]);
  const hecho = F.useRef(/* @__PURE__ */ new Set());
  const extra = F.useRef({});
  const ahora = () => afyHm(t);
  const agregarLog = (tipo, texto, t0) => setLog((l) => [{ id: Math.random().toString(36).slice(2), tipo, texto, hora: afyHm(t0) }, ...l].slice(0, 40));
  F.useEffect(() => {
    if (!corre) return;
    const h = setInterval(() => setT((x) => x >= 7 * 60 + 60 ? x : x + 1), 280);
    return () => clearInterval(h);
  }, [corre]);
  F.useEffect(() => {
    if (t >= 7 * 60 + 60 && corre) setCorre(false);
  }, [t, corre]);
  F.useEffect(() => {
    lista.forEach((d) => {
      const pl = plan[d.id];
      if (pl !== null && t >= pl && !(d.id in llegadas)) setLlegadas((l) => ({ ...l, [d.id]: pl }));
    });
  }, [t]);
  const presente = (d) => d.id in llegadas;
  const retraso = (d) => presente(d) ? Math.max(0, llegadas[d.id] - 7 * 60) : Math.max(0, t - 7 * 60);
  function buscarReemplazo(d) {
    const cands = lista.filter((x) => x.id !== d.id && presente(x));
    const mismo = cands.filter((x) => x.area === d.area);
    const carga = (x) => espera(x) + (extra.current[x.id] || 0);
    const orden = (mismo.length ? mismo : cands).slice().sort((a, b) => carga(a) - carga(b));
    return orden[0] || null;
  }
  function ejecutarReasignacion(d, reemp, t0, manual) {
    const pac = pacientesDe(d);
    if (reemp) extra.current[reemp.id] = (extra.current[reemp.id] || 0) + pac.length;
    setAcciones((a) => ({ ...a, [d.id]: { ...a[d.id] || {}, propuesta: null, reasignado: { a: reemp ? reemp.nombre : null, n: pac.length, pac } } }));
    if (reemp) {
      agregarLog("accion", `${manual ? "Aprobado · " : ""}IA reasignó ${pac.length} pacientes de Dr(a). ${d.nombre.split(" ").slice(0, 2).join(" ")} a Dr(a). ${reemp.nombre.split(" ").slice(0, 2).join(" ")} (${reemp.esp}) y envió SMS a cada paciente con su nuevo consultorio.`, t0);
    } else {
      agregarLog("accion", `IA no encontró reemplazo disponible: ofreció a ${pac.length} pacientes reprogramar su cita o esperar, y envió SMS con el tiempo estimado.`, t0);
    }
  }
  F.useEffect(() => {
    lista.forEach((d) => {
      if (presente(d)) return;
      const r = t - 7 * 60;
      const k = (n) => `${d.id}-${n}`;
      const corto = d.nombre.split(" ").slice(0, 2).join(" ");
      if (r >= TOL_AVISO && !hecho.current.has(k("aviso"))) {
        hecho.current.add(k("aviso"));
        setAcciones((a) => ({ ...a, [d.id]: { ...a[d.id] || {}, aviso: true } }));
        agregarLog("aviso", `IA envió mensaje y llamada automática a Dr(a). ${corto}: «Su turno de 07:00 ya inició, ¿confirma su llegada?»`, t);
      }
      if (r >= TOL_REASIGNA && !hecho.current.has(k("reasigna"))) {
        hecho.current.add(k("reasigna"));
        const reemp = buscarReemplazo(d);
        if (auto) {
          ejecutarReasignacion(d, reemp, t, false);
        } else {
          setAcciones((a) => ({ ...a, [d.id]: { ...a[d.id] || {}, propuesta: { reemp: reemp ? reemp.id : null } } }));
          agregarLog("propuesta", `IA propone reasignar a los ${espera(d)} pacientes de Dr(a). ${corto}${reemp ? ` con Dr(a). ${reemp.nombre.split(" ").slice(0, 2).join(" ")}` : ""}. Espera tu aprobación.`, t);
        }
      }
      if (r >= TOL_ESCALA && !hecho.current.has(k("escala"))) {
        hecho.current.add(k("escala"));
        setAcciones((a) => ({ ...a, [d.id]: { ...a[d.id] || {}, escalado: true } }));
        agregarLog("escala", `IA escaló a Jefatura de Personal: Dr(a). ${corto} acumula ${r} min de retraso. Se registró alerta y posible sanción.`, t);
        onAlerta && onAlerta({
          id: `ia-escala-${d.id}-${Date.now()}`,
          sev: "alta",
          area: d.esp,
          msg: `IA AFINTY: ${d.nombre} no marcó ingreso (turno 07:00) y lleva ${r} min de retraso. Pacientes reasignados y Jefatura notificada.`,
          time: "Ahora"
        });
      }
    });
  }, [t, llegadas]);
  function marcarLlegada(d) {
    const era = t - 7 * 60;
    setLlegadas((l) => ({ ...l, [d.id]: t }));
    const corto = d.nombre.split(" ").slice(0, 2).join(" ");
    if (acciones[d.id] && acciones[d.id].reasignado) {
      agregarLog("ok", `Dr(a). ${corto} llegó (${afyHm(t)}, +${era} min). IA mantiene la reasignación para no confundir a los pacientes y le asigna los nuevos ingresos.`, t);
    } else {
      agregarLog("ok", `Dr(a). ${corto} marcó ingreso a las ${afyHm(t)}${era > 0 ? ` (+${era} min)` : ""}. IA canceló el protocolo de contingencia.`, t);
    }
  }
  function reiniciar() {
    hecho.current = /* @__PURE__ */ new Set();
    extra.current = {};
    setT(7 * 60 - 10);
    setCorre(false);
    setLlegadas({});
    setAcciones({});
    setLog([]);
  }
  const totalEsperaAhorrada = Object.entries(acciones).reduce((s, [id, a]) => {
    if (!a.reasignado) return s;
    const d = lista.find((x) => String(x.id) === id);
    return s + a.reasignado.n * Math.max(0, Math.min(t - 7 * 60, 40) - 5);
  }, 0);
  const colorTipo = { aviso: "#FFB547", propuesta: "#A78BFA", accion: "#38BDF8", escala: "#FF5D7A", ok: "#2EE6A0" };
  const etiquetaTipo = { aviso: "AVISO", propuesta: "PROPUESTA", accion: "ACCIÓN", escala: "ESCALADO", ok: "OK" };
  return /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("div", { className: "afy-card afy-ia-bar" }, /* @__PURE__ */ F.createElement("div", { className: "afy-orb" }, /* @__PURE__ */ F.createElement(IcSpark, { size: 20, color: "#fff" })), /* @__PURE__ */ F.createElement("div", { style: { flex: 1, minWidth: 220 } }, /* @__PURE__ */ F.createElement("div", { className: "afy-mini" }, "REGLAS DE INTERVENCIÓN"), /* @__PURE__ */ F.createElement("div", { style: { fontSize: 13, color: "#C2CDEB", lineHeight: 1.55 } }, /* @__PURE__ */ F.createElement("b", { style: { color: "#FFB547" } }, "+", TOL_AVISO, " min"), " avisa al doctor ·", " ", /* @__PURE__ */ F.createElement("b", { style: { color: "#38BDF8" } }, "+", TOL_REASIGNA, " min"), " reasigna pacientes y les escribe ·", " ", /* @__PURE__ */ F.createElement("b", { style: { color: "#FF5D7A" } }, "+", TOL_ESCALA, " min"), " escala a Jefatura.")), /* @__PURE__ */ F.createElement("label", { className: "afy-switch", title: "La IA ejecuta sola las reasignaciones" }, /* @__PURE__ */ F.createElement("input", { type: "checkbox", checked: auto, onChange: (e) => setAuto(e.target.checked) }), /* @__PURE__ */ F.createElement("span", { className: "afy-switch-track" }, /* @__PURE__ */ F.createElement("span", { className: "afy-switch-knob" })), /* @__PURE__ */ F.createElement("span", { style: { fontSize: 12.5, fontWeight: 600, color: auto ? "#7CF5C4" : "#9AA9D0" } }, auto ? "IA autónoma" : "Requiere mi aprobación"))), /* @__PURE__ */ F.createElement("div", { className: "afy-card", style: { display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginTop: 14 } }, /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("div", { className: "afy-mini" }, "RELOJ DE LA SIMULACIÓN · TURNO 07:00"), /* @__PURE__ */ F.createElement("div", { style: { fontFamily: AFY_FONT_M, fontSize: 40, fontWeight: 700, letterSpacing: 2, color: "#E8EEFF", textShadow: "0 0 24px rgba(56,189,248,.6)" } }, ahora())), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, /* @__PURE__ */ F.createElement("button", { className: "afy-btn-main", onClick: () => setCorre((c) => !c) }, corre ? "⏸ Pausar" : "▶ Simular la mañana"), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", onClick: () => setT((x) => Math.min(x + 5, 7 * 60 + 60)) }, "+5 min"), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", onClick: () => setT((x) => Math.min(x + 15, 7 * 60 + 60)) }, "+15 min"), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", onClick: reiniciar }, "↺ Reiniciar")), /* @__PURE__ */ F.createElement("div", { style: { marginLeft: "auto", textAlign: "right" } }, /* @__PURE__ */ F.createElement("div", { className: "afy-mini" }, "ESPERA EVITADA POR LA IA"), /* @__PURE__ */ F.createElement("div", { style: { fontFamily: AFY_FONT_D, fontSize: 26, fontWeight: 700, color: "#2EE6A0" } }, totalEsperaAhorrada, " ", /* @__PURE__ */ F.createElement("span", { style: { fontSize: 13, color: "#9AA9D0", fontWeight: 500 } }, "min-paciente")))), /* @__PURE__ */ F.createElement("div", { className: "afy-grid-doc" }, lista.map((d) => {
    const a = acciones[d.id] || {};
    const ok = presente(d);
    const r = retraso(d);
    const tarde = !ok && t - 7 * 60 > 0;
    let estado, color;
    if (ok && r === 0) {
      estado = "EN CONSULTORIO";
      color = "#2EE6A0";
    } else if (ok) {
      estado = `LLEGÓ +${r} MIN`;
      color = "#FFB547";
    } else if (!tarde) {
      estado = "POR LLEGAR";
      color = "#9AA9D0";
    } else if (t - 7 * 60 >= TOL_ESCALA) {
      estado = `SIN LLEGAR +${t - 7 * 60} MIN`;
      color = "#FF5D7A";
    } else {
      estado = `ATRASADO +${t - 7 * 60} MIN`;
      color = "#FFB547";
    }
    const propReemp = a.propuesta && a.propuesta.reemp ? lista.find((x) => x.id === a.propuesta.reemp) : null;
    return /* @__PURE__ */ F.createElement("div", { key: d.id, className: "afy-card afy-doc", style: { borderColor: tarde ? color + "66" : void 0, boxShadow: tarde ? `0 0 30px -12px ${color}` : void 0 } }, /* @__PURE__ */ F.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ F.createElement("div", { className: "afy-avatar", style: { borderColor: color } }, /* @__PURE__ */ F.createElement(Wm, { size: 17 })), /* @__PURE__ */ F.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ F.createElement("div", { style: { fontWeight: 600, fontSize: 13.5, color: "#E8EEFF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, d.nombre), /* @__PURE__ */ F.createElement("div", { style: { fontSize: 11.5, color: "#7C8DB8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, d.esp))), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 } }, /* @__PURE__ */ F.createElement("span", { className: "afy-tag", style: { color, borderColor: color + "66", background: color + "1A" } }, estado), /* @__PURE__ */ F.createElement("span", { style: { fontSize: 12, color: "#9AA9D0" } }, /* @__PURE__ */ F.createElement(Wt, { size: 12, style: { verticalAlign: -1 } }), " ", espera(d), " en espera")), a.aviso && !ok && /* @__PURE__ */ F.createElement("div", { className: "afy-step", style: { color: "#FFB547" } }, "✓ IA avisó al doctor (mensaje + llamada)"), a.reasignado && /* @__PURE__ */ F.createElement("div", { className: "afy-step", style: { color: "#38BDF8" } }, "✓ ", a.reasignado.n, " pacientes ", a.reasignado.a ? `→ Dr(a). ${a.reasignado.a.split(" ").slice(0, 2).join(" ")}` : "avisados para reprogramar", " · SMS enviado"), a.escalado && /* @__PURE__ */ F.createElement("div", { className: "afy-step", style: { color: "#FF5D7A" } }, "✓ Jefatura de Personal notificada"), a.propuesta && /* @__PURE__ */ F.createElement("div", { className: "afy-propuesta" }, /* @__PURE__ */ F.createElement("div", { style: { fontSize: 12.5, color: "#D9CCFF", marginBottom: 8 } }, "La IA propone mover a ", espera(d), " pacientes", propReemp ? ` con Dr(a). ${propReemp.nombre.split(" ").slice(0, 2).join(" ")}` : " (sin reemplazo: reprogramar)", "."), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-main", style: { padding: "7px 14px", fontSize: 12.5 }, onClick: () => ejecutarReasignacion(d, propReemp, t, true) }, "Aprobar y avisar a pacientes")), !ok && /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", style: { marginTop: 12, width: "100%", fontSize: 12.5 }, onClick: () => marcarLlegada(d) }, "Marcar llegada ahora"), a.reasignado && a.reasignado.pac && /* @__PURE__ */ F.createElement("details", { style: { marginTop: 10 } }, /* @__PURE__ */ F.createElement("summary", { style: { cursor: "pointer", fontSize: 12, color: "#9AA9D0" } }, "Ver SMS enviado a pacientes"), /* @__PURE__ */ F.createElement("div", { className: "afy-sms" }, "«Hospital Loayza: su doctor(a) se retrasó. Su atención se mantiene en el mismo orden y ", a.reasignado.a ? `pasará con Dr(a). ${a.reasignado.a.split(" ").slice(0, 2).join(" ")}` : "puede reprogramar con un clic", ". — AFINTY IA»", /* @__PURE__ */ F.createElement("div", { style: { marginTop: 6, color: "#7C8DB8" } }, "Enviado a: ", a.reasignado.pac.slice(0, 3).map((n) => n.split(" ")[0]).join(", "), a.reasignado.pac.length > 3 ? ` y ${a.reasignado.pac.length - 3} más` : ""))));
  })), /* @__PURE__ */ F.createElement("div", { className: "afy-card", style: { marginTop: 14 } }, /* @__PURE__ */ F.createElement("div", { className: "afy-mini", style: { marginBottom: 10 } }, "REGISTRO DE INTERVENCIONES DE LA IA"), log.length === 0 && /* @__PURE__ */ F.createElement("div", { style: { fontSize: 13, color: "#7C8DB8" } }, "Aún no hay intervenciones. Pulsa «Simular la mañana»: un doctor llegará tarde y otro no llegará."), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, log.map((e) => /* @__PURE__ */ F.createElement("div", { key: e.id, className: "afy-log" }, /* @__PURE__ */ F.createElement("span", { style: { fontFamily: AFY_FONT_M, fontSize: 12, color: "#7C8DB8" } }, e.hora), /* @__PURE__ */ F.createElement("span", { className: "afy-tag", style: { color: colorTipo[e.tipo], borderColor: colorTipo[e.tipo] + "66", background: colorTipo[e.tipo] + "1A" } }, etiquetaTipo[e.tipo]), /* @__PURE__ */ F.createElement("span", { style: { fontSize: 13, color: "#C2CDEB", lineHeight: 1.5 } }, e.texto))))));
}
const AFY_ESP = [
  [/pecho|coraz[oó]n|presi[oó]n|palpit/, "Cardiología"],
  [/respirar|tos|pulm[oó]n|asma|flema/, "Neumología"],
  [/cabeza|mareo|convuls|migra|hormigueo/, "Neurología"],
  [/az[uú]car|diabet|tiroides/, "Endocrinología"],
  [/est[oó]mago|barriga|abdom|v[oó]mit|diarrea|ac[ií]dez/, "Gastroenterología"],
  [/hueso|rodilla|fractur|golpe|espalda|tobillo|hombro/, "Ortopedia"],
  [/piel|ronchas|picaz[oó]n|mancha|acn[eé]/, "Dermatología"],
  [/ojo|vista|visi[oó]n/, "Oftalmología"],
  [/o[ií]do|garganta|nariz|sinusitis/, "Otorrinolaringología"],
  [/ni[nñ]o|hij[oa]|beb[eé]|lactante/, "Pediatría"],
  [/embaraz|regla|menstru|ginec/, "Ginecología"],
  [/orina|ri[nñ][oó]n|pr[oó]stata/, "Urología"]
];
function afyAnalizar(motivo, edad) {
  const m = (motivo || "").toLowerCase();
  let prioridad = "BAJA";
  if (/dolor.*(pecho|t[oó]rax)|no puedo respirar|falta de aire|desmay|convulsi|inconsci|sangrado (fuerte|abundante)|asfixia|derrame|paralisis|par[aá]lisis/.test(m)) prioridad = "ALTA";
  else if (/fiebre|v[oó]mit|dolor (fuerte|intenso)|fractur|herida|sangr|deshidrat/.test(m)) prioridad = "MEDIA";
  let esp = "Medicina Interna";
  for (const [re, nombre] of AFY_ESP) if (re.test(m)) {
    esp = nombre;
    break;
  }
  if (edad !== null && edad < 14 && esp === "Medicina Interna") esp = "Pediatría";
  const doc = V.find((d) => d.esp.toLowerCase().includes(esp.toLowerCase().slice(0, 9)) && vi.includes(d.id)) || V.find((d) => d.esp.startsWith("Medicina Interna"));
  return { prioridad, esp, doc };
}
function afyEdad(txt) {
  const mm = /^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/.exec(txt.trim());
  if (!mm) return null;
  const d = +mm[1], mo = +mm[2], y = +mm[3];
  if (mo < 1 || mo > 12 || d < 1 || d > 31 || y < 1900 || y > (/* @__PURE__ */ new Date()).getFullYear()) return null;
  const hoy = /* @__PURE__ */ new Date();
  let e = hoy.getFullYear() - y;
  if (hoy.getMonth() + 1 < mo || hoy.getMonth() + 1 === mo && hoy.getDate() < d) e--;
  return e >= 0 ? e : null;
}
const AFY_PASOS = [
  { k: "nombre", q: () => "¡Hola! Soy AFINTY IA. Voy a adelantar tus trámites para que no hagas cola en 4 ventanillas. Para empezar, ¿cuál es tu nombre completo?", ok: (s) => s.trim().split(/\s+/).length >= 2, err: "Necesito al menos nombre y apellido." },
  { k: "dni", q: (d) => `Gracias, ${d.nombre.split(" ")[0]}. ¿Cuál es tu DNI? (8 dígitos)`, ok: (s) => /^\d{8}$/.test(s.trim()), err: "El DNI debe tener exactamente 8 números.", chips: ["No tengo DNI"], skipChip: "No tengo DNI" },
  { k: "nacimiento", q: () => "¿Tu fecha de nacimiento? (día/mes/año, por ejemplo 14/03/1990)", ok: (s) => afyEdad(s) !== null, err: "Usa el formato día/mes/año, por ejemplo 14/03/1990." },
  { k: "celular", q: () => "¿A qué celular te avisamos cuando te toque? (9 dígitos)", ok: (s) => /^9\d{8}$/.test(s.trim()), err: "Debe tener 9 números y empezar con 9.", chips: ["Prefiero no darlo"], skipChip: "Prefiero no darlo" },
  { k: "seguro", q: () => "¿Con qué seguro te atiendes hoy?", chips: ["SIS", "EsSalud", "SOAT", "Particular"], ok: () => true },
  { k: "motivo", q: () => "Cuéntame con tus palabras: ¿qué te trae al hospital hoy?", ok: (s) => s.trim().length >= 4, err: "Cuéntame un poco más, aunque sea en pocas palabras." },
  {
    k: "detalle",
    q: (d) => {
      const m = d.motivo.toLowerCase();
      if (/fiebre/.test(m)) return "Entiendo. ¿Cuántos grados llegó la fiebre?";
      if (/dolor|duele/.test(m)) return "Del 1 al 10, ¿qué tan fuerte es el dolor?";
      if (/respir|tos/.test(m)) return "¿Tienes tos con flema o falta de aire al caminar?";
      return "¿Hay algo más que sientas junto con esto?";
    },
    chips: (d) => /fiebre/.test(d.motivo.toLowerCase()) ? ["Menos de 38°", "38° a 39°", "Más de 39°"] : /dolor|duele/.test(d.motivo.toLowerCase()) ? ["1 a 3 (leve)", "4 a 6 (moderado)", "7 a 10 (muy fuerte)"] : ["Nada más", "Mareo", "Náuseas"],
    ok: (s) => s.trim().length >= 1
  },
  { k: "tiempo", q: () => "¿Desde cuándo lo tienes?", chips: ["Desde hoy", "1 a 3 días", "Más de una semana", "Es un control"], ok: () => true },
  { k: "alergias", q: () => "¿Eres alérgico(a) a algún medicamento?", chips: ["No", "Penicilina", "Ibuprofeno"], ok: (s) => s.trim().length >= 1 },
  { k: "meds", q: () => "¿Tomas algún medicamento actualmente?", chips: ["Ninguno"], ok: (s) => s.trim().length >= 1 },
  { k: "primera", q: () => "Última pregunta: ¿es tu primera vez en este hospital?", chips: ["Sí, primera vez", "No, ya tengo historia"], ok: () => true }
];
function IAAdmision({ onAlerta, onIr }) {
  const [datos, setDatos] = F.useState({});
  const [paso, setPaso] = F.useState(0);
  const [msgs, setMsgs] = F.useState([{ rol: "ia", texto: AFY_PASOS[0].q({}) }]);
  const [txt, setTxt] = F.useState("");
  const [enviado, setEnviado] = F.useState(false);
  const fin = F.useRef(null);
  F.useEffect(() => {
    fin.current && fin.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [msgs, paso]);
  const terminado = paso >= AFY_PASOS.length;
  const actual = AFY_PASOS[paso];
  function responder(valor, esChip) {
    if (terminado) return;
    const s = valor.trim();
    if (!s) return;
    const p = actual;
    const saltar = p.skipChip && s === p.skipChip;
    if (!saltar && !esChip && p.ok && !p.ok(s)) {
      setMsgs((m) => [...m, { rol: "yo", texto: s }, { rol: "ia", texto: p.err || "No logré entender, ¿puedes repetirlo?" }]);
      setTxt("");
      return;
    }
    const nuevos = { ...datos, [p.k]: saltar ? "No indicado" : s };
    setDatos(nuevos);
    const sig = paso + 1;
    const mm = [...msgs, { rol: "yo", texto: s }];
    if (p.k === "motivo") {
      const an2 = afyAnalizar(s, afyEdad(nuevos.nacimiento || ""));
      if (an2.prioridad === "ALTA") onAlerta && onAlerta({ id: "ia-urg-" + Date.now(), sev: "alta", area: "Emergencias", msg: `IA AFINTY: ${nuevos.nombre || "Paciente"} refiere «${s}» (posible urgencia). Recibirlo en Emergencias de inmediato.`, time: "Ahora" });
      if (an2.prioridad === "ALTA") mm.push({ rol: "ia", alerta: true, texto: "⚠ Lo que describes puede ser urgente. Avisé al personal de Emergencias para que te reciba de inmediato. Si estás acompañado, pide que te acerquen a la puerta de Emergencia. Terminamos tus datos mientras tanto." });
    }
    if (sig < AFY_PASOS.length) {
      mm.push({ rol: "ia", texto: AFY_PASOS[sig].q(nuevos) });
    } else {
      mm.push({ rol: "ia", texto: "¡Listo! Con lo que me contaste ya preparé tu ficha y los documentos de cada área. Revísalos aquí abajo." });
    }
    setMsgs(mm);
    setPaso(sig);
    setTxt("");
  }
  function reiniciar() {
    setDatos({});
    setPaso(0);
    setEnviado(false);
    setTxt("");
    setMsgs([{ rol: "ia", texto: AFY_PASOS[0].q({}) }]);
  }
  const edad = afyEdad(datos.nacimiento || "");
  const an = terminado ? afyAnalizar(datos.motivo, edad) : null;
  const colorPrio = an ? an.prioridad === "ALTA" ? "#FF5D7A" : an.prioridad === "MEDIA" ? "#FFB547" : "#2EE6A0" : "#38BDF8";
  const sinIA = Qn.reduce((s, x) => s + x.tiempoMin, 0);
  const conIA = 3;
  const progreso = Math.round(Math.min(paso, AFY_PASOS.length) / AFY_PASOS.length * 100);
  function textoFicha() {
    return [
      "FICHA DE ADMISIÓN PRE-LLENADA POR IA — " + Ie.nombre,
      "Paciente: " + datos.nombre,
      "DNI: " + datos.dni,
      "Edad: " + (edad !== null ? edad + " años" : "—") + " (nac. " + datos.nacimiento + ")",
      "Celular: " + datos.celular,
      "Seguro: " + datos.seguro,
      "Motivo: " + datos.motivo,
      "Detalle: " + datos.detalle,
      "Evolución: " + datos.tiempo,
      "Alergias: " + datos.alergias,
      "Medicación actual: " + datos.meds,
      "Primera vez: " + datos.primera,
      "Prioridad sugerida: " + an.prioridad,
      "Especialidad sugerida: " + an.esp + (an.doc ? " · " + an.doc.nombre : ""),
      "Generado por AFINTY IA el " + (/* @__PURE__ */ new Date()).toLocaleString("es-PE")
    ].join("\n");
  }
  function descargar() {
    const blob = new Blob([textoFicha()], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ficha-admision-" + (datos.dni || "paciente") + ".txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
  }
  function enviarAreas() {
    setEnviado(true);
    onAlerta && onAlerta({
      id: "ia-adm-" + Date.now(),
      sev: an.prioridad === "ALTA" ? "alta" : an.prioridad === "MEDIA" ? "media" : "baja",
      area: "Admisión",
      msg: `IA AFINTY pre-llenó la ficha de ${datos.nombre} (DNI ${datos.dni}) · ${an.esp} · prioridad ${an.prioridad}. Documentos enviados a ${Qn.map((x) => x.area).join(", ")}.`,
      time: "Ahora"
    });
  }
  const chips = actual && (typeof actual.chips === "function" ? actual.chips(datos) : actual.chips);
  return /* @__PURE__ */ F.createElement("div", { className: "afy-adm" }, /* @__PURE__ */ F.createElement("div", { className: "afy-card", style: { display: "flex", flexDirection: "column", minHeight: 520 } }, /* @__PURE__ */ F.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 } }, /* @__PURE__ */ F.createElement("div", { className: "afy-orb", style: { width: 38, height: 38 } }, /* @__PURE__ */ F.createElement(IcSpark, { size: 20, color: "#fff" })), /* @__PURE__ */ F.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ F.createElement("div", { style: { fontFamily: AFY_FONT_D, fontWeight: 700, fontSize: 15, color: "#E8EEFF" } }, "Admisión inteligente"), /* @__PURE__ */ F.createElement("div", { style: { fontSize: 11.5, color: "#7C8DB8" } }, "La IA te pregunta, valida y llena tus papeles")), /* @__PURE__ */ F.createElement("span", { className: "afy-tag", style: { color: "#38BDF8", borderColor: "#38BDF866", background: "#38BDF81A" } }, progreso, "%")), /* @__PURE__ */ F.createElement("div", { className: "afy-bar" }, /* @__PURE__ */ F.createElement("div", { style: { width: progreso + "%" } })), /* @__PURE__ */ F.createElement("div", { className: "afy-chat" }, msgs.map((m, k) => /* @__PURE__ */ F.createElement("div", { key: k, className: "afy-msg " + (m.rol === "yo" ? "afy-msg-yo" : "afy-msg-ia"), style: m.alerta ? { borderColor: "#FF5D7A88", background: "rgba(255,93,122,.14)", color: "#FFD3DB" } : void 0 }, m.texto)), /* @__PURE__ */ F.createElement("div", { ref: fin })), !terminado ? /* @__PURE__ */ F.createElement("div", null, chips && /* @__PURE__ */ F.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 } }, chips.map((c) => /* @__PURE__ */ F.createElement("button", { key: c, className: "afy-chip", onClick: () => responder(c, true) }, c))), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ F.createElement(
    "input",
    {
      value: txt,
      onChange: (e) => setTxt(e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Enter") responder(txt, false);
      },
      placeholder: "Escribe tu respuesta…",
      style: { flex: 1, border: "1px solid rgba(130,150,255,.28)", borderRadius: 12, padding: "11px 14px", fontSize: 14, fontFamily: "Inter, sans-serif" }
    }
  ), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-main", onClick: () => responder(txt, false), "aria-label": "Enviar" }, /* @__PURE__ */ F.createElement(Mu, { size: 16 })))) : /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", onClick: reiniciar }, "↺ Atender a otro paciente")), /* @__PURE__ */ F.createElement("div", { className: "afy-card" }, /* @__PURE__ */ F.createElement("div", { className: "afy-mini", style: { marginBottom: 10 } }, "FICHA DE ADMISIÓN · PRE-LLENADA POR IA"), !terminado ? /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, [["Paciente", datos.nombre], ["DNI", datos.dni], ["Nacimiento", datos.nacimiento], ["Celular", datos.celular], ["Seguro", datos.seguro], ["Motivo", datos.motivo]].map(([l, v]) => /* @__PURE__ */ F.createElement("div", { key: l, className: "afy-field" }, /* @__PURE__ */ F.createElement("div", null, l), /* @__PURE__ */ F.createElement("b", { style: { color: v ? "#E8EEFF" : "#4D5C88" } }, v || "· · ·")))), /* @__PURE__ */ F.createElement("div", { style: { marginTop: 16, fontSize: 13, color: "#7C8DB8", lineHeight: 1.6 } }, "Los campos se van llenando solos mientras conversas. Al terminar, la IA calcula tu ", /* @__PURE__ */ F.createElement("b", { style: { color: "#C2CDEB" } }, "prioridad"), ", sugiere la ", /* @__PURE__ */ F.createElement("b", { style: { color: "#C2CDEB" } }, "especialidad y el doctor"), ", y manda los documentos a Admisión, Seguros, Historia Clínica y Farmacia.")) : /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("div", { className: "afy-prio", style: { borderColor: colorPrio + "88", background: colorPrio + "18" } }, /* @__PURE__ */ F.createElement("div", { style: { fontSize: 11, fontFamily: AFY_FONT_M, color: colorPrio, letterSpacing: 1.2 } }, "PRIORIDAD SUGERIDA"), /* @__PURE__ */ F.createElement("div", { style: { fontFamily: AFY_FONT_D, fontSize: 26, fontWeight: 800, color: colorPrio } }, an.prioridad), /* @__PURE__ */ F.createElement("div", { style: { fontSize: 13, color: "#C2CDEB" } }, an.prioridad === "ALTA" ? "Derivar a Emergencias ahora." : /* @__PURE__ */ F.createElement(F.Fragment, null, "Especialidad: ", /* @__PURE__ */ F.createElement("b", null, an.esp), an.doc ? /* @__PURE__ */ F.createElement(F.Fragment, null, " · Dr(a). ", an.doc.nombre.split(" ").slice(0, 3).join(" ")) : null))), /* @__PURE__ */ F.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 } }, [["Paciente", datos.nombre], ["DNI", datos.dni], ["Edad", edad !== null ? edad + " años" : "—"], ["Seguro", datos.seguro], ["Motivo", datos.motivo], ["Evolución", datos.tiempo], ["Alergias", datos.alergias], ["Medicación", datos.meds]].map(([l, v]) => /* @__PURE__ */ F.createElement("div", { key: l, className: "afy-field" }, /* @__PURE__ */ F.createElement("div", null, l), /* @__PURE__ */ F.createElement("b", null, v)))), /* @__PURE__ */ F.createElement("div", { className: "afy-mini", style: { margin: "16px 0 8px" } }, "DOCUMENTOS GENERADOS AUTOMÁTICAMENTE"), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, Qn.map((x) => /* @__PURE__ */ F.createElement("div", { key: x.area, className: "afy-doc-row" }, /* @__PURE__ */ F.createElement("span", { style: { color: enviado ? "#2EE6A0" : "#38BDF8" } }, enviado ? "✓" : "●"), /* @__PURE__ */ F.createElement("span", { style: { flex: 1 } }, x.area), /* @__PURE__ */ F.createElement("span", { style: { color: "#7C8DB8", fontSize: 12 } }, enviado ? "recibido" : `ahorra ${x.tiempoMin} min`)))), /* @__PURE__ */ F.createElement("div", { className: "afy-ahorro" }, /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("span", null, "Sin IA"), /* @__PURE__ */ F.createElement("b", { style: { color: "#FF7A93" } }, sinIA, " min")), /* @__PURE__ */ F.createElement("div", { style: { color: "#7C8DB8" } }, "→"), /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("span", null, "Con IA"), /* @__PURE__ */ F.createElement("b", { style: { color: "#2EE6A0" } }, conIA, " min")), /* @__PURE__ */ F.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ F.createElement("span", null, "Ahorras"), /* @__PURE__ */ F.createElement("b", { style: { color: "#38BDF8" } }, sinIA - conIA, " min"))), /* @__PURE__ */ F.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 } }, /* @__PURE__ */ F.createElement("button", { className: "afy-btn-main", disabled: enviado, onClick: enviarAreas }, enviado ? "✓ Enviado a las áreas" : "Enviar a las áreas"), /* @__PURE__ */ F.createElement("button", { className: "afy-btn-ghost", onClick: descargar }, /* @__PURE__ */ F.createElement(Rm, { size: 14, style: { verticalAlign: -2 } }), " Descargar ficha")))));
}
function CentroIA({ areasResumen, medicamentos, onAlerta }) {
  const [tab, setTab] = F.useState("monitor");
  const tabs = [
    ["monitor", "Monitor en vivo", Ko],
    ["admision", "Admisión inteligente", Au],
    ["chat", "Conversar con la IA", Du]
  ];
  return /* @__PURE__ */ F.createElement("div", null, F.createElement(ue, { eyebrow: "IA proactiva · copiloto del hospital", title: "Centro de comando IA" }), /* @__PURE__ */ F.createElement("div", { className: "afy-tabs" }, tabs.map(([k, l, Ico]) => /* @__PURE__ */ F.createElement("button", { key: k, className: "afy-tab" + (tab === k ? " afy-tab-on" : ""), onClick: () => setTab(k) }, /* @__PURE__ */ F.createElement(Ico, { size: 15 }), " ", l))), tab === "monitor" && /* @__PURE__ */ F.createElement(IAMonitor, { onAlerta }), tab === "admision" && /* @__PURE__ */ F.createElement(IAAdmision, { onAlerta }), tab === "chat" && /* @__PURE__ */ F.createElement(W1, { areasResumen, medicamentos }));
}
function AdmisionPaciente({ onAlerta }) {
  return /* @__PURE__ */ F.createElement("div", null, F.createElement(ue, { eyebrow: "Admisión con IA · sin colas", title: "Adelanta tus trámites" }), /* @__PURE__ */ F.createElement(IAAdmision, { onAlerta }));
}

function q1() {
  const [e, n] = F.useState([]),
    [t, r] = F.useState(null),
    o = (z) => n((R) => [...R, z]),
    [a, l] = F.useState("resumen"),
    [s, d] = F.useState(() => [...o1(), ...r1]),
    [c, m] = F.useState([]),
    [u, h] = F.useState(i1),
    [g, x] = F.useState(c1),
    [E, b] = F.useState([]),
    [p, f] = F.useState({}),
    [y, v] = F.useState([]),
    [j, C] = F.useState(null),
    [I, A] = F.useState(Vm),
    [O, T] = F.useState(H1),
    J = F.useRef(null);
  F.useLayoutEffect(() => {
    const z = J.current;
    if (
      !z ||
      (window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    )
      return;
    const R = Array.from(z.children).filter(
        (P) => getComputedStyle(P).position !== "fixed",
      ),
      M = new IntersectionObserver(
        (P) => {
          P.forEach(($) => {
            $.isIntersecting &&
              ($.target.classList.add("afinty-in"), M.unobserve($.target));
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      );
    return (
      R.forEach((P, $) => {
        (P.classList.add("afinty-reveal"),
          (P.style.transitionDelay = `${Math.min($, 5) * 55}ms`),
          M.observe(P));
      }),
      () => M.disconnect()
    );
  }, [a, t]);
  const Re = (z) => A((R) => [{ ...z, estado: Zo(z.stock) }, ...R]),
    Oe = (z, R) =>
      A((M) =>
        M.map((P) =>
          P.codigo === z
            ? { ...P, stock: P.stock + R, estado: Zo(P.stock + R) }
            : P,
        ),
      ),
    qe = (z) => T((R) => [...R, z]);
  F.useEffect(() => {
    t && l(Q1(t.rol));
  }, [t]);
  const bn = (z) => d((R) => R.filter((M) => M.id !== z)),
    Fe = (z) => m((R) => [z, ...R]),
    rn = (z) => b((R) => (R.includes(z) ? R : [...R, z]));
  function B(z) {
    const R = new Date().toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      }),
      M = _u[z],
      P = t1(R, M);
    if ((f(($) => ({ ...$, [z]: { hora: R, tarde: P } })), P)) {
      const $ = V.find((X) => X.id === z);
      d((X) => [
        {
          id: `entrada-${z}-${Date.now()}`,
          sev: "media",
          area: $.esp,
          msg: `${$.nombre} marcó su entrada a las ${R}, después de su horario programado (${M}) — notificado a Jefatura. IA AFINTY activó el protocolo: avisó a los pacientes en espera y propuso reasignarlos.`,
          time: "Ahora",
        },
        ...X,
      ]);
    }
  }
  function N(z, R, M) {
    h((P) => ({
      ...P,
      [z]: P[z].map(($, X) =>
        X === R ? { ocupada: !0, dni: M.dni, nombre: M.nombre } : $,
      ),
    }));
  }
  function k(z, R) {
    h((M) => ({
      ...M,
      [z]: M[z].map((P, $) =>
        $ === R ? { ocupada: !1, dni: null, nombre: null } : P,
      ),
    }));
  }
  const L = (z, R, M) =>
      x((P) => ({ ...P, [z]: P[z].map(($, X) => (X === R ? M : $)) })),
    U = (z, R) =>
      x((M) => ({ ...M, [z]: M[z].map((P, $) => ($ === R ? null : P)) })),
    We = (z, R) =>
      x((M) => ({
        ...M,
        [z]: M[z].map((P, $) => ($ === R && P ? { ...P, nueva: !1 } : P)),
      }));
  function Ce(z) {
    (v((R) => [z, ...R]),
      d((R) => [
        {
          id: `msg-alerta-${z.id}`,
          sev: "baja",
          area: z.paraArea || "Mensajería",
          msg: `${z.deNombre} envió un mensaje a ${z.paraNombre}: ${z.asunto}${z.adjuntos.length ? ` (${z.adjuntos.length} adjunto${z.adjuntos.length > 1 ? "s" : ""})` : ""}`,
          time: "Ahora",
        },
        ...R,
      ]));
  }
  const on = (z) =>
      v((R) => R.map((M) => (M.id === z ? { ...M, leido: !0 } : M))),
    w = F.useMemo(() => {
      const z = [];
      return (
        Object.entries(g).forEach(([R, M]) => {
          const P = V.find(($) => $.id === Number(R));
          P &&
            M.forEach(($, X) => {
              $ &&
                z.push({
                  key: `${R}-${X}`,
                  label: `${$.nombre} · ${Dn[X]} · ${P.esp}`,
                  data: {
                    nombre: $.nombre,
                    dni: $.dni,
                    fecha: $.fecha,
                    hora: Dn[X],
                    doctor: P.nombre,
                    esp: P.esp,
                    celular: $.celular || "",
                  },
                });
            });
        }),
        z.sort((R, M) => R.label.localeCompare(M.label, "es"))
      );
    }, [g]);
  function Q(z) {
    (C({ paraId: z }), l("mensajes"));
  }
  function fe(z, R) {
    var $;
    const M = V.find((X) => X.id === z),
      P = ($ = g[z]) == null ? void 0 : $[R];
    (C({
      citaKey: `${z}-${R}`,
      asunto: P
        ? `Paciente ${P.nombre} — ${M == null ? void 0 : M.esp}`
        : "Paciente en atención",
    }),
      l("mensajes"));
  }
  function ct({ nombre: z, dni: R, celular: M, especialidad: P }) {
    const $ = V.filter((X) => vi.includes(X.id) && X.esp === P);
    for (const X of $) {
      const Ur = (g[X.id] || []).findIndex((Ei) => Ei === null);
      if (Ur !== -1) {
        const Ei = {
          nombre: z,
          dni: R || "Sin DNI",
          celular: M,
          fecha: Rt(),
          nueva: !0,
        };
        return (
          x((Vr) => ({
            ...Vr,
            [X.id]: Vr[X.id].map((Qu, qu) => (qu === Ur ? Ei : Qu)),
          })),
          d((Vr) => [
            {
              id: `sol-${Date.now()}`,
              sev: "baja",
              area: X.area,
              msg: `Nueva solicitud de cita: ${z} (cel. ${M}) con ${X.nombre} el ${Rt()} a las ${Dn[Ur]}.`,
              time: "Ahora",
            },
            ...Vr,
          ]),
          {
            ok: !0,
            mensaje: `Cita agendada con ${X.nombre} (${X.esp}) el ${Rt()} a las ${Dn[Ur]}. Te contactaremos al ${M} si hay algún cambio.`,
          }
        );
      }
    }
    return {
      ok: !1,
      mensaje: `No hay horarios disponibles en ${P} por el momento. Intenta más tarde o llama al hospital.`,
    };
  }
  const Gt = Pr.map((z) => {
      const R = u[z.area] || [];
      return {
        area: z.area,
        total: z.total,
        libres: R.filter((M) => !M.ocupada).length,
      };
    }),
    Hu = F.useMemo(
      () =>
        new Date().toLocaleString("es-PE", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          hour: "2-digit",
          minute: "2-digit",
        }),
      [],
    ),
    Uu = V.reduce(
      (z, R) =>
        z +
        R.asistencia.filter(
          (M) => M.estado === "tardanza" || M.estado === "falta",
        ).length,
      0,
    );
  if (!t) return i.jsx(g1, { usuarios: e, onRegistrar: o, onLogin: r });
  const Vu = G1(t.rol),
    Ye = t.rol === "Doctor" ? V.find((z) => z.id === t.doctorId) : null,
    ki = t.rol === "Almacén" ? jo.find((z) => z.id === t.almacenId) : null,
    Hl = Ye
      ? { id: Ye.id, nombre: Ye.nombre, esp: Ye.esp, area: Ye.area }
      : ki
        ? {
            id: 1e4 + ki.id,
            nombre: ki.nombre,
            esp: "Almacén y Farmacia",
            area: "Almacén y Farmacia",
          }
        : {
            id: bo,
            nombre: t.nombre,
            esp: "Jefatura de Personal",
            area: "Dirección y Gestión",
          },
    Gu = y.filter((z) => z.paraId === Hl.id && !z.leido).length;
  return i.jsxs("div", {
    style: {
      fontFamily: "Inter, sans-serif",
      background: ee.bgApp,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    children: [
      i.jsx("style", { children: u1 }),
      i.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          height: So,
          boxSizing: "border-box",
          background: ee.headerGrad,
          color: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 40,
          boxShadow: "0 10px 34px -14px rgba(99,102,241,.7)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(130,150,255,.22)",
        },
        children: [
          i.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            },
            children: [
              i.jsx(_l, { size: 22, color: "#22D3EE" }),
              i.jsx("span", {
                style: {
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: 1.2, textShadow: "0 0 18px rgba(56,189,248,.7)" },
                children: i.jsxs(i.Fragment, { children: [i.jsx("span", { style: { color: "#38BDF8" }, children: "\u2039" }), "AFINTY", i.jsx("span", { style: { color: "#A78BFA" }, children: "/\u203a" })] }),
              }),
              i.jsx("span", {
                style: {
                  fontSize: 11.5,
                  color: "#9FB4E6",
                  fontFamily: "Inter, sans-serif",
                  marginLeft: 4,
                },
                children: Ie.nombre,
              }),
            ],
          }),
          i.jsx(h1, {}),
          i.jsx("div", {
            style: {
              fontFamily: "'Space Mono', 'IBM Plex Mono', monospace",
              fontSize: 12,
              color: "#9FB4E6",
              textTransform: "capitalize",
              flexShrink: 0,
              marginRight: 16,
            },
            children: Hu,
          }),
          i.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              paddingLeft: 16,
            },
            children: [
              i.jsxs("span", {
                style: { fontFamily: "Inter, sans-serif", fontSize: 12.5 },
                children: [
                  t.nombre,
                  " ",
                  i.jsxs("span", {
                    style: { color: "#9FB4E6" },
                    children: ["· ", t.rol, Ye ? ` · ${Ye.area}` : ""],
                  }),
                ],
              }),
              i.jsx("button", {
                onClick: () => r(null),
                style: {
                  background: "rgba(255,255,255,0.16)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "5px 10px",
                  fontSize: 11.5,
                  fontFamily: "Inter, sans-serif",
                  cursor: "pointer",
                },
                children: "Cerrar sesión",
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        style: { display: "flex", flex: 1 },
        children: [
          i.jsx("div", {
            style: {
              width: 240,
              background: "rgba(14,22,56,.66)", backdropFilter: "blur(14px)",
              borderRight: "1px solid rgba(130,150,255,.2)",
              padding: "20px 12px",
              flexShrink: 0,
              position: "sticky",
              top: So,
              alignSelf: "flex-start",
              height: `calc(100vh - ${So}px)`,
              overflowY: "auto",
              boxSizing: "border-box",
            },
            children: Vu.map((z) => {
              const R = z.icon,
                M = a === z.key;
              let P = null;
              return (
                z.key === "alertas" && (P = s.length),
                z.key === "reportes" && (P = Uu),
                z.key === "mensajes" && (P = Gu),
                i.jsxs(
                  "button",
                  {
                    onClick: () => l(z.key),
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      marginBottom: 4,
                      textAlign: "left",
                      background: M ? ee.navActiveGrad : "transparent", boxShadow: M ? "0 0 24px -4px rgba(99,102,241,.8), inset 0 1px 0 rgba(255,255,255,.25)" : "none", transition: "all .2s",
                      color: M ? "#fff" : "#C2CDEB",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      fontWeight: M ? 600 : 500,
                    },
                    children: [
                      i.jsx(R, { size: 17 }),
                      i.jsx("span", { style: { flex: 1 }, children: z.label }),
                      P !== null &&
                        P > 0 &&
                        i.jsx("span", {
                          style: {
                            background: M
                              ? "rgba(255,255,255,0.25)"
                              : "rgba(255,93,122,.14)",
                            color: M ? "#fff" : "#FF7A93",
                            fontSize: 11,
                            fontWeight: 700,
                            borderRadius: 999,
                            padding: "1px 7px",
                          },
                          children: P,
                        }),
                      M && i.jsx(zu, { size: 14 }),
                    ],
                  },
                  z.key,
                )
              );
            }),
          }),
          i.jsxs("div", {
            ref: J,
            style: {
              flex: 1,
              padding: "0 32px 28px",
              maxWidth: 1440,
              width: "100%",
              boxSizing: "border-box",
              minWidth: 0,
            },
            children: [
              a === "resumen" &&
                i.jsx(b1, {
                  onIr: l,
                  alerts: s,
                  onResolve: bn,
                  areasResumen: Gt,
                  onEnviarCorreo: rn,
                  correosEnviados: E,
                  medicamentos: I,
                }),
              a === "turnos" && i.jsx(w1, { onEscribir: Q }),
              a === "miturno" &&
                Ye &&
                i.jsx(C1, {
                  doctor: Ye,
                  entrada: p[Ye.id],
                  onMarcar: () => B(Ye.id),
                }),
              a === "mensajes" &&
                i.jsx(I1, {
                  remitente: Hl,
                  mensajes: y,
                  onEnviar: Ce,
                  onMarcarLeido: on,
                  citasDisponibles: w,
                  destinoInicial: j,
                  onConsumirDestino: () => C(null),
                }),
              a === "camas" &&
                i.jsx(A1, { camas: u, onOcupar: N, onLiberar: k }),
              a === "citas" &&
                i.jsx(T1, {
                  citas: g,
                  onAsignar: L,
                  onLiberar: U,
                  onConfirmar: We,
                  onCompartirCita: fe,
                }),
              a === "citasFamilia" &&
                i.jsx(P1, { especialidades: l1, onSolicitar: ct }),
              a === "camasFamilia" && i.jsx(B1, { camas: u }),
              a === "insumos" &&
                i.jsx(R1, {
                  medicamentos: I,
                  puedeEditar: t.rol === "Almacén" || t.rol === "Jefatura",
                  onAgregar: Re,
                  onSumarStock: Oe,
                }),
              a === "calificar" &&
                i.jsx(U1, {
                  calificaciones: O,
                  onCalificar: qe,
                  autor: t.nombre,
                }),
              a === "calificaciones" && i.jsx(V1, { calificaciones: O }),
              a === "documentos" && i.jsx(M1, {}),
              a === "emergencias" && i.jsx(N1, { atendidos: c, onAtender: Fe }),
              a === "reportes" && i.jsx(_1, {}),
              a === "alertas" &&
                i.jsx(L1, {
                  alerts: s,
                  onResolve: bn,
                  onEnviarCorreo: rn,
                  correosEnviados: E,
                }),
              a === "ia" && i.jsx(CentroIA, { areasResumen: Gt, medicamentos: I, onAlerta: (z) => d((R) => [z, ...R]) }),
              a === "admision" && i.jsx(AdmisionPaciente, { onAlerta: (z) => d((R) => [z, ...R]) }),
              a === "hospital" && i.jsx(k1, {}),
              a === "nosotros" && i.jsx(S1, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
wu(document.getElementById("root")).render(
  i.jsxs(ff.StrictMode, { children: [i.jsx("style", { children: u1 }), i.jsx(q1, {})] }),
);
export { K1 as c, Yu as g };
