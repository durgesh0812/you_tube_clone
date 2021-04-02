import React from 'react';
// import HomeIcon from '@material-ui/icons/Home';
import './SidebarRow.css';

function SidebarRow({selected,Icon,title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            {/* <HomeIcon/> */}
            <Icon className="SidebarRow__icon"/>
            <h3 className="SidebarRow__title">{title}</h3>
        </div>
    )
}

export default SidebarRow
