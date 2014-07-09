
module('JSDocParser');

var jsdoc = new cxl.JSDocParser();

test('Initialization', function(a) {

	a.ok(jsdoc);

});

test('alias', function(a) {

	var r = jsdoc.parse('/** @alias */');
	a.ok(r.alias);
	a.equal(r.alias.type, null);

	r = jsdoc.parse('/** @alias jsdoc */');
	a.ok(r.alias);
	a.equal(r.alias.type, 'jsdoc');

});