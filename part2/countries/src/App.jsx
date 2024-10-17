import { useState, useEffect } from 'react';
import countriesService from './components/services/countries';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';

function App() {
  const [allCountries, setAllCountries] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    countriesService.getAll().then((apiResponse) => {
      setAllCountries(apiResponse);
    });
  }, []);

  if (!allCountries) {
    return null;
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCountryClick = (country) => {
    setSearch(country);
  };

  const filteredCountries =
    search === ''
      ? []
      : allCountries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  return (
    <>
      <div>
        find countries{' '}
        <input value={search} onChange={handleSearch} />
        {filteredCountries.length === 1 ? (
          <CountryDetail country={filteredCountries[0]} />
        ) : (
          <CountriesList
            countriesList={filteredCountries}
            handleCountryClick={handleCountryClick}
          />
        )}
      </div>
    </>
  );
}

export default App;
