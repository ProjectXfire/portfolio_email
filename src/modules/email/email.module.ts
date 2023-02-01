import { DynamicModule, Module } from '@nestjs/common';
// Controllers
import { EmailController } from './controllers/email.controller';
// Services
import { EmailService } from './services/email.service';
// Configs
import { EmailConfig } from './config/email.config';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {
  static register(options: EmailConfig): DynamicModule {
    return {
      module: EmailModule,
      controllers: [EmailController],
      providers: [
        { provide: 'CONFIG_OPTIONS', useValue: options },
        EmailService,
      ],
    };
  }
}
