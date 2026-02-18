import { Module } from '@nestjs/common';
import { RabbitConnection } from './rabbit.connection';
import { PublisherService } from './publisher.service';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [],
  providers: [
    RabbitConnection,
    PublisherService,
    ConsumerService, 
  ],
  exports: [PublisherService, ConsumerService],
})
export class MessagingModule {}
