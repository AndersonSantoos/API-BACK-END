const express = require("express");
const app = express();
const port = 3000;
const controllerHome = require('./controllers/controllersHome'); // Importe as rotas do arquivo "controllerHome"
const path = require('path'); // Importe o módulo 'path' para manipulação de caminhos de arquivos.
const CadastroModel = require('./model/model'); // Importe o modelo de cadastro
const bodyParser = require('body-parser'); // Importe o body-parser para processar dados do formulário
const cadastroModel = new CadastroModel(); // Crie uma instância do modelo


// Configurar o Express para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'views'))); // Use path.join para obter o caminho absoluto

// Usar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());

// Use as rotas importadas do controlador
app.use('/', controllerHome);



app.get('/cadastros', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html')); // Envie o arquivo HTML
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
