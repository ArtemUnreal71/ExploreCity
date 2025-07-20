import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {City} from "../../cities/model/city.entity";
import {Review} from "../../reviews/model/review.entity";

@Entity()
export class Place{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    type: string;

    @Column()
    address: string;

    @Column()
    picture: string;

    @ManyToOne( type => City, city => city.places)
    city: City;

    @OneToMany(type=> Review, review => review.place, { nullable: false,eager: true})
    reviews: Review[];
}