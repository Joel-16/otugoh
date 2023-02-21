import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {ElixirDocument,Elixir } from "./entities/elixir.entity"
import { CreateElixirDto } from './dto/create-elixir.dto';
import { UpdateElixirDto } from './dto/update-elixir.dto';

@Injectable()
export class ElixirService {
  constructor(
    @InjectModel(Elixir.name) 
    private elixirModel: Model<ElixirDocument>
  ){}
  async create(createWizardDto: CreateElixirDto) {
    return await this.elixirModel.create(createWizardDto);
  }

  async findAll(query: {difficulty?: number, name?: string}) {
    let elixirs=await this.elixirModel.find(query);
    if (elixirs.length === 0){
      return {message: "No elixir with the sent parameters"}
    }
    return 
  }

  async findOne(id: string) {
    return await this.elixirModel.findById(id);
  }

  async update(id: string, updateWizardDto: UpdateElixirDto) {
    await this.elixirModel.updateOne({id}, updateWizardDto);
    return {message : "success"}
  }

  async remove(id: string) {
    return await this.elixirModel.deleteOne({id})
  }
}
