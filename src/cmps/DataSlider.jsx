import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Transition, SwitchTransition } from 'react-transition-group';

export function DataSlider({ data }) {
    const [item, setItem] = useState(0);
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
 

    useEffect(() => {
        const interval = setInterval(() => setItem(i => i + 1 === data.length ? 0 : i + 1), 5000)
        return () => clearInterval(interval)
    }, [])
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
         className="data-slider ">
                <p >
                    {data[item]}
                </p>
                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>
        </motion.div>


    )
}