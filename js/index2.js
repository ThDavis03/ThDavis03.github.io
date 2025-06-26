const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

registerLink.addEventListener('click', () => {
    loginModal.hide();
    registerModal.show();
});

loginLink.addEventListener('click', () => {
    registerModal.hide();
    loginModal.show();
});


function togglePasswordVisibility(inputId, toggleIconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = '/src/img/eye.png'; //ojo abierto
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = '/src/img/eye-cerrado.png'; //ojo cerrado
    }
}
 
//navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-colored');
    } else {
        navbar.classList.remove('navbar-colored');
        navbar.classList.add('navbar-transparent');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('navbar-transparent');
});

//actividades
    document.addEventListener('DOMContentLoaded', () => {
        //(código existente de DOMContentLoaded aquí)

        //búsqueda
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const activitySectionsContainer = document.querySelector('.container.marketing .row'); //contenedor de las actividades

        if (searchButton && searchInput && activitySectionsContainer) {
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault(); //evita que se recargue la página al presionar Enter
                    performSearch();
                }
            });
        }

        function performSearch() {
            const searchText = searchInput.value.toLowerCase().trim();
            const activityColumns = activitySectionsContainer.querySelectorAll('.col-lg-4');
            let found = false;

            activityColumns.forEach(column => {
                //elimina cualquier anterior resaltado
                column.classList.remove('highlight-activity');

                const h2Element = column.querySelector('h2');
                if (h2Element) {
                    const h2Text = h2Element.textContent.toLowerCase();
                    if (h2Text.includes(searchText)) {
                        
                        found = true;
                        // Desplazar a la vista del elemento
                        column.scrollIntoView({ behavior: 'smooth', block: 'center' });

                        //resaltar actividad
                        column.classList.add('highlight-activity');
                        setTimeout(() => {
                            column.classList.remove('highlight-activity');
                        }, 2000); //dejar de resaltar después de 3 segundos
                    }
                }
            });

            if (!found && searchText !== '') {
                alert('No se encontró ninguna actividad que coincida con su búsqueda.');
            } else if (searchText === '') {
            }
        }
    });