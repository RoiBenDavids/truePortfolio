import React, { useState } from 'react';
import { stackList } from '../service';
import { StackPreview } from './StackPreview';
import { animate, motion, useAnimation } from "framer-motion";

const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

export function StackList() {
    const [list , setList]= useState(stackList)

    return (
        <motion.ul
            // initial={{ rotateZ: 250 }}
            exit={{ opacity: 0, y: -100 }}
            // animate={{ rotateZ: 0 }}
            transition={transition}
            className="stack-img-list">
            {list.map((stack,idx) => {
                return <motion.li
                    initial={{ x: stack.pos*20,y:stack.pos}}
                    animate={{ x: 0 ,y:0}}
                    transition={transition}
                    key={idx}><StackPreview stack={stack} /></motion.li>
            })}

        </motion.ul>
    )
}