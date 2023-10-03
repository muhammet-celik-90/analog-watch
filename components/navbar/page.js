import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.ul}>
                <li>
                    <Link href="/classic" className={styles.link}>Classic</Link>
                </li>
                <li>
                    <Link href="/modern" className={styles.link}>Modern</Link>
                </li>
            </ul>
        </div>
    )
}