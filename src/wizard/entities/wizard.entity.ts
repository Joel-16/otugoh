import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,  Types} from 'mongoose';
import { Spell } from '../../spell/entities/spell.entity';

export type WizardDocument = HydratedDocument<Wizard>;

@Schema({id: true, versionKey: false})
export class Wizard {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
  
  @Prop()
  age: number;

  @Prop()
  level: string;

  @Prop()
  location: string;

  @Prop({type: [{type: Types.ObjectId, ref: 'Spell'}]})
  spell: Spell[]

}

export const WizardSchema = SchemaFactory.createForClass(Wizard);