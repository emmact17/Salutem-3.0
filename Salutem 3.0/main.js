function calculate() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  if (weight !== '' && height !== '') {
    var bmi = weight / ((height / 100) ** 2);
    var result = document.getElementById('result');
    var advice = document.getElementById('advice');
    result.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);

    // Clasificacion del IMC
    if (bmi < 18.5) {
      result.innerHTML += ' - Bajo Peso';
      advice.innerHTML = 'Consulta con tu nutriólogo una dieta para aumentar tu peso de manera saludable.';
    } else if (bmi < 25) {
      result.innerHTML += ' - Peso Normal';
      advice.innerHTML = 'Felicidades gozas de buen peso, consulta con tu nutriologo una dieta para mantenerte en forma.';
    } else if (bmi < 30) {
      result.innerHTML += ' - Sobrepeso';
      advice.innerHTML = 'Consulta con tu nutriólogo una dieta para bajar de peso de manera saludable.';
    } else {
      result.innerHTML += ' - Obesidad';
      advice.innerHTML = 'Tu salud está riesgo, consulta con tu nutriólogo para saber la causa de el sobrepeso y poder solucionarla de manera saludable.';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Muestra el loader
  document.getElementById('loader').style.opacity = '1';

  // Función para ocultar el loader con un efecto de fade out
  function hideWithFadeOut() {
    var loader = document.getElementById('loader');
    loader.style.opacity = '0'; // Cambia la opacidad a 0
    // Espera un poco antes de eliminar el loader
    setTimeout(function() { 
      loader.style.display = 'none';
    }, 500); // Tiempo de la animación + un pequeño retraso
  }

  // Oculta el loader después de 3 segundos
  setTimeout(hideWithFadeOut, 1000);
});