export class EmailConfig {
  from: string;
  password: string;
  service: SERVICES;
  port?: number;
  secure?: boolean;
}

export enum SERVICES {
  GMAIL = 'gmail',
  OUTLOOK = 'outlook',
}
