import { ApiGatewayEvent } from "../common/apigateway/apigateway-event";
import { ApiGatewayResponse } from "../common/apigateway/apigateway-response";
import { LambdaApp } from "../common/lambda-app";
import { BotRequest } from "./schemas";

export class GameBotApp implements LambdaApp {
  async run(event: ApiGatewayEvent): Promise<ApiGatewayResponse> {
    let request: BotRequest;
    try {
      request = JSON.parse(event.body);
    } catch (err) {
      console.log("Event body could not be parsed as JSON");
      return { statusCode: 400 };
    }
    return { statusCode: 200, body: "Hello World!" };
  }
}
