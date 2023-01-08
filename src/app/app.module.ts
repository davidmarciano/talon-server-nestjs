import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot((() => {
      const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB_NAME } = process.env;
      return `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB_NAME}`;
    })()),
    AuditModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
