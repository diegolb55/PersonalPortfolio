
import { useState } from "react"
import Image from "next/image"

import styles from "@/styles/Project1.module.css"
import WidgetPro from "./WidgetPro"
import ClosedContent from "./ClosedContent"
import OpenContent from "./OpenContent"
import { motion } from "framer-motion"
import {ImCancelCircle} from "react-icons/im"

export default function Project1({ widgetControl, openWidget, data}){


    return (
        <WidgetPro
            isOpen={widgetControl?.current[`${data.name}`]}
            name={data?.name}
            openWidget={openWidget}
            height={150}
            width={"40vw"}
            maxwidth={200}
            background={["transparent", "#372B2B"]}
        >

            <motion.p className={styles.title}>{data?.name}</motion.p>
            <p className={styles.description}>{data?.description}</p>

            {/* 
            <ClosedContent isOpen={widgetControl?.current[`${data?.name}`]} 
            >
                <div className={styles.closedContent}>
                </div>      
            </ClosedContent> */}
           
            <OpenContent isOpen={widgetControl?.current[`${data?.name}`]} >
                <div className={styles.openContent}>

                    <ImCancelCircle className={styles.exit} onClick={(e)=> {
                            e.stopPropagation();
                            openWidget(data.name, false);
                    }}/>

                    <div className={styles.pimage}>
                        <Image src="" 
                            fill
                            style={{objectFit:"cover"}}
                        />
                    </div>

                    <div className={styles.infob}>
                        <h4>Situation</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam maxime, sed hic in consequuntur odit vel vero exercitationem illum. Ullam autem officiis, provident velit sequi reiciendis iusto iste odio quo?
                        Fugit natus nam perferendis magnam praesentium ratione dolorum officiis quos pariatur illo. Recusandae libero velit, quaerat facilis quae sapiente laudantium? Vero sunt reiciendis temporibus veniam enim eveniet? Quos, pariatur libero!</p>
                    </div>
                    <div className={styles.infob}>
                        <h4>Task</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam reiciendis illum nostrum inventore. Voluptas nobis hic tempore. Cupiditate incidunt, cum nisi sint ratione similique libero veniam eaque nobis quo?</p>
                    </div>
                    <div className={styles.infob}>
                        <h4>Action</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam reiciendis illum nostrum inventore. Voluptas nobis hic tempore. Cupiditate incidunt, cum nisi sint ratione similique libero veniam eaque nobis quo?</p>
                        
                    </div>
                    <div className={styles.infob}>
                        <h4>Result</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam maxime, sed hic in consequuntur odit vel vero exercitationem illum. Ullam autem officiis, provident velit sequi reiciendis iusto iste odio quo?
                        Fugit natus nam perferendis magnam praesentium ratione dolorum officiis quos pariatur illo. Recusandae libero velit, quaerat facilis quae sapiente laudantium? Vero sunt reiciendis temporibus veniam enim eveniet? Quos, pariatur libero!</p>
                    
                    </div>
                </div>  
            </OpenContent>
        </WidgetPro>
    )
}