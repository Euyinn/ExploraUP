// Diccionario con la información de cada lugar
const lugares = {
    biblioteca: {
        titulo: "Biblioteca",
        descripcion: "Colección extensa de libros, revistas y salas de estudio para trabajos individuales o en grupo."
    },
    cafeteria: {
        titulo: "Cafetería",
        descripcion: "Espacio para disfrutar de comidas y bebidas a precios accesibles para toda la comunidad universitaria."
    },
    cidete: {
        titulo: "CIDETE",
        descripcion: "Centro de Innovación y Desarrollo Tecnológico para proyectos de investigación y eventos académicos."
    },
    pinacoteca: {
        titulo: "Pinacoteca",
        descripcion: "Sala para exposiciones de arte local e internacional, fomentando la cultura universitaria."
    },
    salones100: {
        titulo: "Salones 100",
        descripcion: "Aulas del bloque 100, destinadas principalmente a clases de humanidades y seminarios."
    },
    salones200: {
        titulo: "Salones 200",
        descripcion: "Aulas del bloque 200, utilizadas por diversas facultades para cursos introductorios."
    },
    salones300: {
        titulo: "Salones 300",
        descripcion: "Espacios diseñados para clases prácticas y teóricas de ciencias y tecnología."
    },
    salones400: {
        titulo: "Salones 400",
        descripcion: "Aulas amplias para conferencias y talleres interfacultativos."
    },
    salones500: {
        titulo: "Salones 500",
        descripcion: "Salones modernos con equipos multimedia, ideales para exposiciones y defensas de proyectos."
    },
    laboratorios: {
        titulo: "Laboratorios",
        descripcion: "Laboratorios equipados para prácticas de informática, electrónica, química y biología."
    }
};

// Mostrar la información
function mostrarInfo(lugar) {
    const infoDiv = document.getElementById("infoLugar");
    if (lugares[lugar]) {
        infoDiv.innerHTML = `<h2>${lugares[lugar].titulo}</h2>
                             <p>${lugares[lugar].descripcion}</p>`;
    } else {
        infoDiv.innerHTML = "<p>No hay información disponible para este lugar.</p>";
    }
}
