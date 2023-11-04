const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");


function clearfun(){
  document.getElementById("celsius").value=""
document.getElementById("fahrenheit").value=""
document.getElementById("kelvin").value=""
}
function computeTemp() {
  let currentValue
  if((celsiusEl.value)){
    
    currentValue=celsiusEl.value
    kelvinEl.value = (Number(currentValue) + 273.32);
    fahrenheitEl.value = (Number(currentValue) * 1.8 + 32);
    
  }
  else if(fahrenheitEl.value){
    
    currentValue=fahrenheitEl.value
    celsiusEl.value = ((Number(currentValue) - 32) / 1.8);
    kelvinEl.value = ((Number(currentValue) - 32) / 1.8 + 273.32);
    
  }
  else {
    
    currentValue=kelvinEl.value
    celsiusEl.value = (Number(currentValue) -273.32);
    fahrenheitEl.value = ((Number(currentValue) - 273.32) * 1.8 + 32);
  }

}