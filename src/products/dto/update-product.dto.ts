import { PartialType } from '@nestjs/mapped-types';
import { CreatePodructDto } from './create-product.dto';

export class UpdatePodructDto extends PartialType(CreatePodructDto) {}
