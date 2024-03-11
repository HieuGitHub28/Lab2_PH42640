const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset= utf-8');
    console.log('Vao host server');
    res.write('<h1>Bài - NodeJS</h1>');
    res.write('MD18309\n');
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="color: red;">Test</h1>
        <h2>abc</h2>
    </body>
    </html>`);
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
