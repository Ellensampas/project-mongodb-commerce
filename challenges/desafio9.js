db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "calorias",
      quantidade: { $lt: 500 },
    },
  },
}, { nome: true, _id: false });