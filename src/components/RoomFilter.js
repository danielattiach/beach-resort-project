import React, { useContext } from 'react';
import { RoomContext } from "../context";
import Title from './Title';

const getUniqueItems = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
};

const RoomFilter = ({ rooms }) => {
    const {
        handleFilterChange,
        filters: { type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets  }
    } = useContext(RoomContext);
    const roomTypes = ['all', ...getUniqueItems(rooms, 'type')];
    const capacities = getUniqueItems(rooms, 'capacity');

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleFilterChange}>
                        {roomTypes.map((roomType, index) => <option key={index} value={roomType}>{roomType}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="type">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleFilterChange}>
                        {capacities.map((capacity, index) => <option key={index} value={capacity}>{capacity}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input className="form-control" type="range" name="price" id="price" min={minPrice} max={maxPrice} onChange={handleFilterChange} value={price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input className="size-input" type="number" name="minSize" id="size" value={minSize} onChange={handleFilterChange}/>
                        <input className="size-input" type="number" name="maxSize" value={maxSize} onChange={handleFilterChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleFilterChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="breakfast" checked={pets} onChange={handleFilterChange}/>
                        <label htmlFor="pets">allow pets</label>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default RoomFilter;
