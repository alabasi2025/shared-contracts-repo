import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
// No need for PartialType

export class CreateGeneDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export type UpdateGeneDto = Partial<CreateGeneDto>;
