import { PartialType } from '@nestjs/mapped-types';
import { CreatePodructDto } from './create-podruct.dto';

export class UpdatePodructDto extends PartialType(CreatePodructDto) {}
