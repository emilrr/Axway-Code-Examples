var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('### Sample Test ###', function(t) {

  var name = 'TEST';
  t.deepEqual('test', name.toLowerCase(), 'string variable has toLowerCase method');
  t.deepEqual('E', name.charAt(1), 'string variable has charAt method');
  t.deepEqual('TES', name.substring(0, 3), 'string variable has substring method');

  t.notOk(false, 'false');
  t.notOk('', 'empty string');
  t.notOk(undefined, 'undefined');
  t.notOk(null, 'null');
  t.notOk(NaN, 'NaN');

  t.end();
  
});