import { Injectable } from '@nestjs/common';
import { CreatePodructDto } from './dto/create-product.dto';
import { UpdatePodructDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createPodructDto: CreatePodructDto) {
    return 'This action adds a new podruct';
  }

  findAll() {
    return `This action returns all products`;
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
