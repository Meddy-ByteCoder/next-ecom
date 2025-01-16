import localFont from "next/font/local";
import "../styles/helper.scss";
import "../styles/globals.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import getDevice from "services/getDevice";

export const roboto = localFont({
  variable: "--font-roboto",
  src: [
    {
      path: "../fonts/RobotoRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/RobotoMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/RobotoBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const nohemi = localFont({
  variable: "--font-nohemi",
  src: [
    {
      path: "../fonts/Nohemi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Home Page",
  description:
    "Electronics shop: Choose from a wide range of mobiles, washing machine, camera, laptop &amp; many more from the top brands &amp; get exciting deals &amp; offers only at Vijay Sales.",
};

export default async function RootLayout({ children }) {
  const isMobile = await getDevice();

  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${nohemi.variable} ${roboto.variable}`}
      >
        <Header isMobile={isMobile} />
        <div className="app-wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
