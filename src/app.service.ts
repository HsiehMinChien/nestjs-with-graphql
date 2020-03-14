import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHomePage(): string {
    return `
    <div style="padding: 15% 15% 5% 15%; text-align:center;">
      <div style="background-color: #eee; border-radius: 10px; padding: 10px 20px; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);">
        <h1>Welcome to my nest.js demo project</h1>
        <h2>NestJs + Typescript + GraphQL(Server side)</h2>

        <br/><br/>

        <a href="/graphql">
          <h3>Try GraphQL Playground</h3>
        </a>
      </div>
    </div>
    <div style="text-align:center;">Created by <a href="https://github.com/HsiehMinChien">Hsieh-Min-Chien</a></div>
    `;
  }
}
