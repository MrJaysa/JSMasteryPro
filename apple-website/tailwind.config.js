import { DEFAULT } from "@react-three/fiber/dist/declarations/src/core/utils";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868B",
          100: "#94928D",
          200: "#AFAFAF",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [
    /** @type {import("tailwindcss/types/config").Plugins.Creator} */
    plugin(({ addBase, addComponents, addUtilities }) => {
      addBase([
        {
          "*": {
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
          },
        },
        {
          body: {
            color: "white",
            width: "100dvw",
            overflowX: "hidden",
            height: "100%",
            background: "#000",
            borderColor: "#3b3b3b",
            userSelect: "none",
          },
        },
        {
          canvas: {
            touchAction: "none",
          },
        },
      ]);
      addComponents([
        {
          ".screen-max-width": {
            position: "relative",
            marginInlineStart: "auto",
            marginInlineEnd: "auto",
            maxWidth: "1120px",
          },
        },
      ]);
      addUtilities([
        {
          ".flex-center": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
        {
          ".nav-height": {
            height: "calc(100vh - 80px)",
          },
        },
        {
          ".btn": {
            margin: "20px 0",
            padding: "8px 20px",
            borderRadius: "24px",
            border: "1px solid transparent",
            backgroundColor: "#2997ff",
            "&:hover": {
              border: "1px solid #2997ff",
              backgroundColor: "transparent",
              color: "#2997ff",
            },
          },
        },
        {
          ".color-container": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            backgroundColor: "#42424570",
            padding: "16px",
            "--tw-backdrop-blur": "blur(8px)",
            "-webkit-backdrop-filter":
              "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
            "backdrop-filter":
              "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
          },
        },
        {
          ".size-btn-container": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            borderRadius: "9999px",
            backgroundColor: "#42424570",
            padding: "4px",
            "--tw-backdrop-blur": "blur(8px)",
            "-webkit-backdrop-filter":
              "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
            "backdrop-filter":
              "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
          },
        },
        {
          ".size-btn": {
            display: "flex",
            height: "40px",
            width: "40px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            backgroundColor: "#fff",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000",
            "transition-property": "all",
            "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transition-duration": "150ms",
          },
        },
        {
          ".common-padding": {
            padding: "80px 20px",
            "@media (min-width: 640px)": {
              padding: "128px 40px",
            },
          },
        },
        {
          ".section-heading": {
            marginBottom: "20px",
            "--tw-translate-y": "80px",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            fontSize: "30px",
            lineHeight: "36px",
            fontWeight: "500",
            color: "#86868b",
            opacity: "0",
            "@media (min-width: 768px)": {
              fontSize: "48px",
              lineHeight: "1",
            },
            "@media (min-width: 1024px)": {
              marginBottom: "0",
              fontSize: "60px",
              lineHeight: "1",
            },
          },
        },
        {
          ".feature-text": {
            maxWidth: "448px",
            "--tw-translate-y": "100px",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: "600",
            color: "#86868b",
            opacity: "0",
            "@media (min-width: 768px)": {
              fontSize: "20px",
              lineHeight: "28px",
            },
          },
        },
        {
          ".feature-text-container": {
            marginTop: "40px",
            width: "100%",
            flexDirection: "column",
            gap: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (min-width: 768px)": {
              marginTop: "64px",
              flexDirection: "row",
            },
          },
        },
        {
          ".feature-video": {
            height: "100%",
            width: "100%",
            "--tw-scale-x": "1.5",
            "--tw-scale-y": "1.5",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            objectFit: "cover",
            objectPosition: "center",
            opacity: "0",
          },
        },
        {
          ".feature-video-container": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "20px",
            "@media (min-width: 768px)": {
              flexDirection: "row",
            },
          },
        },
        {
          ".link": {
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#2997ff",
            opacity: "0",
            "--tw-translate-y": "80px",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            cursor: "pointer",
            "&:hover": {
              textDecorationLine: "underline",
            },
          },
        },
        {
          ".control-btn": {
            marginLeft: "16px",
            borderRadius: "9999px",
            backgroundColor: "#42424570",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "--tw-backdrop-blur": "blur(8px)",
            "-webkit-backdrop-filter":
              "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
            "backdrop-filter":
              "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
          },
        },
        {
          ".hero-title": {
            textAlign: "center",
            fontSize: "30px",
            lineHeight: "36px",
            fontWeight: "600",
            color: "#94928d",
            opacity: "0",
            "@media not all and (min-width: 768px)": {
              marginBottom: "40px",
            },
          },
        },
        {
          ".hiw-title": {
            textAlign: "center",
            fontSize: "36px",
            lineHeight: "40px",
            fontWeight: "600",
            "@media (min-width: 768px)": {
              fontSize: "72px",
              lineHeight: "1",
            },
          },
        },
        {
          ".hiw-subtitle": {
            paddingTop: "40px",
            paddingBottom: "40px",
            textAlign: "center",
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: "600",
            color: "#86868b",
            "@media (min-width: 768px)": {
              fontSize: "24px",
              lineHeight: "32px",
            },
          },
        },
        {
          ".hiw-video": {
            position: "absolute",
            height: "90%",
            width: "95%",
            overflow: "hidden",
            borderRadius: "56px",
          },
        },
        {
          ".hiw-text-container": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyBetween: "space-between",
            gap: "96px",
            "@media (min-width: 768px)": {
              flexDirection: "row",
            },
          },
        },
        {
          ".hiw-text": {
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: "400",
            color: "#86868b",
            "@media (min-width: 768px)": {
              fontWeight: "600",
            },
          },
        },
        {
          ".hiw-bigtext": {
            marginTop: "8px",
            marginBottom: "8px",
            fontSize: "30px",
            lineHeight: "36px",
            fontWeight: "400",
            color: "#fff",
            "@media (min-width: 768px)": {
              fontWeight: "600",
              fontSize: "48px",
              lineHeight: "1",
            },
          },
        },
        {
          ".video-carousel_container": {
            position: "relative",
            height: "35vh",
            width: "88vw",
            "@media (min-width: 640px)": {
              height: "50vh",
              width: "70vw",
            },
            "@media (min-width: 768px)": {
              height: "70vh",
            },
          },
        },
        {
          ".g_fadeIn": {
            "--tw-translate-y": "100px",
            transform:
              "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            opacity: "0",
          },
        },
      ]);
    }),
  ],
};
