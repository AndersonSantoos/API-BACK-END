const express = require("express");
const router = express.Router();
const CadastroModel = require('../model/model'); // Importe o modelo de cadastro
const path = require('path'); // Importe o módulo 'path' para manipulação de caminhos de arquivos.
const cadastroModel = new CadastroModel(); // Crie uma instância do modelo



// // Rota para listar todos os cadastros
router.get('/cadastros', (req, res) => {
  const cadastros = cadastroModel.getAllCadastros();
  res.json(cadastros);
});


router.post('/cadastros', (req, res) => {
  const { nome, idade, profissao, salario } = req.body;
  const novoCadastro = cadastroModel.addCadastro(nome, idade, profissao, salario);
  res.status(201).json(novoCadastro);
});

router.put('/cadastros/:id', (req, res) => {
  const id = req.params.id;
  const { nome, idade, profissao, salario } = req.body;
  const cadastroAtualizado = cadastroModel.updateCadastro(id, nome, idade, profissao, salario);
  if (cadastroAtualizado) {
    res.json(cadastroAtualizado);
  } else {
    res.status(404).json({ error: 'Cadastro não encontrado' });
  }
});

router.delete('/cadastros/:id', (req, res) => {
  const id = req.params.id;
  const cadastroExcluido = cadastroModel.deleteCadastro(id);
  if (cadastroExcluido) {
    res.json(cadastroExcluido);
  } else {
    res.status(404).json({ error: 'Cadastro não encontrado' });
  }
});

module.exports = router;
