const babylon  = require("babylon");
const traverse = require('babel-traverse').default;
const t = require('babel-types');
const fs = require('fs');
require('./lib/colors');

const reloadCode = (name, code) => {
	const AST = babylon.parse(code);	
	try {
		fs.mkdirSync('./src/AST');
	} catch(e){
		if (e.code === 'EEXIST') {
			console.warn('AST already exists'.warn);
		} else {
			throw e;
		}
	}
	traverse(AST, {
		enter(path){
			// if (path.node.type === 'Identifier'){
			// 	if (path.node.name === 'n') {
			// 		path.node.name = 'XXX';
			// 	}
			// }
			if (t.isIdentifier(path.node, { name: "n" })) {
				path.node.name = 'testName';
			}
		}
	});
	try {
		fs.writeFileSync(`./src/AST/${name}.json`, JSON.stringify(AST, null, '\t'));
		console.log('AST转换成功！'.info);
	} catch(e){
		throw e;
	}
}

module.exports = {
  reloadCode
};