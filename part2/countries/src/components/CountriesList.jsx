const CountriesList = ({ countriesList, handleCountryClick }) => {
  if (countriesList.length === 0) {
    return null;
  } else if (countriesList.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return (
      <>
        {countriesList.map((country) => (
          <div key={country.name.common}>
            {country.name.common}{' '}
            <button
              onClick={() => handleCountryClick(country.name.common)}
            >
              show
            </button>
          </div>
        ))}
      </>
    );
  }
};

export default CountriesList;
