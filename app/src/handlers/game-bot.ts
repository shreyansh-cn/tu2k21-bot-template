import { GameBotApp } from "../apps/game-bot";
import { HealthcheckApp } from "../apps/healthcheck";
import { ApiGatewayEvent } from "../common/apigateway/apigateway-event";
import { ApiGatewayResponse } from "../common/apigateway/apigateway-response";
import { LambdaApp } from "../common/lambda-app";

export const handler = async (
  event: ApiGatewayEvent
): Promise<ApiGatewayResponse> => {
  let app: LambdaApp = new HealthcheckApp();
  if (event.httpMethod.toLowerCase() === "post") {
    app = new GameBotApp();
  }
  return await app.run(event);
};
