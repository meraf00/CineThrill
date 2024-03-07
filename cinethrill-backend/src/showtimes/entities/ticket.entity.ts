import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Showtime } from './showtime.entity';
import { Seat } from '@/halls/entities/seat.entity';
import { Booking } from '@/bookings/entities/booking.entity';

export enum TicketStatus {
  // The ticket is reserved for a user temporarlily
  // until they purchase it
  // The ticket is available for purchase again after some duration if not purchased
  RESERVED = 'RESERVED',

  // The ticket is cancelled by the user after purchase
  CANCELLED = 'CANCELLED',

  // The ticket is purchased by the user
  PURCHASED = 'PURCHASED',

  // The ticket is available for purchase
  AVAILABLE = 'AVAILABLE',
}

@Entity()
@Unique(['showtime', 'seat'])
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', {
    precision: 5,
    scale: 2,
    default: 0,
  })
  price: number;

  @Column('boolean', {
    default: false,
  })
  cancellable: boolean;

  @Column('decimal', {
    precision: 5,
    scale: 2,
    default: 0,
  })
  cancellationFee: number;

  @Column()
  cancellationDate: Date;

  @Column({
    type: 'enum',
    enum: TicketStatus,
    default: TicketStatus.AVAILABLE,
  })
  status: string;

  @Column()
  purchasedAt: Date;

  @Column()
  reservedAt: Date;

  @Column('int', {
    default: 0,
  })
  reservationLifeInSeconds: number;

  @ManyToOne(() => Showtime, (showtime) => showtime.tickets, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn()
  showtime: Showtime;

  @ManyToOne(() => Seat, (seat) => seat.tickets, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn()
  seat: Seat;

  @ManyToOne(() => Booking, (booking) => booking.tickets)
  booking: Booking;
}
