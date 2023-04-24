import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getAllHotel(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try{

  }catch(error){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
  }
}

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  
  try{

  }catch(error){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
  }
}
