db.produtos.updateMany(
  { 
    valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { $addToSet: { tags: "muito sódio" } },
);

db.produtos.find({}, { nome: true, _id: false, tags: true });