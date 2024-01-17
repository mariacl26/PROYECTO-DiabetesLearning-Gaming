window.onload = function () {



    // Lista de noticias
    // Array con objetos que contienen información sobre cada noticia
    const noticias = [
        {
            titulo: "Un estudio constata que mejorar el estilo de vida puede frenar el desarrollo de diabetes",
            cuerpo: "El número de personas con diabetes en España se ha incrementado en un 42% desde el 2019,según advierte la Sociedad Española de Diabetes con motivo del Día Mundial de...",
            foto: "./fotos/deporte1.jpeg",
            enlace: "https://elpais.com/salud-y-bienestar/2023-11-15/un-estudio-constata-que-mejorar-el-estilo-de-vida-puede-frenar-el-desarrollo-de-diabetes.html"
        },
        {
            titulo: "Una terapia aparcada durante un siglo se convierte en alternativa para la obesidad o la diabetes",
            cuerpo: "Los fagos, virus que infectan a bacterias, pueden ser útiles para reparar los desequilibrios en la microbiota detrás de la depresión o el colon irritable...",
            foto: "./fotos/consulta_medica5.jpeg",
            enlace: "https://elpais.com/salud-y-bienestar/2023-10-19/una-terapia-aparcada-durante-un-siglo-se-convierte-en-alternativa-para-la-obesidad-o-la-diabetes.html"
        },
        {
            titulo: "Enfoque 'antidieta': cuando la alimentación intuitiva está contraindicada",
            cuerpo: "Este tipo de planteamiento nutricional tiene sentido solo cuando no existen trastornos de la conducta alimentaria ni enfermedades como la diabetes...",
            foto: "./fotos/tabla_indice_glucemico.jpeg",
            enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2023-11-06/enfoque-antidieta-cuando-la-alimentacion-intuitiva-esta-contraindicada.html"
        },
        {
            titulo: "Sanidad alerta de un fallo en una App para diabéticos que administra insulina en exceso",
            cuerpo: "El error afecta a la aplicación mylife CamAPS FX, de la plataforma android en la versión 1.4 (172) y anteriores...",
            foto: "./fotos/simulacion.jpeg",
            enlace: "https://www.elmundo.es/ciencia-y-salud/salud/2023/09/08/64fb38f3fdddff28218b45b9.html"
        },
        {
            titulo: "DIABETES MELLITUS Y SALUD MENTAL",
            cuerpo: "La Diabetes mellitus, representa actualmente un importante problema de salud mundial al ser una enfermedad crónica, produce un deterioro progresivo de la calidad de vida de la persona que la padece...",
            foto: "./fotos/terapia.jpeg",
            enlace: "https://www.noticieromedico.com/post/diabetes-mellitus-y-salud-mental"
        },
        {
            titulo: "Ultraprocesados: no lo llamemos comida porque no lo es",
            cuerpo: "No son alimentos, sino preparaciones industriales comestibles y su consumo habitual tiene consecuencias negativas sobre la salud en el nivel físico y mental...",
            foto: "./fotos/valor_nutricional.jpeg",
            enlace: "https://elpais.com/salud-y-bienestar/nutrir-con-ciencia/2023-05-23/ultraprocesados-no-lo-llamemos-comida-porque-no-lo-es.html"
        },
        {
            titulo: "EEUU registra y vigila nuevos efectos secundarios de los inyectables para adelgazar",
            cuerpo: "Pacientes que han usado Ozempic y Wegovy denuncian eventos adversos en su estómago hasta un año después de dejar la medicación..",
            foto: "./fotos/medico_paciente.jpeg",
            enlace: "https://www.elmundo.es/ciencia-y-salud/salud/2023/07/27/64c2614dfc6c835f258b45b2.html"
        },
        {
            titulo: "La diabetes ha aumentado un 42% en solo cuatro años y afecta ya a uno de cada siete adultos",
            cuerpo: "El número de personas con diabetes en España se ha incrementado en un 42% desde el 2019, según advierte la Sociedad Española de Diabetes con motivo del Día Mundial de...",
            foto: "./fotos/escena_matutina.jpeg",
            enlace: "https://www.rtve.es/noticias/20231114/diabetes-aumenta-42-desde-2019-afecta-uno-siete-adultos/2460819.shtml"
        }];
    // Elementos HTML

    //

    // Obtener el enlace de registro y el bloque del formulario
    const registroLink = document.getElementById("registro-link");
    const formularioInscripcion = document.getElementById("formulario-inscripcion");
    const cerrarFormulario = document.querySelector(".cerrar-formulario");

    cerrarFormulario.addEventListener("click", () => {
        formularioInscripcion.classList.remove("mostrar");
    });

    registroLink.addEventListener("click", function (event) {
        event.preventDefault();
        formularioInscripcion.classList.toggle("mostrar"); // Alternar la clase "mostrar" para mostrar u ocultar el formulario
    })


    //
    const galeriaNoticias = document.querySelector(".galeria-noticias");
    const carruselNoticias = document.querySelector(".carrusel-noticias");
    //creación de las noticias en la galería y el carrusel

    noticias.forEach(noticia => {
        const noticiaDiv = document.createElement("div");
        noticiaDiv.classList.add("noticia");

        const noticiaImagen = document.createElement("img");
        noticiaImagen.src = noticia.foto;

        const noticiaInfo = document.createElement("div");
        noticiaInfo.classList.add("hover-info");

        const noticiaTitulo = document.createElement("h3");
        noticiaTitulo.textContent = noticia.titulo;

        const noticiaEnlace = document.createElement("a");
        noticiaEnlace.href = noticia.enlace;
        noticiaEnlace.textContent = "";
        noticiaEnlace.classList.add("hover-info");


        noticiaInfo.appendChild(noticiaTitulo);
        noticiaDiv.appendChild(noticiaImagen);
        noticiaDiv.appendChild(noticiaInfo);
        noticiaInfo.appendChild(noticiaEnlace);
        galeriaNoticias.appendChild(noticiaDiv);

        const noticiaCarrusel = document.createElement("div");
        noticiaCarrusel.classList.add("noticia");

        const noticiaImagenCarrusel = document.createElement("img");
        noticiaImagenCarrusel.src = noticia.foto;

        const noticiaTituloCarrusel = document.createElement("h3");
        noticiaTituloCarrusel.textContent = noticia.titulo;

        const noticiaCuerpoCarrusel = document.createElement("p");
        noticiaCuerpoCarrusel.textContent = noticia.cuerpo;

        const noticiaEnlaceCarrusel = document.createElement("a");
        noticiaEnlaceCarrusel.href = noticia.enlace;
        noticiaEnlaceCarrusel.textContent = "Leer más";

        noticiaCarrusel.appendChild(noticiaImagenCarrusel);
        noticiaCarrusel.appendChild(noticiaTituloCarrusel);
        noticiaCarrusel.appendChild(noticiaCuerpoCarrusel);
        noticiaCarrusel.appendChild(noticiaEnlaceCarrusel);
        carruselNoticias.appendChild(noticiaCarrusel);
    });
    
    // Elementos adicionales del carrusel
    const botonesCarrusel = document.querySelector(".botones-carrusel");
    const botonVistaCarrusel = document.querySelector(".boton-vista-carrusel");
    const botonVistaGaleria = document.querySelector(".boton-vista-galeria");

    // creo el evento al hacer clic en "Vista carrusel"
    botonVistaCarrusel.addEventListener("click", () => {
        const galeriaNoticias = document.querySelector(".galeria-noticias");
        const carruselNoticias = document.querySelector(".carrusel-noticias");

        galeriaNoticias.style.display = "none";
        carruselNoticias.style.display = "block";

        // Muestra los botones del carrusel
        botonesCarrusel.classList.remove("oculto");
    });

    // creo el evento al hacer clic en "Vista galería"

    botonVistaGaleria.addEventListener("click", () => {
        const galeriaNoticias = document.querySelector(".galeria-noticias");
        const carruselNoticias = document.querySelector(".carrusel-noticias");

        galeriaNoticias.style.display = "block";
        carruselNoticias.style.display = "none";

        // Oculta los botones del carrusel
        botonesCarrusel.classList.add("oculto");
    });

    // configuración para mostrar las noticias en el carrusel por páginas, de una en una
    const noticiasPorPagina = 1;
    let paginaActual = 0;

    //función para mostrar las noticias por página en el carrusel
    function mostrarPagina() {
        const noticias = document.querySelectorAll(".carrusel-noticias .noticia");
        const inicio = paginaActual * noticiasPorPagina;
        const fin = inicio + noticiasPorPagina;

        noticias.forEach((noticia, index) => {
            if (index >= inicio && index < fin) {
                noticia.style.display = "block";
            } else {
                noticia.style.display = "none";
            }
        });
    }

    // función para cambar de página en el carrusel
    function cambiarPagina(direccion) {
        const cantidadPaginas = Math.ceil(noticias.length / noticiasPorPagina);
        paginaActual = (paginaActual + direccion + cantidadPaginas) % cantidadPaginas;
        mostrarPagina();
    }

    // se crea el evento al hacer clic en Anterior y Siguiente en el carrusel
    document.getElementById("anterior").addEventListener("click", () => cambiarPagina(-1));
    document.getElementById("siguiente").addEventListener("click", () => cambiarPagina(1));

    mostrarPagina();

    // Función para cambiar de página automáticamente
    function cambiarPaginaAutomaticamente() {
        // cambia a la siguiente página (derecha)
        cambiarPagina(1);
    }

    // Intervalo para cambiar automáticamente de página cada 4 segundos 
    const intervalo = setInterval(cambiarPaginaAutomaticamente, 4000);//milisegundo


}



