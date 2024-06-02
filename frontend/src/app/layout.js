import Header from '../../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/Header.css'
import '../../styles/Home.css'
import '../../styles/cards.css'
import Footer from '../../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TASTROVALdz',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
