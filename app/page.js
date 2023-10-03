
import styles from './page.module.css'
import Navbar from '../components/navbar/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Analog Watch</h1>
      <Navbar/>
    </main>
  )
}
