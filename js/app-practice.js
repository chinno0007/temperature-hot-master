const API_KEYS=`c1f6a6c7af4ec8d0fcd06ac9522d87af`;

const loadTemperature =city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`;
    

    fetch(url)
    .then(res=>res.json())
    .then(data =>displayTemperature(data));
}
const displayTemperature=data=>{
    const temp=document.getElementById('temperature');
    // console.log(data.main.temp)
    // temp.innerText=data.main.temp;
    setInnertextById('temperature', data.main.temp);
    setInnertextById('condition',data.weather[0].main )
    

}

const setInnertextById=(id,text)=>{
    const temperature= document.getElementById(id);
    temperature.innerText=text
}


document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    
    const city=searchField.value;
    document.getElementById('city').innerText=city;
    loadTemperature(city);

});

loadTemperature('Dhaka');


