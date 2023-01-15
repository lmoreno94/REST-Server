import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from "typeorm";
import { User } from './User';

@Entity()
export class Storage extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    path: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.id)
    user: User
}