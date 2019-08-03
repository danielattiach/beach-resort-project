import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';


const Room = ({ match: { params: { slug } } }) => {
    const [room, setRoom] = useState(undefined);
    const { getRoom, rooms } = useContext(RoomContext);

    useEffect(() => {
        setRoom(getRoom(slug));
    }, [rooms]);

    if (!room) {
        return (
            <div className="error">
                <h3>We could not find this room</h3>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </div>
        )
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

    return (
        <>
            <StyledHero img={images[0]}>
                <Banner title={`room ${name}`}>
                    <Link to="/rooms" className="btn-primary">
                         back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((image, index) => {
                        return <img key={index} src={image} alt="Room image"/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: ${size} SQFT</h6>
                        <h6>Max capacity: {capacity} {capacity > 1 ? 'people' : 'person'} </h6>
                        <h6>{pets ? 'Pets are allowed' : 'No pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((extra, index) => {
                        return <li key={index}>{extra}</li>
                    })}
                </ul>
            </section>
        </>
    );

};

export default Room;
