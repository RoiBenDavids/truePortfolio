export function setToContacts(flag) {
    return (dispatch) => {
        dispatch({type:'SET_CONTACT_TRUE'});
        setTimeout(()=>{
            dispatch({type:'SET_CONTACT_FALSE'});
        },500)
    }
}
export function setToBack(flag) {
    return (dispatch) => {
        dispatch({type:'SET_BACK_TRUE'});
        setTimeout(()=>{
            dispatch({type:'SET_BACK_FALSE'});
        },500)
    }
}
export function setMediaQ(mediaQ) {
    console.log(mediaQ);
    return (dispatch) => {
        dispatch({type:'SET_MEDIAQ',action:mediaQ});
    }
}
