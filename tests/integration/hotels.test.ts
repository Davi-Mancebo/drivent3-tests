// import { faker } from '@faker-js/faker';
// import dayjs from 'dayjs';
// import httpStatus from 'http-status';
// import supertest from 'supertest';
// import * as jwt from 'jsonwebtoken';
// import { createEvent, createUser } from '../factories';
// import { cleanDb, generateValidToken } from '../helpers';
// import { duplicatedEmailError } from '@/services/users-service';
// import { prisma } from '@/config';
// import app, { init } from '@/app';

// beforeAll(async () => {
//   await init();
// });

// beforeEach(async () => {
//   await cleanDb();
// });

// const server = supertest(app);

// describe('GET /hotels', async () => {
//   it('should respond with status 401 if no token is given', async () => {
//     const response = await server.get('/hotels');

//     expect(response.status).toBe(httpStatus.UNAUTHORIZED);
//   });

//   it('should respond with status 401 if given token is not valid', async () => {
//     const token = faker.lorem.word();

//     const response = await server.get('/hotels').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(httpStatus.UNAUTHORIZED);
//   });

//   it('should respond with status 401 if there is no session for given token', async () => {
//     const userWithoutSession = await createUser();
//     const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

//     const response = await server.get('/hotels').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(httpStatus.UNAUTHORIZED);
//   });
//   describe('when token is valid', () => {
//     it('should respond with 402 if ticket is not paid', async () => {
//       const user = await createUser();
//       const token = await generateValidToken(user);

//       const response = await server.post('/get').set('Authorization', `Bearer ${token}`).send({});

//       expect(response.status).toBe(httpStatus.PAYMENT_REQUIRED);
//     });
//   });
// });

// describe('GET /hotels/:hotelId', async () => {
//   it('should respond with status 401 if no token is given', async () => {
//     const response = await server.get('/hotels/:hotelId');

//     expect(response.status).toBe(httpStatus.UNAUTHORIZED);
//   });

//   it('should respond with status 401 if given token is not valid', async () => {
//     const token = faker.lorem.word();

//     const response = await server.get('/hotels/:hotelId').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(httpStatus.UNAUTHORIZED);
//   });

//   it('should respond with status 401 if there is no session for given token', async () => {
//     const userWithoutSession = await createUser();
//     const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

//     const response = await server.get('/hotels/:hotelId').set('Authorization', `Bearer ${token}`);

//     expect(response.status).toBe(httpStatus.UNAUTHORIZED);
//   });
// });
