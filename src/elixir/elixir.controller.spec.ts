import { Test, TestingModule } from '@nestjs/testing';
import { ElixirController } from './elixir.controller';
import { ElixirService } from './elixir.service';

describe('ElixirController', () => {
  let controller: ElixirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElixirController],
      providers: [ElixirService],
    }).compile();

    controller = module.get<ElixirController>(ElixirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
