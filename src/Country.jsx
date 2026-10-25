// import React from 'react';
import './country.css'
const Country = ({country}) => {
    console.log(country.name.common)
    return (
        <div className="card country-card">
            <img src={country.flags.flags.png} alt="" className='country-flag' />
            <p>Area ={country.area.area}</p>
            <p>Population={country.population.population}</p>
            <p>key ={country.cca3.cca3}</p>
            <p>Name:{country.name.common} </p>
            <p>Region:{country.region.region}</p>

        </div>
    );
};

export default Country;