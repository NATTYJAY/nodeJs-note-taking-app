const fs = require('fs')

const dataBuffer = fs.readFileSync('store-json.json');
const dataString = dataBuffer.toString();
const convertDataToObject = JSON.parse(dataString);

convertDataToObject.name = "Dotun Oyelakin";
convertDataToObject.age = 27;
convertDataToObject.department = "Computer Engineering";

// Json sometimes looks like an object
const write = fs.writeFileSync('store-json.json', JSON.stringify(convertDataToObject));
