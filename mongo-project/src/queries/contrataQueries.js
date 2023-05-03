import { client } from '../db/index.js';

export async function findContrataByAtorAgeOrProdutorPhone() {
  const contrataCollection = client.db().collection('Contrata');

  const result = await contrataCollection.aggregate([
    {
      $lookup: {
        from: 'Ator',
        localField: 'AtorCPF',
        foreignField: 'CPF',
        as: 'Ator',
      },
    },
    {
      $lookup: {
        from: 'Produtor',
        localField: 'ProdutorEmail',
        foreignField: 'email',
        as: 'Produtor',
      },
    },
    {
      $match: {
        $or: [
          { 'Ator.data_de_nascimento': { $lt: new Date('1990-01-01') } },
          { 'Produtor.telefone': { $ne: '1234567890' } },
        ],
      },
    },
  ]).toArray();

  console.log('Find contrata by actor age or produtor phone result:', JSON.stringify(result, null, 2));
}
