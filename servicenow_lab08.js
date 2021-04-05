//
// L08 - Changing and detecting variable types
//

var i=5;
var iStr = i.toString();
gs.info('type of i='+ typeof i);
gs.info('type of iStr='+ typeof iStr);

var n = parseInt(iStr);
var f = parseFloat(iStr);

gs.info('f='+f);


gs.info(typeof n + ' n=' + n);

gs.info('n+i='+(n+i));

// homework lab

var string1 = 'Chucnk';
var string2 = 'Tomasi';
var string3 = 'Javascript';

gs.info('length1 = ' + string1.length);
gs.info('length2 = ' + string2.length);
gs.info('length3 = ' + string3.length);


var allString = string1 + '\n' + string2 + '\n' + string3;
gs.info('allString='+allString);
gs.info('length of allString=' + allString.length);
