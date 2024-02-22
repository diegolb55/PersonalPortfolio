import { useEffect, useState } from 'react';
import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NavBar({ containerRef }) {
    const [isVisible, setIsVisible] = useState(true); // Initially, navbar is visible
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        
        const handleScroll = () => {
            // Get the current scroll position of the container
            const currentScrollPos = container.scrollTop;

            // If the current scroll position is less than the previous one, it means scrolling up
            if (currentScrollPos < prevScrollPos || currentScrollPos === 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef, prevScrollPos]);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '-100%' } // Slide navbar up when hidden
    };

    return (
        <motion.div className={styles.bar}
            variants={variants}
            animate={isVisible ? "visible" : "hidden"}
        >
            <Link href="./">
                <div className={styles.logo}>
                    <Image src="/images/logo1.png" fill style={{ objectFit: "fill" }} />
                </div>
            </Link>
            <div>
                <Link href="./Resume">
                    <p>Resume</p>
                </Link>
                <button>Say Hello!</button>
            </div>
        </motion.div>
    );
}
