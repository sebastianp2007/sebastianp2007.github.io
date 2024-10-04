let currentIndex = 1; // Iniciar en el primer slide
    const totalSlides = 4; // Total de slides
    let autoSlideInterval;

    function autoSlide() {
        currentIndex++; // Incrementar el índice para ir al siguiente slide
        if (currentIndex > totalSlides) {
            currentIndex = 1; // Reiniciar al primer slide si se llega al último
        }

        // Selecciona el slide correspondiente
        document.getElementById('slide' + currentIndex).checked = true;
    }

    function startAutoSlide() {
        // Reiniciar el temporizador
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 7000);
    }

    // Cambia el slide cada 5 segundos
    startAutoSlide();

    // Agregar evento a cada input para reiniciar el contador al seleccionar manualmente
    document.querySelectorAll('input[name="slider"]').forEach((input, index) => {
        input.addEventListener('change', () => {
            currentIndex = index + 1; // Actualiza el índice al slide seleccionado
            startAutoSlide(); // Reiniciar el temporizador
        });
    });