import { ApiProperty } from '@nestjs/swagger';
import { GetSpell } from '../../spell/dto/responses';

export class CreateWizard {
 
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  level: string;

  @ApiProperty()
  location: string;

  @ApiProperty({type: [GetSpell]})
  spell: GetSpell[];
}

export class GetWizard{
    @ApiProperty()
    _id: string;
  
    @ApiProperty()
    firstname: string;
  
    @ApiProperty()
    lastname: string;
  
    @ApiProperty()
    age: number;
  
    @ApiProperty()
    level: string;
  
    @ApiProperty()
    location: string;
  
    @ApiProperty({type: [GetSpell]})
    spell: GetSpell[];
}

export class UpdatesWizard{
    @ApiProperty()
    message: string
}