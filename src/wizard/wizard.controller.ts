import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { WizardService } from './wizard.service';
import { CreateWizardDto } from './dto/create-wizard.dto';
import { UpdateWizardDto } from './dto/update-wizard.dto';
import { CreateWizard, GetWizard, UpdatesWizard } from './dto/responses';

@ApiTags("Wizards")
@Controller('wizard')
export class WizardController {
  constructor(private readonly wizardService: WizardService) {}

  @Post()
  @ApiResponse({ status: 201, type: CreateWizard })
  create(@Body() createWizardDto: CreateWizardDto) {
    return this.wizardService.create(createWizardDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: GetWizard })
  @ApiResponse({ status: 200, type: UpdatesWizard })
  findAll(@Query() query: {firstname?: string, lastname?: string, page?: number}) {
    return this.wizardService.findAll(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWizardDto: UpdateWizardDto) {
    return this.wizardService.update(id, updateWizardDto);
  }

  @Patch('add-spell/:id')
  @ApiResponse({ status: 200, type: UpdatesWizard })
  addSpell(@Param('id') id: string, @Body("spell") spell: string) {
    return this.wizardService.addSpell(id, spell);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, type: UpdatesWizard })
  remove(@Param('id') id: string) {
    return this.wizardService.remove(id);
  }
}
