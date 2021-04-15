import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,OneToMany, JoinTable,ManyToMany } from "typeorm";
import { Book } from '../book/book.entity';

@Entity()
export class User extends BaseEntity {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 username: String;

 @Column()
 mail: String;

 @Column()
 password: String;
 
 @ManyToMany(() => Book)
 @JoinTable()
 books_fav: Book[]

 @OneToMany(() => Book, book => book.user_author)
 books: Book[];

}
