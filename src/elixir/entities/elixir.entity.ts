import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ElixirDocument = HydratedDocument<Elixir>;

@Schema({id: true, versionKey: false})
export class Elixir {
  @Prop()
  name: string;

  @Prop()
  difficulty: number;

  @Prop()
  shape: string;
}

export const ElixirSchema = SchemaFactory.createForClass(Elixir);