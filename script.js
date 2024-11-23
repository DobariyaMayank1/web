const button = document.getElementById("btn")
const input = document.getElementById("input")

const cityname = document.getElementById("cityname")
const temp = document.getElementById("temp")
const condition = document.getElementById("condition")

const ln= document.getElementById("location_btn")


async function getData(cityName){

    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=d807b177cbee494da31130733242211&q=${cityName}&aqi=yes
`)
        return result.json()
}
async function getData(latitude,longitude){

    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=d807b177cbee494da31130733242211&q=${latitude},${longitude}&aqi=yes
`)
        return result.json()
}

button.addEventListener("click",async () => {
   // console.log(getData(input.value))
    
    const data = await getData(input.value);
    
        cityname.innerText = input.value ;
        temp.innerText  = data.current.temp_c;
        condition.innerText = data.current.condition.text

})
ln.addEventListener("click", async () => {

    navigator.geolocation.getCurrentPosition(async function(location) {
        const latitude =  location.coords.latitude;
        const longitude = location.coords.longitude;
        // console.log(getData(latitude,longitude))
        const data = await getData(latitude,longitude)

         cityname.innerText = data.location.name ;
        temp.innerText  = data.current.temp_c;
        condition.innerText = data.current.condition.text


    }, function() {
        console.log("not hello")
    });
  
})