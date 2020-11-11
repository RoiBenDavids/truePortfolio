import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StackChart } from '../cmps/StackChart';
import { StackList } from '../cmps/StackList';

export function Stack() {
    const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
    const { toContAnim, exit, toBackAnim } = useSelector(state => state.reducer)
    const [page, setPage] = useState('list')

    return (
        <section className="stack flex column justify-center">
            <motion.h1
                initial={{ fontSize: '1rem', opacity: 0 }}
                animate={{ fontSize: '3rem', opacity: 1 }}
                exit={{ fontSize: '1rem', opacity: 0, rotateZ: -360, x: 200 }}
                transition={transition}
            >
                My Stack
            </motion.h1>
            <ul
                className="stack-bar flex justify-center">
                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, rotateZ: 360, x: -200 }}
                    transition={transition}
                    onClick={() => setPage('list')}>
                    List
                </motion.li>
                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, rotateZ: 360, x: -200 }}
                    transition={transition}
                    onClick={() => setPage('graph')}>
                    Graph
                </motion.li>
                <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={toBackAnim|| toContAnim ? exit : { x: -80, y: -82, fontSize: '48px' }}
                    transition={transition}
                >
                    <Link to="/projects">Projects</Link>
                </motion.li>
                <motion.div
                exit={{ opacity: 0 }}
                transition={transition} 
                className={page === 'graph' ? 'ball jump' : 'ball'}></motion.div>
            </ul>
            <div className="stack-content">
                {page === 'list' ? <StackList /> : <StackChart />}
            </div>


        </section>
    )
}