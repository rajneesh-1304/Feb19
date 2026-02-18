import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Outbox } from './outbox/outbox.entity';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async createorder(order: any) {
    const outRepo = this.dataSource.getRepository(Outbox);
    const data = outRepo.create({ message: order });
    await outRepo.save(data);
    return { message: "Order placed successfully" };
  }
}