import localFont from "next/font/local";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import {ThemeProvider} from "@/components/ThemeProvider";
import "./globals.css";


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

export const metadata = {
  title: "Daniyal Faraz | Portfolio",
  description: "Personal website of Daniyal Faraz",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <AdminPanelLayout>{children}</AdminPanelLayout>
      </ThemeProvider>
      </body>
      </html>

  );
}