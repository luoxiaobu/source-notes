// node.js 每一个文件都是一个单独模块
// Node对获取的Javascript文件的内容进行了包装，以传入如下变量
console.log(exports, require, module, __filename, __dirname);
// 可将需要导出的变量或函数挂载到 exports 对象的属性上，
exports.name = 'luoxiaobu';
exports.age = '18'


// node.js 每一个文件都是一个单独模块
// Node对获取的Javascript文件的内容进行了包装，以传入如下变量
console.log(exports, require, module, __filename, __dirname);
let name = 'luoxiaobu';
let age = '18'
// 使用 module.exports 对象整体导出一个变量对象或者函数，
module.exports = {name,age};