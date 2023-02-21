import { Module } from '@nestjs/common';
import { ElixirService } from './elixir.service';
import { ElixirController } from './elixir.controller';
import { Elixir, ElixirSchema} from "./entities/elixir.entity"
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Elixir.name, schema: ElixirSchema}])],
  controllers: [ElixirController],
  providers: [ElixirService]
})
export class ElixirModule {}
