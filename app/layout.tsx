import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Layout/Header";
import Aoscompo from "../utils/aos";
const font = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  );
}
