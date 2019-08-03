import React, { useState, useEffect } from 'react';
import items from './data';

const RoomContext = React.createContext({});

const RoomProvider = ({ children }) => {
    const [state, setState] = useState({
        rooms: [],
        featuredRooms: [],
        filteredRooms: [],
        loading: true
    });

    useEffect(() => {
        let rooms = formatData(items),
            featuredRooms = rooms.filter(room => room.featured);
        setState({rooms, featuredRooms, filteredRooms: rooms, loading: false});
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

    return (
        <RoomContext.Provider value={{ ...state, getRoom }}>
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
