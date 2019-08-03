import React from 'react';
import loader from '../images/gif/loading-arrow.gif';

const Loading = () => {
    return (
        <div className="loading">
            <img src={loader} alt="loading.." />
        </div>
    );
};

export default Loading;
