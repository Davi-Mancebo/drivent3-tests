import { prisma } from '@/config';
import { Booking } from '@prisma/client';

async function findHotels() {
    return await prisma.hotel.findMany({}) 
}
async function findHotelById(hotelId: number) {
    return prisma.hotel.findFirst({where: {id: hotelId}})
}
async function findHotelsRoomsByHotelId(hotelId: number) {
    return prisma.room.findMany({where: {hotelId: hotelId}})
}
export default { findHotels, findHotelById, findHotelsRoomsByHotelId };