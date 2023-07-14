const regexpTree = require('regexp-tree');

function getre() {
    const originalRe = /[a-zA-Z_0-9][A-Z_\da-z]*\e{1,}/;
    return regexpTree
        .optimize(originalRe)
        .toRegExp();
}

function newre(){
    return regexpTree.parse(/a|b/);
}

module.exports = {
    getre: getre,
    newre: newre
}
