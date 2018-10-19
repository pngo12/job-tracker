import {
    REMOVE_JOB,
    CREATE_USER
} from '../constants'
import axios from 'axios'

export const removeJob = job => dispatch => {
    dispatch({ type: REMOVE_JOB, payload: job})
}

export const createUser = (email,password) => dispatch => {
    axios.post('http://localhost:5000',{
        email,
        password
    })
    .then(
        dispatch({ type: CREATE_USER, payload: email })
    )
}
