function verificarEdad() {
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    if (edad >= 18) {
        document.getElementById('resultado').innerText = "Es mayor de edad en Colombia.";
    } else {
        document.getElementById('resultado').innerText = "No es mayor de edad en Colombia.";
    }
}