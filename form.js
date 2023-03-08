const navBoton = document.querySelector(".barr")
const navMenu = document.querySelector(".barmenu")

navBoton.addEventListener("click", () => {
navMenu.classList.toggle("barmenu_visible")
})

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: false,
	empresa: false,
	correo: false,
	telefono: false,
}

const form = document.getElementById("formulario");
const inputs = document.querySelectorAll(".formulario input");

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "empresa":
            validarCampo(expresiones.nombre, e.target, "empresa");
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
        }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(campo).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(campo).classList.add('formulario__grupo-correcto');
        campos[campo] = true

	} else {
		document.getElementById(campo).classList.add('formulario__grupo-incorrecto');
		document.getElementById(campo).classList.remove('formulario__grupo-correcto');
        campos[campo] = false
	}
}

inputs.forEach((input) => {
    input.addEventListener ("keyup", validarFormulario);
    input.addEventListener ("blur", validarFormulario);
} )

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(campos.nombre && campos.empresa && campos.correo && campos.telefono){
		formulario.reset();
        document.getElementById("gracias").style.display = "block";
        document.getElementById("error_form").style.display = "none";

        for (let i =0; i < Object.keys(campos).length; i++){
        document.getElementById(Object.keys(campos)[i]).classList.remove('formulario__grupo-correcto');
        campos[Object.keys(campos)[i]] = false
        }
    }else {
        document.getElementById("gracias").style.display = "none";
        document.getElementById("error_form").style.display = "block";
    }
})