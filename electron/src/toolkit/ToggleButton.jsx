import { Component } from 'react';
import io from '../utils/io';
import Button from '@material-ui/core/Button';

export default class ChannelsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  get isOn() {
    return this.state.value === 1;
  }
  render() {
    return (
      <Button onClick={this.handleChange.bind(this)} variant='fab' color={ this.isOn ? 'primary' : 'secondary'}>{ this.isOn ? 'On' : 'Off' }</Button>
    );
  }
  handleChange() {
    const value = this.isOn ? 0 : 1;
    this.setState({ value });
    io.emit('dispatch', { toggle: value });
  }
}
