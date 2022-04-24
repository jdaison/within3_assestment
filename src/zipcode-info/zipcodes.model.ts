import { Length, IsString, IsNotEmpty } from 'class-validator';

export class ZipCodeParams {
  @IsString()
  @IsNotEmpty()
  @Length(2, 2)
  countryCode: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 10)
  zipcode: string;
}
