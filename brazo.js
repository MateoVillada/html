function registerUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender
    };

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
            window.location.href = 'brazo.html';

}
