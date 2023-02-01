import styles from "@/styles/Contact.module.css"

export default function Contact(){
    return (
        <div className={styles.contact}>
            <p>Contact</p>

            <form action={`https://formsubmit.co/diegolugobendezu@gmail.com`} 
            
                method="POST"
                className={styles.form}
            >
                <p>
                    Don&apos;t hesitate to use the following form
                    if you have any questions or interesting 
                    projects for me.  

                    <br/><br/>
                    I usually reply within 24 hours.  
                </p>

                <div>
                    <input type="text" name="name" placeholder="name" required/>
                    <input type="text" name="email" placeholder="email" required/>
                    <input type="text" name="_subject" placeholder="subject"/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="message" required>

                    </textarea>
                    <button>submit</button>
                </div>
            </form>

        </div>
    )
}