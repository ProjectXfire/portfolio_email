import { Module } from '@nestjs/common';
import { EmailModule } from './modules/email/email.module';
import { ConfigModule } from '@nestjs/config';
// Options
import { SERVICES } from './modules/email/config/email.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    EmailModule.register({
      from: process.env.EMAIL,
      password: process.env.PASSWORD_EMAIL,
      service: SERVICES.GMAIL,
      secure: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
