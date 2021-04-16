import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["name"])
export class Type extends BaseEntity {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 name: String;

}
