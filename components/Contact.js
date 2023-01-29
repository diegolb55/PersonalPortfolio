import styles from "@/styles/Contact.module.css"

export default function Contact(){
    return (
        <div className={styles.contact}>
            <p>Contact</p>

            <form action="" className={styles.form}>
                <p>
                    Don't hesitate to use the following form
                    if you have any questions or interesting 
                    projects for me.    
                </p>

                <div>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="subject"/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="message">

                    </textarea>
                    <button>submit</button>
                </div>
            </form>

        </div>
    )
}