let connection;

const handleUserInput = function(input, conn) {
  //ctrl+c =quit
   if (input === '\u0003') {
    process.exit();
  } 
  //w = move up
  if (input === '\u0077') {
    conn.write("Move: up");
  }
  //a = move left
  if (input === '\u0061') { 
    conn.write("Move: left");
  }
  //s = move down
  if (input === '\u0073') {
    conn.write("Move: down");
  }
  //d = move right
  if (input === '\u0064') {
    conn.write("Move: right");
  }
  if (input === '\u0079') {
    conn.write("Say: yes!");
  }
  if (input === '\u006E') {
    conn.write("Say: watch this all day");
  }
  if (input === '\u0074') {
    conn.write("Onward!");
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input, conn);
  })
  return stdin;
}



module.exports = {setupInput};
