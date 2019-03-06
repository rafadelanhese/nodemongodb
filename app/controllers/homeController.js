module.exports = {
  index(req, res) {
    const nomes = ['Nome 1', 'Nome 2', 'Nome 3'];
    res.render('teste', { nomes });
  },

  teste(req, res) {
    res.send(`Teste ${req.query.nome}`);
  },
};
