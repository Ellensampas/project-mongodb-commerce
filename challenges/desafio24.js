db.produtos.updateMany({},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } });

db.produtos.find({},
  {
    nome: true,
    _id: false,
    valoresNutricionais: true,
  });