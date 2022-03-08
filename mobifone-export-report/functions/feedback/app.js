const sql = require("mssql");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    trustServerCertificate: true,
};

exports.lambdaHandler = async (event, context) => {
    // var response, month = event.queryStringParameters.month, year = event.queryStringParameters.year;
    var response;
    try {
        let pool = await sql.connect(config);
        let result = await pool
            .request()
            .input("month", sql.Int, event.month)
            .input("year", sql.Int, event.year)
            .execute("dbo.spGetReportFeedbackByMonth");
        pool.close();

        response = {
            statusCode: 200,
            // headers: {
            //     "Access-Control-Allow-Headers": "Content-Type",
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
            // },
            body: JSON.stringify({
                payload: result.recordset,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    return response
};
