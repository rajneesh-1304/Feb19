import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Outbox } from "../outbox/outbox.entity";

@Injectable()
export class OutboxService {
  constructor( private readonly dataSource: DataSource
  ) {}

  async getPendingMsg() {
    const outboxRepo = this.dataSource.getRepository(Outbox);
    const pendingMsg = await outboxRepo.find({where: {status:"PENDING"}});
    return pendingMsg;
  }

  async markDispatched(id: string) {
    const outboxRepo = this.dataSource.getRepository(Outbox);
    await outboxRepo.update(id, { status: 'COMPLETED' });
  }
}
