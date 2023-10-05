const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);
  console.log(`Files to delete: ${files.join(', ')}`);
  files.forEach(file => fs.unlinkSync(path.join(logsDir, file)));
  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist');
}

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const fileContent = `This is log file ${i}`;
  fs.writeFileSync(fileName, fileContent);
  console.log(`Created file: ${fileName}`);
}