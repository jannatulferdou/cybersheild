import React from 'react';
import Hero from '../Hero';
import Awareness from '../../pages/Awarness/Awarness';
import AbuseSafetyResources from '../../pages/Report/AbuseReport';
import AwarenessHub from '../../pages/Awarness/AwarnessHub';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AwarenessHub></AwarenessHub>
            <Awareness></Awareness>
            <AbuseSafetyResources></AbuseSafetyResources>
        </div>
    );
};

export default Home;