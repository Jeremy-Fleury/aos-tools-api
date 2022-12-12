import { Test, TestingModule } from '@nestjs/testing';
import { WeaponInMemoryRepository } from '../repositories/weapon-inmemory.repository';
import { WeaponRepository } from '../repositories/weapon.repository';
import { WeaponCreateUsecase } from './weapon-create.usecase';
import { WeaponFindAllUsecase } from './weapon-find-all.usecase';

describe('WeaponFindAllUsecase', () => {
  let weaponFindAllUsecase: WeaponFindAllUsecase;
  let weaponCreateUsecase: WeaponCreateUsecase;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: WeaponRepository,
          useValue: new WeaponInMemoryRepository(),
        },
        WeaponCreateUsecase,
        WeaponFindAllUsecase,
      ],
    }).compile();

    weaponCreateUsecase = moduleRef.get<WeaponCreateUsecase>(
      'WeaponCreateUsecase',
    );
    weaponFindAllUsecase = moduleRef.get<WeaponFindAllUsecase>(
      'WeaponFindAllUsecase',
    );
  });

  it('should find all weapons', async () => {
    const got = [
      await weaponCreateUsecase.execute({
        type: 'melee',
        name: "Soulguard's halberd",
        range: 1,
        attacks: 3,
        toHit: 3,
        toWound: 3,
        rend: -1,
        damage: 2,
      }),
      await weaponCreateUsecase.execute({
        type: 'melee',
        name: 'Sigmarite warblade',
        range: 1,
        attacks: 4,
        toHit: 3,
        toWound: 3,
        rend: -1,
        damage: 2,
      }),
    ];

    const want = weaponFindAllUsecase.execute();

    expect(got).toEqual(want);
  });
});
