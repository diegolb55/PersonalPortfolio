import styles from "@/styles/Skills.module.css"


export default function Skills(){
    return (
        <div className={styles.skills}>
            <p>Tech Skills</p>
            <div>
                <p>Languages</p>
                <p>Python, C++, Java, JavaScript, HTML5, CSS, SCSS</p>
            </div>
            <div>
                <p>Libraries</p>
                <p>Git, GitHub, VS Code, Firebase</p>
            </div>
            <div>
                <p>Frameworks</p>
                <p>Next js, Scrum</p>
            </div>
        </div>
    )
}