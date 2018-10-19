import React, { Component } from 'react';
import {connect} from 'react-redux'
import {newJob} from '../../Redux/actions'
import {Redirect} from 'react-router-dom'

class AddJob extends Component {
    state = {
        companyName: '',
        dateApplied: '',
        linkToJob: '',
        jobStatus: '',
        notes: '',
        redirect: false
    }

    handleOnChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitJob = e => {
        e.preventDefault()
        let { companyName, 
            dateApplied,
            linkToJob,
            jobStatus,
            notes } = this.state;
        this.props.newJob({companyName, dateApplied, linkToJob, jobStatus, notes})
        this.setState({ redirect: true})
    }

    render() {
        if(this.state.redirect === true){
            return <Redirect to='/dashboard' />
        }
        return (
            <section className="section is-large">
                <div className="columns">
                    <div className="column"></div>
                        <div className="column is-4">
                        <p className="title">Add a new job</p>
                            <form onSubmit={this.submitJob}>
                                <div className="field">
                                    <label className="subtitle">Company Name</label>
                                    <input
                                        onChange={this.handleOnChange}
                                        value={this.state.companyName}
                                        name="companyName"
                                        className="input"
                                    />
                                </div>
                                <div className="field">
                                    <label className="subtitle">Date Applied</label>
                                    <input
                                        onChange={this.handleOnChange}
                                        value={this.state.dateApplied}
                                        name="dateApplied"
                                        className="input"
                                    />
                                </div>
                                <div className="field">
                                    <label className="subtitle">Link to posting</label>
                                    <input
                                        onChange={this.handleOnChange}
                                        value={this.state.linkToJob}
                                        name="linkToJob"
                                        className="input"
                                    />
                                </div>
                                <div className="select">
                                    <label>Current Status</label>
                                            <select value={this.state.jobStatus} onChange={this.handleOnChange.bind(this)}>
                                            <option default value=''></option>
                                            <option value='0'>Applied</option>
                                            <option value='1'>Call Back</option>
                                            <option value='2'>Phone Interview</option>
                                            <option value='3'>In Person 1</option>
                                            <option value='4'>In Person 2</option>
                                            <option value='5'>Offer Received</option>
                                        </select>
                                </div>
                                <br/> <br />
                                <div className="field">
                                    <label>Notes</label>
                                    <textarea
                                        onChange={this.handleOnChange}
                                        placeholder="Notes about job..."
                                        value={this.state.notes}
                                        name='notes'
                                        className="textarea"
                                    />
                                </div>
                            <button className="button is-info">Add job</button>
                            </form>
                        </div>
                    <div className="column"></div>
                </div>
            </section>
        );
    }
}

const  mapDispatchToProps = dispatch => ({
    newJob: job => dispatch(newJob(job))
})

export default connect(null, mapDispatchToProps)(AddJob);