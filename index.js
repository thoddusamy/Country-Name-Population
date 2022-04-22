const getCountries = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://restcountries.com/v3.1/all')
  xhr.send()
  xhr.responseType = 'json'

  xhr.onload = () => {
    const countries = xhr.response
    const countryNames = countries.map((country) => country.name.common)
    const countryPop = countries.map((country) => country.population)
    console.log('Country names is', countryNames)
    console.log('Country Population is', countryPop)
  }
}
getCountries()
