import { ApiProperty } from '@nestjs/swagger';

export class CreateSpell {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;
}

export class GetSpell{
    @ApiProperty()
    _id: string;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    type: string;
  
}

export class UpdatesSpell{
    @ApiProperty()
    message: string
}