document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

 let temperatureC = 5; 
  let windSpeedKmh = 10;
 function calcularSensacaoTermica(t, v) {
    if (t <= 10 && v > 4.8) {
      let wci = 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) +
                0.3965 * t * Math.pow(v, 0.16);
      return wci.toFixed(1);
    } else {
      return "N/A";
    }
  }

window.onload = function () {
    let sensacao = calcularSensacaoTermica(temperatureC, windSpeedKmh);
    document.getElementById("windchill").textContent = `${sensacao} °C`;
};