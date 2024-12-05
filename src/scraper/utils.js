const fs = require('fs');
const path = require('path');

function saveDataToFile(data, fileName) {
    const filePath = path.join(__dirname, '../../data', fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { saveDataToFile };
