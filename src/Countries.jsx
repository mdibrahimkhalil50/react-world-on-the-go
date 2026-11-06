
import { use,useState } from "react";
import Country from "./Country";
import './countries.css'


const Countries = ({ countriesPromis }) => {

    const [visitedCountries,setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country)=>
    {
        console.log('handle visited country clicked',country);
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromis);

    const countries = countriesData;

    // console.log(countries);

    return (
        <div id="fullBody">
            <h2>In The Country :{countries.length}</h2>
            <h3>Total country visited country : {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=> <li>
                        {country.name.common}
                    </li>)
                }
            </ol>
            <div className="countries countries-container">
                 {
            countries.map(country => <Country key={country.cca3.cca3} 
                country={country}
                    handleVisitedCountries={handleVisitedCountries}


               > </Country>)
            }
            </div>

           
        </div>
    );
};

export default Countries;
