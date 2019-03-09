const csv2json = require('./csv2json.js');
var fs = require('fs');

fs.readFile('./scopus.csv', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const json = csv2json(data, { parseNumbers: true });
  console.log('==Result==');
  //console.log(JSON.stringify(json, null, 2));

  fs.appendFile('scopus.json', JSON.stringify(json, null, 2) , (error)=>{
    if(error){
      throw error;
    }
    console.log('Archivo JSON creado.');
  });
});
