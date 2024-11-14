import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PodructsService } from './podructs.service';
import { CreatePodructDto } from './dto/create-podruct.dto';
import { UpdatePodructDto } from './dto/update-podruct.dto';

@Controller('podructs')
export class PodructsController {
  constructor(private readonly podructsService: PodructsService) {}

  @Post()
  create(@Body() createPodructDto: CreatePodructDto) {
    return this.podructsService.create(createPodructDto);
  }

  @Get()
  findAll() {
    return this.podructsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.podructsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePodructDto: UpdatePodructDto) {
    return this.podructsService.update(+id, updatePodructDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.podructsService.remove(+id);
  }
}
