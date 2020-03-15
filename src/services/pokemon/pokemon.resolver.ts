import { Args, Query, Resolver } from "@nestjs/graphql";
import { PokemonService } from "./pokemon.service";
import { PokemonDto } from "./dto/pokemon.dto";

@Resolver("Pokemon")
export class PokemonResolvers {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query("getPokemonAllUrl")
  async getAllUrl() {
    return await this.pokemonService.getPokemonAllUrl();
  }
  @Query("getPokemonInfo")
  async getPokemonInfo(@Args() args: PokemonDto) {
    return await this.pokemonService.getPokemonInfo(args);
  }
}
