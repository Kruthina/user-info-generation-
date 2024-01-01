'use strict';
const test = require('os')

function userinf() {

    const uin = test.userInfo(); // utf-8
    var add = {
        encoding: 'buffer'
    };
    const uin1 = test.userInfo(add);
    if (uin) {
        console.log(uin);
        console.log('\nbuffered value given below\n');
        console.log(uin1);
    }

}
userinf();


module.exports.userinf = userinf;