import styles from "@/styles/NavBar.module.css"

export default function NavBar(){

    return (
        <div className={styles.bar}>
            <div></div>
            <div>
                <p>Resume</p>
                <button>Say Hello!</button>
            </div>
        </div>
    )
}