import {
    REMOVE_JOB,
    CREATE_USER,
    NEW_JOB
} from '../constants'
import axios from 'axios'

export const removeJob = job => dispatch => {
    dispatch({ type: REMOVE_JOB, payload: job})
}

export const createUser = (newUser) => dispatch => {
    console.log(newUser)
    axios.post('http://localhost:5000/api/users', newUser)
    .then(res => {
        console.log(res.data)
        dispatch({ type: CREATE_USER, payload: res.data })
    })
}

export const newJob = job => dispatch => {
    axios.post('http://localhost:5000', job)
    .then(res => {
        dispatch({
            type: NEW_JOB,
            payload: res.data
        })
    })
}
