db.produtos.find(
  { vendidos: { $mod: [5, 0] } }, 
  { nome: true, _id: false, vendidos: true },
);