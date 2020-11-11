import { motion } from 'framer-motion';
import React,{ useState }  from 'react';

export function StackPreview({stack}){
    return(
            <img 
            className={stack.isLit?'on':''} src={stack.url}></img>
              
    )
}