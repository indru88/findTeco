const xlsx = require('xlsx');
const jcc = require('json-case-convertor');

cargarExcel = () => {
  const workbook = xlsx.readFile('/usr/src/app/utils/Nomina.xlsx')
  const workbookSheets = workbook.SheetNames
  const sheet = workbookSheets[0]
  const dataExcel = xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
  return jcc.lowerCaseKeys(dataExcel)
}

module.exports = cargarExcel