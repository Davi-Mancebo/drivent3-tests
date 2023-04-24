import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';
import httpStatus from 'http-status';
import hotelService from '@/services/hotel-service';

export async function getHotel(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const hotel = await hotelService.getHotel(userId);
    if(hotel === false) return res.sendStatus(httpStatus.PAYMENT_REQUIRED)
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { hotelId } = req.params;

  try {
    const hotel = await hotelService.getRooms(userId, Number(hotelId));
    if(hotel === false) return res.sendStatus(httpStatus.PAYMENT_REQUIRED)
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}
