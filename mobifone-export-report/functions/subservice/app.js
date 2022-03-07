const sql = require("mssql");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    trustServerCertificate: true,
};

exports.lambdaHandler = async (event, context) => {
    var response;
    try {
        let pool = await sql.connect(config);
        let result = await pool
            .request()
            .query("select SubServiceId, Agency, Source, Maintainer,  MaintainerRepresentative, CustomerServiceRepresentative, URL, Name, Description, convert(varchar(19), CreatedOn) as CreatedOn,  convert(varchar(19), UpdatedOn) as UpdatedOn from dbo.SubServices where Status <> 0");
        pool.close();

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                payload: result.recordset,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
