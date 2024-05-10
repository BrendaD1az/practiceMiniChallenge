const http = require('http');

const PORT = 3008;

const server = http.createServer((req, res) => {
    // Configurar headers para enviar contenido HTML
    res.setHeader('Content-Type', 'text/html');

    // Manejar las diferentes rutas
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('<h1>Bienvenidas a nuestra web</h1>');
            break;
        case '/cursos':
            res.statusCode = 200;
            res.end('<h1>Bienvenidas a nuestra sección cursos</h1>');
            break;
        case '/contacto':
            res.statusCode = 200;
            res.end('<h1>Bienvenidas a nuestra sección de contacto</h1>');
            break;
        default:
            // Ruta no encontrada
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Ruta no encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
