jsdoc.js
========

A fast and simple event driven jsdoc3 parser. Works in the browser
and with node.js.


Usage
-----

Define your handler:

	var handler = {
	
		alias: function(tag)
		{
			// do something when it finds tag @alias
		},
	
		// Handle all other tags
		handle: function(tag)
		{
			/* tag will have the following properties
			tag = {
				tag: null,
				type: null,
				ident: null,
				text: null,
				start: 0,
				end: 0,
				meta: null
			}
			*/
		}	
		
	}
	
	var parser = new cxl.JSDocParser(handler);
	parser.parse(comment);
	
	// You can also pass data to the handler using the meta parameter.
	var obj = {};
	parser.parse(comment, obj);

If you just want to parse the jsdoc comment into an object you don't need
to pass a handler.

	var parser = new cxl.JSDocParser();
	var result = {};
	
	parser.parse(/** @alias Alias */, result);
	parser.parse(/** @param {Type} name Description */, result);
	
or
	var result = parser.parse("/** @alias Alias\n @param {Type} name Description */");
	
result will contain an object like:

	{
		alias: { type: 'Alias' },
		param: { type: 'Type', ident: 'name', text: 'Description' }
	}
	
For more information see the documentation at http://giancarlo.github.io/jsdoc.js/docs.
	
	