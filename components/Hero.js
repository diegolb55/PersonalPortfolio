import styles from "@/styles/Hero.module.css"
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Hero(){

    
    const variant = {
     
        color:{
            color: ["rgba(133,164,220,1)", "rgba(207, 220, 133, 1)"],
            
            transition: {
                yoyo: Infinity,
                duration: 5
            } 
        }
    }
    return (
        <div className={styles.hero}>

            <div className={styles.tbox}>
                <div className={styles.tiny}>
                    <Image src={"/images/tinydiamond.png"}
                        fill
                        style={{objectFit:"cover"}}
                        alt=""
                    />
                </div>
                <p>Hi👋, I am Diego Lugo Bendezu,</p>
                <h1>
                    Freelance Web Developer <br/>and 
                    Software Engineering <br/>student.
                </h1>
                <h3>
                    I <motion.span className={styles.highlight}
                    
                            animate={"color"}
                            variants={variant}

                            >design</motion.span> and 
                            <motion.span className={styles.highlight} animate={"color"}
                            variants={variant}> code </motion.span> pleasant <br/> things.
                    I <motion.span className={styles.highlight} animate={"color"}
                            variants={variant}> love </motion.span> what I do. 
                </h3>
            </div>

            <div className={styles.canvas}>
                <Image src={"/images/diamonds.png"} 
                fill
                style={{objectFit:"contain"}}
                alt=""
                />
            </div>

        </div>
    )
}