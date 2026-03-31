import { jsx as t, jsxs as a, Fragment as Ie } from "react/jsx-runtime";
import { useRef as j, useEffect as xe, useState as M, useCallback as Ye, createContext as On, useId as Un, useContext as Mn } from "react";
import { s as e, b as P, t as T, c as Se, d as me, f as Re, e as Z, l as ne, a as Q } from "./spacing-wqc9yTbp.js";
import { createPortal as ct } from "react-dom";
function Bn({ size: r }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      className: "animate-spin shrink-0",
      width: r,
      height: r,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ t("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        /* @__PURE__ */ t(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          }
        )
      ]
    }
  );
}
const $n = {
  primary: {
    default: { bg: e.primary.surface.DEFAULT, text: e.neutral.text.negative },
    hover: { bg: e.primary.surface.hover, text: e.neutral.text.negative },
    focus: { bg: e.primary.surface.focused, text: e.neutral.text.negative, focusBorder: e.primary.border.light, focusBorderWidth: 2 },
    active: { bg: e.primary.surface.selected, text: e.neutral.text.negative },
    disabled: { bg: e.primary.surface.disabled, text: e.primary.text.disabled }
  },
  secondary: {
    default: { bg: e.neutral.surface.DEFAULT, text: e.neutral.text.negative },
    hover: { bg: e.neutral.surface.hover, text: e.neutral.text.negative },
    focus: { bg: e.neutral.surface.focused, text: e.neutral.text.negative, focusBorder: e.neutral.border.light, focusBorderWidth: 2 },
    active: { bg: e.neutral.surface.selected, text: e.neutral.text.negative },
    disabled: { bg: e.neutral.surface.disabled, text: e.neutral.text.disabledDark }
  },
  outline: {
    default: { bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 },
    hover: { bg: e.neutral.surface.negative, text: e.neutral.text.dark, border: e.neutral.border.strong, borderWidth: 1 },
    focus: { bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 2, focusBorder: e.neutral.border.strong, focusBorderWidth: 2 },
    active: { bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, border: e.neutral.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: e.neutral.surface.subtle, text: e.neutral.text.disabledDark, border: e.neutral.border.strong, borderWidth: 1 }
  },
  subtle: {
    default: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT },
    hover: { bg: e.neutral.surface.light, text: e.neutral.text.DEFAULT },
    focus: { bg: e.neutral.surface.light, text: e.neutral.text.DEFAULT, focusBorder: e.neutral.border.light, focusBorderWidth: 2 },
    active: { bg: e.neutral.surface.DEFAULT, text: e.neutral.text.negative },
    disabled: { bg: e.neutral.surface.disabled, text: e.neutral.text.disabledDark }
  },
  ghost: {
    default: { bg: "transparent", text: e.neutral.text.dark },
    hover: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT },
    focus: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT, focusBorder: e.neutral.border.light, focusBorderWidth: 2 },
    active: { bg: "transparent", text: e.neutral.text.DEFAULT },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark }
  },
  destructive: {
    default: { bg: e.error.surface.DEFAULT, text: e.neutral.text.negative },
    hover: { bg: e.error.surface.selected, text: e.neutral.text.negative },
    focus: { bg: e.error.surface.selected, text: e.neutral.text.negative, focusBorder: e.error.border.light, focusBorderWidth: 2 },
    active: { bg: e.error.border.darker, text: e.neutral.text.negative },
    disabled: { bg: e.error.border.light, text: e.error.surface.subtle }
  }
}, Nn = {
  lg: { height: 56, paddingX: 32, paddingY: 16, borderRadius: 12, gap: 12, iconSize: 24, fontSize: 20, lineHeight: 24 },
  md: { height: 48, paddingX: 24, paddingY: 12, borderRadius: 8, gap: 8, iconSize: 24, fontSize: 16, lineHeight: 19 },
  sm: { height: 40, paddingX: 20, paddingY: 8, borderRadius: 8, gap: 4, iconSize: 20, fontSize: 16, lineHeight: 19 },
  xs: { height: 36, paddingX: 12, paddingY: 8, borderRadius: 8, gap: 4, iconSize: 20, fontSize: 14, lineHeight: 18 }
};
function Pe({
  variant: r = "primary",
  size: n = "md",
  pill: o = !1,
  iconOnly: l = !1,
  loading: i = !1,
  fullWidth: d = !1,
  disabled: u,
  iconLeft: c,
  iconRight: p,
  children: b,
  className: h = "",
  style: m,
  ...w
}) {
  const k = u || i, g = $n[r], x = Nn[n], E = k ? g.disabled : g.default, L = o ? 999 : x.borderRadius, v = l ? 0 : x.paddingX, f = l ? x.height : void 0, O = {
    // Colors
    backgroundColor: E.bg,
    color: E.text,
    borderColor: E.border ?? "transparent",
    borderWidth: E.borderWidth ?? 0,
    borderStyle: E.border ? "solid" : "none",
    // Sizing
    height: x.height,
    width: d ? "100%" : f,
    paddingLeft: v,
    paddingRight: v,
    paddingTop: x.paddingY,
    paddingBottom: x.paddingY,
    borderRadius: L,
    gap: x.gap,
    // Typography
    fontSize: x.fontSize,
    lineHeight: `${x.lineHeight}px`,
    fontWeight: P.medium,
    // Misc
    ...m
  };
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      disabled: k,
      "aria-busy": i || void 0,
      "aria-disabled": k || void 0,
      "data-variant": r,
      "data-size": n,
      className: [
        // Layout
        "inline-flex items-center justify-center shrink-0",
        "font-default select-none whitespace-nowrap",
        "transition-colors duration-150",
        // Cursor
        k ? "cursor-not-allowed" : "cursor-pointer",
        // Custom class
        h
      ].filter(Boolean).join(" "),
      style: O,
      onMouseEnter: k ? void 0 : (A) => {
        const C = A.currentTarget;
        C.style.backgroundColor = g.hover.bg, C.style.color = g.hover.text, g.hover.border && (C.style.borderColor = g.hover.border);
      },
      onMouseLeave: k ? void 0 : (A) => {
        const C = A.currentTarget;
        C.style.backgroundColor = E.bg, C.style.color = E.text, C.style.borderColor = E.border ?? "transparent", document.activeElement !== C && (C.style.outline = "none", C.style.outlineOffset = "0px");
      },
      onMouseDown: k ? void 0 : (A) => {
        const C = A.currentTarget;
        C.style.backgroundColor = g.active.bg, C.style.color = g.active.text, g.active.border && (C.style.borderColor = g.active.border);
      },
      onMouseUp: k ? void 0 : (A) => {
        const C = A.currentTarget;
        C.style.backgroundColor = g.hover.bg, C.style.color = g.hover.text;
      },
      onFocus: k ? void 0 : (A) => {
        const C = A.currentTarget;
        C.matches(":focus-visible") && (C.style.outline = `${g.focus.focusBorderWidth}px solid ${g.focus.focusBorder}`, C.style.outlineOffset = "2px");
      },
      onBlur: k ? void 0 : (A) => {
        const C = A.currentTarget;
        C.style.outline = "none", C.style.outlineOffset = "0px";
      },
      ...w,
      children: i ? /* @__PURE__ */ t(Bn, { size: x.iconSize }) : /* @__PURE__ */ a(Ie, { children: [
        !l && c,
        l ? c || p || b : /* @__PURE__ */ t("span", { children: b }),
        !l && p
      ] })
    }
  );
}
const jt = 24, Zt = 20, Hn = 4, zn = 2, mt = {
  default: {
    unchecked: { border: e.neutral.surface.DEFAULT, bg: "transparent", fill: "transparent", icon: "transparent" },
    checked: { border: e.neutral.surface.DEFAULT, bg: e.neutral.surface.DEFAULT, fill: e.neutral.surface.DEFAULT, icon: e.neutral.surface.negative }
  },
  hover: {
    unchecked: { border: e.neutral.surface.hover, bg: e.neutral.surface.subtle, fill: "transparent", icon: "transparent" },
    checked: { border: e.neutral.surface.hover, bg: e.neutral.surface.hover, fill: e.neutral.surface.hover, icon: e.neutral.surface.negative }
  },
  disabled: {
    unchecked: { border: e.neutral.surface.disabled, bg: e.neutral.surface.subtle, fill: "transparent", icon: "transparent" },
    checked: { border: e.neutral.surface.disabled, bg: e.neutral.surface.disabled, fill: e.neutral.surface.disabled, icon: e.neutral.surface.negative }
  }
}, Pn = e.neutral.border.light, Xt = 2, Gn = parseInt(T["paragraph-m"].fontSize), Yn = T["paragraph-m"].lineHeight, jn = T["paragraph-m"].fontWeight, Zn = e.neutral.text.DEFAULT, Xn = e.neutral.text.disabledLight;
function Vn({ color: r }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ t(
        "path",
        {
          d: "M10 3L4.5 8.5L2 6",
          stroke: r,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Kn({ color: r }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ t(
        "path",
        {
          d: "M2.5 6H9.5",
          stroke: r,
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      )
    }
  );
}
function Ja({
  checked: r = !1,
  onChange: n,
  disabled: o = !1,
  label: l,
  name: i,
  value: d,
  indeterminate: u = !1,
  className: c = "",
  style: p,
  ...b
}) {
  const h = j(null), m = j(null);
  xe(() => {
    h.current && (h.current.indeterminate = u);
  }, [u]);
  const w = r || u, k = w ? "checked" : "unchecked", g = o ? mt.disabled[k] : mt.default[k], x = mt.hover[k], E = (L) => {
    const v = m.current;
    v && (v.style.borderColor = L.border, v.style.backgroundColor = w ? L.fill : L.bg);
  };
  return /* @__PURE__ */ a(
    "label",
    {
      className: [
        "flex items-center gap-xxs select-none",
        o ? "cursor-not-allowed" : "cursor-pointer",
        c
      ].filter(Boolean).join(" "),
      style: p,
      onMouseEnter: o ? void 0 : () => E(x),
      onMouseLeave: o ? void 0 : () => E(g),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: h,
            type: "checkbox",
            checked: r,
            onChange: n,
            disabled: o,
            name: i,
            value: d,
            className: "absolute opacity-0",
            style: { width: 0, height: 0 },
            onFocus: (L) => {
              if (!L.currentTarget.matches(":focus-visible")) return;
              const v = m.current;
              v && !o && (v.style.outline = `${Xt}px solid ${Pn}`, v.style.outlineOffset = `${Xt}px`);
            },
            onBlur: () => {
              const L = m.current;
              L && (L.style.outline = "none", L.style.outlineOffset = "0px");
            },
            ...b
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            "aria-hidden": "true",
            style: {
              width: jt,
              height: jt,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              "div",
              {
                ref: m,
                style: {
                  width: Zt,
                  height: Zt,
                  borderRadius: Hn,
                  borderWidth: zn,
                  borderStyle: "solid",
                  borderColor: g.border,
                  backgroundColor: w ? g.fill : g.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 150ms, border-color 150ms"
                },
                children: u ? /* @__PURE__ */ t(Kn, { color: g.icon }) : r ? /* @__PURE__ */ t(Vn, { color: g.icon }) : null
              }
            )
          }
        ),
        l && /* @__PURE__ */ t(
          "span",
          {
            className: "font-default",
            style: {
              fontSize: Gn,
              lineHeight: Yn,
              fontWeight: jn,
              color: o ? Xn : Zn
            },
            children: l
          }
        )
      ]
    }
  );
}
const Vt = 24, Kt = 20, Jt = 999, Jn = 2, Qt = 8, yt = {
  default: {
    unchecked: { border: e.neutral.surface.DEFAULT, bg: "transparent", fill: "transparent", dot: "transparent" },
    checked: { border: e.neutral.surface.DEFAULT, bg: e.neutral.surface.DEFAULT, fill: e.neutral.surface.DEFAULT, dot: e.neutral.surface.negative }
  },
  hover: {
    unchecked: { border: e.neutral.surface.hover, bg: e.neutral.surface.subtle, fill: "transparent", dot: "transparent" },
    checked: { border: e.neutral.surface.hover, bg: e.neutral.surface.hover, fill: e.neutral.surface.hover, dot: e.neutral.surface.negative }
  },
  disabled: {
    unchecked: { border: e.neutral.surface.disabled, bg: e.neutral.surface.subtle, fill: "transparent", dot: "transparent" },
    checked: { border: e.neutral.surface.disabled, bg: e.neutral.surface.disabled, fill: e.neutral.surface.disabled, dot: e.neutral.surface.negative }
  }
}, Qn = e.neutral.border.light, qt = 2, qn = parseInt(T["paragraph-m"].fontSize), eo = T["paragraph-m"].lineHeight, to = T["paragraph-m"].fontWeight, ro = e.neutral.text.DEFAULT, no = e.neutral.text.disabledLight;
function Qa({
  checked: r = !1,
  onChange: n,
  disabled: o = !1,
  label: l,
  name: i,
  value: d,
  className: u = "",
  style: c,
  ...p
}) {
  const b = j(null), h = r ? "checked" : "unchecked", m = o ? yt.disabled[h] : yt.default[h], w = yt.hover[h], k = (g) => {
    const x = b.current;
    x && (x.style.borderColor = g.border, x.style.backgroundColor = r ? g.fill : g.bg);
  };
  return /* @__PURE__ */ a(
    "label",
    {
      className: [
        "flex items-center gap-xxs select-none",
        o ? "cursor-not-allowed" : "cursor-pointer",
        u
      ].filter(Boolean).join(" "),
      style: c,
      onMouseEnter: o ? void 0 : () => k(w),
      onMouseLeave: o ? void 0 : () => k(m),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "radio",
            checked: r,
            onChange: n,
            disabled: o,
            name: i,
            value: d,
            className: "absolute opacity-0",
            style: { width: 0, height: 0 },
            onFocus: (g) => {
              if (!g.currentTarget.matches(":focus-visible")) return;
              const x = b.current;
              x && !o && (x.style.outline = `${qt}px solid ${Qn}`, x.style.outlineOffset = `${qt}px`);
            },
            onBlur: () => {
              const g = b.current;
              g && (g.style.outline = "none", g.style.outlineOffset = "0px");
            },
            ...p
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            "aria-hidden": "true",
            style: {
              width: Vt,
              height: Vt,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            },
            children: /* @__PURE__ */ t(
              "div",
              {
                ref: b,
                style: {
                  width: Kt,
                  height: Kt,
                  borderRadius: Jt,
                  borderWidth: Jn,
                  borderStyle: "solid",
                  borderColor: m.border,
                  backgroundColor: r ? m.fill : m.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 150ms, border-color 150ms"
                },
                children: r && /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      width: Qt,
                      height: Qt,
                      borderRadius: Jt,
                      backgroundColor: m.dot
                    }
                  }
                )
              }
            )
          }
        ),
        l && /* @__PURE__ */ t(
          "span",
          {
            className: "font-default",
            style: {
              fontSize: qn,
              lineHeight: eo,
              fontWeight: to,
              color: o ? no : ro
            },
            children: l
          }
        )
      ]
    }
  );
}
const oo = 4, lo = 999, io = 100, ao = {
  default: {
    trackWidth: 44,
    // Figma spec (component-internal)
    trackHeight: 28,
    // knob 20 + padding 4×2
    knobSize: 20,
    // spacing.m
    checkmarkSize: 16
    // Figma spec (component-internal)
  },
  large: {
    trackWidth: 52,
    // Figma spec (component-internal)
    trackHeight: 32,
    // knob 24 + padding 4×2
    knobSize: 24,
    // spacing.l
    checkmarkSize: 20
    // spacing.m
  }
}, kt = {
  default: {
    off: { track: e.neutral.text.disabledDark, knob: e.neutral.surface.negative, checkmark: "transparent" },
    on: { track: e.neutral.surface.DEFAULT, knob: e.neutral.surface.negative, checkmark: e.neutral.surface.DEFAULT }
  },
  hover: {
    off: { track: e.neutral.surface.hover, knob: e.neutral.surface.negative, checkmark: "transparent" },
    on: { track: e.neutral.surface.hover, knob: e.neutral.surface.negative, checkmark: e.neutral.surface.hover }
  },
  disabled: {
    off: { track: e.neutral.surface.light, knob: e.neutral.surface.disabled, checkmark: "transparent" },
    on: { track: e.neutral.surface.light, knob: e.neutral.surface.disabled, checkmark: e.neutral.surface.disabled }
  }
}, so = e.neutral.border.light, er = 2, co = parseInt(T["paragraph-m"].fontSize), uo = T["paragraph-m"].lineHeight, ho = T["paragraph-m"].fontWeight, go = e.neutral.text.DEFAULT, fo = e.neutral.text.disabledLight;
function po({ color: r, size: n }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: n,
      height: n,
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ t(
        "path",
        {
          d: "M10 3L4.5 8.5L2 6",
          stroke: r,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function qa({
  checked: r = !1,
  onChange: n,
  disabled: o = !1,
  label: l,
  name: i,
  value: d,
  size: u = "default",
  className: c = "",
  style: p,
  ...b
}) {
  const h = j(null), m = ao[u], w = r ? "on" : "off", k = o ? kt.disabled[w] : kt.default[w], g = kt.hover[w], x = (E) => {
    const L = h.current;
    L && (L.style.backgroundColor = E.track);
  };
  return /* @__PURE__ */ a(
    "label",
    {
      className: [
        "flex items-center gap-xxs select-none",
        o ? "cursor-not-allowed" : "cursor-pointer",
        c
      ].filter(Boolean).join(" "),
      style: p,
      onMouseEnter: o ? void 0 : () => x(g),
      onMouseLeave: o ? void 0 : () => x(k),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "checkbox",
            checked: r,
            onChange: n,
            disabled: o,
            name: i,
            value: d,
            className: "absolute opacity-0",
            style: { width: 0, height: 0 },
            onFocus: (E) => {
              if (!E.currentTarget.matches(":focus-visible")) return;
              const L = h.current;
              L && !o && (L.style.outline = `${er}px solid ${so}`, L.style.outlineOffset = `${er}px`);
            },
            onBlur: () => {
              const E = h.current;
              E && (E.style.outline = "none", E.style.outlineOffset = "0px");
            },
            ...b
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            ref: h,
            "aria-hidden": "true",
            style: {
              width: m.trackWidth,
              height: m.trackHeight,
              borderRadius: lo,
              padding: oo,
              backgroundColor: k.track,
              display: "flex",
              alignItems: "center",
              justifyContent: r ? "flex-end" : "flex-start",
              flexShrink: 0,
              transition: "background-color 150ms"
            },
            children: /* @__PURE__ */ t(
              "div",
              {
                style: {
                  width: m.knobSize,
                  height: m.knobSize,
                  borderRadius: io,
                  backgroundColor: k.knob,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 150ms",
                  flexShrink: 0
                },
                children: r && /* @__PURE__ */ t(
                  po,
                  {
                    color: k.checkmark,
                    size: m.checkmarkSize
                  }
                )
              }
            )
          }
        ),
        l && /* @__PURE__ */ t(
          "span",
          {
            className: "font-default",
            style: {
              fontSize: co,
              lineHeight: uo,
              fontWeight: ho,
              color: o ? fo : go
            },
            children: l
          }
        )
      ]
    }
  );
}
const bo = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function $(r = "md") {
  return typeof r == "number" ? r : bo[r];
}
const Mt = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            d: "M12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
          }
        )
      ]
    }
  );
}, xo = 1, vo = 8, mo = 999, tr = 16, rr = 8, Ze = 20, yo = 8, ko = 4, nr = 8, wo = {
  sm: { height: 40 },
  // matches Button sm
  md: { height: 48 },
  // matches Button md
  lg: { height: 56 }
  // matches Button lg
}, Le = {
  default: {
    border: e.neutral.border.strong,
    // #e0e0e0
    bg: e.neutral.surface.negative,
    // #ffffff
    text: e.neutral.text.DEFAULT,
    // #000000
    placeholder: e.neutral.text.light,
    // #8a8a8a (was #6b6b6b — corrected to nearest token)
    helperText: e.neutral.text.light,
    // #8a8a8a
    iconColor: e.neutral.text.DEFAULT
    // #000000
  },
  hover: {
    border: e.neutral.border.DEFAULT,
    // #000000
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.DEFAULT
  },
  focus: {
    border: e.neutral.border.DEFAULT,
    // #000000
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.DEFAULT
  },
  disabled: {
    border: e.neutral.border.strong,
    // #e0e0e0
    bg: e.neutral.surface.subtle,
    // #f2f2f2
    text: e.neutral.text.disabledDark,
    // #949494
    placeholder: e.neutral.text.disabledDark,
    // #949494
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.disabledDark
    // #949494
  },
  error: {
    border: e.error.border.DEFAULT,
    // #e10f0f
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.error.text.DEFAULT,
    // #e10f0f
    iconColor: e.neutral.text.DEFAULT
  }
}, or = parseInt(T["label-s"].fontSize), lr = T["label-s"].lineHeight, ir = T["label-s"].fontWeight, Co = e.neutral.text.DEFAULT, Eo = parseInt(T["paragraph-m"].fontSize), To = T["paragraph-m"].lineHeight, Lo = T["paragraph-m"].fontWeight, Do = parseInt(T["paragraph-s"].fontSize), _o = T["paragraph-s"].lineHeight, Io = T["paragraph-s"].fontWeight, Ao = e.error.text.DEFAULT, So = e.neutral.border.light, ar = 2;
function es({
  label: r,
  placeholder: n,
  value: o,
  onChange: l,
  disabled: i = !1,
  error: d = !1,
  helperText: u,
  required: c = !1,
  size: p = "md",
  shape: b = "default",
  iconLeft: h,
  iconRight: m,
  showInfoIcon: w = !1,
  name: k,
  ...g
}) {
  const x = j(null), { height: E } = wo[p], L = b === "rounded" ? mo : vo, f = i ? Le.disabled : d ? Le.error : Le.default, O = () => {
    if (i) return;
    const D = x.current;
    D && (d || (D.style.borderColor = Le.hover.border));
  }, A = () => {
    if (i) return;
    const D = x.current;
    D && (D.style.borderColor = f.border);
  }, C = () => {
    if (i) return;
    const D = x.current;
    D && (d || (D.style.borderColor = Le.focus.border), D.style.outline = `${ar}px solid ${So}`, D.style.outlineOffset = `${ar}px`);
  }, te = () => {
    const D = x.current;
    D && (D.style.borderColor = f.border, D.style.outline = "none", D.style.outlineOffset = "0px");
  };
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: yo,
        width: "100%"
      },
      children: [
        (r || c || w) && /* @__PURE__ */ a(
          "div",
          {
            style: {
              display: "flex",
              gap: ko,
              alignItems: "center"
            },
            children: [
              r && /* @__PURE__ */ t(
                "label",
                {
                  style: {
                    fontSize: or,
                    lineHeight: lr,
                    fontWeight: ir,
                    color: Co
                  },
                  children: r
                }
              ),
              c && /* @__PURE__ */ t(
                "span",
                {
                  style: {
                    fontSize: or,
                    lineHeight: lr,
                    fontWeight: ir,
                    color: Ao
                  },
                  children: "*"
                }
              ),
              w && /* @__PURE__ */ t(Mt, { size: "md", style: { color: i ? Le.disabled.iconColor : e.neutral.text.DEFAULT } })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            ref: x,
            onMouseEnter: O,
            onMouseLeave: A,
            style: {
              display: "flex",
              alignItems: "center",
              height: E,
              paddingLeft: tr,
              paddingRight: tr,
              paddingTop: rr,
              paddingBottom: rr,
              backgroundColor: f.bg,
              border: `${xo}px solid ${f.border}`,
              borderRadius: L,
              cursor: i ? "not-allowed" : "text",
              transition: "border-color 150ms ease"
            },
            children: [
              h && /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Ze,
                    height: Ze,
                    marginRight: nr,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: f.iconColor
                  },
                  children: h
                }
              ),
              /* @__PURE__ */ t(
                "input",
                {
                  type: "text",
                  value: o,
                  onChange: l,
                  placeholder: n,
                  disabled: i,
                  name: k,
                  onFocus: C,
                  onBlur: te,
                  ...g,
                  style: {
                    flex: 1,
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    fontSize: Eo,
                    lineHeight: To,
                    fontWeight: Lo,
                    color: f.text,
                    cursor: i ? "not-allowed" : "text",
                    padding: 0,
                    width: "100%",
                    fontFamily: "inherit",
                    ...g.style || {}
                  }
                }
              ),
              m && /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Ze,
                    height: Ze,
                    marginLeft: nr,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: f.iconColor,
                    cursor: i ? "not-allowed" : "pointer"
                  },
                  children: m
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ t(
          "p",
          {
            style: {
              fontSize: Do,
              lineHeight: _o,
              fontWeight: Io,
              color: d ? Le.error.helperText : f.helperText,
              margin: 0
            },
            children: u
          }
        )
      ]
    }
  );
}
const Fo = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M18.707 8.293a1 1 0 0 0-1.414 0L12 13.586 6.707 8.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414",
          clipRule: "evenodd"
        }
      )
    }
  );
}, Ro = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M13.793 13.793a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0",
            clipRule: "evenodd"
          }
        )
      ]
    }
  );
}, Wo = 1, Oo = 8, Uo = 999, sr = 16, dr = 8, Be = 20, Mo = 8, Bo = 4, wt = 8, $o = {
  sm: { height: 40 },
  // matches Button sm
  md: { height: 48 },
  // matches Button md
  lg: { height: 56 }
  // matches Button lg
}, we = {
  default: {
    border: e.neutral.border.strong,
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.DEFAULT
  },
  hover: {
    border: e.neutral.border.DEFAULT,
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.DEFAULT
  },
  focus: {
    border: e.neutral.border.DEFAULT,
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.DEFAULT
  },
  disabled: {
    border: e.neutral.border.strong,
    bg: e.neutral.surface.subtle,
    text: e.neutral.text.disabledDark,
    placeholder: e.neutral.text.disabledDark,
    helperText: e.neutral.text.light,
    iconColor: e.neutral.text.disabledDark
  },
  error: {
    border: e.error.border.DEFAULT,
    bg: e.neutral.surface.negative,
    text: e.neutral.text.DEFAULT,
    placeholder: e.neutral.text.light,
    helperText: e.error.text.DEFAULT,
    iconColor: e.neutral.text.DEFAULT
  }
}, No = 12, Ho = Se["2xl"], cr = 8, zo = 4, Po = 4, Go = 1e3, Ct = 16, Xe = 12, ur = 12, Yo = e.neutral.surface.negative, jo = e.neutral.surface.subtle, Et = e.neutral.text.dark, hr = e.neutral.text.DEFAULT, Zo = P.medium, at = P.regular, Tt = e.neutral.text.disabledDark, gr = 16, Lt = 12, Xo = e.neutral.border.light, Vo = e.neutral.text.light, Ko = parseInt(T["paragraph-m"].fontSize), Jo = T["paragraph-m"].lineHeight, Qo = e.neutral.text.light, qo = 28, el = e.neutral.surface.subtle, tl = e.neutral.text.DEFAULT, rl = e.neutral.text.light, fr = 4, nl = 8, ol = 4, st = 4, ll = parseInt(T["paragraph-s"].fontSize), il = T["paragraph-s"].lineHeight, pr = parseInt(T["label-s"].fontSize), br = T["label-s"].lineHeight, xr = T["label-s"].fontWeight, al = e.neutral.text.DEFAULT, vr = parseInt(T["paragraph-m"].fontSize), mr = T["paragraph-m"].lineHeight, yr = T["paragraph-m"].fontWeight, Dt = parseInt(T["paragraph-m"].fontSize), _t = T["paragraph-m"].lineHeight, sl = parseInt(T["paragraph-s"].fontSize), dl = T["paragraph-s"].lineHeight, cl = T["paragraph-s"].fontWeight, ul = e.error.text.DEFAULT, hl = e.neutral.border.light, kr = 2, gl = "transform 200ms ease";
function fl() {
  return /* @__PURE__ */ t("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { d: "M3 3l6 6M9 3l-6 6", stroke: rl, strokeWidth: "1.5", strokeLinecap: "round" }) });
}
function pl({ label: r, onRemove: n }) {
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: st,
        paddingLeft: nl,
        paddingRight: ol,
        height: qo,
        backgroundColor: el,
        borderRadius: fr,
        fontSize: ll,
        fontWeight: at,
        lineHeight: il,
        color: tl,
        cursor: "default",
        fontFamily: "inherit"
      },
      children: [
        /* @__PURE__ */ t("span", { children: r }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (o) => {
              o.stopPropagation(), n();
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderRadius: fr,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: 0
            },
            "aria-label": `Remove ${r}`,
            children: /* @__PURE__ */ t(fl, {})
          }
        )
      ]
    }
  );
}
function ts({
  options: r,
  value: n,
  onChange: o,
  placeholder: l = "Select...",
  label: i,
  helperText: d,
  required: u = !1,
  disabled: c = !1,
  error: p = !1,
  size: b = "md",
  shape: h = "default",
  iconLeft: m,
  showInfoIcon: w = !1,
  name: k,
  maxVisibleOptions: g = 6,
  searchable: x = !1,
  searchPlaceholder: E = "Search...",
  multiple: L = !1,
  multiValue: v,
  onMultiChange: f,
  renderTrigger: O
}) {
  const A = j(null), C = j(null), te = j(null), G = j(null), [D, se] = M(!1), [F, R] = M(-1), [K, ge] = M(n ?? ""), [de, N] = M(""), [oe, ye] = M(null), re = n !== void 0, Ee = re ? n : K, { height: X } = $o[b], le = h === "rounded" ? Uo : Oo, B = x && de ? r.filter((y) => y.label.toLowerCase().includes(de.toLowerCase())) : r, ce = r.find((y) => y.value === Ee), fe = L && v ? r.filter((y) => v.includes(y.value)) : [], H = c ? we.disabled : p ? we.error : we.default, We = Xe * 2 + 19, Oe = x ? Lt * 2 + 19 + 1 : 0, Ue = cr * 2 + We * g + Oe;
  xe(() => {
    if (!D) return;
    const y = (S) => {
      const _ = S.target, ke = A.current?.contains(_), ie = te.current?.contains(_);
      !ke && !ie && (se(!1), N(""), C.current && !p && (C.current.style.borderColor = H.border), C.current && (C.current.style.outline = "none", C.current.style.outlineOffset = "0px"));
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [D, p, H.border]);
  const z = Ye(() => {
    if (C.current) {
      const y = C.current.getBoundingClientRect();
      ye({
        top: y.bottom + Po + window.scrollY,
        left: y.left + window.scrollX,
        width: y.width
      });
    }
  }, []);
  xe(() => {
    if (D)
      return z(), window.addEventListener("scroll", z, !0), window.addEventListener("resize", z), () => {
        window.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z);
      };
  }, [D, z]), xe(() => {
    D && x && G.current && G.current.focus();
  }, [D, x]), xe(() => {
    x && D && R(B.length > 0 ? 0 : -1);
  }, [de]);
  const Me = () => {
    C.current && (p || (C.current.style.borderColor = we.focus.border), C.current.style.outline = `${kr}px solid ${hl}`, C.current.style.outlineOffset = `${kr}px`);
  }, Te = () => {
    C.current && (C.current.style.borderColor = H.border, C.current.style.outline = "none", C.current.style.outlineOffset = "0px");
  }, pe = () => {
    if (c) return;
    const y = !D;
    if (se(y), y) {
      const S = L ? 0 : B.findIndex((_) => _.value === n);
      R(S >= 0 ? S : 0), Me();
    } else
      N(""), Te();
  }, He = Ye((y) => {
    if (!y.disabled) {
      if (L) {
        const S = v || [], _ = S.includes(y.value) ? S.filter((ke) => ke !== y.value) : [...S, y.value];
        f?.(_);
        return;
      }
      re || ge(y.value), o?.(y.value), se(!1), N(""), Te();
    }
  }, [o, H.border, re, L, v, f]), je = (y) => {
    if (!c) {
      if (x && D && y.target === G.current) {
        if (y.key === "ArrowDown" || y.key === "ArrowUp") {
          y.preventDefault(), y.key === "ArrowDown" ? R((S) => {
            let _ = S + 1;
            for (; _ < B.length && B[_].disabled; ) _++;
            return _ < B.length ? _ : S;
          }) : R((S) => {
            let _ = S - 1;
            for (; _ >= 0 && B[_].disabled; ) _--;
            return _ >= 0 ? _ : S;
          });
          return;
        }
        if (y.key === "Enter") {
          y.preventDefault(), F >= 0 && B[F] && He(B[F]);
          return;
        }
        if (y.key === "Escape") {
          y.preventDefault(), se(!1), N(""), Te();
          return;
        }
        return;
      }
      switch (y.key) {
        case "Enter":
        case " ":
          if (y.preventDefault(), D && F >= 0) {
            const S = B[F];
            S && !S.disabled && He(S);
          } else
            pe();
          break;
        case "ArrowDown":
          y.preventDefault(), D ? R((S) => {
            let _ = S + 1;
            for (; _ < B.length && B[_].disabled; ) _++;
            return _ < B.length ? _ : S;
          }) : pe();
          break;
        case "ArrowUp":
          y.preventDefault(), D && R((S) => {
            let _ = S - 1;
            for (; _ >= 0 && B[_].disabled; ) _--;
            return _ >= 0 ? _ : S;
          });
          break;
        case "Escape":
          y.preventDefault(), se(!1), N(""), Te();
          break;
        case "Tab":
          D && (se(!1), N(""), Te());
          break;
      }
    }
  }, ht = () => {
    if (c || D) return;
    const y = C.current;
    y && (p || (y.style.borderColor = we.hover.border));
  }, gt = () => {
    if (c || D) return;
    const y = C.current;
    y && (y.style.borderColor = H.border);
  }, ft = (y) => L && v ? v.includes(y) : !1, pt = () => O ? O(L ? fe : ce) : L ? fe.length === 0 ? /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: 1,
        fontSize: vr,
        lineHeight: mr,
        fontWeight: yr,
        color: H.placeholder,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontFamily: "inherit"
      },
      children: l
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        gap: st,
        alignItems: "center",
        minWidth: 0
      },
      children: fe.map((y) => /* @__PURE__ */ t(
        pl,
        {
          label: y.label,
          onRemove: () => {
            const S = (v || []).filter((_) => _ !== y.value);
            f?.(S);
          }
        },
        y.value
      ))
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: 1,
        fontSize: vr,
        lineHeight: mr,
        fontWeight: yr,
        color: ce ? H.text : H.placeholder,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontFamily: "inherit"
      },
      children: ce ? ce.label : l
    }
  ), bt = i || u || w, xt = L && fe.length > 0;
  return /* @__PURE__ */ a(
    "div",
    {
      ref: A,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: Mo,
        width: "100%",
        position: "relative"
      },
      children: [
        bt && /* @__PURE__ */ a(
          "div",
          {
            style: {
              display: "flex",
              gap: Bo,
              alignItems: "center"
            },
            children: [
              i && /* @__PURE__ */ t(
                "label",
                {
                  style: {
                    fontSize: pr,
                    lineHeight: br,
                    fontWeight: xr,
                    color: al
                  },
                  children: i
                }
              ),
              u && /* @__PURE__ */ t(
                "span",
                {
                  style: {
                    fontSize: pr,
                    lineHeight: br,
                    fontWeight: xr,
                    color: ul
                  },
                  children: "*"
                }
              ),
              w && /* @__PURE__ */ t(Mt, { size: "md", style: { color: c ? we.disabled.iconColor : e.neutral.text.DEFAULT } })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            ref: C,
            role: "combobox",
            "aria-expanded": D,
            "aria-haspopup": "listbox",
            tabIndex: c ? -1 : 0,
            onClick: pe,
            onKeyDown: je,
            onMouseEnter: ht,
            onMouseLeave: gt,
            style: {
              display: "flex",
              alignItems: "center",
              ...xt ? { minHeight: X, paddingTop: st, paddingBottom: st } : { height: X, paddingTop: dr, paddingBottom: dr },
              paddingLeft: sr,
              paddingRight: sr,
              backgroundColor: H.bg,
              border: `${Wo}px solid ${H.border}`,
              borderRadius: le,
              cursor: c ? "not-allowed" : "pointer",
              transition: "border-color 150ms ease",
              outline: "none",
              userSelect: "none"
            },
            children: [
              m && /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Be,
                    height: Be,
                    marginRight: wt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: H.iconColor
                  },
                  children: m
                }
              ),
              pt(),
              /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Be,
                    height: Be,
                    marginLeft: wt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: H.iconColor,
                    transform: D ? "rotate(180deg)" : "rotate(0deg)",
                    transition: gl
                  },
                  children: /* @__PURE__ */ t(Fo, { size: "md" })
                }
              )
            ]
          }
        ),
        d && /* @__PURE__ */ t(
          "p",
          {
            style: {
              fontSize: sl,
              lineHeight: dl,
              fontWeight: cl,
              color: p ? we.error.helperText : H.helperText,
              margin: 0
            },
            children: d
          }
        ),
        k && !L && /* @__PURE__ */ t("input", { type: "hidden", name: k, value: Ee || "" }),
        k && L && (v || []).map((y) => /* @__PURE__ */ t("input", { type: "hidden", name: k, value: y }, y)),
        D && oe && ct(
          /* @__PURE__ */ a(
            "div",
            {
              ref: te,
              role: "listbox",
              style: {
                position: "absolute",
                top: oe.top,
                left: oe.left,
                width: oe.width,
                zIndex: Go,
                backgroundColor: e.neutral.surface.negative,
                // neutral.negative
                borderRadius: No,
                boxShadow: Ho,
                maxHeight: Ue,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              },
              children: [
                x && /* @__PURE__ */ a(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: wt,
                      paddingLeft: gr,
                      paddingRight: gr,
                      paddingTop: Lt,
                      paddingBottom: Lt,
                      borderBottom: `1px solid ${Xo}`,
                      flexShrink: 0
                    },
                    children: [
                      /* @__PURE__ */ t(Ro, { size: "md", style: { color: Vo } }),
                      /* @__PURE__ */ t(
                        "input",
                        {
                          ref: G,
                          type: "text",
                          value: de,
                          onChange: (y) => N(y.target.value),
                          onKeyDown: je,
                          placeholder: E,
                          style: {
                            flex: 1,
                            border: "none",
                            outline: "none",
                            fontSize: Ko,
                            lineHeight: Jo,
                            fontWeight: at,
                            color: we.default.text,
                            backgroundColor: "transparent",
                            fontFamily: "inherit",
                            padding: 0
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      padding: cr,
                      overflowY: "auto",
                      flex: 1
                    },
                    children: /* @__PURE__ */ a(
                      "div",
                      {
                        style: {
                          borderRadius: zo,
                          overflow: "hidden"
                        },
                        children: [
                          B.length === 0 && /* @__PURE__ */ t(
                            "div",
                            {
                              style: {
                                padding: `${Xe}px ${Ct}px`,
                                fontSize: Dt,
                                lineHeight: _t,
                                color: Qo,
                                fontFamily: "inherit"
                              },
                              children: "No results found"
                            }
                          ),
                          B.map((y, S) => {
                            const _ = L ? ft(y.value) : y.value === Ee, ke = S === F, ie = !!y.disabled;
                            return /* @__PURE__ */ a(
                              "div",
                              {
                                role: "option",
                                "aria-selected": _,
                                "aria-disabled": ie,
                                onClick: () => {
                                  ie || He(y);
                                },
                                onMouseEnter: () => {
                                  ie || R(S);
                                },
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: ur,
                                  paddingLeft: Ct,
                                  paddingRight: Ct,
                                  paddingTop: Xe,
                                  paddingBottom: Xe,
                                  backgroundColor: ke && !ie ? jo : Yo,
                                  cursor: ie ? "not-allowed" : "pointer",
                                  transition: "background-color 100ms ease"
                                },
                                children: [
                                  y.iconLeft && /* @__PURE__ */ t(
                                    "div",
                                    {
                                      style: {
                                        flexShrink: 0,
                                        width: Be,
                                        height: Be,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: ie ? Tt : _ ? hr : Et
                                      },
                                      children: y.iconLeft
                                    }
                                  ),
                                  /* @__PURE__ */ a(
                                    "div",
                                    {
                                      style: {
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        minWidth: 0
                                      },
                                      children: [
                                        /* @__PURE__ */ t(
                                          "span",
                                          {
                                            style: {
                                              fontSize: Dt,
                                              lineHeight: _t,
                                              fontWeight: _ ? Zo : at,
                                              color: ie ? Tt : _ ? hr : Et,
                                              overflow: "hidden",
                                              textOverflow: "ellipsis",
                                              whiteSpace: "nowrap",
                                              fontFamily: "inherit"
                                            },
                                            children: y.label
                                          }
                                        ),
                                        y.additionalInfo && /* @__PURE__ */ t(
                                          "span",
                                          {
                                            style: {
                                              fontSize: Dt,
                                              lineHeight: _t,
                                              fontWeight: at,
                                              color: ie ? Tt : Et,
                                              flexShrink: 0,
                                              marginLeft: ur,
                                              fontFamily: "inherit"
                                            },
                                            children: y.additionalInfo
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              },
                              y.value
                            );
                          })
                        ]
                      }
                    )
                  }
                )
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}
const bl = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t("path", { fill: n, d: "M4 9h16v2H4z" }),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M8.759 5h6.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 16.71 3 16.046 3 15.242v-4.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 5 7.954 5 8.758 5M6.91 7.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C5 9.361 5 9.943 5 10.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 19 7.943 19 8.8 19h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-4.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 7 16.057 7 15.2 7H8.8c-.857 0-1.439 0-1.889.038",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            d: "M9 4a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM17 4a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
          }
        )
      ]
    }
  );
}, yn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
          clipRule: "evenodd"
        }
      )
    }
  );
}, xl = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M8.293 5.293a1 1 0 0 0 0 1.414L13.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0",
          clipRule: "evenodd"
        }
      )
    }
  );
};
function vl({ size: r }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      className: "animate-spin shrink-0",
      width: r,
      height: r,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ t("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        /* @__PURE__ */ t(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          }
        )
      ]
    }
  );
}
const ml = {
  ghost: {
    default: { bg: "transparent", text: e.neutral.text.dark },
    hover: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT },
    active: { bg: "transparent", text: e.neutral.text.DEFAULT },
    focus: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT, focusBorder: e.neutral.border.light, focusBorderWidth: 2 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark },
    pressed: { bg: "transparent", text: e.primary.text.DEFAULT },
    pressedHover: { bg: e.primary.surface.subtle, text: e.primary.text.DEFAULT }
  },
  outline: {
    default: { bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 },
    hover: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 },
    active: { bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 },
    focus: { bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 2, focusBorder: e.neutral.border.strong, focusBorderWidth: 2 },
    disabled: { bg: e.neutral.surface.subtle, text: e.neutral.text.disabledDark, border: e.neutral.border.strong, borderWidth: 1 },
    pressed: { bg: e.neutral.surface.negative, text: e.primary.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 },
    pressedHover: { bg: e.primary.surface.subtle, text: e.primary.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 }
  }
}, yl = {
  xs: { dimension: 28, iconSize: 16, radiusPill: 999, radiusRounded: parseInt(me.xxxs) },
  sm: { dimension: 32, iconSize: 16, radiusPill: 999, radiusRounded: parseInt(me.xxs) },
  md: { dimension: 40, iconSize: 20, radiusPill: 999, radiusRounded: parseInt(me.xxs) },
  lg: { dimension: 48, iconSize: 24, radiusPill: 999, radiusRounded: parseInt(me.xs) }
};
function Fe({
  icon: r,
  variant: n = "ghost",
  size: o = "md",
  pill: l = !0,
  pressed: i,
  loading: d = !1,
  disabled: u,
  className: c = "",
  style: p,
  ...b
}) {
  const h = u || d, m = i === !0, w = ml[n], k = yl[o], g = h ? w.disabled : m ? w.pressed : w.default, x = m ? w.pressedHover : w.hover, E = l ? k.radiusPill : k.radiusRounded, L = {
    // Colors
    backgroundColor: g.bg,
    color: g.text,
    borderColor: g.border ?? "transparent",
    borderWidth: g.borderWidth ?? 0,
    borderStyle: g.border ? "solid" : "none",
    // Sizing — square
    width: k.dimension,
    height: k.dimension,
    borderRadius: E,
    // Misc
    ...p
  };
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      disabled: h,
      "aria-busy": d || void 0,
      "aria-disabled": h || void 0,
      "aria-pressed": i !== void 0 ? i : void 0,
      "data-variant": n,
      "data-size": o,
      className: [
        "inline-flex items-center justify-center shrink-0",
        "select-none",
        "transition-colors duration-150",
        h ? "cursor-not-allowed" : "cursor-pointer",
        c
      ].filter(Boolean).join(" "),
      style: L,
      onMouseEnter: h ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = x.bg, f.style.color = x.text, x.border && (f.style.borderColor = x.border);
      },
      onMouseLeave: h ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = g.bg, f.style.color = g.text, f.style.borderColor = g.border ?? "transparent", document.activeElement !== f && (f.style.outline = "none", f.style.outlineOffset = "0px");
      },
      onMouseDown: h ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = w.active.bg, f.style.color = w.active.text, w.active.border && (f.style.borderColor = w.active.border);
      },
      onMouseUp: h ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = x.bg, f.style.color = x.text, x.border && (f.style.borderColor = x.border);
      },
      onFocus: h ? void 0 : (v) => {
        const f = v.currentTarget;
        f.matches(":focus-visible") && (f.style.outline = `${w.focus.focusBorderWidth}px solid ${w.focus.focusBorder}`, f.style.outlineOffset = "2px");
      },
      onBlur: h ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.outline = "none", f.style.outlineOffset = "0px";
      },
      ...b,
      children: d ? /* @__PURE__ */ t(vl, { size: k.iconSize }) : /* @__PURE__ */ t("span", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: r })
    }
  );
}
const kl = 1, wl = 8, Cl = 999, wr = 16, Cr = 8, Er = 20, El = 8, Tl = 4, Ll = 8, Dl = {
  sm: { height: 40 },
  md: { height: 48 },
  lg: { height: 56 }
}, De = {
  default: { border: e.neutral.border.strong, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.neutral.text.light, iconColor: e.neutral.text.DEFAULT },
  hover: { border: e.neutral.border.DEFAULT, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.neutral.text.light, iconColor: e.neutral.text.DEFAULT },
  focus: { border: e.neutral.border.DEFAULT, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.neutral.text.light, iconColor: e.neutral.text.DEFAULT },
  disabled: { border: e.neutral.border.strong, bg: e.neutral.surface.subtle, text: e.neutral.text.disabledDark, placeholder: e.neutral.text.disabledDark, helperText: e.neutral.text.light, iconColor: e.neutral.text.disabledDark },
  error: { border: e.error.border.DEFAULT, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.error.text.DEFAULT, iconColor: e.neutral.text.DEFAULT }
}, Tr = parseInt(T["label-s"].fontSize), Lr = T["label-s"].lineHeight, Dr = T["label-s"].fontWeight, _l = e.neutral.text.DEFAULT, _r = parseInt(T["paragraph-m"].fontSize), Ir = T["paragraph-m"].lineHeight, Ar = T["paragraph-m"].fontWeight, Il = parseInt(T["paragraph-s"].fontSize), Al = T["paragraph-s"].lineHeight, Sl = T["paragraph-s"].fontWeight, Fl = e.error.text.DEFAULT, Rl = e.neutral.border.light, Sr = 2, Ae = Re.default, Wl = 280, Ol = 12, Ul = Se["2xl"], Ml = 1e3, Bl = 4, $l = 16, Fr = 32, Ve = 4, Nl = 6, Hl = 11, zl = 14, Bt = "transparent", ut = e.neutral.surface.subtle, $t = e.neutral.text.DEFAULT, Nt = e.neutral.border.light, Ht = e.neutral.text.negative, zt = e.neutral.text.disabledDark, Pl = e.neutral.text.medium, Gl = e.neutral.text.light, Rr = e.neutral.text.DEFAULT, Pt = [
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
  "December"
], kn = [
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
  "Dec"
], wn = 36, Cn = 6;
function Wr(r) {
  const n = r.replace(/\D/g, "").slice(0, 8);
  return n.length <= 2 ? n : n.length <= 4 ? n.slice(0, 2) + " / " + n.slice(2) : n.slice(0, 2) + " / " + n.slice(2, 4) + " / " + n.slice(4, 8);
}
function Ke(r) {
  if (r.length !== 14) return null;
  const n = r.split(" / ");
  if (n.length !== 3) return null;
  const o = parseInt(n[0], 10) - 1, l = parseInt(n[1], 10), i = parseInt(n[2], 10);
  if (isNaN(o) || isNaN(l) || isNaN(i) || o < 0 || o > 11 || l < 1 || l > 31 || i < 1900 || i > 2100) return null;
  const d = new Date(i, o, l);
  return d.getMonth() !== o || d.getDate() !== l ? null : d;
}
function Or(r, n) {
  return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth() && r.getDate() === n.getDate();
}
function Yl(r) {
  const n = [
    { digitIdx: 0, template: "M" },
    { digitIdx: 1, template: "M" },
    { sep: " / ", afterDigits: 3 },
    { digitIdx: 2, template: "D" },
    { digitIdx: 3, template: "D" },
    { sep: " / ", afterDigits: 5 },
    { digitIdx: 4, template: "Y" },
    { digitIdx: 5, template: "Y" },
    { digitIdx: 6, template: "Y" },
    { digitIdx: 7, template: "Y" }
  ], o = [];
  let l = null;
  for (const i of n) {
    let d, u;
    "sep" in i ? (u = r.length < i.afterDigits, d = i.sep) : i.digitIdx < r.length ? (d = r[i.digitIdx], u = !1) : (d = i.template, u = !0), l === u && o.length > 0 ? o[o.length - 1].text += d : (o.push({ text: d, isPlaceholder: u }), l = u);
  }
  return o;
}
function jl(r, n, o) {
  if (n) {
    const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    if (r < l) return !0;
  }
  if (o) {
    const l = new Date(o.getFullYear(), o.getMonth(), o.getDate());
    if (r > l) return !0;
  }
  return !1;
}
function Zl(r, n) {
  const o = new Date(r, n, 1).getDay(), l = new Date(r, n + 1, 0).getDate(), i = new Date(r, n, 0).getDate(), d = [];
  for (let c = o - 1; c >= 0; c--) {
    const p = i - c, b = n === 0 ? 11 : n - 1, h = n === 0 ? r - 1 : r;
    d.push({ day: p, month: b, year: h, isCurrentMonth: !1 });
  }
  for (let c = 1; c <= l; c++)
    d.push({ day: c, month: n, year: r, isCurrentMonth: !0 });
  const u = 42 - d.length;
  for (let c = 1; c <= u; c++) {
    const p = n === 11 ? 0 : n + 1, b = n === 11 ? r + 1 : r;
    d.push({ day: c, month: p, year: b, isCurrentMonth: !1 });
  }
  return d;
}
function Xl({
  day: r,
  month: n,
  year: o,
  isCurrentMonth: l,
  isSelected: i,
  isToday: d,
  isDisabled: u,
  onClick: c
}) {
  const [p, b] = M(!1), h = i ? $t : p && !u ? ut : d && !i ? Nt : Bt, m = i ? Ht : u ? zt : l ? e.neutral.text.DEFAULT : Pl;
  return /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: () => !u && c(new Date(o, n, r)),
      onMouseEnter: () => b(!0),
      onMouseLeave: () => b(!1),
      disabled: u,
      tabIndex: l && !u ? 0 : -1,
      "aria-label": `${Pt[n]} ${r}, ${o}`,
      style: {
        width: Fr,
        height: Fr,
        borderRadius: Nl,
        border: "none",
        backgroundColor: h,
        color: m,
        fontSize: zl,
        fontWeight: i ? P.medium : P.regular,
        fontFamily: Ae,
        cursor: u ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 100ms ease",
        padding: 0,
        position: "relative"
      },
      children: [
        r,
        d && !i && /* @__PURE__ */ t("span", { style: {
          position: "absolute",
          bottom: 2,
          left: "50%",
          transform: "translateX(-50%)",
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: e.neutral.text.DEFAULT
        } })
      ]
    }
  );
}
function Vl({
  monthIndex: r,
  year: n,
  isSelected: o,
  isCurrent: l,
  isDisabled: i,
  onClick: d
}) {
  const [u, c] = M(!1), p = o ? $t : u && !i ? ut : l ? Nt : Bt, b = o ? Ht : i ? zt : e.neutral.text.DEFAULT;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => !i && d(r),
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      disabled: i,
      "aria-label": `${Pt[r]} ${n}`,
      style: {
        height: wn,
        borderRadius: Cn,
        border: "none",
        backgroundColor: p,
        color: b,
        fontSize: 13,
        fontWeight: o ? P.medium : P.regular,
        fontFamily: Ae,
        cursor: i ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 100ms ease",
        padding: 0
      },
      children: kn[r]
    }
  );
}
function Kl({
  year: r,
  isSelected: n,
  isCurrent: o,
  isDisabled: l,
  onClick: i
}) {
  const [d, u] = M(!1), c = n ? $t : d && !l ? ut : o ? Nt : Bt, p = n ? Ht : l ? zt : e.neutral.text.DEFAULT;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => !l && i(r),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      disabled: l,
      "aria-label": String(r),
      style: {
        height: wn,
        borderRadius: Cn,
        border: "none",
        backgroundColor: c,
        color: p,
        fontSize: 13,
        fontWeight: n ? P.medium : P.regular,
        fontFamily: Ae,
        cursor: l ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 100ms ease",
        padding: 0
      },
      children: r
    }
  );
}
function rs({
  label: r,
  helperText: n,
  required: o = !1,
  showInfoIcon: l = !1,
  disabled: i = !1,
  error: d = !1,
  size: u = "md",
  shape: c = "default",
  value: p,
  onChange: b,
  onDateChange: h,
  minDate: m,
  maxDate: w,
  name: k
}) {
  const g = p !== void 0, [x, E] = M(p ?? ""), L = g ? p : x, [v, f] = M(!1), O = /* @__PURE__ */ new Date(), [A, C] = M(O.getFullYear()), [te, G] = M(O.getMonth()), [D, se] = M(null), [F, R] = M("days"), [K, ge] = M(() => Math.floor(O.getFullYear() / 12) * 12), de = j(null), N = j(null), oe = j(null), ye = j(null), { height: re } = Dl[u], Ee = c === "rounded" ? Cl : wl, X = i ? De.disabled : d ? De.error : De.default, le = Ke(L), B = L.replace(/\D/g, ""), ce = Yl(B), fe = () => {
    const s = N.current;
    !s || i || (d || (s.style.borderColor = De.focus.border), s.style.outline = `${Sr}px solid ${Rl}`, s.style.outlineOffset = `${Sr}px`);
  }, ue = () => {
    const s = N.current;
    s && (s.style.borderColor = X.border, s.style.outline = "none", s.style.outlineOffset = "0px");
  }, H = (s) => {
    const I = Wr(s.target.value);
    g || E(I), b?.(I);
    const W = Ke(I);
    h?.(W);
  }, We = (s) => {
    if (s.key === "Backspace") {
      const I = oe.current?.selectionStart ?? 0, W = I >= 2 && I <= 4, J = I >= 7 && I <= 9;
      if (W || J) {
        s.preventDefault();
        const ae = W ? 2 : 7, Wn = L.slice(0, ae - 1) + L.slice(ae), vt = Wr(Wn);
        g || E(vt), b?.(vt), h?.(Ke(vt));
        const Yt = ae - 1;
        setTimeout(() => {
          oe.current?.setSelectionRange(Yt, Yt);
        }, 0);
      }
    }
    s.key === "Escape" && v && (s.preventDefault(), f(!1), ue());
  }, Oe = () => {
    fe();
  }, Ue = (s) => {
    const I = s.relatedTarget, W = de.current?.contains(I), J = ye.current?.contains(I);
    !W && !J && ue();
  }, z = () => {
    if (i || v) return;
    const s = N.current;
    s && (d || (s.style.borderColor = De.hover.border));
  }, Me = () => {
    if (i || v) return;
    const s = N.current;
    s && (s.style.borderColor = X.border);
  }, Te = () => {
    if (!i)
      if (v)
        f(!1), R("days"), ue();
      else {
        const s = Ke(L);
        s ? (G(s.getMonth()), C(s.getFullYear())) : (G(O.getMonth()), C(O.getFullYear())), R("days"), f(!0), fe();
      }
  }, pe = Ye(() => {
    if (N.current) {
      const s = N.current.getBoundingClientRect();
      se({
        top: s.bottom + Bl + window.scrollY,
        left: s.left + window.scrollX
      });
    }
  }, []);
  xe(() => {
    if (v)
      return pe(), window.addEventListener("scroll", pe, !0), window.addEventListener("resize", pe), () => {
        window.removeEventListener("scroll", pe, !0), window.removeEventListener("resize", pe);
      };
  }, [v, pe]), xe(() => {
    if (!v) return;
    const s = (I) => {
      const W = I.target, J = de.current?.contains(W), ae = ye.current?.contains(W);
      !J && !ae && (f(!1), R("days"), ue());
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [v, d, X.border]);
  const He = () => {
    te === 0 ? (G(11), C((s) => s - 1)) : G((s) => s - 1);
  }, je = () => {
    te === 11 ? (G(0), C((s) => s + 1)) : G((s) => s + 1);
  }, ht = (s) => {
    const I = String(s.getMonth() + 1).padStart(2, "0"), W = String(s.getDate()).padStart(2, "0"), J = String(s.getFullYear()), ae = `${I} / ${W} / ${J}`;
    g || E(ae), b?.(ae), h?.(s), f(!1), R("days"), ue(), oe.current?.focus();
  }, gt = (s) => {
    s.key === "Escape" && (s.preventDefault(), f(!1), R("days"), ue(), oe.current?.focus());
  }, ft = (s, I) => !!(m && new Date(I, s + 1, 0) < new Date(m.getFullYear(), m.getMonth(), m.getDate()) || w && new Date(I, s, 1) > new Date(w.getFullYear(), w.getMonth(), w.getDate())), pt = (s) => !!(m && s < m.getFullYear() || w && s > w.getFullYear()), bt = () => {
    F === "days" ? R("months") : F === "months" && (ge(Math.floor(A / 12) * 12), R("years"));
  }, xt = (s) => {
    G(s), R("days");
  }, y = (s) => {
    C(s), R("months");
  }, S = () => {
    F === "days" ? He() : F === "months" ? C((s) => s - 1) : ge((s) => s - 12);
  }, _ = () => {
    F === "days" ? je() : F === "months" ? C((s) => s + 1) : ge((s) => s + 12);
  }, ke = F === "days" ? `${Pt[te]} ${A}` : F === "months" ? String(A) : `${K} – ${K + 11}`, ie = F !== "years", Gt = F === "days" ? ["Previous month", "Next month"] : F === "months" ? ["Previous year", "Next year"] : ["Previous 12 years", "Next 12 years"], Fn = r || o || l, Rn = Zl(A, te);
  return /* @__PURE__ */ a(
    "div",
    {
      ref: de,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: El,
        width: "100%"
      },
      children: [
        Fn && /* @__PURE__ */ a("div", { style: { display: "flex", gap: Tl, alignItems: "center" }, children: [
          r && /* @__PURE__ */ t("label", { style: {
            fontSize: Tr,
            lineHeight: Lr,
            fontWeight: Dr,
            color: _l
          }, children: r }),
          o && /* @__PURE__ */ t("span", { style: {
            fontSize: Tr,
            lineHeight: Lr,
            fontWeight: Dr,
            color: Fl
          }, children: "*" }),
          l && /* @__PURE__ */ t(Mt, { size: "md", style: { color: i ? De.disabled.iconColor : e.neutral.text.DEFAULT } })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            ref: N,
            onMouseEnter: z,
            onMouseLeave: Me,
            style: {
              display: "flex",
              alignItems: "center",
              height: re,
              paddingLeft: wr,
              paddingRight: wr,
              paddingTop: Cr,
              paddingBottom: Cr,
              backgroundColor: X.bg,
              border: `${kl}px solid ${X.border}`,
              borderRadius: Ee,
              cursor: i ? "not-allowed" : "text",
              transition: "border-color 150ms ease"
            },
            children: [
              /* @__PURE__ */ a("div", { style: { position: "relative", flex: 1 }, children: [
                B.length < 8 && /* @__PURE__ */ t(
                  "span",
                  {
                    "aria-hidden": "true",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      pointerEvents: "none",
                      fontSize: _r,
                      lineHeight: Ir,
                      fontWeight: Ar,
                      fontFamily: Ae,
                      letterSpacing: "0.02em"
                    },
                    children: ce.map((s, I) => /* @__PURE__ */ t(
                      "span",
                      {
                        style: { color: s.isPlaceholder ? X.placeholder : "transparent" },
                        children: s.text
                      },
                      I
                    ))
                  }
                ),
                /* @__PURE__ */ t(
                  "input",
                  {
                    ref: oe,
                    type: "text",
                    inputMode: "numeric",
                    value: L,
                    disabled: i,
                    onChange: H,
                    onKeyDown: We,
                    onFocus: Oe,
                    onBlur: Ue,
                    "aria-label": r ?? "Date",
                    style: {
                      position: "relative",
                      flex: 1,
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontSize: _r,
                      lineHeight: Ir,
                      fontWeight: Ar,
                      color: X.text,
                      cursor: i ? "not-allowed" : "text",
                      padding: 0,
                      width: "100%",
                      fontFamily: Ae,
                      letterSpacing: "0.02em"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: Te,
                  disabled: i,
                  "aria-label": "Open date picker",
                  "aria-expanded": v,
                  "aria-haspopup": "dialog",
                  tabIndex: -1,
                  style: {
                    flexShrink: 0,
                    width: Er,
                    height: Er,
                    marginLeft: Ll,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    color: X.iconColor,
                    cursor: i ? "not-allowed" : "pointer"
                  },
                  children: /* @__PURE__ */ t(bl, { size: "md", style: { color: X.iconColor } })
                }
              )
            ]
          }
        ),
        n && /* @__PURE__ */ t("p", { style: {
          fontSize: Il,
          lineHeight: Al,
          fontWeight: Sl,
          color: d ? De.error.helperText : X.helperText,
          margin: 0
        }, children: n }),
        k && /* @__PURE__ */ t("input", { type: "hidden", name: k, value: L }),
        v && D && ct(
          /* @__PURE__ */ a(
            "div",
            {
              ref: ye,
              role: "dialog",
              "aria-label": "Date picker",
              onKeyDown: gt,
              style: {
                position: "absolute",
                top: D.top,
                left: D.left,
                width: Wl,
                zIndex: Ml,
                backgroundColor: e.neutral.surface.negative,
                borderRadius: Ol,
                boxShadow: Ul,
                padding: $l,
                fontFamily: Ae
              },
              children: [
                /* @__PURE__ */ a("div", { style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12
                }, children: [
                  /* @__PURE__ */ t(
                    Fe,
                    {
                      icon: /* @__PURE__ */ t(yn, { size: "sm" }),
                      "aria-label": Gt[0],
                      variant: "ghost",
                      size: "sm",
                      pill: !1,
                      onClick: S
                    }
                  ),
                  ie ? /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      onClick: bt,
                      "aria-label": F === "days" ? "Switch to month selection" : "Switch to year selection",
                      style: {
                        fontSize: 14,
                        fontWeight: P.medium,
                        color: Rr,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        padding: "2px 8px",
                        borderRadius: 6,
                        transition: "background-color 100ms ease",
                        fontFamily: Ae
                      },
                      onMouseEnter: (s) => {
                        s.currentTarget.style.backgroundColor = ut;
                      },
                      onMouseLeave: (s) => {
                        s.currentTarget.style.backgroundColor = "transparent";
                      },
                      children: ke
                    }
                  ) : /* @__PURE__ */ t("span", { style: {
                    fontSize: 14,
                    fontWeight: P.medium,
                    color: Rr,
                    userSelect: "none"
                  }, children: ke }),
                  /* @__PURE__ */ t(
                    Fe,
                    {
                      icon: /* @__PURE__ */ t(xl, { size: "sm" }),
                      "aria-label": Gt[1],
                      variant: "ghost",
                      size: "sm",
                      pill: !1,
                      onClick: _
                    }
                  )
                ] }),
                F === "days" && /* @__PURE__ */ a(Ie, { children: [
                  /* @__PURE__ */ t("div", { style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    marginBottom: Ve
                  }, children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((s) => /* @__PURE__ */ t("div", { style: {
                    textAlign: "center",
                    fontSize: Hl,
                    fontWeight: 500,
                    color: Gl,
                    paddingBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    userSelect: "none"
                  }, children: s }, s)) }),
                  /* @__PURE__ */ t("div", { style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: Ve,
                    justifyItems: "center"
                  }, children: Rn.map((s) => {
                    const I = new Date(s.year, s.month, s.day), W = le ? Or(I, le) : !1, J = Or(I, O), ae = jl(I, m, w);
                    return /* @__PURE__ */ t(
                      Xl,
                      {
                        day: s.day,
                        month: s.month,
                        year: s.year,
                        isCurrentMonth: s.isCurrentMonth,
                        isSelected: W,
                        isToday: J,
                        isDisabled: ae,
                        onClick: ht
                      },
                      `${s.year}-${s.month}-${s.day}`
                    );
                  }) })
                ] }),
                F === "months" && /* @__PURE__ */ t("div", { style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: Ve
                }, children: kn.map((s, I) => {
                  const W = le ? le.getFullYear() === A && le.getMonth() === I : !1, J = O.getFullYear() === A && O.getMonth() === I;
                  return /* @__PURE__ */ t(
                    Vl,
                    {
                      monthIndex: I,
                      year: A,
                      isSelected: W,
                      isCurrent: J && !W,
                      isDisabled: ft(I, A),
                      onClick: xt
                    },
                    I
                  );
                }) }),
                F === "years" && /* @__PURE__ */ t("div", { style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: Ve
                }, children: Array.from({ length: 12 }, (s, I) => {
                  const W = K + I, J = le ? le.getFullYear() === W : !1, ae = O.getFullYear() === W;
                  return /* @__PURE__ */ t(
                    Kl,
                    {
                      year: W,
                      isSelected: J,
                      isCurrent: ae && !J,
                      isDisabled: pt(W),
                      onClick: y
                    },
                    W
                  );
                }) })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}
const Jl = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M9 16a3 3 0 0 0-3 3 1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 3 3 0 0 0-3-3zm-5 3a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5 3 3 0 0 1-3 3H7a3 3 0 0 1-3-3M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7",
          clipRule: "evenodd"
        }
      )
    }
  );
}, Ql = {
  sm: { box: 32, icon: 14 },
  // spacing.xl
  md: { box: 40, icon: 16 },
  // spacing.xxl
  lg: { box: 48, icon: 20 }
  // spacing.xxxl
}, ql = 999, ei = e.primary.surface.subtle, ti = e.primary.border.DEFAULT;
function ns({
  size: r = "md",
  src: n,
  alt: o = "",
  fallback: l,
  bgColor: i,
  color: d,
  className: u = "",
  style: c,
  ...p
}) {
  const b = Ql[r], h = i ?? ei, m = d ?? ti, w = {
    width: b.box,
    height: b.box,
    borderRadius: ql,
    backgroundColor: n ? "transparent" : h,
    overflow: "hidden",
    ...c
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: ["inline-flex items-center justify-center shrink-0", u].filter(Boolean).join(" "),
      style: w,
      ...p,
      children: n ? /* @__PURE__ */ t(
        "img",
        {
          src: n,
          alt: o,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }
      ) : l ?? /* @__PURE__ */ t(Jl, { size: b.icon, style: { color: m } })
    }
  );
}
const ri = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          d: "M2 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 19a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
        }
      )
    }
  );
}, ni = e.neutral.surface.negative, oi = e.neutral.border.light, li = 1, Ur = 12, Mr = 48, ii = 50, ai = 1200, Br = 1200, Je = 16;
function si(r, n) {
  const o = `[data-navbar-id="${r}"]`;
  return n ? `
  /* Desktop: hide mobile-right off-screen (keeps SVG gradients alive) */
  ${o} .glow-navbar-right-mobile {
    position: absolute;
    width: 1px; height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  @container (max-width: ${Br - 1}px) {
    ${o} .glow-navbar-center { display: none !important; }
    ${o} .glow-navbar-right-desktop {
      position: absolute !important;
      width: 1px !important; height: 1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
    }
    ${o} .glow-navbar-right-mobile {
      position: static !important;
      width: auto !important; height: auto !important;
      overflow: visible !important;
      clip: auto !important;
      white-space: normal !important;
    }
    ${o} .glow-navbar-root {
      padding-left: ${Je}px !important;
      padding-right: ${Je}px !important;
    }
    ${o} .glow-navbar-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
` : `
  @container (max-width: ${Br - 1}px) {
    ${o} .glow-navbar-center { display: none !important; }
    ${o} .glow-navbar-right-desktop { display: none !important; }
    ${o} .glow-navbar-root {
      padding-left: ${Je}px !important;
      padding-right: ${Je}px !important;
    }
    ${o} .glow-navbar-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
}
const En = On(null);
function di({ logo: r, onMenuClick: n }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center gap-s", children: [
    n && /* @__PURE__ */ t(
      Fe,
      {
        icon: /* @__PURE__ */ t(ri, { size: "md" }),
        "aria-label": "Menu",
        variant: "ghost",
        size: "md",
        onClick: n
      }
    ),
    r
  ] });
}
function ci({ value: r, onChange: n, children: o }) {
  return /* @__PURE__ */ t(En.Provider, { value: { value: r, onChange: n }, children: /* @__PURE__ */ t("div", { className: "flex items-center gap-xxs", children: o }) });
}
function ui({ value: r, children: n }) {
  const o = Mn(En);
  if (!o)
    throw new Error("NavBar.Tab must be used inside NavBar.Tabs");
  const l = o.value === r;
  return /* @__PURE__ */ t(
    Pe,
    {
      variant: l ? "secondary" : "subtle",
      size: "sm",
      pill: !0,
      onClick: () => o.onChange(r),
      children: n
    }
  );
}
function hi({
  left: r,
  center: n,
  right: o,
  sticky: l = !0,
  maxWidth: i = ai,
  responsive: d = !0,
  mobileRight: u,
  className: c = "",
  style: p,
  ...b
}) {
  const h = Un(), m = {
    containerType: "inline-size",
    ...l && { position: "sticky", top: 0, zIndex: ii }
  }, w = {
    backgroundColor: ni,
    borderBottom: `${li}px solid ${oi}`,
    paddingTop: Ur,
    paddingBottom: Ur,
    paddingLeft: Mr,
    paddingRight: Mr,
    ...p
  }, k = {
    maxWidth: i
  };
  return /* @__PURE__ */ t("div", { style: m, "data-navbar-id": h, children: /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      className: ["glow-navbar-root", c].filter(Boolean).join(" "),
      style: w,
      ...b,
      children: [
        d && /* @__PURE__ */ t("style", { children: si(h, !!u) }),
        /* @__PURE__ */ a(
          "div",
          {
            className: "glow-navbar-grid mx-auto grid grid-cols-[1fr_auto_1fr] items-center",
            style: k,
            children: [
              r ? /* @__PURE__ */ t("div", { className: "justify-self-start", children: r }) : /* @__PURE__ */ t("div", {}),
              n ? /* @__PURE__ */ t("div", { className: "glow-navbar-center justify-self-center", children: n }) : /* @__PURE__ */ t("div", {}),
              /* @__PURE__ */ a("div", { className: "justify-self-end", children: [
                o && /* @__PURE__ */ t("div", { className: "glow-navbar-right-desktop", children: o }),
                u && /* @__PURE__ */ t("div", { className: "glow-navbar-right-mobile", children: u }),
                !o && !u && null
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
const os = Object.assign(hi, {
  Brand: di,
  Tabs: ci,
  Tab: ui
}), gi = {
  outline: {
    bg: e.neutral.surface.negative,
    // #ffffff
    border: e.neutral.border.strong,
    // #e0e0e0
    borderWidth: 1,
    shadow: Se.none
    // none
  },
  elevated: {
    bg: e.neutral.surface.negative,
    // #ffffff
    border: "transparent",
    borderWidth: 0,
    shadow: Se.card
    // 0px 2px 8px rgba(0,0,0,0.08)
  },
  filled: {
    bg: e.neutral.surface.subtle,
    // #f2f2f2
    border: "transparent",
    borderWidth: 0,
    shadow: Se.none
    // none
  }
}, fi = {
  sm: parseInt(me.xs),
  // 12px
  md: parseInt(me.sn),
  // 16px
  lg: parseInt(me.ln)
  // 24px
}, pi = {
  none: 0,
  sm: parseInt(Z.s),
  // 16px
  md: parseInt(Z.m),
  // 20px
  lg: parseInt(Z.xl)
  // 32px
}, It = Se.lg;
function At({
  variant: r = "outline",
  radius: n = "lg",
  padding: o = "md",
  interactive: l = !1,
  isActive: i = !1,
  as: d = "div",
  children: u,
  className: c = "",
  style: p,
  ...b
}) {
  const h = gi[r], m = fi[n], w = pi[o], k = {
    backgroundColor: h.bg,
    borderColor: h.border,
    borderWidth: h.borderWidth,
    borderStyle: h.borderWidth ? "solid" : "none",
    borderRadius: m,
    padding: w,
    boxShadow: i ? It : h.shadow,
    overflow: "hidden",
    boxSizing: "border-box",
    transition: l || i ? "box-shadow 150ms ease, transform 150ms ease" : void 0,
    cursor: l ? "pointer" : void 0,
    ...p
  };
  return /* @__PURE__ */ t(
    d,
    {
      className: c || void 0,
      style: k,
      onMouseEnter: l ? (x) => {
        const E = x.currentTarget;
        E.style.boxShadow = It, E.style.transform = "translateY(-1px)";
      } : void 0,
      onMouseLeave: l ? (x) => {
        const E = x.currentTarget;
        E.style.boxShadow = i ? It : h.shadow, E.style.transform = "translateY(0)";
      } : void 0,
      ...b,
      children: u
    }
  );
}
function bi({ size: r }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: r,
      height: r,
      viewBox: "0 0 8 8",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: /* @__PURE__ */ t(
        "path",
        {
          d: "M1 1l6 6M7 1l-6 6",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round"
        }
      )
    }
  );
}
const xi = {
  neutral: {
    default: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT },
    // #f2f2f2 bg, #000 text
    hover: { bg: e.neutral.surface.light, text: e.neutral.text.DEFAULT },
    // #e0e0e0 bg
    focus: { bg: e.neutral.surface.light, text: e.neutral.text.DEFAULT, focusBorder: e.neutral.border.light, focusBorderWidth: 2 },
    selected: { bg: e.neutral.surface.DEFAULT, text: e.neutral.text.negative },
    // #000 bg, #fff text
    disabled: { bg: e.neutral.surface.disabled, text: e.neutral.text.disabledDark }
    // #d4d4d4 bg, #949494 text
  },
  success: {
    default: { bg: e.success.surface.subtle, text: e.success.text.dark },
    // #f1f9f1 bg → #e2f3e3 (Figma green/100)
    hover: { bg: e.success.surface.light, text: e.success.text.dark },
    // #c2e5c3 bg
    focus: { bg: e.success.surface.light, text: e.success.text.dark, focusBorder: e.success.border.light, focusBorderWidth: 2 },
    selected: { bg: e.success.surface.DEFAULT, text: e.neutral.text.negative },
    // #5bb95e bg, #fff text
    disabled: { bg: e.success.surface.disabled, text: e.neutral.text.disabledDark }
    // #c2e5c3 bg, #949494 text
  },
  error: {
    default: { bg: e.error.surface.subtle, text: e.error.text.DEFAULT },
    // #feecec bg → #fcd9d9 (Figma red/100)
    hover: { bg: e.error.surface.light, text: e.error.text.dark },
    // #f78c8c bg
    focus: { bg: e.error.surface.light, text: e.error.text.DEFAULT, focusBorder: e.error.border.light, focusBorderWidth: 2 },
    selected: { bg: e.error.surface.DEFAULT, text: e.neutral.text.negative },
    // #f23c3c bg, #fff text
    disabled: { bg: e.error.surface.disabled, text: e.error.text.disabled }
    // #fab3b3 bg, #fcd9d9 text
  },
  info: {
    default: { bg: e["accent-blue"].surface.light, text: e["accent-blue"].text.dark },
    // #ebf0ff bg, #245eff text
    hover: { bg: e["accent-blue"].surface.hover, text: e["accent-blue"].text.dark },
    // #d3dfff bg
    focus: { bg: e["accent-blue"].surface.hover, text: e["accent-blue"].text.dark, focusBorder: e["accent-blue"].border.light, focusBorderWidth: 2 },
    selected: { bg: e["accent-blue"].surface.selected, text: e.neutral.text.negative },
    // #618bff bg, #fff text
    disabled: { bg: e["accent-blue"].surface.disabled, text: e.neutral.text.disabledDark }
    // #d3dfff bg, #949494 text
  },
  warning: {
    default: { bg: e["accent-yellow"].surface.light, text: e["accent-yellow"].text.dark },
    // #fff3c7 bg, #947400 text
    hover: { bg: e["accent-yellow"].surface.hover, text: e["accent-yellow"].text.dark },
    // #ffe78f bg
    focus: { bg: e["accent-yellow"].surface.hover, text: e["accent-yellow"].text.dark, focusBorder: e["accent-yellow"].border.light, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.negative },
    // #ffd129 bg, #fff text
    disabled: { bg: e["accent-yellow"].surface.disabled, text: e.neutral.text.disabledDark }
    // #ffe78f bg, #949494 text
  },
  recommended: {
    default: { bg: "transparent", text: e.neutral.text.DEFAULT, background: `linear-gradient(to right, ${e["accent-yellow"].surface.light}, ${e.success.surface.light})` },
    // gradient yellow→green
    hover: { bg: "transparent", text: e.neutral.text.DEFAULT, background: `linear-gradient(to right, ${e["accent-yellow"].surface.hover}, ${e.success.surface.light})` },
    focus: { bg: "transparent", text: e.neutral.text.DEFAULT, background: `linear-gradient(to right, ${e["accent-yellow"].surface.light}, ${e.success.surface.light})`, focusBorder: e["accent-yellow"].border.DEFAULT, focusBorderWidth: 2 },
    selected: { bg: "transparent", text: e.neutral.text.DEFAULT, background: `linear-gradient(to right, ${e["accent-yellow"].surface.hover}, ${e.success.surface.hover})` },
    disabled: { bg: e.neutral.surface.disabled, text: e.neutral.text.disabledDark }
    // fallback solid when disabled
  },
  hsa: {
    default: { bg: e["accent-yellow"].surface.light, text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1 },
    // #fff3c7 bg, #ffdb57 border
    hover: { bg: e["accent-yellow"].surface.hover, text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1 },
    focus: { bg: e["accent-yellow"].surface.light, text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1, focusBorder: e["accent-yellow"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.negative, border: e["accent-yellow"].border.darker, borderWidth: 1 },
    disabled: { bg: e["accent-yellow"].surface.disabled, text: e.neutral.text.disabledDark, border: e["accent-yellow"].border.light, borderWidth: 1 }
  },
  lfsa: {
    default: { bg: e["accent-purple"].surface.light, text: e["accent-purple"].text.dark, border: e["accent-purple"].border.DEFAULT, borderWidth: 1 },
    // #e7dafb bg, #b38cf3 border
    hover: { bg: e["accent-purple"].surface.hover, text: e["accent-purple"].text.dark, border: e["accent-purple"].border.DEFAULT, borderWidth: 1 },
    focus: { bg: e["accent-purple"].surface.light, text: e["accent-purple"].text.dark, border: e["accent-purple"].border.DEFAULT, borderWidth: 1, focusBorder: e["accent-purple"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-purple"].surface.selected, text: e.neutral.text.negative, border: e["accent-purple"].border.darker, borderWidth: 1 },
    disabled: { bg: e["accent-purple"].surface.disabled, text: e.neutral.text.disabledDark, border: e["accent-purple"].border.light, borderWidth: 1 }
  }
}, vi = {
  neutral: {
    default: { bg: "transparent", text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1 },
    hover: { bg: e.neutral.surface.subtle, text: e.neutral.text.DEFAULT, border: e.neutral.border.xstrong, borderWidth: 1 },
    focus: { bg: "transparent", text: e.neutral.text.DEFAULT, border: e.neutral.border.strong, borderWidth: 1, focusBorder: e.neutral.border.strong, focusBorderWidth: 2 },
    selected: { bg: e.neutral.surface.DEFAULT, text: e.neutral.text.negative, border: e.neutral.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e.neutral.border.light, borderWidth: 1 }
  },
  success: {
    default: { bg: "transparent", text: e.success.text.dark, border: e.success.border.DEFAULT, borderWidth: 1 },
    hover: { bg: e.success.surface.subtle, text: e.success.text.dark, border: e.success.border.DEFAULT, borderWidth: 1 },
    focus: { bg: "transparent", text: e.success.text.dark, border: e.success.border.DEFAULT, borderWidth: 1, focusBorder: e.success.border.light, focusBorderWidth: 2 },
    selected: { bg: e.success.surface.DEFAULT, text: e.neutral.text.negative, border: e.success.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e.success.border.light, borderWidth: 1 }
  },
  error: {
    default: { bg: "transparent", text: e.error.text.DEFAULT, border: e.error.border.DEFAULT, borderWidth: 1 },
    hover: { bg: e.error.surface.subtle, text: e.error.text.dark, border: e.error.border.DEFAULT, borderWidth: 1 },
    focus: { bg: "transparent", text: e.error.text.DEFAULT, border: e.error.border.DEFAULT, borderWidth: 1, focusBorder: e.error.border.light, focusBorderWidth: 2 },
    selected: { bg: e.error.surface.DEFAULT, text: e.neutral.text.negative, border: e.error.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.error.text.disabled, border: e.error.border.light, borderWidth: 1 }
  },
  info: {
    default: { bg: "transparent", text: e["accent-blue"].text.dark, border: e["accent-blue"].border.DEFAULT, borderWidth: 1 },
    hover: { bg: e["accent-blue"].surface.subtle, text: e["accent-blue"].text.dark, border: e["accent-blue"].border.DEFAULT, borderWidth: 1 },
    focus: { bg: "transparent", text: e["accent-blue"].text.dark, border: e["accent-blue"].border.DEFAULT, borderWidth: 1, focusBorder: e["accent-blue"].border.light, focusBorderWidth: 2 },
    selected: { bg: e["accent-blue"].surface.selected, text: e.neutral.text.negative, border: e["accent-blue"].border.darker, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e["accent-blue"].border.light, borderWidth: 1 }
  },
  warning: {
    default: { bg: "transparent", text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1 },
    hover: { bg: e["accent-yellow"].surface.subtle, text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1 },
    focus: { bg: "transparent", text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1, focusBorder: e["accent-yellow"].border.light, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.negative, border: e["accent-yellow"].border.darker, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e["accent-yellow"].border.light, borderWidth: 1 }
  },
  recommended: {
    default: { bg: "transparent", text: e.neutral.text.DEFAULT, border: e["accent-yellow"].surface.light, borderWidth: 2 },
    // Figma: 2nd Recommended — yellow border
    hover: { bg: e["accent-yellow"].surface.subtle, text: e.neutral.text.DEFAULT, border: e["accent-yellow"].border.DEFAULT, borderWidth: 2 },
    focus: { bg: "transparent", text: e.neutral.text.DEFAULT, border: e["accent-yellow"].surface.light, borderWidth: 2, focusBorder: e["accent-yellow"].border.DEFAULT, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.light, text: e.neutral.text.DEFAULT, border: e["accent-yellow"].border.DEFAULT, borderWidth: 2 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e.neutral.border.light, borderWidth: 2 }
  },
  hsa: {
    default: { bg: "transparent", text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1 },
    hover: { bg: e["accent-yellow"].surface.subtle, text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1 },
    focus: { bg: "transparent", text: e["accent-yellow"].text.dark, border: e["accent-yellow"].border.DEFAULT, borderWidth: 1, focusBorder: e["accent-yellow"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.negative, border: e["accent-yellow"].border.darker, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e["accent-yellow"].border.light, borderWidth: 1 }
  },
  lfsa: {
    default: { bg: "transparent", text: e["accent-purple"].text.dark, border: e["accent-purple"].border.DEFAULT, borderWidth: 1 },
    hover: { bg: e["accent-purple"].surface.subtle, text: e["accent-purple"].text.dark, border: e["accent-purple"].border.DEFAULT, borderWidth: 1 },
    focus: { bg: "transparent", text: e["accent-purple"].text.dark, border: e["accent-purple"].border.DEFAULT, borderWidth: 1, focusBorder: e["accent-purple"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-purple"].surface.selected, text: e.neutral.text.negative, border: e["accent-purple"].border.darker, borderWidth: 1 },
    disabled: { bg: "transparent", text: e.neutral.text.disabledDark, border: e["accent-purple"].border.light, borderWidth: 1 }
  }
}, mi = {
  neutral: {
    default: { bg: e.neutral.surface.DEFAULT, text: e.neutral.text.negative },
    // #000 bg, #fff text
    hover: { bg: e.neutral.surface.hover, text: e.neutral.text.negative },
    // #404040 bg
    focus: { bg: e.neutral.surface.focused, text: e.neutral.text.negative, focusBorder: e.neutral.border.light, focusBorderWidth: 2 },
    selected: { bg: e.neutral.surface.DEFAULT, text: e.neutral.text.negative },
    // same as default (already filled)
    disabled: { bg: e.neutral.surface.disabled, text: e.neutral.text.disabledDark }
  },
  success: {
    default: { bg: e.success.surface.DEFAULT, text: e.neutral.text.negative },
    // #5bb95e bg
    hover: { bg: e.success.surface.hover, text: e.neutral.text.negative },
    // #7ec881 bg
    focus: { bg: e.success.surface.focused, text: e.neutral.text.negative, focusBorder: e.success.border.light, focusBorderWidth: 2 },
    selected: { bg: e.success.surface.selected, text: e.neutral.text.negative },
    // #429a45 bg
    disabled: { bg: e.success.surface.disabled, text: e.neutral.text.disabledDark }
  },
  error: {
    default: { bg: e.error.surface.DEFAULT, text: e.neutral.text.negative },
    // #f23c3c bg
    hover: { bg: e.error.surface.hover, text: e.neutral.text.negative },
    // #f46161 bg
    focus: { bg: e.error.surface.focused, text: e.neutral.text.negative, focusBorder: e.error.border.light, focusBorderWidth: 2 },
    selected: { bg: e.error.surface.selected, text: e.neutral.text.negative },
    // #e10f0f bg
    disabled: { bg: e.error.surface.disabled, text: e.error.text.disabled }
  },
  info: {
    default: { bg: e["accent-blue"].surface.selected, text: e.neutral.text.negative },
    // #618bff bg
    hover: { bg: e["accent-blue"].surface.DEFAULT, text: e.neutral.text.negative },
    // #99b4ff bg
    focus: { bg: e["accent-blue"].surface.selected, text: e.neutral.text.negative, focusBorder: e["accent-blue"].border.light, focusBorderWidth: 2 },
    selected: { bg: e["accent-blue"].surface.selected, text: e.neutral.text.negative },
    disabled: { bg: e["accent-blue"].surface.disabled, text: e.neutral.text.disabledDark }
  },
  warning: {
    default: { bg: e["accent-yellow"].surface.DEFAULT, text: e.neutral.text.DEFAULT },
    // #ffdb57 bg, black text
    hover: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.DEFAULT },
    // #ffd129 bg
    focus: { bg: e["accent-yellow"].surface.DEFAULT, text: e.neutral.text.DEFAULT, focusBorder: e["accent-yellow"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.DEFAULT },
    disabled: { bg: e["accent-yellow"].surface.disabled, text: e.neutral.text.disabledDark }
  },
  recommended: {
    default: { bg: "transparent", text: e.neutral.text.negative, background: `linear-gradient(to right, ${e["accent-yellow"].surface.DEFAULT}, ${e.success.surface.DEFAULT})` },
    hover: { bg: "transparent", text: e.neutral.text.negative, background: `linear-gradient(to right, ${e["accent-yellow"].surface.selected}, ${e.success.surface.hover})` },
    focus: { bg: "transparent", text: e.neutral.text.negative, background: `linear-gradient(to right, ${e["accent-yellow"].surface.DEFAULT}, ${e.success.surface.DEFAULT})`, focusBorder: e["accent-yellow"].border.DEFAULT, focusBorderWidth: 2 },
    selected: { bg: "transparent", text: e.neutral.text.negative, background: `linear-gradient(to right, ${e["accent-yellow"].surface.selected}, ${e.success.surface.selected})` },
    disabled: { bg: e.neutral.surface.disabled, text: e.neutral.text.disabledDark }
  },
  hsa: {
    default: { bg: e["accent-yellow"].surface.DEFAULT, text: e.neutral.text.DEFAULT },
    // #ffdb57 bg
    hover: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.DEFAULT },
    focus: { bg: e["accent-yellow"].surface.DEFAULT, text: e.neutral.text.DEFAULT, focusBorder: e["accent-yellow"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-yellow"].surface.selected, text: e.neutral.text.DEFAULT },
    disabled: { bg: e["accent-yellow"].surface.disabled, text: e.neutral.text.disabledDark }
  },
  lfsa: {
    default: { bg: e["accent-purple"].surface.DEFAULT, text: e.neutral.text.negative },
    // #b38cf3 bg
    hover: { bg: e["accent-purple"].surface.selected, text: e.neutral.text.negative },
    focus: { bg: e["accent-purple"].surface.DEFAULT, text: e.neutral.text.negative, focusBorder: e["accent-purple"].border.darker, focusBorderWidth: 2 },
    selected: { bg: e["accent-purple"].surface.selected, text: e.neutral.text.negative },
    disabled: { bg: e["accent-purple"].surface.disabled, text: e.neutral.text.disabledDark }
  }
}, yi = {
  subtle: xi,
  outline: vi,
  filled: mi
}, ki = {
  sm: { height: 28, paddingX: 10, paddingY: 4, gap: 4, iconSize: 14, fontSize: 14, lineHeight: 18, closeSize: 18, closeIconSize: 8 },
  md: { height: 32, paddingX: 12, paddingY: 6, gap: 6, iconSize: 16, fontSize: 14, lineHeight: 18, closeSize: 20, closeIconSize: 8 },
  lg: { height: 36, paddingX: 14, paddingY: 8, gap: 8, iconSize: 18, fontSize: 16, lineHeight: 19, closeSize: 22, closeIconSize: 10 }
};
function Tn({
  variant: r = "subtle",
  color: n = "neutral",
  size: o = "md",
  selected: l = !1,
  removable: i = !1,
  onRemove: d,
  disabled: u = !1,
  iconLeft: c,
  onClick: p,
  children: b,
  className: h = "",
  style: m,
  ...w
}) {
  const k = yi[r][n], g = ki[o], x = !!p && !u, E = u ? k.disabled : l ? k.selected : k.default, L = {
    // Always use `background` (shorthand) for both solid fills and gradients.
    // React 19 conflicts when mixing `background` and `backgroundColor` across rerenders.
    background: E.background ?? E.bg,
    color: E.text,
    borderColor: E.border ?? "transparent",
    borderWidth: E.borderWidth ?? 0,
    borderStyle: E.border ? "solid" : "none",
    // Sizing
    height: g.height,
    paddingLeft: g.paddingX,
    paddingRight: i ? g.paddingX - 2 : g.paddingX,
    // slightly tighter when close button present
    borderRadius: 999,
    // radii.full — always pill
    gap: g.gap,
    // Typography
    fontSize: g.fontSize,
    lineHeight: `${g.lineHeight}px`,
    fontWeight: P.medium,
    // Misc
    cursor: u ? "not-allowed" : x ? "pointer" : "default",
    opacity: u ? 1 : void 0,
    // colors handle disabled, not opacity
    transition: "background 150ms ease, color 150ms ease, border-color 150ms ease",
    userSelect: "none",
    boxSizing: "border-box",
    ...m
  };
  return /* @__PURE__ */ a(
    "div",
    {
      role: x ? "button" : void 0,
      tabIndex: x ? 0 : void 0,
      "aria-selected": l || void 0,
      "aria-disabled": u || void 0,
      "data-variant": r,
      "data-color": n,
      "data-size": o,
      "data-selected": l || void 0,
      className: [
        "inline-flex items-center shrink-0 font-default whitespace-nowrap",
        h
      ].filter(Boolean).join(" "),
      style: L,
      onClick: x ? p : void 0,
      onMouseEnter: x ? (v) => {
        const f = v.currentTarget;
        l || (f.style.background = k.hover.background ?? k.hover.bg, f.style.color = k.hover.text, k.hover.border && (f.style.borderColor = k.hover.border));
      } : void 0,
      onMouseLeave: x ? (v) => {
        const f = v.currentTarget;
        l || (f.style.background = E.background ?? E.bg, f.style.color = E.text, f.style.borderColor = E.border ?? "transparent", document.activeElement !== f && (f.style.outline = "none", f.style.outlineOffset = "0px"));
      } : void 0,
      onFocus: x ? (v) => {
        const f = v.currentTarget;
        f.matches(":focus-visible") && (f.style.outline = `${k.focus.focusBorderWidth}px solid ${k.focus.focusBorder}`, f.style.outlineOffset = "2px");
      } : void 0,
      onBlur: x ? (v) => {
        const f = v.currentTarget;
        f.style.outline = "none", f.style.outlineOffset = "0px";
      } : void 0,
      onKeyDown: x ? (v) => {
        (v.key === "Enter" || v.key === " ") && (v.preventDefault(), p?.(v));
      } : void 0,
      ...w,
      children: [
        c && /* @__PURE__ */ t(
          "span",
          {
            className: "inline-flex items-center justify-center shrink-0",
            style: { width: g.iconSize, height: g.iconSize },
            children: c
          }
        ),
        /* @__PURE__ */ t("span", { children: b }),
        i && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            onClick: (v) => {
              v.stopPropagation(), d?.();
            },
            disabled: u,
            "aria-label": `Remove ${typeof b == "string" ? b : ""}`,
            className: "inline-flex items-center justify-center shrink-0 cursor-pointer",
            style: {
              width: g.closeSize,
              height: g.closeSize,
              borderRadius: 999,
              border: "none",
              background: "transparent",
              color: "inherit",
              padding: 0,
              opacity: 0.6,
              cursor: u ? "not-allowed" : "pointer"
            },
            onMouseEnter: u ? void 0 : (v) => {
              v.currentTarget.style.opacity = "1", v.currentTarget.style.background = "rgba(0,0,0,0.08)";
            },
            onMouseLeave: u ? void 0 : (v) => {
              v.currentTarget.style.opacity = "0.6", v.currentTarget.style.background = "transparent";
            },
            children: /* @__PURE__ */ t(bi, { size: g.closeIconSize })
          }
        )
      ]
    }
  );
}
function ls({
  gap: r = 8,
  // spacing.xxs
  wrap: n = !0,
  children: o,
  className: l = "",
  style: i,
  ...d
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [
        "inline-flex",
        n ? "flex-wrap" : "",
        l
      ].filter(Boolean).join(" "),
      style: { gap: r, ...i },
      ...d,
      children: o
    }
  );
}
const wi = e.overlay.surface.DEFAULT, Ci = e.overlay.surface.light, Qe = e.overlay.blur, ze = e.neutral.text.negative, Ei = e.neutral.surface.negative, Ti = e.neutral.border.strong, Li = e.neutral.text.DEFAULT, Di = e.neutral.surface.subtle, _i = e.neutral.text.negative, Ii = "rgba(255,255,255,0.10)", Ai = "rgba(255,255,255,0.60)", Si = e.neutral.text.negative, $r = e.neutral.text.negative, Fi = "rgba(255,255,255,0.80)", Nr = 12, Ri = 999, Wi = 12, Oi = 16, Hr = 12, ve = 8, Ui = 16, Mi = 10, Bi = 16, zr = 4, $i = 8, Ni = 36, Pr = 12, Hi = parseInt(T["label-xs"].fontSize), zi = T["label-xs"].fontWeight, Gr = 20, Yr = 24, Pi = 4, Gi = 8, Yi = 8, ji = 250, Zi = 450, $e = Re.default, Xi = parseInt(T["paragraph-m"].fontSize), jr = P.medium, Vi = T["paragraph-m"].lineHeight, Ki = parseInt(T["label-xs"].fontSize), Ji = T["label-xs"].lineHeight, Zr = parseInt(T["paragraph-s"].fontSize), Xr = T["paragraph-s"].fontWeight, Vr = T["paragraph-s"].lineHeight, Qi = parseInt(T["paragraph-s"].fontSize), V = 22, ee = 10, qe = 24, Ce = 12, Kr = "0px 0px 1px 0px rgba(23, 15, 73, 0.03), 0px 1px 1px 0px rgba(23, 15, 73, 0.04), 0px 5px 14px 0px rgba(8, 15, 52, 0.04)";
function qi({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: V, height: ee, viewBox: `0 0 ${V} ${ee}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `0,${ee} ${V},${ee} ${V / 2},0`, fill: r }) });
}
function ea({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: V, height: ee, viewBox: `0 0 ${V} ${ee}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `0,0 ${V},0 ${V / 2},${ee}`, fill: r }) });
}
function ta({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: ee, height: V, viewBox: `0 0 ${ee} ${V}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `${ee},0 ${ee},${V} 0,${V / 2}`, fill: r }) });
}
function ra({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: ee, height: V, viewBox: `0 0 ${ee} ${V}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `0,0 0,${V} ${ee},${V / 2}`, fill: r }) });
}
function Jr({ onClose: r }) {
  const [n, o] = M(!1);
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      "aria-label": "Close tooltip",
      onClick: r,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: Gr,
        height: Gr,
        flexShrink: 0,
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        color: n ? Si : Ai,
        transition: "color 120ms"
      },
      children: /* @__PURE__ */ t("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ t("path", { d: "M1 1L9 9M9 1L1 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
    }
  );
}
function na() {
  return /* @__PURE__ */ t("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: /* @__PURE__ */ t("path", { d: "M6 4L10 8L6 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Qr({ label: r, onClick: n, btnVariant: o }) {
  const [l, i] = M(!1), d = o === "outline";
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: n,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: Ni,
        paddingLeft: Pr,
        paddingRight: Pr,
        borderRadius: Ri,
        backgroundColor: d ? l ? Di : Ei : l ? Ii : "transparent",
        border: d ? `1px solid ${Ti}` : "none",
        color: d ? Li : _i,
        fontFamily: $e,
        fontSize: Hi,
        fontWeight: zi,
        lineHeight: "18px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background-color 120ms"
      },
      children: r
    }
  );
}
function et({ bg: r, variant: n, title: o, text: l, leftIcon: i, media: d, link: u, primaryAction: c, secondaryAction: p, onClose: b, panelStyle: h }) {
  return n === "rich" ? /* @__PURE__ */ a(
    "div",
    {
      style: {
        backgroundColor: r,
        boxShadow: Kr,
        backdropFilter: `blur(${Qe})`,
        WebkitBackdropFilter: `blur(${Qe})`,
        borderRadius: Nr,
        paddingLeft: ve,
        paddingRight: ve,
        paddingTop: 0,
        paddingBottom: Ui,
        overflow: "hidden",
        ...h
      },
      children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: ve, paddingTop: ve, paddingBottom: 0 }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8, paddingLeft: ve, paddingRight: ve }, children: [
            /* @__PURE__ */ t("p", { style: { flex: 1, fontFamily: $e, fontSize: Ki, fontWeight: jr, color: ze, lineHeight: Ji, margin: 0 }, children: o }),
            b && /* @__PURE__ */ t(Jr, { onClose: b })
          ] }),
          d && /* @__PURE__ */ t(
            "div",
            {
              style: {
                borderRadius: d.type === "video" ? Gi : Pi,
                overflow: "hidden",
                lineHeight: 0
              },
              children: d.type === "video" ? /* @__PURE__ */ t("video", { src: d.src, poster: d.poster, controls: !0, style: { width: "100%", display: "block" } }) : /* @__PURE__ */ t("img", { src: d.src, alt: d.alt ?? "", style: { width: "100%", display: "block" } })
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: ve, paddingLeft: ve, paddingRight: ve, paddingTop: zr }, children: [
          /* @__PURE__ */ t("p", { style: { fontFamily: $e, fontSize: Zr, fontWeight: Xr, color: ze, lineHeight: Vr, margin: 0 }, children: l }),
          u && /* @__PURE__ */ a(
            "a",
            {
              href: u.href ?? "#",
              onClick: u.onClick ? (w) => {
                w.preventDefault(), u.onClick?.();
              } : void 0,
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontFamily: $e,
                fontSize: Qi,
                fontWeight: P.medium,
                color: $r,
                textDecoration: "underline",
                cursor: "pointer",
                transition: "color 120ms"
              },
              onMouseEnter: (w) => {
                w.currentTarget.style.color = Fi;
              },
              onMouseLeave: (w) => {
                w.currentTarget.style.color = $r;
              },
              children: [
                u.label,
                /* @__PURE__ */ t(na, {})
              ]
            }
          )
        ] })
      ]
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: {
        backgroundColor: r,
        boxShadow: Kr,
        backdropFilter: `blur(${Qe})`,
        WebkitBackdropFilter: `blur(${Qe})`,
        borderRadius: Nr,
        paddingTop: Wi,
        paddingBottom: Oi,
        paddingLeft: Hr,
        paddingRight: Hr,
        overflow: "hidden",
        ...h
      },
      children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: Mi, alignItems: "flex-start" }, children: [
        i && /* @__PURE__ */ t("div", { style: { width: Yr, height: Yr, flexShrink: 0, overflow: "hidden", color: ze }, children: i }),
        /* @__PURE__ */ a("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: Bi }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: zr }, children: [
            o && /* @__PURE__ */ t("p", { style: { fontFamily: $e, fontSize: Xi, fontWeight: jr, color: ze, lineHeight: Vi, margin: 0 }, children: o }),
            /* @__PURE__ */ t("p", { style: { fontFamily: $e, fontSize: Zr, fontWeight: Xr, color: ze, lineHeight: Vr, margin: 0 }, children: l })
          ] }),
          (c || p) && /* @__PURE__ */ a("div", { style: { display: "flex", gap: $i }, children: [
            c && /* @__PURE__ */ t(Qr, { label: c.label, onClick: c.onClick, btnVariant: "outline" }),
            p && /* @__PURE__ */ t(Qr, { label: p.label, onClick: p.onClick, btnVariant: "ghost" })
          ] })
        ] }),
        b && /* @__PURE__ */ t(Jr, { onClose: b })
      ] })
    }
  );
}
function qr(r) {
  const { direction: n } = r, l = r.variant === "rich" ? Ci : wi, i = n === "top-left" || n === "top-right", d = n === "bottom-left" || n === "bottom-right", u = n === "left", c = n === "right", p = n === "top-left" || n === "bottom-left", b = {
    minWidth: ji,
    maxWidth: Zi
  }, h = (m) => {
    switch (m) {
      case "up":
        return /* @__PURE__ */ t(qi, { color: l });
      case "down":
        return /* @__PURE__ */ t(ea, { color: l });
      case "left":
        return /* @__PURE__ */ t(ta, { color: l });
      case "right":
        return /* @__PURE__ */ t(ra, { color: l });
    }
  };
  return i || d ? /* @__PURE__ */ a("div", { style: { ...b, display: "flex", flexDirection: "column", alignItems: "stretch" }, children: [
    i && /* @__PURE__ */ t("div", { style: {
      display: "flex",
      justifyContent: p ? "flex-start" : "flex-end",
      paddingLeft: p ? qe : void 0,
      paddingRight: p ? void 0 : qe,
      paddingBottom: Ce,
      marginBottom: -Ce
    }, children: h("up") }),
    /* @__PURE__ */ t(et, { ...r, bg: l }),
    d && /* @__PURE__ */ t("div", { style: {
      display: "flex",
      justifyContent: p ? "flex-start" : "flex-end",
      paddingLeft: p ? qe : void 0,
      paddingRight: p ? void 0 : qe,
      paddingTop: Ce,
      marginTop: -Ce
    }, children: h("down") })
  ] }) : u ? /* @__PURE__ */ a("div", { style: { ...b, display: "flex", flexDirection: "row", alignItems: "center" }, children: [
    /* @__PURE__ */ t("div", { style: { paddingRight: Ce, marginRight: -Ce }, children: h("left") }),
    /* @__PURE__ */ t(et, { ...r, bg: l })
  ] }) : c ? /* @__PURE__ */ a("div", { style: { ...b, display: "flex", flexDirection: "row", alignItems: "center" }, children: [
    /* @__PURE__ */ t(et, { ...r, bg: l }),
    /* @__PURE__ */ t("div", { style: { paddingLeft: Ce, marginLeft: -Ce }, children: h("right") })
  ] }) : /* @__PURE__ */ t(et, { ...r, bg: l });
}
function oa(r, n) {
  const o = Yi, l = window.scrollX, i = window.scrollY;
  switch (n) {
    // "top-left" in Figma means the ARROW points up-left → panel appears BELOW trigger
    case "top-left":
      return {
        position: "absolute",
        top: r.bottom + o + i,
        left: r.left + l
      };
    case "top-right":
      return {
        position: "absolute",
        top: r.bottom + o + i,
        right: document.documentElement.clientWidth - r.right
      };
    // "bottom-left" → arrow points down-left → panel appears ABOVE trigger
    case "bottom-left":
      return {
        position: "absolute",
        top: r.top - o + i,
        left: r.left + l,
        transform: "translateY(-100%)"
      };
    case "bottom-right":
      return {
        position: "absolute",
        top: r.top - o + i,
        right: document.documentElement.clientWidth - r.right,
        transform: "translateY(-100%)"
      };
    case "left":
      return {
        position: "absolute",
        top: r.top + r.height / 2 + i,
        left: r.right + o + l,
        transform: "translateY(-50%)"
      };
    case "right":
      return {
        position: "absolute",
        top: r.top + r.height / 2 + i,
        right: document.documentElement.clientWidth - r.left + o,
        transform: "translateY(-50%)"
      };
  }
}
function is({
  children: r,
  open: n,
  onClose: o,
  direction: l = "top-left",
  variant: i = "default",
  className: d,
  ...u
}) {
  const c = o !== void 0, p = j(null), [b, h] = M(!1), [m, w] = M(null), k = c ? n ?? !1 : b;
  return xe(() => {
    if (k && p.current) {
      const g = p.current.getBoundingClientRect();
      w(oa(g, l));
    }
  }, [k, l]), r ? /* @__PURE__ */ a(
    "div",
    {
      ref: p,
      className: d,
      style: { display: "inline-block" },
      onMouseEnter: c ? void 0 : () => h(!0),
      onMouseLeave: c ? void 0 : () => h(!1),
      children: [
        r,
        k && m && ct(
          /* @__PURE__ */ t("div", { style: { zIndex: 1e3, ...m }, children: /* @__PURE__ */ t(
            qr,
            {
              direction: l,
              variant: i,
              onClose: o,
              ...u
            }
          ) }),
          document.body
        )
      ]
    }
  ) : /* @__PURE__ */ t(
    qr,
    {
      direction: l,
      variant: i,
      onClose: o,
      ...u
    }
  );
}
const la = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414",
          clipRule: "evenodd"
        }
      )
    }
  );
}, ia = e.overlay.surface.DEFAULT, aa = e.neutral.surface.negative, St = me.ln, sa = Se.xl, Ln = e.neutral.border.strong, da = e.neutral.text.DEFAULT, en = Z.l, tn = Z.s, ca = Z.l, ua = Z.m, rn = Z.xxs, ha = Z.m, ga = Z.s, nn = 40, on = "md", fa = 24, pa = "28px", ba = parseInt(T["heading-s"]?.fontWeight ?? "400"), xa = Re.default, va = 1500, Ft = "150ms", ln = 640, ma = {
  sm: 480,
  md: 600,
  lg: 708
}, ya = `
  @keyframes modal-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes modal-panel-in {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes modal-sheet-in {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }

  /* ── Desktop (default) ── */
  .glow-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: ${va};
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modal-backdrop-in ${Ft} ease forwards;
  }

  .glow-modal-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 48px);
    background-color: ${aa};
    border-radius: ${St};
    box-shadow: ${sa};
    overflow: hidden;
    outline: none;
    animation: modal-panel-in ${Ft} ease forwards;
  }

  .glow-modal-footer {
    padding: ${ua} ${ca};
    border-top: 1px solid ${Ln};
    flex-shrink: 0;
  }

  /* ── Mobile (< ${ln}px) — bottom sheet ── */
  @media (max-width: ${ln - 1}px) {
    .glow-modal-overlay {
      align-items: flex-end;
      justify-content: stretch;
    }

    .glow-modal-panel {
      width: 100% !important;
      max-width: 100vw;
      max-height: 90vh;
      border-radius: ${St} ${St} 0 0;
      animation: modal-sheet-in ${Ft} ease forwards;
    }

    .glow-modal-footer {
      padding: ${ga} ${ha};
    }
  }
