import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return (<h1>react is here</h1>);
  }
}

ReactDOM.render(<App />, document.getElementById('react-wrapper'))









// window.addEventListener('DOMContentLoaded', () => {
//   console.log('App Started');
//   const io = require('socket.io-client')('http://localhost:3000');
//   const socket = io.connect();
//   socket.on('connect', () => {
//     console.log("Connected to Max 8");
//   });

//   const button = document.getElementById('hoge');
//   button.onclick = () => {
//     console.log('clifcd');
//     io.emit('test', {
//       hoge: 223
//     });
//   }
// })
