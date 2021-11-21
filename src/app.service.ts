/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  getServer(): string {
    this.logger.log("Logged Server Gate - SUCCESS");
    return 'Hello Server!';
  }
}
