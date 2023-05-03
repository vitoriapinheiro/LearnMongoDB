import { client, createCollections } from './db/index.js';
import { populateDatabase } from './utils/populateDatabase.js';
import { findAtorByBirthYearRange, findAllAtor } from './queries/atorQueries.js';
import { findProdutorByNameOrEmail } from './queries/produtorQueries.js';
import { findContrataByAtorAgeOrProdutorPhone } from './queries/contrataQueries.js';

async function main() {
  try {
    await client.connect();
    const db = client.db();

    // Create the collections with their schemas
    await createCollections();

    // Populate the database with initial data
    await populateDatabase(db);

    // Execute queries
    await findAtorByBirthYearRange();
    await findProdutorByNameOrEmail();
    await findContrataByAtorAgeOrProdutorPhone();
    await findAllAtor();

  } catch (error) {
    console.error('Error connecting to the database', error);
  } finally {
    await client.close();
  }
}

main();