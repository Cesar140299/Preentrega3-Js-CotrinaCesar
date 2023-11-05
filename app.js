// Boton de cambio de color
const color_mode_button = document.querySelector("#color_mode")
const body = document.body;
const h1 = document.querySelector("h1");
const solicitar_turno = document.querySelector(".solicitar_turno");
const mis_turnos = document.querySelector(".mis_turnos")


// Metodo 1 para cambiar a modo oscuro

// color_mode_button.addEventListener("click", cambiar_modo_color)

// function cambiar_modo_color() {
//     body.classList.toggle("modo_oscuro");
//     h1.classList.toggle("dark");
//     solicitar_turno.classList.toggle("dark");
//     mis_turnos.classList.toggle("dark");


//     if (body.classList.contains("modo_oscuro")) {
//         color_mode_button.innerText = "Cambiar a modo claro"
//     } else {
//         color_mode_button.innerText = "Cambiar a modo oscuro"
//     }
    
// }

// Metodo 2 para cambiar a modo oscuro
let dark_mode = localStorage.getItem("dark-mode")

function activar_dark_mode() {
    body.classList.add("modo_oscuro");
    h1.classList.add("dark");
    solicitar_turno.classList.add("dark");
    mis_turnos.classList.add("dark");
    localStorage.setItem("dark-mode", "activado")
}

function desactivar_dark_mode() {
    body.classList.remove("modo_oscuro");
    h1.classList.remove("dark");
    solicitar_turno.classList.remove("dark");
    mis_turnos.classList.remove("dark");
    localStorage.setItem("dark-mode", "desactivado")
}

if (dark_mode==="activado") {
    activar_dark_mode()
} else {
    desactivar_dark_mode()
}

color_mode_button.addEventListener("click", () => {
    dark_mode = localStorage.getItem("dark-mode");
    if (dark_mode === "activado") {
        desactivar_dark_mode()
    } else {
        activar_dark_mode()
    }
})


// Evento Agendar Turno

const agendar_turno = document.querySelector(".solicitar_turno--formulario")
const nombre_ingresado = document.querySelector(".nombre")
const apellido_ingresado = document.querySelector(".apellido")
const dni_ingresado = document.querySelector(".dni")
const fecha_ingresada = document.querySelector(".fecha")

const abajo_turnos = document.querySelector(".abajo_solicitar_turno")


agendar_turno.addEventListener("submit", agendar)
// const turnos = []


function agendar(e) {
    e.preventDefault();
    function Turno(nombre, apellido, dni, fecha) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.fecha = fecha
    }
    let nombre = nombre_ingresado.value
    let apellido = apellido_ingresado.value
    let dni = dni_ingresado.value
    let fecha = fecha_ingresada.value
    
    nuevo_turno = new Turno(nombre, apellido, dni, fecha)
    // console.log(nuevo_turno)
    agregar ();
    agendar_turno.reset();
}

let base_de_datos = []
function agregar() {
    base_de_datos.push(nuevo_turno)
    localStorage.setItem("turno_registrado", JSON.stringify(base_de_datos))
    abajo_turnos.innerText =`${nuevo_turno.nombre}, su turno ha sido registrado correctamente.`
}



// Ver turnos Registrados

const turnos_registrados = document.querySelector(".mis_turnos--formulario")
const ver_turnos = document.querySelector(".mis_turnos--input")
const abajo_mis_turnos = document.querySelector(".abajo_mis_turnos")


turnos_registrados.addEventListener("submit", mostrar_turnos)
let nuevos_turnos_LS = JSON.parse(localStorage.getItem("turno_registrado"))






function mostrar_turnos(m) {
    m.preventDefault();
    if (nuevos_turnos_LS.find(turno => turno.dni == ver_turnos.value)) {
        position = nuevos_turnos_LS.findIndex(index => index.dni == ver_turnos.value)
        // console.log(nuevos_turnos_LS[position].nombre)
        abajo_mis_turnos.innerText = `${nuevos_turnos_LS[position].nombre} ${nuevos_turnos_LS[position].apellido}, usted tiene un turno registrado para el dia ${nuevos_turnos_LS[position].fecha}`
        
    } else {
        abajo_mis_turnos.innerText = `Usted no tiene turnos registrados`
    }
}




