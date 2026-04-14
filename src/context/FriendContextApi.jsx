import React, { useState } from 'react';
import { FriendContext } from './FriendContext';


const FriendContextApi = ({children}) => {
    const [calling, setCalling] = useState([]);
    const [sms, setSms] = useState([]);
    const [video, setVideo] = useState([]);

    const handleCallBtn = (selectedFriend) => {
        setCalling([...calling, selectedFriend]);
    }
    const handleSmsBtn = (selectedFriend) => {
        setSms([...sms, selectedFriend]);
    }
    const handleVideoBtn = (selectedFriend) => {
        setVideo([...video, selectedFriend]);
    }

    const data ={
        calling,
        setCalling,
        handleCallBtn,
        sms,
        setSms,
        handleSmsBtn,
        video,
        setVideo,
        handleVideoBtn
    }
    return (
        <FriendContext value={data}>
            {children}
        </FriendContext>
    );
};

export default FriendContextApi;