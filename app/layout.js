import localFont from "next/font/local";
import AdminPanelLayout from "@/Components/admin-panel/admin-panel-layout";
import { ThemeProvider } from "@/Components/ThemeProvider";
import "./globals.css";


const overallFont = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-overall-all",
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
        className={`${overallFont.variable} font-overallFont antialiased`}
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