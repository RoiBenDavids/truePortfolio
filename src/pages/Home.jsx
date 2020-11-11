import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

export function Home() {
    const { toContAnim, exit } = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    const exitAnim= toContAnim? exit:{opacity: 0, y: -100}
    return (
        <section className="home flex column align-center justify-center">
            <motion.div
                exit={exitAnim}
                transition={transition}
                className="home-header">
                <h3>
                    Roi Ben David
                </h3>
            </motion.div>
            <motion.div
                exit={exitAnim}
                transition={transition}
                className="changer-container flex">
                <ul>
                    <li>
                        <h3>Full stack</h3>
                    </li>
                    <li>
                        <h3>Frontend</h3>
                    </li>
                </ul>
                <h3>Developer</h3>
            </motion.div>
            <motion.div
                exit={exitAnim}
                transition={transition}
                className="home-footer">
                < h3>
                    Tel Aviv,IS
                </h3>
            </motion.div>
            {/* <Link to="/stack">
                <motion.i
                    exit={{ left:50,top:50,rotateZ:720}}
                    transition={transition}
                    className="fas fa-arrow-alt-circle-down"></motion.i>
            </Link> */}

        </section>
    )
}