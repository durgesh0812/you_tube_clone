import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import capmarvel from '../../Images/capmarvel.jpg';
import falco from '../../Images/falcon.jpg';
import end from '../../Images/end.jpg';
import wanda from '../../Images/wanda.jpg';
import widow from '../../Images/widow.jpg'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="search__PageFilter">
                <TuneIcon />
                <h1>FILTER</h1>

            </div>
            <hr/>
            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwnhe7O9GvvpT9Xpju21bHY9He61Tpv-GT56cKVipzjs=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Marvel Entertainment"
            verified
            subs="30M"
            noofVideos={7000}
            description="Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of over 8,000 characters featured in a variety of media over seventy years. Marvel utilizes its character franchises in entertainment, licensing and publishing."
                              
            />
            <hr/>

            <VideoRow
            views="300k Views"
            subs="15M"
            description="Power | Marvel Studios' The Falcon and The Winter Soldier | Disney+"
            timestamp="1 month ago"
            title="Marvel Entertainment"
            image={falco}   
                   
            />

         <VideoRow
            views="40k Views"
            subs="15M"
            description="Marvel Studios' Black Widow | Final Trailer"
            timestamp="1 Year ago"
            title="Marvel Entertainment"
            image={widow}     
                   
            />

           <VideoRow
            views="1M Views"
            subs="15M"
            description="Official Trailer 2 | WandaVision | Disney+"
            timestamp="3 months ago"
            title="Marvel Entertainment"
            image={wanda}   
                   
            />

         <VideoRow
            views="150M Views"
            subs="15M"
            description="Marvel Studios' Avengers: Endgame - Official Trailer"
            timestamp="2 Years ago"
            title="Marvel Entertainment"
            image={end}   
                   
            />

         <VideoRow
            views="60M Views"
            subs="15M"
            description="Marvel Studios' Captain Marvel - Official Trailer"
            timestamp="2 Years ago"
            title="Marvel Entertainment"
            image={capmarvel}    
                   
            />

          <VideoRow
            views="100M Views"
            subs="15M"
            description="Marvel's The Avengers - Official Trailer"
            timestamp="9 Years ago"
            title="Marvel Entertainment"
            image={end}     
                   
            />
           
        </div>
    )
}

export default SearchPage
