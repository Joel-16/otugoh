import { Test, TestingModule } from '@nestjs/testing';
import { ElixirService } from './elixir.service';

describe('ElixirService', () => {
  let service: ElixirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElixirService],
    }).compile();

    service = module.get<ElixirService>(ElixirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
