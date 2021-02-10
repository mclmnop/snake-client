const net = require('net');

/*
Establishes connection with the game server
*/

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
    }, () => {
      console.log('Successfully connected to server!')
    });
  //interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server message: ', data);
    
/*      */
  });
  const name = "Name: MC";
  conn.write(name);
/*   conn.write("Move: up");
  conn.write("Move: right");
  conn.write("Move: down");
  conn.write("Move: left"); */





  return conn;
};

module.exports = { connect };