const setColor = () => {
  const colors = require( "colors");
	colors.setTheme({
		info: 'green',
		warn: 'yellow',
		debug: 'blue',
		error: 'red'
	});  
}
setColor();