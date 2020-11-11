import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProjectList } from '../cmps/ProjectList';

export function Projects() {
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
    const { toContAnim, exit, toBackAnim } = useSelector(state => state.reducer)
    return (
        <section className="projects flex column align-center justify-center">
            <div className="header">
                <motion.h1
                    transition={transition}
                    exit={toBackAnim || toContAnim ? exit : {x:0}}
                >Projects</motion.h1>
            </div>
            <ProjectList />

        </section>
    )
}