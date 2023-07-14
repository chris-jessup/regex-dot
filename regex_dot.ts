const regexpTree = require('regexp-tree');

function getre() {
    const originalRe = /[a-zA-Z_0-9][A-Z_\da-z]*\e{1,}/;
    return regexpTree
        .optimize(originalRe)
        .toRegExp();
}

module.exports = {
    getre: getre
}
