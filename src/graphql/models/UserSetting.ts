import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
@ObjectType()
export class UserSetting {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({default: false})
  @Field({ defaultValue: false })
  enableNotifications: boolean;

  @Column({default: false})
  @Field({ defaultValue: false })
  smsEnabled: boolean;
}
