// import React from 'react';
import { useState } from 'react';
import './country.css'


const Country = ({country,handleVisitedCountries}) => {
    // console.log(country.name.common)
     console.log(handleVisitedCountries);

   const [visited, setVisited]= useState(false);

    const handleVisited=()=>{
    //     if(visited)
    //     {
    //     setVisited(false);
    //     }
    //     else
    //     {setVisited(true)}

    // process-2
        setVisited(visited ? false : true)

    //   process -3 or troggle 
    // setVisited(!visited);

   handleVisitedCountries(country);
    }
    return (
        <div className={`card country-card ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" className='country-flag' />
            <p>Area ={country.area.area}</p>
            <p>Population={country.population.population}{country.area.area<100 ? <p>it is a small country</p>:<p>it is a big country</p>}</p>
            <p>key ={country.cca3.cca3}</p>
            <p>Name:{country.name.common} </p>
            <p>Region:{country.region.region}</p>
            
           <button onClick={handleVisited}>
            {visited ? 'visited':'Not visited'}
           </button>
        </div>
    );
};

export default Country;