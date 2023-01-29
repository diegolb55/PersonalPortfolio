import styles from "@/styles/Hero.module.css"
import Image from 'next/image'


export default function Hero(){
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
                    I <span className={styles.highlight}>design</span> and <span className={styles.highlight}>code</span> pleasant <br/> things.
                    I <span className={styles.highlight}>love</span> what I do. 
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