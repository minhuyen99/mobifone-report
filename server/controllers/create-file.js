var xl = require('excel4node');

const { GetReportFeedbackByMonth, GetReport3CompaniesByMonth, GetReportVNCertByMonth, GetReportSubServiceByMonth } = require('./report')

var wb = new xl.Workbook();

var ws = wb.addWorksheet('Hỗ trợ CTKV');
var ws2 = wb.addWorksheet('Hỗ trợ 3 cty con');
var ws3 = wb.addWorksheet('VNCert');
var ws4 = wb.addWorksheet('Cổng thông tin');

ws.cell(1, 1).string('FeedbackId')
ws.cell(1, 2).string('PhoneNumber')
ws.cell(1, 3).string('PhoneType')
ws.cell(1, 4).string('CustomerType')
ws.cell(1, 5).string('InputInformation')
ws.cell(1, 6).string('Status')
ws.cell(1, 7).string('City')
ws.cell(1, 8).string('District')
ws.cell(1, 9).string('Ward')
ws.cell(1, 10).string('Delivered')
ws.cell(1, 11).string('CreatedOn')
ws.cell(1, 12).string('CreatedBy')

ws2.cell(1, 1).string('FeedbackId')
ws2.cell(1, 2).string('PhoneNumber')
ws2.cell(1, 3).string('PhoneType')
ws2.cell(1, 4).string('CustomerType')
ws2.cell(1, 5).string('InputInformation')
ws2.cell(1, 6).string('Status')
ws2.cell(1, 7).string('City')
ws2.cell(1, 8).string('District')
ws2.cell(1, 9).string('Ward')
ws2.cell(1, 10).string('Delivered')
ws2.cell(1, 11).string('CreatedOn')
ws2.cell(1, 12).string('CreatedBy')

ws3.cell(1, 1).string('VNCertId')
ws3.cell(1, 2).string('PhoneNumber')
ws3.cell(1, 3).string('Network')
ws3.cell(1, 4).string('Source')
ws3.cell(1, 5).string('Content')
ws3.cell(1, 6).string('NDCStatus')
ws3.cell(1, 7).string('NDCRegistrationTime')
ws3.cell(1, 8).string('ReflectionTime')
ws3.cell(1, 9).string('ReflectionType')
ws3.cell(1, 10).string('SourceType')
ws3.cell(1, 11).string('ProcessingStatus')
ws3.cell(1, 12).string('ProcessingContent')
ws3.cell(1, 13).string('Proof')
ws3.cell(1, 14).string('CreatedOn')

ws4.cell(1, 1).string('SubServiceId')
ws4.cell(1, 2).string('Agency')
ws4.cell(1, 3).string('Source')
ws4.cell(1, 4).string('Maintainer')
ws4.cell(1, 5).string('MaintainerRepresentative')
ws4.cell(1, 6).string('CustomerServiceRepresentative')
ws4.cell(1, 7).string('URL')
ws4.cell(1, 8).string('Name')
ws4.cell(1, 9).string('Description')
ws4.cell(1, 10).string('CreatedOn')
ws4.cell(1, 11).string('UpdatedOn')

