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
    
            alert('¡El script se ejecutó correctamente!');
        });
}
document.addEventListener('DOMContentLoaded', function() {
        verificarSesion();
});

function iniciarSesion() {
    var usuario = {
        nombre: "NombreUsuario",
        correo: document.getElementById('usuario').value
    };

    localStorage.setItem('sesionIniciada', 'true');
    
    localStor
localStorage.setItem('usuario', JSON.stringify(usuario));

    verificarSesion();
}
function cerrarSesion() {
    
    localStorage.removeItem('sesionIniciada');
    localStorage.removeItem('usuario');

    verificarSesion();
}
function verificarSesion() {
    var nombreUsuarioElement = document.getElementById('nombre-usuario');
    var cerrarSesionElement = document.getElementById('cerrar-sesion');

    var sesionIniciada = localStorage.getItem('sesionIniciada') === 'true';

    if (sesionIniciada) {
        var usuario = JSON.parse(localStorage.getItem('usuario'));
        nombreUsuarioElement.textContent = usuario.nombre;
        cerrarSesionElement.
        cerrarSesionE
style.display = 'inline';
    } else {
        nombreUsuarioElement.
     
textContent = '';
        cerrarSesionElement.style.display = 'none';
    }
}