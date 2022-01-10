function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longtude;;
    console.log("You live in " ,lat, lng);
} 
function onGeoError(){
    alert("Cant't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);