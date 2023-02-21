import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WizardService } from './wizard.service';
import { WizardController } from './wizard.controller';
import { Wizard, WizardSchema } from './entities/wizard.entity';
import { SpellModule } from 'src/spell/spell.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Wizard.name, schema: WizardSchema}]), SpellModule],
  controllers: [WizardController],
  providers: [WizardService]
})
export class WizardModule {}
