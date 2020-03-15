import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import ServiceModules from "./services";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./src/graphql/*.graphql"],
      definitions: {
        path: join(process.cwd(), "./src/schema.ts"),
        outputAs: "class"
      },
      introspection: true,
      playground: true
    }),
    ...ServiceModules
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
