const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Voilà la réponse du serveur !");
});

server.listen(process.env.PORT || 3000);

console.log("Le serveur est en marche sur le port 3000 !");
