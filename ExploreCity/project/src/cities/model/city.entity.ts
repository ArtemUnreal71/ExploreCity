import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Place} from "../../places/model/place.entity";

@Entity()
export class City{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    picture: string;

    @OneToMany(type => Place, place => place.city, {nullable: false, eager: true})
    places: Place[];
}