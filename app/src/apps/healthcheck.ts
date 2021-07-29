import { ApiGatewayEvent } from "../common/apigateway/apigateway-event";
import { ApiGatewayResponse } from "../common/apigateway/apigateway-response";
import { LambdaApp } from "../common/lambda-app";

export class HealthcheckApp implements LambdaApp {
  async run(event: ApiGatewayEvent): Promise<ApiGatewayResponse> {
    return { statusCode: 200 };
  }
}
