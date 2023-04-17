db.produtos.deleteMany({ curtidas: { $gt: 50 } });
db.produtos.find(
  {},
  { nome: true, _id: false },
  );