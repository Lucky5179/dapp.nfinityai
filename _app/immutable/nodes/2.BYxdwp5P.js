import {
  s as J,
  e as k,
  a as M,
  c as w,
  d as I,
  f as N,
  w as O,
  g as _,
  y as j,
  h as c,
  i as L,
  j as y,
  x as z,
  n as K,
  t as ee,
  q as le,
  r as te,
  F as G,
  v as ke,
  o as we,
  I as W,
  A as ye,
  b as ae,
  u as Z,
} from "../chunks/scheduler.Bo5rxkXI.js";
import {
  S as X,
  i as Y,
  c as P,
  a as F,
  m as R,
  t as B,
  d as re,
  e as S,
  f as q,
  g as ne,
} from "../chunks/index.BXG-_PB9.js";
import {
  e as U,
  u as Ee,
  d as Ie,
  m as Le,
} from "../chunks/mediaQuery.D7fHuHNS.js";
import { p as Ne } from "../chunks/pfps.Cw2Zfgsv.js";
import { m as Ce } from "../chunks/index.XqmEgky2.js";
import { c as V } from "../chunks/utils.CcZNOUuG.js";
import { T as xe } from "../chunks/Title.YFDHANe9.js";
import { B as Te } from "../chunks/Banner.CVU6Z-xY.js";
function ie(a, e, l) {
  const t = a.slice();
  return (t[3] = e[l]), t;
}
function De(a) {
  let e, l;
  return {
    c() {
      (e = k("img")), this.h();
    },
    l(t) {
      (e = w(t, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        this.h();
    },
    h() {
      j(e.src, (l = a[3].image)) || c(e, "src", l),
        c(e, "alt", ""),
        c(
          e,
          "class",
          "absolute inset-0 h-full w-full select-none object-cover"
        ),
        c(e, "draggable", "false");
    },
    m(t, r) {
      L(t, e, r);
    },
    p(t, r) {
      r & 4 && !j(e.src, (l = t[3].image)) && c(e, "src", l);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Ve(a) {
  let e, l, t;
  return {
    c() {
      (e = k("video")), (l = k("source")), this.h();
    },
    l(r) {
      e = w(r, "VIDEO", { class: !0 });
      var n = I(e);
      (l = w(n, "SOURCE", { src: !0, type: !0 })), n.forEach(_), this.h();
    },
    h() {
      j(l.src, (t = a[3].video)) || c(l, "src", t),
        c(l, "type", "video/mp4"),
        c(e, "class", "absolute inset-0 h-full w-full object-cover"),
        (e.autoplay = !0),
        (e.loop = !0),
        (e.muted = !0),
        (e.playsInline = !0);
    },
    m(r, n) {
      L(r, e, n), y(e, l);
    },
    p(r, n) {
      n & 4 && !j(l.src, (t = r[3].video)) && c(l, "src", t);
    },
    d(r) {
      r && _(e);
    },
  };
}
function oe(a) {
  let e,
    l = "✨ NEW";
  return {
    c() {
      (e = k("div")), (e.textContent = l), this.h();
    },
    l(t) {
      (e = w(t, "DIV", { class: !0, "data-svelte-h": !0 })),
        O(e) !== "svelte-jwlche" && (e.textContent = l),
        this.h();
    },
    h() {
      c(
        e,
        "class",
        "absolute right-0 top-0 mr-2 mt-3 w-fit rounded-[0.3125rem] bg-[#545ACD] px-1 text-[0.5rem]"
      );
    },
    m(t, r) {
      L(t, e, r);
    },
    d(t) {
      t && _(e);
    },
  };
}
function ce(a, e) {
  let l,
    t,
    r,
    n,
    i,
    h = e[3].name + "",
    m,
    d,
    s;
  function f(b, g) {
    return b[3].isVideo ? Ve : De;
  }
  let p = f(e),
    u = p(e),
    o = e[3].isNew && oe();
  return {
    key: a,
    first: null,
    c() {
      (l = k("li")),
        (t = k("a")),
        u.c(),
        (r = M()),
        (n = k("span")),
        (i = k("h3")),
        (m = ee(h)),
        (d = M()),
        o && o.c(),
        this.h();
    },
    l(b) {
      l = w(b, "LI", { class: !0 });
      var g = I(l);
      t = w(g, "A", { href: !0, class: !0 });
      var v = I(t);
      u.l(v), (r = N(v)), (n = w(v, "SPAN", { class: !0 }));
      var T = I(n);
      i = w(T, "H3", { class: !0 });
      var D = I(i);
      (m = le(D, h)),
        D.forEach(_),
        T.forEach(_),
        (d = N(v)),
        o && o.l(v),
        v.forEach(_),
        g.forEach(_),
        this.h();
    },
    h() {
      c(i, "class", "line-clamp-2"),
        c(n, "class", "relative break-words"),
        c(t, "href", (s = e[3].href)),
        c(t, "class", "relative flex h-full w-full items-end px-2 pb-3"),
        c(
          l,
          "class",
          "relative flex aspect-[7/10] items-center justify-center overflow-hidden rounded-[0.625rem] bg-black text-[0.9375rem]"
        ),
        (this.first = l);
    },
    m(b, g) {
      L(b, l, g),
        y(l, t),
        u.m(t, null),
        y(t, r),
        y(t, n),
        y(n, i),
        y(i, m),
        y(t, d),
        o && o.m(t, null);
    },
    p(b, g) {
      (e = b),
        p === (p = f(e)) && u
          ? u.p(e, g)
          : (u.d(1), (u = p(e)), u && (u.c(), u.m(t, r))),
        g & 4 && h !== (h = e[3].name + "") && te(m, h),
        e[3].isNew
          ? o || ((o = oe()), o.c(), o.m(t, null))
          : o && (o.d(1), (o = null)),
        g & 4 && s !== (s = e[3].href) && c(t, "href", s);
    },
    d(b) {
      b && _(l), u.d(), o && o.d();
    },
  };
}
function je(a) {
  let e,
    l = [],
    t = new Map(),
    r,
    n,
    i,
    h,
    m,
    d,
    s = "Launching soon",
    f,
    p,
    u,
    o,
    b,
    g,
    v,
    T = "Launching soon",
    D,
    A,
    C = U(a[2]);
  const se = (E) => E[3].id;
  for (let E = 0; E < C.length; E += 1) {
    let x = ie(a, C, E),
      H = se(x);
    t.set(H, (l[E] = ce(H, x)));
  }
  return {
    c() {
      e = k("ul");
      for (let E = 0; E < l.length; E += 1) l[E].c();
      (r = M()),
        (n = k("div")),
        (i = k("img")),
        (m = M()),
        (d = k("h3")),
        (d.textContent = s),
        (p = M()),
        (u = k("div")),
        (o = k("img")),
        (g = M()),
        (v = k("h3")),
        (v.textContent = T),
        this.h();
    },
    l(E) {
      e = w(E, "UL", { class: !0, role: !0, "aria-labelledby": !0 });
      var x = I(e);
      for (let $ = 0; $ < l.length; $ += 1) l[$].l(x);
      (r = N(x)), (n = w(x, "DIV", { class: !0 }));
      var H = I(n);
      (i = w(H, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        (m = N(H)),
        (d = w(H, "H3", { class: !0, "data-svelte-h": !0 })),
        O(d) !== "svelte-2xp8kv" && (d.textContent = s),
        H.forEach(_),
        (p = N(x)),
        (u = w(x, "DIV", { class: !0 }));
      var Q = I(u);
      (o = w(Q, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        (g = N(Q)),
        (v = w(Q, "H3", { class: !0, "data-svelte-h": !0 })),
        O(v) !== "svelte-2xp8kv" && (v.textContent = T),
        Q.forEach(_),
        x.forEach(_),
        this.h();
    },
    h() {
      j(i.src, (h = "/categories/soon1.webp")) || c(i, "src", h),
        c(i, "alt", ""),
        c(i, "class", "h-full w-full select-none object-cover"),
        c(i, "draggable", "false"),
        c(
          d,
          "class",
          "absolute left-1/2 top-1/2 line-clamp-2 -translate-x-1/2 -translate-y-1/2 text-center"
        ),
        c(
          n,
          "class",
          (f = V(
            "relative min-h-[149px] overflow-hidden rounded-[0.625rem]",
            "col-span-full sm:col-span-1 md:col-span-2 xl:col-span-3",
            a[2].length % 2 === 1 &&
              "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2",
            a[2].length % 3 === 2 &&
              "sm:col-span-1 lg:col-span-3 xl:col-span-2",
            a[2].length % 4 === 3 &&
              "sm:col-span-3 md:col-span-1 lg:col-span-2",
            a[2].length % 5 === 4 &&
              "sm:col-span-2 lg:col-span-1 xl:col-span-2",
            a[2].length % 6 === 5 && "xl:col-span-1"
          ))
        ),
        j(o.src, (b = "/categories/soon2.webp")) || c(o, "src", b),
        c(o, "alt", ""),
        c(
          o,
          "class",
          "absolute inset-0 h-full w-full select-none object-cover"
        ),
        c(o, "draggable", "false"),
        c(
          v,
          "class",
          "absolute left-1/2 top-1/2 line-clamp-2 -translate-x-1/2 -translate-y-1/2 text-center"
        ),
        c(
          u,
          "class",
          (D = V(
            "relative min-h-[149px] overflow-hidden rounded-[0.625rem]",
            "hidden sm:col-span-2 sm:block md:hidden lg:col-span-2 lg:block xl:col-span-3",
            a[2].length % 2 === 1 && "col-span-2 block sm:col-span-full",
            a[2].length % 3 === 2 &&
              "hidden sm:hidden lg:hidden xl:col-span-2 xl:block",
            a[2].length % 4 === 3 && "sm:hidden md:col-span-1 lg:hidden",
            a[2].length % 5 === 4 &&
              "sm:hidden md:col-span-2 md:block lg:hidden",
            a[2].length % 6 === 5 &&
              "col-span-2 block sm:col-span-3 sm:block lg:col-span-2 lg:block xl:hidden"
          ))
        ),
        c(
          e,
          "class",
          (A = V(
            "font-nippo grid grid-cols-2 gap-2 sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-5  xl:grid-cols-6",
            a[0]
          ))
        ),
        c(e, "role", "list"),
        c(e, "aria-labelledby", a[1]);
    },
    m(E, x) {
      L(E, e, x);
      for (let H = 0; H < l.length; H += 1) l[H] && l[H].m(e, null);
      y(e, r),
        y(e, n),
        y(n, i),
        y(n, m),
        y(n, d),
        y(e, p),
        y(e, u),
        y(u, o),
        y(u, g),
        y(u, v);
    },
    p(E, [x]) {
      x & 4 &&
        ((C = U(E[2])), (l = Ee(l, x, se, 1, E, C, t, e, Ie, ce, r, ie))),
        x & 4 &&
          f !==
            (f = V(
              "relative min-h-[149px] overflow-hidden rounded-[0.625rem]",
              "col-span-full sm:col-span-1 md:col-span-2 xl:col-span-3",
              E[2].length % 2 === 1 &&
                "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2",
              E[2].length % 3 === 2 &&
                "sm:col-span-1 lg:col-span-3 xl:col-span-2",
              E[2].length % 4 === 3 &&
                "sm:col-span-3 md:col-span-1 lg:col-span-2",
              E[2].length % 5 === 4 &&
                "sm:col-span-2 lg:col-span-1 xl:col-span-2",
              E[2].length % 6 === 5 && "xl:col-span-1"
            )) &&
          c(n, "class", f),
        x & 4 &&
          D !==
            (D = V(
              "relative min-h-[149px] overflow-hidden rounded-[0.625rem]",
              "hidden sm:col-span-2 sm:block md:hidden lg:col-span-2 lg:block xl:col-span-3",
              E[2].length % 2 === 1 && "col-span-2 block sm:col-span-full",
              E[2].length % 3 === 2 &&
                "hidden sm:hidden lg:hidden xl:col-span-2 xl:block",
              E[2].length % 4 === 3 && "sm:hidden md:col-span-1 lg:hidden",
              E[2].length % 5 === 4 &&
                "sm:hidden md:col-span-2 md:block lg:hidden",
              E[2].length % 6 === 5 &&
                "col-span-2 block sm:col-span-3 sm:block lg:col-span-2 lg:block xl:hidden"
            )) &&
          c(u, "class", D),
        x & 1 &&
          A !==
            (A = V(
              "font-nippo grid grid-cols-2 gap-2 sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-5  xl:grid-cols-6",
              E[0]
            )) &&
          c(e, "class", A),
        x & 2 && c(e, "aria-labelledby", E[1]);
    },
    i: z,
    o: z,
    d(E) {
      E && _(e);
      for (let x = 0; x < l.length; x += 1) l[x].d();
    },
  };
}
function He(a, e, l) {
  let t;
  K(a, Ce, (i) => l(2, (t = i)));
  let { className: r = "" } = e,
    { ariaLabelledby: n = "" } = e;
  return (
    (a.$$set = (i) => {
      "className" in i && l(0, (r = i.className)),
        "ariaLabelledby" in i && l(1, (n = i.ariaLabelledby));
    }),
    [r, n, t]
  );
}
class Se extends X {
  constructor(e) {
    super(), Y(this, e, He, je, J, { className: 0, ariaLabelledby: 1 });
  }
}
const Me =
  "data:image/svg+xml,%3csvg%20width='11'%20height='15'%20viewBox='0%200%2011%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8061%2014.9549C10.7613%2014.9848%2010.7019%2015%2010.6419%2015C10.5674%2015%2010.508%2014.9848%2010.4335%2014.9403L0.14905%207.80224C0.0593874%207.74249%200%207.62242%200%207.50234C0%207.38226%200.0593874%207.27741%200.14905%207.20243L10.4335%200.0644226C10.5377%20-0.0105534%2010.6868%20-0.0257825%2010.8061%200.0491935C10.9255%200.10894%2011%200.229016%2011%200.364332V14.6396C10.9994%2014.7749%2010.9249%2014.895%2010.8061%2014.9547V14.9549Z'%20fill='white'/%3e%3c/svg%3e";
function fe(a, e, l) {
  const t = a.slice();
  return (t[18] = e[l]), t;
}
function ue(a) {
  let e, l, t, r, n, i, h, m;
  return {
    c() {
      (e = k("div")), (l = k("button")), (t = k("img")), this.h();
    },
    l(d) {
      e = w(d, "DIV", { class: !0, style: !0 });
      var s = I(e);
      l = w(s, "BUTTON", { class: !0 });
      var f = I(l);
      (t = w(f, "IMG", { src: !0, alt: !0, draggable: !0, class: !0 })),
        f.forEach(_),
        s.forEach(_),
        this.h();
    },
    h() {
      j(t.src, (r = Me)) || c(t, "src", r),
        c(t, "alt", ""),
        c(t, "draggable", "false"),
        c(t, "class", "select-none"),
        c(
          l,
          "class",
          (n =
            G(
              V(
                "pointer-events-auto flex h-12 w-12 transform items-center justify-center rounded-full bg-[#006FB9] disabled:opacity-50",
                a[3] && "h-10 w-10"
              )
            ) + " svelte-1orcykf")
        ),
        (l.disabled = i = !a[5]),
        c(
          e,
          "class",
          "leftButton pointer-events-none absolute left-0 z-[2] flex h-full items-center pl-3 svelte-1orcykf"
        ),
        W(e, "width", a[8] + "px");
    },
    m(d, s) {
      L(d, e, s),
        y(e, l),
        y(l, t),
        h || ((m = ye(l, "click", a[13])), (h = !0));
    },
    p(d, s) {
      s & 8 &&
        n !==
          (n =
            G(
              V(
                "pointer-events-auto flex h-12 w-12 transform items-center justify-center rounded-full bg-[#006FB9] disabled:opacity-50",
                d[3] && "h-10 w-10"
              )
            ) + " svelte-1orcykf") &&
        c(l, "class", n),
        s & 32 && i !== (i = !d[5]) && (l.disabled = i),
        s & 256 && W(e, "width", d[8] + "px");
    },
    d(d) {
      d && _(e), (h = !1), m();
    },
  };
}
function de(a) {
  let e,
    l,
    t,
    r,
    n = `Model Used: ${a[18].name}`,
    i,
    h,
    m,
    d;
  return {
    c() {
      (e = k("li")),
        (l = k("a")),
        (t = k("div")),
        (r = k("h3")),
        (i = ee(n)),
        (m = M()),
        this.h();
    },
    l(s) {
      e = w(s, "LI", { class: !0, style: !0 });
      var f = I(e);
      l = w(f, "A", { href: !0, class: !0 });
      var p = I(l);
      t = w(p, "DIV", { class: !0 });
      var u = I(t);
      r = w(u, "H3", { class: !0 });
      var o = I(r);
      (i = le(o, n)),
        o.forEach(_),
        u.forEach(_),
        p.forEach(_),
        (m = N(f)),
        f.forEach(_),
        this.h();
    },
    h() {
      c(r, "class", "line-clamp-2 break-words font-bold"),
        c(t, "class", "flex h-[40px] w-full items-center bg-[#00000099] px-3"),
        c(l, "href", (h = `/models/${a[18].id}`)),
        c(l, "class", "flex h-full w-full items-end"),
        c(
          e,
          "class",
          G(
            V(
              "flex-shrink-0 snap-center rounded-[0.625rem] bg-cover bg-center shadow"
            )
          ) + " svelte-1orcykf"
        ),
        c(
          e,
          "style",
          (d =
            "width: " +
            a[8] +
            "px; height: " +
            a[9] +
            "px; " +
            (a[18].image_url
              ? `background-image: url('${a[18].image_url}')`
              : "background-image: url('/default-model.webp')"))
        );
    },
    m(s, f) {
      L(s, e, f), y(e, l), y(l, t), y(t, r), y(r, i), a[14](t), y(e, m);
    },
    p(s, f) {
      f & 1 && n !== (n = `Model Used: ${s[18].name}`) && te(i, n),
        f & 1 && h !== (h = `/models/${s[18].id}`) && c(l, "href", h),
        f & 769 &&
          d !==
            (d =
              "width: " +
              s[8] +
              "px; height: " +
              s[9] +
              "px; " +
              (s[18].image_url
                ? `background-image: url('${s[18].image_url}')`
                : "background-image: url('/default-model.webp')")) &&
          c(e, "style", d);
    },
    d(s) {
      s && _(e), a[14](null);
    },
  };
}
function he(a) {
  let e, l, t, r, n, i, h, m;
  return {
    c() {
      (e = k("div")), (l = k("button")), (t = k("img")), this.h();
    },
    l(d) {
      e = w(d, "DIV", { class: !0, style: !0 });
      var s = I(e);
      l = w(s, "BUTTON", { class: !0 });
      var f = I(l);
      (t = w(f, "IMG", { src: !0, alt: !0, class: !0 })),
        f.forEach(_),
        s.forEach(_),
        this.h();
    },
    h() {
      j(t.src, (r = Me)) || c(t, "src", r),
        c(t, "alt", ""),
        c(t, "class", "rotate-[180deg]"),
        c(
          l,
          "class",
          (n =
            G(
              V(
                "pointer-events-auto flex h-12 w-12 transform items-center justify-center rounded-full bg-[#006FB9] disabled:opacity-50",
                a[3] && "h-10 w-10"
              )
            ) + " svelte-1orcykf")
        ),
        (l.disabled = i = !a[6]),
        c(
          e,
          "class",
          "rightButton pointer-events-none absolute right-[-1px] top-0 z-[2] flex h-full items-center justify-end pr-3 svelte-1orcykf"
        ),
        W(e, "width", a[8] + "px");
    },
    m(d, s) {
      L(d, e, s),
        y(e, l),
        y(l, t),
        h || ((m = ye(l, "click", a[16])), (h = !0));
    },
    p(d, s) {
      s & 8 &&
        n !==
          (n =
            G(
              V(
                "pointer-events-auto flex h-12 w-12 transform items-center justify-center rounded-full bg-[#006FB9] disabled:opacity-50",
                d[3] && "h-10 w-10"
              )
            ) + " svelte-1orcykf") &&
        c(l, "class", n),
        s & 64 && i !== (i = !d[6]) && (l.disabled = i),
        s & 256 && W(e, "width", d[8] + "px");
    },
    d(d) {
      d && _(e), (h = !1), m();
    },
  };
}
function Be(a) {
  let e,
    l,
    t,
    r,
    n,
    i = a[7] && ue(a),
    h = U(a[0]),
    m = [];
  for (let s = 0; s < h.length; s += 1) m[s] = de(fe(a, h, s));
  let d = a[7] && he(a);
  return {
    c() {
      (e = k("div")), i && i.c(), (l = M()), (t = k("ul"));
      for (let s = 0; s < m.length; s += 1) m[s].c();
      (r = M()), d && d.c(), this.h();
    },
    l(s) {
      e = w(s, "DIV", { class: !0 });
      var f = I(e);
      i && i.l(f),
        (l = N(f)),
        (t = w(f, "UL", { class: !0, "aria-labelledby": !0 }));
      var p = I(t);
      for (let u = 0; u < m.length; u += 1) m[u].l(p);
      p.forEach(_), (r = N(f)), d && d.l(f), f.forEach(_), this.h();
    },
    h() {
      c(
        t,
        "class",
        "font-kodeMono scrollbar-hide flex snap-x snap-mandatory gap-1 overflow-x-auto px-4 text-[0.75rem] md:px-0 svelte-1orcykf"
      ),
        c(t, "aria-labelledby", a[2]),
        c(
          e,
          "class",
          (n =
            G(V("relative overflow-hidden rounded-[0.625rem]", a[1])) +
            " svelte-1orcykf")
        );
    },
    m(s, f) {
      L(s, e, f), i && i.m(e, null), y(e, l), y(e, t);
      for (let p = 0; p < m.length; p += 1) m[p] && m[p].m(t, null);
      a[15](t), y(e, r), d && d.m(e, null);
    },
    p(s, [f]) {
      if (
        (s[7]
          ? i
            ? i.p(s, f)
            : ((i = ue(s)), i.c(), i.m(e, l))
          : i && (i.d(1), (i = null)),
        f & 785)
      ) {
        h = U(s[0]);
        let p;
        for (p = 0; p < h.length; p += 1) {
          const u = fe(s, h, p);
          m[p] ? m[p].p(u, f) : ((m[p] = de(u)), m[p].c(), m[p].m(t, null));
        }
        for (; p < m.length; p += 1) m[p].d(1);
        m.length = h.length;
      }
      f & 4 && c(t, "aria-labelledby", s[2]),
        s[7]
          ? d
            ? d.p(s, f)
            : ((d = he(s)), d.c(), d.m(e, null))
          : d && (d.d(1), (d = null)),
        f & 2 &&
          n !==
            (n =
              G(V("relative overflow-hidden rounded-[0.625rem]", s[1])) +
              " svelte-1orcykf") &&
          c(e, "class", n);
    },
    i: z,
    o: z,
    d(s) {
      s && _(e), i && i.d(), ke(m, s), a[15](null), d && d.d();
    },
  };
}
function Ae(a, e, l) {
  let t, r, n, i;
  K(a, Le, (C) => l(12, (i = C)));
  let { items: h } = e,
    { className: m = "" } = e,
    { ariaLabelledby: d = "" } = e,
    s,
    f = !1,
    p = !0,
    u = !1,
    o = 0;
  function b(C) {
    s.scrollBy({ left: C === "left" ? -t : t, behavior: "smooth" });
  }
  function g() {
    s &&
      (l(7, (u = s.scrollWidth > s.clientWidth && i.md)),
      l(5, (f = s.scrollLeft > 0)),
      l(6, (p = s.scrollLeft < s.scrollWidth - s.clientWidth)));
  }
  we(() => {
    setTimeout(() => {
      g();
    }, 100),
      s.addEventListener("scroll", g),
      l(11, (o = window.innerWidth));
    const C = () => {
      l(11, (o = window.innerWidth)), g();
    };
    return (
      window.addEventListener("resize", C),
      () => {
        s.removeEventListener("scroll", g),
          window.removeEventListener("resize", C);
      }
    );
  });
  const v = () => b("left");
  function T(C) {
    ae[C ? "unshift" : "push"](() => {
      (s = C), l(4, s);
    });
  }
  function D(C) {
    ae[C ? "unshift" : "push"](() => {
      (s = C), l(4, s);
    });
  }
  const A = () => b("right");
  return (
    (a.$$set = (C) => {
      "items" in C && l(0, (h = C.items)),
        "className" in C && l(1, (m = C.className)),
        "ariaLabelledby" in C && l(2, (d = C.ariaLabelledby));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 2048 && l(3, (n = o <= 900)),
        a.$$.dirty & 4104 &&
          l(8, (t = n && i.md ? Math.floor(218 * 0.7) : 218)),
        a.$$.dirty & 4104 &&
          l(9, (r = n && i.md ? Math.floor(314 * 0.7) : 314));
    }),
    [h, m, d, n, s, f, p, u, t, r, b, o, i, v, T, D, A]
  );
}
class Ge extends X {
  constructor(e) {
    super(),
      Y(this, e, Ae, Be, J, { items: 0, className: 1, ariaLabelledby: 2 });
  }
}
function me(a, e, l) {
  const t = a.slice();
  return (t[5] = e[l]), t;
}
function We(a) {
  let e, l;
  return {
    c() {
      (e = k("img")), this.h();
    },
    l(t) {
      (e = w(t, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        this.h();
    },
    h() {
      j(e.src, (l = a[5].image)) || c(e, "src", l),
        c(e, "alt", ""),
        c(
          e,
          "class",
          "absolute inset-0 h-full w-full select-none object-cover"
        ),
        c(e, "draggable", "false");
    },
    m(t, r) {
      L(t, e, r);
    },
    p(t, r) {
      r & 16 && !j(e.src, (l = t[5].image)) && c(e, "src", l);
    },
    d(t) {
      t && _(e);
    },
  };
}
function Ue(a) {
  let e, l, t;
  return {
    c() {
      (e = k("video")), (l = k("source")), this.h();
    },
    l(r) {
      e = w(r, "VIDEO", { class: !0 });
      var n = I(e);
      (l = w(n, "SOURCE", { src: !0, type: !0 })), n.forEach(_), this.h();
    },
    h() {
      j(l.src, (t = a[5].video)) || c(l, "src", t),
        c(l, "type", "video/mp4"),
        c(
          e,
          "class",
          "absolute inset-0 h-full w-full object-cover object-center"
        ),
        (e.autoplay = !0),
        (e.loop = !0),
        (e.muted = !0),
        (e.playsInline = !0);
    },
    m(r, n) {
      L(r, e, n), y(e, l);
    },
    p(r, n) {
      n & 16 && !j(l.src, (t = r[5].video)) && c(l, "src", t);
    },
    d(r) {
      r && _(e);
    },
  };
}
function pe(a) {
  let e,
    l = "✨ NEW";
  return {
    c() {
      (e = k("div")), (e.textContent = l), this.h();
    },
    l(t) {
      (e = w(t, "DIV", { class: !0, "data-svelte-h": !0 })),
        O(e) !== "svelte-jwlche" && (e.textContent = l),
        this.h();
    },
    h() {
      c(
        e,
        "class",
        "absolute right-0 top-0 mr-2 mt-3 w-fit rounded-[0.3125rem] bg-[#545ACD] px-1 text-[0.5rem]"
      );
    },
    m(t, r) {
      L(t, e, r);
    },
    d(t) {
      t && _(e);
    },
  };
}
function ge(a, e) {
  let l,
    t,
    r,
    n,
    i,
    h = e[5].name + "",
    m,
    d,
    s,
    f;
  function p(g, v) {
    return g[5].isVideo ? Ue : We;
  }
  let u = p(e),
    o = u(e),
    b = e[5].isNew && pe();
  return {
    key: a,
    first: null,
    c() {
      (l = k("li")),
        (t = k("a")),
        o.c(),
        (r = M()),
        (n = k("span")),
        (i = k("h3")),
        (m = ee(h)),
        (d = M()),
        b && b.c(),
        (f = M()),
        this.h();
    },
    l(g) {
      l = w(g, "LI", { class: !0, style: !0 });
      var v = I(l);
      t = w(v, "A", { href: !0, class: !0 });
      var T = I(t);
      o.l(T), (r = N(T)), (n = w(T, "SPAN", { class: !0 }));
      var D = I(n);
      i = w(D, "H3", { class: !0 });
      var A = I(i);
      (m = le(A, h)),
        A.forEach(_),
        D.forEach(_),
        (d = N(T)),
        b && b.l(T),
        T.forEach(_),
        (f = N(v)),
        v.forEach(_),
        this.h();
    },
    h() {
      c(i, "class", "line-clamp-2"),
        c(n, "class", "relative break-words"),
        c(t, "href", (s = e[5].href)),
        c(t, "class", "relative flex h-full w-full items-end px-2 pb-3"),
        c(
          l,
          "class",
          "flex-shrink-0 snap-center overflow-hidden rounded-[0.625rem]"
        ),
        W(l, "width", e[3] + "px"),
        W(l, "height", e[2] + "px"),
        (this.first = l);
    },
    m(g, v) {
      L(g, l, v),
        y(l, t),
        o.m(t, null),
        y(t, r),
        y(t, n),
        y(n, i),
        y(i, m),
        y(t, d),
        b && b.m(t, null),
        y(l, f);
    },
    p(g, v) {
      (e = g),
        u === (u = p(e)) && o
          ? o.p(e, v)
          : (o.d(1), (o = u(e)), o && (o.c(), o.m(t, r))),
        v & 16 && h !== (h = e[5].name + "") && te(m, h),
        e[5].isNew
          ? b || ((b = pe()), b.c(), b.m(t, null))
          : b && (b.d(1), (b = null)),
        v & 16 && s !== (s = e[5].href) && c(t, "href", s),
        v & 8 && W(l, "width", e[3] + "px"),
        v & 4 && W(l, "height", e[2] + "px");
    },
    d(g) {
      g && _(l), o.d(), b && b.d();
    },
  };
}
function ze(a) {
  let e,
    l = [],
    t = new Map(),
    r,
    n,
    i,
    h =
      '<img src="/categories/soon1.webp" alt="" class="h-full w-full select-none object-cover" draggable="false"/> <h3 class="absolute left-1/2 top-1/2 line-clamp-2 -translate-x-1/2 -translate-y-1/2 text-center">Launching soon</h3>',
    m,
    d,
    s =
      '<img src="/categories/soon2.webp" alt="" class="h-full w-full select-none object-cover" draggable="false"/> <h3 class="absolute left-1/2 top-1/2 line-clamp-2 -translate-x-1/2 -translate-y-1/2 text-center">Launching soon</h3>',
    f = U(a[4]);
  const p = (u) => u[5].id;
  for (let u = 0; u < f.length; u += 1) {
    let o = me(a, f, u),
      b = p(o);
    t.set(b, (l[u] = ge(b, o)));
  }
  return {
    c() {
      e = k("ul");
      for (let u = 0; u < l.length; u += 1) l[u].c();
      (n = M()),
        (i = k("div")),
        (i.innerHTML = h),
        (m = M()),
        (d = k("div")),
        (d.innerHTML = s),
        this.h();
    },
    l(u) {
      e = w(u, "UL", { class: !0, "aria-labelledby": !0 });
      var o = I(e);
      for (let b = 0; b < l.length; b += 1) l[b].l(o);
      o.forEach(_),
        (n = N(u)),
        (i = w(u, "DIV", { class: !0, "data-svelte-h": !0 })),
        O(i) !== "svelte-89h6z9" && (i.innerHTML = h),
        (m = N(u)),
        (d = w(u, "DIV", { class: !0, "data-svelte-h": !0 })),
        O(d) !== "svelte-i97b2k" && (d.innerHTML = s),
        this.h();
    },
    h() {
      c(
        e,
        "class",
        (r =
          G(
            V(
              "font-nippo scrollbar-hide flex snap-x snap-mandatory gap-1 overflow-x-auto px-4 text-[1rem]",
              a[0]
            )
          ) + " svelte-192uef1")
      ),
        c(e, "aria-labelledby", a[1]),
        c(
          i,
          "class",
          "relative mx-6 mt-10 h-24 overflow-hidden rounded-[0.625rem]"
        ),
        c(
          d,
          "class",
          "relative mx-6 mt-3 h-24 overflow-hidden rounded-[0.625rem]"
        );
    },
    m(u, o) {
      L(u, e, o);
      for (let b = 0; b < l.length; b += 1) l[b] && l[b].m(e, null);
      L(u, n, o), L(u, i, o), L(u, m, o), L(u, d, o);
    },
    p(u, [o]) {
      o & 28 &&
        ((f = U(u[4])), (l = Ee(l, o, p, 1, u, f, t, e, Ie, ge, null, me))),
        o & 1 &&
          r !==
            (r =
              G(
                V(
                  "font-nippo scrollbar-hide flex snap-x snap-mandatory gap-1 overflow-x-auto px-4 text-[1rem]",
                  u[0]
                )
              ) + " svelte-192uef1") &&
          c(e, "class", r),
        o & 2 && c(e, "aria-labelledby", u[1]);
    },
    i: z,
    o: z,
    d(u) {
      u && (_(e), _(n), _(i), _(m), _(d));
      for (let o = 0; o < l.length; o += 1) l[o].d();
    },
  };
}
function Oe(a, e, l) {
  let t, r, n;
  K(a, Ce, (m) => l(4, (n = m)));
  let { className: i = "" } = e,
    { ariaLabelledby: h = "" } = e;
  return (
    (a.$$set = (m) => {
      "className" in m && l(0, (i = m.className)),
        "ariaLabelledby" in m && l(1, (h = m.ariaLabelledby));
    }),
    l(3, (t = 182)),
    l(2, (r = 262)),
    [i, h, r, t, n]
  );
}
class Pe extends X {
  constructor(e) {
    super(), Y(this, e, Oe, ze, J, { className: 0, ariaLabelledby: 1 });
  }
}
function _e(a, e, l) {
  const t = a.slice();
  return (t[7] = e[l]), t;
}
function Fe(a) {
  let e, l;
  return (
    (e = new Pe({})),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        B(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function Re(a) {
  let e, l;
  return (
    (e = new Se({ props: { ariaLabelledby: "categories-title" } })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        F(e.$$.fragment, t);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        B(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function be(a) {
  let e, l, t, r, n, i, h, m;
  t = new xe({
    props: {
      variantGradient: "blue",
      size: "small",
      beforeText: "Most popular ",
      text: "models",
      id: "community-models",
      className: "md:text-left text-center ",
    },
  });
  let d = U(a[0]),
    s = [];
  for (let f = 0; f < d.length; f += 1) s[f] = ve(_e(a, d, f));
  return (
    (h = new Ge({
      props: { items: a[1], ariaLabelledby: "community-models" },
    })),
    {
      c() {
        (e = k("section")),
          (l = k("div")),
          P(t.$$.fragment),
          (r = M()),
          (n = k("div"));
        for (let f = 0; f < s.length; f += 1) s[f].c();
        (i = M()), P(h.$$.fragment), this.h();
      },
      l(f) {
        e = w(f, "SECTION", { class: !0 });
        var p = I(e);
        l = w(p, "DIV", { class: !0 });
        var u = I(l);
        F(t.$$.fragment, u), (r = N(u)), (n = w(u, "DIV", { class: !0 }));
        var o = I(n);
        for (let b = 0; b < s.length; b += 1) s[b].l(o);
        o.forEach(_),
          u.forEach(_),
          (i = N(p)),
          F(h.$$.fragment, p),
          p.forEach(_),
          this.h();
      },
      h() {
        c(n, "class", "flex gap-[-10px]"),
          c(l, "class", "mb-8 flex items-center gap-4 lg:mb-9"),
          c(e, "class", "mt-8 lg:mt-12");
      },
      m(f, p) {
        L(f, e, p), y(e, l), R(t, l, null), y(l, r), y(l, n);
        for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(n, null);
        y(e, i), R(h, e, null), (m = !0);
      },
      p(f, p) {
        if (p & 1) {
          d = U(f[0]);
          let o;
          for (o = 0; o < d.length; o += 1) {
            const b = _e(f, d, o);
            s[o] ? s[o].p(b, p) : ((s[o] = ve(b)), s[o].c(), s[o].m(n, null));
          }
          for (; o < s.length; o += 1) s[o].d(1);
          s.length = d.length;
        }
        const u = {};
        p & 2 && (u.items = f[1]), h.$set(u);
      },
      i(f) {
        m || (S(t.$$.fragment, f), S(h.$$.fragment, f), (m = !0));
      },
      o(f) {
        B(t.$$.fragment, f), B(h.$$.fragment, f), (m = !1);
      },
      d(f) {
        f && _(e), q(t), ke(s, f), q(h);
      },
    }
  );
}
function qe(a) {
  let e;
  return {
    c() {
      (e = k("div")), this.h();
    },
    l(l) {
      (e = w(l, "DIV", { class: !0 })), I(e).forEach(_), this.h();
    },
    h() {
      c(e, "class", "skeleton -mx-[6px] h-8 w-8 rounded-full svelte-ga5xbf");
    },
    m(l, t) {
      L(l, e, t);
    },
    p: z,
    d(l) {
      l && _(e);
    },
  };
}
function Qe(a) {
  let e, l;
  return {
    c() {
      (e = k("img")), this.h();
    },
    l(t) {
      (e = w(t, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      j(e.src, (l = a[7].pfp)) || c(e, "src", l),
        c(e, "alt", ""),
        c(e, "class", "-mx-[6px] h-8 w-8 rounded-full");
    },
    m(t, r) {
      L(t, e, r);
    },
    p(t, r) {
      r & 1 && !j(e.src, (l = t[7].pfp)) && c(e, "src", l);
    },
    d(t) {
      t && _(e);
    },
  };
}
function ve(a) {
  let e;
  function l(n, i) {
    return n[7].pfp ? Qe : qe;
  }
  let t = l(a),
    r = t(a);
  return {
    c() {
      r.c(), (e = Z());
    },
    l(n) {
      r.l(n), (e = Z());
    },
    m(n, i) {
      r.m(n, i), L(n, e, i);
    },
    p(n, i) {
      t === (t = l(n)) && r
        ? r.p(n, i)
        : (r.d(1), (r = t(n)), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(n) {
      n && _(e), r.d(n);
    },
  };
}
function Ze(a) {
  var b;
  let e, l, t, r, n, i, h, m, d, s;
  (e = new Te({
    props: {
      title: "Changing the way you use AI",
      src: "/banners/default-banner.webp",
    },
  })),
    (r = new xe({
      props: {
        variantGradient: "blue",
        size: "small",
        beforeText: "Introducing the ",
        text: "categories",
        id: "categories-title",
        className: "md:text-left text-center mb-8 lg:mb-9",
      },
    }));
  const f = [Re, Fe],
    p = [];
  function u(g, v) {
    return g[2].md ? 0 : 1;
  }
  (i = u(a)), (h = p[i] = f[i](a));
  let o = ((b = a[1]) == null ? void 0 : b.length) > 0 && be(a);
  return {
    c() {
      P(e.$$.fragment),
        (l = M()),
        (t = k("section")),
        P(r.$$.fragment),
        (n = M()),
        h.c(),
        (m = M()),
        o && o.c(),
        (d = Z()),
        this.h();
    },
    l(g) {
      F(e.$$.fragment, g), (l = N(g)), (t = w(g, "SECTION", { class: !0 }));
      var v = I(t);
      F(r.$$.fragment, v),
        (n = N(v)),
        h.l(v),
        v.forEach(_),
        (m = N(g)),
        o && o.l(g),
        (d = Z()),
        this.h();
    },
    h() {
      c(t, "class", "mt-5 mt-8 lg:mt-12");
    },
    m(g, v) {
      R(e, g, v),
        L(g, l, v),
        L(g, t, v),
        R(r, t, null),
        y(t, n),
        p[i].m(t, null),
        L(g, m, v),
        o && o.m(g, v),
        L(g, d, v),
        (s = !0);
    },
    p(g, [v]) {
      var D;
      let T = i;
      (i = u(g)),
        i !== T &&
          (ne(),
          B(p[T], 1, 1, () => {
            p[T] = null;
          }),
          re(),
          (h = p[i]),
          h || ((h = p[i] = f[i](g)), h.c()),
          S(h, 1),
          h.m(t, null)),
        ((D = g[1]) == null ? void 0 : D.length) > 0
          ? o
            ? (o.p(g, v), v & 2 && S(o, 1))
            : ((o = be(g)), o.c(), S(o, 1), o.m(d.parentNode, d))
          : o &&
            (ne(),
            B(o, 1, 1, () => {
              o = null;
            }),
            re());
    },
    i(g) {
      s || (S(e.$$.fragment, g), S(r.$$.fragment, g), S(h), S(o), (s = !0));
    },
    o(g) {
      B(e.$$.fragment, g), B(r.$$.fragment, g), B(h), B(o), (s = !1);
    },
    d(g) {
      g && (_(l), _(t), _(m), _(d)), q(e, g), q(r), p[i].d(), o && o.d(g);
    },
  };
}
function Je(a, e, l) {
  let t, r;
  K(a, Le, (s) => l(2, (r = s)));
  let { data: n } = e,
    i = [],
    h = [
      { id: 1, pfp: null, updateInterval: 0 },
      { id: 2, pfp: null, updateInterval: 0 },
      { id: 3, pfp: null, updateInterval: 0 },
      { id: 4, pfp: null, updateInterval: 0 },
    ],
    m = new Set();
  const d = () => {
    m.size >= i.length && m.clear();
    const s = i.filter((p) => !h.some((u) => u.pfp === p) && !m.has(p)),
      f = s[Math.floor(Math.random() * s.length)];
    return f && m.add(f), f;
  };
  return (
    we(async () => {
      (i = Ne.map((s) => `/PFPs/${s}`)),
        l(
          0,
          (h = h.map((s) => ({
            ...s,
            updateInterval: 2e3 + Math.random() * 2e3,
            pfp: d(),
          })))
        ),
        h.forEach((s, f) => {
          setInterval(() => {
            l(0, (h[f] = { ...h[f], pfp: d() }), h);
          }, s.updateInterval);
        });
    }),
    (a.$$set = (s) => {
      "data" in s && l(3, (n = s.data));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 8 && l(1, ({ communityModels: t } = n), t),
        a.$$.dirty & 8 && console.log(n);
    }),
    [h, t, r, n]
  );
}
class al extends X {
  constructor(e) {
    super(), Y(this, e, Je, Ze, J, { data: 3 });
  }
}
export { al as component };
