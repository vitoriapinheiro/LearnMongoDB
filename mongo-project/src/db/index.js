import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://<username>:<password>@bdproject.cth4czv.mongodb.net/?retryWrites=true&w=majority';

export const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function collectionExists(collectionName) {
    const db = client.db();
    const collections = await db.listCollections({ name: collectionName }).toArray();
    return collections.length > 0;
  }
  
  export async function createCollections() {
    const db = client.db();
  
    if (!(await collectionExists('Ator'))) {
      await db.createCollection('Ator', atorSchema);
    }
  
    if (!(await collectionExists('Produtor'))) {
      await db.createCollection('Produtor', produtorSchema);
    }
  
    if (!(await collectionExists('Contrata'))) {
      await db.createCollection('Contrata', contrataSchema);
    }
  }
