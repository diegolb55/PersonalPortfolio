import styles from "@/styles/NavBar.module.css"
import Link from "next/link"

export default function NavBar(){

    return (
        <div className={styles.bar}>
            <Link href="./">
                <div className={styles.logo}></div>
            </Link>
            <div>
                <Link href="./Resume">
                    <p>Resume</p>
                </Link>
                <button>Say Hello!</button>
            </div>
        </div>
    )
}