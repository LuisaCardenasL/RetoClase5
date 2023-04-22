const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

// Permitir solicitudes CORS desde cualquier origen
app.use(cors());

// Ruta para descargar el video de YouTube
app.get('/video', function(req, res) {
    var url = req.query.url;
    ytdl(url, { format: 'mp4' }).pipe(res);
});

// Iniciar el servidor en el puerto 8080
app.listen(8080, function() {
    console.log('Servidor iniciado en el puerto 8080');
});
