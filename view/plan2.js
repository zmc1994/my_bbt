define(function(require, exports, module){return function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<thead><tr><th>名称</th><th>预计年化收益</th><th>投资人数</th><th>项目金额</th><th>售空时间</th><th>计划状态</th></tr></thead><tbody>';for(x in obj){;__p += '<tr><td>' +((__t = (obj[x][0])) == null ? '' : __t) +'</td><td>' +((__t = (obj[x][1])) == null ? '' : __t) +'</td><td>' +((__t = (obj[x][2])) == null ? '' : __t) +'</td><td>' +((__t = (obj[x][3])) == null ? '' : __t) +'</td><td>' +((__t = (obj[x][4])) == null ? '' : __t) +'</td><td>' +((__t = (obj[x][5])) == null ? '' : __t) +'</td></tr>';};__p += '</tbody>';}return __p}});