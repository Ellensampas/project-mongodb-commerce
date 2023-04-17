db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: 0 } },
);

db.produtos.find({}, { nome: true, _id: false, curtidas: true });