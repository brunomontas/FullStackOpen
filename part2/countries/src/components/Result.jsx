const Result = ({ countriesList }) => {
  if (countriesList.length === 0) {
    return null;
  } else if (countriesList.length > 12) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countriesList.length === 1) {
    const countrie = countriesList[0];
    const languages = Object.values(countrie.languages);
    return (
      <div>
        <h1>{countrie.name.common}</h1>
        <p>{`capital ${countrie.capital}`}</p>
        <p>{`area ${countrie.area}`}</p>
        <h3>Languages</h3>
        <ul>
          {languages.map((language) => (
            <li key={language.index}>{language}</li>
          ))}
        </ul>
        <img src={countrie.flags.png} />
      </div>
    );
  } else {
    return (
      <div>
        {countriesList.map((countrie) => (
          <p key={countrie.name.common}>{countrie.name.common}</p>
        ))}
      </div>
    );
  }
};

export default Result;
