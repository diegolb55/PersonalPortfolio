
import { useState } from "react"
import Image from "next/image"

import styles from "@/styles/Project1.module.css"
import WidgetPro from "./WidgetPro"
import ClosedContent from "./ClosedContent"
import OpenContent from "./OpenContent"

export default function Project1({ widgetControl, openWidget, data}){


    return (
        <WidgetPro
            isOpen={widgetControl?.current[`${data.name}`]}
            name={data?.name}
            openWidget={openWidget}
            height={150}
            width={"40vw"}
            maxwidth={200}
            background={["black", "gray"]}
        >
            <ClosedContent isOpen={widgetControl?.current[`${data?.name}`]} 
            >
                <div className={styles.closedContent}>
                    <h3>{ data?.name }</h3>
                </div>      
            </ClosedContent>
           
            <OpenContent isOpen={widgetControl?.current[`${data?.name}`]} >
                <div className={styles.openContent}>
                    <p onClick={(e)=> {
                        e.stopPropagation();
                        openWidget(data.name, false);
                    }}>{ data?.name }</p>
                </div>  
            </OpenContent>
        </WidgetPro>
    )
}