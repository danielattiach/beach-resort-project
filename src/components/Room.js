import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Room = ({ room }) => {
    const { name, images, slug, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt={name} />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/room/${slug}`} className="btn-primary room-link">
                    View Room
                </Link>
                <p className="room-info">{name}</p>
            </div>
        </article>
    );
};

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        slug: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
};

export default Room;