import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Timeline = () => {
    const {calling} = useContext(FriendContext);
    console.log(calling);


    return (
        <div>
            <h1>This is timeline Section</h1>
        </div>
    );
};

export default Timeline;