exports.CreateFile = async (req, res) => {
    let month = +req.query.month
    let year = +req.query.year
    let start = new Date()

    let result = await GetReportFeedbackByMonth(month, year)
    for (let i = 0; i < result.length; i++) {
        ws.cell(i + 2, 1).string(result[i]['FeedbackId'].toString())
        ws.cell(i + 2, 2).string(result[i]['PhoneNumber'])
        ws.cell(i + 2, 3).string(result[i]['PhoneType'])
        ws.cell(i + 2, 4).string(result[i]['CustomerType'])
        ws.cell(i + 2, 5).string(result[i]['InputInformation'])
        ws.cell(i + 2, 6).string(result[i]['Status'])
        ws.cell(i + 2, 7).string(result[i]['City'])
        ws.cell(i + 2, 8).string(result[i]['District'])
        ws.cell(i + 2, 9).string(result[i]['Ward'] == null ? '' : result[i]['Ward'])
        ws.cell(i + 2, 10).string(result[i]['Delivered'] == null ? '' : result[i]['Delivered'])
        ws.cell(i + 2, 11).date(result[i]['CreatedOn'])
        ws.cell(i + 2, 12).string(result[i]['CreatedBy'] == null ? '' : result[i]['CreatedBy'])
    }

    result = await GetReport3CompaniesByMonth(month, year)
    for (let i = 0; i < result.length; i++) {
        ws2.cell(i + 2, 1).string(result[i]['FeedbackId'].toString())
        ws2.cell(i + 2, 2).string(result[i]['PhoneNumber'])
        ws2.cell(i + 2, 3).string(result[i]['PhoneType'])
        ws2.cell(i + 2, 4).string(result[i]['CustomerType'])
        ws2.cell(i + 2, 5).string(result[i]['InputInformation'])
        ws2.cell(i + 2, 6).string(result[i]['Status'])
        ws2.cell(i + 2, 7).string(result[i]['City'])
        ws2.cell(i + 2, 8).string(result[i]['District'])
        ws2.cell(i + 2, 9).string(result[i]['Ward'] == null ? '' : result[i]['Ward'])
        ws2.cell(i + 2, 10).string(result[i]['Delivered'] == null ? '' : result[i]['Delivered'])
        ws2.cell(i + 2, 11).date(result[i]['CreatedOn'])
        ws2.cell(i + 2, 12).string(result[i]['CreatedBy'] == null ? '' : result[i]['CreatedBy'])
    }

    result = await GetReportVNCertByMonth(month, year)
    for (let i = 0; i < result.length; i++) {
        ws3.cell(i + 2, 1).string(result[i]['VNCertId'].toString())
        ws3.cell(i + 2, 2).string(result[i]['PhoneNumber'])
        ws3.cell(i + 2, 3).string(result[i]['Network'])
        ws3.cell(i + 2, 4).string(result[i]['Source'])
        ws3.cell(i + 2, 5).string(result[i]['Content'])
        ws3.cell(i + 2, 6).string(result[i]['NDCStatus'] == null ? '' : result[i]['NDCStatus'])
        ws3.cell(i + 2, 7).string(result[i]['NDCRegistrationTime'] == null ? '' : result[i]['NDCRegistrationTime'])
        ws3.cell(i + 2, 8).string(result[i]['ReflectionTime'])
        ws3.cell(i + 2, 9).string(result[i]['ReflectionType'])
        ws3.cell(i + 2, 10).string(result[i]['SourceType'])
        ws3.cell(i + 2, 11).string(result[i]['ProcessingStatus'])
        ws3.cell(i + 2, 12).string(result[i]['ProcessingContent'] == null ? '' : result[i]['ProcessingContent'])
        ws3.cell(i + 2, 13).string(result[i]['Proof'] == null ? '' : result[i]['Proof'])
        ws3.cell(i + 2, 14).date(result[i]['CreatedOn'])
    }

    result = await GetReportSubServiceByMonth()
    for (let i = 0; i < result.length; i++) {
        ws4.cell(i + 2, 1).string(result[i]['SubServiceId'].toString())
        ws4.cell(i + 2, 2).string(result[i]['Agency'])
        ws4.cell(i + 2, 3).string(result[i]['Source'])
        ws4.cell(i + 2, 4).string(result[i]['Maintainer'] == null ? '' : result[i]['Maintainer'])
        ws4.cell(i + 2, 5).string(result[i]['MaintainerRepresentative'] == null ? '' : result[i]['MaintainerRepresentative'])
        ws4.cell(i + 2, 6).string(result[i]['CustomerServiceRepresentative'] == null ? '' : result[i]['CustomerServiceRepresentative'])
        ws4.cell(i + 2, 7).string(result[i]['URL'] == null ? '' : result[i]['URL'])
        ws4.cell(i + 2, 8).string(result[i]['Name'])
        ws4.cell(i + 2, 9).string(result[i]['Description'] == null ? '' : result[i]['Description'])
        ws4.cell(i + 2, 10).date(result[i]['CreatedOn'])
        ws4.cell(i + 2, 11).date(result[i]['UpdatedOn'] == null ? new Date() : result[i]['UpdatedOn'])
    }

    // wb.write(`data-mobifone-${month}-${year}.xlsx`)

    let base64
    await wb.writeToBuffer().then((buffer) => {
        base64 = buffer.toString("base64");
    });
    let end = new Date()


    res.send(base64)
}




