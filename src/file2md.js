const { Sitdown } = require('sitdown');
const fs = require('fs');
const path = require('path');

let sitdown = new Sitdown({
    keepFilter: ['style'],
});
// sitdown.service.remove('style').remove('img');
let h2m = sitdown.HTMLToMD.bind(sitdown);
let filePath = path.resolve('./static');

(function () {
  let filename = 'JavaScript.html';
  let fileDir = path.join(filePath, filename);
  console.log('fileDir', fileDir);
  let data = fs.readFileSync(fileDir, 'utf8');
  let str = data;
  let res = h2m(str);

  try {
    let filename = 'dist.md';
    let fileDir = path.join(filePath, filename);
    let data = fs.writeFileSync(fileDir, res);
    console.log('写入成功')
  } catch (e) {
    console.log('写入失败');
  }
})();
