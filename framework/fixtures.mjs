import { faker } from '@faker-js/faker'

export function GenerateUsers() {
  return {
    id: faker.datatype.number(),
    username: 'Toma',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'pipipupu',
    phone: '89165675667',
    userStatus: faker.datatype.number(),
  }
}
