const fs = require("fs");

const styledDictionaryTheme = JSON.parse(
  fs.readFileSync("./styled-dictionary/styled-dictionary.json", "utf8")
);

const transformStyledDictionaryToChakra = (dictionary) => {
  // const chakraTheme = {};
  // for (const [key, value] of Object.entries(dictionary)) {
  //   const chakraKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  //   chakraTheme[chakraKey] = value;
  // }
  // return chakraTheme;
};

console.log(transformStyledDictionaryToChakra(styledDictionaryTheme));

module.export = transformedTheme = {
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        _light: "gray.800",
        _dark: "whiteAlpha.900",
      },
      "chakra-body-bg": {
        _light: "white",
        _dark: "gray.800",
      },
      "chakra-border-color": {
        _light: "gray.200",
        _dark: "whiteAlpha.300",
      },
      "chakra-subtle-bg": {
        _light: "gray.100",
        _dark: "gray.700",
      },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  direction: "ltr",
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  blur: {
    none: "10px",
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#D53F8C",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    brand: {
      700: "#2a69ac",
      800: "#153e75",
      900: "#1a365d",
    },
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeights: {
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  sizes: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  borders: {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  transition: {
    property: {
      common:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      dimensions: "width, height",
      position: "left, right, top, bottom",
      background: "background-color, background-image, background-position",
    },
    easing: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      "ultra-fast": "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      "ultra-slow": "500ms",
    },
  },
  components: {
    Accordion: {
      parts: ["root", "container", "button", "panel", "icon"],
      baseStyle: {
        container: {
          borderTopWidth: "1px",
          borderColor: "inherit",
          _last: {
            borderBottomWidth: "1px",
          },
        },
        button: {
          transitionProperty: "common",
          transitionDuration: "normal",
          fontSize: "md",
          _focusVisible: {
            boxShadow: "outline",
          },
          _hover: {
            bg: "blackAlpha.50",
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
          px: "4",
          py: "2",
        },
        panel: {
          pt: "2",
          px: "4",
          pb: "5",
        },
        icon: {
          fontSize: "1.25em",
        },
      },
    },
    Alert: {
      parts: ["title", "description", "container", "icon", "spinner"],
      baseStyle: {
        container: {
          bg: "var(--alert-bg)",
          px: "4",
          py: "3",
        },
        title: {
          fontWeight: "bold",
          lineHeight: "6",
          marginEnd: "2",
        },
        description: {
          lineHeight: "6",
        },
        icon: {
          color: "var(--alert-fg)",
          flexShrink: 0,
          marginEnd: "3",
          w: "5",
          h: "6",
        },
        spinner: {
          color: "var(--alert-fg)",
          flexShrink: 0,
          marginEnd: "3",
          w: "5",
          h: "5",
        },
      },
      variants: {},
      defaultProps: {
        variant: "subtle",
        colorScheme: "blue",
      },
    },
    Avatar: {
      parts: ["label", "badge", "container", "excessLabel", "group"],
      sizes: {
        "2xs": {
          container: {
            width: 4,
            height: 4,
            fontSize: "calc(1rem / 2.5)",
          },
          excessLabel: {
            width: 4,
            height: 4,
          },
          label: {
            fontSize: "calc(1rem / 2.5)",
            lineHeight: "1rem",
          },
        },
        xs: {
          container: {
            width: 6,
            height: 6,
            fontSize: "calc(1.5rem / 2.5)",
          },
          excessLabel: {
            width: 6,
            height: 6,
          },
          label: {
            fontSize: "calc(1.5rem / 2.5)",
            lineHeight: "1.5rem",
          },
        },
        sm: {
          container: {
            width: 8,
            height: 8,
            fontSize: "calc(2rem / 2.5)",
          },
          excessLabel: {
            width: 8,
            height: 8,
          },
          label: {
            fontSize: "calc(2rem / 2.5)",
            lineHeight: "2rem",
          },
        },
        md: {
          container: {
            width: 12,
            height: 12,
            fontSize: "calc(3rem / 2.5)",
          },
          excessLabel: {
            width: 12,
            height: 12,
          },
          label: {
            fontSize: "calc(3rem / 2.5)",
            lineHeight: "3rem",
          },
        },
        lg: {
          container: {
            width: 16,
            height: 16,
            fontSize: "calc(4rem / 2.5)",
          },
          excessLabel: {
            width: 16,
            height: 16,
          },
          label: {
            fontSize: "calc(4rem / 2.5)",
            lineHeight: "4rem",
          },
        },
        xl: {
          container: {
            width: 24,
            height: 24,
            fontSize: "calc(6rem / 2.5)",
          },
          excessLabel: {
            width: 24,
            height: 24,
          },
          label: {
            fontSize: "calc(6rem / 2.5)",
            lineHeight: "6rem",
          },
        },
        "2xl": {
          container: {
            width: 32,
            height: 32,
            fontSize: "calc(8rem / 2.5)",
          },
          excessLabel: {
            width: 32,
            height: 32,
          },
          label: {
            fontSize: "calc(8rem / 2.5)",
            lineHeight: "8rem",
          },
        },
        full: {
          container: {
            width: "100%",
            height: "100%",
            fontSize: "calc(100% / 2.5)",
          },
          excessLabel: {
            width: "100%",
            height: "100%",
          },
          label: {
            fontSize: "calc(100% / 2.5)",
          },
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    Badge: {
      baseStyle: {
        px: 1,
        textTransform: "uppercase",
        fontSize: "xs",
        borderRadius: "sm",
        fontWeight: "bold",
      },
      variants: {},
      defaultProps: {
        variant: "subtle",
        colorScheme: "gray",
      },
    },
    Breadcrumb: {
      parts: ["link", "item", "container", "separator"],
      baseStyle: {
        link: {
          transitionProperty: "common",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-out",
          cursor: "pointer",
          textDecoration: "none",
          outline: "none",
          color: "inherit",
          _hover: {
            textDecoration: "underline",
          },
          _focusVisible: {
            boxShadow: "outline",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        lineHeight: "1.2",
        borderRadius: "md",
        fontWeight: "semibold",
        transitionProperty: "common",
        transitionDuration: "normal",
        _focusVisible: {
          boxShadow: "outline",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          boxShadow: "none",
        },
        _hover: {
          _disabled: {
            bg: "initial",
          },
        },
      },
      variants: {
        unstyled: {
          bg: "none",
          color: "inherit",
          display: "inline",
          lineHeight: "inherit",
          m: "0",
          p: "0",
        },
      },
      sizes: {
        lg: {
          h: "12",
          minW: "12",
          fontSize: "lg",
          px: "6",
        },
        md: {
          h: "10",
          minW: "10",
          fontSize: "md",
          px: "4",
        },
        sm: {
          h: "8",
          minW: "8",
          fontSize: "sm",
          px: "3",
        },
        xs: {
          h: "6",
          minW: "6",
          fontSize: "xs",
          px: "2",
        },
      },
      defaultProps: {
        variant: "solid",
        size: "md",
        colorScheme: "gray",
      },
    },
    Checkbox: {
      parts: ["control", "icon", "container", "label"],
      sizes: {
        sm: {
          control: {
            "--checkbox-size": "sizes.3",
          },
          label: {
            fontSize: "sm",
          },
          icon: {
            fontSize: "3xs",
          },
        },
        md: {
          control: {
            "--checkbox-size": "sizes.4",
          },
          label: {
            fontSize: "md",
          },
          icon: {
            fontSize: "2xs",
          },
        },
        lg: {
          control: {
            "--checkbox-size": "sizes.5",
          },
          label: {
            fontSize: "lg",
          },
          icon: {
            fontSize: "2xs",
          },
        },
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue",
      },
    },
    CloseButton: {
      baseStyle: {
        w: ["var(--close-button-size)"],
        h: ["var(--close-button-size)"],
        borderRadius: "md",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          boxShadow: "none",
        },
        _hover: {
          "--close-button-bg": "colors.blackAlpha.100",
          _dark: {
            "--close-button-bg": "colors.whiteAlpha.100",
          },
        },
        _active: {
          "--close-button-bg": "colors.blackAlpha.200",
          _dark: {
            "--close-button-bg": "colors.whiteAlpha.200",
          },
        },
        _focusVisible: {
          boxShadow: "outline",
        },
        bg: "var(--close-button-bg)",
      },
      sizes: {
        lg: {
          "--close-button-size": "sizes.10",
          fontSize: "md",
        },
        md: {
          "--close-button-size": "sizes.8",
          fontSize: "xs",
        },
        sm: {
          "--close-button-size": "sizes.6",
          fontSize: "2xs",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    Code: {
      baseStyle: {
        fontFamily: "mono",
        fontSize: "sm",
        px: "0.2em",
        borderRadius: "sm",
      },
      variants: {},
      defaultProps: {
        variant: "subtle",
        colorScheme: "gray",
      },
    },
    Container: {
      baseStyle: {
        w: "100%",
        mx: "auto",
        maxW: "prose",
        px: "4",
      },
    },
    Divider: {
      baseStyle: {
        opacity: 0.6,
        borderColor: "inherit",
      },
      variants: {
        solid: {
          borderStyle: "solid",
        },
        dashed: {
          borderStyle: "dashed",
        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
    Drawer: {
      parts: [
        "overlay",
        "dialogContainer",
        "dialog",
        "header",
        "closeButton",
        "body",
        "footer",
      ],
      sizes: {
        xs: {
          dialog: {
            maxW: "xs",
          },
        },
        sm: {
          dialog: {
            maxW: "md",
          },
        },
        md: {
          dialog: {
            maxW: "lg",
          },
        },
        lg: {
          dialog: {
            maxW: "2xl",
          },
        },
        xl: {
          dialog: {
            maxW: "4xl",
          },
        },
        full: {
          dialog: {
            maxW: "100vw",
            h: "100vh",
          },
        },
      },
      defaultProps: {
        size: "xs",
      },
    },
    Editable: {
      parts: ["preview", "input", "textarea"],
      baseStyle: {
        preview: {
          borderRadius: "md",
          py: "1",
          transitionProperty: "common",
          transitionDuration: "normal",
        },
        input: {
          borderRadius: "md",
          py: "1",
          transitionProperty: "common",
          transitionDuration: "normal",
          width: "full",
          _focusVisible: {
            boxShadow: "outline",
          },
          _placeholder: {
            opacity: 0.6,
          },
        },
        textarea: {
          borderRadius: "md",
          py: "1",
          transitionProperty: "common",
          transitionDuration: "normal",
          width: "full",
          _focusVisible: {
            boxShadow: "outline",
          },
          _placeholder: {
            opacity: 0.6,
          },
        },
      },
    },
    Form: {
      parts: ["container", "requiredIndicator", "helperText"],
      baseStyle: {
        container: {
          width: "100%",
          position: "relative",
        },
        requiredIndicator: {
          marginStart: "1",
          "--form-control-color": "colors.red.500",
          _dark: {
            "--form-control-color": "colors.red.300",
          },
          color: "var(--form-control-color)",
        },
        helperText: {
          mt: "2",
          "--form-control-color": "colors.gray.600",
          _dark: {
            "--form-control-color": "colors.whiteAlpha.600",
          },
          color: "var(--form-control-color)",
          lineHeight: "normal",
          fontSize: "sm",
        },
      },
    },
    FormError: {
      parts: ["text", "icon"],
      baseStyle: {
        text: {
          "--form-error-color": "colors.red.500",
          _dark: {
            "--form-error-color": "colors.red.300",
          },
          color: "var(--form-error-color)",
          mt: "2",
          fontSize: "sm",
          lineHeight: "normal",
        },
        icon: {
          marginEnd: "0.5em",
          "--form-error-color": "colors.red.500",
          _dark: {
            "--form-error-color": "colors.red.300",
          },
          color: "var(--form-error-color)",
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "md",
        marginEnd: "3",
        mb: "2",
        fontWeight: "medium",
        transitionProperty: "common",
        transitionDuration: "normal",
        opacity: 1,
        _disabled: {
          opacity: 0.4,
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        fontWeight: "bold",
      },
      sizes: {
        "4xl": {
          fontSize: ["6xl", null, "7xl"],
          lineHeight: 1,
        },
        "3xl": {
          fontSize: ["5xl", null, "6xl"],
          lineHeight: 1,
        },
        "2xl": {
          fontSize: ["4xl", null, "5xl"],
          lineHeight: [1.2, null, 1],
        },
        xl: {
          fontSize: ["3xl", null, "4xl"],
          lineHeight: [1.33, null, 1.2],
        },
        lg: {
          fontSize: ["2xl", null, "3xl"],
          lineHeight: [1.33, null, 1.2],
        },
        md: {
          fontSize: "xl",
          lineHeight: 1.2,
        },
        sm: {
          fontSize: "md",
          lineHeight: 1.2,
        },
        xs: {
          fontSize: "sm",
          lineHeight: 1.2,
        },
      },
      defaultProps: {
        size: "xl",
      },
    },
    Input: {
      parts: ["addon", "field", "element"],
      baseStyle: {
        field: {
          width: "100%",
          minWidth: 0,
          outline: 0,
          position: "relative",
          appearance: "none",
          transitionProperty: "common",
          transitionDuration: "normal",
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
        },
      },
      sizes: {
        lg: {
          field: {
            fontSize: "lg",
            px: "4",
            h: "12",
            borderRadius: "md",
          },
          addon: {
            fontSize: "lg",
            px: "4",
            h: "12",
            borderRadius: "md",
          },
        },
        md: {
          field: {
            fontSize: "md",
            px: "4",
            h: "10",
            borderRadius: "md",
          },
          addon: {
            fontSize: "md",
            px: "4",
            h: "10",
            borderRadius: "md",
          },
        },
        sm: {
          field: {
            fontSize: "sm",
            px: "3",
            h: "8",
            borderRadius: "sm",
          },
          addon: {
            fontSize: "sm",
            px: "3",
            h: "8",
            borderRadius: "sm",
          },
        },
        xs: {
          field: {
            fontSize: "xs",
            px: "2",
            h: "6",
            borderRadius: "sm",
          },
          addon: {
            fontSize: "xs",
            px: "2",
            h: "6",
            borderRadius: "sm",
          },
        },
      },
      variants: {
        unstyled: {
          field: {
            bg: "transparent",
            px: "0",
            height: "auto",
          },
          addon: {
            bg: "transparent",
            px: "0",
            height: "auto",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Kbd: {
      baseStyle: {
        "--kbd-bg": "colors.gray.100",
        _dark: {
          "--kbd-bg": "colors.whiteAlpha.100",
        },
        bg: "var(--kbd-bg)",
        borderRadius: "md",
        borderWidth: "1px",
        borderBottomWidth: "3px",
        fontSize: "0.8em",
        fontWeight: "bold",
        lineHeight: "normal",
        px: "0.4em",
        whiteSpace: "nowrap",
      },
    },
    Link: {
      baseStyle: {
        transitionProperty: "common",
        transitionDuration: "fast",
        transitionTimingFunction: "ease-out",
        cursor: "pointer",
        textDecoration: "none",
        outline: "none",
        color: "inherit",
        _hover: {
          textDecoration: "underline",
        },
        _focusVisible: {
          boxShadow: "outline",
        },
      },
    },
    List: {
      parts: ["container", "item", "icon"],
      baseStyle: {
        icon: {
          marginEnd: "2",
          display: "inline",
          verticalAlign: "text-bottom",
        },
      },
    },
    Menu: {
      parts: ["button", "list", "item", "groupTitle", "command", "divider"],
      baseStyle: {
        button: {
          transitionProperty: "common",
          transitionDuration: "normal",
        },
        list: {
          "--menu-bg": "#fff",
          "--menu-shadow": "shadows.sm",
          _dark: {
            "--menu-bg": "colors.gray.700",
            "--menu-shadow": "shadows.dark-lg",
          },
          color: "inherit",
          minW: "3xs",
          py: "2",
          zIndex: 1,
          borderRadius: "md",
          borderWidth: "1px",
          bg: "var(--menu-bg)",
          boxShadow: "var(--menu-shadow)",
        },
        item: {
          py: "1.5",
          px: "3",
          transitionProperty: "background",
          transitionDuration: "ultra-fast",
          transitionTimingFunction: "ease-in",
          _focus: {
            "--menu-bg": "colors.gray.100",
            _dark: {
              "--menu-bg": "colors.whiteAlpha.100",
            },
          },
          _active: {
            "--menu-bg": "colors.gray.200",
            _dark: {
              "--menu-bg": "colors.whiteAlpha.200",
            },
          },
          _expanded: {
            "--menu-bg": "colors.gray.100",
            _dark: {
              "--menu-bg": "colors.whiteAlpha.100",
            },
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
          bg: "var(--menu-bg)",
        },
        groupTitle: {
          mx: 4,
          my: 2,
          fontWeight: "semibold",
          fontSize: "sm",
        },
        command: {
          opacity: 0.6,
        },
        divider: {
          border: 0,
          borderBottom: "1px solid",
          borderColor: "inherit",
          my: "2",
          opacity: 0.6,
        },
      },
    },
    Modal: {
      parts: [
        "overlay",
        "dialogContainer",
        "dialog",
        "header",
        "closeButton",
        "body",
        "footer",
      ],
      sizes: {
        xs: {
          dialog: {
            maxW: "xs",
          },
        },
        sm: {
          dialog: {
            maxW: "sm",
          },
        },
        md: {
          dialog: {
            maxW: "md",
          },
        },
        lg: {
          dialog: {
            maxW: "lg",
          },
        },
        xl: {
          dialog: {
            maxW: "xl",
          },
        },
        "2xl": {
          dialog: {
            maxW: "2xl",
          },
        },
        "3xl": {
          dialog: {
            maxW: "3xl",
          },
        },
        "4xl": {
          dialog: {
            maxW: "4xl",
          },
        },
        "5xl": {
          dialog: {
            maxW: "5xl",
          },
        },
        "6xl": {
          dialog: {
            maxW: "6xl",
          },
        },
        full: {
          dialog: {
            maxW: "100vw",
            minH: "$100vh",
            my: "0",
            borderRadius: "0",
          },
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    NumberInput: {
      parts: ["root", "field", "stepperGroup", "stepper"],
      sizes: {
        xs: {
          field: {
            fontSize: "xs",
            px: "2",
            h: "6",
            borderRadius: "sm",
            paddingInlineEnd: "var(--number-input-input-padding)",
            verticalAlign: "top",
          },
          stepper: {
            fontSize: "calc(0.75rem * 0.75)",
            _first: {
              borderTopEndRadius: "sm",
            },
            _last: {
              borderBottomEndRadius: "sm",
              mt: "-1px",
              borderTopWidth: 1,
            },
          },
        },
        sm: {
          field: {
            fontSize: "sm",
            px: "3",
            h: "8",
            borderRadius: "sm",
            paddingInlineEnd: "var(--number-input-input-padding)",
            verticalAlign: "top",
          },
          stepper: {
            fontSize: "calc(0.875rem * 0.75)",
            _first: {
              borderTopEndRadius: "sm",
            },
            _last: {
              borderBottomEndRadius: "sm",
              mt: "-1px",
              borderTopWidth: 1,
            },
          },
        },
        md: {
          field: {
            fontSize: "md",
            px: "4",
            h: "10",
            borderRadius: "md",
            paddingInlineEnd: "var(--number-input-input-padding)",
            verticalAlign: "top",
          },
          stepper: {
            fontSize: "calc(1rem * 0.75)",
            _first: {
              borderTopEndRadius: "md",
            },
            _last: {
              borderBottomEndRadius: "md",
              mt: "-1px",
              borderTopWidth: 1,
            },
          },
        },
        lg: {
          field: {
            fontSize: "lg",
            px: "4",
            h: "12",
            borderRadius: "md",
            paddingInlineEnd: "var(--number-input-input-padding)",
            verticalAlign: "top",
          },
          stepper: {
            fontSize: "calc(1.125rem * 0.75)",
            _first: {
              borderTopEndRadius: "md",
            },
            _last: {
              borderBottomEndRadius: "md",
              mt: "-1px",
              borderTopWidth: 1,
            },
          },
        },
      },
      variants: {
        unstyled: {
          field: {
            bg: "transparent",
            px: "0",
            height: "auto",
          },
          addon: {
            bg: "transparent",
            px: "0",
            height: "auto",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    PinInput: {
      baseStyle: {
        width: "100%",
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
        textAlign: "center",
      },
      sizes: {
        lg: {
          fontSize: "lg",
          w: 12,
          h: 12,
          borderRadius: "md",
        },
        md: {
          fontSize: "md",
          w: 10,
          h: 10,
          borderRadius: "md",
        },
        sm: {
          fontSize: "sm",
          w: 8,
          h: 8,
          borderRadius: "sm",
        },
        xs: {
          fontSize: "xs",
          w: 6,
          h: 6,
          borderRadius: "sm",
        },
      },
      variants: {
        unstyled: {
          bg: "transparent",
          px: "0",
          height: "auto",
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Popover: {
      parts: [
        "content",
        "header",
        "body",
        "footer",
        "popper",
        "arrow",
        "closeButton",
      ],
      baseStyle: {
        popper: {
          zIndex: 10,
        },
        content: {
          "--popper-bg": "colors.white",
          bg: "var(--popper-bg)",
          "--popper-arrow-bg": "var(--popper-bg)",
          "--popper-arrow-shadow-color": "colors.gray.200",
          _dark: {
            "--popper-bg": "colors.gray.700",
            "--popper-arrow-shadow-color": "colors.whiteAlpha.300",
          },
          width: "xs",
          border: "1px solid",
          borderColor: "inherit",
          borderRadius: "md",
          boxShadow: "sm",
          zIndex: "inherit",
          _focusVisible: {
            outline: 0,
            boxShadow: "outline",
          },
        },
        header: {
          px: 3,
          py: 2,
          borderBottomWidth: "1px",
        },
        body: {
          px: 3,
          py: 2,
        },
        footer: {
          px: 3,
          py: 2,
          borderTopWidth: "1px",
        },
        closeButton: {
          position: "absolute",
          borderRadius: "md",
          top: 1,
          insetEnd: 2,
          padding: 2,
        },
      },
    },
    Progress: {
      parts: ["label", "filledTrack", "track"],
      sizes: {
        xs: {
          track: {
            h: "1",
          },
        },
        sm: {
          track: {
            h: "2",
          },
        },
        md: {
          track: {
            h: "3",
          },
        },
        lg: {
          track: {
            h: "4",
          },
        },
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue",
      },
    },
    Radio: {
      parts: ["container", "control", "label"],
      sizes: {
        md: {
          control: {
            w: "4",
            h: "4",
          },
          label: {
            fontSize: "md",
          },
        },
        lg: {
          control: {
            w: "5",
            h: "5",
          },
          label: {
            fontSize: "lg",
          },
        },
        sm: {
          control: {
            width: "3",
            height: "3",
          },
          label: {
            fontSize: "sm",
          },
        },
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue",
      },
    },
    Select: {
      parts: ["field", "icon"],
      baseStyle: {
        field: {
          width: "100%",
          minWidth: 0,
          outline: 0,
          position: "relative",
          appearance: "none",
          transitionProperty: "common",
          transitionDuration: "normal",
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
          paddingBottom: "1px",
          lineHeight: "normal",
          bg: "var(--select-bg)",
          "--select-bg": "colors.white",
          _dark: {
            "--select-bg": "colors.gray.700",
          },
          "> option, > optgroup": {
            bg: "var(--select-bg)",
          },
        },
        icon: {
          width: "6",
          height: "100%",
          insetEnd: "2",
          position: "relative",
          color: "currentColor",
          fontSize: "xl",
          _disabled: {
            opacity: 0.5,
          },
        },
      },
      sizes: {
        lg: {
          field: {
            fontSize: "lg",
            px: "4",
            h: "12",
            borderRadius: "md",
            paddingInlineEnd: "8",
          },
          addon: {
            fontSize: "lg",
            px: "4",
            h: "12",
            borderRadius: "md",
          },
        },
        md: {
          field: {
            fontSize: "md",
            px: "4",
            h: "10",
            borderRadius: "md",
            paddingInlineEnd: "8",
          },
          addon: {
            fontSize: "md",
            px: "4",
            h: "10",
            borderRadius: "md",
          },
        },
        sm: {
          field: {
            fontSize: "sm",
            px: "3",
            h: "8",
            borderRadius: "sm",
            paddingInlineEnd: "8",
          },
          addon: {
            fontSize: "sm",
            px: "3",
            h: "8",
            borderRadius: "sm",
          },
        },
        xs: {
          field: {
            fontSize: "xs",
            px: "2",
            h: "6",
            borderRadius: "sm",
            paddingInlineEnd: "8",
          },
          addon: {
            fontSize: "xs",
            px: "2",
            h: "6",
            borderRadius: "sm",
          },
          icon: {
            insetEnd: "1",
          },
        },
      },
      variants: {
        unstyled: {
          field: {
            bg: "transparent",
            px: "0",
            height: "auto",
          },
          addon: {
            bg: "transparent",
            px: "0",
            height: "auto",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Skeleton: {
      baseStyle: {
        "--skeleton-start-color": "colors.gray.100",
        "--skeleton-end-color": "colors.gray.400",
        _dark: {
          "--skeleton-start-color": "colors.gray.800",
          "--skeleton-end-color": "colors.gray.600",
        },
        background: "var(--skeleton-start-color)",
        borderColor: "var(--skeleton-end-color)",
        opacity: 0.7,
        borderRadius: "sm",
      },
    },
    SkipLink: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "semibold",
        _focusVisible: {
          boxShadow: "outline",
          padding: "4",
          position: "fixed",
          top: "6",
          insetStart: "6",
          "--skip-link-bg": "colors.white",
          _dark: {
            "--skip-link-bg": "colors.gray.700",
          },
          bg: "var(--skip-link-bg)",
        },
      },
    },
    Slider: {
      parts: ["container", "track", "thumb", "filledTrack", "mark"],
      sizes: {
        lg: {
          container: {
            "--slider-thumb-size": "sizes.4",
            "--slider-track-size": "sizes.1",
          },
        },
        md: {
          container: {
            "--slider-thumb-size": "sizes.3.5",
            "--slider-track-size": "sizes.1",
          },
        },
        sm: {
          container: {
            "--slider-thumb-size": "sizes.2.5",
            "--slider-track-size": "sizes.0.5",
          },
        },
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue",
      },
    },
    Spinner: {
      baseStyle: {
        width: ["var(--spinner-size)"],
        height: ["var(--spinner-size)"],
      },
      sizes: {
        xs: {
          "--spinner-size": "sizes.3",
        },
        sm: {
          "--spinner-size": "sizes.4",
        },
        md: {
          "--spinner-size": "sizes.6",
        },
        lg: {
          "--spinner-size": "sizes.8",
        },
        xl: {
          "--spinner-size": "sizes.12",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    Stat: {
      parts: ["container", "label", "helpText", "number", "icon"],
      baseStyle: {
        container: {},
        label: {
          fontWeight: "medium",
        },
        helpText: {
          opacity: 0.8,
          marginBottom: "2",
        },
        number: {
          verticalAlign: "baseline",
          fontWeight: "semibold",
        },
        icon: {
          marginEnd: 1,
          w: "3.5",
          h: "3.5",
          verticalAlign: "middle",
        },
      },
      sizes: {
        md: {
          label: {
            fontSize: "sm",
          },
          helpText: {
            fontSize: "sm",
          },
          number: {
            fontSize: "2xl",
          },
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    Switch: {
      parts: ["container", "track", "thumb"],
      sizes: {
        sm: {
          container: {
            "--switch-track-width": "1.375rem",
            "--switch-track-height": "sizes.3",
          },
        },
        md: {
          container: {
            "--switch-track-width": "1.875rem",
            "--switch-track-height": "sizes.4",
          },
        },
        lg: {
          container: {
            "--switch-track-width": "2.875rem",
            "--switch-track-height": "sizes.6",
          },
        },
      },
      defaultProps: {
        size: "md",
        colorScheme: "blue",
      },
    },
    Table: {
      parts: ["table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"],
      baseStyle: {
        table: {
          fontVariantNumeric: "lining-nums tabular-nums",
          borderCollapse: "collapse",
          width: "full",
        },
        th: {
          fontFamily: "heading",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "wider",
          textAlign: "start",
        },
        td: {
          textAlign: "start",
        },
        caption: {
          mt: 4,
          fontFamily: "heading",
          textAlign: "center",
          fontWeight: "medium",
        },
      },
      variants: {
        unstyled: {},
      },
      sizes: {
        sm: {
          th: {
            px: "4",
            py: "1",
            lineHeight: "4",
            fontSize: "xs",
          },
          td: {
            px: "4",
            py: "2",
            fontSize: "sm",
            lineHeight: "4",
          },
          caption: {
            px: "4",
            py: "2",
            fontSize: "xs",
          },
        },
        md: {
          th: {
            px: "6",
            py: "3",
            lineHeight: "4",
            fontSize: "xs",
          },
          td: {
            px: "6",
            py: "4",
            lineHeight: "5",
          },
          caption: {
            px: "6",
            py: "2",
            fontSize: "sm",
          },
        },
        lg: {
          th: {
            px: "8",
            py: "4",
            lineHeight: "5",
            fontSize: "sm",
          },
          td: {
            px: "8",
            py: "5",
            lineHeight: "6",
          },
          caption: {
            px: "6",
            py: "2",
            fontSize: "md",
          },
        },
      },
      defaultProps: {
        variant: "simple",
        size: "md",
        colorScheme: "gray",
      },
    },
    Tabs: {
      parts: ["root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"],
      sizes: {
        sm: {
          tab: {
            py: 1,
            px: 4,
            fontSize: "sm",
          },
        },
        md: {
          tab: {
            fontSize: "md",
            py: 2,
            px: 4,
          },
        },
        lg: {
          tab: {
            fontSize: "lg",
            py: 3,
            px: 4,
          },
        },
      },
      variants: {
        unstyled: {},
      },
      defaultProps: {
        size: "md",
        variant: "line",
        colorScheme: "blue",
      },
    },
    Tag: {
      parts: ["container", "label", "closeButton"],
      variants: {},
      baseStyle: {
        container: {
          fontWeight: "medium",
          lineHeight: 1.2,
          outline: 0,
          borderRadius: "md",
          _focusVisible: {
            boxShadow: "outline",
          },
        },
        label: {
          lineHeight: 1.2,
          overflow: "visible",
        },
        closeButton: {
          fontSize: "lg",
          w: "5",
          h: "5",
          transitionProperty: "common",
          transitionDuration: "normal",
          borderRadius: "full",
          marginStart: "1.5",
          marginEnd: "-1",
          opacity: 0.5,
          _disabled: {
            opacity: 0.4,
          },
          _focusVisible: {
            boxShadow: "outline",
            bg: "rgba(0, 0, 0, 0.14)",
          },
          _hover: {
            opacity: 0.8,
          },
          _active: {
            opacity: 1,
          },
        },
      },
      sizes: {
        sm: {
          container: {
            minH: "5",
            minW: "5",
            fontSize: "xs",
            px: "2",
          },
          closeButton: {
            marginEnd: "-2px",
            marginStart: "0.35rem",
          },
        },
        md: {
          container: {
            minH: "6",
            minW: "6",
            fontSize: "sm",
            px: "2",
          },
        },
        lg: {
          container: {
            minH: "8",
            minW: "8",
            fontSize: "md",
            px: "3",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "subtle",
        colorScheme: "gray",
      },
    },
    Textarea: {
      baseStyle: {
        width: "100%",
        minWidth: 0,
        outline: 0,
        position: "relative",
        appearance: "none",
        transitionProperty: "common",
        transitionDuration: "normal",
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
        paddingY: "2",
        minHeight: "20",
        lineHeight: "short",
        verticalAlign: "top",
      },
      sizes: {
        xs: {
          fontSize: "xs",
          px: "2",
          h: "6",
          borderRadius: "sm",
        },
        sm: {
          fontSize: "sm",
          px: "3",
          h: "8",
          borderRadius: "sm",
        },
        md: {
          fontSize: "md",
          px: "4",
          h: "10",
          borderRadius: "md",
        },
        lg: {
          fontSize: "lg",
          px: "4",
          h: "12",
          borderRadius: "md",
        },
      },
      variants: {
        unstyled: {
          bg: "transparent",
          px: "0",
          height: "auto",
        },
      },
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "var(--tooltip-bg)",
        color: "var(--tooltip-fg)",
        "--tooltip-bg": "colors.gray.700",
        "--tooltip-fg": "colors.whiteAlpha.900",
        _dark: {
          "--tooltip-bg": "colors.gray.300",
          "--tooltip-fg": "colors.gray.900",
        },
        "--popper-arrow-bg": "var(--tooltip-bg)",
        px: "2",
        py: "0.5",
        borderRadius: "sm",
        fontWeight: "medium",
        fontSize: "sm",
        boxShadow: "md",
        maxW: "xs",
        zIndex: "tooltip",
      },
    },
    Card: {
      parts: ["container", "header", "body", "footer"],
      baseStyle: {
        container: {
          "--card-bg": "chakra-body-bg",
          backgroundColor: "var(--card-bg)",
          color: "chakra-body-text",
        },
        body: {
          padding: "var(--card-padding)",
          flex: "1 1 0%",
        },
        header: {
          padding: "var(--card-padding)",
        },
        footer: {
          padding: "var(--card-padding)",
        },
      },
      variants: {
        elevated: {
          container: {
            boxShadow: "base",
            _dark: {
              "--card-bg": "colors.gray.700",
            },
          },
        },
        outline: {
          container: {
            borderWidth: "1px",
            borderColor: "chakra-border-color",
          },
        },
        filled: {
          container: {
            "--card-bg": "colors.chakra-subtle-bg",
          },
        },
        unstyled: {
          body: {
            padding: 0,
          },
          header: {
            padding: 0,
          },
          footer: {
            padding: 0,
          },
        },
      },
      sizes: {
        sm: {
          container: {
            borderRadius: "base",
            "--card-padding": "space.3",
          },
        },
        md: {
          container: {
            borderRadius: "md",
            "--card-padding": "space.5",
          },
        },
        lg: {
          container: {
            borderRadius: "xl",
            "--card-padding": "space.7",
          },
        },
      },
      defaultProps: {
        variant: "elevated",
        size: "md",
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": {
        color: "chakra-placeholder-color",
      },
      "*, *::before, &::after": {
        borderColor: "chakra-border-color",
        wordWrap: "break-word",
      },
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  __cssVars: {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0",
    "--chakra-colors-transparent": "transparent",
    "--chakra-colors-current": "currentColor",
    "--chakra-colors-black": "#000000",
    "--chakra-colors-white": "#FFFFFF",
    "--chakra-colors-whiteAlpha-50": "rgba(255, 255, 255, 0.04)",
    "--chakra-colors-whiteAlpha-100": "rgba(255, 255, 255, 0.06)",
    "--chakra-colors-whiteAlpha-200": "rgba(255, 255, 255, 0.08)",
    "--chakra-colors-whiteAlpha-300": "rgba(255, 255, 255, 0.16)",
    "--chakra-colors-whiteAlpha-400": "rgba(255, 255, 255, 0.24)",
    "--chakra-colors-whiteAlpha-500": "rgba(255, 255, 255, 0.36)",
    "--chakra-colors-whiteAlpha-600": "rgba(255, 255, 255, 0.48)",
    "--chakra-colors-whiteAlpha-700": "rgba(255, 255, 255, 0.64)",
    "--chakra-colors-whiteAlpha-800": "rgba(255, 255, 255, 0.80)",
    "--chakra-colors-whiteAlpha-900": "rgba(255, 255, 255, 0.92)",
    "--chakra-colors-blackAlpha-50": "rgba(0, 0, 0, 0.04)",
    "--chakra-colors-blackAlpha-100": "rgba(0, 0, 0, 0.06)",
    "--chakra-colors-blackAlpha-200": "rgba(0, 0, 0, 0.08)",
    "--chakra-colors-blackAlpha-300": "rgba(0, 0, 0, 0.16)",
    "--chakra-colors-blackAlpha-400": "rgba(0, 0, 0, 0.24)",
    "--chakra-colors-blackAlpha-500": "rgba(0, 0, 0, 0.36)",
    "--chakra-colors-blackAlpha-600": "rgba(0, 0, 0, 0.48)",
    "--chakra-colors-blackAlpha-700": "rgba(0, 0, 0, 0.64)",
    "--chakra-colors-blackAlpha-800": "rgba(0, 0, 0, 0.80)",
    "--chakra-colors-blackAlpha-900": "rgba(0, 0, 0, 0.92)",
    "--chakra-colors-gray-50": "#F7FAFC",
    "--chakra-colors-gray-100": "#EDF2F7",
    "--chakra-colors-gray-200": "#E2E8F0",
    "--chakra-colors-gray-300": "#CBD5E0",
    "--chakra-colors-gray-400": "#A0AEC0",
    "--chakra-colors-gray-500": "#718096",
    "--chakra-colors-gray-600": "#4A5568",
    "--chakra-colors-gray-700": "#2D3748",
    "--chakra-colors-gray-800": "#1A202C",
    "--chakra-colors-gray-900": "#171923",
    "--chakra-colors-red-50": "#FFF5F5",
    "--chakra-colors-red-100": "#FED7D7",
    "--chakra-colors-red-200": "#FEB2B2",
    "--chakra-colors-red-300": "#FC8181",
    "--chakra-colors-red-400": "#F56565",
    "--chakra-colors-red-500": "#E53E3E",
    "--chakra-colors-red-600": "#C53030",
    "--chakra-colors-red-700": "#9B2C2C",
    "--chakra-colors-red-800": "#822727",
    "--chakra-colors-red-900": "#63171B",
    "--chakra-colors-orange-50": "#FFFAF0",
    "--chakra-colors-orange-100": "#FEEBC8",
    "--chakra-colors-orange-200": "#FBD38D",
    "--chakra-colors-orange-300": "#F6AD55",
    "--chakra-colors-orange-400": "#ED8936",
    "--chakra-colors-orange-500": "#DD6B20",
    "--chakra-colors-orange-600": "#C05621",
    "--chakra-colors-orange-700": "#9C4221",
    "--chakra-colors-orange-800": "#7B341E",
    "--chakra-colors-orange-900": "#652B19",
    "--chakra-colors-yellow-50": "#FFFFF0",
    "--chakra-colors-yellow-100": "#FEFCBF",
    "--chakra-colors-yellow-200": "#FAF089",
    "--chakra-colors-yellow-300": "#F6E05E",
    "--chakra-colors-yellow-400": "#ECC94B",
    "--chakra-colors-yellow-500": "#D69E2E",
    "--chakra-colors-yellow-600": "#B7791F",
    "--chakra-colors-yellow-700": "#975A16",
    "--chakra-colors-yellow-800": "#744210",
    "--chakra-colors-yellow-900": "#5F370E",
    "--chakra-colors-green-50": "#F0FFF4",
    "--chakra-colors-green-100": "#C6F6D5",
    "--chakra-colors-green-200": "#9AE6B4",
    "--chakra-colors-green-300": "#68D391",
    "--chakra-colors-green-400": "#48BB78",
    "--chakra-colors-green-500": "#38A169",
    "--chakra-colors-green-600": "#2F855A",
    "--chakra-colors-green-700": "#276749",
    "--chakra-colors-green-800": "#22543D",
    "--chakra-colors-green-900": "#1C4532",
    "--chakra-colors-teal-50": "#E6FFFA",
    "--chakra-colors-teal-100": "#B2F5EA",
    "--chakra-colors-teal-200": "#81E6D9",
    "--chakra-colors-teal-300": "#4FD1C5",
    "--chakra-colors-teal-400": "#38B2AC",
    "--chakra-colors-teal-500": "#319795",
    "--chakra-colors-teal-600": "#2C7A7B",
    "--chakra-colors-teal-700": "#285E61",
    "--chakra-colors-teal-800": "#234E52",
    "--chakra-colors-teal-900": "#1D4044",
    "--chakra-colors-blue-50": "#ebf8ff",
    "--chakra-colors-blue-100": "#bee3f8",
    "--chakra-colors-blue-200": "#90cdf4",
    "--chakra-colors-blue-300": "#63b3ed",
    "--chakra-colors-blue-400": "#4299e1",
    "--chakra-colors-blue-500": "#3182ce",
    "--chakra-colors-blue-600": "#2b6cb0",
    "--chakra-colors-blue-700": "#2c5282",
    "--chakra-colors-blue-800": "#2a4365",
    "--chakra-colors-blue-900": "#1A365D",
    "--chakra-colors-cyan-50": "#EDFDFD",
    "--chakra-colors-cyan-100": "#C4F1F9",
    "--chakra-colors-cyan-200": "#9DECF9",
    "--chakra-colors-cyan-300": "#76E4F7",
    "--chakra-colors-cyan-400": "#0BC5EA",
    "--chakra-colors-cyan-500": "#00B5D8",
    "--chakra-colors-cyan-600": "#00A3C4",
    "--chakra-colors-cyan-700": "#0987A0",
    "--chakra-colors-cyan-800": "#086F83",
    "--chakra-colors-cyan-900": "#065666",
    "--chakra-colors-purple-50": "#FAF5FF",
    "--chakra-colors-purple-100": "#E9D8FD",
    "--chakra-colors-purple-200": "#D6BCFA",
    "--chakra-colors-purple-300": "#B794F4",
    "--chakra-colors-purple-400": "#9F7AEA",
    "--chakra-colors-purple-500": "#805AD5",
    "--chakra-colors-purple-600": "#6B46C1",
    "--chakra-colors-purple-700": "#553C9A",
    "--chakra-colors-purple-800": "#44337A",
    "--chakra-colors-purple-900": "#322659",
    "--chakra-colors-pink-50": "#FFF5F7",
    "--chakra-colors-pink-100": "#FED7E2",
    "--chakra-colors-pink-200": "#FBB6CE",
    "--chakra-colors-pink-300": "#F687B3",
    "--chakra-colors-pink-400": "#ED64A6",
    "--chakra-colors-pink-500": "#D53F8C",
    "--chakra-colors-pink-600": "#B83280",
    "--chakra-colors-pink-700": "#97266D",
    "--chakra-colors-pink-800": "#702459",
    "--chakra-colors-pink-900": "#521B41",
    "--chakra-colors-linkedin-50": "#E8F4F9",
    "--chakra-colors-linkedin-100": "#CFEDFB",
    "--chakra-colors-linkedin-200": "#9BDAF3",
    "--chakra-colors-linkedin-300": "#68C7EC",
    "--chakra-colors-linkedin-400": "#34B3E4",
    "--chakra-colors-linkedin-500": "#00A0DC",
    "--chakra-colors-linkedin-600": "#008CC9",
    "--chakra-colors-linkedin-700": "#0077B5",
    "--chakra-colors-linkedin-800": "#005E93",
    "--chakra-colors-linkedin-900": "#004471",
    "--chakra-colors-facebook-50": "#E8F4F9",
    "--chakra-colors-facebook-100": "#D9DEE9",
    "--chakra-colors-facebook-200": "#B7C2DA",
    "--chakra-colors-facebook-300": "#6482C0",
    "--chakra-colors-facebook-400": "#4267B2",
    "--chakra-colors-facebook-500": "#385898",
    "--chakra-colors-facebook-600": "#314E89",
    "--chakra-colors-facebook-700": "#29487D",
    "--chakra-colors-facebook-800": "#223B67",
    "--chakra-colors-facebook-900": "#1E355B",
    "--chakra-colors-messenger-50": "#D0E6FF",
    "--chakra-colors-messenger-100": "#B9DAFF",
    "--chakra-colors-messenger-200": "#A2CDFF",
    "--chakra-colors-messenger-300": "#7AB8FF",
    "--chakra-colors-messenger-400": "#2E90FF",
    "--chakra-colors-messenger-500": "#0078FF",
    "--chakra-colors-messenger-600": "#0063D1",
    "--chakra-colors-messenger-700": "#0052AC",
    "--chakra-colors-messenger-800": "#003C7E",
    "--chakra-colors-messenger-900": "#002C5C",
    "--chakra-colors-whatsapp-50": "#dffeec",
    "--chakra-colors-whatsapp-100": "#b9f5d0",
    "--chakra-colors-whatsapp-200": "#90edb3",
    "--chakra-colors-whatsapp-300": "#65e495",
    "--chakra-colors-whatsapp-400": "#3cdd78",
    "--chakra-colors-whatsapp-500": "#22c35e",
    "--chakra-colors-whatsapp-600": "#179848",
    "--chakra-colors-whatsapp-700": "#0c6c33",
    "--chakra-colors-whatsapp-800": "#01421c",
    "--chakra-colors-whatsapp-900": "#001803",
    "--chakra-colors-twitter-50": "#E5F4FD",
    "--chakra-colors-twitter-100": "#C8E9FB",
    "--chakra-colors-twitter-200": "#A8DCFA",
    "--chakra-colors-twitter-300": "#83CDF7",
    "--chakra-colors-twitter-400": "#57BBF5",
    "--chakra-colors-twitter-500": "#1DA1F2",
    "--chakra-colors-twitter-600": "#1A94DA",
    "--chakra-colors-twitter-700": "#1681BF",
    "--chakra-colors-twitter-800": "#136B9E",
    "--chakra-colors-twitter-900": "#0D4D71",
    "--chakra-colors-telegram-50": "#E3F2F9",
    "--chakra-colors-telegram-100": "#C5E4F3",
    "--chakra-colors-telegram-200": "#A2D4EC",
    "--chakra-colors-telegram-300": "#7AC1E4",
    "--chakra-colors-telegram-400": "#47A9DA",
    "--chakra-colors-telegram-500": "#0088CC",
    "--chakra-colors-telegram-600": "#007AB8",
    "--chakra-colors-telegram-700": "#006BA1",
    "--chakra-colors-telegram-800": "#005885",
    "--chakra-colors-telegram-900": "#003F5E",
    "--chakra-colors-brand-700": "#2a69ac",
    "--chakra-colors-brand-800": "#153e75",
    "--chakra-colors-brand-900": "#1a365d",
    "--chakra-borders-none": 0,
    "--chakra-borders-1px": "1px solid",
    "--chakra-borders-2px": "2px solid",
    "--chakra-borders-4px": "4px solid",
    "--chakra-borders-8px": "8px solid",
    "--chakra-fonts-heading":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    "--chakra-fonts-body":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    "--chakra-fonts-mono":
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    "--chakra-fontSizes-3xs": "0.45rem",
    "--chakra-fontSizes-2xs": "0.625rem",
    "--chakra-fontSizes-xs": "0.75rem",
    "--chakra-fontSizes-sm": "0.875rem",
    "--chakra-fontSizes-md": "1rem",
    "--chakra-fontSizes-lg": "1.125rem",
    "--chakra-fontSizes-xl": "1.25rem",
    "--chakra-fontSizes-2xl": "1.5rem",
    "--chakra-fontSizes-3xl": "1.875rem",
    "--chakra-fontSizes-4xl": "2.25rem",
    "--chakra-fontSizes-5xl": "3rem",
    "--chakra-fontSizes-6xl": "3.75rem",
    "--chakra-fontSizes-7xl": "4.5rem",
    "--chakra-fontSizes-8xl": "6rem",
    "--chakra-fontSizes-9xl": "8rem",
    "--chakra-fontWeights-hairline": 100,
    "--chakra-fontWeights-thin": 200,
    "--chakra-fontWeights-light": 300,
    "--chakra-fontWeights-normal": 400,
    "--chakra-fontWeights-medium": 500,
    "--chakra-fontWeights-semibold": 600,
    "--chakra-fontWeights-bold": 700,
    "--chakra-fontWeights-extrabold": 800,
    "--chakra-fontWeights-black": 900,
    "--chakra-letterSpacings-tighter": "-0.05em",
    "--chakra-letterSpacings-tight": "-0.025em",
    "--chakra-letterSpacings-normal": "0",
    "--chakra-letterSpacings-wide": "0.025em",
    "--chakra-letterSpacings-wider": "0.05em",
    "--chakra-letterSpacings-widest": "0.1em",
    "--chakra-lineHeights-3": ".75rem",
    "--chakra-lineHeights-4": "1rem",
    "--chakra-lineHeights-5": "1.25rem",
    "--chakra-lineHeights-6": "1.5rem",
    "--chakra-lineHeights-7": "1.75rem",
    "--chakra-lineHeights-8": "2rem",
    "--chakra-lineHeights-9": "2.25rem",
    "--chakra-lineHeights-10": "2.5rem",
    "--chakra-lineHeights-normal": "normal",
    "--chakra-lineHeights-none": 1,
    "--chakra-lineHeights-shorter": 1.25,
    "--chakra-lineHeights-short": 1.375,
    "--chakra-lineHeights-base": 1.5,
    "--chakra-lineHeights-tall": 1.625,
    "--chakra-lineHeights-taller": "2",
    "--chakra-radii-none": "0",
    "--chakra-radii-sm": "0.125rem",
    "--chakra-radii-base": "0.25rem",
    "--chakra-radii-md": "0.375rem",
    "--chakra-radii-lg": "0.5rem",
    "--chakra-radii-xl": "0.75rem",
    "--chakra-radii-2xl": "1rem",
    "--chakra-radii-3xl": "1.5rem",
    "--chakra-radii-full": "9999px",
    "--chakra-space-1": "0.25rem",
    "--chakra-space-2": "0.5rem",
    "--chakra-space-3": "0.75rem",
    "--chakra-space-4": "1rem",
    "--chakra-space-5": "1.25rem",
    "--chakra-space-6": "1.5rem",
    "--chakra-space-7": "1.75rem",
    "--chakra-space-8": "2rem",
    "--chakra-space-9": "2.25rem",
    "--chakra-space-10": "2.5rem",
    "--chakra-space-12": "3rem",
    "--chakra-space-14": "3.5rem",
    "--chakra-space-16": "4rem",
    "--chakra-space-20": "5rem",
    "--chakra-space-24": "6rem",
    "--chakra-space-28": "7rem",
    "--chakra-space-32": "8rem",
    "--chakra-space-36": "9rem",
    "--chakra-space-40": "10rem",
    "--chakra-space-44": "11rem",
    "--chakra-space-48": "12rem",
    "--chakra-space-52": "13rem",
    "--chakra-space-56": "14rem",
    "--chakra-space-60": "15rem",
    "--chakra-space-64": "16rem",
    "--chakra-space-72": "18rem",
    "--chakra-space-80": "20rem",
    "--chakra-space-96": "24rem",
    "--chakra-space-px": "1px",
    "--chakra-space-0-5": "0.125rem",
    "--chakra-space-1-5": "0.375rem",
    "--chakra-space-2-5": "0.625rem",
    "--chakra-space-3-5": "0.875rem",
    "--chakra-shadows-xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
    "--chakra-shadows-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "--chakra-shadows-base":
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "--chakra-shadows-md":
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "--chakra-shadows-lg":
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "--chakra-shadows-xl":
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "--chakra-shadows-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "--chakra-shadows-outline": "0 0 0 3px rgba(66, 153, 225, 0.6)",
    "--chakra-shadows-inner": "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    "--chakra-shadows-none": "none",
    "--chakra-shadows-dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
    "--chakra-sizes-1": "0.25rem",
    "--chakra-sizes-2": "0.5rem",
    "--chakra-sizes-3": "0.75rem",
    "--chakra-sizes-4": "1rem",
    "--chakra-sizes-5": "1.25rem",
    "--chakra-sizes-6": "1.5rem",
    "--chakra-sizes-7": "1.75rem",
    "--chakra-sizes-8": "2rem",
    "--chakra-sizes-9": "2.25rem",
    "--chakra-sizes-10": "2.5rem",
    "--chakra-sizes-12": "3rem",
    "--chakra-sizes-14": "3.5rem",
    "--chakra-sizes-16": "4rem",
    "--chakra-sizes-20": "5rem",
    "--chakra-sizes-24": "6rem",
    "--chakra-sizes-28": "7rem",
    "--chakra-sizes-32": "8rem",
    "--chakra-sizes-36": "9rem",
    "--chakra-sizes-40": "10rem",
    "--chakra-sizes-44": "11rem",
    "--chakra-sizes-48": "12rem",
    "--chakra-sizes-52": "13rem",
    "--chakra-sizes-56": "14rem",
    "--chakra-sizes-60": "15rem",
    "--chakra-sizes-64": "16rem",
    "--chakra-sizes-72": "18rem",
    "--chakra-sizes-80": "20rem",
    "--chakra-sizes-96": "24rem",
    "--chakra-sizes-px": "1px",
    "--chakra-sizes-0-5": "0.125rem",
    "--chakra-sizes-1-5": "0.375rem",
    "--chakra-sizes-2-5": "0.625rem",
    "--chakra-sizes-3-5": "0.875rem",
    "--chakra-sizes-max": "max-content",
    "--chakra-sizes-min": "min-content",
    "--chakra-sizes-full": "100%",
    "--chakra-sizes-3xs": "14rem",
    "--chakra-sizes-2xs": "16rem",
    "--chakra-sizes-xs": "20rem",
    "--chakra-sizes-sm": "24rem",
    "--chakra-sizes-md": "28rem",
    "--chakra-sizes-lg": "32rem",
    "--chakra-sizes-xl": "36rem",
    "--chakra-sizes-2xl": "42rem",
    "--chakra-sizes-3xl": "48rem",
    "--chakra-sizes-4xl": "56rem",
    "--chakra-sizes-5xl": "64rem",
    "--chakra-sizes-6xl": "72rem",
    "--chakra-sizes-7xl": "80rem",
    "--chakra-sizes-8xl": "90rem",
    "--chakra-sizes-prose": "60ch",
    "--chakra-sizes-container-sm": "640px",
    "--chakra-sizes-container-md": "768px",
    "--chakra-sizes-container-lg": "1024px",
    "--chakra-sizes-container-xl": "1280px",
    "--chakra-zIndices-hide": -1,
    "--chakra-zIndices-auto": "auto",
    "--chakra-zIndices-base": 0,
    "--chakra-zIndices-docked": 10,
    "--chakra-zIndices-dropdown": 1000,
    "--chakra-zIndices-sticky": 1100,
    "--chakra-zIndices-banner": 1200,
    "--chakra-zIndices-overlay": 1300,
    "--chakra-zIndices-modal": 1400,
    "--chakra-zIndices-popover": 1500,
    "--chakra-zIndices-skipLink": 1600,
    "--chakra-zIndices-toast": 1700,
    "--chakra-zIndices-tooltip": 1800,
    "--chakra-transition-property-common":
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    "--chakra-transition-property-colors":
      "background-color, border-color, color, fill, stroke",
    "--chakra-transition-property-dimensions": "width, height",
    "--chakra-transition-property-position": "left, right, top, bottom",
    "--chakra-transition-property-background":
      "background-color, background-image, background-position",
    "--chakra-transition-easing-ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "--chakra-transition-easing-ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "--chakra-transition-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "--chakra-transition-duration-ultra-fast": "50ms",
    "--chakra-transition-duration-faster": "100ms",
    "--chakra-transition-duration-fast": "150ms",
    "--chakra-transition-duration-normal": "200ms",
    "--chakra-transition-duration-slow": "300ms",
    "--chakra-transition-duration-slower": "400ms",
    "--chakra-transition-duration-ultra-slow": "500ms",
    "--chakra-blur-none": "10px",
    "--chakra-blur-sm": "4px",
    "--chakra-blur-base": "8px",
    "--chakra-blur-md": "12px",
    "--chakra-blur-lg": "16px",
    "--chakra-blur-xl": "24px",
    "--chakra-blur-2xl": "40px",
    "--chakra-blur-3xl": "64px",
    ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]":
      {
        "--chakra-colors-chakra-body-text": "var(--chakra-colors-gray-800)",
        "--chakra-colors-chakra-body-bg": "var(--chakra-colors-white)",
        "--chakra-colors-chakra-border-color": "var(--chakra-colors-gray-200)",
        "--chakra-colors-chakra-subtle-bg": "var(--chakra-colors-gray-100)",
        "--chakra-colors-chakra-placeholder-color":
          "var(--chakra-colors-gray-500)",
      },
    ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]":
      {
        "--chakra-colors-chakra-body-text":
          "var(--chakra-colors-whiteAlpha-900)",
        "--chakra-colors-chakra-body-bg": "var(--chakra-colors-gray-800)",
        "--chakra-colors-chakra-border-color":
          "var(--chakra-colors-whiteAlpha-300)",
        "--chakra-colors-chakra-subtle-bg": "var(--chakra-colors-gray-700)",
        "--chakra-colors-chakra-placeholder-color":
          "var(--chakra-colors-whiteAlpha-400)",
      },
  },
  __cssMap: {
    "colors.transparent": {
      value: "transparent",
      var: "--chakra-colors-transparent",
      varRef: "var(--chakra-colors-transparent)",
    },
    "colors.current": {
      value: "currentColor",
      var: "--chakra-colors-current",
      varRef: "var(--chakra-colors-current)",
    },
    "colors.black": {
      value: "#000000",
      var: "--chakra-colors-black",
      varRef: "var(--chakra-colors-black)",
    },
    "colors.white": {
      value: "#FFFFFF",
      var: "--chakra-colors-white",
      varRef: "var(--chakra-colors-white)",
    },
    "colors.whiteAlpha.50": {
      value: "rgba(255, 255, 255, 0.04)",
      var: "--chakra-colors-whiteAlpha-50",
      varRef: "var(--chakra-colors-whiteAlpha-50)",
    },
    "colors.whiteAlpha.100": {
      value: "rgba(255, 255, 255, 0.06)",
      var: "--chakra-colors-whiteAlpha-100",
      varRef: "var(--chakra-colors-whiteAlpha-100)",
    },
    "colors.whiteAlpha.200": {
      value: "rgba(255, 255, 255, 0.08)",
      var: "--chakra-colors-whiteAlpha-200",
      varRef: "var(--chakra-colors-whiteAlpha-200)",
    },
    "colors.whiteAlpha.300": {
      value: "rgba(255, 255, 255, 0.16)",
      var: "--chakra-colors-whiteAlpha-300",
      varRef: "var(--chakra-colors-whiteAlpha-300)",
    },
    "colors.whiteAlpha.400": {
      value: "rgba(255, 255, 255, 0.24)",
      var: "--chakra-colors-whiteAlpha-400",
      varRef: "var(--chakra-colors-whiteAlpha-400)",
    },
    "colors.whiteAlpha.500": {
      value: "rgba(255, 255, 255, 0.36)",
      var: "--chakra-colors-whiteAlpha-500",
      varRef: "var(--chakra-colors-whiteAlpha-500)",
    },
    "colors.whiteAlpha.600": {
      value: "rgba(255, 255, 255, 0.48)",
      var: "--chakra-colors-whiteAlpha-600",
      varRef: "var(--chakra-colors-whiteAlpha-600)",
    },
    "colors.whiteAlpha.700": {
      value: "rgba(255, 255, 255, 0.64)",
      var: "--chakra-colors-whiteAlpha-700",
      varRef: "var(--chakra-colors-whiteAlpha-700)",
    },
    "colors.whiteAlpha.800": {
      value: "rgba(255, 255, 255, 0.80)",
      var: "--chakra-colors-whiteAlpha-800",
      varRef: "var(--chakra-colors-whiteAlpha-800)",
    },
    "colors.whiteAlpha.900": {
      value: "rgba(255, 255, 255, 0.92)",
      var: "--chakra-colors-whiteAlpha-900",
      varRef: "var(--chakra-colors-whiteAlpha-900)",
    },
    "colors.blackAlpha.50": {
      value: "rgba(0, 0, 0, 0.04)",
      var: "--chakra-colors-blackAlpha-50",
      varRef: "var(--chakra-colors-blackAlpha-50)",
    },
    "colors.blackAlpha.100": {
      value: "rgba(0, 0, 0, 0.06)",
      var: "--chakra-colors-blackAlpha-100",
      varRef: "var(--chakra-colors-blackAlpha-100)",
    },
    "colors.blackAlpha.200": {
      value: "rgba(0, 0, 0, 0.08)",
      var: "--chakra-colors-blackAlpha-200",
      varRef: "var(--chakra-colors-blackAlpha-200)",
    },
    "colors.blackAlpha.300": {
      value: "rgba(0, 0, 0, 0.16)",
      var: "--chakra-colors-blackAlpha-300",
      varRef: "var(--chakra-colors-blackAlpha-300)",
    },
    "colors.blackAlpha.400": {
      value: "rgba(0, 0, 0, 0.24)",
      var: "--chakra-colors-blackAlpha-400",
      varRef: "var(--chakra-colors-blackAlpha-400)",
    },
    "colors.blackAlpha.500": {
      value: "rgba(0, 0, 0, 0.36)",
      var: "--chakra-colors-blackAlpha-500",
      varRef: "var(--chakra-colors-blackAlpha-500)",
    },
    "colors.blackAlpha.600": {
      value: "rgba(0, 0, 0, 0.48)",
      var: "--chakra-colors-blackAlpha-600",
      varRef: "var(--chakra-colors-blackAlpha-600)",
    },
    "colors.blackAlpha.700": {
      value: "rgba(0, 0, 0, 0.64)",
      var: "--chakra-colors-blackAlpha-700",
      varRef: "var(--chakra-colors-blackAlpha-700)",
    },
    "colors.blackAlpha.800": {
      value: "rgba(0, 0, 0, 0.80)",
      var: "--chakra-colors-blackAlpha-800",
      varRef: "var(--chakra-colors-blackAlpha-800)",
    },
    "colors.blackAlpha.900": {
      value: "rgba(0, 0, 0, 0.92)",
      var: "--chakra-colors-blackAlpha-900",
      varRef: "var(--chakra-colors-blackAlpha-900)",
    },
    "colors.gray.50": {
      value: "#F7FAFC",
      var: "--chakra-colors-gray-50",
      varRef: "var(--chakra-colors-gray-50)",
    },
    "colors.gray.100": {
      value: "#EDF2F7",
      var: "--chakra-colors-gray-100",
      varRef: "var(--chakra-colors-gray-100)",
    },
    "colors.gray.200": {
      value: "#E2E8F0",
      var: "--chakra-colors-gray-200",
      varRef: "var(--chakra-colors-gray-200)",
    },
    "colors.gray.300": {
      value: "#CBD5E0",
      var: "--chakra-colors-gray-300",
      varRef: "var(--chakra-colors-gray-300)",
    },
    "colors.gray.400": {
      value: "#A0AEC0",
      var: "--chakra-colors-gray-400",
      varRef: "var(--chakra-colors-gray-400)",
    },
    "colors.gray.500": {
      value: "#718096",
      var: "--chakra-colors-gray-500",
      varRef: "var(--chakra-colors-gray-500)",
    },
    "colors.gray.600": {
      value: "#4A5568",
      var: "--chakra-colors-gray-600",
      varRef: "var(--chakra-colors-gray-600)",
    },
    "colors.gray.700": {
      value: "#2D3748",
      var: "--chakra-colors-gray-700",
      varRef: "var(--chakra-colors-gray-700)",
    },
    "colors.gray.800": {
      value: "#1A202C",
      var: "--chakra-colors-gray-800",
      varRef: "var(--chakra-colors-gray-800)",
    },
    "colors.gray.900": {
      value: "#171923",
      var: "--chakra-colors-gray-900",
      varRef: "var(--chakra-colors-gray-900)",
    },
    "colors.red.50": {
      value: "#FFF5F5",
      var: "--chakra-colors-red-50",
      varRef: "var(--chakra-colors-red-50)",
    },
    "colors.red.100": {
      value: "#FED7D7",
      var: "--chakra-colors-red-100",
      varRef: "var(--chakra-colors-red-100)",
    },
    "colors.red.200": {
      value: "#FEB2B2",
      var: "--chakra-colors-red-200",
      varRef: "var(--chakra-colors-red-200)",
    },
    "colors.red.300": {
      value: "#FC8181",
      var: "--chakra-colors-red-300",
      varRef: "var(--chakra-colors-red-300)",
    },
    "colors.red.400": {
      value: "#F56565",
      var: "--chakra-colors-red-400",
      varRef: "var(--chakra-colors-red-400)",
    },
    "colors.red.500": {
      value: "#E53E3E",
      var: "--chakra-colors-red-500",
      varRef: "var(--chakra-colors-red-500)",
    },
    "colors.red.600": {
      value: "#C53030",
      var: "--chakra-colors-red-600",
      varRef: "var(--chakra-colors-red-600)",
    },
    "colors.red.700": {
      value: "#9B2C2C",
      var: "--chakra-colors-red-700",
      varRef: "var(--chakra-colors-red-700)",
    },
    "colors.red.800": {
      value: "#822727",
      var: "--chakra-colors-red-800",
      varRef: "var(--chakra-colors-red-800)",
    },
    "colors.red.900": {
      value: "#63171B",
      var: "--chakra-colors-red-900",
      varRef: "var(--chakra-colors-red-900)",
    },
    "colors.orange.50": {
      value: "#FFFAF0",
      var: "--chakra-colors-orange-50",
      varRef: "var(--chakra-colors-orange-50)",
    },
    "colors.orange.100": {
      value: "#FEEBC8",
      var: "--chakra-colors-orange-100",
      varRef: "var(--chakra-colors-orange-100)",
    },
    "colors.orange.200": {
      value: "#FBD38D",
      var: "--chakra-colors-orange-200",
      varRef: "var(--chakra-colors-orange-200)",
    },
    "colors.orange.300": {
      value: "#F6AD55",
      var: "--chakra-colors-orange-300",
      varRef: "var(--chakra-colors-orange-300)",
    },
    "colors.orange.400": {
      value: "#ED8936",
      var: "--chakra-colors-orange-400",
      varRef: "var(--chakra-colors-orange-400)",
    },
    "colors.orange.500": {
      value: "#DD6B20",
      var: "--chakra-colors-orange-500",
      varRef: "var(--chakra-colors-orange-500)",
    },
    "colors.orange.600": {
      value: "#C05621",
      var: "--chakra-colors-orange-600",
      varRef: "var(--chakra-colors-orange-600)",
    },
    "colors.orange.700": {
      value: "#9C4221",
      var: "--chakra-colors-orange-700",
      varRef: "var(--chakra-colors-orange-700)",
    },
    "colors.orange.800": {
      value: "#7B341E",
      var: "--chakra-colors-orange-800",
      varRef: "var(--chakra-colors-orange-800)",
    },
    "colors.orange.900": {
      value: "#652B19",
      var: "--chakra-colors-orange-900",
      varRef: "var(--chakra-colors-orange-900)",
    },
    "colors.yellow.50": {
      value: "#FFFFF0",
      var: "--chakra-colors-yellow-50",
      varRef: "var(--chakra-colors-yellow-50)",
    },
    "colors.yellow.100": {
      value: "#FEFCBF",
      var: "--chakra-colors-yellow-100",
      varRef: "var(--chakra-colors-yellow-100)",
    },
    "colors.yellow.200": {
      value: "#FAF089",
      var: "--chakra-colors-yellow-200",
      varRef: "var(--chakra-colors-yellow-200)",
    },
    "colors.yellow.300": {
      value: "#F6E05E",
      var: "--chakra-colors-yellow-300",
      varRef: "var(--chakra-colors-yellow-300)",
    },
    "colors.yellow.400": {
      value: "#ECC94B",
      var: "--chakra-colors-yellow-400",
      varRef: "var(--chakra-colors-yellow-400)",
    },
    "colors.yellow.500": {
      value: "#D69E2E",
      var: "--chakra-colors-yellow-500",
      varRef: "var(--chakra-colors-yellow-500)",
    },
    "colors.yellow.600": {
      value: "#B7791F",
      var: "--chakra-colors-yellow-600",
      varRef: "var(--chakra-colors-yellow-600)",
    },
    "colors.yellow.700": {
      value: "#975A16",
      var: "--chakra-colors-yellow-700",
      varRef: "var(--chakra-colors-yellow-700)",
    },
    "colors.yellow.800": {
      value: "#744210",
      var: "--chakra-colors-yellow-800",
      varRef: "var(--chakra-colors-yellow-800)",
    },
    "colors.yellow.900": {
      value: "#5F370E",
      var: "--chakra-colors-yellow-900",
      varRef: "var(--chakra-colors-yellow-900)",
    },
    "colors.green.50": {
      value: "#F0FFF4",
      var: "--chakra-colors-green-50",
      varRef: "var(--chakra-colors-green-50)",
    },
    "colors.green.100": {
      value: "#C6F6D5",
      var: "--chakra-colors-green-100",
      varRef: "var(--chakra-colors-green-100)",
    },
    "colors.green.200": {
      value: "#9AE6B4",
      var: "--chakra-colors-green-200",
      varRef: "var(--chakra-colors-green-200)",
    },
    "colors.green.300": {
      value: "#68D391",
      var: "--chakra-colors-green-300",
      varRef: "var(--chakra-colors-green-300)",
    },
    "colors.green.400": {
      value: "#48BB78",
      var: "--chakra-colors-green-400",
      varRef: "var(--chakra-colors-green-400)",
    },
    "colors.green.500": {
      value: "#38A169",
      var: "--chakra-colors-green-500",
      varRef: "var(--chakra-colors-green-500)",
    },
    "colors.green.600": {
      value: "#2F855A",
      var: "--chakra-colors-green-600",
      varRef: "var(--chakra-colors-green-600)",
    },
    "colors.green.700": {
      value: "#276749",
      var: "--chakra-colors-green-700",
      varRef: "var(--chakra-colors-green-700)",
    },
    "colors.green.800": {
      value: "#22543D",
      var: "--chakra-colors-green-800",
      varRef: "var(--chakra-colors-green-800)",
    },
    "colors.green.900": {
      value: "#1C4532",
      var: "--chakra-colors-green-900",
      varRef: "var(--chakra-colors-green-900)",
    },
    "colors.teal.50": {
      value: "#E6FFFA",
      var: "--chakra-colors-teal-50",
      varRef: "var(--chakra-colors-teal-50)",
    },
    "colors.teal.100": {
      value: "#B2F5EA",
      var: "--chakra-colors-teal-100",
      varRef: "var(--chakra-colors-teal-100)",
    },
    "colors.teal.200": {
      value: "#81E6D9",
      var: "--chakra-colors-teal-200",
      varRef: "var(--chakra-colors-teal-200)",
    },
    "colors.teal.300": {
      value: "#4FD1C5",
      var: "--chakra-colors-teal-300",
      varRef: "var(--chakra-colors-teal-300)",
    },
    "colors.teal.400": {
      value: "#38B2AC",
      var: "--chakra-colors-teal-400",
      varRef: "var(--chakra-colors-teal-400)",
    },
    "colors.teal.500": {
      value: "#319795",
      var: "--chakra-colors-teal-500",
      varRef: "var(--chakra-colors-teal-500)",
    },
    "colors.teal.600": {
      value: "#2C7A7B",
      var: "--chakra-colors-teal-600",
      varRef: "var(--chakra-colors-teal-600)",
    },
    "colors.teal.700": {
      value: "#285E61",
      var: "--chakra-colors-teal-700",
      varRef: "var(--chakra-colors-teal-700)",
    },
    "colors.teal.800": {
      value: "#234E52",
      var: "--chakra-colors-teal-800",
      varRef: "var(--chakra-colors-teal-800)",
    },
    "colors.teal.900": {
      value: "#1D4044",
      var: "--chakra-colors-teal-900",
      varRef: "var(--chakra-colors-teal-900)",
    },
    "colors.blue.50": {
      value: "#ebf8ff",
      var: "--chakra-colors-blue-50",
      varRef: "var(--chakra-colors-blue-50)",
    },
    "colors.blue.100": {
      value: "#bee3f8",
      var: "--chakra-colors-blue-100",
      varRef: "var(--chakra-colors-blue-100)",
    },
    "colors.blue.200": {
      value: "#90cdf4",
      var: "--chakra-colors-blue-200",
      varRef: "var(--chakra-colors-blue-200)",
    },
    "colors.blue.300": {
      value: "#63b3ed",
      var: "--chakra-colors-blue-300",
      varRef: "var(--chakra-colors-blue-300)",
    },
    "colors.blue.400": {
      value: "#4299e1",
      var: "--chakra-colors-blue-400",
      varRef: "var(--chakra-colors-blue-400)",
    },
    "colors.blue.500": {
      value: "#3182ce",
      var: "--chakra-colors-blue-500",
      varRef: "var(--chakra-colors-blue-500)",
    },
    "colors.blue.600": {
      value: "#2b6cb0",
      var: "--chakra-colors-blue-600",
      varRef: "var(--chakra-colors-blue-600)",
    },
    "colors.blue.700": {
      value: "#2c5282",
      var: "--chakra-colors-blue-700",
      varRef: "var(--chakra-colors-blue-700)",
    },
    "colors.blue.800": {
      value: "#2a4365",
      var: "--chakra-colors-blue-800",
      varRef: "var(--chakra-colors-blue-800)",
    },
    "colors.blue.900": {
      value: "#1A365D",
      var: "--chakra-colors-blue-900",
      varRef: "var(--chakra-colors-blue-900)",
    },
    "colors.cyan.50": {
      value: "#EDFDFD",
      var: "--chakra-colors-cyan-50",
      varRef: "var(--chakra-colors-cyan-50)",
    },
    "colors.cyan.100": {
      value: "#C4F1F9",
      var: "--chakra-colors-cyan-100",
      varRef: "var(--chakra-colors-cyan-100)",
    },
    "colors.cyan.200": {
      value: "#9DECF9",
      var: "--chakra-colors-cyan-200",
      varRef: "var(--chakra-colors-cyan-200)",
    },
    "colors.cyan.300": {
      value: "#76E4F7",
      var: "--chakra-colors-cyan-300",
      varRef: "var(--chakra-colors-cyan-300)",
    },
    "colors.cyan.400": {
      value: "#0BC5EA",
      var: "--chakra-colors-cyan-400",
      varRef: "var(--chakra-colors-cyan-400)",
    },
    "colors.cyan.500": {
      value: "#00B5D8",
      var: "--chakra-colors-cyan-500",
      varRef: "var(--chakra-colors-cyan-500)",
    },
    "colors.cyan.600": {
      value: "#00A3C4",
      var: "--chakra-colors-cyan-600",
      varRef: "var(--chakra-colors-cyan-600)",
    },
    "colors.cyan.700": {
      value: "#0987A0",
      var: "--chakra-colors-cyan-700",
      varRef: "var(--chakra-colors-cyan-700)",
    },
    "colors.cyan.800": {
      value: "#086F83",
      var: "--chakra-colors-cyan-800",
      varRef: "var(--chakra-colors-cyan-800)",
    },
    "colors.cyan.900": {
      value: "#065666",
      var: "--chakra-colors-cyan-900",
      varRef: "var(--chakra-colors-cyan-900)",
    },
    "colors.purple.50": {
      value: "#FAF5FF",
      var: "--chakra-colors-purple-50",
      varRef: "var(--chakra-colors-purple-50)",
    },
    "colors.purple.100": {
      value: "#E9D8FD",
      var: "--chakra-colors-purple-100",
      varRef: "var(--chakra-colors-purple-100)",
    },
    "colors.purple.200": {
      value: "#D6BCFA",
      var: "--chakra-colors-purple-200",
      varRef: "var(--chakra-colors-purple-200)",
    },
    "colors.purple.300": {
      value: "#B794F4",
      var: "--chakra-colors-purple-300",
      varRef: "var(--chakra-colors-purple-300)",
    },
    "colors.purple.400": {
      value: "#9F7AEA",
      var: "--chakra-colors-purple-400",
      varRef: "var(--chakra-colors-purple-400)",
    },
    "colors.purple.500": {
      value: "#805AD5",
      var: "--chakra-colors-purple-500",
      varRef: "var(--chakra-colors-purple-500)",
    },
    "colors.purple.600": {
      value: "#6B46C1",
      var: "--chakra-colors-purple-600",
      varRef: "var(--chakra-colors-purple-600)",
    },
    "colors.purple.700": {
      value: "#553C9A",
      var: "--chakra-colors-purple-700",
      varRef: "var(--chakra-colors-purple-700)",
    },
    "colors.purple.800": {
      value: "#44337A",
      var: "--chakra-colors-purple-800",
      varRef: "var(--chakra-colors-purple-800)",
    },
    "colors.purple.900": {
      value: "#322659",
      var: "--chakra-colors-purple-900",
      varRef: "var(--chakra-colors-purple-900)",
    },
    "colors.pink.50": {
      value: "#FFF5F7",
      var: "--chakra-colors-pink-50",
      varRef: "var(--chakra-colors-pink-50)",
    },
    "colors.pink.100": {
      value: "#FED7E2",
      var: "--chakra-colors-pink-100",
      varRef: "var(--chakra-colors-pink-100)",
    },
    "colors.pink.200": {
      value: "#FBB6CE",
      var: "--chakra-colors-pink-200",
      varRef: "var(--chakra-colors-pink-200)",
    },
    "colors.pink.300": {
      value: "#F687B3",
      var: "--chakra-colors-pink-300",
      varRef: "var(--chakra-colors-pink-300)",
    },
    "colors.pink.400": {
      value: "#ED64A6",
      var: "--chakra-colors-pink-400",
      varRef: "var(--chakra-colors-pink-400)",
    },
    "colors.pink.500": {
      value: "#D53F8C",
      var: "--chakra-colors-pink-500",
      varRef: "var(--chakra-colors-pink-500)",
    },
    "colors.pink.600": {
      value: "#B83280",
      var: "--chakra-colors-pink-600",
      varRef: "var(--chakra-colors-pink-600)",
    },
    "colors.pink.700": {
      value: "#97266D",
      var: "--chakra-colors-pink-700",
      varRef: "var(--chakra-colors-pink-700)",
    },
    "colors.pink.800": {
      value: "#702459",
      var: "--chakra-colors-pink-800",
      varRef: "var(--chakra-colors-pink-800)",
    },
    "colors.pink.900": {
      value: "#521B41",
      var: "--chakra-colors-pink-900",
      varRef: "var(--chakra-colors-pink-900)",
    },
    "colors.linkedin.50": {
      value: "#E8F4F9",
      var: "--chakra-colors-linkedin-50",
      varRef: "var(--chakra-colors-linkedin-50)",
    },
    "colors.linkedin.100": {
      value: "#CFEDFB",
      var: "--chakra-colors-linkedin-100",
      varRef: "var(--chakra-colors-linkedin-100)",
    },
    "colors.linkedin.200": {
      value: "#9BDAF3",
      var: "--chakra-colors-linkedin-200",
      varRef: "var(--chakra-colors-linkedin-200)",
    },
    "colors.linkedin.300": {
      value: "#68C7EC",
      var: "--chakra-colors-linkedin-300",
      varRef: "var(--chakra-colors-linkedin-300)",
    },
    "colors.linkedin.400": {
      value: "#34B3E4",
      var: "--chakra-colors-linkedin-400",
      varRef: "var(--chakra-colors-linkedin-400)",
    },
    "colors.linkedin.500": {
      value: "#00A0DC",
      var: "--chakra-colors-linkedin-500",
      varRef: "var(--chakra-colors-linkedin-500)",
    },
    "colors.linkedin.600": {
      value: "#008CC9",
      var: "--chakra-colors-linkedin-600",
      varRef: "var(--chakra-colors-linkedin-600)",
    },
    "colors.linkedin.700": {
      value: "#0077B5",
      var: "--chakra-colors-linkedin-700",
      varRef: "var(--chakra-colors-linkedin-700)",
    },
    "colors.linkedin.800": {
      value: "#005E93",
      var: "--chakra-colors-linkedin-800",
      varRef: "var(--chakra-colors-linkedin-800)",
    },
    "colors.linkedin.900": {
      value: "#004471",
      var: "--chakra-colors-linkedin-900",
      varRef: "var(--chakra-colors-linkedin-900)",
    },
    "colors.facebook.50": {
      value: "#E8F4F9",
      var: "--chakra-colors-facebook-50",
      varRef: "var(--chakra-colors-facebook-50)",
    },
    "colors.facebook.100": {
      value: "#D9DEE9",
      var: "--chakra-colors-facebook-100",
      varRef: "var(--chakra-colors-facebook-100)",
    },
    "colors.facebook.200": {
      value: "#B7C2DA",
      var: "--chakra-colors-facebook-200",
      varRef: "var(--chakra-colors-facebook-200)",
    },
    "colors.facebook.300": {
      value: "#6482C0",
      var: "--chakra-colors-facebook-300",
      varRef: "var(--chakra-colors-facebook-300)",
    },
    "colors.facebook.400": {
      value: "#4267B2",
      var: "--chakra-colors-facebook-400",
      varRef: "var(--chakra-colors-facebook-400)",
    },
    "colors.facebook.500": {
      value: "#385898",
      var: "--chakra-colors-facebook-500",
      varRef: "var(--chakra-colors-facebook-500)",
    },
    "colors.facebook.600": {
      value: "#314E89",
      var: "--chakra-colors-facebook-600",
      varRef: "var(--chakra-colors-facebook-600)",
    },
    "colors.facebook.700": {
      value: "#29487D",
      var: "--chakra-colors-facebook-700",
      varRef: "var(--chakra-colors-facebook-700)",
    },
    "colors.facebook.800": {
      value: "#223B67",
      var: "--chakra-colors-facebook-800",
      varRef: "var(--chakra-colors-facebook-800)",
    },
    "colors.facebook.900": {
      value: "#1E355B",
      var: "--chakra-colors-facebook-900",
      varRef: "var(--chakra-colors-facebook-900)",
    },
    "colors.messenger.50": {
      value: "#D0E6FF",
      var: "--chakra-colors-messenger-50",
      varRef: "var(--chakra-colors-messenger-50)",
    },
    "colors.messenger.100": {
      value: "#B9DAFF",
      var: "--chakra-colors-messenger-100",
      varRef: "var(--chakra-colors-messenger-100)",
    },
    "colors.messenger.200": {
      value: "#A2CDFF",
      var: "--chakra-colors-messenger-200",
      varRef: "var(--chakra-colors-messenger-200)",
    },
    "colors.messenger.300": {
      value: "#7AB8FF",
      var: "--chakra-colors-messenger-300",
      varRef: "var(--chakra-colors-messenger-300)",
    },
    "colors.messenger.400": {
      value: "#2E90FF",
      var: "--chakra-colors-messenger-400",
      varRef: "var(--chakra-colors-messenger-400)",
    },
    "colors.messenger.500": {
      value: "#0078FF",
      var: "--chakra-colors-messenger-500",
      varRef: "var(--chakra-colors-messenger-500)",
    },
    "colors.messenger.600": {
      value: "#0063D1",
      var: "--chakra-colors-messenger-600",
      varRef: "var(--chakra-colors-messenger-600)",
    },
    "colors.messenger.700": {
      value: "#0052AC",
      var: "--chakra-colors-messenger-700",
      varRef: "var(--chakra-colors-messenger-700)",
    },
    "colors.messenger.800": {
      value: "#003C7E",
      var: "--chakra-colors-messenger-800",
      varRef: "var(--chakra-colors-messenger-800)",
    },
    "colors.messenger.900": {
      value: "#002C5C",
      var: "--chakra-colors-messenger-900",
      varRef: "var(--chakra-colors-messenger-900)",
    },
    "colors.whatsapp.50": {
      value: "#dffeec",
      var: "--chakra-colors-whatsapp-50",
      varRef: "var(--chakra-colors-whatsapp-50)",
    },
    "colors.whatsapp.100": {
      value: "#b9f5d0",
      var: "--chakra-colors-whatsapp-100",
      varRef: "var(--chakra-colors-whatsapp-100)",
    },
    "colors.whatsapp.200": {
      value: "#90edb3",
      var: "--chakra-colors-whatsapp-200",
      varRef: "var(--chakra-colors-whatsapp-200)",
    },
    "colors.whatsapp.300": {
      value: "#65e495",
      var: "--chakra-colors-whatsapp-300",
      varRef: "var(--chakra-colors-whatsapp-300)",
    },
    "colors.whatsapp.400": {
      value: "#3cdd78",
      var: "--chakra-colors-whatsapp-400",
      varRef: "var(--chakra-colors-whatsapp-400)",
    },
    "colors.whatsapp.500": {
      value: "#22c35e",
      var: "--chakra-colors-whatsapp-500",
      varRef: "var(--chakra-colors-whatsapp-500)",
    },
    "colors.whatsapp.600": {
      value: "#179848",
      var: "--chakra-colors-whatsapp-600",
      varRef: "var(--chakra-colors-whatsapp-600)",
    },
    "colors.whatsapp.700": {
      value: "#0c6c33",
      var: "--chakra-colors-whatsapp-700",
      varRef: "var(--chakra-colors-whatsapp-700)",
    },
    "colors.whatsapp.800": {
      value: "#01421c",
      var: "--chakra-colors-whatsapp-800",
      varRef: "var(--chakra-colors-whatsapp-800)",
    },
    "colors.whatsapp.900": {
      value: "#001803",
      var: "--chakra-colors-whatsapp-900",
      varRef: "var(--chakra-colors-whatsapp-900)",
    },
    "colors.twitter.50": {
      value: "#E5F4FD",
      var: "--chakra-colors-twitter-50",
      varRef: "var(--chakra-colors-twitter-50)",
    },
    "colors.twitter.100": {
      value: "#C8E9FB",
      var: "--chakra-colors-twitter-100",
      varRef: "var(--chakra-colors-twitter-100)",
    },
    "colors.twitter.200": {
      value: "#A8DCFA",
      var: "--chakra-colors-twitter-200",
      varRef: "var(--chakra-colors-twitter-200)",
    },
    "colors.twitter.300": {
      value: "#83CDF7",
      var: "--chakra-colors-twitter-300",
      varRef: "var(--chakra-colors-twitter-300)",
    },
    "colors.twitter.400": {
      value: "#57BBF5",
      var: "--chakra-colors-twitter-400",
      varRef: "var(--chakra-colors-twitter-400)",
    },
    "colors.twitter.500": {
      value: "#1DA1F2",
      var: "--chakra-colors-twitter-500",
      varRef: "var(--chakra-colors-twitter-500)",
    },
    "colors.twitter.600": {
      value: "#1A94DA",
      var: "--chakra-colors-twitter-600",
      varRef: "var(--chakra-colors-twitter-600)",
    },
    "colors.twitter.700": {
      value: "#1681BF",
      var: "--chakra-colors-twitter-700",
      varRef: "var(--chakra-colors-twitter-700)",
    },
    "colors.twitter.800": {
      value: "#136B9E",
      var: "--chakra-colors-twitter-800",
      varRef: "var(--chakra-colors-twitter-800)",
    },
    "colors.twitter.900": {
      value: "#0D4D71",
      var: "--chakra-colors-twitter-900",
      varRef: "var(--chakra-colors-twitter-900)",
    },
    "colors.telegram.50": {
      value: "#E3F2F9",
      var: "--chakra-colors-telegram-50",
      varRef: "var(--chakra-colors-telegram-50)",
    },
    "colors.telegram.100": {
      value: "#C5E4F3",
      var: "--chakra-colors-telegram-100",
      varRef: "var(--chakra-colors-telegram-100)",
    },
    "colors.telegram.200": {
      value: "#A2D4EC",
      var: "--chakra-colors-telegram-200",
      varRef: "var(--chakra-colors-telegram-200)",
    },
    "colors.telegram.300": {
      value: "#7AC1E4",
      var: "--chakra-colors-telegram-300",
      varRef: "var(--chakra-colors-telegram-300)",
    },
    "colors.telegram.400": {
      value: "#47A9DA",
      var: "--chakra-colors-telegram-400",
      varRef: "var(--chakra-colors-telegram-400)",
    },
    "colors.telegram.500": {
      value: "#0088CC",
      var: "--chakra-colors-telegram-500",
      varRef: "var(--chakra-colors-telegram-500)",
    },
    "colors.telegram.600": {
      value: "#007AB8",
      var: "--chakra-colors-telegram-600",
      varRef: "var(--chakra-colors-telegram-600)",
    },
    "colors.telegram.700": {
      value: "#006BA1",
      var: "--chakra-colors-telegram-700",
      varRef: "var(--chakra-colors-telegram-700)",
    },
    "colors.telegram.800": {
      value: "#005885",
      var: "--chakra-colors-telegram-800",
      varRef: "var(--chakra-colors-telegram-800)",
    },
    "colors.telegram.900": {
      value: "#003F5E",
      var: "--chakra-colors-telegram-900",
      varRef: "var(--chakra-colors-telegram-900)",
    },
    "colors.brand.700": {
      value: "#2a69ac",
      var: "--chakra-colors-brand-700",
      varRef: "var(--chakra-colors-brand-700)",
    },
    "colors.brand.800": {
      value: "#153e75",
      var: "--chakra-colors-brand-800",
      varRef: "var(--chakra-colors-brand-800)",
    },
    "colors.brand.900": {
      value: "#1a365d",
      var: "--chakra-colors-brand-900",
      varRef: "var(--chakra-colors-brand-900)",
    },
    "borders.none": {
      value: 0,
      var: "--chakra-borders-none",
      varRef: "var(--chakra-borders-none)",
    },
    "borders.1px": {
      value: "1px solid",
      var: "--chakra-borders-1px",
      varRef: "var(--chakra-borders-1px)",
    },
    "borders.2px": {
      value: "2px solid",
      var: "--chakra-borders-2px",
      varRef: "var(--chakra-borders-2px)",
    },
    "borders.4px": {
      value: "4px solid",
      var: "--chakra-borders-4px",
      varRef: "var(--chakra-borders-4px)",
    },
    "borders.8px": {
      value: "8px solid",
      var: "--chakra-borders-8px",
      varRef: "var(--chakra-borders-8px)",
    },
    "fonts.heading": {
      value:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      var: "--chakra-fonts-heading",
      varRef: "var(--chakra-fonts-heading)",
    },
    "fonts.body": {
      value:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      var: "--chakra-fonts-body",
      varRef: "var(--chakra-fonts-body)",
    },
    "fonts.mono": {
      value:
        'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      var: "--chakra-fonts-mono",
      varRef: "var(--chakra-fonts-mono)",
    },
    "fontSizes.3xs": {
      value: "0.45rem",
      var: "--chakra-fontSizes-3xs",
      varRef: "var(--chakra-fontSizes-3xs)",
    },
    "fontSizes.2xs": {
      value: "0.625rem",
      var: "--chakra-fontSizes-2xs",
      varRef: "var(--chakra-fontSizes-2xs)",
    },
    "fontSizes.xs": {
      value: "0.75rem",
      var: "--chakra-fontSizes-xs",
      varRef: "var(--chakra-fontSizes-xs)",
    },
    "fontSizes.sm": {
      value: "0.875rem",
      var: "--chakra-fontSizes-sm",
      varRef: "var(--chakra-fontSizes-sm)",
    },
    "fontSizes.md": {
      value: "1rem",
      var: "--chakra-fontSizes-md",
      varRef: "var(--chakra-fontSizes-md)",
    },
    "fontSizes.lg": {
      value: "1.125rem",
      var: "--chakra-fontSizes-lg",
      varRef: "var(--chakra-fontSizes-lg)",
    },
    "fontSizes.xl": {
      value: "1.25rem",
      var: "--chakra-fontSizes-xl",
      varRef: "var(--chakra-fontSizes-xl)",
    },
    "fontSizes.2xl": {
      value: "1.5rem",
      var: "--chakra-fontSizes-2xl",
      varRef: "var(--chakra-fontSizes-2xl)",
    },
    "fontSizes.3xl": {
      value: "1.875rem",
      var: "--chakra-fontSizes-3xl",
      varRef: "var(--chakra-fontSizes-3xl)",
    },
    "fontSizes.4xl": {
      value: "2.25rem",
      var: "--chakra-fontSizes-4xl",
      varRef: "var(--chakra-fontSizes-4xl)",
    },
    "fontSizes.5xl": {
      value: "3rem",
      var: "--chakra-fontSizes-5xl",
      varRef: "var(--chakra-fontSizes-5xl)",
    },
    "fontSizes.6xl": {
      value: "3.75rem",
      var: "--chakra-fontSizes-6xl",
      varRef: "var(--chakra-fontSizes-6xl)",
    },
    "fontSizes.7xl": {
      value: "4.5rem",
      var: "--chakra-fontSizes-7xl",
      varRef: "var(--chakra-fontSizes-7xl)",
    },
    "fontSizes.8xl": {
      value: "6rem",
      var: "--chakra-fontSizes-8xl",
      varRef: "var(--chakra-fontSizes-8xl)",
    },
    "fontSizes.9xl": {
      value: "8rem",
      var: "--chakra-fontSizes-9xl",
      varRef: "var(--chakra-fontSizes-9xl)",
    },
    "fontWeights.hairline": {
      value: 100,
      var: "--chakra-fontWeights-hairline",
      varRef: "var(--chakra-fontWeights-hairline)",
    },
    "fontWeights.thin": {
      value: 200,
      var: "--chakra-fontWeights-thin",
      varRef: "var(--chakra-fontWeights-thin)",
    },
    "fontWeights.light": {
      value: 300,
      var: "--chakra-fontWeights-light",
      varRef: "var(--chakra-fontWeights-light)",
    },
    "fontWeights.normal": {
      value: 400,
      var: "--chakra-fontWeights-normal",
      varRef: "var(--chakra-fontWeights-normal)",
    },
    "fontWeights.medium": {
      value: 500,
      var: "--chakra-fontWeights-medium",
      varRef: "var(--chakra-fontWeights-medium)",
    },
    "fontWeights.semibold": {
      value: 600,
      var: "--chakra-fontWeights-semibold",
      varRef: "var(--chakra-fontWeights-semibold)",
    },
    "fontWeights.bold": {
      value: 700,
      var: "--chakra-fontWeights-bold",
      varRef: "var(--chakra-fontWeights-bold)",
    },
    "fontWeights.extrabold": {
      value: 800,
      var: "--chakra-fontWeights-extrabold",
      varRef: "var(--chakra-fontWeights-extrabold)",
    },
    "fontWeights.black": {
      value: 900,
      var: "--chakra-fontWeights-black",
      varRef: "var(--chakra-fontWeights-black)",
    },
    "letterSpacings.tighter": {
      value: "-0.05em",
      var: "--chakra-letterSpacings-tighter",
      varRef: "var(--chakra-letterSpacings-tighter)",
    },
    "letterSpacings.tight": {
      value: "-0.025em",
      var: "--chakra-letterSpacings-tight",
      varRef: "var(--chakra-letterSpacings-tight)",
    },
    "letterSpacings.normal": {
      value: "0",
      var: "--chakra-letterSpacings-normal",
      varRef: "var(--chakra-letterSpacings-normal)",
    },
    "letterSpacings.wide": {
      value: "0.025em",
      var: "--chakra-letterSpacings-wide",
      varRef: "var(--chakra-letterSpacings-wide)",
    },
    "letterSpacings.wider": {
      value: "0.05em",
      var: "--chakra-letterSpacings-wider",
      varRef: "var(--chakra-letterSpacings-wider)",
    },
    "letterSpacings.widest": {
      value: "0.1em",
      var: "--chakra-letterSpacings-widest",
      varRef: "var(--chakra-letterSpacings-widest)",
    },
    "lineHeights.3": {
      value: ".75rem",
      var: "--chakra-lineHeights-3",
      varRef: "var(--chakra-lineHeights-3)",
    },
    "lineHeights.4": {
      value: "1rem",
      var: "--chakra-lineHeights-4",
      varRef: "var(--chakra-lineHeights-4)",
    },
    "lineHeights.5": {
      value: "1.25rem",
      var: "--chakra-lineHeights-5",
      varRef: "var(--chakra-lineHeights-5)",
    },
    "lineHeights.6": {
      value: "1.5rem",
      var: "--chakra-lineHeights-6",
      varRef: "var(--chakra-lineHeights-6)",
    },
    "lineHeights.7": {
      value: "1.75rem",
      var: "--chakra-lineHeights-7",
      varRef: "var(--chakra-lineHeights-7)",
    },
    "lineHeights.8": {
      value: "2rem",
      var: "--chakra-lineHeights-8",
      varRef: "var(--chakra-lineHeights-8)",
    },
    "lineHeights.9": {
      value: "2.25rem",
      var: "--chakra-lineHeights-9",
      varRef: "var(--chakra-lineHeights-9)",
    },
    "lineHeights.10": {
      value: "2.5rem",
      var: "--chakra-lineHeights-10",
      varRef: "var(--chakra-lineHeights-10)",
    },
    "lineHeights.normal": {
      value: "normal",
      var: "--chakra-lineHeights-normal",
      varRef: "var(--chakra-lineHeights-normal)",
    },
    "lineHeights.none": {
      value: 1,
      var: "--chakra-lineHeights-none",
      varRef: "var(--chakra-lineHeights-none)",
    },
    "lineHeights.shorter": {
      value: 1.25,
      var: "--chakra-lineHeights-shorter",
      varRef: "var(--chakra-lineHeights-shorter)",
    },
    "lineHeights.short": {
      value: 1.375,
      var: "--chakra-lineHeights-short",
      varRef: "var(--chakra-lineHeights-short)",
    },
    "lineHeights.base": {
      value: 1.5,
      var: "--chakra-lineHeights-base",
      varRef: "var(--chakra-lineHeights-base)",
    },
    "lineHeights.tall": {
      value: 1.625,
      var: "--chakra-lineHeights-tall",
      varRef: "var(--chakra-lineHeights-tall)",
    },
    "lineHeights.taller": {
      value: "2",
      var: "--chakra-lineHeights-taller",
      varRef: "var(--chakra-lineHeights-taller)",
    },
    "radii.none": {
      value: "0",
      var: "--chakra-radii-none",
      varRef: "var(--chakra-radii-none)",
    },
    "radii.sm": {
      value: "0.125rem",
      var: "--chakra-radii-sm",
      varRef: "var(--chakra-radii-sm)",
    },
    "radii.base": {
      value: "0.25rem",
      var: "--chakra-radii-base",
      varRef: "var(--chakra-radii-base)",
    },
    "radii.md": {
      value: "0.375rem",
      var: "--chakra-radii-md",
      varRef: "var(--chakra-radii-md)",
    },
    "radii.lg": {
      value: "0.5rem",
      var: "--chakra-radii-lg",
      varRef: "var(--chakra-radii-lg)",
    },
    "radii.xl": {
      value: "0.75rem",
      var: "--chakra-radii-xl",
      varRef: "var(--chakra-radii-xl)",
    },
    "radii.2xl": {
      value: "1rem",
      var: "--chakra-radii-2xl",
      varRef: "var(--chakra-radii-2xl)",
    },
    "radii.3xl": {
      value: "1.5rem",
      var: "--chakra-radii-3xl",
      varRef: "var(--chakra-radii-3xl)",
    },
    "radii.full": {
      value: "9999px",
      var: "--chakra-radii-full",
      varRef: "var(--chakra-radii-full)",
    },
    "space.-1": {
      value: "-0.25rem",
      var: "--chakra-space-1",
      varRef: "calc(var(--chakra-space-1) * -1)",
    },
    "space.1": {
      value: "0.25rem",
      var: "--chakra-space-1",
      varRef: "var(--chakra-space-1)",
    },
    "space.-2": {
      value: "-0.5rem",
      var: "--chakra-space-2",
      varRef: "calc(var(--chakra-space-2) * -1)",
    },
    "space.2": {
      value: "0.5rem",
      var: "--chakra-space-2",
      varRef: "var(--chakra-space-2)",
    },
    "space.-3": {
      value: "-0.75rem",
      var: "--chakra-space-3",
      varRef: "calc(var(--chakra-space-3) * -1)",
    },
    "space.3": {
      value: "0.75rem",
      var: "--chakra-space-3",
      varRef: "var(--chakra-space-3)",
    },
    "space.-4": {
      value: "-1rem",
      var: "--chakra-space-4",
      varRef: "calc(var(--chakra-space-4) * -1)",
    },
    "space.4": {
      value: "1rem",
      var: "--chakra-space-4",
      varRef: "var(--chakra-space-4)",
    },
    "space.-5": {
      value: "-1.25rem",
      var: "--chakra-space-5",
      varRef: "calc(var(--chakra-space-5) * -1)",
    },
    "space.5": {
      value: "1.25rem",
      var: "--chakra-space-5",
      varRef: "var(--chakra-space-5)",
    },
    "space.-6": {
      value: "-1.5rem",
      var: "--chakra-space-6",
      varRef: "calc(var(--chakra-space-6) * -1)",
    },
    "space.6": {
      value: "1.5rem",
      var: "--chakra-space-6",
      varRef: "var(--chakra-space-6)",
    },
    "space.-7": {
      value: "-1.75rem",
      var: "--chakra-space-7",
      varRef: "calc(var(--chakra-space-7) * -1)",
    },
    "space.7": {
      value: "1.75rem",
      var: "--chakra-space-7",
      varRef: "var(--chakra-space-7)",
    },
    "space.-8": {
      value: "-2rem",
      var: "--chakra-space-8",
      varRef: "calc(var(--chakra-space-8) * -1)",
    },
    "space.8": {
      value: "2rem",
      var: "--chakra-space-8",
      varRef: "var(--chakra-space-8)",
    },
    "space.-9": {
      value: "-2.25rem",
      var: "--chakra-space-9",
      varRef: "calc(var(--chakra-space-9) * -1)",
    },
    "space.9": {
      value: "2.25rem",
      var: "--chakra-space-9",
      varRef: "var(--chakra-space-9)",
    },
    "space.-10": {
      value: "-2.5rem",
      var: "--chakra-space-10",
      varRef: "calc(var(--chakra-space-10) * -1)",
    },
    "space.10": {
      value: "2.5rem",
      var: "--chakra-space-10",
      varRef: "var(--chakra-space-10)",
    },
    "space.-12": {
      value: "-3rem",
      var: "--chakra-space-12",
      varRef: "calc(var(--chakra-space-12) * -1)",
    },
    "space.12": {
      value: "3rem",
      var: "--chakra-space-12",
      varRef: "var(--chakra-space-12)",
    },
    "space.-14": {
      value: "-3.5rem",
      var: "--chakra-space-14",
      varRef: "calc(var(--chakra-space-14) * -1)",
    },
    "space.14": {
      value: "3.5rem",
      var: "--chakra-space-14",
      varRef: "var(--chakra-space-14)",
    },
    "space.-16": {
      value: "-4rem",
      var: "--chakra-space-16",
      varRef: "calc(var(--chakra-space-16) * -1)",
    },
    "space.16": {
      value: "4rem",
      var: "--chakra-space-16",
      varRef: "var(--chakra-space-16)",
    },
    "space.-20": {
      value: "-5rem",
      var: "--chakra-space-20",
      varRef: "calc(var(--chakra-space-20) * -1)",
    },
    "space.20": {
      value: "5rem",
      var: "--chakra-space-20",
      varRef: "var(--chakra-space-20)",
    },
    "space.-24": {
      value: "-6rem",
      var: "--chakra-space-24",
      varRef: "calc(var(--chakra-space-24) * -1)",
    },
    "space.24": {
      value: "6rem",
      var: "--chakra-space-24",
      varRef: "var(--chakra-space-24)",
    },
    "space.-28": {
      value: "-7rem",
      var: "--chakra-space-28",
      varRef: "calc(var(--chakra-space-28) * -1)",
    },
    "space.28": {
      value: "7rem",
      var: "--chakra-space-28",
      varRef: "var(--chakra-space-28)",
    },
    "space.-32": {
      value: "-8rem",
      var: "--chakra-space-32",
      varRef: "calc(var(--chakra-space-32) * -1)",
    },
    "space.32": {
      value: "8rem",
      var: "--chakra-space-32",
      varRef: "var(--chakra-space-32)",
    },
    "space.-36": {
      value: "-9rem",
      var: "--chakra-space-36",
      varRef: "calc(var(--chakra-space-36) * -1)",
    },
    "space.36": {
      value: "9rem",
      var: "--chakra-space-36",
      varRef: "var(--chakra-space-36)",
    },
    "space.-40": {
      value: "-10rem",
      var: "--chakra-space-40",
      varRef: "calc(var(--chakra-space-40) * -1)",
    },
    "space.40": {
      value: "10rem",
      var: "--chakra-space-40",
      varRef: "var(--chakra-space-40)",
    },
    "space.-44": {
      value: "-11rem",
      var: "--chakra-space-44",
      varRef: "calc(var(--chakra-space-44) * -1)",
    },
    "space.44": {
      value: "11rem",
      var: "--chakra-space-44",
      varRef: "var(--chakra-space-44)",
    },
    "space.-48": {
      value: "-12rem",
      var: "--chakra-space-48",
      varRef: "calc(var(--chakra-space-48) * -1)",
    },
    "space.48": {
      value: "12rem",
      var: "--chakra-space-48",
      varRef: "var(--chakra-space-48)",
    },
    "space.-52": {
      value: "-13rem",
      var: "--chakra-space-52",
      varRef: "calc(var(--chakra-space-52) * -1)",
    },
    "space.52": {
      value: "13rem",
      var: "--chakra-space-52",
      varRef: "var(--chakra-space-52)",
    },
    "space.-56": {
      value: "-14rem",
      var: "--chakra-space-56",
      varRef: "calc(var(--chakra-space-56) * -1)",
    },
    "space.56": {
      value: "14rem",
      var: "--chakra-space-56",
      varRef: "var(--chakra-space-56)",
    },
    "space.-60": {
      value: "-15rem",
      var: "--chakra-space-60",
      varRef: "calc(var(--chakra-space-60) * -1)",
    },
    "space.60": {
      value: "15rem",
      var: "--chakra-space-60",
      varRef: "var(--chakra-space-60)",
    },
    "space.-64": {
      value: "-16rem",
      var: "--chakra-space-64",
      varRef: "calc(var(--chakra-space-64) * -1)",
    },
    "space.64": {
      value: "16rem",
      var: "--chakra-space-64",
      varRef: "var(--chakra-space-64)",
    },
    "space.-72": {
      value: "-18rem",
      var: "--chakra-space-72",
      varRef: "calc(var(--chakra-space-72) * -1)",
    },
    "space.72": {
      value: "18rem",
      var: "--chakra-space-72",
      varRef: "var(--chakra-space-72)",
    },
    "space.-80": {
      value: "-20rem",
      var: "--chakra-space-80",
      varRef: "calc(var(--chakra-space-80) * -1)",
    },
    "space.80": {
      value: "20rem",
      var: "--chakra-space-80",
      varRef: "var(--chakra-space-80)",
    },
    "space.-96": {
      value: "-24rem",
      var: "--chakra-space-96",
      varRef: "calc(var(--chakra-space-96) * -1)",
    },
    "space.96": {
      value: "24rem",
      var: "--chakra-space-96",
      varRef: "var(--chakra-space-96)",
    },
    "space.-px": {
      value: "-1px",
      var: "--chakra-space-px",
      varRef: "calc(var(--chakra-space-px) * -1)",
    },
    "space.px": {
      value: "1px",
      var: "--chakra-space-px",
      varRef: "var(--chakra-space-px)",
    },
    "space.-0.5": {
      value: "-0.125rem",
      var: "--chakra-space-0-5",
      varRef: "calc(var(--chakra-space-0-5) * -1)",
    },
    "space.0.5": {
      value: "0.125rem",
      var: "--chakra-space-0-5",
      varRef: "var(--chakra-space-0-5)",
    },
    "space.-1.5": {
      value: "-0.375rem",
      var: "--chakra-space-1-5",
      varRef: "calc(var(--chakra-space-1-5) * -1)",
    },
    "space.1.5": {
      value: "0.375rem",
      var: "--chakra-space-1-5",
      varRef: "var(--chakra-space-1-5)",
    },
    "space.-2.5": {
      value: "-0.625rem",
      var: "--chakra-space-2-5",
      varRef: "calc(var(--chakra-space-2-5) * -1)",
    },
    "space.2.5": {
      value: "0.625rem",
      var: "--chakra-space-2-5",
      varRef: "var(--chakra-space-2-5)",
    },
    "space.-3.5": {
      value: "-0.875rem",
      var: "--chakra-space-3-5",
      varRef: "calc(var(--chakra-space-3-5) * -1)",
    },
    "space.3.5": {
      value: "0.875rem",
      var: "--chakra-space-3-5",
      varRef: "var(--chakra-space-3-5)",
    },
    "shadows.xs": {
      value: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      var: "--chakra-shadows-xs",
      varRef: "var(--chakra-shadows-xs)",
    },
    "shadows.sm": {
      value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      var: "--chakra-shadows-sm",
      varRef: "var(--chakra-shadows-sm)",
    },
    "shadows.base": {
      value: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      var: "--chakra-shadows-base",
      varRef: "var(--chakra-shadows-base)",
    },
    "shadows.md": {
      value:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      var: "--chakra-shadows-md",
      varRef: "var(--chakra-shadows-md)",
    },
    "shadows.lg": {
      value:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      var: "--chakra-shadows-lg",
      varRef: "var(--chakra-shadows-lg)",
    },
    "shadows.xl": {
      value:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      var: "--chakra-shadows-xl",
      varRef: "var(--chakra-shadows-xl)",
    },
    "shadows.2xl": {
      value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      var: "--chakra-shadows-2xl",
      varRef: "var(--chakra-shadows-2xl)",
    },
    "shadows.outline": {
      value: "0 0 0 3px rgba(66, 153, 225, 0.6)",
      var: "--chakra-shadows-outline",
      varRef: "var(--chakra-shadows-outline)",
    },
    "shadows.inner": {
      value: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      var: "--chakra-shadows-inner",
      varRef: "var(--chakra-shadows-inner)",
    },
    "shadows.none": {
      value: "none",
      var: "--chakra-shadows-none",
      varRef: "var(--chakra-shadows-none)",
    },
    "shadows.dark-lg": {
      value:
        "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
      var: "--chakra-shadows-dark-lg",
      varRef: "var(--chakra-shadows-dark-lg)",
    },
    "sizes.1": {
      value: "0.25rem",
      var: "--chakra-sizes-1",
      varRef: "var(--chakra-sizes-1)",
    },
    "sizes.2": {
      value: "0.5rem",
      var: "--chakra-sizes-2",
      varRef: "var(--chakra-sizes-2)",
    },
    "sizes.3": {
      value: "0.75rem",
      var: "--chakra-sizes-3",
      varRef: "var(--chakra-sizes-3)",
    },
    "sizes.4": {
      value: "1rem",
      var: "--chakra-sizes-4",
      varRef: "var(--chakra-sizes-4)",
    },
    "sizes.5": {
      value: "1.25rem",
      var: "--chakra-sizes-5",
      varRef: "var(--chakra-sizes-5)",
    },
    "sizes.6": {
      value: "1.5rem",
      var: "--chakra-sizes-6",
      varRef: "var(--chakra-sizes-6)",
    },
    "sizes.7": {
      value: "1.75rem",
      var: "--chakra-sizes-7",
      varRef: "var(--chakra-sizes-7)",
    },
    "sizes.8": {
      value: "2rem",
      var: "--chakra-sizes-8",
      varRef: "var(--chakra-sizes-8)",
    },
    "sizes.9": {
      value: "2.25rem",
      var: "--chakra-sizes-9",
      varRef: "var(--chakra-sizes-9)",
    },
    "sizes.10": {
      value: "2.5rem",
      var: "--chakra-sizes-10",
      varRef: "var(--chakra-sizes-10)",
    },
    "sizes.12": {
      value: "3rem",
      var: "--chakra-sizes-12",
      varRef: "var(--chakra-sizes-12)",
    },
    "sizes.14": {
      value: "3.5rem",
      var: "--chakra-sizes-14",
      varRef: "var(--chakra-sizes-14)",
    },
    "sizes.16": {
      value: "4rem",
      var: "--chakra-sizes-16",
      varRef: "var(--chakra-sizes-16)",
    },
    "sizes.20": {
      value: "5rem",
      var: "--chakra-sizes-20",
      varRef: "var(--chakra-sizes-20)",
    },
    "sizes.24": {
      value: "6rem",
      var: "--chakra-sizes-24",
      varRef: "var(--chakra-sizes-24)",
    },
    "sizes.28": {
      value: "7rem",
      var: "--chakra-sizes-28",
      varRef: "var(--chakra-sizes-28)",
    },
    "sizes.32": {
      value: "8rem",
      var: "--chakra-sizes-32",
      varRef: "var(--chakra-sizes-32)",
    },
    "sizes.36": {
      value: "9rem",
      var: "--chakra-sizes-36",
      varRef: "var(--chakra-sizes-36)",
    },
    "sizes.40": {
      value: "10rem",
      var: "--chakra-sizes-40",
      varRef: "var(--chakra-sizes-40)",
    },
    "sizes.44": {
      value: "11rem",
      var: "--chakra-sizes-44",
      varRef: "var(--chakra-sizes-44)",
    },
    "sizes.48": {
      value: "12rem",
      var: "--chakra-sizes-48",
      varRef: "var(--chakra-sizes-48)",
    },
    "sizes.52": {
      value: "13rem",
      var: "--chakra-sizes-52",
      varRef: "var(--chakra-sizes-52)",
    },
    "sizes.56": {
      value: "14rem",
      var: "--chakra-sizes-56",
      varRef: "var(--chakra-sizes-56)",
    },
    "sizes.60": {
      value: "15rem",
      var: "--chakra-sizes-60",
      varRef: "var(--chakra-sizes-60)",
    },
    "sizes.64": {
      value: "16rem",
      var: "--chakra-sizes-64",
      varRef: "var(--chakra-sizes-64)",
    },
    "sizes.72": {
      value: "18rem",
      var: "--chakra-sizes-72",
      varRef: "var(--chakra-sizes-72)",
    },
    "sizes.80": {
      value: "20rem",
      var: "--chakra-sizes-80",
      varRef: "var(--chakra-sizes-80)",
    },
    "sizes.96": {
      value: "24rem",
      var: "--chakra-sizes-96",
      varRef: "var(--chakra-sizes-96)",
    },
    "sizes.px": {
      value: "1px",
      var: "--chakra-sizes-px",
      varRef: "var(--chakra-sizes-px)",
    },
    "sizes.0.5": {
      value: "0.125rem",
      var: "--chakra-sizes-0-5",
      varRef: "var(--chakra-sizes-0-5)",
    },
    "sizes.1.5": {
      value: "0.375rem",
      var: "--chakra-sizes-1-5",
      varRef: "var(--chakra-sizes-1-5)",
    },
    "sizes.2.5": {
      value: "0.625rem",
      var: "--chakra-sizes-2-5",
      varRef: "var(--chakra-sizes-2-5)",
    },
    "sizes.3.5": {
      value: "0.875rem",
      var: "--chakra-sizes-3-5",
      varRef: "var(--chakra-sizes-3-5)",
    },
    "sizes.max": {
      value: "max-content",
      var: "--chakra-sizes-max",
      varRef: "var(--chakra-sizes-max)",
    },
    "sizes.min": {
      value: "min-content",
      var: "--chakra-sizes-min",
      varRef: "var(--chakra-sizes-min)",
    },
    "sizes.full": {
      value: "100%",
      var: "--chakra-sizes-full",
      varRef: "var(--chakra-sizes-full)",
    },
    "sizes.3xs": {
      value: "14rem",
      var: "--chakra-sizes-3xs",
      varRef: "var(--chakra-sizes-3xs)",
    },
    "sizes.2xs": {
      value: "16rem",
      var: "--chakra-sizes-2xs",
      varRef: "var(--chakra-sizes-2xs)",
    },
    "sizes.xs": {
      value: "20rem",
      var: "--chakra-sizes-xs",
      varRef: "var(--chakra-sizes-xs)",
    },
    "sizes.sm": {
      value: "24rem",
      var: "--chakra-sizes-sm",
      varRef: "var(--chakra-sizes-sm)",
    },
    "sizes.md": {
      value: "28rem",
      var: "--chakra-sizes-md",
      varRef: "var(--chakra-sizes-md)",
    },
    "sizes.lg": {
      value: "32rem",
      var: "--chakra-sizes-lg",
      varRef: "var(--chakra-sizes-lg)",
    },
    "sizes.xl": {
      value: "36rem",
      var: "--chakra-sizes-xl",
      varRef: "var(--chakra-sizes-xl)",
    },
    "sizes.2xl": {
      value: "42rem",
      var: "--chakra-sizes-2xl",
      varRef: "var(--chakra-sizes-2xl)",
    },
    "sizes.3xl": {
      value: "48rem",
      var: "--chakra-sizes-3xl",
      varRef: "var(--chakra-sizes-3xl)",
    },
    "sizes.4xl": {
      value: "56rem",
      var: "--chakra-sizes-4xl",
      varRef: "var(--chakra-sizes-4xl)",
    },
    "sizes.5xl": {
      value: "64rem",
      var: "--chakra-sizes-5xl",
      varRef: "var(--chakra-sizes-5xl)",
    },
    "sizes.6xl": {
      value: "72rem",
      var: "--chakra-sizes-6xl",
      varRef: "var(--chakra-sizes-6xl)",
    },
    "sizes.7xl": {
      value: "80rem",
      var: "--chakra-sizes-7xl",
      varRef: "var(--chakra-sizes-7xl)",
    },
    "sizes.8xl": {
      value: "90rem",
      var: "--chakra-sizes-8xl",
      varRef: "var(--chakra-sizes-8xl)",
    },
    "sizes.prose": {
      value: "60ch",
      var: "--chakra-sizes-prose",
      varRef: "var(--chakra-sizes-prose)",
    },
    "sizes.container.sm": {
      value: "640px",
      var: "--chakra-sizes-container-sm",
      varRef: "var(--chakra-sizes-container-sm)",
    },
    "sizes.container.md": {
      value: "768px",
      var: "--chakra-sizes-container-md",
      varRef: "var(--chakra-sizes-container-md)",
    },
    "sizes.container.lg": {
      value: "1024px",
      var: "--chakra-sizes-container-lg",
      varRef: "var(--chakra-sizes-container-lg)",
    },
    "sizes.container.xl": {
      value: "1280px",
      var: "--chakra-sizes-container-xl",
      varRef: "var(--chakra-sizes-container-xl)",
    },
    "zIndices.hide": {
      value: -1,
      var: "--chakra-zIndices-hide",
      varRef: "var(--chakra-zIndices-hide)",
    },
    "zIndices.auto": {
      value: "auto",
      var: "--chakra-zIndices-auto",
      varRef: "var(--chakra-zIndices-auto)",
    },
    "zIndices.base": {
      value: 0,
      var: "--chakra-zIndices-base",
      varRef: "var(--chakra-zIndices-base)",
    },
    "zIndices.docked": {
      value: 10,
      var: "--chakra-zIndices-docked",
      varRef: "var(--chakra-zIndices-docked)",
    },
    "zIndices.dropdown": {
      value: 1000,
      var: "--chakra-zIndices-dropdown",
      varRef: "var(--chakra-zIndices-dropdown)",
    },
    "zIndices.sticky": {
      value: 1100,
      var: "--chakra-zIndices-sticky",
      varRef: "var(--chakra-zIndices-sticky)",
    },
    "zIndices.banner": {
      value: 1200,
      var: "--chakra-zIndices-banner",
      varRef: "var(--chakra-zIndices-banner)",
    },
    "zIndices.overlay": {
      value: 1300,
      var: "--chakra-zIndices-overlay",
      varRef: "var(--chakra-zIndices-overlay)",
    },
    "zIndices.modal": {
      value: 1400,
      var: "--chakra-zIndices-modal",
      varRef: "var(--chakra-zIndices-modal)",
    },
    "zIndices.popover": {
      value: 1500,
      var: "--chakra-zIndices-popover",
      varRef: "var(--chakra-zIndices-popover)",
    },
    "zIndices.skipLink": {
      value: 1600,
      var: "--chakra-zIndices-skipLink",
      varRef: "var(--chakra-zIndices-skipLink)",
    },
    "zIndices.toast": {
      value: 1700,
      var: "--chakra-zIndices-toast",
      varRef: "var(--chakra-zIndices-toast)",
    },
    "zIndices.tooltip": {
      value: 1800,
      var: "--chakra-zIndices-tooltip",
      varRef: "var(--chakra-zIndices-tooltip)",
    },
    "transition.property.common": {
      value:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      var: "--chakra-transition-property-common",
      varRef: "var(--chakra-transition-property-common)",
    },
    "transition.property.colors": {
      value: "background-color, border-color, color, fill, stroke",
      var: "--chakra-transition-property-colors",
      varRef: "var(--chakra-transition-property-colors)",
    },
    "transition.property.dimensions": {
      value: "width, height",
      var: "--chakra-transition-property-dimensions",
      varRef: "var(--chakra-transition-property-dimensions)",
    },
    "transition.property.position": {
      value: "left, right, top, bottom",
      var: "--chakra-transition-property-position",
      varRef: "var(--chakra-transition-property-position)",
    },
    "transition.property.background": {
      value: "background-color, background-image, background-position",
      var: "--chakra-transition-property-background",
      varRef: "var(--chakra-transition-property-background)",
    },
    "transition.easing.ease-in": {
      value: "cubic-bezier(0.4, 0, 1, 1)",
      var: "--chakra-transition-easing-ease-in",
      varRef: "var(--chakra-transition-easing-ease-in)",
    },
    "transition.easing.ease-out": {
      value: "cubic-bezier(0, 0, 0.2, 1)",
      var: "--chakra-transition-easing-ease-out",
      varRef: "var(--chakra-transition-easing-ease-out)",
    },
    "transition.easing.ease-in-out": {
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      var: "--chakra-transition-easing-ease-in-out",
      varRef: "var(--chakra-transition-easing-ease-in-out)",
    },
    "transition.duration.ultra-fast": {
      value: "50ms",
      var: "--chakra-transition-duration-ultra-fast",
      varRef: "var(--chakra-transition-duration-ultra-fast)",
    },
    "transition.duration.faster": {
      value: "100ms",
      var: "--chakra-transition-duration-faster",
      varRef: "var(--chakra-transition-duration-faster)",
    },
    "transition.duration.fast": {
      value: "150ms",
      var: "--chakra-transition-duration-fast",
      varRef: "var(--chakra-transition-duration-fast)",
    },
    "transition.duration.normal": {
      value: "200ms",
      var: "--chakra-transition-duration-normal",
      varRef: "var(--chakra-transition-duration-normal)",
    },
    "transition.duration.slow": {
      value: "300ms",
      var: "--chakra-transition-duration-slow",
      varRef: "var(--chakra-transition-duration-slow)",
    },
    "transition.duration.slower": {
      value: "400ms",
      var: "--chakra-transition-duration-slower",
      varRef: "var(--chakra-transition-duration-slower)",
    },
    "transition.duration.ultra-slow": {
      value: "500ms",
      var: "--chakra-transition-duration-ultra-slow",
      varRef: "var(--chakra-transition-duration-ultra-slow)",
    },
    "blur.none": {
      value: "10px",
      var: "--chakra-blur-none",
      varRef: "var(--chakra-blur-none)",
    },
    "blur.sm": {
      value: "4px",
      var: "--chakra-blur-sm",
      varRef: "var(--chakra-blur-sm)",
    },
    "blur.base": {
      value: "8px",
      var: "--chakra-blur-base",
      varRef: "var(--chakra-blur-base)",
    },
    "blur.md": {
      value: "12px",
      var: "--chakra-blur-md",
      varRef: "var(--chakra-blur-md)",
    },
    "blur.lg": {
      value: "16px",
      var: "--chakra-blur-lg",
      varRef: "var(--chakra-blur-lg)",
    },
    "blur.xl": {
      value: "24px",
      var: "--chakra-blur-xl",
      varRef: "var(--chakra-blur-xl)",
    },
    "blur.2xl": {
      value: "40px",
      var: "--chakra-blur-2xl",
      varRef: "var(--chakra-blur-2xl)",
    },
    "blur.3xl": {
      value: "64px",
      var: "--chakra-blur-3xl",
      varRef: "var(--chakra-blur-3xl)",
    },
    "colors.chakra-body-text": {
      value: "var(--chakra-colors-chakra-body-text)",
      var: "--chakra-colors-chakra-body-text",
      varRef: "var(--chakra-colors-chakra-body-text)",
    },
    "colors.chakra-body-bg": {
      value: "var(--chakra-colors-chakra-body-bg)",
      var: "--chakra-colors-chakra-body-bg",
      varRef: "var(--chakra-colors-chakra-body-bg)",
    },
    "colors.chakra-border-color": {
      value: "var(--chakra-colors-chakra-border-color)",
      var: "--chakra-colors-chakra-border-color",
      varRef: "var(--chakra-colors-chakra-border-color)",
    },
    "colors.chakra-subtle-bg": {
      value: "var(--chakra-colors-chakra-subtle-bg)",
      var: "--chakra-colors-chakra-subtle-bg",
      varRef: "var(--chakra-colors-chakra-subtle-bg)",
    },
    "colors.chakra-placeholder-color": {
      value: "var(--chakra-colors-chakra-placeholder-color)",
      var: "--chakra-colors-chakra-placeholder-color",
      varRef: "var(--chakra-colors-chakra-placeholder-color)",
    },
  },
  __breakpoints: {
    keys: {},
    normalized: ["0em", "30em", "48em", "62em", "80em", "96em"],
    asObject: {
      base: "0em",
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },
    asArray: ["0em", "30em", "48em", "62em", "80em", "96em"],
    details: [
      {
        _minW: "-0.0625em",
        breakpoint: "base",
        minW: "0em",
        maxW: "29.9375em",
        maxWQuery: "@media screen and (max-width: 29.9375em)",
        minWQuery: "@media screen and (min-width: 0em)",
        minMaxQuery:
          "@media screen and (min-width: 0em) and (max-width: 29.9375em)",
      },
      {
        _minW: "29.9375em",
        breakpoint: "sm",
        minW: "30em",
        maxW: "47.9375em",
        maxWQuery: "@media screen and (max-width: 47.9375em)",
        minWQuery: "@media screen and (min-width: 30em)",
        minMaxQuery:
          "@media screen and (min-width: 30em) and (max-width: 47.9375em)",
      },
      {
        _minW: "47.9375em",
        breakpoint: "md",
        minW: "48em",
        maxW: "61.9375em",
        maxWQuery: "@media screen and (max-width: 61.9375em)",
        minWQuery: "@media screen and (min-width: 48em)",
        minMaxQuery:
          "@media screen and (min-width: 48em) and (max-width: 61.9375em)",
      },
      {
        _minW: "61.9375em",
        breakpoint: "lg",
        minW: "62em",
        maxW: "79.9375em",
        maxWQuery: "@media screen and (max-width: 79.9375em)",
        minWQuery: "@media screen and (min-width: 62em)",
        minMaxQuery:
          "@media screen and (min-width: 62em) and (max-width: 79.9375em)",
      },
      {
        _minW: "79.9375em",
        breakpoint: "xl",
        minW: "80em",
        maxW: "95.9375em",
        maxWQuery: "@media screen and (max-width: 95.9375em)",
        minWQuery: "@media screen and (min-width: 80em)",
        minMaxQuery:
          "@media screen and (min-width: 80em) and (max-width: 95.9375em)",
      },
      {
        _minW: "95.9375em",
        breakpoint: "2xl",
        minW: "96em",
        maxWQuery: "@media screen",
        minWQuery: "@media screen and (min-width: 96em)",
        minMaxQuery: "@media screen and (min-width: 96em)",
      },
    ],
    media: [
      null,
      "@media screen and (min-width: 30em)",
      "@media screen and (min-width: 48em)",
      "@media screen and (min-width: 62em)",
      "@media screen and (min-width: 80em)",
      "@media screen and (min-width: 96em)",
    ],
  },
};
