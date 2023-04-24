import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getAllHotel, getHotelById } from '@/controllers';

const hotelRouter = Router();

hotelRouter
  .all('/*', authenticateToken)
  .get('/', getAllHotel)
  .get('/:hotelId', getHotelById)

export { hotelRouter };
