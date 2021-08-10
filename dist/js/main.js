"use strict";
var codes = document.querySelectorAll('.code');
codes[0].focus();
codes.forEach(function (code, idx) {
    code.addEventListener('keydown', function (e) {
        if (+e.key >= 0 && +e.key <= 9) {
            codes[idx].value = '';
            setTimeout(function () { return codes[idx + 1].focus(); }, 10);
        }
        else if (e.key === 'Backspace') {
            setTimeout(function () { return codes[idx - 1].focus(); }, 10);
        }
    });
});
