import { Injectable, HttpService } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SystemDto } from "./dto/system.dto";
import { ConfigService } from "../../config/config.service";

const systemInfo = {
  title: "GrqphQL demo with nest.js",
  describe: "A demo project",
  buildDate: "2020/03/12"
};

@Injectable()
export class SystemService {
  private readonly API_URL = `${this.configService.get("POKEMON_API_URL")}`;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  getSystemInfo(): Observable<any> {
    return of(systemInfo).pipe(map(item => item));
  }
}
