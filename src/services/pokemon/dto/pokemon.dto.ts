import { ApiProperty } from "@nestjs/swagger";
import { PokemonUrlPathType } from "../../../schema";

export class PokemonDto {
  @ApiProperty()
  readonly type: PokemonUrlPathType;

  @ApiProperty()
  readonly offset: Number;

  @ApiProperty()
  readonly limit: Number;
}
