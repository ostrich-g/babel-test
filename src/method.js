const reloadCode = (name, code) => {
    const babylon  = require("babylon");
    const fs = require('fs');
    const AST = babylon.parse(code);
    fs.mkdirSync('./AST', function(err){
        if (err.code === 'EEXIST') {
            console.error('AST already exists');
            return;
        }
        throw err;        
    });
    fs.writeFileSync(`./AST/${name}.js`, JSON.stringify(AST, null, '\t'), function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('转换成功！');
        }
    })
}

module.exports = reloadCode;