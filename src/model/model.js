class CadastroModel {
    constructor() {
      this.cadastros = [];
    }
  bloco
    getAllCadastros() {
      return this.cadastros;
    }
  
    getCadastroById(id) {
      return this.cadastros[id];
    }
   
    addCadastro(nome, idade, profissao, salario) {
      const novoCadastro = { nome, idade, profissao, salario };
      this.cadastros.push(novoCadastro);
      return novoCadastro;
    }
  
    updateCadastro(id, nome, idade, profissao, salario) {
      if (id >= 0 && id < this.cadastros.length) {
        this.cadastros[id] = { nome, idade, profissao, salario };
        return this.cadastros[id];
      }
      return null; // Retorna null se o ID não existir
    }
  
    deleteCadastro(id) {
      if (id >= 0 && id < this.cadastros.length) {
        const cadastroExcluido = this.cadastros.splice(id, 1);
        return cadastroExcluido[0];
      }
      return null; // Retorna null se o ID não existir
    }
  }
  
  module.exports = CadastroModel;
  