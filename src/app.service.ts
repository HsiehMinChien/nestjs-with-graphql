import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHomePage(): string {
    return "GraphQL on Nest.js";
  }
}
