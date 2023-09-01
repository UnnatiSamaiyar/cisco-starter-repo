import React, { Component } from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="I'm also an exhibit!"></Exhibit>
                <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
                <Exhibit>
              
                <IPDisplay ipv6={false} /> {/* Display IPv4 Address */}
                <IPDisplay ipv6={true} /> {/* Display IPv6 Address */}
                </Exhibit>
            </div>
        );
    }
}

export default App;