import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './RecommendedVideos.css';
import last from '../../Images/download.jpg';
import gv from '../../Images/gv.jpg';
import snow from '../../Images/newyork.jpg';
import enjamo from '../../Images/enjami.jpg';
import oh from '../../Images/oh.jpg';
import rim from '../../Images/rim.jpg';
import thor from '../../Images/thor.jpg';
import pizza from '../../Images/pizza.jpg';





function Recommendedvideos() {
    return (
        <div className="recommendedvideos">
            <div className="recommended__videos">
                <VideoCard
                   title="₹18,000 Dinner - Tik-Tok Famous Smiling Turkish Chef in Dubai - CZN BURAK - Irfan's View"
                   views="3.5M Views"
                   timestamp="18 housrs ago"
                    channelimage="https://yt3.ggpht.com/ytc/AAUvwnj_OsxYzRXY1VXj9WzlWQwamQTYdqthTX057RRPWA=s68-c-k-c0x00ffffff-no-rj"
                
                channel="Ifran's View"
                   image={pizza}
                   />
                <VideoCard
                  title="Snowfall in Times Square, NYC | Walking in New York City in the Winter Snow, 4K"
                  views="60M Views"
                  timestamp="1 year ago"
                  channelimage="https://yt3.ggpht.com/ytc/AAUvwnh32KhDxrYCgqPb7CNqR6cODZFnwmMME5a6hBi4nA=s68-c-k-c0x00ffffff-no-rj"
                  channel="Nomadic Ambience"
                  image={snow}
                />
                <VideoCard
                title="Dhee ft. Arivu - Enjoy Enjaami (Prod. Santhosh Narayanan)"
                views="10M Views"
                timestamp="5 days ago"
                channelimage="https://yt3.ggpht.com/ytc/AAUvwnhubuLIx0E8PvnxM6McIoUIWQiet8spNwurK_F3=s68-c-k-c0x00ffffff-no-rj"
                channel="Maaja"
                image={enjamo}
                />
                <VideoCard
                title="Oh My Kadavule - Kadhaippoma Video | Ashok Selvan, Ritika Singh | Leon James"
                views="555K Views"
                timestamp="3 months ago"
                channelimage="https://yt3.ggpht.com/ytc/AAUvwnjoqjpK6FR8wZ5i-2ZRQ2l_g1pya4z4G9enj6CieA=s88-c-k-c0x00ffffff-no-rj"
                channel="SonyMusicSouthVEVO"
                image={oh}
                />
                <VideoCard
                title="Sivappu Manjal Pachai | Idhudhaan Video Song | G.V.Prakash Kumar, Kashmira | Sasi | Siddhu Kumar"
                views="245K Views"
                timestamp="1 year ago"
                channelimage="https://yt3.ggpht.com/ytc/AAUvwnh_guaDdfEM6rZyOAMgF37I_9y_yVWQbLjwhkS3Fg=s88-c-k-c0x00ffffff-no-rj"
                channel="Think Music India"
                image={gv}
               
                />
                <VideoCard
                title="THE LAST OF US 2 PS5 Gameplay 4K HDR ULTRA HD"
                views="3M Views"
                timestamp="3 months ago"
                channelimage="HE LAST OF US 2 PS5 Gameplay 4K HDR ULTRA HD"
                channel="Gamers Spot"
                image={last}
                />
                <VideoCard
                title="Pacific Rim Uprising (2018) - Jaeger vs. Jaeger Scene"
                views="10M Views"
                timestamp="3 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AAUvwnh1dYmG2lDRVXRZnoXr4bK98WIzbo8Okdsz5yXFxA=s88-c-k-c0x00ffffff-no-rj"
                channel="Movieclips"
                image={rim}
                />
                <VideoCard
                title="Thor Vs Hulk - Fight Scene | Thor Ragnarok (2017) "
                views="20M Views"
                timestamp="3 years ago"
                channelimage="https://yt3.ggpht.com/ytc/AAUvwnibQRIT9IzVxiiATpJM0cEdyhiTcPqJKXsBMPR7TQ=s88-c-k-c0x00ffffff-no-rj"
                channel="BestClips"
                image={thor}
                />
           
            </div>
        </div>
    )
}

export default Recommendedvideos
