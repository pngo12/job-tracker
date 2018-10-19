import React, { Component } from 'react';
import JobCard from './JobCard'
import Navbar from '../navbar/navbar'

class Dashboard extends Component {
    state = { 
        jobs: []
     }
    render() { 
        return ( 
            <div>
                <div id="navbar">
                    <Navbar />
                </div>
                    <div className="columns is-multiline">
                        <div className="column is-2"></div>
                            <div className="column is-8">
                                <JobCard
                                    company="Google"
                                    dateApplied="June"
                                    posting="posting"
                                    status="Applied"
                                    notes="applied on indeed"
                                    interview="no"
                                    phoneInterview="yes"
                                />
                        </div>
                    <div className="column is-2"></div>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;


