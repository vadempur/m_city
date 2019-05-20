import React from 'react';
import Featured from './featured';
import MatchesHome from './matches';
import Meetplayers from './meetPlayers';

const Home = () => {
    return (
        <div className='bck_blue'>
            <Featured/>
            <MatchesHome/>
            <Meetplayers/>
        </div>
    );
};

export default Home;