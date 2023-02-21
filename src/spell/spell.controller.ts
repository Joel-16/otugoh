import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SpellService } from './spell.service';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import { CreateSpell, GetSpell, UpdatesSpell } from './dto/responses';

@ApiTags("Spells")
@Controller('spell')
export class SpellController {
  constructor(private readonly spellService: SpellService) {}

  @Post()
  @ApiResponse({ status: 201, type: CreateSpell})
  create(@Body() createSpellDto: CreateSpellDto) {
    return this.spellService.create(createSpellDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: GetSpell })
  findAll(@Query('name') name: string) {
    return this.spellService.findAll(name);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdatesSpell })
  update(@Param('id') id: string, @Body() updateSpellDto: UpdateSpellDto) {
    return this.spellService.update(id, updateSpellDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, type: UpdatesSpell })
  remove(@Param('id') id: string) {
    return this.spellService.remove(id);
  }
}
