module.exports = {
  formulario(req, res) {
    res.render('usuario/form');
  },
  salvar(req, res) {
    const { idade, nome } = req.body;

    if (idade >= 18) {
      res.redirect(`/usuario/maior?nome=${nome}`);
    } else {
      res.redirect(`/usuario/menor?nome=${nome}`);
    }
  },
  menor(req, res) {
    const { nome } = req.query;
    res.render('usuario/menor', { nome });
  },
  maior(req, res) {
    const { nome } = req.query;
    res.render('usuario/maior', { nome });
  },
};
