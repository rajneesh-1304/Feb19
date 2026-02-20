import { Module } from '@nestjs/common';
import { PublishCommand } from './command';
import { RabbitConnection } from '../messaging/rabbit.connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppDataSource from '../data-source';
import { ConsumerService } from '../messaging/consumer.service';
import { Inbox } from 'src/inbox/inbox.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...AppDataSource.options,
  }), TypeOrmModule.forFeature([Inbox]),
  ],
  providers: [PublishCommand, ConsumerService, RabbitConnection],
})
export class Command { }
