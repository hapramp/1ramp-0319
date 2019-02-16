import React, { PureComponent } from 'react';
import style from './style.module.css';

import Hero from './Components/Hero';
import About from './Components/About';
import Interests from './Components/Interests';
import Communities from './Components/Communities';
import Contests from './Components/Contests';
import CTA from './Components/CTA';

class Home extends PureComponent {
    render() {
        return (
            <main>
                <Hero />
                <About />
                <Interests />
                <Communities />
                <Contests />
                <CTA />
                I'm from main
            </main>
        );
    }
}

export default Home;