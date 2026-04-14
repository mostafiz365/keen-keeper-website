import React, { useState } from 'react';
import { FriendContext } from './FriendContext';
import { toast } from 'react-toastify';


const FriendContextApi = ({children}) => {
    const [calling, setCalling] = useState([]);
    const [sms, setSms] = useState([]);
    const [video, setVideo] = useState([]);

    const handleCallBtn = (selectedFriend) => {
        setCalling([...calling, selectedFriend]);
        toast.success(`Call with ${selectedFriend.name} Successfully!`);
    }
    const handleSmsBtn = (selectedFriend) => {
        setSms([...sms, selectedFriend]);
        toast.success(`Text with ${selectedFriend.name} Successfully!`);
    }
    const handleVideoBtn = (selectedFriend) => {
        setVideo([...video, selectedFriend]);
        toast.success(`Video Call with ${selectedFriend.name} Successfully!`);
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