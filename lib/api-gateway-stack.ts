import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { join } from "path";

export class ApiGateway extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const gatewayApi = new RestApi(this, "DemoApi");
    const demoLambda = new NodejsFunction(this, "DemoLambda", {
      entry: join(__dirname, "..", "lambda-src", "demo-lambda", `index.ts`),
      handler: "handler",
      functionName: "DemoLambda",
    });
    const rootLambdaIntegration = new LambdaIntegration(demoLambda);
    gatewayApi.root.addMethod("GET", rootLambdaIntegration);
  }
}
