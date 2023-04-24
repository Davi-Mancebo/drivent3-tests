import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';

export async function getAllHotel(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
}

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
}
