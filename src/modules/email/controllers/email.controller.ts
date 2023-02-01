import { Body, Controller, Post } from '@nestjs/common';
// Services
import { EmailService } from '../services/email.service';
// Dtos
import { MessageDto } from '../dtos/message.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Email')
@Controller('api/v1/email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('send')
  sendEmail(@Body() message: MessageDto) {
    return this.emailService.sendEmail(message);
  }
}
