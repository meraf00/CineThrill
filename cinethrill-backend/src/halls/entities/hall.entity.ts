import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Seat } from './seat.entity';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  seatMapUrl: string;

  @Column()
  assetExternalId: string;

  @OneToMany(() => Seat, (seat) => seat.hall, { onDelete: 'CASCADE' })
  @JoinColumn()
  seats: Seat[];
}
