import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ElixirService } from './elixir.service';
import { CreateElixirDto } from './dto/create-elixir.dto';
import { UpdateElixirDto } from './dto/update-elixir.dto';
import { CreateElixir, GetElixir, UpdatesElixir } from './dto/responses';

@ApiTags("Elixirs")
@Controller('elixir')
export class ElixirController {
  constructor(private readonly elixirService: ElixirService) {}

  @Post()
  @ApiResponse({ status: 201, type: CreateElixir })
  create(@Body() createElixirDto: CreateElixirDto) {
    return this.elixirService.create(createElixirDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: [GetElixir] })
  findAll(@Query() query: {difficulty? : number, name?: string}) {
    return this.elixirService.findAll(query);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdatesElixir })
  update(@Param('id') id: string, @Body() updateElixirDto: UpdateElixirDto) {
    return this.elixirService.update(id, updateElixirDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, type: UpdatesElixir })
  remove(@Param('id') id: string) {
    return this.elixirService.remove(id);
  }
}
