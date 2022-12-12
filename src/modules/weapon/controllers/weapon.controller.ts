import { Controller, Get, Post } from '@nestjs/common';
import { WeaponDto } from '../dtos/weapon.dto';
import { WeaponCreateUsecase } from '../usecases/weapon-create.usecase';
import { WeaponFindAllUsecase } from '../usecases/weapon-find-all.usecase';

@Controller('weapon')
export class WeaponController {
  constructor(
    private weaponCreateUsecase: WeaponCreateUsecase,
    private weaponFindAllUsecase: WeaponFindAllUsecase,
  ) {}

  @Get()
  async findAll() {
    const weapons = await this.weaponFindAllUsecase.execute();
    return weapons;
  }

  @Post()
  async create(input: WeaponDto) {
    const weapon = await this.weaponCreateUsecase.execute(input);
    return weapon;
  }
}
