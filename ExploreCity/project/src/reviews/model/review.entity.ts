import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Place} from "../../places/model/place.entity";

@Entity()
export class Review{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placeId: number;

    @Column()
    author: string;

    @Column()
    text: string;

    @Column()
    stars: number;

    @Column()
    date: Date;

    @ManyToOne(type => Place, place => place.reviews)
    place: Place;
}