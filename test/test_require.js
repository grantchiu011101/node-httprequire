require('../httprequire');

var
	async = httprequire('http://pz.org.pt/~david/projects/node/tmp/async.js');
//	async = require('async');

async.each(
	[11,12,13],
	function(x,next){
		console.log("X: "+x);
		next();
	},
	function(err){
		console.log("end");
	}
);
