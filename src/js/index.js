const camposFormulario = document.querySelectorAll("#text")
const botaoEnviar = document.getElementById("btn-enviar")

botaoEnviar.addEventListener("click", (enviado) => {
    enviado.preventDefault()
    
    camposFormulario.forEach((input) => {
        if (input.value === "") {
            input.classList.add("invalido")
            input.nextElementSibling.classList.add("mostrar-error")
        } else {
            input.classList.remove("invalido")
            input.classList.add("valido")
            input.nextElementSibling.classList.remove("mostrar-error")
        }
    })
})
