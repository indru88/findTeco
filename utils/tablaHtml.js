module.exports = creaTablaHtml = (datos) => {
  let tabla = (
    '<style>table{border-collapse: collapse;}table td{border: 1px solid black;} table th {border: 1px solid gray;background-color: lightgrey;}</style>' +
    '<table style="border: 1px solid #333;">' +
    '<thead>' +
    '<th> Apellido y nombre </th>' +
    '<th> Legajo </th>' +
    '<th> DNI </th>' +
    '<th> Edad </th>' +
    '<th> Rol </th>' +
    '<th> Jefe Inmediato </th>' +
    '<th> Gerencia </th>' +
    '<th> Sector </th>' +
    '</thead>'
  );
  for (const { ApellidoNombre, Legajo, DNI, Edad, Rol, JefeInmediato, Gerencia, Sector } of datos) {
    tabla += (
      '<tr>' +
      '<td>' + ApellidoNombre + '</td>' +
      '<td>' + Legajo + '</td>' +
      '<td>' + DNI + '</td>' +
      '<td>' + Edad + '</td>' +
      '<td>' + Rol + '</td>' +
      '<td>' + JefeInmediato + '</td>' +
      '<td>' + Gerencia + '</td>' +
      '<td>' + Sector + '</td>' +
      '</tr>'
    );
  }

  tabla += '</table>';

  return tabla
}
