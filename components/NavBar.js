import styles from "@/styles/NavBar.module.css"
import Link from "next/link"
import Image from "next/image"

export default function NavBar(){

    return (
        <div className={styles.bar}>
            <Link href="./">
                <div className={styles.logo}>
                    <Image src="/images/logo1.png" fill style={{objectFit:"fill"}}>

                    </Image>
                </div>
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