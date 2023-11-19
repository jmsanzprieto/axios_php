// js/axios_acciones.js

// Función para realizar la petición a la API
async function LlamadaGET() {
    try {
        const response = await axiosInstance.get('/users');
        // Mostramos los datos por consola
        console.log(response.data);

        // Limpiar contenido actual de la tabla
        $('#outputTableBody').empty();

        // Construir filas y celdas en la tabla
        response.data.forEach(user => {
            const row = `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <!-- Agrega más celdas según la estructura de tus datos -->
            </tr>`;
            $('#outputTableBody').append(row);
        });
    } catch (error) {
        console.error(error);
    }
}

// Llamar a la función al cargar el documento
LlamadaGET();

// Función LlamadaPOST
async function LlamadaPOST(nuevoUsuario) {
    try {
        // En este ejemplo, `nuevoUsuario` es un objeto que contiene los datos del nuevo usuario
        const response = await axiosInstance.post('/users', nuevoUsuario);

        // Mostrar la respuesta de la petición POST en la consola
        console.log(response.data);

        // Mostrar una alerta de éxito
        mostrarAlertaExito();

        // Si la inserción fue exitosa, puedes volver a cargar la tabla actualizando los datos
        await LlamadaGET();
    } catch (error) {
        console.error(error);
    }
}

// Configurar un interceptor para mostrar mensajes en la consola
axiosInstance.interceptors.request.use(request => {
    console.log('Este es el interceptor', request);
    return request;
});

axiosInstance.interceptors.response.use(response => {
    console.log('Respuesta del interceptor:', response);
    return response;
}, error => {
    console.error('Respuesta de error del interceptor:', error);
    return Promise.reject(error);
});

// MENSAJE DE CARGA OK
function mostrarAlertaExito() {
    const alertaExito = $('<div>').addClass('alert alert-success').text('¡Registro cargado correctamente!');

    // Limpiar el contenido actual del elemento antes de agregar la nueva alerta
    $('#alertaExito').empty();

    // Añadir el elemento de alerta al elemento con el identificador 'alertaExito'
    $('#alertaExito').append(alertaExito);

    // Desaparecer la alerta después de un tiempo 
    setTimeout(() => {
        alertaExito.remove();
    }, 3000); 
}
