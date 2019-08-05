import React, { useContext } from 'react';
import { RoomContext } from '../context';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

const RoomContainer = () => {
    const { rooms, filteredRooms, loading } = useContext(RoomContext);

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={filteredRooms} />
        </div>
    );
};

export default RoomContainer;
