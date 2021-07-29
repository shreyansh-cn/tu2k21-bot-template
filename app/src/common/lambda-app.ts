import { ApiGatewayEvent } from "./apigateway/apigateway-event";
import { ApiGatewayResponse } from "./apigateway/apigateway-response";

export interface LambdaApp {
  run(event: ApiGatewayEvent): Promise<ApiGatewayResponse>;
}
