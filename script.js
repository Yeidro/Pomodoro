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

    // Función para iniciar o pausar el cronómetro
    function alternarCronometro() {
        if (enPausa) {
            // Si el cronómetro está en pausa, iniciar
            temporizador = setInterval(function () {
                if (tiempoRestante > 0) {
                    tiempoRestante--;
                    actualizarTiempo();
                } else {
                    // Aquí puedes agregar lógica adicional al llegar a cero
                    clearInterval(temporizador);
                    alert("¡Tiempo completado!");
                }
            }, 1000);
            document.getElementById("iniciar").innerText = "Pausar";
        } else {
            // Si el cronómetro está en ejecución, pausar
            clearInterval(temporizador);
            document.getElementById("iniciar").innerText = "Iniciar";
        }
        enPausa = !enPausa; // Cambiar el estado de pausa
    }

    // Evento para el botón de iniciar/pausar
    document.getElementById("iniciar").addEventListener("click", alternarCronometro);

    // Evento para el botón "Enfocar"
    document.getElementById("enfocar").addEventListener("click", function () {
        tiempoRestante = 1500; // 25 minutos
        actualizarTiempo();
        // Aquí puedes agregar lógica adicional para el botón "Enfocar"
    });

    // Evento para el botón "Corto descanso"
    document.getElementById("cortoDescanso").addEventListener("click", function () {
        if (!enPausa) {
            clearInterval(temporizador); // Pausar el cronómetro si está en ejecución
            enPausa = true;
            document.getElementById("iniciar").innerText = "Iniciar";
        }
        tiempoRestante = 300; // 5 minutos (corto descanso)
        actualizarTiempo();
        // Aquí puedes agregar lógica adicional para el botón "Corto descanso"
    });

    // Evento para el botón "Largo descanso"
    document.getElementById("largoDescanso").addEventListener("click", function () {
        if (!enPausa) {
            clearInterval(temporizador); // Pausar el cronómetro si está en ejecución
            enPausa = true;
            document.getElementById("iniciar").innerText = "Iniciar";
        }
        tiempoRestante = 900; // 15 minutos (largo descanso)
        actualizarTiempo();
        // Aquí puedes agregar lógica adicional para el botón "Largo descanso"
    });

    // Inicializar el tiempo al cargar la página
    tiempoRestante = 1500; // 25 minutos
    actualizarTiempo();
});
