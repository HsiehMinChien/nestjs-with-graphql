import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SystemModule } from "./system/system.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./src/graphql/*.graphql"],
      definitions: {
        path: join(process.cwd(), "./src/schema.ts"),
        outputAs: "class"
      }
    }),
    SystemModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
