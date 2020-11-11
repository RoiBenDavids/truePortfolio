import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { projList } from '../service';
import { DataSlider } from './DataSlider';

export function ProjectDetails({ location }) {
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
    const [proj, setProj] = useState(null)
    const { toContAnim, exit, toBackAnim } = useSelector(state => state.reducer)
    useEffect(() => {
        loadProj()
    }, [])

    function loadProj() {
        const id = location.pathname.split('/')
        console.log(id[id.length - 1]);
        const proj = projList.filter(proj => proj.id == id[id.length - 1])
        setProj(proj[0])
    }
    if (!proj) return <div>
    </div>
    console.log(proj.FE);

    return (
        <motion.div className="projects projects-detail flex column align-center justify-center">
            <motion.h1
                transition={transition}
                exit={toContAnim ? exit : {}}
            >Projects</motion.h1>
            <ul className="proj-details-list">
                <li className="title flex align-center">
                    <motion.h2
                        initial={{ x: -40, y: -40, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1.2 }}
                        transition={transition}
                        exit={toContAnim ? exit : { x: -60, y: -20, opacity: 0, scale: 1 }}
                    >{proj.name}</motion.h2>
                </li>
                <li className="flex align-center">
                    <DataSlider data={[proj.desc, proj.extra]} />
                </li>
                <li className="img">
                    <a href={proj.url}><motion.img
                        initial={{ height: '100px', y: -205 }}
                        animate={{ height: '', y: 0 }}
                        transition={transition}
                        exit={toContAnim ? exit : { height: '100px', y: -215 }}
                        src={proj.imgSrc} /></a>
                </li>
                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                    <h2>Frontend</h2>
                    <h4>
                        {proj.FE.map((item,idx)=>{
                        if(idx===proj.FE.length-1) return item
                        return `${item}, `
                    })}</h4>
                    <h2>Backend</h2> 
                    <h4>{proj.BE.map((item,idx)=>{
                        if(idx===proj.BE.length-1) return item
                        return ` ${item}, `
                    })}</h4>
                    <h2>DB</h2>
                    <h4>{proj.DB}</h4>

                </motion.li>
            </ul>
        </motion.div>




    )
}