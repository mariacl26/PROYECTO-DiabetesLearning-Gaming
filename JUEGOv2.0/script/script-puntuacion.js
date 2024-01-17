window.onload = function () {
  // Elementos y variables
  const preguntaElement = document.getElementById("pregunta"); // Elemento de la pregunta
  const opcionesElement = document.getElementById("opciones"); // Contenedor de opciones
  const dropzoneElement = document.getElementById("dropzone"); // Área donde se pueden soltar elementos
  const checkButton = document.getElementById("checkButton"); // Botón para verificar la respuesta
  const resultElement = document.getElementById("result"); // Elemento para mostrar el resultado
  const resetButton = document.getElementById("resetButton"); // Botón para reiniciar
  const changepreguntaButton = document.getElementById("changepreguntaButton"); // Botón para cambiar la pregunta
  const scoreElement = document.getElementById("scoreValue"); // Elemento para mostrar la puntuación

  let preguntas = []; // Pregunta actual
  let puntuacion = 0; // comienza la puntuación en 0

  // Función para cargar una pregunta
  function loadpregunta(preguntas, specificPregunta = null) {
    // Selecciona una pregunta al azar si no se proporciona una pregunta específica
    if (specificPregunta === null) {
      currentpregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
    } else {
      currentpregunta = specificPregunta;
    }
    // Mestra el texto de la pregunta en el elemento correspondiente
    preguntaElement.textContent = currentpregunta.pregunta;

    // Limpia el contenedor de opciones
    opcionesElement.innerHTML = "";
    // Crea elementos de imagen y texto para cada opción de la pregunta actual
    currentpregunta.opciones.forEach((option) => {
      const container = document.createElement("div"); // Contenedor para cada opción
      container.classList.add("option-container");

      const img = document.createElement("img");
      img.src = option.image;
      img.alt = option.alt;
      img.dataset.correct = option.correct ? "true" : "false";
      img.draggable = true;
      img.classList.add("option"); // Agrega la clase 'option' a cada imagen

      const text = document.createElement("p"); // elemento para mostrar el texto
      text.textContent = option.alt;
      text.classList.add("option-text");

      container.appendChild(img);
      container.appendChild(text);

      opcionesElement.appendChild(container); // Agrega el contenedor al contenedor de opciones
    });
  }

  // Obtiene preguntas desde un archivo JSON y carga una pregunta al inicio
  fetch("./datos/data.json")
    .then((response) => response.json())
    .then((data) => {
      preguntas = data.preguntas;
      loadpregunta(preguntas); // Carga una pregunta al azar al iniciar
    });

  // Evento para prevenir el comportamiento predeterminado al arrastrar sobre el área de destino
  dropzoneElement.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  // Evento al soltar un elemento en el área de destino
  dropzoneElement.addEventListener("drop", function (event) {
    event.preventDefault();
    const draggedElement = document.querySelector(".option.dragging");
    if (draggedElement && dropzoneElement.children.length === 0) {
      // Agrega la imagen al área de destino
      dropzoneElement.appendChild(draggedElement);

      // Agrega la descripción de la imagen al área de destino
      const description = document.createElement("p");
      description.textContent = draggedElement.alt;
      dropzoneElement.appendChild(description);
    }
  });

  // Evento al comenzar a arrastrar un elemento de las opciones
  opcionesElement.addEventListener("dragstart", function (event) {
    if (event.target.classList.contains("option")) {
      event.target.classList.add("dragging");
    }
  });

  // Evento al finalizar el arrastre de un elemento de las opciones
  opcionesElement.addEventListener("dragend", function (event) {
    if (event.target.classList.contains("option")) {
      event.target.classList.remove("dragging");
    }
  });

  // Evento al hacer clic en el botón de verificación
  checkButton.addEventListener("click", function () {
    const correctAnswer = dropzoneElement.querySelector(
      "[data-correct='true']"
    );
    const userAnswer = dropzoneElement.querySelector(".option");
    //Mensajes a mostrar segun la respuesta del usuario
    // tres posibles situaciones: resp correcta, incorrecta o no resp
    if (userAnswer) {
      if (correctAnswer === userAnswer) {
        resultElement.textContent = "¡Respuesta correcta!";
        resultElement.style.color = "green";

        resetButton.style.display = "none";
        changepreguntaButton.style.display = "inline-block";
        changepreguntaButton.style.backgroundColor = "green";

        puntuacion++;
        scoreElement.textContent = puntuacion;
      } else {
        resultElement.innerHTML =
          "Respuesta incorrecta.<br> En el segundo icono por la izquierda tienes información sobre los elementos de las preguntas";
        resultElement.style.color = "red";

        // resetButton.style.display = "inline-block";
        changepreguntaButton.style.display = "inline-block";
        changepreguntaButton.style.backgroundColor = "red";

        // Resta un punto en la puntuación por respuesta incorrecta
        if (puntuacion > 0) {
          puntuacion--;
          scoreElement.textContent = puntuacion;
        }
      }
    } else {
      resultElement.textContent = "¡Por favor, arrastra una de las respuestas!";
      resultElement.style.color = "#2980B9";
    }
  });

  // Evento al hacer clic en el botón para cambiar la pregunta
  changepreguntaButton.addEventListener("click", function () {
    resultElement.textContent = "";
    changepreguntaButton.style.display = "none";
    const userAnswer = dropzoneElement.querySelector(".option");
    const description = dropzoneElement.querySelector("p");

    if (userAnswer) {
      userAnswer.remove();
    }

    if (description) {
      description.remove();
    }

    fetch("./datos/data.json")
      .then((response) => response.json())
      .then((data) => {
        const preguntas = data.preguntas;
        loadpregunta(preguntas);
      });
  });

  // Evento al hacer clic en el botón de reinicio
  resetButton.addEventListener("click", function () {
    resultElement.textContent = "";
    resetButton.style.display = "none";
    const userAnswer = dropzoneElement.querySelector(".option");
    const description = dropzoneElement.querySelector("p");

    if (userAnswer) {
      userAnswer.remove();
    }

    if (description) {
      description.remove();
    }

    loadpregunta(); // Carga una nueva pregunta al reiniciar
  });
};
