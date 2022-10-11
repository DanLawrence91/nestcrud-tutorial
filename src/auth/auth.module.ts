import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  //handles requests
  controllers: [AuthController],
  //handles business logic
  providers: [AuthService],
})
export class AuthModule {}
