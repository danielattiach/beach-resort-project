import React, { useState, useEffect } from 'react';
import items from './data';

const RoomContext = React.createContext({});

const RoomProvider = ({ children }) => {
    const [state, setState] = useState({
        rooms: [],
        featuredRooms: [],
        filteredRooms: [],
        loading: true,
        filters: {
            type: 'all',
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }
    });

    useEffect(() => {
        let rooms = formatData(items),
            featuredRooms = rooms.filter(room => room.featured),
            maxPrice = Math.max(...rooms.map(room => room.price)),
            maxSize = Math.max(...rooms.map(room => room.size));
        setState({
            rooms,
            featuredRooms,
            filteredRooms: rooms,
            loading: false,
            filters: {
                ...state.filters,
                price: maxPrice,
                maxPrice,
                maxSize
            }
        });
    }, []);

    const formatData = data => {
        return data.map(item => {
            let id = item.sys.id,
                images = item.fields.images.map(image => {
                    return image.fields.file.url;
                });
            return {...item.fields, id, images};
        });
    };

    const getRoom = slug => {
        return state.rooms.find(room => room.slug === slug);
    };

    const filterRooms = (state) => {
        let { rooms, filters: { type, capacity, price, minSize, maxSize, breakfast, pets }} = state;
        capacity = parseInt(capacity);
        minSize = parseInt(minSize);
        maxSize = parseInt(maxSize);
        let filteredRooms = [...rooms];
        if (type !== 'all') {
            filteredRooms = filteredRooms.filter(room => room.type === type);
        }
        if (capacity !== 1) {
            filteredRooms = filteredRooms.filter(room => room.capacity >= capacity);
        }
        filteredRooms = filteredRooms.filter(room => room.price <= price);
        filteredRooms = filteredRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        if (breakfast) {
            filteredRooms = filteredRooms.filter(room => room.breakfast === breakfast);
        }
        if (pets) {
            filteredRooms = filteredRooms.filter(room => room.pets === pets);
        }
        setState({
            ...state,
            filteredRooms
        });
    };

    const handleFilterChange = e => {
        const target = e.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name,
            stateObj = {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            };
        setState(stateObj);
        filterRooms(stateObj);
    };

    return (
        <RoomContext.Provider value={{ ...state, getRoom, handleFilterChange }}>
            {children}
        </RoomContext.Provider>
    );
};

const RoomConsumer = RoomContext.Consumer;

export {
    RoomProvider,
    RoomConsumer,
    RoomContext
};
