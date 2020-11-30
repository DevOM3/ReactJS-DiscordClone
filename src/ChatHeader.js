import './ChatHeader.css';
import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { HelpRounded, SendRounded } from '@material-ui/icons';

const ChatHeader = ({ channelName }) => {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>{channelName}</h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input type="text" placeholder="Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader;
