import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
// import { Inbox } from "../entities/inbox.entity";

@Injectable()
export class InboxService {
//   constructor(
//     @InjectRepository(Inbox)
//     private readonly inboxRepo: Repository<Inbox>
//   ) {}

//   async isProcessed(messageId: string, consumerName: string) {
//     const count = await this.inboxRepo.count({
//       where: { messageId, consumerName },
//     });
//     return count > 0;
//   }

//   async markProcessed(messageId: string, consumerName: string) {
//     const inbox = this.inboxRepo.create({ messageId, consumerName });
//     await this.inboxRepo.save(inbox);
//   }
}
