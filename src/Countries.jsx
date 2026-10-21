
import { use } from "react";

const Countries = ({ countriesPromis }) => {
    const countriesData = use(countriesPromis);

    const countries = countriesData;

    console.log(countries);

    return (
        <div id="fullBody">
            <h2>In The Country</h2>

            {countries.map((country) => (
                <p className="card" key={country.cca3}>
                    {country.name.common}
                </p>
            ))}
        </div>
    );
};

export default Countries;
