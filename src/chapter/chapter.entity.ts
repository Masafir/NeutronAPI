import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,ManyToOne } from "typeorm";

import { Book } from '../book/book.entity';

@Entity()
export class Chapter extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
title: String;

@Column()
index: number;

@ManyToOne(() => Book,book => book.chapters)
book: Book;

@Column()
content: String;

}
