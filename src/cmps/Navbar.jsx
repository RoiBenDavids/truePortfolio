import { motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { setToBack, setToContacts } from '../store/actions';

function _Navbar(props) {
    const [arrowPos, setArrowPos] = useState({ top: '75%', left: '50%' })
    const [contactPos, setContactPos] = useState({ top: '50px', right: '50px', visibility: 'hidden' })
    const { toContAnim, exit } = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    const transition = { type: "spring", damping: 10, duration: 0.5 }
    const pos1={ visibility: 'visible',opacity:1,top:'40%',right:'40%',fontSize:'50px' }
    const pos2={ visibility: 'visible',opacity:1 ,top:'50px',right:'50px'}

    function goBack() {
        if (props.location.pathname === '/' || props.location.pathname === '/projects') {
            dispatch(setToBack())
            props.history.push('/stack')
        }

        else {
            dispatch(setToBack())
            props.history.goBack()
        }
    }
    const goToCont = () => {
        dispatch(setToContacts())
        props.history.push('/contacts')
    }
    useEffect(() => {
        if (props.location.pathname === '/') {
            setArrowPos({ top: '75%', left: '40%' })
            setContactPos({ ...pos2,visibility: 'hidden',opacity:0 })
        }
        else if(props.location.pathname === '/contacts'){
            setContactPos(pos1)

        }
        else {
            setArrowPos({ top: '50px', left: '50px', transform: 'rotateZ(-630deg)' })
            setContactPos(pos2)
        }

    }, [props.location.pathname])
    console.log(contactPos);
    
    return (
        <section className="navbar ">
            <i onClick={goBack} style={arrowPos} className="fas fa-arrow-alt-circle-down"></i>
            <i onClick={goToCont} style={contactPos}  className="flex align-center justify-center fas fa-id-card"></i>
        </section>
    )
}

export const Navbar = withRouter(_Navbar);