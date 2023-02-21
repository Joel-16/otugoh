import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Spell, SpellDocument } from './entities/spell.entity';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';

@Injectable()
export class SpellService {
  constructor(
    @InjectModel(Spell.name) 
    private spellModel: Model<SpellDocument>
  ){}
  async create(createWizardDto: CreateSpellDto) {
    return await this.spellModel.create(createWizardDto);
  }

  async findAll(name: string) {
    let spells= await this.spellModel.find({name});
    if (spells.length === 0){
      return {message: "No spells with the sent parameters"}
    }
    return spells
  }

  async findOne(id: string) {
    return await this.spellModel.findById(id);
  }

  async update(id: string, updateWizardDto: UpdateSpellDto) {
    await this.spellModel.updateOne({id}, updateWizardDto);
    return {message : "success"}
  }

  async remove(id: string) {
    return await this.spellModel.deleteOne({id})
  }
}
