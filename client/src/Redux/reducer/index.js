import {
    REMOVE_JOB
    } from '../constants'
const initialState = {
    jobs: [],

}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case REMOVE_JOB:
            return {
                ...state,
                jobs: state.watchlist.filter((i => i !== action.payload))
            }
        default: return state

    }
}

export default rootReducer