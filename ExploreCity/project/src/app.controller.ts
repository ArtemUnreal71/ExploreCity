import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //pro odstraneni podtrzeni smazat soubor pretier a eslindt
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
