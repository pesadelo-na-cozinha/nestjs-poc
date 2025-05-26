import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MesasModule } from './mesas/mesas.module';

@Module({
  imports: [MesasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
