const e = {
  grey: {
    0: "#ffffff",
    // White
    25: "#fafafa",
    // Figma Grey/25
    50: "#f2f2f2",
    // Figma Grey/50
    100: "#ededed",
    200: "#e0e0e0",
    300: "#d4d4d4",
    400: "#c4c4c4",
    500: "#b3b3b3",
    600: "#a1a1a1",
    650: "#949494",
    // Figma Grey/650
    700: "#8a8a8a",
    800: "#6b6b6b",
    900: "#404040",
    950: "#000000"
    // Black
  },
  orange: {
    50: "#fff8f5",
    75: "#ffede5",
    // Figma Orange/75
    100: "#ffdccc",
    200: "#ffb999",
    300: "#fe9767",
    400: "#fe7434",
    500: "#fd5201",
    // Brand primary
    600: "#cb4101",
    700: "#983101",
    800: "#662000",
    900: "#331000",
    950: "#190800"
  },
  blue: {
    50: "#f5f8ff",
    100: "#ebf0ff",
    200: "#d3dfff",
    300: "#99b4ff",
    400: "#618bff",
    500: "#245eff",
    600: "#003feb",
    700: "#002ead",
    800: "#001f75",
    900: "#000f38"
  },
  green: {
    50: "#f1f9f1",
    100: "#e2f3e3",
    200: "#c2e5c3",
    300: "#a6d9a8",
    400: "#7ec881",
    500: "#5bb95e",
    600: "#429a45",
    700: "#317233",
    800: "#204b21",
    900: "#112712"
  },
  yellow: {
    50: "#fff9e5",
    100: "#fff3c7",
    200: "#ffe78f",
    300: "#ffdb57",
    400: "#ffd129",
    500: "#f5c000",
    600: "#c29800",
    700: "#947400",
    800: "#614c00",
    900: "#332800"
  },
  red: {
    50: "#feecec",
    // Figma Red/50
    100: "#fcd9d9",
    200: "#fab3b3",
    300: "#f78c8c",
    400: "#f46161",
    500: "#f23c3c",
    600: "#e10f0f",
    700: "#ac0b0b",
    800: "#730808",
    900: "#390404"
  },
  purple: {
    50: "#f3edfd",
    100: "#e7dafb",
    200: "#ceb5f7",
    300: "#b38cf3",
    400: "#9b67ef",
    500: "#8242eb",
    600: "#6117d9",
    700: "#4811a1",
    800: "#320c6f",
    900: "#190637"
  }
}, t = {
  // ── Primary (Figma: Primary Orange) ────────────────────────
  primary: {
    surface: {
      DEFAULT: e.orange[500],
      // #fd5201
      subtle: e.orange[50],
      // #fff8f5
      extraLight: e.orange[75],
      // #ffede5
      light: e.orange[300],
      // #fe9767
      hover: e.orange[400],
      // #fe7434
      focused: e.orange[400],
      // #fe7434
      selected: e.orange[600],
      // #cb4101
      disabled: e.orange[200]
      // #ffb999
    },
    border: {
      DEFAULT: e.orange[500],
      // #fd5201
      light: e.orange[200],
      // #ffb999
      darker: e.orange[700]
      // #983101
    },
    text: {
      DEFAULT: e.orange[500],
      // #fd5201
      light: e.orange[300],
      // #fe9767
      dark: e.orange[700],
      // #983101
      disabled: e.orange[50]
      // #fff8f5
    }
  },
  // ── Neutral (Figma: Primary Black) ─────────────────────────
  neutral: {
    surface: {
      DEFAULT: e.grey[950],
      // #000000
      dark: e.grey[650],
      // #949494
      negative: e.grey[0],
      // #ffffff
      extraSubtle: e.grey[25],
      // #fafafa
      subtle: e.grey[50],
      // #f2f2f2
      light: e.grey[200],
      // #e0e0e0
      hover: e.grey[900],
      // #404040
      focused: e.grey[900],
      // #404040
      selected: e.grey[950],
      // #000000
      disabled: e.grey[300]
      // #d4d4d4
    },
    border: {
      DEFAULT: e.grey[950],
      // #000000
      light: e.grey[100],
      // #ededed
      strong: e.grey[200],
      // #e0e0e0
      xstrong: e.grey[300]
      // #d4d4d4
    },
    text: {
      DEFAULT: e.grey[950],
      // #000000
      light: e.grey[700],
      // #8a8a8a
      dark: e.grey[900],
      // #404040
      disabledDark: e.grey[650],
      // #949494
      disabledLight: e.grey[300],
      // #d4d4d4
      negative: e.grey[0],
      // #ffffff
      medium: e.grey[400]
      // #c4c4c4
    }
  },
  // ── Accent Yellow (Figma: Secondary Yellow) ────────────────
  "accent-yellow": {
    surface: {
      DEFAULT: e.yellow[300],
      // #ffdb57
      subtle: e.yellow[50],
      // #fff9e5
      light: e.yellow[100],
      // #fff3c7
      hover: e.yellow[200],
      // #ffe78f
      focused: e.yellow[100],
      // #fff3c7
      selected: e.yellow[400],
      // #ffd129
      disabled: e.yellow[200]
      // #ffe78f
    },
    border: {
      DEFAULT: e.yellow[300],
      // #ffdb57
      light: e.yellow[100],
      // #fff3c7
      darker: e.yellow[400]
      // #ffd129
    },
    text: {
      DEFAULT: e.yellow[500],
      // #f5c000
      light: e.yellow[300],
      // #ffdb57
      dark: e.yellow[700]
      // #947400
    }
  },
  // ── Accent Blue (Figma: Secondary Blue) ────────────────────
  "accent-blue": {
    surface: {
      DEFAULT: e.blue[300],
      // #99b4ff
      subtle: e.blue[50],
      // #f5f8ff
      light: e.blue[100],
      // #ebf0ff
      hover: e.blue[200],
      // #d3dfff
      focused: e.blue[200],
      // #d3dfff
      selected: e.blue[400],
      // #618bff
      disabled: e.blue[200]
      // #d3dfff
    },
    border: {
      DEFAULT: e.blue[300],
      // #99b4ff
      light: e.blue[100],
      // #ebf0ff
      darker: e.blue[400]
      // #618bff
    },
    text: {
      DEFAULT: e.blue[300],
      // #99b4ff
      dark: e.blue[500]
      // #245eff
    }
  },
  // ── Accent Purple (Figma: Secondary Purple) ───────────────
  "accent-purple": {
    surface: {
      DEFAULT: e.purple[300],
      // #b38cf3
      subtle: e.purple[50],
      // #f3edfd
      light: e.purple[100],
      // #e7dafb
      hover: e.purple[200],
      // #ceb5f7
      focused: e.purple[200],
      // #ceb5f7
      selected: e.purple[400],
      // #9b67ef
      disabled: e.purple[200]
      // #ceb5f7
    },
    border: {
      DEFAULT: e.purple[300],
      // #b38cf3
      light: e.purple[100],
      // #e7dafb
      darker: e.purple[400]
      // #9b67ef
    },
    text: {
      DEFAULT: e.purple[300],
      // #b38cf3
      dark: e.purple[500]
      // #8242eb
    }
  },
  // ── Success ────────────────────────────────────────────────
  success: {
    surface: {
      DEFAULT: e.green[500],
      // #5bb95e
      subtle: e.green[50],
      // #f1f9f1
      light: e.green[200],
      // #c2e5c3
      hover: e.green[400],
      // #7ec881
      focused: e.green[400],
      // #7ec881
      selected: e.green[600],
      // #429a45
      disabled: e.green[200]
      // #c2e5c3
    },
    border: {
      DEFAULT: e.green[500],
      // #5bb95e
      light: e.green[100],
      // #e2f3e3
      darker: e.green[700]
      // #317233
    },
    text: {
      DEFAULT: e.green[500],
      // #5bb95e
      dark: e.green[700]
      // #317233
    }
  },
  // ── Error ──────────────────────────────────────────────────
  error: {
    surface: {
      DEFAULT: e.red[500],
      // #f23c3c
      subtle: e.red[50],
      // #feecec
      light: e.red[300],
      // #f78c8c
      hover: e.red[400],
      // #f46161
      focused: e.red[400],
      // #f46161
      selected: e.red[600],
      // #e10f0f
      disabled: e.red[200]
      // #fab3b3
    },
    border: {
      DEFAULT: e.red[600],
      // #e10f0f
      light: e.red[200],
      // #fab3b3
      darker: e.red[700]
      // #ac0b0b
    },
    text: {
      DEFAULT: e.red[600],
      // #e10f0f
      light: e.red[300],
      // #f78c8c
      dark: e.red[700],
      // #ac0b0b
      disabled: e.red[100]
      // #fcd9d9
    }
  },
  // ── Overlay (Figma: Tooltip / Modal backdrops) ────────────────
  overlay: {
    surface: {
      DEFAULT: "rgba(0, 0, 0, 0.72)",
      // dark overlay — tooltip default
      light: "rgba(64, 64, 64, 0.72)"
      // grey overlay — tooltip rich
    },
    blur: "13px"
    // backdrop-filter blur radius
  }
}, n = {
  default: '"Founders Grotesk", sans-serif',
  // All UI text
  display: '"Tiempos Headline", serif'
  // Large headings only
}, o = {
  regular: 400,
  medium: 500
}, i = {
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  56: "56px"
}, r = {
  17: "17px",
  19: "19px",
  22: "22px",
  29: "29px"
}, l = {
  // ── Display — Tiempos Headline ─────────────────────────────
  // Usage: Hero sections, marketing headlines only
  "display-l": { fontFamily: '"Tiempos Headline", serif', fontSize: "64px", lineHeight: "76px", fontWeight: 500, letterSpacing: "0.64px", fontStyle: "normal", textDecoration: "none" },
  "display-m": { fontFamily: '"Tiempos Headline", serif', fontSize: "56px", lineHeight: "64px", fontWeight: 500, letterSpacing: "0.56px", fontStyle: "normal", textDecoration: "none" },
  "display-s": { fontFamily: '"Tiempos Headline", serif', fontSize: "48px", lineHeight: "58px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "display-xs": { fontFamily: '"Tiempos Headline", serif', fontSize: "40px", lineHeight: "48px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "display-xxs": { fontFamily: '"Tiempos Headline", serif', fontSize: "32px", lineHeight: "39px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "display-xxxs": { fontFamily: '"Tiempos Headline", serif', fontSize: "24px", lineHeight: "29px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "display-xxxxs": { fontFamily: '"Tiempos Headline", serif', fontSize: "20px", lineHeight: "24px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "display-italic": { fontFamily: '"Tiempos Headline", serif', fontSize: "20px", lineHeight: "24px", fontWeight: 400, letterSpacing: "0px", fontStyle: "italic", textDecoration: "none" },
  "display-medium-italic": { fontFamily: '"Tiempos Headline", serif', fontSize: "20px", lineHeight: "24px", fontWeight: 500, letterSpacing: "0px", fontStyle: "italic", textDecoration: "none" },
  // ── Heading — Founders Grotesk ─────────────────────────────
  // Usage: Section titles, card headers, page headings
  // Note: XXL → S = Regular (400), XS → XXXS = Medium (500)
  "heading-xxl": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "40px", lineHeight: "47px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-xl": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "36px", lineHeight: "42px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-l": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "32px", lineHeight: "38px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-m": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "28px", lineHeight: "33px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-s": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "24px", lineHeight: "28px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-xs": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "20px", lineHeight: "24px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-xs-regular": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "20px", lineHeight: "24px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-xxs": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "18px", lineHeight: "21px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "heading-xxxs": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "16px", lineHeight: "19px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  // ── Labels — Founders Grotesk Medium ──────────────────────
  // Usage: Button text, form labels, navigation items, tags
  "label-l": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "20px", lineHeight: "24px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "label-m": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "18px", lineHeight: "22px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "label-s": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "16px", lineHeight: "19px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "label-xs": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "14px", lineHeight: "18px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  // ── Paragraph — Founders Grotesk Regular ──────────────────
  // Usage: Body text, descriptions, long-form content
  "paragraph-xl": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "20px", lineHeight: "24px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "paragraph-l": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "18px", lineHeight: "21px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "paragraph-m": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "16px", lineHeight: "19px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "paragraph-s": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "14px", lineHeight: "17px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  "paragraph-xs": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "12px", lineHeight: "14px", fontWeight: 400, letterSpacing: "0px", fontStyle: "normal", textDecoration: "none" },
  // ── Text Link — Founders Grotesk Medium + underline ───────
  // Usage: Inline text links, anchor text
  "text-link-l": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "18px", lineHeight: "22px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "underline" },
  "text-link-m": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "16px", lineHeight: "22px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "underline" },
  "text-link-s": { fontFamily: '"Founders Grotesk", sans-serif', fontSize: "14px", lineHeight: "17px", fontWeight: 500, letterSpacing: "0px", fontStyle: "normal", textDecoration: "underline" }
}, a = {
  // From Figma Card/Default variable
  card: "0px 2px 8px rgba(0, 0, 0, 0.08)",
  // Extended shadow scale
  sm: "0px 1px 4px rgba(0, 0, 0, 0.06)",
  md: "0px 2px 8px rgba(0, 0, 0, 0.08)",
  lg: "0px 4px 16px rgba(0, 0, 0, 0.10)",
  xl: "0px 8px 32px rgba(0, 0, 0, 0.12)",
  "2xl": "0px 16px 48px rgba(0, 0, 0, 0.16)",
  none: "none"
}, f = {
  none: "0px",
  xxxs: "4px",
  xxs: "8px",
  xs: "12px",
  sn: "16px",
  m: "20px",
  ln: "24px",
  xl: "32px",
  xxl: "40px",
  xxxl: "48px",
  full: "999px"
}, x = {
  xxxs: "4px",
  xxs: "8px",
  xs: "12px",
  s: "16px",
  m: "20px",
  l: "24px",
  xl: "32px",
  xxl: "40px",
  xxxl: "48px",
  xxxxl: "56px",
  "5xl": "72px"
};
export {
  i as a,
  o as b,
  a as c,
  f as d,
  x as e,
  n as f,
  r as l,
  e as p,
  t as s,
  l as t
};
