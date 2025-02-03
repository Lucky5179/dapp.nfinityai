import {
  s as fe,
  e as v,
  a as L,
  c as b,
  d as N,
  f as T,
  g as p,
  h as o,
  i as S,
  j as m,
  x as ee,
  v as Xe,
  n as J,
  o as Te,
  p as It,
  u as me,
  G as Pe,
  t as Ae,
  q as ze,
  C as Ge,
  r as Ze,
  y as Q,
  F as tt,
  z as ve,
  w as W,
  a8 as Fe,
  I as B,
  A as ne,
  E as He,
  J as ge,
  T as lt,
  K as Gt,
  a9 as Ft,
  aa as Ut,
  b as Qe,
  U as Zt,
  ab as Bt,
  O as xt,
  P as Et,
  Q as Mt,
  R as Vt,
} from "../chunks/scheduler.Bo5rxkXI.js";
import {
  S as pe,
  i as he,
  c as P,
  a as Z,
  m as G,
  e as A,
  t as H,
  f as F,
  k as Ie,
  g as ce,
  d as ue,
  h as je,
  j as Me,
} from "../chunks/index.BXG-_PB9.js";
import {
  v as st,
  C as Be,
  s as de,
  w as se,
  x as De,
  o as _e,
  T as Le,
  y as Ke,
  W as Nt,
  z as nt,
  A as Rt,
  D as Wt,
} from "../chunks/WalletsModal.CPqM0ezC.js";
import {
  o as Re,
  i as qt,
  b as Jt,
  a as Yt,
} from "../chunks/entry.B_8W0aY2.js";
import { e as Ve, m as Qt } from "../chunks/mediaQuery.D7fHuHNS.js";
import { S as Dt, A as Lt, i as ke } from "../chunks/sidebar.gC7qFE1O.js";
import {
  g as Ue,
  c as Ne,
  b as Xt,
  a as rt,
} from "../chunks/utils.CcZNOUuG.js";
import { a as at, m as Tt } from "../chunks/index.XqmEgky2.js";
import { p as it } from "../chunks/stores.DC9schWX.js";
import { p as At } from "../chunks/pfps.Cw2Zfgsv.js";
import { T as zt } from "../chunks/Title.YFDHANe9.js";
import { B as X } from "../chunks/Button.C-W2ZKx2.js";
import { d as be } from "../chunks/index.zzQyqAoa.js";
import { f as $e, a as xe, b as ot } from "../chunks/index.Bcc-xugq.js";
const Kt = !0,
  Ht = Kt,
  el =
    "" +
    new URL("../assets/infinity-loader.D5bJkepU.svg", import.meta.url).href;
