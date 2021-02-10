const net = require('net');
const { connect } = require('./client');
console.log('Connecting...');
connect();

const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  } else {
    return DataCue;
  }
}

const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    callback(input);
  })
  return stdin;
}

setupInput(handleUserInput)