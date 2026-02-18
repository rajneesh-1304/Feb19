import { Injectable } from '@nestjs/common';
import { RabbitConnection } from './rabbit.connection';
import { InboxService } from '../services/inbox.service';
@Injectable()
export class ConsumerService {
  constructor(
    private readonly rabbit: RabbitConnection,
  ) {}

  async consume() {
    const conn = await this.rabbit.connect(process.env.RABBITMQ_URL);
    const channel = await conn.createChannel();

    await channel.assertExchange('orders.fanout', 'fanout', { durable: true });
    const q = await channel.assertQueue('orders.queue', { durable: true });
    await channel.bindQueue(q.queue, 'orders.fanout', '');

    channel.consume(q.queue, async (msg) => {
      if (!msg) return;
      const message = JSON.parse(msg.content.toString());


      try {
        console.log('Processing order:', message.message.message);
        channel.ack(msg);
      } catch (err) {
        console.error(err);
        channel.nack(msg, false, true);
      }
    });
  }
}
