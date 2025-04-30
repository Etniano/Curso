document.addEventListener("DOMContentLoaded", function () {
    let solicitudes = [];

    const destinos = [
        { nombre: "París", descripcion: "Explora la ciudad del amor." },
        { nombre: "Roma", descripcion: "Historia y cultura en cada esquina." },
        { nombre: "Maldivas", descripcion: "Playas paradisíacas para relajarte." }
    ];

    const cardContainer = document.getElementById("cardContainer");
    destinos.forEach(destino => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>${destino.nombre}</h3><p>${destino.descripcion}</p>`;
        cardContainer.appendChild(card);
    });

    const formContainer = document.getElementById("formContainer");
    let form = document.createElement("form");
    form.id = "travelForm";

    const campos = [
        { id: "nombre", type: "text", placeholder: "Nombre" },
        { id: "origen", type: "text", placeholder: "Origen" },
        { id: "destino", type: "text", placeholder: "Destino" },
        { id: "personas", type: "number", placeholder: "Número de personas" },
        { id: "fecha", type: "date", placeholder: "Fecha" }
    ];

    campos.forEach(campo => {
        let input = document.createElement("input");
        input.type = campo.type;
        input.id = campo.id;
        input.placeholder = campo.placeholder;
        input.required = true;
        form.appendChild(input);
    });

    let solicitarBtn = document.createElement("button");
    solicitarBtn.type = "button";
    solicitarBtn.id = "solicitar";
    solicitarBtn.textContent = "Solicitar Información";

    let filtrarBtn = document.createElement("button");
    filtrarBtn.type = "button";
    filtrarBtn.id = "filtrar";
    filtrarBtn.textContent = "Filtrar";

    form.appendChild(solicitarBtn);
    form.appendChild(filtrarBtn);
    formContainer.appendChild(form);

    solicitarBtn.addEventListener("click", function () 
    {
        let solicitud = {
            nombre: document.getElementById("nombre").value,
            origen: document.getElementById("origen").value,
            destino: document.getElementById("destino").value,
            personas: document.getElementById("personas").value,
            fecha: document.getElementById("fecha").value
        };

        solicitudes.push(solicitud);
        console.log("Solicitud guardada:", solicitud);
    });
});