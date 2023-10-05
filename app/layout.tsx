import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'form2Sheets',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={`bg-gray-800 text-gray-100 py-4 ${inter.className} px-3`}>
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">form2Sheets</h1>
            <ul className="flex space-x-4">
              <li><a href="#how-it-works" className='hidden sm:flex text-gray-300'>How it works</a></li>
              <li><a href="#why-choose-us" className='hidden sm:flex text-gray-300'>Why Choose Us</a></li>
              <li><a href="#get-started" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Get Started</a></li>
            </ul>
          </nav>
        </header>{children}
        <footer className={`bg-gray-900 text-gray-300 py-4 text-center ${inter.className}`}>
          Made with <span className="text-red-500">&hearts;</span> in India
        </footer>
      </body>
    </html>
  )
}