`;
function as({
  open: r,
  onClose: n,
  title: o,
  size: l = "md",
  showBackButton: i = !1,
  onBack: d,
  closeOnBackdropClick: u = !0,
  closeOnEscape: c = !0,
  children: p,
  footer: b,
  footerActions: h,
  footerLeft: m
}) {
  const w = j(null), k = j(null), g = j(`modal-title-${Math.random().toString(36).slice(2, 8)}`).current, x = Ye((f) => {
    c && f.key === "Escape" && (f.stopPropagation(), n());
  }, [c, n]), E = Ye((f) => {
    if (f.key !== "Tab" || !w.current) return;
    const O = w.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (O.length === 0) return;
    const A = O[0], C = O[O.length - 1];
    f.shiftKey ? document.activeElement === A && (f.preventDefault(), C.focus()) : document.activeElement === C && (f.preventDefault(), A.focus());
  }, []);
  if (xe(() => {
    if (!r) return;
    k.current = document.activeElement;
    const f = document.body.style.overflow;
    return document.body.style.overflow = "hidden", document.addEventListener("keydown", x), document.addEventListener("keydown", E), requestAnimationFrame(() => {
      w.current?.focus();
    }), () => {
      document.body.style.overflow = f, document.removeEventListener("keydown", x), document.removeEventListener("keydown", E), k.current?.focus();
    };
  }, [r, x, E]), !r) return null;
  const L = b !== void 0 || h !== void 0, v = () => b !== void 0 ? b : h === void 0 ? null : /* @__PURE__ */ a("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: m ? "space-between" : "flex-end",
    gap: rn
  }, children: [
    m && /* @__PURE__ */ t("div", { style: { flex: 1 }, children: m }),
    /* @__PURE__ */ t("div", { style: { display: "flex", alignItems: "center", gap: rn, flexShrink: 0 }, children: h })
  ] });
  return ct(
    /* @__PURE__ */ a("div", { className: "glow-modal-overlay", children: [
      /* @__PURE__ */ t(
        "div",
        {
          style: {
            position: "absolute",
            inset: 0,
            backgroundColor: ia
          },
          onClick: u ? n : void 0,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          ref: w,
          className: "glow-modal-panel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": g,
          tabIndex: -1,
          style: { width: ma[l] },
          children: [
            /* @__PURE__ */ a(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: en,
                  paddingRight: en,
                  paddingTop: tn,
                  paddingBottom: tn,
                  borderBottom: `1px solid ${Ln}`,
                  flexShrink: 0
                },
                children: [
                  i ? /* @__PURE__ */ t(
                    Fe,
                    {
                      icon: /* @__PURE__ */ t(yn, { size: on }),
                      "aria-label": "Go back",
                      variant: "outline",
                      size: "md",
                      onClick: d ?? n
                    }
                  ) : /* @__PURE__ */ t("div", { style: { width: nn, height: nn, flexShrink: 0, visibility: "hidden" } }),
                  /* @__PURE__ */ t(
                    "p",
                    {
                      id: g,
                      style: {
                        flex: 1,
                        fontFamily: xa,
                        fontSize: fa,
                        fontWeight: ba,
                        lineHeight: pa,
                        color: da,
                        textAlign: "center",
                        margin: 0,
                        minWidth: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: o
                    }
                  ),
                  /* @__PURE__ */ t(
                    Fe,
                    {
                      icon: /* @__PURE__ */ t(la, { size: on }),
                      "aria-label": "Close modal",
                      variant: "outline",
                      size: "md",
                      onClick: n
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ t(
              "div",
              {
                style: {
                  flex: 1,
                  overflowY: "auto",
                  minHeight: 0
                },
                children: p
              }
            ),
            L && /* @__PURE__ */ t("div", { className: "glow-modal-footer", children: v() })
          ]
        }
      ),
      /* @__PURE__ */ t("style", { children: ya })
    ] }),
    document.body
  );
}
const an = "M0 5.96C0 9.25 2.67 11.92 5.96 11.92C9.25 11.92 11.92 9.25 11.92 5.96C11.92 2.67 9.25 0 5.96 0C2.67 0 0 2.67 0 5.96Z", ka = ({
  backColor: r,
  frontColor: n,
  size: o = "sm",
  ...l
}) => {
  const i = $(o);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: i,
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      ...l,
      children: [
        /* @__PURE__ */ t("g", { transform: "translate(2.5, 1.1)", children: /* @__PURE__ */ t("path", { d: an, fill: r }) }),
        /* @__PURE__ */ t("g", { transform: "translate(5.6, 6.7)", children: /* @__PURE__ */ t("path", { d: an, fill: n }) })
      ]
    }
  );
}, wa = {
  "in-network": { back: e.success.surface.light, front: e.success.surface.DEFAULT },
  // #c2e5c3 / #5bb95e
  "tier-2": { back: e["accent-yellow"].surface.hover, front: e["accent-yellow"].text.DEFAULT },
  // #ffe78f / #f5c000
  "tier-3": { back: e["accent-purple"].surface.light, front: e["accent-purple"].surface.selected },
  // #e7dafb / #9b67ef
  "out-of-network": { back: e.error.surface.disabled, front: e.error.surface.DEFAULT }
  // #fab3b3 / #f23c3c
}, Ca = {
  sm: "sm",
  // 28px
  md: "md"
  // 32px
}, Ea = {
  "in-network": "In-Network",
  "tier-2": "Tier 2",
  "tier-3": "Tier 3",
  "out-of-network": "Out-of-Network"
};
function sn({ tier: r, networkName: n, label: o, networkLabel: l, bordered: i = !0, size: d = "sm" }) {
  const u = wa[r], c = Ca[d], p = o ?? l ?? Ea[r], b = n ? `${n} · ${p}` : p, h = /* @__PURE__ */ t(ka, { backColor: u.back, frontColor: u.front, size: c === "sm" ? "sm" : "md" });
  return i ? /* @__PURE__ */ t(
    Tn,
    {
      variant: "outline",
      color: "neutral",
      size: c,
      iconLeft: h,
      children: b
    }
  ) : /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, flexShrink: 0 }, children: [
    h,
    b && /* @__PURE__ */ t("span", { style: { whiteSpace: "nowrap" }, children: b })
  ] });
}
const Ta = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M9 16a.997.997 0 0 1-1-.985V9a1 1 0 0 1 2 0v3.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 14H15a1 1 0 1 1 0 2z",
          clipRule: "evenodd"
        }
      )
    }
  );
}, La = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3-14a.997.997 0 0 1 1 .985V15a1 1 0 1 1-2 0v-3.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L12.586 10H9a1 1 0 1 1 0-2z",
          clipRule: "evenodd"
        }
      )
    }
  );
}, Da = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            d: "M8 9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C9.52 6 10.08 6 11.2 6h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C16 7.52 16 8.08 16 9.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C14.48 18 13.92 18 12.8 18h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C8 16.48 8 15.92 8 14.8z"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M5 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0zm16 0a1 1 0 1 0-2 0v16a1 1 0 1 0 2 0z",
            clipRule: "evenodd"
          }
        )
      ]
    }
  );
}, _a = {
  lower: { label: "Lower cost", chipColor: "success", Icon: Ta },
  typical: { label: "Typical cost", chipColor: "info", Icon: Da },
  higher: { label: "Higher cost", chipColor: "error", Icon: La }
}, tt = Re.default, rt = Re.display, nt = P.regular, ot = P.medium, lt = e.neutral.text.DEFAULT, Rt = e.neutral.text.dark, Ia = e.neutral.text.light, dn = parseInt(Z.xxs);
function cn({
  cost: r,
  costLevel: n,
  costLabel: o,
  costChipLabel: l,
  showCostChip: i = !0,
  costChipHideIcon: d = !1,
  chipInline: u = !1,
  costHint: c
}) {
  const b = o ?? (n === "unknown" ? "Call to verify cost" : "est. out-of-pocket"), h = n && n !== "unknown" ? _a[n] : null, m = h && l ? { ...h, label: l } : h, w = i && m, k = c ? /* @__PURE__ */ t("p", { style: {
    fontFamily: tt,
    fontWeight: nt,
    fontSize: Q[13],
    lineHeight: ne[16],
    color: Ia,
    marginTop: 2
  }, children: c }) : null, g = w ? /* @__PURE__ */ t(
    Tn,
    {
      color: m.chipColor,
      variant: "subtle",
      size: "sm",
      iconLeft: d ? void 0 : /* @__PURE__ */ t(m.Icon, { size: "sm" }),
      children: m.label
    }
  ) : null;
  return u ? /* @__PURE__ */ a("div", { children: [
    w ? /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: dn }, children: [
      g,
      /* @__PURE__ */ t("span", { style: {
        fontFamily: rt,
        fontWeight: ot,
        fontSize: Q[24],
        lineHeight: ne[29],
        color: lt
      }, children: r })
    ] }) : /* @__PURE__ */ t("span", { style: {
      fontFamily: rt,
      fontWeight: ot,
      fontSize: Q[24],
      lineHeight: ne[29],
      color: lt
    }, children: r }),
    /* @__PURE__ */ t("p", { style: {
      fontFamily: tt,
      fontWeight: nt,
      fontSize: Q[14],
      lineHeight: ne[17],
      color: Rt,
      marginTop: 2
    }, children: b }),
    k
  ] }) : /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: c ? "flex-start" : "center", justifyContent: "space-between", gap: dn }, children: [
    w ? /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ t("span", { style: {
        fontFamily: rt,
        fontWeight: ot,
        fontSize: Q[24],
        lineHeight: ne[29],
        color: lt
      }, children: r }),
      /* @__PURE__ */ t("p", { style: {
        fontFamily: tt,
        fontWeight: nt,
        fontSize: Q[14],
        lineHeight: ne[17],
        color: Rt,
        marginTop: 2
      }, children: b }),
      k
    ] }) : /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ t("span", { style: {
        fontFamily: rt,
        fontWeight: ot,
        fontSize: Q[24],
        lineHeight: ne[29],
        color: lt
      }, children: r }),
      /* @__PURE__ */ t("p", { style: {
        fontFamily: tt,
        fontWeight: nt,
        fontSize: Q[14],
        lineHeight: ne[17],
        color: Rt,
        marginTop: 2
      }, children: b }),
      k
    ] }),
    g
  ] });
}
const un = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M12 4a7 7 0 0 0-7 7c0 2.206 1.336 4.268 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0l3.441-2.982C17.664 15.268 19 13.206 19 11a7 7 0 0 0-7-7m-9 7a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t("path", { fill: n, d: "M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0" })
      ]
    }
  );
}, hn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M9.699 3.519c.862-2.03 3.74-2.03 4.602 0l1.557 3.666 3.849.322c2.177.183 3.09 2.874 1.471 4.343l-2.943 2.67.964 4.437c.486 2.241-2.05 3.9-3.908 2.556L12 19.133l-3.291 2.38c-1.859 1.344-4.395-.315-3.908-2.556l.963-4.436-2.943-2.671c-1.618-1.469-.706-4.16 1.472-4.343l3.848-.322zm2.761.782a.5.5 0 0 0-.92 0L9.864 8.245a1.5 1.5 0 0 1-1.255.908l-4.15.347a.5.5 0 0 0-.293.869l3.156 2.865a1.5 1.5 0 0 1 .458 1.429l-1.024 4.718a.5.5 0 0 0 .781.512l3.584-2.592a1.5 1.5 0 0 1 1.758 0l3.584 2.592a.5.5 0 0 0 .781-.512l-1.024-4.718a1.5 1.5 0 0 1 .457-1.429l3.157-2.865a.5.5 0 0 0-.294-.869l-4.149-.347a1.5 1.5 0 0 1-1.255-.908z",
          clipRule: "evenodd"
        }
      )
    }
  );
}, gn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M8.759 5h6.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 16.71 3 16.046 3 15.242v-4.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 5 7.954 5 8.758 5M6.91 7.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C5 9.361 5 9.943 5 10.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 19 7.943 19 8.8 19h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-4.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 7 16.057 7 15.2 7H8.8c-.857 0-1.439 0-1.889.038",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            d: "M9 4a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0zM17 4a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
          }
        )
      ]
    }
  );
}, fn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M16.975 13H21v-2h-4.025c-.25-5.053-2.382-9-4.975-9s-4.724 3.947-4.975 9H3v2h4.025c.25 5.053 2.382 9 4.975 9s4.724-3.947 4.975-9m-2.002 0c-.116 2.094-.587 3.899-1.226 5.177C12.948 19.774 12.215 20 12 20s-.948-.226-1.747-1.823c-.639-1.278-1.11-3.083-1.226-5.177zm-5.946-2c.116-2.094.587-3.899 1.226-5.177C11.052 4.226 11.785 4 12 4s.948.226 1.747 1.823c.639 1.278 1.11 3.083 1.226 5.177z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
            clipRule: "evenodd"
          }
        )
      ]
    }
  );
}, pn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M20 9.003c0-.875-1.043-1.328-1.682-.732L16 10.434v3.13l2.318 2.16c.64.596 1.682.143 1.682-.73zm-3.047-2.194C18.871 5.02 22 6.38 22 9.003v5.99c0 2.622-3.127 3.982-5.045 2.195L14 14.435v-4.87z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M7.759 4h2.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C16 8.29 16 8.954 16 9.758v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.71 2 15.046 2 14.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4M5.91 6.038c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C4 8.361 4 8.943 4 9.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C6.361 18 6.943 18 7.8 18h2.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V9.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C11.639 6 11.057 6 10.2 6H7.8c-.857 0-1.439 0-1.889.038",
            clipRule: "evenodd"
          }
        )
      ]
    }
  );
}, bn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          fillRule: "evenodd",
          d: "M4 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v11.99c0 2.553-2.987 3.939-4.937 2.29l-2.417-2.044a1 1 0 0 0-1.292 0L8.937 21.28C6.987 22.929 4 21.543 4 18.99zm5-3a3 3 0 0 0-3 3v11.99a1 1 0 0 0 1.646.763l2.417-2.044a3 3 0 0 1 3.874 0l2.417 2.044A1 1 0 0 0 18 18.989V7a3 3 0 0 0-3-3z",
          clipRule: "evenodd"
        }
      )
    }
  );
}, xn = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          d: "M8 2a4 4 0 0 0-4 4v14c0 1.684 1.953 2.615 3.26 1.554l4.11-3.335a1 1 0 0 1 1.26 0l4.11 3.335c1.307 1.06 3.26.13 3.26-1.553V6a4 4 0 0 0-4-4z"
        }
      )
    }
  );
}, Aa = ({ size: r = 32, className: n, ...o }) => {
  const l = typeof r == "number" ? r : r === "sm" ? 32 : 40;
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 56 56",
      className: n,
      ...o,
      children: [
        /* @__PURE__ */ a("g", { children: [
          /* @__PURE__ */ t("mask", { id: "ProviderFemale_svg__m0", style: { maskType: "luminance" }, maskUnits: "userSpaceOnUse", x: 16, y: 10, width: 23, height: 33, children: /* @__PURE__ */ t("path", { d: "M16.5719 32.0963C16.417 32.107 16.7428 32.3473 16.5719 32.0963V32.0963ZM37.3793 15.7217C35.9587 14.4986 33.9292 14.5254 32.1614 14.6268C31.2055 14.6802 30.2495 14.7977 29.3095 14.974C29.1867 14.2583 28.9357 13.548 28.6419 12.9338C28.2734 12.1648 27.7554 11.4331 27.029 10.9631C26.1798 10.413 25.1971 10.4504 24.2305 10.5839C22.4413 10.8349 20.6202 11.5132 19.3544 12.8484C18.1741 14.0928 17.592 15.946 18.0406 17.6283C18.2916 18.5576 18.9058 19.4762 19.7923 19.9035C19.8885 19.9515 19.9846 19.9889 20.0807 20.021C19.1568 21.6979 18.6281 23.8022 18.9165 25.6234C19.8457 31.4821 24.2305 33.3247 25.1117 33.8481C25.1224 34.74 25.1277 37.8322 25.1277 38.7241C25.1437 38.7615 25.1651 38.7989 25.1971 38.831C25.1971 38.8897 25.2238 38.9538 25.2666 39.0232C26.2226 40.4065 27.3281 41.6776 28.5671 42.8045C28.738 42.9593 28.973 42.954 29.1439 42.8045C29.5552 42.4466 29.8756 42.0301 30.164 41.5814C30.9598 40.6895 31.6861 39.7335 32.327 38.7241C32.3858 38.628 32.4979 38.2755 32.4979 38.1687L32.5727 36.0004C33.2616 35.8722 34.8425 34.7186 35.6436 32.9669C36.8773 30.2751 37.1604 27.3805 37.0429 24.4537C36.9895 23.1346 36.8613 22.2694 36.653 21.2867C37.0162 21.009 37.3419 20.6725 37.609 20.3093C38.1163 19.6204 38.4902 18.7178 38.4581 17.8473C38.4261 17.0195 38.0095 16.2557 37.3847 15.7217H37.3793Z", fill: "white" }) }),
          /* @__PURE__ */ a("g", { mask: "url(#ProviderFemale_svg__m0)", children: [
            /* @__PURE__ */ t("mask", { id: "ProviderFemale_svg__m1", style: { maskType: "luminance" }, maskUnits: "userSpaceOnUse", x: 15, y: 9, width: 25, height: 36, children: /* @__PURE__ */ t("path", { d: "M39.7879 9.16406H15.1938V44.2526H39.7879V9.16406Z", fill: "white" }) }),
            /* @__PURE__ */ t("g", { mask: "url(#ProviderFemale_svg__m1)", children: /* @__PURE__ */ t("rect", { width: 33, height: 39, transform: "translate(10.9331 7.18848)", fill: "url(#ProviderFemale_svg__g0)" }) })
          ] }),
          /* @__PURE__ */ t("path", { d: "M33.4113 31.3391C33.4113 31.3391 32.0441 31.8732 30.522 31.2056", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M32.3807 25.2725C32.5837 27.3073 34.1432 26.9548 34.1645 28.1564C34.1859 29.3581 32.7065 29.4436 32.1831 29.294", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M28.1025 24.8128C28.1025 24.8128 28.3589 24.001 29.2508 24.001C30.1427 24.001 30.383 24.8128 30.383 24.8128", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M33.8706 24.8128C33.8706 24.8128 34.127 24.001 35.0189 24.001C35.9108 24.001 36.1511 24.8128 36.1511 24.8128", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M26.8208 18.4839C28.3322 20.0327 30.3831 21.432 37.0162 21.1596", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M24.1505 25.6889C23.6966 24.8451 22.3667 24.3965 21.9341 25.6889C21.5336 26.8852 23.4189 28.6637 24.1505 28.8186", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M23.9955 30.9544C24.5736 30.9544 25.0423 30.4857 25.0423 29.9076C25.0423 29.3295 24.5736 28.8608 23.9955 28.8608C23.4174 28.8608 22.9487 29.3295 22.9487 29.9076C22.9487 30.4857 23.4174 30.9544 23.9955 30.9544Z", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M31.5312 33.1073L32.1508 33.1393", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M24.3481 39.0234C24.3481 39.0234 18.2009 41.5122 16.2355 44.5457C14.2701 47.5793 15.0125 56.306 15.0125 56.306", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M33.2295 39.0234C33.2295 39.0234 39.0349 41.4481 40.8133 45.2988C42.2286 48.359 41.9242 56.3007 41.9242 56.3007", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M23.0558 44.7594C23.0558 44.7594 22.7941 40.7859 24.3429 39.0234", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M23.0555 44.7605C19.6268 44.7605 19.8992 51.1106 19.8992 52.8464C19.8992 53.546 20.6949 53.327 20.6949 52.9265C20.6949 52.5259 20.0968 52.6861 20.0968 52.6861", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M23.0557 44.7605C26.2174 44.7605 25.9664 51.1106 25.9664 52.8464C25.9664 53.546 25.2293 53.327 25.2293 52.9265C25.2293 52.5259 25.7794 52.6861 25.7794 52.6861", stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round" }),
          /* @__PURE__ */ t("path", { d: "M33.203 38.8105C33.5342 41.9509 33.6143 48.6909 33.6143 48.6909C32.6049 49.1128 32.2631 49.759 32.3539 50.3198C32.4981 51.2331 33.3739 51.436 33.9454 51.3452C34.9548 51.185 35.3714 50.3839 35.2699 49.6736C35.1845 49.0808 34.4528 48.5894 33.8012 48.9366", stroke: "#000", strokeWidth: 0.875, strokeLinecap: "round", strokeLinejoin: "round" })
        ] }),
        /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ a("radialGradient", { id: "ProviderFemale_svg__g0", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(34.4953 31.3085) scale(39.1357 27.2848)", children: [
          /* @__PURE__ */ t("stop", { stopColor: "#FFDB57" }),
          /* @__PURE__ */ t("stop", { offset: 0.29, stopColor: "#FED757" }),
          /* @__PURE__ */ t("stop", { offset: 0.51, stopColor: "#FECE5A" }),
          /* @__PURE__ */ t("stop", { offset: 0.71, stopColor: "#FEBD5D" }),
          /* @__PURE__ */ t("stop", { offset: 0.9, stopColor: "#FEA663" }),
          /* @__PURE__ */ t("stop", { offset: 1, stopColor: "#FE9767" })
        ] }) })
      ]
    }
  );
}, Sa = ({ size: r = 32, className: n, ...o }) => {
  const l = typeof r == "number" ? r : r === "sm" ? 32 : 40;
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 56 56",
      className: n,
      ...o,
      children: [
        /* @__PURE__ */ t("mask", { id: "ProviderMale_svg__m0", style: { maskType: "luminance" }, maskUnits: "userSpaceOnUse", x: 20, y: 12, width: 20, height: 29, children: /* @__PURE__ */ t("path", { d: "M39.2793 14.9534C38.8791 14.4374 38.0735 14.2425 37.4468 14.1688C37.2204 14.1425 36.994 14.1372 36.7728 14.1477C36.9413 13.558 36.757 12.8734 36.1357 12.4837C35.5564 12.1151 34.8455 12.2205 34.2663 12.5364C33.1605 13.1367 32.9182 13.4369 31.5438 13.2842C29.1479 13.0261 25.8673 13.1051 23.8557 14.6217C22.8605 15.3694 22.276 16.7017 22.7288 17.8654C22.6341 17.6285 21.5546 18.5395 21.4703 18.6606C21.0859 19.203 20.9911 20.1455 20.9016 20.788C20.3066 24.9427 23.1764 29.5556 26.2464 32.1622C26.2464 32.1622 26.1464 34.1737 26.3359 35.7587C27.2522 37.5965 29.8482 40.8508 30.4275 40.8508C31.112 40.8508 32.9235 37.7808 33.4395 36.833C33.8239 36.1221 33.5923 35.7061 33.5659 34.9267C33.5396 34.1632 33.508 33.7156 33.508 33.7156C35.588 32.9626 36.7939 30.8878 37.1835 28.3128C37.4521 26.554 37.4363 24.7742 37.4047 22.9996C37.4047 22.7205 37.0888 18.55 36.9413 18.6132C37.4152 18.4078 37.8681 18.1445 38.2683 17.8075C38.9897 17.2019 39.9955 15.8855 39.2793 14.964V14.9534Z", fill: "white" }) }),
        /* @__PURE__ */ a("g", { mask: "url(#ProviderMale_svg__m0)", children: [
          /* @__PURE__ */ t("mask", { id: "ProviderMale_svg__m1", style: { maskType: "luminance" }, maskUnits: "userSpaceOnUse", x: 18, y: 9, width: 25, height: 35, children: /* @__PURE__ */ t("path", { d: "M42.1599 9.61694H18.1846V43.4815H42.1599V9.61694Z", fill: "white" }) }),
          /* @__PURE__ */ t("g", { mask: "url(#ProviderMale_svg__m1)", children: /* @__PURE__ */ t("rect", { width: 25, height: 31, transform: "translate(18 12)", fill: "url(#ProviderMale_svg__g0)" }) })
        ] }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M29.3584 17.2561C31.3436 18.2198 32.4231 18.8359 36.9412 18.6358" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M26.7148 22.5163C26.7148 22.5163 29.3109 21.8686 30.9328 21.8844C31.4488 21.8844 31.4278 23.3167 31.1645 24.1119C30.9012 24.907 30.5115 25.4705 29.6163 25.6284C28.7211 25.7864 27.668 25.4547 27.3467 24.2909C27.0255 23.1272 27.3099 22.5321 27.3099 22.5321" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M37.9733 22.5163C37.9733 22.5163 35.3772 21.8686 33.7553 21.8844C33.2393 21.8844 33.2603 23.3167 33.5236 24.1119C33.7869 24.907 34.1766 25.4705 35.0718 25.6284C35.967 25.7864 37.0201 25.4547 37.3414 24.2909C37.6678 23.1272 37.3782 22.5321 37.3782 22.5321" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M31.3438 23.0489L33.3395 22.9436" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M31.6069 27.8407C32.2546 27.7933 33.0445 27.9407 33.2341 26.8296C33.4763 25.4184 33.1656 24.0335 33.0445 22.9961" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M25.3668 22.7012C24.935 22.1536 23.787 22.1114 23.3131 22.9698C22.8392 23.8281 22.955 25.0708 24.698 26.5979" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M30.1694 30.4205C30.3959 30.6996 30.8329 31.0682 32.4601 30.9471" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M28.458 23.7748C28.458 23.7748 28.9319 23.0534 29.943 23.5063" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeMiterlimit: 10, strokeLinecap: "round", d: "M36.2409 23.7011C36.2409 23.7011 35.6932 23.0323 34.7349 23.5853" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeLinecap: "round", strokeLinejoin: "round", d: "M25.03 52.8104C25.03 52.8104 25.6093 43.174 25.367 35.944C25.367 35.944 21.8968 37.3078 18.4951 39.1087C15.0934 40.9149 12.9239 42.7527 13.1398 52.7156" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeLinecap: "round", strokeLinejoin: "round", d: "M22.9553 36.96C22.592 38.6292 22.3234 39.7298 21.9759 41.3569C21.6599 42.8472 21.7073 42.9156 23.5187 44.29C23.5187 44.29 21.8863 44.6955 22.2444 46.2963C22.6025 47.8971 24.8721 50.8144 25.03 52.8048" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeLinecap: "round", strokeLinejoin: "round", d: "M43.1183 53.7418C43.1183 53.7418 43.4395 48.4128 42.1336 43.8421C40.8276 39.2713 35.6724 36.9385 34.3296 36.2277C34.3296 36.2277 34.7667 46.5592 34.7087 53.131" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeLinecap: "round", strokeLinejoin: "round", d: "M36.9517 37.6871C36.8885 40.8098 39.1107 43.548 35.7827 44.1378C35.7827 44.1378 37.6205 44.38 36.8938 47.192C36.0671 50.4041 34.7085 53.1318 34.7085 53.1318" }),
        /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.875, strokeLinecap: "round", strokeLinejoin: "round", d: "M17.5264 52.1046L17.7423 50.6513C17.7423 50.6513 18.4532 50.5986 19.7012 50.6407C20.9439 50.6881 21.8022 50.7987 21.8022 50.7987V52.073L17.5316 52.0994L17.5264 52.1046Z" }),
        /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ a("radialGradient", { id: "ProviderMale_svg__g0", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(24.5146 19.0604) scale(26.5194 21.0113)", children: [
          /* @__PURE__ */ t("stop", { stopColor: "#FFDB57" }),
          /* @__PURE__ */ t("stop", { offset: 0.26, stopColor: "#FBDA59" }),
          /* @__PURE__ */ t("stop", { offset: 0.46, stopColor: "#F2DA62" }),
          /* @__PURE__ */ t("stop", { offset: 0.63, stopColor: "#E1D870" }),
          /* @__PURE__ */ t("stop", { offset: 0.8, stopColor: "#CAD684" }),
          /* @__PURE__ */ t("stop", { offset: 0.96, stopColor: "#ACD49D" }),
          /* @__PURE__ */ t("stop", { offset: 1, stopColor: "#A4D4A5" })
        ] }) })
      ]
    }
  );
}, Fa = ({ size: r = 32, className: n, ...o }) => {
  const l = typeof r == "number" ? r : r === "sm" ? 32 : 40;
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 56 56",
      className: n,
      ...o,
      children: [
        /* @__PURE__ */ a("g", { clipPath: "url(#Facility_svg__clip0)", children: [
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M28.3491 34.7712C28.3071 35.3439 28.2257 41.0991 28.3491 43.7127" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M23.2059 17.7712C22.6333 18.0208 18.9006 20.2351 17.1328 21.3988" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M17.13 21.3983C17.1011 21.8081 16.9146 29.255 16.8936 35.6091" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M42.0999 31.6139C41.5273 31.5719 28.995 31.4905 26.3813 31.6139V34.4902C26.954 34.5322 39.4863 34.6137 42.0999 34.4902V31.6139Z" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M42.0999 20.0328C41.5273 19.9461 28.995 19.7701 26.3813 20.0328V26.2214C26.954 26.3081 39.4863 26.4841 42.0999 26.2214V20.0328Z" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M40.2642 43.7127C40.3062 43.1401 40.3876 37.3849 40.2642 34.7712" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M38.3252 26.3606C38.3672 25.9665 38.4487 22.008 38.3252 20.2113" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M30.2456 25.9636C30.2876 25.5696 30.3691 22.0103 30.2456 20.2136" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.5663 43.7705C34.6083 43.1979 34.5741 37.3822 34.4507 34.7712" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.5164 25.7642C34.5584 24.9788 34.4507 21.3302 34.4507 20.5343" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.4511 37.5688C33.4425 37.5688 32.791 38.3963 32.791 39.1186C32.791 39.8778 33.1299 40.6238 34.4511 40.6238" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.6245 40.6238C35.6332 40.6238 36.2846 39.7963 36.2846 39.074C36.2846 38.3148 35.9458 37.5688 34.6245 37.5688" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M22.2129 43.9755C22.8565 42.3968 21.8504 40.4215 20.0091 40.1982C20.7341 38.7745 19.6702 37.6082 18.2386 37.8788C18.2386 37.8788 17.8525 35.189 15.4727 35.667C13.0035 36.1635 13.3739 38.8848 13.8598 39.82C11.4117 39.9802 10.8863 42.3653 11.5352 43.9755" }),
          /* @__PURE__ */ t("mask", { id: "Facility_svg__m0", style: { maskType: "luminance" }, maskUnits: "userSpaceOnUse", x: 23, y: 16, width: 22, height: 29, children: /* @__PURE__ */ t("path", { d: "M44.2383 18.8139C44.1727 18.3463 44.0466 17.8866 43.734 17.5189C43.3899 17.1144 42.8882 16.9935 42.3812 16.9594C37.2617 16.6048 32.1631 17.0382 27.0514 16.8753C26.1557 16.8464 25.0787 16.7177 24.3354 17.3429C23.8652 17.7369 23.7627 18.3437 23.7522 18.9242C23.6314 26.5576 23.9624 34.2067 24.0701 41.8401L24.0963 43.6079C24.0963 43.6762 24.1121 43.734 24.1305 43.7865C23.8731 44.0833 23.9965 44.677 24.5061 44.6717C29.5521 44.6139 34.6008 44.5562 39.6468 44.4984C41.0836 44.4826 42.5178 44.4642 43.9547 44.4485C44.1254 44.4485 44.2515 44.3775 44.3382 44.2777C44.4931 44.2015 44.6219 44.0544 44.6271 43.8338C44.7243 39.2422 44.6271 35.2968 44.5851 31.0283C44.5798 30.608 44.7374 22.4441 44.2357 18.8139H44.2383Z", fill: "white" }) }),
          /* @__PURE__ */ a("g", { mask: "url(#Facility_svg__m0)", children: [
            /* @__PURE__ */ t("mask", { id: "Facility_svg__m1", style: { maskType: "luminance" }, maskUnits: "userSpaceOnUse", x: 23, y: 16, width: 22, height: 29, children: /* @__PURE__ */ t("path", { d: "M44.9998 16.4884H23.3999V44.9993H44.9998V16.4884Z", fill: "white" }) }),
            /* @__PURE__ */ t("g", { mask: "url(#Facility_svg__m1)", children: /* @__PURE__ */ t("path", { d: "M22.5762 15.6056H45.7955V45.869H22.5762V15.6056Z", fill: "url(#Facility_svg__g0)" }) })
          ] }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M28.333 35.4281C28.291 36.0007 28.2096 41.756 28.333 44.3696" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M42.0843 32.2704C41.5116 32.2284 28.9794 32.1469 26.3657 32.2704V35.1467C26.9384 35.1887 39.4706 35.2702 42.0843 35.1467V32.2704Z" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M42.0843 20.9362C41.5116 20.8495 28.9794 20.6735 26.3657 20.9362V27.1249C26.9384 27.2116 39.4706 27.3875 42.0843 27.1249V20.9362Z" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M40.248 44.3696C40.2901 43.797 40.3715 38.0417 40.248 35.4281" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M38.3096 27.264C38.3516 26.87 38.433 22.9115 38.3096 21.1147" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeLinecap: "round", strokeLinejoin: "round", d: "M30.2295 26.8672C30.2715 26.4732 30.3529 22.9139 30.2295 21.1172" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.5506 44.4274C34.5927 43.8548 34.5585 38.0391 34.4351 35.4281" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.5007 26.6676C34.5428 25.8822 34.4351 22.2337 34.4351 21.4377" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M35.0681 16.5126C35.1101 15.7272 35.0024 14.1801 35.0024 13.3842" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M33.135 16.5102C33.177 15.7248 33.0693 12.0762 33.0693 11.2803" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.435 38.2256C33.4263 38.2256 32.7749 39.053 32.7749 39.7754C32.7749 40.5345 33.1138 41.2805 34.435 41.2805" }),
          /* @__PURE__ */ t("path", { stroke: "#000", strokeWidth: 0.788028, strokeMiterlimit: 10, strokeLinecap: "round", d: "M34.6084 41.2805C35.6171 41.2805 36.2685 40.4531 36.2685 39.7307C36.2685 38.9716 35.9297 38.2256 34.6084 38.2256" })
        ] }),
        /* @__PURE__ */ a("defs", { children: [
          /* @__PURE__ */ a("radialGradient", { id: "Facility_svg__g0", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(46.8476 39.9005) rotate(-17.8822) scale(45.76 35.1844)", children: [
            /* @__PURE__ */ t("stop", { stopColor: "#B7CEFF" }),
            /* @__PURE__ */ t("stop", { offset: 0.29, stopColor: "#B7CEFF" }),
            /* @__PURE__ */ t("stop", { offset: 0.71, stopColor: "#A5D5A6" }),
            /* @__PURE__ */ t("stop", { offset: 0.9, stopColor: "#A5D5A6" }),
            /* @__PURE__ */ t("stop", { offset: 1, stopColor: "#A5D5A6" })
          ] }),
          /* @__PURE__ */ t("clipPath", { id: "Facility_svg__clip0", children: /* @__PURE__ */ t("rect", { width: 34.1138, height: 34.1138, fill: "white", transform: "translate(10.8862 10.8862)" }) })
        ] })
      ]
    }
  );
}, Ge = Re.default, Ut = P.regular, it = P.medium, Ne = e.neutral.text.DEFAULT;
e.neutral.text.dark;
const dt = e.neutral.border.light, Ra = e.neutral.surface.extraSubtle, Wa = e.neutral.surface.subtle, Oa = e.neutral.surface.negative, Dn = parseInt(me.full);
parseInt(Z.xxxs);
const he = parseInt(Z.xxs), q = parseInt(Z.xs), U = parseInt(Z.s), _n = parseInt(Z.m), In = 160, _e = 52, Wt = 480;
function Ua(r) {
  const [n, o] = M(0);
  return xe(() => {
    const l = r.current;
    if (!l) return;
    o(l.getBoundingClientRect().width);
    const i = new ResizeObserver(([d]) => {
      o(d.contentRect.width);
    });
    return i.observe(l), () => i.disconnect();
  }, [r]), n;
}
function vn({ photoUrl: r, name: n, providerType: o, imgError: l, onImgError: i }) {
  return /* @__PURE__ */ t(
    "div",
    {
      style: {
        width: _e,
        height: _e,
        borderRadius: Dn,
        backgroundColor: Ra,
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: r && !l ? /* @__PURE__ */ t(
        "img",
        {
          src: r,
          alt: n,
          style: { width: "100%", height: "100%", objectFit: "cover" },
          onError: i
        }
      ) : o === "female" ? /* @__PURE__ */ t(Aa, { size: _e }) : o === "facility" ? /* @__PURE__ */ t(Fa, { size: _e }) : /* @__PURE__ */ t(Sa, { size: _e })
    }
  );
}
function be({ icon: r, children: n }) {
  return /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: he, overflow: "hidden" }, children: [
    /* @__PURE__ */ t("span", { style: { color: Ne, display: "flex", flexShrink: 0 }, children: r }),
    /* @__PURE__ */ t("span", { style: {
      fontFamily: Ge,
      fontWeight: Ut,
      fontSize: Q[16],
      lineHeight: ne[19],
      color: Ne,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      minWidth: 0
    }, children: n })
  ] });
}
const mn = "glow-skeleton-shimmer-style", Ot = 800;
function An() {
  if (typeof document > "u" || document.getElementById(mn)) return;
  const r = document.createElement("style");
  r.id = mn, r.textContent = `
    @keyframes glow-skeleton-shimmer {
      0%   { background-position: -${Ot}px 0; }
      100% { background-position: ${Ot}px 0; }
    }
    .glow-skeleton-shimmer {
      background-color: ${Wa};
      background-image: linear-gradient(
        100deg,
        transparent 30%,
        ${Oa}80 50%,
        transparent 70%
      );
      background-size: ${Ot}px 100%;
      background-repeat: no-repeat;
      animation: glow-skeleton-shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  `, document.head.appendChild(r);
}
function Y({ width: r, height: n = 12, radius: o = 8 }) {
  return An(), /* @__PURE__ */ t("div", { className: "glow-skeleton-shimmer", style: {
    width: r,
    height: n,
    borderRadius: o
  } });
}
function Sn({ size: r }) {
  return An(), /* @__PURE__ */ t("div", { className: "glow-skeleton-shimmer", style: {
    width: r,
    height: r,
    borderRadius: Dn,
    flexShrink: 0
  } });
}
function Ma() {
  return /* @__PURE__ */ a(Ie, { children: [
    /* @__PURE__ */ t("div", { style: { padding: `${U}px ${U}px ${q}px` }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: he }, children: [
      /* @__PURE__ */ t(Sn, { size: _e }),
      /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 10 }, children: [
        /* @__PURE__ */ t(Y, { width: "55%", height: 16 }),
        /* @__PURE__ */ t(Y, { width: "35%", height: 12 })
      ] }),
      /* @__PURE__ */ t(Y, { width: 24, height: 24, radius: 6 })
    ] }) }),
    /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${U}px` } }),
    /* @__PURE__ */ t("div", { style: {
      padding: `${q}px ${U}px`,
      display: "flex",
      flexDirection: "column",
      gap: q
    }, children: [65, 75, 45].map((r, n) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: he }, children: [
      /* @__PURE__ */ t(Y, { width: 14, height: 14, radius: 4 }),
      /* @__PURE__ */ t(Y, { width: `${r}%`, height: 11 })
    ] }, n)) }),
    /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${U}px` } }),
    /* @__PURE__ */ a("div", { style: { padding: `${q}px ${U}px`, display: "flex", flexDirection: "column", gap: 10 }, children: [
      /* @__PURE__ */ t(Y, { width: "28%", height: 20, radius: 6 }),
      /* @__PURE__ */ t(Y, { width: "38%", height: 10 })
    ] }),
    /* @__PURE__ */ t("div", { style: { padding: `${q}px ${U}px ${U}px` }, children: /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: q }, children: [
      /* @__PURE__ */ t(Y, { width: "100%", height: 36, radius: 10 }),
      /* @__PURE__ */ t(Y, { width: "100%", height: 36, radius: 10 })
    ] }) })
  ] });
}
function Ba() {
  return /* @__PURE__ */ a("div", { style: { display: "flex", padding: U }, children: [
    /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: U }, children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", gap: q, alignItems: "flex-start" }, children: [
        /* @__PURE__ */ t(Sn, { size: _e }),
        /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 10 }, children: [
          /* @__PURE__ */ t(Y, { width: "50%", height: 16 }),
          /* @__PURE__ */ t(Y, { width: "30%", height: 12 })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: he }, children: [65, 75, 45].map((r, n) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: he }, children: [
        /* @__PURE__ */ t(Y, { width: 14, height: 14, radius: 4 }),
        /* @__PURE__ */ t(Y, { width: `${r}%`, height: 11 })
      ] }, n)) })
    ] }),
    /* @__PURE__ */ a("div", { style: {
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      marginLeft: U,
      minWidth: 160,
      gap: _n
    }, children: [
      /* @__PURE__ */ t(Y, { width: 24, height: 24, radius: 6 }),
      /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }, children: [
        /* @__PURE__ */ t(Y, { width: 56, height: 20, radius: 6 }),
        /* @__PURE__ */ t(Y, { width: 76, height: 10 })
      ] }),
      /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: he, width: In, marginTop: "auto" }, children: [
        /* @__PURE__ */ t(Y, { width: "100%", height: 36, radius: 10 }),
        /* @__PURE__ */ t(Y, { width: "100%", height: 36, radius: 10 })
      ] })
    ] })
  ] });
}
function ss({
  layout: r = "responsive",
  loading: n,
  name: o,
  specialty: l,
  photoUrl: i,
  initials: d,
  providerType: u = "male",
  address: c,
  distance: p,
  rating: b,
  reviewCount: h,
  networkTier: m,
  networkName: w,
  networkLabel: k,
  cost: g,
  costLevel: x,
  costLabel: E,
  costChipLabel: L,
  costChipHideIcon: v,
  showCostChip: f = !0,
  showPrice: O = !0,
  costHint: A,
  languages: C,
  virtualAvailable: te,
  nextAppointmentLabel: G,
  nextAppointmentDate: D,
  bookmarkable: se = !0,
  onBookmarkChange: F,
  onCallClick: R,
  onBookClick: K,
  onClick: ge,
  isActive: de
}) {
  const N = j(null), oe = Ua(N), ye = r === "responsive" ? oe >= Wt ? "horizontal" : "vertical" : r, [re, Ee] = M(!1), [X, le] = M(!1), B = (z) => {
    z.stopPropagation();
    const Me = !re;
    Ee(Me), F?.(Me);
  };
  if (n)
    return /* @__PURE__ */ t("div", { ref: N, style: r === "horizontal" ? { minWidth: Wt } : void 0, children: /* @__PURE__ */ t(At, { variant: "outline", radius: "md", padding: "none", as: "article", children: (ye === "horizontal" ? "horizontal" : "vertical") === "horizontal" ? /* @__PURE__ */ t(Ba, {}) : /* @__PURE__ */ t(Ma, {}) }) });
  const ce = C && C.length > 0, fe = ce ? C.length <= 2 ? C.join(", ") : `${C.slice(0, 2).join(", ")} +${C.length - 2}` : "", ue = R && !K, H = K ? !!D : ue, We = p || c || b != null || ce || te || H, Oe = O && g, Ue = R || K;
  return ye === "horizontal" ? /* @__PURE__ */ t("div", { ref: N, style: { width: "100%", height: "100%", ...r === "horizontal" ? { minWidth: Wt } : void 0 }, children: /* @__PURE__ */ t(
    At,
    {
      variant: "outline",
      radius: "md",
      padding: "none",
      interactive: !!ge,
      isActive: de,
      onClick: ge,
      style: { width: "100%", height: "100%" },
      as: "article",
      children: /* @__PURE__ */ a("div", { style: { display: "flex", padding: U }, children: [
        /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: U }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", gap: q, alignItems: "flex-start" }, children: [
            /* @__PURE__ */ t(
              vn,
              {
                photoUrl: i,
                name: o,
                providerType: u,
                imgError: X,
                onImgError: () => le(!0)
              }
            ),
            /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: he }, children: [
                /* @__PURE__ */ t("p", { style: {
                  fontFamily: Ge,
                  fontWeight: it,
                  fontSize: Q[18],
                  lineHeight: ne[22],
                  color: Ne,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }, children: o }),
                m && /* @__PURE__ */ t(sn, { tier: m, networkName: w, networkLabel: k, bordered: !0 })
              ] }),
              /* @__PURE__ */ t("p", { style: {
                fontFamily: Ge,
                fontWeight: Ut,
                fontSize: Q[16],
                lineHeight: ne[19],
                color: Ne,
                marginTop: 2
              }, children: l })
            ] })
          ] }),
          We && /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: he }, children: [
            b != null && /* @__PURE__ */ a(be, { icon: /* @__PURE__ */ t(hn, { size: "sm" }), children: [
              b,
              "/5",
              h != null ? ` (${h})` : ""
            ] }),
            (p || c) && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(un, { size: "sm" }), children: p && c ? `${p} - ${c}` : p || c }),
            ce && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(fn, { size: "sm" }), children: fe }),
            te && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(pn, { size: "sm" }), children: "Accept virtual appointment" }),
            H && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(gn, { size: "sm" }), children: ue ? "Call to check availability" : /* @__PURE__ */ a(Ie, { children: [
              G && `${G} `,
              /* @__PURE__ */ t("strong", { style: { fontWeight: it }, children: D })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { style: {
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginLeft: U,
          minWidth: 160,
          gap: _n
        }, children: [
          se && /* @__PURE__ */ t(
            Fe,
            {
              icon: re ? /* @__PURE__ */ t(xn, { size: "md" }) : /* @__PURE__ */ t(bn, { size: "md" }),
              "aria-label": re ? "Remove from saved" : "Save provider",
              variant: "ghost",
              size: "sm",
              pressed: re,
              onClick: B
            }
          ),
          Oe && /* @__PURE__ */ t("div", { style: { textAlign: "right" }, children: /* @__PURE__ */ t(
            cn,
            {
              cost: g,
              costLevel: x,
              costLabel: E,
              costChipLabel: L,
              costChipHideIcon: v,
              showCostChip: f,
              costHint: A,
              chipInline: !0
            }
          ) }),
          Ue && /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: K ? "1fr 1fr" : "1fr", gap: he, width: In, marginTop: "auto" }, children: [
            R && /* @__PURE__ */ t(Pe, { variant: "outline", size: "sm", fullWidth: !0, onClick: (z) => {
              z.stopPropagation(), R();
            }, children: "Call" }),
            K && /* @__PURE__ */ t(Pe, { variant: "secondary", size: "sm", fullWidth: !0, onClick: (z) => {
              z.stopPropagation(), K();
            }, children: "Book" })
          ] })
        ] })
      ] })
    }
  ) }) : /* @__PURE__ */ t("div", { ref: N, style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ a(
    At,
    {
      variant: "outline",
      radius: "md",
      padding: "none",
      interactive: !!ge,
      isActive: de,
      onClick: ge,
      as: "article",
      style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" },
      children: [
        /* @__PURE__ */ t("div", { style: { padding: `${U}px ${U}px ${q}px` }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: he }, children: [
          /* @__PURE__ */ t(
            vn,
            {
              photoUrl: i,
              name: o,
              providerType: u,
              imgError: X,
              onImgError: () => le(!0)
            }
          ),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("p", { style: {
              fontFamily: Ge,
              fontWeight: it,
              fontSize: Q[18],
              lineHeight: ne[22],
              color: Ne,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: o }),
            /* @__PURE__ */ t("p", { style: {
              fontFamily: Ge,
              fontWeight: Ut,
              fontSize: Q[16],
              lineHeight: ne[19],
              color: Ne,
              marginTop: 2
              // optical adjustment
            }, children: l }),
            m && /* @__PURE__ */ t("div", { style: { marginTop: he }, children: /* @__PURE__ */ t(
              sn,
              {
                tier: m,
                networkName: w,
                networkLabel: k,
                bordered: !1
              }
            ) })
          ] }),
          se && /* @__PURE__ */ t(
            Fe,
            {
              icon: re ? /* @__PURE__ */ t(xn, { size: "md" }) : /* @__PURE__ */ t(bn, { size: "md" }),
              "aria-label": re ? "Remove from saved" : "Save provider",
              variant: "ghost",
              size: "sm",
              pressed: re,
              onClick: B
            }
          )
        ] }) }),
        We && /* @__PURE__ */ a(Ie, { children: [
          /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${U}px` } }),
          /* @__PURE__ */ a("div", { style: {
            padding: `${q}px ${U}px`,
            display: "flex",
            flexDirection: "column",
            gap: q
          }, children: [
            b != null && /* @__PURE__ */ a(be, { icon: /* @__PURE__ */ t(hn, { size: "sm" }), children: [
              b,
              "/5",
              h != null ? ` (${h})` : ""
            ] }),
            (p || c) && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(un, { size: "sm" }), children: p && c ? `${p} - ${c}` : p || c }),
            ce && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(fn, { size: "sm" }), children: fe }),
            te && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(pn, { size: "sm" }), children: "Virtual visit available" }),
            H && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(gn, { size: "sm" }), children: ue ? "Call to check availability" : /* @__PURE__ */ a(Ie, { children: [
              G && `${G} `,
              /* @__PURE__ */ t("strong", { style: { fontWeight: it }, children: D })
            ] }) })
          ] })
        ] }),
        Oe && /* @__PURE__ */ a(Ie, { children: [
          /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${U}px` } }),
          /* @__PURE__ */ t("div", { style: { padding: `${q}px ${U}px` }, children: /* @__PURE__ */ t(
            cn,
            {
              cost: g,
              costLevel: x,
              costLabel: E,
              costChipLabel: L,
              costChipHideIcon: v,
              showCostChip: f,
              costHint: A
            }
          ) })
        ] }),
        Ue && /* @__PURE__ */ t("div", { style: { padding: `${q}px ${U}px ${U}px`, marginTop: "auto" }, children: /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: K ? "1fr 1fr" : "1fr", gap: q }, children: [
          R && /* @__PURE__ */ t(Pe, { variant: "outline", size: "sm", fullWidth: !0, onClick: (z) => {
            z.stopPropagation(), R();
          }, children: "Call" }),
          K && /* @__PURE__ */ t(Pe, { variant: "secondary", size: "sm", fullWidth: !0, onClick: (z) => {
            z.stopPropagation(), K();
          }, children: "Book" })
        ] }) })
      ]
    }
  ) });
}
const $a = ({
  size: r = "md",
  color: n = "currentColor",
  ...o
}) => {
  const l = $(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: l,
      height: l,
      fill: "none",
      viewBox: "0 0 24 24",
      ...o,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          d: "M10.609 2.938c.505-1.251 2.277-1.251 2.782 0l1.937 4.802a.5.5 0 0 0 .423.312l4.866.397c1.32.107 1.863 1.747.869 2.621l-3.693 3.248a.5.5 0 0 0-.158.483l1.181 5.367c.295 1.34-1.217 2.34-2.335 1.544l-4.191-2.984a.5.5 0 0 0-.58 0l-4.192 2.984c-1.118.796-2.63-.203-2.335-1.544L6.364 14.8a.5.5 0 0 0-.158-.483L2.513 11.07c-.994-.874-.45-2.514.87-2.621l4.865-.397a.5.5 0 0 0 .423-.312z"
        }
      )
    }
  );
}, Na = e["accent-yellow"].surface.selected, Ha = e.neutral.surface.disabled, za = e.neutral.text.light, Pa = Re.default, Ga = Q[13], Ya = P.regular, ja = parseInt(Z.xxs);
function ds({
  rating: r,
  maxStars: n = 5,
  size: o = "sm",
  showValue: l = !1,
  reviewCount: i,
  filledColor: d = Na,
  emptyColor: u = Ha,
  className: c = "",
  style: p
}) {
  const b = Math.round(Math.min(Math.max(r, 0), n));
  return /* @__PURE__ */ a(
    "div",
    {
      className: c,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 0,
        ...p
      },
      children: [
        Array.from({ length: n }, (h, m) => /* @__PURE__ */ t(
          $a,
          {
            size: o,
            color: m < b ? d : u
          },
          m
        )),
        (l || i != null) && /* @__PURE__ */ a(
          "span",
          {
            style: {
              marginLeft: ja,
              fontFamily: Pa,
              fontSize: Ga,
              fontWeight: Ya,
              color: za,
              lineHeight: 1
            },
            children: [
              l && `${r}/${n}`,
              i != null && `${l ? " " : ""}(${i})`
            ]
          }
        )
      ]
    }
  );
}
export {
  ns as A,
  Pe as B,
  At as C,
  rs as D,
  Fe as I,
  as as M,
  os as N,
  ss as P,
  Qa as R,
  ts as S,
  es as T,
  Ja as a,
  Tn as b,
  ls as c,
  sn as d,
  ds as e,
  qa as f,
  is as g,
  qr as h
};
