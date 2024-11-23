import localFont from "next/font/local";
import "./globals.css";
import { Inter, Merriweather, Open_Sans, Playfair_Display } from 'next/font/google';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-merriweather'
});
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans'
});
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata = {
  title: "Dua Ruqyah",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${merriweather.variable} ${openSans.variable} ${playfair.variable} antialiased bg-background`}
      >
        
        {children}
      </body>
    </html>
  );
}
