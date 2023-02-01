import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { EmailConfig } from '../config/email.config';
// External libraries
import * as nodemailer from 'nodemailer';
// Dtos
import { MessageDto } from '../dtos/message.dto';

@Injectable()
export class EmailService {
  constructor(@Inject('CONFIG_OPTIONS') private options: EmailConfig) {}

  async sendEmail(message: MessageDto) {
    try {
      const transport = nodemailer.createTransport({
        service: this.options.service,
        auth: {
          user: this.options.from,
          pass: this.options.password,
        },
      });
      const mailOptions = {
        from: this.options.from,
        to: [process.env.EMAIL],
        subject: message.subject,
        html: message.body,
      };
      await transport.sendMail(mailOptions);
      return {
        message: 'Email sent',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
