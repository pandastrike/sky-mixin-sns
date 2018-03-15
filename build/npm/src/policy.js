"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Panda Sky Mixin: SNS Lambda permission policy
// This mixin grants the API Lambdas access to a SNS topic to send sms and push notifications.
// That IAM Role permission is rolled into your CloudFormation stack after being generated here.
var Policy;

Policy = function (config, global, SDK) {
  return [{
    // TODO: Look into locking this down. We'd like to allow the Lambdas to target individual phone numbers for now, and worry about topic subscrption in a later version.
    Effect: "Allow",
    Action: ["sns:Publish"],
    Resource: ["*"]
  }];
};

exports.default = Policy;