
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var twilio = require('twilio')('AC8c223bc9b33b68d99a4a06a6412c226a', 'c7575a405687c2496aa92456b0b0a98f');

Parse.Cloud.define("sendVerificationCode", function(request, response) {
	var verificationCode = request.params.verificationCode;
    //var verificationCode = Math.floor(Math.random()*999999);
    //var user = Parse.User.current();
    //user.set("phoneVerificationCode", verificationCode);
    //user.save();
    
    twilio.sendSms({
        From: "+14012565038",
        To: request.params.phoneNumber,
        Body: "您的BabyCare驗證碼為[" + verificationCode + "]"
    }, function(err, responseData) { 
        if (err) {
          response.error(err);
        } else { 
          response.success("Success");
        }
    });
});

Parse.Cloud.define("verifyPhoneNumber", function(request, response) {
    var user = Parse.User.current();
    var verificationCode = user.get("phoneVerificationCode");
    if (verificationCode == request.params.phoneVerificationCode) {
        user.set("phoneNumber", request.params.phoneNumber);
        user.save();
        response.success("Success");
    } else {
        response.error("Invalid verification code.");
    }
});