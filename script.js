document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;

        // Guardar en localStorage (esto debería ser manejado por el servidor en un entorno real)
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('gender', gender);

        // Redirigir a la página de inicio de sesión
        window.location.href = 'login.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const userMenu = document.getElementById('userMenu');

    // Verificar si el usuario está autenticado
    const authenticatedUser = localStorage.getItem('firstName');
    
    if (authenticatedUser) {
        // Mostrar el nombre del usuario y opción para cerrar sesión
        userMenu.innerHTML = `
            <li>Bienvenido, ${authenticatedUser}</li>
            <li><a href="#" id="logout">Cerrar Sesión</a></li>
        `;

        // Manejar evento de cierre de sesión
        const logoutButton = document.getElementById('logout');
        logoutButton.addEventListener('click', function () {
            // Limpiar localStorage al cerrar sesión (esto debería ser manejado por el servidor en un entorno real)
            localStorage.clear();
            // Redirigir a la página de inicio
            window.location.href = 'index.html';
        });
    }
});

