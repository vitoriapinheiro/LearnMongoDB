export const contrataSchema = {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['AtorCPF', 'ProdutorEmail'],
        properties: {
          AtorCPF: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
          ProdutorEmail: {
            bsonType: 'string',
            description: 'must be a string and is required',
          },
        },
      },
    },
    validationAction: 'error',
  };