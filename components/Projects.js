import styles from "@/styles/Projects.module.css"

export default function Projects(){

    return (
        <div className={styles.projects}>
            <p>Portfolio</p>
            <p>
                Here is a selection of projects 
                I have worked on in the recent years. 
                Please 
                <span className={styles.contactme}> contact me </span>
                 if you're interested 
                in a longer list.
            </p>

            <div className={styles.plist}>
                <div className={styles.pbox}></div>
                <div className={styles.pbox}></div>
                <div className={styles.pbox}></div>
                <div className={styles.pbox}></div>

            </div>
        </div>
    )
}