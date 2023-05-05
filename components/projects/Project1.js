
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
            background={["transparent", "gray"]}
        >

            <p className={styles.title}>{data?.name}</p>
            <p className={styles.description}>{data?.description}</p>
{/* 
            <ClosedContent isOpen={widgetControl?.current[`${data?.name}`]} 
            >
                <div className={styles.closedContent}>
                </div>      
            </ClosedContent> */}
           
            <OpenContent isOpen={widgetControl?.current[`${data?.name}`]} >
                <div className={styles.openContent}>
                    <p onClick={(e)=> {
                            e.stopPropagation();
                            openWidget(data.name, false);
                    }}>exit</p>
                </div>  
            </OpenContent>
        </WidgetPro>
    )
}