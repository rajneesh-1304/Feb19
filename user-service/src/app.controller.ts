import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PublisherService } from './messaging/publisher.service';
import { ConsumerService } from './messaging/consumer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly publisher: PublisherService,
    private readonly consumer: ConsumerService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('order')
  createOrder(@Body() data) {
    return this.publisher.publish(data);
  }

  @Get('consumer')
  getOrder(){
    return this.consumer.consume();
  }
}
