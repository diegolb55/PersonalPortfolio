import styles from "@/styles/Widget.module.css"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

import HeightHandler from "@/util/heightHandler";

export default function WidgetPro(props){

    /**
     * isOpen: widgetControl ref value
     * name: widget name
     * openWidget: func to toggle widget state
     * height, width , maxWidth: closed state element dimensions
     * children: other components, OpenContent / ClosedContent
     * 
     */
    const {
        isOpen, name, openWidget, 
        background,
        height, width, maxwidth, 
        children } = props;
    

    
    // forces react state render
    const [, forceRender] = useState(new Date())

    // widget open / closed state
    // allows toggle and delays in animations
    const [wopen, setWOpen] = useState(false);

    // retrieves browser window's inner height
    const heighthandler = new HeightHandler();
    let windowH =  heighthandler.windowHeight;
   
    // reference to current dimensions in relation to 
    // browser windows inner height.
    const currentPos = useRef({
        top:0,
        left:0,
    })

    // widget refenence
    const widget = useRef();

    /**
     *  Null check and validation for widget cover ref
     * if isOpen, then get element dimensions in relation
     * to browser window
     * 
     * sets currentPos ref to updated position values
     * sets wopen state to true
     * no scrolling
     */
    useEffect(() => {
        if(typeof widget.current != 'undefined'){
            if(isOpen){
                currentPos.current.top = widget.current.getBoundingClientRect().top;
                currentPos.current.left = widget.current.getBoundingClientRect().left;
                setWOpen(true);
                toggleScrolling(false)
            }
            else {
                setTimeout(()=>{
                    setWOpen(false);
                    toggleScrolling(true)
                }, 600)
            }
        }
           

    }, [isOpen]);

    /**
     * document type null check,
     * disables / enables document scroll
     */
    function toggleScrolling(isEnabled) {
        if (isEnabled) {
          // Enable scrolling
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
          document.removeEventListener("touchmove", preventDefault, { passive: false });
        } else {
          // Disable scrolling
          document.body.style.overflow = "hidden";
          document.documentElement.style.overflow = "hidden";
          document.addEventListener("touchmove", preventDefault, { passive: false });
        }
    }
      
    function preventDefault(e) {
        e.preventDefault();
    }
    // toggleScrolling(false)
    // styling variants and transitions for open / closed widget state
    let cvariants = {
        open:{
            zIndex: 11,
            // background: background[1],
            height: windowH,
            width: "100vw",
            maxWidth: "none",


            position: "fixed",
            top: [currentPos.current.top, 0],
            left: [currentPos.current.left, 0],
        },
        closed:{
            zIndex : wopen ? 11 : 10,
            // background: "transparent",
            height: height,
            width: width,
            maxWidth: wopen ? "none" : ( maxwidth ? maxwidth: 250 ),

            position: wopen ? "fixed" : "relative",
            top: wopen ? [0, currentPos.current.top] : [0, 0],
            left: wopen ? [0, currentPos.current.left] : [0, 0],
        }
    }
    
   

    function handleOrientation (e){
        if(e.matches) {
            // Portrait mode
            forceRender(new Date())
        } else {
            // Landscape
            forceRender(new Date())
        }
    }

    let portrait = 'undefined';
    useEffect(()=>{
        if ( typeof window !== 'undefined'){
            portrait = window.matchMedia("(orientation: portrait)");

            portrait.addEventListener("change", function (e){handleOrientation(e)});
        }
        return () => {
            portrait.removeEventListener("change",function (e){handleOrientation(e)})
        }
    }, [])




    return (
        <div >
            <motion.div  
                className={`${styles.widgetCover} `}
                variants={cvariants}
                animate={
                    isOpen ? "open" : "closed"
                    
                }
                transition={{duration: .5}}
                
                ref={widget}  
            >
                <motion.div className={`${styles.widget} ${ styles.relative }`} // ${ styles.absolute }
                    animate={{
                        background: isOpen ? background[1] : background[0],
                        borderRadius: isOpen ? 0 : 15,
                        border: isOpen ? "none" : "2px solid gray",
                        boxShadow: isOpen ? "none" : "2px -2px 15px 2px rgba(114,196,145,0.75)",
                        overflow: isOpen ? "scroll" : "hidden",
                       

                    }}
                    onClick={ () => {
                        openWidget(name, true)
                    } }   
                >

                    { children }

                </motion.div>
            </motion.div>   
        </div>
        
            
        
    )
}