import React from 'react';
import {connect} from 'react-redux'
import { removeJob } from '../../Redux/actions'
import './dashboard.css'

const JobCard = props => {
    let index = props.index
    return ( 
        <div className="card container" id="card">
            <div className="card content">
                <table className="table is-narrow">
                    <tbody>
                        <tr>
                            <td>Company: {props.company}</td>
                            <td>Date Applied: {props.dateApplied}</td>
                            <td><div className="button is-danger">
                                <span onClick={() => this.props.removeJob(index)}>Remove</span>
                            </div></td>
                        </tr>
                        <tr>
                            <td>Status: {props.status}</td>
                            <td>Notes: {props.notes}</td>
                        </tr>
                        <tr>
                            <td>Interview: {props.interview}</td>
                            <td>Phone Interview: {props.phoneInterview}</td>
                        </tr>
                        <tr>
                            <td><a href={props.url}>Link to posting</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
    removeJob: index => dispatch(removeJob(index))
})
 
export default connect(null, mapDispatchToProps)(JobCard)