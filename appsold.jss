const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const container = document.getElementById("searchShow");
const error = document.getElementById("error");


function searchresult(){ 
    const searchText = searchField.value;
    const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showSearchResult(data))
    if(searchText === ""){ 
        error.innerText="Empty Search";
    };
    searchField.value = "";
}
function showSearchResult (countrys){ 
   
    container.innerHTML ="";
    
   
    for( country of countrys){ 
    
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML =`
            <div class="card" style="width: 18rem;">
                <img src="${country.flag}" class="card-img-top h-50" >
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p> <b>Population </b>${country.population} </p>
                    <p> <b>Region </b>${country.region} </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium provident praesentium error alias fugit magni, 
                    </p>
                     <a href="#" class="btn btn-success">More Deails</a>
                </div>
            </div>
        `;
        container.appendChild(div)
    }

}