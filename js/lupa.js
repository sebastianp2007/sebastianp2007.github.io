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

function buscarPalabra() {
    var palabra = document.getElementById("buscador").value.toLowerCase(); // Captura el valor en minúsculas

    // Redirige según la palabra clave ingresada
    if (palabra === "ambiental" || palabra === "ingenieria ambiental") {
      window.location.href = "../paginas/ambiental.html"; // Redirige a la página de inicio
    } else if (palabra === "civil" || palabra === "ingenieria civil") {
      window.location.href = "../paginas/civil.html"; // Redirige a la página de contacto
    } else if (palabra === "clientes" || palabra === "nuestros clientes") {
      window.location.href = "../paginas/clientes.html"; // Redirige a la página de acerca
    }else if (palabra === "complementarios" || palabra === "servicios complementarios") {
        window.location.href = "../paginas/complementarios.html"; // Redirige a la página de acerca
    }else if (palabra === "nosotros") {
        window.location.href = "../paginas/nosotros.html"; // Redirige a la página de acerca
    }else if (palabra === "recientes" || palabra === "noticias recientes") {
        window.location.href = "../paginas/nosotros.html"; // Redirige a la página de acerca
    }else if (palabra === "ofertas laborales" || palabra === "ofertas") {
        window.location.href = "../paginas/relevantes.html"; // Redirige a la página de acerca
    }else if (palabra === "servicios") {
        window.location.href = "../paginas/servicios.html"; // Redirige a la página de acerca
    }else if (palabra === "sig" || palabra === "politica del sistema" || palabra === "politica del sistema de gestion integral") {
        window.location.href = "../paginas/sig.html"; // Redirige a la página de acerca
    }else if (palabra === "tip" || palabra === "politica de tratamiento" || palabra === "politica de tratamiento de la informacion personal") {
        window.location.href = "../paginas/tip.html"; // Redirige a la página de acerca
    }else if (palabra === "noticias" || palabra === "todas las noticias") {
        window.location.href = "../paginas/todas.html"; // Redirige a la página de acerca
    }else if (palabra === "topografica" || palabra === "ingenieria topografica") {
        window.location.href = "../paginas/topografica.html"; // Redirige a la página de acerca
    }else if (palabra === "valores" || palabra === "valores corporativos") {
        window.location.href = "../paginas/valores.html"; // Redirige a la página de acerca
    }else if (palabra === "inicio") {
        window.location.href = "../index.html"; // Redirige a la página de acerca
    }else if(palabra ===""){
    
    } 
    else {
      alert("No se encontró la palabra ingresada.");
    }

    return false; // Evita que el formulario se envíe y recargue la página
  }
