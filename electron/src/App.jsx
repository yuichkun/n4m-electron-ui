import { Component } from 'react';
import IOContext from './IOContext.jsx';
import Button from '@material-ui/core/Button';

export default class App extends Component {
  render() {
    return (
      <IOContext.Consumer>
        {io => (
          <div>
            <h1>React</h1>
            <Button onClick={() => {
              debugger;
              io.emit('dispatch', { channels: 12 });
            }} variant='contained' color='primary'>Hello</Button>
          </div>
        )}
      </IOContext.Consumer>
    );
  }
}

