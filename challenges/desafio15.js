db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } });
db.produtos.updateMany(
{ tags: { $all: ["bovino"] } },
{ $inc: { avaliacao: 5 } });
db.produtos.updateMany(
  { tags: { $all: ["aves"] } },
  { $inc: { avaliacao: 3 } });
db.produtos.find({}, { _id: false, nome: true, avaliacao: true });