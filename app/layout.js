import "./globals.css"
import { Suspense } from "react"

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio showcasing projects and contact information.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
