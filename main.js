const endpoint = "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-independence-date.json";

const countries = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => countries.push(...data));

function findMatches(wordToMatch, countries){
    return countries.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.country.match(regex)
    });
}
//function numberWithCommas(x) {
  //  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //}

  function displayMatches(){
    const matchArray = findMatches(this.value, countries);
    const html = matchArray.map(place => {
       const regex = new RegExp(this.value, 'i');
       const countryName = place.country.replace(regex, `<span class="h1">${this.value} </span>`);
       
        return `
        <li>
           <span class="name">${countryName}</span>
           <span class="independence">${(place.independence)}</span>
        </li>
           `;
    }).join('');
    suggestions.innerHTML = html;
    
}

const searchinput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchinput.addEventListener('keyup', displayMatches);

