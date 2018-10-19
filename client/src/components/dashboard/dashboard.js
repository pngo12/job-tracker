import React, { Component } from 'react';
import {connect} from 'react-redux';
import JobCard from './JobCard'
import Navbar from '../navbar/navbar'

class Dashboard extends Component {
    state = { 
     
    }

     removeJob = () => {
         
     }
    render() { 
        return ( 
            <div>
                <div id="navbar">
                    <Navbar />
                </div>
                <div className="columns">
                    <div className="column"></div>
                        <div className="column is-8">
                            <p className="title">Hello Phillip,</p>
                            <p className="subtitle">Below are your stats:</p>
                        </div>
                    <div className="column"></div>
                </div>
                <div className="columns">
                    <div className="column"></div>
                        <div className="column is-8">
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Jobs applied to</p>
                                        <p className="title">0</p>
                                    </div>
                                </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Need to follow-up</p>
                                    <p className="title">0</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Upcoming interviews</p>
                                    <p className="title">0</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="column"></div>
                </div>
                    <div className="columns is-multiline">
                        <div className="column"></div>
                            {
                                this.props.jobs.map((item, index) => {
                                    return (
                                        <div key={index} className="column is-6">
                                            <JobCard 
                                            company={item.companyName}
                                            dateApplied={item.dateApplied}
                                            url={item.linkToJob}
                                            status={item.jobStatus}
                                            notes={item.notes}
                                            index={index}
                                            />
                                        </div>
                                    )
                                })
                            }
                    <div className="column"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs
})
 
export default connect(mapStateToProps, null)(Dashboard)


