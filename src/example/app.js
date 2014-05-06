// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var PDFReader = require('com.josiah.pdfreader');
Ti.API.info("module is => " + PDFReader);

label.text = 'Click to open PDF viewer';
label.addEventListener('click', function(e) {
	var f = Ti.Filesystem.getFile('Reader.pdf');
	PDFReader.openPDFViewer(f.resolve());
});

PDFReader.addEventListener('close', function() {
	Ti.API.info('closed');
});
Ti.API.info("module exampleProp is => " + PDFReader.exampleProp);
PDFReader.exampleProp = "This is a test value";

