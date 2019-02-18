import React, { PureComponent } from 'react';
import style from './style.module.css';

import Hero from './Components/Hero';
import About from './Components/About';
import Interests from './Components/Interests';
import Communities from './Components/Communities';
import Contests from './Components/Contests';
import CTA from './Components/CTA';
import Extras from './Components/Extras';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Hero />
                <About />
                <Interests />
                <Communities />
                <Contests />
                <CTA />
                <Extras />
            </div>
        );
    }
}

export default Home;