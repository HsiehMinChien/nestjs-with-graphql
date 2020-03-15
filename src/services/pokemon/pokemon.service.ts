import { Injectable, HttpService } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { PokemonDto } from "./dto/pokemon.dto";
import { ConfigService } from "../../config/config.service";
import { PokemonUrlPathType } from "../../schema";

@Injectable()
export class PokemonService {
  private readonly API_URL = this.configService.get("POKEMON_API_URL");

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  getPokemonAllUrl(): Observable<AxiosResponse<any>> {
    return this.httpService.get(this.API_URL).pipe(
      map(response => response.data),
      catchError(error => {
        return error;
      })
    );
  }
  getPokemonInfo(type: PokemonUrlPathType): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`${this.API_URL}/${PokemonUrlPathType[type]}`)
      .pipe(
        map(response => response.data),
        catchError(error => {
          return error;
        })
      );
  }
}
