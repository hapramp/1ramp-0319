import React, { PureComponent } from 'react';
import style from './style.module.css';

import Hero from './Components/Hero';

class Home extends PureComponent {
    render() {
        return (
            <main>
                <Hero/>
                I'm from main
            </main>
        );
    }
}

export default Home;