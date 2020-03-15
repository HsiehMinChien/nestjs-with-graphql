import { ApiProperty } from "@nestjs/swagger";
import { PokemonUrlPathType } from "../../../schema";

export class PokemonDto {
  @ApiProperty()
  readonly type: PokemonUrlPathType;
}
