import React  from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: 'free cocktails',
            info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A, accusantium ad aperiam atque corporis cum eligendi enim error incidunt magnam minima, molestiae 
                    neque nihil nobis quae quidem repudiandae temporibus ullam!`
        },
        {
            icon: <FaHiking />,
            title: 'endless hiking',
            info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A, accusantium ad aperiam atque corporis cum eligendi enim error incidunt magnam minima, molestiae 
                    neque nihil nobis quae quidem repudiandae temporibus ullam!`
        },
        {
            icon: <FaShuttleVan />,
            title: 'free shuttle',
            info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A, accusantium ad aperiam atque corporis cum eligendi enim error incidunt magnam minima, molestiae 
                    neque nihil nobis quae quidem repudiandae temporibus ullam!`
        },
        {
            icon: <FaBeer />,
            title: 'strongest beer',
            info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A, accusantium ad aperiam atque corporis cum eligendi enim error incidunt magnam minima, molestiae 
                    neque nihil nobis quae quidem repudiandae temporibus ullam!`
        },
    ];

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((service, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    );
};

export default Services;
