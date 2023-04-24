import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository"
import ticketsRepository from "@/repositories/tickets-repository"
import hotelRepository from "@/repositories/hotel-repository";

async function getHotel(userId: number){
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if(!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if(!ticket) throw notFoundError();
    if(ticket.status === 'RESERVED') return false;
    if(ticket.TicketType.isRemote === true) return false;
    if(ticket.TicketType.includesHotel === false) return false;

}
async function getRooms(userId: number, hotelId: number){
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if(!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if(!ticket) throw notFoundError();
    if(ticket.status === 'RESERVED') return false;
    if(ticket.TicketType.isRemote === true) return false;
    if(ticket.TicketType.includesHotel === false) return false;

}
export default { getHotel, getRooms}