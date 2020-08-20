
const country = document.getElementById("country");
const showTime = document.getElementById("showTime");
const totalCase = document.getElementById("case");
const totalRecover = document.getElementById("recover");
const totalDeath = document.getElementById("death");
const search = document.getElementById("search");
const submit = document.getElementById("submit");

fetch("https://coronavirus-19-api.herokuapp.com/all")
.then(respose => respose.json())
.then(data => {
    // console.log(data);
    showTime.innerHTML = new Date();
    totalCase.innerHTML = `${data.cases}`;
    totalRecover.innerHTML = `${data.recovered}`;
    totalDeath.innerHTML = `${data.deaths}`;
})

submit.addEventListener("click", () =>{
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            const allCountry = data[i];
            // console.log(allCountry);
            if(search.value === allCountry.country){
                country.innerHTML = `${allCountry.country}`;
                totalCase.innerHTML = `${allCountry.cases}
                <p>Today's Case:  ${allCountry.todayCases}</p>`;
                totalRecover.innerHTML = `${allCountry.recovered}
                <p>Active:  ${allCountry.active}</p>`;
                totalDeath.innerHTML = `${allCountry.deaths}
                <p>Today's Death:  ${allCountry.todayDeaths}</p>`;
            }
            
        }
        search.value = '';
    })
    
})
    

