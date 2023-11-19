// js/acciones_formulario.js

// Captura el evento de envío del formulario usando jQuery
$('#userForm').submit(function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtiene los valores del formulario
    const nombre = $('#nombre').val();
    const email = $('#email').val();

    // Crea un objeto con los datos del nuevo usuario
    const nuevoUsuario = {
        name: nombre,
        email: email
       
    };

    // Realiza la llamada POST para agregar un nuevo usuario
    LlamadaPOST(nuevoUsuario);

});
