#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ApiGateway } from "../lib/api-gateway-stack";

const app = new cdk.App();
new ApiGateway(app, "CdkDemoStack", {});
