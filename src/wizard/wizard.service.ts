import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SpellService } from '../spell/spell.service';
import { CreateWizardDto } from './dto/create-wizard.dto';
import { UpdateWizardDto } from './dto/update-wizard.dto';
import { Wizard, WizardDocument } from './entities/wizard.entity';

@Injectable()
export class WizardService {
  constructor(
    @InjectModel(Wizard.name) 
    private wizardModel: Model<WizardDocument>,
    private readonly spellService: SpellService
  ){}

  async create(createWizardDto: CreateWizardDto) {
    return await this.wizardModel.create(createWizardDto);
  }

  async findAll(query: {firstname?: string, lastname?: string, page?:number}) {
    let page = Number(query.page) -1
    delete query.page
    const total = await this.wizardModel.countDocuments()
    let wizards = await this.wizardModel.find(query).limit(2).skip(page * 2);
    if (wizards.length === 0){
      return {message: "No wizard with the sent parameters"}
    }
    const previous = (page) * 2 > 0 ? page : null;
    const nextPage = (page +1 ) * 2 < total ? { page: page + 2 } : null;
    let populatedWizard= []
    for(let i=0; i< wizards.length; ++i){
      populatedWizard.push(await wizards[i].populate("spell"))
    }
    return {
      previous,
      total,
      page : page +1,
      wizards:populatedWizard,
      nextPage
    }
  }

  async update(id: string, updateWizardDto: UpdateWizardDto) {
    await this.wizardModel.updateOne({id}, updateWizardDto);
    return {message : "success"}
  }

  async remove(id: string) {
    return await this.wizardModel.deleteOne({id})
  }

  async addSpell(id: string, spell: string){
    let spel= await this.spellService.findOne(spell);
    let wizard = await this.wizardModel.findById(id);
    wizard.spell.push(spel)
    await wizard.save()
    return {message : "success"}
  }
}
