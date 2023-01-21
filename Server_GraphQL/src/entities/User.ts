import { BaseEntity, Generated, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Generated("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    user: string;

    @Column()
    password: string;
}