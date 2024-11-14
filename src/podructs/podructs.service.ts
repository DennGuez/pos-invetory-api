import { Injectable } from '@nestjs/common';
import { CreatePodructDto } from './dto/create-podruct.dto';
import { UpdatePodructDto } from './dto/update-podruct.dto';

@Injectable()
export class PodructsService {
  create(createPodructDto: CreatePodructDto) {
    return 'This action adds a new podruct';
  }

  findAll() {
    return `This action returns all podructs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} podruct`;
  }

  update(id: number, updatePodructDto: UpdatePodructDto) {
    return `This action updates a #${id} podruct`;
  }

  remove(id: number) {
    return `This action removes a #${id} podruct`;
  }
}
