import React from 'react';
import { motion } from 'framer-motion';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import { useSelector } from 'react-redux';

export function StackChart({ stack }) {
    const { mediaQ } = useSelector(state => state.reducer)
    const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };
    const data = [
        {
            "subject": "JS",
            "A": 90,
            "fullMark": 100
        },
        {
            "subject": "CSS",
            "A": 80,
            "fullMark": 100
        },
        {
            "subject": "React",
            "A": 95,
            "fullMark": 100
        },
        {
            "subject": "Vue",
            "A": 70,
            "fullMark": 100
        },
        {
            "subject": "NodeJS",
            "A": 80,
            "fullMark": 100
        },
        {
            "subject": "Design",
            "A": 80,
            "fullMark": 100
        },
        {
            "subject": "Commitment",
            "A": 100,
            "fullMark": 100
        }
    ]
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={transition}
        exit={{opacity:0}}
        className="stack-chart">
            <RadarChart outerRadius={90} width={mediaQ?400:960} height={mediaQ?180:250} data={data} >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="#fff" fill="#fff"  />
                <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </motion.div>

    )
}