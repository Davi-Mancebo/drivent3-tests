import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';
import httpStatus from 'http-status';
import hotelsService from '@/services/hotel-service';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const hotels = await hotelsService.getHotel(userId);
    if (hotels === false) return res.sendStatus(httpStatus.PAYMENT_REQUIRED);

    return res.status(200).send(hotels);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { hotelId } = req.params;

  try {
    const hotel = await hotelsService.getHotelWithRooms(userId, Number(hotelId));
    if (hotel === false) return res.sendStatus(httpStatus.PAYMENT_REQUIRED);

    return res.status(200).send(hotel);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}
