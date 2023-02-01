import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @ApiProperty({
    name: 'body',
    required: true,
    type: String,
    description: 'Message to send',
  })
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty({
    name: 'subject',
    required: true,
    type: String,
    description: 'Message subject',
  })
  @IsNotEmpty()
  @IsString()
  subject: string;
}
