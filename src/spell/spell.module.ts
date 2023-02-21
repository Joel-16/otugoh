import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpellService } from './spell.service';
import { SpellController } from './spell.controller';
import { Spell, SpellSchema} from "./entities/spell.entity"

@Module({
  imports: [MongooseModule.forFeature([{name: Spell.name, schema: SpellSchema}])],
  controllers: [SpellController],
  providers: [SpellService],
  exports: [SpellService]
})
export class SpellModule {}
