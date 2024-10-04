function toggleSearch() {
        const searchInput = document.querySelector('.search-input');
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    }

function toggleSearch() {
        const searchInput = document.querySelector('.search-input');
        const bannerText = document.getElementById('baner'); // Seleccionamos el texto del banner
        const bannerText2 = document.getElementById('baner2');
        const bannerText3 = document.getElementById('baner3');
        const bannerText4 = document.getElementById('baner4');
        const dropdown = document.getElementById('drop');
        const dropdown2 = document.getElementById('drop2');

        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
            bannerText.classList.add('small-text'); // Añadimos la clase para reducir el tamaño del texto
            bannerText2.classList.add('small-text');
            bannerText3.classList.add('small-text');
            bannerText4.classList.add('small-text4');
            dropdown.classList.add('dropdown-small');
            dropdown2.classList.add('dropdown-small');
        } else {
            bannerText.classList.remove('small-text'); // Removemos la clase cuando se cierra el input
            bannerText2.classList.remove('small-text');
            bannerText3.classList.remove('small-text');
            bannerText4.classList.remove('small-text4');
            dropdown.classList.remove('dropdown-small');
            dropdown2.classList.remove('dropdown-small');
        }
    }
