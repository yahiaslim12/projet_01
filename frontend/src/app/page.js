import Image from 'next/image'
import styles from './page.module.css'
import Couv from '../../components/home/Couv'
import Init_Pro from '../../components/home/Init_Pro'
import About from '../../components/home/About'
import Cat from '../../components/home/Cat'
import End from '../../components/home/end'
export default function Home() {
  return (
    <main>
       <Couv/>
       <Init_Pro/>
       <About/>
       <Cat/>
       <End/>
    </main>
  )
}
