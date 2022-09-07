// Do not show your api key publicly in your js file
const API_KEY=`c1f6a6c7af4ec8d0fcd06ac9522d87af`;

const loadTemperature = city=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch (url)
    .then(res=>res.json())
    .then(data=> displayTemperature(data))
}

const displayTemperature =data=>{
    const temperature=document.getElementById('temperature');
    
    // console.log(data.main.temp);
    // temperature.innerText=data.main.temp;

    setInnerTextByID('temperature', data.main.temp);
    setInnerTextByID('condition', data.weather[0].main)
    console.log(data.weather[0].main)
}

const setInnerTextByID = (id,text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText=text;
}


document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    
    const city=searchField.value;
    document.getElementById('city').innerText=city;
    loadTemperature(city);

});

loadTemperature('Dhaka');