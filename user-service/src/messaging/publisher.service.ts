import { Injectable } from '@nestjs/common';
import { RabbitConnection } from './rabbit.connection';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PublisherService {
  constructor(private readonly rabbit: RabbitConnection) {}

  async publish(message: any) {
    const conn = await this.rabbit.connect(process.env.RABBITMQ_URL);
    const channel = await conn.createChannel();

    await channel.assertExchange('orders.fanout', 'fanout', { durable: true });
    channel.publish(
      'orders.fanout',
      'fanout',
      Buffer.from(JSON.stringify(message)),
      { persistent: true }
    );

    console.log('Published:', message.id);
    await channel.close();
  }
}
