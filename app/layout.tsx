import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title:{
    template: '%s | Example Blog',
    default:'Example blog'
  },
  description:'A list of example blogs and how to prepare them',
  metadataBase: new URL('https://example-blogzz.vercel.app/')
}

export default function RootLayout({
  children,params
}: Readonly<{
  children: React.ReactNode;
  params:any
}>) { 

  return (
    <html lang="en">
      <body className={inter.className}>
      
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
