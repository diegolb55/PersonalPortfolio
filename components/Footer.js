import styles from "@/styles/Footer.module.css"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import { IoTriangleOutline } from "react-icons/io5"
import { useRef } from "react"
import Link from "next/link"

export default function Footer(){

    const goToTop = () => {
        if( typeof window !== 'undefined'){
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }

    return (
        <div className={styles.footer}>
            <div className={styles.socials}>
                <Link href={"https://github.com/diegolb55"}>
                    <BsGithub />
                </Link>
                <Link href={"https://www.linkedin.com/in/diegolugobd/"}>
                    <BsLinkedin />
                </Link>
            </div>
            <div className={styles.arrows} >
                <IoTriangleOutline className={styles.a1} onClick={()=>goToTop()}/>
                <IoTriangleOutline className={styles.a2} onClick={()=>goToTop()}/>
            </div>
        </div>

    )
}