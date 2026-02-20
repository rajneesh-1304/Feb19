import { Module, Controller, Get } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MessagingModule } from './messaging/messaging.module';
import  AppDataSource  from './data-source'; 
import { RabbitConnection } from './messaging/rabbit.connection';
import { ConsumerService } from './messaging/consumer.service';
import { Inbox } from './inbox/inbox.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options, 
    }),
    TypeOrmModule.forFeature([Inbox]),
    MessagingModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConsumerService, RabbitConnection],
})
export class AppModule {}
