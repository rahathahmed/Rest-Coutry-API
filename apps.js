const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");
const container = document.getElementById("searchShow");
const error = document.getElementById("error");


// function searchresult(){ 
//     const searchText = searchField.value;
//     error.innerText="";
//     if(searchText === ''){ 
//         error.innerText="Blank  Search"
//     }
//     else{ 
//         container.innerHTML ='';
//         const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
//         fetch(url)
//         .then(res => res.json())
//         .then(data => { 
//             data.forEach(item => {
                
//                 const div = document.createElement("div");
//             div.classList.add("col-md-4");
//             div.innerHTML =`
//                 <div class="card" style="width: 18rem;">
//                     <img src="${item.flag}" class="card-img-top h-50" >
//                     <div class="card-body">
//                         <h5 class="card-title">${item.name}</h5>
//                         <p> <b>Population </b>${item.population} </p>
//                         <p> <b>Region </b>${item.region} </p>
//                         <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium provident praesentium error alias fugit magni, 
//                         </p>
//                          <a href="#" class="btn btn-success">More Deails</a>
//                     </div>
//                 </div>
//             `;
//             container.appendChild(div)
//             });
//         })
//     }
  
//     searchField.value="";
// }


// Number 2 Method With Error Handaling 
function searchresult(){ 
    const searchText = searchField.value;
        if(searchText === ""){ 
            error.innerText="Empty Search"
        }
        container.innerHTML ='';
        const url = `https://restcountries.eu/rest/v2/name/${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => { 
            if(data.status === 404){ 
                error.innerText="No Reuslt ";
            }
            else{
                error.innerText=""
            };
            data.forEach(item => {
              
                const div = document.createElement("div");
            div.classList.add("col-md-4");
            div.innerHTML =`
                <div class="card" style="width: 18rem;">
                    <img src="${item.flag}" class="card-img-top h-50" >
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p> <b>Population </b>${item.population} </p>
                        <p> <b>Region </b>${item.region} </p>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium provident praesentium error alias fugit magni, 
                        </p>
                         <a href="#" class="btn btn-success">More Deails</a>
                    </div>
                </div>
            `;
            container.appendChild(div)
            });
        })
   
  
    searchField.value="";
}
