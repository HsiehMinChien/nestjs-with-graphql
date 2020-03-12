import { Injectable, HttpService } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SystemDto } from "./dto/system.dto";
import { ConfigService } from "../config/config.service";

@Injectable()
export class SystemService {
  private readonly API_URL = `${this.configService.get("POKEMON_API_URL")}`;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  getPlatformInfo(): Observable<any> {
    return of({
      title: "GrqphQL demo with nest.js",
      describe: "A demo project",
      buildDate: "2020/03/12"
    }).pipe(map(item => item));
  }

  getAllUrl(): Observable<AxiosResponse<any>> {
    return this.httpService.get(this.API_URL).pipe(
      map(response => response.data),
      catchError(error => {
        return error;
      })
    );
  }
}
