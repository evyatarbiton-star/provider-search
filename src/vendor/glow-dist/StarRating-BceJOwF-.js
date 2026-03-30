import { jsx as t, jsxs as a, Fragment as Ie } from "react/jsx-runtime";
import { useRef as j, useEffect as xe, useState as U, useCallback as Ye, createContext as On, useContext as Mn } from "react";
import { s as e, b as P, t as T, c as Se, d as me, f as Re, e as V, l as ne, a as Q } from "./spacing-wqc9yTbp.js";
import { createPortal as ct } from "react-dom";
function Un({ size: r }) {
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
const Bn = {
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
}, $n = {
  lg: { height: 56, paddingX: 32, paddingY: 16, borderRadius: 12, gap: 12, iconSize: 24, fontSize: 20, lineHeight: 24 },
  md: { height: 48, paddingX: 24, paddingY: 12, borderRadius: 8, gap: 8, iconSize: 24, fontSize: 16, lineHeight: 19 },
  sm: { height: 40, paddingX: 20, paddingY: 8, borderRadius: 8, gap: 4, iconSize: 20, fontSize: 16, lineHeight: 19 },
  xs: { height: 36, paddingX: 12, paddingY: 8, borderRadius: 8, gap: 4, iconSize: 20, fontSize: 14, lineHeight: 18 }
};
function Pe({
  variant: r = "primary",
  size: n = "md",
  pill: l = !1,
  iconOnly: o = !1,
  loading: i = !1,
  fullWidth: d = !1,
  disabled: u,
  iconLeft: c,
  iconRight: h,
  children: b,
  className: g = "",
  style: y,
  ...k
}) {
  const C = u || i, p = Bn[r], x = $n[n], E = C ? p.disabled : p.default, L = l ? 999 : x.borderRadius, v = o ? 0 : x.paddingX, f = o ? x.height : void 0, O = {
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
    ...y
  };
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      disabled: C,
      "aria-busy": i || void 0,
      "aria-disabled": C || void 0,
      "data-variant": r,
      "data-size": n,
      className: [
        // Layout
        "inline-flex items-center justify-center shrink-0",
        "font-default select-none whitespace-nowrap",
        "transition-colors duration-150",
        // Cursor
        C ? "cursor-not-allowed" : "cursor-pointer",
        // Custom class
        g
      ].filter(Boolean).join(" "),
      style: O,
      onMouseEnter: C ? void 0 : (A) => {
        const w = A.currentTarget;
        w.style.backgroundColor = p.hover.bg, w.style.color = p.hover.text, p.hover.border && (w.style.borderColor = p.hover.border);
      },
      onMouseLeave: C ? void 0 : (A) => {
        const w = A.currentTarget;
        w.style.backgroundColor = E.bg, w.style.color = E.text, w.style.borderColor = E.border ?? "transparent", document.activeElement !== w && (w.style.outline = "none", w.style.outlineOffset = "0px");
      },
      onMouseDown: C ? void 0 : (A) => {
        const w = A.currentTarget;
        w.style.backgroundColor = p.active.bg, w.style.color = p.active.text, p.active.border && (w.style.borderColor = p.active.border);
      },
      onMouseUp: C ? void 0 : (A) => {
        const w = A.currentTarget;
        w.style.backgroundColor = p.hover.bg, w.style.color = p.hover.text;
      },
      onFocus: C ? void 0 : (A) => {
        const w = A.currentTarget;
        w.matches(":focus-visible") && (w.style.outline = `${p.focus.focusBorderWidth}px solid ${p.focus.focusBorder}`, w.style.outlineOffset = "2px");
      },
      onBlur: C ? void 0 : (A) => {
        const w = A.currentTarget;
        w.style.outline = "none", w.style.outlineOffset = "0px";
      },
      ...k,
      children: i ? /* @__PURE__ */ t(Un, { size: x.iconSize }) : /* @__PURE__ */ a(Ie, { children: [
        !o && c,
        o ? c || h || b : /* @__PURE__ */ t("span", { children: b }),
        !o && h
      ] })
    }
  );
}
const Vt = 24, Zt = 20, Nn = 4, Hn = 2, mt = {
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
}, zn = e.neutral.border.light, Xt = 2, Pn = parseInt(T["paragraph-m"].fontSize), Gn = T["paragraph-m"].lineHeight, Yn = T["paragraph-m"].fontWeight, jn = e.neutral.text.DEFAULT, Vn = e.neutral.text.disabledLight;
function Zn({ color: r }) {
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
function Xn({ color: r }) {
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
function Qa({
  checked: r = !1,
  onChange: n,
  disabled: l = !1,
  label: o,
  name: i,
  value: d,
  indeterminate: u = !1,
  className: c = "",
  style: h,
  ...b
}) {
  const g = j(null), y = j(null);
  xe(() => {
    g.current && (g.current.indeterminate = u);
  }, [u]);
  const k = r || u, C = k ? "checked" : "unchecked", p = l ? mt.disabled[C] : mt.default[C], x = mt.hover[C], E = (L) => {
    const v = y.current;
    v && (v.style.borderColor = L.border, v.style.backgroundColor = k ? L.fill : L.bg);
  };
  return /* @__PURE__ */ a(
    "label",
    {
      className: [
        "flex items-center gap-xxs select-none",
        l ? "cursor-not-allowed" : "cursor-pointer",
        c
      ].filter(Boolean).join(" "),
      style: h,
      onMouseEnter: l ? void 0 : () => E(x),
      onMouseLeave: l ? void 0 : () => E(p),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: g,
            type: "checkbox",
            checked: r,
            onChange: n,
            disabled: l,
            name: i,
            value: d,
            className: "absolute opacity-0",
            style: { width: 0, height: 0 },
            onFocus: (L) => {
              if (!L.currentTarget.matches(":focus-visible")) return;
              const v = y.current;
              v && !l && (v.style.outline = `${Xt}px solid ${zn}`, v.style.outlineOffset = `${Xt}px`);
            },
            onBlur: () => {
              const L = y.current;
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
                ref: y,
                style: {
                  width: Zt,
                  height: Zt,
                  borderRadius: Nn,
                  borderWidth: Hn,
                  borderStyle: "solid",
                  borderColor: p.border,
                  backgroundColor: k ? p.fill : p.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 150ms, border-color 150ms"
                },
                children: u ? /* @__PURE__ */ t(Xn, { color: p.icon }) : r ? /* @__PURE__ */ t(Zn, { color: p.icon }) : null
              }
            )
          }
        ),
        o && /* @__PURE__ */ t(
          "span",
          {
            className: "font-default",
            style: {
              fontSize: Pn,
              lineHeight: Gn,
              fontWeight: Yn,
              color: l ? Vn : jn
            },
            children: o
          }
        )
      ]
    }
  );
}
const Kt = 24, Jt = 20, Qt = 999, Kn = 2, qt = 8, yt = {
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
}, Jn = e.neutral.border.light, er = 2, Qn = parseInt(T["paragraph-m"].fontSize), qn = T["paragraph-m"].lineHeight, eo = T["paragraph-m"].fontWeight, to = e.neutral.text.DEFAULT, ro = e.neutral.text.disabledLight;
function qa({
  checked: r = !1,
  onChange: n,
  disabled: l = !1,
  label: o,
  name: i,
  value: d,
  className: u = "",
  style: c,
  ...h
}) {
  const b = j(null), g = r ? "checked" : "unchecked", y = l ? yt.disabled[g] : yt.default[g], k = yt.hover[g], C = (p) => {
    const x = b.current;
    x && (x.style.borderColor = p.border, x.style.backgroundColor = r ? p.fill : p.bg);
  };
  return /* @__PURE__ */ a(
    "label",
    {
      className: [
        "flex items-center gap-xxs select-none",
        l ? "cursor-not-allowed" : "cursor-pointer",
        u
      ].filter(Boolean).join(" "),
      style: c,
      onMouseEnter: l ? void 0 : () => C(k),
      onMouseLeave: l ? void 0 : () => C(y),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "radio",
            checked: r,
            onChange: n,
            disabled: l,
            name: i,
            value: d,
            className: "absolute opacity-0",
            style: { width: 0, height: 0 },
            onFocus: (p) => {
              if (!p.currentTarget.matches(":focus-visible")) return;
              const x = b.current;
              x && !l && (x.style.outline = `${er}px solid ${Jn}`, x.style.outlineOffset = `${er}px`);
            },
            onBlur: () => {
              const p = b.current;
              p && (p.style.outline = "none", p.style.outlineOffset = "0px");
            },
            ...h
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            "aria-hidden": "true",
            style: {
              width: Kt,
              height: Kt,
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
                  width: Jt,
                  height: Jt,
                  borderRadius: Qt,
                  borderWidth: Kn,
                  borderStyle: "solid",
                  borderColor: y.border,
                  backgroundColor: r ? y.fill : y.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 150ms, border-color 150ms"
                },
                children: r && /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      width: qt,
                      height: qt,
                      borderRadius: Qt,
                      backgroundColor: y.dot
                    }
                  }
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ t(
          "span",
          {
            className: "font-default",
            style: {
              fontSize: Qn,
              lineHeight: qn,
              fontWeight: eo,
              color: l ? ro : to
            },
            children: o
          }
        )
      ]
    }
  );
}
const no = 4, oo = 999, lo = 100, io = {
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
}, wt = {
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
}, ao = e.neutral.border.light, tr = 2, so = parseInt(T["paragraph-m"].fontSize), co = T["paragraph-m"].lineHeight, uo = T["paragraph-m"].fontWeight, ho = e.neutral.text.DEFAULT, go = e.neutral.text.disabledLight;
function fo({ color: r, size: n }) {
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
function es({
  checked: r = !1,
  onChange: n,
  disabled: l = !1,
  label: o,
  name: i,
  value: d,
  size: u = "default",
  className: c = "",
  style: h,
  ...b
}) {
  const g = j(null), y = io[u], k = r ? "on" : "off", C = l ? wt.disabled[k] : wt.default[k], p = wt.hover[k], x = (E) => {
    const L = g.current;
    L && (L.style.backgroundColor = E.track);
  };
  return /* @__PURE__ */ a(
    "label",
    {
      className: [
        "flex items-center gap-xxs select-none",
        l ? "cursor-not-allowed" : "cursor-pointer",
        c
      ].filter(Boolean).join(" "),
      style: h,
      onMouseEnter: l ? void 0 : () => x(p),
      onMouseLeave: l ? void 0 : () => x(C),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "checkbox",
            checked: r,
            onChange: n,
            disabled: l,
            name: i,
            value: d,
            className: "absolute opacity-0",
            style: { width: 0, height: 0 },
            onFocus: (E) => {
              if (!E.currentTarget.matches(":focus-visible")) return;
              const L = g.current;
              L && !l && (L.style.outline = `${tr}px solid ${ao}`, L.style.outlineOffset = `${tr}px`);
            },
            onBlur: () => {
              const E = g.current;
              E && (E.style.outline = "none", E.style.outlineOffset = "0px");
            },
            ...b
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            ref: g,
            "aria-hidden": "true",
            style: {
              width: y.trackWidth,
              height: y.trackHeight,
              borderRadius: oo,
              padding: no,
              backgroundColor: C.track,
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
                  width: y.knobSize,
                  height: y.knobSize,
                  borderRadius: lo,
                  backgroundColor: C.knob,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 150ms",
                  flexShrink: 0
                },
                children: r && /* @__PURE__ */ t(
                  fo,
                  {
                    color: C.checkmark,
                    size: y.checkmarkSize
                  }
                )
              }
            )
          }
        ),
        o && /* @__PURE__ */ t(
          "span",
          {
            className: "font-default",
            style: {
              fontSize: so,
              lineHeight: co,
              fontWeight: uo,
              color: l ? go : ho
            },
            children: o
          }
        )
      ]
    }
  );
}
const po = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function B(r = "md") {
  return typeof r == "number" ? r : po[r];
}
const Bt = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, bo = 1, xo = 8, vo = 999, rr = 16, nr = 8, Ve = 20, mo = 8, yo = 4, or = 8, wo = {
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
}, lr = parseInt(T["label-s"].fontSize), ir = T["label-s"].lineHeight, ar = T["label-s"].fontWeight, ko = e.neutral.text.DEFAULT, Co = parseInt(T["paragraph-m"].fontSize), Eo = T["paragraph-m"].lineHeight, To = T["paragraph-m"].fontWeight, Lo = parseInt(T["paragraph-s"].fontSize), Do = T["paragraph-s"].lineHeight, _o = T["paragraph-s"].fontWeight, Io = e.error.text.DEFAULT, Ao = e.neutral.border.light, sr = 2;
function ts({
  label: r,
  placeholder: n,
  value: l,
  onChange: o,
  disabled: i = !1,
  error: d = !1,
  helperText: u,
  required: c = !1,
  size: h = "md",
  shape: b = "default",
  iconLeft: g,
  iconRight: y,
  showInfoIcon: k = !1,
  name: C,
  ...p
}) {
  const x = j(null), { height: E } = wo[h], L = b === "rounded" ? vo : xo, f = i ? Le.disabled : d ? Le.error : Le.default, O = () => {
    if (i) return;
    const D = x.current;
    D && (d || (D.style.borderColor = Le.hover.border));
  }, A = () => {
    if (i) return;
    const D = x.current;
    D && (D.style.borderColor = f.border);
  }, w = () => {
    if (i) return;
    const D = x.current;
    D && (d || (D.style.borderColor = Le.focus.border), D.style.outline = `${sr}px solid ${Ao}`, D.style.outlineOffset = `${sr}px`);
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
        gap: mo,
        width: "100%"
      },
      children: [
        (r || c || k) && /* @__PURE__ */ a(
          "div",
          {
            style: {
              display: "flex",
              gap: yo,
              alignItems: "center"
            },
            children: [
              r && /* @__PURE__ */ t(
                "label",
                {
                  style: {
                    fontSize: lr,
                    lineHeight: ir,
                    fontWeight: ar,
                    color: ko
                  },
                  children: r
                }
              ),
              c && /* @__PURE__ */ t(
                "span",
                {
                  style: {
                    fontSize: lr,
                    lineHeight: ir,
                    fontWeight: ar,
                    color: Io
                  },
                  children: "*"
                }
              ),
              k && /* @__PURE__ */ t(Bt, { size: "md", style: { color: i ? Le.disabled.iconColor : e.neutral.text.DEFAULT } })
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
              paddingLeft: rr,
              paddingRight: rr,
              paddingTop: nr,
              paddingBottom: nr,
              backgroundColor: f.bg,
              border: `${bo}px solid ${f.border}`,
              borderRadius: L,
              cursor: i ? "not-allowed" : "text",
              transition: "border-color 150ms ease"
            },
            children: [
              g && /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Ve,
                    height: Ve,
                    marginRight: or,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: f.iconColor
                  },
                  children: g
                }
              ),
              /* @__PURE__ */ t(
                "input",
                {
                  type: "text",
                  value: l,
                  onChange: o,
                  placeholder: n,
                  disabled: i,
                  name: C,
                  onFocus: w,
                  onBlur: te,
                  ...p,
                  style: {
                    flex: 1,
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    fontSize: Co,
                    lineHeight: Eo,
                    fontWeight: To,
                    color: f.text,
                    cursor: i ? "not-allowed" : "text",
                    padding: 0,
                    width: "100%",
                    fontFamily: "inherit",
                    ...p.style || {}
                  }
                }
              ),
              y && /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Ve,
                    height: Ve,
                    marginLeft: or,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: f.iconColor,
                    cursor: i ? "not-allowed" : "pointer"
                  },
                  children: y
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ t(
          "p",
          {
            style: {
              fontSize: Lo,
              lineHeight: Do,
              fontWeight: _o,
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
const So = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, Fo = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, Ro = 1, Wo = 8, Oo = 999, dr = 16, cr = 8, Be = 20, Mo = 8, Uo = 4, kt = 8, Bo = {
  sm: { height: 40 },
  // matches Button sm
  md: { height: 48 },
  // matches Button md
  lg: { height: 56 }
  // matches Button lg
}, ke = {
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
}, $o = 12, No = Se["2xl"], ur = 8, Ho = 4, zo = 4, Po = 1e3, Ct = 16, Ze = 12, hr = 12, Go = e.neutral.surface.negative, Yo = e.neutral.surface.subtle, Et = e.neutral.text.dark, gr = e.neutral.text.DEFAULT, jo = P.medium, it = P.regular, Tt = e.neutral.text.disabledDark, fr = 16, Lt = 12, Vo = e.neutral.border.light, Zo = e.neutral.text.light, Xo = parseInt(T["paragraph-m"].fontSize), Ko = T["paragraph-m"].lineHeight, Jo = e.neutral.text.light, Qo = 28, qo = e.neutral.surface.subtle, el = e.neutral.text.DEFAULT, tl = e.neutral.text.light, pr = 4, rl = 8, nl = 4, at = 4, ol = parseInt(T["paragraph-s"].fontSize), ll = T["paragraph-s"].lineHeight, br = parseInt(T["label-s"].fontSize), xr = T["label-s"].lineHeight, vr = T["label-s"].fontWeight, il = e.neutral.text.DEFAULT, mr = parseInt(T["paragraph-m"].fontSize), yr = T["paragraph-m"].lineHeight, wr = T["paragraph-m"].fontWeight, Dt = parseInt(T["paragraph-m"].fontSize), _t = T["paragraph-m"].lineHeight, al = parseInt(T["paragraph-s"].fontSize), sl = T["paragraph-s"].lineHeight, dl = T["paragraph-s"].fontWeight, cl = e.error.text.DEFAULT, ul = e.neutral.border.light, kr = 2, hl = "transform 200ms ease";
function gl() {
  return /* @__PURE__ */ t("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t("path", { d: "M3 3l6 6M9 3l-6 6", stroke: tl, strokeWidth: "1.5", strokeLinecap: "round" }) });
}
function fl({ label: r, onRemove: n }) {
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: at,
        paddingLeft: rl,
        paddingRight: nl,
        height: Qo,
        backgroundColor: qo,
        borderRadius: pr,
        fontSize: ol,
        fontWeight: it,
        lineHeight: ll,
        color: el,
        cursor: "default",
        fontFamily: "inherit"
      },
      children: [
        /* @__PURE__ */ t("span", { children: r }),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: (l) => {
              l.stopPropagation(), n();
            },
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderRadius: pr,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: 0
            },
            "aria-label": `Remove ${r}`,
            children: /* @__PURE__ */ t(gl, {})
          }
        )
      ]
    }
  );
}
function rs({
  options: r,
  value: n,
  onChange: l,
  placeholder: o = "Select...",
  label: i,
  helperText: d,
  required: u = !1,
  disabled: c = !1,
  error: h = !1,
  size: b = "md",
  shape: g = "default",
  iconLeft: y,
  showInfoIcon: k = !1,
  name: C,
  maxVisibleOptions: p = 6,
  searchable: x = !1,
  searchPlaceholder: E = "Search...",
  multiple: L = !1,
  multiValue: v,
  onMultiChange: f,
  renderTrigger: O
}) {
  const A = j(null), w = j(null), te = j(null), G = j(null), [D, se] = U(!1), [F, R] = U(-1), [K, ge] = U(n ?? ""), [de, N] = U(""), [oe, ye] = U(null), re = n !== void 0, Ee = re ? n : K, { height: Z } = Bo[b], le = g === "rounded" ? Oo : Wo, $ = x && de ? r.filter((m) => m.label.toLowerCase().includes(de.toLowerCase())) : r, ce = r.find((m) => m.value === Ee), fe = L && v ? r.filter((m) => v.includes(m.value)) : [], H = c ? ke.disabled : h ? ke.error : ke.default, We = Ze * 2 + 19, Oe = x ? Lt * 2 + 19 + 1 : 0, Me = ur * 2 + We * p + Oe;
  xe(() => {
    if (!D) return;
    const m = (S) => {
      const _ = S.target, we = A.current?.contains(_), ie = te.current?.contains(_);
      !we && !ie && (se(!1), N(""), w.current && !h && (w.current.style.borderColor = H.border), w.current && (w.current.style.outline = "none", w.current.style.outlineOffset = "0px"));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [D, h, H.border]);
  const z = Ye(() => {
    if (w.current) {
      const m = w.current.getBoundingClientRect();
      ye({
        top: m.bottom + zo + window.scrollY,
        left: m.left + window.scrollX,
        width: m.width
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
    x && D && R($.length > 0 ? 0 : -1);
  }, [de]);
  const Ue = () => {
    w.current && (h || (w.current.style.borderColor = ke.focus.border), w.current.style.outline = `${kr}px solid ${ul}`, w.current.style.outlineOffset = `${kr}px`);
  }, Te = () => {
    w.current && (w.current.style.borderColor = H.border, w.current.style.outline = "none", w.current.style.outlineOffset = "0px");
  }, pe = () => {
    if (c) return;
    const m = !D;
    if (se(m), m) {
      const S = L ? 0 : $.findIndex((_) => _.value === n);
      R(S >= 0 ? S : 0), Ue();
    } else
      N(""), Te();
  }, He = Ye((m) => {
    if (!m.disabled) {
      if (L) {
        const S = v || [], _ = S.includes(m.value) ? S.filter((we) => we !== m.value) : [...S, m.value];
        f?.(_);
        return;
      }
      re || ge(m.value), l?.(m.value), se(!1), N(""), Te();
    }
  }, [l, H.border, re, L, v, f]), je = (m) => {
    if (!c) {
      if (x && D && m.target === G.current) {
        if (m.key === "ArrowDown" || m.key === "ArrowUp") {
          m.preventDefault(), m.key === "ArrowDown" ? R((S) => {
            let _ = S + 1;
            for (; _ < $.length && $[_].disabled; ) _++;
            return _ < $.length ? _ : S;
          }) : R((S) => {
            let _ = S - 1;
            for (; _ >= 0 && $[_].disabled; ) _--;
            return _ >= 0 ? _ : S;
          });
          return;
        }
        if (m.key === "Enter") {
          m.preventDefault(), F >= 0 && $[F] && He($[F]);
          return;
        }
        if (m.key === "Escape") {
          m.preventDefault(), se(!1), N(""), Te();
          return;
        }
        return;
      }
      switch (m.key) {
        case "Enter":
        case " ":
          if (m.preventDefault(), D && F >= 0) {
            const S = $[F];
            S && !S.disabled && He(S);
          } else
            pe();
          break;
        case "ArrowDown":
          m.preventDefault(), D ? R((S) => {
            let _ = S + 1;
            for (; _ < $.length && $[_].disabled; ) _++;
            return _ < $.length ? _ : S;
          }) : pe();
          break;
        case "ArrowUp":
          m.preventDefault(), D && R((S) => {
            let _ = S - 1;
            for (; _ >= 0 && $[_].disabled; ) _--;
            return _ >= 0 ? _ : S;
          });
          break;
        case "Escape":
          m.preventDefault(), se(!1), N(""), Te();
          break;
        case "Tab":
          D && (se(!1), N(""), Te());
          break;
      }
    }
  }, ht = () => {
    if (c || D) return;
    const m = w.current;
    m && (h || (m.style.borderColor = ke.hover.border));
  }, gt = () => {
    if (c || D) return;
    const m = w.current;
    m && (m.style.borderColor = H.border);
  }, ft = (m) => L && v ? v.includes(m) : !1, pt = () => O ? O(L ? fe : ce) : L ? fe.length === 0 ? /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: 1,
        fontSize: mr,
        lineHeight: yr,
        fontWeight: wr,
        color: H.placeholder,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontFamily: "inherit"
      },
      children: o
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        gap: at,
        alignItems: "center",
        minWidth: 0
      },
      children: fe.map((m) => /* @__PURE__ */ t(
        fl,
        {
          label: m.label,
          onRemove: () => {
            const S = (v || []).filter((_) => _ !== m.value);
            f?.(S);
          }
        },
        m.value
      ))
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: 1,
        fontSize: mr,
        lineHeight: yr,
        fontWeight: wr,
        color: ce ? H.text : H.placeholder,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontFamily: "inherit"
      },
      children: ce ? ce.label : o
    }
  ), bt = i || u || k, xt = L && fe.length > 0;
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
              gap: Uo,
              alignItems: "center"
            },
            children: [
              i && /* @__PURE__ */ t(
                "label",
                {
                  style: {
                    fontSize: br,
                    lineHeight: xr,
                    fontWeight: vr,
                    color: il
                  },
                  children: i
                }
              ),
              u && /* @__PURE__ */ t(
                "span",
                {
                  style: {
                    fontSize: br,
                    lineHeight: xr,
                    fontWeight: vr,
                    color: cl
                  },
                  children: "*"
                }
              ),
              k && /* @__PURE__ */ t(Bt, { size: "md", style: { color: c ? ke.disabled.iconColor : e.neutral.text.DEFAULT } })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            ref: w,
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
              ...xt ? { minHeight: Z, paddingTop: at, paddingBottom: at } : { height: Z, paddingTop: cr, paddingBottom: cr },
              paddingLeft: dr,
              paddingRight: dr,
              backgroundColor: H.bg,
              border: `${Ro}px solid ${H.border}`,
              borderRadius: le,
              cursor: c ? "not-allowed" : "pointer",
              transition: "border-color 150ms ease",
              outline: "none",
              userSelect: "none"
            },
            children: [
              y && /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    flexShrink: 0,
                    width: Be,
                    height: Be,
                    marginRight: kt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: H.iconColor
                  },
                  children: y
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
                    marginLeft: kt,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: H.iconColor,
                    transform: D ? "rotate(180deg)" : "rotate(0deg)",
                    transition: hl
                  },
                  children: /* @__PURE__ */ t(So, { size: "md" })
                }
              )
            ]
          }
        ),
        d && /* @__PURE__ */ t(
          "p",
          {
            style: {
              fontSize: al,
              lineHeight: sl,
              fontWeight: dl,
              color: h ? ke.error.helperText : H.helperText,
              margin: 0
            },
            children: d
          }
        ),
        C && !L && /* @__PURE__ */ t("input", { type: "hidden", name: C, value: Ee || "" }),
        C && L && (v || []).map((m) => /* @__PURE__ */ t("input", { type: "hidden", name: C, value: m }, m)),
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
                zIndex: Po,
                backgroundColor: e.neutral.surface.negative,
                // neutral.negative
                borderRadius: $o,
                boxShadow: No,
                maxHeight: Me,
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
                      gap: kt,
                      paddingLeft: fr,
                      paddingRight: fr,
                      paddingTop: Lt,
                      paddingBottom: Lt,
                      borderBottom: `1px solid ${Vo}`,
                      flexShrink: 0
                    },
                    children: [
                      /* @__PURE__ */ t(Fo, { size: "md", style: { color: Zo } }),
                      /* @__PURE__ */ t(
                        "input",
                        {
                          ref: G,
                          type: "text",
                          value: de,
                          onChange: (m) => N(m.target.value),
                          onKeyDown: je,
                          placeholder: E,
                          style: {
                            flex: 1,
                            border: "none",
                            outline: "none",
                            fontSize: Xo,
                            lineHeight: Ko,
                            fontWeight: it,
                            color: ke.default.text,
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
                      padding: ur,
                      overflowY: "auto",
                      flex: 1
                    },
                    children: /* @__PURE__ */ a(
                      "div",
                      {
                        style: {
                          borderRadius: Ho,
                          overflow: "hidden"
                        },
                        children: [
                          $.length === 0 && /* @__PURE__ */ t(
                            "div",
                            {
                              style: {
                                padding: `${Ze}px ${Ct}px`,
                                fontSize: Dt,
                                lineHeight: _t,
                                color: Jo,
                                fontFamily: "inherit"
                              },
                              children: "No results found"
                            }
                          ),
                          $.map((m, S) => {
                            const _ = L ? ft(m.value) : m.value === Ee, we = S === F, ie = !!m.disabled;
                            return /* @__PURE__ */ a(
                              "div",
                              {
                                role: "option",
                                "aria-selected": _,
                                "aria-disabled": ie,
                                onClick: () => {
                                  ie || He(m);
                                },
                                onMouseEnter: () => {
                                  ie || R(S);
                                },
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: hr,
                                  paddingLeft: Ct,
                                  paddingRight: Ct,
                                  paddingTop: Ze,
                                  paddingBottom: Ze,
                                  backgroundColor: we && !ie ? Yo : Go,
                                  cursor: ie ? "not-allowed" : "pointer",
                                  transition: "background-color 100ms ease"
                                },
                                children: [
                                  m.iconLeft && /* @__PURE__ */ t(
                                    "div",
                                    {
                                      style: {
                                        flexShrink: 0,
                                        width: Be,
                                        height: Be,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: ie ? Tt : _ ? gr : Et
                                      },
                                      children: m.iconLeft
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
                                              fontWeight: _ ? jo : it,
                                              color: ie ? Tt : _ ? gr : Et,
                                              overflow: "hidden",
                                              textOverflow: "ellipsis",
                                              whiteSpace: "nowrap",
                                              fontFamily: "inherit"
                                            },
                                            children: m.label
                                          }
                                        ),
                                        m.additionalInfo && /* @__PURE__ */ t(
                                          "span",
                                          {
                                            style: {
                                              fontSize: Dt,
                                              lineHeight: _t,
                                              fontWeight: it,
                                              color: ie ? Tt : Et,
                                              flexShrink: 0,
                                              marginLeft: hr,
                                              fontFamily: "inherit"
                                            },
                                            children: m.additionalInfo
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              },
                              m.value
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
const pl = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, mn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, bl = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
function xl({ size: r }) {
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
const vl = {
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
}, ml = {
  xs: { dimension: 28, iconSize: 16, radiusPill: 999, radiusRounded: parseInt(me.xxxs) },
  sm: { dimension: 32, iconSize: 16, radiusPill: 999, radiusRounded: parseInt(me.xxs) },
  md: { dimension: 40, iconSize: 20, radiusPill: 999, radiusRounded: parseInt(me.xxs) },
  lg: { dimension: 48, iconSize: 24, radiusPill: 999, radiusRounded: parseInt(me.xs) }
};
function Fe({
  icon: r,
  variant: n = "ghost",
  size: l = "md",
  pill: o = !0,
  pressed: i,
  loading: d = !1,
  disabled: u,
  className: c = "",
  style: h,
  ...b
}) {
  const g = u || d, y = i === !0, k = vl[n], C = ml[l], p = g ? k.disabled : y ? k.pressed : k.default, x = y ? k.pressedHover : k.hover, E = o ? C.radiusPill : C.radiusRounded, L = {
    // Colors
    backgroundColor: p.bg,
    color: p.text,
    borderColor: p.border ?? "transparent",
    borderWidth: p.borderWidth ?? 0,
    borderStyle: p.border ? "solid" : "none",
    // Sizing — square
    width: C.dimension,
    height: C.dimension,
    borderRadius: E,
    // Misc
    ...h
  };
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      disabled: g,
      "aria-busy": d || void 0,
      "aria-disabled": g || void 0,
      "aria-pressed": i !== void 0 ? i : void 0,
      "data-variant": n,
      "data-size": l,
      className: [
        "inline-flex items-center justify-center shrink-0",
        "select-none",
        "transition-colors duration-150",
        g ? "cursor-not-allowed" : "cursor-pointer",
        c
      ].filter(Boolean).join(" "),
      style: L,
      onMouseEnter: g ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = x.bg, f.style.color = x.text, x.border && (f.style.borderColor = x.border);
      },
      onMouseLeave: g ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = p.bg, f.style.color = p.text, f.style.borderColor = p.border ?? "transparent", document.activeElement !== f && (f.style.outline = "none", f.style.outlineOffset = "0px");
      },
      onMouseDown: g ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = k.active.bg, f.style.color = k.active.text, k.active.border && (f.style.borderColor = k.active.border);
      },
      onMouseUp: g ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.backgroundColor = x.bg, f.style.color = x.text, x.border && (f.style.borderColor = x.border);
      },
      onFocus: g ? void 0 : (v) => {
        const f = v.currentTarget;
        f.matches(":focus-visible") && (f.style.outline = `${k.focus.focusBorderWidth}px solid ${k.focus.focusBorder}`, f.style.outlineOffset = "2px");
      },
      onBlur: g ? void 0 : (v) => {
        const f = v.currentTarget;
        f.style.outline = "none", f.style.outlineOffset = "0px";
      },
      ...b,
      children: d ? /* @__PURE__ */ t(xl, { size: C.iconSize }) : /* @__PURE__ */ t("span", { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: r })
    }
  );
}
const yl = 1, wl = 8, kl = 999, Cr = 16, Er = 8, Tr = 20, Cl = 8, El = 4, Tl = 8, Ll = {
  sm: { height: 40 },
  md: { height: 48 },
  lg: { height: 56 }
}, De = {
  default: { border: e.neutral.border.strong, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.neutral.text.light, iconColor: e.neutral.text.DEFAULT },
  hover: { border: e.neutral.border.DEFAULT, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.neutral.text.light, iconColor: e.neutral.text.DEFAULT },
  focus: { border: e.neutral.border.DEFAULT, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.neutral.text.light, iconColor: e.neutral.text.DEFAULT },
  disabled: { border: e.neutral.border.strong, bg: e.neutral.surface.subtle, text: e.neutral.text.disabledDark, placeholder: e.neutral.text.disabledDark, helperText: e.neutral.text.light, iconColor: e.neutral.text.disabledDark },
  error: { border: e.error.border.DEFAULT, bg: e.neutral.surface.negative, text: e.neutral.text.DEFAULT, placeholder: e.neutral.text.light, helperText: e.error.text.DEFAULT, iconColor: e.neutral.text.DEFAULT }
}, Lr = parseInt(T["label-s"].fontSize), Dr = T["label-s"].lineHeight, _r = T["label-s"].fontWeight, Dl = e.neutral.text.DEFAULT, Ir = parseInt(T["paragraph-m"].fontSize), Ar = T["paragraph-m"].lineHeight, Sr = T["paragraph-m"].fontWeight, _l = parseInt(T["paragraph-s"].fontSize), Il = T["paragraph-s"].lineHeight, Al = T["paragraph-s"].fontWeight, Sl = e.error.text.DEFAULT, Fl = e.neutral.border.light, Fr = 2, Ae = Re.default, Rl = 280, Wl = 12, Ol = Se["2xl"], Ml = 1e3, Ul = 4, Bl = 16, Rr = 32, Xe = 4, $l = 6, Nl = 11, Hl = 14, $t = "transparent", ut = e.neutral.surface.subtle, Nt = e.neutral.text.DEFAULT, Ht = e.neutral.border.light, zt = e.neutral.text.negative, Pt = e.neutral.text.disabledDark, zl = e.neutral.text.medium, Pl = e.neutral.text.light, Wr = e.neutral.text.DEFAULT, Gt = [
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
], yn = [
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
], wn = 36, kn = 6;
function Or(r) {
  const n = r.replace(/\D/g, "").slice(0, 8);
  return n.length <= 2 ? n : n.length <= 4 ? n.slice(0, 2) + " / " + n.slice(2) : n.slice(0, 2) + " / " + n.slice(2, 4) + " / " + n.slice(4, 8);
}
function Ke(r) {
  if (r.length !== 14) return null;
  const n = r.split(" / ");
  if (n.length !== 3) return null;
  const l = parseInt(n[0], 10) - 1, o = parseInt(n[1], 10), i = parseInt(n[2], 10);
  if (isNaN(l) || isNaN(o) || isNaN(i) || l < 0 || l > 11 || o < 1 || o > 31 || i < 1900 || i > 2100) return null;
  const d = new Date(i, l, o);
  return d.getMonth() !== l || d.getDate() !== o ? null : d;
}
function Mr(r, n) {
  return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth() && r.getDate() === n.getDate();
}
function Gl(r) {
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
  ], l = [];
  let o = null;
  for (const i of n) {
    let d, u;
    "sep" in i ? (u = r.length < i.afterDigits, d = i.sep) : i.digitIdx < r.length ? (d = r[i.digitIdx], u = !1) : (d = i.template, u = !0), o === u && l.length > 0 ? l[l.length - 1].text += d : (l.push({ text: d, isPlaceholder: u }), o = u);
  }
  return l;
}
function Yl(r, n, l) {
  if (n) {
    const o = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    if (r < o) return !0;
  }
  if (l) {
    const o = new Date(l.getFullYear(), l.getMonth(), l.getDate());
    if (r > o) return !0;
  }
  return !1;
}
function jl(r, n) {
  const l = new Date(r, n, 1).getDay(), o = new Date(r, n + 1, 0).getDate(), i = new Date(r, n, 0).getDate(), d = [];
  for (let c = l - 1; c >= 0; c--) {
    const h = i - c, b = n === 0 ? 11 : n - 1, g = n === 0 ? r - 1 : r;
    d.push({ day: h, month: b, year: g, isCurrentMonth: !1 });
  }
  for (let c = 1; c <= o; c++)
    d.push({ day: c, month: n, year: r, isCurrentMonth: !0 });
  const u = 42 - d.length;
  for (let c = 1; c <= u; c++) {
    const h = n === 11 ? 0 : n + 1, b = n === 11 ? r + 1 : r;
    d.push({ day: c, month: h, year: b, isCurrentMonth: !1 });
  }
  return d;
}
function Vl({
  day: r,
  month: n,
  year: l,
  isCurrentMonth: o,
  isSelected: i,
  isToday: d,
  isDisabled: u,
  onClick: c
}) {
  const [h, b] = U(!1), g = i ? Nt : h && !u ? ut : d && !i ? Ht : $t, y = i ? zt : u ? Pt : o ? e.neutral.text.DEFAULT : zl;
  return /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      onClick: () => !u && c(new Date(l, n, r)),
      onMouseEnter: () => b(!0),
      onMouseLeave: () => b(!1),
      disabled: u,
      tabIndex: o && !u ? 0 : -1,
      "aria-label": `${Gt[n]} ${r}, ${l}`,
      style: {
        width: Rr,
        height: Rr,
        borderRadius: $l,
        border: "none",
        backgroundColor: g,
        color: y,
        fontSize: Hl,
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
function Zl({
  monthIndex: r,
  year: n,
  isSelected: l,
  isCurrent: o,
  isDisabled: i,
  onClick: d
}) {
  const [u, c] = U(!1), h = l ? Nt : u && !i ? ut : o ? Ht : $t, b = l ? zt : i ? Pt : e.neutral.text.DEFAULT;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => !i && d(r),
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      disabled: i,
      "aria-label": `${Gt[r]} ${n}`,
      style: {
        height: wn,
        borderRadius: kn,
        border: "none",
        backgroundColor: h,
        color: b,
        fontSize: 13,
        fontWeight: l ? P.medium : P.regular,
        fontFamily: Ae,
        cursor: i ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 100ms ease",
        padding: 0
      },
      children: yn[r]
    }
  );
}
function Xl({
  year: r,
  isSelected: n,
  isCurrent: l,
  isDisabled: o,
  onClick: i
}) {
  const [d, u] = U(!1), c = n ? Nt : d && !o ? ut : l ? Ht : $t, h = n ? zt : o ? Pt : e.neutral.text.DEFAULT;
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: () => !o && i(r),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      disabled: o,
      "aria-label": String(r),
      style: {
        height: wn,
        borderRadius: kn,
        border: "none",
        backgroundColor: c,
        color: h,
        fontSize: 13,
        fontWeight: n ? P.medium : P.regular,
        fontFamily: Ae,
        cursor: o ? "not-allowed" : "pointer",
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
function ns({
  label: r,
  helperText: n,
  required: l = !1,
  showInfoIcon: o = !1,
  disabled: i = !1,
  error: d = !1,
  size: u = "md",
  shape: c = "default",
  value: h,
  onChange: b,
  onDateChange: g,
  minDate: y,
  maxDate: k,
  name: C
}) {
  const p = h !== void 0, [x, E] = U(h ?? ""), L = p ? h : x, [v, f] = U(!1), O = /* @__PURE__ */ new Date(), [A, w] = U(O.getFullYear()), [te, G] = U(O.getMonth()), [D, se] = U(null), [F, R] = U("days"), [K, ge] = U(() => Math.floor(O.getFullYear() / 12) * 12), de = j(null), N = j(null), oe = j(null), ye = j(null), { height: re } = Ll[u], Ee = c === "rounded" ? kl : wl, Z = i ? De.disabled : d ? De.error : De.default, le = Ke(L), $ = L.replace(/\D/g, ""), ce = Gl($), fe = () => {
    const s = N.current;
    !s || i || (d || (s.style.borderColor = De.focus.border), s.style.outline = `${Fr}px solid ${Fl}`, s.style.outlineOffset = `${Fr}px`);
  }, ue = () => {
    const s = N.current;
    s && (s.style.borderColor = Z.border, s.style.outline = "none", s.style.outlineOffset = "0px");
  }, H = (s) => {
    const I = Or(s.target.value);
    p || E(I), b?.(I);
    const W = Ke(I);
    g?.(W);
  }, We = (s) => {
    if (s.key === "Backspace") {
      const I = oe.current?.selectionStart ?? 0, W = I >= 2 && I <= 4, J = I >= 7 && I <= 9;
      if (W || J) {
        s.preventDefault();
        const ae = W ? 2 : 7, Wn = L.slice(0, ae - 1) + L.slice(ae), vt = Or(Wn);
        p || E(vt), b?.(vt), g?.(Ke(vt));
        const jt = ae - 1;
        setTimeout(() => {
          oe.current?.setSelectionRange(jt, jt);
        }, 0);
      }
    }
    s.key === "Escape" && v && (s.preventDefault(), f(!1), ue());
  }, Oe = () => {
    fe();
  }, Me = (s) => {
    const I = s.relatedTarget, W = de.current?.contains(I), J = ye.current?.contains(I);
    !W && !J && ue();
  }, z = () => {
    if (i || v) return;
    const s = N.current;
    s && (d || (s.style.borderColor = De.hover.border));
  }, Ue = () => {
    if (i || v) return;
    const s = N.current;
    s && (s.style.borderColor = Z.border);
  }, Te = () => {
    if (!i)
      if (v)
        f(!1), R("days"), ue();
      else {
        const s = Ke(L);
        s ? (G(s.getMonth()), w(s.getFullYear())) : (G(O.getMonth()), w(O.getFullYear())), R("days"), f(!0), fe();
      }
  }, pe = Ye(() => {
    if (N.current) {
      const s = N.current.getBoundingClientRect();
      se({
        top: s.bottom + Ul + window.scrollY,
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
  }, [v, d, Z.border]);
  const He = () => {
    te === 0 ? (G(11), w((s) => s - 1)) : G((s) => s - 1);
  }, je = () => {
    te === 11 ? (G(0), w((s) => s + 1)) : G((s) => s + 1);
  }, ht = (s) => {
    const I = String(s.getMonth() + 1).padStart(2, "0"), W = String(s.getDate()).padStart(2, "0"), J = String(s.getFullYear()), ae = `${I} / ${W} / ${J}`;
    p || E(ae), b?.(ae), g?.(s), f(!1), R("days"), ue(), oe.current?.focus();
  }, gt = (s) => {
    s.key === "Escape" && (s.preventDefault(), f(!1), R("days"), ue(), oe.current?.focus());
  }, ft = (s, I) => !!(y && new Date(I, s + 1, 0) < new Date(y.getFullYear(), y.getMonth(), y.getDate()) || k && new Date(I, s, 1) > new Date(k.getFullYear(), k.getMonth(), k.getDate())), pt = (s) => !!(y && s < y.getFullYear() || k && s > k.getFullYear()), bt = () => {
    F === "days" ? R("months") : F === "months" && (ge(Math.floor(A / 12) * 12), R("years"));
  }, xt = (s) => {
    G(s), R("days");
  }, m = (s) => {
    w(s), R("months");
  }, S = () => {
    F === "days" ? He() : F === "months" ? w((s) => s - 1) : ge((s) => s - 12);
  }, _ = () => {
    F === "days" ? je() : F === "months" ? w((s) => s + 1) : ge((s) => s + 12);
  }, we = F === "days" ? `${Gt[te]} ${A}` : F === "months" ? String(A) : `${K} – ${K + 11}`, ie = F !== "years", Yt = F === "days" ? ["Previous month", "Next month"] : F === "months" ? ["Previous year", "Next year"] : ["Previous 12 years", "Next 12 years"], Fn = r || l || o, Rn = jl(A, te);
  return /* @__PURE__ */ a(
    "div",
    {
      ref: de,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: Cl,
        width: "100%"
      },
      children: [
        Fn && /* @__PURE__ */ a("div", { style: { display: "flex", gap: El, alignItems: "center" }, children: [
          r && /* @__PURE__ */ t("label", { style: {
            fontSize: Lr,
            lineHeight: Dr,
            fontWeight: _r,
            color: Dl
          }, children: r }),
          l && /* @__PURE__ */ t("span", { style: {
            fontSize: Lr,
            lineHeight: Dr,
            fontWeight: _r,
            color: Sl
          }, children: "*" }),
          o && /* @__PURE__ */ t(Bt, { size: "md", style: { color: i ? De.disabled.iconColor : e.neutral.text.DEFAULT } })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            ref: N,
            onMouseEnter: z,
            onMouseLeave: Ue,
            style: {
              display: "flex",
              alignItems: "center",
              height: re,
              paddingLeft: Cr,
              paddingRight: Cr,
              paddingTop: Er,
              paddingBottom: Er,
              backgroundColor: Z.bg,
              border: `${yl}px solid ${Z.border}`,
              borderRadius: Ee,
              cursor: i ? "not-allowed" : "text",
              transition: "border-color 150ms ease"
            },
            children: [
              /* @__PURE__ */ a("div", { style: { position: "relative", flex: 1 }, children: [
                $.length < 8 && /* @__PURE__ */ t(
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
                      fontSize: Ir,
                      lineHeight: Ar,
                      fontWeight: Sr,
                      fontFamily: Ae,
                      letterSpacing: "0.02em"
                    },
                    children: ce.map((s, I) => /* @__PURE__ */ t(
                      "span",
                      {
                        style: { color: s.isPlaceholder ? Z.placeholder : "transparent" },
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
                    onBlur: Me,
                    "aria-label": r ?? "Date",
                    style: {
                      position: "relative",
                      flex: 1,
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontSize: Ir,
                      lineHeight: Ar,
                      fontWeight: Sr,
                      color: Z.text,
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
                    width: Tr,
                    height: Tr,
                    marginLeft: Tl,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    color: Z.iconColor,
                    cursor: i ? "not-allowed" : "pointer"
                  },
                  children: /* @__PURE__ */ t(pl, { size: "md", style: { color: Z.iconColor } })
                }
              )
            ]
          }
        ),
        n && /* @__PURE__ */ t("p", { style: {
          fontSize: _l,
          lineHeight: Il,
          fontWeight: Al,
          color: d ? De.error.helperText : Z.helperText,
          margin: 0
        }, children: n }),
        C && /* @__PURE__ */ t("input", { type: "hidden", name: C, value: L }),
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
                width: Rl,
                zIndex: Ml,
                backgroundColor: e.neutral.surface.negative,
                borderRadius: Wl,
                boxShadow: Ol,
                padding: Bl,
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
                      icon: /* @__PURE__ */ t(mn, { size: "sm" }),
                      "aria-label": Yt[0],
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
                        color: Wr,
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
                      children: we
                    }
                  ) : /* @__PURE__ */ t("span", { style: {
                    fontSize: 14,
                    fontWeight: P.medium,
                    color: Wr,
                    userSelect: "none"
                  }, children: we }),
                  /* @__PURE__ */ t(
                    Fe,
                    {
                      icon: /* @__PURE__ */ t(bl, { size: "sm" }),
                      "aria-label": Yt[1],
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
                    marginBottom: Xe
                  }, children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((s) => /* @__PURE__ */ t("div", { style: {
                    textAlign: "center",
                    fontSize: Nl,
                    fontWeight: 500,
                    color: Pl,
                    paddingBottom: 4,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    userSelect: "none"
                  }, children: s }, s)) }),
                  /* @__PURE__ */ t("div", { style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: Xe,
                    justifyItems: "center"
                  }, children: Rn.map((s) => {
                    const I = new Date(s.year, s.month, s.day), W = le ? Mr(I, le) : !1, J = Mr(I, O), ae = Yl(I, y, k);
                    return /* @__PURE__ */ t(
                      Vl,
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
                  gap: Xe
                }, children: yn.map((s, I) => {
                  const W = le ? le.getFullYear() === A && le.getMonth() === I : !1, J = O.getFullYear() === A && O.getMonth() === I;
                  return /* @__PURE__ */ t(
                    Zl,
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
                  gap: Xe
                }, children: Array.from({ length: 12 }, (s, I) => {
                  const W = K + I, J = le ? le.getFullYear() === W : !1, ae = O.getFullYear() === W;
                  return /* @__PURE__ */ t(
                    Xl,
                    {
                      year: W,
                      isSelected: J,
                      isCurrent: ae && !J,
                      isDisabled: pt(W),
                      onClick: m
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
const Kl = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, Jl = {
  sm: { box: 32, icon: 14 },
  // spacing.xl
  md: { box: 40, icon: 16 },
  // spacing.xxl
  lg: { box: 48, icon: 20 }
  // spacing.xxxl
}, Ql = 999, ql = e.primary.surface.subtle, ei = e.primary.border.DEFAULT;
function os({
  size: r = "md",
  src: n,
  alt: l = "",
  fallback: o,
  bgColor: i,
  color: d,
  className: u = "",
  style: c,
  ...h
}) {
  const b = Jl[r], g = i ?? ql, y = d ?? ei, k = {
    width: b.box,
    height: b.box,
    borderRadius: Ql,
    backgroundColor: n ? "transparent" : g,
    overflow: "hidden",
    ...c
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: ["inline-flex items-center justify-center shrink-0", u].filter(Boolean).join(" "),
      style: k,
      ...h,
      children: n ? /* @__PURE__ */ t(
        "img",
        {
          src: n,
          alt: l,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }
      ) : o ?? /* @__PURE__ */ t(Kl, { size: b.icon, style: { color: y } })
    }
  );
}
const ti = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          d: "M2 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 19a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
        }
      )
    }
  );
}, ri = e.neutral.surface.negative, ni = e.neutral.border.light, oi = 1, Ur = 12, Br = 48, li = 50, ii = 1200, Cn = 1200, st = 16, ai = `
  /* Desktop: hide mobile-right off-screen (keeps SVG gradients alive) */
  .glow-navbar-right-mobile {
    position: absolute;
    width: 1px; height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  @container (max-width: ${Cn - 1}px) {
    .glow-navbar-center { display: none !important; }
    .glow-navbar-right-desktop {
      position: absolute !important;
      width: 1px !important; height: 1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
    }
    .glow-navbar-right-mobile {
      position: static !important;
      width: auto !important; height: auto !important;
      overflow: visible !important;
      clip: auto !important;
      white-space: normal !important;
    }
    .glow-navbar-root {
      padding-left: ${st}px !important;
      padding-right: ${st}px !important;
    }
    .glow-navbar-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
`, si = `
  @container (max-width: ${Cn - 1}px) {
    .glow-navbar-center { display: none !important; }
    .glow-navbar-right-desktop { display: none !important; }
    .glow-navbar-root {
      padding-left: ${st}px !important;
      padding-right: ${st}px !important;
    }
    .glow-navbar-grid {
      grid-template-columns: 1fr !important;
    }
  }
`, En = On(null);
function di({ logo: r, onMenuClick: n }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center gap-s", children: [
    n && /* @__PURE__ */ t(
      Fe,
      {
        icon: /* @__PURE__ */ t(ti, { size: "md" }),
        "aria-label": "Menu",
        variant: "ghost",
        size: "md",
        onClick: n
      }
    ),
    r
  ] });
}
function ci({ value: r, onChange: n, children: l }) {
  return /* @__PURE__ */ t(En.Provider, { value: { value: r, onChange: n }, children: /* @__PURE__ */ t("div", { className: "flex items-center gap-xxs", children: l }) });
}
function ui({ value: r, children: n }) {
  const l = Mn(En);
  if (!l)
    throw new Error("NavBar.Tab must be used inside NavBar.Tabs");
  const o = l.value === r;
  return /* @__PURE__ */ t(
    Pe,
    {
      variant: o ? "secondary" : "outline",
      size: "sm",
      pill: !0,
      onClick: () => l.onChange(r),
      children: n
    }
  );
}
function hi({
  left: r,
  center: n,
  right: l,
  sticky: o = !0,
  maxWidth: i = ii,
  responsive: d = !0,
  mobileRight: u,
  className: c = "",
  style: h,
  ...b
}) {
  const g = {
    backgroundColor: ri,
    borderBottom: `${oi}px solid ${ni}`,
    paddingTop: Ur,
    paddingBottom: Ur,
    paddingLeft: Br,
    paddingRight: Br,
    containerType: "inline-size",
    ...o && { position: "sticky", top: 0, zIndex: li },
    ...h
  }, y = {
    maxWidth: i
  };
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      className: ["glow-navbar-root", c].filter(Boolean).join(" "),
      style: g,
      ...b,
      children: [
        d && /* @__PURE__ */ t("style", { children: u ? ai : si }),
        /* @__PURE__ */ a(
          "div",
          {
            className: "glow-navbar-grid mx-auto grid grid-cols-[1fr_auto_1fr] items-center",
            style: y,
            children: [
              r ? /* @__PURE__ */ t("div", { className: "justify-self-start", children: r }) : /* @__PURE__ */ t("div", {}),
              n ? /* @__PURE__ */ t("div", { className: "glow-navbar-center justify-self-center", children: n }) : /* @__PURE__ */ t("div", {}),
              /* @__PURE__ */ a("div", { className: "justify-self-end", children: [
                l && /* @__PURE__ */ t("div", { className: "glow-navbar-right-desktop", children: l }),
                u && /* @__PURE__ */ t("div", { className: "glow-navbar-right-mobile", children: u }),
                !l && !u && null
              ] })
            ]
          }
        )
      ]
    }
  );
}
const ls = Object.assign(hi, {
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
  sm: parseInt(V.s),
  // 16px
  md: parseInt(V.m),
  // 20px
  lg: parseInt(V.xl)
  // 32px
}, It = Se.lg;
function At({
  variant: r = "outline",
  radius: n = "lg",
  padding: l = "md",
  interactive: o = !1,
  isActive: i = !1,
  as: d = "div",
  children: u,
  className: c = "",
  style: h,
  ...b
}) {
  const g = gi[r], y = fi[n], k = pi[l], C = {
    backgroundColor: g.bg,
    borderColor: g.border,
    borderWidth: g.borderWidth,
    borderStyle: g.borderWidth ? "solid" : "none",
    borderRadius: y,
    padding: k,
    boxShadow: i ? It : g.shadow,
    overflow: "hidden",
    boxSizing: "border-box",
    transition: o || i ? "box-shadow 150ms ease, transform 150ms ease" : void 0,
    cursor: o ? "pointer" : void 0,
    ...h
  };
  return /* @__PURE__ */ t(
    d,
    {
      className: c || void 0,
      style: C,
      onMouseEnter: o ? (x) => {
        const E = x.currentTarget;
        E.style.boxShadow = It, E.style.transform = "translateY(-1px)";
      } : void 0,
      onMouseLeave: o ? (x) => {
        const E = x.currentTarget;
        E.style.boxShadow = i ? It : g.shadow, E.style.transform = "translateY(0)";
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
}, wi = {
  sm: { height: 28, paddingX: 10, paddingY: 4, gap: 4, iconSize: 14, fontSize: 14, lineHeight: 18, closeSize: 18, closeIconSize: 8 },
  md: { height: 32, paddingX: 12, paddingY: 6, gap: 6, iconSize: 16, fontSize: 14, lineHeight: 18, closeSize: 20, closeIconSize: 8 },
  lg: { height: 36, paddingX: 14, paddingY: 8, gap: 8, iconSize: 18, fontSize: 16, lineHeight: 19, closeSize: 22, closeIconSize: 10 }
};
function Tn({
  variant: r = "subtle",
  color: n = "neutral",
  size: l = "md",
  selected: o = !1,
  removable: i = !1,
  onRemove: d,
  disabled: u = !1,
  iconLeft: c,
  onClick: h,
  children: b,
  className: g = "",
  style: y,
  ...k
}) {
  const C = yi[r][n], p = wi[l], x = !!h && !u, E = u ? C.disabled : o ? C.selected : C.default, L = {
    // Always use `background` (shorthand) for both solid fills and gradients.
    // React 19 conflicts when mixing `background` and `backgroundColor` across rerenders.
    background: E.background ?? E.bg,
    color: E.text,
    borderColor: E.border ?? "transparent",
    borderWidth: E.borderWidth ?? 0,
    borderStyle: E.border ? "solid" : "none",
    // Sizing
    height: p.height,
    paddingLeft: p.paddingX,
    paddingRight: i ? p.paddingX - 2 : p.paddingX,
    // slightly tighter when close button present
    borderRadius: 999,
    // radii.full — always pill
    gap: p.gap,
    // Typography
    fontSize: p.fontSize,
    lineHeight: `${p.lineHeight}px`,
    fontWeight: P.medium,
    // Misc
    cursor: u ? "not-allowed" : x ? "pointer" : "default",
    opacity: u ? 1 : void 0,
    // colors handle disabled, not opacity
    transition: "background 150ms ease, color 150ms ease, border-color 150ms ease",
    userSelect: "none",
    boxSizing: "border-box",
    ...y
  };
  return /* @__PURE__ */ a(
    "div",
    {
      role: x ? "button" : void 0,
      tabIndex: x ? 0 : void 0,
      "aria-selected": o || void 0,
      "aria-disabled": u || void 0,
      "data-variant": r,
      "data-color": n,
      "data-size": l,
      "data-selected": o || void 0,
      className: [
        "inline-flex items-center shrink-0 font-default whitespace-nowrap",
        g
      ].filter(Boolean).join(" "),
      style: L,
      onClick: x ? h : void 0,
      onMouseEnter: x ? (v) => {
        const f = v.currentTarget;
        o || (f.style.background = C.hover.background ?? C.hover.bg, f.style.color = C.hover.text, C.hover.border && (f.style.borderColor = C.hover.border));
      } : void 0,
      onMouseLeave: x ? (v) => {
        const f = v.currentTarget;
        o || (f.style.background = E.background ?? E.bg, f.style.color = E.text, f.style.borderColor = E.border ?? "transparent", document.activeElement !== f && (f.style.outline = "none", f.style.outlineOffset = "0px"));
      } : void 0,
      onFocus: x ? (v) => {
        const f = v.currentTarget;
        f.matches(":focus-visible") && (f.style.outline = `${C.focus.focusBorderWidth}px solid ${C.focus.focusBorder}`, f.style.outlineOffset = "2px");
      } : void 0,
      onBlur: x ? (v) => {
        const f = v.currentTarget;
        f.style.outline = "none", f.style.outlineOffset = "0px";
      } : void 0,
      onKeyDown: x ? (v) => {
        (v.key === "Enter" || v.key === " ") && (v.preventDefault(), h?.(v));
      } : void 0,
      ...k,
      children: [
        c && /* @__PURE__ */ t(
          "span",
          {
            className: "inline-flex items-center justify-center shrink-0",
            style: { width: p.iconSize, height: p.iconSize },
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
              width: p.closeSize,
              height: p.closeSize,
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
            children: /* @__PURE__ */ t(bi, { size: p.closeIconSize })
          }
        )
      ]
    }
  );
}
function is({
  gap: r = 8,
  // spacing.xxs
  wrap: n = !0,
  children: l,
  className: o = "",
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
        o
      ].filter(Boolean).join(" "),
      style: { gap: r, ...i },
      ...d,
      children: l
    }
  );
}
const ki = e.overlay.surface.DEFAULT, Ci = e.overlay.surface.light, Je = e.overlay.blur, ze = e.neutral.text.negative, Ei = e.neutral.surface.negative, Ti = e.neutral.border.strong, Li = e.neutral.text.DEFAULT, Di = e.neutral.surface.subtle, _i = e.neutral.text.negative, Ii = "rgba(255,255,255,0.10)", Ai = "rgba(255,255,255,0.60)", Si = e.neutral.text.negative, $r = e.neutral.text.negative, Fi = "rgba(255,255,255,0.80)", Nr = 12, Ri = 999, Wi = 12, Oi = 16, Hr = 12, ve = 8, Mi = 16, Ui = 10, Bi = 16, zr = 4, $i = 8, Ni = 36, Pr = 12, Hi = parseInt(T["label-xs"].fontSize), zi = T["label-xs"].fontWeight, Gr = 20, Yr = 24, Pi = 4, Gi = 8, Yi = 8, ji = 250, Vi = 450, $e = Re.default, Zi = parseInt(T["paragraph-m"].fontSize), jr = P.medium, Xi = T["paragraph-m"].lineHeight, Ki = parseInt(T["label-xs"].fontSize), Ji = T["label-xs"].lineHeight, Vr = parseInt(T["paragraph-s"].fontSize), Zr = T["paragraph-s"].fontWeight, Xr = T["paragraph-s"].lineHeight, Qi = parseInt(T["paragraph-s"].fontSize), X = 22, ee = 10, Qe = 24, Ce = 12, Kr = "0px 0px 1px 0px rgba(23, 15, 73, 0.03), 0px 1px 1px 0px rgba(23, 15, 73, 0.04), 0px 5px 14px 0px rgba(8, 15, 52, 0.04)";
function qi({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: X, height: ee, viewBox: `0 0 ${X} ${ee}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `0,${ee} ${X},${ee} ${X / 2},0`, fill: r }) });
}
function ea({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: X, height: ee, viewBox: `0 0 ${X} ${ee}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `0,0 ${X},0 ${X / 2},${ee}`, fill: r }) });
}
function ta({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: ee, height: X, viewBox: `0 0 ${ee} ${X}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `${ee},0 ${ee},${X} 0,${X / 2}`, fill: r }) });
}
function ra({ color: r }) {
  return /* @__PURE__ */ t("svg", { width: ee, height: X, viewBox: `0 0 ${ee} ${X}`, fill: "none", style: { display: "block", flexShrink: 0 }, children: /* @__PURE__ */ t("polygon", { points: `0,0 0,${X} ${ee},${X / 2}`, fill: r }) });
}
function Jr({ onClose: r }) {
  const [n, l] = U(!1);
  return /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      "aria-label": "Close tooltip",
      onClick: r,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
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
function Qr({ label: r, onClick: n, btnVariant: l }) {
  const [o, i] = U(!1), d = l === "outline";
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
        backgroundColor: d ? o ? Di : Ei : o ? Ii : "transparent",
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
function qe({ bg: r, variant: n, title: l, text: o, leftIcon: i, media: d, link: u, primaryAction: c, secondaryAction: h, onClose: b, panelStyle: g }) {
  return n === "rich" ? /* @__PURE__ */ a(
    "div",
    {
      style: {
        backgroundColor: r,
        boxShadow: Kr,
        backdropFilter: `blur(${Je})`,
        WebkitBackdropFilter: `blur(${Je})`,
        borderRadius: Nr,
        paddingLeft: ve,
        paddingRight: ve,
        paddingTop: 0,
        paddingBottom: Mi,
        overflow: "hidden",
        ...g
      },
      children: [
        /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: ve, paddingTop: ve, paddingBottom: 0 }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: 8, paddingLeft: ve, paddingRight: ve }, children: [
            /* @__PURE__ */ t("p", { style: { flex: 1, fontFamily: $e, fontSize: Ki, fontWeight: jr, color: ze, lineHeight: Ji, margin: 0 }, children: l }),
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
          /* @__PURE__ */ t("p", { style: { fontFamily: $e, fontSize: Vr, fontWeight: Zr, color: ze, lineHeight: Xr, margin: 0 }, children: o }),
          u && /* @__PURE__ */ a(
            "a",
            {
              href: u.href ?? "#",
              onClick: u.onClick ? (k) => {
                k.preventDefault(), u.onClick?.();
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
              onMouseEnter: (k) => {
                k.currentTarget.style.color = Fi;
              },
              onMouseLeave: (k) => {
                k.currentTarget.style.color = $r;
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
        backdropFilter: `blur(${Je})`,
        WebkitBackdropFilter: `blur(${Je})`,
        borderRadius: Nr,
        paddingTop: Wi,
        paddingBottom: Oi,
        paddingLeft: Hr,
        paddingRight: Hr,
        overflow: "hidden",
        ...g
      },
      children: /* @__PURE__ */ a("div", { style: { display: "flex", gap: Ui, alignItems: "flex-start" }, children: [
        i && /* @__PURE__ */ t("div", { style: { width: Yr, height: Yr, flexShrink: 0, overflow: "hidden", color: ze }, children: i }),
        /* @__PURE__ */ a("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: Bi }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: zr }, children: [
            l && /* @__PURE__ */ t("p", { style: { fontFamily: $e, fontSize: Zi, fontWeight: jr, color: ze, lineHeight: Xi, margin: 0 }, children: l }),
            /* @__PURE__ */ t("p", { style: { fontFamily: $e, fontSize: Vr, fontWeight: Zr, color: ze, lineHeight: Xr, margin: 0 }, children: o })
          ] }),
          (c || h) && /* @__PURE__ */ a("div", { style: { display: "flex", gap: $i }, children: [
            c && /* @__PURE__ */ t(Qr, { label: c.label, onClick: c.onClick, btnVariant: "outline" }),
            h && /* @__PURE__ */ t(Qr, { label: h.label, onClick: h.onClick, btnVariant: "ghost" })
          ] })
        ] }),
        b && /* @__PURE__ */ t(Jr, { onClose: b })
      ] })
    }
  );
}
function qr(r) {
  const { direction: n } = r, o = r.variant === "rich" ? Ci : ki, i = n === "top-left" || n === "top-right", d = n === "bottom-left" || n === "bottom-right", u = n === "left", c = n === "right", h = n === "top-left" || n === "bottom-left", b = {
    minWidth: ji,
    maxWidth: Vi
  }, g = (y) => {
    switch (y) {
      case "up":
        return /* @__PURE__ */ t(qi, { color: o });
      case "down":
        return /* @__PURE__ */ t(ea, { color: o });
      case "left":
        return /* @__PURE__ */ t(ta, { color: o });
      case "right":
        return /* @__PURE__ */ t(ra, { color: o });
    }
  };
  return i || d ? /* @__PURE__ */ a("div", { style: { ...b, display: "flex", flexDirection: "column", alignItems: "stretch" }, children: [
    i && /* @__PURE__ */ t("div", { style: {
      display: "flex",
      justifyContent: h ? "flex-start" : "flex-end",
      paddingLeft: h ? Qe : void 0,
      paddingRight: h ? void 0 : Qe,
      paddingBottom: Ce,
      marginBottom: -Ce
    }, children: g("up") }),
    /* @__PURE__ */ t(qe, { ...r, bg: o }),
    d && /* @__PURE__ */ t("div", { style: {
      display: "flex",
      justifyContent: h ? "flex-start" : "flex-end",
      paddingLeft: h ? Qe : void 0,
      paddingRight: h ? void 0 : Qe,
      paddingTop: Ce,
      marginTop: -Ce
    }, children: g("down") })
  ] }) : u ? /* @__PURE__ */ a("div", { style: { ...b, display: "flex", flexDirection: "row", alignItems: "center" }, children: [
    /* @__PURE__ */ t("div", { style: { paddingRight: Ce, marginRight: -Ce }, children: g("left") }),
    /* @__PURE__ */ t(qe, { ...r, bg: o })
  ] }) : c ? /* @__PURE__ */ a("div", { style: { ...b, display: "flex", flexDirection: "row", alignItems: "center" }, children: [
    /* @__PURE__ */ t(qe, { ...r, bg: o }),
    /* @__PURE__ */ t("div", { style: { paddingLeft: Ce, marginLeft: -Ce }, children: g("right") })
  ] }) : /* @__PURE__ */ t(qe, { ...r, bg: o });
}
function oa(r, n) {
  const l = Yi, o = window.scrollX, i = window.scrollY;
  switch (n) {
    // "top-left" in Figma means the ARROW points up-left → panel appears BELOW trigger
    case "top-left":
      return {
        position: "absolute",
        top: r.bottom + l + i,
        left: r.left + o
      };
    case "top-right":
      return {
        position: "absolute",
        top: r.bottom + l + i,
        right: document.documentElement.clientWidth - r.right
      };
    // "bottom-left" → arrow points down-left → panel appears ABOVE trigger
    case "bottom-left":
      return {
        position: "absolute",
        top: r.top - l + i,
        left: r.left + o,
        transform: "translateY(-100%)"
      };
    case "bottom-right":
      return {
        position: "absolute",
        top: r.top - l + i,
        right: document.documentElement.clientWidth - r.right,
        transform: "translateY(-100%)"
      };
    case "left":
      return {
        position: "absolute",
        top: r.top + r.height / 2 + i,
        left: r.right + l + o,
        transform: "translateY(-50%)"
      };
    case "right":
      return {
        position: "absolute",
        top: r.top + r.height / 2 + i,
        right: document.documentElement.clientWidth - r.left + l,
        transform: "translateY(-50%)"
      };
  }
}
function as({
  children: r,
  open: n,
  onClose: l,
  direction: o = "top-left",
  variant: i = "default",
  className: d,
  ...u
}) {
  const c = l !== void 0, h = j(null), [b, g] = U(!1), [y, k] = U(null), C = c ? n ?? !1 : b;
  return xe(() => {
    if (C && h.current) {
      const p = h.current.getBoundingClientRect();
      k(oa(p, o));
    }
  }, [C, o]), r ? /* @__PURE__ */ a(
    "div",
    {
      ref: h,
      className: d,
      style: { display: "inline-block" },
      onMouseEnter: c ? void 0 : () => g(!0),
      onMouseLeave: c ? void 0 : () => g(!1),
      children: [
        r,
        C && y && ct(
          /* @__PURE__ */ t("div", { style: { zIndex: 1e3, ...y }, children: /* @__PURE__ */ t(
            qr,
            {
              direction: o,
              variant: i,
              onClose: l,
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
      direction: o,
      variant: i,
      onClose: l,
      ...u
    }
  );
}
const la = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, ia = e.overlay.surface.DEFAULT, aa = e.neutral.surface.negative, St = me.ln, sa = Se.xl, Ln = e.neutral.border.strong, da = e.neutral.text.DEFAULT, en = V.l, tn = V.s, ca = V.l, ua = V.m, rn = V.xxs, ha = V.m, ga = V.s, nn = 40, on = "md", fa = 24, pa = "28px", ba = parseInt(T["heading-s"]?.fontWeight ?? "400"), xa = Re.default, va = 1500, Ft = "150ms", ln = 640, ma = {
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
function ss({
  open: r,
  onClose: n,
  title: l,
  size: o = "md",
  showBackButton: i = !1,
  onBack: d,
  closeOnBackdropClick: u = !0,
  closeOnEscape: c = !0,
  children: h,
  footer: b,
  footerActions: g,
  footerLeft: y
}) {
  const k = j(null), C = j(null), p = j(`modal-title-${Math.random().toString(36).slice(2, 8)}`).current, x = Ye((f) => {
    c && f.key === "Escape" && (f.stopPropagation(), n());
  }, [c, n]), E = Ye((f) => {
    if (f.key !== "Tab" || !k.current) return;
    const O = k.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (O.length === 0) return;
    const A = O[0], w = O[O.length - 1];
    f.shiftKey ? document.activeElement === A && (f.preventDefault(), w.focus()) : document.activeElement === w && (f.preventDefault(), A.focus());
  }, []);
  if (xe(() => {
    if (!r) return;
    C.current = document.activeElement;
    const f = document.body.style.overflow;
    return document.body.style.overflow = "hidden", document.addEventListener("keydown", x), document.addEventListener("keydown", E), requestAnimationFrame(() => {
      k.current?.focus();
    }), () => {
      document.body.style.overflow = f, document.removeEventListener("keydown", x), document.removeEventListener("keydown", E), C.current?.focus();
    };
  }, [r, x, E]), !r) return null;
  const L = b !== void 0 || g !== void 0, v = () => b !== void 0 ? b : g === void 0 ? null : /* @__PURE__ */ a("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: y ? "space-between" : "flex-end",
    gap: rn
  }, children: [
    y && /* @__PURE__ */ t("div", { style: { flex: 1 }, children: y }),
    /* @__PURE__ */ t("div", { style: { display: "flex", alignItems: "center", gap: rn, flexShrink: 0 }, children: g })
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
          ref: k,
          className: "glow-modal-panel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": p,
          tabIndex: -1,
          style: { width: ma[o] },
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
                      icon: /* @__PURE__ */ t(mn, { size: on }),
                      "aria-label": "Go back",
                      variant: "outline",
                      size: "md",
                      onClick: d ?? n
                    }
                  ) : /* @__PURE__ */ t("div", { style: { width: nn, height: nn, flexShrink: 0, visibility: "hidden" } }),
                  /* @__PURE__ */ t(
                    "p",
                    {
                      id: p,
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
                      children: l
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
                children: h
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
const an = "M0 5.96C0 9.25 2.67 11.92 5.96 11.92C9.25 11.92 11.92 9.25 11.92 5.96C11.92 2.67 9.25 0 5.96 0C2.67 0 0 2.67 0 5.96Z", wa = ({
  backColor: r,
  frontColor: n,
  size: l = "sm",
  ...o
}) => {
  const i = B(l);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: i,
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      ...o,
      children: [
        /* @__PURE__ */ t("g", { transform: "translate(2.5, 1.1)", children: /* @__PURE__ */ t("path", { d: an, fill: r }) }),
        /* @__PURE__ */ t("g", { transform: "translate(5.6, 6.7)", children: /* @__PURE__ */ t("path", { d: an, fill: n }) })
      ]
    }
  );
}, ka = {
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
function sn({ tier: r, networkName: n, label: l, networkLabel: o, bordered: i = !0, size: d = "sm" }) {
  const u = ka[r], c = Ca[d], h = l ?? o ?? Ea[r], b = n ? `${n} · ${h}` : h, g = /* @__PURE__ */ t(wa, { backColor: u.back, frontColor: u.front, size: c === "sm" ? "sm" : "md" });
  return i ? /* @__PURE__ */ t(
    Tn,
    {
      variant: "outline",
      color: "neutral",
      size: c,
      iconLeft: g,
      children: b
    }
  ) : /* @__PURE__ */ a("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, flexShrink: 0 }, children: [
    g,
    b && /* @__PURE__ */ t("span", { style: { whiteSpace: "nowrap" }, children: b })
  ] });
}
const Ta = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, _a = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            fillRule: "evenodd",
            d: "M4.327 3.638C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V9.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C19.62 9 19.48 9 19.2 9H17a4 4 0 0 1-4-4V2.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219C12.62 2 12.48 2 12.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M11 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0m2 4a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z",
            clipRule: "evenodd"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            fill: n,
            d: "M15 2.707a.707.707 0 0 1 1.207-.5l3.586 3.586a.707.707 0 0 1-.5 1.207H17a2 2 0 0 1-2-2z"
          }
        )
      ]
    }
  );
}, Ia = {
  lower: { label: "Lower cost", chipColor: "success", Icon: Ta },
  typical: { label: "Typical cost", chipColor: "info", Icon: Da },
  higher: { label: "Higher cost", chipColor: "error", Icon: La },
  unknown: { label: "Unknown cost est", chipColor: "neutral", Icon: _a }
}, et = Re.default, tt = Re.display, rt = P.regular, nt = P.medium, ot = e.neutral.text.DEFAULT, Rt = e.neutral.text.dark, Aa = e.neutral.text.light, Wt = parseInt(V.xxs);
function dn({
  cost: r,
  costLevel: n,
  costLabel: l = "est. out-of-pocket",
  costChipLabel: o,
  showCostChip: i = !0,
  costChipHideIcon: d = !1,
  chipInline: u = !1,
  costHint: c
}) {
  const h = n ? Ia[n] : null, b = h && o ? { ...h, label: o } : h, g = i && b, y = c ? /* @__PURE__ */ t("p", { style: {
    fontFamily: et,
    fontWeight: rt,
    fontSize: Q[13],
    lineHeight: ne[16],
    color: Aa,
    marginTop: 2
  }, children: c }) : null, k = g ? /* @__PURE__ */ t(
    Tn,
    {
      color: b.chipColor,
      variant: "subtle",
      size: "sm",
      iconLeft: d ? void 0 : /* @__PURE__ */ t(b.Icon, { size: "sm" }),
      children: b.label
    }
  ) : null;
  return u ? /* @__PURE__ */ a("div", { children: [
    g ? /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: Wt }, children: [
      k,
      /* @__PURE__ */ t("span", { style: {
        fontFamily: tt,
        fontWeight: nt,
        fontSize: Q[24],
        lineHeight: ne[29],
        color: ot
      }, children: r })
    ] }) : /* @__PURE__ */ t("span", { style: {
      fontFamily: tt,
      fontWeight: nt,
      fontSize: Q[24],
      lineHeight: ne[29],
      color: ot
    }, children: r }),
    /* @__PURE__ */ t("p", { style: {
      fontFamily: et,
      fontWeight: rt,
      fontSize: Q[14],
      lineHeight: ne[17],
      color: Rt,
      marginTop: 2
    }, children: l }),
    y
  ] }) : /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: c ? "flex-start" : "center", justifyContent: "space-between", gap: Wt }, children: [
    g ? /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ t("span", { style: {
        fontFamily: tt,
        fontWeight: nt,
        fontSize: Q[24],
        lineHeight: ne[29],
        color: ot
      }, children: r }),
      /* @__PURE__ */ t("p", { style: {
        fontFamily: et,
        fontWeight: rt,
        fontSize: Q[14],
        lineHeight: ne[17],
        color: Rt,
        marginTop: 2
      }, children: l }),
      y
    ] }) : /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "baseline", gap: Wt }, children: [
        /* @__PURE__ */ t("span", { style: {
          fontFamily: tt,
          fontWeight: nt,
          fontSize: Q[24],
          lineHeight: ne[29],
          color: ot
        }, children: r }),
        /* @__PURE__ */ t("span", { style: {
          fontFamily: et,
          fontWeight: rt,
          fontSize: Q[14],
          lineHeight: ne[17],
          color: Rt
        }, children: l })
      ] }),
      y
    ] }),
    k
  ] });
}
const cn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, un = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, hn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, gn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, fn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, pn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
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
}, bn = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          d: "M8 2a4 4 0 0 0-4 4v14c0 1.684 1.953 2.615 3.26 1.554l4.11-3.335a1 1 0 0 1 1.26 0l4.11 3.335c1.307 1.06 3.26.13 3.26-1.553V6a4 4 0 0 0-4-4z"
        }
      )
    }
  );
}, Sa = ({ size: r = 32, className: n, ...l }) => {
  const o = typeof r == "number" ? r : r === "sm" ? 32 : 40;
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 56 56",
      className: n,
      ...l,
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
}, Fa = ({ size: r = 32, className: n, ...l }) => {
  const o = typeof r == "number" ? r : r === "sm" ? 32 : 40;
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 56 56",
      className: n,
      ...l,
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
}, Ra = ({ size: r = 32, className: n, ...l }) => {
  const o = typeof r == "number" ? r : r === "sm" ? 32 : 40;
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 56 56",
      className: n,
      ...l,
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
}, Ge = Re.default, Ut = P.regular, lt = P.medium, Ne = e.neutral.text.DEFAULT;
e.neutral.text.dark;
const dt = e.neutral.border.light, Wa = e.neutral.surface.extraSubtle, Oa = e.neutral.surface.subtle, Ma = e.neutral.surface.negative, Dn = parseInt(me.full);
parseInt(V.xxxs);
const he = parseInt(V.xxs), q = parseInt(V.xs), M = parseInt(V.s), _n = parseInt(V.m), In = 160, _e = 52, Ot = 480;
function Ua(r) {
  const [n, l] = U(0);
  return xe(() => {
    const o = r.current;
    if (!o) return;
    l(o.getBoundingClientRect().width);
    const i = new ResizeObserver(([d]) => {
      l(d.contentRect.width);
    });
    return i.observe(o), () => i.disconnect();
  }, [r]), n;
}
function xn({ photoUrl: r, name: n, providerType: l, imgError: o, onImgError: i }) {
  return /* @__PURE__ */ t(
    "div",
    {
      style: {
        width: _e,
        height: _e,
        borderRadius: Dn,
        backgroundColor: Wa,
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: r && !o ? /* @__PURE__ */ t(
        "img",
        {
          src: r,
          alt: n,
          style: { width: "100%", height: "100%", objectFit: "cover" },
          onError: i
        }
      ) : l === "female" ? /* @__PURE__ */ t(Sa, { size: _e }) : l === "facility" ? /* @__PURE__ */ t(Ra, { size: _e }) : /* @__PURE__ */ t(Fa, { size: _e })
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
const vn = "glow-skeleton-shimmer-style", Mt = 800;
function An() {
  if (typeof document > "u" || document.getElementById(vn)) return;
  const r = document.createElement("style");
  r.id = vn, r.textContent = `
    @keyframes glow-skeleton-shimmer {
      0%   { background-position: -${Mt}px 0; }
      100% { background-position: ${Mt}px 0; }
    }
    .glow-skeleton-shimmer {
      background-color: ${Oa};
      background-image: linear-gradient(
        100deg,
        transparent 30%,
        ${Ma}80 50%,
        transparent 70%
      );
      background-size: ${Mt}px 100%;
      background-repeat: no-repeat;
      animation: glow-skeleton-shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  `, document.head.appendChild(r);
}
function Y({ width: r, height: n = 12, radius: l = 8 }) {
  return An(), /* @__PURE__ */ t("div", { className: "glow-skeleton-shimmer", style: {
    width: r,
    height: n,
    borderRadius: l
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
function Ba() {
  return /* @__PURE__ */ a(Ie, { children: [
    /* @__PURE__ */ t("div", { style: { padding: `${M}px ${M}px ${q}px` }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: he }, children: [
      /* @__PURE__ */ t(Sn, { size: _e }),
      /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 10 }, children: [
        /* @__PURE__ */ t(Y, { width: "55%", height: 16 }),
        /* @__PURE__ */ t(Y, { width: "35%", height: 12 })
      ] }),
      /* @__PURE__ */ t(Y, { width: 24, height: 24, radius: 6 })
    ] }) }),
    /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${M}px` } }),
    /* @__PURE__ */ t("div", { style: {
      padding: `${q}px ${M}px`,
      display: "flex",
      flexDirection: "column",
      gap: q
    }, children: [65, 75, 45].map((r, n) => /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: he }, children: [
      /* @__PURE__ */ t(Y, { width: 14, height: 14, radius: 4 }),
      /* @__PURE__ */ t(Y, { width: `${r}%`, height: 11 })
    ] }, n)) }),
    /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${M}px` } }),
    /* @__PURE__ */ a("div", { style: { padding: `${q}px ${M}px`, display: "flex", flexDirection: "column", gap: 10 }, children: [
      /* @__PURE__ */ t(Y, { width: "28%", height: 20, radius: 6 }),
      /* @__PURE__ */ t(Y, { width: "38%", height: 10 })
    ] }),
    /* @__PURE__ */ t("div", { style: { padding: `${q}px ${M}px ${M}px` }, children: /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: q }, children: [
      /* @__PURE__ */ t(Y, { width: "100%", height: 36, radius: 10 }),
      /* @__PURE__ */ t(Y, { width: "100%", height: 36, radius: 10 })
    ] }) })
  ] });
}
function $a() {
  return /* @__PURE__ */ a("div", { style: { display: "flex", padding: M }, children: [
    /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: M }, children: [
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
      marginLeft: M,
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
function ds({
  layout: r = "responsive",
  loading: n,
  name: l,
  specialty: o,
  photoUrl: i,
  initials: d,
  providerType: u = "male",
  address: c,
  distance: h,
  rating: b,
  reviewCount: g,
  networkTier: y,
  networkName: k,
  networkLabel: C,
  cost: p,
  costLevel: x,
  costLabel: E = "est. out-of-pocket",
  costChipLabel: L,
  costChipHideIcon: v,
  showCostChip: f = !0,
  showPrice: O = !0,
  costHint: A,
  languages: w,
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
  const N = j(null), oe = Ua(N), ye = r === "responsive" ? oe >= Ot ? "horizontal" : "vertical" : r, [re, Ee] = U(!1), [Z, le] = U(!1), $ = (z) => {
    z.stopPropagation();
    const Ue = !re;
    Ee(Ue), F?.(Ue);
  };
  if (n)
    return /* @__PURE__ */ t("div", { ref: N, style: r === "horizontal" ? { minWidth: Ot } : void 0, children: /* @__PURE__ */ t(At, { variant: "outline", radius: "md", padding: "none", as: "article", children: (ye === "horizontal" ? "horizontal" : "vertical") === "horizontal" ? /* @__PURE__ */ t($a, {}) : /* @__PURE__ */ t(Ba, {}) }) });
  const ce = w && w.length > 0, fe = ce ? w.length <= 2 ? w.join(", ") : `${w.slice(0, 2).join(", ")} +${w.length - 2}` : "", ue = R && !K, H = K ? !!D : ue, We = h || c || b != null || ce || te || H, Oe = O && p, Me = R || K;
  return ye === "horizontal" ? /* @__PURE__ */ t("div", { ref: N, style: { width: "100%", height: "100%", ...r === "horizontal" ? { minWidth: Ot } : void 0 }, children: /* @__PURE__ */ t(
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
      children: /* @__PURE__ */ a("div", { style: { display: "flex", padding: M }, children: [
        /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: M }, children: [
          /* @__PURE__ */ a("div", { style: { display: "flex", gap: q, alignItems: "flex-start" }, children: [
            /* @__PURE__ */ t(
              xn,
              {
                photoUrl: i,
                name: l,
                providerType: u,
                imgError: Z,
                onImgError: () => le(!0)
              }
            ),
            /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "center", gap: he }, children: [
                /* @__PURE__ */ t("p", { style: {
                  fontFamily: Ge,
                  fontWeight: lt,
                  fontSize: Q[18],
                  lineHeight: ne[22],
                  color: Ne,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }, children: l }),
                y && /* @__PURE__ */ t(sn, { tier: y, networkName: k, networkLabel: C, bordered: !0 })
              ] }),
              /* @__PURE__ */ t("p", { style: {
                fontFamily: Ge,
                fontWeight: Ut,
                fontSize: Q[16],
                lineHeight: ne[19],
                color: Ne,
                marginTop: 2
              }, children: o })
            ] })
          ] }),
          We && /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: he }, children: [
            b != null && /* @__PURE__ */ a(be, { icon: /* @__PURE__ */ t(un, { size: "sm" }), children: [
              b,
              "/5",
              g != null ? ` (${g})` : ""
            ] }),
            (h || c) && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(cn, { size: "sm" }), children: h && c ? `${h} - ${c}` : h || c }),
            ce && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(gn, { size: "sm" }), children: fe }),
            te && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(fn, { size: "sm" }), children: "Accept virtual appointment" }),
            H && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(hn, { size: "sm" }), children: ue ? "Call to check availability" : /* @__PURE__ */ a(Ie, { children: [
              G && `${G} `,
              /* @__PURE__ */ t("strong", { style: { fontWeight: lt }, children: D })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { style: {
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginLeft: M,
          minWidth: 160,
          gap: _n
        }, children: [
          se && /* @__PURE__ */ t(
            Fe,
            {
              icon: re ? /* @__PURE__ */ t(bn, { size: "md" }) : /* @__PURE__ */ t(pn, { size: "md" }),
              "aria-label": re ? "Remove from saved" : "Save provider",
              variant: "ghost",
              size: "sm",
              pressed: re,
              onClick: $
            }
          ),
          Oe && /* @__PURE__ */ t("div", { style: { textAlign: "right" }, children: /* @__PURE__ */ t(
            dn,
            {
              cost: p,
              costLevel: x,
              costLabel: E,
              costChipLabel: L,
              costChipHideIcon: v,
              showCostChip: f,
              costHint: A,
              chipInline: !0
            }
          ) }),
          Me && /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: K ? "1fr 1fr" : "1fr", gap: he, width: In, marginTop: "auto" }, children: [
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
        /* @__PURE__ */ t("div", { style: { padding: `${M}px ${M}px ${q}px` }, children: /* @__PURE__ */ a("div", { style: { display: "flex", alignItems: "flex-start", gap: he }, children: [
          /* @__PURE__ */ t(
            xn,
            {
              photoUrl: i,
              name: l,
              providerType: u,
              imgError: Z,
              onImgError: () => le(!0)
            }
          ),
          /* @__PURE__ */ a("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ t("p", { style: {
              fontFamily: Ge,
              fontWeight: lt,
              fontSize: Q[18],
              lineHeight: ne[22],
              color: Ne,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, children: l }),
            /* @__PURE__ */ t("p", { style: {
              fontFamily: Ge,
              fontWeight: Ut,
              fontSize: Q[16],
              lineHeight: ne[19],
              color: Ne,
              marginTop: 2
              // optical adjustment
            }, children: o }),
            y && /* @__PURE__ */ t("div", { style: { marginTop: he }, children: /* @__PURE__ */ t(
              sn,
              {
                tier: y,
                networkName: k,
                networkLabel: C,
                bordered: !1
              }
            ) })
          ] }),
          se && /* @__PURE__ */ t(
            Fe,
            {
              icon: re ? /* @__PURE__ */ t(bn, { size: "md" }) : /* @__PURE__ */ t(pn, { size: "md" }),
              "aria-label": re ? "Remove from saved" : "Save provider",
              variant: "ghost",
              size: "sm",
              pressed: re,
              onClick: $
            }
          )
        ] }) }),
        We && /* @__PURE__ */ a(Ie, { children: [
          /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${M}px` } }),
          /* @__PURE__ */ a("div", { style: {
            padding: `${q}px ${M}px`,
            display: "flex",
            flexDirection: "column",
            gap: q
          }, children: [
            b != null && /* @__PURE__ */ a(be, { icon: /* @__PURE__ */ t(un, { size: "sm" }), children: [
              b,
              "/5",
              g != null ? ` (${g})` : ""
            ] }),
            (h || c) && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(cn, { size: "sm" }), children: h && c ? `${h} - ${c}` : h || c }),
            ce && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(gn, { size: "sm" }), children: fe }),
            te && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(fn, { size: "sm" }), children: "Virtual visit available" }),
            H && /* @__PURE__ */ t(be, { icon: /* @__PURE__ */ t(hn, { size: "sm" }), children: ue ? "Call to check availability" : /* @__PURE__ */ a(Ie, { children: [
              G && `${G} `,
              /* @__PURE__ */ t("strong", { style: { fontWeight: lt }, children: D })
            ] }) })
          ] })
        ] }),
        Oe && /* @__PURE__ */ a(Ie, { children: [
          /* @__PURE__ */ t("div", { style: { height: 1, backgroundColor: dt, margin: `0 ${M}px` } }),
          /* @__PURE__ */ t("div", { style: { padding: `${q}px ${M}px` }, children: /* @__PURE__ */ t(
            dn,
            {
              cost: p,
              costLevel: x,
              costLabel: E,
              costChipLabel: L,
              costChipHideIcon: v,
              showCostChip: f,
              costHint: A
            }
          ) })
        ] }),
        Me && /* @__PURE__ */ t("div", { style: { padding: `${q}px ${M}px ${M}px`, marginTop: "auto" }, children: /* @__PURE__ */ a("div", { style: { display: "grid", gridTemplateColumns: K ? "1fr 1fr" : "1fr", gap: q }, children: [
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
const Na = ({
  size: r = "md",
  color: n = "currentColor",
  ...l
}) => {
  const o = B(r);
  return /* @__PURE__ */ t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      fill: "none",
      viewBox: "0 0 24 24",
      ...l,
      children: /* @__PURE__ */ t(
        "path",
        {
          fill: n,
          d: "M10.609 2.938c.505-1.251 2.277-1.251 2.782 0l1.937 4.802a.5.5 0 0 0 .423.312l4.866.397c1.32.107 1.863 1.747.869 2.621l-3.693 3.248a.5.5 0 0 0-.158.483l1.181 5.367c.295 1.34-1.217 2.34-2.335 1.544l-4.191-2.984a.5.5 0 0 0-.58 0l-4.192 2.984c-1.118.796-2.63-.203-2.335-1.544L6.364 14.8a.5.5 0 0 0-.158-.483L2.513 11.07c-.994-.874-.45-2.514.87-2.621l4.865-.397a.5.5 0 0 0 .423-.312z"
        }
      )
    }
  );
}, Ha = e["accent-yellow"].surface.selected, za = e.neutral.surface.disabled, Pa = e.neutral.text.light, Ga = Re.default, Ya = Q[13], ja = P.regular, Va = parseInt(V.xxs);
function cs({
  rating: r,
  maxStars: n = 5,
  size: l = "sm",
  showValue: o = !1,
  reviewCount: i,
  filledColor: d = Ha,
  emptyColor: u = za,
  className: c = "",
  style: h
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
        ...h
      },
      children: [
        Array.from({ length: n }, (g, y) => /* @__PURE__ */ t(
          Na,
          {
            size: l,
            color: y < b ? d : u
          },
          y
        )),
        (o || i != null) && /* @__PURE__ */ a(
          "span",
          {
            style: {
              marginLeft: Va,
              fontFamily: Ga,
              fontSize: Ya,
              fontWeight: ja,
              color: Pa,
              lineHeight: 1
            },
            children: [
              o && `${r}/${n}`,
              i != null && `${o ? " " : ""}(${i})`
            ]
          }
        )
      ]
    }
  );
}
export {
  os as A,
  Pe as B,
  At as C,
  ns as D,
  Fe as I,
  ss as M,
  ls as N,
  ds as P,
  qa as R,
  rs as S,
  ts as T,
  Qa as a,
  Tn as b,
  is as c,
  sn as d,
  cs as e,
  es as f,
  as as g,
  qr as h
};
