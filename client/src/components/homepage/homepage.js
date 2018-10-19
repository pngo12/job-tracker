import React, { Component } from 'react';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
import './homepage.css'


class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="hero is-fullheight home-color has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Introducing JobHunt
                            </h1>
                            <h2 className="subtitle">
                                Your new job starts now.
                            </h2>
                            <Link className='button' to='/signup'>Get Started fam</Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
         );
    }
}
 
export default HomePage;