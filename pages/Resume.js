import NavBar from "@/components/NavBar"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

import styles from "../styles/Resume.module.css"


export default function Resume(){
    return (
        <div>
            <NavBar/>

            {/* main content */}
            <div className={styles.rinfo}>
                <h2>Diego Lugo Bendezú</h2>
                <h3>Education</h3>
                <div>
                    <div>
                        <p>University of Puerto Rico</p>
                        <p>Mayaguez</p>
                    </div>
                    <div>
                        <p>Bachelor of Software Engineering</p>
                        <p>Graduation Date: 2025</p>
                    </div>
                    <ul>
                        <li><p>GPA: 3.11 </p></li>
                        <li><p>Relative coursework: Data Structures, Advanced Programming I, Advanced Programming II, Programming Languages, Intro to Software Engineering, Software Engineering Requirements, Fundamentals of Computing, Algorithm Design and Analysis.</p></li>
                    </ul>
                </div>

                <h3>Projects</h3>
                <p>Personal Projects</p>
                <div>
                    <p>Project title</p>
                    <p>Project date</p>
                </div>
                <li><p>Project description</p></li>

                <p>Group Projects</p>
                <div>
                    <p>Project title</p>
                    <p>Project date</p>
                </div>
                <li><p>Project description</p></li>

                <h3>Skills & Interests</h3>
                <p>Skills</p>
                <li>Languages: Pyton, C++, Java, JavaScript, HTML5, CSS, SCSS</li>
                <li>Libraries: Git, GitHub, VS Code, Firebase</li>
                <li>Frameworks: Next js, Scrum</li>

                <p>Interests: Progressive Web Apps, Relational Databases, NoSQL Databases, Transactions, Web Security, IoT Technology and Infrastructure, IoT Devices</p>
                
            </div>

            <Contact />
            <Footer contrast={true}/>
        </div>
    )
}