import {
    REMOVE_JOB,
    CREATE_USER,
    NEW_JOB
    } from '../constants'
const initialState = {
    jobs: [],

}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case REMOVE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter((i => i !== action.payload))
            }
        case NEW_JOB:
        return {
            ...state,
            jobs:[...state.jobs, action.payload]
        }
        case CREATE_USER:
        return {
            ...state,
        }
        default: return state

    }
}

export default rootReducer