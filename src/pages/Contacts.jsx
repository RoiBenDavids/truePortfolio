
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProjectList } from '../cmps/ProjectList';

export function Contacts() {
    const transition = { type: "spring", damping: 10, duration: 0.5 }
    const main = useAnimation()
    const fb = useAnimation()
    const li = useAnimation()
    const mail = useAnimation()
    const phone = useAnimation()
    const git = useAnimation()
    useEffect(() => {
        // main.start({
        //     x: 0,
        //     y: 0
        // })
        // setTimeout(() => {
        fb.start({ y: -140, x: -100, opacity: 1 })
        li.start({ y: -60, x: -150, opacity: 1 })
        mail.start({ y: -140, x: 100, opacity: 1 })
        phone.start({ y: -180, opacity: 1 })
        git.start({ y: -60, x: 150, opacity: 1 })
        // }, 1500)
    }, [])
    return (
        <section
            className="contacts">
            <motion.a
                initial={{ opacity: 0 }}
                transition={transition}
                animate={fb}
                exit={{ x: 0, y: 0, opacity: 0 }}
                href="https://www.facebook.com/BenDavidRoi/">
                <i class="fab fa-facebook-square" />
            </motion.a>
            <motion.a initial={{ opacity: 0 }}
                transition={transition}
                animate={li}
                exit={{ x: 0, y: 0, opacity: 0 }}
                href="https://www.linkedin.com/in/roi-ben-david-8000981b9">
                <i class="fab fa-linkedin" />
            </motion.a>
            <motion.a
                initial={{ opacity: 0 }}
                transition={transition}
                animate={mail}
                exit={{ x: 0, y: 0, opacity: 0 }}
                href="mailto:bendaroi@gmail.com">
                <motion.i class="fas fa-at" />
            </motion.a>
            <motion.i
                initial={{ opacity: 0 }}
                transition={transition}
                animate={phone}
                exit={{ x: 0, y: 0, opacity: 0 }}
                class="fas fa-phone-square-alt" />
            <motion.a
                initial={{ opacity: 0 }}
                transition={transition}
                animate={git}
                exit={{ x: 0, y: 0, opacity: 0 }}
                href="https://github.com/RoiTheOne">
                <i class="fab fa-github" />
            </motion.a>

        </section>
    )
}