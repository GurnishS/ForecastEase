function getWeather(region){
    const url=base_url+region;
let promise=fetch(url);
promise.then(function(response){
    return response.json();
}).then(function(json){
    console.log(json);
    let temp=json.current.temperature;
    nav_temp.innerText=temp+"°C";
    main_temp.innerText=temp+"°C";
    document.getElementById("nav").children[0].innerText=json.location.name+", "+json.location.region;
    document.getElementById("time").children[1].innerText=json.location.localtime.slice(11);
    document.getElementById("temp_info").children[1].innerText=json.current.weather_descriptions[0];
    list1.children[0].innerText=":  "+json.current.humidity+'%';
    list1.children[1].innerText=":  "+json.current.pressure+' mb';
    list1.children[2].innerText=":  "+json.current.wind_speed+" km/h";
    list1.children[3].innerText=":  "+json.current.wind_dir;
    list1.children[4].innerText=":  "+json.current.wind_degree+"°";
    list2.children[0].innerText=":  "+json.current.precip+" mm";
    list2.children[1].innerText=":  "+json.current.cloudcover+"%";
    list2.children[2].innerText=":  "+json.current.uv_index;
    list2.children[3].innerText=":  "+json.current.visibility+" km";
    list2.children[4].innerText=":  "+json.current.observation_time;
    document.getElementById("nav").children[2].setAttribute("src",json.current.weather_icons[0]);
    document.getElementById("temprature").children[1].setAttribute("src",json.current.weather_icons[0]);
    const date=new Date(json.location.localtime.slice(0,10));
    const day=date.getDay();
    const month=date.getMonth();
    document.getElementById("date").innerText=day_name[day]+", "+month_name[month]+" "+date.getDate();
    
}).catch(function(error){
    console.log(error);
});
}


const base_url="https://api.weatherstack.com/current?access_key=130ea05200edeff5a86a6faa9739ff0f&query=";

let region="Kota,Rajasthan,India";

const input=document.getElementById("location");
console.dir(input); // Display the properties of the input element

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        let region=input.value;
        getWeather(region);
    }
});

const nav_temp=document.getElementById("temp_heading");
const main_temp=document.getElementById("temprature").firstElementChild;
const list1=document.getElementById("details_val1");
const list2=document.getElementById("details_val2");

const month_name=["January","February","March","April","May","June","July","August","September","October","November","December"];
const day_name=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.dir(main_temp);

getWeather(region);

