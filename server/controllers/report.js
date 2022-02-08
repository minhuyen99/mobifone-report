const sql = require("mssql");

const config = {
    user: 'admin',
    password: 'ProudVietnam11235813',
    server: 'ci-dev-01.cennywp6tvhb.ap-southeast-1.rds.amazonaws.com',
    database: 'Mobifone',
    trustServerCertificate: true,
};

exports.GetReportFeedbackByMonth = async (month, year) => {
    try {
        let pool = await sql.connect(config);

        let result = await pool
            .request()
            .input("month", sql.Int, month)
            .input("year", sql.Int, year)
            .execute("dbo.spGetReportFeedbackByMonth");
        pool.close();
        return result.recordset
    } catch (err) {
        console.log(err);
    }
};

exports.GetReport3CompaniesByMonth = async (month, year) => {
    try {
        let pool = await sql.connect(config);

        let result = await pool
            .request()
            .input("month", sql.Int, month)
            .input("year", sql.Int, year)
            .execute("dbo.spGetReport3CompaniesByMonth");

        pool.close();
        return result.recordset
    } catch (err) {
        console.log(err);
    }
};

exports.GetReportVNCertByMonth = async (month, year) => {
    try {
        let pool = await sql.connect(config);

        let result = await pool
            .request()
            .input("month", sql.Int, month)
            .input("year", sql.Int, year)
            .execute("dbo.spGetReportVNCertByMonth");

        pool.close();
        return result.recordset
    } catch (err) {
        console.log(err);
    }
};

exports.GetReportSubServiceByMonth = async () => {
    try {
        let pool = await sql.connect(config);

        let result = await pool
            .request()
            .query("select * from dbo.SubServices where Status <> 0");

        pool.close();
        return result.recordset
    } catch (err) {
        console.log(err);
    }
};
