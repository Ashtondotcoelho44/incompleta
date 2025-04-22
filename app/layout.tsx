import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Virtual Museum of Unfinished Dreams",
  description: "A platform for abandoned, incomplete, and failed projects that could have been.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <header className="border-b-8 border-black bg-white">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <Link href="/" className="text-2xl font-black mb-4 md:mb-0">
                    VIRTUAL MUSEUM OF <span className="text-red-600">UNFINISHED DREAMS</span>
                  </Link>
                  <nav>
                    <ul className="flex space-x-8 font-bold">
                      <li>
                        <Link href="/" className="hover:underline decoration-4 underline-offset-8 decoration-red-600">
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/explore"
                          className="hover:underline decoration-4 underline-offset-8 decoration-blue-500"
                        >
                          EXPLORE
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/submit"
                          className="hover:underline decoration-4 underline-offset-8 decoration-yellow-400"
                        >
                          SUBMIT
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="border-t-8 border-black bg-black text-white">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">ABOUT THE MUSEUM</h3>
                    <p className="font-mono">
                      The Virtual Museum of Unfinished Dreams celebrates the beauty of incomplete projects and the
                      stories behind them.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">NAVIGATION</h3>
                    <ul className="space-y-2 font-mono">
                      <li>
                        <Link href="/" className="hover:text-red-600">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/explore" className="hover:text-blue-500">
                          Explore
                        </Link>
                      </li>
                      <li>
                        <Link href="/submit" className="hover:text-yellow-400">
                          Submit
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">CONNECT</h3>
                    <p className="font-mono mb-4">Join our community of dreamers and share your unfinished projects.</p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                      >
                        T
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                      >
                        I
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                      >
                        F
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-800 text-center font-mono text-sm">
                  &copy; {new Date().getFullYear()} Virtual Museum of Unfinished Dreams. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
