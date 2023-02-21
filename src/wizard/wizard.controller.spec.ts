import { Test, TestingModule } from '@nestjs/testing';
import { WizardController } from './wizard.controller';
import { WizardService } from './wizard.service';

describe('WizardController', () => {
  let controller: WizardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WizardController],
      providers: [WizardService],
    }).compile();

    controller = module.get<WizardController>(WizardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
