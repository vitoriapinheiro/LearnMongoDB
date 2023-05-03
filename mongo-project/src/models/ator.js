import validator from 'validator';

export const atorSchema = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['CPF', 'nome', 'data_de_nascimento'],
      properties: {
        CPF: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        nome: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        data_de_nascimento: {
          bsonType: 'date',
          description: 'must be a date and is required',
        },
      },
    },
  },
  validationAction: 'error',
};