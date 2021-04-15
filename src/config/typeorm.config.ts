import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeormConfig: TypeOrmModuleOptions = {​

  type: 'postgres',​
 
  host: 'localhost',​
 
  port: 5432,​
 
  username: 'postgres',​
 
  password: 'uzumaki',​
 
  database: 'neutron',​
 
  autoLoadEntities: true,​
 
  synchronize: true,​
 
 };