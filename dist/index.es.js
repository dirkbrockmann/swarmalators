(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ia = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ae(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function aa(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Dr(t) {
  let e, n, r;
  t.length !== 2 ? (e = ae, n = (s, c) => ae(t(s), c), r = (s, c) => t(s) - c) : (e = t === ae || t === aa ? t : oa, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && r(s[f - 1], c) > -r(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function oa() {
  return 0;
}
function sa(t) {
  return t === null ? NaN : +t;
}
const ca = Dr(ae), ua = ca.right;
Dr(sa).center;
const fa = Math.sqrt(50), la = Math.sqrt(10), ha = Math.sqrt(2);
function le(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= fa ? 10 : a >= la ? 5 : a >= ha ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? le(t, e, n * 2) : [s, c, u];
}
function da(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? le(e, t, n) : le(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Je(t, e, n) {
  return e = +e, t = +t, n = +n, le(t, e, n)[2];
}
function pa(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Je(e, t, n) : Je(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Vt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function ba(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var ga = { value: () => {
} };
function mn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new oe(n);
}
function oe(t) {
  this._ = t;
}
function _a(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
oe.prototype = mn.prototype = {
  constructor: oe,
  on: function(t, e) {
    var n = this._, r = _a(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = ya(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Gn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Gn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new oe(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function ya(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Gn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ga, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var We = "http://www.w3.org/1999/xhtml";
const Un = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: We,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xe(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Un.hasOwnProperty(e) ? { space: Un[e], local: t } : t;
}
function ma(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === We && e.documentElement.namespaceURI === We ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function va(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Lr(t) {
  var e = xe(t);
  return (e.local ? va : ma)(e);
}
function wa() {
}
function vn(t) {
  return t == null ? wa : function() {
    return this.querySelector(t);
  };
}
function xa(t) {
  typeof t != "function" && (t = vn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new I(r, this._parents);
}
function Ma(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function $a() {
  return [];
}
function qr(t) {
  return t == null ? $a : function() {
    return this.querySelectorAll(t);
  };
}
function Aa(t) {
  return function() {
    return Ma(t.apply(this, arguments));
  };
}
function Ta(t) {
  typeof t == "function" ? t = Aa(t) : t = qr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new I(r, i);
}
function Hr(t) {
  return function() {
    return this.matches(t);
  };
}
function Br(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Pa = Array.prototype.find;
function Sa(t) {
  return function() {
    return Pa.call(this.children, t);
  };
}
function za() {
  return this.firstElementChild;
}
function Ea(t) {
  return this.select(t == null ? za : Sa(typeof t == "function" ? t : Br(t)));
}
var Na = Array.prototype.filter;
function ka() {
  return Array.from(this.children);
}
function Ia(t) {
  return function() {
    return Na.call(this.children, t);
  };
}
function Oa(t) {
  return this.selectAll(t == null ? ka : Ia(typeof t == "function" ? t : Br(t)));
}
function Ca(t) {
  typeof t != "function" && (t = Hr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new I(r, this._parents);
}
function Xr(t) {
  return new Array(t.length);
}
function Ra() {
  return new I(this._enter || this._groups.map(Xr), this._parents);
}
function he(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
he.prototype = {
  constructor: he,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Fa(t) {
  return function() {
    return t;
  };
}
function Da(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new he(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function La(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, f = a.length, h = new Array(l), b;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (h[s] = b = o.call(c, c.__data__, s, e) + "", u.has(b) ? i[s] = c : u.set(b, c));
  for (s = 0; s < f; ++s)
    b = o.call(t, a[s], s, a) + "", (c = u.get(b)) ? (r[s] = c, c.__data__ = a[s], u.delete(b)) : n[s] = new he(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(h[s]) === c && (i[s] = c);
}
function qa(t) {
  return t.__data__;
}
function Ha(t, e) {
  if (!arguments.length) return Array.from(this, qa);
  var n = e ? La : Da, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Fa(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], f = i[u], h = f.length, b = Ba(t.call(l, l && l.__data__, u, r)), d = b.length, p = s[u] = new Array(d), x = o[u] = new Array(d), _ = c[u] = new Array(h);
    n(l, f, p, x, _, b, e);
    for (var $ = 0, T = 0, g, m; $ < d; ++$)
      if (g = p[$]) {
        for ($ >= T && (T = $ + 1); !(m = x[T]) && ++T < d; ) ;
        g._next = m || null;
      }
  }
  return o = new I(o, r), o._enter = s, o._exit = c, o;
}
function Ba(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xa() {
  return new I(this._exit || this._groups.map(Xr), this._parents);
}
function Ga(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Ua(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], f = u.length, h = s[c] = new Array(f), b, d = 0; d < f; ++d)
      (b = u[d] || l[d]) && (h[d] = b);
  for (; c < i; ++c)
    s[c] = n[c];
  return new I(s, this._parents);
}
function Ka() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ya(t) {
  t || (t = Va);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new I(i, this._parents).order();
}
function Va(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ja() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Wa() {
  return Array.from(this);
}
function Za() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Qa() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function ja() {
  return !this.node();
}
function to(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function eo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function no(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ro(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function io(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ao(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function oo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function so(t, e) {
  var n = xe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? no : eo : typeof e == "function" ? n.local ? oo : ao : n.local ? io : ro)(n, e));
}
function Gr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function co(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function uo(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function fo(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function lo(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? co : typeof e == "function" ? fo : uo)(t, e, n ?? "")) : $t(this.node(), t);
}
function $t(t, e) {
  return t.style.getPropertyValue(e) || Gr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ho(t) {
  return function() {
    delete this[t];
  };
}
function po(t, e) {
  return function() {
    this[t] = e;
  };
}
function bo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function go(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ho : typeof e == "function" ? bo : po)(t, e)) : this.node()[t];
}
function Ur(t) {
  return t.trim().split(/^|\s+/);
}
function wn(t) {
  return t.classList || new Kr(t);
}
function Kr(t) {
  this._node = t, this._names = Ur(t.getAttribute("class") || "");
}
Kr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Yr(t, e) {
  for (var n = wn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Vr(t, e) {
  for (var n = wn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function _o(t) {
  return function() {
    Yr(this, t);
  };
}
function yo(t) {
  return function() {
    Vr(this, t);
  };
}
function mo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Yr : Vr)(this, t);
  };
}
function vo(t, e) {
  var n = Ur(t + "");
  if (arguments.length < 2) {
    for (var r = wn(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? mo : e ? _o : yo)(n, e));
}
function wo() {
  this.textContent = "";
}
function xo(t) {
  return function() {
    this.textContent = t;
  };
}
function Mo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function $o(t) {
  return arguments.length ? this.each(t == null ? wo : (typeof t == "function" ? Mo : xo)(t)) : this.node().textContent;
}
function Ao() {
  this.innerHTML = "";
}
function To(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Po(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function So(t) {
  return arguments.length ? this.each(t == null ? Ao : (typeof t == "function" ? Po : To)(t)) : this.node().innerHTML;
}
function zo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Eo() {
  return this.each(zo);
}
function No() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ko() {
  return this.each(No);
}
function Io(t) {
  var e = typeof t == "function" ? t : Lr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Oo() {
  return null;
}
function Co(t, e) {
  var n = typeof t == "function" ? t : Lr(t), r = e == null ? Oo : typeof e == "function" ? e : vn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ro() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Fo() {
  return this.each(Ro);
}
function Do() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Lo() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function qo(t) {
  return this.select(t ? Lo : Do);
}
function Ho(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Bo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Xo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Go(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Uo(t, e, n) {
  return function() {
    var r = this.__on, i, a = Bo(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Ko(t, e, n) {
  var r = Xo(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? Uo : Go, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Jr(t, e, n) {
  var r = Gr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Yo(t, e) {
  return function() {
    return Jr(this, t, e);
  };
}
function Vo(t, e) {
  return function() {
    return Jr(this, t, e.apply(this, arguments));
  };
}
function Jo(t, e) {
  return this.each((typeof e == "function" ? Vo : Yo)(t, e));
}
function* Wo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Wr = [null];
function I(t, e) {
  this._groups = t, this._parents = e;
}
function Xt() {
  return new I([[document.documentElement]], Wr);
}
function Zo() {
  return this;
}
I.prototype = Xt.prototype = {
  constructor: I,
  select: xa,
  selectAll: Ta,
  selectChild: Ea,
  selectChildren: Oa,
  filter: Ca,
  data: Ha,
  enter: Ra,
  exit: Xa,
  join: Ga,
  merge: Ua,
  selection: Zo,
  order: Ka,
  sort: Ya,
  call: Ja,
  nodes: Wa,
  node: Za,
  size: Qa,
  empty: ja,
  each: to,
  attr: so,
  style: lo,
  property: go,
  classed: vo,
  text: $o,
  html: So,
  raise: Eo,
  lower: ko,
  append: Io,
  insert: Co,
  remove: Fo,
  clone: qo,
  datum: Ho,
  on: Ko,
  dispatch: Jo,
  [Symbol.iterator]: Wo
};
function P(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Wr);
}
function Qo(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Ze(t, e) {
  if (t = Qo(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const jo = { passive: !1 }, Rt = { capture: !0, passive: !1 };
function Xe(t) {
  t.stopImmediatePropagation();
}
function xt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ts(t) {
  var e = t.document.documentElement, n = P(t).on("dragstart.drag", xt, Rt);
  "onselectstart" in e ? n.on("selectstart.drag", xt, Rt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function es(t, e) {
  var n = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  e && (r.on("click.drag", xt, Rt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Jt = (t) => () => t;
function Qe(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Qe.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ns(t) {
  return !t.ctrlKey && !t.button;
}
function rs() {
  return this.parentNode;
}
function is(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function as() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function os() {
  var t = ns, e = rs, n = is, r = as, i = {}, a = mn("start", "drag", "end"), o = 0, s, c, u, l, f = 0;
  function h(g) {
    g.on("mousedown.drag", b).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, jo).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function b(g, m) {
    if (!(l || !t.call(this, g, m))) {
      var S = T(this, e.call(this, g, m), g, m, "mouse");
      S && (P(g.view).on("mousemove.drag", d, Rt).on("mouseup.drag", p, Rt), ts(g.view), Xe(g), u = !1, s = g.clientX, c = g.clientY, S("start", g));
    }
  }
  function d(g) {
    if (xt(g), !u) {
      var m = g.clientX - s, S = g.clientY - c;
      u = m * m + S * S > f;
    }
    i.mouse("drag", g);
  }
  function p(g) {
    P(g.view).on("mousemove.drag mouseup.drag", null), es(g.view, u), xt(g), i.mouse("end", g);
  }
  function x(g, m) {
    if (t.call(this, g, m)) {
      var S = g.changedTouches, z = e.call(this, g, m), E = S.length, H, Y;
      for (H = 0; H < E; ++H)
        (Y = T(this, z, g, m, S[H].identifier, S[H])) && (Xe(g), Y("start", g, S[H]));
    }
  }
  function _(g) {
    var m = g.changedTouches, S = m.length, z, E;
    for (z = 0; z < S; ++z)
      (E = i[m[z].identifier]) && (xt(g), E("drag", g, m[z]));
  }
  function $(g) {
    var m = g.changedTouches, S = m.length, z, E;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), z = 0; z < S; ++z)
      (E = i[m[z].identifier]) && (Xe(g), E("end", g, m[z]));
  }
  function T(g, m, S, z, E, H) {
    var Y = a.copy(), v = Ze(H || S, m), B, N, R;
    if ((R = n.call(g, new Qe("beforestart", {
      sourceEvent: S,
      target: h,
      identifier: E,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), z)) != null)
      return B = R.x - v[0] || 0, N = R.y - v[1] || 0, function Yt(it, ct, mt) {
        var C = v, Be;
        switch (it) {
          case "start":
            i[E] = Yt, Be = o++;
            break;
          case "end":
            delete i[E], --o;
          // falls through
          case "drag":
            v = Ze(mt || ct, m), Be = o;
            break;
        }
        Y.call(
          it,
          g,
          new Qe(it, {
            sourceEvent: ct,
            subject: R,
            target: h,
            identifier: E,
            active: Be,
            x: v[0] + B,
            y: v[1] + N,
            dx: v[0] - C[0],
            dy: v[1] - C[1],
            dispatch: Y
          }),
          z
        );
      };
  }
  return h.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Jt(!!g), h) : t;
  }, h.container = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Jt(g), h) : e;
  }, h.subject = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Jt(g), h) : n;
  }, h.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Jt(!!g), h) : r;
  }, h.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? h : g;
  }, h.clickDistance = function(g) {
    return arguments.length ? (f = (g = +g) * g, h) : Math.sqrt(f);
  }, h;
}
function xn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Zr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Gt() {
}
var Ft = 0.7, de = 1 / Ft, Mt = "\\s*([+-]?\\d+)\\s*", Dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", X = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ss = /^#([0-9a-f]{3,8})$/, cs = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), us = new RegExp(`^rgb\\(${X},${X},${X}\\)$`), fs = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Dt}\\)$`), ls = new RegExp(`^rgba\\(${X},${X},${X},${Dt}\\)$`), hs = new RegExp(`^hsl\\(${Dt},${X},${X}\\)$`), ds = new RegExp(`^hsla\\(${Dt},${X},${X},${Dt}\\)$`), Kn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
xn(Gt, ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yn,
  // Deprecated! Use color.formatHex.
  formatHex: Yn,
  formatHex8: ps,
  formatHsl: bs,
  formatRgb: Vn,
  toString: Vn
});
function Yn() {
  return this.rgb().formatHex();
}
function ps() {
  return this.rgb().formatHex8();
}
function bs() {
  return Qr(this).formatHsl();
}
function Vn() {
  return this.rgb().formatRgb();
}
function ht(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ss.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Jn(e) : n === 3 ? new k(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Wt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Wt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = cs.exec(t)) ? new k(e[1], e[2], e[3], 1) : (e = us.exec(t)) ? new k(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = fs.exec(t)) ? Wt(e[1], e[2], e[3], e[4]) : (e = ls.exec(t)) ? Wt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = hs.exec(t)) ? Qn(e[1], e[2] / 100, e[3] / 100, 1) : (e = ds.exec(t)) ? Qn(e[1], e[2] / 100, e[3] / 100, e[4]) : Kn.hasOwnProperty(t) ? Jn(Kn[t]) : t === "transparent" ? new k(NaN, NaN, NaN, 0) : null;
}
function Jn(t) {
  return new k(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Wt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new k(t, e, n, r);
}
function gs(t) {
  return t instanceof Gt || (t = ht(t)), t ? (t = t.rgb(), new k(t.r, t.g, t.b, t.opacity)) : new k();
}
function pe(t, e, n, r) {
  return arguments.length === 1 ? gs(t) : new k(t, e, n, r ?? 1);
}
function k(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
xn(k, pe, Zr(Gt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new k(lt(this.r), lt(this.g), lt(this.b), be(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wn,
  // Deprecated! Use color.formatHex.
  formatHex: Wn,
  formatHex8: _s,
  formatRgb: Zn,
  toString: Zn
}));
function Wn() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function _s() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zn() {
  const t = be(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${lt(this.r)}, ${lt(this.g)}, ${lt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function be(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function lt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = lt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Qn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new D(t, e, n, r);
}
function Qr(t) {
  if (t instanceof D) return new D(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gt || (t = ht(t)), !t) return new D();
  if (t instanceof D) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new D(o, s, c, t.opacity);
}
function ys(t, e, n, r) {
  return arguments.length === 1 ? Qr(t) : new D(t, e, n, r ?? 1);
}
function D(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
xn(D, ys, Zr(Gt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new k(
      Ge(t >= 240 ? t - 240 : t + 120, i, r),
      Ge(t, i, r),
      Ge(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new D(jn(this.h), Zt(this.s), Zt(this.l), be(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = be(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${jn(this.h)}, ${Zt(this.s) * 100}%, ${Zt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function jn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Zt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ge(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Mn = (t) => () => t;
function ms(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function vs(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ws(t) {
  return (t = +t) == 1 ? jr : function(e, n) {
    return n - e ? vs(e, n, t) : Mn(isNaN(e) ? n : e);
  };
}
function jr(t, e) {
  var n = e - t;
  return n ? ms(t, n) : Mn(isNaN(t) ? e : t);
}
const at = function t(e) {
  var n = ws(e);
  function r(i, a) {
    var o = n((i = pe(i)).r, (a = pe(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = jr(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function xs(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Ms(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function $s(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Me(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function As(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function F(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Ts(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Me(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var je = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ue = new RegExp(je.source, "g");
function Ps(t) {
  return function() {
    return t;
  };
}
function Ss(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ti(t, e) {
  var n = je.lastIndex = Ue.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = je.exec(t)) && (i = Ue.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: F(r, i) })), n = Ue.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ss(c[0].x) : Ps(e) : (e = c.length, function(u) {
    for (var l = 0, f; l < e; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function Me(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Mn(e) : (n === "number" ? F : n === "string" ? (r = ht(e)) ? (e = r, at) : ti : e instanceof ht ? at : e instanceof Date ? As : Ms(e) ? xs : Array.isArray(e) ? $s : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ts : F)(t, e);
}
function zs(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var tr = 180 / Math.PI, tn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ei(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * tr,
    skewX: Math.atan(c) * tr,
    scaleX: o,
    scaleY: s
  };
}
var Qt;
function Es(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? tn : ei(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ns(t) {
  return t == null || (Qt || (Qt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Qt.setAttribute("transform", t), !(t = Qt.transform.baseVal.consolidate())) ? tn : (t = t.matrix, ei(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ni(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, f, h, b, d) {
    if (u !== f || l !== h) {
      var p = b.push("translate(", null, e, null, n);
      d.push({ i: p - 4, x: F(u, f) }, { i: p - 2, x: F(l, h) });
    } else (f || h) && b.push("translate(" + f + e + h + n);
  }
  function o(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: F(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: F(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, b, d) {
    if (u !== f || l !== h) {
      var p = b.push(i(b) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: F(u, f) }, { i: p - 2, x: F(l, h) });
    } else (f !== 1 || h !== 1) && b.push(i(b) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, f, h), o(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(b) {
      for (var d = -1, p = h.length, x; ++d < p; ) f[(x = h[d]).i] = x.x(b);
      return f.join("");
    };
  };
}
var ks = ni(Es, "px, ", "px)", "deg)"), Is = ni(Ns, ", ", ")", ")");
function jt(t, e) {
  e === void 0 && (e = t, t = Me);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var At = 0, Et = 0, St = 0, ri = 1e3, ge, Nt, _e = 0, dt = 0, $e = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, ii = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ae() {
  return dt || (ii(Os), dt = Lt.now() + $e);
}
function Os() {
  dt = 0;
}
function qt() {
  this._call = this._time = this._next = null;
}
qt.prototype = ai.prototype = {
  constructor: qt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ae() : +n) + (e == null ? 0 : +e), !this._next && Nt !== this && (Nt ? Nt._next = this : ge = this, Nt = this), this._call = t, this._time = n, en();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, en());
  }
};
function ai(t, e, n) {
  var r = new qt();
  return r.restart(t, e, n), r;
}
function Cs() {
  Ae(), ++At;
  for (var t = ge, e; t; )
    (e = dt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --At;
}
function er() {
  dt = (_e = Lt.now()) + $e, At = Et = 0;
  try {
    Cs();
  } finally {
    At = 0, Fs(), dt = 0;
  }
}
function Rs() {
  var t = Lt.now(), e = t - _e;
  e > ri && ($e -= e, _e = t);
}
function Fs() {
  for (var t, e = ge, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ge = n);
  Nt = t, en(r);
}
function en(t) {
  if (!At) {
    Et && (Et = clearTimeout(Et));
    var e = t - dt;
    e > 24 ? (t < 1 / 0 && (Et = setTimeout(er, t - Lt.now() - $e)), St && (St = clearInterval(St))) : (St || (_e = Lt.now(), St = setInterval(Rs, ri)), At = 1, ii(er));
  }
}
function nr(t, e, n) {
  var r = new qt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Ds(t, e, n) {
  var r = new qt(), i = e;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Ae() : +s, r._restart(function c(u) {
      u += i, r._restart(c, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, e, n), r;
}
var Ls = mn("start", "end", "cancel", "interrupt"), qs = [], oi = 0, rr = 1, nn = 2, se = 3, ir = 4, rn = 5, ce = 6;
function Te(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  Hs(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ls,
    tween: qs,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: oi
  });
}
function $n(t, e) {
  var n = L(t, e);
  if (n.state > oi) throw new Error("too late; already scheduled");
  return n;
}
function K(t, e) {
  var n = L(t, e);
  if (n.state > se) throw new Error("too late; already running");
  return n;
}
function L(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Hs(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ai(a, 0, n.time);
  function a(u) {
    n.state = rr, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, f, h, b;
    if (n.state !== rr) return c();
    for (l in r)
      if (b = r[l], b.name === n.name) {
        if (b.state === se) return nr(o);
        b.state === ir ? (b.state = ce, b.timer.stop(), b.on.call("interrupt", t, t.__data__, b.index, b.group), delete r[l]) : +l < e && (b.state = ce, b.timer.stop(), b.on.call("cancel", t, t.__data__, b.index, b.group), delete r[l]);
      }
    if (nr(function() {
      n.state === se && (n.state = ir, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = nn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === nn) {
      for (n.state = se, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l)
        (b = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = b);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = rn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    n.state === rn && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = ce, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Bs(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > nn && r.state < rn, r.state = ce, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Xs(t) {
  return this.each(function() {
    Bs(this, t);
  });
}
function Gs(t, e) {
  var n, r;
  return function() {
    var i = K(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Us(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = K(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function Ks(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = L(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Gs : Us)(n, t, e));
}
function An(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return L(i, r).value[e];
  };
}
function si(t, e) {
  var n;
  return (typeof e == "number" ? F : e instanceof ht ? at : (n = ht(e)) ? (e = n, at) : ti)(t, e);
}
function Ys(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Js(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Ws(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Zs(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Qs(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function js(t, e) {
  var n = xe(t), r = n === "transform" ? Is : si;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Qs : Zs)(n, r, An(this, "attr." + t, e)) : e == null ? (n.local ? Vs : Ys)(n) : (n.local ? Ws : Js)(n, r, e));
}
function tc(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function ec(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function nc(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && ec(t, a)), n;
  }
  return i._value = e, i;
}
function rc(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && tc(t, a)), n;
  }
  return i._value = e, i;
}
function ic(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = xe(t);
  return this.tween(n, (r.local ? nc : rc)(r, e));
}
function ac(t, e) {
  return function() {
    $n(this, t).delay = +e.apply(this, arguments);
  };
}
function oc(t, e) {
  return e = +e, function() {
    $n(this, t).delay = e;
  };
}
function sc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ac : oc)(e, t)) : L(this.node(), e).delay;
}
function cc(t, e) {
  return function() {
    K(this, t).duration = +e.apply(this, arguments);
  };
}
function uc(t, e) {
  return e = +e, function() {
    K(this, t).duration = e;
  };
}
function fc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? cc : uc)(e, t)) : L(this.node(), e).duration;
}
function lc(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    K(this, t).ease = e;
  };
}
function hc(t) {
  var e = this._id;
  return arguments.length ? this.each(lc(e, t)) : L(this.node(), e).ease;
}
function dc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    K(this, t).ease = n;
  };
}
function pc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(dc(this._id, t));
}
function bc(t) {
  typeof t != "function" && (t = Hr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new j(r, this._parents, this._name, this._id);
}
function gc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, f = o[s] = new Array(l), h, b = 0; b < l; ++b)
      (h = c[b] || u[b]) && (f[b] = h);
  for (; s < r; ++s)
    o[s] = e[s];
  return new j(o, this._parents, this._name, this._id);
}
function _c(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function yc(t, e, n) {
  var r, i, a = _c(e) ? $n : K;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function mc(t, e) {
  var n = this._id;
  return arguments.length < 2 ? L(this.node(), n).on.on(t) : this.each(yc(n, t, e));
}
function vc(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function wc() {
  return this.on("end.remove", vc(this._id));
}
function xc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = vn(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, Te(u[h], e, n, h, u, L(l, n)));
  return new j(a, this._parents, e, n);
}
function Mc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = qr(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), b, d = L(l, n), p = 0, x = h.length; p < x; ++p)
          (b = h[p]) && Te(b, e, n, p, h, d);
        a.push(h), o.push(l);
      }
  return new j(a, o, e, n);
}
var $c = Xt.prototype.constructor;
function Ac() {
  return new $c(this._groups, this._parents);
}
function Tc(t, e) {
  var n, r, i;
  return function() {
    var a = $t(this, t), o = (this.style.removeProperty(t), $t(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function ci(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Pc(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = $t(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Sc(t, e, n) {
  var r, i, a;
  return function() {
    var o = $t(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), $t(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function zc(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = K(this, t), u = c.on, l = c.value[a] == null ? s || (s = ci(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function Ec(t, e, n) {
  var r = (t += "") == "transform" ? ks : si;
  return e == null ? this.styleTween(t, Tc(t, r)).on("end.style." + t, ci(t)) : typeof e == "function" ? this.styleTween(t, Sc(t, r, An(this, "style." + t, e))).each(zc(this._id, t)) : this.styleTween(t, Pc(t, r, e), n).on("end.style." + t, null);
}
function Nc(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function kc(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Nc(t, o, n)), r;
  }
  return a._value = e, a;
}
function Ic(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, kc(t, e, n ?? ""));
}
function Oc(t) {
  return function() {
    this.textContent = t;
  };
}
function Cc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Rc(t) {
  return this.tween("text", typeof t == "function" ? Cc(An(this, "text", t)) : Oc(t == null ? "" : t + ""));
}
function Fc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Dc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Fc(i)), e;
  }
  return r._value = t, r;
}
function Lc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Dc(t));
}
function qc() {
  for (var t = this._name, e = this._id, n = ui(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = L(c, e);
        Te(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new j(r, this._parents, t, n);
}
function Hc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = K(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var Bc = 0;
function j(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ui() {
  return ++Bc;
}
var V = Xt.prototype;
j.prototype = {
  constructor: j,
  select: xc,
  selectAll: Mc,
  selectChild: V.selectChild,
  selectChildren: V.selectChildren,
  filter: bc,
  merge: gc,
  selection: Ac,
  transition: qc,
  call: V.call,
  nodes: V.nodes,
  node: V.node,
  size: V.size,
  empty: V.empty,
  each: V.each,
  on: mc,
  attr: js,
  attrTween: ic,
  style: Ec,
  styleTween: Ic,
  text: Rc,
  textTween: Lc,
  remove: wc,
  tween: Ks,
  delay: sc,
  duration: fc,
  ease: hc,
  easeVarying: pc,
  end: Hc,
  [Symbol.iterator]: V[Symbol.iterator]
};
function Xc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Gc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Xc
};
function Uc(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Kc(t) {
  var e, n;
  t instanceof j ? (e = t._id, t = t._name) : (e = ui(), (n = Gc).time = Ae(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Te(c, t, e, u, o, n || Uc(c, e));
  return new j(r, this._parents, t, e);
}
Xt.prototype.interrupt = Xs;
Xt.prototype.transition = Kc;
const an = Math.PI, on = 2 * an, ut = 1e-6, Yc = on - ut;
function fi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Vc(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return fi;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class li {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? fi : Vc(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, f = s - n, h = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > ut) if (!(Math.abs(f * c - u * l) > ut) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let b = r - o, d = i - s, p = c * c + u * u, x = b * b + d * d, _ = Math.sqrt(p), $ = Math.sqrt(h), T = a * Math.tan((an - Math.acos((p + h - x) / (2 * _ * $))) / 2), g = T / $, m = T / _;
      Math.abs(g - 1) > ut && this._append`L${e + g * l},${n + g * f}`, this._append`A${a},${a},0,0,${+(f * b > l * d)},${this._x1 = e + m * c},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > ut || Math.abs(this._y1 - l) > ut) && this._append`L${u},${l}`, r && (h < 0 && (h = h % on + on), h > Yc ? this._append`A${r},${r},0,1,${f},${e - s},${n - c}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > ut && this._append`A${r},${r},0,${+(h >= an)},${f},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new li();
}
q.prototype = li.prototype;
function Jc(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ye(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Tt(t) {
  return t = ye(Math.abs(t)), t ? t[1] : NaN;
}
function Wc(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Zc(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Qc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function me(t) {
  if (!(e = Qc.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Tn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
me.prototype = Tn.prototype;
function Tn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Tn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function jc(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var hi;
function tu(t, e) {
  var n = ye(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (hi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + ye(t, Math.max(0, e + a - 1))[0];
}
function ar(t, e) {
  var n = ye(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const or = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Jc,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ar(t * 100, e),
  r: ar,
  s: tu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function sr(t) {
  return t;
}
var cr = Array.prototype.map, ur = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function eu(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? sr : Wc(cr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? sr : Zc(cr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = me(f);
    var h = f.fill, b = f.align, d = f.sign, p = f.symbol, x = f.zero, _ = f.width, $ = f.comma, T = f.precision, g = f.trim, m = f.type;
    m === "n" ? ($ = !0, m = "g") : or[m] || (T === void 0 && (T = 12), g = !0, m = "g"), (x || h === "0" && b === "=") && (x = !0, h = "0", b = "=");
    var S = p === "$" ? n : p === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", z = p === "$" ? r : /[%p]/.test(m) ? o : "", E = or[m], H = /[defgprs%]/.test(m);
    T = T === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function Y(v) {
      var B = S, N = z, R, Yt, it;
      if (m === "c")
        N = E(v) + N, v = "";
      else {
        v = +v;
        var ct = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? c : E(Math.abs(v), T), g && (v = jc(v)), ct && +v == 0 && d !== "+" && (ct = !1), B = (ct ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + B, N = (m === "s" ? ur[8 + hi / 3] : "") + N + (ct && d === "(" ? ")" : ""), H) {
          for (R = -1, Yt = v.length; ++R < Yt; )
            if (it = v.charCodeAt(R), 48 > it || it > 57) {
              N = (it === 46 ? i + v.slice(R + 1) : v.slice(R)) + N, v = v.slice(0, R);
              break;
            }
        }
      }
      $ && !x && (v = e(v, 1 / 0));
      var mt = B.length + v.length + N.length, C = mt < _ ? new Array(_ - mt + 1).join(h) : "";
      switch ($ && x && (v = e(C + v, C.length ? _ - N.length : 1 / 0), C = ""), b) {
        case "<":
          v = B + v + N + C;
          break;
        case "=":
          v = B + C + v + N;
          break;
        case "^":
          v = C.slice(0, mt = C.length >> 1) + B + v + N + C.slice(mt);
          break;
        default:
          v = C + B + v + N;
          break;
      }
      return a(v);
    }
    return Y.toString = function() {
      return f + "";
    }, Y;
  }
  function l(f, h) {
    var b = u((f = me(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Tt(h) / 3))) * 3, p = Math.pow(10, -d), x = ur[8 + d / 3];
    return function(_) {
      return b(p * _) + x;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var te, Pe, di;
nu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function nu(t) {
  return te = eu(t), Pe = te.format, di = te.formatPrefix, te;
}
function ru(t) {
  return Math.max(0, -Tt(Math.abs(t)));
}
function iu(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Tt(e) / 3))) * 3 - Tt(Math.abs(t)));
}
function au(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Tt(e) - Tt(t)) + 1;
}
const ou = Math.random, su = function t(e) {
  function n(r, i) {
    var a, o;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var s;
      if (a != null) s = a, a = null;
      else do
        a = e() * 2 - 1, s = e() * 2 - 1, o = a * a + s * s;
      while (!o || o > 1);
      return r + i * s * Math.sqrt(-2 * Math.log(o) / o);
    };
  }
  return n.source = t, n;
}(ou);
function cu(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function uu(t) {
  return function() {
    return t;
  };
}
function fu(t) {
  return +t;
}
var fr = [0, 1];
function vt(t) {
  return t;
}
function sn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : uu(isNaN(e) ? NaN : 0.5);
}
function lu(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function hu(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = sn(i, r), a = n(o, a)) : (r = sn(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function du(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = sn(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = ua(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function pu(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function bu() {
  var t = fr, e = fr, n = Me, r, i, a, o = vt, s, c, u;
  function l() {
    var h = Math.min(t.length, e.length);
    return o !== vt && (o = lu(t[0], t[h - 1])), s = h > 2 ? du : hu, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(t.map(r), e, n)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(e, t.map(r), F)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, fu), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), l()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = zs, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : vt, l()) : o !== vt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, l()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, b) {
    return r = h, i = b, l();
  };
}
function gu() {
  return bu()(vt, vt);
}
function _u(t, e, n, r) {
  var i = pa(t, e, n), a;
  switch (r = me(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = iu(i, o)) && (r.precision = a), di(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = au(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = ru(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Pe(r);
}
function yu(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return da(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return _u(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Je(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function G() {
  var t = gu();
  return t.copy = function() {
    return pu(t, G());
  }, cu.apply(t, arguments), yu(t);
}
var ee = pe(), mu = Math.PI / 3, vu = Math.PI * 2 / 3;
function wu(t) {
  var e;
  return t = (0.5 - t) * Math.PI, ee.r = 255 * (e = Math.sin(t)) * e, ee.g = 255 * (e = Math.sin(t + mu)) * e, ee.b = 255 * (e = Math.sin(t + vu)) * e, ee + "";
}
function kt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
kt.prototype = {
  constructor: kt,
  scale: function(t) {
    return t === 1 ? this : new kt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new kt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
kt.prototype;
var pi = typeof global == "object" && global && global.Object === Object && global, xu = typeof self == "object" && self && self.Object === Object && self, et = pi || xu || Function("return this")(), U = et.Symbol, bi = Object.prototype, Mu = bi.hasOwnProperty, $u = bi.toString, zt = U ? U.toStringTag : void 0;
function Au(t) {
  var e = Mu.call(t, zt), n = t[zt];
  try {
    t[zt] = void 0;
    var r = !0;
  } catch {
  }
  var i = $u.call(t);
  return r && (e ? t[zt] = n : delete t[zt]), i;
}
var Tu = Object.prototype, Pu = Tu.toString;
function Su(t) {
  return Pu.call(t);
}
var zu = "[object Null]", Eu = "[object Undefined]", lr = U ? U.toStringTag : void 0;
function gt(t) {
  return t == null ? t === void 0 ? Eu : zu : lr && lr in Object(t) ? Au(t) : Su(t);
}
function pt(t) {
  return t != null && typeof t == "object";
}
var Nu = "[object Symbol]";
function Se(t) {
  return typeof t == "symbol" || pt(t) && gt(t) == Nu;
}
function ze(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var O = Array.isArray, hr = U ? U.prototype : void 0, dr = hr ? hr.toString : void 0;
function gi(t) {
  if (typeof t == "string")
    return t;
  if (O(t))
    return ze(t, gi) + "";
  if (Se(t))
    return dr ? dr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var ku = /\s/;
function Iu(t) {
  for (var e = t.length; e-- && ku.test(t.charAt(e)); )
    ;
  return e;
}
var Ou = /^\s+/;
function Cu(t) {
  return t && t.slice(0, Iu(t) + 1).replace(Ou, "");
}
function tt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var pr = NaN, Ru = /^[-+]0x[0-9a-f]+$/i, Fu = /^0b[01]+$/i, Du = /^0o[0-7]+$/i, Lu = parseInt;
function qu(t) {
  if (typeof t == "number")
    return t;
  if (Se(t))
    return pr;
  if (tt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Cu(t);
  var n = Fu.test(t);
  return n || Du.test(t) ? Lu(t.slice(2), n ? 2 : 8) : Ru.test(t) ? pr : +t;
}
var Hu = 1 / 0, Bu = 17976931348623157e292;
function ue(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = qu(t), t === Hu || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Bu;
  }
  return t === t ? t : 0;
}
function _i(t) {
  var e = ue(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function yi(t) {
  return t;
}
var Xu = "[object AsyncFunction]", Gu = "[object Function]", Uu = "[object GeneratorFunction]", Ku = "[object Proxy]";
function mi(t) {
  if (!tt(t))
    return !1;
  var e = gt(t);
  return e == Gu || e == Uu || e == Xu || e == Ku;
}
var Ke = et["__core-js_shared__"], br = function() {
  var t = /[^.]+$/.exec(Ke && Ke.keys && Ke.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Yu(t) {
  return !!br && br in t;
}
var Vu = Function.prototype, Ju = Vu.toString;
function _t(t) {
  if (t != null) {
    try {
      return Ju.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Wu = /[\\^$.*+?()[\]{}|]/g, Zu = /^\[object .+?Constructor\]$/, Qu = Function.prototype, ju = Object.prototype, tf = Qu.toString, ef = ju.hasOwnProperty, nf = RegExp(
  "^" + tf.call(ef).replace(Wu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rf(t) {
  if (!tt(t) || Yu(t))
    return !1;
  var e = mi(t) ? nf : Zu;
  return e.test(_t(t));
}
function af(t, e) {
  return t == null ? void 0 : t[e];
}
function yt(t, e) {
  var n = af(t, e);
  return rf(n) ? n : void 0;
}
var cn = yt(et, "WeakMap");
function of(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var gr = function() {
  try {
    var t = yt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function sf(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var cf = 9007199254740991, uf = /^(?:0|[1-9]\d*)$/;
function Ee(t, e) {
  var n = typeof t;
  return e = e ?? cf, !!e && (n == "number" || n != "symbol" && uf.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function ff(t, e, n) {
  e == "__proto__" && gr ? gr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Ne(t, e) {
  return t === e || t !== t && e !== e;
}
var lf = Object.prototype, hf = lf.hasOwnProperty;
function df(t, e, n) {
  var r = t[e];
  (!(hf.call(t, e) && Ne(r, n)) || n === void 0 && !(e in t)) && ff(t, e, n);
}
var pf = 9007199254740991;
function Pn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pf;
}
function Ut(t) {
  return t != null && Pn(t.length) && !mi(t);
}
function bf(t, e, n) {
  if (!tt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Ut(n) && Ee(e, n.length) : r == "string" && e in n) ? Ne(n[e], t) : !1;
}
var gf = Object.prototype;
function vi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || gf;
  return t === n;
}
function _f(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var yf = "[object Arguments]";
function _r(t) {
  return pt(t) && gt(t) == yf;
}
var wi = Object.prototype, mf = wi.hasOwnProperty, vf = wi.propertyIsEnumerable, Sn = _r(/* @__PURE__ */ function() {
  return arguments;
}()) ? _r : function(t) {
  return pt(t) && mf.call(t, "callee") && !vf.call(t, "callee");
};
function wf() {
  return !1;
}
var xi = typeof exports == "object" && exports && !exports.nodeType && exports, yr = xi && typeof module == "object" && module && !module.nodeType && module, xf = yr && yr.exports === xi, mr = xf ? et.Buffer : void 0, Mf = mr ? mr.isBuffer : void 0, un = Mf || wf, $f = "[object Arguments]", Af = "[object Array]", Tf = "[object Boolean]", Pf = "[object Date]", Sf = "[object Error]", zf = "[object Function]", Ef = "[object Map]", Nf = "[object Number]", kf = "[object Object]", If = "[object RegExp]", Of = "[object Set]", Cf = "[object String]", Rf = "[object WeakMap]", Ff = "[object ArrayBuffer]", Df = "[object DataView]", Lf = "[object Float32Array]", qf = "[object Float64Array]", Hf = "[object Int8Array]", Bf = "[object Int16Array]", Xf = "[object Int32Array]", Gf = "[object Uint8Array]", Uf = "[object Uint8ClampedArray]", Kf = "[object Uint16Array]", Yf = "[object Uint32Array]", A = {};
A[Lf] = A[qf] = A[Hf] = A[Bf] = A[Xf] = A[Gf] = A[Uf] = A[Kf] = A[Yf] = !0;
A[$f] = A[Af] = A[Ff] = A[Tf] = A[Df] = A[Pf] = A[Sf] = A[zf] = A[Ef] = A[Nf] = A[kf] = A[If] = A[Of] = A[Cf] = A[Rf] = !1;
function Vf(t) {
  return pt(t) && Pn(t.length) && !!A[gt(t)];
}
function Jf(t) {
  return function(e) {
    return t(e);
  };
}
var Mi = typeof exports == "object" && exports && !exports.nodeType && exports, It = Mi && typeof module == "object" && module && !module.nodeType && module, Wf = It && It.exports === Mi, Ye = Wf && pi.process, vr = function() {
  try {
    var t = It && It.require && It.require("util").types;
    return t || Ye && Ye.binding && Ye.binding("util");
  } catch {
  }
}(), wr = vr && vr.isTypedArray, $i = wr ? Jf(wr) : Vf, Zf = Object.prototype, Qf = Zf.hasOwnProperty;
function Ai(t, e) {
  var n = O(t), r = !n && Sn(t), i = !n && !r && un(t), a = !n && !r && !i && $i(t), o = n || r || i || a, s = o ? _f(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || Qf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ee(u, c))) && s.push(u);
  return s;
}
function Ti(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var jf = Ti(Object.keys, Object), tl = Object.prototype, el = tl.hasOwnProperty;
function nl(t) {
  if (!vi(t))
    return jf(t);
  var e = [];
  for (var n in Object(t))
    el.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function ke(t) {
  return Ut(t) ? Ai(t) : nl(t);
}
function rl(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var il = Object.prototype, al = il.hasOwnProperty;
function ol(t) {
  if (!tt(t))
    return rl(t);
  var e = vi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !al.call(t, r)) || n.push(r);
  return n;
}
function sl(t) {
  return Ut(t) ? Ai(t, !0) : ol(t);
}
var cl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ul = /^\w*$/;
function zn(t, e) {
  if (O(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Se(t) ? !0 : ul.test(t) || !cl.test(t) || e != null && t in Object(e);
}
var Ht = yt(Object, "create");
function fl() {
  this.__data__ = Ht ? Ht(null) : {}, this.size = 0;
}
function ll(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var hl = "__lodash_hash_undefined__", dl = Object.prototype, pl = dl.hasOwnProperty;
function bl(t) {
  var e = this.__data__;
  if (Ht) {
    var n = e[t];
    return n === hl ? void 0 : n;
  }
  return pl.call(e, t) ? e[t] : void 0;
}
var gl = Object.prototype, _l = gl.hasOwnProperty;
function yl(t) {
  var e = this.__data__;
  return Ht ? e[t] !== void 0 : _l.call(e, t);
}
var ml = "__lodash_hash_undefined__";
function vl(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ht && e === void 0 ? ml : e, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = fl;
bt.prototype.delete = ll;
bt.prototype.get = bl;
bt.prototype.has = yl;
bt.prototype.set = vl;
function wl() {
  this.__data__ = [], this.size = 0;
}
function Ie(t, e) {
  for (var n = t.length; n--; )
    if (Ne(t[n][0], e))
      return n;
  return -1;
}
var xl = Array.prototype, Ml = xl.splice;
function $l(t) {
  var e = this.__data__, n = Ie(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Ml.call(e, n, 1), --this.size, !0;
}
function Al(t) {
  var e = this.__data__, n = Ie(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Tl(t) {
  return Ie(this.__data__, t) > -1;
}
function Pl(t, e) {
  var n = this.__data__, r = Ie(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function nt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = wl;
nt.prototype.delete = $l;
nt.prototype.get = Al;
nt.prototype.has = Tl;
nt.prototype.set = Pl;
var Bt = yt(et, "Map");
function Sl() {
  this.size = 0, this.__data__ = {
    hash: new bt(),
    map: new (Bt || nt)(),
    string: new bt()
  };
}
function zl(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Oe(t, e) {
  var n = t.__data__;
  return zl(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function El(t) {
  var e = Oe(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Nl(t) {
  return Oe(this, t).get(t);
}
function kl(t) {
  return Oe(this, t).has(t);
}
function Il(t, e) {
  var n = Oe(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function rt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Sl;
rt.prototype.delete = El;
rt.prototype.get = Nl;
rt.prototype.has = kl;
rt.prototype.set = Il;
var Ol = "Expected a function";
function En(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Ol);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (En.Cache || rt)(), n;
}
En.Cache = rt;
var Cl = 500;
function Rl(t) {
  var e = En(t, function(r) {
    return n.size === Cl && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Fl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dl = /\\(\\)?/g, Ll = Rl(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Fl, function(n, r, i, a) {
    e.push(i ? a.replace(Dl, "$1") : r || n);
  }), e;
});
function Ce(t) {
  return t == null ? "" : gi(t);
}
function Re(t, e) {
  return O(t) ? t : zn(t, e) ? [t] : Ll(Ce(t));
}
function Kt(t) {
  if (typeof t == "string" || Se(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Nn(t, e) {
  e = Re(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Kt(e[n++])];
  return n && n == r ? t : void 0;
}
function ql(t, e, n) {
  var r = t == null ? void 0 : Nn(t, e);
  return r === void 0 ? n : r;
}
function Fe(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var xr = U ? U.isConcatSpreadable : void 0;
function Hl(t) {
  return O(t) || Sn(t) || !!(xr && t && t[xr]);
}
function Pi(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = Hl), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Fe(i, s) : i[i.length] = s;
  }
  return i;
}
function Bl(t) {
  var e = t == null ? 0 : t.length;
  return e ? Pi(t) : [];
}
var Xl = Ti(Object.getPrototypeOf, Object);
function kn(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Gl(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, kn(t, e, n);
}
var Ul = "\\ud800-\\udfff", Kl = "\\u0300-\\u036f", Yl = "\\ufe20-\\ufe2f", Vl = "\\u20d0-\\u20ff", Jl = Kl + Yl + Vl, Wl = "\\ufe0e\\ufe0f", Zl = "\\u200d", Ql = RegExp("[" + Zl + Ul + Jl + Wl + "]");
function Si(t) {
  return Ql.test(t);
}
function jl(t) {
  return t.split("");
}
var zi = "\\ud800-\\udfff", th = "\\u0300-\\u036f", eh = "\\ufe20-\\ufe2f", nh = "\\u20d0-\\u20ff", rh = th + eh + nh, ih = "\\ufe0e\\ufe0f", ah = "[" + zi + "]", fn = "[" + rh + "]", ln = "\\ud83c[\\udffb-\\udfff]", oh = "(?:" + fn + "|" + ln + ")", Ei = "[^" + zi + "]", Ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ki = "[\\ud800-\\udbff][\\udc00-\\udfff]", sh = "\\u200d", Ii = oh + "?", Oi = "[" + ih + "]?", ch = "(?:" + sh + "(?:" + [Ei, Ni, ki].join("|") + ")" + Oi + Ii + ")*", uh = Oi + Ii + ch, fh = "(?:" + [Ei + fn + "?", fn, Ni, ki, ah].join("|") + ")", lh = RegExp(ln + "(?=" + ln + ")|" + fh + uh, "g");
function hh(t) {
  return t.match(lh) || [];
}
function dh(t) {
  return Si(t) ? hh(t) : jl(t);
}
function ph(t) {
  return function(e) {
    e = Ce(e);
    var n = Si(e) ? dh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Gl(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var bh = ph("toUpperCase");
function gh(t) {
  return bh(Ce(t).toLowerCase());
}
function _h() {
  this.__data__ = new nt(), this.size = 0;
}
function yh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function mh(t) {
  return this.__data__.get(t);
}
function vh(t) {
  return this.__data__.has(t);
}
var wh = 200;
function xh(t, e) {
  var n = this.__data__;
  if (n instanceof nt) {
    var r = n.__data__;
    if (!Bt || r.length < wh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new rt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Z(t) {
  var e = this.__data__ = new nt(t);
  this.size = e.size;
}
Z.prototype.clear = _h;
Z.prototype.delete = yh;
Z.prototype.get = mh;
Z.prototype.has = vh;
Z.prototype.set = xh;
function Mh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function Ci() {
  return [];
}
var $h = Object.prototype, Ah = $h.propertyIsEnumerable, Mr = Object.getOwnPropertySymbols, Ri = Mr ? function(t) {
  return t == null ? [] : (t = Object(t), Mh(Mr(t), function(e) {
    return Ah.call(t, e);
  }));
} : Ci, Th = Object.getOwnPropertySymbols, Ph = Th ? function(t) {
  for (var e = []; t; )
    Fe(e, Ri(t)), t = Xl(t);
  return e;
} : Ci;
function Fi(t, e, n) {
  var r = e(t);
  return O(t) ? r : Fe(r, n(t));
}
function $r(t) {
  return Fi(t, ke, Ri);
}
function Sh(t) {
  return Fi(t, sl, Ph);
}
var hn = yt(et, "DataView"), dn = yt(et, "Promise"), pn = yt(et, "Set"), Ar = "[object Map]", zh = "[object Object]", Tr = "[object Promise]", Pr = "[object Set]", Sr = "[object WeakMap]", zr = "[object DataView]", Eh = _t(hn), Nh = _t(Bt), kh = _t(dn), Ih = _t(pn), Oh = _t(cn), J = gt;
(hn && J(new hn(new ArrayBuffer(1))) != zr || Bt && J(new Bt()) != Ar || dn && J(dn.resolve()) != Tr || pn && J(new pn()) != Pr || cn && J(new cn()) != Sr) && (J = function(t) {
  var e = gt(t), n = e == zh ? t.constructor : void 0, r = n ? _t(n) : "";
  if (r)
    switch (r) {
      case Eh:
        return zr;
      case Nh:
        return Ar;
      case kh:
        return Tr;
      case Ih:
        return Pr;
      case Oh:
        return Sr;
    }
  return e;
});
var Er = et.Uint8Array;
function Ch() {
  var t = arguments.length;
  if (!t)
    return [];
  for (var e = Array(t - 1), n = arguments[0], r = t; r--; )
    e[r - 1] = arguments[r];
  return Fe(O(n) ? of(n) : [n], Pi(e));
}
var Rh = "__lodash_hash_undefined__";
function Fh(t) {
  return this.__data__.set(t, Rh), this;
}
function Dh(t) {
  return this.__data__.has(t);
}
function ve(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new rt(); ++e < n; )
    this.add(t[e]);
}
ve.prototype.add = ve.prototype.push = Fh;
ve.prototype.has = Dh;
function Lh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function qh(t, e) {
  return t.has(e);
}
var Hh = 1, Bh = 2;
function Di(t, e, n, r, i, a) {
  var o = n & Hh, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var f = -1, h = !0, b = n & Bh ? new ve() : void 0;
  for (a.set(t, e), a.set(e, t); ++f < s; ) {
    var d = t[f], p = e[f];
    if (r)
      var x = o ? r(p, d, f, e, t, a) : r(d, p, f, t, e, a);
    if (x !== void 0) {
      if (x)
        continue;
      h = !1;
      break;
    }
    if (b) {
      if (!Lh(e, function(_, $) {
        if (!qh(b, $) && (d === _ || i(d, _, n, r, a)))
          return b.push($);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === p || i(d, p, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), h;
}
function Li(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Xh(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Gh = 1, Uh = 2, Kh = "[object Boolean]", Yh = "[object Date]", Vh = "[object Error]", Jh = "[object Map]", Wh = "[object Number]", Zh = "[object RegExp]", Qh = "[object Set]", jh = "[object String]", td = "[object Symbol]", ed = "[object ArrayBuffer]", nd = "[object DataView]", Nr = U ? U.prototype : void 0, Ve = Nr ? Nr.valueOf : void 0;
function rd(t, e, n, r, i, a, o) {
  switch (n) {
    case nd:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case ed:
      return !(t.byteLength != e.byteLength || !a(new Er(t), new Er(e)));
    case Kh:
    case Yh:
    case Wh:
      return Ne(+t, +e);
    case Vh:
      return t.name == e.name && t.message == e.message;
    case Zh:
    case jh:
      return t == e + "";
    case Jh:
      var s = Li;
    case Qh:
      var c = r & Gh;
      if (s || (s = Xh), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= Uh, o.set(t, e);
      var l = Di(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case td:
      if (Ve)
        return Ve.call(t) == Ve.call(e);
  }
  return !1;
}
var id = 1, ad = Object.prototype, od = ad.hasOwnProperty;
function sd(t, e, n, r, i, a) {
  var o = n & id, s = $r(t), c = s.length, u = $r(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in e : od.call(e, h)))
      return !1;
  }
  var b = a.get(t), d = a.get(e);
  if (b && d)
    return b == e && d == t;
  var p = !0;
  a.set(t, e), a.set(e, t);
  for (var x = o; ++f < c; ) {
    h = s[f];
    var _ = t[h], $ = e[h];
    if (r)
      var T = o ? r($, _, h, e, t, a) : r(_, $, h, t, e, a);
    if (!(T === void 0 ? _ === $ || i(_, $, n, r, a) : T)) {
      p = !1;
      break;
    }
    x || (x = h == "constructor");
  }
  if (p && !x) {
    var g = t.constructor, m = e.constructor;
    g != m && "constructor" in t && "constructor" in e && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (p = !1);
  }
  return a.delete(t), a.delete(e), p;
}
var cd = 1, kr = "[object Arguments]", Ir = "[object Array]", ne = "[object Object]", ud = Object.prototype, Or = ud.hasOwnProperty;
function fd(t, e, n, r, i, a) {
  var o = O(t), s = O(e), c = o ? Ir : J(t), u = s ? Ir : J(e);
  c = c == kr ? ne : c, u = u == kr ? ne : u;
  var l = c == ne, f = u == ne, h = c == u;
  if (h && un(t)) {
    if (!un(e))
      return !1;
    o = !0, l = !1;
  }
  if (h && !l)
    return a || (a = new Z()), o || $i(t) ? Di(t, e, n, r, i, a) : rd(t, e, c, n, r, i, a);
  if (!(n & cd)) {
    var b = l && Or.call(t, "__wrapped__"), d = f && Or.call(e, "__wrapped__");
    if (b || d) {
      var p = b ? t.value() : t, x = d ? e.value() : e;
      return a || (a = new Z()), i(p, x, n, r, a);
    }
  }
  return h ? (a || (a = new Z()), sd(t, e, n, r, i, a)) : !1;
}
function In(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !pt(t) && !pt(e) ? t !== t && e !== e : fd(t, e, n, r, In, i);
}
var ld = 1, hd = 2;
function dd(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new Z(), f;
      if (!(f === void 0 ? In(u, c, ld | hd, r, l) : f))
        return !1;
    }
  }
  return !0;
}
function qi(t) {
  return t === t && !tt(t);
}
function pd(t) {
  for (var e = ke(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, qi(i)];
  }
  return e;
}
function Hi(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function bd(t) {
  var e = pd(t);
  return e.length == 1 && e[0][2] ? Hi(e[0][0], e[0][1]) : function(n) {
    return n === t || dd(n, t, e);
  };
}
function gd(t, e) {
  return t != null && e in Object(t);
}
function Bi(t, e, n) {
  e = Re(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Kt(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Pn(i) && Ee(o, i) && (O(t) || Sn(t)));
}
function _d(t, e) {
  return t != null && Bi(t, e, gd);
}
var yd = 1, md = 2;
function vd(t, e) {
  return zn(t) && qi(e) ? Hi(Kt(t), e) : function(n) {
    var r = ql(n, t);
    return r === void 0 && r === e ? _d(n, t) : In(e, r, yd | md);
  };
}
function wd(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function xd(t) {
  return function(e) {
    return Nn(e, t);
  };
}
function Md(t) {
  return zn(t) ? wd(Kt(t)) : xd(t);
}
function On(t) {
  return typeof t == "function" ? t : t == null ? yi : typeof t == "object" ? O(t) ? vd(t[0], t[1]) : bd(t) : Md(t);
}
function $d(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var Ad = $d();
function Td(t, e) {
  return t && Ad(t, e, ke);
}
function Pd(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Ut(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Xi = Pd(Td);
function Sd(t) {
  return typeof t == "function" ? t : yi;
}
function Q(t, e) {
  var n = O(t) ? sf : Xi;
  return n(t, Sd(e));
}
function zd(t, e) {
  return ze(e, function(n) {
    return [n, t[n]];
  });
}
function Ed(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Nd = "[object Map]", kd = "[object Set]";
function Id(t) {
  return function(e) {
    var n = J(e);
    return n == Nd ? Li(e) : n == kd ? Ed(e) : zd(e, t(e));
  };
}
var Gi = Id(ke);
function Od(t, e) {
  var n = -1, r = Ut(t) ? Array(t.length) : [];
  return Xi(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function st(t, e) {
  var n = O(t) ? ze : Od;
  return n(t, On(e));
}
var Cd = Object.prototype, Rd = Cd.hasOwnProperty;
function Fd(t, e) {
  return t != null && Rd.call(t, e);
}
function Ui(t, e) {
  return t != null && Bi(t, e, Fd);
}
var Dd = "[object Boolean]";
function Ld(t) {
  return t === !0 || t === !1 || pt(t) && gt(t) == Dd;
}
function qd(t, e) {
  for (var n, r = -1, i = t.length; ++r < i; ) {
    var a = e(t[r]);
    a !== void 0 && (n = n === void 0 ? a : n + a);
  }
  return n;
}
var Hd = NaN;
function Bd(t, e) {
  var n = t == null ? 0 : t.length;
  return n ? qd(t, e) / n : Hd;
}
function Cr(t, e) {
  return Bd(t, On(e));
}
function Xd(t, e, n, r) {
  if (!tt(t))
    return t;
  e = Re(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Kt(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = tt(l) ? l : Ee(e[i + 1]) ? [] : {});
    }
    df(s, c, u), s = s[c];
  }
  return t;
}
function Gd(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = Nn(t, o);
    n(s, o) && Xd(a, Re(o, t), s);
  }
  return a;
}
function Cn(t, e) {
  if (t == null)
    return {};
  var n = ze(Sh(t), function(r) {
    return [r];
  });
  return e = On(e), Gd(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Ud = Math.ceil, Kd = Math.max;
function Yd(t, e, n, r) {
  for (var i = -1, a = Kd(Ud((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function Vd(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && bf(e, n, r) && (n = r = void 0), e = ue(e), n === void 0 ? (n = e, e = 0) : n = ue(n), r = r === void 0 ? e < n ? 1 : -1 : ue(r), Yd(e, n, r);
  };
}
var Ot = Vd();
function Jd() {
  var t = arguments, e = Ce(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function Wd(t, e, n) {
  return t && t.length ? (e = e === void 0 ? 1 : _i(e), kn(t, 0, e < 0 ? 0 : e)) : [];
}
function Zd(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : _i(e), e = r - e, kn(t, e < 0 ? 0 : e, r)) : [];
}
const Qd = (t, e, n = 12, r = 12) => {
  const i = G().domain([0, n]).range([0, t]), a = G().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Ot((n + 1) * (r + 1)).map(function(c) {
        return { m: c % (n + 1), n: Math.floor(c / (n + 1)), x: i(c % (n + 1)), y: a(Math.floor(c / (n + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const l = Bl(st(u, function(f) {
        return st(
          c,
          function(h) {
            return { x: i(h), y: a(f) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, jd = "_widget_18g36_1", t0 = "_label_18g36_19", e0 = "_lit_18g36_24", n0 = "_button_18g36_29", r0 = "_symbol_18g36_29", i0 = "_radio_18g36_29", a0 = "_radiobutton_18g36_29", o0 = "_selected_18g36_35", s0 = "_toggle_18g36_35", c0 = "_slider_18g36_44", u0 = "_track_18g36_44", f0 = "_track_overlay_18g36_48", l0 = "_handle_18g36_55", y = {
  widget: jd,
  label: t0,
  lit: e0,
  button: n0,
  symbol: r0,
  radio: i0,
  radiobutton: a0,
  selected: o0,
  toggle: s0,
  slider: c0,
  track: u0,
  track_overlay: f0,
  handle: l0
}, De = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Rn = (t, e, n) => {
  var r, i, a, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, h0 = (t = 1) => {
  const e = q();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, d0 = (t = 1) => {
  const e = q(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, p0 = (t = 1) => {
  const e = q();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, b0 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = q();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, g0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, _0 = (t = 1) => {
  const e = q(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, y0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, m0 = (t = 1) => {
  var e = q(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, v0 = (t = 1) => {
  const e = q(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, bn = (t) => {
  switch (t) {
    case "play":
      return h0;
    case "forward":
      return d0;
    case "back":
      return p0;
    case "pause":
      return b0;
    case "reload":
      return g0;
    case "capture":
      return _0;
    case "rewind":
      return y0;
    case "stop":
      return m0;
    case "push":
      return v0;
  }
}, Pt = () => {
  const t = "button";
  var e = De(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(d) {
  }, l = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % l.length, u(), P(this.parentNode).select("." + y.symbol).attr("d", bn(l[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % l.length, u(), d.select("#button_" + e).select("." + y.symbol).attr("d", bn(l[f])(r * n));
    }
  };
}, Ki = () => {
  const t = "slider", e = Pe(".3f");
  var n = De(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, l = function(_) {
  }, f = function(_) {
  }, h = [0, 1], b = 0, d = null, p = G().domain(h).range([0, r]).clamp(!0);
  const x = function(_, $, T = h) {
    const g = _.select("#slider_" + n);
    p.domain(T), b = $, g.selectAll("." + y.handle).transition().attr("cx", p($)), o && g.select("." + y.label).text(d + " = " + e(b)), l(), f();
  };
  return {
    type: t,
    scale: p,
    id: function(_) {
      return typeof _ > "u" ? n : (n = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? c : (c = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return l = _, this;
      l(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? b : (b = _, this);
    },
    reset: x,
    click: x
  };
}, w0 = () => {
  const t = "toggle";
  var e = De(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(f) {
  }, c = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    click: function() {
      c = !c;
      const f = P(this.parentNode);
      f.select("." + y.handle).transition().attr("cx", c ? 2 * n : 0), f.classed(y.selected, c), s();
    },
    reset: function(f, h) {
      c = h;
      const b = f.select("#toggle_" + e);
      b.selectAll("." + y.handle).transition().attr("cx", c ? 2 * n : 0), b.classed(y.selected, c), s();
    }
  };
}, x0 = () => {
  const t = "radio";
  var e = De(), n = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, c = "right", u = null, l = function(p) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    choices: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function(p, x) {
      h = x, P(this.parentNode).selectAll("." + y.symbol).classed(y.selected, (_) => _ == h), l();
    },
    reset: function(p, x) {
      h = x, p.select("#radio_" + e).selectAll("." + y.symbol).classed(y.selected, (_) => _ == h), l();
    }
  };
}, M0 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = P(a).attr("class", y.widget + " " + y.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), o.append("path").attr("d", bn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const c = Rn(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Yi = (t, e) => {
  const n = q();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, $0 = (t, e) => {
  const n = Pe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(c).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Yi(t.size(), t.girth())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", y.track_overlay).on("click", function(d) {
    const p = Ze(d, this)[0];
    t.value(o.invert(p)), t.update(), t.update_end(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + n(t.value()));
  }).call(
    os().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var l, f, h, b = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Vt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Vt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Vt([t.girth() / 2, t.knob()]) + 7 : -Vt([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", b = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", y.label).style("text-anchor", h).style("alignment-baseline", b).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + f + ")"), c;
}, A0 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(o).attr("class", y.widget + " " + y.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (s.append("path").attr("d", Yi(2 * t.size(), 2 * t.size())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Rn(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, T0 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ba(o), c = G().domain([0, o - 1]).range([0, t.size()]), u = G().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = P(l).attr("class", y.widget + " " + y.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(s).enter().append("g").attr("class", y.radiobutton).attr("id", (x) => "b" + x).attr("transform", (x) => t.orientation() == "vertical" ? "translate(0," + u(x) + ")" : "translate(" + c(x) + ",0)");
  var b, d;
  t.shape() == "rect" ? (b = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (b = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), b.attr("class", y.background).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), d.attr("class", y.symbol), d.filter((x) => x == t.value()).classed(y.selected, !0), h.on("click", t.click);
  const p = Rn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", y.label).text(function(x, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), l;
}, re = (t, e) => {
  switch (t.type) {
    case "button":
      return M0(t);
    case "slider":
      return $0(t);
    case "radio":
      return T0(t);
    case "toggle":
      return A0(t);
  }
}, P0 = (t, e) => {
  const n = Qd(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = P("#" + t).classed(e.id + " " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height);
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && a.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && a.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: n };
}, w = {
  widgets: {
    slider_size: 360,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 4.5 },
    slider_girth: 10,
    slider_knob: 14,
    adv_label: "Adv. settings",
    adv_slider_size: 200,
    adv_slider_gap: 1.25,
    adv_slider_anchor: { x: 1, y: 10 },
    toggle_anchor: { x: 2, y: 7.5 },
    toggle_label_pos: "bottom",
    toggle_gap: 3.5,
    playbutton_size: 100,
    playbutton_anchor: { x: 2.5, y: 2 },
    backbutton_anchor: { x: 8.5, y: 2 },
    resetbutton_anchor: { x: 6.5, y: 2 },
    perturbbutton_anchor: { x: 10.5, y: 2 },
    perturbbutton_label: "perturb",
    perturbbutton_labelposition: "bottom",
    button_size: 60,
    syncbutton_anchor: { x: 11, y: 4.5 },
    syncbutton_size: 30,
    likebutton_anchor: { x: 11, y: 6 },
    likebutton_size: 30,
    radio_anchor: { x: 7.5, y: 7 },
    radio_size: 180,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10,
    colormap: "vik"
  }
}, M = {
  dt: 0.1,
  N: 600,
  agentsize: 5,
  L: 1.3,
  omega: 1,
  synchronization_strength: {
    range: [-1, 1],
    default: 0.51
  },
  like_attracts_like_strength: {
    range: [-1, 1],
    default: 1
  },
  wiggle: {
    range: [0, 0.05],
    default: 0
  },
  frequency_variation: {
    range: [0, 1],
    default: 0.4439
  },
  presets: {
    choices: [
      "Makes Me Dizzy",
      "Fractions",
      "Rainbow Ring",
      "Dancing Circus",
      "Schizo Wobble",
      "Solar Convection"
    ],
    default: 0
  },
  freeze_phase: {
    default: !1
  },
  advanced_settings: {
    default: !1
  }
}, S0 = {
  "Rainbow Ring": { J: 0.5, K: 0, noise: 0, varomega: 0, adv: !1 },
  "Dancing Circus": { J: 0.93, K: -0.88, noise: 0, varomega: 0, adv: !1 },
  "Schizo Wobble": { J: 1, K: 0.51, noise: 0, varomega: 0.8, adv: !0 },
  "Solar Convection": { J: 0.1, K: 1, noise: 0, varomega: 0.8, adv: !0 },
  "Makes Me Dizzy": { J: 1, K: 0.51, noise: 0, varomega: 0.4439, adv: !0 },
  Fractions: { J: 1, K: -0.12, noise: 0, varomega: 0, adv: !1 }
}, Fn = (t) => {
  const e = M.presets.widget.value(), n = M.presets.choices, r = S0[n[e]];
  M.synchronization_strength.widget.reset(t, r.K), M.like_attracts_like_strength.widget.reset(t, r.J), M.wiggle.widget.reset(t, r.noise), M.frequency_variation.widget.reset(t, r.varomega);
}, Dn = (t) => st(Gi(t), (e) => {
  e[1].id = e[0], e[1].label = Jd(gh(e[0]), /_/g, " ");
}), Ln = (t) => st(Gi(t), (e) => e[1]), Le = (t, e) => Q(t, (n, r) => n.widget = e[r]), z0 = (t) => Cn(t, (e) => Ui(e, "range")), E0 = (t) => Cn(t, (e) => Ld(e.default)), N0 = (t) => Cn(t, (e) => Ui(e, "choices"));
G().domain([0, 360]).range([0, 2 * Math.PI]);
G().range([0, 360]).domain([0, 2 * Math.PI]);
const k0 = (t, e) => {
  const n = t.x - e.x, r = t.y - e.y;
  return Math.sqrt(n * n + r * r);
}, qn = z0(M), Vi = E0(M), Ji = N0(M);
Dn(qn);
Dn(Vi);
Dn(Ji);
const Wi = Ln(qn), Zi = Wd(Wi, 2), Qi = Zd(Wi, 2), ji = Ln(Vi), ta = Ln(Ji), fe = st(
  Zi,
  (t) => Ki().id(t.id).label(t.label).range(t.range).value(t.default).size(w.widgets.slider_size).girth(w.widgets.slider_girth).knob(w.widgets.slider_knob)
), wt = st(
  Qi,
  (t) => Ki().id(t.id).label(t.label).range(t.range).value(t.default).size(w.widgets.adv_slider_size)
), Ct = st(
  ji,
  (t) => w0().id(t.id).label(t.label).value(t.default)
);
Ct[1].label(w.widgets.adv_label);
const gn = st(
  ta,
  (t) => x0().choices(t.choices).id(t.id).value(t.default).orientation(w.widgets.radio_orientation).labelposition(w.widgets.radio_label_position)
);
Le(ji, Ct);
Le(Zi, fe);
Le(Qi, wt);
Le(ta, gn);
const ot = Pt().actions(["play", "pause"]), qe = Pt().actions(["back"]), He = Pt().actions(["rewind"]), Hn = Pt().actions(["push"]), Bn = Pt().actions(["rewind"]), Xn = Pt().actions(["rewind"]), I0 = [ot, qe, He, Hn, Bn, Xn], O0 = (t, e) => {
  const n = e.position(w.widgets.slider_anchor.x, Ot(fe.length).map((s) => w.widgets.slider_anchor.y + w.widgets.slider_gap * s)), r = e.position(w.widgets.adv_slider_anchor.x, Ot(wt.length).map((s) => w.widgets.adv_slider_anchor.y + w.widgets.adv_slider_gap * s)), i = e.position(Ot(Ct.length).map((s) => w.widgets.toggle_anchor.x + w.widgets.toggle_gap * s), w.widgets.toggle_anchor.y), a = e.position(w.widgets.radio_anchor.x, w.widgets.radio_anchor.y);
  fe.forEach((s, c) => s.position(n[c])), wt.forEach((s, c) => s.position(r[c])), Ct.forEach((s, c) => s.position(i[c]).labelposition(w.widgets.toggle_label_pos)), gn[0].position(a).size(w.widgets.radio_size).shape(w.widgets.radio_shape), ot.position(e.position(w.widgets.playbutton_anchor.x, w.widgets.playbutton_anchor.y)).size(w.widgets.playbutton_size), He.position(e.position(w.widgets.backbutton_anchor.x, w.widgets.backbutton_anchor.y)).size(w.widgets.button_size), qe.position(e.position(w.widgets.resetbutton_anchor.x, w.widgets.resetbutton_anchor.y)).size(w.widgets.button_size), Hn.position(e.position(w.widgets.perturbbutton_anchor.x, w.widgets.perturbbutton_anchor.y)).size(w.widgets.button_size).label(w.widgets.perturbbutton_label).labelposition(w.widgets.perturbbutton_labelposition), Bn.position(e.position(w.widgets.syncbutton_anchor.x, w.widgets.syncbutton_anchor.y)).size(w.widgets.syncbutton_size), Xn.position(e.position(w.widgets.likebutton_anchor.x, w.widgets.likebutton_anchor.y)).size(w.widgets.likebutton_size), t.selectAll(null).data(Ch(fe, wt)).enter().append(re), t.selectAll(null).data(Ct).enter().append(re), t.selectAll(null).data(I0).enter().append(re), t.selectAll(null).data(gn).enter().append(re), Q(wt, (s) => {
    t.select("#slider_" + s.id()).style("opacity", M.advanced_settings.widget.value() ? 1 : 0), t.select("#slider_" + s.id()).selectAll("*").style("pointer-events", M.advanced_settings.widget.value() ? null : "none");
  });
  const o = e.position(5.5, [6, 4.5]);
  t.selectAll(null).data([0, 1]).enter().append("circle").attr("r", 3).attr("cx", (s) => o[s].x).attr("cy", (s) => o[s].y), Fn(t);
}, C0 = (t) => {
  Q(qn, (e) => e.widget.reset(t, e.default)), Fn(t);
};
M.L;
const R0 = M.dt, F0 = su(0, 1), Rr = Math.sqrt(R0);
var W = [];
const D0 = () => {
  M.timer = {}, M.tick = 0, W = Ot(M.N).map((n) => {
    let r = 2 * Math.PI * Math.random();
    return {
      index: n,
      x: 2 * M.L * (Math.random() - 0.5),
      y: 2 * M.L * (Math.random() - 0.5),
      vx: Math.cos(r),
      vy: Math.sin(r),
      dx: 0,
      dy: 0,
      omega: M.omega,
      domega: F0(),
      theta: Math.random() * 2 * Math.PI,
      dtheta: 0
    };
  });
  const t = Cr(W, (n) => n.vx), e = Cr(W, (n) => n.vy);
  Q(W, (n) => {
    n.vx -= t, n.vy -= e;
  });
}, L0 = () => {
  M.tick++;
  const t = M.freeze_phase.widget.value() ? 0 : 1, e = M.frequency_variation.widget.value(), n = M.like_attracts_like_strength.widget.value(), r = M.synchronization_strength.widget.value(), i = M.wiggle.widget.value();
  Q(W, (a) => {
    a.dtheta = a.omega * t + e * a.domega, Q(W, (o) => {
      if (a.index != o.index) {
        let s = k0(a, o), c = (1 + n * Math.cos(o.theta - a.theta) / s - 1 / (s * s)) / M.N;
        a.dx += (o.x - a.x) * c, a.dy += (o.y - a.y) * c, a.dtheta += r / M.N * Math.sin(o.theta - a.theta) / s;
      }
    }), a.dx *= M.dt, a.dy *= M.dt, a.dtheta *= M.dt;
  }), Q(W, (a) => {
    a.x += a.dx + Rr * i * (Math.random() - 0.5), a.y += a.dy + Rr * i * (Math.random() - 0.5), a.theta += a.dtheta;
  });
}, q0 = () => {
  Q(W, (t) => {
    t.theta += 0.25 * Math.PI * 2 * (Math.random() - 0.5) % (2 * Math.PI);
    let e = 2 * Math.PI * Math.random();
    t.x += 0.01 * Math.cos(e), t.y += 0.01 * Math.sin(e);
  });
}, ie = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, H0 = {
  roma: jt(at, ie.romaO),
  vik: jt(at, ie.vikO),
  broc: jt(at, ie.brocO),
  bam: jt(at, ie.bamO),
  sinebow: wu
}, we = M.L, _n = G().domain([-we, we]), yn = G().domain([-we, we]), ea = H0[w.simulation.colormap], B0 = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  _n.range([0, n]), yn.range([0, r]), t.selectAll("#origin").remove(), origin = t.append("g").attr("id", "origin"), origin.selectAll("#agent").data(W).enter().append("circle").attr("id", "agent").attr("r", M.agentsize).attr("cx", (i) => _n(i.x)).attr("cy", (i) => yn(i.y)).style("fill", (i) => {
    let a = i.theta % (2 * Math.PI);
    return a < 0 && (a += 2 * Math.PI), ea(a / (2 * Math.PI));
  });
}, na = (t, e) => {
  t.select("#origin").selectAll("#agent").attr("cx", (n) => _n(n.x)).attr("cy", (n) => yn(n.y)).style("fill", (n) => {
    let r = n.theta % (2 * Math.PI);
    return r < 0 && (r += 2 * Math.PI), ea(r / (2 * Math.PI));
  });
}, X0 = na;
function G0(t, e) {
  L0(), na(t);
}
function ra(t, e) {
  D0(), B0(t, e);
}
function U0(t, e) {
  q0(), X0(t);
}
var Fr = {};
const K0 = (t, e) => {
  ot.value() == 1 ? Fr = Ds(() => G0(t), w.simulation.delay) : Fr.stop();
}, Y0 = (t, e, n) => {
  He.update(() => C0(e)), ot.update(() => K0(t)), qe.update(() => ra(t, n)), Hn.update(() => U0(t)), Bn.update(() => {
    M.synchronization_strength.widget.reset(e, 0);
  }), Xn.update(() => {
    M.like_attracts_like_strength.widget.reset(e, 0);
  }), M.presets.widget.update(() => Fn(e)), M.advanced_settings.widget.update(() => {
    Q(wt, (r) => {
      e.select("#slider_" + r.id()).transition(1e3).style("opacity", M.advanced_settings.widget.value() ? 1 : 0), e.select("#slider_" + r.id()).selectAll("*").style("pointer-events", M.advanced_settings.widget.value() ? null : "none");
    });
  });
}, V0 = {
  name: "@explorables/swarmalators",
  title: "Swarmalators",
  subtitle: "Oscillators that sync and swarm",
  description: "This explorable illustrates dynamic patterns that emerge when collective motion and synchronization interact in a swarm of phase coupled oscillators.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function J0(t, e = ia) {
  const n = P0(t, e), r = n.display, i = n.controls, a = n.grid;
  return O0(i, a), Y0(r, i, e), ra(r, e), {
    halt() {
      ot.value() === 1 && ot.press(i);
    },
    reset() {
      ot.value() === 1 && ot.press(i), He.press(i), qe.press(i);
    },
    config: e,
    meta: V0
  };
}
export {
  ia as config,
  J0 as default,
  J0 as load,
  V0 as meta
};
