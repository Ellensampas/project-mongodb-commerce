db.produtos.updateMany({ nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } });
db.produtos.find({}, { _id: false, nome: true });