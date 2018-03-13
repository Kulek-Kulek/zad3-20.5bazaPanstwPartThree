import React from 'react';
import './flag.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
    </div>
);

export default CountryFlag;