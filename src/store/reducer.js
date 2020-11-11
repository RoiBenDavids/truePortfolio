
const initialState = {
    toContAnim : false,
    toBackAnim : false,
    exit:{
        opacity:0
    },
    mediaQ:''
}

export default function reducer(state = initialState, action) {
    console.log(state,action);
    switch (action.type) {
        case 'SET_CONTACT_TRUE':
            return {
                ...state,
                toContAnim:true
            }
        case 'SET_CONTACT_FALSE':
            return {
                ...state,
                toContAnim:false
            }
        case 'SET_BACK_TRUE':
            return {
                ...state,
                toBackAnim:true
            }
        case 'SET_BACK_FALSE':
            return {
                ...state,
                toBackAnim:false
            }
        case 'SET_MEDIAQ':
            return {
                ...state,
                mediaQ:action
            }
        
        default:
            return state;
    }
}