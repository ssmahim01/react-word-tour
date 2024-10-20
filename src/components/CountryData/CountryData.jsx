const CountryData = ({country, handleVisitedCountry}) => {
    console.log('Inside Country Data', country, handleVisitedCountry);
    
    return (
        <div>
            <p>Official Name: {country.name.official}</p>
        </div>
    );
};

export default CountryData;