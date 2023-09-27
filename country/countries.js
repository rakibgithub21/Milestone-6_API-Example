
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then ( data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    countries.forEach(country => {
        const countriesContainer = document.getElementById('countries-container');
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'} </p>
        <button onclick = "loadCountryDetail('${country.cca2}')">Details</button>
        
        
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
         fetch(url)
        .then(res => res.json())
        .then( data => desplayCountryDetail(data[0]))
    
}
const desplayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Details:${country.name.common}</h2>
    <img src = "${country.flags.png}"></img>
    
    `;
  
}
loadCountries()