import { Component } from 'react';
import io from './utils/io';
import Button from '@material-ui/core/Button';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <Button onClick={() => {
          io.emit('dispatch', { channels: 12 });
        }} variant='contained' color='primary'>Hello</Button>
      </div>
    );
  }
}

