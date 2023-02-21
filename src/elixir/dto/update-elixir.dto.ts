import { PartialType } from '@nestjs/mapped-types';
import { CreateElixirDto } from './create-elixir.dto';

export class UpdateElixirDto extends PartialType(CreateElixirDto) {}
