import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeormConfig: TypeOrmModuleOptions = {​

  type: 'postgres',​
 
  host: process.env.DATABASE_HOST || 'localhost',​
 
  port: +process.env.DATABASE_PORT || 5432,​
 
  username: process.env.DATABASE_USER || 'postgres',​
 
  password: process.env.DATABASE_PASSWORD || 'uzumaki',​
 
  database: process.env.DATABASE_NAME ||'neutron',​
 
  autoLoadEntities: true,​
 
  synchronize: true,​
 
 };