import { prisma } from '@/config';
import { Booking } from '@prisma/client';

async function findHotelByUserId(userId: number): Promise<Booking | null> {
    return prisma.booking.findFirst({
      where: {
        userId
      }
    });
  }
  

export default { findHotelByUserId };
