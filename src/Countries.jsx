
import { use } from "react";
import Country from "./Country";
import './countries.css'

const Countries = ({ countriesPromis }) => {
    const countriesData = use(countriesPromis);

    const countries = countriesData;

    // console.log(countries);

    return (
        <div id="fullBody">
            <h2>In The Country :{countries.length}</h2>
            <div className="countries countries-container">
                 {
            countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
            </div>

           
        </div>
    );
};

export default Countries;
