const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js Docker App</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background: #f0f8ff; }
          h1 { color: #2c3e50; }
          p { color: #34495e; font-size: 1.2em; }
        </style>
      </head>
      <body>
        <h1>🚀 Hello from Node.js running inside Docker!</h1>
        <p>This application was successfully containerized and deployed.</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
