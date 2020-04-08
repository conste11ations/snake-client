// Stores the active TCP connection object.
let connection;
const stdin = process.stdin;
stdin.setEncoding('utf8');

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
        stdin.resume();
        stdin.on('data', (input) => {
          console.log(`Received: ${input}`);
          handleUserInput(input);
        });
  return stdin;
}

const handleUserInput = (data) => {
      if (data === '\u0003') {
      stdin.setRawMode(false);
      process.exit();
      } else {
        if (data === 'w') {
          console.log('up');
          connection.write("Move: up");
        } else if (data === 'a') {
          console.log('left');
          connection.write("Move: left");
        } else if (data === 's') {
          console.log('down');
          connection.write("Move: down");
        } else if (data === 'd') {
          console.log('right');
          connection.write("Move: right");
        } else { //any other key sends a message
          console.log(`Received: ${data}`);
          connection.write("Say: XYZ");
        }
    }
}

module.exports = { setupInput };
