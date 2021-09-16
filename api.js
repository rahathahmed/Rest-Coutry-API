const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const container =  document.getElementById("searchShow");
const error =  document.getElementById("error");
const info = document.getElementById("info");


/* 
This part to commect input & search result with fetch
*/

searchButton.addEventListener("click",function(){ 
     const searchText = searchField.value;
    //  container.textContent ="";
     if(searchText === ''){
         error.innerText="  আপনি কোন কিছু না লিখে সার্চ করেছেন !! দয়া করে কিছু লিখুন";
     }
     const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
     fetch(url)
     .then(res =>res.json())
     .then(data => showSearchResult(data));
     searchField.value ="";
    } 
  
)
const showSearchResult = country => { 

    if(country.status == 404){ 
        error.innerText = "দূঃখ্যিত!! কোন রিজাল্ট পাওয়া যায় নি";
      return
    }
    else{ 
        error.innerText = "";
    }
    
   
    error.innerText = "";
    country.forEach(item => {
       
       const div = document.createElement("div");
       div.classList.add("col-md-3")
       div.innerHTML = ` 
       <div class="card" style="width: 18rem;">
        <img src="${item.flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
           <p class="card-text">Region: ${item.region}</p>
           <p class="card-text">Capital City: ${item.capital}</p>
           <p class="card-text">Population: ${item.population}</p>
          
           <a href="#" onclick="showDetails('${item.alpha3Code}')" class="btn btn-success">More details</a>
          </div>
       </div>
       `;
   
       container.appendChild(div)

    });

}


function showDetails(alpha3Code){ 
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
    .then(res => res.json())
    .then(alpha => { 
        console.log(alpha);
        info.innerHTML =` 
        <div class="card text-center">
            
            <div class="card-body">
                <h5 class="card-title">${alpha.name}</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <h6 class="card-title">Alpha Code : ${alpha.alpha2Code}</h6>
                <h6 class="card-title">Capital : ${alpha.capital}</h6>
                <h6 class="card-title">Currency : ${alpha.currencies[0].code}</h6>
                <h6 class="card-title">Symbol : ${alpha.currencies[0].symbol}</h6>
                
            </div>
            
        </div>
        `

    })
}

// function showDisplay(info){ 
// console.log(info.name);
// 
// }