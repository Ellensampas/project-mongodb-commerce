db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "calorias",
      quantidade: 502,
    },
  },
}, { nome: true, _id: false });