<div class="container mt-5">
    <h1>Ejemplo con Axios y PHP</h1>
         <!-- Formulario para agregar nuevo usuario en una sola línea -->
        <div class="bg-secondary" style="padding: 10px;">
            <form id="userForm" class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <label for="nombre" class="sr-only">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre" required>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="email" class="sr-only">Email:</label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>
                <!-- Agrega más campos según la estructura de tus datos -->
                <button type="submit" class="btn btn-warning mb-2">Agregar Usuario</button>
            </form>
        </div>

        <!-- AQUI MOSTRAMOS LOS MENSAJES SI VA OK LA CARGA DE DATOS -->
        <div id="alertaExito" style="padding: 10px;"></div>

    <!-- Agregar una tabla con un identificador único para mostrar la salida de la API -->
    <table class="table" id="outputTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <!-- Agrega más encabezados según la estructura de tus datos -->
            </tr>
        </thead>
        <tbody id="outputTableBody"></tbody>
    </table>
</div>