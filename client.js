const net = require('net');
const name = 'RRK';
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  }).setEncoding('utf8'); 

  conn.on('connect', (data) => {
    console.log("<-- Successfully connected to game server -->");
    conn.write(`Name: ${name}`);
//    conn.write(`Move: down`);
  });

  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log("Server Wrote:");
    console.log(data);
  });
  return conn;
}

module.exports = { connect };

