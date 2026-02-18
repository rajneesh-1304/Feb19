import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { ConsumerService } from "../messaging/consumer.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const consumer = app.get(ConsumerService);

  await consumer.consume();
  await app.close();
}
bootstrap();
