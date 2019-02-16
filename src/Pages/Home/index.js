import React, { PureComponent } from 'react';
import style from './style.module.css';

import Hero from './Components/Hero';
import About from './Components/About';

class Home extends PureComponent {
    render() {
        return (
            <main>
                <Hero />
                <About />
                I'm from main
            </main>
        );
    }
}

export default Home;