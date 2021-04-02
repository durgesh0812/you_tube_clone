import React from 'react';
 import './VideoRow.css';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function VideoRow({views,subs,description,channel,title,image,timestamp}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{description}</h3>
                <p>{channel}  {subs} subscribers . {views} views . {timestamp}</p>
                <p>{title} <CheckCircleRoundedIcon className="tik"/></p>
            </div>
            
        </div>
    )
}

export default VideoRow

