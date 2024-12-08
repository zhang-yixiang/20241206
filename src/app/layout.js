import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";
import {ToastContainer} from "react-toastify";
import {ROOT_META} from "@/app/config/page-meta";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const tiempos = localFont({
  src: './fonts/tiempos-headline-light.woff2',
  variable: "--font-tiempos",
  // weight: "400",
});

export const metadata = {
  ...ROOT_META,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tiempos.variable} ${inter.variable} antialiased`}
      >
      <ToastContainer/>
      {children}
      </body>
    </html>
  );
}
