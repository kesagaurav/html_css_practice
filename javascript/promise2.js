 // const request=fetch("https://restcountries.eu/rest/v2/name/portugal");
        // console.log(request);
        const countriesContainer = document.querySelector('.countries');
        const btn=document.querySelector('.btn-country');
const renderCountry = function (data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};


    const getJson=(url,errorMsg='something went wrong')=>{
        fetch(url).then(response=>{
            if(!response)
                throw new Error(`${errorMsg} (${response.status})`)
            
                return response.json();
            
           
        })
    }


   
       const getCountryData=function(country){
        getJson(
            `https://restcountries.eu/rest/v2/name/${country}`,
            'country not found' 
            )   
            .then(data=>{
                console.log(data);
                renderCountry(data[0])
                const neighbour=data.borders;
                if(!neighbour) return;
                return getJson(`https://restcountries.eu/rest/v2/name/${neighbour}`)
                .then(response=>response.json())
                .then(data=>renderCountry(data,'neighbour'))
                .catch(err=>renderError(`something went wrong + ${err.msg}`))
            })
        }
        btn.addEventListener('click',()=>{
            getCountryData('portugal');
        })



         // this is for reference
    //    const getCountryData=function(country){
    //         fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //         .then(response=>
    //           response.json()
            
    //         ) // this will create an new promise 
    //         .then(data=>{
    //             console.log(data);
    //             renderCountry(data[0])
    //             const neighbour=data.borders;
    //             if(!neighbour) return;
    //             return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`)
    //             .then(response=>response.json())
    //             .then(data=>renderCountry(data,'neighbour'))
    //             .catch(err=>renderError(`something went wrong + ${err.msg}`))
    //         })
    //     }