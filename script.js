function iniciarSesion() {
    alert('Función de inicio de sesión aún no implementada');
}

function registrarUsuario() {

    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena-registro').value;
    var genero = document.getElementById('genero').value;

    var nuevoUsuario = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        contrasena: contrasena,
        genero: genero
    };

    var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    document.getElementById('form-registro-usuario').reset();

    alert('Usuario registrado con éxito');

    document.addEventListener('DOMContentLoaded', function() {
    
    
        // Manipulación del DOM o llamadas a funciones
            alert('¡El script se ejecutó correctamente!');
        });
}