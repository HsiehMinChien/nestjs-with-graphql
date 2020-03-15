import { Module, HttpModule } from "@nestjs/common";
import { SystemResolvers } from "./system.resolver";
import { SystemService } from "./system.service";
import { ConfigModule } from "../../config/config.module";

@Module({
  imports: [HttpModule.register({}), ConfigModule],
  providers: [SystemService, SystemResolvers]
})
export class SystemModule {}
