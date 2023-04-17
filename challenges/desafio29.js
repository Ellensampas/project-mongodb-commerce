db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find({}, { nome: true, _id: false, descricaoSite: true });