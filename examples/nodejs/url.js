var http = require("http");
var URL = require("url");

http.createServer(function (req, res){
  var arg = URL.parse(req.url).query;
  var argJson = URL.parse(req.url, true).query;
  console.log(arg) // -> name=zanjs
  console.log(argJson) // -> { name: 'zanjs' }
}).listen('9999');

console.log('http://localhost:9999?name=zanjs')

// js
// var urlQuery = function(url){
//   var arr = [],obj={};
//   if(url.indexOf('?') != -1){
//       var parseStr = url.split("?")[1];
//       if(parseStr.indexOf("&") != -1){
//           arr = parseStr.split("&");
//           for(var i = 0;i < arr.length;i++){
//             var key = arr[i].split("=")[0]
//             var val = arr[i].split("=")[1] || ''
//             if (key) {
//               obj[key] = val;              
//             }
//           }
//       }else{
//           obj[parseStr.split("=")[0]] = parseStr.split("=")[1];
//       }
//   }
//   return obj;
// }