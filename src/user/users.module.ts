import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UsersController } from './user.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';


@Module({
  imports: [
    PassportModule.register(JwtStrategy),
    JwtModule.register({​
    secret: jwtConstants.secret,​
    signOptions: {​
      expiresIn: 3600,​
    },​}),
    TypeOrmModule.forFeature([UserRepository])],
  controllers: [UsersController],
  providers: [UsersService,JwtStrategy],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class UsersModule {}
