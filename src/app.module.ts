import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WizardModule } from './wizard/wizard.module';
import { SpellModule } from './spell/spell.module';
import { ElixirModule } from './elixir/elixir.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/wizardworld'),
    WizardModule, 
    SpellModule, 
    ElixirModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
