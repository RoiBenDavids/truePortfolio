import React, { useState } from 'react';
import { projList } from '../service';
import { ProjectPreview } from './ProjectPreview';
import { animate, AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProjectList() {
    const { toContAnim, exit, toBackAnim } = useSelector(state => state.reducer)
    const [list, setList] = useState(projList)
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
    function onChoose(chosenProj) {
        chosenProj.isChosen = true;
        const newList = list.map(proj => {
            if (proj.id === chosenProj.id) return chosenProj
            proj.isChosen = false;
            return proj
        })
        setList(newList)
    }
    const className = 'flex column align-center justify-around '
    return (
        <motion.ul
            initial={false}
            layout
            className="proj-list">
            {list.map((proj, idx) => {
                return <motion.li
                    // initial={{ x: proj.pos*20,y:proj.pos}}
                    // animate={{ x: 0 ,y:0}}
                    transition={transition}
                    exit={toContAnim||toBackAnim?exit: proj.isChosen?{}:{opacity:0}}
                    layout
                    transition={transition}
                    onClick={() => onChoose(proj)}
                    className={proj.isChosen ? className + 'chosen' : className}
                    key={idx}>
                    {/* <Link to={`/projects/${proj.id}`}> */}
                        <ProjectPreview proj={proj} />
                    {/* </Link> */}
                </motion.li>
            })}

        </motion.ul>
    )
}