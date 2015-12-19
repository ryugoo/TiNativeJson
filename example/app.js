(function () {
    'use strict';
    var win = Ti.UI.createWindow({
        backgroundColor: '#FFFFFF'
    });
    win.addEventListener('open', function () {
        var module = require('com.r384ta.ti.module.tinativejson');
        var json = module.parse('{"key": "value"}');
        var text = module.stringify(json);

        console.log('===== module.parse =====');
        console.log(json);

        console.log('===== module.stringify =====');
        console.log(text);
    });
    win.open();
}());
