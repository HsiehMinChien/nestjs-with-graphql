import { Args, Query, Resolver } from "@nestjs/graphql";
import { SystemService } from "./system.service";
import { SystemDto } from "./dto/system.dto";

@Resolver("System")
export class SystemResolvers {
  constructor(private readonly systemService: SystemService) {}
  @Query("getSystemInfo")
  async getSystemInfo() {
    return await this.systemService.getSystemInfo();
  }
}
