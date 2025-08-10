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

const fadeInStyle = (index) => ({
  opacity: isVisible[index] ? 1 : 0,
  transition: "opacity 0.5s ease-in",
  color: "var(--primary)",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lora.variable}>
        <body>{children}</body>
    </html>
  );
}
