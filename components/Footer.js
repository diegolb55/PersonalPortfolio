import styles from "@/styles/Footer.module.css"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import { IoTriangleOutline } from "react-icons/io5"

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.socials}>
                <BsGithub />
                <BsLinkedin />
            </div>
            <div className={styles.arrows}>
                <IoTriangleOutline className={styles.a1}/>
                <IoTriangleOutline className={styles.a2}/>
            </div>
        </div>

    )
}