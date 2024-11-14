import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PodructsModule } from './podructs/podructs.module';

@Module({
  imports: [PodructsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
