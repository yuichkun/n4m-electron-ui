import { Component } from 'react';
import io from '../utils/io';
import Slider from '@material-ui/lab/Slider';

export default class ChannelsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }
  render() {
    return (
      <Slider min={1} max={100} value={this.state.value} onChange={this.handleChange.bind(this)} />
    );
  }
  handleChange(e, value) {
    this.setState({value})
    io.emit('dispatch', { channels: value });
  }
}
