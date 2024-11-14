import { Module } from '@nestjs/common';
import { PodructsService } from './podructs.service';
import { PodructsController } from './podructs.controller';

@Module({
  controllers: [PodructsController],
  providers: [PodructsService],
})
export class PodructsModule {}
