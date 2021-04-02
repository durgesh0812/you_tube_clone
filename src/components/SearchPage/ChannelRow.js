import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChannelRow.css';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function ChannelRow({image,channel,subs,noofVideos,verified,description}){
    return (
    <div className="channelRow">
        <Avatar className="channelRow__logo" alt={channel} src={image}/>
         <div className="channelRow__text"><h4>{channel} {verified && <CheckCircleRoundedIcon/>}</h4>
         <p>{subs} subscribers . {noofVideos} Videos </p>
         <p>{description}</p>

          
         
         
         </div>
        
         

    </div>)
}

export default ChannelRow

