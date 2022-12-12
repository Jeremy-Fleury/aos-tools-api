import { Test, TestingModule } from '@nestjs/testing';
import { DiceD6 } from '../../dice/entities/dice-d6.entity';
import { WeaponEntity } from '../entities/weapons.entity';
import { WeaponInMemoryRepository } from '../repositories/weapon-inmemory.repository';
import { WeaponRepository } from '../repositories/weapon.repository';
import { WeaponCreateUsecase } from './weapon-create.usecase';

describe('WeaponsCreateUsecase', () => {
  let weaponCreateUsecase: WeaponCreateUsecase;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: WeaponRepository,
          useValue: new WeaponInMemoryRepository(),
        },
        WeaponCreateUsecase,
      ],
      imports: [],
    }).compile();

    weaponCreateUsecase =
      moduleRef.get<WeaponCreateUsecase>(WeaponCreateUsecase);
  });

  it('should create a new weapon', async () => {
    const want = await weaponCreateUsecase.execute({
      type: 'ranged',
      name: 'Thengavar',
      range: 18,
      attacks: 1,
      toHit: 2,
      toWound: 2,
      rend: -2,
      damage: new DiceD6(),
    });

    const got: WeaponEntity = {
      id: 'e6f4b0e0-4b1a-4b1a-9b1a-4b1a4b1a4b1a',
      type: 'ranged',
      name: 'Thengavar',
      range: 18,
      attacks: 1,
      toHit: 2,
      toWound: 2,
      rend: -2,
      damage: new DiceD6(),
    };

    expect(want).toEqual({
      ...got,
      id: expect.any(String),
    });
  });
});
