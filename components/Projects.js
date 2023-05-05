import styles from "@/styles/Projects.module.css"
import Project1 from "@/components/projects/Project1"
import { useState, useRef } from "react";
import { ProjectData } from "./projects/ProjectData";

export default function Projects(){

    const [, forceRender] = useState(Date.now());
    const data = ProjectData;
    
    /**
     * widget's open/closed values to be evaluated by
     * corresponding widget component
     * 
     */
    const widgetControl = useRef({
        project1: false,
        project2: false,
        project3: false,
        project4: false
       
    });

    const openWidget = (name, state) => {
        switch(name){
            case "project1":
                widgetControl.current.project1 = state ? true : false;
                break;
            case "project2":
                widgetControl.current.project2 = state ? true : false;
                break;
            case "project3":
                widgetControl.current.project3 = state ? true : false;
                break;
            case "project4":
                widgetControl.current.project4 = state ? true : false;
                break;
            default:
                break;    
        };

        /**
         * Rendering index and widget pages again, so that 
         * the pages evaluate the updated ref value and change accordingly. 
         */
        if(state){
            setTimeout(()=>{
            forceRender(Date.now());
            }, 50)
        }else{
            forceRender(Date.now());
        }
    }

  
    return (
        <div className={styles.projects}>
            <p>Portfolio</p>
            <p>
                Here is a selection of projects 
                I have worked on in the recent years. 
                Please 
                <span className={styles.contactme}> contact me </span>
                 if you&apos;re interested 
                in a longer list.
            </p>

            <div className={styles.plist}>

                <div className={styles.pbox}>
                    <Project1 widgetControl={widgetControl} openWidget={openWidget} data={data.project1}/>
                </div>
                <div className={styles.pbox}>
                    <Project1 widgetControl={widgetControl} openWidget={openWidget} data={data.project2}/>
                </div>
                <div className={styles.pbox}>
                    <Project1 widgetControl={widgetControl} openWidget={openWidget} data={data.project3}/>
                </div>
                <div className={styles.pbox}>
                    <Project1 widgetControl={widgetControl} openWidget={openWidget} data={data.project4}/>
                </div>



            </div>
        </div>
    )
}