function ft(r, e, t) {
  const l = r.slice();
  return (l[9] = e[t]), (l[11] = t), l;
}
function ct(r) {
  let e = r[1] ? "a" : "div",
    t,
    l = (r[1] ? "a" : "div") && Je(r);
  return {
    c() {
      l && l.c(), (t = me());
    },
    l(s) {
      l && l.l(s), (t = me());
    },
    m(s, a) {
      l && l.m(s, a), S(s, t, a);
    },
    p(s, a) {
      s[1],
        e
          ? fe(e, s[1] ? "a" : "div")
            ? (l.d(1),
              (l = Je(s)),
              (e = s[1] ? "a" : "div"),
              l.c(),
              l.m(t.parentNode, t))
            : l.p(s, a)
          : ((l = Je(s)),
            (e = s[1] ? "a" : "div"),
            l.c(),
            l.m(t.parentNode, t));
    },
    d(s) {
      s && p(t), l && l.d(s);
    },
  };
}
function Je(r) {
  let e,
    t,
    l,
    s = [{ href: r[1] }, { class: "mb-3 block" }],
    a = {};
  for (let n = 0; n < s.length; n += 1) a = Pe(a, s[n]);
  return {
    c() {
      (e = v(r[1] ? "a" : "div")), (t = v("h2")), (l = Ae(r[0])), this.h();
    },
    l(n) {
      e = b(n, ((r[1] ? "a" : "div") || "null").toUpperCase(), {
        href: !0,
        class: !0,
      });
      var i = N(e);
      t = b(i, "H2", { class: !0 });
      var c = N(t);
      (l = ze(c, r[0])), c.forEach(p), i.forEach(p), this.h();
    },
    h() {
      o(t, "class", "text-sm font-medium text-white"),
        Ge(r[1] ? "a" : "div")(e, a);
    },
    m(n, i) {
      S(n, e, i), m(e, t), m(t, l);
    },
    p(n, i) {
      i & 1 && Ze(l, n[0]),
        Ge(n[1] ? "a" : "div")(
          e,
          (a = Ue(s, [i & 2 && { href: n[1] }, { class: "mb-3 block" }]))
        );
    },
    d(n) {
      n && p(e);
    },
  };
}
function ut(r) {
  let e,
    t = "✨ NEW";
  return {
    c() {
      (e = v("div")), (e.textContent = t), this.h();
    },
    l(l) {
      (e = b(l, "DIV", { class: !0, "data-svelte-h": !0 })),
        W(e) !== "svelte-fovdsg" && (e.textContent = t),
        this.h();
    },
    h() {
      o(
        e,
        "class",
        "mr-2 w-fit rounded-[0.3125rem] bg-[#545ACD] px-1 text-[0.5rem]"
      );
    },
    m(l, s) {
      S(l, e, s);
    },
    d(l) {
      l && p(e);
    },
  };
}
function Ye(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i,
    c,
    u = (r[9].disabled ? `${r[9].name} (Soon)` : r[9].name) + "",
    d,
    $,
    x,
    g,
    f = r[9].isNew && !r[9].disabled && ut(),
    E = [
      { href: (g = r[9].disabled ? null : r[9].href) },
      {
        class:
          "flex items-center justify-between gap-2 text-sm text-[#B7C3D4] svelte-4jlpyk",
      },
    ],
    k = {};
  for (let h = 0; h < E.length; h += 1) k = Pe(k, E[h]);
  return {
    c() {
      (e = v(r[9].disabled ? "div" : "a")),
        (t = v("span")),
        (l = v("div")),
        (s = v("img")),
        (c = L()),
        (d = Ae(u)),
        ($ = L()),
        f && f.c(),
        (x = L()),
        this.h();
    },
    l(h) {
      e = b(h, ((r[9].disabled ? "div" : "a") || "null").toUpperCase(), {
        href: !0,
        class: !0,
      });
      var _ = N(e);
      t = b(_, "SPAN", { class: !0 });
      var M = N(t);
      l = b(M, "DIV", { class: !0 });
      var y = N(l);
      (s = b(y, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        y.forEach(p),
        (c = T(M)),
        (d = ze(M, u)),
        M.forEach(p),
        ($ = T(_)),
        f && f.l(_),
        (x = T(_)),
        _.forEach(p),
        this.h();
    },
    h() {
      Q(s.src, (a = r[9].icon)) || o(s, "src", a),
        o(s, "alt", (n = r[9].name)),
        o(
          s,
          "class",
          (i =
            tt(
              Ne(
                "h-[0.75rem] w-[0.75rem] object-contain ",
                !r[9].disabled &&
                  r[3][r[11]] &&
                  "[filter:brightness(0)_invert(1)]"
              )
            ) + " svelte-4jlpyk")
        ),
        o(s, "draggable", "false"),
        o(l, "class", "h-[0.75rem] w-[0.75rem]"),
        o(t, "class", "flex items-center gap-2"),
        Ge(r[9].disabled ? "div" : "a")(e, k),
        ve(e, "active", !r[9].disabled && r[3][r[11]]),
        ve(e, "opacity-50", r[9].disabled),
        ve(e, "cursor-not-allowed", r[9].disabled);
    },
    m(h, _) {
      S(h, e, _),
        m(e, t),
        m(t, l),
        m(l, s),
        m(t, c),
        m(t, d),
        m(e, $),
        f && f.m(e, null),
        m(e, x);
    },
    p(h, _) {
      _ & 4 && !Q(s.src, (a = h[9].icon)) && o(s, "src", a),
        _ & 4 && n !== (n = h[9].name) && o(s, "alt", n),
        _ & 12 &&
          i !==
            (i =
              tt(
                Ne(
                  "h-[0.75rem] w-[0.75rem] object-contain ",
                  !h[9].disabled &&
                    h[3][h[11]] &&
                    "[filter:brightness(0)_invert(1)]"
                )
              ) + " svelte-4jlpyk") &&
          o(s, "class", i),
        _ & 4 &&
          u !==
            (u = (h[9].disabled ? `${h[9].name} (Soon)` : h[9].name) + "") &&
          Ze(d, u),
        h[9].isNew && !h[9].disabled
          ? f || ((f = ut()), f.c(), f.m(e, x))
          : f && (f.d(1), (f = null)),
        Ge(h[9].disabled ? "div" : "a")(
          e,
          (k = Ue(E, [
            _ & 4 &&
              g !== (g = h[9].disabled ? null : h[9].href) && { href: g },
            {
              class:
                "flex items-center justify-between gap-2 text-sm text-[#B7C3D4] svelte-4jlpyk",
            },
          ]))
        ),
        ve(e, "active", !h[9].disabled && h[3][h[11]]),
        ve(e, "opacity-50", h[9].disabled),
        ve(e, "cursor-not-allowed", h[9].disabled);
    },
    d(h) {
      h && p(e), f && f.d();
    },
  };
}
function dt(r) {
  let e = r[9].disabled ? "div" : "a",
    t,
    l = (r[9].disabled ? "div" : "a") && Ye(r);
  return {
    c() {
      l && l.c(), (t = me());
    },
    l(s) {
      l && l.l(s), (t = me());
    },
    m(s, a) {
      l && l.m(s, a), S(s, t, a);
    },
    p(s, a) {
      s[9].disabled,
        e
          ? fe(e, s[9].disabled ? "div" : "a")
            ? (l.d(1),
              (l = Ye(s)),
              (e = s[9].disabled ? "div" : "a"),
              l.c(),
              l.m(t.parentNode, t))
            : l.p(s, a)
          : ((l = Ye(s)),
            (e = s[9].disabled ? "div" : "a"),
            l.c(),
            l.m(t.parentNode, t));
    },
    d(s) {
      s && p(t), l && l.d(s);
    },
  };
}
function tl(r) {
  let e,
    t,
    l,
    s = r[0] && ct(r),
    a = Ve(r[2]),
    n = [];
  for (let i = 0; i < a.length; i += 1) n[i] = dt(ft(r, a, i));
  return {
    c() {
      (e = v("div")), s && s.c(), (t = L()), (l = v("div"));
      for (let i = 0; i < n.length; i += 1) n[i].c();
      this.h();
    },
    l(i) {
      e = b(i, "DIV", { class: !0 });
      var c = N(e);
      s && s.l(c), (t = T(c)), (l = b(c, "DIV", { class: !0 }));
      var u = N(l);
      for (let d = 0; d < n.length; d += 1) n[d].l(u);
      u.forEach(p), c.forEach(p), this.h();
    },
    h() {
      o(l, "class", "flex flex-col gap-3"),
        o(e, "class", "sidebar-section xs:ml-9 ml-5 min-w-[13.25rem]");
    },
    m(i, c) {
      S(i, e, c), s && s.m(e, null), m(e, t), m(e, l);
      for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(l, null);
    },
    p(i, [c]) {
      if (
        (i[0]
          ? s
            ? s.p(i, c)
            : ((s = ct(i)), s.c(), s.m(e, t))
          : s && (s.d(1), (s = null)),
        c & 12)
      ) {
        a = Ve(i[2]);
        let u;
        for (u = 0; u < a.length; u += 1) {
          const d = ft(i, a, u);
          n[u] ? n[u].p(d, c) : ((n[u] = dt(d)), n[u].c(), n[u].m(l, null));
        }
        for (; u < n.length; u += 1) n[u].d(1);
        n.length = a.length;
      }
    },
    i: ee,
    o: ee,
    d(i) {
      i && p(e), s && s.d(), Xe(n, i);
    },
  };
}
function ll(r, e, t) {
  let l, s;
  J(r, at, (x) => t(4, (l = x))), J(r, it, (x) => t(5, (s = x)));
  let { title: a = "" } = e,
    { titleLink: n = null } = e,
    { items: i = [] } = e,
    c = i.map(() => !1);
  function u() {
    t(3, (c = i.map((x) => s.url.pathname.includes(x.href) || l === x.id)));
  }
  const d = it.subscribe(u),
    $ = at.subscribe(u);
  return (
    Te(u),
    It(() => {
      d(), $();
    }),
    (r.$$set = (x) => {
      "title" in x && t(0, (a = x.title)),
        "titleLink" in x && t(1, (n = x.titleLink)),
        "items" in x && t(2, (i = x.items));
    }),
    [a, n, i, c]
  );
}
class Ee extends pe {
  constructor(e) {
    super(), he(this, e, ll, tl, fe, { title: 0, titleLink: 1, items: 2 });
  }
}
function sl(r) {
  let e, t, l, s, a, n, i, c, u, d, $, x;
  return (
    (t = new Ee({ props: { items: Dt, title: "Starting with Nfinity" } })),
    (n = new Ee({
      props: { items: r[2], title: "NFINITY MODELS", titleLink: "/" },
    })),
    (d = new Ee({ props: { items: Lt, title: "Advanced" } })),
    {
      c() {
        (e = v("div")),
          P(t.$$.fragment),
          (l = L()),
          (s = v("div")),
          (a = L()),
          P(n.$$.fragment),
          (i = L()),
          (c = v("div")),
          (u = L()),
          P(d.$$.fragment),
          this.h();
      },
      l(g) {
        e = b(g, "DIV", { class: !0 });
        var f = N(e);
        Z(t.$$.fragment, f),
          (l = T(f)),
          (s = b(f, "DIV", { class: !0 })),
          N(s).forEach(p),
          (a = T(f)),
          Z(n.$$.fragment, f),
          (i = T(f)),
          (c = b(f, "DIV", { class: !0 })),
          N(c).forEach(p),
          (u = T(f)),
          Z(d.$$.fragment, f),
          f.forEach(p),
          this.h();
      },
      h() {
        o(
          s,
          "class",
          "mb-4 ml-9 mr-16 mt-9 h-[1px] w-[8.75rem] bg-white bg-opacity-30"
        ),
          o(
            c,
            "class",
            "mb-4 ml-9 mr-16 mt-9 h-[1px] w-[8.75rem] bg-white bg-opacity-30"
          ),
          o(
            e,
            "class",
            ($ = Ne(
              "relative mt-2 w-[15rem] transition-all duration-300",
              r[1] ? "translate-x-0" : "w-0 -translate-x-[15rem]",
              r[0]
            ))
          );
      },
      m(g, f) {
        S(g, e, f),
          G(t, e, null),
          m(e, l),
          m(e, s),
          m(e, a),
          G(n, e, null),
          m(e, i),
          m(e, c),
          m(e, u),
          G(d, e, null),
          (x = !0);
      },
      p(g, [f]) {
        const E = {};
        f & 4 && (E.items = g[2]),
          n.$set(E),
          (!x ||
            (f & 3 &&
              $ !==
                ($ = Ne(
                  "relative mt-2 w-[15rem] transition-all duration-300",
                  g[1] ? "translate-x-0" : "w-0 -translate-x-[15rem]",
                  g[0]
                )))) &&
            o(e, "class", $);
      },
      i(g) {
        x ||
          (A(t.$$.fragment, g),
          A(n.$$.fragment, g),
          A(d.$$.fragment, g),
          (x = !0));
      },
      o(g) {
        H(t.$$.fragment, g), H(n.$$.fragment, g), H(d.$$.fragment, g), (x = !1);
      },
      d(g) {
        g && p(e), F(t), F(n), F(d);
      },
    }
  );
}
function nl(r, e, t) {
  let l, s;
  J(r, ke, (n) => t(1, (l = n))), J(r, Tt, (n) => t(2, (s = n)));
  let { className: a = "" } = e;
  return (
    Te(() => {
      window.location.pathname.includes("/models/") && Fe(ke, (l = !1), l);
    }),
    Re(({ to: n }) => {
      n != null && n.url.pathname.includes("/models/") && Fe(ke, (l = !1), l);
    }),
    (r.$$set = (n) => {
      "className" in n && t(0, (a = n.className));
    }),
    [a, l, s]
  );
}
class rl extends pe {
  constructor(e) {
    super(), he(this, e, nl, sl, fe, { className: 0 });
  }
}
const We =
  "data:image/svg+xml,%3csvg%20width='165'%20height='17'%20viewBox='0%200%20165%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.94424%202.771H10.5923V15.2957H8.33787L2.66597%207.4767V15.2957H0V2.771H2.45126L7.94424%2010.4111V2.771ZM26.1221%205.29383H21.3627V8.0493H25.6569V10.5005H21.3627V15.2957H18.6431V2.771H26.1221V5.29383ZM33.4071%2015.2957V2.771H36.1268V15.2957H33.4071ZM52.1141%202.771H54.7622V15.2957H52.5078L46.8358%207.4767V15.2957H44.1699V2.771H46.6211L52.1141%2010.4111V2.771ZM62.813%2015.2957V2.771H65.5326V15.2957H62.813ZM82.2177%202.771V5.29383H78.7287V15.2957H76.0091V5.29383H72.5379V2.771H82.2177ZM99.6446%202.771L95.2432%2010.2321V15.2957H92.4519V10.2143L88.0862%202.771H90.9669L93.8654%207.7809L96.764%202.771H99.6446ZM151.872%2015.2957L150.995%2012.916H146.003L145.144%2015.2957H142.281L147.184%202.771H149.742L154.806%2015.2957H151.872ZM148.49%206.0811L146.862%2010.5542H150.136L148.49%206.0811ZM161.583%2015.2957V2.771H164.303V15.2957H161.583Z'%20fill='white'/%3e%3cpath%20d='M119.042%203.80257C118.018%202.28477%20116.526%201.14238%20114.794%200.548607C113.062%20-0.0451629%20111.183%20-0.0579331%20109.443%200.512237C107.703%201.0824%20106.196%202.20441%20105.151%203.70815C104.106%205.21189%20103.58%207.01535%20103.652%208.84515C103.725%2010.6748%20104.392%2012.4311%20105.552%2013.8476C106.713%2015.2641%20108.303%2016.2635%20110.083%2016.6945C111.863%2017.1254%20113.735%2016.9643%20115.415%2016.2355C117.094%2015.5068%20118.491%2014.2502%20119.392%2012.6562L116.074%2010.7798C115.581%2011.652%20114.817%2012.3396%20113.898%2012.7384C112.978%2013.1371%20111.954%2013.2253%20110.98%2012.9895C110.006%2012.7537%20109.136%2012.2068%20108.501%2011.4317C107.866%2010.6566%20107.501%209.69565%20107.461%208.69445C107.422%207.69325%20107.71%206.70635%20108.281%205.88355C108.853%205.06072%20109.678%204.44677%20110.63%204.13479C111.582%203.8228%20112.61%203.82979%20113.558%204.15469C114.506%204.47959%20115.322%205.10469%20115.882%205.93525L119.042%203.80257Z'%20fill='url(%23paint0_radial_882_777)'/%3e%3cpath%20d='M120.219%204.68712C121.044%203.03158%20122.388%201.69195%20124.047%200.873405C125.705%200.0548655%20127.587%20-0.197465%20129.402%200.155075C131.218%200.507615%20132.868%201.44559%20134.099%202.82532C135.331%204.20506%20136.076%205.95047%20136.221%207.79427C136.366%209.63807%20135.903%2011.4786%20134.902%2013.034C133.902%2014.5893%20132.419%2015.7737%20130.68%2016.4058C128.942%2017.0379%20127.045%2017.0827%20125.279%2016.5336C123.513%2015.9844%20121.975%2014.8715%20120.902%2013.3652L124.022%2011.142C124.609%2011.966%20125.45%2012.5747%20126.416%2012.8751C127.382%2013.1755%20128.42%2013.151%20129.371%2012.8052C130.322%2012.4595%20131.133%2011.8116%20131.68%2010.9608C132.228%2010.1101%20132.481%209.10327%20132.402%208.09477C132.323%207.08617%20131.915%206.13137%20131.241%205.3767C130.568%204.62198%20129.665%204.10892%20128.672%203.91608C127.679%203.72324%20126.65%203.86126%20125.743%204.309C124.835%204.75674%20124.1%205.48952%20123.649%206.39507L120.219%204.68712Z'%20fill='url(%23paint1_radial_882_777)'/%3e%3cpath%20d='M118.949%203.65408L115.771%205.80859L120.981%2013.4965L124.16%2011.3419L118.949%203.65408Z'%20fill='white'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_882_777'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(112.11%208.52135)%20rotate(22.6293)%20scale(8.91671%208.91671)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.475'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_882_777'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(127.743%208.44926)%20rotate(-156.757)%20scale(9.10388%209.10388)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.475'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
function mt(r, e, t) {
  const l = r.slice();
  return (l[6] = e[t]), l;
}
function al(r) {
  let e;
  return {
    c() {
      (e = v("div")), this.h();
    },
    l(t) {
      (e = b(t, "DIV", { class: !0 })), N(e).forEach(p), this.h();
    },
    h() {
      o(
        e,
        "class",
        "skeleton h-full w-full animate-pulse bg-[hsl(240,5.9%,10%)] svelte-wljvyv"
      );
    },
    m(t, l) {
      S(t, e, l);
    },
    p: ee,
    d(t) {
      t && p(e);
    },
  };
}
function il(r) {
  let e, t;
  return {
    c() {
      (e = v("img")), this.h();
    },
    l(l) {
      (e = b(l, "IMG", { src: !0, class: !0, alt: !0, draggable: !0 })),
        this.h();
    },
    h() {
      Q(e.src, (t = r[6].pfp.src)) || o(e, "src", t),
        o(e, "class", "h-full w-full object-cover"),
        o(e, "alt", ""),
        o(e, "draggable", "false");
    },
    m(l, s) {
      S(l, e, s);
    },
    p(l, s) {
      s & 1 && !Q(e.src, (t = l[6].pfp.src)) && o(e, "src", t);
    },
    d(l) {
      l && p(e);
    },
  };
}
function pt(r) {
  let e, t;
  function l(n, i) {
    return n[6].pfp ? il : al;
  }
  let s = l(r),
    a = s(r);
  return {
    c() {
      (e = v("div")), a.c(), (t = L()), this.h();
    },
    l(n) {
      e = b(n, "DIV", { class: !0, style: !0 });
      var i = N(e);
      a.l(i), (t = T(i)), i.forEach(p), this.h();
    },
    h() {
      o(
        e,
        "class",
        "circle z-1 absolute animate-[float_ease-in-out_infinite] overflow-hidden rounded-full shadow-[0_0.25rem_1.125rem_0_#006fb9] svelte-wljvyv"
      ),
        B(e, "bottom", r[6].bottom),
        B(e, "left", r[6].left),
        B(e, "width", r[6].size * r[1] + "px"),
        B(e, "height", r[6].size * r[1] + "px"),
        B(e, "animation-duration", (r[6].duration || 3) + "s"),
        B(
          e,
          "--x-offset",
          (r[6].xOffset ? parseFloat(r[6].xOffset) / 16 : 0) + "rem"
        ),
        B(
          e,
          "--y-offset",
          (r[6].yOffset ? parseFloat(r[6].yOffset) / 16 : 0) + "rem"
        );
    },
    m(n, i) {
      S(n, e, i), a.m(e, null), m(e, t);
    },
    p(n, i) {
      s === (s = l(n)) && a
        ? a.p(n, i)
        : (a.d(1), (a = s(n)), a && (a.c(), a.m(e, t))),
        i & 1 && B(e, "bottom", n[6].bottom),
        i & 1 && B(e, "left", n[6].left),
        i & 3 && B(e, "width", n[6].size * n[1] + "px"),
        i & 3 && B(e, "height", n[6].size * n[1] + "px"),
        i & 1 && B(e, "animation-duration", (n[6].duration || 3) + "s"),
        i & 1 &&
          B(
            e,
            "--x-offset",
            (n[6].xOffset ? parseFloat(n[6].xOffset) / 16 : 0) + "rem"
          ),
        i & 1 &&
          B(
            e,
            "--y-offset",
            (n[6].yOffset ? parseFloat(n[6].yOffset) / 16 : 0) + "rem"
          );
    },
    d(n) {
      n && p(e), a.d();
    },
  };
}
function ol(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i,
    c = "Setting a new standard in both technology and community.",
    u,
    d,
    $,
    x,
    g,
    f,
    E,
    k,
    h,
    _,
    M,
    y,
    C,
    w = `<img src="${We}" alt="Logo" class="w-[100px] object-contain sm:w-[200px] lg:h-7 lg:w-[271px]" draggable="false"/> <a href="/" class="text-white">Terms &amp; Conditions</a>`,
    V;
  (a = new zt({ props: { text: "Become A Part Of Nfinity" } })),
    ($ = new X({
      props: {
        text: "Join our Telegram",
        variant: "textGradient",
        href: "https://t.me/nfinityai_erc20",
        className:
          "font-avantGarde text-[1.125rem] font-bold h-[3.6875rem] w-[12.5rem] md:w-full",
      },
    })),
    (g = new X({
      props: {
        text: "Follow us on X",
        variant: "textGradient",
        href: "https://x.com/nfinityai_erc20",
        className:
          "font-avantGarde text-[1.125rem] font-bold h-[3.6875rem] w-[12.5rem] md:w-full",
      },
    })),
    (E = new X({
      props: {
        text: "Buy on Uniswap",
        variant: "textGradient",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0xcomingsoon",
        className:
          "font-avantGarde text-[1.125rem] font-bold h-[3.6875rem] w-[12.5rem] md:w-full",
      },
    }));
  let j = Ve(r[0]),
    D = [];
  for (let I = 0; I < j.length; I += 1) D[I] = pt(mt(r, j, I));
  return {
    c() {
      (e = v("footer")),
        (t = v("div")),
        (l = v("div")),
        (s = v("div")),
        P(a.$$.fragment),
        (n = L()),
        (i = v("p")),
        (i.textContent = c),
        (u = L()),
        (d = v("div")),
        P($.$$.fragment),
        (x = L()),
        P(g.$$.fragment),
        (f = L()),
        P(E.$$.fragment),
        (k = L()),
        (h = v("div"));
      for (let I = 0; I < D.length; I += 1) D[I].c();
      (_ = L()),
        (M = v("div")),
        (y = L()),
        (C = v("div")),
        (C.innerHTML = w),
        this.h();
    },
    l(I) {
      e = b(I, "FOOTER", { class: !0 });
      var z = N(e);
      t = b(z, "DIV", { class: !0 });
      var O = N(t);
      l = b(O, "DIV", { class: !0 });
      var U = N(l);
      s = b(U, "DIV", { class: !0 });
      var q = N(s);
      Z(a.$$.fragment, q),
        (n = T(q)),
        (i = b(q, "P", { class: !0, "data-svelte-h": !0 })),
        W(i) !== "svelte-omezwo" && (i.textContent = c),
        q.forEach(p),
        (u = T(U)),
        (d = b(U, "DIV", { class: !0 }));
      var Y = N(d);
      Z($.$$.fragment, Y),
        (x = T(Y)),
        Z(g.$$.fragment, Y),
        (f = T(Y)),
        Z(E.$$.fragment, Y),
        Y.forEach(p),
        (k = T(U)),
        (h = b(U, "DIV", { class: !0 }));
      var ae = N(h);
      for (let ie = 0; ie < D.length; ie += 1) D[ie].l(ae);
      ae.forEach(p),
        U.forEach(p),
        O.forEach(p),
        (_ = T(z)),
        (M = b(z, "DIV", { class: !0 })),
        N(M).forEach(p),
        (y = T(z)),
        (C = b(z, "DIV", { class: !0, "data-svelte-h": !0 })),
        W(C) !== "svelte-10873wa" && (C.innerHTML = w),
        z.forEach(p),
        this.h();
    },
    h() {
      o(
        i,
        "class",
        "font-avantGarde mt-[1rem] text-[0.725rem] font-bold text-white sm:mt-[1.5rem] sm:text-[0.825rem] md:mt-[1.8rem] md:text-[0.925rem] lg:mt-[2rem] lg:text-[1rem]"
      ),
        o(s, "class", "flex flex-col items-center text-center"),
        o(
          d,
          "class",
          "relative z-10 mx-auto mt-16 flex flex-wrap justify-center gap-5 md:w-[40rem] md:flex-row md:flex-nowrap lg:w-[48.5625rem]"
        ),
        o(h, "class", "relative h-[16.5rem] w-full"),
        o(
          l,
          "class",
          "relative z-10 mx-auto h-full max-w-[1440px] px-12 md:px-16 lg:px-24"
        ),
        o(
          t,
          "class",
          "relative pt-48 before:absolute before:inset-0 before:z-0 before:bg-[url('/footer-bg.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-35 before:content-['']"
        ),
        o(M, "class", "h-px w-full bg-white bg-opacity-40 px-16"),
        o(
          C,
          "class",
          "flex h-20 items-center justify-between px-8 sm:px-12 lg:px-16"
        ),
        o(e, "class", "wrapper");
    },
    m(I, z) {
      S(I, e, z),
        m(e, t),
        m(t, l),
        m(l, s),
        G(a, s, null),
        m(s, n),
        m(s, i),
        m(l, u),
        m(l, d),
        G($, d, null),
        m(d, x),
        G(g, d, null),
        m(d, f),
        G(E, d, null),
        m(l, k),
        m(l, h);
      for (let O = 0; O < D.length; O += 1) D[O] && D[O].m(h, null);
      m(e, _), m(e, M), m(e, y), m(e, C), (V = !0);
    },
    p(I, [z]) {
      if (z & 3) {
        j = Ve(I[0]);
        let O;
        for (O = 0; O < j.length; O += 1) {
          const U = mt(I, j, O);
          D[O] ? D[O].p(U, z) : ((D[O] = pt(U)), D[O].c(), D[O].m(h, null));
        }
        for (; O < D.length; O += 1) D[O].d(1);
        D.length = j.length;
      }
    },
    i(I) {
      V ||
        (A(a.$$.fragment, I),
        A($.$$.fragment, I),
        A(g.$$.fragment, I),
        A(E.$$.fragment, I),
        (V = !0));
    },
    o(I) {
      H(a.$$.fragment, I),
        H($.$$.fragment, I),
        H(g.$$.fragment, I),
        H(E.$$.fragment, I),
        (V = !1);
    },
    d(I) {
      I && p(e), F(a), F($), F(g), F(E), Xe(D, I);
    },
  };
}
function fl(r, e, t) {
  let l,
    s = [
      { size: 86, bottom: "83.71%", left: "0" },
      { size: 76, bottom: "18.18%", left: "9.1%" },
      { size: 73, bottom: "50%", left: "23%" },
      { size: 118, bottom: "22.73%", left: "39.3%" },
      { size: 99, bottom: "22.73%", left: "62%" },
      { size: 90, bottom: "53.4%", left: "78%" },
      { size: 85, bottom: "100%", left: "89%" },
      { size: 84, bottom: "35.6%", left: "93%" },
      { size: 62, bottom: "116.29%", left: "11%" },
    ],
    a,
    n = [],
    i = new Set();
  const c = () => {
    i.size >= n.length && i.clear();
    const u = n.filter(($) => !s.some((x) => x.pfp === $.src) && !i.has($.src)),
      d = u[Math.floor(Math.random() * u.length)];
    return d && i.add(d.src), d;
  };
  return (
    Te(async () => {
      (n = await Promise.all(
        At.map(
          (d) =>
            new Promise(($, x) => {
              const g = new Image();
              (g.onload = () => $(g)), (g.onerror = x), (g.src = `/PFPs/${d}`);
            })
        )
      )),
        t(
          0,
          (s = s.map((d) => ({
            ...d,
            updateInterval: Math.random() * 1e3 + 1e3,
            duration: 3 + Math.random() * 2,
            xOffset: (Math.random() * 20 - 10).toFixed(2),
            yOffset: (Math.random() * 20 - 10).toFixed(2),
          })))
        );
      const u = () => {
        t(2, (a = window.innerWidth));
      };
      return (
        window.addEventListener("resize", u),
        u(),
        s.forEach((d, $) => {
          setInterval(() => {
            t(0, (s[$] = { ...d, pfp: c() }), s);
          }, d.updateInterval);
        }),
        () => {
          window.removeEventListener("resize", u);
        }
      );
    }),
    (r.$$.update = () => {
      r.$$.dirty & 4 && t(1, (l = Math.max(Math.min(a / 1440, 1), 0.7)));
    }),
    [s, l, a]
  );
}
class cl extends pe {
  constructor(e) {
    super(), he(this, e, fl, ol, fe, {});
  }
}
function ht(r) {
  let e,
    t,
    l = "Your tier:",
    s,
    a,
    n,
    i,
    c,
    u,
    d,
    $ = r[2].name + "",
    x;
  return {
    c() {
      (e = v("a")),
        (t = v("span")),
        (t.textContent = l),
        (s = L()),
        (a = v("div")),
        (n = v("div")),
        (i = v("img")),
        (u = L()),
        (d = v("span")),
        (x = Ae($)),
        this.h();
    },
    l(g) {
      e = b(g, "A", { class: !0, href: !0 });
      var f = N(e);
      (t = b(f, "SPAN", { class: !0, "data-svelte-h": !0 })),
        W(t) !== "svelte-huo7c5" && (t.textContent = l),
        (s = T(f)),
        (a = b(f, "DIV", { class: !0 }));
      var E = N(a);
      n = b(E, "DIV", { class: !0 });
      var k = N(n);
      (i = b(k, "IMG", { src: !0, alt: !0, class: !0 })),
        k.forEach(p),
        (u = T(E)),
        (d = b(E, "SPAN", { class: !0 }));
      var h = N(d);
      (x = ze(h, $)), h.forEach(p), E.forEach(p), f.forEach(p), this.h();
    },
    h() {
      o(t, "class", "text-left"),
        Q(i.src, (c = `/tiers/${r[2].name}.png`)) || o(i, "src", c),
        o(i, "alt", ""),
        o(i, "class", "h-full -translate-y-[-15%] scale-[2] object-contain"),
        o(n, "class", "relative h-5"),
        o(d, "class", "text-left"),
        o(a, "class", "flex items-center gap-2"),
        o(
          e,
          "class",
          "s:gap-10 xs:gap-8 flex w-full items-center justify-between gap-2"
        ),
        o(e, "href", "/credits");
    },
    m(g, f) {
      S(g, e, f),
        m(e, t),
        m(e, s),
        m(e, a),
        m(a, n),
        m(n, i),
        m(a, u),
        m(a, d),
        m(d, x);
    },
    p(g, f) {
      f & 4 && !Q(i.src, (c = `/tiers/${g[2].name}.png`)) && o(i, "src", c),
        f & 4 && $ !== ($ = g[2].name + "") && Ze(x, $);
    },
    d(g) {
      g && p(e);
    },
  };
}
function ul(r) {
  let e;
  return {
    c() {
      e = Ae("Logout");
    },
    l(t) {
      e = ze(t, "Logout");
    },
    m(t, l) {
      S(t, e, l);
    },
    d(t) {
      t && p(e);
    },
  };
}
function dl(r) {
  let e,
    t,
    l = "Account info",
    s,
    a,
    n,
    i,
    c,
    u,
    d,
    $,
    x,
    g,
    f,
    E,
    k,
    h,
    _ = "Current balance:",
    M,
    y,
    C,
    w,
    V,
    j = "Current wallet:",
    D,
    I,
    z,
    O,
    U,
    q,
    Y,
    ae,
    ie,
    oe,
    qe,
    et;
  $ = new st({
    props: { icon: "mdi:camera", class: "text-white", width: "15" },
  });
  let te = r[2] && ht(r);
  return (
    (y = new Be({ props: { amount: r[3], withTruncate: !1 } })),
    (U = new st({
      props: {
        icon: "mdi:content-copy",
        width: "16",
        class: "transition-transform active:scale-90",
      },
    })),
    (Y = new X({
      props: {
        className: "mt-4 w-full bg-red-500",
        $$slots: { default: [ul] },
        $$scope: { ctx: r },
      },
    })),
    Y.$on("click", r[9]),
    {
      c() {
        (e = v("div")),
          (t = v("h2")),
          (t.textContent = l),
          (s = L()),
          (a = v("div")),
          (n = v("div")),
          (i = v("img")),
          (u = L()),
          (d = v("label")),
          P($.$$.fragment),
          (x = L()),
          (g = v("input")),
          (f = L()),
          te && te.c(),
          (E = L()),
          (k = v("div")),
          (h = v("span")),
          (h.textContent = _),
          (M = L()),
          P(y.$$.fragment),
          (C = L()),
          (w = v("button")),
          (V = v("span")),
          (V.textContent = j),
          (D = L()),
          (I = v("span")),
          (z = Ae(r[5])),
          (O = L()),
          P(U.$$.fragment),
          (q = L()),
          P(Y.$$.fragment),
          this.h();
      },
      l(R) {
        e = b(R, "DIV", { class: !0, style: !0 });
        var K = N(e);
        (t = b(K, "H2", { class: !0, "data-svelte-h": !0 })),
          W(t) !== "svelte-l3kihw" && (t.textContent = l),
          (s = T(K)),
          (a = b(K, "DIV", { class: !0 }));
        var re = N(a);
        n = b(re, "DIV", { class: !0 });
        var we = N(n);
        (i = b(we, "IMG", { src: !0, alt: !0, class: !0 })),
          (u = T(we)),
          (d = b(we, "LABEL", { class: !0 }));
        var Ce = N(d);
        Z($.$$.fragment, Ce),
          (x = T(Ce)),
          (g = b(Ce, "INPUT", { type: !0, accept: !0, class: !0 })),
          Ce.forEach(p),
          we.forEach(p),
          (f = T(re)),
          te && te.l(re),
          (E = T(re)),
          (k = b(re, "DIV", { class: !0 }));
        var ye = N(k);
        (h = b(ye, "SPAN", { "data-svelte-h": !0 })),
          W(h) !== "svelte-3dlwjb" && (h.textContent = _),
          (M = T(ye)),
          Z(y.$$.fragment, ye),
          ye.forEach(p),
          (C = T(re)),
          (w = b(re, "BUTTON", { class: !0 }));
        var Se = N(w);
        (V = b(Se, "SPAN", { "data-svelte-h": !0 })),
          W(V) !== "svelte-1r6br1e" && (V.textContent = j),
          (D = T(Se)),
          (I = b(Se, "SPAN", { class: !0 }));
        var Oe = N(I);
        (z = ze(Oe, r[5])),
          (O = T(Oe)),
          Z(U.$$.fragment, Oe),
          Oe.forEach(p),
          Se.forEach(p),
          (q = T(re)),
          Z(Y.$$.fragment, re),
          re.forEach(p),
          K.forEach(p),
          this.h();
      },
      h() {
        var R, K;
        o(t, "class", "mb-4 text-center text-[1.5rem] leading-[1.3em]"),
          Q(
            i.src,
            (c =
              (K = (R = r[1]) == null ? void 0 : R.user) == null
                ? void 0
                : K.avatar_url)
          ) || o(i, "src", c),
          o(i, "alt", "avatar"),
          o(
            i,
            "class",
            "h-24 w-24 rounded-full object-cover outline outline-1 outline-white"
          ),
          o(g, "type", "file"),
          o(g, "accept", "image/jpeg, image/png, image/webp, image/gif"),
          o(g, "class", "hidden"),
          o(
            d,
            "class",
            "absolute bottom-0 right-0 cursor-pointer rounded-full bg-gray-800 p-2 hover:bg-gray-700"
          ),
          o(n, "class", "relative"),
          o(k, "class", "flex w-full items-center justify-between gap-2"),
          o(I, "class", "flex items-center gap-1"),
          o(w, "class", "flex w-full items-center justify-between gap-2"),
          o(
            a,
            "class",
            "xs:text-[1rem] flex flex-col items-center gap-7 text-[0.875rem]"
          ),
          o(
            e,
            "class",
            (ae =
              "mx-auto max-w-sm py-3 transition-all duration-300 " +
              (r[0] < 1 ? "absolute inset-0" : "relative"))
          ),
          B(e, "opacity", r[0]);
      },
      m(R, K) {
        S(R, e, K),
          m(e, t),
          m(e, s),
          m(e, a),
          m(a, n),
          m(n, i),
          m(n, u),
          m(n, d),
          G($, d, null),
          m(d, x),
          m(d, g),
          m(a, f),
          te && te.m(a, null),
          m(a, E),
          m(a, k),
          m(k, h),
          m(k, M),
          G(y, k, null),
          m(a, C),
          m(a, w),
          m(w, V),
          m(w, D),
          m(w, I),
          m(I, z),
          m(I, O),
          G(U, I, null),
          m(a, q),
          G(Y, a, null),
          (oe = !0),
          qe ||
            ((et = [ne(g, "change", r[8]), ne(w, "click", r[10])]), (qe = !0));
      },
      p(R, [K]) {
        var Ce, ye;
        (!oe ||
          (K & 2 &&
            !Q(
              i.src,
              (c =
                (ye = (Ce = R[1]) == null ? void 0 : Ce.user) == null
                  ? void 0
                  : ye.avatar_url)
            ))) &&
          o(i, "src", c),
          R[2]
            ? te
              ? te.p(R, K)
              : ((te = ht(R)), te.c(), te.m(a, E))
            : te && (te.d(1), (te = null));
        const re = {};
        K & 8 && (re.amount = R[3]), y.$set(re), (!oe || K & 32) && Ze(z, R[5]);
        const we = {};
        K & 2048 && (we.$$scope = { dirty: K, ctx: R }),
          Y.$set(we),
          (!oe ||
            (K & 1 &&
              ae !==
                (ae =
                  "mx-auto max-w-sm py-3 transition-all duration-300 " +
                  (R[0] < 1 ? "absolute inset-0" : "relative")))) &&
            o(e, "class", ae),
          (!oe || K & 1) && B(e, "opacity", R[0]);
      },
      i(R) {
        oe ||
          (A($.$$.fragment, R),
          A(y.$$.fragment, R),
          A(U.$$.fragment, R),
          A(Y.$$.fragment, R),
          ie && ie.end(1),
          (oe = !0));
      },
      o(R) {
        H($.$$.fragment, R),
          H(y.$$.fragment, R),
          H(U.$$.fragment, R),
          H(Y.$$.fragment, R),
          R && (ie = Ie(e, $e, { duration: 200 })),
          (oe = !1);
      },
      d(R) {
        R && p(e),
          F($),
          te && te.d(),
          F(y),
          F(U),
          F(Y),
          R && ie && ie.end(),
          (qe = !1),
          He(et);
      },
    }
  );
}
function ml(r, e, t) {
  let l, s, a, n, i;
  J(r, de, (f) => t(1, (s = f))), J(r, se, (f) => t(4, (n = f)));
  let { opacity: c = 1 } = e;
  const u = be(de, (f) => Number(f.credits).toFixed(2));
  J(r, u, (f) => t(3, (a = f)));
  const d = be(se, (f) =>
    f.address ? `${f.address.slice(0, 6)}...${f.address.slice(-6)}` : ""
  );
  J(r, d, (f) => t(5, (i = f)));
  const $ = async (f) => {
      const E = f.target.files[0];
      if (E)
        try {
          const k = new FormData();
          k.append("file", E);
          const h = await fetch("/api/user/avatar", {
            method: "POST",
            body: k,
          });
          if (!h.ok) throw new Error("Upload failed");
          const _ = await h.json();
          console.log("dataUpload", _), de.updateUserAvatar(_.avatar_url);
        } catch (k) {
          console.error("Avatar upload error:", k);
        }
    },
    x = () => {
      de.clearSession(), se.disconnect(), qt("*"), De();
    },
    g = () => navigator.clipboard.writeText(n.address);
  return (
    (r.$$set = (f) => {
      "opacity" in f && t(0, (c = f.opacity));
    }),
    (r.$$.update = () => {
      var f;
      r.$$.dirty & 2 &&
        t(
          2,
          (l =
            ((f = s == null ? void 0 : s.user) == null ? void 0 : f.tier) ||
            null)
        );
    }),
    [c, s, l, a, n, i, u, d, $, x, g]
  );
}
class St extends pe {
  constructor(e) {
    super(), he(this, e, ml, dl, fe, { opacity: 0 });
  }
}
const Ot =
    "data:image/svg+xml,%3csvg%20width='9'%20height='5'%20viewBox='0%200%209%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.96365%200L4.43365%203.24381L0.882326%200.0204763L0%200.86749L4.41236%205L8.88889%200.887966L7.96365%200Z'%20fill='white'/%3e%3c/svg%3e",
  jt =
    "data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%209.5C5%2010.8092%203.87813%2011.875%202.5%2011.875C1.12187%2011.875%200%2010.8092%200%209.5C0%208.19077%201.12187%207.125%202.5%207.125C3.87813%207.125%205%208.19077%205%209.5ZM10%2014.25C8.62187%2014.25%207.5%2015.3158%207.5%2016.625C7.5%2017.9342%208.62187%2019%2010%2019C11.3781%2019%2012.5%2017.9342%2012.5%2016.625C12.5%2015.3158%2011.3781%2014.25%2010%2014.25ZM2.5%2014.25C1.12187%2014.25%200%2015.3158%200%2016.625C0%2017.9342%201.12187%2019%202.5%2019C3.87813%2019%205%2017.9342%205%2016.625C5%2015.3158%203.87813%2014.25%202.5%2014.25ZM17.5%204.75C18.8781%204.75%2020%203.68423%2020%202.375C20%201.06577%2018.8781%200%2017.5%200C16.1219%200%2015%201.06577%2015%202.375C15%203.68423%2016.1219%204.75%2017.5%204.75ZM2.5%200C1.12187%200%200%201.06577%200%202.375C0%203.68423%201.12187%204.75%202.5%204.75C3.87813%204.75%205%203.68423%205%202.375C5%201.06577%203.87813%200%202.5%200ZM17.5%2014.25C16.1219%2014.25%2015%2015.3158%2015%2016.625C15%2017.9342%2016.1219%2019%2017.5%2019C18.8781%2019%2020%2017.9342%2020%2016.625C20%2015.3158%2018.8781%2014.25%2017.5%2014.25ZM17.5%207.125C16.1219%207.125%2015%208.19077%2015%209.5C15%2010.8092%2016.1219%2011.875%2017.5%2011.875C18.8781%2011.875%2020%2010.8092%2020%209.5C20%208.19077%2018.8781%207.125%2017.5%207.125ZM10%207.125C8.62187%207.125%207.5%208.19077%207.5%209.5C7.5%2010.8092%208.62187%2011.875%2010%2011.875C11.3781%2011.875%2012.5%2010.8092%2012.5%209.5C12.5%208.19077%2011.3781%207.125%2010%207.125ZM10%200C8.62187%200%207.5%201.06577%207.5%202.375C7.5%203.68423%208.62187%204.75%2010%204.75C11.3781%204.75%2012.5%203.68423%2012.5%202.375C12.5%201.06577%2011.3781%200%2010%200Z'%20fill='white'/%3e%3c/svg%3e",
  Pt =
    "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.09375%2017.8084C1.38831%2017.8084%200%2019.1219%200%2020.7355C0%2022.349%201.38831%2023.6625%203.09375%2023.6625C4.79919%2023.6625%206.1875%2022.349%206.1875%2020.7355C6.1875%2019.1219%204.79919%2017.8084%203.09375%2017.8084ZM21.6563%206.1002C23.3617%206.1002%2024.75%204.7867%2024.75%203.17315C24.75%201.5596%2023.3617%200.246094%2021.6563%200.246094C19.9508%200.246094%2018.5625%201.5596%2018.5625%203.17315C18.5625%204.7867%2019.9508%206.1002%2021.6563%206.1002ZM3.09375%200.246094C1.38831%200.246094%200%201.5596%200%203.17315C0%204.7867%201.38831%206.1002%203.09375%206.1002C4.79919%206.1002%206.1875%204.7867%206.1875%203.17315C6.1875%201.5596%204.79919%200.246094%203.09375%200.246094ZM21.6563%2017.8084C19.9508%2017.8084%2018.5625%2019.1219%2018.5625%2020.7355C18.5625%2022.349%2019.9508%2023.6625%2021.6563%2023.6625C23.3617%2023.6625%2024.75%2022.349%2024.75%2020.7355C24.75%2019.1219%2023.3617%2017.8084%2021.6563%2017.8084ZM12.375%209.02726C10.6696%209.02726%209.28125%2010.3408%209.28125%2011.9543C9.28125%2013.5679%2010.6696%2014.8814%2012.375%2014.8814C14.0804%2014.8814%2015.4688%2013.5679%2015.4688%2011.9543C15.4688%2010.3408%2014.0804%209.02726%2012.375%209.02726Z'%20fill='white'/%3e%3c/svg%3e";
function pl(r) {
  let e, t;
  return (
    (e = new X({
      props: {
        className: "px-3",
        $$slots: { default: [gl] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("click", r[18]),
    {
      c() {
        P(e.$$.fragment);
      },
      l(l) {
        Z(e.$$.fragment, l);
      },
      m(l, s) {
        G(e, l, s), (t = !0);
      },
      p(l, s) {
        const a = {};
        s & 524288 && (a.$$scope = { dirty: s, ctx: l }), e.$set(a);
      },
      i(l) {
        t || (A(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        H(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        F(e, l);
      },
    }
  );
}
function hl(r) {
  let e, t, l, s, a;
  return (
    (t = new X({
      props: {
        disabled: !0,
        className: "px-3",
        $$slots: { default: [vl] },
        $$scope: { ctx: r },
      },
    })),
    (s = new X({
      props: {
        variant: "outlined",
        type: "button",
        className: "px-3",
        $$slots: { default: [bl] },
        $$scope: { ctx: r },
      },
    })),
    s.$on("click", r[17]),
    {
      c() {
        (e = v("div")), P(t.$$.fragment), (l = L()), P(s.$$.fragment), this.h();
      },
      l(n) {
        e = b(n, "DIV", { class: !0 });
        var i = N(e);
        Z(t.$$.fragment, i),
          (l = T(i)),
          Z(s.$$.fragment, i),
          i.forEach(p),
          this.h();
      },
      h() {
        o(e, "class", "grid grid-cols-2 gap-2");
      },
      m(n, i) {
        S(n, e, i), G(t, e, null), m(e, l), G(s, e, null), (a = !0);
      },
      p(n, i) {
        const c = {};
        i & 524288 && (c.$$scope = { dirty: i, ctx: n }), t.$set(c);
        const u = {};
        i & 524288 && (u.$$scope = { dirty: i, ctx: n }), s.$set(u);
      },
      i(n) {
        a || (A(t.$$.fragment, n), A(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        H(t.$$.fragment, n), H(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && p(e), F(t), F(s);
      },
    }
  );
}
function _l(r) {
  let e, t, l, s;
  const a = [wl, $l],
    n = [];
  function i(c, u) {
    return c[1].isAuthenticated ? 0 : 1;
  }
  return (
    (e = i(r)),
    (t = n[e] = a[e](r)),
    {
      c() {
        t.c(), (l = me());
      },
      l(c) {
        t.l(c), (l = me());
      },
      m(c, u) {
        n[e].m(c, u), S(c, l, u), (s = !0);
      },
      p(c, u) {
        let d = e;
        (e = i(c)),
          e === d
            ? n[e].p(c, u)
            : (ce(),
              H(n[d], 1, 1, () => {
                n[d] = null;
              }),
              ue(),
              (t = n[e]),
              t ? t.p(c, u) : ((t = n[e] = a[e](c)), t.c()),
              A(t, 1),
              t.m(l.parentNode, l));
      },
      i(c) {
        s || (A(t), (s = !0));
      },
      o(c) {
        H(t), (s = !1);
      },
      d(c) {
        c && p(l), n[e].d(c);
      },
    }
  );
}
function gl(r) {
  let e,
    t = "Connect Wallet";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-16v3575" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function vl(r) {
  let e,
    t = "Connecting...";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-zvx9gy" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function bl(r) {
  let e,
    t = "Cancel";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-2921c8" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function $l(r) {
  let e, t, l, s, a;
  return (
    (t = new X({
      props: {
        className: "px-3",
        $$slots: { default: [Cl] },
        $$scope: { ctx: r },
      },
    })),
    t.$on("click", r[15]),
    (s = new X({
      props: {
        variant: "outlined",
        type: "button",
        className: "px-3",
        $$slots: { default: [yl] },
        $$scope: { ctx: r },
      },
    })),
    s.$on("click", r[16]),
    {
      c() {
        (e = v("div")), P(t.$$.fragment), (l = L()), P(s.$$.fragment), this.h();
      },
      l(n) {
        e = b(n, "DIV", { class: !0 });
        var i = N(e);
        Z(t.$$.fragment, i),
          (l = T(i)),
          Z(s.$$.fragment, i),
          i.forEach(p),
          this.h();
      },
      h() {
        o(e, "class", "grid grid-cols-2 gap-2");
      },
      m(n, i) {
        S(n, e, i), G(t, e, null), m(e, l), G(s, e, null), (a = !0);
      },
      p(n, i) {
        const c = {};
        i & 524288 && (c.$$scope = { dirty: i, ctx: n }), t.$set(c);
        const u = {};
        i & 524288 && (u.$$scope = { dirty: i, ctx: n }), s.$set(u);
      },
      i(n) {
        a || (A(t.$$.fragment, n), A(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        H(t.$$.fragment, n), H(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && p(e), F(t), F(s);
      },
    }
  );
}
function wl(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i,
    c,
    u,
    d,
    $,
    x = `<img src="${Ot}" alt=""/>`,
    g,
    f,
    E;
  (t = new Be({ props: { amount: r[5] } })),
    (s = new X({
      props: {
        className: "px-3 -m-[1px]",
        $$slots: { default: [kl] },
        $$scope: { ctx: r },
      },
    })),
    s.$on("click", r[12]);
  let k = r[2] && _t(r);
  return {
    c() {
      (e = v("button")),
        P(t.$$.fragment),
        (l = L()),
        P(s.$$.fragment),
        (a = L()),
        (n = v("button")),
        (i = v("img")),
        (u = L()),
        k && k.c(),
        (d = L()),
        ($ = v("div")),
        ($.innerHTML = x),
        this.h();
    },
    l(h) {
      e = b(h, "BUTTON", { class: !0 });
      var _ = N(e);
      Z(t.$$.fragment, _),
        (l = T(_)),
        Z(s.$$.fragment, _),
        _.forEach(p),
        (a = T(h)),
        (n = b(h, "BUTTON", { class: !0 }));
      var M = N(n);
      (i = b(M, "IMG", { src: !0, alt: !0, class: !0 })),
        (u = T(M)),
        k && k.l(M),
        (d = T(M)),
        ($ = b(M, "DIV", { class: !0, "data-svelte-h": !0 })),
        W($) !== "svelte-a314h9" && ($.innerHTML = x),
        M.forEach(p),
        this.h();
    },
    h() {
      var h, _;
      o(
        e,
        "class",
        "flex min-w-fit items-center gap-2 rounded-[0.625rem] bg-[#2E2828] pl-2"
      ),
        Q(
          i.src,
          (c =
            (_ = (h = r[1]) == null ? void 0 : h.user) == null
              ? void 0
              : _.avatar_url)
        ) || o(i, "src", c),
        o(i, "alt", "avatar"),
        o(
          i,
          "class",
          "h-8 w-8 rounded-full object-cover outline outline-1 outline-white"
        ),
        o($, "class", "flex h-2 w-3 items-center justify-center"),
        o(n, "class", "mr-4 flex items-center gap-2 text-[0.875rem]");
    },
    m(h, _) {
      S(h, e, _),
        G(t, e, null),
        m(e, l),
        G(s, e, null),
        S(h, a, _),
        S(h, n, _),
        m(n, i),
        m(n, u),
        k && k.m(n, null),
        m(n, d),
        m(n, $),
        (g = !0),
        f || ((E = [ne(e, "click", r[13]), ne(n, "click", r[14])]), (f = !0));
    },
    p(h, _) {
      var C, w;
      const M = {};
      _ & 32 && (M.amount = h[5]), t.$set(M);
      const y = {};
      _ & 524288 && (y.$$scope = { dirty: _, ctx: h }),
        s.$set(y),
        (!g ||
          (_ & 2 &&
            !Q(
              i.src,
              (c =
                (w = (C = h[1]) == null ? void 0 : C.user) == null
                  ? void 0
                  : w.avatar_url)
            ))) &&
          o(i, "src", c),
        h[2]
          ? k
            ? k.p(h, _)
            : ((k = _t(h)), k.c(), k.m(n, d))
          : k && (k.d(1), (k = null));
    },
    i(h) {
      g || (A(t.$$.fragment, h), A(s.$$.fragment, h), (g = !0));
    },
    o(h) {
      H(t.$$.fragment, h), H(s.$$.fragment, h), (g = !1);
    },
    d(h) {
      h && (p(e), p(a), p(n)), F(t), F(s), k && k.d(), (f = !1), He(E);
    },
  };
}
function Cl(r) {
  let e,
    t = "Sign In";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-6n3gky" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function yl(r) {
  let e,
    t = "Logout";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-1rheak" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function kl(r) {
  let e,
    t = "Upgrade credits";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-1mr57oo" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function _t(r) {
  let e, t, l;
  return {
    c() {
      (e = v("div")), (t = v("img")), this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = N(e);
      (t = b(a, "IMG", { src: !0, alt: !0, class: !0 })),
        a.forEach(p),
        this.h();
    },
    h() {
      Q(t.src, (l = `/tiers/${r[2].name}.png`)) || o(t, "src", l),
        o(t, "alt", ""),
        o(t, "class", "h-full -translate-y-[-15%] scale-[2] object-contain"),
        o(e, "class", "relative h-8");
    },
    m(s, a) {
      S(s, e, a), m(e, t);
    },
    p(s, a) {
      a & 4 && !Q(t.src, (l = `/tiers/${s[2].name}.png`)) && o(t, "src", l);
    },
    d(s) {
      s && p(e);
    },
  };
}
function Il(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i,
    c,
    u,
    d,
    $,
    x,
    g,
    f = `<img src="${We}" alt="Logo" class="mx-4"/>`,
    E,
    k,
    h,
    _,
    M,
    y,
    C,
    w;
  const V = [_l, hl, pl],
    j = [];
  function D(I, z) {
    return I[4] ? 0 : I[7] ? 1 : 2;
  }
  return (
    (h = D(r)),
    (_ = j[h] = V[h](r)),
    {
      c() {
        (e = v("header")),
          (t = v("div")),
          (l = v("button")),
          (s = v("div")),
          (a = v("img")),
          (c = L()),
          (u = v("img")),
          (x = L()),
          (g = v("a")),
          (g.innerHTML = f),
          (E = L()),
          (k = v("div")),
          _.c(),
          this.h();
      },
      l(I) {
        e = b(I, "HEADER", { class: !0 });
        var z = N(e);
        t = b(z, "DIV", { class: !0 });
        var O = N(t);
        l = b(O, "BUTTON", { class: !0 });
        var U = N(l);
        s = b(U, "DIV", { class: !0 });
        var q = N(s);
        (a = b(q, "IMG", {
          src: !0,
          alt: !0,
          class: !0,
          fill: !0,
          draggable: !0,
        })),
          (c = T(q)),
          (u = b(q, "IMG", {
            src: !0,
            alt: !0,
            class: !0,
            fill: !0,
            draggable: !0,
          })),
          q.forEach(p),
          U.forEach(p),
          (x = T(O)),
          (g = b(O, "A", { href: !0, "data-svelte-h": !0 })),
          W(g) !== "svelte-bgwhj8" && (g.innerHTML = f),
          O.forEach(p),
          (E = T(z)),
          (k = b(z, "DIV", { class: !0 }));
        var Y = N(k);
        _.l(Y), Y.forEach(p), z.forEach(p), this.h();
      },
      h() {
        Q(a.src, (n = jt)) || o(a, "src", n),
          o(a, "alt", "Menu Icon"),
          o(
            a,
            "class",
            (i =
              "linear absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#5A5353] transition-all duration-300 " +
              (r[3]
                ? "h-14 w-14 p-4 opacity-0"
                : "h-10 w-10 rounded-[0.625rem] p-2 opacity-100"))
          ),
          o(a, "fill", "white"),
          o(a, "draggable", "false"),
          Q(u.src, (d = Pt)) || o(u, "src", d),
          o(u, "alt", "Menu Open Icon"),
          o(
            u,
            "class",
            ($ =
              "linear absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 transition-all duration-300 " +
              (r[3] ? "opacity-100" : "opacity-0"))
          ),
          o(u, "fill", "white"),
          o(u, "draggable", "false"),
          o(s, "class", "relative h-14 w-14 transition-all duration-300"),
          o(l, "class", "z-[2]"),
          o(g, "href", "https://nfinityai.xyz"),
          o(t, "class", "flex items-center"),
          o(k, "class", "z-50 flex items-center gap-6"),
          o(
            e,
            "class",
            (M = Ne(
              "mx-auto flex h-20 max-w-[1440px] justify-between gap-9 px-3 lg:px-5",
              r[0]
            ))
          );
      },
      m(I, z) {
        S(I, e, z),
          m(e, t),
          m(t, l),
          m(l, s),
          m(s, a),
          m(s, c),
          m(s, u),
          m(t, x),
          m(t, g),
          m(e, E),
          m(e, k),
          j[h].m(k, null),
          (y = !0),
          C || ((w = ne(l, "click", r[11])), (C = !0));
      },
      p(I, [z]) {
        (!y ||
          (z & 8 &&
            i !==
              (i =
                "linear absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#5A5353] transition-all duration-300 " +
                (I[3]
                  ? "h-14 w-14 p-4 opacity-0"
                  : "h-10 w-10 rounded-[0.625rem] p-2 opacity-100")))) &&
          o(a, "class", i),
          (!y ||
            (z & 8 &&
              $ !==
                ($ =
                  "linear absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 transition-all duration-300 " +
                  (I[3] ? "opacity-100" : "opacity-0")))) &&
            o(u, "class", $);
        let O = h;
        (h = D(I)),
          h === O
            ? j[h].p(I, z)
            : (ce(),
              H(j[O], 1, 1, () => {
                j[O] = null;
              }),
              ue(),
              (_ = j[h]),
              _ ? _.p(I, z) : ((_ = j[h] = V[h](I)), _.c()),
              A(_, 1),
              _.m(k, null)),
          (!y ||
            (z & 1 &&
              M !==
                (M = Ne(
                  "mx-auto flex h-20 max-w-[1440px] justify-between gap-9 px-3 lg:px-5",
                  I[0]
                )))) &&
            o(e, "class", M);
      },
      i(I) {
        y || (A(_), (y = !0));
      },
      o(I) {
        H(_), (y = !1);
      },
      d(I) {
        I && p(e), j[h].d(), (C = !1), w();
      },
    }
  );
}
function xl(r, e, t) {
  let l, s, a, n, i, c, u;
  J(r, de, (w) => t(1, (s = w))),
    J(r, ke, (w) => t(3, (a = w))),
    J(r, se, (w) => t(6, (c = w)));
  let { className: d = "" } = e;
  const $ = be(se, (w) => w.isConnected);
  J(r, $, (w) => t(4, (n = w)));
  const x = be(se, (w) => w.isConnecting);
  J(r, x, (w) => t(7, (u = w)));
  const g = be(de, (w) => Number(w.credits).toFixed(2));
  J(r, g, (w) => t(5, (i = w)));
  const f = () => Fe(ke, (a = !a), a),
    E = () => _e(Le),
    k = () => _e(Le),
    h = () => _e(St),
    _ = () => Ke(c.address),
    M = () => se.disconnect(),
    y = () => se.disconnect(),
    C = () => _e(Nt);
  return (
    (r.$$set = (w) => {
      "className" in w && t(0, (d = w.className));
    }),
    (r.$$.update = () => {
      var w;
      r.$$.dirty & 2 &&
        t(
          2,
          (l =
            ((w = s == null ? void 0 : s.user) == null ? void 0 : w.tier) ||
            null)
        );
    }),
    [d, s, l, a, n, i, c, u, $, x, g, f, E, k, h, _, M, y, C]
  );
}
class El extends pe {
  constructor(e) {
    super(), he(this, e, xl, Il, fe, { className: 0 });
  }
}
function gt(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i = "X",
    c,
    u,
    d,
    $,
    x,
    g,
    f,
    E,
    k;
  const h = [r[4].props];
  var _ = r[4].component;
  function M(C, w) {
    let V = {};
    for (let j = 0; j < h.length; j += 1) V = Pe(V, h[j]);
    return (
      w !== void 0 && w & 16 && (V = Pe(V, Ue(h, [rt(C[4].props)]))),
      { props: V }
    );
  }
  _ && ((s = lt(_, M(r))), s.$on("success", r[12]), s.$on("closed", r[13]));
  let y = r[7] && vt(r);
  return {
    c() {
      (e = v("div")),
        (t = v("div")),
        (l = v("div")),
        s && P(s.$$.fragment),
        (a = L()),
        (n = v("button")),
        (n.textContent = i),
        ($ = L()),
        (x = v("div")),
        y && y.c(),
        this.h();
    },
    l(C) {
      e = b(C, "DIV", { role: !0, class: !0 });
      var w = N(e);
      t = b(w, "DIV", { class: !0 });
      var V = N(t);
      l = b(V, "DIV", { class: !0, style: !0 });
      var j = N(l);
      s && Z(s.$$.fragment, j),
        j.forEach(p),
        (a = T(V)),
        (n = b(V, "BUTTON", { class: !0, "data-svelte-h": !0 })),
        W(n) !== "svelte-16to8pl" && (n.textContent = i),
        V.forEach(p),
        ($ = T(w)),
        (x = b(w, "DIV", {}));
      var D = N(x);
      y && y.l(D), D.forEach(p), w.forEach(p), this.h();
    },
    h() {
      o(
        l,
        "class",
        "scrollbar-hide relative z-[1] overflow-y-scroll p-8 svelte-8hwluk"
      ),
        B(l, "max-height", r[4].props.height ?? "550px"),
        B(l, "transition", "max-height 0.3s ease-out"),
        o(n, "class", "absolute right-7 top-6 z-[1] text-[1.25rem] text-white"),
        o(
          t,
          "class",
          "modalGradient relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl text-white backdrop-blur-2xl svelte-8hwluk"
        ),
        ge(() => r[15].call(t)),
        o(e, "role", "dialog"),
        o(
          e,
          "class",
          "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur"
        );
    },
    m(C, w) {
      S(C, e, w),
        m(e, t),
        m(t, l),
        s && G(s, l, null),
        m(t, a),
        m(t, n),
        r[14](t),
        (c = Gt(t, r[15].bind(t))),
        m(e, $),
        m(e, x),
        y && y.m(x, null),
        (f = !0),
        E ||
          ((k = [
            ne(n, "click", De),
            ne(t, "mousedown", Ft(r[10])),
            ne(e, "mousedown", r[8]),
          ]),
          (E = !0));
    },
    p(C, w) {
      if (w & 16 && _ !== (_ = C[4].component)) {
        if (s) {
          ce();
          const V = s;
          H(V.$$.fragment, 1, 0, () => {
            F(V, 1);
          }),
            ue();
        }
        _
          ? ((s = lt(_, M(C, w))),
            s.$on("success", C[12]),
            s.$on("closed", C[13]),
            P(s.$$.fragment),
            A(s.$$.fragment, 1),
            G(s, l, null))
          : (s = null);
      } else if (_) {
        const V = w & 16 ? Ue(h, [rt(C[4].props)]) : {};
        s.$set(V);
      }
      (!f || w & 16) && B(l, "max-height", C[4].props.height ?? "550px"),
        C[7]
          ? y
            ? (y.p(C, w), w & 128 && A(y, 1))
            : ((y = vt(C)), y.c(), A(y, 1), y.m(x, null))
          : y &&
            (ce(),
            H(y, 1, 1, () => {
              y = null;
            }),
            ue());
    },
    i(C) {
      f ||
        (s && A(s.$$.fragment, C),
        C &&
          ge(() => {
            f &&
              (d && d.end(1),
              (u = je(t, xe, { y: 200, duration: 200 })),
              u.start());
          }),
        A(y),
        g && g.end(1),
        (f = !0));
    },
    o(C) {
      s && H(s.$$.fragment, C),
        u && u.invalidate(),
        C && (d = Ie(t, xe, { y: -200, duration: 200 })),
        H(y),
        C && (g = Ie(x, xe, { y: -200, duration: 200 })),
        (f = !1);
    },
    d(C) {
      C && p(e),
        s && F(s),
        r[14](null),
        c(),
        C && d && d.end(),
        y && y.d(),
        C && g && g.end(),
        (E = !1),
        He(k);
    },
  };
}
function vt(r) {
  let e,
    t =
      '<div class="modalGradient h-full w-full svelte-8hwluk"><img src="/tiers/Platinum.png" alt="" class="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-[35%] scale-[2] object-contain"/></div>',
    l,
    s,
    a,
    n,
    i,
    c =
      '<img src="/tiers/Diamond.png" alt="" class="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-[35%] scale-[2] object-contain"/>',
    u,
    d,
    $,
    x,
    g,
    f =
      '<div class="modalGradient h-full w-full svelte-8hwluk"><img src="/tiers/Infinity.png" alt="" class="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-[40%] scale-[2] object-contain"/></div>',
    E,
    k,
    h;
  return {
    c() {
      (e = v("div")),
        (e.innerHTML = t),
        (a = L()),
        (n = v("div")),
        (i = v("div")),
        (i.innerHTML = c),
        (x = L()),
        (g = v("div")),
        (g.innerHTML = f),
        this.h();
    },
    l(_) {
      (e = b(_, "DIV", { class: !0, "data-svelte-h": !0 })),
        W(e) !== "svelte-6i5uk" && (e.innerHTML = t),
        (a = T(_)),
        (n = b(_, "DIV", { class: !0, style: !0 }));
      var M = N(n);
      (i = b(M, "DIV", { class: !0, "data-svelte-h": !0 })),
        W(i) !== "svelte-h2fv87" && (i.innerHTML = c),
        M.forEach(p),
        (x = T(_)),
        (g = b(_, "DIV", { class: !0, "data-svelte-h": !0 })),
        W(g) !== "svelte-1hjy7vd" && (g.innerHTML = f),
        this.h();
    },
    h() {
      o(
        e,
        "class",
        "s:h-28 s:w-28 platinum-position absolute z-[-1] h-20 w-20 rotate-[-22deg] svelte-8hwluk"
      ),
        o(i, "class", "modalGradient h-full w-full svelte-8hwluk"),
        o(
          n,
          "class",
          "s:h-28 s:w-28 diamond-position absolute z-[-1] h-20 w-20 rotate-[12deg] svelte-8hwluk"
        ),
        o(n, "style", (u = `right: calc(${(r[1] - r[0]) / 2}px + 5vw); `)),
        o(
          g,
          "class",
          "s:h-28 s:w-28 infinity-position absolute z-[-1] h-20 w-20 svelte-8hwluk"
        );
    },
    m(_, M) {
      S(_, e, M),
        S(_, a, M),
        S(_, n, M),
        m(n, i),
        S(_, x, M),
        S(_, g, M),
        (h = !0);
    },
    p(_, M) {
      (!h ||
        (M & 3 && u !== (u = `right: calc(${(_[1] - _[0]) / 2}px + 5vw); `))) &&
        o(n, "style", u);
    },
    i(_) {
      h ||
        (_ &&
          ge(() => {
            h &&
              (s && s.end(1),
              (l = je(e, xe, { y: 20, duration: 600, delay: 600 })),
              l.start());
          }),
        _ &&
          ge(() => {
            h &&
              ($ && $.end(1),
              (d = je(n, xe, { y: 20, duration: 600, delay: 600 })),
              d.start());
          }),
        _ &&
          ge(() => {
            h &&
              (k && k.end(1),
              (E = je(g, xe, { y: 20, duration: 600, delay: 600 })),
              E.start());
          }),
        (h = !0));
    },
    o(_) {
      l && l.invalidate(),
        _ && (s = Ie(e, $e, { duration: 200 })),
        d && d.invalidate(),
        _ && ($ = Ie(n, $e, { duration: 200 })),
        E && E.invalidate(),
        _ && (k = Ie(g, $e, { duration: 200 })),
        (h = !1);
    },
    d(_) {
      _ && (p(e), p(a), p(n), p(x), p(g)),
        _ && s && s.end(),
        _ && $ && $.end(),
        _ && k && k.end();
    },
  };
}
function Ml(r) {
  let e, t, l, s;
  ge(r[11]);
  let a = r[4].isOpen && gt(r);
  return {
    c() {
      (e = v("div")), a && a.c();
    },
    l(n) {
      e = b(n, "DIV", {});
      var i = N(e);
      a && a.l(i), i.forEach(p);
    },
    m(n, i) {
      S(n, e, i),
        a && a.m(e, null),
        r[16](e),
        (t = !0),
        l ||
          ((s = [ne(window, "keydown", r[9]), ne(window, "resize", r[11])]),
          (l = !0));
    },
    p(n, [i]) {
      n[4].isOpen
        ? a
          ? (a.p(n, i), i & 16 && A(a, 1))
          : ((a = gt(n)), a.c(), A(a, 1), a.m(e, null))
        : a &&
          (ce(),
          H(a, 1, 1, () => {
            a = null;
          }),
          ue());
    },
    i(n) {
      t || (A(a), (t = !0));
    },
    o(n) {
      H(a), (t = !1);
    },
    d(n) {
      n && p(e), a && a.d(), r[16](null), (l = !1), He(s);
    },
  };
}
function Vl(r, e, t) {
  let l;
  J(r, nt, (C) => t(4, (l = C)));
  let s, a, n, i, c, u, d;
  const $ = nt.subscribe((C) => {
      C.isOpen &&
        !a &&
        setTimeout(() => {
          document.body.appendChild(a);
        }, 0);
    }),
    x = (C) => {
      s && !s.contains(C.target) && De();
    },
    g = (C) => {
      C.key === "Escape" && De();
    };
  It(() => {
    $(),
      a && a.parentNode && a.parentNode.removeChild(a),
      (document.body.style.overflow = "auto");
  }),
    Re(() => {
      l.isOpen && De();
    });
  function f(C) {
    Ut.call(this, r, C);
  }
  function E() {
    t(1, (i = window.innerWidth)), t(3, (u = window.innerHeight));
  }
  const k = () => t(7, (d = !0)),
    h = () => t(7, (d = !1));
  function _(C) {
    Qe[C ? "unshift" : "push"](() => {
      (s = C), t(5, s);
    });
  }
  function M() {
    (n = this.clientWidth), (c = this.clientHeight), t(0, n), t(2, c);
  }
  function y(C) {
    Qe[C ? "unshift" : "push"](() => {
      (a = C), t(6, a);
    });
  }
  return (
    (r.$$.update = () => {
      if (r.$$.dirty & 16)
        if (l.isOpen && Ht) {
          const C = Xt();
          (document.body.style.overflow = "hidden"),
            (document.body.style.paddingRight = `${C}px`),
            t(7, (d = !1));
        } else
          (document.body.style.overflow = "auto"),
            (document.body.style.paddingRight = "0px");
      r.$$.dirty & 12 &&
        u &&
        c &&
        document.documentElement.style.setProperty(
          "--window-height-diff",
          `${(u - c) / 2}px`
        ),
        r.$$.dirty & 3 &&
          i &&
          n &&
          document.documentElement.style.setProperty(
            "--window-width-diff",
            `${(i - n) / 2}px`
          );
    }),
    [n, i, c, u, l, s, a, d, x, g, f, E, k, h, _, M, y]
  );
}
class Nl extends pe {
  constructor(e) {
    super(), he(this, e, Vl, Ml, fe, {});
  }
}
function bt(r) {
  let e, t, l, s, a, n;
  return (
    (t = new Be({ props: { amount: r[3] } })),
    {
      c() {
        (e = v("button")), P(t.$$.fragment), this.h();
      },
      l(i) {
        e = b(i, "BUTTON", { class: !0 });
        var c = N(e);
        Z(t.$$.fragment, c), c.forEach(p), this.h();
      },
      h() {
        o(e, "class", "flex items-center");
      },
      m(i, c) {
        S(i, e, c),
          G(t, e, null),
          (s = !0),
          a || ((n = ne(e, "click", r[12])), (a = !0));
      },
      p(i, c) {
        const u = {};
        c & 8 && (u.amount = i[3]), t.$set(u);
      },
      i(i) {
        s ||
          (A(t.$$.fragment, i),
          i &&
            ge(() => {
              s && (l || (l = Me(e, $e, { duration: 100 }, !0)), l.run(1));
            }),
          (s = !0));
      },
      o(i) {
        H(t.$$.fragment, i),
          i && (l || (l = Me(e, $e, { duration: 100 }, !1)), l.run(0)),
          (s = !1);
      },
      d(i) {
        i && p(e), F(t), i && l && l.end(), (a = !1), n();
      },
    }
  );
}
function $t(r) {
  let e, t, l, s, a, n, i, c, u, d, $, x, g, f, E, k;
  const h = [Tl, Ll, Dl],
    _ = [];
  function M(y, C) {
    return y[4] ? 0 : y[6] ? 1 : 2;
  }
  return (
    (t = M(r)),
    (l = _[t] = h[t](r)),
    (n = new Ee({ props: { items: Dt, title: "Starting with Nfinity" } })),
    (d = new Ee({
      props: { items: r[7], title: "NFINITY MODELS", titleLink: "/" },
    })),
    (f = new Ee({ props: { items: Lt, title: "Advanced" } })),
    {
      c() {
        (e = v("div")),
          l.c(),
          (s = L()),
          (a = v("div")),
          P(n.$$.fragment),
          (i = L()),
          (c = v("div")),
          (u = L()),
          P(d.$$.fragment),
          ($ = L()),
          (x = v("div")),
          (g = L()),
          P(f.$$.fragment),
          this.h();
      },
      l(y) {
        e = b(y, "DIV", { class: !0 });
        var C = N(e);
        l.l(C), (s = T(C)), (a = b(C, "DIV", { class: !0 }));
        var w = N(a);
        Z(n.$$.fragment, w),
          (i = T(w)),
          (c = b(w, "DIV", { class: !0 })),
          N(c).forEach(p),
          (u = T(w)),
          Z(d.$$.fragment, w),
          ($ = T(w)),
          (x = b(w, "DIV", { class: !0 })),
          N(x).forEach(p),
          (g = T(w)),
          Z(f.$$.fragment, w),
          w.forEach(p),
          C.forEach(p),
          this.h();
      },
      h() {
        o(c, "class", "mb-4 ml-9 mr-16 mt-9 h-[1px] bg-white bg-opacity-30"),
          o(x, "class", "mb-4 ml-9 mr-16 mt-9 h-[1px] bg-white bg-opacity-30"),
          o(a, "class", "w-fit"),
          o(
            e,
            "class",
            "fixed inset-x-0 bottom-0 top-14 z-[40] overflow-y-scroll bg-black pb-10"
          );
      },
      m(y, C) {
        S(y, e, C),
          _[t].m(e, null),
          m(e, s),
          m(e, a),
          G(n, a, null),
          m(a, i),
          m(a, c),
          m(a, u),
          G(d, a, null),
          m(a, $),
          m(a, x),
          m(a, g),
          G(f, a, null),
          (k = !0);
      },
      p(y, C) {
        let w = t;
        (t = M(y)),
          t === w
            ? _[t].p(y, C)
            : (ce(),
              H(_[w], 1, 1, () => {
                _[w] = null;
              }),
              ue(),
              (l = _[t]),
              l ? l.p(y, C) : ((l = _[t] = h[t](y)), l.c()),
              A(l, 1),
              l.m(e, s));
        const V = {};
        C & 128 && (V.items = y[7]), d.$set(V);
      },
      i(y) {
        k ||
          (A(l),
          A(n.$$.fragment, y),
          A(d.$$.fragment, y),
          A(f.$$.fragment, y),
          y &&
            ge(() => {
              k &&
                (E || (E = Me(e, ot, { duration: 300, axis: "y" }, !0)),
                E.run(1));
            }),
          (k = !0));
      },
      o(y) {
        H(l),
          H(n.$$.fragment, y),
          H(d.$$.fragment, y),
          H(f.$$.fragment, y),
          y &&
            (E || (E = Me(e, ot, { duration: 300, axis: "y" }, !1)), E.run(0)),
          (k = !1);
      },
      d(y) {
        y && p(e), _[t].d(), F(n), F(d), F(f), y && E && E.end();
      },
    }
  );
}
function Dl(r) {
  let e, t;
  return (
    (e = new X({
      props: {
        className: "h-10 w-28 text-[0.625rem] ml-auto xs:mr-9 mr-5 mb-10 mt-5",
        $$slots: { default: [Al] },
        $$scope: { ctx: r },
      },
    })),
    e.$on("click", r[19]),
    {
      c() {
        P(e.$$.fragment);
      },
      l(l) {
        Z(e.$$.fragment, l);
      },
      m(l, s) {
        G(e, l, s), (t = !0);
      },
      p(l, s) {
        const a = {};
        s & 1048576 && (a.$$scope = { dirty: s, ctx: l }), e.$set(a);
      },
      i(l) {
        t || (A(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        H(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        F(e, l);
      },
    }
  );
}
function Ll(r) {
  let e, t, l, s, a;
  return (
    (t = new X({
      props: {
        disabled: !0,
        className: "h-10 w-28 text-[0.625rem] ",
        $$slots: { default: [zl] },
        $$scope: { ctx: r },
      },
    })),
    (s = new X({
      props: {
        variant: "outlined",
        type: "button",
        className: "h-10 w-28 text-[0.625rem] ",
        $$slots: { default: [Hl] },
        $$scope: { ctx: r },
      },
    })),
    s.$on("click", r[18]),
    {
      c() {
        (e = v("div")), P(t.$$.fragment), (l = L()), P(s.$$.fragment), this.h();
      },
      l(n) {
        e = b(n, "DIV", { class: !0 });
        var i = N(e);
        Z(t.$$.fragment, i),
          (l = T(i)),
          Z(s.$$.fragment, i),
          i.forEach(p),
          this.h();
      },
      h() {
        o(
          e,
          "class",
          "xs:mr-9 mb-10 mr-5 mt-5 flex h-10 items-center justify-end"
        );
      },
      m(n, i) {
        S(n, e, i), G(t, e, null), m(e, l), G(s, e, null), (a = !0);
      },
      p(n, i) {
        const c = {};
        i & 1048576 && (c.$$scope = { dirty: i, ctx: n }), t.$set(c);
        const u = {};
        i & 1048576 && (u.$$scope = { dirty: i, ctx: n }), s.$set(u);
      },
      i(n) {
        a || (A(t.$$.fragment, n), A(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        H(t.$$.fragment, n), H(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && p(e), F(t), F(s);
      },
    }
  );
}
function Tl(r) {
  let e, t, l, s;
  const a = [Ol, Sl],
    n = [];
  function i(c, u) {
    return c[1].isAuthenticated ? 0 : 1;
  }
  return (
    (e = i(r)),
    (t = n[e] = a[e](r)),
    {
      c() {
        t.c(), (l = me());
      },
      l(c) {
        t.l(c), (l = me());
      },
      m(c, u) {
        n[e].m(c, u), S(c, l, u), (s = !0);
      },
      p(c, u) {
        let d = e;
        (e = i(c)),
          e === d
            ? n[e].p(c, u)
            : (ce(),
              H(n[d], 1, 1, () => {
                n[d] = null;
              }),
              ue(),
              (t = n[e]),
              t ? t.p(c, u) : ((t = n[e] = a[e](c)), t.c()),
              A(t, 1),
              t.m(l.parentNode, l));
      },
      i(c) {
        s || (A(t), (s = !0));
      },
      o(c) {
        H(t), (s = !1);
      },
      d(c) {
        c && p(l), n[e].d(c);
      },
    }
  );
}
function Al(r) {
  let e,
    t = "Connect Wallet";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-16v3575" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function zl(r) {
  let e,
    t = "Connecting...";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-zvx9gy" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function Hl(r) {
  let e,
    t = "Cancel";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-2921c8" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function Sl(r) {
  let e, t, l, s, a;
  return (
    (t = new X({
      props: {
        className: "h-10 w-28 text-[0.625rem]",
        $$slots: { default: [jl] },
        $$scope: { ctx: r },
      },
    })),
    t.$on("click", r[16]),
    (s = new X({
      props: {
        variant: "outlined",
        type: "button",
        className: "h-10 w-28 text-[0.625rem] ",
        $$slots: { default: [Pl] },
        $$scope: { ctx: r },
      },
    })),
    s.$on("click", r[17]),
    {
      c() {
        (e = v("div")), P(t.$$.fragment), (l = L()), P(s.$$.fragment), this.h();
      },
      l(n) {
        e = b(n, "DIV", { class: !0 });
        var i = N(e);
        Z(t.$$.fragment, i),
          (l = T(i)),
          Z(s.$$.fragment, i),
          i.forEach(p),
          this.h();
      },
      h() {
        o(
          e,
          "class",
          "xs:mr-9 mb-10 mr-5 mt-5 flex h-10 items-center justify-end"
        );
      },
      m(n, i) {
        S(n, e, i), G(t, e, null), m(e, l), G(s, e, null), (a = !0);
      },
      p(n, i) {
        const c = {};
        i & 1048576 && (c.$$scope = { dirty: i, ctx: n }), t.$set(c);
        const u = {};
        i & 1048576 && (u.$$scope = { dirty: i, ctx: n }), s.$set(u);
      },
      i(n) {
        a || (A(t.$$.fragment, n), A(s.$$.fragment, n), (a = !0));
      },
      o(n) {
        H(t.$$.fragment, n), H(s.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && p(e), F(t), F(s);
      },
    }
  );
}
function Ol(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i,
    c = `<img src="${Ot}" alt=""/>`,
    u,
    d,
    $,
    x,
    g,
    f,
    E,
    k,
    h,
    _ = r[2] && wt(r);
  return (
    ($ = new Be({ props: { amount: r[3] } })),
    (f = new X({
      props: {
        className: "h-10 w-28 text-[0.625rem] -m-[1px]",
        $$slots: { default: [Gl] },
        $$scope: { ctx: r },
      },
    })),
    f.$on("click", r[14]),
    {
      c() {
        (e = v("div")),
          (t = v("button")),
          (l = v("img")),
          (a = L()),
          _ && _.c(),
          (n = L()),
          (i = v("div")),
          (i.innerHTML = c),
          (u = L()),
          (d = v("button")),
          P($.$$.fragment),
          (x = L()),
          (g = v("div")),
          P(f.$$.fragment),
          this.h();
      },
      l(M) {
        e = b(M, "DIV", { class: !0 });
        var y = N(e);
        t = b(y, "BUTTON", { class: !0 });
        var C = N(t);
        (l = b(C, "IMG", { src: !0, alt: !0, class: !0 })),
          (a = T(C)),
          _ && _.l(C),
          (n = T(C)),
          (i = b(C, "DIV", { class: !0, "data-svelte-h": !0 })),
          W(i) !== "svelte-kmemy5" && (i.innerHTML = c),
          C.forEach(p),
          (u = T(y)),
          (d = b(y, "BUTTON", { class: !0 }));
        var w = N(d);
        Z($.$$.fragment, w), (x = T(w)), (g = b(w, "DIV", { class: !0 }));
        var V = N(g);
        Z(f.$$.fragment, V), V.forEach(p), w.forEach(p), y.forEach(p), this.h();
      },
      h() {
        var M, y;
        Q(
          l.src,
          (s =
            (y = (M = r[1]) == null ? void 0 : M.user) == null
              ? void 0
              : y.avatar_url)
        ) || o(l, "src", s),
          o(l, "alt", "avatar"),
          o(
            l,
            "class",
            "h-8 w-8 rounded-full object-cover outline outline-1 outline-white"
          ),
          o(i, "class", "flex h-2 w-3 items-center justify-center"),
          o(t, "class", "mr-4 flex items-center gap-2 text-[0.75rem]"),
          o(g, "class", "relative"),
          o(
            d,
            "class",
            "flex h-10 w-fit min-w-fit items-center gap-2 rounded-[0.625rem] bg-[#2E2828] pl-2"
          ),
          o(
            e,
            "class",
            "xs:mx-9 mx-5 mb-10 mt-5 flex items-center justify-between"
          );
      },
      m(M, y) {
        S(M, e, y),
          m(e, t),
          m(t, l),
          m(t, a),
          _ && _.m(t, null),
          m(t, n),
          m(t, i),
          m(e, u),
          m(e, d),
          G($, d, null),
          m(d, x),
          m(d, g),
          G(f, g, null),
          (E = !0),
          k || ((h = [ne(t, "click", r[13]), ne(d, "click", r[15])]), (k = !0));
      },
      p(M, y) {
        var V, j;
        (!E ||
          (y & 2 &&
            !Q(
              l.src,
              (s =
                (j = (V = M[1]) == null ? void 0 : V.user) == null
                  ? void 0
                  : j.avatar_url)
            ))) &&
          o(l, "src", s),
          M[2]
            ? _
              ? _.p(M, y)
              : ((_ = wt(M)), _.c(), _.m(t, n))
            : _ && (_.d(1), (_ = null));
        const C = {};
        y & 8 && (C.amount = M[3]), $.$set(C);
        const w = {};
        y & 1048576 && (w.$$scope = { dirty: y, ctx: M }), f.$set(w);
      },
      i(M) {
        E || (A($.$$.fragment, M), A(f.$$.fragment, M), (E = !0));
      },
      o(M) {
        H($.$$.fragment, M), H(f.$$.fragment, M), (E = !1);
      },
      d(M) {
        M && p(e), _ && _.d(), F($), F(f), (k = !1), He(h);
      },
    }
  );
}
function jl(r) {
  let e,
    t = "Sign In";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-6n3gky" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function Pl(r) {
  let e,
    t = "Logout";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-1rheak" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function wt(r) {
  let e, t, l;
  return {
    c() {
      (e = v("div")), (t = v("img")), this.h();
    },
    l(s) {
      e = b(s, "DIV", { class: !0 });
      var a = N(e);
      (t = b(a, "IMG", { src: !0, alt: !0, class: !0 })),
        a.forEach(p),
        this.h();
    },
    h() {
      Q(t.src, (l = `/tiers/${r[2].name}.png`)) || o(t, "src", l),
        o(t, "alt", ""),
        o(t, "class", "h-full -translate-y-[-15%] scale-[2] object-contain"),
        o(e, "class", "relative h-8");
    },
    m(s, a) {
      S(s, e, a), m(e, t);
    },
    p(s, a) {
      a & 4 && !Q(t.src, (l = `/tiers/${s[2].name}.png`)) && o(t, "src", l);
    },
    d(s) {
      s && p(e);
    },
  };
}
function Gl(r) {
  let e,
    t = "Upgrade credits";
  return {
    c() {
      (e = v("span")), (e.textContent = t);
    },
    l(l) {
      (e = b(l, "SPAN", { "data-svelte-h": !0 })),
        W(e) !== "svelte-1mr57oo" && (e.textContent = t);
    },
    m(l, s) {
      S(l, e, s);
    },
    p: ee,
    d(l) {
      l && p(e);
    },
  };
}
function Fl(r) {
  let e,
    t,
    l,
    s = `<img src="${We}" alt="Logo" class="oblect-contain w-full" draggable="false"/>`,
    a,
    n,
    i,
    c,
    u,
    d,
    $,
    x,
    g,
    f,
    E,
    k,
    h,
    _,
    M,
    y,
    C = r[1].isAuthenticated && !r[0] && bt(r),
    w = r[0] && $t(r);
  return {
    c() {
      (e = v("div")),
        (t = v("header")),
        (l = v("a")),
        (l.innerHTML = s),
        (a = L()),
        (n = v("div")),
        C && C.c(),
        (i = L()),
        (c = v("button")),
        (u = v("div")),
        (d = v("img")),
        (g = L()),
        (f = v("img")),
        (h = L()),
        w && w.c(),
        this.h();
    },
    l(V) {
      e = b(V, "DIV", {});
      var j = N(e);
      t = b(j, "HEADER", { class: !0 });
      var D = N(t);
      (l = b(D, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        W(l) !== "svelte-1b3ckck" && (l.innerHTML = s),
        (a = T(D)),
        (n = b(D, "DIV", { class: !0 }));
      var I = N(n);
      C && C.l(I), (i = T(I)), (c = b(I, "BUTTON", { class: !0 }));
      var z = N(c);
      u = b(z, "DIV", { class: !0 });
      var O = N(u);
      (d = b(O, "IMG", {
        src: !0,
        alt: !0,
        class: !0,
        fill: !0,
        draggable: !0,
      })),
        (g = T(O)),
        (f = b(O, "IMG", {
          src: !0,
          alt: !0,
          class: !0,
          fill: !0,
          draggable: !0,
        })),
        O.forEach(p),
        z.forEach(p),
        I.forEach(p),
        D.forEach(p),
        (h = T(j)),
        w && w.l(j),
        j.forEach(p),
        this.h();
    },
    h() {
      o(l, "href", "https://nfinityai.xyz"),
        o(l, "class", "ml-5 w-[46%] max-w-[200px]"),
        Q(d.src, ($ = jt)) || o(d, "src", $),
        o(d, "alt", "Menu Icon"),
        o(
          d,
          "class",
          (x =
            "linear absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#5A5353] transition-all duration-300 " +
            (r[0]
              ? "h-14 w-14 p-4 opacity-0"
              : "h-10 w-10 rounded-[0.625rem] p-2 opacity-100"))
        ),
        o(d, "fill", "white"),
        o(d, "draggable", "false"),
        Q(f.src, (E = Pt)) || o(f, "src", E),
        o(f, "alt", "Menu Open Icon"),
        o(
          f,
          "class",
          (k =
            "linear absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[#00233B] p-4 transition-all duration-300 " +
            (r[0] ? "opacity-100" : "opacity-0"))
        ),
        o(f, "fill", "white"),
        o(f, "draggable", "false"),
        o(u, "class", "relative h-14 w-14 transition-all duration-300"),
        o(c, "class", "z-[2]"),
        o(n, "class", "xs:gap-4 s:gap-8 flex gap-2"),
        o(
          t,
          "class",
          "fixed inset-x-0 top-[-8px] z-[40] flex h-16 items-center justify-between gap-2 bg-black pt-2"
        );
    },
    m(V, j) {
      S(V, e, j),
        m(e, t),
        m(t, l),
        m(t, a),
        m(t, n),
        C && C.m(n, null),
        m(n, i),
        m(n, c),
        m(c, u),
        m(u, d),
        m(u, g),
        m(u, f),
        m(e, h),
        w && w.m(e, null),
        (_ = !0),
        M || ((y = ne(c, "click", r[11])), (M = !0));
    },
    p(V, [j]) {
      V[1].isAuthenticated && !V[0]
        ? C
          ? (C.p(V, j), j & 3 && A(C, 1))
          : ((C = bt(V)), C.c(), A(C, 1), C.m(n, i))
        : C &&
          (ce(),
          H(C, 1, 1, () => {
            C = null;
          }),
          ue()),
        (!_ ||
          (j & 1 &&
            x !==
              (x =
                "linear absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#5A5353] transition-all duration-300 " +
                (V[0]
                  ? "h-14 w-14 p-4 opacity-0"
                  : "h-10 w-10 rounded-[0.625rem] p-2 opacity-100")))) &&
          o(d, "class", x),
        (!_ ||
          (j & 1 &&
            k !==
              (k =
                "linear absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[#00233B] p-4 transition-all duration-300 " +
                (V[0] ? "opacity-100" : "opacity-0")))) &&
          o(f, "class", k),
        V[0]
          ? w
            ? (w.p(V, j), j & 1 && A(w, 1))
            : ((w = $t(V)), w.c(), A(w, 1), w.m(e, null))
          : w &&
            (ce(),
            H(w, 1, 1, () => {
              w = null;
            }),
            ue());
    },
    i(V) {
      _ || (A(C), A(w), (_ = !0));
    },
    o(V) {
      H(C), H(w), (_ = !1);
    },
    d(V) {
      V && p(e), C && C.d(), w && w.d(), (M = !1), y();
    },
  };
}
function Ul(r, e, t) {
  let l, s, a, n, i, c, u;
  J(r, de, (V) => t(1, (s = V))),
    J(r, se, (V) => t(5, (i = V))),
    J(r, Tt, (V) => t(7, (u = V)));
  let d = !1;
  const $ = be(se, (V) => V.isConnected);
  J(r, $, (V) => t(4, (n = V)));
  const x = be(se, (V) => V.isConnecting);
  J(r, x, (V) => t(6, (c = V)));
  const g = be(de, (V) => Number(V.credits).toFixed(2));
  J(r, g, (V) => t(3, (a = V)));
  function f() {
    t(0, (d = !d));
  }
  Re(() => {
    t(0, (d = !1));
  });
  const E = () => _e(Le),
    k = () => _e(St),
    h = () => _e(Le),
    _ = () => _e(Le),
    M = () => Ke(i.address),
    y = () => se.disconnect(),
    C = () => se.disconnect(),
    w = () => _e(Nt);
  return (
    (r.$$.update = () => {
      var V;
      r.$$.dirty & 1 &&
        (d && Ht
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto")),
        r.$$.dirty & 2 &&
          t(
            2,
            (l =
              ((V = s == null ? void 0 : s.user) == null ? void 0 : V.tier) ||
              null)
          );
    }),
    [d, s, l, a, n, i, c, u, $, x, g, f, E, k, h, _, M, y, C, w]
  );
}
class Zl extends pe {
  constructor(e) {
    super(), he(this, e, Ul, Fl, fe, {});
  }
}
function Ct(r, e, t) {
  const l = r.slice();
  return (l[5] = e[t]), l;
}
function Bl(r) {
  let e;
  return {
    c() {
      (e = v("div")), this.h();
    },
    l(t) {
      (e = b(t, "DIV", { class: !0 })), N(e).forEach(p), this.h();
    },
    h() {
      o(
        e,
        "class",
        "skeleton h-full w-full animate-pulse bg-[hsl(240,5.9%,10%)]"
      );
    },
    m(t, l) {
      S(t, e, l);
    },
    p: ee,
    d(t) {
      t && p(e);
    },
  };
}
function Rl(r) {
  let e, t;
  return {
    c() {
      (e = v("img")), this.h();
    },
    l(l) {
      (e = b(l, "IMG", { src: !0, class: !0, alt: !0, draggable: !0 })),
        this.h();
    },
    h() {
      Q(e.src, (t = r[5].pfp.src)) || o(e, "src", t),
        o(e, "class", "h-full w-full object-cover"),
        o(e, "alt", ""),
        o(e, "draggable", "false");
    },
    m(l, s) {
      S(l, e, s);
    },
    p(l, s) {
      s & 1 && !Q(e.src, (t = l[5].pfp.src)) && o(e, "src", t);
    },
    d(l) {
      l && p(e);
    },
  };
}
function yt(r) {
  let e, t;
  function l(n, i) {
    return n[5].pfp ? Rl : Bl;
  }
  let s = l(r),
    a = s(r);
  return {
    c() {
      (e = v("div")), a.c(), (t = L()), this.h();
    },
    l(n) {
      e = b(n, "DIV", { class: !0, style: !0 });
      var i = N(e);
      a.l(i), (t = T(i)), i.forEach(p), this.h();
    },
    h() {
      o(
        e,
        "class",
        "circle z-1 absolute animate-[float_ease-in-out_infinite] overflow-hidden rounded-full shadow-[0_0.25rem_1.125rem_0_#006fb9] svelte-66sa7w"
      ),
        B(e, "bottom", r[5].bottom),
        B(e, "left", r[5].left),
        B(e, "width", r[5].size + "px"),
        B(e, "height", r[5].size + "px"),
        B(e, "animation-duration", (r[5].duration || 3) + "s"),
        B(
          e,
          "--x-offset",
          (r[5].xOffset ? parseFloat(r[5].xOffset) / 16 : 0) + "rem"
        ),
        B(
          e,
          "--y-offset",
          (r[5].yOffset ? parseFloat(r[5].yOffset) / 16 : 0) + "rem"
        );
    },
    m(n, i) {
      S(n, e, i), a.m(e, null), m(e, t);
    },
    p(n, i) {
      s === (s = l(n)) && a
        ? a.p(n, i)
        : (a.d(1), (a = s(n)), a && (a.c(), a.m(e, t))),
        i & 1 && B(e, "bottom", n[5].bottom),
        i & 1 && B(e, "left", n[5].left),
        i & 1 && B(e, "width", n[5].size + "px"),
        i & 1 && B(e, "height", n[5].size + "px"),
        i & 1 && B(e, "animation-duration", (n[5].duration || 3) + "s"),
        i & 1 &&
          B(
            e,
            "--x-offset",
            (n[5].xOffset ? parseFloat(n[5].xOffset) / 16 : 0) + "rem"
          ),
        i & 1 &&
          B(
            e,
            "--y-offset",
            (n[5].yOffset ? parseFloat(n[5].yOffset) / 16 : 0) + "rem"
          );
    },
    d(n) {
      n && p(e), a.d();
    },
  };
}
function Wl(r) {
  let e,
    t,
    l,
    s,
    a,
    n,
    i,
    c = "Setting a new standard in both <br/> technology and community.",
    u,
    d,
    $,
    x,
    g,
    f,
    E,
    k,
    h,
    _,
    M,
    y,
    C,
    w,
    V = "Terms & Conditions",
    j;
  (a = new zt({ props: { text: "Become A Part Of Nfinity" } })),
    ($ = new X({
      props: {
        text: "Join our Telegram",
        variant: "textGradient",
        className: "h-8",
        href: "https://t.me/nfinityai_erc20",
      },
    })),
    (g = new X({
      props: {
        text: "Follow us on X",
        variant: "textGradient",
        className: "h-8",
        href: "https://x.com/nfinityai_erc20",
      },
    }));
  let D = Ve(r[0]),
    I = [];
  for (let z = 0; z < D.length; z += 1) I[z] = yt(Ct(r, D, z));
  return (
    (y = new X({
      props: {
        text: "Buy on Uniswap",
        variant: "textGradient",
        className:
          "font-avantGarde text-[1.125rem] font-bold w-60 mx-auto mt-2 h-14",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0xcomingsoon",
      },
    })),
    {
      c() {
        (e = v("footer")),
          (t = v("div")),
          (l = v("div")),
          (s = v("div")),
          P(a.$$.fragment),
          (n = L()),
          (i = v("p")),
          (i.innerHTML = c),
          (u = L()),
          (d = v("div")),
          P($.$$.fragment),
          (x = L()),
          P(g.$$.fragment),
          (f = L()),
          (E = v("div"));
        for (let z = 0; z < I.length; z += 1) I[z].c();
        (k = L()),
          (h = v("img")),
          (M = L()),
          P(y.$$.fragment),
          (C = L()),
          (w = v("a")),
          (w.textContent = V),
          this.h();
      },
      l(z) {
        e = b(z, "FOOTER", { class: !0 });
        var O = N(e);
        t = b(O, "DIV", { class: !0 });
        var U = N(t);
        l = b(U, "DIV", { class: !0 });
        var q = N(l);
        s = b(q, "DIV", { class: !0 });
        var Y = N(s);
        Z(a.$$.fragment, Y),
          (n = T(Y)),
          (i = b(Y, "P", { class: !0, "data-svelte-h": !0 })),
          W(i) !== "svelte-1w9i0si" && (i.innerHTML = c),
          Y.forEach(p),
          (u = T(q)),
          (d = b(q, "DIV", { class: !0 }));
        var ae = N(d);
        Z($.$$.fragment, ae),
          (x = T(ae)),
          Z(g.$$.fragment, ae),
          ae.forEach(p),
          (f = T(q)),
          (E = b(q, "DIV", { class: !0 }));
        var ie = N(E);
        for (let oe = 0; oe < I.length; oe += 1) I[oe].l(ie);
        ie.forEach(p),
          (k = T(q)),
          (h = b(q, "IMG", {
            src: !0,
            alt: !0,
            class: !0,
            width: !0,
            height: !0,
            draggable: !0,
          })),
          q.forEach(p),
          U.forEach(p),
          (M = T(O)),
          Z(y.$$.fragment, O),
          (C = T(O)),
          (w = b(O, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
          W(w) !== "svelte-yg5gfq" && (w.textContent = V),
          O.forEach(p),
          this.h();
      },
      h() {
        o(
          i,
          "class",
          "font-avantGarde mt-6 w-full px-4 text-center text-[1rem] font-bold text-white"
        ),
          o(s, "class", "flex flex-col items-center text-center"),
          o(
            d,
            "class",
            "relative z-10 mx-auto mt-8 flex max-w-80 flex-row gap-4 px-4"
          ),
          o(E, "class", "relative h-[24rem] w-full overflow-hidden"),
          Q(h.src, (_ = We)) || o(h, "src", _),
          o(h, "alt", "Logo"),
          o(h, "class", "mx-auto -mt-14 block w-72"),
          o(h, "width", "271"),
          o(h, "height", "28"),
          o(h, "draggable", "false"),
          o(l, "class", "relative z-10 mx-auto h-full"),
          o(
            t,
            "class",
            "relative mt-36 h-[35.25rem] before:absolute before:inset-0 before:z-0 before:bg-[url('/footer-bg.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-35 before:content-['']"
          ),
          o(w, "href", "/"),
          o(
            w,
            "class",
            "font-avantGarde mx-auto mb-6 mt-12 block text-center text-[0.625rem] text-white"
          ),
          o(e, "class", "pb-10");
      },
      m(z, O) {
        S(z, e, O),
          m(e, t),
          m(t, l),
          m(l, s),
          G(a, s, null),
          m(s, n),
          m(s, i),
          m(l, u),
          m(l, d),
          G($, d, null),
          m(d, x),
          G(g, d, null),
          m(l, f),
          m(l, E);
        for (let U = 0; U < I.length; U += 1) I[U] && I[U].m(E, null);
        m(l, k), m(l, h), m(e, M), G(y, e, null), m(e, C), m(e, w), (j = !0);
      },
      p(z, [O]) {
        if (O & 1) {
          D = Ve(z[0]);
          let U;
          for (U = 0; U < D.length; U += 1) {
            const q = Ct(z, D, U);
            I[U] ? I[U].p(q, O) : ((I[U] = yt(q)), I[U].c(), I[U].m(E, null));
          }
          for (; U < I.length; U += 1) I[U].d(1);
          I.length = D.length;
        }
      },
      i(z) {
        j ||
          (A(a.$$.fragment, z),
          A($.$$.fragment, z),
          A(g.$$.fragment, z),
          A(y.$$.fragment, z),
          (j = !0));
      },
      o(z) {
        H(a.$$.fragment, z),
          H($.$$.fragment, z),
          H(g.$$.fragment, z),
          H(y.$$.fragment, z),
          (j = !1);
      },
      d(z) {
        z && p(e), F(a), F($), F(g), Xe(I, z), F(y);
      },
    }
  );
}
function ql(r, e, t) {
  let l = [
      { size: 56, bottom: "234px", left: "12.7%" },
      { size: 86, bottom: "112px", left: "5.5%" },
      { size: 62, bottom: "251px", left: "44.5%" },
      { size: 60, bottom: "127px", left: "44.5%" },
      { size: 45, bottom: "278px", left: "78.8%" },
      { size: 73, bottom: "129px", left: "77.8%" },
    ],
    s = [],
    a = new Set();
  const n = () => {
    a.size >= s.length && a.clear();
    const i = s.filter((u) => !l.some((d) => d.pfp === u.src) && !a.has(u.src)),
      c = i[Math.floor(Math.random() * i.length)];
    return c && a.add(c.src), c;
  };
  return (
    Te(async () => {
      (s = await Promise.all(
        At.map(
          (c) =>
            new Promise((u, d) => {
              const $ = new Image();
              ($.onload = () => u($)), ($.onerror = d), ($.src = `/PFPs/${c}`);
            })
        )
      )),
        t(
          0,
          (l = l.map((c) => ({
            ...c,
            updateInterval: Math.random() * 1e3 + 1e3,
            duration: 3 + Math.random() * 2,
            xOffset: (Math.random() * 20 - 10).toFixed(2),
            yOffset: (Math.random() * 20 - 10).toFixed(2),
          })))
        );
      const i = () => {};
      return (
        window.addEventListener("resize", i),
        l.forEach((c, u) => {
          setInterval(() => {
            t(0, (l[u] = { ...c, pfp: n() }), l);
          }, c.updateInterval);
        }),
        () => {
          window.removeEventListener("resize", i);
        }
      );
    }),
    [l]
  );
}
class Jl extends pe {
  constructor(e) {
    super(), he(this, e, ql, Wl, fe, {});
  }
}
function kt(r) {
  let e, t, l, s;
  return {
    c() {
      (e = v("div")), (t = v("div")), this.h();
    },
    l(a) {
      e = b(a, "DIV", { class: !0 });
      var n = N(e);
      (t = b(n, "DIV", { class: !0, style: !0 })),
        N(t).forEach(p),
        n.forEach(p),
        this.h();
    },
    h() {
      o(
        t,
        "class",
        "bg-primary h-full transition-all duration-300 ease-out svelte-1b54tym"
      ),
        B(t, "width", r[0] + "%"),
        o(
          e,
          "class",
          "fixed left-0 top-0 z-[999999] h-1 w-full bg-transparent"
        );
    },
    m(a, n) {
      S(a, e, n), m(e, t), (s = !0);
    },
    p(a, n) {
      (!s || n & 1) && B(t, "width", a[0] + "%");
    },
    i(a) {
      s ||
        (a &&
          ge(() => {
            s && (l || (l = Me(e, $e, {}, !0)), l.run(1));
          }),
        (s = !0));
    },
    o(a) {
      a && (l || (l = Me(e, $e, {}, !1)), l.run(0)), (s = !1);
    },
    d(a) {
      a && p(e), a && l && l.end();
    },
  };
}
function Yl(r) {
  let e,
    t = r[1] && kt(r);
  return {
    c() {
      t && t.c(), (e = me());
    },
    l(l) {
      t && t.l(l), (e = me());
    },
    m(l, s) {
      t && t.m(l, s), S(l, e, s);
    },
    p(l, [s]) {
      l[1]
        ? t
          ? (t.p(l, s), s & 2 && A(t, 1))
          : ((t = kt(l)), t.c(), A(t, 1), t.m(e.parentNode, e))
        : t &&
          (ce(),
          H(t, 1, 1, () => {
            t = null;
          }),
          ue());
    },
    i(l) {
      A(t);
    },
    o(l) {
      H(t);
    },
    d(l) {
      l && p(e), t && t.d(l);
    },
  };
}
function Ql(r, e, t) {
  let l = 0,
    s = !1,
    a;
  return [
    l,
    s,
    async () => {
      t(1, (s = !0)),
        t(0, (l = 0)),
        await Zt(),
        t(0, (l = 20)),
        (a = setInterval(() => {
          l < 90 && (t(0, (l += Math.random() * 15)), l > 90 && t(0, (l = 90)));
        }, 400));
    },
    () => {
      a && clearInterval(a),
        t(0, (l = 100)),
        setTimeout(() => {
          t(1, (s = !1)), t(0, (l = 0));
        }, 300);
    },
  ];
}
class Xl extends pe {
  constructor(e) {
    super(), he(this, e, Ql, Yl, fe, { start: 2, complete: 3 });
  }
  get start() {
    return this.$$.ctx[2];
  }
  get complete() {
    return this.$$.ctx[3];
  }
}
const { document: le } = Rt;
function Kl(r) {
  let e, t, l, s, a, n;
  t = new Zl({});
  const i = r[7].default,
    c = xt(i, r, r[6], null);
  return (
    (a = new Jl({})),
    {
      c() {
        (e = v("div")),
          P(t.$$.fragment),
          (l = L()),
          c && c.c(),
          (s = L()),
          P(a.$$.fragment),
          this.h();
      },
      l(u) {
        e = b(u, "DIV", { class: !0 });
        var d = N(e);
        Z(t.$$.fragment, d),
          (l = T(d)),
          c && c.l(d),
          (s = T(d)),
          Z(a.$$.fragment, d),
          d.forEach(p),
          this.h();
      },
      h() {
        o(e, "class", "pt-14");
      },
      m(u, d) {
        S(u, e, d),
          G(t, e, null),
          m(e, l),
          c && c.m(e, null),
          m(e, s),
          G(a, e, null),
          (n = !0);
      },
      p(u, d) {
        c &&
          c.p &&
          (!n || d & 64) &&
          Et(c, i, u, u[6], n ? Vt(i, u[6], d, null) : Mt(u[6]), null);
      },
      i(u) {
        n || (A(t.$$.fragment, u), A(c, u), A(a.$$.fragment, u), (n = !0));
      },
      o(u) {
        H(t.$$.fragment, u), H(c, u), H(a.$$.fragment, u), (n = !1);
      },
      d(u) {
        u && p(e), F(t), c && c.d(u), F(a);
      },
    }
  );
}
function es(r) {
  let e, t, l, s, a, n, i, c, u, d, $;
  (e = new El({})), (s = new rl({}));
  const x = r[7].default,
    g = xt(x, r, r[6], null);
  return (
    (d = new cl({})),
    {
      c() {
        P(e.$$.fragment),
          (t = L()),
          (l = v("div")),
          P(s.$$.fragment),
          (a = L()),
          (n = v("div")),
          (i = v("div")),
          (c = v("div")),
          g && g.c(),
          (u = L()),
          P(d.$$.fragment),
          this.h();
      },
      l(f) {
        Z(e.$$.fragment, f), (t = T(f)), (l = b(f, "DIV", { class: !0 }));
        var E = N(l);
        Z(s.$$.fragment, E), (a = T(E)), (n = b(E, "DIV", { class: !0 }));
        var k = N(n);
        i = b(k, "DIV", { class: !0 });
        var h = N(i);
        c = b(h, "DIV", { class: !0 });
        var _ = N(c);
        g && g.l(_),
          _.forEach(p),
          h.forEach(p),
          k.forEach(p),
          E.forEach(p),
          (u = T(f)),
          Z(d.$$.fragment, f),
          this.h();
      },
      h() {
        o(c, "class", "mx-auto transition-all duration-300"),
          o(
            i,
            "class",
            "slot flex-1 rounded-[0.625rem] p-5 sm:p-7 lg:p-9 svelte-1vqvn9r"
          ),
          o(
            n,
            "class",
            "flex min-w-0 max-w-full flex-1 flex-col overflow-x-hidden px-3 lg:px-5"
          ),
          o(l, "class", "mx-auto flex max-w-[1440px] overflow-hidden");
      },
      m(f, E) {
        G(e, f, E),
          S(f, t, E),
          S(f, l, E),
          G(s, l, null),
          m(l, a),
          m(l, n),
          m(n, i),
          m(i, c),
          g && g.m(c, null),
          S(f, u, E),
          G(d, f, E),
          ($ = !0);
      },
      p(f, E) {
        g &&
          g.p &&
          (!$ || E & 64) &&
          Et(g, x, f, f[6], $ ? Vt(x, f[6], E, null) : Mt(f[6]), null);
      },
      i(f) {
        $ ||
          (A(e.$$.fragment, f),
          A(s.$$.fragment, f),
          A(g, f),
          A(d.$$.fragment, f),
          ($ = !0));
      },
      o(f) {
        H(e.$$.fragment, f),
          H(s.$$.fragment, f),
          H(g, f),
          H(d.$$.fragment, f),
          ($ = !1);
      },
      d(f) {
        f && (p(t), p(l), p(u)), F(e, f), F(s), g && g.d(f), F(d, f);
      },
    }
  );
}
function ts(r) {
  let e,
    t = `<img src="${el}" alt="" class="w-[60%] max-w-[300px]"/> <h1 class="xs:text-[1.5rem] text-center opacity-50">Infinity it’s not the start nor the end <br/>mr Infinity.</h1>`;
  return {
    c() {
      (e = v("div")), (e.innerHTML = t), this.h();
    },
    l(l) {
      (e = b(l, "DIV", { class: !0, "data-svelte-h": !0 })),
        W(e) !== "svelte-1p4ld16" && (e.innerHTML = t),
        this.h();
    },
    h() {
      o(
        e,
        "class",
        "loading-state flex min-h-screen flex-col items-center justify-center gap-10 svelte-1vqvn9r"
      ),
        ve(e, "fade-out", r[1]);
    },
    m(l, s) {
      S(l, e, s);
    },
    p(l, s) {
      s & 2 && ve(e, "fade-out", l[1]);
    },
    i: ee,
    o: ee,
    d(l) {
      l && p(e);
    },
  };
}
function ls(r) {
  let e, t, l, s, a, n, i, c, u, d, $, x, g, f, E, k, h, _, M, y;
  le.title = e = r[4].title;
  let C = {};
  (f = new Xl({ props: C })), r[8](f);
  const w = [ts, es, Kl],
    V = [];
  function j(D, I) {
    return D[0] ? (D[3].md ? 1 : 2) : 0;
  }
  return (
    (k = j(r)),
    (h = V[k] = w[k](r)),
    (M = new Nl({})),
    {
      c() {
        (t = v("meta")),
          (l = v("meta")),
          (s = v("meta")),
          (a = v("meta")),
          (n = v("meta")),
          (i = v("meta")),
          (c = v("meta")),
          (u = v("meta")),
          (d = v("meta")),
          ($ = v("meta")),
          (x = v("meta")),
          (g = L()),
          P(f.$$.fragment),
          (E = L()),
          h.c(),
          (_ = L()),
          P(M.$$.fragment),
          this.h();
      },
      l(D) {
        const I = Bt("svelte-1nkwzjf", le.head);
        (t = b(I, "META", { name: !0, content: !0 })),
          (l = b(I, "META", { property: !0, content: !0 })),
          (s = b(I, "META", { property: !0, content: !0 })),
          (a = b(I, "META", { property: !0, content: !0 })),
          (n = b(I, "META", { property: !0, content: !0 })),
          (i = b(I, "META", { property: !0, content: !0 })),
          (c = b(I, "META", { property: !0, content: !0 })),
          (u = b(I, "META", { property: !0, content: !0 })),
          (d = b(I, "META", { property: !0, content: !0 })),
          ($ = b(I, "META", { property: !0, content: !0 })),
          (x = b(I, "META", { property: !0, content: !0 })),
          I.forEach(p),
          (g = T(D)),
          Z(f.$$.fragment, D),
          (E = T(D)),
          h.l(D),
          (_ = T(D)),
          Z(M.$$.fragment, D),
          this.h();
      },
      h() {
        o(t, "name", "description"),
          o(t, "content", r[4].description),
          o(l, "property", "og:url"),
          o(l, "content", "https://app.nfinityai.xyz"),
          o(s, "property", "og:title"),
          o(s, "content", r[4].title),
          o(a, "property", "og:description"),
          o(a, "content", r[4].description),
          o(n, "property", "og:image:url"),
          o(n, "content", r[4].thumbnail),
          o(i, "property", "twitter:domain"),
          o(i, "content", "app.nfinityai.xyz"),
          o(c, "property", "twitter:url"),
          o(c, "content", "https://app.nfinityai.xyz"),
          o(u, "property", "twitter:card"),
          o(u, "content", "summary_large_image"),
          o(d, "property", "twitter:image"),
          o(d, "content", r[4].thumbnail),
          o($, "property", "twitter:title"),
          o($, "content", r[4].title),
          o(x, "property", "twitter:description"),
          o(x, "content", r[4].description);
      },
      m(D, I) {
        m(le.head, t),
          m(le.head, l),
          m(le.head, s),
          m(le.head, a),
          m(le.head, n),
          m(le.head, i),
          m(le.head, c),
          m(le.head, u),
          m(le.head, d),
          m(le.head, $),
          m(le.head, x),
          S(D, g, I),
          G(f, D, I),
          S(D, E, I),
          V[k].m(D, I),
          S(D, _, I),
          G(M, D, I),
          (y = !0);
      },
      p(D, [I]) {
        (!y || I & 16) && e !== (e = D[4].title) && (le.title = e);
        const z = {};
        f.$set(z);
        let O = k;
        (k = j(D)),
          k === O
            ? V[k].p(D, I)
            : (ce(),
              H(V[O], 1, 1, () => {
                V[O] = null;
              }),
              ue(),
              (h = V[k]),
              h ? h.p(D, I) : ((h = V[k] = w[k](D)), h.c()),
              A(h, 1),
              h.m(_.parentNode, _));
      },
      i(D) {
        y || (A(f.$$.fragment, D), A(h), A(M.$$.fragment, D), (y = !0));
      },
      o(D) {
        H(f.$$.fragment, D), H(h), H(M.$$.fragment, D), (y = !1);
      },
      d(D) {
        D && (p(g), p(E), p(_)),
          p(t),
          p(l),
          p(s),
          p(a),
          p(n),
          p(i),
          p(c),
          p(u),
          p(d),
          p($),
          p(x),
          r[8](null),
          F(f, D),
          V[k].d(D),
          F(M, D);
      },
    }
  );
}
function ss(r, e, t) {
  let l, s, a, n;
  J(r, de, (f) => t(5, (l = f))),
    J(r, se, (f) => t(9, (s = f))),
    J(r, ke, (f) => t(10, (a = f))),
    J(r, Qt, (f) => t(3, (n = f)));
  let { $$slots: i = {}, $$scope: c } = e,
    u,
    d = !1,
    $;
  const x = {
    title: "Changing the way you use, create, and own AI.",
    description:
      "NFINITY: All-in-one AI platform for pay-per-use model access, custom AI development, and tokenized ownership. Generate images, video, speech, music, and 3D content without subscriptions.",
    thumbnail: "/thumbnail.webp",
  };
  Te(async () => {
    window.location.pathname.includes("/models/") && Fe(ke, (a = !1), a);
    try {
      const f = await fetch("/api/auth/check"),
        {
          isAuthenticated: E,
          address: k,
          credits: h,
          user: _,
        } = await f.json();
      if (E) {
        const M = JSON.parse(localStorage.getItem("session") || "{}");
        M.signature && M.message
          ? de.setSession(k, h, _, M.signature, M.message)
          : await Ke(s.address);
      }
    } catch (f) {
      console.error("Error checking session:", f);
    } finally {
      t(1, (d = !0)),
        setTimeout(() => {
          t(0, (u = !0));
        }, 300);
    }
  }),
    Re(({ from: f, to: E }) => {
      var k, h;
      ((k = f == null ? void 0 : f.url) == null ? void 0 : k.pathname) !=
        ((h = E == null ? void 0 : E.url) == null ? void 0 : h.pathname) &&
        document.getElementById("app-container").scrollTo(0, 0);
    }),
    Jt(() => {
      $ == null || $.start();
    }),
    Yt(() => {
      $ == null || $.complete();
    });
  function g(f) {
    Qe[f ? "unshift" : "push"](() => {
      ($ = f), t(2, $);
    });
  }
  return (
    (r.$$set = (f) => {
      "$$scope" in f && t(6, (c = f.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 32 && l.isAuthenticated && Wt();
    }),
    [u, d, $, n, x, l, c, i, g]
  );
}
class vs extends pe {
  constructor(e) {
    super(), he(this, e, ss, ls, fe, {});
  }
}
export { vs as component };
