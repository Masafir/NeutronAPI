import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne,ManyToMany, JoinTable, OneToMany, JoinColumn } from "typeorm";

import { User } from '../user/user.entity';
import { Type } from '../typeofbook/type.entity';
import { Chapter } from '../chapter/chapter.entity';

@Entity()
export class Book extends BaseEntity {
@PrimaryGeneratedColumn()
 id: number;

@Column()
name: String;

@Column()
author: String;

@OneToMany(() => Chapter,chapter => chapter.book)
chapters: Chapter[];

@ManyToOne(() => User, user => user.books)
@JoinColumn()
user_author: User;

@ManyToMany(() => Type)
@JoinTable()
types: Type[];

}
