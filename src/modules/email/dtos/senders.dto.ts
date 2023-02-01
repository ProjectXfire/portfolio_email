import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendersDto {
  @ApiProperty({
    name: 'email',
    required: true,
    type: String,
    description: 'Email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
