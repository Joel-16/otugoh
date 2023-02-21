import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpellDocument = HydratedDocument<Spell>;

@Schema({id: true, versionKey: false})
export class Spell {
  @Prop()
  name: string;

  @Prop()
  type: string;

}

export const SpellSchema = SchemaFactory.createForClass(Spell);
