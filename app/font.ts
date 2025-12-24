import localFont from "next/font/local";

export const grift = localFont({
  src: [
    { path: "../public/fonts/grift/Grift-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/grift/Grift-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/grift/Grift-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/grift/Grift-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/grift/Grift-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/grift/Grift-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/grift/Grift-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/grift/Grift-Black.woff2", weight: "900", style: "normal" },

    { path: "../public/fonts/grift/Grift-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/grift/Grift-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-grift",
  display: "swap",
});
