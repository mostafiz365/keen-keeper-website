import React, { useState } from 'react';
import { FriendContext } from './FriendContext';


const FriendContextApi = ({children}) => {
    const [calling, setCalling] = useState([]);

    const handleCallBtn = (selectedFriend) => {
        setCalling([...calling, selectedFriend]);
    }

    const data ={
        calling,
        setCalling,
        handleCallBtn
    }
    return (
        <FriendContext value={data}>
            {children}
        </FriendContext>
    );
};

export default FriendContextApi;