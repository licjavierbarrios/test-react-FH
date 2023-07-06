// Obtener referencias a los elementos del DOM
const dropzone = document.getElementById("dropzone");
const preview = document.getElementById("preview");

// Evitar el comportamiento predeterminado de arrastrar y soltar
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Procesar el archivo cuando se suelta en la zona de arrastre
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];

  // Verificar si el archivo es una imagen
  if (file.type.match("image.*")) {
    const reader = new FileReader();
    // Leer el acrchivo como una URL de datos
    reader.readAsDataURL(file);

    // Subir el archivo al servidor
    reader.readeAsArrayBuffer(file);
    //etc

    // Manejar el evento de carga del archivo
    reader.onload = (e) => {
      // Mostrar la imagen en la página
      preview.src = e.target.result;
      preview.style.display = "block";
    };
  } else {
    alert("El archivo no es una imagen");
  }
});
