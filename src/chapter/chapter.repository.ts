import { EntityRepository, Repository } from "typeorm";
import { Chapter } from "./chapter.entity";

@EntityRepository(Chapter)
export class ChapterRepository extends Repository<Chapter> {


}
