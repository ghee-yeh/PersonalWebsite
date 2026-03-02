import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata = {
  title: "Guillermo Avelar",
  description: "My personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html className={lora.variable}>
      <body>{children}</body>
    </html>
  );
}
