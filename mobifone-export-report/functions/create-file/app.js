var AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
    region: 'ap-southeast-1'
})

const fb = async (event) => {
    return await new Promise((resolve, reject) => {
        const params = {
            FunctionName: "mobifone-export-report-FeedbackFunction-xITWTrTlbnKC",
            Payload: JSON.stringify(event),
        };

        lambda.invoke(params, (err, results) => {
            if (err) reject(err);
            else {
                resolve(results);
            }
        });
    });
};

const main = async (event) => {
    console.log('Event:', event);
    return fb(event);
}

exports.lambdaHandler = main;
