const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index.es.BDSXsdaP.js", "./preload-helper.C1FmrZbK.js"])
) => i.map((i) => d[i]);
import {
  s as Ge,
  O as Rt,
  e as S,
  c as T,
  d as F,
  g as P,
  h as C,
  i as $,
  P as Dt,
  Q as zt,
  R as Gt,
  u as xe,
  x as ge,
  o as as,
  p as tc,
  G as Mn,
  ag as Gs,
  ah as Hs,
  ac as nc,
  H as Gn,
  ad as rc,
  B as Hn,
  ai as qs,
  N as qn,
  a as D,
  f as z,
  y as Ie,
  j as k,
  A as ae,
  t as Q,
  q as X,
  I as Be,
  k as Bn,
  r as ce,
  E as ht,
  F as Vs,
  z as wt,
  aa as jt,
  b as et,
  aj as di,
  T as Ws,
  af as vt,
  w as Se,
  ak as Ks,
  a9 as sc,
  n as Ye,
  al as fr,
  a8 as $t,
  U as oc,
  am as dr,
  l as Js,
  v as ic,
  J as Zs,
} from "./scheduler.Bo5rxkXI.js";
import {
  S as He,
  i as qe,
  e as q,
  t as J,
  g as ut,
  d as lt,
  c as fe,
  a as me,
  m as de,
  f as he,
  k as Vn,
  b as Qs,
  h as Xs,
} from "./index.BXG-_PB9.js";
import { e as Ys } from "./mediaQuery.D7fHuHNS.js";
import { f as Wn, a as ac, s as cc } from "./index.Bcc-xugq.js";
import { w as _t, d as uc } from "./index.zzQyqAoa.js";
import { B as gt } from "./Button.C-W2ZKx2.js";
import { g as hi, c as xt } from "./utils.CcZNOUuG.js";
import { _ as Kn } from "./preload-helper.C1FmrZbK.js";
const dm =
    typeof window < "u"
      ? window
      : typeof globalThis < "u"
      ? globalThis
      : global,
  lc =
    "" + new URL("../assets/default-avatar.swr93oUO.svg", import.meta.url).href,
  fc = () => {
    const {
      subscribe: t,
      set: e,
      update: n,
    } = _t({
      isAuthenticated: !1,
      address: null,
      credits: null,
      user: null,
      signature: null,
      message: null,
    });
    return {
      subscribe: t,
      setSession: (r, s, o, i, a) => {
        o && !o.avatar_url && (o.avatar_url = lc);
        const u = {
          address: r,
          credits: s,
          user: o,
          signature: i,
          message: a,
          isAuthenticated: !0,
        };
        localStorage.setItem("session", JSON.stringify(u)),
          n((c) => ({ ...c, ...u }));
      },
      clearSession: () => {
        localStorage.removeItem("session"),
          e({
            isAuthenticated: !1,
            address: null,
            credits: null,
            user: null,
            signature: null,
            message: null,
          });
      },
      loadSession: () => {
        const r = localStorage.getItem("session");
        if (r) {
          const s = JSON.parse(r);
          return e(s), !0;
        }
        return !1;
      },
      updateCredits: (r) => {
        n((s) => {
          const o = { ...s, credits: r };
          return localStorage.setItem("session", JSON.stringify(o)), o;
        });
      },
      updateUserAvatar: (r) => {
        n((s) => {
          const o = { ...s, user: { ...s.user, avatar_url: r } };
          return localStorage.setItem("session", JSON.stringify(o)), o;
        });
      },
    };
  },
  Pn = fc(),
  hr = "742d62d732b76720b7c6db971feb28fa80b79bf2703329d91e4c9c8bf67a1cda",
  pi = "9936f427912dd87e0101a78d2ccbc345",
  mi = "https://app.nfinityai.xyz",
  dc = "0x0000000000000000000000000000000000000000",
  gn = "0x9ca6dc93a8e0947ba0aa54520d9f27e657e60062",
  bi = "2.21.38";
let At = {
    getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: n }) =>
      e ? `${t ?? "https://viem.sh"}${e}${n ? `#${n}` : ""}` : void 0,
    version: `viem@${bi}`,
  },
  A = class Mr extends Error {
    constructor(e, n = {}) {
      var a;
      const r = (() => {
          var u;
          return n.cause instanceof Mr
            ? n.cause.details
            : (u = n.cause) != null && u.message
            ? n.cause.message
            : n.details;
        })(),
        s = (n.cause instanceof Mr && n.cause.docsPath) || n.docsPath,
        o =
          (a = At.getDocsUrl) == null
            ? void 0
            : a.call(At, { ...n, docsPath: s }),
        i = [
          e || "An error occurred.",
          "",
          ...(n.metaMessages ? [...n.metaMessages, ""] : []),
          ...(o ? [`Docs: ${o}`] : []),
          ...(r ? [`Details: ${r}`] : []),
          ...(At.version ? [`Version: ${At.version}`] : []),
        ].join(`
`);
      super(i, n.cause ? { cause: n.cause } : void 0),
        Object.defineProperty(this, "details", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "docsPath", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "metaMessages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "shortMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "version", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "name", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "BaseError",
        }),
        (this.details = r),
        (this.docsPath = s),
        (this.metaMessages = n.metaMessages),
        (this.name = n.name ?? this.name),
        (this.shortMessage = e),
        (this.version = bi);
    }
    walk(e) {
      return gi(this, e);
    }
  };
function gi(t, e) {
  return e != null && e(t)
    ? t
    : t && typeof t == "object" && "cause" in t
    ? gi(t.cause, e)
    : e
    ? null
    : t;
}
class hc extends A {
  constructor({ max: e, min: n, signed: r, size: s, value: o }) {
    super(
      `Number "${o}" is not in safe ${
        s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""
      }integer range ${e ? `(${n} to ${e})` : `(above ${n})`}`,
      { name: "IntegerOutOfRangeError" }
    );
  }
}
class pc extends A {
  constructor(e) {
    super(
      `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
      { name: "InvalidBytesBooleanError" }
    );
  }
}
class mc extends A {
  constructor({ givenSize: e, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`, {
      name: "SizeOverflowError",
    });
  }
}
class yi extends A {
  constructor({ offset: e, position: n, size: r }) {
    super(
      `Slice ${
        n === "start" ? "starting" : "ending"
      } at offset "${e}" is out-of-bounds (size: ${r}).`,
      { name: "SliceOffsetOutOfBoundsError" }
    );
  }
}
class wi extends A {
  constructor({ size: e, targetSize: n, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} size (${e}) exceeds padding size (${n}).`,
      { name: "SizeExceedsPaddingSizeError" }
    );
  }
}
class eo extends A {
  constructor({ size: e, targetSize: n, type: r }) {
    super(
      `${r.charAt(0).toUpperCase()}${r
        .slice(1)
        .toLowerCase()} is expected to be ${n} ${r} long, but is ${e} ${r} long.`,
      { name: "InvalidBytesLengthError" }
    );
  }
}
function Et(t, { dir: e, size: n = 32 } = {}) {
  return typeof t == "string"
    ? tt(t, { dir: e, size: n })
    : bc(t, { dir: e, size: n });
}
function tt(t, { dir: e, size: n = 32 } = {}) {
  if (n === null) return t;
  const r = t.replace("0x", "");
  if (r.length > n * 2)
    throw new wi({ size: Math.ceil(r.length / 2), targetSize: n, type: "hex" });
  return `0x${r[e === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function bc(t, { dir: e, size: n = 32 } = {}) {
  if (n === null) return t;
  if (t.length > n)
    throw new wi({ size: t.length, targetSize: n, type: "bytes" });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = e === "right";
    r[o ? s : n - s - 1] = t[o ? s : t.length - s - 1];
  }
  return r;
}
function nt(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string"
    ? !1
    : e
    ? /^0x[0-9a-fA-F]*$/.test(t)
    : t.startsWith("0x");
}
function we(t) {
  return nt(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
function dn(t, { dir: e = "left" } = {}) {
  let n = typeof t == "string" ? t.replace("0x", "") : t,
    r = 0;
  for (
    let s = 0;
    s < n.length - 1 &&
    n[e === "left" ? s : n.length - s - 1].toString() === "0";
    s++
  )
    r++;
  return (
    (n = e === "left" ? n.slice(r) : n.slice(0, n.length - r)),
    typeof t == "string"
      ? (n.length === 1 && e === "right" && (n = `${n}0`),
        `0x${n.length % 2 === 1 ? `0${n}` : n}`)
      : n
  );
}
const gc = new TextEncoder();
function cs(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint"
    ? wc(t, e)
    : typeof t == "boolean"
    ? yc(t, e)
    : nt(t)
    ? Re(t, e)
    : vi(t, e);
}
function yc(t, e = {}) {
  const n = new Uint8Array(1);
  return (
    (n[0] = Number(t)),
    typeof e.size == "number"
      ? (je(n, { size: e.size }), Et(n, { size: e.size }))
      : n
  );
}
const Ve = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
function to(t) {
  if (t >= Ve.zero && t <= Ve.nine) return t - Ve.zero;
  if (t >= Ve.A && t <= Ve.F) return t - (Ve.A - 10);
  if (t >= Ve.a && t <= Ve.f) return t - (Ve.a - 10);
}
function Re(t, e = {}) {
  let n = t;
  e.size &&
    (je(n, { size: e.size }), (n = Et(n, { dir: "right", size: e.size })));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2,
    o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const u = to(r.charCodeAt(a++)),
      c = to(r.charCodeAt(a++));
    if (u === void 0 || c === void 0)
      throw new A(
        `Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`
      );
    o[i] = u * 16 + c;
  }
  return o;
}
function wc(t, e) {
  const n = W(t, e);
  return Re(n);
}
function vi(t, e = {}) {
  const n = gc.encode(t);
  return typeof e.size == "number"
    ? (je(n, { size: e.size }), Et(n, { dir: "right", size: e.size }))
    : n;
}
function je(t, { size: e }) {
  if (we(t) > e) throw new mc({ givenSize: we(t), maxSize: e });
}
function It(t, e = {}) {
  const { signed: n } = e;
  e.size && je(t, { size: e.size });
  const r = BigInt(t);
  if (!n) return r;
  const s = (t.length - 2) / 2,
    o = (1n << (BigInt(s) * 8n - 1n)) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function rt(t, e = {}) {
  return Number(It(t, e));
}
function _i(t, e = {}) {
  let n = Re(t);
  return (
    e.size && (je(n, { size: e.size }), (n = dn(n, { dir: "right" }))),
    new TextDecoder().decode(n)
  );
}
const vc = Array.from({ length: 256 }, (t, e) =>
  e.toString(16).padStart(2, "0")
);
function On(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint"
    ? W(t, e)
    : typeof t == "string"
    ? Jn(t, e)
    : typeof t == "boolean"
    ? xi(t, e)
    : Pe(t, e);
}
function xi(t, e = {}) {
  const n = `0x${Number(t)}`;
  return typeof e.size == "number"
    ? (je(n, { size: e.size }), Et(n, { size: e.size }))
    : n;
}
function Pe(t, e = {}) {
  let n = "";
  for (let s = 0; s < t.length; s++) n += vc[t[s]];
  const r = `0x${n}`;
  return typeof e.size == "number"
    ? (je(r, { size: e.size }), Et(r, { dir: "right", size: e.size }))
    : r;
}
function W(t, e = {}) {
  const { signed: n, size: r } = e,
    s = BigInt(t);
  let o;
  r
    ? n
      ? (o = (1n << (BigInt(r) * 8n - 1n)) - 1n)
      : (o = 2n ** (BigInt(r) * 8n) - 1n)
    : typeof t == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if ((o && s > o) || s < i) {
    const u = typeof t == "bigint" ? "n" : "";
    throw new hc({
      max: o ? `${o}${u}` : void 0,
      min: `${i}${u}`,
      signed: n,
      size: r,
      value: `${t}${u}`,
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(
    16
  )}`;
  return r ? Et(a, { size: r }) : a;
}
const _c = new TextEncoder();
function Jn(t, e = {}) {
  const n = _c.encode(t);
  return Pe(n, e);
}
function Ct(t, { includeName: e = !1 } = {}) {
  if (t.type !== "function" && t.type !== "event" && t.type !== "error")
    throw new Oc(t.type);
  return `${t.name}(${us(t.inputs, { includeName: e })})`;
}
function us(t, { includeName: e = !1 } = {}) {
  return t ? t.map((n) => xc(n, { includeName: e })).join(e ? ", " : ",") : "";
}
function xc(t, { includeName: e }) {
  return t.type.startsWith("tuple")
    ? `(${us(t.components, { includeName: e })})${t.type.slice(5)}`
    : t.type + (e && t.name ? ` ${t.name}` : "");
}
class Ic extends A {
  constructor({ docsPath: e }) {
    super(
      [
        "A constructor was not found on the ABI.",
        "Make sure you are using the correct ABI and that the constructor exists on it.",
      ].join(`
`),
      { docsPath: e, name: "AbiConstructorNotFoundError" }
    );
  }
}
class no extends A {
  constructor({ docsPath: e }) {
    super(
      [
        "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
        "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
      ].join(`
`),
      { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
    );
  }
}
class Cc extends A {
  constructor({ data: e, params: n, size: r }) {
    super(
      [`Data size of ${r} bytes is too small for given parameters.`].join(`
`),
      {
        metaMessages: [
          `Params: (${us(n, { includeName: !0 })})`,
          `Data:   ${e} (${r} bytes)`,
        ],
        name: "AbiDecodingDataSizeTooSmallError",
      }
    ),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "params", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "size", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = e),
      (this.params = n),
      (this.size = r);
  }
}
class Zn extends A {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError",
    });
  }
}
class Pc extends A {
  constructor({ expectedLength: e, givenLength: n, type: r }) {
    super(
      [
        `ABI encoding array length mismatch for type ${r}.`,
        `Expected length: ${e}`,
        `Given length: ${n}`,
      ].join(`
`),
      { name: "AbiEncodingArrayLengthMismatchError" }
    );
  }
}
class kc extends A {
  constructor({ expectedSize: e, value: n }) {
    super(
      `Size of bytes "${n}" (bytes${we(
        n
      )}) does not match expected size (bytes${e}).`,
      { name: "AbiEncodingBytesSizeMismatchError" }
    );
  }
}
class Ec extends A {
  constructor({ expectedLength: e, givenLength: n }) {
    super(
      [
        "ABI encoding params/values length mismatch.",
        `Expected length (params): ${e}`,
        `Given length (values): ${n}`,
      ].join(`
`),
      { name: "AbiEncodingLengthMismatchError" }
    );
  }
}
class Ii extends A {
  constructor(e, { docsPath: n }) {
    super(
      [
        `Encoded error signature "${e}" not found on ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
      ].join(`
`),
      { docsPath: n, name: "AbiErrorSignatureNotFoundError" }
    ),
      Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.signature = e);
  }
}
class jn extends A {
  constructor(e, { docsPath: n } = {}) {
    super(
      [
        `Function ${e ? `"${e}" ` : ""}not found on ABI.`,
        "Make sure you are using the correct ABI and that the function exists on it.",
      ].join(`
`),
      { docsPath: n, name: "AbiFunctionNotFoundError" }
    );
  }
}
class Sc extends A {
  constructor(e, { docsPath: n }) {
    super(
      [
        `Function "${e}" does not contain any \`outputs\` on ABI.`,
        "Cannot decode function result without knowing what the parameter types are.",
        "Make sure you are using the correct ABI and that the function exists on it.",
      ].join(`
`),
      { docsPath: n, name: "AbiFunctionOutputsNotFoundError" }
    );
  }
}
class Tc extends A {
  constructor(e, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${e.type}\` in \`${Ct(e.abiItem)}\`, and`,
        `\`${n.type}\` in \`${Ct(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI.",
      ],
      name: "AbiItemAmbiguityError",
    });
  }
}
class Ac extends A {
  constructor(e, { docsPath: n }) {
    super(
      [
        `Type "${e}" is not a valid encoding type.`,
        "Please provide a valid ABI type.",
      ].join(`
`),
      { docsPath: n, name: "InvalidAbiEncodingType" }
    );
  }
}
class Mc extends A {
  constructor(e, { docsPath: n }) {
    super(
      [
        `Type "${e}" is not a valid decoding type.`,
        "Please provide a valid ABI type.",
      ].join(`
`),
      { docsPath: n, name: "InvalidAbiDecodingType" }
    );
  }
}
class Bc extends A {
  constructor(e) {
    super(
      [`Value "${e}" is not a valid array.`].join(`
`),
      { name: "InvalidArrayError" }
    );
  }
}
class Oc extends A {
  constructor(e) {
    super(
      [
        `"${e}" is not a valid definition type.`,
        'Valid types: "function", "event", "error"',
      ].join(`
`),
      { name: "InvalidDefinitionTypeError" }
    );
  }
}
function Pt(t) {
  return typeof t[0] == "string" ? Qn(t) : jc(t);
}
function jc(t) {
  let e = 0;
  for (const s of t) e += s.length;
  const n = new Uint8Array(e);
  let r = 0;
  for (const s of t) n.set(s, r), (r += s.length);
  return n;
}
function Qn(t) {
  return `0x${t.reduce((e, n) => e + n.replace("0x", ""), "")}`;
}
class Ht extends A {
  constructor({ address: e }) {
    super(`Address "${e}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart.",
      ],
      name: "InvalidAddressError",
    });
  }
}
class Xn extends Map {
  constructor(e) {
    super(),
      Object.defineProperty(this, "maxSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.maxSize = e);
  }
  get(e) {
    const n = super.get(e);
    return super.has(e) && n !== void 0 && (this.delete(e), super.set(e, n)), n;
  }
  set(e, n) {
    if ((super.set(e, n), this.maxSize && this.size > this.maxSize)) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
function Nn(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
function Nc(t) {
  return (
    t instanceof Uint8Array ||
    (t != null && typeof t == "object" && t.constructor.name === "Uint8Array")
  );
}
function Yn(t, ...e) {
  if (!Nc(t)) throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(
      `Uint8Array expected of length ${e}, not of length=${t.length}`
    );
}
function hm(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Nn(t.outputLen), Nn(t.blockLen);
}
function $n(t, e = !0) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Ci(t, e) {
  Yn(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(
      `digestInto() expects output buffer of length at least ${n}`
    );
}
const yn = BigInt(2 ** 32 - 1),
  ro = BigInt(32);
function $c(t, e = !1) {
  return e
    ? { h: Number(t & yn), l: Number((t >> ro) & yn) }
    : { h: Number((t >> ro) & yn) | 0, l: Number(t & yn) | 0 };
}
function Fc(t, e = !1) {
  let n = new Uint32Array(t.length),
    r = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: o, l: i } = $c(t[s], e);
    [n[s], r[s]] = [o, i];
  }
  return [n, r];
}
const Lc = (t, e, n) => (t << n) | (e >>> (32 - n)),
  Uc = (t, e, n) => (e << n) | (t >>> (32 - n)),
  Rc = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
  Dc = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n)),
  mt =
    typeof globalThis == "object" && "crypto" in globalThis
      ? globalThis.crypto
      : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const zc =
    (t) =>
      new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
  pr = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  Le = (t, e) => (t << (32 - e)) | (t >>> e),
  so = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
  Gc = (t) =>
    ((t << 24) & 4278190080) |
    ((t << 8) & 16711680) |
    ((t >>> 8) & 65280) |
    ((t >>> 24) & 255);
function oo(t) {
  for (let e = 0; e < t.length; e++) t[e] = Gc(t[e]);
}
function Hc(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function ls(t) {
  return typeof t == "string" && (t = Hc(t)), Yn(t), t;
}
function pm(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    Yn(s), (e += s.length);
  }
  const n = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const o = t[r];
    n.set(o, s), (s += o.length);
  }
  return n;
}
class Pi {
  clone() {
    return this._cloneInto();
  }
}
function ki(t) {
  const e = (r) => t().update(ls(r)).digest(),
    n = t();
  return (
    (e.outputLen = n.outputLen),
    (e.blockLen = n.blockLen),
    (e.create = () => t()),
    e
  );
}
function mm(t = 32) {
  if (mt && typeof mt.getRandomValues == "function")
    return mt.getRandomValues(new Uint8Array(t));
  if (mt && typeof mt.randomBytes == "function") return mt.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
const Ei = [],
  Si = [],
  Ti = [],
  qc = BigInt(0),
  Mt = BigInt(1),
  Vc = BigInt(2),
  Wc = BigInt(7),
  Kc = BigInt(256),
  Jc = BigInt(113);
for (let t = 0, e = Mt, n = 1, r = 0; t < 24; t++) {
  ([n, r] = [r, (2 * n + 3 * r) % 5]),
    Ei.push(2 * (5 * r + n)),
    Si.push((((t + 1) * (t + 2)) / 2) % 64);
  let s = qc;
  for (let o = 0; o < 7; o++)
    (e = ((e << Mt) ^ ((e >> Wc) * Jc)) % Kc),
      e & Vc && (s ^= Mt << ((Mt << BigInt(o)) - Mt));
  Ti.push(s);
}
const [Zc, Qc] = Fc(Ti, !0),
  io = (t, e, n) => (n > 32 ? Rc(t, e, n) : Lc(t, e, n)),
  ao = (t, e, n) => (n > 32 ? Dc(t, e, n) : Uc(t, e, n));
function Xc(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = t[i] ^ t[i + 10] ^ t[i + 20] ^ t[i + 30] ^ t[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10,
        u = (i + 2) % 10,
        c = n[u],
        l = n[u + 1],
        f = io(c, l, 1) ^ n[a],
        d = ao(c, l, 1) ^ n[a + 1];
      for (let h = 0; h < 50; h += 10) (t[i + h] ^= f), (t[i + h + 1] ^= d);
    }
    let s = t[2],
      o = t[3];
    for (let i = 0; i < 24; i++) {
      const a = Si[i],
        u = io(s, o, a),
        c = ao(s, o, a),
        l = Ei[i];
      (s = t[l]), (o = t[l + 1]), (t[l] = u), (t[l + 1] = c);
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++) n[a] = t[i + a];
      for (let a = 0; a < 10; a++)
        t[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    (t[0] ^= Zc[r]), (t[1] ^= Qc[r]);
  }
  n.fill(0);
}
class fs extends Pi {
  constructor(e, n, r, s = !1, o = 24) {
    if (
      (super(),
      (this.blockLen = e),
      (this.suffix = n),
      (this.outputLen = r),
      (this.enableXOF = s),
      (this.rounds = o),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      Nn(r),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error("Sha3 supports only keccak-f1600 function");
    (this.state = new Uint8Array(200)), (this.state32 = zc(this.state));
  }
  keccak() {
    so || oo(this.state32),
      Xc(this.state32, this.rounds),
      so || oo(this.state32),
      (this.posOut = 0),
      (this.pos = 0);
  }
  update(e) {
    $n(this);
    const { blockLen: n, state: r } = this;
    e = ls(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let a = 0; a < i; a++) r[this.pos++] ^= e[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: n, pos: r, blockLen: s } = this;
    (e[r] ^= n),
      n & 128 && r === s - 1 && this.keccak(),
      (e[s - 1] ^= 128),
      this.keccak();
  }
  writeInto(e) {
    $n(this, !1), Yn(e), this.finish();
    const n = this.state,
      { blockLen: r } = this;
    for (let s = 0, o = e.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      e.set(n.subarray(this.posOut, this.posOut + i), s),
        (this.posOut += i),
        (s += i);
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Nn(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if ((Ci(e, this), this.finished))
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(e) {
    const {
      blockLen: n,
      suffix: r,
      outputLen: s,
      rounds: o,
      enableXOF: i,
    } = this;
    return (
      e || (e = new fs(n, r, s, i, o)),
      e.state32.set(this.state32),
      (e.pos = this.pos),
      (e.posOut = this.posOut),
      (e.finished = this.finished),
      (e.rounds = o),
      (e.suffix = r),
      (e.outputLen = s),
      (e.enableXOF = i),
      (e.destroyed = this.destroyed),
      e
    );
  }
}
const Yc = (t, e, n) => ki(() => new fs(e, t, n)),
  eu = Yc(1, 136, 256 / 8);
function hn(t, e) {
  const n = e || "hex",
    r = eu(nt(t, { strict: !1 }) ? cs(t) : t);
  return n === "bytes" ? r : On(r);
}
const mr = new Xn(8192);
function er(t, e) {
  if (mr.has(`${t}.${e}`)) return mr.get(`${t}.${e}`);
  const n = t.substring(2).toLowerCase(),
    r = hn(vi(n), "bytes"),
    s = n.split("");
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()),
      (r[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return mr.set(`${t}.${e}`, o), o;
}
function Me(t, e) {
  if (!st(t, { strict: !1 })) throw new Ht({ address: t });
  return er(t, e);
}
const tu = /^0x[a-fA-F0-9]{40}$/,
  br = new Xn(8192);
function st(t, e) {
  const { strict: n = !0 } = e ?? {},
    r = `${t}.${n}`;
  if (br.has(r)) return br.get(r);
  const s = tu.test(t)
    ? t.toLowerCase() === t
      ? !0
      : n
      ? er(t) === t
      : !0
    : !1;
  return br.set(r, s), s;
}
function Fn(t, e, n, { strict: r } = {}) {
  return nt(t, { strict: !1 })
    ? nu(t, e, n, { strict: r })
    : Bi(t, e, n, { strict: r });
}
function Ai(t, e) {
  if (typeof e == "number" && e > 0 && e > we(t) - 1)
    throw new yi({ offset: e, position: "start", size: we(t) });
}
function Mi(t, e, n) {
  if (typeof e == "number" && typeof n == "number" && we(t) !== n - e)
    throw new yi({ offset: n, position: "end", size: we(t) });
}
function Bi(t, e, n, { strict: r } = {}) {
  Ai(t, e);
  const s = t.slice(e, n);
  return r && Mi(s, e, n), s;
}
function nu(t, e, n, { strict: r } = {}) {
  Ai(t, e);
  const s = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (n ?? t.length) * 2)}`;
  return r && Mi(s, e, n), s;
}
function Oi(t, e) {
  if (t.length !== e.length)
    throw new Ec({ expectedLength: t.length, givenLength: e.length });
  const n = ru({ params: t, values: e }),
    r = hs(n);
  return r.length === 0 ? "0x" : r;
}
function ru({ params: t, values: e }) {
  const n = [];
  for (let r = 0; r < t.length; r++) n.push(ds({ param: t[r], value: e[r] }));
  return n;
}
function ds({ param: t, value: e }) {
  const n = ps(t.type);
  if (n) {
    const [r, s] = n;
    return ou(e, { length: r, param: { ...t, type: s } });
  }
  if (t.type === "tuple") return lu(e, { param: t });
  if (t.type === "address") return su(e);
  if (t.type === "bool") return au(e);
  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
    const r = t.type.startsWith("int");
    return cu(e, { signed: r });
  }
  if (t.type.startsWith("bytes")) return iu(e, { param: t });
  if (t.type === "string") return uu(e);
  throw new Ac(t.type, { docsPath: "/docs/contract/encodeAbiParameters" });
}
function hs(t) {
  let e = 0;
  for (let o = 0; o < t.length; o++) {
    const { dynamic: i, encoded: a } = t[o];
    i ? (e += 32) : (e += we(a));
  }
  const n = [],
    r = [];
  let s = 0;
  for (let o = 0; o < t.length; o++) {
    const { dynamic: i, encoded: a } = t[o];
    i ? (n.push(W(e + s, { size: 32 })), r.push(a), (s += we(a))) : n.push(a);
  }
  return Pt([...n, ...r]);
}
function su(t) {
  if (!st(t)) throw new Ht({ address: t });
  return { dynamic: !1, encoded: tt(t.toLowerCase()) };
}
function ou(t, { length: e, param: n }) {
  const r = e === null;
  if (!Array.isArray(t)) throw new Bc(t);
  if (!r && t.length !== e)
    throw new Pc({
      expectedLength: e,
      givenLength: t.length,
      type: `${n.type}[${e}]`,
    });
  let s = !1;
  const o = [];
  for (let i = 0; i < t.length; i++) {
    const a = ds({ param: n, value: t[i] });
    a.dynamic && (s = !0), o.push(a);
  }
  if (r || s) {
    const i = hs(o);
    if (r) {
      const a = W(o.length, { size: 32 });
      return { dynamic: !0, encoded: o.length > 0 ? Pt([a, i]) : a };
    }
    if (s) return { dynamic: !0, encoded: i };
  }
  return { dynamic: !1, encoded: Pt(o.map(({ encoded: i }) => i)) };
}
function iu(t, { param: e }) {
  const [, n] = e.type.split("bytes"),
    r = we(t);
  if (!n) {
    let s = t;
    return (
      r % 32 !== 0 &&
        (s = tt(s, {
          dir: "right",
          size: Math.ceil((t.length - 2) / 2 / 32) * 32,
        })),
      { dynamic: !0, encoded: Pt([tt(W(r, { size: 32 })), s]) }
    );
  }
  if (r !== Number.parseInt(n))
    throw new kc({ expectedSize: Number.parseInt(n), value: t });
  return { dynamic: !1, encoded: tt(t, { dir: "right" }) };
}
function au(t) {
  if (typeof t != "boolean")
    throw new A(
      `Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`
    );
  return { dynamic: !1, encoded: tt(xi(t)) };
}
function cu(t, { signed: e }) {
  return { dynamic: !1, encoded: W(t, { size: 32, signed: e }) };
}
function uu(t) {
  const e = Jn(t),
    n = Math.ceil(we(e) / 32),
    r = [];
  for (let s = 0; s < n; s++)
    r.push(tt(Fn(e, s * 32, (s + 1) * 32), { dir: "right" }));
  return { dynamic: !0, encoded: Pt([tt(W(we(e), { size: 32 })), ...r]) };
}
function lu(t, { param: e }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < e.components.length; s++) {
    const o = e.components[s],
      i = Array.isArray(t) ? s : o.name,
      a = ds({ param: o, value: t[i] });
    r.push(a), a.dynamic && (n = !0);
  }
  return { dynamic: n, encoded: n ? hs(r) : Pt(r.map(({ encoded: s }) => s)) };
}
function ps(t) {
  const e = t.match(/^(.*)\[(\d+)?\]$/);
  return e ? [e[2] ? Number(e[2]) : null, e[1]] : void 0;
}
const gr = "/docs/contract/encodeDeployData";
function ji(t) {
  const { abi: e, args: n, bytecode: r } = t;
  if (!n || n.length === 0) return r;
  const s = e.find((i) => "type" in i && i.type === "constructor");
  if (!s) throw new Ic({ docsPath: gr });
  if (!("inputs" in s)) throw new no({ docsPath: gr });
  if (!s.inputs || s.inputs.length === 0) throw new no({ docsPath: gr });
  const o = Oi(s.inputs, n);
  return Qn([r, o]);
}
function Ne(t) {
  return typeof t == "string" ? { address: t, type: "json-rpc" } : t;
}
class ms extends A {
  constructor({ docsPath: e } = {}) {
    super(
      [
        "Could not find an Account to execute with this Action.",
        "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
      ].join(`
`),
      { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
    );
  }
}
class yr extends A {
  constructor({ docsPath: e, metaMessages: n, type: r }) {
    super(`Account type "${r}" is not supported.`, {
      docsPath: e,
      metaMessages: n,
      name: "AccountTypeNotSupportedError",
    });
  }
}
function fu(t) {
  const e = hn(`0x${t.substring(4)}`).substring(26);
  return er(`0x${e}`);
}
async function du({ hash: t, signature: e }) {
  const n = nt(t) ? t : On(t),
    { secp256k1: r } = await Kn(
      async () => {
        const { secp256k1: i } = await import("./secp256k1.BZN8lD4x.js");
        return { secp256k1: i };
      },
      [],
      import.meta.url
    );
  return `0x${(() => {
    if (typeof e == "object" && "r" in e && "s" in e) {
      const { r: c, s: l, v: f, yParity: d } = e,
        h = Number(d ?? f),
        p = co(h);
      return new r.Signature(It(c), It(l)).addRecoveryBit(p);
    }
    const i = nt(e) ? e : On(e),
      a = rt(`0x${i.slice(130)}`),
      u = co(a);
    return r.Signature.fromCompact(i.substring(2, 130)).addRecoveryBit(u);
  })()
    .recoverPublicKey(n.substring(2))
    .toHex(!1)}`;
}
function co(t) {
  if (t === 0 || t === 1) return t;
  if (t === 27) return 0;
  if (t === 28) return 1;
  throw new Error("Invalid yParityOrV value");
}
async function hu({ hash: t, signature: e }) {
  return fu(await du({ hash: t, signature: e }));
}
class uo extends A {
  constructor({ offset: e }) {
    super(`Offset \`${e}\` cannot be negative.`, {
      name: "NegativeOffsetError",
    });
  }
}
class pu extends A {
  constructor({ length: e, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`, {
      name: "PositionOutOfBoundsError",
    });
  }
}
class mu extends A {
  constructor({ count: e, limit: n }) {
    super(
      `Recursive read limit of \`${n}\` exceeded (recursive read count: \`${e}\`).`,
      { name: "RecursiveReadLimitExceededError" }
    );
  }
}
const bu = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new mu({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit,
      });
  },
  assertPosition(t) {
    if (t < 0 || t > this.bytes.length - 1)
      throw new pu({ length: this.bytes.length, position: t });
  },
  decrementPosition(t) {
    if (t < 0) throw new uo({ offset: t });
    const e = this.position - t;
    this.assertPosition(e), (this.position = e);
  },
  getReadCount(t) {
    return this.positionReadCount.get(t || this.position) || 0;
  },
  incrementPosition(t) {
    if (t < 0) throw new uo({ offset: t });
    const e = this.position + t;
    this.assertPosition(e), (this.position = e);
  },
  inspectByte(t) {
    const e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectBytes(t, e) {
    const n = e ?? this.position;
    return this.assertPosition(n + t - 1), this.bytes.subarray(n, n + t);
  },
  inspectUint8(t) {
    const e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectUint16(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 1), this.dataView.getUint16(e);
  },
  inspectUint24(t) {
    const e = t ?? this.position;
    return (
      this.assertPosition(e + 2),
      (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2)
    );
  },
  inspectUint32(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 3), this.dataView.getUint32(e);
  },
  pushByte(t) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = t),
      this.position++;
  },
  pushBytes(t) {
    this.assertPosition(this.position + t.length - 1),
      this.bytes.set(t, this.position),
      (this.position += t.length);
  },
  pushUint8(t) {
    this.assertPosition(this.position),
      (this.bytes[this.position] = t),
      this.position++;
  },
  pushUint16(t) {
    this.assertPosition(this.position + 1),
      this.dataView.setUint16(this.position, t),
      (this.position += 2);
  },
  pushUint24(t) {
    this.assertPosition(this.position + 2),
      this.dataView.setUint16(this.position, t >> 8),
      this.dataView.setUint8(this.position + 2, t & 255),
      (this.position += 3);
  },
  pushUint32(t) {
    this.assertPosition(this.position + 3),
      this.dataView.setUint32(this.position, t),
      (this.position += 4);
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectByte();
    return this.position++, t;
  },
  readBytes(t, e) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(t);
    return (this.position += e ?? t), n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint8();
    return (this.position += 1), t;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint16();
    return (this.position += 2), t;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint24();
    return (this.position += 3), t;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint32();
    return (this.position += 4), t;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(t) {
    const e = this.position;
    return (
      this.assertPosition(t), (this.position = t), () => (this.position = e)
    );
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
    const t = this.getReadCount();
    this.positionReadCount.set(this.position, t + 1),
      t > 0 && this.recursiveReadCount++;
  },
};
function bs(t, { recursiveReadLimit: e = 8192 } = {}) {
  const n = Object.create(bu);
  return (
    (n.bytes = t),
    (n.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength)),
    (n.positionReadCount = new Map()),
    (n.recursiveReadLimit = e),
    n
  );
}
function gu(t, e = "hex") {
  const n = Ni(t),
    r = bs(new Uint8Array(n.length));
  return n.encode(r), e === "hex" ? Pe(r.bytes) : r.bytes;
}
function Ni(t) {
  return Array.isArray(t) ? yu(t.map((e) => Ni(e))) : wu(t);
}
function yu(t) {
  const e = t.reduce((s, o) => s + o.length, 0),
    n = $i(e);
  return {
    length: e <= 55 ? 1 + e : 1 + n + e,
    encode(s) {
      e <= 55
        ? s.pushByte(192 + e)
        : (s.pushByte(247 + n),
          n === 1
            ? s.pushUint8(e)
            : n === 2
            ? s.pushUint16(e)
            : n === 3
            ? s.pushUint24(e)
            : s.pushUint32(e));
      for (const { encode: o } of t) o(s);
    },
  };
}
function wu(t) {
  const e = typeof t == "string" ? Re(t) : t,
    n = $i(e.length);
  return {
    length:
      e.length === 1 && e[0] < 128
        ? 1
        : e.length <= 55
        ? 1 + e.length
        : 1 + n + e.length,
    encode(s) {
      e.length === 1 && e[0] < 128
        ? s.pushBytes(e)
        : e.length <= 55
        ? (s.pushByte(128 + e.length), s.pushBytes(e))
        : (s.pushByte(183 + n),
          n === 1
            ? s.pushUint8(e.length)
            : n === 2
            ? s.pushUint16(e.length)
            : n === 3
            ? s.pushUint24(e.length)
            : s.pushUint32(e.length),
          s.pushBytes(e));
    },
  };
}
function $i(t) {
  if (t < 2 ** 8) return 1;
  if (t < 2 ** 16) return 2;
  if (t < 2 ** 24) return 3;
  if (t < 2 ** 32) return 4;
  throw new A("Length is too large.");
}
function vu(t) {
  const { chainId: e, contractAddress: n, nonce: r, to: s } = t,
    o = hn(Qn(["0x05", gu([e ? W(e) : "0x", n, r ? W(r) : "0x"])]));
  return s === "bytes" ? Re(o) : o;
}
async function Fi(t) {
  const { authorization: e, signature: n } = t;
  return hu({ hash: vu(e), signature: n ?? e });
}
class Br extends A {
  constructor({ blockNumber: e, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...(e && r.blockCreated && r.blockCreated > e
          ? [
              `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
            ]
          : [`- The chain does not have the contract "${r.name}" configured.`]),
      ],
      name: "ChainDoesNotSupportContract",
    });
  }
}
class _u extends A {
  constructor({ chain: e, currentChainId: n }) {
    super(
      `The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
      {
        metaMessages: [
          `Current Chain ID:  ${n}`,
          `Expected Chain ID: ${e.id} – ${e.name}`,
        ],
        name: "ChainMismatchError",
      }
    );
  }
}
class xu extends A {
  constructor() {
    super(
      [
        "No chain was provided to the request.",
        "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
      ].join(`
`),
      { name: "ChainNotFoundError" }
    );
  }
}
class Li extends A {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError",
    });
  }
}
function Iu({ chain: t, currentChainId: e }) {
  if (!t) throw new xu();
  if (e !== t.id) throw new _u({ chain: t, currentChainId: e });
}
const Ui = { gwei: 9, wei: 18 },
  Cu = { ether: -9, wei: 9 },
  Pu = { ether: -18, gwei: -9 };
function tr(t, e) {
  let n = t.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), (n = n.padStart(e, "0"));
  let [s, o] = [n.slice(0, n.length - e), n.slice(n.length - e)];
  return (
    (o = o.replace(/(0+)$/, "")),
    `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`
  );
}
function Ce(t, e = "wei") {
  return tr(t, Cu[e]);
}
class bt extends A {
  constructor({ cause: e, message: n } = {}) {
    var s;
    const r =
      (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null
        ? void 0
        : s.replace("execution reverted", "");
    super(
      `Execution reverted ${
        r ? `with reason: ${r}` : "for an unknown reason"
      }.`,
      { cause: e, name: "ExecutionRevertedError" }
    );
  }
}
Object.defineProperty(bt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3,
});
Object.defineProperty(bt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/,
});
class Ln extends A {
  constructor({ cause: e, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${Ce(n)} gwei` : ""
      }) cannot be higher than the maximum allowed value (2^256-1).`,
      { cause: e, name: "FeeCapTooHighError" }
    );
  }
}
Object.defineProperty(Ln, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
});
class Or extends A {
  constructor({ cause: e, maxFeePerGas: n } = {}) {
    super(
      `The fee cap (\`maxFeePerGas\`${
        n ? ` = ${Ce(n)}` : ""
      } gwei) cannot be lower than the block base fee.`,
      { cause: e, name: "FeeCapTooLowError" }
    );
  }
}
Object.defineProperty(Or, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
});
class jr extends A {
  constructor({ cause: e, nonce: n } = {}) {
    super(
      `Nonce provided for the transaction ${
        n ? `(${n}) ` : ""
      }is higher than the next one expected.`,
      { cause: e, name: "NonceTooHighError" }
    );
  }
}
Object.defineProperty(jr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/,
});
class Nr extends A {
  constructor({ cause: e, nonce: n } = {}) {
    super(
      [
        `Nonce provided for the transaction ${
          n ? `(${n}) ` : ""
        }is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
      ].join(`
`),
      { cause: e, name: "NonceTooLowError" }
    );
  }
}
Object.defineProperty(Nr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/,
});
class $r extends A {
  constructor({ cause: e, nonce: n } = {}) {
    super(
      `Nonce provided for the transaction ${
        n ? `(${n}) ` : ""
      }exceeds the maximum allowed nonce.`,
      { cause: e, name: "NonceMaxValueError" }
    );
  }
}
Object.defineProperty($r, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/,
});
class Fr extends A {
  constructor({ cause: e } = {}) {
    super(
      [
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
      ].join(`
`),
      {
        cause: e,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient.",
        ],
        name: "InsufficientFundsError",
      }
    );
  }
}
Object.defineProperty(Fr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/,
});
class Lr extends A {
  constructor({ cause: e, gas: n } = {}) {
    super(
      `The amount of gas ${
        n ? `(${n}) ` : ""
      }provided for the transaction exceeds the limit allowed for the block.`,
      { cause: e, name: "IntrinsicGasTooHighError" }
    );
  }
}
Object.defineProperty(Lr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/,
});
class Ur extends A {
  constructor({ cause: e, gas: n } = {}) {
    super(
      `The amount of gas ${
        n ? `(${n}) ` : ""
      }provided for the transaction is too low.`,
      { cause: e, name: "IntrinsicGasTooLowError" }
    );
  }
}
Object.defineProperty(Ur, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/,
});
class Rr extends A {
  constructor({ cause: e }) {
    super("The transaction type is not supported for this chain.", {
      cause: e,
      name: "TransactionTypeNotSupportedError",
    });
  }
}
Object.defineProperty(Rr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/,
});
class Un extends A {
  constructor({ cause: e, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super(
      [
        `The provided tip (\`maxPriorityFeePerGas\`${
          n ? ` = ${Ce(n)} gwei` : ""
        }) cannot be higher than the fee cap (\`maxFeePerGas\`${
          r ? ` = ${Ce(r)} gwei` : ""
        }).`,
      ].join(`
`),
      { cause: e, name: "TipAboveFeeCapError" }
    );
  }
}
Object.defineProperty(Un, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value:
    /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
});
class nr extends A {
  constructor({ cause: e }) {
    super(
      `An error occurred while executing: ${
        e == null ? void 0 : e.shortMessage
      }`,
      { cause: e, name: "UnknownNodeError" }
    );
  }
}
function gs(t, e = "wei") {
  return tr(t, Ui[e]);
}
function pn(t) {
  const e = Object.entries(t)
      .map(([r, s]) => (s === void 0 || s === !1 ? null : [r, s]))
      .filter(Boolean),
    n = e.reduce((r, [s]) => Math.max(r, s.length), 0);
  return e.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class ku extends A {
  constructor() {
    super(
      [
        "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
        "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
      ].join(`
`),
      { name: "FeeConflictError" }
    );
  }
}
class Eu extends A {
  constructor({ transaction: e }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        pn(e),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- an EIP-7702 Transaction with `authorizationList`, or",
        "- a Legacy Transaction with `gasPrice`",
      ],
      name: "InvalidSerializableTransactionError",
    });
  }
}
class Su extends A {
  constructor(
    e,
    {
      account: n,
      docsPath: r,
      chain: s,
      data: o,
      gas: i,
      gasPrice: a,
      maxFeePerGas: u,
      maxPriorityFeePerGas: c,
      nonce: l,
      to: f,
      value: d,
    }
  ) {
    var p;
    const h = pn({
      chain:
        s &&
        `${s == null ? void 0 : s.name} (id: ${s == null ? void 0 : s.id})`,
      from: n == null ? void 0 : n.address,
      to: f,
      value:
        typeof d < "u" &&
        `${gs(d)} ${
          ((p = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : p.symbol) || "ETH"
        }`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${Ce(a)} gwei`,
      maxFeePerGas: typeof u < "u" && `${Ce(u)} gwei`,
      maxPriorityFeePerGas: typeof c < "u" && `${Ce(c)} gwei`,
      nonce: l,
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...(e.metaMessages ? [...e.metaMessages, " "] : []),
        "Request Arguments:",
        h,
      ].filter(Boolean),
      name: "TransactionExecutionError",
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.cause = e);
  }
}
class Ri extends A {
  constructor({
    blockHash: e,
    blockNumber: n,
    blockTag: r,
    hash: s,
    index: o,
  }) {
    let i = "Transaction";
    r &&
      o !== void 0 &&
      (i = `Transaction at block time "${r}" at index "${o}"`),
      e &&
        o !== void 0 &&
        (i = `Transaction at block hash "${e}" at index "${o}"`),
      n &&
        o !== void 0 &&
        (i = `Transaction at block number "${n}" at index "${o}"`),
      s && (i = `Transaction with hash "${s}"`),
      super(`${i} could not be found.`, { name: "TransactionNotFoundError" });
  }
}
class Di extends A {
  constructor({ hash: e }) {
    super(
      `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
      { name: "TransactionReceiptNotFoundError" }
    );
  }
}
class Tu extends A {
  constructor({ hash: e }) {
    super(
      `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
      { name: "WaitForTransactionReceiptTimeoutError" }
    );
  }
}
const Oe = (t, e, n) =>
    JSON.stringify(t, (r, s) => (typeof s == "bigint" ? s.toString() : s), n),
  Au = (t) => t,
  ys = (t) => t;
class Ft extends A {
  constructor({
    body: e,
    cause: n,
    details: r,
    headers: s,
    status: o,
    url: i,
  }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${ys(i)}`,
        e && `Request body: ${Oe(e)}`,
      ].filter(Boolean),
      name: "HttpRequestError",
    }),
      Object.defineProperty(this, "body", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "headers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "status", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "url", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.body = e),
      (this.headers = s),
      (this.status = o),
      (this.url = i);
  }
}
class zi extends A {
  constructor({ body: e, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${ys(r)}`, `Request body: ${Oe(e)}`],
      name: "RpcRequestError",
    }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.code = n.code);
  }
}
class lo extends A {
  constructor({ body: e, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${ys(n)}`, `Request body: ${Oe(e)}`],
      name: "TimeoutError",
    });
  }
}
const Mu = -1;
class ke extends A {
  constructor(
    e,
    { code: n, docsPath: r, metaMessages: s, name: o, shortMessage: i }
  ) {
    super(i, {
      cause: e,
      docsPath: r,
      metaMessages: s || (e == null ? void 0 : e.metaMessages),
      name: o || "RpcError",
    }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.name = o || e.name),
      (this.code = e instanceof zi ? e.code : n ?? Mu);
  }
}
class St extends ke {
  constructor(e, n) {
    super(e, n),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = n.data);
  }
}
class qt extends ke {
  constructor(e) {
    super(e, {
      code: qt.code,
      name: "ParseRpcError",
      shortMessage:
        "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
    });
  }
}
Object.defineProperty(qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700,
});
class Vt extends ke {
  constructor(e) {
    super(e, {
      code: Vt.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object.",
    });
  }
}
Object.defineProperty(Vt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600,
});
class Wt extends ke {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: Wt.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${
        n ? ` "${n}"` : ""
      } does not exist / is not available.`,
    });
  }
}
Object.defineProperty(Wt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601,
});
class Kt extends ke {
  constructor(e) {
    super(e, {
      code: Kt.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    });
  }
}
Object.defineProperty(Kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602,
});
class ft extends ke {
  constructor(e) {
    super(e, {
      code: ft.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received.",
    });
  }
}
Object.defineProperty(ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603,
});
class Jt extends ke {
  constructor(e) {
    super(e, {
      code: Jt.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters.",
      ].join(`
`),
    });
  }
}
Object.defineProperty(Jt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3,
});
class Zt extends ke {
  constructor(e) {
    super(e, {
      code: Zt.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found.",
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ResourceNotFoundRpcError",
      });
  }
}
Object.defineProperty(Zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001,
});
class Ue extends ke {
  constructor(e) {
    super(e, {
      code: Ue.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available.",
    });
  }
}
Object.defineProperty(Ue, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002,
});
class Qt extends ke {
  constructor(e) {
    super(e, {
      code: Qt.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed.",
    });
  }
}
Object.defineProperty(Qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003,
});
class Xt extends ke {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: Xt.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not implemented.`,
    });
  }
}
Object.defineProperty(Xt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004,
});
class kt extends ke {
  constructor(e) {
    super(e, {
      code: kt.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit.",
    });
  }
}
Object.defineProperty(kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005,
});
class Yt extends ke {
  constructor(e) {
    super(e, {
      code: Yt.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported.",
    });
  }
}
Object.defineProperty(Yt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006,
});
class oe extends St {
  constructor(e) {
    super(e, {
      code: oe.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request.",
    });
  }
}
Object.defineProperty(oe, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001,
});
class en extends St {
  constructor(e) {
    super(e, {
      code: en.code,
      name: "UnauthorizedProviderError",
      shortMessage:
        "The requested method and/or account has not been authorized by the user.",
    });
  }
}
Object.defineProperty(en, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100,
});
class tn extends St {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: tn.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${
        n ? ` " ${n}"` : ""
      }.`,
    });
  }
}
Object.defineProperty(tn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200,
});
class nn extends St {
  constructor(e) {
    super(e, {
      code: nn.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains.",
    });
  }
}
Object.defineProperty(nn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900,
});
class rn extends St {
  constructor(e) {
    super(e, {
      code: rn.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain.",
    });
  }
}
Object.defineProperty(rn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901,
});
class De extends St {
  constructor(e) {
    super(e, {
      code: De.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain.",
    });
  }
}
Object.defineProperty(De, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902,
});
class Bu extends ke {
  constructor(e) {
    super(e, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred.",
    });
  }
}
function ws(t, e) {
  const n = (t.details || "").toLowerCase(),
    r =
      t instanceof A
        ? t.walk((s) => (s == null ? void 0 : s.code) === bt.code)
        : t;
  return r instanceof A
    ? new bt({ cause: t, message: r.details })
    : bt.nodeMessage.test(n)
    ? new bt({ cause: t, message: t.details })
    : Ln.nodeMessage.test(n)
    ? new Ln({ cause: t, maxFeePerGas: e == null ? void 0 : e.maxFeePerGas })
    : Or.nodeMessage.test(n)
    ? new Or({ cause: t, maxFeePerGas: e == null ? void 0 : e.maxFeePerGas })
    : jr.nodeMessage.test(n)
    ? new jr({ cause: t, nonce: e == null ? void 0 : e.nonce })
    : Nr.nodeMessage.test(n)
    ? new Nr({ cause: t, nonce: e == null ? void 0 : e.nonce })
    : $r.nodeMessage.test(n)
    ? new $r({ cause: t, nonce: e == null ? void 0 : e.nonce })
    : Fr.nodeMessage.test(n)
    ? new Fr({ cause: t })
    : Lr.nodeMessage.test(n)
    ? new Lr({ cause: t, gas: e == null ? void 0 : e.gas })
    : Ur.nodeMessage.test(n)
    ? new Ur({ cause: t, gas: e == null ? void 0 : e.gas })
    : Rr.nodeMessage.test(n)
    ? new Rr({ cause: t })
    : Un.nodeMessage.test(n)
    ? new Un({
        cause: t,
        maxFeePerGas: e == null ? void 0 : e.maxFeePerGas,
        maxPriorityFeePerGas: e == null ? void 0 : e.maxPriorityFeePerGas,
      })
    : new nr({ cause: t });
}
function Ou(t, { docsPath: e, ...n }) {
  const r = (() => {
    const s = ws(t, n);
    return s instanceof nr ? t : s;
  })();
  return new Su(r, { docsPath: e, ...n });
}
function vs(t, { format: e }) {
  if (!e) return {};
  const n = {};
  function r(o) {
    const i = Object.keys(o);
    for (const a of i)
      a in t && (n[a] = t[a]),
        o[a] && typeof o[a] == "object" && !Array.isArray(o[a]) && r(o[a]);
  }
  const s = e(t || {});
  return r(s), n;
}
const ju = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4",
};
function _s(t) {
  const e = {};
  return (
    typeof t.authorizationList < "u" &&
      (e.authorizationList = Nu(t.authorizationList)),
    typeof t.accessList < "u" && (e.accessList = t.accessList),
    typeof t.blobVersionedHashes < "u" &&
      (e.blobVersionedHashes = t.blobVersionedHashes),
    typeof t.blobs < "u" &&
      (typeof t.blobs[0] != "string"
        ? (e.blobs = t.blobs.map((n) => Pe(n)))
        : (e.blobs = t.blobs)),
    typeof t.data < "u" && (e.data = t.data),
    typeof t.from < "u" && (e.from = t.from),
    typeof t.gas < "u" && (e.gas = W(t.gas)),
    typeof t.gasPrice < "u" && (e.gasPrice = W(t.gasPrice)),
    typeof t.maxFeePerBlobGas < "u" &&
      (e.maxFeePerBlobGas = W(t.maxFeePerBlobGas)),
    typeof t.maxFeePerGas < "u" && (e.maxFeePerGas = W(t.maxFeePerGas)),
    typeof t.maxPriorityFeePerGas < "u" &&
      (e.maxPriorityFeePerGas = W(t.maxPriorityFeePerGas)),
    typeof t.nonce < "u" && (e.nonce = W(t.nonce)),
    typeof t.to < "u" && (e.to = t.to),
    typeof t.type < "u" && (e.type = ju[t.type]),
    typeof t.value < "u" && (e.value = W(t.value)),
    e
  );
}
function Nu(t) {
  return t.map((e) => ({
    address: e.contractAddress,
    r: e.r,
    s: e.s,
    chainId: W(e.chainId),
    nonce: W(e.nonce),
    ...(typeof e.yParity < "u" ? { yParity: W(e.yParity) } : {}),
    ...(typeof e.v < "u" && typeof e.yParity > "u" ? { v: W(e.v) } : {}),
  }));
}
function ue(t, e, n) {
  const r = t[e.name];
  if (typeof r == "function") return r;
  const s = t[n];
  return typeof s == "function" ? s : (o) => e(t, o);
}
const $u = 2n ** 256n - 1n;
function rr(t) {
  const {
      account: e,
      gasPrice: n,
      maxFeePerGas: r,
      maxPriorityFeePerGas: s,
      to: o,
    } = t,
    i = e ? Ne(e) : void 0;
  if (i && !st(i.address)) throw new Ht({ address: i.address });
  if (o && !st(o)) throw new Ht({ address: o });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u")) throw new ku();
  if (r && r > $u) throw new Ln({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new Un({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
async function Gi(t) {
  const e = await t.request({ method: "eth_chainId" }, { dedupe: !0 });
  return rt(e);
}
class Fu extends A {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError",
    });
  }
}
class xs extends A {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError",
    });
  }
}
class Lu extends A {
  constructor({ maxPriorityFeePerGas: e }) {
    super(
      `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ce(
        e
      )} gwei).`,
      { name: "MaxFeePerGasTooLowError" }
    );
  }
}
class Hi extends A {
  constructor({ blockHash: e, blockNumber: n }) {
    let r = "Block";
    e && (r = `Block at hash "${e}"`),
      n && (r = `Block at number "${n}"`),
      super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
const qi = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702",
};
function Vi(t) {
  const e = {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    chainId: t.chainId ? rt(t.chainId) : void 0,
    gas: t.gas ? BigInt(t.gas) : void 0,
    gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
    maxFeePerBlobGas: t.maxFeePerBlobGas ? BigInt(t.maxFeePerBlobGas) : void 0,
    maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: t.maxPriorityFeePerGas
      ? BigInt(t.maxPriorityFeePerGas)
      : void 0,
    nonce: t.nonce ? rt(t.nonce) : void 0,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    type: t.type ? qi[t.type] : void 0,
    typeHex: t.type ? t.type : void 0,
    value: t.value ? BigInt(t.value) : void 0,
    v: t.v ? BigInt(t.v) : void 0,
  };
  return (
    t.authorizationList && (e.authorizationList = Uu(t.authorizationList)),
    (e.yParity = (() => {
      if (t.yParity) return Number(t.yParity);
      if (typeof e.v == "bigint") {
        if (e.v === 0n || e.v === 27n) return 0;
        if (e.v === 1n || e.v === 28n) return 1;
        if (e.v >= 35n) return e.v % 2n === 0n ? 1 : 0;
      }
    })()),
    e.type === "legacy" &&
      (delete e.accessList,
      delete e.maxFeePerBlobGas,
      delete e.maxFeePerGas,
      delete e.maxPriorityFeePerGas,
      delete e.yParity),
    e.type === "eip2930" &&
      (delete e.maxFeePerBlobGas,
      delete e.maxFeePerGas,
      delete e.maxPriorityFeePerGas),
    e.type === "eip1559" && delete e.maxFeePerBlobGas,
    e
  );
}
function Uu(t) {
  return t.map((e) => ({
    contractAddress: e.address,
    chainId: Number(e.chainId),
    nonce: Number(e.nonce),
    r: e.r,
    s: e.s,
    yParity: Number(e.yParity),
  }));
}
function Ru(t) {
  var n;
  const e =
    (n = t.transactions) == null
      ? void 0
      : n.map((r) => (typeof r == "string" ? r : Vi(r)));
  return {
    ...t,
    baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
    blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
    difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
    excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
    gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
    hash: t.hash ? t.hash : null,
    logsBloom: t.logsBloom ? t.logsBloom : null,
    nonce: t.nonce ? t.nonce : null,
    number: t.number ? BigInt(t.number) : null,
    size: t.size ? BigInt(t.size) : void 0,
    timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
    transactions: e,
    totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null,
  };
}
async function sn(
  t,
  { blockHash: e, blockNumber: n, blockTag: r, includeTransactions: s } = {}
) {
  var l, f, d;
  const o = r ?? "latest",
    i = s ?? !1,
    a = n !== void 0 ? W(n) : void 0;
  let u = null;
  if (
    (e
      ? (u = await t.request(
          { method: "eth_getBlockByHash", params: [e, i] },
          { dedupe: !0 }
        ))
      : (u = await t.request(
          { method: "eth_getBlockByNumber", params: [a || o, i] },
          { dedupe: !!a }
        )),
    !u)
  )
    throw new Hi({ blockHash: e, blockNumber: n });
  return (
    ((d =
      (f = (l = t.chain) == null ? void 0 : l.formatters) == null
        ? void 0
        : f.block) == null
      ? void 0
      : d.format) || Ru
  )(u);
}
async function Wi(t) {
  const e = await t.request({ method: "eth_gasPrice" });
  return BigInt(e);
}
async function Du(t, e) {
  var o, i;
  const { block: n, chain: r = t.chain, request: s } = e || {};
  try {
    const a =
      ((o = r == null ? void 0 : r.fees) == null
        ? void 0
        : o.maxPriorityFeePerGas) ??
      ((i = r == null ? void 0 : r.fees) == null
        ? void 0
        : i.defaultPriorityFee);
    if (typeof a == "function") {
      const c = n || (await ue(t, sn, "getBlock")({})),
        l = await a({ block: c, client: t, request: s });
      if (l === null) throw new Error();
      return l;
    }
    if (typeof a < "u") return a;
    const u = await t.request({ method: "eth_maxPriorityFeePerGas" });
    return It(u);
  } catch {
    const [a, u] = await Promise.all([
      n ? Promise.resolve(n) : ue(t, sn, "getBlock")({}),
      ue(t, Wi, "getGasPrice")({}),
    ]);
    if (typeof a.baseFeePerGas != "bigint") throw new xs();
    const c = u - a.baseFeePerGas;
    return c < 0n ? 0n : c;
  }
}
async function fo(t, e) {
  var d, h;
  const {
      block: n,
      chain: r = t.chain,
      request: s,
      type: o = "eip1559",
    } = e || {},
    i = await (async () => {
      var p, m;
      return typeof ((p = r == null ? void 0 : r.fees) == null
        ? void 0
        : p.baseFeeMultiplier) == "function"
        ? r.fees.baseFeeMultiplier({ block: n, client: t, request: s })
        : ((m = r == null ? void 0 : r.fees) == null
            ? void 0
            : m.baseFeeMultiplier) ?? 1.2;
    })();
  if (i < 1) throw new Fu();
  const u =
      10 **
      (((d = i.toString().split(".")[1]) == null ? void 0 : d.length) ?? 0),
    c = (p) => (p * BigInt(Math.ceil(i * u))) / BigInt(u),
    l = n || (await ue(t, sn, "getBlock")({}));
  if (
    typeof ((h = r == null ? void 0 : r.fees) == null
      ? void 0
      : h.estimateFeesPerGas) == "function"
  ) {
    const p = await r.fees.estimateFeesPerGas({
      block: n,
      client: t,
      multiply: c,
      request: s,
      type: o,
    });
    if (p !== null) return p;
  }
  if (o === "eip1559") {
    if (typeof l.baseFeePerGas != "bigint") throw new xs();
    const p =
        typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint"
          ? s.maxPriorityFeePerGas
          : await Du(t, { block: l, chain: r, request: s }),
      m = c(l.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? m + p,
      maxPriorityFeePerGas: p,
    };
  }
  return {
    gasPrice:
      (s == null ? void 0 : s.gasPrice) ??
      c(await ue(t, Wi, "getGasPrice")({})),
  };
}
class zu extends A {
  constructor(
    e,
    {
      account: n,
      docsPath: r,
      chain: s,
      data: o,
      gas: i,
      gasPrice: a,
      maxFeePerGas: u,
      maxPriorityFeePerGas: c,
      nonce: l,
      to: f,
      value: d,
    }
  ) {
    var p;
    const h = pn({
      from: n == null ? void 0 : n.address,
      to: f,
      value:
        typeof d < "u" &&
        `${gs(d)} ${
          ((p = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : p.symbol) || "ETH"
        }`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${Ce(a)} gwei`,
      maxFeePerGas: typeof u < "u" && `${Ce(u)} gwei`,
      maxPriorityFeePerGas: typeof c < "u" && `${Ce(c)} gwei`,
      nonce: l,
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...(e.metaMessages ? [...e.metaMessages, " "] : []),
        "Estimate Gas Arguments:",
        h,
      ].filter(Boolean),
      name: "EstimateGasExecutionError",
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.cause = e);
  }
}
function Gu(t, { docsPath: e, ...n }) {
  const r = (() => {
    const s = ws(t, n);
    return s instanceof nr ? t : s;
  })();
  return new zu(r, { docsPath: e, ...n });
}
class Hu extends A {
  constructor({ address: e }) {
    super(`State for account "${e}" is set multiple times.`, {
      name: "AccountStateConflictError",
    });
  }
}
class qu extends A {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError",
    });
  }
}
function ho(t) {
  return t.reduce(
    (e, { slot: n, value: r }) => `${e}        ${n}: ${r}
`,
    ""
  );
}
function Vu(t) {
  return t
    .reduce(
      (e, { address: n, ...r }) => {
        let s = `${e}    ${n}:
`;
        return (
          r.nonce &&
            (s += `      nonce: ${r.nonce}
`),
          r.balance &&
            (s += `      balance: ${r.balance}
`),
          r.code &&
            (s += `      code: ${r.code}
`),
          r.state &&
            ((s += `      state:
`),
            (s += ho(r.state))),
          r.stateDiff &&
            ((s += `      stateDiff:
`),
            (s += ho(r.stateDiff))),
          s
        );
      },
      `  State Override:
`
    )
    .slice(0, -1);
}
function po(t) {
  if (!(!t || t.length === 0))
    return t.reduce((e, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new eo({ size: n.length, targetSize: 66, type: "hex" });
      if (r.length !== 66)
        throw new eo({ size: r.length, targetSize: 66, type: "hex" });
      return (e[n] = r), e;
    }, {});
}
function Wu(t) {
  const { balance: e, nonce: n, state: r, stateDiff: s, code: o } = t,
    i = {};
  if (
    (o !== void 0 && (i.code = o),
    e !== void 0 && (i.balance = W(e)),
    n !== void 0 && (i.nonce = W(n)),
    r !== void 0 && (i.state = po(r)),
    s !== void 0)
  ) {
    if (i.state) throw new qu();
    i.stateDiff = po(s);
  }
  return i;
}
function Ki(t) {
  if (!t) return;
  const e = {};
  for (const { address: n, ...r } of t) {
    if (!st(n, { strict: !1 })) throw new Ht({ address: n });
    if (e[n]) throw new Hu({ address: n });
    e[n] = Wu(r);
  }
  return e;
}
async function Ji(t, { address: e, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? W(n) : void 0,
    o = await t.request({ method: "eth_getBalance", params: [e, s || r] });
  return BigInt(o);
}
async function Ku(t, e) {
  var s, o, i;
  const { account: n = t.account } = e,
    r = n ? Ne(n) : void 0;
  try {
    let j = function (K) {
      const { block: O, request: Y, rpcStateOverride: se } = K;
      return t.request({
        method: "eth_estimateGas",
        params: se ? [Y, O ?? "latest", se] : O ? [Y, O] : [Y],
      });
    };
    const {
        accessList: a,
        authorizationList: u,
        blobs: c,
        blobVersionedHashes: l,
        blockNumber: f,
        blockTag: d,
        data: h,
        gas: p,
        gasPrice: m,
        maxFeePerBlobGas: b,
        maxFeePerGas: w,
        maxPriorityFeePerGas: v,
        nonce: x,
        value: I,
        stateOverride: g,
        ...y
      } = await ta(t, {
        ...e,
        parameters:
          (r == null ? void 0 : r.type) === "local"
            ? void 0
            : ["blobVersionedHashes"],
      }),
      M = (f ? W(f) : void 0) || d,
      E = Ki(g),
      U = await (async () => {
        if (y.to) return y.to;
        if (u && u.length > 0)
          return await Fi({ authorization: u[0] }).catch(() => {
            throw new A(
              "`to` is required. Could not infer from `authorizationList`"
            );
          });
      })();
    rr(e);
    const H =
        (i =
          (o = (s = t.chain) == null ? void 0 : s.formatters) == null
            ? void 0
            : o.transactionRequest) == null
          ? void 0
          : i.format,
      L = (H || _s)({
        ...vs(y, { format: H }),
        from: r == null ? void 0 : r.address,
        accessList: a,
        authorizationList: u,
        blobs: c,
        blobVersionedHashes: l,
        data: h,
        gas: p,
        gasPrice: m,
        maxFeePerBlobGas: b,
        maxFeePerGas: w,
        maxPriorityFeePerGas: v,
        nonce: x,
        to: U,
        value: I,
      });
    let G = BigInt(await j({ block: M, request: L, rpcStateOverride: E }));
    if (u) {
      const K = await Ji(t, { address: L.from }),
        O = await Promise.all(
          u.map(async (Y) => {
            const { contractAddress: se } = Y,
              re = await j({
                block: M,
                request: {
                  authorizationList: void 0,
                  data: h,
                  from: r == null ? void 0 : r.address,
                  to: se,
                  value: W(K),
                },
                rpcStateOverride: E,
              }).catch(() => 100000n);
            return 2n * BigInt(re);
          })
        );
      G += O.reduce((Y, se) => Y + se, 0n);
    }
    return G;
  } catch (a) {
    throw Gu(a, { ...e, account: r, chain: t.chain });
  }
}
async function Ju(t, { address: e, blockTag: n = "latest", blockNumber: r }) {
  const s = await t.request(
    { method: "eth_getTransactionCount", params: [e, r ? W(r) : n] },
    { dedupe: !!r }
  );
  return rt(s);
}
function Zi(t) {
  const { kzg: e } = t,
    n = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"),
    r = typeof t.blobs[0] == "string" ? t.blobs.map((o) => Re(o)) : t.blobs,
    s = [];
  for (const o of r) s.push(Uint8Array.from(e.blobToKzgCommitment(o)));
  return n === "bytes" ? s : s.map((o) => Pe(o));
}
function Qi(t) {
  const { kzg: e } = t,
    n = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"),
    r = typeof t.blobs[0] == "string" ? t.blobs.map((i) => Re(i)) : t.blobs,
    s =
      typeof t.commitments[0] == "string"
        ? t.commitments.map((i) => Re(i))
        : t.commitments,
    o = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i],
      u = s[i];
    o.push(Uint8Array.from(e.computeBlobKzgProof(a, u)));
  }
  return n === "bytes" ? o : o.map((i) => Pe(i));
}
function Zu(t, e, n, r) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
  const s = BigInt(32),
    o = BigInt(4294967295),
    i = Number((n >> s) & o),
    a = Number(n & o),
    u = r ? 4 : 0,
    c = r ? 0 : 4;
  t.setUint32(e + u, i, r), t.setUint32(e + c, a, r);
}
const Qu = (t, e, n) => (t & e) ^ (~t & n),
  Xu = (t, e, n) => (t & e) ^ (t & n) ^ (e & n);
class Yu extends Pi {
  constructor(e, n, r, s) {
    super(),
      (this.blockLen = e),
      (this.outputLen = n),
      (this.padOffset = r),
      (this.isLE = s),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = pr(this.buffer));
  }
  update(e) {
    $n(this);
    const { view: n, buffer: r, blockLen: s } = this;
    e = ls(e);
    const o = e.length;
    for (let i = 0; i < o; ) {
      const a = Math.min(s - this.pos, o - i);
      if (a === s) {
        const u = pr(e);
        for (; s <= o - i; i += s) this.process(u, i);
        continue;
      }
      r.set(e.subarray(i, i + a), this.pos),
        (this.pos += a),
        (i += a),
        this.pos === s && (this.process(n, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    $n(this), Ci(e, this), (this.finished = !0);
    const { buffer: n, view: r, blockLen: s, isLE: o } = this;
    let { pos: i } = this;
    (n[i++] = 128),
      this.buffer.subarray(i).fill(0),
      this.padOffset > s - i && (this.process(r, 0), (i = 0));
    for (let f = i; f < s; f++) n[f] = 0;
    Zu(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const a = pr(e),
      u = this.outputLen;
    if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c = u / 4,
      l = this.get();
    if (c > l.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < c; f++) a.setUint32(4 * f, l[f], o);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const {
      blockLen: n,
      buffer: r,
      length: s,
      finished: o,
      destroyed: i,
      pos: a,
    } = this;
    return (
      (e.length = s),
      (e.pos = a),
      (e.finished = o),
      (e.destroyed = i),
      s % n && e.buffer.set(r),
      e
    );
  }
}
const el = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Ze = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]),
  Qe = new Uint32Array(64);
class tl extends Yu {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Ze[0] | 0),
      (this.B = Ze[1] | 0),
      (this.C = Ze[2] | 0),
      (this.D = Ze[3] | 0),
      (this.E = Ze[4] | 0),
      (this.F = Ze[5] | 0),
      (this.G = Ze[6] | 0),
      (this.H = Ze[7] | 0);
  }
  get() {
    const { A: e, B: n, C: r, D: s, E: o, F: i, G: a, H: u } = this;
    return [e, n, r, s, o, i, a, u];
  }
  set(e, n, r, s, o, i, a, u) {
    (this.A = e | 0),
      (this.B = n | 0),
      (this.C = r | 0),
      (this.D = s | 0),
      (this.E = o | 0),
      (this.F = i | 0),
      (this.G = a | 0),
      (this.H = u | 0);
  }
  process(e, n) {
    for (let f = 0; f < 16; f++, n += 4) Qe[f] = e.getUint32(n, !1);
    for (let f = 16; f < 64; f++) {
      const d = Qe[f - 15],
        h = Qe[f - 2],
        p = Le(d, 7) ^ Le(d, 18) ^ (d >>> 3),
        m = Le(h, 17) ^ Le(h, 19) ^ (h >>> 10);
      Qe[f] = (m + Qe[f - 7] + p + Qe[f - 16]) | 0;
    }
    let { A: r, B: s, C: o, D: i, E: a, F: u, G: c, H: l } = this;
    for (let f = 0; f < 64; f++) {
      const d = Le(a, 6) ^ Le(a, 11) ^ Le(a, 25),
        h = (l + d + Qu(a, u, c) + el[f] + Qe[f]) | 0,
        m = ((Le(r, 2) ^ Le(r, 13) ^ Le(r, 22)) + Xu(r, s, o)) | 0;
      (l = c),
        (c = u),
        (u = a),
        (a = (i + h) | 0),
        (i = o),
        (o = s),
        (s = r),
        (r = (h + m) | 0);
    }
    (r = (r + this.A) | 0),
      (s = (s + this.B) | 0),
      (o = (o + this.C) | 0),
      (i = (i + this.D) | 0),
      (a = (a + this.E) | 0),
      (u = (u + this.F) | 0),
      (c = (c + this.G) | 0),
      (l = (l + this.H) | 0),
      this.set(r, s, o, i, a, u, c, l);
  }
  roundClean() {
    Qe.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const nl = ki(() => new tl());
function rl(t, e) {
  return nl(nt(t, { strict: !1 }) ? cs(t) : t);
}
function sl(t) {
  const { commitment: e, version: n = 1 } = t,
    r = t.to ?? (typeof e == "string" ? "hex" : "bytes"),
    s = rl(e);
  return s.set([n], 0), r === "bytes" ? s : Pe(s);
}
function ol(t) {
  const { commitments: e, version: n } = t,
    r = t.to ?? (typeof e[0] == "string" ? "hex" : "bytes"),
    s = [];
  for (const o of e) s.push(sl({ commitment: o, to: r, version: n }));
  return s;
}
const mo = 6,
  Xi = 32,
  Is = 4096,
  Yi = Xi * Is,
  bo = Yi * mo - 1 - 1 * Is * mo;
class il extends A {
  constructor({ maxSize: e, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${e} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError",
    });
  }
}
class al extends A {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
function cl(t) {
  const e = t.to ?? (typeof t.data == "string" ? "hex" : "bytes"),
    n = typeof t.data == "string" ? Re(t.data) : t.data,
    r = we(n);
  if (!r) throw new al();
  if (r > bo) throw new il({ maxSize: bo, size: r });
  const s = [];
  let o = !0,
    i = 0;
  for (; o; ) {
    const a = bs(new Uint8Array(Yi));
    let u = 0;
    for (; u < Is; ) {
      const c = n.slice(i, i + (Xi - 1));
      if ((a.pushByte(0), a.pushBytes(c), c.length < 31)) {
        a.pushByte(128), (o = !1);
        break;
      }
      u++, (i += 31);
    }
    s.push(a);
  }
  return e === "bytes" ? s.map((a) => a.bytes) : s.map((a) => Pe(a.bytes));
}
function ul(t) {
  const { data: e, kzg: n, to: r } = t,
    s = t.blobs ?? cl({ data: e, to: r }),
    o = t.commitments ?? Zi({ blobs: s, kzg: n, to: r }),
    i = t.proofs ?? Qi({ blobs: s, commitments: o, kzg: n, to: r }),
    a = [];
  for (let u = 0; u < s.length; u++)
    a.push({ blob: s[u], commitment: o[u], proof: i[u] });
  return a;
}
function ll(t) {
  if (t.type) return t.type;
  if (typeof t.authorizationList < "u") return "eip7702";
  if (
    typeof t.blobs < "u" ||
    typeof t.blobVersionedHashes < "u" ||
    typeof t.maxFeePerBlobGas < "u" ||
    typeof t.sidecars < "u"
  )
    return "eip4844";
  if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof t.gasPrice < "u")
    return typeof t.accessList < "u" ? "eip2930" : "legacy";
  throw new Eu({ transaction: t });
}
const ea = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
async function ta(t, e) {
  const {
      account: n = t.account,
      blobs: r,
      chain: s,
      gas: o,
      kzg: i,
      nonce: a,
      nonceManager: u,
      parameters: c = ea,
      type: l,
    } = e,
    f = n && Ne(n),
    d = { ...e, ...(f ? { from: f == null ? void 0 : f.address } : {}) };
  let h;
  async function p() {
    return h || ((h = await ue(t, sn, "getBlock")({ blockTag: "latest" })), h);
  }
  let m;
  async function b() {
    return (
      m ||
      (s
        ? s.id
        : typeof e.chainId < "u"
        ? e.chainId
        : ((m = await ue(t, Gi, "getChainId")({})), m))
    );
  }
  if ((c.includes("blobVersionedHashes") || c.includes("sidecars")) && r && i) {
    const w = Zi({ blobs: r, kzg: i });
    if (c.includes("blobVersionedHashes")) {
      const v = ol({ commitments: w, to: "hex" });
      d.blobVersionedHashes = v;
    }
    if (c.includes("sidecars")) {
      const v = Qi({ blobs: r, commitments: w, kzg: i }),
        x = ul({ blobs: r, commitments: w, proofs: v, to: "hex" });
      d.sidecars = x;
    }
  }
  if (
    (c.includes("chainId") && (d.chainId = await b()),
    c.includes("nonce") && typeof a > "u" && f)
  )
    if (u) {
      const w = await b();
      d.nonce = await u.consume({ address: f.address, chainId: w, client: t });
    } else
      d.nonce = await ue(
        t,
        Ju,
        "getTransactionCount"
      )({ address: f.address, blockTag: "pending" });
  if ((c.includes("fees") || c.includes("type")) && typeof l > "u")
    try {
      d.type = ll(d);
    } catch {
      const w = await p();
      d.type =
        typeof (w == null ? void 0 : w.baseFeePerGas) == "bigint"
          ? "eip1559"
          : "legacy";
    }
  if (c.includes("fees"))
    if (d.type !== "legacy" && d.type !== "eip2930") {
      if (typeof d.maxFeePerGas > "u" || typeof d.maxPriorityFeePerGas > "u") {
        const w = await p(),
          { maxFeePerGas: v, maxPriorityFeePerGas: x } = await fo(t, {
            block: w,
            chain: s,
            request: d,
          });
        if (
          typeof e.maxPriorityFeePerGas > "u" &&
          e.maxFeePerGas &&
          e.maxFeePerGas < x
        )
          throw new Lu({ maxPriorityFeePerGas: x });
        (d.maxPriorityFeePerGas = x), (d.maxFeePerGas = v);
      }
    } else {
      if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
        throw new xs();
      const w = await p(),
        { gasPrice: v } = await fo(t, {
          block: w,
          chain: s,
          request: d,
          type: "legacy",
        });
      d.gasPrice = v;
    }
  return (
    c.includes("gas") &&
      typeof o > "u" &&
      (d.gas = await ue(
        t,
        Ku,
        "estimateGas"
      )({ ...d, account: f && { address: f.address, type: "json-rpc" } })),
    rr(d),
    delete d.parameters,
    d
  );
}
async function fl(t, { serializedTransaction: e }) {
  return t.request(
    { method: "eth_sendRawTransaction", params: [e] },
    { retryCount: 0 }
  );
}
const go = new Xn(128);
async function dl(t, e) {
  var w, v, x, I;
  const {
    account: n = t.account,
    chain: r = t.chain,
    accessList: s,
    authorizationList: o,
    blobs: i,
    data: a,
    gas: u,
    gasPrice: c,
    maxFeePerBlobGas: l,
    maxFeePerGas: f,
    maxPriorityFeePerGas: d,
    nonce: h,
    value: p,
    ...m
  } = e;
  if (typeof n > "u")
    throw new ms({ docsPath: "/docs/actions/wallet/sendTransaction" });
  const b = n ? Ne(n) : null;
  try {
    rr(e);
    const g = await (async () => {
      if (e.to) return e.to;
      if (o && o.length > 0)
        return await Fi({ authorization: o[0] }).catch(() => {
          throw new A(
            "`to` is required. Could not infer from `authorizationList`."
          );
        });
    })();
    if ((b == null ? void 0 : b.type) === "json-rpc" || b === null) {
      let y;
      r !== null &&
        ((y = await ue(t, Gi, "getChainId")({})),
        Iu({ currentChainId: y, chain: r }));
      const _ =
          (x =
            (v = (w = t.chain) == null ? void 0 : w.formatters) == null
              ? void 0
              : v.transactionRequest) == null
            ? void 0
            : x.format,
        E = (_ || _s)({
          ...vs(m, { format: _ }),
          accessList: s,
          authorizationList: o,
          blobs: i,
          chainId: y,
          data: a,
          from: b == null ? void 0 : b.address,
          gas: u,
          gasPrice: c,
          maxFeePerBlobGas: l,
          maxFeePerGas: f,
          maxPriorityFeePerGas: d,
          nonce: h,
          to: g,
          value: p,
        }),
        U = go.get(t.uid) ? "wallet_sendTransaction" : "eth_sendTransaction";
      try {
        return await t.request({ method: U, params: [E] }, { retryCount: 0 });
      } catch (H) {
        const V = H;
        if (
          V.name === "InvalidInputRpcError" ||
          V.name === "InvalidParamsRpcError" ||
          V.name === "MethodNotFoundRpcError" ||
          V.name === "MethodNotSupportedRpcError"
        )
          return await t
            .request(
              { method: "wallet_sendTransaction", params: [E] },
              { retryCount: 0 }
            )
            .then((L) => (go.set(t.uid, !0), L));
        throw V;
      }
    }
    if ((b == null ? void 0 : b.type) === "local") {
      const y = await ue(
          t,
          ta,
          "prepareTransactionRequest"
        )({
          account: b,
          accessList: s,
          authorizationList: o,
          blobs: i,
          chain: r,
          data: a,
          gas: u,
          gasPrice: c,
          maxFeePerBlobGas: l,
          maxFeePerGas: f,
          maxPriorityFeePerGas: d,
          nonce: h,
          nonceManager: b.nonceManager,
          parameters: [...ea, "sidecars"],
          value: p,
          ...m,
          to: g,
        }),
        _ =
          (I = r == null ? void 0 : r.serializers) == null
            ? void 0
            : I.transaction,
        M = await b.signTransaction(y, { serializer: _ });
      return await ue(
        t,
        fl,
        "sendRawTransaction"
      )({ serializedTransaction: M });
    }
    throw (b == null ? void 0 : b.type) === "smart"
      ? new yr({
          metaMessages: [
            "Consider using the `sendUserOperation` Action instead.",
          ],
          docsPath: "/docs/actions/bundler/sendUserOperation",
          type: "smart",
        })
      : new yr({
          docsPath: "/docs/actions/wallet/sendTransaction",
          type: b == null ? void 0 : b.type,
        });
  } catch (g) {
    throw g instanceof yr
      ? g
      : Ou(g, { ...e, account: b, chain: e.chain || void 0 });
  }
}
const Dr = [
  {
    inputs: [
      {
        components: [
          { name: "target", type: "address" },
          { name: "allowFailure", type: "bool" },
          { name: "callData", type: "bytes" },
        ],
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          { name: "success", type: "bool" },
          { name: "returnData", type: "bytes" },
        ],
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
function hl(t, e = {}) {
  typeof e.size < "u" && je(t, { size: e.size });
  const n = Pe(t, e);
  return It(n, e);
}
function pl(t, e = {}) {
  let n = t;
  if (
    (typeof e.size < "u" && (je(n, { size: e.size }), (n = dn(n))),
    n.length > 1 || n[0] > 1)
  )
    throw new pc(n);
  return !!n[0];
}
function We(t, e = {}) {
  typeof e.size < "u" && je(t, { size: e.size });
  const n = Pe(t, e);
  return rt(n, e);
}
function ml(t, e = {}) {
  let n = t;
  return (
    typeof e.size < "u" &&
      (je(n, { size: e.size }), (n = dn(n, { dir: "right" }))),
    new TextDecoder().decode(n)
  );
}
function na(t, e) {
  const n = typeof e == "string" ? Re(e) : e,
    r = bs(n);
  if (we(n) === 0 && t.length > 0) throw new Zn();
  if (we(e) && we(e) < 32)
    throw new Cc({
      data: typeof e == "string" ? e : Pe(e),
      params: t,
      size: we(e),
    });
  let s = 0;
  const o = [];
  for (let i = 0; i < t.length; ++i) {
    const a = t[i];
    r.setPosition(s);
    const [u, c] = yt(r, a, { staticPosition: 0 });
    (s += c), o.push(u);
  }
  return o;
}
function yt(t, e, { staticPosition: n }) {
  const r = ps(e.type);
  if (r) {
    const [s, o] = r;
    return gl(t, { ...e, type: o }, { length: s, staticPosition: n });
  }
  if (e.type === "tuple") return _l(t, e, { staticPosition: n });
  if (e.type === "address") return bl(t);
  if (e.type === "bool") return yl(t);
  if (e.type.startsWith("bytes")) return wl(t, e, { staticPosition: n });
  if (e.type.startsWith("uint") || e.type.startsWith("int")) return vl(t, e);
  if (e.type === "string") return xl(t, { staticPosition: n });
  throw new Mc(e.type, { docsPath: "/docs/contract/decodeAbiParameters" });
}
const yo = 32,
  zr = 32;
function bl(t) {
  const e = t.readBytes(32);
  return [er(Pe(Bi(e, -20))), 32];
}
function gl(t, e, { length: n, staticPosition: r }) {
  if (!n) {
    const i = We(t.readBytes(zr)),
      a = r + i,
      u = a + yo;
    t.setPosition(a);
    const c = We(t.readBytes(yo)),
      l = on(e);
    let f = 0;
    const d = [];
    for (let h = 0; h < c; ++h) {
      t.setPosition(u + (l ? h * 32 : f));
      const [p, m] = yt(t, e, { staticPosition: u });
      (f += m), d.push(p);
    }
    return t.setPosition(r + 32), [d, 32];
  }
  if (on(e)) {
    const i = We(t.readBytes(zr)),
      a = r + i,
      u = [];
    for (let c = 0; c < n; ++c) {
      t.setPosition(a + c * 32);
      const [l] = yt(t, e, { staticPosition: a });
      u.push(l);
    }
    return t.setPosition(r + 32), [u, 32];
  }
  let s = 0;
  const o = [];
  for (let i = 0; i < n; ++i) {
    const [a, u] = yt(t, e, { staticPosition: r + s });
    (s += u), o.push(a);
  }
  return [o, s];
}
function yl(t) {
  return [pl(t.readBytes(32), { size: 32 }), 32];
}
function wl(t, e, { staticPosition: n }) {
  const [r, s] = e.type.split("bytes");
  if (!s) {
    const i = We(t.readBytes(32));
    t.setPosition(n + i);
    const a = We(t.readBytes(32));
    if (a === 0) return t.setPosition(n + 32), ["0x", 32];
    const u = t.readBytes(a);
    return t.setPosition(n + 32), [Pe(u), 32];
  }
  return [Pe(t.readBytes(Number.parseInt(s), 32)), 32];
}
function vl(t, e) {
  const n = e.type.startsWith("int"),
    r = Number.parseInt(e.type.split("int")[1] || "256"),
    s = t.readBytes(32);
  return [r > 48 ? hl(s, { signed: n }) : We(s, { signed: n }), 32];
}
function _l(t, e, { staticPosition: n }) {
  const r = e.components.length === 0 || e.components.some(({ name: i }) => !i),
    s = r ? [] : {};
  let o = 0;
  if (on(e)) {
    const i = We(t.readBytes(zr)),
      a = n + i;
    for (let u = 0; u < e.components.length; ++u) {
      const c = e.components[u];
      t.setPosition(a + o);
      const [l, f] = yt(t, c, { staticPosition: a });
      (o += f), (s[r ? u : c == null ? void 0 : c.name] = l);
    }
    return t.setPosition(n + 32), [s, 32];
  }
  for (let i = 0; i < e.components.length; ++i) {
    const a = e.components[i],
      [u, c] = yt(t, a, { staticPosition: n });
    (s[r ? i : a == null ? void 0 : a.name] = u), (o += c);
  }
  return [s, o];
}
function xl(t, { staticPosition: e }) {
  const n = We(t.readBytes(32)),
    r = e + n;
  t.setPosition(r);
  const s = We(t.readBytes(32));
  if (s === 0) return t.setPosition(e + 32), ["", 32];
  const o = t.readBytes(s, 32),
    i = ml(dn(o));
  return t.setPosition(e + 32), [i, 32];
}
function on(t) {
  var r;
  const { type: e } = t;
  if (e === "string" || e === "bytes" || e.endsWith("[]")) return !0;
  if (e === "tuple") return (r = t.components) == null ? void 0 : r.some(on);
  const n = ps(t.type);
  return !!(n && on({ ...t, type: n[1] }));
}
const Il = (t) => hn(cs(t));
function Cl(t) {
  return Il(t);
}
const Pl = "1.0.6";
let Te = class Gr extends Error {
  constructor(e, n = {}) {
    var i;
    const r =
        n.cause instanceof Gr
          ? n.cause.details
          : (i = n.cause) != null && i.message
          ? n.cause.message
          : n.details,
      s = (n.cause instanceof Gr && n.cause.docsPath) || n.docsPath,
      o = [
        e || "An error occurred.",
        "",
        ...(n.metaMessages ? [...n.metaMessages, ""] : []),
        ...(s ? [`Docs: https://abitype.dev${s}`] : []),
        ...(r ? [`Details: ${r}`] : []),
        `Version: abitype@${Pl}`,
      ].join(`
`);
    super(o),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "AbiTypeError",
      }),
      n.cause && (this.cause = n.cause),
      (this.details = r),
      (this.docsPath = s),
      (this.metaMessages = n.metaMessages),
      (this.shortMessage = e);
  }
};
function ot(t, e) {
  const n = t.exec(e);
  return n == null ? void 0 : n.groups;
}
const ra = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  sa =
    /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
  oa = /^\(.+?\).*?$/,
  wo = /^tuple(?<array>(\[(\d*)\])*)$/;
function Hr(t) {
  let e = t.type;
  if (wo.test(t.type) && "components" in t) {
    e = "(";
    const n = t.components.length;
    for (let s = 0; s < n; s++) {
      const o = t.components[s];
      (e += Hr(o)), s < n - 1 && (e += ", ");
    }
    const r = ot(wo, t.type);
    return (
      (e += `)${(r == null ? void 0 : r.array) ?? ""}`), Hr({ ...t, type: e })
    );
  }
  return (
    "indexed" in t && t.indexed && (e = `${e} indexed`),
    t.name ? `${e} ${t.name}` : e
  );
}
function Bt(t) {
  let e = "";
  const n = t.length;
  for (let r = 0; r < n; r++) {
    const s = t[r];
    (e += Hr(s)), r !== n - 1 && (e += ", ");
  }
  return e;
}
function kl(t) {
  return t.type === "function"
    ? `function ${t.name}(${Bt(t.inputs)})${
        t.stateMutability && t.stateMutability !== "nonpayable"
          ? ` ${t.stateMutability}`
          : ""
      }${t.outputs.length ? ` returns (${Bt(t.outputs)})` : ""}`
    : t.type === "event"
    ? `event ${t.name}(${Bt(t.inputs)})`
    : t.type === "error"
    ? `error ${t.name}(${Bt(t.inputs)})`
    : t.type === "constructor"
    ? `constructor(${Bt(t.inputs)})${
        t.stateMutability === "payable" ? " payable" : ""
      }`
    : t.type === "fallback"
    ? "fallback()"
    : "receive() external payable";
}
const ia = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function El(t) {
  return ia.test(t);
}
function Sl(t) {
  return ot(ia, t);
}
const aa = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Tl(t) {
  return aa.test(t);
}
function Al(t) {
  return ot(aa, t);
}
const ca =
  /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function Ml(t) {
  return ca.test(t);
}
function Bl(t) {
  return ot(ca, t);
}
const ua = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function la(t) {
  return ua.test(t);
}
function Ol(t) {
  return ot(ua, t);
}
const fa =
  /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function jl(t) {
  return fa.test(t);
}
function Nl(t) {
  return ot(fa, t);
}
const $l = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function Fl(t) {
  return $l.test(t);
}
const Ll = /^receive\(\) external payable$/;
function Ul(t) {
  return Ll.test(t);
}
const Rl = new Set(["indexed"]),
  qr = new Set(["calldata", "memory", "storage"]);
class Dl extends Te {
  constructor({ type: e }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownTypeError",
      });
  }
}
class zl extends Te {
  constructor({ type: e }) {
    super("Unknown type.", {
      metaMessages: [`Type "${e}" is not a valid ABI type.`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownSolidityTypeError",
      });
  }
}
class Gl extends Te {
  constructor({ param: e }) {
    super("Invalid ABI parameter.", { details: e }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParameterError",
      });
  }
}
class Hl extends Te {
  constructor({ param: e, name: n }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "SolidityProtectedKeywordError",
      });
  }
}
class ql extends Te {
  constructor({ param: e, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidModifierError",
      });
  }
}
class Vl extends Te {
  constructor({ param: e, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
      ],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidFunctionModifierError",
      });
  }
}
class Wl extends Te {
  constructor({ abiParameter: e }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(e, null, 2),
      metaMessages: ["ABI parameter type is invalid."],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidAbiTypeParameterError",
      });
  }
}
class Nt extends Te {
  constructor({ signature: e, type: n }) {
    super(`Invalid ${n} signature.`, { details: e }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidSignatureError",
      });
  }
}
class Kl extends Te {
  constructor({ signature: e }) {
    super("Unknown signature.", { details: e }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "UnknownSignatureError",
      });
  }
}
class Jl extends Te {
  constructor({ signature: e }) {
    super("Invalid struct signature.", {
      details: e,
      metaMessages: ["No properties exist."],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidStructSignatureError",
      });
  }
}
class Zl extends Te {
  constructor({ type: e }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${e}" is a circular reference.`],
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "CircularReferenceError",
      });
  }
}
class Ql extends Te {
  constructor({ current: e, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${e.trim()}" has too many ${
          n > 0 ? "opening" : "closing"
        } parentheses.`,
      ],
      details: `Depth "${n}"`,
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "InvalidParenthesisError",
      });
  }
}
function Xl(t, e) {
  return e ? `${e}:${t}` : t;
}
const wr = new Map([
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 },
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 },
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 },
  ],
]);
function Yl(t, e = {}) {
  if (Ml(t)) {
    const n = Bl(t);
    if (!n) throw new Nt({ signature: t, type: "function" });
    const r = Ae(n.parameters),
      s = [],
      o = r.length;
    for (let a = 0; a < o; a++)
      s.push(ct(r[a], { modifiers: qr, structs: e, type: "function" }));
    const i = [];
    if (n.returns) {
      const a = Ae(n.returns),
        u = a.length;
      for (let c = 0; c < u; c++)
        i.push(ct(a[c], { modifiers: qr, structs: e, type: "function" }));
    }
    return {
      name: n.name,
      type: "function",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s,
      outputs: i,
    };
  }
  if (Tl(t)) {
    const n = Al(t);
    if (!n) throw new Nt({ signature: t, type: "event" });
    const r = Ae(n.parameters),
      s = [],
      o = r.length;
    for (let i = 0; i < o; i++)
      s.push(ct(r[i], { modifiers: Rl, structs: e, type: "event" }));
    return { name: n.name, type: "event", inputs: s };
  }
  if (El(t)) {
    const n = Sl(t);
    if (!n) throw new Nt({ signature: t, type: "error" });
    const r = Ae(n.parameters),
      s = [],
      o = r.length;
    for (let i = 0; i < o; i++) s.push(ct(r[i], { structs: e, type: "error" }));
    return { name: n.name, type: "error", inputs: s };
  }
  if (jl(t)) {
    const n = Nl(t);
    if (!n) throw new Nt({ signature: t, type: "constructor" });
    const r = Ae(n.parameters),
      s = [],
      o = r.length;
    for (let i = 0; i < o; i++)
      s.push(ct(r[i], { structs: e, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s,
    };
  }
  if (Fl(t)) return { type: "fallback" };
  if (Ul(t)) return { type: "receive", stateMutability: "payable" };
  throw new Kl({ signature: t });
}
const ef =
    /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  tf =
    /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
  nf = /^u?int$/;
function ct(t, e) {
  var f, d;
  const n = Xl(t, e == null ? void 0 : e.type);
  if (wr.has(n)) return wr.get(n);
  const r = oa.test(t),
    s = ot(r ? tf : ef, t);
  if (!s) throw new Gl({ param: t });
  if (s.name && sf(s.name)) throw new Hl({ param: t, name: s.name });
  const o = s.name ? { name: s.name } : {},
    i = s.modifier === "indexed" ? { indexed: !0 } : {},
    a = (e == null ? void 0 : e.structs) ?? {};
  let u,
    c = {};
  if (r) {
    u = "tuple";
    const h = Ae(s.type),
      p = [],
      m = h.length;
    for (let b = 0; b < m; b++) p.push(ct(h[b], { structs: a }));
    c = { components: p };
  } else if (s.type in a) (u = "tuple"), (c = { components: a[s.type] });
  else if (nf.test(s.type)) u = `${s.type}256`;
  else if (((u = s.type), (e == null ? void 0 : e.type) !== "struct" && !da(u)))
    throw new zl({ type: u });
  if (s.modifier) {
    if (
      !(
        (d = (f = e == null ? void 0 : e.modifiers) == null ? void 0 : f.has) !=
          null && d.call(f, s.modifier)
      )
    )
      throw new ql({
        param: t,
        type: e == null ? void 0 : e.type,
        modifier: s.modifier,
      });
    if (qr.has(s.modifier) && !of(u, !!s.array))
      throw new Vl({
        param: t,
        type: e == null ? void 0 : e.type,
        modifier: s.modifier,
      });
  }
  const l = { type: `${u}${s.array ?? ""}`, ...o, ...i, ...c };
  return wr.set(n, l), l;
}
function Ae(t, e = [], n = "", r = 0) {
  const s = t.trim().length;
  for (let o = 0; o < s; o++) {
    const i = t[o],
      a = t.slice(o + 1);
    switch (i) {
      case ",":
        return r === 0 ? Ae(a, [...e, n.trim()]) : Ae(a, e, `${n}${i}`, r);
      case "(":
        return Ae(a, e, `${n}${i}`, r + 1);
      case ")":
        return Ae(a, e, `${n}${i}`, r - 1);
      default:
        return Ae(a, e, `${n}${i}`, r);
    }
  }
  if (n === "") return e;
  if (r !== 0) throw new Ql({ current: n, depth: r });
  return e.push(n.trim()), e;
}
function da(t) {
  return (
    t === "address" ||
    t === "bool" ||
    t === "function" ||
    t === "string" ||
    ra.test(t) ||
    sa.test(t)
  );
}
const rf =
  /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function sf(t) {
  return (
    t === "address" ||
    t === "bool" ||
    t === "function" ||
    t === "string" ||
    t === "tuple" ||
    ra.test(t) ||
    sa.test(t) ||
    rf.test(t)
  );
}
function of(t, e) {
  return e || t === "bytes" || t === "string" || t === "tuple";
}
function af(t) {
  const e = {},
    n = t.length;
  for (let i = 0; i < n; i++) {
    const a = t[i];
    if (!la(a)) continue;
    const u = Ol(a);
    if (!u) throw new Nt({ signature: a, type: "struct" });
    const c = u.properties.split(";"),
      l = [],
      f = c.length;
    for (let d = 0; d < f; d++) {
      const p = c[d].trim();
      if (!p) continue;
      const m = ct(p, { type: "struct" });
      l.push(m);
    }
    if (!l.length) throw new Jl({ signature: a });
    e[u.name] = l;
  }
  const r = {},
    s = Object.entries(e),
    o = s.length;
  for (let i = 0; i < o; i++) {
    const [a, u] = s[i];
    r[a] = ha(u, e);
  }
  return r;
}
const cf = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function ha(t, e, n = new Set()) {
  const r = [],
    s = t.length;
  for (let o = 0; o < s; o++) {
    const i = t[o];
    if (oa.test(i.type)) r.push(i);
    else {
      const u = ot(cf, i.type);
      if (!(u != null && u.type)) throw new Wl({ abiParameter: i });
      const { array: c, type: l } = u;
      if (l in e) {
        if (n.has(l)) throw new Zl({ type: l });
        r.push({
          ...i,
          type: `tuple${c ?? ""}`,
          components: ha(e[l] ?? [], e, new Set([...n, l])),
        });
      } else if (da(l)) r.push(i);
      else throw new Dl({ type: l });
    }
  }
  return r;
}
function pa(t) {
  const e = af(t),
    n = [],
    r = t.length;
  for (let s = 0; s < r; s++) {
    const o = t[s];
    la(o) || n.push(Yl(o, e));
  }
  return n;
}
function uf(t) {
  let e = !0,
    n = "",
    r = 0,
    s = "",
    o = !1;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (
      (["(", ")", ","].includes(a) && (e = !0),
      a === "(" && r++,
      a === ")" && r--,
      !!e)
    ) {
      if (r === 0) {
        if (a === " " && ["event", "function", ""].includes(s)) s = "";
        else if (((s += a), a === ")")) {
          o = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        t[i - 1] !== "," && n !== "," && n !== ",(" && ((n = ""), (e = !1));
        continue;
      }
      (s += a), (n += a);
    }
  }
  if (!o) throw new A("Unable to normalize signature.");
  return s;
}
const lf = (t) => {
  const e = typeof t == "string" ? t : kl(t);
  return uf(e);
};
function ma(t) {
  return Cl(lf(t));
}
const ff = ma,
  Cs = (t) => Fn(ma(t), 0, 4);
function Ps(t) {
  const { abi: e, args: n = [], name: r } = t,
    s = nt(r, { strict: !1 }),
    o = e.filter((a) =>
      s
        ? a.type === "function"
          ? Cs(a) === r
          : a.type === "event"
          ? ff(a) === r
          : !1
        : "name" in a && a.name === r
    );
  if (o.length === 0) return;
  if (o.length === 1) return o[0];
  let i;
  for (const a of o) {
    if (!("inputs" in a)) continue;
    if (!n || n.length === 0) {
      if (!a.inputs || a.inputs.length === 0) return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
      continue;
    if (
      n.every((c, l) => {
        const f = "inputs" in a && a.inputs[l];
        return f ? Vr(c, f) : !1;
      })
    ) {
      if (i && "inputs" in i && i.inputs) {
        const c = ba(a.inputs, i.inputs, n);
        if (c)
          throw new Tc({ abiItem: a, type: c[0] }, { abiItem: i, type: c[1] });
      }
      i = a;
    }
  }
  return i || o[0];
}
function Vr(t, e) {
  const n = typeof t,
    r = e.type;
  switch (r) {
    case "address":
      return st(t, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in e
        ? Object.values(e.components).every((s, o) =>
            Vr(Object.values(t)[o], s)
          )
        : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
            r
          )
        ? n === "number" || n === "bigint"
        : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)
        ? n === "string" || t instanceof Uint8Array
        : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)
        ? Array.isArray(t) &&
          t.every((s) =>
            Vr(s, { ...e, type: r.replace(/(\[[0-9]{0,}\])$/, "") })
          )
        : !1;
  }
}
function ba(t, e, n) {
  for (const r in t) {
    const s = t[r],
      o = e[r];
    if (
      s.type === "tuple" &&
      o.type === "tuple" &&
      "components" in s &&
      "components" in o
    )
      return ba(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if (
      i.includes("address") && i.includes("bytes20")
        ? !0
        : i.includes("address") && i.includes("string")
        ? st(n[r], { strict: !1 })
        : i.includes("address") && i.includes("bytes")
        ? st(n[r], { strict: !1 })
        : !1
    )
      return i;
  }
}
const vr = "/docs/contract/decodeFunctionResult";
function sr(t) {
  const { abi: e, args: n, functionName: r, data: s } = t;
  let o = e[0];
  if (r) {
    const a = Ps({ abi: e, args: n, name: r });
    if (!a) throw new jn(r, { docsPath: vr });
    o = a;
  }
  if (o.type !== "function") throw new jn(void 0, { docsPath: vr });
  if (!o.outputs) throw new Sc(o.name, { docsPath: vr });
  const i = na(o.outputs, s);
  if (i && i.length > 1) return i;
  if (i && i.length === 1) return i[0];
}
const vo = "/docs/contract/encodeFunctionData";
function df(t) {
  const { abi: e, args: n, functionName: r } = t;
  let s = e[0];
  if (r) {
    const o = Ps({ abi: e, args: n, name: r });
    if (!o) throw new jn(r, { docsPath: vo });
    s = o;
  }
  if (s.type !== "function") throw new jn(void 0, { docsPath: vo });
  return { abi: [s], functionName: Cs(Ct(s)) };
}
function mn(t) {
  const { args: e } = t,
    { abi: n, functionName: r } = (() => {
      var a;
      return t.abi.length === 1 &&
        (a = t.functionName) != null &&
        a.startsWith("0x")
        ? t
        : df(t);
    })(),
    s = n[0],
    o = r,
    i = "inputs" in s && s.inputs ? Oi(s.inputs, e ?? []) : void 0;
  return Qn([o, i ?? "0x"]);
}
function ga({ blockNumber: t, chain: e, contract: n }) {
  var s;
  const r = (s = e == null ? void 0 : e.contracts) == null ? void 0 : s[n];
  if (!r) throw new Br({ chain: e, contract: { name: n } });
  if (t && r.blockCreated && r.blockCreated > t)
    throw new Br({
      blockNumber: t,
      chain: e,
      contract: { name: n, blockCreated: r.blockCreated },
    });
  return r.address;
}
const hf = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type.",
  },
  pf = {
    inputs: [{ name: "message", type: "string" }],
    name: "Error",
    type: "error",
  },
  mf = {
    inputs: [{ name: "reason", type: "uint256" }],
    name: "Panic",
    type: "error",
  };
function bf(t) {
  const { abi: e, data: n } = t,
    r = Fn(n, 0, 4);
  if (r === "0x") throw new Zn();
  const o = [...(e || []), pf, mf].find(
    (i) => i.type === "error" && r === Cs(Ct(i))
  );
  if (!o) throw new Ii(r, { docsPath: "/docs/contract/decodeErrorResult" });
  return {
    abiItem: o,
    args:
      "inputs" in o && o.inputs && o.inputs.length > 0
        ? na(o.inputs, Fn(n, 4))
        : void 0,
    errorName: o.name,
  };
}
function ya({
  abiItem: t,
  args: e,
  includeFunctionName: n = !0,
  includeName: r = !1,
}) {
  if ("name" in t && "inputs" in t && t.inputs)
    return `${n ? t.name : ""}(${t.inputs
      .map(
        (s, o) =>
          `${r && s.name ? `${s.name}: ` : ""}${
            typeof e[o] == "object" ? Oe(e[o]) : e[o]
          }`
      )
      .join(", ")})`;
}
class gf extends A {
  constructor(
    e,
    {
      account: n,
      docsPath: r,
      chain: s,
      data: o,
      gas: i,
      gasPrice: a,
      maxFeePerGas: u,
      maxPriorityFeePerGas: c,
      nonce: l,
      to: f,
      value: d,
      stateOverride: h,
    }
  ) {
    var b;
    const p = n ? Ne(n) : void 0;
    let m = pn({
      from: p == null ? void 0 : p.address,
      to: f,
      value:
        typeof d < "u" &&
        `${gs(d)} ${
          ((b = s == null ? void 0 : s.nativeCurrency) == null
            ? void 0
            : b.symbol) || "ETH"
        }`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${Ce(a)} gwei`,
      maxFeePerGas: typeof u < "u" && `${Ce(u)} gwei`,
      maxPriorityFeePerGas: typeof c < "u" && `${Ce(c)} gwei`,
      nonce: l,
    });
    h &&
      (m += `
${Vu(h)}`),
      super(e.shortMessage, {
        cause: e,
        docsPath: r,
        metaMessages: [
          ...(e.metaMessages ? [...e.metaMessages, " "] : []),
          "Raw Call Arguments:",
          m,
        ].filter(Boolean),
        name: "CallExecutionError",
      }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.cause = e);
  }
}
class ks extends A {
  constructor(
    e,
    {
      abi: n,
      args: r,
      contractAddress: s,
      docsPath: o,
      functionName: i,
      sender: a,
    }
  ) {
    const u = Ps({ abi: n, args: r, name: i }),
      c = u
        ? ya({ abiItem: u, args: r, includeFunctionName: !1, includeName: !1 })
        : void 0,
      l = u ? Ct(u, { includeName: !0 }) : void 0,
      f = pn({
        address: s && Au(s),
        function: l,
        args:
          c &&
          c !== "()" &&
          `${[...Array((i == null ? void 0 : i.length) ?? 0).keys()]
            .map(() => " ")
            .join("")}${c}`,
        sender: a,
      });
    super(
      e.shortMessage ||
        `An unknown error occurred while executing the contract function "${i}".`,
      {
        cause: e,
        docsPath: o,
        metaMessages: [
          ...(e.metaMessages ? [...e.metaMessages, " "] : []),
          f && "Contract Call:",
          f,
        ].filter(Boolean),
        name: "ContractFunctionExecutionError",
      }
    ),
      Object.defineProperty(this, "abi", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "args", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "contractAddress", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "formattedArgs", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "functionName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "sender", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.abi = n),
      (this.args = r),
      (this.cause = e),
      (this.contractAddress = s),
      (this.functionName = i),
      (this.sender = a);
  }
}
class yf extends A {
  constructor({ abi: e, data: n, functionName: r, message: s }) {
    let o, i, a, u;
    if (n && n !== "0x")
      try {
        i = bf({ abi: e, data: n });
        const { abiItem: l, errorName: f, args: d } = i;
        if (f === "Error") u = d[0];
        else if (f === "Panic") {
          const [h] = d;
          u = hf[h];
        } else {
          const h = l ? Ct(l, { includeName: !0 }) : void 0,
            p =
              l && d
                ? ya({
                    abiItem: l,
                    args: d,
                    includeFunctionName: !1,
                    includeName: !1,
                  })
                : void 0;
          a = [
            h ? `Error: ${h}` : "",
            p && p !== "()"
              ? `       ${[
                  ...Array((f == null ? void 0 : f.length) ?? 0).keys(),
                ]
                  .map(() => " ")
                  .join("")}${p}`
              : "",
          ];
        }
      } catch (l) {
        o = l;
      }
    else s && (u = s);
    let c;
    o instanceof Ii &&
      ((c = o.signature),
      (a = [
        `Unable to decode signature "${c}" as it was not found on the provided ABI.`,
        "Make sure you are using the correct ABI and that the error exists on it.",
        `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`,
      ])),
      super(
        (u && u !== "execution reverted") || c
          ? [
              `The contract function "${r}" reverted with the following ${
                c ? "signature" : "reason"
              }:`,
              u || c,
            ].join(`
`)
          : `The contract function "${r}" reverted.`,
        { cause: o, metaMessages: a, name: "ContractFunctionRevertedError" }
      ),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "reason", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "signature", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = i),
      (this.reason = u),
      (this.signature = c);
  }
}
class wf extends A {
  constructor({ functionName: e }) {
    super(`The contract function "${e}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${e}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract.",
      ],
      name: "ContractFunctionZeroDataError",
    });
  }
}
class vf extends A {
  constructor({ factory: e }) {
    super(
      `Deployment for counterfactual contract call failed${
        e ? ` for factory "${e}".` : ""
      }`,
      {
        metaMessages: [
          "Please ensure:",
          "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
          "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
        ],
        name: "CounterfactualDeploymentFailedError",
      }
    );
  }
}
class Es extends A {
  constructor({ data: e, message: n }) {
    super(n || "", { name: "RawContractError" }),
      Object.defineProperty(this, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
      Object.defineProperty(this, "data", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.data = e);
  }
}
const _f = 3;
function an(
  t,
  { abi: e, address: n, args: r, docsPath: s, functionName: o, sender: i }
) {
  const {
      code: a,
      data: u,
      message: c,
      shortMessage: l,
    } = t instanceof Es
      ? t
      : t instanceof A
      ? t.walk((d) => "data" in d) || t.walk()
      : {},
    f =
      t instanceof Zn
        ? new wf({ functionName: o })
        : [_f, ft.code].includes(a) && (u || c || l)
        ? new yf({
            abi: e,
            data: typeof u == "object" ? u.data : u,
            functionName: o,
            message: l ?? c,
          })
        : t;
  return new ks(f, {
    abi: e,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: i,
  });
}
const xf = "0x82ad56cb",
  If =
    "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
  Cf =
    "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";
function Pf(t, { docsPath: e, ...n }) {
  const r = (() => {
    const s = ws(t, n);
    return s instanceof nr ? t : s;
  })();
  return new gf(r, { docsPath: e, ...n });
}
function wa() {
  let t = () => {},
    e = () => {};
  return {
    promise: new Promise((r, s) => {
      (t = r), (e = s);
    }),
    resolve: t,
    reject: e,
  };
}
const _r = new Map();
function va({ fn: t, id: e, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
      const l = u();
      i();
      const f = l.map(({ args: d }) => d);
      f.length !== 0 &&
        t(f)
          .then((d) => {
            s && Array.isArray(d) && d.sort(s);
            for (let h = 0; h < l.length; h++) {
              const { resolve: p } = l[h];
              p == null || p([d[h], d]);
            }
          })
          .catch((d) => {
            for (let h = 0; h < l.length; h++) {
              const { reject: p } = l[h];
              p == null || p(d);
            }
          });
    },
    i = () => _r.delete(e),
    a = () => u().map(({ args: l }) => l),
    u = () => _r.get(e) || [],
    c = (l) => _r.set(e, [...u(), l]);
  return {
    flush: i,
    async schedule(l) {
      const { promise: f, resolve: d, reject: h } = wa();
      return (
        (n == null ? void 0 : n([...a(), l])) && o(),
        u().length > 0
          ? (c({ args: l, resolve: d, reject: h }), f)
          : (c({ args: l, resolve: d, reject: h }), setTimeout(o, r), f)
      );
    },
  };
}
async function Ss(t, e) {
  var H, V, L, j;
  const {
      account: n = t.account,
      batch: r = !!((H = t.batch) != null && H.multicall),
      blockNumber: s,
      blockTag: o = "latest",
      accessList: i,
      blobs: a,
      code: u,
      data: c,
      factory: l,
      factoryData: f,
      gas: d,
      gasPrice: h,
      maxFeePerBlobGas: p,
      maxFeePerGas: m,
      maxPriorityFeePerGas: b,
      nonce: w,
      to: v,
      value: x,
      stateOverride: I,
      ...g
    } = e,
    y = n ? Ne(n) : void 0;
  if (u && (l || f))
    throw new A(
      "Cannot provide both `code` & `factory`/`factoryData` as parameters."
    );
  if (u && v) throw new A("Cannot provide both `code` & `to` as parameters.");
  const _ = u && c,
    M = l && f && v && c,
    E = _ || M,
    U = _
      ? Sf({ code: u, data: c })
      : M
      ? Tf({ data: c, factory: l, factoryData: f, to: v })
      : c;
  try {
    rr(e);
    const K = (s ? W(s) : void 0) || o,
      O = Ki(I),
      Y =
        (j =
          (L = (V = t.chain) == null ? void 0 : V.formatters) == null
            ? void 0
            : L.transactionRequest) == null
          ? void 0
          : j.format,
      re = (Y || _s)({
        ...vs(g, { format: Y }),
        from: y == null ? void 0 : y.address,
        accessList: i,
        blobs: a,
        data: U,
        gas: d,
        gasPrice: h,
        maxFeePerBlobGas: p,
        maxFeePerGas: m,
        maxPriorityFeePerGas: b,
        nonce: w,
        to: E ? void 0 : v,
        value: x,
      });
    if (r && kf({ request: re }) && !O)
      try {
        return await Ef(t, { ...re, blockNumber: s, blockTag: o });
      } catch (N) {
        if (!(N instanceof Li) && !(N instanceof Br)) throw N;
      }
    const ve = await t.request({
      method: "eth_call",
      params: O ? [re, K, O] : [re, K],
    });
    return ve === "0x" ? { data: void 0 } : { data: ve };
  } catch (G) {
    const K = Af(G),
      { offchainLookup: O, offchainLookupSignature: Y } = await Kn(
        async () => {
          const { offchainLookup: se, offchainLookupSignature: re } =
            await import("./ccip.B7DSbOVx.js");
          return { offchainLookup: se, offchainLookupSignature: re };
        },
        [],
        import.meta.url
      );
    if (t.ccipRead !== !1 && (K == null ? void 0 : K.slice(0, 10)) === Y && v)
      return { data: await O(t, { data: K, to: v }) };
    throw E && (K == null ? void 0 : K.slice(0, 10)) === "0x101bb98d"
      ? new vf({ factory: l })
      : Pf(G, { ...e, account: y, chain: t.chain });
  }
}
function kf({ request: t }) {
  const { data: e, to: n, ...r } = t;
  return !(
    !e ||
    e.startsWith(xf) ||
    !n ||
    Object.values(r).filter((s) => typeof s < "u").length > 0
  );
}
async function Ef(t, e) {
  var m;
  const { batchSize: n = 1024, wait: r = 0 } =
      typeof ((m = t.batch) == null ? void 0 : m.multicall) == "object"
        ? t.batch.multicall
        : {},
    {
      blockNumber: s,
      blockTag: o = "latest",
      data: i,
      multicallAddress: a,
      to: u,
    } = e;
  let c = a;
  if (!c) {
    if (!t.chain) throw new Li();
    c = ga({ blockNumber: s, chain: t.chain, contract: "multicall3" });
  }
  const f = (s ? W(s) : void 0) || o,
    { schedule: d } = va({
      id: `${t.uid}.${f}`,
      wait: r,
      shouldSplitBatch(b) {
        return b.reduce((v, { data: x }) => v + (x.length - 2), 0) > n * 2;
      },
      fn: async (b) => {
        const w = b.map((I) => ({
            allowFailure: !0,
            callData: I.data,
            target: I.to,
          })),
          v = mn({ abi: Dr, args: [w], functionName: "aggregate3" }),
          x = await t.request({
            method: "eth_call",
            params: [{ data: v, to: c }, f],
          });
        return sr({
          abi: Dr,
          args: [w],
          functionName: "aggregate3",
          data: x || "0x",
        });
      },
    }),
    [{ returnData: h, success: p }] = await d({ data: i, to: u });
  if (!p) throw new Es({ data: h });
  return h === "0x" ? { data: void 0 } : { data: h };
}
function Sf(t) {
  const { code: e, data: n } = t;
  return ji({
    abi: pa(["constructor(bytes, bytes)"]),
    bytecode: If,
    args: [e, n],
  });
}
function Tf(t) {
  const { data: e, factory: n, factoryData: r, to: s } = t;
  return ji({
    abi: pa(["constructor(address, bytes, address, bytes)"]),
    bytecode: Cf,
    args: [s, e, n, r],
  });
}
function Af(t) {
  var n;
  if (!(t instanceof A)) return;
  const e = t.walk();
  return typeof (e == null ? void 0 : e.data) == "object"
    ? (n = e.data) == null
      ? void 0
      : n.data
    : e.data;
}
async function _a(t, e) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = e,
    a = mn({ abi: n, args: s, functionName: o });
  try {
    const { data: u } = await ue(t, Ss, "call")({ ...i, data: a, to: r });
    return sr({ abi: n, args: s, functionName: o, data: u || "0x" });
  } catch (u) {
    throw an(u, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: o,
    });
  }
}
const Mf = new Map(),
  Bf = new Map();
function Of(t) {
  const e = (s, o) => ({
      clear: () => o.delete(s),
      get: () => o.get(s),
      set: (i) => o.set(s, i),
    }),
    n = e(t, Mf),
    r = e(t, Bf);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r,
  };
}
async function jf(t, { cacheKey: e, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = Of(e),
    s = r.response.get();
  if (s && n > 0 && new Date().getTime() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || ((o = t()), r.promise.set(o));
  try {
    const i = await o;
    return r.response.set({ created: new Date(), data: i }), i;
  } finally {
    r.promise.clear();
  }
}
const Nf = (t) => `blockNumber.${t}`;
async function $f(t, { cacheTime: e = t.cacheTime } = {}) {
  const n = await jf(() => t.request({ method: "eth_blockNumber" }), {
    cacheKey: Nf(t.uid),
    cacheTime: e,
  });
  return BigInt(n);
}
function Ff(t, { args: e, eventName: n } = {}) {
  return {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    logIndex: t.logIndex ? Number(t.logIndex) : null,
    transactionHash: t.transactionHash ? t.transactionHash : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    ...(n ? { args: e, eventName: n } : {}),
  };
}
async function xa(
  t,
  { blockHash: e, blockNumber: n, blockTag: r, hash: s, index: o }
) {
  var l, f, d;
  const i = r || "latest",
    a = n !== void 0 ? W(n) : void 0;
  let u = null;
  if (
    (s
      ? (u = await t.request(
          { method: "eth_getTransactionByHash", params: [s] },
          { dedupe: !0 }
        ))
      : e
      ? (u = await t.request(
          {
            method: "eth_getTransactionByBlockHashAndIndex",
            params: [e, W(o)],
          },
          { dedupe: !0 }
        ))
      : (a || i) &&
        (u = await t.request(
          {
            method: "eth_getTransactionByBlockNumberAndIndex",
            params: [a || i, W(o)],
          },
          { dedupe: !!a }
        )),
    !u)
  )
    throw new Ri({
      blockHash: e,
      blockNumber: n,
      blockTag: i,
      hash: s,
      index: o,
    });
  return (
    ((d =
      (f = (l = t.chain) == null ? void 0 : l.formatters) == null
        ? void 0
        : f.transaction) == null
      ? void 0
      : d.format) || Vi
  )(u);
}
const Lf = { "0x0": "reverted", "0x1": "success" };
function Uf(t) {
  const e = {
    ...t,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    contractAddress: t.contractAddress ? t.contractAddress : null,
    cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null,
    effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
    logs: t.logs ? t.logs.map((n) => Ff(n)) : null,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? rt(t.transactionIndex) : null,
    status: t.status ? Lf[t.status] : null,
    type: t.type ? qi[t.type] || t.type : null,
  };
  return (
    t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)),
    t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)),
    e
  );
}
async function _o(t, { hash: e }) {
  var s, o, i;
  const n = await t.request(
    { method: "eth_getTransactionReceipt", params: [e] },
    { dedupe: !0 }
  );
  if (!n) throw new Di({ hash: e });
  return (
    ((i =
      (o = (s = t.chain) == null ? void 0 : s.formatters) == null
        ? void 0
        : o.transactionReceipt) == null
      ? void 0
      : i.format) || Uf
  )(n);
}
async function Rf(t, e) {
  var b;
  const {
      allowFailure: n = !0,
      batchSize: r,
      blockNumber: s,
      blockTag: o,
      multicallAddress: i,
      stateOverride: a,
    } = e,
    u = e.contracts,
    c =
      r ??
      ((typeof ((b = t.batch) == null ? void 0 : b.multicall) == "object" &&
        t.batch.multicall.batchSize) ||
        1024);
  let l = i;
  if (!l) {
    if (!t.chain)
      throw new Error(
        "client chain not configured. multicallAddress is required."
      );
    l = ga({ blockNumber: s, chain: t.chain, contract: "multicall3" });
  }
  const f = [[]];
  let d = 0,
    h = 0;
  for (let w = 0; w < u.length; w++) {
    const { abi: v, address: x, args: I, functionName: g } = u[w];
    try {
      const y = mn({ abi: v, args: I, functionName: g });
      (h += (y.length - 2) / 2),
        c > 0 &&
          h > c &&
          f[d].length > 0 &&
          (d++, (h = (y.length - 2) / 2), (f[d] = [])),
        (f[d] = [...f[d], { allowFailure: !0, callData: y, target: x }]);
    } catch (y) {
      const _ = an(y, {
        abi: v,
        address: x,
        args: I,
        docsPath: "/docs/contract/multicall",
        functionName: g,
      });
      if (!n) throw _;
      f[d] = [...f[d], { allowFailure: !0, callData: "0x", target: x }];
    }
  }
  const p = await Promise.allSettled(
      f.map((w) =>
        ue(
          t,
          _a,
          "readContract"
        )({
          abi: Dr,
          address: l,
          args: [w],
          blockNumber: s,
          blockTag: o,
          functionName: "aggregate3",
          stateOverride: a,
        })
      )
    ),
    m = [];
  for (let w = 0; w < p.length; w++) {
    const v = p[w];
    if (v.status === "rejected") {
      if (!n) throw v.reason;
      for (let I = 0; I < f[w].length; I++)
        m.push({ status: "failure", error: v.reason, result: void 0 });
      continue;
    }
    const x = v.value;
    for (let I = 0; I < x.length; I++) {
      const { returnData: g, success: y } = x[I],
        { callData: _ } = f[w][I],
        { abi: M, address: E, functionName: U, args: H } = u[m.length];
      try {
        if (_ === "0x") throw new Zn();
        if (!y) throw new Es({ data: g });
        const V = sr({ abi: M, args: H, data: g, functionName: U });
        m.push(n ? { result: V, status: "success" } : V);
      } catch (V) {
        const L = an(V, {
          abi: M,
          address: E,
          args: H,
          docsPath: "/docs/contract/multicall",
          functionName: U,
        });
        if (!n) throw L;
        m.push({ error: L, result: void 0, status: "failure" });
      }
    }
  }
  if (m.length !== u.length) throw new A("multicall results mismatch");
  return m;
}
const xr = new Map(),
  xo = new Map();
let Df = 0;
function Wr(t, e, n) {
  const r = ++Df,
    s = () => xr.get(t) || [],
    o = () => {
      const l = s();
      xr.set(
        t,
        l.filter((f) => f.id !== r)
      );
    },
    i = () => {
      const l = xo.get(t);
      s().length === 1 && l && l(), o();
    },
    a = s();
  if ((xr.set(t, [...a, { id: r, fns: e }]), a && a.length > 0)) return i;
  const u = {};
  for (const l in e)
    u[l] = (...f) => {
      var h, p;
      const d = s();
      if (d.length !== 0)
        for (const m of d) (p = (h = m.fns)[l]) == null || p.call(h, ...f);
    };
  const c = n(u);
  return typeof c == "function" && xo.set(t, c), i;
}
async function Kr(t) {
  return new Promise((e) => setTimeout(e, t));
}
function zf(t, { emitOnBegin: e, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => (s = !1);
  return (
    (async () => {
      let a;
      e && (a = await t({ unpoll: o }));
      const u = (await (n == null ? void 0 : n(a))) ?? r;
      await Kr(u);
      const c = async () => {
        s && (await t({ unpoll: o }), await Kr(r), c());
      };
      c();
    })(),
    o
  );
}
function Gf(
  t,
  {
    emitOnBegin: e = !1,
    emitMissed: n = !1,
    onBlockNumber: r,
    onError: s,
    poll: o,
    pollingInterval: i = t.pollingInterval,
  }
) {
  const a =
    typeof o < "u"
      ? o
      : !(
          t.transport.type === "webSocket" ||
          (t.transport.type === "fallback" &&
            t.transport.transports[0].config.type === "webSocket")
        );
  let u;
  return a
    ? (() => {
        const f = Oe(["watchBlockNumber", t.uid, e, n, i]);
        return Wr(f, { onBlockNumber: r, onError: s }, (d) =>
          zf(
            async () => {
              var h;
              try {
                const p = await ue(t, $f, "getBlockNumber")({ cacheTime: 0 });
                if (u) {
                  if (p === u) return;
                  if (p - u > 1 && n)
                    for (let m = u + 1n; m < p; m++)
                      d.onBlockNumber(m, u), (u = m);
                }
                (!u || p > u) && (d.onBlockNumber(p, u), (u = p));
              } catch (p) {
                (h = d.onError) == null || h.call(d, p);
              }
            },
            { emitOnBegin: e, interval: i }
          )
        );
      })()
    : (() => {
        const f = Oe(["watchBlockNumber", t.uid, e, n]);
        return Wr(f, { onBlockNumber: r, onError: s }, (d) => {
          let h = !0,
            p = () => (h = !1);
          return (
            (async () => {
              try {
                const m = (() => {
                    if (t.transport.type === "fallback") {
                      const w = t.transport.transports.find(
                        (v) => v.config.type === "webSocket"
                      );
                      return w ? w.value : t.transport;
                    }
                    return t.transport;
                  })(),
                  { unsubscribe: b } = await m.subscribe({
                    params: ["newHeads"],
                    onData(w) {
                      var x;
                      if (!h) return;
                      const v = It((x = w.result) == null ? void 0 : x.number);
                      d.onBlockNumber(v, u), (u = v);
                    },
                    onError(w) {
                      var v;
                      (v = d.onError) == null || v.call(d, w);
                    },
                  });
                (p = b), h || p();
              } catch (m) {
                s == null || s(m);
              }
            })(),
            () => p()
          );
        });
      })();
}
const wn = new Xn(8192);
function Hf(t, { enabled: e = !0, id: n }) {
  if (!e || !n) return t();
  if (wn.get(n)) return wn.get(n);
  const r = t().finally(() => wn.delete(n));
  return wn.set(n, r), r;
}
function cn(
  t,
  { delay: e = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}
) {
  return new Promise((s, o) => {
    const i = async ({ count: a = 0 } = {}) => {
      const u = async ({ error: c }) => {
        const l = typeof e == "function" ? e({ count: a, error: c }) : e;
        l && (await Kr(l)), i({ count: a + 1 });
      };
      try {
        const c = await t();
        s(c);
      } catch (c) {
        if (a < n && (await r({ count: a, error: c }))) return u({ error: c });
        o(c);
      }
    };
    i();
  });
}
function qf(t, e = {}) {
  return async (n, r = {}) => {
    const {
        dedupe: s = !1,
        retryDelay: o = 150,
        retryCount: i = 3,
        uid: a,
      } = { ...e, ...r },
      u = s ? hn(Jn(`${a}.${Oe(n)}`)) : void 0;
    return Hf(
      () =>
        cn(
          async () => {
            try {
              return await t(n);
            } catch (c) {
              const l = c;
              switch (l.code) {
                case qt.code:
                  throw new qt(l);
                case Vt.code:
                  throw new Vt(l);
                case Wt.code:
                  throw new Wt(l, { method: n.method });
                case Kt.code:
                  throw new Kt(l);
                case ft.code:
                  throw new ft(l);
                case Jt.code:
                  throw new Jt(l);
                case Zt.code:
                  throw new Zt(l);
                case Ue.code:
                  throw new Ue(l);
                case Qt.code:
                  throw new Qt(l);
                case Xt.code:
                  throw new Xt(l, { method: n.method });
                case kt.code:
                  throw new kt(l);
                case Yt.code:
                  throw new Yt(l);
                case oe.code:
                  throw new oe(l);
                case en.code:
                  throw new en(l);
                case tn.code:
                  throw new tn(l);
                case nn.code:
                  throw new nn(l);
                case rn.code:
                  throw new rn(l);
                case De.code:
                  throw new De(l);
                case 5e3:
                  throw new oe(l);
                default:
                  throw c instanceof A ? c : new Bu(l);
              }
            }
          },
          {
            delay: ({ count: c, error: l }) => {
              var f;
              if (l && l instanceof Ft) {
                const d =
                  (f = l == null ? void 0 : l.headers) == null
                    ? void 0
                    : f.get("Retry-After");
                if (d != null && d.match(/\d/)) return Number.parseInt(d) * 1e3;
              }
              return ~~(1 << c) * o;
            },
            retryCount: i,
            shouldRetry: ({ error: c }) => Vf(c),
          }
        ),
      { enabled: s, id: u }
    );
  };
}
function Vf(t) {
  return "code" in t && typeof t.code == "number"
    ? t.code === -1 || t.code === kt.code || t.code === ft.code
    : t instanceof Ft && t.status
    ? t.status === 403 ||
      t.status === 408 ||
      t.status === 413 ||
      t.status === 429 ||
      t.status === 500 ||
      t.status === 502 ||
      t.status === 503 ||
      t.status === 504
    : !0;
}
function Ts(t) {
  return { formatters: void 0, fees: void 0, serializers: void 0, ...t };
}
function As(
  t,
  { errorInstance: e = new Error("timed out"), timeout: n, signal: r }
) {
  return new Promise((s, o) => {
    (async () => {
      let i;
      try {
        const a = new AbortController();
        n > 0 &&
          (i = setTimeout(() => {
            r ? a.abort() : o(e);
          }, n)),
          s(await t({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && o(e), o(a);
      } finally {
        clearTimeout(i);
      }
    })();
  });
}
function Wf() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    },
  };
}
const Io = Wf();
function Kf(t, e = {}) {
  return {
    async request(n) {
      var f;
      const {
          body: r,
          onRequest: s = e.onRequest,
          onResponse: o = e.onResponse,
          timeout: i = e.timeout ?? 1e4,
        } = n,
        a = { ...(e.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
        { headers: u, method: c, signal: l } = a;
      try {
        const d = await As(
          async ({ signal: p }) => {
            const m = {
                ...a,
                body: Array.isArray(r)
                  ? Oe(
                      r.map((x) => ({
                        jsonrpc: "2.0",
                        id: x.id ?? Io.take(),
                        ...x,
                      }))
                    )
                  : Oe({ jsonrpc: "2.0", id: r.id ?? Io.take(), ...r }),
                headers: { "Content-Type": "application/json", ...u },
                method: c || "POST",
                signal: l || (i > 0 ? p : null),
              },
              b = new Request(t, m),
              w = (await (s == null ? void 0 : s(b, m))) ?? { ...m, url: t };
            return await fetch(w.url ?? t, w);
          },
          { errorInstance: new lo({ body: r, url: t }), timeout: i, signal: !0 }
        );
        o && (await o(d));
        let h;
        if (
          (f = d.headers.get("Content-Type")) != null &&
          f.startsWith("application/json")
        )
          h = await d.json();
        else {
          h = await d.text();
          try {
            h = JSON.parse(h || "{}");
          } catch (p) {
            if (d.ok) throw p;
            h = { error: h };
          }
        }
        if (!d.ok)
          throw new Ft({
            body: r,
            details: Oe(h.error) || d.statusText,
            headers: d.headers,
            status: d.status,
            url: t,
          });
        return h;
      } catch (d) {
        throw d instanceof Ft || d instanceof lo
          ? d
          : new Ft({ body: r, cause: d, url: t });
      }
    },
  };
}
class Jf extends A {
  constructor({ value: e }) {
    super(`Number \`${e}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError",
    });
  }
}
function Ia(t, e) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(t)) throw new Jf({ value: t });
  let [n, r = "0"] = t.split(".");
  const s = n.startsWith("-");
  if ((s && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), e === 0))
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), (r = "");
  else if (r.length > e) {
    const [o, i, a] = [r.slice(0, e - 1), r.slice(e - 1, e), r.slice(e)],
      u = Math.round(+`${i}.${a}`);
    u > 9
      ? (r = `${BigInt(o) + BigInt(1)}0`.padStart(o.length + 1, "0"))
      : (r = `${o}${u}`),
      r.length > e && ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
      (r = r.slice(0, e));
  } else r = r.padEnd(e, "0");
  return BigInt(`${s ? "-" : ""}${n}${r}`);
}
function Zf(t, e = "wei") {
  return Ia(t, Ui[e]);
}
async function Qf(
  t,
  {
    confirmations: e = 1,
    hash: n,
    onReplaced: r,
    pollingInterval: s = t.pollingInterval,
    retryCount: o = 6,
    retryDelay: i = ({ count: u }) => ~~(1 << u) * 200,
    timeout: a = 18e4,
  }
) {
  const u = Oe(["waitForTransactionReceipt", t.uid, n]);
  let c,
    l,
    f,
    d = !1;
  const { promise: h, resolve: p, reject: m } = wa(),
    b = a ? setTimeout(() => m(new Tu({ hash: n })), a) : void 0,
    w = Wr(u, { onReplaced: r, resolve: p, reject: m }, (v) => {
      const x = ue(
        t,
        Gf,
        "watchBlockNumber"
      )({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(I) {
          const g = (_) => {
            clearTimeout(b), x(), _(), w();
          };
          let y = I;
          if (!d)
            try {
              if (f) {
                if (e > 1 && (!f.blockNumber || y - f.blockNumber + 1n < e))
                  return;
                g(() => v.resolve(f));
                return;
              }
              if (
                (c ||
                  ((d = !0),
                  await cn(
                    async () => {
                      (c = await ue(t, xa, "getTransaction")({ hash: n })),
                        c.blockNumber && (y = c.blockNumber);
                    },
                    { delay: i, retryCount: o }
                  ),
                  (d = !1)),
                (f = await ue(t, _o, "getTransactionReceipt")({ hash: n })),
                e > 1 && (!f.blockNumber || y - f.blockNumber + 1n < e))
              )
                return;
              g(() => v.resolve(f));
            } catch (_) {
              if (_ instanceof Ri || _ instanceof Di) {
                if (!c) {
                  d = !1;
                  return;
                }
                try {
                  (l = c), (d = !0);
                  const M = await cn(
                    () =>
                      ue(
                        t,
                        sn,
                        "getBlock"
                      )({ blockNumber: y, includeTransactions: !0 }),
                    {
                      delay: i,
                      retryCount: o,
                      shouldRetry: ({ error: H }) => H instanceof Hi,
                    }
                  );
                  d = !1;
                  const E = M.transactions.find(
                    ({ from: H, nonce: V }) => H === l.from && V === l.nonce
                  );
                  if (
                    !E ||
                    ((f = await ue(
                      t,
                      _o,
                      "getTransactionReceipt"
                    )({ hash: E.hash })),
                    e > 1 && (!f.blockNumber || y - f.blockNumber + 1n < e))
                  )
                    return;
                  let U = "replaced";
                  E.to === l.to && E.value === l.value
                    ? (U = "repriced")
                    : E.from === E.to && E.value === 0n && (U = "cancelled"),
                    g(() => {
                      var H;
                      (H = v.onReplaced) == null ||
                        H.call(v, {
                          reason: U,
                          replacedTransaction: l,
                          transaction: E,
                          transactionReceipt: f,
                        }),
                        v.resolve(f);
                    });
                } catch (M) {
                  g(() => v.reject(M));
                }
              } else g(() => v.reject(_));
            }
        },
      });
    });
  return h;
}
async function Xf(t, { account: e = t.account, message: n }) {
  if (!e) throw new ms({ docsPath: "/docs/actions/wallet/signMessage" });
  const r = Ne(e);
  if (r.signMessage) return r.signMessage({ message: n });
  const s =
    typeof n == "string"
      ? Jn(n)
      : n.raw instanceof Uint8Array
      ? On(n.raw)
      : n.raw;
  return t.request(
    { method: "personal_sign", params: [s, r.address] },
    { retryCount: 0 }
  );
}
async function Yf(t, e) {
  const {
      abi: n,
      address: r,
      args: s,
      dataSuffix: o,
      functionName: i,
      ...a
    } = e,
    u = a.account ? Ne(a.account) : t.account,
    c = mn({ abi: n, args: s, functionName: i });
  try {
    const { data: l } = await ue(
        t,
        Ss,
        "call"
      )({
        batch: !1,
        data: `${c}${o ? o.replace("0x", "") : ""}`,
        to: r,
        ...a,
        account: u,
      }),
      f = sr({ abi: n, args: s, functionName: i, data: l || "0x" }),
      d = n.filter((h) => "name" in h && h.name === e.functionName);
    return {
      result: f,
      request: {
        abi: d,
        address: r,
        args: s,
        dataSuffix: o,
        functionName: i,
        ...a,
        account: u,
      },
    };
  } catch (l) {
    throw an(l, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: i,
      sender: u == null ? void 0 : u.address,
    });
  }
}
async function ed(t, e) {
  const {
    abi: n,
    account: r = t.account,
    address: s,
    args: o,
    dataSuffix: i,
    functionName: a,
    ...u
  } = e;
  if (typeof r > "u")
    throw new ms({ docsPath: "/docs/contract/writeContract" });
  const c = r ? Ne(r) : null,
    l = mn({ abi: n, args: o, functionName: a });
  try {
    return await ue(
      t,
      dl,
      "sendTransaction"
    )({ data: `${l}${i ? i.replace("0x", "") : ""}`, to: s, account: c, ...u });
  } catch (f) {
    throw an(f, {
      abi: n,
      address: s,
      args: o,
      docsPath: "/docs/contract/writeContract",
      functionName: a,
      sender: c == null ? void 0 : c.address,
    });
  }
}
function Ke(t, e, n) {
  const r = t[e.name];
  if (typeof r == "function") return r;
  const s = t[n];
  return typeof s == "function" ? s : (o) => e(t, o);
}
const kn = "2.14.1",
  td = () => `@wagmi/core@${kn}`;
var Ca = function (t, e, n, r) {
    if (n === "a" && !r)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !r : !e.has(t))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
  },
  Rn,
  Pa;
class ze extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return td();
  }
  constructor(e, n = {}) {
    var o;
    super(),
      Rn.add(this),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiCoreError",
      });
    const r =
        n.cause instanceof ze
          ? n.cause.details
          : (o = n.cause) != null && o.message
          ? n.cause.message
          : n.details,
      s = (n.cause instanceof ze && n.cause.docsPath) || n.docsPath;
    (this.message = [
      e || "An error occurred.",
      "",
      ...(n.metaMessages ? [...n.metaMessages, ""] : []),
      ...(s
        ? [
            `Docs: ${this.docsBaseUrl}${s}.html${
              n.docsSlug ? `#${n.docsSlug}` : ""
            }`,
          ]
        : []),
      ...(r ? [`Details: ${r}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      n.cause && (this.cause = n.cause),
      (this.details = r),
      (this.docsPath = s),
      (this.metaMessages = n.metaMessages),
      (this.shortMessage = e);
  }
  walk(e) {
    return Ca(this, Rn, "m", Pa).call(this, this, e);
  }
}
(Rn = new WeakSet()),
  (Pa = function t(e, n) {
    return n != null && n(e)
      ? e
      : e.cause
      ? Ca(this, Rn, "m", t).call(this, e.cause, n)
      : e;
  });
class un extends ze {
  constructor() {
    super("Chain not configured."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainNotConfiguredError",
      });
  }
}
class nd extends ze {
  constructor() {
    super("Connector already connected."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorAlreadyConnectedError",
      });
  }
}
class rd extends ze {
  constructor() {
    super("Connector not connected."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorNotConnectedError",
      });
  }
}
class sd extends ze {
  constructor({ address: e, connector: n }) {
    super(`Account "${e}" not found for connector "${n.name}".`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorAccountNotFoundError",
      });
  }
}
class od extends ze {
  constructor({ connectionChainId: e, connectorChainId: n }) {
    super(
      `The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${e}).`,
      { metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${e}`] }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorChainMismatchError",
      });
  }
}
class id extends ze {
  constructor({ connector: e }) {
    super(`Connector "${e.name}" unavailable while reconnecting.`, {
      details: [
        "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uuid`.",
        "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
        "This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
      ].join(" "),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorUnavailableReconnectingError",
      });
  }
}
async function Ms(t, e) {
  var r;
  let n;
  if (
    (typeof e.connector == "function"
      ? (n = t._internal.connectors.setup(e.connector))
      : (n = e.connector),
    n.uid === t.state.current)
  )
    throw new nd();
  try {
    t.setState((i) => ({ ...i, status: "connecting" })),
      n.emitter.emit("message", { type: "connecting" });
    const s = await n.connect({ chainId: e.chainId }),
      o = s.accounts;
    return (
      n.emitter.off("connect", t._internal.events.connect),
      n.emitter.on("change", t._internal.events.change),
      n.emitter.on("disconnect", t._internal.events.disconnect),
      await ((r = t.storage) == null
        ? void 0
        : r.setItem("recentConnectorId", n.id)),
      t.setState((i) => ({
        ...i,
        connections: new Map(i.connections).set(n.uid, {
          accounts: o,
          chainId: s.chainId,
          connector: n,
        }),
        current: n.uid,
        status: "connected",
      })),
      { accounts: o, chainId: s.chainId }
    );
  } catch (s) {
    throw (
      (t.setState((o) => ({
        ...o,
        status: o.current ? "connected" : "disconnected",
      })),
      s)
    );
  }
}
const Jr = 256;
let vn = Jr,
  _n;
function ka(t = 11) {
  if (!_n || vn + t > Jr * 2) {
    (_n = ""), (vn = 0);
    for (let e = 0; e < Jr; e++)
      _n += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return _n.substring(vn, vn++ + t);
}
function Ea(t) {
  const {
      batch: e,
      cacheTime: n = t.pollingInterval ?? 4e3,
      ccipRead: r,
      key: s = "base",
      name: o = "Base Client",
      pollingInterval: i = 4e3,
      type: a = "base",
    } = t,
    u = t.chain,
    c = t.account ? Ne(t.account) : void 0,
    {
      config: l,
      request: f,
      value: d,
    } = t.transport({ chain: u, pollingInterval: i }),
    h = { ...l, ...d },
    p = {
      account: c,
      batch: e,
      cacheTime: n,
      ccipRead: r,
      chain: u,
      key: s,
      name: o,
      pollingInterval: i,
      request: f,
      transport: h,
      type: a,
      uid: ka(),
    };
  function m(b) {
    return (w) => {
      const v = w(b);
      for (const I in p) delete v[I];
      const x = { ...b, ...v };
      return Object.assign(x, { extend: m(x) });
    };
  }
  return Object.assign(p, { extend: m(p) });
}
function Sa(
  {
    key: t,
    name: e,
    request: n,
    retryCount: r = 3,
    retryDelay: s = 150,
    timeout: o,
    type: i,
  },
  a
) {
  const u = ka();
  return {
    config: {
      key: t,
      name: e,
      request: n,
      retryCount: r,
      retryDelay: s,
      timeout: o,
      type: i,
    },
    request: qf(n, { retryCount: r, retryDelay: s, uid: u }),
    value: a,
  };
}
function ad(t, e = {}) {
  const { key: n = "custom", name: r = "Custom Provider", retryDelay: s } = e;
  return ({ retryCount: o }) =>
    Sa({
      key: n,
      name: r,
      request: t.request.bind(t),
      retryCount: e.retryCount ?? o,
      retryDelay: s,
      type: "custom",
    });
}
class cd extends A {
  constructor() {
    super(
      "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
      { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
    );
  }
}
function Ir(t, e = {}) {
  const {
    batch: n,
    fetchOptions: r,
    key: s = "http",
    name: o = "HTTP JSON-RPC",
    onFetchRequest: i,
    onFetchResponse: a,
    retryDelay: u,
  } = e;
  return ({ chain: c, retryCount: l, timeout: f }) => {
    const { batchSize: d = 1e3, wait: h = 0 } = typeof n == "object" ? n : {},
      p = e.retryCount ?? l,
      m = f ?? e.timeout ?? 1e4,
      b = t || (c == null ? void 0 : c.rpcUrls.default.http[0]);
    if (!b) throw new cd();
    const w = Kf(b, {
      fetchOptions: r,
      onRequest: i,
      onResponse: a,
      timeout: m,
    });
    return Sa(
      {
        key: s,
        name: o,
        async request({ method: v, params: x }) {
          const I = { method: v, params: x },
            { schedule: g } = va({
              id: b,
              wait: h,
              shouldSplitBatch(E) {
                return E.length > d;
              },
              fn: (E) => w.request({ body: E }),
              sort: (E, U) => E.id - U.id,
            }),
            y = async (E) => (n ? g(E) : [await w.request({ body: E })]),
            [{ error: _, result: M }] = await y(I);
          if (_) throw new zi({ body: I, error: _, url: b });
          return M;
        },
        retryCount: p,
        retryDelay: u,
        timeout: m,
        type: "http",
      },
      { fetchOptions: r, url: b }
    );
  };
}
async function Bs(t, e = {}) {
  let n;
  if (e.connector) {
    const { connector: c } = e;
    if (t.state.status === "reconnecting" && !c.getAccounts && !c.getChainId)
      throw new id({ connector: c });
    const [l, f] = await Promise.all([c.getAccounts(), c.getChainId()]);
    n = { accounts: l, chainId: f, connector: c };
  } else n = t.state.connections.get(t.state.current);
  if (!n) throw new rd();
  const r = e.chainId ?? n.chainId,
    s = await n.connector.getChainId();
  if (s !== n.chainId)
    throw new od({ connectionChainId: n.chainId, connectorChainId: s });
  const o = n.connector;
  if (o.getClient) return o.getClient({ chainId: r });
  const i = Ne(e.account ?? n.accounts[0]);
  if (
    ((i.address = Me(i.address)),
    e.account &&
      !n.accounts.some((c) => c.toLowerCase() === i.address.toLowerCase()))
  )
    throw new sd({ address: i.address, connector: o });
  const a = t.chains.find((c) => c.id === r),
    u = await n.connector.getProvider({ chainId: r });
  return Ea({
    account: i,
    chain: a,
    name: "Connector Client",
    transport: (c) => ad(u)({ ...c, retryCount: 0 }),
  });
}
async function ud(t, e = {}) {
  var s, o;
  let n;
  if (e.connector) n = e.connector;
  else {
    const { connections: i, current: a } = t.state,
      u = i.get(a);
    n = u == null ? void 0 : u.connector;
  }
  const r = t.state.connections;
  n &&
    (await n.disconnect(),
    n.emitter.off("change", t._internal.events.change),
    n.emitter.off("disconnect", t._internal.events.disconnect),
    n.emitter.on("connect", t._internal.events.connect),
    r.delete(n.uid)),
    t.setState((i) => {
      if (r.size === 0)
        return {
          ...i,
          connections: new Map(),
          current: null,
          status: "disconnected",
        };
      const a = r.values().next().value;
      return { ...i, connections: new Map(r), current: a.connector.uid };
    });
  {
    const i = t.state.current;
    if (!i) return;
    const a = (s = t.state.connections.get(i)) == null ? void 0 : s.connector;
    if (!a) return;
    await ((o = t.storage) == null
      ? void 0
      : o.setItem("recentConnectorId", a.id));
  }
}
function Ta(t) {
  return typeof t == "number" ? t : t === "wei" ? 0 : Math.abs(Pu[t]);
}
function Os(t) {
  const e = t.state.current,
    n = t.state.connections.get(e),
    r = n == null ? void 0 : n.accounts,
    s = r == null ? void 0 : r[0],
    o = t.chains.find((a) => a.id === (n == null ? void 0 : n.chainId)),
    i = t.state.status;
  switch (i) {
    case "connected":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !0,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !1,
        status: i,
      };
    case "reconnecting":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !!s,
        isConnecting: !1,
        isDisconnected: !1,
        isReconnecting: !0,
        status: i,
      };
    case "connecting":
      return {
        address: s,
        addresses: r,
        chain: o,
        chainId: n == null ? void 0 : n.chainId,
        connector: n == null ? void 0 : n.connector,
        isConnected: !1,
        isConnecting: !0,
        isDisconnected: !1,
        isReconnecting: !1,
        status: i,
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: !1,
        isConnecting: !1,
        isDisconnected: !0,
        isReconnecting: !1,
        status: i,
      };
  }
}
async function ld(t, e) {
  const { allowFailure: n = !0, chainId: r, contracts: s, ...o } = e,
    i = t.getClient({ chainId: r });
  return Ke(i, Rf, "multicall")({ allowFailure: n, contracts: s, ...o });
}
function Aa(t, e) {
  const { chainId: n, ...r } = e,
    s = t.getClient({ chainId: n });
  return Ke(s, _a, "readContract")(r);
}
async function fd(t, e) {
  var a;
  const { allowFailure: n = !0, blockNumber: r, blockTag: s, ...o } = e,
    i = e.contracts;
  try {
    const u = {};
    for (const [d, h] of i.entries()) {
      const p = h.chainId ?? t.state.chainId;
      u[p] || (u[p] = []),
        (a = u[p]) == null || a.push({ contract: h, index: d });
    }
    const c = () =>
        Object.entries(u).map(([d, h]) =>
          ld(t, {
            ...o,
            allowFailure: n,
            blockNumber: r,
            blockTag: s,
            chainId: Number.parseInt(d),
            contracts: h.map(({ contract: p }) => p),
          })
        ),
      l = (await Promise.all(c())).flat(),
      f = Object.values(u).flatMap((d) => d.map(({ index: h }) => h));
    return l.reduce((d, h, p) => (d && (d[f[p]] = h), d), []);
  } catch (u) {
    if (u instanceof ks) throw u;
    const c = () => i.map((l) => Aa(t, { ...l, blockNumber: r, blockTag: s }));
    return n
      ? (await Promise.allSettled(c())).map((l) =>
          l.status === "fulfilled"
            ? { result: l.value, status: "success" }
            : { error: l.reason, result: void 0, status: "failure" }
        )
      : await Promise.all(c());
  }
}
async function Co(t, e) {
  const {
    address: n,
    blockNumber: r,
    blockTag: s,
    chainId: o,
    token: i,
    unit: a = "ether",
  } = e;
  if (i)
    try {
      return Po(t, {
        balanceAddress: n,
        chainId: o,
        symbolType: "string",
        tokenAddress: i,
      });
    } catch (d) {
      if (d instanceof ks) {
        const h = await Po(t, {
            balanceAddress: n,
            chainId: o,
            symbolType: "bytes32",
            tokenAddress: i,
          }),
          p = _i(dn(h.symbol, { dir: "right" }));
        return { ...h, symbol: p };
      }
      throw d;
    }
  const u = t.getClient({ chainId: o }),
    l = await Ke(
      u,
      Ji,
      "getBalance"
    )(r ? { address: n, blockNumber: r } : { address: n, blockTag: s }),
    f = t.chains.find((d) => d.id === o) ?? u.chain;
  return {
    decimals: f.nativeCurrency.decimals,
    formatted: tr(l, Ta(a)),
    symbol: f.nativeCurrency.symbol,
    value: l,
  };
}
async function Po(t, e) {
  const {
      balanceAddress: n,
      chainId: r,
      symbolType: s,
      tokenAddress: o,
      unit: i,
    } = e,
    a = {
      abi: [
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint8" }],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: s }],
        },
      ],
      address: o,
    },
    [u, c, l] = await fd(t, {
      allowFailure: !1,
      contracts: [
        { ...a, functionName: "balanceOf", args: [n], chainId: r },
        { ...a, functionName: "decimals", chainId: r },
        { ...a, functionName: "symbol", chainId: r },
      ],
    }),
    f = tr(u ?? "0", Ta(i ?? c));
  return { decimals: c, formatted: f, symbol: l, value: u };
}
function Zr(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    let n, r;
    if (Array.isArray(t) && Array.isArray(e)) {
      if (((n = t.length), n !== e.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Zr(t[r], e[r])) return !1;
      return !0;
    }
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    const s = Object.keys(t);
    if (((n = s.length), n !== Object.keys(e).length)) return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const o = s[r];
      if (o && !Zr(t[o], e[o])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
let Cr = !1;
async function dd(t, e = {}) {
  var c, l;
  if (Cr) return [];
  (Cr = !0),
    t.setState((f) => ({
      ...f,
      status: f.current ? "reconnecting" : "connecting",
    }));
  const n = [];
  if ((c = e.connectors) != null && c.length)
    for (const f of e.connectors) {
      let d;
      typeof f == "function" ? (d = t._internal.connectors.setup(f)) : (d = f),
        n.push(d);
    }
  else n.push(...t.connectors);
  let r;
  try {
    r = await ((l = t.storage) == null
      ? void 0
      : l.getItem("recentConnectorId"));
  } catch {}
  const s = {};
  for (const [, f] of t.state.connections) s[f.connector.id] = 1;
  r && (s[r] = 0);
  const o =
    Object.keys(s).length > 0
      ? [...n].sort((f, d) => (s[f.id] ?? 10) - (s[d.id] ?? 10))
      : n;
  let i = !1;
  const a = [],
    u = [];
  for (const f of o) {
    const d = await f.getProvider().catch(() => {});
    if (!d || u.some((m) => m === d) || !(await f.isAuthorized())) continue;
    const p = await f.connect({ isReconnecting: !0 }).catch(() => null);
    p &&
      (f.emitter.off("connect", t._internal.events.connect),
      f.emitter.on("change", t._internal.events.change),
      f.emitter.on("disconnect", t._internal.events.disconnect),
      t.setState((m) => {
        const b = new Map(i ? m.connections : new Map()).set(f.uid, {
          accounts: p.accounts,
          chainId: p.chainId,
          connector: f,
        });
        return { ...m, current: i ? m.current : f.uid, connections: b };
      }),
      a.push({ accounts: p.accounts, chainId: p.chainId, connector: f }),
      u.push(d),
      (i = !0));
  }
  return (
    (t.state.status === "reconnecting" || t.state.status === "connecting") &&
      (i
        ? t.setState((f) => ({ ...f, status: "connected" }))
        : t.setState((f) => ({
            ...f,
            connections: new Map(),
            current: null,
            status: "disconnected",
          }))),
    (Cr = !1),
    a
  );
}
async function hd(t, e) {
  const { account: n, connector: r, ...s } = e;
  let o;
  return (
    typeof n == "object" && n.type === "local"
      ? (o = t.getClient())
      : (o = await Bs(t, { account: n, connector: r })),
    Ke(o, Xf, "signMessage")({ ...s, ...(n ? { account: n } : {}) })
  );
}
async function pd(t, e) {
  const { abi: n, chainId: r, connector: s, ...o } = e;
  let i;
  e.account
    ? (i = e.account)
    : (i = (await Bs(t, { chainId: r, connector: s })).account);
  const a = t.getClient({ chainId: r }),
    u = Ke(a, Yf, "simulateContract"),
    { result: c, request: l } = await u({ ...o, abi: n, account: i });
  return {
    chainId: a.chain.id,
    result: c,
    request: { __mode: "prepared", ...l, chainId: r },
  };
}
class Xe extends ze {
  constructor() {
    super("Provider not found."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ProviderNotFoundError",
      });
  }
}
function md(t, e) {
  const { onChange: n } = e;
  return t.subscribe(() => Os(t), n, {
    equalityFn(r, s) {
      const { connector: o, ...i } = r,
        { connector: a, ...u } = s;
      return (
        Zr(i, u) &&
        (o == null ? void 0 : o.id) === (a == null ? void 0 : a.id) &&
        (o == null ? void 0 : o.uid) === (a == null ? void 0 : a.uid)
      );
    },
  });
}
async function Pr(t, e) {
  const { chainId: n, timeout: r = 0, ...s } = e,
    o = t.getClient({ chainId: n }),
    a = await Ke(o, Qf, "waitForTransactionReceipt")({ ...s, timeout: r });
  if (a.status === "reverted") {
    const c = await Ke(o, xa, "getTransaction")({ hash: a.transactionHash }),
      f = await Ke(
        o,
        Ss,
        "call"
      )({
        ...c,
        gasPrice: c.type !== "eip1559" ? c.gasPrice : void 0,
        maxFeePerGas: c.type === "eip1559" ? c.maxFeePerGas : void 0,
        maxPriorityFeePerGas:
          c.type === "eip1559" ? c.maxPriorityFeePerGas : void 0,
      }),
      d =
        f != null && f.data
          ? _i(`0x${f.data.substring(138)}`)
          : "unknown reason";
    throw new Error(d);
  }
  return { ...a, chainId: o.chain.id };
}
async function kr(t, e) {
  const { account: n, chainId: r, connector: s, __mode: o, ...i } = e;
  let a;
  typeof n == "object" && (n == null ? void 0 : n.type) === "local"
    ? (a = t.getClient({ chainId: r }))
    : (a = await Bs(t, { account: n ?? void 0, chainId: r, connector: s }));
  const { connector: u } = Os(t);
  let c;
  if (o === "prepared" || (u != null && u.supportsSimulation)) c = i;
  else {
    const { request: d } = await pd(t, { ...i, account: n, chainId: r });
    c = d;
  }
  return await Ke(
    a,
    ed,
    "writeContract"
  )({ ...c, ...(n ? { account: n } : {}), chain: r ? { id: r } : null });
}
const bd = /(rabby|trustwallet)/;
bn.type = "injected";
function bn(t = {}) {
  const { shimDisconnect: e = !0, unstable_shimAsyncInject: n } = t;
  function r() {
    const u = t.target;
    if (typeof u == "function") {
      const c = u();
      if (c) return c;
    }
    return typeof u == "object"
      ? u
      : typeof u == "string"
      ? {
          ...(gd[u] ?? {
            id: u,
            name: `${u[0].toUpperCase()}${u.slice(1)}`,
            provider: `is${u[0].toUpperCase()}${u.slice(1)}`,
          }),
        }
      : {
          id: "injected",
          name: "Injected",
          provider(c) {
            return c == null ? void 0 : c.ethereum;
          },
        };
  }
  let s, o, i, a;
  return (u) => ({
    get icon() {
      return r().icon;
    },
    get id() {
      return r().id;
    },
    get name() {
      return r().name;
    },
    get supportsSimulation() {
      return bd.test(this.id.toLowerCase());
    },
    type: bn.type,
    async setup() {
      const c = await this.getProvider();
      c != null &&
        c.on &&
        t.target &&
        (i || ((i = this.onConnect.bind(this)), c.on("connect", i)),
        s ||
          ((s = this.onAccountsChanged.bind(this)),
          c.on("accountsChanged", s)));
    },
    async connect({ chainId: c, isReconnecting: l } = {}) {
      var h, p, m, b, w, v;
      const f = await this.getProvider();
      if (!f) throw new Xe();
      let d = [];
      if (l) d = await this.getAccounts().catch(() => []);
      else if (e)
        try {
          (d =
            (b =
              (m =
                (p =
                  (h = (
                    await f.request({
                      method: "wallet_requestPermissions",
                      params: [{ eth_accounts: {} }],
                    })
                  )[0]) == null
                    ? void 0
                    : h.caveats) == null
                  ? void 0
                  : p[0]) == null
                ? void 0
                : m.value) == null
              ? void 0
              : b.map((I) => Me(I))),
            d.length > 0 && (d = await this.getAccounts());
        } catch (x) {
          const I = x;
          if (I.code === oe.code) throw new oe(I);
          if (I.code === Ue.code) throw I;
        }
      try {
        !(d != null && d.length) &&
          !l &&
          (d = (await f.request({ method: "eth_requestAccounts" })).map((g) =>
            Me(g)
          )),
          i && (f.removeListener("connect", i), (i = void 0)),
          s ||
            ((s = this.onAccountsChanged.bind(this)),
            f.on("accountsChanged", s)),
          o || ((o = this.onChainChanged.bind(this)), f.on("chainChanged", o)),
          a || ((a = this.onDisconnect.bind(this)), f.on("disconnect", a));
        let x = await this.getChainId();
        if (c && x !== c) {
          const I = await this.switchChain({ chainId: c }).catch((g) => {
            if (g.code === oe.code) throw g;
            return { id: x };
          });
          x = (I == null ? void 0 : I.id) ?? x;
        }
        return (
          e &&
            (await ((w = u.storage) == null
              ? void 0
              : w.removeItem(`${this.id}.disconnected`))),
          t.target ||
            (await ((v = u.storage) == null
              ? void 0
              : v.setItem("injected.connected", !0))),
          { accounts: d, chainId: x }
        );
      } catch (x) {
        const I = x;
        throw I.code === oe.code
          ? new oe(I)
          : I.code === Ue.code
          ? new Ue(I)
          : I;
      }
    },
    async disconnect() {
      var l, f;
      const c = await this.getProvider();
      if (!c) throw new Xe();
      o && (c.removeListener("chainChanged", o), (o = void 0)),
        a && (c.removeListener("disconnect", a), (a = void 0)),
        i || ((i = this.onConnect.bind(this)), c.on("connect", i));
      try {
        await As(
          () =>
            c.request({
              method: "wallet_revokePermissions",
              params: [{ eth_accounts: {} }],
            }),
          { timeout: 100 }
        );
      } catch {}
      e &&
        (await ((l = u.storage) == null
          ? void 0
          : l.setItem(`${this.id}.disconnected`, !0))),
        t.target ||
          (await ((f = u.storage) == null
            ? void 0
            : f.removeItem("injected.connected")));
    },
    async getAccounts() {
      const c = await this.getProvider();
      if (!c) throw new Xe();
      return (await c.request({ method: "eth_accounts" })).map((f) => Me(f));
    },
    async getChainId() {
      const c = await this.getProvider();
      if (!c) throw new Xe();
      const l = await c.request({ method: "eth_chainId" });
      return Number(l);
    },
    async getProvider() {
      if (typeof window > "u") return;
      let c;
      const l = r();
      return (
        typeof l.provider == "function"
          ? (c = l.provider(window))
          : typeof l.provider == "string"
          ? (c = En(window, l.provider))
          : (c = l.provider),
        c &&
          !c.removeListener &&
          ("off" in c && typeof c.off == "function"
            ? (c.removeListener = c.off)
            : (c.removeListener = () => {})),
        c
      );
    },
    async isAuthorized() {
      var c, l;
      try {
        if (
          (e &&
            (await ((c = u.storage) == null
              ? void 0
              : c.getItem(`${this.id}.disconnected`)))) ||
          (!t.target &&
            !(await ((l = u.storage) == null
              ? void 0
              : l.getItem("injected.connected"))))
        )
          return !1;
        if (!(await this.getProvider())) {
          if (n !== void 0 && n !== !1) {
            const p = async () => (
                typeof window < "u" &&
                  window.removeEventListener("ethereum#initialized", p),
                !!(await this.getProvider())
              ),
              m = typeof n == "number" ? n : 1e3;
            if (
              await Promise.race([
                ...(typeof window < "u"
                  ? [
                      new Promise((w) =>
                        window.addEventListener(
                          "ethereum#initialized",
                          () => w(p()),
                          { once: !0 }
                        )
                      ),
                    ]
                  : []),
                new Promise((w) => setTimeout(() => w(p()), m)),
              ])
            )
              return !0;
          }
          throw new Xe();
        }
        return !!(await cn(() => this.getAccounts())).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: c, chainId: l }) {
      var h, p, m, b;
      const f = await this.getProvider();
      if (!f) throw new Xe();
      const d = u.chains.find((w) => w.id === l);
      if (!d) throw new De(new un());
      try {
        return (
          await Promise.all([
            f
              .request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: W(l) }],
              })
              .then(async () => {
                (await this.getChainId()) === l &&
                  u.emitter.emit("change", { chainId: l });
              }),
            new Promise((w) => {
              const v = (x) => {
                "chainId" in x &&
                  x.chainId === l &&
                  (u.emitter.off("change", v), w());
              };
              u.emitter.on("change", v);
            }),
          ]),
          d
        );
      } catch (w) {
        const v = w;
        if (
          v.code === 4902 ||
          ((p =
            (h = v == null ? void 0 : v.data) == null
              ? void 0
              : h.originalError) == null
            ? void 0
            : p.code) === 4902
        )
          try {
            const { default: x, ...I } = d.blockExplorers ?? {};
            let g;
            c != null && c.blockExplorerUrls
              ? (g = c.blockExplorerUrls)
              : x && (g = [x.url, ...Object.values(I).map((E) => E.url)]);
            let y;
            (m = c == null ? void 0 : c.rpcUrls) != null && m.length
              ? (y = c.rpcUrls)
              : (y = [
                  ((b = d.rpcUrls.default) == null ? void 0 : b.http[0]) ?? "",
                ]);
            const _ = {
              blockExplorerUrls: g,
              chainId: W(l),
              chainName: (c == null ? void 0 : c.chainName) ?? d.name,
              iconUrls: c == null ? void 0 : c.iconUrls,
              nativeCurrency:
                (c == null ? void 0 : c.nativeCurrency) ?? d.nativeCurrency,
              rpcUrls: y,
            };
            if (
              (await f.request({
                method: "wallet_addEthereumChain",
                params: [_],
              }),
              (await this.getChainId()) !== l)
            )
              throw new oe(
                new Error("User rejected switch after adding network.")
              );
            return d;
          } catch (x) {
            throw new oe(x);
          }
        throw v.code === oe.code ? new oe(v) : new De(v);
      }
    },
    async onAccountsChanged(c) {
      var l;
      if (c.length === 0) this.onDisconnect();
      else if (u.emitter.listenerCount("connect")) {
        const f = (await this.getChainId()).toString();
        this.onConnect({ chainId: f }),
          e &&
            (await ((l = u.storage) == null
              ? void 0
              : l.removeItem(`${this.id}.disconnected`)));
      } else u.emitter.emit("change", { accounts: c.map((f) => Me(f)) });
    },
    onChainChanged(c) {
      const l = Number(c);
      u.emitter.emit("change", { chainId: l });
    },
    async onConnect(c) {
      const l = await this.getAccounts();
      if (l.length === 0) return;
      const f = Number(c.chainId);
      u.emitter.emit("connect", { accounts: l, chainId: f });
      const d = await this.getProvider();
      d &&
        (i && (d.removeListener("connect", i), (i = void 0)),
        s ||
          ((s = this.onAccountsChanged.bind(this)), d.on("accountsChanged", s)),
        o || ((o = this.onChainChanged.bind(this)), d.on("chainChanged", o)),
        a || ((a = this.onDisconnect.bind(this)), d.on("disconnect", a)));
    },
    async onDisconnect(c) {
      const l = await this.getProvider();
      (c && c.code === 1013 && l && (await this.getAccounts()).length) ||
        (u.emitter.emit("disconnect"),
        l &&
          (o && (l.removeListener("chainChanged", o), (o = void 0)),
          a && (l.removeListener("disconnect", a), (a = void 0)),
          i || ((i = this.onConnect.bind(this)), l.on("connect", i))));
    },
  });
}
const gd = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(t) {
      return t != null && t.coinbaseWalletExtension
        ? t.coinbaseWalletExtension
        : En(t, "isCoinbaseWallet");
    },
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(t) {
      return En(t, (e) => {
        if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
          return !1;
        const n = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isUniswapWallet",
          "isZerion",
        ];
        for (const r of n) if (e[r]) return !1;
        return !0;
      });
    },
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(t) {
      var e, n;
      return (e = t == null ? void 0 : t.phantom) != null && e.ethereum
        ? (n = t.phantom) == null
          ? void 0
          : n.ethereum
        : En(t, "isPhantom");
    },
  },
};
function En(t, e) {
  function n(s) {
    return typeof e == "function" ? e(s) : typeof e == "string" ? s[e] : !0;
  }
  const r = t.ethereum;
  if (r != null && r.providers) return r.providers.find((s) => n(s));
  if (r && n(r)) return r;
}
function yd(t) {
  if (typeof window > "u") return;
  const e = (n) => t(n.detail);
  return (
    window.addEventListener("eip6963:announceProvider", e),
    window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
    () => window.removeEventListener("eip6963:announceProvider", e)
  );
}
function wd() {
  const t = new Set();
  let e = [];
  const n = () =>
    yd((s) => {
      e.some(({ info: o }) => o.uuid === s.info.uuid) ||
        ((e = [...e, s]), t.forEach((o) => o(e, { added: [s] })));
    });
  let r = n();
  return {
    _listeners() {
      return t;
    },
    clear() {
      t.forEach((s) => s([], { removed: [...e] })), (e = []);
    },
    destroy() {
      this.clear(), t.clear(), r == null || r();
    },
    findProvider({ rdns: s }) {
      return e.find((o) => o.info.rdns === s);
    },
    getProviders() {
      return e;
    },
    reset() {
      this.clear(), r == null || r(), (r = n());
    },
    subscribe(s, { emitImmediately: o } = {}) {
      return t.add(s), o && s(e, { added: e }), () => t.delete(s);
    },
  };
}
const vd = (t) => (e, n, r) => {
    const s = r.subscribe;
    return (
      (r.subscribe = (i, a, u) => {
        let c = i;
        if (a) {
          const l = (u == null ? void 0 : u.equalityFn) || Object.is;
          let f = i(r.getState());
          (c = (d) => {
            const h = i(d);
            if (!l(f, h)) {
              const p = f;
              a((f = h), p);
            }
          }),
            u != null && u.fireImmediately && a(f, f);
        }
        return s(c);
      }),
      t(e, n, r)
    );
  },
  _d = vd;
function xd(t, e) {
  let n;
  try {
    n = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var o;
      const i = (u) => (u === null ? null : JSON.parse(u, void 0)),
        a = (o = n.getItem(s)) != null ? o : null;
      return a instanceof Promise ? a.then(i) : i(a);
    },
    setItem: (s, o) => n.setItem(s, JSON.stringify(o, void 0)),
    removeItem: (s) => n.removeItem(s),
  };
}
const Qr = (t) => (e) => {
    try {
      const n = t(e);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Qr(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return Qr(r)(n);
        },
      };
    }
  },
  Id = (t, e) => (n, r, s) => {
    let o = {
        storage: xd(() => localStorage),
        partialize: (m) => m,
        version: 0,
        merge: (m, b) => ({ ...b, ...m }),
        ...e,
      },
      i = !1;
    const a = new Set(),
      u = new Set();
    let c = o.storage;
    if (!c)
      return t(
        (...m) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
          ),
            n(...m);
        },
        r,
        s
      );
    const l = () => {
        const m = o.partialize({ ...r() });
        return c.setItem(o.name, { state: m, version: o.version });
      },
      f = s.setState;
    s.setState = (m, b) => {
      f(m, b), l();
    };
    const d = t(
      (...m) => {
        n(...m), l();
      },
      r,
      s
    );
    s.getInitialState = () => d;
    let h;
    const p = () => {
      var m, b;
      if (!c) return;
      (i = !1),
        a.forEach((v) => {
          var x;
          return v((x = r()) != null ? x : d);
        });
      const w =
        ((b = o.onRehydrateStorage) == null
          ? void 0
          : b.call(o, (m = r()) != null ? m : d)) || void 0;
      return Qr(c.getItem.bind(c))(o.name)
        .then((v) => {
          if (v)
            if (typeof v.version == "number" && v.version !== o.version) {
              if (o.migrate) return [!0, o.migrate(v.state, v.version)];
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, v.state];
          return [!1, void 0];
        })
        .then((v) => {
          var x;
          const [I, g] = v;
          if (((h = o.merge(g, (x = r()) != null ? x : d)), n(h, !0), I))
            return l();
        })
        .then(() => {
          w == null || w(h, void 0),
            (h = r()),
            (i = !0),
            u.forEach((v) => v(h));
        })
        .catch((v) => {
          w == null || w(void 0, v);
        });
    };
    return (
      (s.persist = {
        setOptions: (m) => {
          (o = { ...o, ...m }), m.storage && (c = m.storage);
        },
        clearStorage: () => {
          c == null || c.removeItem(o.name);
        },
        getOptions: () => o,
        rehydrate: () => p(),
        hasHydrated: () => i,
        onHydrate: (m) => (
          a.add(m),
          () => {
            a.delete(m);
          }
        ),
        onFinishHydration: (m) => (
          u.add(m),
          () => {
            u.delete(m);
          }
        ),
      }),
      o.skipHydration || p(),
      h || d
    );
  },
  Cd = Id,
  ko = (t) => {
    let e;
    const n = new Set(),
      r = (c, l) => {
        const f = typeof c == "function" ? c(e) : c;
        if (!Object.is(f, e)) {
          const d = e;
          (e =
            l ?? (typeof f != "object" || f === null)
              ? f
              : Object.assign({}, e, f)),
            n.forEach((h) => h(e, d));
        }
      },
      s = () => e,
      a = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
      },
      u = (e = t(r, s, a));
    return a;
  },
  Er = (t) => (t ? ko(t) : ko);
var bm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Pd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function gm(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(t, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }
      );
    }),
    n
  );
}
var Ma = { exports: {} };
(function (t) {
  var e = Object.prototype.hasOwnProperty,
    n = "~";
  function r() {}
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1));
  function s(u, c, l) {
    (this.fn = u), (this.context = c), (this.once = l || !1);
  }
  function o(u, c, l, f, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var h = new s(l, f || u, d),
      p = n ? n + c : c;
    return (
      u._events[p]
        ? u._events[p].fn
          ? (u._events[p] = [u._events[p], h])
          : u._events[p].push(h)
        : ((u._events[p] = h), u._eventsCount++),
      u
    );
  }
  function i(u, c) {
    --u._eventsCount === 0 ? (u._events = new r()) : delete u._events[c];
  }
  function a() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  (a.prototype.eventNames = function () {
    var c = [],
      l,
      f;
    if (this._eventsCount === 0) return c;
    for (f in (l = this._events)) e.call(l, f) && c.push(n ? f.slice(1) : f);
    return Object.getOwnPropertySymbols
      ? c.concat(Object.getOwnPropertySymbols(l))
      : c;
  }),
    (a.prototype.listeners = function (c) {
      var l = n ? n + c : c,
        f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, h = f.length, p = new Array(h); d < h; d++)
        p[d] = f[d].fn;
      return p;
    }),
    (a.prototype.listenerCount = function (c) {
      var l = n ? n + c : c,
        f = this._events[l];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (a.prototype.emit = function (c, l, f, d, h, p) {
      var m = n ? n + c : c;
      if (!this._events[m]) return !1;
      var b = this._events[m],
        w = arguments.length,
        v,
        x;
      if (b.fn) {
        switch ((b.once && this.removeListener(c, b.fn, void 0, !0), w)) {
          case 1:
            return b.fn.call(b.context), !0;
          case 2:
            return b.fn.call(b.context, l), !0;
          case 3:
            return b.fn.call(b.context, l, f), !0;
          case 4:
            return b.fn.call(b.context, l, f, d), !0;
          case 5:
            return b.fn.call(b.context, l, f, d, h), !0;
          case 6:
            return b.fn.call(b.context, l, f, d, h, p), !0;
        }
        for (x = 1, v = new Array(w - 1); x < w; x++) v[x - 1] = arguments[x];
        b.fn.apply(b.context, v);
      } else {
        var I = b.length,
          g;
        for (x = 0; x < I; x++)
          switch (
            (b[x].once && this.removeListener(c, b[x].fn, void 0, !0), w)
          ) {
            case 1:
              b[x].fn.call(b[x].context);
              break;
            case 2:
              b[x].fn.call(b[x].context, l);
              break;
            case 3:
              b[x].fn.call(b[x].context, l, f);
              break;
            case 4:
              b[x].fn.call(b[x].context, l, f, d);
              break;
            default:
              if (!v)
                for (g = 1, v = new Array(w - 1); g < w; g++)
                  v[g - 1] = arguments[g];
              b[x].fn.apply(b[x].context, v);
          }
      }
      return !0;
    }),
    (a.prototype.on = function (c, l, f) {
      return o(this, c, l, f, !1);
    }),
    (a.prototype.once = function (c, l, f) {
      return o(this, c, l, f, !0);
    }),
    (a.prototype.removeListener = function (c, l, f, d) {
      var h = n ? n + c : c;
      if (!this._events[h]) return this;
      if (!l) return i(this, h), this;
      var p = this._events[h];
      if (p.fn)
        p.fn === l && (!d || p.once) && (!f || p.context === f) && i(this, h);
      else {
        for (var m = 0, b = [], w = p.length; m < w; m++)
          (p[m].fn !== l || (d && !p[m].once) || (f && p[m].context !== f)) &&
            b.push(p[m]);
        b.length ? (this._events[h] = b.length === 1 ? b[0] : b) : i(this, h);
      }
      return this;
    }),
    (a.prototype.removeAllListeners = function (c) {
      var l;
      return (
        c
          ? ((l = n ? n + c : c), this._events[l] && i(this, l))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (a.prototype.off = a.prototype.removeListener),
    (a.prototype.addListener = a.prototype.on),
    (a.prefixed = n),
    (a.EventEmitter = a),
    (t.exports = a);
})(Ma);
var kd = Ma.exports;
const Ed = Pd(kd);
class Sd {
  constructor(e) {
    Object.defineProperty(this, "uid", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: e,
    }),
      Object.defineProperty(this, "_emitter", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Ed(),
      });
  }
  on(e, n) {
    this._emitter.on(e, n);
  }
  once(e, n) {
    this._emitter.once(e, n);
  }
  off(e, n) {
    this._emitter.off(e, n);
  }
  emit(e, ...n) {
    const r = n[0];
    this._emitter.emit(e, { uid: this.uid, ...r });
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
}
function Td(t) {
  return new Sd(t);
}
function Ad(t, e) {
  return JSON.parse(t, (n, r) => {
    let s = r;
    return (
      (s == null ? void 0 : s.__type) === "bigint" && (s = BigInt(s.value)),
      (s == null ? void 0 : s.__type) === "Map" && (s = new Map(s.value)),
      (e == null ? void 0 : e(n, s)) ?? s
    );
  });
}
function Eo(t, e) {
  return t.slice(0, e).join(".") || ".";
}
function So(t, e) {
  const { length: n } = t;
  for (let r = 0; r < n; ++r) if (t[r] === e) return r + 1;
  return 0;
}
function Md(t, e) {
  const n = typeof t == "function",
    r = typeof e == "function",
    s = [],
    o = [];
  return function (a, u) {
    if (typeof u == "object")
      if (s.length) {
        const c = So(s, this);
        c === 0 ? (s[s.length] = this) : (s.splice(c), o.splice(c)),
          (o[o.length] = a);
        const l = So(s, u);
        if (l !== 0)
          return r ? e.call(this, a, u, Eo(o, l)) : `[ref=${Eo(o, l)}]`;
      } else (s[0] = u), (o[0] = a);
    return n ? t.call(this, a, u) : u;
  };
}
function Bd(t, e, n, r) {
  return JSON.stringify(
    t,
    Md((s, o) => {
      let i = o;
      return (
        typeof i == "bigint" && (i = { __type: "bigint", value: o.toString() }),
        i instanceof Map &&
          (i = { __type: "Map", value: Array.from(o.entries()) }),
        (e == null ? void 0 : e(s, i)) ?? i
      );
    }, r),
    n ?? void 0
  );
}
function Od(t) {
  const {
    deserialize: e = Ad,
    key: n = "wagmi",
    serialize: r = Bd,
    storage: s = Ba,
  } = t;
  function o(i) {
    return i instanceof Promise ? i.then((a) => a).catch(() => null) : i;
  }
  return {
    ...s,
    key: n,
    async getItem(i, a) {
      const u = s.getItem(`${n}.${i}`),
        c = await o(u);
      return c ? e(c) ?? null : a ?? null;
    },
    async setItem(i, a) {
      const u = `${n}.${i}`;
      a === null ? await o(s.removeItem(u)) : await o(s.setItem(u, r(a)));
    },
    async removeItem(i) {
      await o(s.removeItem(`${n}.${i}`));
    },
  };
}
const Ba = { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  Xr = 256;
let xn = Xr,
  In;
function jd(t = 11) {
  if (!In || xn + t > Xr * 2) {
    (In = ""), (xn = 0);
    for (let e = 0; e < Xr; e++)
      In += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return In.substring(xn, xn++ + t);
}
function Nd(t) {
  const {
      multiInjectedProviderDiscovery: e = !0,
      storage: n = Od({
        storage:
          typeof window < "u" && window.localStorage ? window.localStorage : Ba,
      }),
      syncConnectedChain: r = !0,
      ssr: s = !1,
      ...o
    } = t,
    i = typeof window < "u" && e ? wd() : void 0,
    a = Er(() => o.chains),
    u = Er(() => {
      const g = [],
        y = new Set();
      for (const _ of o.connectors ?? []) {
        const M = c(_);
        g.push(M), !s && M.rdns && y.add(M.rdns);
      }
      if (!s && i) {
        const _ = i.getProviders();
        for (const M of _) y.has(M.info.rdns) || g.push(c(l(M)));
      }
      return g;
    });
  function c(g) {
    var M;
    const y = Td(jd()),
      _ = {
        ...g({
          emitter: y,
          chains: a.getState(),
          storage: n,
          transports: o.transports,
        }),
        emitter: y,
        uid: y.uid,
      };
    return y.on("connect", x), (M = _.setup) == null || M.call(_), _;
  }
  function l(g) {
    const { info: y } = g,
      _ = g.provider;
    return bn({ target: { ...y, id: y.rdns, provider: _ } });
  }
  const f = new Map();
  function d(g = {}) {
    const y = g.chainId ?? b.getState().chainId,
      _ = a.getState().find((E) => E.id === y);
    if (g.chainId && !_) throw new un();
    {
      const E = f.get(b.getState().chainId);
      if (E && !_) return E;
      if (!_) throw new un();
    }
    {
      const E = f.get(y);
      if (E) return E;
    }
    let M;
    if (o.client) M = o.client({ chain: _ });
    else {
      const E = _.id,
        U = a.getState().map((L) => L.id),
        H = {},
        V = Object.entries(o);
      for (const [L, j] of V)
        if (
          !(
            L === "chains" ||
            L === "client" ||
            L === "connectors" ||
            L === "transports"
          )
        )
          if (typeof j == "object")
            if (E in j) H[L] = j[E];
            else {
              if (U.some((K) => K in j)) continue;
              H[L] = j;
            }
          else H[L] = j;
      M = Ea({
        ...H,
        chain: _,
        batch: H.batch ?? { multicall: !0 },
        transport: (L) => o.transports[E]({ ...L, connectors: u }),
      });
    }
    return f.set(y, M), M;
  }
  function h() {
    return {
      chainId: a.getState()[0].id,
      connections: new Map(),
      current: null,
      status: "disconnected",
    };
  }
  let p;
  const m = "0.0.0-canary-";
  kn.startsWith(m)
    ? (p = Number.parseInt(kn.replace(m, "")))
    : (p = Number.parseInt(kn.split(".")[0] ?? "0"));
  const b = Er(
    _d(
      n
        ? Cd(h, {
            migrate(g, y) {
              if (y === p) return g;
              const _ = h(),
                M = w(g, _.chainId);
              return { ..._, chainId: M };
            },
            name: "store",
            partialize(g) {
              return {
                connections: {
                  __type: "Map",
                  value: Array.from(g.connections.entries()).map(([y, _]) => {
                    const { id: M, name: E, type: U, uid: H } = _.connector;
                    return [
                      y,
                      { ..._, connector: { id: M, name: E, type: U, uid: H } },
                    ];
                  }),
                },
                chainId: g.chainId,
                current: g.current,
              };
            },
            merge(g, y) {
              typeof g == "object" && g && "status" in g && delete g.status;
              const _ = w(g, y.chainId);
              return { ...y, ...g, chainId: _ };
            },
            skipHydration: s,
            storage: n,
            version: p,
          })
        : h
    )
  );
  b.setState(h());
  function w(g, y) {
    return g &&
      typeof g == "object" &&
      "chainId" in g &&
      typeof g.chainId == "number" &&
      a.getState().some((_) => _.id === g.chainId)
      ? g.chainId
      : y;
  }
  r &&
    b.subscribe(
      ({ connections: g, current: y }) => {
        var _;
        return y ? ((_ = g.get(y)) == null ? void 0 : _.chainId) : void 0;
      },
      (g) => {
        if (a.getState().some((_) => _.id === g))
          return b.setState((_) => ({ ..._, chainId: g ?? _.chainId }));
      }
    ),
    i == null ||
      i.subscribe((g) => {
        const y = new Set(),
          _ = new Set();
        for (const E of u.getState()) y.add(E.id), E.rdns && _.add(E.rdns);
        const M = [];
        for (const E of g) {
          if (_.has(E.info.rdns)) continue;
          const U = c(l(E));
          y.has(U.id) || M.push(U);
        }
        (n && !b.persist.hasHydrated()) || u.setState((E) => [...E, ...M], !0);
      });
  function v(g) {
    b.setState((y) => {
      const _ = y.connections.get(g.uid);
      return _
        ? {
            ...y,
            connections: new Map(y.connections).set(g.uid, {
              accounts: g.accounts ?? _.accounts,
              chainId: g.chainId ?? _.chainId,
              connector: _.connector,
            }),
          }
        : y;
    });
  }
  function x(g) {
    b.getState().status === "connecting" ||
      b.getState().status === "reconnecting" ||
      b.setState((y) => {
        const _ = u.getState().find((M) => M.uid === g.uid);
        return _
          ? (_.emitter.listenerCount("connect") && _.emitter.off("connect", v),
            _.emitter.listenerCount("change") || _.emitter.on("change", v),
            _.emitter.listenerCount("disconnect") ||
              _.emitter.on("disconnect", I),
            {
              ...y,
              connections: new Map(y.connections).set(g.uid, {
                accounts: g.accounts,
                chainId: g.chainId,
                connector: _,
              }),
              current: g.uid,
              status: "connected",
            })
          : y;
      });
  }
  function I(g) {
    b.setState((y) => {
      const _ = y.connections.get(g.uid);
      if (_) {
        const E = _.connector;
        E.emitter.listenerCount("change") &&
          _.connector.emitter.off("change", v),
          E.emitter.listenerCount("disconnect") &&
            _.connector.emitter.off("disconnect", I),
          E.emitter.listenerCount("connect") ||
            _.connector.emitter.on("connect", x);
      }
      if ((y.connections.delete(g.uid), y.connections.size === 0))
        return {
          ...y,
          connections: new Map(),
          current: null,
          status: "disconnected",
        };
      const M = y.connections.values().next().value;
      return {
        ...y,
        connections: new Map(y.connections),
        current: M.connector.uid,
      };
    });
  }
  return {
    get chains() {
      return a.getState();
    },
    get connectors() {
      return u.getState();
    },
    storage: n,
    getClient: d,
    get state() {
      return b.getState();
    },
    setState(g) {
      let y;
      typeof g == "function" ? (y = g(b.getState())) : (y = g);
      const _ = h();
      typeof y != "object" && (y = _),
        Object.keys(_).some((E) => !(E in y)) && (y = _),
        b.setState(y, !0);
    },
    subscribe(g, y, _) {
      return b.subscribe(
        g,
        y,
        _ ? { ..._, fireImmediately: _.emitImmediately } : void 0
      );
    },
    _internal: {
      mipd: i,
      store: b,
      ssr: !!s,
      syncConnectedChain: r,
      transports: o.transports,
      chains: {
        setState(g) {
          const y = typeof g == "function" ? g(a.getState()) : g;
          if (y.length !== 0) return a.setState(y, !0);
        },
        subscribe(g) {
          return a.subscribe(g);
        },
      },
      connectors: {
        providerDetailToConnector: l,
        setup: c,
        setState(g) {
          return u.setState(typeof g == "function" ? g(u.getState()) : g, !0);
        },
        subscribe(g) {
          return u.subscribe(g);
        },
      },
      events: { change: v, connect: x, disconnect: I },
    },
  };
}
function Oa(t) {
  var o, i, a;
  const { chain: e } = t,
    n = e.rpcUrls.default.http[0];
  if (!t.transports) return [n];
  const r =
    (i = (o = t.transports) == null ? void 0 : o[e.id]) == null
      ? void 0
      : i.call(o, { chain: e });
  return (
    ((a = r == null ? void 0 : r.value) == null ? void 0 : a.transports) || [r]
  ).map(({ value: u }) => (u == null ? void 0 : u.url) || n);
}
or.type = "metaMask";
function or(t = {}) {
  let e, n, r, s, o, i, a, u;
  return (c) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    rdns: "io.metamask",
    type: or.type,
    async setup() {
      const l = await this.getProvider();
      l != null &&
        l.on &&
        (i || ((i = this.onConnect.bind(this)), l.on("connect", i)),
        s ||
          ((s = this.onAccountsChanged.bind(this)),
          l.on("accountsChanged", s)));
    },
    async connect({ chainId: l, isReconnecting: f } = {}) {
      const d = await this.getProvider();
      a || ((a = this.onDisplayUri), d.on("display_uri", a));
      let h = [];
      f && (h = await this.getAccounts().catch(() => []));
      try {
        let p, m;
        (h != null && h.length) ||
          (t.connectAndSign || t.connectWith
            ? (t.connectAndSign
                ? (p = await e.connectAndSign({ msg: t.connectAndSign }))
                : t.connectWith &&
                  (m = await e.connectWith({
                    method: t.connectWith.method,
                    params: t.connectWith.params,
                  })),
              (h = await this.getAccounts()))
            : (h = (await e.connect()).map((v) => Me(v))));
        let b = await this.getChainId();
        if (l && b !== l) {
          const w = await this.switchChain({ chainId: l }).catch((v) => {
            if (v.code === oe.code) throw v;
            return { id: b };
          });
          b = (w == null ? void 0 : w.id) ?? b;
        }
        return (
          a && (d.removeListener("display_uri", a), (a = void 0)),
          p
            ? d.emit("connectAndSign", {
                accounts: h,
                chainId: b,
                signResponse: p,
              })
            : m &&
              d.emit("connectWith", {
                accounts: h,
                chainId: b,
                connectWithResponse: m,
              }),
          i && (d.removeListener("connect", i), (i = void 0)),
          s ||
            ((s = this.onAccountsChanged.bind(this)),
            d.on("accountsChanged", s)),
          o || ((o = this.onChainChanged.bind(this)), d.on("chainChanged", o)),
          u || ((u = this.onDisconnect.bind(this)), d.on("disconnect", u)),
          { accounts: h, chainId: b }
        );
      } catch (p) {
        const m = p;
        throw m.code === oe.code
          ? new oe(m)
          : m.code === Ue.code
          ? new Ue(m)
          : m;
      }
    },
    async disconnect() {
      const l = await this.getProvider();
      o && (l.removeListener("chainChanged", o), (o = void 0)),
        u && (l.removeListener("disconnect", u), (u = void 0)),
        i || ((i = this.onConnect.bind(this)), l.on("connect", i)),
        await e.terminate();
    },
    async getAccounts() {
      return (
        await (await this.getProvider()).request({ method: "eth_accounts" })
      ).map((d) => Me(d));
    },
    async getChainId() {
      const l = await this.getProvider(),
        f =
          l.getChainId() ||
          (await (l == null ? void 0 : l.request({ method: "eth_chainId" })));
      return Number(f);
    },
    async getProvider() {
      async function l() {
        var h;
        const f = await (async () => {
            const { default: p } = await Kn(
              async () => {
                const { default: m } = await import(
                  "./metamask-sdk.BQdcSIO3.js"
                ).then((b) => b.m);
                return { default: m };
              },
              [],
              import.meta.url
            );
            return typeof p != "function" && typeof p.default == "function"
              ? p.default
              : p;
          })(),
          d = {};
        for (const p of c.chains)
          d[W(p.id)] =
            (h = Oa({ chain: p, transports: c.transports })) == null
              ? void 0
              : h[0];
        return (
          (e = new f({
            _source: "wagmi",
            forceDeleteProvider: !1,
            forceInjectProvider: !1,
            injectProvider: !1,
            ...t,
            readonlyRPCMap: d,
            dappMetadata:
              t.dappMetadata ??
              (typeof window < "u"
                ? { url: window.location.origin }
                : { name: "wagmi", url: "https://wagmi.sh" }),
            useDeeplink: t.useDeeplink ?? !0,
          })),
          await e.init(),
          e.getProvider()
        );
      }
      return n || (r || (r = l()), (n = await r)), n;
    },
    async isAuthorized() {
      try {
        return !!(
          await cn(() => As(() => this.getAccounts(), { timeout: 200 }), {
            delay: 201,
            retryCount: 3,
          })
        ).length;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: l, chainId: f }) {
      var p, m, b, w;
      const d = await this.getProvider(),
        h = c.chains.find((v) => v.id === f);
      if (!h) throw new De(new un());
      try {
        return (
          await Promise.all([
            d
              .request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: W(f) }],
              })
              .then(async () => {
                (await this.getChainId()) === f &&
                  c.emitter.emit("change", { chainId: f });
              }),
            new Promise((v) => {
              const x = (I) => {
                "chainId" in I &&
                  I.chainId === f &&
                  (c.emitter.off("change", x), v());
              };
              c.emitter.on("change", x);
            }),
          ]),
          h
        );
      } catch (v) {
        const x = v;
        if (
          x.code === 4902 ||
          ((m =
            (p = x == null ? void 0 : x.data) == null
              ? void 0
              : p.originalError) == null
            ? void 0
            : m.code) === 4902
        )
          try {
            const { default: I, ...g } = h.blockExplorers ?? {};
            let y;
            l != null && l.blockExplorerUrls
              ? (y = l.blockExplorerUrls)
              : I && (y = [I.url, ...Object.values(g).map((U) => U.url)]);
            let _;
            (b = l == null ? void 0 : l.rpcUrls) != null && b.length
              ? (_ = l.rpcUrls)
              : (_ = [
                  ((w = h.rpcUrls.default) == null ? void 0 : w.http[0]) ?? "",
                ]);
            const M = {
              blockExplorerUrls: y,
              chainId: W(f),
              chainName: (l == null ? void 0 : l.chainName) ?? h.name,
              iconUrls: l == null ? void 0 : l.iconUrls,
              nativeCurrency:
                (l == null ? void 0 : l.nativeCurrency) ?? h.nativeCurrency,
              rpcUrls: _,
            };
            if (
              (await d.request({
                method: "wallet_addEthereumChain",
                params: [M],
              }),
              rt(await d.request({ method: "eth_chainId" })) !== f)
            )
              throw new oe(
                new Error("User rejected switch after adding network.")
              );
            return h;
          } catch (I) {
            throw new oe(I);
          }
        throw x.code === oe.code ? new oe(x) : new De(x);
      }
    },
    async onAccountsChanged(l) {
      if (l.length === 0)
        if (e.isExtensionActive()) this.onDisconnect();
        else return;
      else if (c.emitter.listenerCount("connect")) {
        const f = (await this.getChainId()).toString();
        this.onConnect({ chainId: f });
      } else c.emitter.emit("change", { accounts: l.map((f) => Me(f)) });
    },
    onChainChanged(l) {
      const f = Number(l);
      c.emitter.emit("change", { chainId: f });
    },
    async onConnect(l) {
      const f = await this.getAccounts();
      if (f.length === 0) return;
      const d = Number(l.chainId);
      c.emitter.emit("connect", { accounts: f, chainId: d });
      const h = await this.getProvider();
      i && (h.removeListener("connect", i), (i = void 0)),
        s ||
          ((s = this.onAccountsChanged.bind(this)), h.on("accountsChanged", s)),
        o || ((o = this.onChainChanged.bind(this)), h.on("chainChanged", o)),
        u || ((u = this.onDisconnect.bind(this)), h.on("disconnect", u));
    },
    async onDisconnect(l) {
      const f = await this.getProvider();
      (l && l.code === 1013 && f && (await this.getAccounts()).length) ||
        (c.emitter.emit("disconnect"),
        o && (f.removeListener("chainChanged", o), (o = void 0)),
        u && (f.removeListener("disconnect", u), (u = void 0)),
        i || ((i = this.onConnect.bind(this)), f.on("connect", i)));
    },
    onDisplayUri(l) {
      c.emitter.emit("message", { type: "display_uri", data: l });
    },
  });
}
ir.type = "walletConnect";
function ir(t) {
  const e = t.isNewChainsStale ?? !0;
  let n, r;
  const s = "eip155";
  let o, i, a, u, c, l;
  return (f) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: ir.type,
    async setup() {
      const d = await this.getProvider().catch(() => null);
      d &&
        (a || ((a = this.onConnect.bind(this)), d.on("connect", a)),
        c ||
          ((c = this.onSessionDelete.bind(this)), d.on("session_delete", c)));
    },
    async connect({ chainId: d, ...h } = {}) {
      var p, m;
      try {
        const b = await this.getProvider();
        if (!b) throw new Xe();
        u || ((u = this.onDisplayUri), b.on("display_uri", u));
        let w = d;
        if (!w) {
          const g =
            (await ((p = f.storage) == null ? void 0 : p.getItem("state"))) ??
            {};
          f.chains.some((_) => _.id === g.chainId)
            ? (w = g.chainId)
            : (w = (m = f.chains[0]) == null ? void 0 : m.id);
        }
        if (!w) throw new Error("No chains found on connector.");
        const v = await this.isChainsStale();
        if ((b.session && v && (await b.disconnect()), !b.session || v)) {
          const g = f.chains.filter((y) => y.id !== w).map((y) => y.id);
          await b.connect({
            optionalChains: [w, ...g],
            ...("pairingTopic" in h ? { pairingTopic: h.pairingTopic } : {}),
          }),
            this.setRequestedChainsIds(f.chains.map((y) => y.id));
        }
        const x = (await b.enable()).map((g) => Me(g)),
          I = await this.getChainId();
        return (
          u && (b.removeListener("display_uri", u), (u = void 0)),
          a && (b.removeListener("connect", a), (a = void 0)),
          o ||
            ((o = this.onAccountsChanged.bind(this)),
            b.on("accountsChanged", o)),
          i || ((i = this.onChainChanged.bind(this)), b.on("chainChanged", i)),
          l || ((l = this.onDisconnect.bind(this)), b.on("disconnect", l)),
          c ||
            ((c = this.onSessionDelete.bind(this)), b.on("session_delete", c)),
          { accounts: x, chainId: I }
        );
      } catch (b) {
        throw /(user rejected|connection request reset)/i.test(
          b == null ? void 0 : b.message
        )
          ? new oe(b)
          : b;
      }
    },
    async disconnect() {
      const d = await this.getProvider();
      try {
        await (d == null ? void 0 : d.disconnect());
      } catch (h) {
        if (!/No matching key/i.test(h.message)) throw h;
      } finally {
        i && (d == null || d.removeListener("chainChanged", i), (i = void 0)),
          l && (d == null || d.removeListener("disconnect", l), (l = void 0)),
          a ||
            ((a = this.onConnect.bind(this)), d == null || d.on("connect", a)),
          o &&
            (d == null || d.removeListener("accountsChanged", o), (o = void 0)),
          c &&
            (d == null || d.removeListener("session_delete", c), (c = void 0)),
          this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      return (await this.getProvider()).accounts.map((h) => Me(h));
    },
    async getProvider({ chainId: d } = {}) {
      var p;
      async function h() {
        const m = f.chains.map((w) => w.id);
        if (!m.length) return;
        const { EthereumProvider: b } = await Kn(
          async () => {
            const { EthereumProvider: w } = await import(
              "./index.es.BDSXsdaP.js"
            );
            return { EthereumProvider: w };
          },
          __vite__mapDeps([0, 1]),
          import.meta.url
        );
        return await b.init({
          ...t,
          disableProviderPing: !0,
          optionalChains: m,
          projectId: t.projectId,
          rpcMap: Object.fromEntries(
            f.chains.map((w) => {
              const [v] = Oa({ chain: w, transports: f.transports });
              return [w.id, v];
            })
          ),
          showQrModal: t.showQrModal ?? !0,
        });
      }
      return (
        n ||
          (r || (r = h()),
          (n = await r),
          n == null || n.events.setMaxListeners(Number.POSITIVE_INFINITY)),
        d &&
          (await ((p = this.switchChain) == null
            ? void 0
            : p.call(this, { chainId: d }))),
        n
      );
    },
    async getChainId() {
      return (await this.getProvider()).chainId;
    },
    async isAuthorized() {
      try {
        const [d, h] = await Promise.all([
          this.getAccounts(),
          this.getProvider(),
        ]);
        return d.length
          ? (await this.isChainsStale()) && h.session
            ? (await h.disconnect().catch(() => {}), !1)
            : !0
          : !1;
      } catch {
        return !1;
      }
    },
    async switchChain({ addEthereumChainParameter: d, chainId: h }) {
      var b, w, v;
      const p = await this.getProvider();
      if (!p) throw new Xe();
      const m = f.chains.find((x) => x.id === h);
      if (!m) throw new De(new un());
      try {
        await Promise.all([
          new Promise((I) => {
            const g = ({ chainId: y }) => {
              y === h && (f.emitter.off("change", g), I());
            };
            f.emitter.on("change", g);
          }),
          p.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: W(h) }],
          }),
        ]);
        const x = await this.getRequestedChainsIds();
        return this.setRequestedChainsIds([...x, h]), m;
      } catch (x) {
        const I = x;
        if (/(user rejected)/i.test(I.message)) throw new oe(I);
        try {
          let g;
          d != null && d.blockExplorerUrls
            ? (g = d.blockExplorerUrls)
            : (g =
                (b = m.blockExplorers) != null && b.default.url
                  ? [(w = m.blockExplorers) == null ? void 0 : w.default.url]
                  : []);
          let y;
          (v = d == null ? void 0 : d.rpcUrls) != null && v.length
            ? (y = d.rpcUrls)
            : (y = [...m.rpcUrls.default.http]);
          const _ = {
            blockExplorerUrls: g,
            chainId: W(h),
            chainName: (d == null ? void 0 : d.chainName) ?? m.name,
            iconUrls: d == null ? void 0 : d.iconUrls,
            nativeCurrency:
              (d == null ? void 0 : d.nativeCurrency) ?? m.nativeCurrency,
            rpcUrls: y,
          };
          await p.request({ method: "wallet_addEthereumChain", params: [_] });
          const M = await this.getRequestedChainsIds();
          return this.setRequestedChainsIds([...M, h]), m;
        } catch (g) {
          throw new oe(g);
        }
      }
    },
    onAccountsChanged(d) {
      d.length === 0
        ? this.onDisconnect()
        : f.emitter.emit("change", { accounts: d.map((h) => Me(h)) });
    },
    onChainChanged(d) {
      const h = Number(d);
      f.emitter.emit("change", { chainId: h });
    },
    async onConnect(d) {
      const h = Number(d.chainId),
        p = await this.getAccounts();
      f.emitter.emit("connect", { accounts: p, chainId: h });
    },
    async onDisconnect(d) {
      this.setRequestedChainsIds([]), f.emitter.emit("disconnect");
      const h = await this.getProvider();
      o && (h.removeListener("accountsChanged", o), (o = void 0)),
        i && (h.removeListener("chainChanged", i), (i = void 0)),
        l && (h.removeListener("disconnect", l), (l = void 0)),
        c && (h.removeListener("session_delete", c), (c = void 0)),
        a || ((a = this.onConnect.bind(this)), h.on("connect", a));
    },
    onDisplayUri(d) {
      f.emitter.emit("message", { type: "display_uri", data: d });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var h, p, m;
      return n
        ? ((m =
            (p = (h = n.session) == null ? void 0 : h.namespaces[s]) == null
              ? void 0
              : p.accounts) == null
            ? void 0
            : m.map((b) => Number.parseInt(b.split(":")[1] || ""))) ?? []
        : [];
    },
    async getRequestedChainsIds() {
      var d;
      return (
        (await ((d = f.storage) == null
          ? void 0
          : d.getItem(this.requestedChainsStorageKey))) ?? []
      );
    },
    async isChainsStale() {
      if (!e) return !1;
      const d = f.chains.map((m) => m.id),
        h = this.getNamespaceChainsIds();
      if (h.length && !h.some((m) => d.includes(m))) return !1;
      const p = await this.getRequestedChainsIds();
      return !d.every((m) => p.includes(m));
    },
    async setRequestedChainsIds(d) {
      var h;
      await ((h = f.storage) == null
        ? void 0
        : h.setItem(this.requestedChainsStorageKey, d));
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    },
  });
}
const ja = Ts({
    id: 42161,
    name: "Arbitrum One",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
    blockExplorers: {
      default: {
        name: "Arbiscan",
        url: "https://arbiscan.io",
        apiUrl: "https://api.arbiscan.io/api",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 7654707,
      },
    },
  }),
  Na = Ts({
    id: 1,
    name: "Ethereum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
    blockExplorers: {
      default: {
        name: "Etherscan",
        url: "https://etherscan.io",
        apiUrl: "https://api.etherscan.io/api",
      },
    },
    contracts: {
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
        blockCreated: 19258213,
      },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14353601,
      },
    },
  }),
  $a = Ts({
    id: 11155111,
    name: "Sepolia",
    nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: { default: { http: ["https://rpc2.sepolia.org"] } },
    blockExplorers: {
      default: {
        name: "Etherscan",
        url: "https://sepolia.etherscan.io",
        apiUrl: "https://api-sepolia.etherscan.io/api",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 751532,
      },
      ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
      ensUniversalResolver: {
        address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
        blockCreated: 5317080,
      },
    },
    testnet: !0,
  }),
  $d = [Na, $a, ja],
  To = { name: "nfinityAI", url: mi },
  be = Nd({
    chains: $d,
    connectors: [
      bn(),
      ir({ projectId: pi, metadata: To, showQrModal: !0 }),
      or({ dappMetadata: To }),
    ],
    transports: {
      [Na.id]: Ir(`https://rpc.ankr.com/eth/${hr}`),
      [$a.id]: Ir(`https://rpc.ankr.com/eth_sepolia/${hr}`),
      [ja.id]: Ir(`https://rpc.ankr.com/arbitrum/${hr}`),
    },
  }),
  Ao = async () => {
    try {
      return await Ms(be, { connector: bn() });
    } catch (t) {
      return (
        console.error("Injected wallet connection error:", t),
        t.code === 4001 || t.message.includes("User rejected")
          ? { error: "User rejected the connection" }
          : t.code === -32002
          ? {
              error:
                "Connection request already pending. Please check your wallet",
            }
          : {
              error:
                "Injected wallet connection failed. Please try another wallet",
            }
      );
    }
  },
  Mo = async () => {
    try {
      return await Ms(be, {
        connector: ir({
          projectId: pi,
          showQrModal: !0,
          metadata: { name: "nfinityAI", url: mi },
        }),
      });
    } catch (t) {
      return (
        console.error("WalletConnect connection error:", t),
        t.code === 4001 || t.message.includes("User rejected")
          ? { error: "User rejected the connection" }
          : t.code === -32002
          ? {
              error:
                "Connection request already pending. Please check your wallet",
            }
          : {
              error:
                "WalletConnect connection failed. Please try another wallet",
            }
      );
    }
  },
  Bo = async () => {
    let e = 0;
    for (; e < 2; )
      try {
        return await Ms(be, {
          connector: or({
            shimDisconnect: !0,
            UNSTABLE_shimOnConnectSelectAccount: !0,
            chains: be.chains,
          }),
        });
      } catch (n) {
        if (n.code === 4001 || n.message.includes("User rejected"))
          return { error: "User rejected the connection" };
        if (n.code === -32002)
          return {
            error:
              "Connection request already pending. Please check your wallet",
          };
        if ((e++, e === 2))
          return {
            error: "MetaMask connection failed. Please try another wallet",
          };
        await new Promise((r) => setTimeout(r, 1e3));
      }
  },
  Fd = async (t = "auto") => {
    switch (t) {
      case "metamask":
        return await Bo();
      case "walletconnect":
        return await Mo();
      case "injected":
        return await Ao();
      default:
        return typeof window.ethereum < "u" && window.ethereum.isMetaMask
          ? await Bo()
          : typeof window.ethereum < "u"
          ? await Ao()
          : await Mo();
    }
  },
  Ld = async () => {
    try {
      await ud(be);
    } catch (t) {
      console.error("Disconnect error:", t);
    }
  },
  Ud = () => {
    const { set: t, subscribe: e, update: n } = _t(Os(be));
    return { subscribe: e, set: t, update: n, connect: Fd, disconnect: Ld };
  },
  Lt = Ud();
md(be, { onChange: Lt.set });
dd(be);
const Rd = async (t) => {
    const e = await fetch(`/api/auth/get_siwe?wallet_address=${t}`);
    if (!e.ok) throw new Error("Failed to get SIWE message");
    return await e.json();
  },
  ym = async (t) => {
    if (!t) throw new Error("Wallet not connected");
    try {
      const { message: e, prepared_message: n } = await Rd(t),
        r = await hd(be, { message: n }),
        s = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ signature: r, message: e }),
        }),
        { success: o, error: i } = await s.json();
      if (o) {
        const { address: a, credits: u, user: c } = o;
        return Pn.setSession(a, u, c, r, e);
      }
      if (i) throw new Error(i);
    } catch (e) {
      console.error("Sign-in error:", e);
    }
  },
  Dn = _t([]),
  wm = async () => {
    try {
      const t = await fetch("/api/user/balance/popup/currencies"),
        { currencies: e } = await t.json();
      console.log("currenciesStore", e), Dn.set(e);
    } catch (t) {
      Dn.set([]), console.error("Failed to fetch currencies:", t);
    }
  },
  Yr = _t({ isOpen: !1, component: null, props: {} }),
  Dd = (t, e = {}) => {
    Yr.update((n) =>
      n.isOpen && n.component !== t
        ? {
            isOpen: !0,
            props: { ...e, height: "0px", opacity: 0 },
            component: t,
          }
        : { isOpen: !0, component: t, props: { ...e, height: "550px" } }
    ),
      setTimeout(() => {
        Yr.update((n) => ({
          ...n,
          props: { ...n.props, height: "550px", opacity: 1 },
        }));
      }, 200);
  },
  Sn = () => {
    Yr.set({ isOpen: !1, component: null, props: {} });
  },
  zd = [
    {
      inputs: [{ internalType: "address", name: "_treasury", type: "address" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "token",
          type: "address",
        },
        { indexed: !0, internalType: "address", name: "from", type: "address" },
        {
          indexed: !1,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: !0,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "token",
          type: "address",
        },
        { indexed: !1, internalType: "bool", name: "supported", type: "bool" },
      ],
      name: "TokenSupportChanged",
      type: "event",
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: "address",
          name: "oldTreasury",
          type: "address",
        },
        {
          indexed: !0,
          internalType: "address",
          name: "newTreasury",
          type: "address",
        },
      ],
      name: "TreasuryChanged",
      type: "event",
    },
    {
      inputs: [],
      name: "ETH_ADDRESS",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "bool", name: "supported", type: "bool" },
      ],
      name: "setTokenSupport",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_treasury", type: "address" }],
      name: "setTreasury",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "supportedTokens",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "treasury",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "withdrawStuckERC20",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "address", name: "to", type: "address" },
      ],
      name: "withdrawStuckERC721",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
function Gd(t) {
  let e, n, r;
  const s = t[2].default,
    o = Rt(s, t, t[1], null);
  return {
    c() {
      (e = S("div")), o && o.c(), this.h();
    },
    l(i) {
      e = T(i, "DIV", { class: !0 });
      var a = F(e);
      o && o.l(a), a.forEach(P), this.h();
    },
    h() {
      C(
        e,
        "class",
        (n =
          "opacity-box bg-white bg-opacity-10 p-6 rounded-2xl overflow-auto " +
          t[0] +
          " svelte-1nhz4hz")
      );
    },
    m(i, a) {
      $(i, e, a), o && o.m(e, null), (r = !0);
    },
    p(i, [a]) {
      o &&
        o.p &&
        (!r || a & 2) &&
        Dt(o, s, i, i[1], r ? Gt(s, i[1], a, null) : zt(i[1]), null),
        (!r ||
          (a & 1 &&
            n !==
              (n =
                "opacity-box bg-white bg-opacity-10 p-6 rounded-2xl overflow-auto " +
                i[0] +
                " svelte-1nhz4hz"))) &&
          C(e, "class", n);
    },
    i(i) {
      r || (q(o, i), (r = !0));
    },
    o(i) {
      J(o, i), (r = !1);
    },
    d(i) {
      i && P(e), o && o.d(i);
    },
  };
}
function Hd(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e,
    { className: o } = e;
  return (
    (t.$$set = (i) => {
      "className" in i && n(0, (o = i.className)),
        "$$scope" in i && n(1, (s = i.$$scope));
    }),
    [o, s, r]
  );
}
class Fa extends He {
  constructor(e) {
    super(), qe(this, e, Hd, Gd, Ge, { className: 0 });
  }
}
const Ut = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  ar = (t, e, n, r = "") => {
    const s = t.split(":");
    if (t.slice(0, 1) === "@") {
      if (s.length < 2 || s.length > 3) return null;
      r = s.shift().slice(1);
    }
    if (s.length > 3 || !s.length) return null;
    if (s.length > 1) {
      const a = s.pop(),
        u = s.pop(),
        c = { provider: s.length > 0 ? s[0] : r, prefix: u, name: a };
      return e && !Tn(c) ? null : c;
    }
    const o = s[0],
      i = o.split("-");
    if (i.length > 1) {
      const a = { provider: r, prefix: i.shift(), name: i.join("-") };
      return e && !Tn(a) ? null : a;
    }
    if (n && r === "") {
      const a = { provider: r, prefix: "", name: o };
      return e && !Tn(a, n) ? null : a;
    }
    return null;
  },
  Tn = (t, e) =>
    t
      ? !!(
          (t.provider === "" || t.provider.match(Ut)) &&
          ((e && t.prefix === "") || t.prefix.match(Ut)) &&
          t.name.match(Ut)
        )
      : !1,
  La = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  zn = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  cr = Object.freeze({ ...La, ...zn }),
  es = Object.freeze({ ...cr, body: "", hidden: !1 });
function qd(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0),
    !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Oo(t, e) {
  const n = qd(t, e);
  for (const r in es)
    r in zn
      ? r in t && !(r in n) && (n[r] = zn[r])
      : r in e
      ? (n[r] = e[r])
      : r in t && (n[r] = t[r]);
  return n;
}
function Vd(t, e) {
  const n = t.icons,
    r = t.aliases || Object.create(null),
    s = Object.create(null);
  function o(i) {
    if (n[i]) return (s[i] = []);
    if (!(i in s)) {
      s[i] = null;
      const a = r[i] && r[i].parent,
        u = a && o(a);
      u && (s[i] = [a].concat(u));
    }
    return s[i];
  }
  return Object.keys(n).concat(Object.keys(r)).forEach(o), s;
}
function Wd(t, e, n) {
  const r = t.icons,
    s = t.aliases || Object.create(null);
  let o = {};
  function i(a) {
    o = Oo(r[a] || s[a], o);
  }
  return i(e), n.forEach(i), Oo(t, o);
}
function Ua(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object") return n;
  t.not_found instanceof Array &&
    t.not_found.forEach((s) => {
      e(s, null), n.push(s);
    });
  const r = Vd(t);
  for (const s in r) {
    const o = r[s];
    o && (e(s, Wd(t, s, o)), n.push(s));
  }
  return n;
}
const Kd = { provider: "", aliases: {}, not_found: {}, ...La };
function Sr(t, e) {
  for (const n in e) if (n in t && typeof t[n] != typeof e[n]) return !1;
  return !0;
}
function Ra(t) {
  if (typeof t != "object" || t === null) return null;
  const e = t;
  if (
    typeof e.prefix != "string" ||
    !t.icons ||
    typeof t.icons != "object" ||
    !Sr(t, Kd)
  )
    return null;
  const n = e.icons;
  for (const s in n) {
    const o = n[s];
    if (!s.match(Ut) || typeof o.body != "string" || !Sr(o, es)) return null;
  }
  const r = e.aliases || Object.create(null);
  for (const s in r) {
    const o = r[s],
      i = o.parent;
    if (!s.match(Ut) || typeof i != "string" || (!n[i] && !r[i]) || !Sr(o, es))
      return null;
  }
  return e;
}
const jo = Object.create(null);
function Jd(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function dt(t, e) {
  const n = jo[t] || (jo[t] = Object.create(null));
  return n[e] || (n[e] = Jd(t, e));
}
function js(t, e) {
  return Ra(e)
    ? Ua(e, (n, r) => {
        r ? (t.icons[n] = r) : t.missing.add(n);
      })
    : [];
}
function Zd(t, e, n) {
  try {
    if (typeof n.body == "string") return (t.icons[e] = { ...n }), !0;
  } catch {}
  return !1;
}
let ln = !1;
function Da(t) {
  return typeof t == "boolean" && (ln = t), ln;
}
function Qd(t) {
  const e = typeof t == "string" ? ar(t, !0, ln) : t;
  if (e) {
    const n = dt(e.provider, e.prefix),
      r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Xd(t, e) {
  const n = ar(t, !0, ln);
  if (!n) return !1;
  const r = dt(n.provider, n.prefix);
  return Zd(r, n.name, e);
}
function Yd(t, e) {
  if (typeof t != "object") return !1;
  if ((typeof e != "string" && (e = t.provider || ""), ln && !e && !t.prefix)) {
    let s = !1;
    return (
      Ra(t) &&
        ((t.prefix = ""),
        Ua(t, (o, i) => {
          i && Xd(o, i) && (s = !0);
        })),
      s
    );
  }
  const n = t.prefix;
  if (!Tn({ provider: e, prefix: n, name: "a" })) return !1;
  const r = dt(e, n);
  return !!js(r, t);
}
const za = Object.freeze({ width: null, height: null }),
  Ga = Object.freeze({ ...za, ...zn }),
  eh = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  th = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function No(t, e, n) {
  if (e === 1) return t;
  if (((n = n || 100), typeof t == "number")) return Math.ceil(t * e * n) / n;
  if (typeof t != "string") return t;
  const r = t.split(eh);
  if (r === null || !r.length) return t;
  const s = [];
  let o = r.shift(),
    i = th.test(o);
  for (;;) {
    if (i) {
      const a = parseFloat(o);
      isNaN(a) ? s.push(o) : s.push(Math.ceil(a * e * n) / n);
    } else s.push(o);
    if (((o = r.shift()), o === void 0)) return s.join("");
    i = !i;
  }
}
function nh(t, e = "defs") {
  let n = "";
  const r = t.indexOf("<" + e);
  for (; r >= 0; ) {
    const s = t.indexOf(">", r),
      o = t.indexOf("</" + e);
    if (s === -1 || o === -1) break;
    const i = t.indexOf(">", o);
    if (i === -1) break;
    (n += t.slice(s + 1, o).trim()),
      (t = t.slice(0, r).trim() + t.slice(i + 1));
  }
  return { defs: n, content: t };
}
function rh(t, e) {
  return t ? "<defs>" + t + "</defs>" + e : e;
}
function sh(t, e, n) {
  const r = nh(t);
  return rh(r.defs, e + r.content + n);
}
const oh = (t) => t === "unset" || t === "undefined" || t === "none";
function ih(t, e) {
  const n = { ...cr, ...t },
    r = { ...Ga, ...e },
    s = { left: n.left, top: n.top, width: n.width, height: n.height };
  let o = n.body;
  [n, r].forEach((m) => {
    const b = [],
      w = m.hFlip,
      v = m.vFlip;
    let x = m.rotate;
    w
      ? v
        ? (x += 2)
        : (b.push(
            "translate(" +
              (s.width + s.left).toString() +
              " " +
              (0 - s.top).toString() +
              ")"
          ),
          b.push("scale(-1 1)"),
          (s.top = s.left = 0))
      : v &&
        (b.push(
          "translate(" +
            (0 - s.left).toString() +
            " " +
            (s.height + s.top).toString() +
            ")"
        ),
        b.push("scale(1 -1)"),
        (s.top = s.left = 0));
    let I;
    switch ((x < 0 && (x -= Math.floor(x / 4) * 4), (x = x % 4), x)) {
      case 1:
        (I = s.height / 2 + s.top),
          b.unshift("rotate(90 " + I.toString() + " " + I.toString() + ")");
        break;
      case 2:
        b.unshift(
          "rotate(180 " +
            (s.width / 2 + s.left).toString() +
            " " +
            (s.height / 2 + s.top).toString() +
            ")"
        );
        break;
      case 3:
        (I = s.width / 2 + s.left),
          b.unshift("rotate(-90 " + I.toString() + " " + I.toString() + ")");
        break;
    }
    x % 2 === 1 &&
      (s.left !== s.top && ((I = s.left), (s.left = s.top), (s.top = I)),
      s.width !== s.height &&
        ((I = s.width), (s.width = s.height), (s.height = I))),
      b.length && (o = sh(o, '<g transform="' + b.join(" ") + '">', "</g>"));
  });
  const i = r.width,
    a = r.height,
    u = s.width,
    c = s.height;
  let l, f;
  i === null
    ? ((f = a === null ? "1em" : a === "auto" ? c : a), (l = No(f, u / c)))
    : ((l = i === "auto" ? u : i),
      (f = a === null ? No(l, c / u) : a === "auto" ? c : a));
  const d = {},
    h = (m, b) => {
      oh(b) || (d[m] = b.toString());
    };
  h("width", l), h("height", f);
  const p = [s.left, s.top, u, c];
  return (d.viewBox = p.join(" ")), { attributes: d, viewBox: p, body: o };
}
const ah = /\sid="(\S+)"/g,
  ch =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let uh = 0;
function lh(t, e = ch) {
  const n = [];
  let r;
  for (; (r = ah.exec(t)); ) n.push(r[1]);
  if (!n.length) return t;
  const s = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((o) => {
      const i = typeof e == "function" ? e(o) : e + (uh++).toString(),
        a = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      t = t.replace(
        new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
        "$1" + i + s + "$3"
      );
    }),
    (t = t.replace(new RegExp(s, "g"), "")),
    t
  );
}
const ts = Object.create(null);
function fh(t, e) {
  ts[t] = e;
}
function ns(t) {
  return ts[t] || ts[""];
}
function Ns(t) {
  let e;
  if (typeof t.resources == "string") e = [t.resources];
  else if (((e = t.resources), !(e instanceof Array) || !e.length)) return null;
  return {
    resources: e,
    path: t.path || "/",
    maxURL: t.maxURL || 500,
    rotate: t.rotate || 750,
    timeout: t.timeout || 5e3,
    random: t.random === !0,
    index: t.index || 0,
    dataAfterTimeout: t.dataAfterTimeout !== !1,
  };
}
const $s = Object.create(null),
  Ot = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  An = [];
for (; Ot.length > 0; )
  Ot.length === 1 || Math.random() > 0.5
    ? An.push(Ot.shift())
    : An.push(Ot.pop());
$s[""] = Ns({ resources: ["https://api.iconify.design"].concat(An) });
function dh(t, e) {
  const n = Ns(e);
  return n === null ? !1 : (($s[t] = n), !0);
}
function Fs(t) {
  return $s[t];
}
const hh = () => {
  let t;
  try {
    if (((t = fetch), typeof t == "function")) return t;
  } catch {}
};
let $o = hh();
function ph(t, e) {
  const n = Fs(t);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let s = 0;
    n.resources.forEach((i) => {
      s = Math.max(s, i.length);
    });
    const o = e + ".json?icons=";
    r = n.maxURL - s - n.path.length - o.length;
  }
  return r;
}
function mh(t) {
  return t === 404;
}
const bh = (t, e, n) => {
  const r = [],
    s = ph(t, e),
    o = "icons";
  let i = { type: o, provider: t, prefix: e, icons: [] },
    a = 0;
  return (
    n.forEach((u, c) => {
      (a += u.length + 1),
        a >= s &&
          c > 0 &&
          (r.push(i),
          (i = { type: o, provider: t, prefix: e, icons: [] }),
          (a = u.length)),
        i.icons.push(u);
    }),
    r.push(i),
    r
  );
};
function gh(t) {
  if (typeof t == "string") {
    const e = Fs(t);
    if (e) return e.path;
  }
  return "/";
}
const yh = (t, e, n) => {
    if (!$o) {
      n("abort", 424);
      return;
    }
    let r = gh(e.provider);
    switch (e.type) {
      case "icons": {
        const o = e.prefix,
          a = e.icons.join(","),
          u = new URLSearchParams({ icons: a });
        r += o + ".json?" + u.toString();
        break;
      }
      case "custom": {
        const o = e.uri;
        r += o.slice(0, 1) === "/" ? o.slice(1) : o;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let s = 503;
    $o(t + r)
      .then((o) => {
        const i = o.status;
        if (i !== 200) {
          setTimeout(() => {
            n(mh(i) ? "abort" : "next", i);
          });
          return;
        }
        return (s = 501), o.json();
      })
      .then((o) => {
        if (typeof o != "object" || o === null) {
          setTimeout(() => {
            o === 404 ? n("abort", o) : n("next", s);
          });
          return;
        }
        setTimeout(() => {
          n("success", o);
        });
      })
      .catch(() => {
        n("next", s);
      });
  },
  wh = { prepare: bh, send: yh };
function vh(t) {
  const e = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  t.sort((s, o) =>
    s.provider !== o.provider
      ? s.provider.localeCompare(o.provider)
      : s.prefix !== o.prefix
      ? s.prefix.localeCompare(o.prefix)
      : s.name.localeCompare(o.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    t.forEach((s) => {
      if (
        r.name === s.name &&
        r.prefix === s.prefix &&
        r.provider === s.provider
      )
        return;
      r = s;
      const o = s.provider,
        i = s.prefix,
        a = s.name,
        u = n[o] || (n[o] = Object.create(null)),
        c = u[i] || (u[i] = dt(o, i));
      let l;
      a in c.icons
        ? (l = e.loaded)
        : i === "" || c.missing.has(a)
        ? (l = e.missing)
        : (l = e.pending);
      const f = { provider: o, prefix: i, name: a };
      l.push(f);
    }),
    e
  );
}
function Ha(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((s) => s.id !== e));
  });
}
function _h(t) {
  t.pendingCallbacksFlag ||
    ((t.pendingCallbacksFlag = !0),
    setTimeout(() => {
      t.pendingCallbacksFlag = !1;
      const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
      if (!e.length) return;
      let n = !1;
      const r = t.provider,
        s = t.prefix;
      e.forEach((o) => {
        const i = o.icons,
          a = i.pending.length;
        (i.pending = i.pending.filter((u) => {
          if (u.prefix !== s) return !0;
          const c = u.name;
          if (t.icons[c]) i.loaded.push({ provider: r, prefix: s, name: c });
          else if (t.missing.has(c))
            i.missing.push({ provider: r, prefix: s, name: c });
          else return (n = !0), !0;
          return !1;
        })),
          i.pending.length !== a &&
            (n || Ha([t], o.id),
            o.callback(
              i.loaded.slice(0),
              i.missing.slice(0),
              i.pending.slice(0),
              o.abort
            ));
      });
    }));
}
let xh = 0;
function Ih(t, e, n) {
  const r = xh++,
    s = Ha.bind(null, n, r);
  if (!e.pending.length) return s;
  const o = { id: r, icons: e, callback: t, abort: s };
  return (
    n.forEach((i) => {
      (i.loaderCallbacks || (i.loaderCallbacks = [])).push(o);
    }),
    s
  );
}
function Ch(t, e = !0, n = !1) {
  const r = [];
  return (
    t.forEach((s) => {
      const o = typeof s == "string" ? ar(s, e, n) : s;
      o && r.push(o);
    }),
    r
  );
}
var Ph = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function kh(t, e, n, r) {
  const s = t.resources.length,
    o = t.random ? Math.floor(Math.random() * s) : t.index;
  let i;
  if (t.random) {
    let y = t.resources.slice(0);
    for (i = []; y.length > 1; ) {
      const _ = Math.floor(Math.random() * y.length);
      i.push(y[_]), (y = y.slice(0, _).concat(y.slice(_ + 1)));
    }
    i = i.concat(y);
  } else i = t.resources.slice(o).concat(t.resources.slice(0, o));
  const a = Date.now();
  let u = "pending",
    c = 0,
    l,
    f = null,
    d = [],
    h = [];
  typeof r == "function" && h.push(r);
  function p() {
    f && (clearTimeout(f), (f = null));
  }
  function m() {
    u === "pending" && (u = "aborted"),
      p(),
      d.forEach((y) => {
        y.status === "pending" && (y.status = "aborted");
      }),
      (d = []);
  }
  function b(y, _) {
    _ && (h = []), typeof y == "function" && h.push(y);
  }
  function w() {
    return {
      startTime: a,
      payload: e,
      status: u,
      queriesSent: c,
      queriesPending: d.length,
      subscribe: b,
      abort: m,
    };
  }
  function v() {
    (u = "failed"),
      h.forEach((y) => {
        y(void 0, l);
      });
  }
  function x() {
    d.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }),
      (d = []);
  }
  function I(y, _, M) {
    const E = _ !== "success";
    switch (((d = d.filter((U) => U !== y)), u)) {
      case "pending":
        break;
      case "failed":
        if (E || !t.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (_ === "abort") {
      (l = M), v();
      return;
    }
    if (E) {
      (l = M), d.length || (i.length ? g() : v());
      return;
    }
    if ((p(), x(), !t.random)) {
      const U = t.resources.indexOf(y.resource);
      U !== -1 && U !== t.index && (t.index = U);
    }
    (u = "completed"),
      h.forEach((U) => {
        U(M);
      });
  }
  function g() {
    if (u !== "pending") return;
    p();
    const y = i.shift();
    if (y === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), u === "pending" && (x(), v());
        }, t.timeout);
        return;
      }
      v();
      return;
    }
    const _ = {
      status: "pending",
      resource: y,
      callback: (M, E) => {
        I(_, M, E);
      },
    };
    d.push(_), c++, (f = setTimeout(g, t.rotate)), n(y, e, _.callback);
  }
  return setTimeout(g), w;
}
function qa(t) {
  const e = { ...Ph, ...t };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function s(a, u, c) {
    const l = kh(e, a, u, (f, d) => {
      r(), c && c(f, d);
    });
    return n.push(l), l;
  }
  function o(a) {
    return n.find((u) => a(u)) || null;
  }
  return {
    query: s,
    find: o,
    setIndex: (a) => {
      e.index = a;
    },
    getIndex: () => e.index,
    cleanup: r,
  };
}
function Fo() {}
const Tr = Object.create(null);
function Eh(t) {
  if (!Tr[t]) {
    const e = Fs(t);
    if (!e) return;
    const n = qa(e),
      r = { config: e, redundancy: n };
    Tr[t] = r;
  }
  return Tr[t];
}
function Sh(t, e, n) {
  let r, s;
  if (typeof t == "string") {
    const o = ns(t);
    if (!o) return n(void 0, 424), Fo;
    s = o.send;
    const i = Eh(t);
    i && (r = i.redundancy);
  } else {
    const o = Ns(t);
    if (o) {
      r = qa(o);
      const i = t.resources ? t.resources[0] : "",
        a = ns(i);
      a && (s = a.send);
    }
  }
  return !r || !s ? (n(void 0, 424), Fo) : r.query(e, s, n)().abort;
}
const Lo = "iconify2",
  fn = "iconify",
  Va = fn + "-count",
  Uo = fn + "-version",
  Wa = 36e5,
  Th = 168,
  Ah = 50;
function rs(t, e) {
  try {
    return t.getItem(e);
  } catch {}
}
function Ls(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {}
}
function Ro(t, e) {
  try {
    t.removeItem(e);
  } catch {}
}
function ss(t, e) {
  return Ls(t, Va, e.toString());
}
function os(t) {
  return parseInt(rs(t, Va)) || 0;
}
const ur = { local: !0, session: !0 },
  Ka = { local: new Set(), session: new Set() };
let Us = !1;
function Mh(t) {
  Us = t;
}
let Cn = typeof window > "u" ? {} : window;
function Ja(t) {
  const e = t + "Storage";
  try {
    if (Cn && Cn[e] && typeof Cn[e].length == "number") return Cn[e];
  } catch {}
  ur[t] = !1;
}
function Za(t, e) {
  const n = Ja(t);
  if (!n) return;
  const r = rs(n, Uo);
  if (r !== Lo) {
    if (r) {
      const a = os(n);
      for (let u = 0; u < a; u++) Ro(n, fn + u.toString());
    }
    Ls(n, Uo, Lo), ss(n, 0);
    return;
  }
  const s = Math.floor(Date.now() / Wa) - Th,
    o = (a) => {
      const u = fn + a.toString(),
        c = rs(n, u);
      if (typeof c == "string") {
        try {
          const l = JSON.parse(c);
          if (
            typeof l == "object" &&
            typeof l.cached == "number" &&
            l.cached > s &&
            typeof l.provider == "string" &&
            typeof l.data == "object" &&
            typeof l.data.prefix == "string" &&
            e(l, a)
          )
            return !0;
        } catch {}
        Ro(n, u);
      }
    };
  let i = os(n);
  for (let a = i - 1; a >= 0; a--)
    o(a) || (a === i - 1 ? (i--, ss(n, i)) : Ka[t].add(a));
}
function Qa() {
  if (!Us) {
    Mh(!0);
    for (const t in ur)
      Za(t, (e) => {
        const n = e.data,
          r = e.provider,
          s = n.prefix,
          o = dt(r, s);
        if (!js(o, n).length) return !1;
        const i = n.lastModified || -1;
        return (
          (o.lastModifiedCached = o.lastModifiedCached
            ? Math.min(o.lastModifiedCached, i)
            : i),
          !0
        );
      });
  }
}
function Bh(t, e) {
  const n = t.lastModifiedCached;
  if (n && n >= e) return n === e;
  if (((t.lastModifiedCached = e), n))
    for (const r in ur)
      Za(r, (s) => {
        const o = s.data;
        return (
          s.provider !== t.provider ||
          o.prefix !== t.prefix ||
          o.lastModified === e
        );
      });
  return !0;
}
function Oh(t, e) {
  Us || Qa();
  function n(r) {
    let s;
    if (!ur[r] || !(s = Ja(r))) return;
    const o = Ka[r];
    let i;
    if (o.size) o.delete((i = Array.from(o).shift()));
    else if (((i = os(s)), i >= Ah || !ss(s, i + 1))) return;
    const a = {
      cached: Math.floor(Date.now() / Wa),
      provider: t.provider,
      data: e,
    };
    return Ls(s, fn + i.toString(), JSON.stringify(a));
  }
  (e.lastModified && !Bh(t, e.lastModified)) ||
    (Object.keys(e.icons).length &&
      (e.not_found && ((e = Object.assign({}, e)), delete e.not_found),
      n("local") || n("session")));
}
function Do() {}
function jh(t) {
  t.iconsLoaderFlag ||
    ((t.iconsLoaderFlag = !0),
    setTimeout(() => {
      (t.iconsLoaderFlag = !1), _h(t);
    }));
}
function Nh(t, e) {
  t.iconsToLoad
    ? (t.iconsToLoad = t.iconsToLoad.concat(e).sort())
    : (t.iconsToLoad = e),
    t.iconsQueueFlag ||
      ((t.iconsQueueFlag = !0),
      setTimeout(() => {
        t.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = t,
          s = t.iconsToLoad;
        delete t.iconsToLoad;
        let o;
        if (!s || !(o = ns(n))) return;
        o.prepare(n, r, s).forEach((a) => {
          Sh(n, a, (u) => {
            if (typeof u != "object")
              a.icons.forEach((c) => {
                t.missing.add(c);
              });
            else
              try {
                const c = js(t, u);
                if (!c.length) return;
                const l = t.pendingIcons;
                l &&
                  c.forEach((f) => {
                    l.delete(f);
                  }),
                  Oh(t, u);
              } catch (c) {
                console.error(c);
              }
            jh(t);
          });
        });
      }));
}
const $h = (t, e) => {
  const n = Ch(t, !0, Da()),
    r = vh(n);
  if (!r.pending.length) {
    let u = !0;
    return (
      e &&
        setTimeout(() => {
          u && e(r.loaded, r.missing, r.pending, Do);
        }),
      () => {
        u = !1;
      }
    );
  }
  const s = Object.create(null),
    o = [];
  let i, a;
  return (
    r.pending.forEach((u) => {
      const { provider: c, prefix: l } = u;
      if (l === a && c === i) return;
      (i = c), (a = l), o.push(dt(c, l));
      const f = s[c] || (s[c] = Object.create(null));
      f[l] || (f[l] = []);
    }),
    r.pending.forEach((u) => {
      const { provider: c, prefix: l, name: f } = u,
        d = dt(c, l),
        h = d.pendingIcons || (d.pendingIcons = new Set());
      h.has(f) || (h.add(f), s[c][l].push(f));
    }),
    o.forEach((u) => {
      const { provider: c, prefix: l } = u;
      s[c][l].length && Nh(u, s[c][l]);
    }),
    e ? Ih(e, r, o) : Do
  );
};
function Fh(t, e) {
  const n = { ...t };
  for (const r in e) {
    const s = e[r],
      o = typeof s;
    r in za
      ? (s === null || (s && (o === "string" || o === "number"))) && (n[r] = s)
      : o === typeof n[r] && (n[r] = r === "rotate" ? s % 4 : s);
  }
  return n;
}
const Lh = /[\s,]+/;
function Uh(t, e) {
  e.split(Lh).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function Rh(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(s) {
    for (; s < 0; ) s += 4;
    return s % 4;
  }
  if (n === "") {
    const s = parseInt(t);
    return isNaN(s) ? 0 : r(s);
  } else if (n !== t) {
    let s = 0;
    switch (n) {
      case "%":
        s = 25;
        break;
      case "deg":
        s = 90;
    }
    if (s) {
      let o = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(o) ? 0 : ((o = o / s), o % 1 === 0 ? r(o) : 0);
    }
  }
  return e;
}
function Dh(t, e) {
  let n =
    t.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e) n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function zh(t) {
  return t
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function Gh(t) {
  return "data:image/svg+xml," + zh(t);
}
function Hh(t) {
  return 'url("' + Gh(t) + '")';
}
const zo = { ...Ga, inline: !1 },
  qh = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  Vh = { display: "inline-block" },
  is = { "background-color": "currentColor" },
  Xa = { "background-color": "transparent" },
  Go = { image: "var(--svg)", repeat: "no-repeat", size: "100% 100%" },
  Ho = { "-webkit-mask": is, mask: is, background: Xa };
for (const t in Ho) {
  const e = Ho[t];
  for (const n in Go) e[t + "-" + n] = Go[n];
}
function Wh(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Kh(t, e) {
  const n = Fh(zo, e),
    r = e.mode || "svg",
    s = r === "svg" ? { ...qh } : {};
  t.body.indexOf("xlink:") === -1 && delete s["xmlns:xlink"];
  let o = typeof e.style == "string" ? e.style : "";
  for (let w in e) {
    const v = e[w];
    if (v !== void 0)
      switch (w) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[w] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && Uh(n, v);
          break;
        case "color":
          o =
            o +
            (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") +
            "color: " +
            v +
            "; ";
          break;
        case "rotate":
          typeof v == "string"
            ? (n[w] = Rh(v))
            : typeof v == "number" && (n[w] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete s["aria-hidden"];
          break;
        default:
          if (w.slice(0, 3) === "on:") break;
          zo[w] === void 0 && (s[w] = v);
      }
  }
  const i = ih(t, n),
    a = i.attributes;
  if ((n.inline && (o = "vertical-align: -0.125em; " + o), r === "svg")) {
    Object.assign(s, a), o !== "" && (s.style = o);
    let w = 0,
      v = e.id;
    return (
      typeof v == "string" && (v = v.replace(/-/g, "_")),
      {
        svg: !0,
        attributes: s,
        body: lh(i.body, v ? () => v + "ID" + w++ : "iconifySvelte"),
      }
    );
  }
  const { body: u, width: c, height: l } = t,
    f = r === "mask" || (r === "bg" ? !1 : u.indexOf("currentColor") !== -1),
    d = Dh(u, { ...a, width: c + "", height: l + "" }),
    p = { "--svg": Hh(d) },
    m = (w) => {
      const v = a[w];
      v && (p[w] = Wh(v));
    };
  m("width"), m("height"), Object.assign(p, Vh, f ? is : Xa);
  let b = "";
  for (const w in p) b += w + ": " + p[w] + ";";
  return (s.style = b + o), { svg: !1, attributes: s };
}
Da(!0);
fh("", wh);
if (typeof document < "u" && typeof window < "u") {
  Qa();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof e == "object" &&
      e !== null &&
      (e instanceof Array ? e : [e]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !Yd(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const s = e[n];
          if (typeof s != "object" || !s || s.resources === void 0) continue;
          dh(n, s) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Jh(t, e, n, r, s) {
  function o() {
    e.loading && (e.loading.abort(), (e.loading = null));
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return (e.name = ""), o(), { data: { ...cr, ...t } };
  let i;
  if (typeof t != "string" || (i = ar(t, !1, !0)) === null) return o(), null;
  const a = Qd(i);
  if (!a)
    return (
      n &&
        (!e.loading || e.loading.name !== t) &&
        (o(), (e.name = ""), (e.loading = { name: t, abort: $h([i], r) })),
      null
    );
  o(), e.name !== t && ((e.name = t), s && !e.destroyed && s(t));
  const u = ["iconify"];
  return (
    i.prefix !== "" && u.push("iconify--" + i.prefix),
    i.provider !== "" && u.push("iconify--" + i.provider),
    { data: a, classes: u }
  );
}
function Zh(t, e) {
  return t ? Kh({ ...cr, ...t }, e) : null;
}
function qo(t) {
  let e;
  function n(o, i) {
    return o[0].svg ? Xh : Qh;
  }
  let r = n(t),
    s = r(t);
  return {
    c() {
      s.c(), (e = xe());
    },
    l(o) {
      s.l(o), (e = xe());
    },
    m(o, i) {
      s.m(o, i), $(o, e, i);
    },
    p(o, i) {
      r === (r = n(o)) && s
        ? s.p(o, i)
        : (s.d(1), (s = r(o)), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(o) {
      o && P(e), s.d(o);
    },
  };
}
function Qh(t) {
  let e,
    n = [t[0].attributes],
    r = {};
  for (let s = 0; s < n.length; s += 1) r = Mn(r, n[s]);
  return {
    c() {
      (e = S("span")), this.h();
    },
    l(s) {
      (e = T(s, "SPAN", {})), F(e).forEach(P), this.h();
    },
    h() {
      Hs(e, r);
    },
    m(s, o) {
      $(s, e, o);
    },
    p(s, o) {
      Hs(e, (r = hi(n, [o & 1 && s[0].attributes])));
    },
    d(s) {
      s && P(e);
    },
  };
}
function Xh(t) {
  let e,
    n,
    r = t[0].body + "",
    s = [t[0].attributes],
    o = {};
  for (let i = 0; i < s.length; i += 1) o = Mn(o, s[i]);
  return {
    c() {
      (e = nc("svg")), (n = new Gn(!0)), this.h();
    },
    l(i) {
      e = rc(i, "svg", {});
      var a = F(e);
      (n = Hn(a, !0)), a.forEach(P), this.h();
    },
    h() {
      (n.a = null), qs(e, o);
    },
    m(i, a) {
      $(i, e, a), n.m(r, e);
    },
    p(i, a) {
      a & 1 && r !== (r = i[0].body + "") && n.p(r),
        qs(e, (o = hi(s, [a & 1 && i[0].attributes])));
    },
    d(i) {
      i && P(e);
    },
  };
}
function Yh(t) {
  let e,
    n = t[0] && qo(t);
  return {
    c() {
      n && n.c(), (e = xe());
    },
    l(r) {
      n && n.l(r), (e = xe());
    },
    m(r, s) {
      n && n.m(r, s), $(r, e, s);
    },
    p(r, [s]) {
      r[0]
        ? n
          ? n.p(r, s)
          : ((n = qo(r)), n.c(), n.m(e.parentNode, e))
        : n && (n.d(1), (n = null));
    },
    i: ge,
    o: ge,
    d(r) {
      r && P(e), n && n.d(r);
    },
  };
}
function ep(t, e, n) {
  const r = { name: "", loading: null, destroyed: !1 };
  let s = !1,
    o = 0,
    i;
  const a = (c) => {
    typeof e.onLoad == "function" && e.onLoad(c), qn()("load", { icon: c });
  };
  function u() {
    n(3, o++, o);
  }
  return (
    as(() => {
      n(2, (s = !0));
    }),
    tc(() => {
      n(1, (r.destroyed = !0), r),
        r.loading && (r.loading.abort(), n(1, (r.loading = null), r));
    }),
    (t.$$set = (c) => {
      n(6, (e = Mn(Mn({}, e), Gs(c))));
    }),
    (t.$$.update = () => {
      {
        const c = Jh(e.icon, r, s, u, a);
        n(0, (i = c ? Zh(c.data, e) : null)),
          i &&
            c.classes &&
            n(
              0,
              (i.attributes.class =
                (typeof e.class == "string" ? e.class + " " : "") +
                c.classes.join(" ")),
              i
            );
      }
    }),
    (e = Gs(e)),
    [i, r, s, o]
  );
}
class lr extends He {
  constructor(e) {
    super(), qe(this, e, ep, Yh, Ge, {});
  }
}
const tp =
  "data:image/svg+xml,%3csvg%20width='7'%20height='10'%20viewBox='0%200%207%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.494%206.626H2.604V6.066L4.942%203.308V2.076H2.506V3.35H0.504V1.474L1.736%200.255999H5.726L6.958%201.474V3.756L4.494%206.626ZM2.506%207.914H4.648V10H2.506V7.914Z'%20fill='white'/%3e%3c/svg%3e";
function Vo(t) {
  let e, n, r, s;
  return {
    c() {
      (e = S("div")), (n = Q(t[0])), this.h();
    },
    l(o) {
      e = T(o, "DIV", { class: !0, style: !0 });
      var i = F(e);
      (n = X(i, t[0])), i.forEach(P), this.h();
    },
    h() {
      C(
        e,
        "class",
        "xs:max-w-xs absolute z-10 w-max max-w-[280px] rounded-2xl bg-gray-800 p-4 text-sm text-white shadow-lg md:max-w-sm lg:max-w-md"
      ),
        Be(e, "top", "calc(100% + 10px)"),
        Be(e, "left", "0"),
        Be(e, "transform", "translateX(-25%)");
    },
    m(o, i) {
      $(o, e, i),
        k(e, n),
        r ||
          ((s = [
            Bn(rp.call(null, e)),
            Bn(sp.call(null, e)),
            ae(e, "clickoutside", t[3]),
          ]),
          (r = !0));
    },
    p(o, i) {
      i & 1 && ce(n, o[0]);
    },
    d(o) {
      o && P(e), (r = !1), ht(s);
    },
  };
}
function np(t) {
  let e,
    n,
    r,
    s,
    o,
    i,
    a,
    u,
    c = t[1] && t[0] && Vo(t);
  return {
    c() {
      (e = S("button")),
        (n = S("div")),
        (r = S("img")),
        (i = D()),
        c && c.c(),
        this.h();
    },
    l(l) {
      e = T(l, "BUTTON", { class: !0, type: !0 });
      var f = F(e);
      n = T(f, "DIV", { class: !0 });
      var d = F(n);
      (r = T(d, "IMG", { src: !0, alt: !0 })),
        d.forEach(P),
        (i = z(f)),
        c && c.l(f),
        f.forEach(P),
        this.h();
    },
    h() {
      Ie(r.src, (s = tp)) || C(r, "src", s),
        C(r, "alt", ""),
        C(
          n,
          "class",
          (o =
            "flex h-[23px] w-[23px] cursor-pointer items-center justify-center rounded-full border border-[#449CD8] " +
            (!t[0] && "invisible"))
        ),
        C(e, "class", "relative"),
        C(e, "type", "button");
    },
    m(l, f) {
      $(l, e, f),
        k(e, n),
        k(n, r),
        k(e, i),
        c && c.m(e, null),
        a || ((u = ae(e, "click", t[2])), (a = !0));
    },
    p(l, [f]) {
      f & 1 &&
        o !==
          (o =
            "flex h-[23px] w-[23px] cursor-pointer items-center justify-center rounded-full border border-[#449CD8] " +
            (!l[0] && "invisible")) &&
        C(n, "class", o),
        l[1] && l[0]
          ? c
            ? c.p(l, f)
            : ((c = Vo(l)), c.c(), c.m(e, null))
          : c && (c.d(1), (c = null));
    },
    i: ge,
    o: ge,
    d(l) {
      l && P(e), c && c.d(), (a = !1), u();
    },
  };
}
function rp(t) {
  const e = (n) => {
    t &&
      !t.contains(n.target) &&
      !n.defaultPrevented &&
      t.dispatchEvent(new CustomEvent("clickoutside"));
  };
  return (
    document.addEventListener("click", e, !0),
    {
      destroy() {
        document.removeEventListener("click", e, !0);
      },
    }
  );
}
function sp(t) {
  if (t) {
    const e = t.getBoundingClientRect(),
      n = window.innerWidth,
      r = e.right - n;
    if (r > 0) {
      const i = -25 - (r / e.width) * 100;
      t.style.transform = `translateX(${i - 10}%)`;
    }
  }
  return { destroy() {} };
}
function op(t, e, n) {
  let { tooltipTxt: r = "" } = e,
    s = !1;
  function o() {
    n(1, (s = !s));
  }
  function i() {
    n(1, (s = !1));
  }
  return (
    (t.$$set = (a) => {
      "tooltipTxt" in a && n(0, (r = a.tooltipTxt));
    }),
    [r, s, o, i]
  );
}
class Ya extends He {
  constructor(e) {
    super(), qe(this, e, op, np, Ge, { tooltipTxt: 0 });
  }
}
const Wo =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='white'%20width='0.63em'%20height='1em'%20viewBox='0%200%20320%20100'%3e%3cpath%20d='M182.6%2037.4c-12.5-12.5-32.8-12.5-45.3%200l-128%20128c-9.2%209.2-11.9%2022.9-6.9%2034.9S19%20220.1%2032%20220.1h256c12.9%200%2024.6-7.8%2029.6-19.8s2.2-25.7-6.9-34.9l-128-128z'%20/%3e%3c/svg%3e",
  ip = (t) => ({}),
  Ko = (t) => ({}),
  ap = (t) => ({}),
  Jo = (t) => ({});
function Zo(t) {
  let e, n, r, s, o, i, a, u, c, l, f;
  i = new Ya({ props: { tooltipTxt: t[3] } });
  const d = [lp, up, cp],
    h = [];
  function p(m, b) {
    return m[8] && (m[6] === "number" || m[6] === "integer")
      ? 0
      : typeof m[7] == "string" || typeof m[7] == "number"
      ? 1
      : 2;
  }
  return (
    (c = p(t)),
    (l = h[c] = d[c](t)),
    {
      c() {
        (e = S("label")),
          (n = S("div")),
          (r = S("p")),
          (s = Q(t[2])),
          (o = D()),
          fe(i.$$.fragment),
          (a = D()),
          (u = S("div")),
          l.c(),
          this.h();
      },
      l(m) {
        e = T(m, "LABEL", { for: !0, class: !0 });
        var b = F(e);
        n = T(b, "DIV", { class: !0 });
        var w = F(n);
        r = T(w, "P", { class: !0 });
        var v = F(r);
        (s = X(v, t[2])),
          v.forEach(P),
          (o = z(w)),
          me(i.$$.fragment, w),
          w.forEach(P),
          (a = z(b)),
          (u = T(b, "DIV", { class: !0 }));
        var x = F(u);
        l.l(x), x.forEach(P), b.forEach(P), this.h();
      },
      h() {
        C(r, "class", "line-clamp-2 text-[0.75rem]"),
          wt(r, "invisible", t[2] === "____"),
          C(n, "class", "flex items-center gap-3 text-sm"),
          C(u, "class", "ml-auto"),
          C(e, "for", t[15]),
          C(e, "class", "flex h-10 cursor-pointer items-center gap-1 text-sm");
      },
      m(m, b) {
        $(m, e, b),
          k(e, n),
          k(n, r),
          k(r, s),
          k(n, o),
          de(i, n, null),
          k(e, a),
          k(e, u),
          h[c].m(u, null),
          (f = !0);
      },
      p(m, b) {
        (!f || b[0] & 4) && ce(s, m[2]),
          (!f || b[0] & 4) && wt(r, "invisible", m[2] === "____");
        const w = {};
        b[0] & 8 && (w.tooltipTxt = m[3]), i.$set(w);
        let v = c;
        (c = p(m)),
          c === v
            ? h[c].p(m, b)
            : (ut(),
              J(h[v], 1, 1, () => {
                h[v] = null;
              }),
              lt(),
              (l = h[c]),
              l ? l.p(m, b) : ((l = h[c] = d[c](m)), l.c()),
              q(l, 1),
              l.m(u, null)),
          (!f || b[0] & 32768) && C(e, "for", m[15]);
      },
      i(m) {
        f || (q(i.$$.fragment, m), q(l), (f = !0));
      },
      o(m) {
        J(i.$$.fragment, m), J(l), (f = !1);
      },
      d(m) {
        m && P(e), he(i), h[c].d();
      },
    }
  );
}
function cp(t) {
  let e, n, r;
  var s = t[7];
  function o(i, a) {
    return {};
  }
  return (
    s && (e = Ws(s, o())),
    {
      c() {
        e && fe(e.$$.fragment), (n = xe());
      },
      l(i) {
        e && me(e.$$.fragment, i), (n = xe());
      },
      m(i, a) {
        e && de(e, i, a), $(i, n, a), (r = !0);
      },
      p(i, a) {
        if (a[0] & 128 && s !== (s = i[7])) {
          if (e) {
            ut();
            const u = e;
            J(u.$$.fragment, 1, 0, () => {
              he(u, 1);
            }),
              lt();
          }
          s
            ? ((e = Ws(s, o())),
              fe(e.$$.fragment),
              q(e.$$.fragment, 1),
              de(e, n.parentNode, n))
            : (e = null);
        }
      },
      i(i) {
        r || (e && q(e.$$.fragment, i), (r = !0));
      },
      o(i) {
        e && J(e.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && P(n), e && he(e, i);
      },
    }
  );
}
function up(t) {
  let e;
  return {
    c() {
      e = Q(t[7]);
    },
    l(n) {
      e = X(n, t[7]);
    },
    m(n, r) {
      $(n, e, r);
    },
    p(n, r) {
      r[0] & 128 && ce(e, n[7]);
    },
    i: ge,
    o: ge,
    d(n) {
      n && P(e);
    },
  };
}
function lp(t) {
  let e, n, r, s, o;
  return {
    c() {
      (e = S("button")), (n = Q("Max: ")), (r = Q(t[8]));
    },
    l(i) {
      e = T(i, "BUTTON", {});
      var a = F(e);
      (n = X(a, "Max: ")), (r = X(a, t[8])), a.forEach(P);
    },
    m(i, a) {
      $(i, e, a),
        k(e, n),
        k(e, r),
        s || ((o = ae(e, "click", t[17])), (s = !0));
    },
    p(i, a) {
      a[0] & 256 && ce(r, i[8]);
    },
    i: ge,
    o: ge,
    d(i) {
      i && P(e), (s = !1), o();
    },
  };
}
function fp(t) {
  let e, n, r;
  return {
    c() {
      (e = S("input")), this.h();
    },
    l(s) {
      (e = T(s, "INPUT", {
        name: !0,
        id: !0,
        class: !0,
        placeholder: !0,
        type: !0,
      })),
        this.h();
    },
    h() {
      C(e, "name", t[1]),
        C(e, "id", t[15]),
        C(e, "class", "flex-grow bg-transparent outline-none"),
        C(e, "placeholder", t[5]),
        (e.required = t[10]),
        C(e, "type", "text");
    },
    m(s, o) {
      $(s, e, o),
        vt(e, t[0]),
        t[31](e),
        n || ((r = [ae(e, "input", t[30]), ae(e, "input", t[16])]), (n = !0));
    },
    p(s, o) {
      o[0] & 2 && C(e, "name", s[1]),
        o[0] & 32768 && C(e, "id", s[15]),
        o[0] & 32 && C(e, "placeholder", s[5]),
        o[0] & 1024 && (e.required = s[10]),
        o[0] & 1 && e.value !== s[0] && vt(e, s[0]);
    },
    d(s) {
      s && P(e), t[31](null), (n = !1), ht(r);
    },
  };
}
function dp(t) {
  let e,
    n,
    r,
    s,
    o,
    i = `<img src="${Wo}" alt="increment"/>`,
    a,
    u,
    c = `<img src="${Wo}" alt="decrement" class="rotate-[180deg]"/>`,
    l,
    f;
  return {
    c() {
      (e = S("input")),
        (r = D()),
        (s = S("div")),
        (o = S("button")),
        (o.innerHTML = i),
        (a = D()),
        (u = S("button")),
        (u.innerHTML = c),
        this.h();
    },
    l(d) {
      (e = T(d, "INPUT", {
        name: !0,
        id: !0,
        class: !0,
        placeholder: !0,
        type: !0,
        step: !0,
      })),
        (r = z(d)),
        (s = T(d, "DIV", { class: !0 }));
      var h = F(s);
      (o = T(h, "BUTTON", { type: !0, "data-svelte-h": !0 })),
        Se(o) !== "svelte-1671f4o" && (o.innerHTML = i),
        (a = z(h)),
        (u = T(h, "BUTTON", { type: !0, "data-svelte-h": !0 })),
        Se(u) !== "svelte-1h88o8q" && (u.innerHTML = c),
        h.forEach(P),
        this.h();
    },
    h() {
      C(e, "name", t[1]),
        C(e, "id", t[15]),
        C(
          e,
          "class",
          "w-[1px] flex-grow bg-transparent outline-none svelte-1v07vpz"
        ),
        C(e, "placeholder", t[5]),
        (e.required = t[10]),
        C(e, "type", "number"),
        C(e, "step", (n = t[6] === "integer" ? 1 : "0.000001")),
        C(o, "type", "button"),
        C(u, "type", "button"),
        C(
          s,
          "class",
          "mr-1 flex flex-col items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        );
    },
    m(d, h) {
      $(d, e, h),
        vt(e, t[0]),
        t[29](e),
        $(d, r, h),
        $(d, s, h),
        k(s, o),
        k(s, a),
        k(s, u),
        l ||
          ((f = [
            ae(e, "input", t[28]),
            ae(e, "input", t[16]),
            ae(o, "click", t[18]),
            ae(u, "click", t[19]),
          ]),
          (l = !0));
    },
    p(d, h) {
      h[0] & 2 && C(e, "name", d[1]),
        h[0] & 32768 && C(e, "id", d[15]),
        h[0] & 32 && C(e, "placeholder", d[5]),
        h[0] & 1024 && (e.required = d[10]),
        h[0] & 64 &&
          n !== (n = d[6] === "integer" ? 1 : "0.000001") &&
          C(e, "step", n),
        h[0] & 1 && di(e.value) !== d[0] && vt(e, d[0]);
    },
    d(d) {
      d && (P(e), P(r), P(s)), t[29](null), (l = !1), ht(f);
    },
  };
}
function hp(t) {
  let e, n, r, s;
  return {
    c() {
      (e = S("input")), this.h();
    },
    l(o) {
      (e = T(o, "INPUT", {
        name: !0,
        id: !0,
        class: !0,
        placeholder: !0,
        type: !0,
      })),
        this.h();
    },
    h() {
      C(e, "name", t[1]),
        C(e, "id", t[15]),
        C(
          e,
          "class",
          "flex-grow bg-transparent outline-none placeholder:font-normal placeholder:text-white/40"
        ),
        C(e, "placeholder", (n = t[5] ? t[5] : "https://example.com")),
        (e.required = t[10]),
        C(e, "type", "url");
    },
    m(o, i) {
      $(o, e, i),
        vt(e, t[0]),
        t[27](e),
        r ||
          ((s = [
            ae(e, "input", t[26]),
            ae(e, "change", t[16]),
            ae(e, "mouseenter", t[22]),
            ae(e, "mouseleave", t[23]),
            ae(e, "focus", t[24]),
            ae(e, "blur", t[25]),
          ]),
          (r = !0));
    },
    p(o, i) {
      i[0] & 2 && C(e, "name", o[1]),
        i[0] & 32768 && C(e, "id", o[15]),
        i[0] & 32 &&
          n !== (n = o[5] ? o[5] : "https://example.com") &&
          C(e, "placeholder", n),
        i[0] & 1024 && (e.required = o[10]),
        i[0] & 1 && e.value !== o[0] && vt(e, o[0]);
    },
    d(o) {
      o && P(e), t[27](null), (r = !1), ht(s);
    },
  };
}
function Qo(t) {
  let e;
  return {
    c() {
      (e = S("div")), this.h();
    },
    l(n) {
      (e = T(n, "DIV", { class: !0 })), F(e).forEach(P), this.h();
    },
    h() {
      C(
        e,
        "class",
        "slider absolute bottom-0 left-0 h-1 w-full svelte-1v07vpz"
      );
    },
    m(n, r) {
      $(n, e, r);
    },
    d(n) {
      n && P(e);
    },
  };
}
function pp(t) {
  let e,
    n,
    r,
    s,
    o,
    i,
    a,
    u,
    c,
    l,
    f,
    d = !t[11] && Zo(t);
  const h = t[21].startAdornment,
    p = Rt(h, t, t[20], Jo);
  function m(g, y) {
    return g[9] === "uri"
      ? hp
      : g[6] === "integer" || g[6] === "number" || g[6] === "float"
      ? dp
      : fp;
  }
  let b = m(t),
    w = b(t),
    v = t[4] && Qo();
  const x = t[21].endAdornment,
    I = Rt(x, t, t[20], Ko);
  return {
    c() {
      (e = S("div")),
        d && d.c(),
        (n = D()),
        (r = S("div")),
        p && p.c(),
        (s = D()),
        w.c(),
        (o = D()),
        v && v.c(),
        (i = D()),
        I && I.c(),
        (a = D()),
        this.h();
    },
    l(g) {
      e = T(g, "DIV", { class: !0 });
      var y = F(e);
      d && d.l(y),
        (n = z(y)),
        (r = T(y, "DIV", { tabindex: !0, role: !0, class: !0, style: !0 }));
      var _ = F(r);
      p && p.l(_),
        (s = z(_)),
        w.l(_),
        (o = z(_)),
        v && v.l(_),
        (i = z(_)),
        I && I.l(_),
        _.forEach(P),
        (a = z(y)),
        y.forEach(P),
        this.h();
    },
    h() {
      C(r, "tabindex", 1),
        C(r, "role", "button"),
        C(
          r,
          "class",
          "input group relative flex cursor-text items-center overflow-hidden rounded-[0.25rem] p-2 text-sm  svelte-1v07vpz"
        ),
        Be(r, "height", t[12]),
        C(e, "class", (u = Vs(t[13]) + " svelte-1v07vpz"));
    },
    m(g, y) {
      $(g, e, y),
        d && d.m(e, null),
        k(e, n),
        k(e, r),
        p && p.m(r, null),
        k(r, s),
        w.m(r, null),
        k(r, o),
        v && v.m(r, null),
        k(r, i),
        I && I.m(r, null),
        k(e, a),
        (c = !0),
        l || ((f = [ae(r, "keydown", t[32]), ae(r, "click", t[33])]), (l = !0));
    },
    p(g, y) {
      g[11]
        ? d &&
          (ut(),
          J(d, 1, 1, () => {
            d = null;
          }),
          lt())
        : d
        ? (d.p(g, y), y[0] & 2048 && q(d, 1))
        : ((d = Zo(g)), d.c(), q(d, 1), d.m(e, n)),
        p &&
          p.p &&
          (!c || y[0] & 1048576) &&
          Dt(p, h, g, g[20], c ? Gt(h, g[20], y, ap) : zt(g[20]), Jo),
        b === (b = m(g)) && w
          ? w.p(g, y)
          : (w.d(1), (w = b(g)), w && (w.c(), w.m(r, o))),
        g[4] ? v || ((v = Qo()), v.c(), v.m(r, i)) : v && (v.d(1), (v = null)),
        I &&
          I.p &&
          (!c || y[0] & 1048576) &&
          Dt(I, x, g, g[20], c ? Gt(x, g[20], y, ip) : zt(g[20]), Ko),
        (!c || y[0] & 4096) && Be(r, "height", g[12]),
        (!c || (y[0] & 8192 && u !== (u = Vs(g[13]) + " svelte-1v07vpz"))) &&
          C(e, "class", u);
    },
    i(g) {
      c || (q(d), q(p, g), q(I, g), (c = !0));
    },
    o(g) {
      J(d), J(p, g), J(I, g), (c = !1);
    },
    d(g) {
      g && P(e),
        d && d.d(),
        p && p.d(g),
        w.d(),
        v && v.d(),
        I && I.d(g),
        (l = !1),
        ht(f);
    },
  };
}
let Ar = !0;
function mp(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e,
    { name: o = "" } = e,
    { label: i = "____" } = e,
    { tooltipTxt: a = "" } = e,
    { withSlider: u = !1 } = e,
    { value: c } = e,
    { placeholder: l = "" } = e,
    { type: f = "text" } = e,
    { labelEnd: d = null } = e,
    { maxVal: h = "" } = e,
    { format: p = "" } = e,
    { required: m = !1 } = e,
    { withoutLabel: b = !1 } = e,
    { height: w = "2rem" } = e,
    { className: v = "" } = e,
    x = null,
    I;
  const g = qn();
  as(() => {
    n(15, (I = crypto.randomUUID()));
  });
  const y = (N) => {
      g("change", { value: c, isValid: Ar });
    },
    _ = () => g("maxClick"),
    M = () => {
      f === "integer"
        ? n(0, (c = Number(c || 0) + 1))
        : n(0, (c = parseFloat((Number(c || 0) + 1e-6).toFixed(6)))),
        g("change", { value: c, isValid: Ar });
    },
    E = () => {
      f === "integer"
        ? n(0, (c = Number(c || 0) - 1))
        : n(0, (c = parseFloat((Number(c || 0) - 1e-6).toFixed(6)))),
        g("change", { value: c, isValid: Ar });
    };
  function U(N) {
    jt.call(this, t, N);
  }
  function H(N) {
    jt.call(this, t, N);
  }
  function V(N) {
    jt.call(this, t, N);
  }
  function L(N) {
    jt.call(this, t, N);
  }
  function j() {
    (c = this.value), n(0, c);
  }
  function G(N) {
    et[N ? "unshift" : "push"](() => {
      (x = N), n(14, x);
    });
  }
  function K() {
    (c = di(this.value)), n(0, c);
  }
  function O(N) {
    et[N ? "unshift" : "push"](() => {
      (x = N), n(14, x);
    });
  }
  function Y() {
    (c = this.value), n(0, c);
  }
  function se(N) {
    et[N ? "unshift" : "push"](() => {
      (x = N), n(14, x);
    });
  }
  const re = (N) => (N.key === "13" ? x && x.focus() : null),
    ve = () => x && x.focus();
  return (
    (t.$$set = (N) => {
      "name" in N && n(1, (o = N.name)),
        "label" in N && n(2, (i = N.label)),
        "tooltipTxt" in N && n(3, (a = N.tooltipTxt)),
        "withSlider" in N && n(4, (u = N.withSlider)),
        "value" in N && n(0, (c = N.value)),
        "placeholder" in N && n(5, (l = N.placeholder)),
        "type" in N && n(6, (f = N.type)),
        "labelEnd" in N && n(7, (d = N.labelEnd)),
        "maxVal" in N && n(8, (h = N.maxVal)),
        "format" in N && n(9, (p = N.format)),
        "required" in N && n(10, (m = N.required)),
        "withoutLabel" in N && n(11, (b = N.withoutLabel)),
        "height" in N && n(12, (w = N.height)),
        "className" in N && n(13, (v = N.className)),
        "$$scope" in N && n(20, (s = N.$$scope));
    }),
    [
      c,
      o,
      i,
      a,
      u,
      l,
      f,
      d,
      h,
      p,
      m,
      b,
      w,
      v,
      x,
      I,
      y,
      _,
      M,
      E,
      s,
      r,
      U,
      H,
      V,
      L,
      j,
      G,
      K,
      O,
      Y,
      se,
      re,
      ve,
    ]
  );
}
class bp extends He {
  constructor(e) {
    super(),
      qe(
        this,
        e,
        mp,
        pp,
        Ge,
        {
          name: 1,
          label: 2,
          tooltipTxt: 3,
          withSlider: 4,
          value: 0,
          placeholder: 5,
          type: 6,
          labelEnd: 7,
          maxVal: 8,
          format: 9,
          required: 10,
          withoutLabel: 11,
          height: 12,
          className: 13,
        },
        null,
        [-1, -1]
      );
  }
}
const gp = (t) => ({}),
  Xo = (t) => ({});
function yp(t) {
  let e,
    n,
    r = (t[14] || t[4]) + "",
    s,
    o = t[6] && Yo(t);
  return {
    c() {
      o && o.c(), (e = D()), (n = new Gn(!1)), (s = xe()), this.h();
    },
    l(i) {
      o && o.l(i), (e = z(i)), (n = Hn(i, !1)), (s = xe()), this.h();
    },
    h() {
      n.a = s;
    },
    m(i, a) {
      o && o.m(i, a), $(i, e, a), n.m(r, i, a), $(i, s, a);
    },
    p(i, a) {
      i[6]
        ? o
          ? o.p(i, a)
          : ((o = Yo(i)), o.c(), o.m(e.parentNode, e))
        : o && (o.d(1), (o = null)),
        a & 16400 && r !== (r = (i[14] || i[4]) + "") && n.p(r);
    },
    d(i) {
      i && (P(e), P(s), n.d()), o && o.d(i);
    },
  };
}
function wp(t) {
  let e,
    n,
    r,
    s,
    o,
    i,
    a,
    u = t[6] && ei(t);
  return {
    c() {
      u && u.c(),
        (e = D()),
        (n = S("span")),
        (r = S("span")),
        (s = Q(t[4])),
        (o = D()),
        (i = S("span")),
        (a = Q(t[14])),
        this.h();
    },
    l(c) {
      u && u.l(c), (e = z(c)), (n = T(c, "SPAN", {}));
      var l = F(n);
      r = T(l, "SPAN", { class: !0 });
      var f = F(r);
      (s = X(f, t[4])),
        f.forEach(P),
        (o = z(l)),
        (i = T(l, "SPAN", { class: !0 }));
      var d = F(i);
      (a = X(d, t[14])), d.forEach(P), l.forEach(P), this.h();
    },
    h() {
      C(r, "class", "font-normal text-[#B7C3D4]"),
        C(i, "class", "ml-1 text-white");
    },
    m(c, l) {
      u && u.m(c, l),
        $(c, e, l),
        $(c, n, l),
        k(n, r),
        k(r, s),
        k(n, o),
        k(n, i),
        k(i, a);
    },
    p(c, l) {
      c[6]
        ? u
          ? u.p(c, l)
          : ((u = ei(c)), u.c(), u.m(e.parentNode, e))
        : u && (u.d(1), (u = null)),
        l & 16 && ce(s, c[4]),
        l & 16384 && ce(a, c[14]);
    },
    d(c) {
      c && (P(e), P(n)), u && u.d(c);
    },
  };
}
function vp(t) {
  let e, n, r, s;
  function o(u, c) {
    return u[7] ? xp : _p;
  }
  let i = o(t),
    a = i(t);
  return {
    c() {
      (e = S("div")), (n = S("img")), (s = D()), a.c(), this.h();
    },
    l(u) {
      e = T(u, "DIV", { class: !0 });
      var c = F(e);
      (n = T(c, "IMG", { src: !0, alt: !0, class: !0 })),
        (s = z(c)),
        a.l(c),
        c.forEach(P),
        this.h();
    },
    h() {
      Ie(n.src, (r = t[6])) || C(n, "src", r),
        C(n, "alt", ""),
        C(n, "class", "h-5 w-5 rounded-full"),
        C(e, "class", "flex items-center gap-2");
    },
    m(u, c) {
      $(u, e, c), k(e, n), k(e, s), a.m(e, null);
    },
    p(u, c) {
      c & 64 && !Ie(n.src, (r = u[6])) && C(n, "src", r),
        i === (i = o(u)) && a
          ? a.p(u, c)
          : (a.d(1), (a = i(u)), a && (a.c(), a.m(e, null)));
    },
    d(u) {
      u && P(e), a.d();
    },
  };
}
function Yo(t) {
  let e, n;
  return {
    c() {
      (e = S("img")), this.h();
    },
    l(r) {
      (e = T(r, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      Ie(e.src, (n = t[6])) || C(e, "src", n),
        C(e, "alt", ""),
        C(e, "class", "h-5 w-5 rounded-full");
    },
    m(r, s) {
      $(r, e, s);
    },
    p(r, s) {
      s & 64 && !Ie(e.src, (n = r[6])) && C(e, "src", n);
    },
    d(r) {
      r && P(e);
    },
  };
}
function ei(t) {
  let e, n;
  return {
    c() {
      (e = S("img")), this.h();
    },
    l(r) {
      (e = T(r, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      Ie(e.src, (n = t[6])) || C(e, "src", n),
        C(e, "alt", ""),
        C(e, "class", "h-5 w-5 rounded-full");
    },
    m(r, s) {
      $(r, e, s);
    },
    p(r, s) {
      s & 64 && !Ie(e.src, (n = r[6])) && C(e, "src", n);
    },
    d(r) {
      r && P(e);
    },
  };
}
function _p(t) {
  let e,
    n = (t[14] || t[4]) + "",
    r;
  return {
    c() {
      (e = new Gn(!1)), (r = xe()), this.h();
    },
    l(s) {
      (e = Hn(s, !1)), (r = xe()), this.h();
    },
    h() {
      e.a = r;
    },
    m(s, o) {
      e.m(n, s, o), $(s, r, o);
    },
    p(s, o) {
      o & 16400 && n !== (n = (s[14] || s[4]) + "") && e.p(n);
    },
    d(s) {
      s && (P(r), e.d());
    },
  };
}
function xp(t) {
  let e, n, r, s, o;
  return {
    c() {
      (e = S("span")),
        (n = Q(t[4])),
        (r = D()),
        (s = S("span")),
        (o = Q(t[14])),
        this.h();
    },
    l(i) {
      e = T(i, "SPAN", { class: !0 });
      var a = F(e);
      (n = X(a, t[4])),
        a.forEach(P),
        (r = z(i)),
        (s = T(i, "SPAN", { class: !0 }));
      var u = F(s);
      (o = X(u, t[14])), u.forEach(P), this.h();
    },
    h() {
      C(e, "class", "font-normal text-[#B7C3D4]"),
        C(s, "class", "ml-1 text-white");
    },
    m(i, a) {
      $(i, e, a), k(e, n), $(i, r, a), $(i, s, a), k(s, o);
    },
    p(i, a) {
      a & 16 && ce(n, i[4]), a & 16384 && ce(o, i[14]);
    },
    d(i) {
      i && (P(e), P(r), P(s));
    },
  };
}
function ti(t) {
  let e, n, r, s, o;
  const i = t[20].default,
    a = Rt(i, t, t[19], null);
  return {
    c() {
      (e = S("div")), a && a.c(), this.h();
    },
    l(u) {
      e = T(u, "DIV", { class: !0, style: !0 });
      var c = F(e);
      a && a.l(c), c.forEach(P), this.h();
    },
    h() {
      C(
        e,
        "class",
        "absolute z-50 max-h-60 w-full overflow-y-auto rounded-[0.625rem] bg-[#1E2530] shadow-lg outline outline-1 outline-white"
      ),
        C(
          e,
          "style",
          (n = t[12]
            ? `bottom: ${t[13]}px; border-radius: 0.25rem 0.25rem 0 0; border-bottom: none;`
            : "top: 100%; border-radius:  0 0 0.25rem 0.25rem; border-top: none;")
        );
    },
    m(u, c) {
      $(u, e, c),
        a && a.m(e, null),
        (r = !0),
        s || ((o = Bn(t[15].call(null, e))), (s = !0));
    },
    p(u, c) {
      a &&
        a.p &&
        (!r || c & 524288) &&
        Dt(a, i, u, u[19], r ? Gt(i, u[19], c, null) : zt(u[19]), null),
        (!r ||
          (c & 12288 &&
            n !==
              (n = u[12]
                ? `bottom: ${u[13]}px; border-radius: 0.25rem 0.25rem 0 0; border-bottom: none;`
                : "top: 100%; border-radius:  0 0 0.25rem 0.25rem; border-top: none;"))) &&
          C(e, "style", n);
    },
    i(u) {
      r || (q(a, u), (r = !0));
    },
    o(u) {
      J(a, u), (r = !1);
    },
    d(u) {
      u && P(e), a && a.d(u), (s = !1), o();
    },
  };
}
function Ip(t) {
  let e, n, r, s, o, i, a, u, c, l, f, d, h, p, m, b, w, v, x, I, g, y, _;
  const M = t[20].options,
    E = Rt(M, t, t[19], Xo);
  f = new Ya({ props: { tooltipTxt: t[3] } });
  function U(j, G) {
    return j[6] && !j[11] ? vp : j[7] ? wp : yp;
  }
  let H = U(t),
    V = H(t);
  w = new lr({
    props: { icon: t[11] ? "fa6-solid:caret-up" : "fa6-solid:caret-down" },
  });
  let L = t[11] && ti(t);
  return {
    c() {
      (e = S("div")),
        (n = S("select")),
        E && E.c(),
        (s = D()),
        (o = S("div")),
        (i = S("div")),
        (a = S("p")),
        (u = Q(t[2])),
        (c = D()),
        (l = S("button")),
        fe(f.$$.fragment),
        (d = D()),
        (h = S("div")),
        (p = S("span")),
        V.c(),
        (b = D()),
        fe(w.$$.fragment),
        (x = D()),
        L && L.c(),
        this.h();
    },
    l(j) {
      e = T(j, "DIV", { class: !0 });
      var G = F(e);
      n = T(G, "SELECT", { name: !0, class: !0, "aria-hidden": !0 });
      var K = F(n);
      E && E.l(K),
        K.forEach(P),
        (s = z(G)),
        (o = T(G, "DIV", { class: !0, role: !0, tabindex: !0 }));
      var O = F(o);
      i = T(O, "DIV", { class: !0 });
      var Y = F(i);
      a = T(Y, "P", { class: !0 });
      var se = F(a);
      (u = X(se, t[2])),
        se.forEach(P),
        (c = z(Y)),
        (l = T(Y, "BUTTON", { class: !0, type: !0 }));
      var re = F(l);
      me(f.$$.fragment, re),
        re.forEach(P),
        Y.forEach(P),
        (d = z(O)),
        (h = T(O, "DIV", { class: !0, style: !0 }));
      var ve = F(h);
      p = T(ve, "SPAN", { class: !0 });
      var N = F(p);
      V.l(N),
        N.forEach(P),
        (b = z(ve)),
        me(w.$$.fragment, ve),
        ve.forEach(P),
        O.forEach(P),
        (x = z(G)),
        L && L.l(G),
        G.forEach(P),
        this.h();
    },
    h() {
      C(n, "name", t[1]),
        (n.required = t[8]),
        C(n, "class", "pointer-events-none absolute opacity-0"),
        C(n, "aria-hidden", "true"),
        C(a, "class", "line-clamp-2 text-[0.75rem]"),
        wt(a, "invisible", !t[2]),
        C(l, "class", "flex items-center"),
        C(l, "type", "button"),
        C(i, "class", "flex h-10 items-center gap-3 text-sm"),
        C(
          p,
          "class",
          (m = xt("flex gap-2", t[14] ? "text-white" : "text-[#B7C3D4]"))
        ),
        C(
          h,
          "class",
          "relative flex h-full min-h-[2rem] items-center justify-between overflow-hidden rounded-[0.25rem] bg-[#021E31] px-2 text-sm outline outline-1 outline-white"
        ),
        C(
          h,
          "style",
          (v =
            t[11] &&
            (t[12]
              ? "border-radius: 0 0 0.25rem 0.25rem;"
              : "border-radius: 0.25rem 0.25rem 0 0;"))
        ),
        C(o, "class", "relative cursor-pointer"),
        C(o, "role", "button"),
        C(o, "tabindex", "0"),
        C(e, "class", (I = "relative " + (t[5] ? "w-full" : "")));
    },
    m(j, G) {
      $(j, e, G),
        k(e, n),
        E && E.m(n, null),
        Ks(n, typeof t[0] == "object" ? t[0].value : t[0]),
        k(e, s),
        k(e, o),
        k(o, i),
        k(i, a),
        k(a, u),
        k(i, c),
        k(i, l),
        de(f, l, null),
        k(o, d),
        k(o, h),
        k(h, p),
        V.m(p, null),
        k(h, b),
        de(w, h, null),
        t[22](h),
        k(e, x),
        L && L.m(e, null),
        t[26](e),
        (g = !0),
        y ||
          ((_ = [
            ae(l, "click", sc(t[21])),
            ae(o, "click", t[23]),
            ae(o, "keydown", t[24]),
            Bn(Pp.call(null, e)),
            ae(e, "clickoutside", t[25]),
          ]),
          (y = !0));
    },
    p(j, [G]) {
      E &&
        E.p &&
        (!g || G & 524288) &&
        Dt(E, M, j, j[19], g ? Gt(M, j[19], G, gp) : zt(j[19]), Xo),
        (!g || G & 2) && C(n, "name", j[1]),
        (!g || G & 256) && (n.required = j[8]),
        (!g ||
          (G & 1 && r !== (r = typeof j[0] == "object" ? j[0].value : j[0]))) &&
          Ks(n, typeof j[0] == "object" ? j[0].value : j[0]),
        (!g || G & 4) && ce(u, j[2]),
        (!g || G & 4) && wt(a, "invisible", !j[2]);
      const K = {};
      G & 8 && (K.tooltipTxt = j[3]),
        f.$set(K),
        H === (H = U(j)) && V
          ? V.p(j, G)
          : (V.d(1), (V = H(j)), V && (V.c(), V.m(p, null))),
        (!g ||
          (G & 16384 &&
            m !==
              (m = xt(
                "flex gap-2",
                j[14] ? "text-white" : "text-[#B7C3D4]"
              )))) &&
          C(p, "class", m);
      const O = {};
      G & 2048 &&
        (O.icon = j[11] ? "fa6-solid:caret-up" : "fa6-solid:caret-down"),
        w.$set(O),
        (!g ||
          (G & 6144 &&
            v !==
              (v =
                j[11] &&
                (j[12]
                  ? "border-radius: 0 0 0.25rem 0.25rem;"
                  : "border-radius: 0.25rem 0.25rem 0 0;")))) &&
          C(h, "style", v),
        j[11]
          ? L
            ? (L.p(j, G), G & 2048 && q(L, 1))
            : ((L = ti(j)), L.c(), q(L, 1), L.m(e, null))
          : L &&
            (ut(),
            J(L, 1, 1, () => {
              L = null;
            }),
            lt()),
        (!g || (G & 32 && I !== (I = "relative " + (j[5] ? "w-full" : "")))) &&
          C(e, "class", I);
    },
    i(j) {
      g || (q(E, j), q(f.$$.fragment, j), q(w.$$.fragment, j), q(L), (g = !0));
    },
    o(j) {
      J(E, j), J(f.$$.fragment, j), J(w.$$.fragment, j), J(L), (g = !1);
    },
    d(j) {
      j && P(e),
        E && E.d(j),
        he(f),
        V.d(),
        he(w),
        t[22](null),
        L && L.d(),
        t[26](null),
        (y = !1),
        ht(_);
    },
  };
}
function Cp(t) {
  return typeof t == "object" ? t.label : t;
}
function Pp(t) {
  const e = (n) => {
    t &&
      !t.contains(n.target) &&
      !n.defaultPrevented &&
      t.dispatchEvent(new CustomEvent("clickoutside"));
  };
  return (
    document.addEventListener("click", e, !0),
    {
      destroy() {
        document.removeEventListener("click", e, !0);
      },
    }
  );
}
function kp(t, e, n) {
  let r,
    s,
    { $$slots: o = {}, $$scope: i } = e,
    { name: a = "" } = e,
    { label: u = null } = e,
    { tooltipTxt: c = "" } = e,
    { placeholder: l = "Select value" } = e,
    { value: f } = e,
    { fullWidth: d = !1 } = e,
    { selectedIcon: h = null } = e,
    { showValueWithPlaceholder: p = !1 } = e,
    { required: m = !1 } = e,
    b = !1,
    w,
    v = !1,
    x,
    I;
  function g(O) {
    async function Y() {
      if ((await oc(), O && w)) {
        const se = w.getBoundingClientRect(),
          re = window.innerHeight - se.bottom,
          ve = se.top,
          N = O.offsetHeight;
        n(12, (v = re < N && ve > re));
      }
    }
    return Y(), { update: Y };
  }
  const y = qn(),
    _ = _t("");
  Ye(t, _, (O) => n(14, (s = O))), fr("select:selectedText", _);
  const M = _t(f);
  Ye(t, M, (O) => n(18, (r = O))), fr("select:value", M);
  function E() {
    n(11, (b = !1));
  }
  fr("select:closeDropdown", E);
  function U(O) {
    $t(_, (s = Cp(O)), s);
  }
  as(() => {
    f && ($t(M, (r = typeof f == "object" ? f.value : f), r), U(f));
  }),
    M.subscribe((O) => {
      O !== f && (n(0, (f = O)), U(O), y("change", { value: f }));
    });
  function H(O) {
    jt.call(this, t, O);
  }
  function V(O) {
    et[O ? "unshift" : "push"](() => {
      (I = O), n(10, I);
    });
  }
  const L = () => n(11, (b = !b)),
    j = (O) => (O.key === "Enter" ? n(11, (b = !b)) : null),
    G = () => n(11, (b = !1));
  function K(O) {
    et[O ? "unshift" : "push"](() => {
      (w = O), n(9, w), n(0, f);
    });
  }
  return (
    (t.$$set = (O) => {
      "name" in O && n(1, (a = O.name)),
        "label" in O && n(2, (u = O.label)),
        "tooltipTxt" in O && n(3, (c = O.tooltipTxt)),
        "placeholder" in O && n(4, (l = O.placeholder)),
        "value" in O && n(0, (f = O.value)),
        "fullWidth" in O && n(5, (d = O.fullWidth)),
        "selectedIcon" in O && n(6, (h = O.selectedIcon)),
        "showValueWithPlaceholder" in O &&
          n(7, (p = O.showValueWithPlaceholder)),
        "required" in O && n(8, (m = O.required)),
        "$$scope" in O && n(19, (i = O.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 513 &&
        w &&
        f !== void 0 &&
        n(9, (w.value = typeof f == "object" ? f.value : f), w),
        t.$$.dirty & 262145 &&
          f !== r &&
          ($t(M, (r = typeof f == "object" ? f.value : f), r), U(f)),
        t.$$.dirty & 1024 && I && n(13, (x = I.offsetHeight));
    }),
    [
      f,
      a,
      u,
      c,
      l,
      d,
      h,
      p,
      m,
      w,
      I,
      b,
      v,
      x,
      s,
      g,
      _,
      M,
      r,
      i,
      o,
      H,
      V,
      L,
      j,
      G,
      K,
    ]
  );
}
class Ep extends He {
  constructor(e) {
    super(),
      qe(this, e, kp, Ip, Ge, {
        name: 1,
        label: 2,
        tooltipTxt: 3,
        placeholder: 4,
        value: 0,
        fullWidth: 5,
        selectedIcon: 6,
        showValueWithPlaceholder: 7,
        required: 8,
      });
  }
}
function Sp(t) {
  let e,
    n,
    r,
    s = t[2] && ni(t);
  return {
    c() {
      (e = S("div")), s && s.c(), (n = D()), (r = Q(t[1])), this.h();
    },
    l(o) {
      e = T(o, "DIV", { class: !0 });
      var i = F(e);
      s && s.l(i), (n = z(i)), (r = X(i, t[1])), i.forEach(P), this.h();
    },
    h() {
      C(e, "class", "flex items-center gap-2");
    },
    m(o, i) {
      $(o, e, i), s && s.m(e, null), k(e, n), k(e, r);
    },
    p(o, i) {
      o[2]
        ? s
          ? s.p(o, i)
          : ((s = ni(o)), s.c(), s.m(e, n))
        : s && (s.d(1), (s = null)),
        i & 2 && ce(r, o[1]);
    },
    d(o) {
      o && P(e), s && s.d();
    },
  };
}
function Tp(t) {
  let e,
    n,
    r = t[1].label + "",
    s,
    o = t[1].icon && ri(t);
  return {
    c() {
      (e = S("div")), o && o.c(), (n = D()), (s = Q(r)), this.h();
    },
    l(i) {
      e = T(i, "DIV", { class: !0 });
      var a = F(e);
      o && o.l(a), (n = z(a)), (s = X(a, r)), a.forEach(P), this.h();
    },
    h() {
      C(e, "class", "flex items-center gap-2");
    },
    m(i, a) {
      $(i, e, a), o && o.m(e, null), k(e, n), k(e, s);
    },
    p(i, a) {
      i[1].icon
        ? o
          ? o.p(i, a)
          : ((o = ri(i)), o.c(), o.m(e, n))
        : o && (o.d(1), (o = null)),
        a & 2 && r !== (r = i[1].label + "") && ce(s, r);
    },
    d(i) {
      i && P(e), o && o.d();
    },
  };
}
function ni(t) {
  let e, n;
  return {
    c() {
      (e = S("img")), this.h();
    },
    l(r) {
      (e = T(r, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      Ie(e.src, (n = t[2])) || C(e, "src", n),
        C(e, "alt", ""),
        C(e, "class", "h-5 w-5 rounded-full");
    },
    m(r, s) {
      $(r, e, s);
    },
    p(r, s) {
      s & 4 && !Ie(e.src, (n = r[2])) && C(e, "src", n);
    },
    d(r) {
      r && P(e);
    },
  };
}
function ri(t) {
  let e, n;
  return {
    c() {
      (e = S("img")), this.h();
    },
    l(r) {
      (e = T(r, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      Ie(e.src, (n = t[1].icon)) || C(e, "src", n),
        C(e, "alt", ""),
        C(e, "class", "h-5 w-5 rounded-full");
    },
    m(r, s) {
      $(r, e, s);
    },
    p(r, s) {
      s & 2 && !Ie(e.src, (n = r[1].icon)) && C(e, "src", n);
    },
    d(r) {
      r && P(e);
    },
  };
}
function Ap(t) {
  let e, n, r, s;
  function o(u, c) {
    return typeof u[1] == "object" ? Tp : Sp;
  }
  let i = o(t),
    a = i(t);
  return {
    c() {
      (e = S("div")), a.c(), this.h();
    },
    l(u) {
      e = T(u, "DIV", { role: !0, tabindex: !0, class: !0 });
      var c = F(e);
      a.l(c), c.forEach(P), this.h();
    },
    h() {
      C(e, "role", "button"),
        C(e, "tabindex", -1),
        C(
          e,
          "class",
          (n =
            "cursor-pointer break-words border-b border-white border-opacity-10 bg-[#021E31] px-2 py-1 " +
            (t[0]
              ? "bg-white bg-opacity-10 text-white"
              : "hover:bg-opacity-20"))
        );
    },
    m(u, c) {
      $(u, e, c),
        a.m(e, null),
        t[9](e),
        r || ((s = [ae(e, "click", t[6]), ae(e, "keydown", t[8])]), (r = !0));
    },
    p(u, [c]) {
      i === (i = o(u)) && a
        ? a.p(u, c)
        : (a.d(1), (a = i(u)), a && (a.c(), a.m(e, null))),
        c & 1 &&
          n !==
            (n =
              "cursor-pointer break-words border-b border-white border-opacity-10 bg-[#021E31] px-2 py-1 " +
              (u[0]
                ? "bg-white bg-opacity-10 text-white"
                : "hover:bg-opacity-20")) &&
          C(e, "class", n);
    },
    i: ge,
    o: ge,
    d(u) {
      u && P(e), a.d(), t[9](null), (r = !1), ht(s);
    },
  };
}
function Mp(t, e, n) {
  let r,
    s,
    { value: o } = e,
    { icon: i = void 0 } = e,
    { selected: a = !1 } = e,
    u;
  const c = dr("select:selectedText");
  Ye(t, c, (m) => n(10, (s = m)));
  const l = dr("select:value");
  Ye(t, l, (m) => n(7, (r = m)));
  const f = dr("select:closeDropdown"),
    d = () => {
      $t(l, (r = typeof o == "object" ? o.value : o), r),
        $t(c, (s = typeof o == "object" ? o.label : o), s),
        f();
    },
    h = (m) => (m.key === "Enter" ? d() : null);
  function p(m) {
    et[m ? "unshift" : "push"](() => {
      (u = m), n(3, u);
    });
  }
  return (
    (t.$$set = (m) => {
      "value" in m && n(1, (o = m.value)),
        "icon" in m && n(2, (i = m.icon)),
        "selected" in m && n(0, (a = m.selected));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 130 &&
        n(
          0,
          (a =
            o != null &&
            (typeof o == "object"
              ? o.value !== "" && r === o.value
              : o !== "" && r === o))
        );
    }),
    [a, o, i, u, c, l, d, r, h, p]
  );
}
class Bp extends He {
  constructor(e) {
    super(), qe(this, e, Mp, Ap, Ge, { value: 1, icon: 2, selected: 0 });
  }
}
function Op(t) {
  let e,
    n = JSON.stringify(t[0], null, 2) + "",
    r;
  return {
    c() {
      (e = S("pre")), (r = Q(n));
    },
    l(s) {
      e = T(s, "PRE", {});
      var o = F(e);
      (r = X(o, n)), o.forEach(P);
    },
    m(s, o) {
      $(s, e, o), k(e, r);
    },
    p(s, o) {
      o & 1 && n !== (n = JSON.stringify(s[0], null, 2) + "") && ce(r, n);
    },
    d(s) {
      s && P(e);
    },
  };
}
function jp(t) {
  let e, n;
  return {
    c() {
      (e = S("span")), (n = Q(t[0])), this.h();
    },
    l(r) {
      e = T(r, "SPAN", { class: !0 });
      var s = F(e);
      (n = X(s, t[0])), s.forEach(P), this.h();
    },
    h() {
      C(e, "class", "block sm:inline");
    },
    m(r, s) {
      $(r, e, s), k(e, n);
    },
    p(r, s) {
      s & 1 && ce(n, r[0]);
    },
    d(r) {
      r && P(e);
    },
  };
}
function Np(t) {
  let e;
  function n(o, i) {
    return typeof o[0] == "string" ? jp : Op;
  }
  let r = n(t),
    s = r(t);
  return {
    c() {
      s.c(), (e = xe());
    },
    l(o) {
      s.l(o), (e = xe());
    },
    m(o, i) {
      s.m(o, i), $(o, e, i);
    },
    p(o, i) {
      r === (r = n(o)) && s
        ? s.p(o, i)
        : (s.d(1), (s = r(o)), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(o) {
      o && P(e), s.d(o);
    },
  };
}
function $p(t) {
  let e;
  return {
    c() {
      e = Q("OK");
    },
    l(n) {
      e = X(n, "OK");
    },
    m(n, r) {
      $(n, e, r);
    },
    d(n) {
      n && P(e);
    },
  };
}
function Fp(t) {
  let e,
    n,
    r = "Error",
    s,
    o,
    i,
    a,
    u,
    c,
    l,
    f,
    d;
  return (
    (o = new Fa({
      props: {
        className:
          "text-base text-white/80 bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative",
        role: "alert",
        $$slots: { default: [Np] },
        $$scope: { ctx: t },
      },
    })),
    (c = new gt({
      props: { $$slots: { default: [$p] }, $$scope: { ctx: t } },
    })),
    c.$on("click", Sn),
    {
      c() {
        (e = S("div")),
          (n = S("h2")),
          (n.textContent = r),
          (s = D()),
          fe(o.$$.fragment),
          (i = D()),
          (a = S("div")),
          (u = D()),
          fe(c.$$.fragment),
          this.h();
      },
      l(h) {
        e = T(h, "DIV", { class: !0, style: !0 });
        var p = F(e);
        (n = T(p, "H2", { class: !0, "data-svelte-h": !0 })),
          Se(n) !== "svelte-5vclgu" && (n.textContent = r),
          (s = z(p)),
          me(o.$$.fragment, p),
          (i = z(p)),
          (a = T(p, "DIV", { class: !0 })),
          F(a).forEach(P),
          (u = z(p)),
          me(c.$$.fragment, p),
          p.forEach(P),
          this.h();
      },
      h() {
        C(n, "class", "mb-4 ml-1 text-xl font-bold text-red-500"),
          C(a, "class", "mb-7"),
          C(
            e,
            "class",
            (l =
              "py-3 transition-all duration-300 " +
              (t[1] < 1 ? "absolute inset-0" : "relative"))
          ),
          Be(e, "opacity", t[1]);
      },
      m(h, p) {
        $(h, e, p),
          k(e, n),
          k(e, s),
          de(o, e, null),
          k(e, i),
          k(e, a),
          k(e, u),
          de(c, e, null),
          (d = !0);
      },
      p(h, [p]) {
        const m = {};
        p & 5 && (m.$$scope = { dirty: p, ctx: h }), o.$set(m);
        const b = {};
        p & 4 && (b.$$scope = { dirty: p, ctx: h }),
          c.$set(b),
          (!d ||
            (p & 2 &&
              l !==
                (l =
                  "py-3 transition-all duration-300 " +
                  (h[1] < 1 ? "absolute inset-0" : "relative")))) &&
            C(e, "class", l),
          (!d || p & 2) && Be(e, "opacity", h[1]);
      },
      i(h) {
        d ||
          (q(o.$$.fragment, h), q(c.$$.fragment, h), f && f.end(1), (d = !0));
      },
      o(h) {
        J(o.$$.fragment, h),
          J(c.$$.fragment, h),
          h && (f = Vn(e, Wn, { duration: 200 })),
          (d = !1);
      },
      d(h) {
        h && P(e), he(o), he(c), h && f && f.end();
      },
    }
  );
}
function Lp(t, e, n) {
  let { message: r = "" } = e,
    { opacity: s = 1 } = e;
  return (
    (t.$$set = (o) => {
      "message" in o && n(0, (r = o.message)),
        "opacity" in o && n(1, (s = o.opacity));
    }),
    [r, s]
  );
}
class Up extends He {
  constructor(e) {
    super(), qe(this, e, Lp, Fp, Ge, { message: 0, opacity: 1 });
  }
}
const si = "" + new URL("../assets/coin.C790I-Dh.svg", import.meta.url).href;
function oi(t) {
  let e, n, r;
  return {
    c() {
      (e = S("div")), (n = Q(t[0])), this.h();
    },
    l(s) {
      e = T(s, "DIV", { class: !0 });
      var o = F(e);
      (n = X(o, t[0])), o.forEach(P), this.h();
    },
    h() {
      C(
        e,
        "class",
        (r = xt(
          "font-nippo   text-[0.875rem]",
          t[2] && "max-w-[50px] truncate",
          t[3].amount
        ))
      );
    },
    m(s, o) {
      $(s, e, o), k(e, n);
    },
    p(s, o) {
      o & 1 && ce(n, s[0]),
        o & 12 &&
          r !==
            (r = xt(
              "font-nippo   text-[0.875rem]",
              s[2] && "max-w-[50px] truncate",
              s[3].amount
            )) &&
          C(e, "class", r);
    },
    d(s) {
      s && P(e);
    },
  };
}
function Rp(t) {
  let e,
    n,
    r,
    s,
    o,
    i,
    a = t[0] && oi(t);
  return {
    c() {
      (e = S("div")),
        (n = S("div")),
        (r = S("img")),
        (i = D()),
        a && a.c(),
        this.h();
    },
    l(u) {
      e = T(u, "DIV", { class: !0 });
      var c = F(e);
      n = T(c, "DIV", { class: !0 });
      var l = F(n);
      (r = T(l, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        l.forEach(P),
        (i = z(c)),
        a && a.l(c),
        c.forEach(P),
        this.h();
    },
    h() {
      Ie(r.src, (s = t[1] && si)) || C(r, "src", s),
        C(r, "alt", "coin"),
        C(r, "class", (o = xt("h-5 w-5", t[3].coin))),
        C(r, "draggable", "false"),
        C(n, "class", "h-5 w-5"),
        C(e, "class", "flex min-w-fit items-center gap-2");
    },
    m(u, c) {
      $(u, e, c), k(e, n), k(n, r), k(e, i), a && a.m(e, null);
    },
    p(u, [c]) {
      c & 2 && !Ie(r.src, (s = u[1] && si)) && C(r, "src", s),
        c & 8 && o !== (o = xt("h-5 w-5", u[3].coin)) && C(r, "class", o),
        u[0]
          ? a
            ? a.p(u, c)
            : ((a = oi(u)), a.c(), a.m(e, null))
          : a && (a.d(1), (a = null));
    },
    i: ge,
    o: ge,
    d(u) {
      u && P(e), a && a.d();
    },
  };
}
function Dp(t, e, n) {
  let r,
    { amount: s = "" } = e,
    { variant: o = "blue" } = e,
    { withTruncate: i = !0 } = e;
  const a = {
    blue: { coin: "", amount: "text-white" },
    black: { coin: "brightness-0", amount: "text-black" },
  };
  return (
    (t.$$set = (u) => {
      "amount" in u && n(0, (s = u.amount)),
        "variant" in u && n(1, (o = u.variant)),
        "withTruncate" in u && n(2, (i = u.withTruncate));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 2 && n(3, (r = a[o]));
    }),
    [s, o, i, r]
  );
}
class ec extends He {
  constructor(e) {
    super(),
      qe(this, e, Dp, Rp, Ge, { amount: 0, variant: 1, withTruncate: 2 });
  }
}
function ii(t, e, n) {
  const r = t.slice();
  return (r[39] = e[n]), r;
}
function ai(t) {
  let e,
    n,
    r = "Your tier",
    s,
    o,
    i,
    a,
    u,
    c,
    l = t[11].name + "",
    f;
  return {
    c() {
      (e = S("a")),
        (n = S("span")),
        (n.textContent = r),
        (s = D()),
        (o = S("div")),
        (i = S("img")),
        (u = D()),
        (c = S("span")),
        (f = Q(l)),
        this.h();
    },
    l(d) {
      e = T(d, "A", { class: !0, href: !0 });
      var h = F(e);
      (n = T(h, "SPAN", { class: !0, "data-svelte-h": !0 })),
        Se(n) !== "svelte-92h0md" && (n.textContent = r),
        (s = z(h)),
        (o = T(h, "DIV", { class: !0 }));
      var p = F(o);
      (i = T(p, "IMG", { src: !0, alt: !0, class: !0 })),
        p.forEach(P),
        (u = z(h)),
        (c = T(h, "SPAN", { class: !0 }));
      var m = F(c);
      (f = X(m, l)), m.forEach(P), h.forEach(P), this.h();
    },
    h() {
      C(n, "class", "flex-1 text-right"),
        Ie(i.src, (a = `/tiers/${t[11].name}.png`)) || C(i, "src", a),
        C(i, "alt", ""),
        C(i, "class", "h-full scale-[2] object-contain"),
        C(o, "class", "relative h-10"),
        C(c, "class", "flex-1 text-left text-[#555555]"),
        C(e, "class", "flex items-center justify-center gap-10 text-[1rem]"),
        C(e, "href", "/credits");
    },
    m(d, h) {
      $(d, e, h), k(e, n), k(e, s), k(e, o), k(o, i), k(e, u), k(e, c), k(c, f);
    },
    p(d, h) {
      h[0] & 2048 &&
        !Ie(i.src, (a = `/tiers/${d[11].name}.png`)) &&
        C(i, "src", a),
        h[0] & 2048 && l !== (l = d[11].name + "") && ce(f, l);
    },
    d(d) {
      d && P(e);
    },
  };
}
function ci(t) {
  let e, n;
  return (
    (e = new Bp({
      props: {
        value: t[39].name,
        selected: t[39].name === t[4],
        icon: t[39].icon,
      },
    })),
    {
      c() {
        fe(e.$$.fragment);
      },
      l(r) {
        me(e.$$.fragment, r);
      },
      m(r, s) {
        de(e, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        s[0] & 128 && (o.value = r[39].name),
          s[0] & 144 && (o.selected = r[39].name === r[4]),
          s[0] & 128 && (o.icon = r[39].icon),
          e.$set(o);
      },
      i(r) {
        n || (q(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        J(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        he(e, r);
      },
    }
  );
}
function zp(t) {
  let e,
    n,
    r = Ys(t[7]),
    s = [];
  for (let i = 0; i < r.length; i += 1) s[i] = ci(ii(t, r, i));
  const o = (i) =>
    J(s[i], 1, 1, () => {
      s[i] = null;
    });
  return {
    c() {
      for (let i = 0; i < s.length; i += 1) s[i].c();
      e = xe();
    },
    l(i) {
      for (let a = 0; a < s.length; a += 1) s[a].l(i);
      e = xe();
    },
    m(i, a) {
      for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(i, a);
      $(i, e, a), (n = !0);
    },
    p(i, a) {
      if (a[0] & 144) {
        r = Ys(i[7]);
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = ii(i, r, u);
          s[u]
            ? (s[u].p(c, a), q(s[u], 1))
            : ((s[u] = ci(c)), s[u].c(), q(s[u], 1), s[u].m(e.parentNode, e));
        }
        for (ut(), u = r.length; u < s.length; u += 1) o(u);
        lt();
      }
    },
    i(i) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1) q(s[a]);
        n = !0;
      }
    },
    o(i) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1) J(s[a]);
      n = !1;
    },
    d(i) {
      i && P(e), ic(s, i);
    },
  };
}
function ui(t) {
  let e, n;
  return (
    (e = new Fa({
      props: {
        className:
          "bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative mt-6",
        role: "alert",
        $$slots: { default: [Gp] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        fe(e.$$.fragment);
      },
      l(r) {
        me(e.$$.fragment, r);
      },
      m(r, s) {
        de(e, r, s), (n = !0);
      },
      p(r, s) {
        const o = {};
        (s[0] & 512) | (s[1] & 2048) && (o.$$scope = { dirty: s, ctx: r }),
          e.$set(o);
      },
      i(r) {
        n || (q(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        J(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        he(e, r);
      },
    }
  );
}
function Gp(t) {
  let e,
    n = "Error:",
    r,
    s,
    o;
  return {
    c() {
      (e = S("strong")),
        (e.textContent = n),
        (r = D()),
        (s = S("span")),
        (o = new Gn(!1)),
        this.h();
    },
    l(i) {
      (e = T(i, "STRONG", { class: !0, "data-svelte-h": !0 })),
        Se(e) !== "svelte-c48zxo" && (e.textContent = n),
        (r = z(i)),
        (s = T(i, "SPAN", { class: !0 }));
      var a = F(s);
      (o = Hn(a, !1)), a.forEach(P), this.h();
    },
    h() {
      C(e, "class", "font-bold"),
        (o.a = null),
        C(s, "class", "block sm:inline");
    },
    m(i, a) {
      $(i, e, a), $(i, r, a), $(i, s, a), o.m(t[9], s);
    },
    p(i, a) {
      a[0] & 512 && o.p(i[9]);
    },
    d(i) {
      i && (P(e), P(r), P(s));
    },
  };
}
function Hp(t) {
  let e;
  return {
    c() {
      e = Q("BUY NOW");
    },
    l(n) {
      e = X(n, "BUY NOW");
    },
    m(n, r) {
      $(n, e, r);
    },
    p: ge,
    d(n) {
      n && P(e);
    },
  };
}
function qp(t) {
  let e;
  return {
    c() {
      e = Q("Insufficient balance");
    },
    l(n) {
      e = X(n, "Insufficient balance");
    },
    m(n, r) {
      $(n, e, r);
    },
    p: ge,
    d(n) {
      n && P(e);
    },
  };
}
function Vp(t) {
  let e = (t[8] || "Processing...") + "",
    n;
  return {
    c() {
      n = Q(e);
    },
    l(r) {
      n = X(r, e);
    },
    m(r, s) {
      $(r, n, s);
    },
    p(r, s) {
      s[0] & 256 && e !== (e = (r[8] || "Processing...") + "") && ce(n, e);
    },
    d(r) {
      r && P(n);
    },
  };
}
function Wp(t) {
  let e;
  function n(o, i) {
    return o[1] ? Vp : o[6] ? qp : Hp;
  }
  let r = n(t),
    s = r(t);
  return {
    c() {
      s.c(), (e = xe());
    },
    l(o) {
      s.l(o), (e = xe());
    },
    m(o, i) {
      s.m(o, i), $(o, e, i);
    },
    p(o, i) {
      r === (r = n(o)) && s
        ? s.p(o, i)
        : (s.d(1), (s = r(o)), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(o) {
      o && P(e), s.d(o);
    },
  };
}
function li(t) {
  let e;
  function n(o, i) {
    return o[10] === "expired" ? Jp : Kp;
  }
  let r = n(t),
    s = r(t);
  return {
    c() {
      (e = S("span")), s.c(), this.h();
    },
    l(o) {
      e = T(o, "SPAN", { class: !0 });
      var i = F(e);
      s.l(i), i.forEach(P), this.h();
    },
    h() {
      C(e, "class", "block text-white/60 sm:inline");
    },
    m(o, i) {
      $(o, e, i), s.m(e, null);
    },
    p(o, i) {
      r === (r = n(o)) && s
        ? s.p(o, i)
        : (s.d(1), (s = r(o)), s && (s.c(), s.m(e, null)));
    },
    d(o) {
      o && P(e), s.d();
    },
  };
}
function Kp(t) {
  let e = `${t[10]} left`,
    n;
  return {
    c() {
      n = Q(e);
    },
    l(r) {
      n = X(r, e);
    },
    m(r, s) {
      $(r, n, s);
    },
    p(r, s) {
      s[0] & 1024 && e !== (e = `${r[10]} left`) && ce(n, e);
    },
    d(r) {
      r && P(n);
    },
  };
}
function Jp(t) {
  let e;
  return {
    c() {
      e = Q("Time expired");
    },
    l(n) {
      e = X(n, "Time expired");
    },
    m(n, r) {
      $(n, e, r);
    },
    p: ge,
    d(n) {
      n && P(e);
    },
  };
}
function fi(t) {
  let e,
    n,
    r,
    s = "HOORAY",
    o,
    i,
    a = "Thank you your purchase is done! <br/> Enjoy the generation",
    u,
    c,
    l,
    f = "Current balance:",
    d,
    h,
    p,
    m,
    b,
    w,
    v,
    x;
  return (
    (h = new ec({ props: { amount: t[13], withTruncate: !1 } })),
    (m = new gt({
      props: {
        className: "mt-3",
        $$slots: { default: [Zp] },
        $$scope: { ctx: t },
      },
    })),
    m.$on("click", t[24]),
    {
      c() {
        (e = S("div")),
          (n = S("div")),
          (r = S("h2")),
          (r.textContent = s),
          (o = D()),
          (i = S("p")),
          (i.innerHTML = a),
          (u = D()),
          (c = S("div")),
          (l = S("span")),
          (l.textContent = f),
          (d = D()),
          fe(h.$$.fragment),
          (p = D()),
          fe(m.$$.fragment),
          this.h();
      },
      l(I) {
        e = T(I, "DIV", { class: !0 });
        var g = F(e);
        n = T(g, "DIV", {});
        var y = F(n);
        (r = T(y, "H2", { class: !0, "data-svelte-h": !0 })),
          Se(r) !== "svelte-pgrcqz" && (r.textContent = s),
          (o = z(y)),
          (i = T(y, "P", { class: !0, "data-svelte-h": !0 })),
          Se(i) !== "svelte-11kc591" && (i.innerHTML = a),
          (u = z(y)),
          (c = T(y, "DIV", { class: !0 }));
        var _ = F(c);
        (l = T(_, "SPAN", { "data-svelte-h": !0 })),
          Se(l) !== "svelte-3dlwjb" && (l.textContent = f),
          (d = z(_)),
          me(h.$$.fragment, _),
          _.forEach(P),
          (p = z(y)),
          me(m.$$.fragment, y),
          y.forEach(P),
          g.forEach(P),
          this.h();
      },
      h() {
        C(
          r,
          "class",
          "s:text-[3.375rem] mb-1 text-center text-[2rem] leading-[1.3em]"
        ),
          C(
            i,
            "class",
            "s:text-[1.5rem] text-center text-[0.8rem] leading-[2.25rem]"
          ),
          C(c, "class", "my-3 flex items-center justify-center gap-2"),
          C(
            e,
            "class",
            "absolute inset-0 flex w-full flex-col items-center justify-center"
          );
      },
      m(I, g) {
        $(I, e, g),
          k(e, n),
          k(n, r),
          k(n, o),
          k(n, i),
          k(n, u),
          k(n, c),
          k(c, l),
          k(c, d),
          de(h, c, null),
          k(n, p),
          de(m, n, null),
          (x = !0);
      },
      p(I, g) {
        const y = {};
        g[0] & 8192 && (y.amount = I[13]), h.$set(y);
        const _ = {};
        g[1] & 2048 && (_.$$scope = { dirty: g, ctx: I }), m.$set(_);
      },
      i(I) {
        x ||
          (q(h.$$.fragment, I),
          q(m.$$.fragment, I),
          I &&
            (b ||
              Zs(() => {
                (b = Xs(n, ac, { y: 20, duration: 600, delay: 600 })),
                  b.start();
              })),
          I &&
            Zs(() => {
              x &&
                (v && v.end(1),
                (w = Xs(e, cc, {
                  duration: 400,
                  delay: 200,
                  start: 0.8,
                  opacity: 0,
                })),
                w.start());
            }),
          (x = !0));
      },
      o(I) {
        J(h.$$.fragment, I),
          J(m.$$.fragment, I),
          w && w.invalidate(),
          I && (v = Vn(e, Wn, { duration: 200 })),
          (x = !1);
      },
      d(I) {
        I && P(e), he(h), he(m), I && v && v.end();
      },
    }
  );
}
function Zp(t) {
  let e;
  return {
    c() {
      e = Q("BUY MORE");
    },
    l(n) {
      e = X(n, "BUY MORE");
    },
    m(n, r) {
      $(n, e, r);
    },
    d(n) {
      n && P(e);
    },
  };
}
function Qp(t) {
  var Rs, Ds;
  let e,
    n,
    r,
    s,
    o,
    i = "Upgrade Credits",
    a,
    u,
    c,
    l,
    f = "Current balance:",
    d,
    h,
    p,
    m,
    b,
    w,
    v,
    x,
    I,
    g,
    y,
    _,
    M,
    E,
    U,
    H = t[16](t[3]) + "",
    V,
    L,
    j,
    G,
    K,
    O,
    Y,
    se,
    re,
    ve = "1 Credit = <strong>$0.25 USD</strong>",
    N,
    pt,
    it,
    Ee,
    B = t[11] && ai(t);
  h = new ec({ props: { amount: t[13], withTruncate: !1 } });
  function ee(R) {
    t[21](R);
  }
  let te = {
    label: "Pay with",
    placeholder: "Select Token",
    selectedIcon:
      (Ds = (Rs = t[7]) == null ? void 0 : Rs.find(t[20])) == null
        ? void 0
        : Ds.icon,
    $$slots: { default: [zp] },
    $$scope: { ctx: t },
  };
  t[4] !== void 0 && (te.value = t[4]),
    (b = new Ep({ props: te })),
    et.push(() => Qs(b, "value", ee));
  let Z = t[9] && ui(t);
  function ye(R) {
    t[22](R);
  }
  let ie = {
    label: "Credits amount",
    type: "integer",
    className: "mt-6",
    maxVal: Math.floor(t[5] || 0) || "0",
    withSlider: !0,
  };
  t[3] !== void 0 && (ie.value = t[3]),
    (I = new bp({ props: ie })),
    et.push(() => Qs(I, "value", ye)),
    I.$on("maxClick", t[23]),
    (K = new gt({
      props: {
        disabled: t[12] || t[1],
        fullWidth: !0,
        className: "mt-6",
        $$slots: { default: [Wp] },
        $$scope: { ctx: t },
      },
    })),
    K.$on("click", t[17]);
  let _e = t[10] && li(t),
    pe = t[2] && fi(t);
  return {
    c() {
      (e = S("div")),
        (n = S("div")),
        (r = S("div")),
        (s = S("header")),
        (o = S("h2")),
        (o.textContent = i),
        (a = D()),
        B && B.c(),
        (u = D()),
        (c = S("div")),
        (l = S("span")),
        (l.textContent = f),
        (d = D()),
        fe(h.$$.fragment),
        (p = D()),
        (m = S("div")),
        fe(b.$$.fragment),
        (v = D()),
        Z && Z.c(),
        (x = D()),
        fe(I.$$.fragment),
        (y = D()),
        (_ = S("div")),
        (M = Q("Amount in ")),
        (E = Q(t[4])),
        (U = Q(": ")),
        (V = Q(H)),
        (L = D()),
        (j = Q(t[4])),
        (G = D()),
        fe(K.$$.fragment),
        (O = D()),
        (Y = S("div")),
        _e && _e.c(),
        (se = D()),
        (re = S("footer")),
        (re.innerHTML = ve),
        (N = D()),
        pe && pe.c(),
        this.h();
    },
    l(R) {
      e = T(R, "DIV", { class: !0, style: !0 });
      var ne = F(e);
      n = T(ne, "DIV", { class: !0 });
      var at = F(n);
      r = T(at, "DIV", { class: !0 });
      var le = F(r);
      s = T(le, "HEADER", { class: !0 });
      var $e = F(s);
      (o = T($e, "H2", { class: !0, "data-svelte-h": !0 })),
        Se(o) !== "svelte-u8pbir" && (o.textContent = i),
        (a = z($e)),
        B && B.l($e),
        (u = z($e)),
        (c = T($e, "DIV", { class: !0 }));
      var Je = F(c);
      (l = T(Je, "SPAN", { "data-svelte-h": !0 })),
        Se(l) !== "svelte-3dlwjb" && (l.textContent = f),
        (d = z(Je)),
        me(h.$$.fragment, Je),
        Je.forEach(P),
        $e.forEach(P),
        (p = z(le)),
        (m = T(le, "DIV", { class: !0 }));
      var Tt = F(m);
      me(b.$$.fragment, Tt),
        Tt.forEach(P),
        (v = z(le)),
        Z && Z.l(le),
        (x = z(le)),
        me(I.$$.fragment, le),
        (y = z(le)),
        (_ = T(le, "DIV", { class: !0 }));
      var Fe = F(_);
      (M = X(Fe, "Amount in ")),
        (E = X(Fe, t[4])),
        (U = X(Fe, ": ")),
        (V = X(Fe, H)),
        (L = z(Fe)),
        (j = X(Fe, t[4])),
        Fe.forEach(P),
        (G = z(le)),
        me(K.$$.fragment, le),
        (O = z(le)),
        (Y = T(le, "DIV", { class: !0 }));
      var zs = F(Y);
      _e && _e.l(zs),
        zs.forEach(P),
        (se = z(le)),
        (re = T(le, "FOOTER", { class: !0, "data-svelte-h": !0 })),
        Se(re) !== "svelte-mkyxd9" && (re.innerHTML = ve),
        le.forEach(P),
        (N = z(at)),
        pe && pe.l(at),
        at.forEach(P),
        ne.forEach(P),
        this.h();
    },
    h() {
      C(o, "class", "text-center text-[1.5rem] leading-[1.3em]"),
        C(c, "class", "flex items-center justify-center gap-2"),
        C(s, "class", "flex flex-col gap-3"),
        C(m, "class", "relative z-50 mt-2"),
        C(_, "class", "mt-2 text-sm text-gray-400"),
        C(Y, "class", "flex h-5 justify-end"),
        C(re, "class", "font-avantGarde mt-2 text-center"),
        C(r, "class", "flex w-full flex-col transition-all"),
        wt(r, "opacity-0", t[2]),
        C(n, "class", "relative mx-auto max-w-sm"),
        C(
          e,
          "class",
          (pt =
            "py-3 transition-all duration-300 " +
            (t[0] < 1 ? "absolute inset-0" : "relative"))
        ),
        Be(e, "opacity", t[0]);
    },
    m(R, ne) {
      $(R, e, ne),
        k(e, n),
        k(n, r),
        k(r, s),
        k(s, o),
        k(s, a),
        B && B.m(s, null),
        k(s, u),
        k(s, c),
        k(c, l),
        k(c, d),
        de(h, c, null),
        k(r, p),
        k(r, m),
        de(b, m, null),
        k(r, v),
        Z && Z.m(r, null),
        k(r, x),
        de(I, r, null),
        k(r, y),
        k(r, _),
        k(_, M),
        k(_, E),
        k(_, U),
        k(_, V),
        k(_, L),
        k(_, j),
        k(r, G),
        de(K, r, null),
        k(r, O),
        k(r, Y),
        _e && _e.m(Y, null),
        k(r, se),
        k(r, re),
        k(n, N),
        pe && pe.m(n, null),
        (Ee = !0);
    },
    p(R, ne) {
      var Tt, Fe;
      R[11]
        ? B
          ? B.p(R, ne)
          : ((B = ai(R)), B.c(), B.m(s, u))
        : B && (B.d(1), (B = null));
      const at = {};
      ne[0] & 8192 && (at.amount = R[13]), h.$set(at);
      const le = {};
      ne[0] & 144 &&
        (le.selectedIcon =
          (Fe = (Tt = R[7]) == null ? void 0 : Tt.find(R[20])) == null
            ? void 0
            : Fe.icon),
        (ne[0] & 144) | (ne[1] & 2048) && (le.$$scope = { dirty: ne, ctx: R }),
        !w && ne[0] & 16 && ((w = !0), (le.value = R[4]), Js(() => (w = !1))),
        b.$set(le),
        R[9]
          ? Z
            ? (Z.p(R, ne), ne[0] & 512 && q(Z, 1))
            : ((Z = ui(R)), Z.c(), q(Z, 1), Z.m(r, x))
          : Z &&
            (ut(),
            J(Z, 1, 1, () => {
              Z = null;
            }),
            lt());
      const $e = {};
      ne[0] & 32 && ($e.maxVal = Math.floor(R[5] || 0) || "0"),
        !g && ne[0] & 8 && ((g = !0), ($e.value = R[3]), Js(() => (g = !1))),
        I.$set($e),
        (!Ee || ne[0] & 16) && ce(E, R[4]),
        (!Ee || ne[0] & 8) && H !== (H = R[16](R[3]) + "") && ce(V, H),
        (!Ee || ne[0] & 16) && ce(j, R[4]);
      const Je = {};
      ne[0] & 4098 && (Je.disabled = R[12] || R[1]),
        (ne[0] & 322) | (ne[1] & 2048) && (Je.$$scope = { dirty: ne, ctx: R }),
        K.$set(Je),
        R[10]
          ? _e
            ? _e.p(R, ne)
            : ((_e = li(R)), _e.c(), _e.m(Y, null))
          : _e && (_e.d(1), (_e = null)),
        (!Ee || ne[0] & 4) && wt(r, "opacity-0", R[2]),
        R[2]
          ? pe
            ? (pe.p(R, ne), ne[0] & 4 && q(pe, 1))
            : ((pe = fi(R)), pe.c(), q(pe, 1), pe.m(n, null))
          : pe &&
            (ut(),
            J(pe, 1, 1, () => {
              pe = null;
            }),
            lt()),
        (!Ee ||
          (ne[0] & 1 &&
            pt !==
              (pt =
                "py-3 transition-all duration-300 " +
                (R[0] < 1 ? "absolute inset-0" : "relative")))) &&
          C(e, "class", pt),
        (!Ee || ne[0] & 1) && Be(e, "opacity", R[0]);
    },
    i(R) {
      Ee ||
        (q(h.$$.fragment, R),
        q(b.$$.fragment, R),
        q(Z),
        q(I.$$.fragment, R),
        q(K.$$.fragment, R),
        q(pe),
        it && it.end(1),
        (Ee = !0));
    },
    o(R) {
      J(h.$$.fragment, R),
        J(b.$$.fragment, R),
        J(Z),
        J(I.$$.fragment, R),
        J(K.$$.fragment, R),
        J(pe),
        R && (it = Vn(e, Wn, { duration: 200 })),
        (Ee = !1);
    },
    d(R) {
      R && P(e),
        B && B.d(),
        he(h),
        he(b),
        Z && Z.d(),
        he(I),
        he(K),
        _e && _e.d(),
        pe && pe.d(),
        R && it && it.end();
    },
  };
}
function Xp(t, e, n) {
  let r, s, o, i, a, u, c, l;
  Ye(t, Dn, (B) => n(7, (a = B))),
    Ye(t, Pn, (B) => n(18, (u = B))),
    Ye(t, Lt, (B) => n(19, (c = B)));
  let { opacity: f = 1 } = e,
    d = !1,
    h = "",
    p = "",
    m = !1,
    b = "",
    w = "USDT",
    v = 0,
    x = "",
    I = "",
    g,
    y,
    _;
  const M = qn(),
    E = uc(Pn, (B) => Number(B.credits).toFixed(2));
  Ye(t, E, (B) => n(13, (l = B)));
  const U = async () => {
      try {
        const B = c.address;
        if (!B) throw new Error("Wallet not connected");
        const ee = [...a];
        for (const te of ee)
          if (te.name === "ETH") {
            const Z = await Co(be, { address: B, unit: "ether" });
            console.log("balance", Z),
              (te.balance = Number(Z.value) / 10 ** Z.decimals);
          } else {
            const Z = await Co(be, { address: B, token: te.address });
            console.log("balance", Z),
              (te.balance = Number(Z.value) / 10 ** Z.decimals),
              (te.decimals = Z.decimals);
          }
        console.log("updatedCurrencies", ee), Dn.set(ee);
      } catch (B) {
        console.error("Error fetching balances:", B),
          Dd(Up, { message: "Failed to fetch balances" });
      }
    },
    H = () => {
      v <= 0
        ? (clearInterval(g), n(10, (I = "expired")))
        : v === 1
        ? n(10, (I = "less than one minute"))
        : n(10, (I = `${v} minutes`)),
        v--;
    },
    V = () => {
      clearInterval(g), H(), (g = setInterval(H, 6e4));
    },
    L = async (B) => {
      try {
        const ee = await fetch("/api/user/balance/popup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ coinId: B }),
        });
        console.log("coinId", B, ee);
        const te = await ee.json();
        (v = te.time_to_pay_minutes - 1), (x = te.id), O(), V();
      } catch (ee) {
        console.error("Popup error:", ee);
      }
    },
    j = async () => {
      try {
        const B = await G();
        B !== y &&
          (Pn.updateCredits(B),
          n(2, (m = !0)),
          M("success"),
          n(1, (d = !1)),
          clearInterval(_));
      } catch (B) {
        console.error("Failed to update credits:", B),
          n(1, (d = !1)),
          clearInterval(_);
      }
    },
    G = async () => {
      try {
        const ee = await (await fetch("/api/user/balance")).text();
        return console.log(ee), ee;
      } catch (B) {
        throw (console.error("Failed to fetch credits:", B), B);
      }
    },
    K = () => {
      clearInterval(_);
      let B = 0;
      _ = setInterval(() => {
        n(1, (d = !0)),
          O(),
          B++,
          B >= 40 &&
            (n(8, (h = "Error updating credits")),
            n(
              9,
              (p = `Something went wrong in the process of topping up your credits. <br/><br/>
                    Don't worry, someone is going to assist you as fast as possible: <br/> <br/>
                    <a href="mailto:nfinityai@gmail.com">nfinityai@gmail.com</a>`)
            ),
            n(1, (d = !1)),
            clearInterval(_));
      }, 5e3);
    },
    O = async () => {
      if (!x) throw new Error("No popupId available");
      try {
        const ee = await (await fetch(`/api/user/balance/popup/${x}`)).json();
        console.log("Popup", ee),
          ee.finished_at && (j(), n(8, (h = "Updating credits...")));
      } catch (B) {
        console.error("Check popup error:", B);
      }
    },
    Y = () => {
      clearInterval(g), n(10, (I = ""));
    },
    se = (B) => {
      const ee = B * 0.25,
        te = a == null ? void 0 : a.find((Z) => Z.name === w);
      return !te || !te.price ? "0" : (ee / te.price).toFixed(te.decimals);
    },
    re = async () => {
      if ((console.log("handleTopUp"), d)) return;
      n(1, (d = !0)),
        n(8, (h = "")),
        n(9, (p = "")),
        n(2, (m = !1)),
        (y = await G());
      const B = a.find((ee) => ee.name === w);
      if (!B) {
        n(1, (d = !1)), n(9, (p = "Unsupported token"));
        return;
      }
      try {
        let ee = B.address,
          te;
        const Z = se(b);
        if (
          (w === "ETH" ? (te = Zf(Z)) : (te = Ia(Z, B.decimals)),
          !te || te <= 0n)
        )
          throw new Error("Invalid amount");
        if ((L(w), w !== "ETH"))
          try {
            n(8, (h = "Checking token allowance..."));
            const ye = await Aa(be, {
              address: ee,
              abi: B.ABI,
              functionName: "allowance",
              args: [c.address, gn],
            });
            if (
              (console.log("allowance", ye, B.balance, te, ye < te), ye < te)
            ) {
              if (ye > 0n) {
                n(8, (h = `Resetting ${B.name} allowance...`)),
                  console.log("statusMessage", h);
                const ie = await kr(be, {
                  address: ee,
                  abi: B.ABI,
                  functionName: "approve",
                  args: [gn, 0n],
                  value: 0n,
                });
                console.log("resetHash", ie), await Pr(be, { hash: ie });
              }
              n(8, (h = "Requesting approval for token spend...")),
                console.log("statusMessage", h);
              try {
                const ie = await kr(be, {
                  address: ee,
                  abi: B.ABI,
                  functionName: "approve",
                  args: [gn, te],
                  value: 0n,
                });
                console.log("approvalHash", ie),
                  n(8, (h = "Waiting for approval transaction...")),
                  console.log("statusMessage", h),
                  await Pr(be, { hash: ie }),
                  n(8, (h = "Token spend approved"));
              } catch (ie) {
                if (ie.message.includes("Execution reverted") && ee !== dc)
                  console.warn(
                    `${B.name} approval simulation failed, but transaction may still succeed. Proceeding...`
                  ),
                    n(
                      8,
                      (h = "Approval in progress (this may take a moment)...")
                    );
                else if (
                  ie.message.includes("Cannot convert undefined to a BigInt")
                )
                  console.warn(ie);
                else throw ie;
              }
            }
          } catch (ye) {
            throw (
              (console.error("Error approving token spend:", ye),
              new Error(`Token approval failed: ${ye.message}`))
            );
          }
        try {
          n(8, (h = "Initiating deposit..."));
          const ye = await kr(be, {
            address: gn,
            abi: zd,
            functionName: "deposit",
            args: [ee, te],
            value: w === "ETH" ? te : 0n,
          });
          n(8, (h = "Waiting for deposit transaction..."));
          const ie = await Pr(be, { hash: ye });
          console.log({ depositWait: ie }), n(8, (h = "Verifying...")), K();
        } catch (ye) {
          throw (
            (console.error("Error during deposit:", ye),
            n(1, (d = !1)),
            new Error(`Deposit failed: ${ye.message}`))
          );
        } finally {
          Y();
        }
      } catch (ee) {
        n(1, (d = !1)),
          console.error("Error during top up:", ee),
          n(9, (p = ee.message));
      } finally {
        Y();
      }
    },
    ve = (B) => B.name === w;
  function N(B) {
    (w = B), n(4, w);
  }
  function pt(B) {
    (b = B), n(3, b);
  }
  const it = () => {
      n(3, (b = Math.floor(i || 0)));
    },
    Ee = () => {
      n(2, (m = !1)), M("closed");
    };
  return (
    (t.$$set = (B) => {
      "opacity" in B && n(0, (f = B.opacity));
    }),
    (t.$$.update = () => {
      var B, ee, te, Z, ye;
      t.$$.dirty[0] & 524292 && (c.isConnected || !m) && U(),
        t.$$.dirty[0] & 152 &&
          n(
            6,
            (r =
              parseFloat(se(b)) >
                parseFloat(
                  ((B = a == null ? void 0 : a.find((ie) => ie.name === w)) ==
                  null
                    ? void 0
                    : B.balance) || 0
                ) ||
              !(
                (ee = a == null ? void 0 : a.find((ie) => ie.name === w)) !=
                  null && ee.balance
              ))
          ),
        t.$$.dirty[0] & 74 && n(12, (s = r || parseFloat(b) <= 0 || !b || d)),
        t.$$.dirty[0] & 262144 &&
          n(
            11,
            (o =
              ((te = u == null ? void 0 : u.user) == null ? void 0 : te.tier) ||
              null)
          ),
        t.$$.dirty[0] & 144 &&
          n(
            5,
            (i =
              (((Z = a == null ? void 0 : a.find((ie) => ie.name === w)) == null
                ? void 0
                : Z.balance) *
                ((ye = a == null ? void 0 : a.find((ie) => ie.name === w)) ==
                null
                  ? void 0
                  : ye.price)) /
              0.25)
          ),
        t.$$.dirty[0] & 32 && console.log("maxValue", i);
    }),
    [
      f,
      d,
      m,
      b,
      w,
      i,
      r,
      a,
      h,
      p,
      I,
      o,
      s,
      l,
      M,
      E,
      se,
      re,
      u,
      c,
      ve,
      N,
      pt,
      it,
      Ee,
    ]
  );
}
class vm extends He {
  constructor(e) {
    super(), qe(this, e, Xp, Qp, Ge, { opacity: 0 }, null, [-1, -1]);
  }
}
function Yp(t) {
  let e, n, r, s;
  return (
    (n = new lr({ props: { icon: "logos:metamask-icon", class: "h-6 w-6" } })),
    {
      c() {
        (e = S("div")),
          fe(n.$$.fragment),
          (r = Q(`
		Connect with MetaMask`)),
          this.h();
      },
      l(o) {
        e = T(o, "DIV", { class: !0 });
        var i = F(e);
        me(n.$$.fragment, i),
          i.forEach(P),
          (r = X(
            o,
            `
		Connect with MetaMask`
          )),
          this.h();
      },
      h() {
        C(e, "class", "h-6 w-6");
      },
      m(o, i) {
        $(o, e, i), de(n, e, null), $(o, r, i), (s = !0);
      },
      p: ge,
      i(o) {
        s || (q(n.$$.fragment, o), (s = !0));
      },
      o(o) {
        J(n.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && (P(e), P(r)), he(n);
      },
    }
  );
}
function em(t) {
  let e, n, r, s;
  return (
    (n = new lr({
      props: { icon: "simple-icons:walletconnect", class: "h-6 w-6" },
    })),
    {
      c() {
        (e = S("div")),
          fe(n.$$.fragment),
          (r = Q(`
		Connect with WalletConnect`)),
          this.h();
      },
      l(o) {
        e = T(o, "DIV", { class: !0 });
        var i = F(e);
        me(n.$$.fragment, i),
          i.forEach(P),
          (r = X(
            o,
            `
		Connect with WalletConnect`
          )),
          this.h();
      },
      h() {
        C(e, "class", "h-6 w-6");
      },
      m(o, i) {
        $(o, e, i), de(n, e, null), $(o, r, i), (s = !0);
      },
      p: ge,
      i(o) {
        s || (q(n.$$.fragment, o), (s = !0));
      },
      o(o) {
        J(n.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && (P(e), P(r)), he(n);
      },
    }
  );
}
function tm(t) {
  let e, n, r, s;
  return (
    (n = new lr({
      props: { icon: "solar:wallet-bold", class: "h-6 w-6 text-blue-500" },
    })),
    {
      c() {
        (e = S("div")),
          fe(n.$$.fragment),
          (r = Q(`
		Connect with Browser Wallet`)),
          this.h();
      },
      l(o) {
        e = T(o, "DIV", { class: !0 });
        var i = F(e);
        me(n.$$.fragment, i),
          i.forEach(P),
          (r = X(
            o,
            `
		Connect with Browser Wallet`
          )),
          this.h();
      },
      h() {
        C(e, "class", "h-6 w-6");
      },
      m(o, i) {
        $(o, e, i), de(n, e, null), $(o, r, i), (s = !0);
      },
      p: ge,
      i(o) {
        s || (q(n.$$.fragment, o), (s = !0));
      },
      o(o) {
        J(n.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && (P(e), P(r)), he(n);
      },
    }
  );
}
function nm(t) {
  let e,
    n,
    r = "Choose your wallet",
    s,
    o,
    i,
    a,
    u,
    c,
    l,
    f,
    d,
    h,
    p,
    m,
    b,
    w,
    v,
    x,
    I,
    g;
  return (
    (o = new gt({
      props: {
        className: "h-14 flex items-center bg-opacity-70 justify-center gap-2",
        $$slots: { default: [Yp] },
        $$scope: { ctx: t },
      },
    })),
    o.$on("click", t[4]),
    (l = new gt({
      props: {
        className: "h-14 flex items-center justify-center gap-2 bg-opacity-70",
        $$slots: { default: [em] },
        $$scope: { ctx: t },
      },
    })),
    l.$on("click", t[5]),
    (m = new gt({
      props: {
        className: "h-14 flex bg-opacity-70 items-center justify-center gap-2",
        $$slots: { default: [tm] },
        $$scope: { ctx: t },
      },
    })),
    m.$on("click", t[6]),
    {
      c() {
        (e = S("div")),
          (n = S("h2")),
          (n.textContent = r),
          (s = D()),
          fe(o.$$.fragment),
          (i = D()),
          (a = S("p")),
          (u = Q(t[1])),
          (c = D()),
          fe(l.$$.fragment),
          (f = D()),
          (d = S("p")),
          (h = Q(t[2])),
          (p = D()),
          fe(m.$$.fragment),
          (b = D()),
          (w = S("p")),
          (v = Q(t[3])),
          this.h();
      },
      l(y) {
        e = T(y, "DIV", { class: !0, style: !0 });
        var _ = F(e);
        (n = T(_, "H2", { class: !0, "data-svelte-h": !0 })),
          Se(n) !== "svelte-2acto3" && (n.textContent = r),
          (s = z(_)),
          me(o.$$.fragment, _),
          (i = z(_)),
          (a = T(_, "P", { class: !0 }));
        var M = F(a);
        (u = X(M, t[1])),
          M.forEach(P),
          (c = z(_)),
          me(l.$$.fragment, _),
          (f = z(_)),
          (d = T(_, "P", { class: !0 }));
        var E = F(d);
        (h = X(E, t[2])),
          E.forEach(P),
          (p = z(_)),
          me(m.$$.fragment, _),
          (b = z(_)),
          (w = T(_, "P", { class: !0 }));
        var U = F(w);
        (v = X(U, t[3])), U.forEach(P), _.forEach(P), this.h();
      },
      h() {
        C(n, "class", "mb-7 text-center text-[1.5rem] leading-[1.3em]"),
          C(a, "class", "mb-1 h-5 text-right text-[0.6rem] text-red-500"),
          C(d, "class", "mb-1 h-5 text-right text-[0.6rem] text-red-500"),
          C(w, "class", "mb-1 h-5 text-right text-[0.6rem] text-red-500"),
          C(
            e,
            "class",
            (x =
              "mx-auto max-w-[300px] py-3 transition-all duration-300 " +
              (t[0] < 1 ? "absolute inset-0" : "relative"))
          ),
          Be(e, "opacity", t[0]);
      },
      m(y, _) {
        $(y, e, _),
          k(e, n),
          k(e, s),
          de(o, e, null),
          k(e, i),
          k(e, a),
          k(a, u),
          k(e, c),
          de(l, e, null),
          k(e, f),
          k(e, d),
          k(d, h),
          k(e, p),
          de(m, e, null),
          k(e, b),
          k(e, w),
          k(w, v),
          (g = !0);
      },
      p(y, [_]) {
        const M = {};
        _ & 256 && (M.$$scope = { dirty: _, ctx: y }),
          o.$set(M),
          (!g || _ & 2) && ce(u, y[1]);
        const E = {};
        _ & 256 && (E.$$scope = { dirty: _, ctx: y }),
          l.$set(E),
          (!g || _ & 4) && ce(h, y[2]);
        const U = {};
        _ & 256 && (U.$$scope = { dirty: _, ctx: y }),
          m.$set(U),
          (!g || _ & 8) && ce(v, y[3]),
          (!g ||
            (_ & 1 &&
              x !==
                (x =
                  "mx-auto max-w-[300px] py-3 transition-all duration-300 " +
                  (y[0] < 1 ? "absolute inset-0" : "relative")))) &&
            C(e, "class", x),
          (!g || _ & 1) && Be(e, "opacity", y[0]);
      },
      i(y) {
        g ||
          (q(o.$$.fragment, y),
          q(l.$$.fragment, y),
          q(m.$$.fragment, y),
          I && I.end(1),
          (g = !0));
      },
      o(y) {
        J(o.$$.fragment, y),
          J(l.$$.fragment, y),
          J(m.$$.fragment, y),
          y && (I = Vn(e, Wn, { duration: 200 })),
          (g = !1);
      },
      d(y) {
        y && P(e), he(o), he(l), he(m), y && I && I.end();
      },
    }
  );
}
function rm(t, e, n) {
  let { opacity: r } = e,
    s = "",
    o = "",
    i = "";
  const a = () => {
      n(1, (s = "")), n(2, (o = "")), n(3, (i = ""));
    },
    u = async () => {
      a();
      let f = await Lt.connect("metamask");
      f != null && f.error ? n(1, (s = f.error)) : Sn();
    },
    c = async () => {
      a();
      let f = await Lt.connect("walletconnect");
      f != null && f.error ? n(2, (o = f.error)) : Sn();
    },
    l = async () => {
      a();
      let f = await Lt.connect("injected");
      f != null && f.error ? n(3, (i = f.error)) : Sn();
    };
  return (
    (t.$$set = (f) => {
      "opacity" in f && n(0, (r = f.opacity));
    }),
    [r, s, o, i, u, c, l]
  );
}
class _m extends He {
  constructor(e) {
    super(), qe(this, e, rm, nm, Ge, { opacity: 0 });
  }
}
export {
  dm as A,
  A as B,
  ec as C,
  wm as D,
  Up as E,
  bp as F,
  Ya as G,
  Ft as H,
  Ht as I,
  Bp as J,
  gm as K,
  Ep as S,
  vm as T,
  _m as W,
  ys as a,
  Oe as b,
  bm as c,
  bf as d,
  Ss as e,
  Pt as f,
  Pd as g,
  Oi as h,
  st as i,
  nt as j,
  Pi as k,
  hm as l,
  $n as m,
  Yn as n,
  Dd as o,
  pm as p,
  nl as q,
  mm as r,
  Pn as s,
  ls as t,
  si as u,
  lr as v,
  Lt as w,
  Sn as x,
  ym as y,
  Yr as z,
};
