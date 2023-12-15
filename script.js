document.addEventListener("DOMContentLoaded", function () {
    // Variables globales
    let tiempoRestante;
    let temporizador;
    let enPausa = true; // Inicialmente, el cronómetro está en pausa

    // Función para actualizar el tiempo en el cronómetro
    function actualizarTiempo() {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        document.getElementById("tiempo").innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    }

    // Función para cambiar el fondo de la página
    function changeBackgroundColor(color) {
        document.getElementById("main-container").style.backgroundColor = color;
    }

    // Función para reproducir el sonido
    function reproducirSonido() {
        document.getElementById("audio").play();
    }

    // Función para reproducir el sonido de alerta
    function reproducirSonidoAlerta() {
        document.getElementById("alerta").play();
    }

    // Función para cambiar los estilos de los botones y el encabezado
    function updateButtonAndHeaderStyles(color) {
        const buttons = document.querySelectorAll('.botones li button');
        buttons.forEach(button => {
            button.style.backgroundColor = color;
            button.style.borderColor = '#ffffff'; // Establecer el color del borde a blanco
            button.style.color = '#000000'; // Establecer el color del texto a negro (o el color deseado)
        });

        // Cambia el color de fondo del encabezado
        document.querySelector('header').style.backgroundColor = color;
    }

    // Función para restablecer el cronómetro al estado inicial
    function restablecerCronometro() {
        clearInterval(temporizador);
        enPausa = true;
        document.getElementById("iniciar").innerText = "Iniciar";
        const colorFondo = '#D7BDE2'; // Color de fondo predeterminado
        changeBackgroundColor(colorFondo); // Restablecer el color de fondo
        updateButtonAndHeaderStyles(colorFondo); // Actualizar los estilos de los botones y el encabezado
        tiempoRestante = 1500; // 25 minutos
        actualizarTiempo();
    }

    // Función para iniciar o pausar el cronómetro
    function alternarCronometro() {
        if (enPausa) {
            // Si el cronómetro está en pausa, iniciar
            temporizador = setInterval(function () {
                if (tiempoRestante > 0) {
                    tiempoRestante--;
                    actualizarTiempo();
                } else {
                    clearInterval(temporizador);
                    reproducirSonidoAlerta();
                    restablecerCronometro(); // Restablecer el cronómetro al llegar a cero
                }
            }, 1000);

            // Reproducir sonido al iniciar
            reproducirSonido();

            document.getElementById("iniciar").innerText = "Pausar";
        } else {
            // Si el cronómetro está en ejecución, pausar
            clearInterval(temporizador);
            document.getElementById("iniciar").innerText = "Iniciar";

            // Reproducir sonido al detener
            reproducirSonido();
        }
        enPausa = !enPausa; // Cambiar el estado de pausa
    }

    // Evento para el botón de iniciar/pausar
    document.getElementById("iniciar").addEventListener("click", alternarCronometro);

    // Evento para el botón "Enfocar"
    document.getElementById("enfocar").addEventListener("click", function () {
        tiempoRestante = 1500; // 25 minutos
        actualizarTiempo();
        reproducirSonido();
        changeBackgroundColor('#A2D9CE'); // Color 
        updateButtonAndHeaderStyles('#A2D9CE'); // Cambia los estilos de los botones y el encabezado
    });

    // Evento para el botón "Corto descanso"
    document.getElementById("cortoDescanso").addEventListener("click", function () {
        if (!enPausa) {
            clearInterval(temporizador); // Pausar el cronómetro si está en ejecución
            enPausa = true;
            document.getElementById("iniciar").innerText = "Iniciar";
        }

        // Establecer el tiempo a 300 segundos (5 minutos) para corto descanso
        tiempoRestante = 300;
        actualizarTiempo();
        reproducirSonido();
        changeBackgroundColor('#F7DC6F'); // Color
        updateButtonAndHeaderStyles('#F7DC6F'); // Cambia los estilos de los botones y el encabezado
    });

    // Evento para el botón "Largo descanso"
    document.getElementById("largoDescanso").addEventListener("click", function () {
        if (!enPausa) {
            clearInterval(temporizador);
            enPausa = true;
            document.getElementById("iniciar").innerText = "Iniciar";
        }
        tiempoRestante = 900;
        actualizarTiempo();
        reproducirSonido();
        changeBackgroundColor('#87CEEB');
        updateButtonAndHeaderStyles('#87CEEB'); // Cambia los estilos de los botones y el encabezado
    });

    // Inicializar el tiempo al cargar la página
    tiempoRestante = 1500; // 25 minutos
    actualizarTiempo();
});



