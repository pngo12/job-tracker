import React, { Component } from 'react';
import JobCard from './JobCard'
import Navbar from '../navbar/navbar'

class Dashboard extends Component {
    state = { 
        jobs: []
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
                            <nav class="level">
                                <div class="level-item has-text-centered">
                                    <div>
                                        <p class="heading">Jobs applied to</p>
                                        <p class="title">200</p>
                                    </div>
                                </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Need to follow-up</p>
                                    <p class="title">25</p>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading">Upcoming interviews</p>
                                    <p class="title">3</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="column"></div>
                </div>
                    <div className="columns is-multiline">
                        <div className="column"></div>
                            <div className="column is-6">
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
                    <div className="column"></div>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;


