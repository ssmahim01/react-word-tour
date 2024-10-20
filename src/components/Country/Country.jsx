import { useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, population, cca3} = country;
    console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="flags"/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <div className='action-buttons'>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>

            <button onClick={() => handleVisitedFlags(flags)}>Add Flag</button>

            <button onClick={handleVisited}>{visited? 'Visited' : 'Go'}</button>
            </div>

            {visited ? 'I have visited this Country' : 'I want to Visit'}

            <hr/>

            <CountryDetails
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            ></CountryDetails>

        </div>
    );
};

export default Country;