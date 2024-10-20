import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    const {country, handleVisitedCountry} = props;
    console.log(country, handleVisitedCountry);

    return (
        <div>
            <h4>Country Details</h4>
            <hr/>

            {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            ></CountryData> */}

            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;