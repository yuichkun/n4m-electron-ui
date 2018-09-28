const MaxAPI = require('max-api');
const io = require('socket.io')();
const electron = require('electron');
const proc = require('child_process');
const child = proc.spawn(electron, ['./electron']);

io.on('connection', function (client) {
  MaxAPI.outlet('client!!!!!');
  client.on('test', (msg) => { 
    console.log('received', msg);
    MaxAPI.outlet(msg);
  });
});
io.listen(3000);

process.on('exit', () => {
  child.kill();
});


console.log('hello');

function hoge() {
  MaxAPI.outlet(Math.random());
}

// setInterval(hoge, 300);

