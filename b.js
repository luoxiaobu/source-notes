// 核心模块的引入 node自己的模块
let crypto = require('crypto')

// 用户自己编写的模块引入
let aModule = require('./a.js')
// 第三方，别人实现发布的模块（其实也是其他用户编写）
let proxy = require('http-proxy');