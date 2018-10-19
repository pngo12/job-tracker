import {
    REMOVE_JOB
} from '../constants'
import axios from 'axios'

export const removeJob = job => ({
    type: REMOVE_JOB, payload: job
})

export const createUser = (email,password) => ({
    
})
