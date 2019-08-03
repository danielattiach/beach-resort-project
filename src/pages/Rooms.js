import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { RoomContext} from "../context";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Room from '../components/Room';
import Loading from '../components/Loading';

const Rooms = () => {
    const { rooms, loading } = useContext(RoomContext);

    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            {loading ? (
                <Loading />
            ) : (
                rooms.map((room, index) => {
                    return <Room key={index} room={room} />
                })
            )}
        </>
    );
};

export default Rooms;
