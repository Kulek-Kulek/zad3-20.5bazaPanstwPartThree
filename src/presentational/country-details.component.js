import React from 'react';
import './flag.css';

const CountryDetails = (props) => (
    <div className="country-wrapper">
        <header>
            <img className="country-photo" src={props.country.imageUrl} alt="country photo" />
        </header>
        <div className="country-info">
            <h2>{props.country.name}</h2>
            <h4>Kontynent: {props.country.continent}</h4>

            <div className="info">
                <div>
                    <span>Ludność[mln]: </span>
                    <span>{props.country.populace}</span>
                </div>

                <div>
                    <span> Stolica: </span>
                    <span>{props.country.capital}</span>
                </div>

                <div>
                    <span> Waluta: </span>
                    <span>{props.country.currency}</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;