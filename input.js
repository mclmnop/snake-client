const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  } else {
    return DataCue;
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input);
  })
  return stdin;
}

module.exports = {setupInput};
