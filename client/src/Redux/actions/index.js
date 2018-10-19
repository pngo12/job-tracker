import {
    REMOVE_JOB
} from '../constants'

export const removeJob = job => ({
    type: REMOVE_JOB, payload: job
})
