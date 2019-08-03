import React, { useContext } from 'react';
import { RoomContext } from "../context";
import Room from './Room';
import Loading from './Loading';
import Title from './Title';

const FeaturedRooms = () => {
    const { loading, featuredRooms: rooms } = useContext(RoomContext);
    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {loading ? (
                    <Loading />
                ) : (
                    rooms.map((room, index) => {
                        return <Room key={index} room={room} />
                    })
                )}
            </div>
        </section>
    );
};

export default FeaturedRooms;
