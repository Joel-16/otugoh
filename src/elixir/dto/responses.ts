import { ApiProperty } from '@nestjs/swagger';

export class CreateElixir {
  @ApiProperty()
  name: string;

  @ApiProperty()
  difficulty: number;

  @ApiProperty()
  shape: string;
}

export class GetElixir {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  difficulty: number;

  @ApiProperty()
  shape: string;
}

export class UpdatesElixir{
  @ApiProperty()
  message: string
}
