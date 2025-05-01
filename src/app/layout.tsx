import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mortgage repayment calculator",
  description: "",
  icons: {
    icon: '/icon-calculator.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
