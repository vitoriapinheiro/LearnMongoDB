import validator from 'validator';

export const produtorSchema = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['email', 'telefone', 'nome'],
      properties: {
        email: {
          bsonType: 'string',
          description: 'must be a string and is required',
          validation: {
            validator: (email) => validator.isEmail(email),
            message: 'Invalid email format',
          },
        },
        telefone: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        nome: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        BossEmail: {
          bsonType: 'string',
          description: 'must be a string',
        },
      },
    },
  },
  validationAction: 'error',
};