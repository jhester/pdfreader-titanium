PDF Reader for Titanium
=======
This module wraps [PDF iOS Core](https://github.com/vfr/Reader) to give Titanium developers more options for displaying PDF files. PDF iOS Core is a fully featured reader, most options are included with this module. Source is provided, but also distributions inside the `dist` folder to get started quickly.
![image](https://raw.githubusercontent.com/jhester/pdfreader-titanium/master/screen.png)

Use the module like this:

	// open a single window
	var win = Ti.UI.createWindow({
		backgroundColor : 'white'
	});
	var label = Ti.UI.createLabel();
	win.add(label);
	win.open();
	
	// Include PDFReader
	var PDFReader = require('com.josiah.pdfreader');
	Ti.API.info("module is => " + PDFReader);
	
	label.text = 'Click to open PDF viewer';
	label.addEventListener('click', function(e) {
		// Resolve the file path and open PDF
		var f = Ti.Filesystem.getFile('Reader.pdf');
		PDFReader.openPDFViewer(f.resolve());
	});
	
	PDFReader.addEventListener('close', function() {
		// Catch the close event
		Ti.API.info('closed');
	});