const xlsx = require('xlsx');
const jcc = require('json-case-convertor');

/**
 * Ingresa la tabla desde el archivo excel en un objeto
 */
cargarExcel = () => {
  const workbook = xlsx.readFile('/usr/src/app/utils/Nomina.xlsx', { type: 'binary', cellDates: true, dateNF: 'dd/mm/yyyy', strip: false, blankrows: true })
  const workbookSheets = workbook.SheetNames
  const sheet = workbookSheets[0]
  const dataExcel = xlsx.utils.sheet_to_json(workbook.Sheets[sheet])
  return jcc.lowerCaseKeys(dataExcel)
}

module.exports = cargarExcel