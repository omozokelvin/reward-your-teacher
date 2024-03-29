import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { GenderEnum } from 'src/common/enums';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @Transform(({ value }) => value.toUpperCase())
  @IsEnum(GenderEnum)
  gender: GenderEnum;
}
