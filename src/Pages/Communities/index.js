import React from 'react';

import About from './Components/About'
import WeAreOne from './Components/WeAreOne'
import Listings from './Components/communityList'

const index = () => {
    return (
        <div>
            <About />
            <WeAreOne />
            <Listings />
        </div>
    );
};

export default index;