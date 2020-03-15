import { Module, HttpModule } from "@nestjs/common";
import { PokemonResolvers } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";
import { ConfigModule } from "../../config/config.module";

@Module({
  imports: [HttpModule.register({}), ConfigModule],
  providers: [PokemonService, PokemonResolvers]
})
export class PokemonModule {}
