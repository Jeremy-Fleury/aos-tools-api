import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async get() {
    return 'Welcome to the AOS Warscroll Builder API';
  }
}
