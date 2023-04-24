import { notFoundError } from '@/errors';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import hotelsRepository from '@/repositories/hotel-repository';

async function getHotel(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();
  if (ticket.status === 'RESERVED') return false;
  if (ticket.TicketType.isRemote === true) return false;
  if (ticket.TicketType.includesHotel === false) return false;

  const hotelsExist = await hotelsRepository.findHotels();
  if (!hotelsExist[0]) throw notFoundError();

  return hotelsExist;
}
async function getHotelWithRooms(userId: number, hotelId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();
  if (ticket.status === 'RESERVED') return false;
  if (ticket.TicketType.isRemote === true) return false;
  if (ticket.TicketType.includesHotel === false) return false;

  const hotelWithRooms = await hotelsRepository.findHotelById(hotelId);
  if (!hotelWithRooms) throw notFoundError();
  const rooms = await hotelsRepository.findHotelsRoomsByHotelId(hotelId)
    let returnObject = {
        id: hotelWithRooms.id,
        name: hotelWithRooms.name,
        image: hotelWithRooms.image,
        createdAt: hotelWithRooms.createdAt.toISOString(),
        updatedAt: hotelWithRooms.updatedAt.toISOString(),
        rooms: rooms
    }
    
    return returnObject;
}

export default { getHotel, getHotelWithRooms };
