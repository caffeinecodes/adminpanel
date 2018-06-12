var aws = require("aws-sdk");
var ses = new aws.SES({"accessKeyId": "AKIAJFAOSFNXDABGIF6Q", "secretAccessKey": "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", "region": "us-east-1"});
var eparam = {
    Destination: {
        ToAddresses: ["vibhashtiwari4695@gmail.com"]
    },
    Message: {
        Body: {
            Html: {
                Data: "<p>Hello, this is a test email!</p>"
            },
            Text: {
                Data: "Hello, this is a test email!"
            }
        },
        Subject: {
            Data: "SES email test"
        }
    },
    Source: "vibhash.tiwari@quflip.com",
    ReplyToAddresses: ["vibhash.tiwari@quflip.com"],
    ReturnPath: "vibhash.tiwari@quflip.com"
};

ses.sendEmail(eparam, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
});
