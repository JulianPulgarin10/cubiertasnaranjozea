 //EFECTO DE ENTRADA PARA TODO EL BODY
 document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, img, video, .gallery-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hide');
            }
        });
    }, { threshold: 0.1 }); // El umbral indica cuándo activar la animación (10% de visibilidad)

    elements.forEach(element => {
        element.classList.add('animate');
        observer.observe(element);
    });
});





 
 
 
  // FUNCION PARA MANTENER EL NAV POR ENCIMA DE TODO.

  window.onscroll = function() {fixedNavbar()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function fixedNavbar() {
      if (window.pageYOffset > sticky) {
          navbar.classList.add("fixed-top");
      } else {
          navbar.classList.remove("fixed-top");
      }
  }
 



  //SECCION DE BIENVENIDA
  








//GALERIA PRINCIPAL
// Función para abrir el modal
function openModal(element) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-img');
    var captionText = document.getElementById('caption');

    modal.style.display = 'flex'; // Cambiar display a flex para centrar
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Asignar eventos a los elementos correspondientes
var img = document.getElementById("myImg"); 
var span = document.getElementsByClassName("cerrar")[0];

img.onclick = function () {
    openModal(this);
};

span.onclick = function () {
    closeModal();
};


     





     
//GALERIA DOSSSSS
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 2000);
});



 
 
 
 
//VIDEOS
document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach((container, index) => {
        container.style.animation = `fadeIn 1s ease ${index * 0.2}s forwards`;
    });
});


 





//MENU FIJO 
const icons = document.querySelectorAll('.icono-menu-inferior');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Quitar la clase activa de todos los íconos
        icons.forEach(i => i.classList.remove('active'));
        // Agregar la clase activa al ícono clicado
        icon.classList.add('active');
    });
});


//Menu Desplegable
// Función para mostrar u ocultar el menú desplegable
function toggleMenu() {
    const menu = document.getElementById('menu-desplegable');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'; // Ocultar el menú si ya está visible
    } else {
        menu.style.display = 'flex'; // Mostrar el menú si está oculto
    }
}