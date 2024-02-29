import { M_PLUS_1p } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const m_PLUS_1p = M_PLUS_1p({
  subsets: ["latin"],
  //midium bold
  weight: ["400", "500", "700"],
});


export const metadata = {
  title: "fromB",
  description: "fromB Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${m_PLUS_1p.className}`}>{children}</body>
    </html>
  );
}
