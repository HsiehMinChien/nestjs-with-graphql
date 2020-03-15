import { Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SystemDto } from "./dto/system.dto";

const systemInfo = {
  title: "GrqphQL demo with nest.js",
  describe: "A demo project",
  tags: ["Typescript", "GraphQL", "Nestjs"],
  createdAt: "2020/03/12",
  createdBy: "Hsihe, Min-Chien"
};

@Injectable()
export class SystemService {
  getSystemInfo(): Observable<any> {
    return of(systemInfo).pipe(map(item => item));
  }
}
