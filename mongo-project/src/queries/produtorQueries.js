import { client } from '../db/index.js';

export async function findProdutorByNameOrEmail() {
  const produtorCollection = client.db().collection('Produtor');

  const result = await produtorCollection.find({
    $or: [
      { nome: 'Specific Produtor Name' },
      { email: 'specific@email.com' },
    ],
  }).toArray();

  console.log('Find produtor by name or email result:', JSON.stringify(result, null, 2));
}
