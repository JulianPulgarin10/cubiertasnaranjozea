AOS.init();

AOS.init({
    duration: 300, // Duración de la animación
    once: true, // Si la animación debe ocurrir solo una vez
});

// Función para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});






//funcion servicios del menu
document.getElementById('navbarMenu').addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const items = dropdownMenu.querySelectorAll('.dropdown-item');

    // Aseguramos que todo sea visible y con una animación
    items.forEach((item, index) => {
        item.style.opacity = '0'; // Oculta inicialmente
        item.style.visibility = 'visible'; // Asegura que sea visible
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease-in';
            item.style.opacity = '1'; // Muestra con animación
        }, (index + 1) * 1000); // Escalonado en 1s, 2s, 3s
    });
});













 //GALERIA DOS 
 function abrirModal(img) {
    const modal = document.getElementById("miModal");
    const imagenModal = document.getElementById("imagenModal");
    modal.style.display = "block";
    imagenModal.src = img.src;
}

function cerrarModal() {
    const modal = document.getElementById("miModal");
    modal.style.display = "none";
}


    function abrirModal(imagen) {
        var modal = document.getElementById("miModal");
        var modalImage = document.getElementById("imagenModal");
        modalImage.src = imagen.src;
        modal.style.display = "block";
    }

    function cerrarModal() {
        var modal = document.getElementById("miModal");
        modal.style.display = "none";
    }

    // Cerrar el modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        var modal = document.getElementById("miModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }











//GALERIA UNO
    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById("imageModal");
        var modalImage = document.getElementById("modalImage");

        // Obtener todos los elementos de la galería
        var gridItems = document.querySelectorAll(".grid-item img");

        gridItems.forEach(function(item) {
            item.addEventListener("click", function() {
                // Actualizar la fuente de la imagen del modal
                modalImage.src = this.src;

                // Abrir el modal
                var myModal = new bootstrap.Modal(modal);
                myModal.show();
            });
        });
    });








// Mostrar flecha al desplazarse
window.addEventListener("scroll", function () {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
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



    //MENSAJE DEL BOTON COTIZAR DEL NAV
    document.addEventListener('DOMContentLoaded', () => {
        const mensaje = document.getElementById('mensaje');
    
        setInterval(() => {
            mensaje.classList.add('mostrar');
            
            setTimeout(() => {
                mensaje.classList.remove('mostrar');
            }, 2000); // El mensaje se muestra por 3 segundos
        }, 4000); // El mensaje aparece cada 2 segundos
    });
    




    //ICONOS
    document.addEventListener('DOMContentLoaded', function() {
        const socialIcons = document.querySelector('.social-icons');
        
        // Hacer visible los íconos sociales al cargar la página
        socialIcons.style.opacity = '1'; // Hacer visible
        socialIcons.style.transform = 'translateX(0)'; // Mover al centro
    
        // Si quieres agregar un retraso en la animación
        socialIcons.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Aplicar transición
    });
    




   
    
    
    


    //FLECHA DE REGRESO AL INICIO
document.addEventListener("scroll", function() {
    const backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

document.querySelector(".back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
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







