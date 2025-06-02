import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { BookmartModule } from './bookmart/bookmart.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), UserModule, BookmartModule, AuthModule, PrismaModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
