import * as amqp from 'amqplib';
import { setTimeout } from 'node:timers';

export class RabbitConnection {
    private connection: amqp.Connection;

    async connect(url) {
        try {
            this.connection = await amqp.connect(url);
            this.connection.on('close', () => this.reconnect(url));
            this.connection.on('error', () => this.reconnect(url));

            console.log('RabbitMq connected');
            return this.connection;
        } catch (error) {
            console.log('Retrying RabbitMq Connection...');
            setTimeout(() => this.connect(url), 1000);
        }
    }

    private reconnect(url) {
        console.log('Reconnecting RabbitMq...');
        setTimeout(() => this.connect(url), 1000)
    }
}