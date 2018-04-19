const colors = require( "colors");
const setColor = () => {
	colors.setTheme({
		info: 'green',
		warn: 'yellow',
		debug: 'blue',
		error: 'red'
	});  
}
setColor();