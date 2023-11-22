function registerUser() {
    // Obtener los valores del formulario
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;

    // Crear un objeto de usuario
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender
    };

    // Obtener usuarios existentes del localStorage
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Agregar el nuevo usuario al arreglo
    existingUsers.push(user);

    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Limpiar el formulario después del registro
    document.getElementById("registrationForm").reset();

    alert("¡Registro exitoso!");
}
