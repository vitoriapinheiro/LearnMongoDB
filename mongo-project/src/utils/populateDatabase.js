export async function populateDatabase(db) {
  // Insert sample data into the 'Ator' collection
  const atorCollection = db.collection('Ator');
  const atores = [
    { CPF: '001', nome: 'Ator 1', data_de_nascimento: new Date('1985-01-01') },
    { CPF: '002', nome: 'Ator 2', data_de_nascimento: new Date('1990-01-01') },
    { CPF: '003', nome: 'Ator 3', data_de_nascimento: new Date('2000-01-01') },
  ];
  await atorCollection.insertMany(atores);

  // Insert sample data into the 'Produtor' collection
  const produtorCollection = db.collection('Produtor');
  const produtores = [
    { email: 'produtor1@example.com', telefone: '1234567890', nome: 'Produtor 1', BossEmail: null },
    { email: 'produtor2@example.com', telefone: '1234567891', nome: 'Produtor 2', BossEmail: 'produtor1@example.com' },
    { email: 'produtor3@example.com', telefone: '1234567892', nome: 'Produtor 3', BossEmail: 'produtor1@example.com' },
  ];
  await produtorCollection.insertMany(produtores);

  // Insert sample data into the 'Contrata' collection
  const contrataCollection = db.collection('Contrata');
  const contrata = [
    { AtorCPF: '001', ProdutorEmail: 'produtor1@example.com' },
    { AtorCPF: '002', ProdutorEmail: 'produtor2@example.com' },
    { AtorCPF: '003', ProdutorEmail: 'produtor3@example.com' },
  ];
  await contrataCollection.insertMany(contrata);
}
